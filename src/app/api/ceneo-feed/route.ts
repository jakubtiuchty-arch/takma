import { NextResponse } from 'next/server'
import {
  products,
  getCategoryById,
  getSubcategoryById,
  getManufacturerById,
  variantSizeSlug,
  isThermalLabelProduct,
  isTransferLabelProduct,
  isRibbonProduct,
  type Product,
  type ProductVariant,
} from '@/data/products'
import { prisma } from '@/lib/db'
import { isValidGtin } from '@/lib/allegro/gtin'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

const SITE_URL = 'https://www.takma.com.pl'

// Ceneo wymaga, by cena w feedzie = cena na stronie docelowej. Strona pokazuje cenę
// sklepową (StockCache.price netto), więc feed = ta sama cena × VAT (brutto). Bez
// dodatkowego narzutu — koszt CPC pokrywamy z marży/budżetu w panelu Ceneo.
const CENEO_MARKUP = 1.0
const VAT = 1.23

// Ceneo availability codes: 1 = 24h, 3 = 3 days, 7 = 7 days, 99 = check
const availabilityMap: Record<string, number> = {
  available: 1,
  'on-order': 3,
}

// GPSR — EU responsible person per manufacturer
const gpsr: Record<string, { responsible: string; safety: string }> = {
  zebra: {
    responsible: 'Zebra Technologies Europe Limited, Dukes Meadow, Millboard Road, Bourne End, Buckinghamshire SL8 5XF, United Kingdom, contact.emea@zebra.com',
    safety: 'Produkt zgodny z dyrektywami UE. Certyfikaty: CE, FCC, RoHS. Deklaracja zgodności dostępna na stronie producenta zebra.com.',
  },
  honeywell: {
    responsible: 'Honeywell International s.r.o., V Parku 2326/18, 148 00 Praha 4, Czech Republic, www.honeywell.com',
    safety: 'Produkt zgodny z dyrektywami UE. Certyfikaty: CE, FCC, RoHS, cUL. Deklaracja zgodności dostępna na stronie producenta honeywell.com.',
  },
  datalogic: {
    responsible: 'Datalogic S.p.A., Via Candini 2, 40012 Lippo di Calderara di Reno (BO), Italy, corporate.communication@datalogic.com',
    safety: 'Produkt zgodny z dyrektywami UE. Certyfikaty: CE, FCC, RoHS. Deklaracja zgodności dostępna na stronie producenta datalogic.com.',
  },
  newland: {
    responsible: 'Newland EMEA BV, Rolweg 25, 4104 AV Culemborg, The Netherlands, info@newland-id.com',
    safety: 'Produkt zgodny z dyrektywami UE. Certyfikaty: CE, FCC, RoHS. Deklaracja zgodności dostępna na stronie producenta newland-id.com.',
  },
}

function cdata(str: string): string {
  return `<![CDATA[${str.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`
}

function escapeAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function getCategoryPath(categoryId: string, subcategoryIds?: string[]): string {
  const category = getCategoryById(categoryId)
  if (!category) return ''

  if (subcategoryIds?.length) {
    const sub = subcategoryIds
      .map(id => getSubcategoryById(id))
      .find(s => s && !s.id.startsWith('akcesoria'))
    if (sub) return `${category.name} > ${sub.name}`
  }

  return category.name
}

function getWeight(specs: Array<{ name: string; value: string }>): string | null {
  const weightSpec = specs.find(s => s.name.toLowerCase().includes('waga'))
  if (!weightSpec) return null

  const value = parseFloat(weightSpec.value.replace(',', '.'))
  if (isNaN(value)) return null

  if (weightSpec.value.includes('kg')) return value.toFixed(2)
  return (value / 1000).toFixed(2)
}

function stripMarkdown(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1')
}

/** Truncate description to max chars, respecting word boundaries */
function truncateDesc(text: string, max: number): string {
  if (text.length <= max) return text
  const cut = text.lastIndexOf(' ', max)
  return (cut > 0 ? text.slice(0, cut) : text.slice(0, max)) + '...'
}

function getCertificates(specs: Array<{ name: string; value: string }>): string {
  const certSpec = specs.find(s => s.name === 'Certyfikaty' || s.name === 'Normy')
  return certSpec?.value || ''
}

/** Atrybut „Model" dla Ceneo — ze spec „Model" lub wyliczony z nazwy (seria + rozmiar). */
function deriveModel(product: Product, variant?: ProductVariant): string {
  const spec = product.specifications.find(s => s.name === 'Model')?.value
  if (spec) return spec
  let base = product.name
    .replace(/^Etykiety\s+\w+\s+Zebra\s+/i, '')
    .replace(/^Taśm[ay]\s+termotransferow[ae]\s+Zebra\s+/i, '')
    .replace(/^Zebra\s+/i, '')
    .trim()
  const size = variant?.attributes?.['Rozmiar']
  if (size && !base.includes(size)) base += ` ${size}`
  return base.trim().slice(0, 80)
}

