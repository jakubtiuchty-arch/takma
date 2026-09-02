'use server'

import { prisma } from '@/lib/db'
import { generateQuoteNumber } from '@/lib/quotes'
import { sendEmail, adminRecipients } from '@/lib/email'
import { buildAdminRfqEmail } from '@/lib/email-templates'
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

  const adminEmails = adminRecipients()

  await sendEmail({
    to: adminEmails,
    subject: `[ZAPYTANIE] ${quoteNumber} — ${customer.company}`,
    html: buildAdminRfqEmail({
      quoteNumber,
      quoteId: quote.id,
      customer: {
        company: customer.company,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        phone: customer.phone,
        nip: customer.nip,
      },
      items: data.items.map(item => ({
        productName: item.productName,
        partNumber: item.partNumber,
        quantity: item.quantity,
        note: item.note,
      })),
      message: data.message,
    }),
  })

  revalidatePath('/panel/oferty')
  revalidatePath('/admin/oferty')

  return { quoteId: quote.id }
}
