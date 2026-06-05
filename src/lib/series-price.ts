import { prisma } from '@/lib/db'
import type { StockInfo } from '@/lib/ingram'

/**
 * Ceny + dostępność wariantów serii czytane bezpośrednio ze StockCache (te same dane,
 * które tabela wariantów pokazuje na żywo). Używane do:
 *  - zasilenia tabeli wariantów po stronie serwera (SSR pokazuje realne ceny od razu,
 *    bez migotania statycznego fallbacku i bez błędnych cen dla crawlerów bez JS),
 *  - obliczenia „od X zł" w nagłówku serii ORAZ lowPrice w schemacie Product/AggregateOffer.
 *
 * Zwraca obiekty zgodne ze StockInfo, więc można je wprost wstrzyknąć do mapy stocku w tabeli.
 */
export async function getSeriesStock(partNumbers: string[]): Promise<StockInfo[]> {
  if (!partNumbers.length) return []
  try {
    const rows = await prisma.stockCache.findMany({
      where: { partNumber: { in: partNumbers } },
      select: {
        partNumber: true, found: true, price: true, priceBrutto: true, ingramPrice: true,
        stockPL: true, stockDE: true, inDelivery: true, totalStock: true,
        availability: true, deliveryText: true, lastSync: true,
      },
    })
    return rows.map(r => ({
      partNumber: r.partNumber,
      found: r.found,
      price: r.price ?? undefined,
      priceBrutto: r.priceBrutto ?? undefined,
      ingramPrice: r.ingramPrice ?? undefined,
      stockPL: r.stockPL,
      stockDE: r.stockDE,
      inDelivery: r.inDelivery,
      totalStock: r.totalStock,
      availability: (r.availability as StockInfo['availability']) ?? 'unavailable',
      deliveryText: r.deliveryText ?? '',
      lastSync: r.lastSync.toISOString(),
    }))
  } catch {
    return []
  }
}

/**
 * Minimalna cena sprzedaży (netto z marżą) spośród wariantów. Preferuje `available`;
 * jeśli żaden nie jest dostępny — minimum spośród znalezionych (found). null = brak danych.
 */
export function minAvailablePrice(rows: StockInfo[]): number | null {
  const priced = rows.filter(r => typeof r.price === 'number') as (StockInfo & { price: number })[]
  if (!priced.length) return null
  const available = priced.filter(r => r.availability === 'available')
  const pool = available.length ? available : priced.filter(r => r.found)
  if (!pool.length) return null
  return Math.round(Math.min(...pool.map(r => r.price)) * 100) / 100
}
