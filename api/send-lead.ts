import type { VercelRequest, VercelResponse } from '@vercel/node';

/* ───────────────────────────────────────────────────────────
   /api/send-lead — envía por correo cada solicitud del formulario
   usando Resend. Corre en el servidor de Vercel: la clave nunca
   llega al navegador.

   Variables de entorno (Vercel → Settings → Environment Variables):
     RESEND_API_KEY   (obligatoria)  clave de Resend
     LEAD_TO_EMAIL    (opcional)     correo que recibe las solicitudes
     LEAD_FROM_EMAIL  (opcional)     remitente; sin dominio verificado en
                                     Resend debe ser onboarding@resend.dev
   ─────────────────────────────────────────────────────────── */

const DEFAULT_TO = 'dra.taverasdlama@gmail.com';
const DEFAULT_FROM = 'Centro Odontológico Taveras de Lama <onboarding@resend.dev>';

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:10px 14px;border-bottom:1px solid #e6ebf2;font-family:Arial,sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#6b7a90;white-space:nowrap">${label}</td>
    <td style="padding:10px 14px;border-bottom:1px solid #e6ebf2;font-family:Arial,sans-serif;font-size:15px;color:#0a2540">${escapeHtml(value || '—')}</td>
  </tr>`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Método no permitido' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ ok: false, error: 'Falta RESEND_API_KEY en Vercel' });
  }

  const body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) ?? {};
  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const phone = String(body.phone ?? '').trim();
  const service = String(body.service ?? '').trim();
  const date = String(body.date ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (!name || !email || !phone) {
    return res.status(400).json({ ok: false, error: 'Faltan datos obligatorios' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Correo inválido' });
  }

  const to = process.env.LEAD_TO_EMAIL || DEFAULT_TO;
  const from = process.env.LEAD_FROM_EMAIL || DEFAULT_FROM;

  const html = `
  <div style="background:#f4f7fb;padding:32px 16px">
    <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e6ebf2">
      <div style="background:linear-gradient(135deg,#00C6FF,#0072FF);padding:26px 28px">
        <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.85)">Nueva solicitud de cita</p>
        <h1 style="margin:0;font-family:Arial,sans-serif;font-size:22px;color:#fff">${escapeHtml(name)}</h1>
      </div>
      <table style="width:100%;border-collapse:collapse">
        ${row('Nombre', name)}
        ${row('Correo', email)}
        ${row('Teléfono', phone)}
        ${row('Servicio', service)}
        ${row('Fecha preferida', date)}
        ${row('Mensaje', message)}
      </table>
      <div style="padding:20px 28px;font-family:Arial,sans-serif;font-size:13px;color:#6b7a90;line-height:1.6">
        Responde a este correo para contactar directamente al paciente.<br>
        La solicitud también quedó guardada en el panel de administración del sitio.
      </div>
    </div>
  </div>`;

  const text = [
    'Nueva solicitud de cita — Centro Odontológico Taveras de Lama',
    '',
    `Nombre: ${name}`,
    `Correo: ${email}`,
    `Teléfono: ${phone}`,
    `Servicio: ${service || '—'}`,
    `Fecha preferida: ${date || '—'}`,
    `Mensaje: ${message || '—'}`,
  ].join('\n');

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Nueva solicitud de cita: ${name}${service ? ` · ${service}` : ''}`,
      html,
      text,
    }),
  });

  if (!r.ok) {
    const detail = await r.text().catch(() => '');
    console.error('Resend error', r.status, detail);
    return res.status(502).json({ ok: false, error: 'No se pudo enviar el correo' });
  }

  return res.status(200).json({ ok: true });
}
