import type { Product } from './products'
import { wspolneM6 } from './brady-m6-wspolne'

// Materiały Brady B30 / B30C / B30EP i taśmy barwiące B30 do drukarek znaków i etykiet S3100 i S3700 (także starsze BBP3x, S3000, i3300).
// Jedna karta na rodzinę materiału z brady.eu; rozmiary i kolory jako warianty. Na zapytanie (brak cen w /api/stock). 14.11.2026.
export const wspolneB30: typeof wspolneM6 = {
  ...wspolneM6,
  relatedProducts: ['brady-s3100', 'brady-s3700'],
}
