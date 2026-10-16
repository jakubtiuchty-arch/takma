/** Modele, których sprzedaż kończy producent. Karta produktu pokazuje boks z datami i następcą. */
export interface EndOfSaleInfo {
  /** nagłówek boksu */
  headline: string
  /** krótka nazwa modelu w zdaniach, np. „TC58” */
  model: string
  /** ISO, ostatnie zamówienia u producenta */
  lastOrderDate: string
  /** ISO, ostatnie dostawy od producenta */
  lastShipDate: string
  /** ISO, koniec serwisu i wsparcia technicznego */
  serviceEndDate: string
  successor?: { slug: string; name: string }
}

export const endOfSale: Record<string, EndOfSaleInfo> = {
  'zebra-tc58': {
    headline: 'Zebra kończy sprzedaż modelu TC58',
    model: 'TC58',
    lastOrderDate: '2026-10-29',
    lastShipDate: '2026-12-30',
    serviceEndDate: '2030-12-30',
    successor: { slug: 'zebra-tc501', name: 'Zebra TC501' },
  },
}

export function endOfSaleFor(slug: string): EndOfSaleInfo | null {
  return endOfSale[slug] ?? null
}
