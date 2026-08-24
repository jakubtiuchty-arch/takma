'use server'

import { p24Register, p24Configured } from '@/lib/p24'
import { createOrder } from '@/lib/orders'
import { applyQuotePricing, applyPromoPricing } from '@/lib/quote-pricing'

interface CheckoutItem {
  productId: string
  productName: string
  productSlug: string
  partNumber: string
  quantity: number
  priceNetto: number // PLN
  image?: string
  note?: string
  /** ustawiane przez link „zamów z oferty" — cena jest wtedy brana z bazy, nie stąd */
  quoteNumber?: string
  /** PN objęty promocją producencką — cena liczona z promos.ts, nie stąd */
  promoSku?: string
}

interface CustomerData {
  email: string
  firstName: string
  lastName: string
  company: string
  nip?: string
  phone: string
  address: string
  postalCode: string
  city: string
  shippingAddress?: string
}

export async function createCheckoutSession(
  items: CheckoutItem[],
  customer: CustomerData,
  shippingNetto: number,
  notes?: string
): Promise<{ url: string; orderNumber: string }> {
  if (!p24Configured()) {
    throw new Error('Płatności online nie są skonfigurowane. Skontaktuj się z obsługą.')
  }
  // Pomiary czasu — diagnoza wolnego redirectu do P24 (2026-06-11: ~20-40 s)
  const t0 = Date.now()

  // Ceny pozycji z oferty czytamy z bazy — nie ufamy temu, co przyszło z koszyka.
  items = applyPromoPricing(await applyQuotePricing(items))

  // 1. Create order in DB with status PENDING_PAYMENT
  const order = await createOrder({
    customer: {
      email: customer.email,
      firstName: customer.firstName,
      lastName: customer.lastName,
      company: customer.company,
      nip: customer.nip,
      phone: customer.phone,
      address: `${customer.address}, ${customer.postalCode} ${customer.city}`,
    },
    items: items.map(item => ({
      productId: item.productId,
      productName: item.productName,
      productSlug: item.productSlug,
      partNumber: item.partNumber,
      quantity: item.quantity,
      priceNetto: item.priceNetto,
      note: item.note,
    })),
    paymentMethod: 'ONLINE',
    shippingNetto,
    customerNotes: notes,
  })

  console.log(`[checkout] createOrder ${order.orderNumber}: ${Date.now() - t0}ms`)

  // 2. Rejestracja transakcji w Przelewy24.
  // Kwota = totalBrutto z zamówienia (grosze) — jedno źródło prawdy, bez
  // rozjazdów groszowych z zaokrąglania per pozycja.
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.takma.com.pl'
  const t1 = Date.now()
  const { redirectUrl } = await p24Register({
    sessionId: order.id, // cuid — unikalny i niezgadywalny (chroni stronę potwierdzenia)
    amount: order.totalBrutto,
    description: `Zamówienie ${order.orderNumber} — takma.com.pl`,
    email: customer.email,
    client: [customer.firstName, customer.lastName].filter(Boolean).join(' '),
    urlReturn: `${baseUrl}/zamowienie/potwierdzenie?order=${order.orderNumber}&sid=${order.id}`,
    urlStatus: `${baseUrl}/api/p24/webhook`,
  })

  console.log(`[checkout] p24Register ${order.orderNumber}: ${Date.now() - t1}ms`)

  // 3. Zapisz id sesji P24 (= order.id) — webhook i strona potwierdzenia dopasują po nim
  await (await import('@/lib/db')).prisma.order.update({
    where: { id: order.id },
    data: { p24SessionId: order.id },
  })
  console.log(`[checkout] total ${order.orderNumber}: ${Date.now() - t0}ms`)

  // 4. Return URL for client-side redirect
  return { url: redirectUrl, orderNumber: order.orderNumber }
}

export async function createProformaOrder(
  items: CheckoutItem[],
  customer: CustomerData,
  shippingNetto: number,
  notes?: string
): Promise<{ orderNumber: string }> {
  items = applyPromoPricing(await applyQuotePricing(items))

  // 1. Create order in DB with status AWAITING_PAYMENT
  const order = await createOrder({
    customer: {
      email: customer.email,
      firstName: customer.firstName,
      lastName: customer.lastName,
      company: customer.company,
      nip: customer.nip,
      phone: customer.phone,
      address: `${customer.address}, ${customer.postalCode} ${customer.city}`,
    },
    items: items.map(item => ({
      productId: item.productId,
      productName: item.productName,
      productSlug: item.productSlug,
      partNumber: item.partNumber,
      quantity: item.quantity,
      priceNetto: item.priceNetto,
      note: item.note,
    })),
    paymentMethod: 'PROFORMA',
    shippingNetto,
    customerNotes: notes,
  })

  return { orderNumber: order.orderNumber }
}
