import { cache } from 'react'
import { getProductBySlug, products } from '@/data/products'
import { bundleItemPartNumber, bundlePartNumber } from '@/lib/bundle'
import { lookupUnifiedStock } from '@/lib/unified-stock'
import type { StockInfo } from '@/lib/ingram'

/**
 * Produkty z ofertami na żywo: cena i stan z dystrybutorów trafiają w jednym snapshocie
 * do metadanych, JSON-LD (ProductGroup z Offer per PN, brutto) i HTML. Pozostałe produkty
 * nadal używają statycznych priceFrom z products.ts.
 */
export const LIVE_OFFER_SLUGS = new Set(['zebra-zd421t', 'zebra-zc100', 'zebra-zc300'])

/** Jeden odczyt na render: metadata, JSON-LD i HTML otrzymują ten sam zestaw ofert. */
export const getProductStock = cache(async (slug: string): Promise<StockInfo[] | undefined> => {
  if (!LIVE_OFFER_SLUGS.has(slug)) return undefined
  const product = getProductBySlug(slug)
  const partNumbers = product?.variants?.map(variant => variant.partNumber) ?? []
  const response = await lookupUnifiedStock(partNumbers)
  // Do komponentów klienta nie przekazujemy cen zakupu u dystrybutora.
  return (response.body.results ?? []).map(({ ingramPrice: _purchasePrice, ...stock }) => stock)
})

/**
 * Ceny netto na żywo dla zestawu startowego i jego składników (PN → cena). Baner „zamiast X zł”
 * i sekcja „Co jest w zestawie” liczą z tego samego źródła co cena drukarki obok.
 * Brak odpowiedzi dystrybutora = pusta mapa, komponenty wracają do priceFrom.
 */
export const getBundleLivePrices = cache(async (bundleSlug: string): Promise<Record<string, number>> => {
  const bundle = getProductBySlug(bundleSlug)
  if (!bundle?.bundleItems?.length) return {}
  const partNumbers = new Set<string>()
  const bundlePn = bundlePartNumber(bundle)
  if (bundlePn) partNumbers.add(bundlePn)
  for (const item of bundle.bundleItems) {
    const product = products.find((x) => x.id === item.productId)
    const pn = product ? bundleItemPartNumber(item, product) : undefined
    if (pn) partNumbers.add(pn)
  }
  if (!partNumbers.size) return {}
  try {
    const response = await lookupUnifiedStock(Array.from(partNumbers))
    const prices: Record<string, number> = {}
    for (const row of response.body.results ?? []) {
      if (row.found && row.price != null && row.price > 0) prices[row.partNumber] = row.price
    }
    return prices
  } catch (error) {
    console.error('[bundle] brak cen na żywo dla zestawu', bundleSlug, error)
    return {}
  }
})
