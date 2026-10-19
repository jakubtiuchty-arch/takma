import { products } from '@/data/products'

const categoryIds = new Set(['drukarki-rfid', 'etykiety-rfid', 'terminale-rfid', 'uchwyty-rfid'])
const categorySlugs = new Set(['drukarki-rfid', 'etykiety-rfid-zebra', 'terminale-rfid', 'uchwyty-rfid'])
const rfidProducts = products.filter(product => product.subcategoryIds?.some(id => categoryIds.has(id)))
const productIds = new Set(rfidProducts.flatMap(product => [
  product.id,
  ...(product.relatedAccessories ?? []),
  ...product.compatibleAccessories,
]))

export function isRfidContentProduct(productId: string) {
  return productIds.has(productId)
}

export function isRfidContentCategory(slug: string) {
  return categorySlugs.has(slug)
}
