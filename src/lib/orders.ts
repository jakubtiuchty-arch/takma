import { prisma } from './db'
import { OrderStatus, PaymentMethod } from '@/generated/prisma/client'

// Generate order number: YYYYMMDDHHmmss (e.g. 20260222220001)
export async function generateOrderNumber(): Promise<string> {
  const now = new Date()
  const ts = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
    String(now.getHours()).padStart(2, '0'),
    String(now.getMinutes()).padStart(2, '0'),
    String(now.getSeconds()).padStart(2, '0'),
  ].join('')

  // Sprawdź czy numer już istnieje (sekundy mogą się powtórzyć)
  const existing = await prisma.order.findUnique({ where: { orderNumber: ts } })
  if (existing) {
    // Dodaj 1 sekundę
    return ts.slice(0, -2) + String(parseInt(ts.slice(-2), 10) + 1).padStart(2, '0')
  }

  return ts
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
  shippingNetto?: number // PLN (not grosze)
  customerNotes?: string
}

export async function createOrder(input: CreateOrderInput) {
  const orderNumber = await generateOrderNumber()
  const customer = await findOrCreateCustomer(input.customer)

  const subtotalNetto = input.items.reduce((sum, item) =>
    sum + Math.round(item.priceNetto * 100) * item.quantity, 0
  )
  const shippingNettoGrosze = Math.round((input.shippingNetto ?? 0) * 100)
  const vatAmount = Math.round((subtotalNetto + shippingNettoGrosze) * 0.23)
  const totalBrutto = subtotalNetto + shippingNettoGrosze + vatAmount

  const order = await prisma.order.create({
    data: {
      orderNumber,
      status: input.paymentMethod === 'ONLINE' ? OrderStatus.PENDING_PAYMENT : OrderStatus.AWAITING_PAYMENT,
      customerId: customer.id,
      subtotalNetto,
      vatAmount,
      shippingNetto: shippingNettoGrosze,
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
