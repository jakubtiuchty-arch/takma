import type { Product } from '@/data/products'

// Ignore case, spaces and typographic dashes, but preserve every suffix character.
const normalize = (value: string) => value.trim().replace(/^PN\s*:\s*/i, '').toUpperCase().replace(/[\s\-‐‑‒–—−]+/g, '')

export function productSearchPartNumbers(product: Product): string[] {
  return Array.from(new Set([
    ...(product.variants ?? []).map(variant => variant.partNumber),
    ...product.specifications.filter(spec => spec.name === 'Part Number').map(spec => spec.value),
  ].filter(Boolean)))
}

export interface PartNumberSearch {
  exact: boolean
  matches: Map<string, string[]>
}

/** An exact owned PN takes precedence over longer PNs and mentions in other products. */
export function findPartNumberSearch(query: string, catalog: Product[]): PartNumberSearch | undefined {
  const key = normalize(query)
  if (!key) return undefined
  const rows = catalog.map(product => ({ id: product.id, pns: productSearchPartNumbers(product) }))
  const matching = (test: (pn: string) => boolean) => new Map(rows.flatMap(row => {
    const pns = row.pns.filter(pn => test(normalize(pn)))
    return pns.length ? [[row.id, pns] as [string, string[]]] : []
  }))
  const exact = matching(pn => pn === key)
  if (exact.size) return { exact: true, matches: exact }

  // Partial PNs search the product's own numbers only. Ordinary multiword searches stay textual.
  const raw = query.trim().replace(/^PN\s*:\s*/i, '')
  if (key.length < 4 || !/\d/.test(key) || !/^[a-z0-9\s./_\-‐‑‒–—−]+$/i.test(raw)) return undefined
  const prefix = matching(pn => pn.startsWith(key))
  if (prefix.size || /[./_\-‐‑‒–—−]/.test(raw) || /^\d+$/.test(raw)) return { exact: false, matches: prefix }
  return undefined
}

/** Keep matching variants on catalog cards, including their price and availability. */
export function filterPartNumberProducts(catalog: Product[], search: PartNumberSearch): Product[] {
  return catalog.flatMap(product => {
    const pns = search.matches.get(product.id)
    if (!pns) return []
    if (!product.variants?.length) return [product]
    const variants = product.variants.filter(variant => pns.includes(variant.partNumber))
    if (!variants.length) return [product]
    const prices = variants.map(v => v.priceFrom).filter((price): price is number => price != null && price > 0)
    return [{ ...product, variants, priceFrom: prices.length ? Math.min(...prices) : undefined,
      availability: variants.some(v => v.availability === 'available') ? 'available' : 'unavailable' }]
  })
}
