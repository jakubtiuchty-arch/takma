'use server'

import { prisma } from '@/lib/db'
import { generateQuoteNumber, calculateQuoteTotals } from '@/lib/quotes'
import { sendEmail } from '@/lib/email'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

interface QuoteItemInput {
  source: string
  productId?: string
  productName: string
  partNumber?: string
  description?: string
  quantity: number
  purchasePrice?: number // grosze
  priceNetto: number     // grosze
  marginPercent?: number
}

interface CreateQuoteInput {
  client: {
    company: string
    nip?: string
    contact?: string
    email?: string
    phone?: string
    address?: string
  }
  items: QuoteItemInput[]
  validDays: number
  paymentTerms: string
  deliveryTerms: string
  notes?: string
  internalNotes?: string
  freebiesNote?: string
}

export async function createQuote(input: CreateQuoteInput) {
  const quoteNumber = await generateQuoteNumber()
  const totals = calculateQuoteTotals(input.items)

  const validUntil = new Date()
  validUntil.setDate(validUntil.getDate() + input.validDays)

  // Try to find existing customer by email
  let customerId: string | null = null
  if (input.client.email) {
    const existing = await prisma.customer.findUnique({
      where: { email: input.client.email },
    })
    if (existing) customerId = existing.id
  }

  const quote = await prisma.quote.create({
    data: {
      quoteNumber,
      status: 'DRAFT',
      customerId,
      clientCompany: input.client.company,
      clientNip: input.client.nip,
      clientContact: input.client.contact,
      clientEmail: input.client.email,
      clientPhone: input.client.phone,
      clientAddress: input.client.address,
      validUntil,
      paymentTerms: input.paymentTerms,
      deliveryTerms: input.deliveryTerms,
      notes: input.notes,
      internalNotes: input.internalNotes,
      freebiesNote: input.freebiesNote,
      subtotalNetto: totals.subtotalNetto,
      vatAmount: totals.vatAmount,
      totalBrutto: totals.totalBrutto,
      items: {
        create: input.items.map((item, index) => ({
          position: index + 1,
          source: item.source,
          productId: item.productId,
          productName: item.productName,
          partNumber: item.partNumber,
          description: item.description,
          quantity: item.quantity,
          purchasePrice: item.purchasePrice,
          priceNetto: item.priceNetto,
          totalNetto: item.priceNetto * item.quantity,
          marginPercent: item.marginPercent,
        })),
      },
    },
    include: { items: true },
  })

  revalidatePath('/admin/oferty')
  redirect(`/admin/oferty/${quote.id}`)
}

export async function updateQuoteStatus(quoteId: string, status: 'REQUESTED' | 'DRAFT' | 'SENT' | 'ACCEPTED' | 'EXPIRED' | 'REJECTED') {
  await prisma.quote.update({
    where: { id: quoteId },
    data: {
      status,
      ...(status === 'SENT' && { sentAt: new Date() }),
      ...(status === 'ACCEPTED' && { acceptedAt: new Date() }),
    },
  })
  revalidatePath('/admin/oferty')
  revalidatePath(`/admin/oferty/${quoteId}`)
  return { success: true }
}

