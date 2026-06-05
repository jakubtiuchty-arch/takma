/**
 * Mapowanie katalogu TAKMA → kategorie i parametry Allegro.
 *
 * ID kategorii i parametrów potwierdzone z GET /sale/categories/{id}/parameters
 * (środowisko produkcyjne).
 *
 * Taśmy i etykiety Zebry siedzą w siostrzanych kategoriach pod „Drukarki › Papiery, folie",
 * które mają IDENTYCZNY, minimalny zestaw parametrów wymaganych:
 *   Stan (11323) + Kod producenta (224017) + Producent (248914) + EAN (225693).
 * EAN pomijamy (zwolnienie z GTIN na koncie) — działa, bo konto ma wyłączenie.
 *
 * UWAGA: NIE używać kategorii 64536 „Etykiety samoprzylepne" (pod Biuro/Pakowanie) —
 * wymaga „Liczby etykiet na rolce", Materiału, Rodzaju (danych, których nie mamy).
 * Właściwa dla etykiet Zebry to 17255 „Etykiety, naklejki" (pod Drukarki).
 *
 * Parametry produktowe (Producent, Kod producenta, EAN) idą do productSet[0].product.parameters.
 * Parametry ofertowe (Stan) — do offer.parameters.
 */

export type AllegroProductKind = 'ribbon' | 'label'

/** Kategorie liściaste (tylko w takich można wystawiać oferty). */
export const ALLEGRO_CATEGORY = {
  /** Folie, termotransfery — taśmy TT (Drukarki › Papiery, folie) */
  ribbon: '17254',
  /** Etykiety, naklejki — etykiety DT i TT (Drukarki › Papiery, folie) */
  label: '17255',
} as const

/** ID parametrów Allegro (wspólne dla obu kategorii). */
export const ALLEGRO_PARAM = {
  producent: '248914', // dict (productSet.product)
  kodProducenta: '224017', // string (productSet.product)
  ean: '225693', // string (productSet.product) — POMIJAMY (zwolnienie z GTIN)
  stan: '11323', // dict (offer.parameters)
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
