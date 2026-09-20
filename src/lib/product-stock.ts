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
export const LIVE_OFFER_SLUGS = new Set([
  'zebra-zd421t', 'zebra-zc100', 'zebra-zc300', 'zebra-zc350',
  // Kolorowe drukarki Epson: cena i stan prosto od dystrybutora, tak jak przy Zebrach.
  // Bez tego kwota doklejała się dopiero w przeglądarce, a pierwszy HTML miał „? netto”.
  'epson-colorworks-c3500', 'epson-colorworks-d3800e', 'epson-colorworks-c4000e',
  'epson-colorworks-c6000', 'epson-colorworks-c6500', 'epson-colorworks-c8000e',
])

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
 * Cena i dostępność do JSON-LD dla produktu bez wariantów (jeden numer katalogowy).
 * Karta pobiera cenę z /api/stock dopiero w przeglądarce, więc bez tego schema pokazywała
 * statyczny priceFrom albo — przy jego braku — nie miała oferty wcale. Google porównuje cenę
 * w schema z widoczną na stronie, więc obie muszą pochodzić z tego samego źródła.
 * Błąd bazy albo dystrybutora nie może wywrócić renderu: wtedy zostaje priceFrom.
 */
export const getSchemaOffer = cache(async (
  partNumber: string | undefined,
): Promise<{ price: number; availability: StockInfo['availability'] } | undefined> => {
  if (!partNumber) return undefined
  try {
    const response = await lookupUnifiedStock([partNumber])
    const row = (response.body.results ?? [])[0]
    if (!row?.found || row.price == null || row.price <= 0) return undefined
    return { price: row.price, availability: row.availability }
  } catch (error) {
    console.error('[schema] brak ceny na żywo dla', partNumber, error)
    return undefined
  }
})

/**
 * To samo dla wielu numerów naraz: warianty w AggregateOffer i akcesoria w `isRelatedTo`.
 * Bez tego schema wariantów brała statyczny priceFrom i rozjeżdżała się z ceną na karcie
 * (drukarki Epson: 1–2 %, worki SJIC48P: 3 %). Klucz to numery po przecinku, żeby `cache`
 * miał porównywalny argument. Błąd dystrybutora = pusta mapa, wszystko wraca do priceFrom.
 */
export const getSchemaOffers = cache(async (
  partNumbersKey: string,
): Promise<Map<string, { price: number; availability: StockInfo['availability'] }>> => {
  const out = new Map<string, { price: number; availability: StockInfo['availability'] }>()
  const partNumbers = partNumbersKey.split(',').filter(Boolean)
  if (partNumbers.length === 0) return out
  try {
    const response = await lookupUnifiedStock(partNumbers)
    for (const row of response.body.results ?? []) {
      if (!row?.found || row.price == null || row.price <= 0) continue
      out.set(row.partNumber, { price: row.price, availability: row.availability })
    }
  } catch (error) {
    console.error('[schema] brak cen na żywo dla', partNumbers.join(', '), error)
  }
  return out
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
