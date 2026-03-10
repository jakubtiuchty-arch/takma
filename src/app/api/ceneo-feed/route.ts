import { NextResponse } from 'next/server'
import { products, getCategoryById, getSubcategoryById, getManufacturerById } from '@/data/products'

const SITE_URL = 'https://www.takma.com.pl'

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
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
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
  lines.push(`      <a name="Part Number">${cdata(opts.partNumber)}</a>`)

  // EAN
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

export async function GET() {
  const offers: string[] = []

  for (const product of products) {
    const manufacturer = getManufacturerById(product.manufacturerId)
    const brand = manufacturer?.name || ''
    const imageLinks = product.images.map(img => `${SITE_URL}${img}`)
    const link = `${SITE_URL}/produkt/${product.slug}`
    const cat = getCategoryPath(product.categoryId, product.subcategoryIds)
    const weight = getWeight(product.specifications)
    const certs = getCertificates(product.specifications)

    // Full description: description (stripped of markdown) > shortDescription fallback
    const fullDesc = product.description
      ? truncateDesc(stripMarkdown(product.description), 5000)
      : stripMarkdown(product.shortDescription)

    // EAN from specifications if available
    const eanSpec = product.specifications.find(s => s.name === 'EAN' || s.name === 'GTIN')
    const ean = eanSpec?.value

    // Skip products without images or prices
    if (imageLinks.length === 0 || !product.priceFrom || product.priceFrom <= 0) continue

    // Skip unavailable products
    if (product.availability === 'unavailable') continue

    if (product.variants && product.variants.length > 0) {
      for (const variant of product.variants) {
        if (!variant.priceFrom || variant.priceFrom <= 0) continue
        if (variant.availability === 'unavailable') continue

        const avail = availabilityMap[variant.availability] ?? 99

        offers.push(
          buildOffer({
            id: variant.partNumber,
            url: link,
            price: variant.priceFrom * 1.23,
            avail,
            weight,
            cat,
            name: `${product.name} — ${variant.name}`,
            desc: fullDesc,
            images: imageLinks,
            manufacturer: brand,
            manufacturerId: product.manufacturerId,
            partNumber: variant.partNumber,
            ean,
            certs,
          })
        )
      }
    } else {
      const avail = availabilityMap[product.availability] ?? 99

      offers.push(
        buildOffer({
          id: product.id,
          url: link,
          price: product.priceFrom * 1.23,
          avail,
          weight,
          cat,
          name: product.name,
          desc: fullDesc,
          images: imageLinks,
          manufacturer: brand,
          manufacturerId: product.manufacturerId,
          partNumber: product.specifications.find(s => s.name === 'Part Number')?.value || product.id,
          ean,
          certs,
        })
      )
    }
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
