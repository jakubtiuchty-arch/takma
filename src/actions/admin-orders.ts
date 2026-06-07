'use server'

import { prisma } from '@/lib/db'
import { OrderStatus } from '@/generated/prisma/client'
import { sendShippingNotification } from '@/lib/email'
import { revalidatePath } from 'next/cache'
import {
  furgonetkaConfigured,
  getServices,
  pickService,
  createPackage,
  getPackageTracking,
  getLabel,
  parseAddress,
  type FurgAddress,
} from '@/lib/furgonetka-rest'

/**
 * Generuje przesyłkę w Furgonetce dla zamówienia SKLEPU, zapisuje numer listu,
 * ustawia status Wysłane i wysyła klientowi e-mail z numerem. Zwraca etykietę (base64).
 */
export async function generateFurgonetkaShipment(orderId: string, carrier: string) {
  if (!furgonetkaConfigured()) {
    return { ok: false as const, error: 'Furgonetka nieskonfigurowana (brak FURGONETKA_CLIENT_ID/SECRET).' }
  }
  const order = await prisma.order.findUnique({ where: { id: orderId }, include: { customer: true, items: true } })
  if (!order) return { ok: false as const, error: 'Nie znaleziono zamówienia.' }

  const cu = order.customer
  const addr = parseAddress(cu.shippingAddress || cu.address || '')
  const receiver: FurgAddress = {
    name: [cu.firstName, cu.lastName].filter(Boolean).join(' ') || cu.company || 'Klient',
    company: cu.company || '',
    street: addr.street,
    postcode: addr.postcode,
    city: addr.city,
    country_code: 'PL',
    email: cu.email,
    phone: cu.phone || '',
  }
  if (!receiver.street || !receiver.postcode || !receiver.city) {
    return { ok: false as const, error: `Nie udało się odczytać adresu klienta („${cu.shippingAddress || cu.address || ''}"). Uzupełnij adres ręcznie w Furgonetce lub wpisz numer ręcznie.` }
  }

  const qty = order.items.reduce((s, it) => s + (it.quantity || 1), 0) || 1
  const parcels = [{ width: 40, height: 30, depth: 20, weight: Math.max(1, qty * 1), value: order.totalBrutto / 100, description: 'Zamówienie ' + order.orderNumber }]

  try {
    const services = await getServices()
    const serviceId = pickService(carrier, services)
    if (!serviceId) return { ok: false as const, error: 'Brak dopasowanej usługi Furgonetki.' }

    const pkg = await createPackage(order.orderNumber, serviceId, receiver, parcels)
    if (!pkg.id) return { ok: false as const, error: 'Furgonetka nie zwróciła id przesyłki.' }
    const tracking = pkg.tracking || (await getPackageTracking(pkg.id))
    const labelBase64 = await getLabel(pkg.id)

    await prisma.order.update({
      where: { id: orderId },
      data: { trackingNumber: tracking || null, carrierName: carrier, status: OrderStatus.SHIPPED, shippedAt: new Date() },
    })
    if (tracking) {
      await sendShippingNotification(cu.email, order.orderNumber, tracking, carrier).catch(() => {})
    }
    revalidatePath(`/admin/zamowienia/${orderId}`)
    return { ok: true as const, tracking, labelBase64 }
  } catch (e) {
    return { ok: false as const, error: (e as Error).message }
  }
}

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
