import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  console.warn('RESEND_API_KEY not set — emails will be logged to console')
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

interface EmailOptions {
  to: string
  subject: string
  html: string
  attachments?: { filename: string; content: Buffer }[]
}

export async function sendEmail(options: EmailOptions): Promise<{ success: boolean; error?: string }> {
  if (!resend) {
    console.log('[Email Mock]', { to: options.to, subject: options.subject })
    return { success: true }
  }

  try {
    const { error } = await resend.emails.send({
      from: 'TAKMA <zamowienia@takma.com.pl>',
      to: options.to,
      subject: options.subject,
      html: options.html,
      attachments: options.attachments?.map(a => ({
        filename: a.filename,
        content: a.content,
      })),
    })

    if (error) {
      console.error('[Email Error]', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    console.error('[Email Exception]', err)
    return { success: false, error: String(err) }
  }
}

// Specific email functions
export async function sendOrderConfirmation(email: string, orderNumber: string, items: { name: string; quantity: number; priceNetto: number }[], totalBrutto: number) {
  const itemRows = items.map(i =>
    `<tr><td style="padding:8px;border-bottom:1px solid #eee">${i.name}</td><td style="padding:8px;border-bottom:1px solid #eee;text-align:center">${i.quantity}</td><td style="padding:8px;border-bottom:1px solid #eee;text-align:right">${i.priceNetto.toFixed(2)} zł</td></tr>`
  ).join('')

  return sendEmail({
    to: email,
    subject: `Potwierdzenie zamówienia ${orderNumber} — TAKMA`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#1e40af;color:white;padding:24px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;font-size:20px">Dziękujemy za zamówienie!</h1>
          <p style="margin:8px 0 0;opacity:0.9">Nr zamówienia: <strong>${orderNumber}</strong></p>
        </div>
        <div style="padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
          <table style="width:100%;border-collapse:collapse">
            <thead><tr style="background:#f9fafb"><th style="padding:8px;text-align:left">Produkt</th><th style="padding:8px;text-align:center">Ilość</th><th style="padding:8px;text-align:right">Cena netto</th></tr></thead>
            <tbody>${itemRows}</tbody>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f0f9ff;border-radius:8px;text-align:right">
            <strong style="font-size:18px">Razem brutto: ${totalBrutto.toFixed(2)} zł</strong>
          </div>
          <p style="margin-top:24px;color:#6b7280;font-size:14px">Twoje zamówienie jest w realizacji. Otrzymasz powiadomienie o wysyłce z numerem przesyłki.</p>
          <p style="color:#6b7280;font-size:14px">W razie pytań: <a href="mailto:takma@takma.com.pl" style="color:#2563eb">takma@takma.com.pl</a> | <a href="tel:+48607819688" style="color:#2563eb">+48 607 819 688</a></p>
        </div>
      </div>
    `,
  })
}

export async function sendProformaEmail(email: string, orderNumber: string, pdfBuffer: Buffer) {
  return sendEmail({
    to: email,
    subject: `Faktura pro forma ${orderNumber} — TAKMA`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#1e40af;color:white;padding:24px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;font-size:20px">Faktura pro forma</h1>
          <p style="margin:8px 0 0;opacity:0.9">Nr zamówienia: <strong>${orderNumber}</strong></p>
        </div>
        <div style="padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
          <p>W załączniku znajduje się faktura pro forma. Po zaksięgowaniu wpłaty Twoje zamówienie zostanie zrealizowane.</p>
          <div style="margin:20px 0;padding:16px;background:#fefce8;border:1px solid #fde68a;border-radius:8px">
            <strong>Dane do przelewu:</strong><br>
            TAKMA · NIP: 915-100-43-77<br>
            Nr konta: <strong>39 1020 5297 0000 1902 0283 3069</strong><br>
            Tytuł: <strong>${orderNumber}</strong>
          </div>
          <p style="color:#6b7280;font-size:14px">Pro forma ważna 7 dni od daty wystawienia.</p>
          <p style="color:#6b7280;font-size:14px">W razie pytań: <a href="mailto:takma@takma.com.pl" style="color:#2563eb">takma@takma.com.pl</a></p>
        </div>
      </div>
    `,
    attachments: [{ filename: `proforma-${orderNumber}.pdf`, content: pdfBuffer }],
  })
}

export async function sendShippingNotification(email: string, orderNumber: string, trackingNumber: string, carrierName: string) {
  return sendEmail({
    to: email,
    subject: `Zamówienie ${orderNumber} wysłane — TAKMA`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#059669;color:white;padding:24px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;font-size:20px">Twoje zamówienie jest w drodze!</h1>
          <p style="margin:8px 0 0;opacity:0.9">Nr zamówienia: <strong>${orderNumber}</strong></p>
        </div>
        <div style="padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
          <div style="margin:16px 0;padding:16px;background:#f0fdf4;border-radius:8px">
            <p style="margin:0"><strong>Kurier:</strong> ${carrierName}</p>
            <p style="margin:8px 0 0"><strong>Nr przesyłki:</strong> ${trackingNumber}</p>
          </div>
          <p style="color:#6b7280;font-size:14px">Przesyłkę możesz śledzić na stronie przewoźnika.</p>
        </div>
      </div>
    `,
  })
}

export async function sendAdminNotification(orderNumber: string, customerEmail: string, totalBrutto: number, paymentMethod: string) {
  const adminEmail = process.env.ADMIN_EMAIL || 'takma@takma.com.pl'
  return sendEmail({
    to: adminEmail,
    subject: `[NOWE ZAMÓWIENIE] ${orderNumber} — ${totalBrutto.toFixed(2)} zł brutto`,
    html: `
      <div style="font-family:Inter,sans-serif">
        <h2>Nowe zamówienie: ${orderNumber}</h2>
        <p><strong>Klient:</strong> ${customerEmail}</p>
        <p><strong>Kwota brutto:</strong> ${totalBrutto.toFixed(2)} zł</p>
        <p><strong>Metoda płatności:</strong> ${paymentMethod === 'ONLINE' ? 'Stripe (online)' : 'Pro forma (przelew)'}</p>
        <p><a href="https://takma.com.pl/admin/zamowienia/${orderNumber}">Otwórz w panelu</a></p>
      </div>
    `,
  })
}
