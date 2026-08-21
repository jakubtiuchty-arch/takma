'use server'

import { prisma } from '@/lib/db'
import { generateQuoteNumber, calculateQuoteTotals } from '@/lib/quotes'
import { sendEmail } from '@/lib/email'
import { buildQuoteEmail } from '@/lib/email-templates'
import { randomBytes } from 'crypto'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.takma.com.pl'

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
  catalogPrice?: number  // grosze — cena sklepowa z dnia wystawienia
  discountPercent?: number
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
  zebraServiceBanner?: boolean
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
      zebraServiceBanner: input.zebraServiceBanner ?? false,
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
          catalogPriceNetto: item.catalogPrice,
          discountPercent: item.discountPercent,
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

  // Token linku „zamów z oferty" — jeden na ofertę, nadawany przy pierwszej wysyłce,
  // żeby ponowne wysłanie tej samej oferty nie unieważniało linku z poprzedniego maila.
  let orderToken = quote.orderToken
  if (!orderToken) {
    orderToken = randomBytes(24).toString('base64url')
    await prisma.quote.update({ where: { id: quoteId }, data: { orderToken } })
  }
  const orderUrl = `${SITE_URL}/oferta/${encodeURIComponent(quote.quoteNumber)}/zamow?t=${orderToken}`

  const result = await sendEmail({
    to: quote.clientEmail,
    subject: `Oferta ${quote.quoteNumber} — TAKMA`,
    html: buildQuoteEmail({
      quoteNumber: quote.quoteNumber,
      clientContact: quote.clientContact,
      items: quote.items.map(item => ({
        position: item.position,
        productName: item.productName,
        partNumber: item.partNumber,
        quantity: item.quantity,
        priceNetto: item.priceNetto,
        totalNetto: item.totalNetto,
        catalogPriceNetto: item.catalogPriceNetto,
      })),
      subtotalNetto: quote.subtotalNetto,
      vatAmount: quote.vatAmount,
      totalBrutto: quote.totalBrutto,
      validUntil: quote.validUntil,
      paymentTerms: quote.paymentTerms,
      deliveryTerms: quote.deliveryTerms,
      notes: quote.notes,
      freebiesNote: quote.freebiesNote,
      orderUrl,
    }),
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
  zebraServiceBanner?: boolean
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
      zebraServiceBanner: input.zebraServiceBanner ?? false,
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
          catalogPriceNetto: item.catalogPrice,
          discountPercent: item.discountPercent,
        })),
      },
    },
  })

  revalidatePath('/admin/oferty')
  revalidatePath(`/admin/oferty/${rfqQuoteId}`)
  revalidatePath('/panel/oferty')
  redirect(`/admin/oferty/${rfqQuoteId}`)
}

export async function updateQuote(quoteId: string, input: CreateQuoteInput) {
  const existing = await prisma.quote.findUnique({ where: { id: quoteId } })
  if (!existing) throw new Error('Oferta nie znaleziona')

  const forbiddenStatuses = ['ACCEPTED', 'REQUESTED']
  if (forbiddenStatuses.includes(existing.status)) {
    throw new Error(`Nie można edytować oferty w statusie ${existing.status}`)
  }

  const totals = calculateQuoteTotals(input.items)

  const validUntil = new Date()
  validUntil.setDate(validUntil.getDate() + input.validDays)

  // Usuń stare pozycje i wstaw nowe
  await prisma.quoteItem.deleteMany({ where: { quoteId } })

  // Try to find existing customer by email
  let customerId: string | null = existing.customerId
  if (input.client.email && input.client.email !== existing.clientEmail) {
    const customer = await prisma.customer.findUnique({
      where: { email: input.client.email },
    })
    customerId = customer?.id ?? null
  }

  await prisma.quote.update({
    where: { id: quoteId },
    data: {
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
      zebraServiceBanner: input.zebraServiceBanner ?? false,
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
          catalogPriceNetto: item.catalogPrice,
          discountPercent: item.discountPercent,
        })),
      },
    },
  })

  revalidatePath('/admin/oferty')
  revalidatePath(`/admin/oferty/${quoteId}`)
  redirect(`/admin/oferty/${quoteId}`)
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
      zebraServiceBanner: original.zebraServiceBanner,
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
          catalogPriceNetto: item.catalogPriceNetto,
          discountPercent: item.discountPercent,
        })),
      },
    },
  })

  revalidatePath('/admin/oferty')
  redirect(`/admin/oferty/${copy.id}`)
}
