import type { Product } from '@/data/products'
import { selectPurchasePrice } from '@/lib/price-selection'
import type { SourcePrices } from '@/lib/price-selection'

/** Terminale: cena sprzedaży netto = potwierdzony koszt zakupu × 1,10. */
export const ZEBRA_TERMINAL_PRICE_MULTIPLIER = 1.10
export const ZEBRA_TERMINAL_CACHE_MAX_AGE_MS = 60 * 60 * 1000

export function isZebraTerminalProduct(product: Pick<Product, 'manufacturerId' | 'categoryId'>) {
  return product.manufacturerId === 'zebra' && product.categoryId === 'terminale-mobilne'
}

export function isZebraTerminalSlug(slug: string) {
  return /^zebra-(?:tc|mc|hc|em)\d/.test(slug)
}

/** Koszt realizacji zamówienia: preferuj dostawcę, który ma daną konfigurację. */
export function selectTerminalPurchasePrice(prices: SourcePrices, stock: Record<keyof SourcePrices, number>, anchor?: number) {
  const available = Object.fromEntries(Object.entries(prices).filter(([source, price]) =>
    price != null && price > 0 && stock[source as keyof SourcePrices] > 0)) as SourcePrices
  return selectPurchasePrice(Object.keys(available).length ? available : prices, anchor)
}
