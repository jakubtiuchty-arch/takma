import { prisma } from '@/lib/db'
import { usedSlugFromProductId } from '@/lib/used-devices'

/**
 * Operacje bazodanowe na używkach — wołane wyłącznie po stronie serwera
 * (akcje checkoutu). Czyste pomocniki bez Prismy są w used-devices.ts, bo
 * używa ich też koszyk w przeglądarce.
 */

export class UsedDeviceError extends Error {}

interface PozycjaUzywana {
  productId: string
  quantity: number
  priceNetto: number
}

/**
 * Weryfikacja pozycji z używkami przed zapisaniem zamówienia: cena z bazy,
 * dostępność z bazy, ilość zawsze 1. Rzuca wyjątkiem zamiast po cichu
 * poprawiać — klient ma dowiedzieć się, że sztuka zeszła, a nie zapłacić za
 * coś, czego nie ma.
 */
export async function applyUsedDevicePricing<T extends PozycjaUzywana>(items: T[]): Promise<T[]> {
  const slugi = items
    .map(i => usedSlugFromProductId(i.productId))
    .filter((s): s is string => !!s)
  if (slugi.length === 0) return items

  const sztuki = await prisma.usedDevice.findMany({ where: { slug: { in: slugi } } })
  const bySlug = new Map(sztuki.map(s => [s.slug, s]))

  return items.map(item => {
    const slug = usedSlugFromProductId(item.productId)
    if (!slug) return item

    const sztuka = bySlug.get(slug)
    if (!sztuka) {
      throw new UsedDeviceError('Tego egzemplarza nie ma już w ofercie. Odśwież koszyk i wybierz inny.')
    }
    if (sztuka.status !== 'AVAILABLE') {
      throw new UsedDeviceError(
        `„${sztuka.name}" został w międzyczasie sprzedany. Usuń tę pozycję z koszyka — chętnie znajdziemy podobny egzemplarz.`,
      )
    }
    return { ...item, quantity: 1, priceNetto: sztuka.priceNetto / 100 }
  })
}

/** Po złożeniu zamówienia egzemplarz znika z oferty — jest tylko jeden. */
export async function markUsedDevicesSold(items: { productId: string }[], orderNumber: string) {
  const slugi = items
    .map(i => usedSlugFromProductId(i.productId))
    .filter((s): s is string => !!s)
  if (slugi.length === 0) return

  try {
    await prisma.usedDevice.updateMany({
      where: { slug: { in: slugi }, status: 'AVAILABLE' },
      data: { status: 'SOLD', orderNumber, soldAt: new Date() },
    })
  } catch (e) {
    console.error('[UsedDevice] Nie udało się oznaczyć sprzedaży:', (e as Error).message)
  }
}
