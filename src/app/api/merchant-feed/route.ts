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
const VAT = 1.23 // Google Shopping PL: cena brutto. Feed = cena sklepowa (StockCache.price) × VAT.

// Google availability: in_stock / out_of_stock / preorder / backorder.
// 'on-order' → out_of_stock: backorder wymaga availability_date (Google odrzuca bez niej),
// a dostępność trzymamy binarnie — jest na stanie albo nie ma.
const availabilityMap: Record<string, string> = {
  available: 'in_stock',
  'on-order': 'out_of_stock',
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function stripMarkdown(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1')
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text
  const cut = text.lastIndexOf(' ', max)
  return (cut > 0 ? text.slice(0, cut) : text.slice(0, max)) + '...'
}

function getCategoryPath(categoryId: string, subcategoryIds?: string[]): string {
  const category = getCategoryById(categoryId)
  if (!category) return ''
  if (subcategoryIds?.length) {
    const sub = subcategoryIds.map(id => getSubcategoryById(id)).find(s => s && !s.id.startsWith('akcesoria'))
    if (sub) return `${category.name} > ${sub.name}`
  }
  return category.name
}

function buildItem(opts: {
  id: string
  title: string
  description: string
  link: string
  imageLink: string
  price: string // brutto, np. "124.55"
  availability: string
  brand: string
  mpn: string
  gtin?: string
  itemGroupId?: string
  productType?: string
}): string {
  const lines = [
    '    <item>',
    `      <g:id>${escapeXml(opts.id)}</g:id>`,
    `      <title>${escapeXml(opts.title)}</title>`,
    `      <description>${escapeXml(opts.description)}</description>`,
    `      <link>${escapeXml(opts.link)}</link>`,
    `      <g:image_link>${escapeXml(opts.imageLink)}</g:image_link>`,
    `      <g:price>${opts.price} PLN</g:price>`,
    `      <g:availability>${opts.availability}</g:availability>`,
    `      <g:brand>${escapeXml(opts.brand)}</g:brand>`,
    `      <g:mpn>${escapeXml(opts.mpn)}</g:mpn>`,
    `      <g:condition>new</g:condition>`,
  ]
  if (opts.gtin) lines.push(`      <g:gtin>${escapeXml(opts.gtin)}</g:gtin>`)
  if (opts.itemGroupId) lines.push(`      <g:item_group_id>${escapeXml(opts.itemGroupId)}</g:item_group_id>`)
  if (opts.productType) lines.push(`      <g:product_type>${escapeXml(opts.productType)}</g:product_type>`)
  lines.push('    </item>')
  return lines.join('\n')
}

interface Candidate {
  product: Product
  variant?: ProductVariant
  pn: string
}

interface StockRow {
  price: number | null
  availability: string
  totalStock: number
  found: boolean
}

export async function GET() {
  // 1) Kandydaci (produkt lub wariant) z PN.
  const candidates: Candidate[] = []
  for (const product of products) {
    if (!product.images?.length) continue
    if (product.variants && product.variants.length > 0) {
      for (const v of product.variants) candidates.push({ product, variant: v, pn: v.partNumber })
    } else {
      const pn = product.specifications.find(s => s.name === 'Part Number')?.value || product.id
      candidates.push({ product, pn })
    }
  }

  // 2) Live ceny/stan (StockCache) + EAN (ProductEan) wsadowo.
  const pns = Array.from(new Set(candidates.map(c => c.pn)))
  const stockMap = new Map<string, StockRow>()
  const eanMap = new Map<string, string>()
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
    console.error('[merchant-feed] błąd StockCache/ProductEan — fallback do cen statycznych:', err)
  }

  // 3) Itemy — tylko dostępne, cena brutto live (fallback priceFrom).
  // Deduplikacja po PN: ten sam akcesoryjny PN bywa cross-listowany na kilku
  // stronach produktu — w feedzie musi wystąpić raz (Google odrzuca duplikaty id).
  const seenPns = new Set<string>()
  const items: string[] = []
  for (const c of candidates) {
    if (seenPns.has(c.pn)) continue
    const sc = stockMap.get(c.pn)
    const liveNet = sc?.found && sc.price && sc.price > 0
      ? sc.price
      : (c.variant?.priceFrom ?? c.product.priceFrom)
    if (!liveNet || liveNet <= 0) continue

    const availRaw = sc?.found ? sc.availability : (c.variant?.availability ?? c.product.availability)
    if (availRaw === 'unavailable') continue
    if (sc?.found && sc.totalStock <= 0) continue

    const priceGross = (Math.round(liveNet * VAT * 100) / 100).toFixed(2)
    const availability = availabilityMap[availRaw] || 'in_stock'

    const manufacturer = getManufacturerById(c.product.manufacturerId)
    const brand = manufacturer?.name || 'Zebra'
    const imageLink = `${SITE_URL}${c.product.images[0]}`
    const productType = getCategoryPath(c.product.categoryId, c.product.subcategoryIds)
    const description = truncate(
      stripMarkdown(c.product.description || c.product.shortDescription || ''),
      5000,
    )
    const gtin = eanMap.get(c.pn.toUpperCase())

    // Strony statyczne wariantów istnieją tylko dla etykiet/taśm — urządzenia
    // przez ?pn= (bez tego Google dostawał 404 dla 45% ofert; szczegóły: ceneo-feed).
    const hasStaticVariantPage =
      isThermalLabelProduct(c.product) || isTransferLabelProduct(c.product) || isRibbonProduct(c.product)
    const sizeSlug = c.variant ? variantSizeSlug(c.variant) : ''
    const link = c.variant
      ? hasStaticVariantPage && sizeSlug
        ? `${SITE_URL}/produkt/${c.product.slug}/${sizeSlug}/${c.variant.partNumber}`
        : `${SITE_URL}/produkt/${c.product.slug}?pn=${encodeURIComponent(c.variant.partNumber)}`
      : `${SITE_URL}/produkt/${c.product.slug}`

    const title = c.variant ? `${c.product.name} — ${c.variant.name}` : c.product.name

    items.push(buildItem({
      id: c.pn,
      title,
      description,
      link,
      imageLink,
      price: priceGross,
      availability,
      brand,
      mpn: c.pn,
      gtin,
      itemGroupId: c.variant ? c.product.slug : undefined,
      productType,
    }))
    seenPns.add(c.pn)
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>TAKMA — Produkty AutoID</title>
    <link>${SITE_URL}</link>
    <description>Drukarki etykiet, skanery kodów, terminale mobilne, materiały eksploatacyjne — B2B AutoID</description>
${items.join('\n')}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
