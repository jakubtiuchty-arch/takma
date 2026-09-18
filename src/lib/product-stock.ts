import { cache } from 'react'
import { getProductBySlug } from '@/data/products'
import { lookupUnifiedStock } from '@/lib/unified-stock'
import type { StockInfo } from '@/lib/ingram'

/**
 * Produkty z ofertami na żywo: cena i stan z dystrybutorów trafiają w jednym snapshocie
 * do metadanych, JSON-LD (ProductGroup z Offer per PN, brutto) i HTML. Pozostałe produkty
 * nadal używają statycznych priceFrom z products.ts.
 */
export const LIVE_OFFER_SLUGS = new Set(['zebra-zd421t', 'zebra-zc100'])

/** Jeden odczyt na render: metadata, JSON-LD i HTML otrzymują ten sam zestaw ofert. */
export const getProductStock = cache(async (slug: string): Promise<StockInfo[] | undefined> => {
  if (!LIVE_OFFER_SLUGS.has(slug)) return undefined
  const product = getProductBySlug(slug)
  const partNumbers = product?.variants?.map(variant => variant.partNumber) ?? []
  const response = await lookupUnifiedStock(partNumbers)
  // Do komponentów klienta nie przekazujemy cen zakupu u dystrybutora.
  return (response.body.results ?? []).map(({ ingramPrice: _purchasePrice, ...stock }) => stock)
})
