import { products } from '@/data/products'
import { isZebraTerminalProduct, ZEBRA_TERMINAL_CACHE_MAX_AGE_MS } from '@/lib/zebra-terminal-pricing'

const terminals = products.filter(isZebraTerminalProduct)
export const zebraTerminalSlugs = new Set(terminals.map(product => product.slug))
export const zebraTerminalPartNumbers = new Set(terminals.flatMap(product => product.variants?.length
  ? product.variants.map(variant => variant.partNumber)
  : product.specifications.filter(spec => spec.name === 'Part Number').map(spec => spec.value)))

export function stockCacheMaxAge(partNumber: string, requestedMaxAge: number) {
  return zebraTerminalPartNumbers.has(partNumber)
    ? Math.min(requestedMaxAge, ZEBRA_TERMINAL_CACHE_MAX_AGE_MS)
    : requestedMaxAge
}
