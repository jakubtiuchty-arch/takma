import type { Product } from '@/data/products'
import type { StockInfo } from '@/lib/ingram'
import { getManufacturerById } from '@/data/manufacturers'
import { absoluteProductImageUrl } from './magicard-offer'

/** Marka z karty produktu. Wcześniej stała „Zebra" — po dodaniu Epsona i Labelmate do ofert
 *  żywych ich karty ogłaszały w danych strukturalnych cudzą markę. */
function markaProduktu(product: Product) {
  const producent = getManufacturerById(product.manufacturerId)
  const nazwa = producent?.name ?? 'Zebra'
  const pelna = product.manufacturerId === 'zebra' ? 'Zebra Technologies' : nazwa
  return {
    brand: { '@type': 'Brand' as const, name: nazwa },
    manufacturer: {
      '@type': 'Organization' as const,
      name: pelna,
      ...(product.manufacturerId === 'zebra' ? { url: 'https://www.zebra.com' } : {}),
    },
  }
}

/** Oferta z żywego stanu. Cena brutto, bo taką widzi kupujący i taka idzie do feedu. */
function ofertaZeStanu(row: StockInfo | undefined, url: string) {
  if (!row?.found || row.price == null || row.price <= 0) return undefined
  return {
    '@type': 'Offer' as const,
    url,
    price: (Math.round(row.price * 123) / 100).toFixed(2),
    priceCurrency: 'PLN',
    availability: row.availability === 'available' ? 'https://schema.org/InStock'
      : row.availability === 'on-order' ? 'https://schema.org/BackOrder' : 'https://schema.org/OutOfStock',
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@type': 'Organization' as const, name: 'TAKMA', url: 'https://www.takma.com.pl' },
  }
}

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
  const marka = markaProduktu(product)

  // Karta bez wariantów (nawijarki i dyspensery Labelmate) to zwykły Product z jedną ofertą.
  // ProductGroup z pustym hasVariant nie niósł żadnej oferty — Google widział produkt bez ceny.
  if (!product.variants?.length) {
    const partNumber = product.specifications?.find(spec => spec.name === 'Part Number')?.value
    const oferta = ofertaZeStanu(partNumber ? stock.get(partNumber) : undefined, url)
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${url}#product`,
      url,
      name: product.name,
      description: product.shortDescription,
      ...(partNumber ? { sku: partNumber, mpn: partNumber } : {}),
      ...marka,
      image: product.images.map(absoluteProductImageUrl),
      ...(product.sameAs ? { sameAs: product.sameAs } : {}),
      ...(oferta ? { offers: oferta } : {}),
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'ProductGroup',
    '@id': `${url}#product-group`,
    url,
    name: product.name,
    description: product.shortDescription,
    productGroupID: product.id,
    ...marka,
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
        ...(variant.gtin13 ? { gtin13: variant.gtin13 } : {}),
        url: variantUrl,
        image: product.images.map(absoluteProductImageUrl),
        brand: marka.brand,
        isVariantOf: { '@id': `${url}#product-group` },
        additionalProperty: Object.entries(variant.attributes).map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
        // Bez potwierdzonej ceny nie tworzymy pozornej oferty ani dostępności.
        ...(hasPrice ? { offers: ofertaZeStanu(row, variantUrl) } : {}),
      }
    }),
  }
}
