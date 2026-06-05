import { prisma } from '@/lib/db'
import { ALLEGRO_ENV } from './auth'
import type { Product } from '@/data/products'

export interface OfferRow {
  status: string
  lastError: string | null
}

export interface OfferListing {
  priceByPN: Map<string, number | null>
  offerByPN: Map<string, OfferRow>
  total: number
  withPrice: number
  published: number
}

/** Wczytaj żywe ceny (StockCache) + status ofert (AllegroOffer) dla listy produktów. */
export async function loadOfferListing(products: Product[]): Promise<OfferListing> {
  const pns: string[] = []
  for (const p of products) for (const v of p.variants || []) pns.push(v.partNumber)

  const [stockRows, offers] = await Promise.all([
    prisma.stockCache.findMany({ where: { partNumber: { in: pns } }, select: { partNumber: true, price: true } }),
    prisma.allegroOffer.findMany({
      where: { environment: ALLEGRO_ENV, partNumber: { in: pns } },
      select: { partNumber: true, status: true, lastError: true },
    }),
  ])
  const priceByPN = new Map(stockRows.map((r) => [r.partNumber, r.price]))
  const offerByPN = new Map(offers.map((o) => [o.partNumber, { status: o.status, lastError: o.lastError }]))

  return {
    priceByPN,
    offerByPN,
    total: pns.length,
    withPrice: pns.filter((pn) => priceByPN.get(pn)).length,
    published: pns.filter((pn) => offerByPN.get(pn)?.status === 'DRAFT').length,
  }
}
