import { prisma } from './db'
import { OrderStatus, PaymentMethod } from '@/generated/prisma/client'

// Generate order number: TAK-2026-000001
export async function generateOrderNumber(): Promise<string> {
  const year = new Date().getFullYear()
  const lastOrder = await prisma.order.findFirst({
    where: { orderNumber: { startsWith: `TAK-${year}-` } },
    orderBy: { createdAt: 'desc' },
  })

  let seq = 1
  if (lastOrder) {
    const lastSeq = parseInt(lastOrder.orderNumber.split('-')[2], 10)
    seq = lastSeq + 1
  }

  return `TAK-${year}-${String(seq).padStart(6, '0')}`
}

// Find or create customer
export async function findOrCreateCustomer(data: {
  email: string
  firstName: string
  lastName: string
  company: string
  nip?: string
  phone?: string
  address?: string
}) {
  const existing = await prisma.customer.findUnique({ where: { email: data.email } })
  if (existing) {
    // Update customer data with latest
    return prisma.customer.update({
      where: { id: existing.id },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
        nip: data.nip || existing.nip,
        phone: data.phone || existing.phone,
        address: data.address || existing.address,
      },
    })
  }
  return prisma.customer.create({ data })
}

interface CreateOrderInput {
  customer: {
    email: string
    firstName: string
    lastName: string
    company: string
    nip?: string
    phone?: string
    address?: string
  }
  items: {
    productId: string
    productName: string
    productSlug: string
    partNumber: string
    quantity: number
    priceNetto: number // PLN (not grosze)
    note?: string
    ingramPrice?: number // raw Ingram price PLN
  }[]
  paymentMethod: 'ONLINE' | 'PROFORMA'
  customerNotes?: string
}

export async function createOrder(input: CreateOrderInput) {
  const orderNumber = await generateOrderNumber()
  const customer = await findOrCreateCustomer(input.customer)

  const subtotalNetto = input.items.reduce((sum, item) =>
    sum + Math.round(item.priceNetto * 100) * item.quantity, 0
  )
  const vatAmount = Math.round(subtotalNetto * 0.23)
  const totalBrutto = subtotalNetto + vatAmount

  const order = await prisma.order.create({
    data: {
      orderNumber,
      status: input.paymentMethod === 'ONLINE' ? OrderStatus.PENDING_PAYMENT : OrderStatus.AWAITING_PAYMENT,
      customerId: customer.id,
      subtotalNetto,
      vatAmount,
      totalBrutto,
      paymentMethod: input.paymentMethod as PaymentMethod,
      customerNotes: input.customerNotes,
      items: {
        create: input.items.map(item => ({
          productId: item.productId,
          productName: item.productName,
          productSlug: item.productSlug,
          partNumber: item.partNumber,
          quantity: item.quantity,
          priceNetto: Math.round(item.priceNetto * 100),
          totalNetto: Math.round(item.priceNetto * 100) * item.quantity,
          note: item.note,
          ingramPriceSnapshot: item.ingramPrice ? Math.round(item.ingramPrice * 100) : null,
        })),
      },
    },
    include: { items: true, customer: true },
  })

  return order
}

export async function updateOrderStatus(
  orderId: string,
  status: OrderStatus,
  extraData?: Record<string, unknown>
) {
  return prisma.order.update({
    where: { id: orderId },
    data: {
      status,
      ...(status === OrderStatus.PAID && { paidAt: new Date() }),
      ...(status === OrderStatus.SHIPPED && { shippedAt: new Date() }),
      ...(status === OrderStatus.DELIVERED && { deliveredAt: new Date() }),
      ...extraData,
    },
    include: { items: true, customer: true },
  })
}

export async function getOrderWithItems(orderId: string) {
  return prisma.order.findUnique({
    where: { id: orderId },
    include: { items: true, customer: true },
  })
}

export async function getOrderByNumber(orderNumber: string) {
  return prisma.order.findUnique({
    where: { orderNumber },
    include: { items: true, customer: true },
  })
}

export async function getCustomerOrders(email: string) {
  return prisma.order.findMany({
    where: { customer: { email } },
    include: { items: true },
    orderBy: { createdAt: 'desc' },
  })
}
