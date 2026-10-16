import type { WarehouseProduct } from './takma-warehouse'

type SizedProduct = Pick<WarehouseProduct, 'variant' | 'category'>

// Only use dimensions recorded in the inventory snapshot, never a catalogue list.
export function warehouseSize(product: SizedProduct): string | null {
  const match = product.variant.match(/(?:^|\s)(\d+(?:[.,]\d+)?)\s*(mm|cm)?\s*[×xх*]\s*(\d+(?:[.,]\d+)?)\s*(mm|cm|m)?\b/i)
  if (!match) return null
  const width = Number(match[1].replace(',', '.')) * ((match[2]?.toLowerCase() || (product.category !== 'ribbon' ? match[4]?.toLowerCase() : 'mm')) === 'cm' ? 10 : 1)
  let height = Number(match[3].replace(',', '.'))
  const unit = match[4]?.toLowerCase()
  if (!width || !height) return null
  if (product.category === 'ribbon') {
    if (unit === 'mm') height /= 1000
    if (unit === 'cm') height /= 100
  } else {
    if (unit === 'cm') height *= 10
    if (unit === 'm') height *= 1000
  }
  const format = (n: number) => Number(n.toFixed(6)).toString().replace('.', ',')
  return product.category === 'ribbon' ? `${format(width)} mm × ${format(height)} m` : `${format(width)} × ${format(height)} mm`
}

export function warehouseSizes(products: SizedProduct[]): string[] {
  return Array.from(new Set(products.map(warehouseSize).filter((size): size is string => size !== null)))
    .sort((a, b) => {
      const values = (size: string) => (size.match(/\d+(?:,\d+)?/g) || []).map(n => Number(n.replace(',', '.')))
      const av = values(a), bv = values(b)
      return av[0] - bv[0] || av[1] - bv[1]
    })
}
