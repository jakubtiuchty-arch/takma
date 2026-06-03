import { thermalLabelSeries } from '@/data/thermal-label-series'
import { transferLabelSeries } from '@/data/transfer-label-series'
import { transferRibbonSeries } from '@/data/transfer-ribbon-series'
import { products } from '@/data/products'
import { stripMarkdown } from '@/lib/strip-markdown'

/**
 * Pakiet wiedzy dla Doradcy materiałów — kompaktowa serializacja WSZYSTKICH serii
 * etykiet (termicznych + termotransferowych) i taśm barwiących. Wstrzykiwany do
 * system promptu (cache'owany). Głębia (pełne sekcje) dostępna przez narzędzie
 * getMaterialSeries.
 */

function sizesFor(productId: string): string {
  const p = products.find(x => x.id === productId)
  const variants = (p?.variants ?? []).map(v => v.name).filter(Boolean)
  if (variants.length === 0) return ''
  const shown = variants.slice(0, 24)
  const extra = variants.length - shown.length
  return shown.join(', ') + (extra > 0 ? ` (+${extra} więcej)` : '')
}

function line(label: string, value: unknown): string {
  if (value == null || value === '' || (Array.isArray(value) && value.length === 0)) return ''
  const v = Array.isArray(value) ? value.join(', ') : String(value)
  return `${label}: ${v}\n`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function serialize(s: any, type: 'termiczna' | 'termotransferowa' | 'tasma', url: string): string {
  const specs = (s.techSpecs ?? []).map((t: { label: string; value: string }) => `${t.label}: ${t.value}`).join(' | ')
  const certs = (s.certifications ?? []).map((c: { name: string }) => c.name).join(', ')
  const compared = (s.comparedWith ?? [])
    .map((c: { title?: string; seriesSlug?: string; whenToChooseThis: string }) =>
      `  • ${c.title ?? c.seriesSlug ?? ''}: ${stripMarkdown(c.whenToChooseThis)}`)
    .join('\n')
  const faq = (s.faq ?? [])
    .map((f: { question: string; answer: string }) => `  Q: ${f.question}\n  A: ${stripMarkdown(f.answer)}`)
    .join('\n')

  let out = `\n### ${s.title}  [${type}]\n`
  out += `URL: ${url}\n`
  out += line('Pozycjonowanie', s.positioning)
  out += line('Cena od (netto)', s.priceFrom ? `${s.priceFrom} zł` : '')
  out += `Opis: ${stripMarkdown(s.heroIntro ?? s.tagline ?? '')}\n`
  // cechy materiałowe (różne per typ — bierzemy co istnieje)
  out += line('Materiał', s.material)
  out += line('Klej', s.glue)
  out += line('Powłoka ochronna (top-coat)', s.topcoat === true ? 'tak' : s.topcoat === false ? 'nie' : '')
  out += line('Bez podkładu (linerless)', s.linerless === true ? 'tak' : '')
  out += line('Klej zdejmowalny', s.removable === true ? 'tak' : '')
  out += line('Kontakt z żywnością', s.foodSafe === true ? 'tak' : '')
  out += line('Odporność zewnętrzna/UV', s.outdoor === true || s.outdoorResistant === true || s.uvResistance ? (s.uvResistance ?? 'tak') : '')
  out += line('Odporność chemiczna', s.chemicalResistant === true ? 'tak' : s.chemicalResistance)
  out += line('Kriogeniczna', s.cryogenic === true ? 'tak' : '')
  out += line('Zakres temperatur', s.temperatureRange)
  out += line('Maks. prędkość druku', s.printSpeedMax)
  out += line('UL', s.ulCertified === true ? 'tak' : '')
  out += line('Atesty', certs)
  out += line('Najważniejsze', (s.keyHighlights ?? []).map((h: string) => stripMarkdown(h)))
  out += line('Specyfikacja', specs)
  out += line('Zastosowania', s.applications)
  out += line('NIE używać do', s.notRecommendedFor)
  const sizes = sizesFor(s.productId)
  out += line('Dostępne rozmiary', sizes)
  if (compared) out += `Kiedy wybrać alternatywę:\n${compared}\n`
  if (faq) out += `FAQ:\n${faq}\n`
  return out
}

let _cached: string | null = null

export function buildMaterialsKnowledge(): string {
  if (_cached) return _cached
  const parts: string[] = []

  parts.push('# KATALOG MATERIAŁÓW EKSPLOATACYJNYCH TAKMA (Zebra)\n')
  parts.push('Trzy grupy: (1) etykiety termiczne — druk bezpośredni, bez taśmy; (2) etykiety termotransferowe — wymagają taśmy barwiącej, trwały nadruk; (3) taśmy barwiące (ribbony) do druku termotransferowego.\n')

  parts.push('\n## ETYKIETY TERMICZNE (direct thermal, bez taśmy)')
  for (const s of thermalLabelSeries) {
    parts.push(serialize(s, 'termiczna', `/etykiety-termiczne-zebra/serie/${s.slug}`))
  }

  parts.push('\n## ETYKIETY TERMOTRANSFEROWE (wymagają taśmy)')
  for (const s of transferLabelSeries) {
    parts.push(serialize(s, 'termotransferowa', `/etykiety-termotransferowe-zebra/${s.subcategory}/serie/${s.slug}`))
  }

  parts.push('\n## TAŚMY BARWIĄCE / RIBBONY (do druku termotransferowego)')
  for (const s of transferRibbonSeries) {
    parts.push(serialize(s, 'tasma', `/tasmy-termotransferowe/serie/${s.slug}`))
  }

  _cached = parts.join('\n')
  return _cached
}
