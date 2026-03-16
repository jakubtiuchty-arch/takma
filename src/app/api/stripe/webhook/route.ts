export const dynamic = 'force-dynamic'
export const maxDuration = 60

import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/db'
import { OrderStatus } from '@/generated/prisma/client'
import { sendOrderConfirmation, sendAdminNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  const startTime = Date.now()
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

  console.log(`[Stripe Webhook] Event: ${event.type} (${event.id}) at +${Date.now() - startTime}ms`)

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const orderId = session.metadata?.orderId
        if (!orderId) {
          console.warn('[Stripe Webhook] checkout.session.completed WITHOUT orderId in metadata — skipping')
          break
        }

        console.log(`[Stripe Webhook] Processing order ${orderId} at +${Date.now() - startTime}ms`)

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

        console.log(`[Stripe Webhook] Order ${order.orderNumber} updated to PAID at +${Date.now() - startTime}ms`)

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

        // Send both emails in parallel
        console.log(`[Stripe Webhook] Sending emails for ${order.orderNumber} to ${order.customer.email} at +${Date.now() - startTime}ms`)
        console.log(`[Stripe Webhook] RESEND_API_KEY set: ${!!process.env.RESEND_API_KEY}`)

        const [confirmResult, adminResult] = await Promise.allSettled([
          sendOrderConfirmation(emailData),
          sendAdminNotification(emailData),
        ])

        console.log(`[Stripe Webhook] Customer email result:`, confirmResult.status === 'fulfilled' ? confirmResult.value : confirmResult.reason)
        console.log(`[Stripe Webhook] Admin email result:`, adminResult.status === 'fulfilled' ? adminResult.value : adminResult.reason)
        console.log(`[Stripe Webhook] Done at +${Date.now() - startTime}ms`)

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
          console.log(`[Stripe Webhook] Order ${orderId} marked EXPIRED`)
        }
        break
      }

      case 'payment_intent.payment_failed': {
        const pi = event.data.object as Stripe.PaymentIntent
        console.error(`[Stripe] Payment failed: ${pi.id}`, pi.last_payment_error?.message)
        break
      }
    }
  } catch (err) {
    console.error(`[Stripe Webhook] CRITICAL ERROR processing ${event.type}:`, err)
    // Return 500 so Stripe retries the webhook
    return NextResponse.json({ error: 'Processing failed' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
