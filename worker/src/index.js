// ISPL → Resend (HTTP API). Sin SMTP, sin deps.
// Secretos (wrangler secret put, NUNCA en el repo):
//   RESEND_API_KEY  → key `re_...` (una sola vez, solo en Cloudflare)
//   DEST_EMAIL      → ispylogistica@gmail.com
const SITE_ORIGIN = "https://diegogimenez04.github.io";

const ALLOWED_ORIGINS = new Set([SITE_ORIGIN]);

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

// "onboarding@resend.dev" = remitente de prueba que Resend da sin verificar dominio.
// Hasta que verifiques tu dominio, Resend solo deja enviar a TU correo (perfecto aquí).
const FROM_ADDR = "ISPL <onboarding@resend.dev>";

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

    if (!env.RESEND_API_KEY || !env.DEST_EMAIL) {
      return json({ error: "server_misconfigured" }, 500, headers);
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDR,
        to: [env.DEST_EMAIL],
        reply_to: email,
        subject: `[ISPL] Mensaje de ${name}`,
        text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
      }),
    });

    if (res.ok) {
      return json({ ok: true }, 200, headers);
    }

    let info;
    try {
      info = await res.json();
    } catch (_e) {
      info = null;
    }
    const detail = info && info.message ? String(info.message).slice(0, 120) : "resend_failed";
    return json({ error: "smtp_failed", detail }, 502, headers);
  },
};