/** Wzmacnia cienki opis kluczowymi specyfikacjami (Ceneo karze za słaby opis). */
function enrichDesc(desc: string, specs: Array<{ name: string; value: string }>): string {
  if (desc.length >= 250) return desc
  const lines = specs
    .filter(s => s.value && !/^(Part Number|EAN|GTIN|Numer próbki|Klasa cenowa)$/i.test(s.name))
    .slice(0, 12)
    .map(s => `${s.name}: ${s.value}`)
    .join('. ')
  return [desc, lines].filter(Boolean).join('. ').trim()
}

function buildOffer(opts: {
  id: string
  url: string
  price: number
  avail: number
  weight: string | null
  cat: string
  name: string
  desc: string
  images: string[]
  manufacturer: string
  manufacturerId: string
  partNumber: string
  ean?: string
  size?: string
  model?: string
  certs: string
}): string {
  const weightAttr = opts.weight ? ` weight="${opts.weight}"` : ''
  const lines = [
    `  <o id="${escapeAttr(opts.id)}" url="${escapeAttr(opts.url)}" price="${opts.price.toFixed(2)}" avail="${opts.avail}"${weightAttr} set="0">`,
    `    <cat>${cdata(opts.cat)}</cat>`,
    `    <name>${cdata(opts.name)}</name>`,
    `    <desc>${cdata(opts.desc)}</desc>`,
  ]

  // Images
  if (opts.images.length > 0) {
    lines.push('    <imgs>')
    lines.push(`      <main url="${escapeAttr(opts.images[0])}" />`)
    for (let i = 1; i < opts.images.length; i++) {
      lines.push(`      <i url="${escapeAttr(opts.images[i])}" />`)
    }
    lines.push('    </imgs>')
  }

  // Attributes
  lines.push('    <attrs>')
  lines.push(`      <a name="Producent">${cdata(opts.manufacturer)}</a>`)
  lines.push(`      <a name="Kod producenta">${cdata(opts.partNumber)}</a>`)
  if (opts.model) {
    lines.push(`      <a name="Model">${cdata(opts.model)}</a>`)
  }
  if (opts.size) {
    lines.push(`      <a name="Rozmiar">${cdata(opts.size)}</a>`)
  }
  if (opts.ean) {
    lines.push(`      <a name="EAN">${cdata(opts.ean)}</a>`)
  }

  // GPSR — Producent odpowiedzialny
  const gpsrData = gpsr[opts.manufacturerId]
  if (gpsrData) {
    lines.push(`      <a name="Producent odpowiedzialny">${cdata(gpsrData.responsible)}</a>`)
    const safetyInfo = opts.certs
      ? `Produkt zgodny z dyrektywami UE. Certyfikaty: ${opts.certs}. Deklaracja zgodności dostępna na stronie producenta.`
      : gpsrData.safety
    lines.push(`      <a name="Informacje o bezpieczeństwie">${cdata(safetyInfo)}</a>`)
  }

  lines.push('    </attrs>')
  lines.push('  </o>')
  return lines.join('\n')
}

interface Candidate {
  product: Product
  variant?: ProductVariant
  pn: string // klucz wyszukania StockCache/EAN + atrybut „Kod producenta"
  id: string // ID oferty Ceneo (stabilne): wariant→PN, produkt→product.id (jak dotąd)
}

interface StockRow {
  price: number | null
  availability: string
  totalStock: number
  found: boolean
}

