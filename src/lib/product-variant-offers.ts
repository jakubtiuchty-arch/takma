import type { Product } from '@/data/products'
import type { StockInfo } from '@/lib/ingram'
import { absoluteProductImageUrl } from './magicard-offer'

export function selectProductVariant(product: Product, rows: StockInfo[], pn?: string | null) {
  const variants = product.variants ?? []
  const requested = variants.find(variant => variant.partNumber === pn)
  if (requested) return requested
  const stock = new Map(rows.map(row => [row.partNumber, row]))
  const priced = variants.filter(variant => {
    const row = stock.get(variant.partNumber)
    return row?.found && row.price != null && row.price > 0
  }).sort((a, b) => stock.get(a.partNumber)!.price! - stock.get(b.partNumber)!.price!)
  return priced.find(variant => stock.get(variant.partNumber)?.availability === 'available') ?? priced[0] ?? variants[0]
}

export function productVariantSchema(product: Product, rows: StockInfo[]) {
  const url = `https://www.takma.com.pl/produkt/${product.slug}`
  const stock = new Map(rows.map(row => [row.partNumber, row]))
  return {
    '@context': 'https://schema.org',
    '@type': 'ProductGroup',
    '@id': `${url}#product-group`,
    url,
    name: product.name,
    description: product.shortDescription,
    productGroupID: product.id,
    brand: { '@type': 'Brand', name: 'Zebra' },
    manufacturer: { '@type': 'Organization', name: 'Zebra Technologies', url: 'https://www.zebra.com' },
    image: product.images.map(absoluteProductImageUrl),
    ...(product.sameAs ? { sameAs: product.sameAs } : {}),
    hasVariant: (product.variants ?? []).map(variant => {
      const row = stock.get(variant.partNumber)
      const variantUrl = `${url}?pn=${encodeURIComponent(variant.partNumber)}`
      const hasPrice = row?.found && row.price != null && row.price > 0
      return {
        '@type': 'Product',
        '@id': `${url}#${variant.partNumber}`,
        name: `${product.name} ${variant.name}`,
        description: `${product.shortDescription}. Wariant: ${variant.name}.`,
        sku: variant.partNumber,
        mpn: variant.partNumber,
        url: variantUrl,
        image: product.images.map(absoluteProductImageUrl),
        brand: { '@type': 'Brand', name: 'Zebra' },
        isVariantOf: { '@id': `${url}#product-group` },
        additionalProperty: Object.entries(variant.attributes).map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
        // Bez potwierdzonej ceny nie tworzymy pozornej oferty ani dostępności.
        ...(hasPrice ? { offers: {
          '@type': 'Offer',
          url: variantUrl,
          price: (Math.round(row!.price! * 123) / 100).toFixed(2),
          priceCurrency: 'PLN',
          availability: row!.availability === 'available' ? 'https://schema.org/InStock'
            : row!.availability === 'on-order' ? 'https://schema.org/BackOrder' : 'https://schema.org/OutOfStock',
          itemCondition: 'https://schema.org/NewCondition',
          seller: { '@type': 'Organization', name: 'TAKMA', url: 'https://www.takma.com.pl' },
        } } : {}),
      }
    }),
  }
}
