import type { Product } from './products'
import { bradyM6Owijki, bradyM6OwijkiSekcje } from './brady-m6-owijki'
import { bradyM6Koszulki, bradyM6KoszulkiSekcje } from './brady-m6-koszulki'
import { bradyM6WkladkiZawieszki, bradyM6WkladkiZawieszkiSekcje } from './brady-m6-wkladki-zawieszki'
import { bradyM6ZawieszkiKablowe, bradyM6ZawieszkiKabloweSekcje } from './brady-m6-zawieszki-kablowe'
import { bradyM6Winyl, bradyM6WinylSekcje } from './brady-m6-winyl'
import { bradyM6Poliester, bradyM6PoliesterSekcje } from './brady-m6-poliester'
import { bradyM6NylonMetal, bradyM6NylonMetalSekcje } from './brady-m6-nylon-metal'
import { bradyM6ElektronikaPlomby, bradyM6ElektronikaPlombySekcje } from './brady-m6-elektronika-plomby'
import { bradyM6TabliczkiTasmy, bradyM6TabliczkiTasmySekcje } from './brady-m6-tabliczki-tasmy'
import { bradyM6Lab, bradyM6LabSekcje } from './brady-m6-lab'
import { bradyM7Kable, bradyM7KableSekcje } from './brady-m7-kable'
import { bradyM7Etykiety, bradyM7EtykietySekcje } from './brady-m7-etykiety'
import { bradyM7Specjalne, bradyM7SpecjalneSekcje } from './brady-m7-specjalne'
import { bradyM7Tasmy, bradyM7TasmySekcje } from './brady-m7-tasmy'

// Materiały Brady M6 / M6C / BM i taśmy M61 do M610 (i M611) — zbiorczo, z podziałem na sekcje karty drukarki.
type Sekcja = 'kable' | 'ogolne' | 'lab' | 'tasmy'

const zestawy: [Product[], Record<string, Sekcja>][] = [
  [bradyM6Owijki, bradyM6OwijkiSekcje],
  [bradyM6Koszulki, bradyM6KoszulkiSekcje],
  [bradyM6WkladkiZawieszki, bradyM6WkladkiZawieszkiSekcje],
  [bradyM6ZawieszkiKablowe, bradyM6ZawieszkiKabloweSekcje],
  [bradyM6Winyl, bradyM6WinylSekcje],
  [bradyM6Poliester, bradyM6PoliesterSekcje],
  [bradyM6NylonMetal, bradyM6NylonMetalSekcje],
  [bradyM6ElektronikaPlomby, bradyM6ElektronikaPlombySekcje],
  [bradyM6Lab, bradyM6LabSekcje],
  [bradyM6TabliczkiTasmy, bradyM6TabliczkiTasmySekcje],
]

// Materiały tylko do M710: kasety M7 / M7C, materiały BM7 / BM7C i taśmy M7-R (karty brady-m7-*.ts).
const zestawyM7: [Product[], Record<string, Sekcja>][] = [
  [bradyM7Kable, bradyM7KableSekcje],
  [bradyM7Etykiety, bradyM7EtykietySekcje],
  [bradyM7Specjalne, bradyM7SpecjalneSekcje],
  [bradyM7Tasmy, bradyM7TasmySekcje],
]

const kartyM6: Product[] = zestawy.flatMap(([karty]) => karty)
const kartyM7: Product[] = zestawyM7.flatMap(([karty]) => karty)
export const bradyM6Materialy: Product[] = [...kartyM6, ...kartyM7]

const sekcje: Record<string, Sekcja> = Object.assign({}, ...[...zestawy, ...zestawyM7].map(([, s]) => s))
const idsSekcji = (s: Sekcja, karty: Product[] = kartyM6) => karty.filter((p) => (sekcje[p.id] ?? 'ogolne') === s).map((p) => p.id)
const idsWszystkich = (s: Sekcja) => idsSekcji(s, bradyM6Materialy)

// Zbiory sekcji kart drukarek (M610, M611, M710) obejmują materiały M6 i M7.
export const BRADY_M6_KABLE_IDS = new Set(idsWszystkich('kable'))
export const BRADY_M6_LAB_IDS = new Set(idsWszystkich('lab'))
export const BRADY_M6_TASMY_IDS = new Set(idsWszystkich('tasmy'))

// Kolejność na karcie M610: kable, etykiety ogólne, laboratorium, taśmy barwiące.
export const BRADY_M6_DO_M610: string[] = [...idsSekcji('kable'), ...idsSekcji('ogolne'), ...idsSekcji('lab'), ...idsSekcji('tasmy')]

// M710: etykiety M6 / M6C / BM / BMC pasują po założeniu adaptera M71-ADAPT-BK (jest w komplecie z drukarką).
// Taśmy M61 nie pasują (M710 ma taśmy M7-R…). Pominięte rodziny, dla których Brady nie podaje zgodności z M710.
export const BRADY_M6_NIE_DO_M710 = new Set(['brady-m6-236-499-wt', 'brady-m6-08-7593-wt', 'brady-m6-15x75-348-yl', 'brady-m6-35x102-pia-wt', 'brady-m6-227-348-wt'])
const doM710 = (s: Sekcja) => [...idsSekcji(s).filter((id) => !BRADY_M6_NIE_DO_M710.has(id)), ...idsSekcji(s, kartyM7)]
export const BRADY_M6_DO_M710: string[] = [...doM710('kable'), ...doM710('ogolne'), ...doM710('lab'), ...idsSekcji('tasmy', kartyM7)]
