import type { Product } from './products'
import { wspolneM6 } from './brady-m6-wspolne'

// Materiały Brady tylko do drukarki M710: kasety M7 / M7C, materiały zbiorcze BM7 / BM7C i taśmy barwiące M7-R.
// Te same zasady co wspolneM6 (na zapytanie, kategoria materiałów), ale powiązana drukarka to tylko M710. 14.11.2026.

export const wspolneM7: typeof wspolneM6 = {
  ...wspolneM6,
  relatedProducts: ['brady-m710'],
}
