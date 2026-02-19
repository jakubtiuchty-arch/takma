'use server'

import { getCustomerFromCookie } from '@/lib/customer-auth'
import { prisma } from '@/lib/db'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

interface DeviceActionState {
  error?: string
  fieldErrors?: Record<string, string>
}

export async function addDevice(
  _prevState: DeviceActionState | null,
  formData: FormData
): Promise<DeviceActionState> {
  const session = await getCustomerFromCookie()
  if (!session) {
    return { error: 'Brak autoryzacji. Zaloguj sie ponownie.' }
  }

  const productName = (formData.get('productName') as string)?.trim()
  const productSlug = (formData.get('productSlug') as string)?.trim() || null
  const partNumber = (formData.get('partNumber') as string)?.trim() || null
  const serialNumber = (formData.get('serialNumber') as string)?.trim() || null
  const purchaseDateStr = formData.get('purchaseDate') as string
  const warrantyEndStr = formData.get('warrantyEnd') as string
  const oneCareEndStr = formData.get('oneCareEnd') as string
  const notes = (formData.get('notes') as string)?.trim() || null

  if (!productName) {
    return { fieldErrors: { productName: 'Nazwa produktu jest wymagana' } }
  }

  try {
    await prisma.device.create({
      data: {
        customerId: session.customerId,
        productName,
        productSlug,
        partNumber,
        serialNumber,
        purchaseDate: purchaseDateStr ? new Date(purchaseDateStr) : null,
        warrantyEnd: warrantyEndStr ? new Date(warrantyEndStr) : null,
        oneCareEnd: oneCareEndStr ? new Date(oneCareEndStr) : null,
        notes,
      },
    })
  } catch (err) {
    console.error('[addDevice] Error:', err)
    return { error: 'Blad serwera. Sprobuj ponownie.' }
  }

  revalidatePath('/panel/urzadzenia')
  redirect('/panel/urzadzenia')
}

export async function updateDevice(
  _prevState: DeviceActionState | null,
  formData: FormData
): Promise<DeviceActionState> {
  const session = await getCustomerFromCookie()
  if (!session) {
    return { error: 'Brak autoryzacji. Zaloguj sie ponownie.' }
  }

  const deviceId = formData.get('deviceId') as string
  if (!deviceId) {
    return { error: 'Brak ID urzadzenia' }
  }

  // Sprawdz ownership
  const device = await prisma.device.findUnique({
    where: { id: deviceId },
    select: { customerId: true },
  })

  if (!device) {
    return { error: 'Urzadzenie nie znalezione' }
  }

  if (device.customerId !== session.customerId) {
    return { error: 'Brak dostepu do tego urzadzenia' }
  }

  const productName = (formData.get('productName') as string)?.trim()
  const productSlug = (formData.get('productSlug') as string)?.trim() || null
  const partNumber = (formData.get('partNumber') as string)?.trim() || null
  const serialNumber = (formData.get('serialNumber') as string)?.trim() || null
  const purchaseDateStr = formData.get('purchaseDate') as string
  const warrantyEndStr = formData.get('warrantyEnd') as string
  const oneCareEndStr = formData.get('oneCareEnd') as string
  const notes = (formData.get('notes') as string)?.trim() || null

  if (!productName) {
    return { fieldErrors: { productName: 'Nazwa produktu jest wymagana' } }
  }

  try {
    await prisma.device.update({
      where: { id: deviceId },
      data: {
        productName,
        productSlug,
        partNumber,
        serialNumber,
        purchaseDate: purchaseDateStr ? new Date(purchaseDateStr) : null,
        warrantyEnd: warrantyEndStr ? new Date(warrantyEndStr) : null,
        oneCareEnd: oneCareEndStr ? new Date(oneCareEndStr) : null,
        notes,
      },
    })
  } catch (err) {
    console.error('[updateDevice] Error:', err)
    return { error: 'Blad serwera. Sprobuj ponownie.' }
  }

  revalidatePath('/panel/urzadzenia')
  redirect('/panel/urzadzenia')
}

export async function deleteDevice(deviceId: string): Promise<{ error?: string }> {
  const session = await getCustomerFromCookie()
  if (!session) {
    return { error: 'Brak autoryzacji' }
  }

  const device = await prisma.device.findUnique({
    where: { id: deviceId },
    select: { customerId: true },
  })

  if (!device) {
    return { error: 'Urzadzenie nie znalezione' }
  }

  if (device.customerId !== session.customerId) {
    return { error: 'Brak dostepu' }
  }

  try {
    await prisma.device.delete({ where: { id: deviceId } })
  } catch (err) {
    console.error('[deleteDevice] Error:', err)
    return { error: 'Blad serwera' }
  }

  revalidatePath('/panel/urzadzenia')
  redirect('/panel/urzadzenia')
}
