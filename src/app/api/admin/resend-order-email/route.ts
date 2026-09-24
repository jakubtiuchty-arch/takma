import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { sendOrderConfirmation, sendAdminNotification, sendProformaEmail } from '@/lib/email'

export const maxDuration = 30

/**
 * POST /api/admin/resend-order-email
 * Body: { orderId?: string, orderNumber?: string, secret: string, proformaOnly?: boolean }
 *
 * Ręczne ponowne wysłanie maili zamówieniowych (do klienta + do admina).
 * `proformaOnly: true` — tylko pro forma z PDF w załączniku, z datą złożenia zamówienia.
 * Akceptuje orderId (Prisma ID) lub orderNumber (np. "20260316112014").
 * Wymaga ADMIN_JWT_SECRET w body.
 */
export async function POST(request: NextRequest) {
  try {
    const { orderId, orderNumber, secret, proformaOnly } = await request.json()

    if (!secret || secret !== process.env.ADMIN_JWT_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!orderId && !orderNumber) {
      return NextResponse.json({ error: 'orderId or orderNumber is required' }, { status: 400 })
    }

    const order = orderId
      ? await prisma.order.findUnique({
          where: { id: orderId },
          include: { items: true, customer: true },
        })
      : await prisma.order.findFirst({
          where: { orderNumber },
          include: { items: true, customer: true },
        })

    if (!order) {
      return NextResponse.json({ error: `Order ${orderId || orderNumber} not found` }, { status: 404 })
    }

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
      paymentMethod: order.stripeSessionId ? 'ONLINE' : 'PROFORMA',
      customerNotes: order.customerNotes,
    }

    if (proformaOnly) {
      const proforma = await sendProformaEmail({
        orderNumber: order.orderNumber,
        items: emailData.items,
        customer: {
          company: order.customer.company,
          nip: order.customer.nip,
          contactName: `${order.customer.firstName} ${order.customer.lastName}`.trim(),
          email: order.customer.email,
          phone: order.customer.phone,
          address: order.customer.address || '',
        },
        subtotalNetto: emailData.subtotalNetto,
        shippingNetto: emailData.shippingNetto,
        vatAmount: emailData.vatAmount,
        totalBrutto: emailData.totalBrutto,
        notes: order.customerNotes,
        issuedAt: order.createdAt,
      })
      return NextResponse.json({ orderNumber: order.orderNumber, customerEmail: order.customer.email, proforma })
    }

    const [confirmResult, adminResult] = await Promise.allSettled([
      sendOrderConfirmation(emailData),
      sendAdminNotification(emailData),
    ])

    return NextResponse.json({
      order: {
        id: order.id,
        orderNumber: order.orderNumber,
        status: order.status,
        customerEmail: order.customer.email,
        totalBrutto: order.totalBrutto / 100,
      },
      customerEmail: confirmResult.status === 'fulfilled' ? confirmResult.value : { error: String(confirmResult.reason) },
      adminEmail: adminResult.status === 'fulfilled' ? adminResult.value : { error: String(adminResult.reason) },
    })
  } catch (err) {
    console.error('[Resend Order Email] Error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
