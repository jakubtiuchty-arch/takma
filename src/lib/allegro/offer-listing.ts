import { prisma } from '@/lib/db'
import { ALLEGRO_ENV } from './auth'
import { isValidGtin } from './gtin'
import type { Product } from '@/data/products'

export interface OfferRow {
  status: string
  lastError: string | null
}

export interface OfferListing {
  priceByPN: Map<string, number | null>
  offerByPN: Map<string, OfferRow>
  /** PN (wielkimi literami) → EAN, tylko poprawne GTIN-y. */
  eanByPN: Map<string, string>
  total: number
  withEan: number
  withPrice: number
  published: number
}

/** Wczytaj żywe ceny (StockCache) + status ofert (AllegroOffer) + EAN (ProductEan) dla listy produktów. */
export async function loadOfferListing(products: Product[]): Promise<OfferListing> {
  const pns: string[] = []
  for (const p of products) for (const v of p.variants || []) pns.push(v.partNumber)
  const pnsUpper = pns.map((p) => p.toUpperCase())

  const [stockRows, offers, eanRows] = await Promise.all([
    prisma.stockCache.findMany({ where: { partNumber: { in: pns } }, select: { partNumber: true, price: true } }),
    prisma.allegroOffer.findMany({
      where: { environment: ALLEGRO_ENV, partNumber: { in: pns } },
      select: { partNumber: true, status: true, lastError: true },
    }),
    prisma.productEan.findMany({ where: { partNumber: { in: pnsUpper } }, select: { partNumber: true, ean: true } }),
  ])
  const priceByPN = new Map(stockRows.map((r) => [r.partNumber, r.price]))
  const offerByPN = new Map(offers.map((o) => [o.partNumber, { status: o.status, lastError: o.lastError }]))
  const eanByPN = new Map<string, string>()
  for (const r of eanRows) if (isValidGtin(r.ean)) eanByPN.set(r.partNumber, r.ean)

  return {
    priceByPN,
    offerByPN,
    eanByPN,
    total: pns.length,
    withEan: pns.filter((pn) => eanByPN.has(pn.toUpperCase())).length,
    withPrice: pns.filter((pn) => priceByPN.get(pn)).length,
    published: pns.filter((pn) => offerByPN.get(pn)?.status === 'DRAFT').length,
  }
}