export async function sendQuoteEmail(quoteId: string) {
  const quote = await prisma.quote.findUnique({
    where: { id: quoteId },
    include: { items: true },
  })

  if (!quote || !quote.clientEmail) {
    return { success: false, error: 'Brak adresu email klienta' }
  }

  const itemsHtml = quote.items
    .sort((a, b) => a.position - b.position)
    .map(
      (item, i) => `
      <tr>
        <td style="padding:8px;border-bottom:1px solid #eee">${i + 1}</td>
        <td style="padding:8px;border-bottom:1px solid #eee">
          ${item.productName}
          ${item.partNumber ? `<br><small style="color:#666">PN: ${item.partNumber}</small>` : ''}
        </td>
        <td style="padding:8px;border-bottom:1px solid #eee;text-align:center">${item.quantity}</td>
        <td style="padding:8px;border-bottom:1px solid #eee;text-align:right">${(item.priceNetto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł</td>
        <td style="padding:8px;border-bottom:1px solid #eee;text-align:right">${(item.totalNetto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł</td>
      </tr>`
    )
    .join('')

  const result = await sendEmail({
    to: quote.clientEmail,
    subject: `Oferta ${quote.quoteNumber} — TAKMA`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#1e40af;color:white;padding:24px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;font-size:20px">Oferta handlowa</h1>
          <p style="margin:8px 0 0;opacity:0.9">Nr: <strong>${quote.quoteNumber}</strong></p>
        </div>
        <div style="padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
          <p>Dzień dobry${quote.clientContact ? `, ${quote.clientContact}` : ''},</p>
          <p>W załączeniu przesyłamy ofertę na poniższe produkty:</p>
          <table style="width:100%;border-collapse:collapse;margin:16px 0">
            <thead><tr style="background:#f9fafb">
              <th style="padding:8px;text-align:left">Lp.</th>
              <th style="padding:8px;text-align:left">Produkt</th>
              <th style="padding:8px;text-align:center">Ilość</th>
              <th style="padding:8px;text-align:right">Cena netto</th>
              <th style="padding:8px;text-align:right">Razem netto</th>
            </tr></thead>
            <tbody>${itemsHtml}</tbody>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f0f9ff;border-radius:8px;text-align:right">
            <div style="margin-bottom:4px"><span style="color:#666">Netto:</span> <strong>${(quote.subtotalNetto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł</strong></div>
            <div style="margin-bottom:4px"><span style="color:#666">VAT 23%:</span> <strong>${(quote.vatAmount / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł</strong></div>
            <div style="font-size:18px"><strong>Brutto: ${(quote.totalBrutto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł</strong></div>
          </div>
          ${quote.freebiesNote ? `<div style="margin-top:12px;padding:12px;background:#f0fdf4;border-radius:8px;color:#166534"><strong>Gratis:</strong> ${quote.freebiesNote}</div>` : ''}
          <div style="margin-top:16px;font-size:14px;color:#666">
            <p><strong>Ważność oferty:</strong> do ${quote.validUntil.toLocaleDateString('pl-PL')}</p>
            <p><strong>Warunki płatności:</strong> ${quote.paymentTerms}</p>
            <p><strong>Termin dostawy:</strong> ${quote.deliveryTerms}</p>
          </div>
          ${quote.notes ? `<div style="margin-top:12px;padding:12px;background:#fefce8;border-radius:8px;font-size:14px;color:#78350f">${quote.notes}</div>` : ''}
          <p style="margin-top:24px;color:#6b7280;font-size:14px">W razie pytań: <a href="mailto:takma@takma.com.pl" style="color:#2563eb">takma@takma.com.pl</a> | <a href="tel:+48607819688" style="color:#2563eb">+48 607 819 688</a></p>
        </div>
      </div>
    `,
  })

  if (result.success) {
    await prisma.quote.update({
      where: { id: quoteId },
      data: { status: 'SENT', sentAt: new Date() },
    })
    revalidatePath('/admin/oferty')
    revalidatePath(`/admin/oferty/${quoteId}`)
  }

  return result
}

export async function priceRfqQuote(rfqQuoteId: string, input: {
  items: QuoteItemInput[]
  validDays: number
  paymentTerms: string
  deliveryTerms: string
  notes?: string
  internalNotes?: string
  freebiesNote?: string
}) {
  const existing = await prisma.quote.findUnique({ where: { id: rfqQuoteId } })
  if (!existing) throw new Error('Zapytanie nie znalezione')

  const totals = calculateQuoteTotals(input.items)

  const validUntil = new Date()
  validUntil.setDate(validUntil.getDate() + input.validDays)

  // Usuń stare pozycje (z zerami) i wstaw nowe z cenami
  await prisma.quoteItem.deleteMany({ where: { quoteId: rfqQuoteId } })

  await prisma.quote.update({
    where: { id: rfqQuoteId },
    data: {
      status: 'DRAFT',
      validUntil,
      paymentTerms: input.paymentTerms,
      deliveryTerms: input.deliveryTerms,
      notes: input.notes,
      internalNotes: input.internalNotes,
      freebiesNote: input.freebiesNote,
      subtotalNetto: totals.subtotalNetto,
      vatAmount: totals.vatAmount,
      totalBrutto: totals.totalBrutto,
      items: {
        create: input.items.map((item, index) => ({
          position: index + 1,
          source: item.source,
          productId: item.productId,
          productName: item.productName,
          partNumber: item.partNumber,
          description: item.description,
          quantity: item.quantity,
          purchasePrice: item.purchasePrice,
          priceNetto: item.priceNetto,
          totalNetto: item.priceNetto * item.quantity,
          marginPercent: item.marginPercent,
        })),
      },
    },
  })

  revalidatePath('/admin/oferty')
  revalidatePath(`/admin/oferty/${rfqQuoteId}`)
  revalidatePath('/panel/oferty')
  redirect(`/admin/oferty/${rfqQuoteId}`)
}

export async function duplicateQuote(quoteId: string) {
  const original = await prisma.quote.findUnique({
    where: { id: quoteId },
    include: { items: true },
  })

  if (!original) return { success: false, error: 'Oferta nie znaleziona' }

  const quoteNumber = await generateQuoteNumber()
  const validUntil = new Date()
  validUntil.setDate(validUntil.getDate() + 14)

  const copy = await prisma.quote.create({
    data: {
      quoteNumber,
      status: 'DRAFT',
      customerId: original.customerId,
      clientCompany: original.clientCompany,
      clientNip: original.clientNip,
      clientContact: original.clientContact,
      clientEmail: original.clientEmail,
      clientPhone: original.clientPhone,
      clientAddress: original.clientAddress,
      validUntil,
      paymentTerms: original.paymentTerms,
      deliveryTerms: original.deliveryTerms,
      notes: original.notes,
      internalNotes: original.internalNotes,
      freebiesNote: original.freebiesNote,
      subtotalNetto: original.subtotalNetto,
      vatAmount: original.vatAmount,
      totalBrutto: original.totalBrutto,
      items: {
        create: original.items.map((item) => ({
          position: item.position,
          source: item.source,
          productId: item.productId,
          productName: item.productName,
          partNumber: item.partNumber,
          description: item.description,
          quantity: item.quantity,
          purchasePrice: item.purchasePrice,
          priceNetto: item.priceNetto,
          totalNetto: item.totalNetto,
          marginPercent: item.marginPercent,
        })),
      },
    },
  })

  revalidatePath('/admin/oferty')
  redirect(`/admin/oferty/${copy.id}`)
}
