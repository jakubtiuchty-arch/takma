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
