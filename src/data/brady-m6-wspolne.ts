import type { Product } from './products'

// Materiały Brady M6 / M6C / BM do drukarek M610 i M611 (oraz M710 z adapterem) i taśmy barwiące M61.
// M710 w relatedProducts; taśmy M61 i rodziny bez zgodności z M710 nadpisują relatedProducts bez M710.
// Etykieta jest w kasecie na etykiety, taśma barwiąca w osobnej kasecie M61. Jedna karta na rodzinę
// materiału z brady.eu; rozmiary i kolory jako warianty. Brady nie ma cen w /api/stock → na zapytanie. 14.11.2026.

export const wspolneM6: Pick<Product, 'categoryId' | 'subcategoryIds' | 'manufacturerId' | 'quoteOnly' | 'availability' | 'tags' | 'isNew' | 'isBestseller' | 'compatibleAccessories' | 'relatedAccessories' | 'relatedProducts' | 'downloads' | 'createdAt' | 'updatedAt'> = {
  categoryId: 'materialy-eksploatacyjne',
  subcategoryIds: [],
  manufacturerId: 'brady',
  quoteOnly: true,
  availability: 'unavailable',
  tags: ['produkcja'],
  isNew: true,
  isBestseller: false,
  compatibleAccessories: [],
  relatedAccessories: [],
  relatedProducts: ['brady-m610', 'brady-m611', 'brady-m710'],
  downloads: [],
  createdAt: '2026-11-14',
  updatedAt: '2026-11-14',
}
