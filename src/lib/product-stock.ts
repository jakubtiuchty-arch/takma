import { pm45RfidAccessorySlugs } from '@/data/honeywell-pm45-rfid-products'
import { satoCl6SxrRfidAccessories } from '@/data/sato-cl6-sxr-rfid-products'
import { satoCl4SxrRfidAccessories } from '@/data/sato-cl4-sxr-rfid-products'
import { satoCt4RfidAccessories } from '@/data/sato-ct4-rfid-products'
import { tscThRfidAccessories } from '@/data/tsc-th-rfid-products'
import { tscAlpha40lRfidAccessories } from '@/data/tsc-alpha40l-rfid-products'
import { rfidLabelSlugs } from '@/data/rfid-label-products'
import { zq511RfidAccessorySlugs } from '@/data/zq511-rfid-products'
import { zq521RfidAdditionalAccessories, zq521RfidExistingAccessorySlugs } from '@/data/zq521-rfid-products'
import { zq630RfidAdditionalAccessories, zq630RfidExistingAccessorySlugs } from '@/data/zq630-plus-rfid-products'
import { zd611rAdditionalAccessories, zd611rExistingAccessorySlugs } from '@/data/zd611r-accessories'
import { cache } from 'react'
import { zt620RfidAccessorySlugs } from '@/data/zt620-rfid-products'
import { zt421RfidAdditionalAccessories, zt421RfidAccessorySlugs } from '@/data/zt421-rfid-products'
import { zt231RfidAdditionalAccessories, zt231RfidExistingAccessorySlugs } from '@/data/zt231-rfid-accessories'
import { zt610RfidAccessorySlugs } from '@/data/zt610-rfid-products'
import { zebraTerminalSlugs } from '@/lib/zebra-terminal-catalog'
import { zd621rAdditionalAccessories } from '@/data/zd621r-accessories'
import { zt411RfidAdditionalAccessories, zt411RfidExistingAccessorySlugs } from '@/data/zt411-rfid-accessories'
import { getProductBySlug, products } from '@/data/products'
import { newlandMt95ProIiiAccessories } from '@/data/newland-mt95-pro-iii-accessories'
import { bundleItemPartNumber, bundlePartNumber } from '@/lib/bundle'
import { lookupUnifiedStock } from '@/lib/unified-stock'
import type { StockInfo } from '@/lib/ingram'

/**
 * Produkty z ofertami na żywo: cena i stan z dystrybutorów trafiają w jednym snapshocie
 * do metadanych, JSON-LD (ProductGroup z Offer per PN, brutto) i HTML. Pozostałe produkty
 * nadal używają statycznych priceFrom z products.ts.
 */
