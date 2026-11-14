import type { Product } from './products'
import { wspolneM6 } from './brady-m6-wspolne'

// Materiały eksploatacyjne Brady do kolorowej drukarki atramentowej BradyJet J7300: kasety z tuszem P-, rolka J-ALIGN
// oraz etykiety J- i JC- do druku atramentowego. Jedna karta na rodzinę z brady.eu, PN jako warianty. Na zapytanie. 14.11.2026.
export const wspolneJ7300: typeof wspolneM6 = {
  ...wspolneM6,
  relatedProducts: ['brady-j7300'],
}
