import type { Product, ProductVariant } from '@/data/products'
import { LABEL_CORE } from '@/data/label-core'
import { ALLEGRO_PARAM, ALLEGRO_DICT, ALLEGRO_CATEGORY, type AllegroProductKind } from './categories'
import type { AllegroPrice } from './pricing'
import type { OfferServices } from './selling-policies'
import type { GpsrFields } from './gpsr'

/**
 * Budowa payloadu oferty Allegro z wariantu katalogu TAKMA (taśmy i etykiety).
 *
 * Tworzymy DRAFT (publication.status = INACTIVE) — minimalny, ale poprawny:
 *  - productSet[0].product: kategoria (17254 taśmy / 17255 etykiety) + Producent (Zebra)
 *    + Kod producenta (PN) + obraz. Parametry KATALOGOWE muszą być w product, nie w offer.
 *  - offer.parameters: Stan = Nowy (parametr OFERTOWY).
 *  - sellingMode.price = cena BRUTTO, stock.available, opis HTML (sekcje TEXT).
 *
 * EAN POMIJAMY świadomie (zwolnienie z GTIN na koncie).
 */

const MAX_NAME = 75

/** Wersja wariantu (np. „ze skrzydełkami") bez angielskiego nawiasu — odróżnia warianty o tym samym rozmiarze. */
export function variantWersja(v: ProductVariant): string {
  return (v.attributes?.['Wersja'] || '').replace(/\s*\([^)]*\)/g, '').trim()
}

/** Zwięzły opis rozmiaru wariantu — obsługuje etykiety (Rozmiar) i taśmy (Szerokość/Długość) + wersję. */
export function variantSizeLabel(v: ProductVariant): string {
  const a = v.attributes || {}
  const core = (a['Rdzeń'] || a['Rdzeń (gilza)'] || LABEL_CORE[v.partNumber] || '').trim()
  let dim: string
  if (a['Rozmiar']) {
    dim = a['Rozmiar'].trim()
  } else {
    const w = (a['Szerokość'] || '').replace(/\s*mm$/, '').trim()
    const len = (a['Długość'] || '').trim()
    dim = w && len ? `${w}×${len}` : v.name
  }
  let label = core ? `${dim}, rdzeń ${core}` : dim
  const wersja = variantWersja(v)
  if (wersja) label += `, ${wersja}`
  return label
}

/** Tytuł oferty ≤ 75 znaków: „<nazwa produktu> <rozmiar>". */
export function buildOfferName(product: Product, variant: ProductVariant): string {
  const base = `${product.name} ${variantSizeLabel(variant)}`.replace(/\s+/g, ' ').trim()
  if (base.length <= MAX_NAME) return base
  return base.slice(0, MAX_NAME).replace(/\s+\S*$/, '').trim()
}

/**
 * Nazwa produktu KATALOGOWEGO z numerem katalogowym na końcu.
 *
 * Allegro dopasowuje nowy produkt do katalogu po nazwie w obrębie kategorii. Nasze
 * nazwy wariantów („Etykiety termiczne Zebra Z-Select 2000D 102×152 mm") trafiają
 * w produkty założone przez innych sprzedawców, które mają w polu „Kod producenta"
 * inną wartość — Allegro odrzuca wtedy ofertę błędem 422 „does not match the existing
 * parameter value". Numer katalogowy w nazwie rozróżnia warianty (te same wymiary
 * bywają w kilku PN, różniących się liczbą etykiet w rolce) i pozwala założyć własny,
 * poprawny wpis katalogowy — z naszym GTIN, więc oferta może być od razu aktywna.
 */
export function buildCatalogProductName(product: Product, variant: ProductVariant): string {
  const suffix = ` ${variant.partNumber}`
  const base = `${product.name} ${variantSizeLabel(variant)}`.replace(/\s+/g, ' ').trim()
  const room = MAX_NAME - suffix.length
  const head = base.length <= room ? base : base.slice(0, room).replace(/\s+\S*$/, '').trim()
  return `${head}${suffix}`
}

