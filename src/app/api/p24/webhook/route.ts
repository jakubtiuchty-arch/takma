export const dynamic = 'force-dynamic'
export const maxDuration = 60

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { OrderStatus } from '@/generated/prisma/client'
import { p24VerifyNotificationSign, p24Verify, parseP24Notification, type P24Notification } from '@/lib/p24'
import { sendOrderConfirmation, sendAdminNotification } from '@/lib/email'

/**
 * Notyfikacja Przelewy24 (urlStatus, klasyczne API 3.2 — form-urlencoded p24_*).
 * Kolejność jest krytyczna:
 * 1) weryfikacja podpisu md5 (CRC),
 * 2) dopasowanie zamówienia po p24SessionId + kontrola kwoty,
 * 3) OBOWIĄZKOWE p24Verify — bez tego P24 nie rozliczy transakcji,
 * 4) dopiero wtedy PAID + maile (idempotentnie — P24 ponawia notyfikacje).
 */
export async function POST(request: NextRequest) {
  const startTime = Date.now()
  let n: P24Notification
  try {
    const body = await request.text()
    n = parseP24Notification(new URLSearchParams(body))
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }
  if (!n.sessionId || !n.orderId) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  if (!p24VerifyNotificationSign(n)) {
    console.error(`[P24 Webhook] Invalid sign for sessionId=${n.sessionId}`)
    return NextResponse.json({ error: 'Invalid sign' }, { status: 400 })
  }

  console.log(`[P24 Webhook] sessionId=${n.sessionId} p24OrderId=${n.orderId} amount=${n.amount}`)

  const order = await prisma.order.findUnique({
    where: { p24SessionId: n.sessionId },
    include: { items: true, customer: true },
  })
  if (!order) {
    console.error(`[P24 Webhook] Order not found for sessionId=${n.sessionId}`)
    return NextResponse.json({ error: 'Order not found' }, { status: 404 })
  }

  if (n.amount !== order.totalBrutto || n.currency !== 'PLN') {
    console.error(
      `[P24 Webhook] Amount mismatch for ${order.orderNumber}: notified=${n.amount} expected=${order.totalBrutto}`
    )
    return NextResponse.json({ error: 'Amount mismatch' }, { status: 400 })
  }

  // Idempotencja — P24 ponawia notyfikacje, maile mają pójść raz
  if (order.status === OrderStatus.PAID) {
    return NextResponse.json({ received: true })
  }

  try {
    // 3) Rozliczenie transakcji — bez tego środki nie zostaną przekazane
    await p24Verify(n.sessionId, n.orderId, n.amount)
  } catch (err) {
    console.error(`[P24 Webhook] verify FAILED for ${order.orderNumber}:`, err)
    // 500 → P24 ponowi notyfikację, spróbujemy znów
    return NextResponse.json({ error: 'Verify failed' }, { status: 500 })
  }

  const updated = await prisma.order.update({
    where: { id: order.id },
    data: { status: OrderStatus.PAID, paidAt: new Date(), p24OrderId: String(n.orderId) },
    include: { items: true, customer: true },
  })

  console.log(`[P24 Webhook] Order ${updated.orderNumber} PAID at +${Date.now() - startTime}ms`)

  const emailData = {
    orderNumber: updated.orderNumber,
    items: updated.items.map(i => ({
      name: i.productName,
      partNumber: i.partNumber,
      quantity: i.quantity,
      priceNetto: i.priceNetto / 100,
      totalNetto: i.totalNetto / 100,
    })),
    customer: {
      firstName: updated.customer.firstName,
      lastName: updated.customer.lastName,
      company: updated.customer.company,
      nip: updated.customer.nip,
      phone: updated.customer.phone,
      email: updated.customer.email,
      address: updated.customer.address,
      shippingAddress: updated.customer.shippingAddress,
    },
    subtotalNetto: updated.subtotalNetto / 100,
    vatAmount: updated.vatAmount / 100,
    shippingNetto: updated.shippingNetto / 100,
    totalBrutto: updated.totalBrutto / 100,
    paymentMethod: 'ONLINE',
    customerNotes: updated.customerNotes,
  }

  const [confirmResult, adminResult] = await Promise.allSettled([
    sendOrderConfirmation(emailData),
    sendAdminNotification(emailData),
  ])
  console.log(
    `[P24 Webhook] emails for ${updated.orderNumber}: customer=${confirmResult.status} admin=${adminResult.status}`
  )

  return NextResponse.json({ received: true })
}
