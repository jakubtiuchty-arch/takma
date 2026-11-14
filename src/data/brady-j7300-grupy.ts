import type { Product } from './products'
import { bradyJ7300TuszeKarty } from './brady-j7300-tusze'
import { bradyJ7300Ogolne, bradyJ7300OgolneSekcje } from './brady-j7300-etykiety-ogolne'
import { bradyJ7300Poliester, bradyJ7300PoliesterSekcje } from './brady-j7300-poliester'
import { bradyJ7300LabZawieszki, bradyJ7300LabZawieszkiSekcje } from './brady-j7300-lab-zawieszki'

// Materiały do kolorowej drukarki BradyJet J7300 — zbiorczo, z podziałem na sekcje karty drukarki:
// tusze i rolka wyrównująca, etykiety ogólne i przemysłowe, etykiety laboratoryjne, zawieszki i opaski z rzepem.
type SekcjaJ7300 = 'tusze' | 'ogolne' | 'lab' | 'zawieszki'

const zestawy: [Product[], Record<string, SekcjaJ7300>][] = [
  [bradyJ7300TuszeKarty, Object.fromEntries(bradyJ7300TuszeKarty.map((p) => [p.id, 'tusze' as const]))],
  [bradyJ7300Ogolne, bradyJ7300OgolneSekcje],
  [bradyJ7300Poliester, bradyJ7300PoliesterSekcje],
  [bradyJ7300LabZawieszki, bradyJ7300LabZawieszkiSekcje],
]

export const bradyJ7300Materialy: Product[] = zestawy.flatMap(([karty]) => karty)
const sekcje: Record<string, SekcjaJ7300> = Object.assign({}, ...zestawy.map(([, s]) => s))
const idsSekcji = (s: SekcjaJ7300) => bradyJ7300Materialy.filter((p) => (sekcje[p.id] ?? 'ogolne') === s).map((p) => p.id)

export const BRADY_J7300_TUSZE_IDS = new Set(idsSekcji('tusze'))
export const BRADY_J7300_LAB_IDS = new Set(idsSekcji('lab'))
export const BRADY_J7300_ZAWIESZKI_IDS = new Set(idsSekcji('zawieszki'))

// Kolejność na karcie J7300: tusze, etykiety ogólne, laboratoryjne, zawieszki.
export const BRADY_J7300_MATERIALY: string[] = [...idsSekcji('tusze'), ...idsSekcji('ogolne'), ...idsSekcji('lab'), ...idsSekcji('zawieszki')]
