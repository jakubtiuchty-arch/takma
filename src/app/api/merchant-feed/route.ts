import { NextResponse } from 'next/server'
import { products, getCategoryById, getManufacturerById } from '@/data/products'

const SITE_URL = 'https://takma.com.pl'

const availabilityMap: Record<string, string> = {
  available: 'in_stock',
  'on-order': 'preorder',
  unavailable: 'out_of_stock',
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function buildItem(opts: {
  id: string
  title: string
  description: string
  link: string
  imageLink: string
  price: string
  availability: string
  brand: string
  mpn: string
  condition: string
  itemGroupId?: string
  productType?: string
  variantAttributes?: Record<string, string>
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
    `      <g:condition>${opts.condition}</g:condition>`,
  ]

  if (opts.itemGroupId) {
    lines.push(`      <g:item_group_id>${escapeXml(opts.itemGroupId)}</g:item_group_id>`)
  }

  if (opts.productType) {
    lines.push(`      <g:product_type>${escapeXml(opts.productType)}</g:product_type>`)
  }

  lines.push('    </item>')
  return lines.join('\n')
}

export async function GET() {
  const items: string[] = []

  for (const product of products) {
    const manufacturer = getManufacturerById(product.manufacturerId)
    const category = getCategoryById(product.categoryId)
    const brand = manufacturer?.name || 'Zebra'
    const imageLink = product.images[0] ? `${SITE_URL}${product.images[0]}` : ''
    const link = `${SITE_URL}/produkt/${product.slug}`
    const productType = category?.name || ''

    // Skip products without images or prices
    if (!imageLink || !product.priceFrom) continue

    if (product.variants && product.variants.length > 0) {
      // Products with variants — each variant is a separate item
      for (const variant of product.variants) {
        if (!variant.priceFrom) continue

        items.push(
          buildItem({
            id: variant.partNumber,
            title: `${product.name} — ${variant.name}`,
            description: product.shortDescription,
            link,
            imageLink,
            price: variant.priceFrom.toFixed(2),
            availability: availabilityMap[variant.availability] || 'out_of_stock',
            brand,
            mpn: variant.partNumber,
            condition: 'new',
            itemGroupId: product.slug,
            productType,
            variantAttributes: variant.attributes,
          })
        )
      }
    } else {
      // Products without variants — single item
      items.push(
        buildItem({
          id: product.id,
          title: product.name,
          description: product.shortDescription,
          link,
          imageLink,
          price: product.priceFrom.toFixed(2),
          availability: availabilityMap[product.availability] || 'out_of_stock',
          brand,
          mpn: product.id,
          condition: 'new',
          productType,
        })
      )
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>TAKMA — Produkty AutoID</title>
    <link>${SITE_URL}</link>
    <description>Drukarki etykiet, skanery kodów, terminale mobilne — B2B AutoID e-commerce</description>
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
