import { Resend } from 'resend'
import {
  buildOrderConfirmationEmail,
  buildProformaEmail,
  buildShippingNotificationEmail,
  buildAdminOrderNotificationEmail,
} from './email-templates'

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
  return sendEmail({
    to: email,
    subject: `Potwierdzenie zamówienia ${orderNumber} — TAKMA`,
    html: buildOrderConfirmationEmail({ orderNumber, items, totalBrutto }),
  })
}

export async function sendProformaEmail(email: string, orderNumber: string, pdfBuffer: Buffer) {
  return sendEmail({
    to: email,
    subject: `Faktura pro forma ${orderNumber} — TAKMA`,
    html: buildProformaEmail({ orderNumber }),
    attachments: [{ filename: `proforma-${orderNumber}.pdf`, content: pdfBuffer }],
  })
}

export async function sendShippingNotification(email: string, orderNumber: string, trackingNumber: string, carrierName: string) {
  return sendEmail({
    to: email,
    subject: `Zamówienie ${orderNumber} wysłane — TAKMA`,
    html: buildShippingNotificationEmail({ orderNumber, trackingNumber, carrierName }),
  })
}

export async function sendAdminNotification(orderNumber: string, customerEmail: string, totalBrutto: number, paymentMethod: string) {
  const adminEmail = process.env.ADMIN_EMAIL || 'takma@takma.com.pl'
  return sendEmail({
    to: adminEmail,
    subject: `[NOWE ZAMÓWIENIE] ${orderNumber} — ${totalBrutto.toFixed(2)} zł brutto`,
    html: buildAdminOrderNotificationEmail({ orderNumber, customerEmail, totalBrutto, paymentMethod }),
  })
}
