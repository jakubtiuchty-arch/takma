import type { Product } from './products'
import { wspolneM6 } from './brady-m6-wspolne'

// Materiały Brady B33 / B33C / B33D / B33FP / B33FT / B33R do przemysłowej drukarki BradyPrinter i3300
// (także starsza BBP33). Taśma barwiąca w osobnej kasecie serii B30. Jedna karta na rodzinę z brady.eu, PN jako warianty. 14.11.2026.
export const wspolneB33: typeof wspolneM6 = {
  ...wspolneM6,
  relatedProducts: ['brady-i3300'],
}
