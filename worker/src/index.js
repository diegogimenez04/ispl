// Cliente SMTP mínimo para ispl_main (sin dependencias externas).
// Habla Gmail SMTP vía STARTTLS (587) usando la API connect() de Workers.
// Las credenciales vienen SOLO por env secrets (SMTP_USER, SMTP_PASS, DEST_EMAIL).

const SMTP_HOST = "smtp.gmail.com";
const SMTP_PORT = 587;
const SITE_ORIGIN = "https://diegogimenez04.github.io";

const ALLOWED_ORIGINS = new Set([
  SITE_ORIGIN,
  "http://localhost:8080",
]);

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(data, status, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers },
  });
}

function clean(value) {
  return String(value == null ? "" : value)
    .trim()
    .replace(/[\r\n]/g, " ")
    .slice(0, 2000);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Escape "dot-stuffing": una línea que empiece con "." se duplica el punto.
function dotStuff(text) {
  return text.replace(/^\./gm, "..");
}

function toBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}

async function smtpConnect(env) {
  const socket = connect({
    hostname: SMTP_HOST,
    port: SMTP_PORT,
    secureTransport: "starttls",
  });
  const reader = socket.readable.getReader();
  const writer = socket.writable.getWriter();
  let pending = "";

  async function readLine() {
    while (true) {
      const idx = pending.indexOf("\n");
      if (idx !== -1) {
        const line = pending.slice(0, idx).replace(/\r$/, "");
        pending = pending.slice(idx + 1);
        return line;
      }
      const { value, done } = await reader.read();
      if (done) throw new Error("socket_closed");
      pending += new TextDecoder().decode(value);
    }
  }

  async function command(text, expect) {
    await writer.write(new TextEncoder().encode(text + "\r\n"));
    let line = await readLine();
    const code = parseInt(line.slice(0, 3), 10);
    // drena líneas multi-respuesta (250- / 354- ...)
    while (line.length > 3 && line[3] === "-") line = await readLine();
    if (code !== expect) throw new Error("smtp_" + line);
    return line;
  }

  async function close() {
    try { await writer.close(); } catch (_e) {}
    try { reader.releaseLock(); } catch (_e) {}
    try { socket.close(); } catch (_e) {}
  }

  async function sendMail({ name, email, message }) {
    const fromUser = env.SMTP_USER;
    const dest = env.DEST_EMAIL;
    const subject = `[ISPL] Mensaje de ${name}`;
    const body =
      `Nombre: ${name}\n` +
      `Correo: ${email}\n` +
      `\n${message}\n`;
    const raw =
      `From: "${name}" <${fromUser}>\r\n` +
      `To: <${dest}>\r\n` +
      `Reply-To: <${email}>\r\n` +
      `Subject: ${subject}\r\n` +
      `MIME-Version: 1.0\r\n` +
      `Content-Type: text/plain; charset=utf-8\r\n` +
      `Content-Transfer-Encoding: 8bit\r\n` +
      `\r\n` +
      dotStuff(body);

    try {
      const greeting = await readLine(); // 220 saludo
      if (parseInt(greeting.slice(0, 3), 10) !== 220) throw new Error("greeting");

      await command("EHLO ispl.workers.dev", 250-placeholder);
      await command("STARTTLS", 220);
      await command("EHLO ispl.workers.dev", 250-placeholder);
      await command(`AUTH PLAIN ${toBase64("\u0000" + fromUser + "\u0000" + env.SMTP_PASS)}`, 235);
      await command(`MAIL FROM:<${fromUser}>`, 250);
      await command(`RCPT TO:<${dest}>`, 250);
      await command("DATA", 354);
      await writer.write(new TextEncoder().encode(raw + "\r\n.\r\n"));
      await readLine(); // 250 accepted
      await command("QUIT", 221);
      await close();
    } catch (err) {
      await close();
      throw err;
    }
  }

  return { sendMail };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowed = ALLOWED_ORIGINS.has(origin) ? origin : SITE_ORIGIN;
    const headers = corsHeaders(allowed);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    const url = new URL(request.url);
    if (request.method !== "POST" || url.pathname !== "/api/send") {
      return json({ error: "not_found" }, 404, headers);
    }

    if (!ALLOWED_ORIGINS.has(origin)) {
      return json({ error: "forbidden" }, 403, headers);
    }

    let payload;
    try {
      payload = await request.json();
    } catch (_e) {
      return json({ error: "bad_json" }, 400, headers);
    }

    const name = clean(payload.name);
    const email = clean(payload.email);
    const message = clean(payload.message);

    if (!name || !email || !message || !isValidEmail(email)) {
      return json({ error: "invalid_input" }, 400, headers);
    }

    if (!env.SMTP_USER || !env.SMTP_PASS || !env.DEST_EMAIL) {
      return json({ error: "server_misconfigured" }, 500, headers);
    }

    const client = await smtpConnect(env).catch(() => null);
    if (!client) {
      return json({ error: "connect_failed" }, 502, headers);
    }

    try {
      await client.sendMail({ name, email, message });
      return json({ ok: true }, 200, headers);
    } catch (err) {
      return json({ error: "smtp_failed" }, 502, headers);
    }
  },
};
