import type { Product } from './products'
import { bradyB30Ciagle, bradyB30CiagleSekcje } from './brady-b30-ciagle'
import { bradyB30Specjalne, bradyB30SpecjalneSekcje } from './brady-b30-specjalne'
import { bradyB30Etykiety, bradyB30EtykietySekcje } from './brady-b30-etykiety'
import { bradyB30ZestawyTasmy, bradyB30ZestawyTasmySekcje } from './brady-b30-zestawy-tasmy'
import { bradyB30TasmyPanelowe, bradyB30TasmyPanelowSekcje } from './brady-b30-tasmy-panelowe'

// Materiały Brady B30 do drukarek znaków i etykiet S3100 i S3700 — zbiorczo, z podziałem na sekcje karty drukarki.
type SekcjaB30 = 'ciagle' | 'etykiety' | 'zestawy' | 'tasmy'

const zestawy: [Product[], Record<string, SekcjaB30>][] = [
  [bradyB30Ciagle, bradyB30CiagleSekcje],
  [bradyB30Specjalne, bradyB30SpecjalneSekcje],
  [bradyB30Etykiety, bradyB30EtykietySekcje],
  [bradyB30ZestawyTasmy, bradyB30ZestawyTasmySekcje],
  [bradyB30TasmyPanelowe, bradyB30TasmyPanelowSekcje],
]

export const bradyB30Materialy: Product[] = zestawy.flatMap(([karty]) => karty)
const sekcje: Record<string, SekcjaB30> = Object.assign({}, ...zestawy.map(([, s]) => s))
const idsSekcji = (s: SekcjaB30) => bradyB30Materialy.filter((p) => (sekcje[p.id] ?? 'etykiety') === s).map((p) => p.id)

export const BRADY_B30_CIAGLE_IDS = new Set(idsSekcji('ciagle'))
export const BRADY_B30_ZESTAWY_IDS = new Set(idsSekcji('zestawy'))
export const BRADY_B30_TASMY_IDS = new Set(idsSekcji('tasmy'))

// Taśmy panelowe (dwu- i czterokolorowe) tylko do S3700; taśma B30-R6700-WT tylko do S3100.
const TYLKO_S3700 = new Set(bradyB30TasmyPanelowe.map((p) => p.id))
const NIE_DO_S3700 = new Set(['brady-b30-r6700-wt'])
const tasmyJednokolorowe = idsSekcji('tasmy').filter((id) => !TYLKO_S3700.has(id))
// Taśma B30-R6300 (bezhalogenowa) nie ma S3100 na liście zgodnych drukarek.
const NIE_DO_S3100 = new Set(['brady-b30-r6300'])

// Kolejność na kartach drukarek: taśmy ciągłe, etykiety i znaki, zestawy, taśmy barwiące (w S3700 najpierw wielokolorowe).
export const BRADY_B30_DO_S3100: string[] = [...idsSekcji('ciagle'), ...idsSekcji('etykiety'), ...idsSekcji('zestawy'), ...tasmyJednokolorowe].filter((id) => !NIE_DO_S3100.has(id))
// i3300 przyjmuje materiały i jednokolorowe taśmy B30 (także B30-R6300); seria B33 dochodzi osobno.
export const BRADY_B30_DO_I3300: string[] = [...idsSekcji('ciagle'), ...idsSekcji('etykiety'), ...idsSekcji('zestawy'), ...tasmyJednokolorowe]
// i4311: jak i3300 bez kart, których żaden numer PN nie pasuje do i4311
const NIE_DO_I4311 = new Set(['brady-b30-25-7569-wt', 'brady-b30-17-7563', 'brady-b30-r6000oc'])
export const BRADY_B30_DO_I4311: string[] = BRADY_B30_DO_I3300.filter((id) => !NIE_DO_I4311.has(id))
// i5300: jak i3300 bez ToughWash B-855 (żaden PN nie pasuje do i5300)
export const BRADY_B30_DO_I5300: string[] = BRADY_B30_DO_I3300.filter((id) => id !== 'brady-b30c-4000-855-yl')
export const BRADY_B30_DO_S3700: string[] = [...idsSekcji('ciagle'), ...idsSekcji('etykiety'), ...idsSekcji('zestawy'), ...Array.from(TYLKO_S3700), ...tasmyJednokolorowe].filter((id) => !NIE_DO_S3700.has(id))
