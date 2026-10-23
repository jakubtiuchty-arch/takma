import type { Product } from '@/data/products'
import type { StockInfo } from '@/lib/ingram'
import { getManufacturerById } from '@/data/manufacturers'
import { absoluteProductImageUrl, cenaWaznaDo } from './magicard-offer'
import { activeSupplierOffer } from '@/data/supplier-offers'

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
function ofertaZeStanu(row: StockInfo | undefined, url: string, priceValidUntil: string, rfidTerminal = false) {
  if (!row?.found || row.price == null || row.price <= 0) return undefined
  return {
    '@type': 'Offer' as const,
    url,
    price: (Math.round(row.price * 123) / 100).toFixed(2),
    priceCurrency: 'PLN',
    priceValidUntil,
    availability: row.availability === 'available' ? 'https://schema.org/InStock'
      : 'https://schema.org/OutOfStock',
    // Te karty pozwalają zgłosić powiadomienie, nie złożyć zamówienia bez zapasu.
    ...(rfidTerminal && row.availability === 'on-order' && row.inDelivery > 0 ? {
      description: 'Produkt chwilowo niedostępny. Oczekujemy dostawy; możesz włączyć powiadomienie o dostępności.',
    } : {}),
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
  const images = product.images.filter(src => !src.includes('placeholder')).map(absoluteProductImageUrl)
  const rfidTerminal = product.subcategoryIds?.some(id => id === 'terminale-rfid' || id === 'uchwyty-rfid') ?? false
  const datalogicScanner = product.manufacturerId === 'datalogic' && product.categoryId === 'skanery-kodow-kreskowych'
  const bixolonLabel = (product.manufacturerId === 'bixolon' && ['drukarki-etykiet', 'mobilne-drukarki-paragonow', 'drukarki-pos'].includes(product.categoryId) && !product.subcategoryIds?.includes('drukarki-rfid')) || (product.manufacturerId === 'epson' && ['drukarki-pos', 'mobilne-drukarki-paragonow'].includes(product.categoryId)) || (product.manufacturerId === 'sunmi' && product.categoryId === 'drukarki-pos') || (product.manufacturerId === 'citizen' && product.categoryId === 'drukarki-pos')
  const sunmiTerminal = product.manufacturerId === 'sunmi' && product.categoryId === 'terminale-mobilne'
  const posComputer = product.categoryId === 'komputery-pos'
  const kdsDisplay = product.categoryId === 'ekrany-kds'
  const kioskDisplay = product.categoryId === 'kioski-samoobslugowe'
  const cipherlabTerminal = product.manufacturerId === 'cipherlab' && product.categoryId === 'terminale-mobilne'
  const bluebirdTerminal = product.manufacturerId === 'bluebird' && product.categoryId === 'terminale-mobilne'
  const epsonColorworks = product.manufacturerId === 'epson' && product.categoryId === 'drukarki-etykiet'
  const bixolonRfid = product.manufacturerId === 'bixolon' && product.subcategoryIds?.includes('drukarki-rfid')
  const detailedProduct = sunmiTerminal || posComputer || kdsDisplay || kioskDisplay || cipherlabTerminal || bluebirdTerminal || rfidTerminal || datalogicScanner || bixolonLabel || epsonColorworks || bixolonRfid
  const commonProperties = detailedProduct ? product.specifications
    .filter(spec => spec.name !== 'Part Number')
    .map(spec => ({ '@type': 'PropertyValue', name: spec.name, value: spec.value })) : []
  const facts = detailedProduct ? {
    model: (sunmiTerminal || posComputer || kdsDisplay || kioskDisplay) ? product.name.replace(/^(?:SUNMI|Zebra)\s+/, '') : (epsonColorworks || bixolonRfid) ? product.name.replace(/^(?:BIXOLON|Epson)\s+/, '') : cipherlabTerminal ? product.name.replace(/^CipherLab\s+/, '') : bluebirdTerminal ? product.name.replace(/^Bluebird\s+/, '') : bixolonLabel ? product.name.replace(/^(?:BIXOLON|Epson|SUNMI|Citizen)\s+/, '') : datalogicScanner ? product.name.replace(/^Datalogic\s+/, '') : product.name.replace(/^Zebra\s+/, ''),
    category: sunmiTerminal ? 'Terminale mobilne SUNMI' : posComputer ? 'Komputery POS' : kdsDisplay ? 'Ekrany KDS' : kioskDisplay ? 'Kioski samoobsługowe' : epsonColorworks ? 'Kolorowe drukarki etykiet Epson ColorWorks' : bixolonRfid ? 'Drukarki RFID BIXOLON' : cipherlabTerminal ? 'Terminale mobilne CipherLab' : bluebirdTerminal ? (product.subcategoryIds?.includes('uchwyty-rfid') ? 'Uchwyty RFID' : 'Terminale mobilne Bluebird') : bixolonLabel ? (product.categoryId === 'drukarki-pos' ? 'Drukarki POS' : product.categoryId === 'mobilne-drukarki-paragonow' ? 'Mobilne drukarki paragonów' : 'Drukarki etykiet BIXOLON') : datalogicScanner ? 'Skanery kodów kreskowych Datalogic' : product.subcategoryIds?.includes('uchwyty-rfid') ? 'Uchwyty RFID' : 'Terminale RFID',
    additionalProperty: commonProperties,
  } : {}
  const marka = markaProduktu(product)
  const priceValidUntil = activeSupplierOffer(product.slug)?.endsAt.slice(0, 10) ?? cenaWaznaDo()

  // Karta bez wariantów (nawijarki i dyspensery Labelmate) to zwykły Product z jedną ofertą.
  // ProductGroup z pustym hasVariant nie niósł żadnej oferty — Google widział produkt bez ceny.
  if (!product.variants?.length || (detailedProduct && product.variants.length === 1)) {
    const partNumber = product.variants?.[0]?.partNumber ?? product.specifications?.find(spec => spec.name === 'Part Number')?.value
    const oferta = ofertaZeStanu(partNumber ? stock.get(partNumber) : undefined, url, priceValidUntil, rfidTerminal)
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${url}#product`,
      url,
      name: product.name,
      description: product.shortDescription,
      ...(partNumber ? { sku: partNumber, mpn: partNumber } : {}),
      ...marka,
      ...facts,
      ...(images.length ? { image: images } : {}),
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
    ...facts,
    ...(images.length ? { image: images } : {}),
    ...(product.sameAs ? { sameAs: product.sameAs } : {}),
    hasVariant: (product.variants ?? []).map(variant => {
      const row = stock.get(variant.partNumber)
      const variantUrl = `${url}?pn=${encodeURIComponent(variant.partNumber)}`
      const hasPrice = row?.found && row.price != null && row.price > 0
      return {
        '@type': 'Product',
        '@id': `${url}#${variant.partNumber}`,
        name: `${product.name} ${variant.name}`,
        description: `${product.shortDescription.trim().replace(/[.!?]+$/, '')}. Wariant: ${variant.name.trim().replace(/[.!?]+$/, '')}.`,
        sku: variant.partNumber,
        mpn: variant.partNumber,
        ...(variant.gtin13 ? { gtin13: variant.gtin13 } : {}),
        url: variantUrl,
        ...(images.length ? { image: images } : {}),
        brand: marka.brand,
        isVariantOf: { '@id': `${url}#product-group` },
        additionalProperty: [
          ...commonProperties.filter(property => (sunmiTerminal || posComputer || kdsDisplay || kioskDisplay || property.name !== 'Pamięć') && !(property.name in variant.attributes)),
          ...Object.entries(variant.attributes).map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
        ],
        // Bez potwierdzonej ceny nie tworzymy pozornej oferty ani dostępności.
        ...(hasPrice ? { offers: ofertaZeStanu(row, variantUrl, priceValidUntil, rfidTerminal) } : {}),
      }
    }),
  }
}
