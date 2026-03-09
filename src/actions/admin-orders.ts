'use server'

import { prisma } from '@/lib/db'
import { OrderStatus } from '@/generated/prisma/client'
import { sendShippingNotification } from '@/lib/email'
import { revalidatePath } from 'next/cache'

export async function updateOrderStatus(orderId: string, status: OrderStatus) {
  const order = await prisma.order.update({
    where: { id: orderId },
    data: {
      status,
      ...(status === OrderStatus.PAID && { paidAt: new Date() }),
      ...(status === OrderStatus.SHIPPED && { shippedAt: new Date() }),
      ...(status === OrderStatus.DELIVERED && { deliveredAt: new Date() }),
    },
    include: { customer: true },
  })

  revalidatePath('/admin/zamowienia')
  revalidatePath(`/admin/zamowienia/${orderId}`)

  return { success: true, order }
}

export async function addOrderNote(orderId: string, note: string) {
  await prisma.order.update({
    where: { id: orderId },
    data: { adminNotes: note },
  })
  revalidatePath(`/admin/zamowienia/${orderId}`)
  return { success: true }
}

export async function addOrderTracking(orderId: string, trackingNumber: string, carrierName: string) {
  const order = await prisma.order.update({
    where: { id: orderId },
    data: {
      trackingNumber,
      carrierName,
      status: OrderStatus.SHIPPED,
      shippedAt: new Date(),
    },
    include: { customer: true },
  })

  // Send shipping notification email
  await sendShippingNotification(
    order.customer.email,
    order.orderNumber,
    trackingNumber,
    carrierName
  )

  revalidatePath('/admin/zamowienia')
  revalidatePath(`/admin/zamowienia/${orderId}`)

  return { success: true }
}

export async function deleteOrder(orderId: string) {
  await prisma.orderItem.deleteMany({ where: { orderId } })
  await prisma.order.delete({ where: { id: orderId } })

  revalidatePath('/admin/zamowienia')
  return { success: true }
}
