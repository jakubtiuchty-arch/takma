import type { Product } from './products'
import { bradyJ4000TuszeKarty } from './brady-j4000-tusze'
import { bradyJ4000WinylPapier, bradyJ4000WinylPapierSekcje } from './brady-j4000-winyl-papier'
import { bradyJ4000PoliesterPp, bradyJ4000PoliesterPpSekcje } from './brady-j4000-poliester-pp'

// Materiały do kolorowej drukarki BradyJet J4000 — zbiorczo, z podziałem na sekcje karty drukarki:
// tusz i nasadki, etykiety ogólne i przemysłowe, etykiety odporne na chemikalia, laminat i zestawy z laminatem, zawieszki.
type SekcjaJ4000 = 'tusze' | 'ogolne' | 'lab' | 'laminaty' | 'zawieszki'

const zestawy: [Product[], Record<string, SekcjaJ4000>][] = [
  [bradyJ4000TuszeKarty, Object.fromEntries(bradyJ4000TuszeKarty.map((p) => [p.id, 'tusze' as const]))],
  [bradyJ4000WinylPapier, bradyJ4000WinylPapierSekcje],
  [bradyJ4000PoliesterPp, bradyJ4000PoliesterPpSekcje],
]

export const bradyJ4000Materialy: Product[] = zestawy.flatMap(([karty]) => karty)
const sekcje: Record<string, SekcjaJ4000> = Object.assign({}, ...zestawy.map(([, s]) => s))
const idsSekcji = (s: SekcjaJ4000) => bradyJ4000Materialy.filter((p) => (sekcje[p.id] ?? 'ogolne') === s).map((p) => p.id)

export const BRADY_J4000_TUSZE_IDS = new Set(idsSekcji('tusze'))
export const BRADY_J4000_LAB_IDS = new Set(idsSekcji('lab'))
export const BRADY_J4000_LAMINATY_IDS = new Set(idsSekcji('laminaty'))
export const BRADY_J4000_ZAWIESZKI_IDS = new Set(idsSekcji('zawieszki'))

// Kolejność na karcie J4000: tusz i nasadki, etykiety ogólne, odporne na chemikalia, laminaty, zawieszki.
export const BRADY_J4000_MATERIALY: string[] = [...idsSekcji('tusze'), ...idsSekcji('ogolne'), ...idsSekcji('lab'), ...idsSekcji('laminaty'), ...idsSekcji('zawieszki')]
