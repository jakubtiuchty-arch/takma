import type { Product } from '@/data/products'
import type { StockInfo } from './ingram'
import { MANUAL_STOCK_OVERRIDES } from './stock-overrides'

const SITE_URL = 'https://www.takma.com.pl'

export function absoluteProductImageUrl(image: string): string {
  return new URL(image, SITE_URL).href
}

/**
 * Data ważności ceny w ofercie — rok od wygenerowania strony.
 *
 * Google traktuje `priceValidUntil` jako pole zalecane w `Offer`: bez niego Search Console
 * zgłasza ostrzeżenie, a data z przeszłości potrafi sprawić, że cena w ogóle przestaje się
 * pokazywać w wyniku wyszukiwania. Rok do przodu jest bezpieczny w obie strony.
 *
 * Trzymamy to w jednym miejscu, bo oferty budują dwa moduły: ten i `product-variant-offers`.
 */
export function cenaWaznaDo(): string {
  const zaRok = new Date()
  zaRok.setFullYear(zaRok.getFullYear() + 1)
  return zaRok.toISOString().split('T')[0]
}

/** Te same dane ręcznej oferty dla renderowania serwerowego, UI i JSON-LD. */
export function getMagicardStock(product: Product): StockInfo[] | undefined {
  if (product.manufacturerId !== 'magicard') return undefined
  const partNumber = product.specifications.find(spec => spec.name === 'Part Number')?.value
  const variants = product.variants?.length
    ? product.variants
    : partNumber ? [{ partNumber, priceFrom: product.priceFrom }] : []
  if (!variants.length || !variants.every(v => MANUAL_STOCK_OVERRIDES.has(v.partNumber.toUpperCase()))) return undefined

  return variants.map(variant => {
    const manual = MANUAL_STOCK_OVERRIDES.get(variant.partNumber.toUpperCase())!
    const totalStock = manual.stockPL + manual.stockDE
    const price = variant.priceFrom ?? product.priceFrom
    return {
      partNumber: variant.partNumber,
      found: true,
      price,
      priceBrutto: price ? Math.round(price * 123) / 100 : undefined,
      stockPL: manual.stockPL,
      stockDE: manual.stockDE,
      inDelivery: 0,
      totalStock,
      availability: totalStock > 0 ? 'available' : 'unavailable',
      deliveryText: manual.deliveryText,
      lastSync: product.updatedAt || product.createdAt,
    }
  })
}

/** Oferta pojedynczego SKU; brak arbitralnego terminu ważności ceny. */
export function getMagicardOffer(product: Product) {
  const stocks = getMagicardStock(product)
  if (stocks?.length !== 1 || !stocks[0].price || stocks[0].price <= 0) return undefined
  const stock = stocks[0]
  return {
    '@type': 'Offer' as const,
    url: `${SITE_URL}/produkt/${product.slug}`,
    sku: stock.partNumber,
    price: stock.priceBrutto!.toFixed(2),
    priceCurrency: 'PLN',
    priceValidUntil: cenaWaznaDo(),
    availability: stock.totalStock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@type': 'Organization' as const, name: 'TAKMA', url: SITE_URL },
  }
}
