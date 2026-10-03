import { products } from '@/data/products'
import type { RequiredAccessoryItem } from './RequiredAccessories'

/** Keep instructions and choices in prose; show referenced products separately. */
export function getAccessoryDescriptionBlock(text: string) {
  const accessories: RequiredAccessoryItem[] = []
  const devices: (typeof products)[number][] = []
  const seen = new Set<string>()
  const prose = text.replace(/\[([^\]]+)\]\(\/produkt\/([^)]+)\)/g, (original, label: string, slug: string) => {
    const product = products.find(p => p.slug === slug)
    if (!product) return original
    const labelPn = label.match(/ \(([^)]+)\)$/)?.[1]
    const variant = product.variants?.find(v => v.partNumber === labelPn)
    const pn = variant?.partNumber ?? product.specifications.find(s => s.name === 'Part Number')?.value
    const id = variant ? `${product.slug}__${variant.partNumber}` : product.id
    if (!seen.has(id)) {
      seen.add(id)
      if (product.categoryId === 'akcesoria') {
        accessories.push({
          id, slug, name: product.name, pn,
          image: product.images[0],
          price: variant?.promoPrice ?? variant?.priceFrom ?? product.priceFrom,
          availability: variant?.availability ?? product.availability,
          categoryId: product.categoryId,
          manufacturerId: product.manufacturerId,
        })
      } else devices.push(product)
    }
    return pn ?? product.name
  })
  const linksOnly = text.trim().split('\n').every(line => /^\s*- \[[^\]]+\]\(\/produkt\/[^)]+\)$/.test(line))
  return { prose: linksOnly && seen.size ? '' : prose, accessories, devices }
}