export const LIVE_OFFER_SLUGS = new Set([
  'honeywell-pm65-glowica-203dpi', 'honeywell-pm65-walek-dociskowy',
  'honeywell-pm65-modul-wifi', 'honeywell-pm65-odklejak', 'honeywell-pm65-skladany-rdzen',
  'honeywell-pm45-rfid', ...pm45RfidAccessorySlugs,
  'sato-cl6-sxr-rfid', ...satoCl6SxrRfidAccessories.map(a => a.slug),
  'sato-cl4-sxr-rfid', ...satoCl4SxrRfidAccessories.map(a => a.slug),
  'sato-ct4-lx-rfid', ...satoCt4RfidAccessories.map(a => a.slug),
  'tsc-th240r', 'tsc-th340r', ...tscThRfidAccessories.map(a => a.slug),
  'tsc-alpha-40l-rfid', ...tscAlpha40lRfidAccessories.map(a => a.slug),
  'tsc-printronix-t6206e-rfid', 'tsc-printronix-t6306e-rfid',
  'printronix-glowica-6-cali-p220360-001', 'printronix-glowica-6-cali-p220361-001',
  'tsc-printronix-t6604e-rfid', 'printronix-glowica-rfid-p220359-001',
  'tsc-printronix-t6204e-rfid', 'tsc-printronix-t6304e-rfid',
  'printronix-wifi-p220015-901', 'printronix-glowica-rfid-p220357-001', 'printronix-glowica-rfid-p220358-001',
  'tsc-mb241tr', 'tsc-mb341tr', 'tsc-modul-wifi-bluetooth',
  'tsc-glowica-mb241t-203dpi', 'tsc-glowica-mb341t-300dpi',
  'brother-tj-4021tnr', 'brother-tj-4121tnr', 'brother-modul-wifi-pa-wi-002',
  'brother-tj-obcinarka', 'brother-tj-odklejak',
  'brother-td-4650tnwbr', 'brother-td-4750tnwbr', 'brother-td-4t',
  'brother-uchwyt-rolki-pa-rh-001', 'brother-td4t-obcinarka', 'brother-td4t-odklejak',
  ...Array.from(rfidLabelSlugs),
  ...Array.from(zebraTerminalSlugs),
  'newland-mt95-kambur-pro-iii',
  ...newlandMt95ProIiiAccessories.map(product => product.slug),
  'zebra-tc201',
  'zebra-zd621r',
  'zebra-zd611r',
  'zebra-zq630-plus-rfid',
  'zebra-zq521-rfid',
  'zebra-zq511-rfid',
  ...zq511RfidAccessorySlugs,
  ...zq521RfidAdditionalAccessories.map(a => a.slug),
  ...zq521RfidExistingAccessorySlugs,
  ...zq630RfidAdditionalAccessories.map(a => a.slug),
  ...zq630RfidExistingAccessorySlugs,
  ...zd611rAdditionalAccessories.map(accessory => accessory.slug),
  ...zd611rExistingAccessorySlugs,
  'zebra-zt411-rfid',
  'zebra-zt610-rfid',
  'zebra-zt231-rfid',
  'zebra-zt421-rfid',
  'zebra-zt620-rfid',
  ...zt620RfidAccessorySlugs,
  ...zt421RfidAccessorySlugs,
  ...zt421RfidAdditionalAccessories.map(accessory => accessory.slug),
  ...zt231RfidAdditionalAccessories.map(accessory => accessory.slug),
  ...zt231RfidExistingAccessorySlugs,
  ...zt610RfidAccessorySlugs,
  ...zt411RfidAdditionalAccessories.map(accessory => accessory.slug),
  ...zt411RfidExistingAccessorySlugs,
  ...zd621rAdditionalAccessories.map(accessory => accessory.slug),
  'zebra-zd421t', 'zebra-zc100', 'zebra-zc300', 'zebra-zc350',
  // Kolorowe drukarki Epson: cena i stan prosto od dystrybutora, tak jak przy Zebrach.
  // Bez tego kwota doklejała się dopiero w przeglądarce, a pierwszy HTML miał „? netto”.
  'epson-colorworks-c3500', 'epson-colorworks-d3800e', 'epson-colorworks-c4000e',
  'epson-colorworks-c6000', 'epson-colorworks-c6500', 'epson-colorworks-c8000e',
  // Nawijarki, odwijaki i dyspensery Labelmate — ten sam powód co przy Epsonach:
  // bez tego w HTML z serwera zamiast kwoty stało „Sprawdzanie stanów magazynowych…”,
  // a schemat produktu podawał cenę netto zamiast brutto jak reszta ofert żywych.
  'labelmate-mc-11', 'labelmate-mc-pro-chuck',
  'labelmate-cat-3-standard', 'labelmate-cat-3-ach', 'labelmate-cat-3-chuck', 'labelmate-cat-3-10-inches',
  'labelmate-uni-cat-standard', 'labelmate-uni-cat-ach', 'labelmate-uni-cat-chuck',
  'labelmate-ld-115-rs', 'labelmate-ld-165-rs', 'labelmate-ld-115-u', 'labelmate-ld-165-u',
])

/** Jeden odczyt na render: metadata, JSON-LD i HTML otrzymują ten sam zestaw ofert. */
export const getProductStock = cache(async (slug: string): Promise<StockInfo[] | undefined> => {
  if (!LIVE_OFFER_SLUGS.has(slug)) return undefined
  const product = getProductBySlug(slug)
  // Karty bez wariantów (nawijarki i dyspensery Labelmate) mają jeden numer katalogowy
  // w specyfikacji. Bez tej gałęzi lista numerów była pusta i oferta żywa nie powstawała,
  // więc dopisanie slugu wyżej samo z siebie nic by nie dało.
  const partNumbers = product?.variants?.length
    ? product.variants.map(variant => variant.partNumber)
    : [product?.specifications?.find(spec => spec.name === 'Part Number')?.value].filter(
        (pn): pn is string => Boolean(pn),
      )
  if (partNumbers.length === 0) return undefined
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
    return { price: row.price, availability: row.stockPL + row.stockDE > 0 ? 'available' : 'unavailable' }
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
      out.set(row.partNumber, { price: row.price, availability: row.stockPL + row.stockDE > 0 ? 'available' : 'unavailable' })
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