export async function GET() {
  // 1) Zbierz wszystkich kandydatów (produkt lub wariant) z numerem PN.
  // Pełny katalog (urządzenia + materiały) — Ceneo pobiera ten plik jako jedyne
  // źródło ofert sklepu, więc musi zawierać wszystko, co ma być na Ceneo.
  const candidates: Candidate[] = []
  for (const product of products) {
    if (!product.images?.length) continue // Ceneo wymaga zdjęcia
    if (product.variants && product.variants.length > 0) {
      for (const v of product.variants) candidates.push({ product, variant: v, pn: v.partNumber, id: v.partNumber })
    } else {
      const pn = product.specifications.find(s => s.name === 'Part Number')?.value || product.id
      candidates.push({ product, pn, id: product.id })
    }
  }

  // 2) Pobierz LIVE ceny/stan (StockCache) i EAN (ProductEan) wsadowo. StockCache.price
  //    to cena sprzedaży netto z marżą sklepu (po bezpieczniku kosztowym ze stock-sync).
  const pns = Array.from(new Set(candidates.map(c => c.pn)))
  const stockMap = new Map<string, StockRow>()
  const eanMap = new Map<string, string>() // klucz: PN wielkimi literami
  try {
    for (let i = 0; i < pns.length; i += 500) {
      const chunk = pns.slice(i, i + 500)
      const [sc, eans] = await Promise.all([
        prisma.stockCache.findMany({
          where: { partNumber: { in: chunk } },
          select: { partNumber: true, price: true, availability: true, totalStock: true, found: true },
        }),
        prisma.productEan.findMany({
          where: { partNumber: { in: chunk.map(s => s.toUpperCase()) } },
          select: { partNumber: true, ean: true },
        }),
      ])
      for (const r of sc) stockMap.set(r.partNumber, r)
      for (const r of eans) if (isValidGtin(r.ean)) eanMap.set(r.partNumber, r.ean)
    }
  } catch (err) {
    console.error('[ceneo-feed] błąd pobierania StockCache/ProductEan — fallback do cen statycznych:', err)
  }

  // 3) Zbuduj oferty — tylko dostępne, z ceną live (fallback: priceFrom).
  // Deduplikacja po ID oferty — zabezpieczenie przed tym samym SKU (PN wariantu)
  // cross-listowanym na kilku stronach. Urządzenia mają ID = product.id (stabilne,
  // jak dotąd), więc to samo akcesorium na dwóch stronach to dwie różne oferty.
  const seenIds = new Set<string>()
  const offers: string[] = []
  for (const c of candidates) {
    if (seenIds.has(c.id)) continue
    const sc = stockMap.get(c.pn)

    // Cena netto: live ze StockCache (preferowana) → fallback priceFrom (statyczna).
    const liveNet = sc?.found && sc.price && sc.price > 0
      ? sc.price
      : (c.variant?.priceFrom ?? c.product.priceFrom)
    if (!liveNet || liveNet <= 0) continue

    // Dostępność: live ze StockCache (preferowana) → fallback statyczna.
    const availRaw = sc?.found ? sc.availability : (c.variant?.availability ?? c.product.availability)
    if (availRaw === 'unavailable') continue
    // Gdy mamy live stan — wymagamy realnej dostępności (nie płacimy CPC za braki).
    if (sc?.found && sc.totalStock <= 0) continue

    const priceBrutto = Math.round(liveNet * CENEO_MARKUP * VAT * 100) / 100
    const avail = availabilityMap[availRaw] ?? 99

    const manufacturer = getManufacturerById(c.product.manufacturerId)
    const brand = manufacturer?.name || ''
    const images = c.product.images.map(img => `${SITE_URL}${img}`)
    const cat = getCategoryPath(c.product.categoryId, c.product.subcategoryIds)
    const weight = getWeight(c.product.specifications)
    const certs = getCertificates(c.product.specifications)
    const baseDesc = c.product.description
      ? truncateDesc(stripMarkdown(c.product.description), 5000)
      : stripMarkdown(c.product.shortDescription || '')
    const fullDesc = enrichDesc(baseDesc, c.product.specifications)
    const model = deriveModel(c.product, c.variant)
    const ean = eanMap.get(c.pn.toUpperCase())

    // Deep-link do wariantu. Strony statyczne /produkt/[slug]/[size]/[pn] istnieją
    // TYLKO dla etykiet i taśm — dla urządzeń (terminale, drukarki, skanery)
    // variantSizeSlug zwracał fallback 'bez-rozmiaru' i feed linkował na 404
    // (45% ofert!). Urządzenia linkujemy przez ?pn= — strona produktu preselektuje
    // wariant i pokazuje jego cenę.
    const hasStaticVariantPage =
      isThermalLabelProduct(c.product) || isTransferLabelProduct(c.product) || isRibbonProduct(c.product)
    const sizeSlug = c.variant ? variantSizeSlug(c.variant) : ''
    const url = c.variant
      ? hasStaticVariantPage && sizeSlug
        ? `${SITE_URL}/produkt/${c.product.slug}/${sizeSlug}/${c.variant.partNumber}`
        : `${SITE_URL}/produkt/${c.product.slug}?pn=${encodeURIComponent(c.variant.partNumber)}`
      : `${SITE_URL}/produkt/${c.product.slug}`

    const size = c.variant?.attributes?.['Rozmiar'] || c.variant?.name
    const name = c.variant ? `${c.product.name} — ${c.variant.name}` : c.product.name

    offers.push(buildOffer({
      id: c.id,
      url,
      price: priceBrutto,
      avail,
      weight,
      cat,
      name,
      desc: fullDesc,
      images,
      manufacturer: brand,
      manufacturerId: c.product.manufacturerId,
      partNumber: c.pn,
      ean,
      size,
      model,
      certs,
    }))
    seenIds.add(c.id)
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<offers xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1">
${offers.join('\n')}
</offers>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
