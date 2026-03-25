'use server'

import { stripe, toStripeAmount } from '@/lib/stripe'
import { createOrder } from '@/lib/orders'

interface CheckoutItem {
  productId: string
  productName: string
  productSlug: string
  partNumber: string
  quantity: number
  priceNetto: number // PLN
  image?: string
  note?: string
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
  if (!stripe) {
    throw new Error('Stripe nie jest skonfigurowany. Skontaktuj się z obsługą.')
  }

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

  // 2. Build Stripe line items — ceny BRUTTO (netto + 23% VAT)
  // Stripe pobiera kwotę brutto od klienta. VAT rozliczamy po naszej stronie (faktura).
  const VAT_RATE = 1.23

  const lineItems: Array<{
    price_data: {
      currency: string
      product_data: { name: string; metadata?: Record<string, string>; images?: string[] }
      unit_amount: number
    }
    quantity: number
  }> = items.map(item => ({
    price_data: {
      currency: 'pln',
      product_data: {
        name: item.productName,
        metadata: { partNumber: item.partNumber, productId: item.productId },
        ...(item.image && { images: [`https://www.takma.com.pl${item.image}`] }),
      },
      unit_amount: toStripeAmount(item.priceNetto * VAT_RATE),
    },
    quantity: item.quantity,
  }))

  // Add shipping line item (brutto)
  if (shippingNetto > 0) {
    lineItems.push({
      price_data: {
        currency: 'pln',
        product_data: { name: 'Dostawa kurierska' },
        unit_amount: toStripeAmount(shippingNetto * VAT_RATE),
      },
      quantity: 1,
    })
  }

  // 3. Create Stripe Checkout Session
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card', 'p24', 'blik'],
    line_items: lineItems,
    currency: 'pln',
    locale: 'pl',

    // Collect tax ID (NIP)
    tax_id_collection: { enabled: true },

    // Customer info
    customer_email: customer.email,

    // Metadata to link back to our order
    metadata: {
      orderId: order.id,
      orderNumber: order.orderNumber,
    },

    // Redirects
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.takma.com.pl'}/zamowienie/potwierdzenie?order=${order.orderNumber}&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.takma.com.pl'}/zamowienie?cancelled=true`,

    // Session expires in 30 minutes
    expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
  })

  // 4. Save Stripe session ID
  await (await import('@/lib/db')).prisma.order.update({
    where: { id: order.id },
    data: { stripeSessionId: session.id },
  })

  // 5. Return URL for client-side redirect
  return { url: session.url!, orderNumber: order.orderNumber }
}

export async function createProformaOrder(
  items: CheckoutItem[],
  customer: CustomerData,
  shippingNetto: number,
  notes?: string
): Promise<{ orderNumber: string }> {
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
