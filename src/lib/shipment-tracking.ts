import { prisma } from '@/lib/db'
import { getPackageStatus } from '@/lib/furgonetka-rest'

// Etapy doręczenia (stepper). Mapujemy stan/opis Furgonetki na indeks etapu.
export const STAGES = ['Przyjęto', 'U kuriera', 'W transporcie', 'W doręczeniu', 'Dostarczono'] as const

export function stageOf(state: string, description?: string | null): number {
  const s = `${state} ${description || ''}`.toLowerCase()
  if (/doręczon|dostarczon|delivered|odebrano przez odbiorc/.test(s)) return 4
  if (/do doręcz|w doręcz|out for deliver|kurier.*dorę|na trasie|w dostawie do/.test(s)) return 3
  if (/transport|tranzy|sortow|w drodze|in.?transit|magazyn|hub|przeładun/.test(s)) return 2
  if (/odebr|nadan|przyjęt.*kurier|sent|picked|pickup|u kuriera|nadana/.test(s)) return 1
  return 0
}

export function isDelivered(state: string, description?: string | null): boolean {
  return /doręczon|dostarczon|delivered/.test(`${state} ${description || ''}`.toLowerCase())
}

export function isProblem(state: string, description?: string | null): boolean {
  return /problem|zwrot|zwrócon|anulow|błąd|error|return|nieudan|odmow/.test(
    `${state} ${description || ''}`.toLowerCase(),
  )
}

interface Source {
  packageId: string
  source: string
  orderRef: string
  trackingNumber: string | null
  carrier: string | null
}

/**
 * Polluje status przesyłek Furgonetki i dopisuje zmiany stanu do własnej osi czasu.
 * Samo-rejestruje aktywne przesyłki z AllegroOrderNotified.shipmentId i Order.shipmentId,
 * więc obejmuje też te utworzone wcześniej.
 */
export async function pollShipments(): Promise<{ tracked: number; updated: number; newEvents: number }> {
  const allegro = await prisma.allegroOrderNotified.findMany({
    where: { shipmentId: { not: null } },
    select: { orderId: true, shipmentId: true, trackingNumber: true },
  })
  // Legacy: zamówienia z numerem w Order.* (sprzed wielo-przesyłkowości).
  const shop = await prisma.order.findMany({
    where: { shipmentId: { not: null }, status: { notIn: ['DELIVERED', 'CANCELLED', 'EXPIRED', 'REFUNDED'] } },
    select: { id: true, shipmentId: true, trackingNumber: true, carrierName: true },
  })
  // Wiele przesyłek Furgonetki per zamówienie (część sprzętu z różnych lokalizacji).
  const shopShipments = await prisma.orderShipment.findMany({
    where: {
      shipmentId: { not: null },
      order: { status: { notIn: ['DELIVERED', 'CANCELLED', 'EXPIRED', 'REFUNDED'] } },
    },
    select: { orderId: true, shipmentId: true, trackingNumber: true, carrierName: true },
  })

  const sources: Source[] = [
    ...allegro.map((a) => ({ packageId: a.shipmentId!, source: 'allegro', orderRef: a.orderId, trackingNumber: a.trackingNumber, carrier: null })),
    ...shop.map((o) => ({ packageId: o.shipmentId!, source: 'shop', orderRef: o.id, trackingNumber: o.trackingNumber, carrier: o.carrierName })),
    ...shopShipments.map((s) => ({ packageId: s.shipmentId!, source: 'shop', orderRef: s.orderId, trackingNumber: s.trackingNumber, carrier: s.carrierName })),
  ]

  // Dedup po packageId — pierwsza przesyłka zapisuje i Order.shipmentId, i wiersz OrderShipment.
  const seen = new Set<string>()
  const uniqueSources = sources.filter((s) => (seen.has(s.packageId) ? false : (seen.add(s.packageId), true)))

  let tracked = 0
  let updated = 0
  let newEvents = 0

  for (const src of uniqueSources) {
    const tr = await prisma.shipmentTracking.upsert({
      where: { packageId: src.packageId },
      create: {
        packageId: src.packageId,
        source: src.source,
        orderRef: src.orderRef,
        trackingNumber: src.trackingNumber,
        carrier: src.carrier,
      },
      update: {},
    })
    tracked++
    if (tr.delivered) continue // doręczona — nie pollujemy dalej

    const status = await getPackageStatus(src.packageId)
    if (!status) {
      await prisma.shipmentTracking.update({ where: { id: tr.id }, data: { lastPolledAt: new Date() } })
      continue
    }

    const last = await prisma.shipmentTrackingEvent.findFirst({
      where: { trackingId: tr.id },
      orderBy: { recordedAt: 'desc' },
    })
    const changed =
      !last ||
      last.state !== status.state ||
      (last.station || '') !== (status.station || '') ||
      (last.datetimeStatus || '') !== (status.datetimeStatus || '')

    if (changed) {
      await prisma.shipmentTrackingEvent.create({
        data: {
          trackingId: tr.id,
          state: status.state,
          description: status.description,
          station: status.station,
          datetimeStatus: status.datetimeStatus,
        },
      })
      newEvents++
    }

    await prisma.shipmentTracking.update({
      where: { id: tr.id },
      data: {
        currentState: status.state,
        currentDesc: status.description,
        currentStation: status.station,
        trackingUrl: status.trackingUrl,
        trackingNumber: status.trackingNumber || src.trackingNumber,
        delivered: isDelivered(status.state, status.description),
        lastPolledAt: new Date(),
      },
    })
    updated++
  }

  return { tracked, updated, newEvents }
}
