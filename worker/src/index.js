import nodemailer from "nodemailer";

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

function json(data, status, headers) {
  return new Response(JSON.stringify(data), {
    status: status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers },
  });
}

function clean(value) {
  return String(value == null ? "" : value).trim().replace(/[\r\n]/g, " ").slice(0, 2000);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
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

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });

    try {
      await transporter.sendMail({
        from: `"${name} (ISPL)" <${env.SMTP_USER}>`,
        to: env.DEST_EMAIL,
        subject: `[ISPL] Mensaje de ${name}`,
        text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
        replyTo: email,
      });
      return json({ ok: true }, 200, headers);
    } catch (e) {
      return json({ error: "smtp_failed" }, 502, headers);
    }
  },
};
