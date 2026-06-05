/**
 * Mapowanie katalogu TAKMA → kategorie i parametry Allegro.
 *
 * ID kategorii i parametrów ustalone z GET /sale/categories i
 * /sale/categories/{id}/parameters (środowisko produkcyjne; w sandbox te same).
 *
 * Parametry produktowe (Producent, Kod producenta, EAN) idą do
 * productSet[0].product.parameters. Parametry ofertowe (Stan) — do offer.parameters.
 * Tej zasady pilnuje Allegro: „Producent should not be specified in section offer".
 */

export type AllegroProductKind = 'ribbon' | 'label'

/** Kategorie liściaste (tylko w takich można wystawiać oferty). */
export const ALLEGRO_CATEGORY = {
  /** Folie, termotransfery — taśmy TT */
  ribbon: '17254',
  /** Etykiety samoprzylepne */
  label: '64536',
} as const

/** ID parametrów Allegro (wspólne dla obu kategorii, chyba że zaznaczono). */
export const ALLEGRO_PARAM = {
  producent: '248914', // dict (productSet.product)
  kodProducenta: '224017', // text (productSet.product)
  ean: '225693', // text (productSet.product) — POMIJAMY (zwolnienie z GTIN)
  stan: '11323', // dict (offer.parameters)
  /** Liczba etykiet na rolce — wymagany w kategorii etykiet (64536). */
  liczbaEtykiet: '223697', // numeric (offer.parameters)
} as const

/** Wartości słownikowe (valuesIds). */
export const ALLEGRO_DICT = {
  /** Producent = Zebra */
  producentZebra: '248914_1989611',
  /** Stan = Nowy */
  stanNowy: '11323_1',
} as const

export function categoryFor(kind: AllegroProductKind): string {
  return ALLEGRO_CATEGORY[kind]
}
