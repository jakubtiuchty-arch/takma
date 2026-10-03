import type { Product } from '@/data/products'

const compact = (value: string) => value.toLowerCase().replace(/[\s-]+/g, '')

/** Model search uses the curated accessory relationships, not mentions in comparisons. */
export function findSearchModel(query: string, catalog: Product[]): Product | undefined {
  const key = compact(query.trim())
  if (!key) return undefined
  return catalog.find(product => {
    if (product.categoryId === 'akcesoria' || !product.relatedAccessories?.length) return false
    const name = compact(product.name)
    const withoutBrand = name.startsWith(compact(product.manufacturerId))
      ? name.slice(compact(product.manufacturerId).length)
      : name
    return key === name || key === withoutBrand || key === compact(product.slug)
  })
}

export function modelProductIds(model: Product): Set<string> {
  return new Set([model.id, ...(model.relatedAccessories ?? []), ...model.compatibleAccessories])
}

export function orderModelProducts(list: Product[], model: Product): Product[] {
  const order = new Map(Array.from(modelProductIds(model)).map((id, i) => [id, i]))
  return [...list].sort((a, b) => (order.get(a.id) ?? Infinity) - (order.get(b.id) ?? Infinity))
}
