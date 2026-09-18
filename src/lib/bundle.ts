import type { Product } from '@/data/products'

/**
 * Numer katalogowy składnika zestawu: wskazany wariant, inaczej pierwszy wariant karty,
 * inaczej „Part Number” ze specyfikacji. Ten sam klucz służy do pobrania ceny na żywo.
 */
export function bundleItemPartNumber(item: { variantPn?: string }, product: Product): string | undefined {
  return item.variantPn ?? product.variants?.[0]?.partNumber ?? product.specifications.find((s) => s.name === 'Part Number')?.value
}

/** Numer katalogowy samego zestawu (komplet producenta ma własny PN). */
export function bundlePartNumber(bundle: Product): string | undefined {
  return bundle.specifications.find((s) => s.name === 'Part Number')?.value
}
