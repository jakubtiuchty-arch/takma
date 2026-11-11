import type { ProductSpecification, ProductVariant } from '@/data/products'
import { LABEL_CORE } from '@/data/label-core'

// Gilza ETYKIET wg karty drukarki. Pomijamy specyfikacje taśmy: „Taśma barwiąca … gilza 25,4 mm”
// to gilza taśmy, a nie rolki etykiet.
const LABEL_MEDIA_SPEC = /materia|rolk|gilz|rdze|nośnik|medi/i
const RIBBON_SPEC = /taśm|ribbon/i
const CORE_WORD = /(?:gilz|rdze)[a-ząćęłńóśźż]*/gi
// Wymiary w calach („(3")”, „8 cali”) nie mogą trafić do listy średnic w mm
const INCHES = /\d+(?:[.,]\d+)?\s*(?:["″”]|cal[a-z]*)/g

/** Liczby przed pierwszym „mm” (bez wymiarów w calach), np. „25,4 mm lub 38 mm” → [25.4]. */
function mmBeforeFirstMm(text: string): number[] {
  const rest = text.replace(INCHES, '')
  const mm = rest.search(/mm(?![a-z])/)
  if (mm < 0) return []
  return (rest.slice(0, mm).match(/\d+(?:[.,]\d+)?/g) ?? []).map(n => parseFloat(n.replace(',', '.')))
}

/**
 * Średnice gilzy etykiet podane w specyfikacji drukarki (mm), np. „gilza 76 lub 101 mm” → [76, 101],
 * „203 mm (8") na rdzeniu 76 mm (3")” → [76]. Liczby czytamy tylko od słowa „gilza”/„rdzeń” do
 * najbliższego „mm”, żeby nie złapać średnicy rolki („rolka do 220 mm”).
 * Gdy słowo jest w nazwie specyfikacji („Gilza materiału: 25,4 mm (1")”), wartość nie powtarza go,
 * więc bierzemy liczby z początku wartości → [25.4].
 */
export function printerLabelCoresMm(specs: ProductSpecification[] | undefined): number[] {
  const cores: number[] = []
  for (const s of specs ?? []) {
    if (!LABEL_MEDIA_SPEC.test(s.name) || RIBBON_SPEC.test(s.name)) continue
    // Gdy wartość sama nazywa gilzę („Średnica rolki i gilzy: Rolka do 203,2 mm; gilza 25,4–76,2 mm”),
    // początek wartości to średnica rolki — wtedy wystarcza odczyt po słowie niżej.
    if (/gilz|rdze/i.test(s.name) && !/gilz|rdze/i.test(s.value)) cores.push(...mmBeforeFirstMm(s.value.split(';')[0]))
    for (const m of Array.from(s.value.matchAll(CORE_WORD))) {
      cores.push(...mmBeforeFirstMm(s.value.slice(m.index! + m[0].length).split(';')[0]))
    }
  }
  return cores
}

/** Najmniejsza gilza etykiet z karty drukarki (mm) albo undefined, gdy karta jej nie podaje. */
export function printerMinLabelCoreMm(specs: ProductSpecification[] | undefined): number | undefined {
  const cores = printerLabelCoresMm(specs)
  return cores.length ? Math.min(...cores) : undefined
}

/** Gilza wariantu etykiety (mm): atrybut 'Rdzeń' / 'Rdzeń (gilza)', a gdy go brak — LABEL_CORE. Fanfold i brak danych → undefined. */
export function labelVariantCoreMm(v: ProductVariant): number | undefined {
  const raw = v.attributes?.['Rdzeń'] ?? v.attributes?.['Rdzeń (gilza)'] ?? LABEL_CORE[v.partNumber]
  const m = raw?.match(/\d+(?:[.,]\d+)?/)
  return m ? parseFloat(m[0].replace(',', '.')) : undefined
}

// Etykiety na drukarce biurkowej: tylko małe gilze. Rolka na gilzie 76 mm nie wejdzie do drukarki desktop.
const DESKTOP_LABEL_CORES = ['12', '19', '25']

// Wymiary gilzy po słowie „gilza”/„rdzeń” albo w wartości specyfikacji o takiej nazwie: liczby połączone
// „lub”, „i”, przecinkiem albo zakresem („gilza 76 lub 101 mm”, „rdzeń 38–76 mm”, „19 mm (0,75") lub
// 34,9 mm (1,375")”). Inny tekst kończy odczyt, więc gilze „z opcjonalnymi adapterami” i średnica rolki po
// ukośniku („rdzeniu 76 mm / 152 mm OD na rdzeniu 25 mm”) nie trafiają do wyniku.
const LABEL_CORE_LEAD = /^[^\d;()]{0,20}?(?=\d)/
const LABEL_CORE_NUM = /^(\d+(?:[.,]\d+)?)\s*(?:mm(?![a-z]))?\s*(?:\([^)]*\))?/

function labelCoreChainMm(text: string, slash: boolean): number[] {
  const sep = slash ? /^\s*(?:lub|albo|i|,|\/|[–-])\s*(?=\d)/ : /^\s*(?:lub|albo|i|,|[–-])\s*(?=\d)/
  const out: number[] = []
  let rest = text.replace(INCHES, '').replace(LABEL_CORE_LEAD, '')
  let lastMm = false
  for (;;) {
    const m = rest.match(LABEL_CORE_NUM)
    if (!m) break
    out.push(parseFloat(m[1].replace(',', '.')))
    lastMm = /mm/.test(m[0])
    rest = rest.slice(m[0].length)
    const s = rest.match(sep)
    if (!s) break
    rest = rest.slice(s[0].length)
  }
  // Ostatnia liczba łańcucha musi mieć „mm” („gilza 76 lub 101 mm”), inaczej to nie wymiar gilzy w mm
  return lastMm ? out : []
}

/**
 * Największa gilza etykiet z karty drukarki (mm) albo undefined. Czyta wszystkie wymiary gilzy, a nie tylko
 * liczby przed pierwszym „mm”: „Rdzeń rolki mediów: 25,4 mm (1") lub 76 mm (3")” → 76, „Gilza wewnętrzna:
 * 19 mm (0,75") lub 34,9 mm (1,375")” → 34,9. Specyfikacje z minimum w nazwie („Min średnica rdzenia”)
 * nie mówią o największej gilzy, więc je pomijamy.
 */
export function printerMaxLabelCoreMm(specs: ProductSpecification[] | undefined): number | undefined {
  const cores: number[] = []
  for (const s of specs ?? []) {
    if (!LABEL_MEDIA_SPEC.test(s.name) || RIBBON_SPEC.test(s.name) || /\bmin/i.test(s.name)) continue
    for (const part of s.value.split(';')) {
      if (/gilz|rdze/i.test(s.name) && !/gilz|rdze/i.test(s.value)) cores.push(...labelCoreChainMm(part, true))
      for (const m of Array.from(part.matchAll(CORE_WORD))) cores.push(...labelCoreChainMm(part.slice(m.index! + m[0].length), false))
      if (/gilz|rdze/i.test(s.name) && !/gilz|rdze/i.test(s.value)) break
    }
  }
  return cores.length ? Math.max(...cores) : undefined
}

/** Największa średnica rolki etykiet (mm) z karty drukarki: „Maks. średnica rolki: 66 mm (2,6")” → 66. */
export function printerMaxRollDiameterMm(specs: ProductSpecification[] | undefined): number | undefined {
  for (const s of specs ?? []) {
    if (!/średnic/i.test(s.name) || !/rolk/i.test(s.name) || RIBBON_SPEC.test(s.name)) continue
    const m = s.value.replace(INCHES, '').match(/(\d+(?:[.,]\d+)?)\s*mm(?![a-z])/)
    if (m) return parseFloat(m[1].replace(',', '.'))
  }
  return undefined
}

export interface PrinterLabelCoreRule {
  /** Dozwolone gilze etykiet (początek liczby mm), np. ['12', '19', '25'] dla biurkowych; brak → bez filtra. */
  allowedCores?: string[]
  /** Najmniejsza gilza etykiet (mm) z karty drukarki; rolki o mniejszej gilzie odpadają. */
  minCoreMm?: number
  /** Największa dopuszczalna gilza etykiet (mm, włącznie); rolki o większej gilzie odpadają. */
  maxCoreMm?: number
  /** Gilza drukarki biurkowej ponad 26 mm: standardowe etykiety biurkowe (gilza 25 mm) nie pasują, sekcji etykiet nie ma. */
  labelsDontFit: boolean
}

/**
 * Reguła gilzy etykiet dla karty drukarki, wspólna dla sekcji etykiet termicznych i termotransferowych.
 * Biurkowe: gilze 12/19/25 mm, a gdy karta podaje gilzę od 20 mm (TSC TE210 i TL241, Honeywell PC42E-T:
 * od 25,4 mm) — także to minimum. Zaokrąglenie w dół, bo wariant etykiety ma „25 mm”, a karta drukarki
 * „25,4 mm”. Gilza od ponad 26 mm (np. SATO CT4-LX-HC: 40 mm) wyklucza etykiety biurkowe.
 * Pozostałe (przemysłowe, mobilne) mieszczą każdą gilzę, chyba że karta podaje tylko gilze od 76 mm
 * (SATO CL4-SXR: 76 lub 101 mm; TSC TTP-286MT: 76,2 mm) — wtedy rolki na gilzie 25 mm odpadają.
 * Od góry: gilza etykiety nie może być większa niż największa gilza z karty (+1 mm, bo karta ma „76,2”,
 * a wariant „76”). Drukarka mobilna bez gilzy na karcie: rolka na gilzie od połowy maks. średnicy rolki
 * nie wejdzie do komory (gilza 76 mm przy komorze 66 mm), więc takie rolki odpadają.
 */
export function printerLabelCoreRule(product: { subcategoryIds?: string[]; specifications?: ProductSpecification[] }): PrinterLabelCoreRule {
  const min = printerMinLabelCoreMm(product.specifications)
  const maxCore = printerMaxLabelCoreMm(product.specifications)
  const rollMax = product.subcategoryIds?.includes('mobilne-drukarki-etykiet') ? printerMaxRollDiameterMm(product.specifications) : undefined
  const maxCoreMm = maxCore !== undefined ? maxCore + 1 : rollMax !== undefined ? rollMax / 2 - 0.01 : undefined
  if (product.subcategoryIds?.includes('biurkowe-drukarki-etykiet')) {
    return {
      allowedCores: DESKTOP_LABEL_CORES,
      minCoreMm: min !== undefined && min >= 20 ? Math.floor(min) : undefined,
      maxCoreMm,
      labelsDontFit: min !== undefined && min > 26,
    }
  }
  return { minCoreMm: min !== undefined && min >= 76 ? Math.floor(min) : undefined, maxCoreMm, labelsDontFit: false }
}

/**
 * Czy gilza wariantu etykiety pasuje do reguły drukarki. Gilza z atrybutu albo LABEL_CORE
 * (`labelVariantCoreMm`); rolki bez znanej gilzy (fanfold, brak danych) nie odpadają.
 */
export function labelCoreFits(v: ProductVariant, allowedCores?: string[], minCoreMm?: number, maxCoreMm?: number): boolean {
  const mm = labelVariantCoreMm(v)
  if (mm === undefined) return true
  if (allowedCores && !allowedCores.some(a => String(mm).startsWith(a))) return false
  if (maxCoreMm !== undefined && mm > maxCoreMm) return false
  return !minCoreMm || mm >= minCoreMm
}

// Gilza TAŚMY: słowo „gilza”/„rdzeń”/„wałek”/„core” w wartości albo w nazwie specyfikacji.
const RIBBON_CORE_WORD = /(?:gilz|rdze|wał|\bcore)[a-ząćęłńóśźż]*/gi
// Wymiar gilzy: liczba z „mm” albo w calach („1"”, „0,5"”)
const CORE_SIZE = /^(\d+(?:[.,]\d+)?)\s*(mm(?![a-z])|["″”]|cal[a-z]*)/
// Po słowie dopuszczamy krótki dopisek bez liczb („rdzeń: ”, „na gilzie ”), a potem kolejne wymiary
// połączone „lub”, „i”, „/” albo przecinkiem, z ewentualnym nawiasem („12,7 mm (0,5") lub 25,4 mm (1")”).
// Liczba bez jednostki („300 m”) albo inny tekst kończy odczyt, więc średnica rolki i szerokość taśmy
// zapisane przed słowem lub po nim („szer. 40–110 mm, … rdzeń 25,4 mm”) nie trafiają do wyniku.
const CORE_LEAD = /^[^\d;()]{0,20}?(?=\d)/
const CORE_NEXT = /^\s*(?:\([^)]*\))?\s*(?:lub|albo|i|\/|,)?\s*/

/** Klasa gilzy taśmy (mm) z wymiaru: 12,7 / 12 mm / 0,5" → 12; 25,4 / 25 mm / 1" → 25; 38 mm / 1,5" → 38; 76 mm / 3" → 76. */
function ribbonCoreClass(value: number, inches: boolean): number | undefined {
  const mm = inches ? value * 25.4 : value
  if (mm >= 12 && mm < 13) return 12
  if (mm >= 25 && mm < 26) return 25
  if (mm >= 37.5 && mm < 38.5) return 38
  if (mm >= 75.5 && mm < 77) return 76
  return undefined
}

function coreSizesAt(text: string): number[] {
  const out: number[] = []
  let rest = text.replace(CORE_LEAD, '')
  for (;;) {
    const m = rest.match(CORE_SIZE)
    if (!m) break
    const cls = ribbonCoreClass(parseFloat(m[1].replace(',', '.')), !m[2].startsWith('mm'))
    if (cls) out.push(cls)
    rest = rest.slice(m[0].length).replace(CORE_NEXT, '')
  }
  return out
}

/**
 * Gilze taśmy barwiącej (12, 25, 38 lub 76 mm) podane w karcie drukarki. Czyta specyfikacje o nazwie
 * z „taśm”/„ribbon”: „74 m na gilzie 12,7 mm … lub 300 m na gilzie 25,4 mm” → [12, 25],
 * „300 m (wałek 1") lub 74 m (wałek 0,5")” → [12, 25], „Rdzeń ribbonu: 12,7 mm (0,5")” → [12].
 * Brak danych o gilzie → [].
 */
export function printerRibbonCoresMm(specs: ProductSpecification[] | undefined): number[] {
  const cores = new Set<number>()
  for (const s of specs ?? []) {
    if (!RIBBON_SPEC.test(s.name)) continue
    for (const part of s.value.split(';')) {
      if (/gilz|rdze/i.test(s.name)) coreSizesAt(part).forEach(c => cores.add(c))
      for (const m of Array.from(part.matchAll(RIBBON_CORE_WORD))) {
        coreSizesAt(part.slice(m.index! + m[0].length)).forEach(c => cores.add(c))
      }
    }
  }
  return Array.from(cores).sort((a, b) => a - b)
}

// Zakres „A–B mm” (półpauza lub łącznik). Wymiar w calach („(1"–4,6")”) nie ma „mm”, więc go nie łapiemy.
const MM_RANGE = /(\d+(?:[.,]\d+)?)\s*[–-]\s*\d+(?:[.,]\d+)?\s*mm(?![a-z])/g
// Fragmenty specyfikacji o średnicy rolki, gilzie lub długości etykiety nie mówią o szerokości
const NOT_WIDTH = /średnic|gilz|rdze|długo/i

function rangeMinsMm(text: string): number[] {
  return Array.from(text.matchAll(MM_RANGE)).map(m => parseFloat(m[1].replace(',', '.')))
}

/**
 * Najmniejsza szerokość etykiety (mm) z karty drukarki albo undefined, gdy karta podaje tylko maksimum.
 * Źródła: keyParams.szerokoscEtykiet („47–177 mm bez podkładu”) oraz specyfikacje materiału/rolki,
 * we fragmentach (między „;”) ze słowem „szerokość” albo w specyfikacji o nazwie „Szerokość …”.
 * Kilka zakresów (np. odrywanie i odklejanie) → najmniejsze minimum, bo drukarka przyjmie taką etykietę
 * w co najmniej jednej konfiguracji.
 */
export function printerMinLabelWidthMm(product: { specifications?: ProductSpecification[]; keyParams?: { szerokoscEtykiet?: string } }): number | undefined {
  const mins = rangeMinsMm(product.keyParams?.szerokoscEtykiet ?? '')
  for (const s of product.specifications ?? []) {
    if (!/materia|rolk|nośnik|medi|etykiet/i.test(s.name) || RIBBON_SPEC.test(s.name)) continue
    const widthName = /szeroko/i.test(s.name)
    for (const part of s.value.split(';')) {
      if (/szeroko/i.test(part) || (widthName && !NOT_WIDTH.test(part))) mins.push(...rangeMinsMm(part))
    }
  }
  return mins.length ? Math.min(...mins) : undefined
}

/**
 * Najdłuższa taśma barwiąca (m) z karty drukarki albo undefined. Czyta specyfikacje o nazwie z „taśm”/„ribbon”
 * („Do 600 m”, „450 m na rdzeniu 25,4 mm”, „74 m … lub 300 m …”) i bierze największą liczbę metrów;
 * milimetry („gilza 25,4 mm”) i stopy pomija.
 */
export function printerMaxRibbonLengthM(specs: ProductSpecification[] | undefined): number | undefined {
  const lengths: number[] = []
  for (const s of specs ?? []) {
    if (!RIBBON_SPEC.test(s.name)) continue
    for (const m of Array.from(s.value.matchAll(/(\d+(?:[.,]\d+)?)\s*m(?![a-ząćęłńóśźż])/gi))) lengths.push(parseFloat(m[1].replace(',', '.')))
  }
  return lengths.length ? Math.max(...lengths) : undefined
}

/** Długość taśmy w wariancie (m): atrybut 'Długość', a gdy go brak — drugi wymiar „156×900” z rozmiaru lub nazwy. */
export function ribbonVariantLengthM(v: ProductVariant): number | undefined {
  const attr = v.attributes?.['Długość']?.match(/(\d+(?:[.,]\d+)?)\s*m(?![a-z])/)
  if (attr) return parseFloat(attr[1].replace(',', '.'))
  const size = (v.attributes?.['Rozmiar'] ?? v.name ?? '').match(/\d+(?:[.,]\d+)?\s*[×xX]\s*(\d+(?:[.,]\d+)?)/)
  return size ? parseFloat(size[1].replace(',', '.')) : undefined
}
