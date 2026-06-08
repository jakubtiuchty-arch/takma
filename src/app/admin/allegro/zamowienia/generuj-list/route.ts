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
  getLabelRetry,
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
    // Paczka już istnieje (ponowne kliknięcie / wcześniejszy błąd etykiety) —
    // NIE twórz drugiego kuriera, tylko pobierz etykietę.
    const existing = await prisma.allegroOrderNotified.findUnique({
      where: { orderId },
      select: { shipmentId: true, trackingNumber: true },
    })
    if (existing?.shipmentId) {
      const labelBase64 = await getLabelRetry(existing.shipmentId)
      return NextResponse.json({
        ok: true,
        reused: true,
        tracking: existing.trackingNumber,
        packageId: existing.shipmentId,
        labelBase64,
        ...(labelBase64 ? {} : { warning: 'Etykieta jeszcze się generuje — spróbuj ponownie za chwilę.' }),
      })
    }

    const order = await getOrder(orderId)
    const receiver = receiverAddress(order)
    const parcels = buildParcels(order)

    const services = await getServices()
    const serviceId = pickService(order.delivery?.method?.name, services)
    if (!serviceId) {
      return NextResponse.json({ error: 'Brak dopasowanej usługi Furgonetki dla tej dostawy.' }, { status: 422 })
    }

    const pkg = await createPackage(order.id, serviceId, receiver, parcels)
    if (!pkg.id) return NextResponse.json({ error: 'Furgonetka nie zwróciła id przesyłki.' }, { status: 422 })

    const tracking = pkg.tracking || (await getPackageTracking(pkg.id))

    // ZAPISZ paczkę OD RAZU (zanim etykieta) — nawet jeśli etykieta padnie, nie zgubimy
    // przesyłki i nie utworzymy drugiej przy ponownym kliknięciu.
    await prisma.allegroOrderNotified.upsert({
      where: { orderId },
      create: { orderId, trackingNumber: tracking || null, shipmentId: pkg.id },
      update: { trackingNumber: tracking || null, shipmentId: pkg.id },
    })

    // Wpięcie trackingu w zamówienie Allegro (kupujący widzi list, status „wysłane").
    if (tracking) {
      try {
        await addShipment(orderId, tracking, order.delivery?.method?.name || '')
      } catch (e) {
        console.error('[Generuj list] addShipment Allegro:', (e as Error).message)
      }
    }

    // Etykieta z ponawianiem (async generacja). Brak etykiety NIE jest błędem —
    // przesyłka istnieje, etykietę można pobrać później przyciskiem „Generuj ponownie".
    const labelBase64 = await getLabelRetry(pkg.id)

    return NextResponse.json({
      ok: true,
      tracking,
      packageId: pkg.id,
      labelBase64,
      ...(labelBase64 ? {} : { warning: 'List utworzony, etykieta jeszcze się generuje — kliknij „Generuj ponownie" za chwilę.' }),
    })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 422 })
  }
}