export interface AllegroOfferPayload {
  name: string
  productSet: Array<{
    product: {
      name: string
      category: { id: string }
      parameters: Array<{ id: string; values?: string[]; valuesIds?: string[] }>
      images?: string[]
    }
    quantity: { value: number }
    responsibleProducer?: { id: string }
    safetyInformation?: { type: 'TEXT'; description: string }
  }>
  parameters: Array<{ id: string; valuesIds?: string[]; values?: string[] }>
  sellingMode: { price: { amount: string; currency: 'PLN' } }
  stock: { available: number }
  description: { sections: Array<{ items: Array<{ type: 'TEXT'; content: string }> }> }
  delivery?: OfferServices['delivery']
  afterSalesServices?: OfferServices['afterSalesServices']
  publication: { status: 'ACTIVE' | 'INACTIVE' }
}

/** Escape do treści HTML opisu (dozwolone tagi Allegro: h1,h2,p,ul,ol,li,b). */
function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/** Usuń artefakty markdown ([tekst](url), **pogrubienia**) — w danych bywają. */
function stripMd(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // [tekst](url) → tekst
    .replace(/\*\*([^*]+)\*\*/g, '$1') // **tekst** → tekst
    .replace(/\s+/g, ' ')
    .trim()
}

/** Czy produkt jest etykietą (po subkategoriach). */
function isLabelProduct(product: Product): boolean {
  return (product.subcategoryIds || []).some((s) => s.startsWith('etykiety'))
}

/**
 * Materiał etykiety: „Papier" lub „Folia". Kolejność pewności:
 *  1) subkategoria TT (-foliowe / -papierowe) — definitywna,
 *  2) „Materiał lica" ze specyfikacji (papier vs polipropylen/poliester/folia…),
 *  3) etykiety specjalne → folia, termiczne (DT) → papier (domyślnie).
 * Dla taśm/innych → undefined (nie dodajemy wiersza).
 */
export function labelMaterial(product: Product): 'Papier' | 'Folia' | undefined {
  if (!isLabelProduct(product)) return undefined
  const sub = product.subcategoryIds || []
  if (sub.includes('etykiety-termotransferowe-foliowe')) return 'Folia'
  if (sub.includes('etykiety-termotransferowe-papierowe')) return 'Papier'

  const lica = (product.specifications?.find((s) => /materia/i.test(s.name))?.value || '').toLowerCase()
  if (/papier/.test(lica)) return 'Papier'
  if (/foli|poliester|polipropylen|polietylen|poliolefin|bopp|\bpp\b|\bpet\b|\bpe\b|winyl|syntetyc/.test(lica)) return 'Folia'

  if (sub.includes('etykiety-termotransferowe-specjalne')) return 'Folia'
  if (sub.includes('etykiety-termiczne')) return 'Papier'
  return undefined
}

/** Zwięzły wstęp serii (z shortDescription) — oczyszczony z markdown, przycięty. */
function seriesIntro(product: Product): string {
  const raw = stripMd(product.shortDescription || '')
  if (!raw) return ''
  if (raw.length <= 600) return raw
  // przytnij do granicy zdania w okolicach 600 znaków
  const cut = raw.slice(0, 600)
  const lastDot = cut.lastIndexOf('. ')
  return (lastDot > 200 ? cut.slice(0, lastDot + 1) : cut.replace(/\s+\S*$/, '')).trim()
}

/**
 * Opis oferty — KONKRET, bez lania wody: zwięzły wstęp serii (shortDescription,
 * oczyszczony), specyfikacja (model, materiał, rozmiar, rdzeń, PN, EAN) i zastosowania.
 */
