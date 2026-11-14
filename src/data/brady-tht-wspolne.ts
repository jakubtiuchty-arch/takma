import { wspolneM6 } from './brady-m6-wspolne'

// Materiały Brady na rolkach z gilzą 76 mm (THT, XTHT, 2HT, 3HT, PS, HX, LSZH, ZH, HCM …) i taśmy barwiące
// do przemysłowych drukarek Brady na rolki: i6100, i7100, i7500 (karta nadpisuje relatedProducts, gdy pasuje do części). Jedna karta na rodzinę z brady.eu,
// PN jako warianty. Taśma barwiąca osobno (gilza 25,4 mm). 14.11.2026.
export const wspolneTHT: typeof wspolneM6 = {
  ...wspolneM6,
  relatedProducts: ['brady-i6100', 'brady-i7100', 'brady-i7500'],
}
