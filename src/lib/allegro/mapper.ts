import type { Product, ProductVariant } from '@/data/products'
import type { RibbonSeries } from '@/data/transfer-ribbon-series'
import { ALLEGRO_PARAM, ALLEGRO_DICT, ALLEGRO_CATEGORY } from './categories'
import type { AllegroPrice } from './pricing'

/**
 * Budowa payloadu oferty Allegro z wariantu katalogu TAKMA.
 *
 * Tworzymy DRAFT (publication.status = INACTIVE) — minimalny, ale poprawny:
 *  - productSet[0].product: kategoria + Producent (Zebra) + Kod producenta (PN)
 *    → parametry KATALOGOWE muszą być w product, nie w offer (inaczej 422
 *      „Producent should not be specified in section offer").
 *  - offer.parameters: Stan = Nowy (parametr OFERTOWY).
 *  - sellingMode.price = cena BRUTTO (Allegro operuje brutto), stock.available.
 *
 * EAN POMIJAMY świadomie (zwolnienie z GTIN na koncie). Obrazy i opis HTML
 * dokładamy w kolejnej iteracji (po potwierdzeniu draftu w panelu) — draft bez
 * nich jest poprawny, a to minimalizuje ryzyko walidacji przy pierwszym wystawieniu.
 */

const MAX_NAME = 75

/** Zwięzły opis rozmiaru wariantu z atrybutów, np. „110×300 mm, rdzeń 25 mm". */
export function variantSizeLabel(v: ProductVariant): string {
  const a = v.attributes || {}
  const w = (a['Szerokość'] || '').replace(/\s*mm$/, '').trim()
  const len = (a['Długość'] || '').trim()
  const core = (a['Rdzeń'] || '').trim()
  const dim = w && len ? `${w}×${len}` : v.name
  return core ? `${dim}, rdzeń ${core}` : dim
}

/** Tytuł oferty ≤ 75 znaków: „<nazwa produktu> <rozmiar>". */
export function buildOfferName(product: Product, variant: ProductVariant): string {
  const base = `${product.name} ${variantSizeLabel(variant)}`.replace(/\s+/g, ' ').trim()
  if (base.length <= MAX_NAME) return base
  // przytnij na granicy słowa
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
  }>
  parameters: Array<{ id: string; valuesIds?: string[]; values?: string[] }>
  sellingMode: { price: { amount: string; currency: 'PLN' } }
  stock: { available: number }
  description: { sections: Array<{ items: Array<{ type: 'TEXT'; content: string }> }> }
  publication: { status: 'INACTIVE' }
}

/** Escape do treści HTML opisu (dozwolone tagi Allegro: h1,h2,p,ul,ol,li,b). */
function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/** Opis oferty w formacie Allegro (sekcje z elementami TEXT). */
export function buildRibbonDescription(
  product: Product,
  variant: ProductVariant,
): AllegroOfferPayload['description'] {
  const a = variant.attributes || {}
  const specRows = [
    ['Part Number', variant.partNumber],
    ['Szerokość', a['Szerokość']],
    ['Długość', a['Długość']],
    ['Rdzeń', a['Rdzeń']],
    ['Typ taśmy', product.specifications?.find((s) => s.name === 'Typ taśmy')?.value],
    ['Producent', 'Zebra Technologies'],
  ].filter(([, v]) => v)
  const specHtml = `<ul>${specRows.map(([k, v]) => `<li><b>${esc(String(k))}:</b> ${esc(String(v))}</li>`).join('')}</ul>`

  const apps = (product.applications || []).slice(0, 6)
  const appsHtml = apps.length ? `<h2>Zastosowania</h2><ul>${apps.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''

  const intro = esc(product.shortDescription || product.description || product.name)

  return {
    sections: [
      { items: [{ type: 'TEXT', content: `<h2>${esc(product.name)}</h2><p>${intro}</p>` }] },
      { items: [{ type: 'TEXT', content: `<h2>Specyfikacja</h2>${specHtml}` }] },
      ...(appsHtml ? [{ items: [{ type: 'TEXT' as const, content: appsHtml }] }] : []),
    ],
  }
}

export interface BuildOfferInput {
  series: RibbonSeries
  product: Product
  variant: ProductVariant
  price: AllegroPrice
  /** Ilość sztuk do wystawienia (dostępność magazynowa). Domyślnie 10. */
  available?: number
  /** URL-e obrazów po stronie Allegro (z uploadImageByUrl). Min. 1 wymagany. */
  images?: string[]
}

/** Buduje payload draftu oferty dla taśmy termotransferowej (kategoria 17254). */
export function buildRibbonOfferPayload({
  series,
  product,
  variant,
  price,
  available = 10,
  images = [],
}: BuildOfferInput): AllegroOfferPayload {
  const name = buildOfferName(product, variant)
  return {
    name,
    productSet: [
      {
        product: {
          name,
          category: { id: ALLEGRO_CATEGORY.ribbon },
          parameters: [
            { id: ALLEGRO_PARAM.producent, valuesIds: [ALLEGRO_DICT.producentZebra] },
            { id: ALLEGRO_PARAM.kodProducenta, values: [variant.partNumber] },
          ],
          ...(images.length ? { images } : {}),
        },
        quantity: { value: 1 },
      },
    ],
    parameters: [{ id: ALLEGRO_PARAM.stan, valuesIds: [ALLEGRO_DICT.stanNowy] }],
    sellingMode: { price: { amount: price.gross.toFixed(2), currency: 'PLN' } },
    stock: { available },
    description: buildRibbonDescription(product, variant),
    publication: { status: 'INACTIVE' },
  }
}
