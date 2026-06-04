import { thermalLabelSeries } from '@/data/thermal-label-series'
import { transferLabelSeries } from '@/data/transfer-label-series'
import { transferRibbonSeries } from '@/data/transfer-ribbon-series'
import { stripMarkdown } from '@/lib/strip-markdown'

/**
 * Pakiet wiedzy dla Doradcy materiałów — kompaktowa serializacja WSZYSTKICH serii
 * etykiet (termicznych + termotransferowych) i taśm barwiących. Wstrzykiwany do
 * system promptu (cache'owany). Głębia (pełne sekcje) dostępna przez narzędzie
 * getMaterialSeries.
 */

// Zakres temperatur z techSpecs (różne nazwy etykiet), gdy brak pola temperatureRange.
function tempOf(s: any): string {
  if (s.temperatureRange) return String(s.temperatureRange)
  const t = (s.techSpecs ?? []).find((x: { label: string }) => /temperat|zakres prac/i.test(x.label))
  return t?.value ?? ''
}

/**
 * KOMPAKTOWY wpis serii (~150-250 tokenów). Tylko parametry różnicujące — głębia
 * (pełne specyfikacje, FAQ, rozmiary, porównania) dostępna przez narzędzia.
 */
function serialize(s: any, type: 'termiczna' | 'termotransferowa' | 'tasma', url: string): string {
  const certs = (s.certifications ?? []).map((c: { name: string }) => c.name).join(', ')
  // cechy różnicujące — tylko te, które występują
  const feats: string[] = []
  if (s.material) feats.push(String(s.material))
  if (s.glue) feats.push(`klej ${s.glue}`)
  if (s.removable === true) feats.push('klej zdejmowalny')
  if (s.topcoat === true) feats.push('top-coat')
  if (s.linerless === true) feats.push('bez podkładu (linerless)')
  if (s.foodSafe === true) feats.push('kontakt z żywnością')
  if (s.outdoor === true || s.outdoorResistant === true) feats.push('odporna na zewnątrz')
  if (s.chemicalResistant === true || s.chemicalResistance) feats.push('odporność chemiczna')
  if (s.uvResistance) feats.push(`UV: ${s.uvResistance}`)
  if (s.cryogenic === true) feats.push('kriogeniczna')
  if (s.printSpeedMax) feats.push(`do ${s.printSpeedMax}`)
  if (s.ulCertified === true) feats.push('UL')
  const temp = tempOf(s)
  if (temp) feats.push(`temp. ${temp}`)

  const apps = (s.applications ?? []).slice(0, 4).join(', ')
  const slug = s.slug

  let out = `\n### ${s.title} [${type}]${s.priceFrom ? ` — od ${s.priceFrom} zł` : ''}\n`
  out += `slug: ${slug} | URL: ${url}\n`
  out += `${stripMarkdown(s.tagline ?? '')}\n`
  if (feats.length) out += `Cechy: ${feats.join('; ')}.\n`
  if (certs) out += `Atesty: ${certs}.\n`
  if (apps) out += `Zastosowania: ${apps}.\n`
  return out
}

let _cached: string | null = null

export function buildMaterialsKnowledge(): string {
  if (_cached) return _cached
  const parts: string[] = []

  parts.push('# KATALOG MATERIAŁÓW EKSPLOATACYJNYCH TAKMA (Zebra) — INDEKS\n')
  parts.push('Trzy grupy: (1) etykiety termiczne — druk bezpośredni, bez taśmy; (2) etykiety termotransferowe — wymagają taśmy barwiącej, trwały nadruk; (3) taśmy barwiące (ribbony) do druku termotransferowego.')
  parts.push('To skrócony indeks (parametry różnicujące). Po PEŁNĄ specyfikację, FAQ i atesty serii użyj getMaterialSeries(slug). Po dobór ROZMIARU użyj findClosestSize(slug, szer, wys). Po cenę/dostępność użyj checkMaterialStock(PN).\n')

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
