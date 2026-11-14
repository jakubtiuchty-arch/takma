import type { Product } from './products'
import { bradyB30Ciagle, bradyB30CiagleSekcje } from './brady-b30-ciagle'
import { bradyB30Specjalne, bradyB30SpecjalneSekcje } from './brady-b30-specjalne'
import { bradyB30Etykiety, bradyB30EtykietySekcje } from './brady-b30-etykiety'
import { bradyB30ZestawyTasmy, bradyB30ZestawyTasmySekcje } from './brady-b30-zestawy-tasmy'

// Materiały Brady B30 do drukarki znaków i etykiet S3100 — zbiorczo, z podziałem na sekcje karty drukarki.
type SekcjaB30 = 'ciagle' | 'etykiety' | 'zestawy' | 'tasmy'

const zestawy: [Product[], Record<string, SekcjaB30>][] = [
  [bradyB30Ciagle, bradyB30CiagleSekcje],
  [bradyB30Specjalne, bradyB30SpecjalneSekcje],
  [bradyB30Etykiety, bradyB30EtykietySekcje],
  [bradyB30ZestawyTasmy, bradyB30ZestawyTasmySekcje],
]

export const bradyB30Materialy: Product[] = zestawy.flatMap(([karty]) => karty)
const sekcje: Record<string, SekcjaB30> = Object.assign({}, ...zestawy.map(([, s]) => s))
const idsSekcji = (s: SekcjaB30) => bradyB30Materialy.filter((p) => (sekcje[p.id] ?? 'etykiety') === s).map((p) => p.id)

export const BRADY_B30_CIAGLE_IDS = new Set(idsSekcji('ciagle'))
export const BRADY_B30_ZESTAWY_IDS = new Set(idsSekcji('zestawy'))
export const BRADY_B30_TASMY_IDS = new Set(idsSekcji('tasmy'))

// Kolejność na karcie S3100: taśmy ciągłe, etykiety i znaki, zestawy, taśmy barwiące.
export const BRADY_B30_DO_S3100: string[] = [...idsSekcji('ciagle'), ...idsSekcji('etykiety'), ...idsSekcji('zestawy'), ...idsSekcji('tasmy')]
