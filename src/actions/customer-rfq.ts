'use server'

import { prisma } from '@/lib/db'
import { generateQuoteNumber } from '@/lib/quotes'
import { sendEmail } from '@/lib/email'
import { getCustomerFromCookie } from '@/lib/customer-auth'
import { revalidatePath } from 'next/cache'

interface RfqItemInput {
  productId: string
  productName: string
  productSlug: string
  partNumber?: string
  quantity: number
  note: string
}

export async function submitRfq(data: {
  items: RfqItemInput[]
  message: string
}): Promise<{ error?: string; quoteId?: string }> {
  const session = await getCustomerFromCookie()
  if (!session) {
    return { error: 'Musisz być zalogowany, aby wysłać zapytanie.' }
  }

  if (!data.items || data.items.length === 0) {
    return { error: 'Dodaj przynajmniej jeden produkt do zapytania.' }
  }

  // Pobierz pełne dane klienta
  const customer = await prisma.customer.findUnique({
    where: { id: session.customerId },
  })

  if (!customer) {
    return { error: 'Nie znaleziono konta klienta.' }
  }

  const quoteNumber = await generateQuoteNumber()

  const validUntil = new Date()
  validUntil.setDate(validUntil.getDate() + 30)

  const quote = await prisma.quote.create({
    data: {
      quoteNumber,
      status: 'REQUESTED',
      customerId: customer.id,
      clientCompany: customer.company,
      clientNip: customer.nip,
      clientContact: `${customer.firstName} ${customer.lastName}`,
      clientEmail: customer.email,
      clientPhone: customer.phone,
      clientAddress: customer.address,
      validUntil,
      paymentTerms: '7 dni',
      deliveryTerms: '2-5 dni roboczych',
      notes: data.message || null,
      subtotalNetto: 0,
      vatAmount: 0,
      totalBrutto: 0,
      items: {
        create: data.items.map((item, index) => ({
          position: index + 1,
          source: 'customer-rfq',
          productId: item.productId,
          productName: item.productName,
          partNumber: item.partNumber,
          description: item.note || null,
          quantity: item.quantity,
          priceNetto: 0,
          totalNetto: 0,
        })),
      },
    },
    include: { items: true },
  })

  // Email do admina
  const itemsHtml = data.items
    .map(
      (item, i) => `
      <tr>
        <td style="padding:8px;border-bottom:1px solid #eee">${i + 1}</td>
        <td style="padding:8px;border-bottom:1px solid #eee">
          ${item.productName}
          ${item.partNumber ? `<br><small style="color:#666">PN: ${item.partNumber}</small>` : ''}
        </td>
        <td style="padding:8px;border-bottom:1px solid #eee;text-align:center">${item.quantity}</td>
        <td style="padding:8px;border-bottom:1px solid #eee">${item.note || '—'}</td>
      </tr>`
    )
    .join('')

  const adminEmail = process.env.ADMIN_EMAIL || 'takma@takma.com.pl'

  await sendEmail({
    to: adminEmail,
    subject: `[ZAPYTANIE] ${quoteNumber} — ${customer.company}`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#0891b2;color:white;padding:24px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;font-size:20px">Nowe zapytanie ofertowe</h1>
          <p style="margin:8px 0 0;opacity:0.9">Nr: <strong>${quoteNumber}</strong></p>
        </div>
        <div style="padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
          <div style="margin-bottom:16px;padding:12px;background:#f0f9ff;border-radius:8px">
            <p style="margin:0 0 4px"><strong>Klient:</strong> ${customer.company}</p>
            <p style="margin:0 0 4px"><strong>Kontakt:</strong> ${customer.firstName} ${customer.lastName}</p>
            <p style="margin:0 0 4px"><strong>Email:</strong> <a href="mailto:${customer.email}">${customer.email}</a></p>
            ${customer.phone ? `<p style="margin:0 0 4px"><strong>Telefon:</strong> ${customer.phone}</p>` : ''}
            ${customer.nip ? `<p style="margin:0"><strong>NIP:</strong> ${customer.nip}</p>` : ''}
          </div>

          <table style="width:100%;border-collapse:collapse;margin:16px 0">
            <thead><tr style="background:#f9fafb">
              <th style="padding:8px;text-align:left">Lp.</th>
              <th style="padding:8px;text-align:left">Produkt</th>
              <th style="padding:8px;text-align:center">Ilość</th>
              <th style="padding:8px;text-align:left">Uwagi</th>
            </tr></thead>
            <tbody>${itemsHtml}</tbody>
          </table>

          ${data.message ? `<div style="margin-top:12px;padding:12px;background:#fefce8;border-radius:8px"><strong>Wiadomość klienta:</strong><br>${data.message}</div>` : ''}

          <div style="margin-top:24px;text-align:center">
            <a href="https://takma.com.pl/admin/oferty/${quote.id}" style="display:inline-block;padding:12px 24px;background:#0891b2;color:white;text-decoration:none;border-radius:8px;font-weight:600">
              Otwórz zapytanie w panelu
            </a>
          </div>
        </div>
      </div>
    `,
  })

  revalidatePath('/panel/oferty')
  revalidatePath('/admin/oferty')

  return { quoteId: quote.id }
}
