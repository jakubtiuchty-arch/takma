import { prisma } from '@/lib/db'

/**
 * Stan wystawiany na Allegro = min(realny stan, CAP).
 * Bufor (CAP) chroni przed pokazywaniem konkurencji ile masz i ogranicza ryzyko
 * przesprzedaży. Gdy realny stan = 0 → wystawiamy 0 (Allegro kończy ofertę,
 * cron wznawia po powrocie towaru).
 */
export const ALLEGRO_STOCK_CAP = 30

export function cappedAvailable(totalStock: number | null | undefined): number {
  if (!totalStock || totalStock <= 0) return 0
  return Math.min(totalStock, ALLEGRO_STOCK_CAP)
}

/** Żywy stan z StockCache → wartość do wystawienia na Allegro. */
export async function liveAvailableForPN(partNumber: string): Promise<number> {
  const row = await prisma.stockCache.findUnique({
    where: { partNumber },
    select: { totalStock: true },
  })
  return cappedAvailable(row?.totalStock)
}
