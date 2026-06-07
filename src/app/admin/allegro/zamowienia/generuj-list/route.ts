import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSessionFromCookie } from '@/lib/auth'
import { getOrder, addShipment } from '@/lib/allegro/orders'
import {
  furgonetkaConfigured,
  receiverAddress,
  buildParcels,
  getServices,
  pickService,
  createPackage,
  getPackageTracking,
  getLabel,
} from '@/lib/furgonetka-rest'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

// Przycisk „Generuj list": tworzy przesyłkę w Furgonetce (usługa wg metody Allegro),
// pobiera etykietę PDF, wpina tracking w zamówienie Allegro.
export async function POST(request: Request) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  if (!furgonetkaConfigured()) {
    return NextResponse.json({ error: 'Furgonetka nieskonfigurowana — brak FURGONETKA_CLIENT_ID / SECRET w env.' }, { status: 503 })
  }

  let orderId: string | undefined
  try {
    orderId = String((await request.json())?.orderId || '').trim() || undefined
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowe body.' }, { status: 400 })
  }
  if (!orderId) return NextResponse.json({ error: 'Brak orderId.' }, { status: 400 })

  try {
    const order = await getOrder(orderId)
    const receiver = receiverAddress(order)
    const parcels = buildParcels(order)

    const services = await getServices()
    const serviceId = pickService(order, services)
    if (!serviceId) {
      return NextResponse.json({ error: 'Brak dopasowanej usługi Furgonetki dla tej dostawy.' }, { status: 422 })
    }

    const pkg = await createPackage(order, serviceId, receiver, parcels)
    if (!pkg.id) return NextResponse.json({ error: 'Furgonetka nie zwróciła id przesyłki.' }, { status: 422 })

    const tracking = pkg.tracking || (await getPackageTracking(pkg.id))
    const labelBase64 = await getLabel(pkg.id)

    // wpięcie trackingu w zamówienie Allegro (kupujący widzi list, status „wysłane")
    if (tracking) {
      try {
        await addShipment(orderId, tracking, order.delivery?.method?.name || '')
      } catch (e) {
        console.error('[Generuj list] addShipment Allegro:', (e as Error).message)
      }
    }

    await prisma.allegroOrderNotified.upsert({
      where: { orderId },
      create: { orderId, trackingNumber: tracking || null, shipmentId: pkg.id },
      update: { trackingNumber: tracking || null, shipmentId: pkg.id },
    })

    return NextResponse.json({ ok: true, tracking, packageId: pkg.id, labelBase64 })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 422 })
  }
}
