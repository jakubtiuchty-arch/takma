import type { Product } from '@/data/products'
import type { StockInfo } from '@/lib/ingram'

export function catalogPartNumbers(p: Product): string[] {
  if (p.variants?.length) return p.variants.map(v => v.partNumber)
  const pn = p.specifications.find(s => s.name === 'Part Number')?.value
  return pn ? [pn] : []
}

/** Same price/status rule as ProductCard: cheapest stocked variant, then cheapest quote. */
export function withLiveCatalogData(p: Product, data: Map<string, StockInfo>): Product {
  const rows = catalogPartNumbers(p).map(pn => data.get(pn)).filter((r): r is StockInfo => !!r?.found)
  if (!rows.length) return p
  const stocked = rows.filter(r => r.stockPL + r.stockDE > 0)
  const prices = (stocked.length ? stocked : rows).map(r => r.price).filter((price): price is number => !!price && price > 0)
  // A stocked item with no quote must not hide valid prices from other variants.
  const fallbackPrices = rows.map(r => r.price).filter((price): price is number => !!price && price > 0)
  return { ...p, availability: stocked.length ? 'available' : 'unavailable', priceFrom: prices.length ? Math.min(...prices) : fallbackPrices.length ? Math.min(...fallbackPrices) : p.priceFrom }
}
