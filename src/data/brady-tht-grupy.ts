import type { Product } from './products'
import { bradyTHTPermaSleeve, bradyTHTPermaSleeveSekcje } from './brady-tht-permasleeve'
import { bradyTHTHeatex, bradyTHTHeatexSekcje } from './brady-tht-heatex'
import { bradyTHTLszh, bradyTHTLszhSekcje } from './brady-tht-lszh'
import { bradyTHTKoszulkiSpecjalne, bradyTHTKoszulkiSpecjalneSekcje } from './brady-tht-koszulki-specjalne'
import { bradyTHTOwijki, bradyTHTOwijkiSekcje } from './brady-tht-owijki'
import { bradyTHTZawieszki, bradyTHTZawieszkiSekcje } from './brady-tht-zawieszki'
import { bradyTHTElektronika, bradyTHTElektronikaSekcje } from './brady-tht-elektronika'
import { bradyTHTLab, bradyTHTLabSekcje } from './brady-tht-lab'
import { bradyTHTPoliester, bradyTHTPoliesterSekcje } from './brady-tht-poliester'
import { bradyTHTSpecjalne, bradyTHTSpecjalneSekcje } from './brady-tht-specjalne'
import { bradyTHTWypukleRfid, bradyTHTWypukleRfidSekcje } from './brady-tht-wypukle-rfid'
import { bradyTHTTasmy } from './brady-tht-tasmy'

// Materiały Brady na rolkach z gilzą 76 mm i taśmy barwiące 25 mm do drukarek i6100, i7100 i i7500.
// Przynależność do drukarki wynika z relatedProducts karty (karta zawiera drukarkę, gdy pasuje co najmniej jeden PN).
type SekcjaTHT = 'przewody' | 'elektronika' | 'lab' | 'ogolne' | 'rfid'

const zestawy: [Product[], Record<string, SekcjaTHT>][] = [
  [bradyTHTPermaSleeve, bradyTHTPermaSleeveSekcje],
  [bradyTHTHeatex, bradyTHTHeatexSekcje],
  [bradyTHTLszh, bradyTHTLszhSekcje],
  [bradyTHTKoszulkiSpecjalne, bradyTHTKoszulkiSpecjalneSekcje],
  [bradyTHTOwijki, bradyTHTOwijkiSekcje],
  [bradyTHTZawieszki, bradyTHTZawieszkiSekcje],
  [bradyTHTElektronika, bradyTHTElektronikaSekcje],
  [bradyTHTLab, bradyTHTLabSekcje],
  [bradyTHTPoliester, bradyTHTPoliesterSekcje],
  [bradyTHTSpecjalne, bradyTHTSpecjalneSekcje],
  [bradyTHTWypukleRfid, bradyTHTWypukleRfidSekcje],
]

const etykiety: Product[] = zestawy.flatMap(([karty]) => karty)
export const bradyTHTMaterialy: Product[] = [...etykiety, ...bradyTHTTasmy]
const sekcje: Record<string, SekcjaTHT> = Object.assign({}, ...zestawy.map(([, s]) => s))
const sekcja = (p: Product): SekcjaTHT => sekcje[p.id] ?? 'ogolne'
const idsSekcji = (s: SekcjaTHT) => etykiety.filter((p) => sekcja(p) === s).map((p) => p.id)

export const BRADY_THT_PRZEWODY_IDS = new Set(idsSekcji('przewody'))
export const BRADY_THT_ELEKTRONIKA_IDS = new Set(idsSekcji('elektronika'))
export const BRADY_THT_LAB_IDS = new Set(idsSekcji('lab'))
export const BRADY_THT_OGOLNE_IDS = new Set(idsSekcji('ogolne'))
export const BRADY_THT_RFID_IDS = new Set(idsSekcji('rfid'))
export const BRADY_THT_TASMY_IDS = new Set(bradyTHTTasmy.map((p) => p.id))

const KOLEJNOSC: SekcjaTHT[] = ['przewody', 'elektronika', 'lab', 'ogolne', 'rfid']
const doDrukarki = (drukarka: string): string[] => {
  const pasuje = (p: Product) => (p.relatedProducts ?? []).includes(drukarka)
  return [
    ...KOLEJNOSC.flatMap((s) => etykiety.filter((p) => sekcja(p) === s && pasuje(p)).map((p) => p.id)),
    ...bradyTHTTasmy.filter(pasuje).map((p) => p.id),
  ]
}

export const BRADY_THT_DO_I6100: string[] = doDrukarki('brady-i6100')
export const BRADY_THT_DO_I7100: string[] = doDrukarki('brady-i7100')
export const BRADY_THT_DO_I7500: string[] = doDrukarki('brady-i7500')
