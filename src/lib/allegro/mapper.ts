import type { Product, ProductVariant } from '@/data/products'
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

/** Zwięzły opis rozmiaru wariantu — obsługuje etykiety (Rozmiar) i taśmy (Szerokość/Długość). */
export function variantSizeLabel(v: ProductVariant): string {
  const a = v.attributes || {}
  const core = (a['Rdzeń'] || '').trim()
  let dim: string
  if (a['Rozmiar']) {
    dim = a['Rozmiar'].trim()
  } else {
    const w = (a['Szerokość'] || '').replace(/\s*mm$/, '').trim()
    const len = (a['Długość'] || '').trim()
    dim = w && len ? `${w}×${len}` : v.name
  }
  return core ? `${dim}, rdzeń ${core}` : dim
}

/** Tytuł oferty ≤ 75 znaków: „<nazwa produktu> <rozmiar>". */
export function buildOfferName(product: Product, variant: ProductVariant): string {
  const base = `${product.name} ${variantSizeLabel(variant)}`.replace(/\s+/g, ' ').trim()
  if (base.length <= MAX_NAME) return base
  return base.slice(0, MAX_NAME).replace(/\s+\S*$/, '').trim()
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

/** Opis oferty w formacie Allegro (sekcje TEXT) — wspólny dla taśm i etykiet. */
export function buildOfferDescription(
  product: Product,
  variant: ProductVariant,
  ean?: string,
): AllegroOfferPayload['description'] {
  const a = variant.attributes || {}
  const rozmiar =
    a['Rozmiar'] || (a['Szerokość'] && a['Długość'] ? `${a['Szerokość']} × ${a['Długość']}` : '')

  // Sekcja 1: nazwa + krótki wstęp + pełny opis (jeśli różny i dłuższy)
  const short = (product.shortDescription || '').trim()
  const long = (product.description || '').trim()
  const introParts = [short]
  if (long && long !== short) introParts.push(long)
  const introHtml = introParts.filter(Boolean).map((p) => `<p>${esc(p)}</p>`).join('')

  // Sekcja 2: specyfikacja — atrybuty wariantu + pełna specyfikacja produktu + EAN
  const specRows: Array<[string, string | undefined]> = [
    ['Part Number', variant.partNumber],
    ['Rozmiar', rozmiar],
    ['Rdzeń', a['Rdzeń']],
    ...Object.entries(a)
      .filter(([k]) => !['Rozmiar', 'Rdzeń', 'Szerokość', 'Długość'].includes(k))
      .map(([k, v]) => [k, v] as [string, string]),
    ...(product.specifications || []).map((s) => [s.name, s.value] as [string, string]),
    ...(ean ? [['EAN', ean] as [string, string]] : []),
    ['Producent', 'Zebra Technologies'],
  ]
  // dedup po nazwie (pierwsze wystąpienie wygrywa), pomiń puste
  const seen = new Set<string>()
  const rows = specRows.filter(([k, v]) => {
    if (!v || seen.has(k)) return false
    seen.add(k)
    return true
  })
  const specHtml = `<ul>${rows.map(([k, v]) => `<li><b>${esc(k)}:</b> ${esc(String(v))}</li>`).join('')}</ul>`

  // Sekcja 3: zastosowania
  const apps = (product.applications || []).slice(0, 8)
  const appsHtml = apps.length
    ? `<h2>Zastosowania</h2><ul>${apps.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`
    : ''

  return {
    sections: [
      { items: [{ type: 'TEXT', content: `<h2>${esc(product.name)}</h2>${introHtml || `<p>${esc(product.name)}</p>`}` }] },
      { items: [{ type: 'TEXT', content: `<h2>Specyfikacja</h2>${specHtml}` }] },
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
}: BuildOfferInput): AllegroOfferPayload {
  const name = buildOfferName(product, variant)
  return {
    name,
    productSet: [
      {
        product: {
          name,
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
