/**
 * Audyt SEO pojedynczego produktu — reguły statyczne + dynamiczne (data-driven).
 *
 * Uruchomienie:
 *   npx tsx scripts/seo-audit-product.ts <slug>
 *   (domyślnie zebra-mc3400)
 *
 * Reguły statyczne: seoTitle, seoDescription, dane do JSON-LD Product+Offer,
 * alty zdjęć (imageDescriptions), canonical (slug).
 * Reguły dynamiczne: czytane z seo-data/<slug>.json (jeśli istnieje):
 *   - treść ≥ audit_rules.min_content_words
 *   - każda fraza audit_rules.quick_win_phrases obecna w treści źródłowej
 *   - każda fraza audit_rules.competitor_gap_phrases obecna w treści źródłowej
 *
 * Wyjście: linie [PASS]/[FAIL]/[INFO]; exit 1 gdy jakikolwiek [FAIL].
 */
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { products, getManufacturerById, type Product } from '../src/data/products'

const slug = process.argv[2] || 'zebra-mc3400'
const product = products.find((p) => p.slug === slug)

const fails: string[] = []
const passes: string[] = []
const infos: string[] = []
const ok = (m: string) => passes.push(m)
const bad = (m: string) => fails.push(m)
const info = (m: string) => infos.push(m)

if (!product) {
  console.error(`[FAIL] Nie znaleziono produktu o slug "${slug}"`)
  process.exit(1)
}

/** Treść redakcyjna źródłowa — to samo, czym mierzono konkurencję. */
function editorialText(p: Product): string {
  const parts: string[] = [p.name, p.shortDescription, p.seoTitle || '', p.seoDescription || '', p.description || '']
  for (const f of p.faq || []) parts.push(f.question, f.answer)
  for (const a of p.applications || []) parts.push(a)
  for (const s of p.specifications || []) parts.push(s.name, s.value)
  for (const v of p.variants || []) parts.push(v.name)
  return parts.join(' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[`*_#>]/g, ' ')
}
const text = editorialText(product)
const low = text.toLowerCase()
const wordCount = text.split(/\s+/).filter(Boolean).length

// ── REGUŁY STATYCZNE ────────────────────────────────────────────────
// seoTitle
if (product.seoTitle && product.seoTitle.length >= 25 && product.seoTitle.length <= 65) ok(`seoTitle (${product.seoTitle.length} zn.)`)
else bad(`seoTitle długość poza 25-65 zn. (${product.seoTitle?.length ?? 0})`)
if (product.seoTitle?.toLowerCase().includes(product.name.toLowerCase().split(' ').slice(0, 2).join(' '))) ok('seoTitle zawiera nazwę produktu')
else bad('seoTitle nie zawiera nazwy produktu')

// seoDescription
if (product.seoDescription && product.seoDescription.length >= 70 && product.seoDescription.length <= 165) ok(`seoDescription (${product.seoDescription.length} zn.)`)
else bad(`seoDescription długość poza 70-165 zn. (${product.seoDescription?.length ?? 0})`)

// JSON-LD Product — pola źródłowe
if (product.name && product.shortDescription) ok('JSON-LD Product: name + description')
else bad('JSON-LD Product: brak name/shortDescription')
if (product.images?.length) ok(`JSON-LD Product: ${product.images.length} obraz(y)`)
else bad('JSON-LD Product: brak images[]')
if (getManufacturerById(product.manufacturerId)) ok('JSON-LD Product: brand/manufacturer')
else bad('JSON-LD Product: brak manufacturera')
// Offer — cena
const hasPrice = !!product.priceFrom || (product.variants?.some((v) => v.priceFrom) ?? false)
if (hasPrice) ok('JSON-LD Offer: cena (priceFrom)')
else bad('JSON-LD Offer: brak ceny')
// SKU/MPN
if (product.variants?.[0]?.partNumber || product.specifications?.some((s) => s.name === 'Part Number')) ok('JSON-LD Product: sku/mpn')
else bad('JSON-LD Product: brak sku/mpn')

// Alty zdjęć
if (product.imageDescriptions && product.imageDescriptions.length >= (product.images?.length || 0) && product.imageDescriptions.every((a) => a.trim().length > 0)) ok(`alty: ${product.imageDescriptions.length}/${product.images?.length}`)
else bad(`alty zdjęć niekompletne (${product.imageDescriptions?.length ?? 0}/${product.images?.length ?? 0})`)

// Canonical (slug)
if (product.slug && /^[a-z0-9-]+$/.test(product.slug)) ok(`canonical/slug: ${product.slug}`)
else bad('canonical/slug nieprawidłowy')

// FAQ (AEO)
if ((product.faq?.length || 0) >= 5) ok(`FAQ: ${product.faq!.length} pytań`)
else bad(`FAQ za mało (${product.faq?.length ?? 0}, min 5)`)

// ── REGUŁY DYNAMICZNE (data-driven) ─────────────────────────────────
// Plik danych: seo-data/<slug>.json lub (konwencja) bez prefiksu marki, np. mc3400.json
const candidates = [`${slug}.json`, `${slug.replace(/^[a-z]+-/, '')}.json`]
const dataPath = candidates.map((c) => join('seo-data', c)).find(existsSync) || join('seo-data', candidates[0])
if (existsSync(dataPath)) {
  const data = JSON.parse(readFileSync(dataPath, 'utf8'))
  const rules = data.audit_rules || {}

  // treść ≥ 110% mediany konkurencji
  const minWords = rules.min_content_words ?? 0
  if (wordCount >= minWords) ok(`treść ${wordCount} słów ≥ ${minWords} (110% mediany konkurencji)`)
  else bad(`treść ${wordCount} słów < ${minWords} (cel: 110% mediany konkurencji ${data.competitors?.median_editorial_words})`)

  // quick wins z GSC
  for (const kw of rules.quick_win_phrases || []) {
    if (low.includes(kw.toLowerCase())) ok(`quick win GSC w treści: "${kw}"`)
    else bad(`quick win GSC BRAK w treści: "${kw}"`)
  }

  // luki frazowe konkurencji
  for (const kw of rules.competitor_gap_phrases || []) {
    if (low.includes(kw.toLowerCase())) ok(`fraza konkurencji w treści: "${kw}"`)
    else bad(`luka frazowa (konkurencja pokrywa) BRAK: "${kw}"`)
  }
} else {
  info(`brak seo-data/${slug}.json — pominięto reguły dynamiczne`)
}

// ── RAPORT ──────────────────────────────────────────────────────────
console.log(`\n=== AUDYT SEO: ${product.name} (${slug}) ===`)
console.log(`treść źródłowa: ${wordCount} słów\n`)
for (const m of passes) console.log(`[PASS] ${m}`)
for (const m of infos) console.log(`[INFO] ${m}`)
for (const m of fails) console.log(`[FAIL] ${m}`)
console.log(`\nWynik: ${passes.length} PASS / ${fails.length} FAIL`)
process.exit(fails.length > 0 ? 1 : 0)
