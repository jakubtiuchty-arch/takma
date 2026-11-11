import { products, type Product, type ProductVariant } from '@/data/products'
import { thermalLabelSeries } from '@/data/thermal-label-series'
import { labelCoreFits, ribbonVariantLengthM } from '@/lib/printer-label-core'

// Dobór kandydatów do sekcji materiałów na karcie drukarki (bez stanów magazynowych). Ten sam kod liczy
// listę w komponentach (PrinterCompatibleLabels, PrinterMaterialVariants) i na serwerze w page.tsx, żeby
// sekcja bez kandydatów nie miała linku w nawigacji (np. TSC Alpha-30LHC z gilzą 12,7 mm).

/**
 * Domyślne 8 najpopularniejszych wariantów etykiet (Z-Perform 1000D bestseller) — wszystkie
 * ≤102 mm szerokości, pasują do drukarek 4". Stosowane dla większości drukarek termicznych.
 */
const DEFAULT_VARIANTS = [
  { productId: 'zebra-z-perform-1000d', partNumber: '3002908' },    // 102×38 mm — adresowe
  { productId: 'zebra-z-perform-1000d', partNumber: '3002654' },    // 102×64 mm — produktowe
  { productId: 'zebra-z-perform-1000d', partNumber: '3007096-T' },  // 102×152 mm — paczkomaty
  { productId: 'zebra-z-perform-1000d', partNumber: '3007891' },    // 102×178 mm — wysyłkowe XL
  { productId: 'zebra-z-perform-1000d', partNumber: '3005807' },    // 76×51 mm
  { productId: 'zebra-z-perform-1000d', partNumber: '3006307-T' },  // 57×32 mm — cenówki
  { productId: 'zebra-z-perform-1000d', partNumber: '3004996' },    // 51×25 mm — identyfikacja
  { productId: 'zebra-z-perform-1000d', partNumber: '3002549' },    // 32×25 mm — małe produkty
] as const

/**
 * Override dla drukarek entry-level (ZD220d/ZD230d/ZD421d) — Z-Essentials najpierw, bo to
 * najtańsze etykiety w portfolio i naturalny pairing dla budget drukarek.
 */
const ESSENTIALS_FIRST_VARIANTS = [
  { productId: 'zebra-z-essentials-1000d', partNumber: 'ZIPZED3018655XL' },  // 102×152 z topcoat
  { productId: 'zebra-z-essentials-500d', partNumber: 'ZIPZED3018654XL' },   // 102×152 budget
  { productId: 'zebra-z-perform-1000d', partNumber: '3002908' },             // 102×38 mm
  { productId: 'zebra-z-perform-1000d', partNumber: '3002654' },             // 102×64 mm
  { productId: 'zebra-z-perform-1000d', partNumber: '3007891' },             // 102×178 mm
  { productId: 'zebra-z-perform-1000d', partNumber: '3005807' },             // 76×51 mm
  { productId: 'zebra-z-perform-1000d', partNumber: '3006307-T' },           // 57×32 mm
  { productId: 'zebra-z-perform-1000d', partNumber: '3004996' },             // 51×25 mm
] as const

const ESSENTIALS_FIRST_PRINTERS = new Set([
  'zebra-zd220d',
  'zebra-zd230d',
  'zebra-zd421d',
])

function getBestsellerVariants(printerSlug?: string) {
  if (printerSlug && ESSENTIALS_FIRST_PRINTERS.has(printerSlug)) {
    return ESSENTIALS_FIRST_VARIANTS
  }
  return DEFAULT_VARIANTS
}

export interface VariantData {
  product: Product
  variant: ProductVariant
  seriesTitle: string
}

function getVariantData(spec: { productId: string; partNumber: string }): VariantData | null {
  const product = products.find(p => p.id === spec.productId)
  if (!product) return null
  const variant = product.variants?.find(v => v.partNumber === spec.partNumber)
  if (!variant) return null
  const series = thermalLabelSeries.find(s => s.productId === spec.productId)
  return { product, variant, seriesTitle: series?.title ?? product.name.replace(/^Etykiety termiczne Zebra /, '') }
}

/** Parsuje szerokość etykiety (mm) z atrybutu „Rozmiar" (np. „102×38 mm" → 102). */
function labelWidthMm(rozmiar?: string): number | null {
  const m = rozmiar?.match(/(\d+(?:[.,]\d+)?)\s*[×xX]/)
  return m ? parseFloat(m[1].replace(',', '.')) : null
}

