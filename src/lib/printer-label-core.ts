import type { ProductSpecification, ProductVariant } from '@/data/products'
import { LABEL_CORE } from '@/data/label-core'

// Gilza ETYKIET wg karty drukarki. Pomijamy specyfikacje taśmy: „Taśma barwiąca … gilza 25,4 mm”
// to gilza taśmy, a nie rolki etykiet.
const LABEL_MEDIA_SPEC = /materia|rolk|gilz|rdze|nośnik|medi/i
const RIBBON_SPEC = /taśm|ribbon/i
const CORE_WORD = /(?:gilz|rdze)[a-ząćęłńóśźż]*/gi
// Wymiary w calach („(3")”, „8 cali”) nie mogą trafić do listy średnic w mm
const INCHES = /\d+(?:[.,]\d+)?\s*(?:["″”]|cal[a-z]*)/g

/**
 * Średnice gilzy etykiet podane w specyfikacji drukarki (mm), np. „gilza 76 lub 101 mm” → [76, 101],
 * „203 mm (8") na rdzeniu 76 mm (3")” → [76]. Liczby czytamy tylko od słowa „gilza”/„rdzeń” do
 * najbliższego „mm”, żeby nie złapać średnicy rolki („rolka do 220 mm”).
 */
export function printerLabelCoresMm(specs: ProductSpecification[] | undefined): number[] {
  const cores: number[] = []
  for (const s of specs ?? []) {
    if (!LABEL_MEDIA_SPEC.test(s.name) || RIBBON_SPEC.test(s.name)) continue
    for (const m of Array.from(s.value.matchAll(CORE_WORD))) {
      const rest = s.value.slice(m.index! + m[0].length).split(';')[0].replace(INCHES, '')
      const mm = rest.search(/mm(?![a-z])/)
      if (mm < 0) continue
      for (const n of rest.slice(0, mm).match(/\d+(?:[.,]\d+)?/g) ?? []) cores.push(parseFloat(n.replace(',', '.')))
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
