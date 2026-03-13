import { Resend } from 'resend'
import {
  buildOrderConfirmationEmail,
  buildProformaEmail,
  buildShippingNotificationEmail,
  buildAdminOrderNotificationEmail,
  buildRepairSubmittedEmail,
  buildRepairSubmittedAdminEmail,
} from './email-templates'

// Lazy-init Resend client — read env at call-time, not module-load time
// Fixes Vercel cold-start issue where env vars may not be available at top-level
let _resend: Resend | null = null
function getResend(): Resend | null {
  if (_resend) return _resend
  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.warn('[Email] RESEND_API_KEY not set — emails will be logged to console')
    return null
  }
  _resend = new Resend(key)
  return _resend
}

interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
  attachments?: { filename: string; content: Buffer }[]
}

export async function sendEmail(options: EmailOptions): Promise<{ success: boolean; error?: string }> {
  const resend = getResend()
  if (!resend) {
    console.log('[Email Mock] No RESEND_API_KEY —', { to: options.to, subject: options.subject })
    return { success: false, error: 'RESEND_API_KEY not configured' }
  }

  try {
    const { error } = await resend.emails.send({
      from: options.from || 'TAKMA <takma@takma.com.pl>',
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
export async function sendOrderConfirmation(data: {
  orderNumber: string
  items: { name: string; partNumber?: string; quantity: number; priceNetto: number; totalNetto: number }[]
  customer: {
    firstName: string
    lastName: string
    company: string
    nip?: string | null
    phone?: string | null
    email: string
    address?: string | null
    shippingAddress?: string | null
  }
  subtotalNetto: number
  vatAmount: number
  shippingNetto: number
  totalBrutto: number
  paymentMethod: string
  customerNotes?: string | null
}) {
  return sendEmail({
    to: data.customer.email,
    from: 'TAKMA Zamówienia <zamowienia@takma.com.pl>',
    subject: `Potwierdzenie zamówienia ${data.orderNumber} — TAKMA`,
    html: buildOrderConfirmationEmail(data),
  })
}

export async function sendProformaEmail(email: string, orderNumber: string, pdfBuffer: Buffer) {
  return sendEmail({
    to: email,
    from: 'TAKMA Zamówienia <zamowienia@takma.com.pl>',
    subject: `Faktura pro forma ${orderNumber} — TAKMA`,
    html: buildProformaEmail({ orderNumber }),
    attachments: [{ filename: `proforma-${orderNumber}.pdf`, content: pdfBuffer }],
  })
}

export async function sendShippingNotification(email: string, orderNumber: string, trackingNumber: string, carrierName: string) {
  return sendEmail({
    to: email,
    from: 'TAKMA Zamówienia <zamowienia@takma.com.pl>',
    subject: `Zamówienie ${orderNumber} wysłane — TAKMA`,
    html: buildShippingNotificationEmail({ orderNumber, trackingNumber, carrierName }),
  })
}

export async function sendAdminNotification(data: {
  orderNumber: string
  customer: {
    firstName: string
    lastName: string
    company: string
    nip?: string | null
    phone?: string | null
    email: string
    address?: string | null
    shippingAddress?: string | null
  }
  items: { name: string; partNumber?: string; quantity: number; priceNetto: number; totalNetto: number }[]
  subtotalNetto: number
  vatAmount: number
  shippingNetto: number
  totalBrutto: number
  paymentMethod: string
  customerNotes?: string | null
}) {
  const adminEmail = process.env.ADMIN_EMAIL || 'jakub.tiuchty@takma.com.pl'
  return sendEmail({
    to: adminEmail,
    from: 'TAKMA Zamówienia <zamowienia@takma.com.pl>',
    subject: `[NOWE ZAMÓWIENIE] ${data.orderNumber} — ${data.totalBrutto.toFixed(2)} zł brutto`,
    html: buildAdminOrderNotificationEmail(data),
  })
}

// Repair submitted — confirmation to customer
export async function sendRepairSubmittedEmail(data: {
  to: string
  customerName: string
  repairId: string
  repairNumber: string
  deviceType: string
  deviceModel: string
  problemDescription: string
  isWarranty: boolean
}) {
  return sendEmail({
    to: data.to,
    from: 'TAKMA Serwis <serwis@takma.com.pl>',
    subject: `Zgłoszenie naprawy przyjęte — ${data.deviceModel} #${data.repairNumber}`,
    html: buildRepairSubmittedEmail({
      customerName: data.customerName,
      repairNumber: data.repairNumber,
      deviceType: data.deviceType,
      deviceModel: data.deviceModel,
      problemDescription: data.problemDescription,
      isWarranty: data.isWarranty,
    }),
  })
}

// Repair submitted — admin notification
export async function sendRepairSubmittedAdminEmail(data: {
  to: string[]
  repairId: string
  repairNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  deviceType: string
  deviceModel: string
  problemDescription: string
  isWarranty: boolean
  priority: string
}) {
  const results = await Promise.allSettled(
    data.to.map(email =>
      sendEmail({
        to: email,
        from: 'TAKMA Serwis <serwis@takma.com.pl>',
        subject: `[TAKMA] Nowe zgłoszenie naprawy #${data.repairNumber} — ${data.deviceModel}`,
        html: buildRepairSubmittedAdminEmail({
          repairNumber: data.repairNumber,
          customerName: data.customerName,
          customerEmail: data.customerEmail,
          customerPhone: data.customerPhone,
          deviceType: data.deviceType,
          deviceModel: data.deviceModel,
          problemDescription: data.problemDescription,
          isWarranty: data.isWarranty,
          priority: data.priority,
        }),
      })
    )
  )
  return results
}