export interface ThermalLabelFilter {
  printerSlug?: string
  printWidthMm?: number
  requiredCore?: string[]
  minLabelCoreMm?: number
  maxLabelCoreMm?: number
  minLabelWidthMm?: number
}

/** Kandydaci do sekcji „Etykiety termiczne” (do 16, przed sprawdzeniem stanu). */
export function thermalLabelCandidates({ printerSlug, printWidthMm, requiredCore, minLabelCoreMm, maxLabelCoreMm, minLabelWidthMm }: ThermalLabelFilter): VariantData[] {
  const bestsellers = getBestsellerVariants(printerSlug)
  // Filtr szerokości głowicy — etykieta nie może być szersza niż głowica drukarki
  // (np. drukarka 2"/56 mm nie dostaje etykiet 102 mm). Tolerancja 2 mm.
  // Od dołu: etykieta węższa niż minimum z karty drukarki (SATO CL6-SXR: 47 mm) też odpada.
  const fits = (rozmiar?: string) => {
    const w = labelWidthMm(rozmiar)
    if (w == null) return true
    return (!printWidthMm || w <= printWidthMm + 2) && (!minLabelWidthMm || w >= minLabelWidthMm)
  }
  // Ta sama reguła gilzy co w sekcjach etykiet termotransferowych: Z-Perform 1000D na gilzie 76 mm nie wejdzie do drukarki biurkowej
  const coreFits = (v: ProductVariant) => labelCoreFits(v, requiredCore, minLabelCoreMm, maxLabelCoreMm)
  let candidates = bestsellers
    .map(getVariantData)
    .filter((v): v is VariantData => v !== null && fits(v.variant.attributes['Rozmiar']) && coreFits(v.variant))

  // Zawsze powiększamy pulę z Z-Perform 1000D — po sprawdzeniu stanu pokażemy tylko
  // DOSTĘPNE, więc potrzeba więcej kandydatów (mieszczących się w głowicy).
  {
    const zp = products.find(p => p.id === 'zebra-z-perform-1000d')
    const series = thermalLabelSeries.find(s => s.productId === 'zebra-z-perform-1000d')
    const seen = new Set(candidates.map(v => v.variant.partNumber))
    const extra = (zp?.variants ?? [])
      .map(v => ({ v, w: labelWidthMm(v.attributes['Rozmiar']) }))
      .filter(x => x.w != null && (!printWidthMm || x.w! <= printWidthMm + 2) && (!minLabelWidthMm || x.w! >= minLabelWidthMm) && coreFits(x.v) && !seen.has(x.v.partNumber))
      .sort((a, b) => (b.w! - a.w!)) // najszersze mieszczące się najpierw
      .map(x => ({ product: zp!, variant: x.v, seriesTitle: series?.title ?? 'Z-Perform 1000D' }))
    candidates = [...candidates, ...extra].slice(0, 16)
  }

  return candidates
}

function cleanTitle(name: string): string {
  return name
    .replace(/^Etykiety\s+\w+\s+Zebra\s+/i, '')
    .replace(/^Taśma\s+termotransferowa\s+Zebra\s+/i, '')
    .replace(/^Taśma\s+termotransferowa\s+SATO\s+/i, 'SATO ')
    .replace(/^Etykiety\s+Zebra\s+/i, '')
    .replace(/^Zebra\s+/i, '')
}

/** Szerokość wariantu w mm: etykieta z 'Rozmiar', taśma z 'Szerokość'. */
function widthMm(v: ProductVariant): number | null {
  const r = v.attributes['Rozmiar']
  if (r) { const m = r.match(/(\d+(?:[.,]\d+)?)\s*[×xX]/); if (m) return parseFloat(m[1].replace(',', '.')) }
  const s = v.attributes['Szerokość']
  if (s) { const m = s.match(/(\d+(?:[.,]\d+)?)/); if (m) return parseFloat(m[1].replace(',', '.')) }
  return null
}

export interface MaterialPick { product: Product; variant: ProductVariant; title: string }
export type MaterialKind = 'label' | 'ribbon' | 'rfid'

export interface MaterialVariantFilter {
  productIds: string[]
  kind: MaterialKind
  printWidthMm?: number
  requiredCore?: string | string[]
  minLabelCoreMm?: number
  maxLabelCoreMm?: number
  minLabelWidthMm?: number
  maxRibbonLengthM?: number
  perSeries?: number
}