export function buildOfferDescription(
  product: Product,
  variant: ProductVariant,
  ean?: string,
): AllegroOfferPayload['description'] {
  const a = variant.attributes || {}

  // Rozmiar rozbity na osobne pola (czytelniej): taśmy → Szerokość/Długość,
  // etykiety → Szerokość/Wysokość (z „57×64 mm").
  let sizeRows: Array<[string, string]> = []
  if (a['Szerokość'] && a['Długość']) {
    sizeRows = [['Szerokość', a['Szerokość']], ['Długość', a['Długość']]]
  } else if (a['Rozmiar']) {
    const m = a['Rozmiar'].match(/([\d.,]+)\s*[×x]\s*([\d.,]+)\s*([a-zA-Z]+)?/)
    if (m) {
      const unit = m[3] || 'mm'
      sizeRows = [['Szerokość', `${m[1]} ${unit}`], ['Wysokość', `${m[2]} ${unit}`]]
    } else {
      sizeRows = [['Rozmiar', a['Rozmiar']]]
    }
  }

  const specRows: Array<[string, string | undefined]> = [
    ['Model', product.specifications?.find((s) => s.name === 'Model')?.value],
    ['Typ', product.specifications?.find((s) => /typ/i.test(s.name))?.value],
    ['Materiał', labelMaterial(product)],
    ...sizeRows,
    ['Wersja', variantWersja(variant) || undefined],
    ['Rdzeń', a['Rdzeń'] || a['Rdzeń (gilza)'] || LABEL_CORE[variant.partNumber]],
    ['Part Number', variant.partNumber],
    ...(ean ? [['EAN', ean] as [string, string]] : []),
    ['Producent', 'Zebra Technologies'],
  ]
  const seen = new Set<string>()
  const rows = specRows.filter(([k, v]) => {
    if (!v || seen.has(k)) return false
    seen.add(k)
    return true
  })
  const specHtml = `<ul>${rows.map(([k, v]) => `<li><b>${esc(k)}:</b> ${esc(String(v))}</li>`).join('')}</ul>`

  const apps = (product.applications || []).map((x) => stripMd(x)).filter(Boolean).slice(0, 8)
  const appsHtml = apps.length
    ? `<h2>Zastosowania</h2><ul>${apps.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`
    : ''

  const intro = seriesIntro(product)
  const introHtml = intro ? `<p>${esc(intro)}</p>` : ''

  return {
    sections: [
      { items: [{ type: 'TEXT', content: `<h2>${esc(product.name)}</h2>${introHtml}<h2>Specyfikacja</h2>${specHtml}` }] },
      ...(appsHtml ? [{ items: [{ type: 'TEXT' as const, content: appsHtml }] }] : []),
    ],
  }
}

export interface BuildOfferInput {
  kind: AllegroProductKind
  product: Product
  variant: ProductVariant
  price: AllegroPrice
  /** Ilość sztuk do wystawienia. Domyślnie 10. */
  available?: number
  /** URL-e obrazów po stronie Allegro (z uploadImageByUrl). Min. 1 wymagany. */
  images?: string[]
  /** Polityki dostawy/posprzedaży (z offerServices()) — żeby szkic był gotowy do aktywacji. */
  services?: OfferServices
  /** EAN/GTIN produktu (z ProductEan) — gdy jest, dodajemy param 225693 (wymagany do aktywacji). */
  ean?: string
  /** GPSR (producent + bezpieczeństwo) — z gpsrForProductSet(). */
  gpsr?: GpsrFields
  /** true → publikuj od razu jako ACTIVE; false → szkic (INACTIVE). */
  active?: boolean
  /** true → nazwa produktu katalogowego z PN (obejście kolizji z cudzym wpisem). */
  uniqueCatalogName?: boolean
}

/** Buduje payload draftu oferty dla taśmy (17254) lub etykiety (17255). */
export function buildOfferPayload({
  kind,
  product,
  variant,
  price,
  available = 10,
  images = [],
  services = {},
  ean,
  gpsr = {},
  active = false,
  uniqueCatalogName = false,
}: BuildOfferInput): AllegroOfferPayload {
  const name = buildOfferName(product, variant)
  const productName = uniqueCatalogName ? buildCatalogProductName(product, variant) : name
  return {
    name,
    productSet: [
      {
        product: {
          name: productName,
          category: { id: ALLEGRO_CATEGORY[kind] },
          parameters: [
            { id: ALLEGRO_PARAM.producent, valuesIds: [ALLEGRO_DICT.producentZebra] },
            { id: ALLEGRO_PARAM.kodProducenta, values: [variant.partNumber] },
            ...(ean ? [{ id: ALLEGRO_PARAM.ean, values: [ean] }] : []),
          ],
          ...(images.length ? { images } : {}),
        },
        quantity: { value: 1 },
        ...(gpsr.responsibleProducer ? { responsibleProducer: gpsr.responsibleProducer } : {}),
        ...(gpsr.safetyInformation ? { safetyInformation: gpsr.safetyInformation } : {}),
      },
    ],
    parameters: [{ id: ALLEGRO_PARAM.stan, valuesIds: [ALLEGRO_DICT.stanNowy] }],
    sellingMode: { price: { amount: price.gross.toFixed(2), currency: 'PLN' } },
    stock: { available },
    description: buildOfferDescription(product, variant, ean),
    ...(services.delivery ? { delivery: services.delivery } : {}),
    ...(services.afterSalesServices ? { afterSalesServices: services.afterSalesServices } : {}),
    publication: { status: active ? 'ACTIVE' : 'INACTIVE' },
  }
}
