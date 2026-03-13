export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/db'
import { OrderStatus } from '@/generated/prisma/client'
import { sendOrderConfirmation, sendAdminNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('[Stripe Webhook] Invalid signature:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const orderId = session.metadata?.orderId
      if (!orderId) break

      // Update order to PAID
      const order = await prisma.order.update({
        where: { id: orderId },
        data: {
          status: OrderStatus.PAID,
          paidAt: new Date(),
          stripeSessionId: session.id,
          stripePaymentIntentId: session.payment_intent as string,
        },
        include: { items: true, customer: true },
      })

      // Prepare email data
      const emailData = {
        orderNumber: order.orderNumber,
        items: order.items.map(i => ({
          name: i.productName,
          partNumber: i.partNumber,
          quantity: i.quantity,
          priceNetto: i.priceNetto / 100,
          totalNetto: i.totalNetto / 100,
        })),
        customer: {
          firstName: order.customer.firstName,
          lastName: order.customer.lastName,
          company: order.customer.company,
          nip: order.customer.nip,
          phone: order.customer.phone,
          email: order.customer.email,
          address: order.customer.address,
          shippingAddress: order.customer.shippingAddress,
        },
        subtotalNetto: order.subtotalNetto / 100,
        vatAmount: order.vatAmount / 100,
        shippingNetto: order.shippingNetto / 100,
        totalBrutto: order.totalBrutto / 100,
        paymentMethod: 'ONLINE',
        customerNotes: order.customerNotes,
      }

      // Send emails with proper error logging
      console.log(`[Stripe Webhook] Order ${order.orderNumber} PAID — sending emails...`)
      console.log(`[Stripe Webhook] RESEND_API_KEY set: ${!!process.env.RESEND_API_KEY}`)

      try {
        const confirmResult = await sendOrderConfirmation(emailData)
        console.log(`[Stripe Webhook] Customer email (${order.customer.email}):`, confirmResult)

        const adminResult = await sendAdminNotification(emailData)
        console.log(`[Stripe Webhook] Admin email:`, adminResult)
      } catch (emailErr) {
        console.error(`[Stripe Webhook] Email sending crashed:`, emailErr)
        // Don't fail the webhook — order is already PAID
      }

      break
    }

    case 'checkout.session.expired': {
      const session = event.data.object as Stripe.Checkout.Session
      const orderId = session.metadata?.orderId
      if (orderId) {
        await prisma.order.update({
          where: { id: orderId },
          data: { status: OrderStatus.EXPIRED },
        })
      }
      break
    }

    case 'payment_intent.payment_failed': {
      const pi = event.data.object as Stripe.PaymentIntent
      console.error(`[Stripe] Payment failed: ${pi.id}`, pi.last_payment_error?.message)
      break
    }
  }

  return NextResponse.json({ received: true })
}