/** Kandydaci do sekcji konkretnych wariantów (etykiety TT, taśmy, RFID): do 24, przed sprawdzeniem stanu. */
export function materialVariantCandidates({ productIds, kind, printWidthMm, requiredCore, minLabelCoreMm, maxLabelCoreMm, minLabelWidthMm, maxRibbonLengthM, perSeries = 3 }: MaterialVariantFilter): MaterialPick[] {
  // Czy rdzeń (gilza) wariantu pasuje do drukarki.
  // Taśmy: zachowanie jak dotąd (atrybut 'Rdzeń' musi zaczynać się od wymaganej wartości; brak → odrzuć).
  // Etykiety: wspólna reguła z sekcją etykiet termicznych (`labelCoreFits`) — gilza z atrybutu albo
  // LABEL_CORE, bo bez tego folie Z-Ultimate 3000T na gilzie 76 mm trafiały do drukarek biurkowych;
  // rolki bez znanej gilzy (fanfold) nie odpadają.
  const allowedCores = requiredCore === undefined ? undefined : Array.isArray(requiredCore) ? requiredCore : [requiredCore]
  const coreOk = (v: ProductVariant): boolean => {
    if (kind === 'ribbon') {
      if (!allowedCores) return true
      const core = String(v.attributes?.['Rdzeń'] ?? v.attributes?.['Rdzeń (gilza)'] ?? '').trim()
      return allowedCores.some(a => core.startsWith(a))
    }
    return kind === 'label' ? labelCoreFits(v, allowedCores, minLabelCoreMm, maxLabelCoreMm) : labelCoreFits(v, allowedCores)
  }
  // Z każdej serii bierzemy kilka wariantów mieszczących się w szerokości głowicy,
  // od najszerszego (najbardziej uniwersalny dla danej drukarki).
  // Taśma jest zwykle nieco szersza niż głowica (104 mm głowica → ~110 mm taśma),
  // więc dla taśm dajemy większą tolerancję niż dla etykiet.
  const tol = kind === 'ribbon' ? 12 : kind === 'rfid' ? 0 : 2
  // Budujemy listy per-seria, a potem przeplatamy je round-robin (najpierw po 1 z każdej serii,
  // potem po 2…) — żeby rekomendacje pokazywały różnorodność klas (np. wosk / wosk-żywica / żywica),
  // a nie były zdominowane przez jedną serię.
  const groups: MaterialPick[][] = []
  for (const pid of productIds) {
    const product = products.find(p => p.id === pid)
    if (!product?.variants) continue
    const t = cleanTitle(product.name)
    const fitting = product.variants
      .map(v => ({ v, w: widthMm(v) ?? (kind === 'rfid' ? widthMm({ ...v, attributes: { Rozmiar: v.name ?? '' } }) : null) }))
      .filter(x => x.w != null && (!printWidthMm || x.w <= printWidthMm + tol))
      // Formaty specjalne (kartridż ZD421c, rolki 30 m do P4T/RP4T) mają te same wymiary co zwykła rolka,
      // ale inny mechanizm — atrybut 'Format' wyklucza je z doboru do drukarek z rolką (audyt ZD-01)
      .filter(x => kind !== 'ribbon' || !x.v.attributes?.['Format'])
      // Rdzeń (gilza): rolka musi pasować do wieszaków drukarki — np. etykiety fi76
      // nie wejdą na drukarkę biurkową (akceptuje 12/19/25 mm).
      .filter(x => coreOk(x.v))
      .filter(x => !minLabelWidthMm || kind !== 'label' || x.w! >= minLabelWidthMm)
      .filter(x => !maxRibbonLengthM || kind !== 'ribbon' || (ribbonVariantLengthM(x.v) ?? 0) <= maxRibbonLengthM)
      .sort((a, b) => (b.w! - a.w!))
      .slice(0, Math.max(perSeries, 8)) // głębsza pula — po stanie pokażemy tylko dostępne
      .map(x => ({ product, variant: x.v, title: t }))
    if (fitting.length) groups.push(fitting)
  }
  // Przeplatanie round-robin: kolumna 0 = po jednym wariancie z każdej serii, potem kolumna 1, itd.
  const picks: MaterialPick[] = []
  const maxLen = groups.reduce((m, g) => Math.max(m, g.length), 0)
  for (let i = 0; i < maxLen; i++) {
    for (const g of groups) if (g[i]) picks.push(g[i])
  }
  // Pula kandydatów większa niż wyświetlamy — po sprawdzeniu stanu pokazujemy tylko dostępne.
  return picks.slice(0, 24)
}
