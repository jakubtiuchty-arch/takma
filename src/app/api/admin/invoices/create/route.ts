import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { generateInvoiceNumber } from '@/lib/invoice'

export async function POST(request: NextRequest) {
  try {
    const { orderId } = await request.json()

    if (!orderId) {
      return NextResponse.json({ error: 'orderId is required' }, { status: 400 })
    }

    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { items: true, customer: true }
    })

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }

    // Check if invoice already exists for this order
    const existing = await prisma.invoice.findFirst({
      where: { orderId }
    })
    if (existing) {
      return NextResponse.json({ error: 'Invoice already exists for this order', invoiceId: existing.id }, { status: 409 })
    }

    const invoiceNumber = await generateInvoiceNumber()

    const items = order.items.map(item => ({
      name: item.productName,
      partNumber: item.partNumber,
      quantity: item.quantity,
      unitPriceNetto: item.priceNetto,
      totalNetto: item.totalNetto,
      vatRate: 23,
      vatAmount: Math.round(item.totalNetto * 0.23),
      totalBrutto: Math.round(item.totalNetto * 1.23),
    }))

    // Add shipping if present
    if (order.shippingNetto > 0) {
      items.push({
        name: 'Dostawa kurierska',
        partNumber: '',
        quantity: 1,
        unitPriceNetto: order.shippingNetto,
        totalNetto: order.shippingNetto,
        vatRate: 23,
        vatAmount: Math.round(order.shippingNetto * 0.23),
        totalBrutto: Math.round(order.shippingNetto * 1.23),
      })
    }

    const invoice = await prisma.invoice.create({
      data: {
        invoiceNumber,
        orderId: order.id,
        customerId: order.customerId,
        subtotalNetto: order.subtotalNetto + order.shippingNetto,
        vatAmount: order.vatAmount,
        totalBrutto: order.totalBrutto,
        saleDate: order.paidAt || order.createdAt,
        dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days
        buyerName: order.customer.company,
        buyerNip: order.customer.nip,
        buyerAddress: order.customer.address,
        items: items,
      }
    })

    return NextResponse.json({ success: true, invoice })
  } catch (error) {
    console.error('[Invoice Create]', error)
    return NextResponse.json({ error: 'Failed to create invoice' }, { status: 500 })
  }
}
