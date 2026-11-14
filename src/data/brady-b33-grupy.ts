import type { Product } from './products'
import { bradyB33KoszulkiZawieszki, bradyB33KoszulkiZawieszkiSekcje } from './brady-b33-koszulki-zawieszki'
import { bradyB33Owijki, bradyB33OwijkiSekcje } from './brady-b33-owijki'
import { bradyB33Elektronika, bradyB33ElektronikaSekcje } from './brady-b33-elektronika'
import { bradyB33Lab, bradyB33LabSekcje } from './brady-b33-lab'
import { bradyB33Poliester, bradyB33PoliesterSekcje } from './brady-b33-poliester'
import { bradyB33MetalizowaneInne, bradyB33MetalizowaneInneSekcje } from './brady-b33-metalizowane-inne'

// Materiały Brady B33 do przemysłowej drukarki i3300 — zbiorczo, z podziałem na sekcje karty drukarki.
type SekcjaB33 = 'przewody' | 'elektronika' | 'lab' | 'ogolne'

const zestawy: [Product[], Record<string, SekcjaB33>][] = [
  [bradyB33KoszulkiZawieszki, bradyB33KoszulkiZawieszkiSekcje],
  [bradyB33Owijki, bradyB33OwijkiSekcje],
  [bradyB33Elektronika, bradyB33ElektronikaSekcje],
  [bradyB33Lab, bradyB33LabSekcje],
  [bradyB33Poliester, bradyB33PoliesterSekcje],
  [bradyB33MetalizowaneInne, bradyB33MetalizowaneInneSekcje],
]

export const bradyB33Materialy: Product[] = zestawy.flatMap(([karty]) => karty)
const sekcje: Record<string, SekcjaB33> = Object.assign({}, ...zestawy.map(([, s]) => s))
const idsSekcji = (s: SekcjaB33) => bradyB33Materialy.filter((p) => (sekcje[p.id] ?? 'ogolne') === s).map((p) => p.id)

export const BRADY_B33_PRZEWODY_IDS = new Set(idsSekcji('przewody'))
export const BRADY_B33_ELEKTRONIKA_IDS = new Set(idsSekcji('elektronika'))
export const BRADY_B33_LAB_IDS = new Set(idsSekcji('lab'))
export const BRADY_B33_OGOLNE_IDS = new Set(idsSekcji('ogolne'))

// Kolejność na karcie i3300: przewody, elektronika, laboratorium, etykiety ogólne B33.
export const BRADY_B33_DO_I3300: string[] = [...idsSekcji('przewody'), ...idsSekcji('elektronika'), ...idsSekcji('lab'), ...idsSekcji('ogolne')]
export const BRADY_B33_DO_I4311: string[] = BRADY_B33_DO_I3300
