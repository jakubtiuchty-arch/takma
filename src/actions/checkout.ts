'use server'

import { redirect } from 'next/navigation'
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
  notes?: string
) {
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
    customerNotes: notes,
  })

  // 2. Build Stripe line items
  const lineItems = items.map(item => ({
    price_data: {
      currency: 'pln',
      product_data: {
        name: item.productName,
        metadata: { partNumber: item.partNumber, productId: item.productId },
        ...(item.image && { images: [`https://takma.com.pl${item.image}`] }),
      },
      unit_amount: toStripeAmount(item.priceNetto),
      tax_behavior: 'exclusive' as const,
    },
    quantity: item.quantity,
  }))

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
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://takma.com.pl'}/zamowienie/potwierdzenie?order=${order.orderNumber}&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://takma.com.pl'}/zamowienie?cancelled=true`,

    // Session expires in 30 minutes
    expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
  })

  // 4. Save Stripe session ID
  await (await import('@/lib/db')).prisma.order.update({
    where: { id: order.id },
    data: { stripeSessionId: session.id },
  })

  // 5. Redirect to Stripe
  redirect(session.url!)
}

export async function createProformaOrder(
  items: CheckoutItem[],
  customer: CustomerData,
  notes?: string
) {
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
    customerNotes: notes,
  })

  // TODO: Generate pro forma PDF
  // const pdfBuffer = await generateProformaPDF(order)
  // Upload PDF, update order.proformaUrl

  // TODO: Send proforma email
  // await sendProformaEmail(customer.email, order.orderNumber, pdfBuffer)

  // TODO: Send admin notification
  // await sendAdminNotification(order.orderNumber, customer.email, order.totalBrutto / 100, 'PROFORMA')

  return { orderNumber: order.orderNumber }
}
