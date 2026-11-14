import type { Product } from './products'
import { wspolneM6 } from './brady-m6-wspolne'

// Materiały eksploatacyjne Brady do kolorowej drukarki atramentowej BradyJet J4000: kaseta z tuszem J40-CMY, nasadki J40-CAP,
// etykiety J40-, J40C-, J50-, J50C- do druku atramentowego i laminat LAM. Jedna karta na rodzinę z brady.eu, PN jako warianty. 14.11.2026.
export const wspolneJ4000: typeof wspolneM6 = {
  ...wspolneM6,
  relatedProducts: ['brady-j4000'],
}
