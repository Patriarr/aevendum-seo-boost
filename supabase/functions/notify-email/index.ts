import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const NOTIFY_EMAIL = "administracion@aevendum.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data } = await req.json();

    let subject = "";
    let html = "";

    if (type === "contact") {
      subject = `[Aevendum] Nueva solicitud de contacto de ${data.name}`;
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #c9a84c; padding-bottom: 10px;">Nueva solicitud de contacto</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Nombre:</td><td style="padding: 8px 0;">${escapeHtml(data.name)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 4px;">
            <strong style="color: #555;">Mensaje:</strong>
            <p style="margin-top: 8px; line-height: 1.6;">${escapeHtml(data.message)}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">Enviado desde aevendum.com</p>
        </div>
      `;
    } else if (type === "order") {
      const items = data.items
        .map(
          (item: any) =>
            `<tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(item.name)}</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">${item.total}€</td>
            </tr>`
        )
        .join("");

      subject = `[Aevendum] Nuevo pedido de ${data.name} — ${data.total}€`;
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #c9a84c; padding-bottom: 10px;">Nuevo pedido recibido</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Nombre:</td><td>${escapeHtml(data.name)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Teléfono:</td><td>${escapeHtml(data.phone)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Dirección:</td><td>${escapeHtml(data.address)}, ${escapeHtml(data.city)}, ${escapeHtml(data.zip)} ${escapeHtml(data.province)}</td></tr>
          </table>
          <h3 style="margin-top: 25px; color: #1a1a1a;">Productos</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f5f5f5;">
                <th style="padding: 8px; text-align: left;">Producto</th>
                <th style="padding: 8px; text-align: center;">Cant.</th>
                <th style="padding: 8px; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>${items}</tbody>
          </table>
          <div style="margin-top: 15px; padding: 15px; background: #f9f9f9; border-radius: 4px; text-align: right;">
            <p style="margin: 4px 0; color: #555;">Envío: ${data.shipping}</p>
            <p style="margin: 4px 0; font-size: 18px; font-weight: bold; color: #c9a84c;">Total: ${data.total}€</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">Enviado desde aevendum.com</p>
        </div>
      `;
    } else {
      return new Response(JSON.stringify({ error: "Invalid type" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send via Resend-compatible API or SMTP relay
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Aevendum <noreply@aevendum.com>",
          to: [NOTIFY_EMAIL],
          subject,
          html,
        }),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(`Email API error: ${JSON.stringify(result)}`);
      }
    } else {
      // Fallback: log the notification (no email provider configured)
      console.log("No email provider configured. Notification:", { subject, to: NOTIFY_EMAIL });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
