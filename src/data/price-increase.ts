import type { Product } from './products'

/**
 * Podwyżka cen cennikowych Zebry od 5 października 2026 (oficjalne pismo
 * „Zebra list price change due to cost increases”). Komunikat na kartach
 * produktów ma skłonić do zamówienia przed terminem — uczciwie: realna data,
 * realny procent z tabeli producenta, konkretna kwota dla danego modelu.
 *
 * Tabela Zebry obejmuje też tablety, akcesoria (+5 %), drukarki mobilne i kart
 * (+3 %) oraz RFID, ale komunikat pokazujemy WYŁĄCZNIE na terminalach mobilnych
 * (+15 %) — decyzja z 4.09.2026.
 *
 * Komunikat znika sam 5.10.2026 — termin ma być dotrzymany co do dnia,
 * inaczej klienci przestaną wierzyć kolejnym.
 */
export const PRICE_INCREASE = {
  active: true,
  /** pierwszy dzień nowego cennika */
  effectiveDate: '2026-10-05',
  /** ostatni dzień zamówień po obecnych cenach (włącznie) */
  lastOrderDate: '2026-10-04',
  manufacturerId: 'zebra',
} as const

export interface PriceIncreaseInfo {
  percent: number
  /** nagłówek boksu — o tym konkretnym produkcie, nie o grupie */
  headline: string
}

/** Czy komunikat ma się jeszcze wyświetlać (do końca lastOrderDate czasu polskiego). */
export function priceIncreaseActive(now = new Date()): boolean {
  if (!PRICE_INCREASE.active) return false
  return now <= new Date(`${PRICE_INCREASE.lastOrderDate}T23:59:59+02:00`)
}

/** Pełne dni do końca zamówień po obecnych cenach (0 w ostatnim dniu). */
export function priceIncreaseDaysLeft(now = new Date()): number {
  const end = new Date(`${PRICE_INCREASE.lastOrderDate}T23:59:59+02:00`)
  return Math.max(0, Math.floor((end.getTime() - now.getTime()) / 86_400_000))
}

export function priceIncreaseFor(product: Pick<Product, 'manufacturerId' | 'categoryId' | 'subcategoryIds' | 'slug'>): PriceIncreaseInfo | null {
  if (product.manufacturerId !== PRICE_INCREASE.manufacturerId) return null
  // Decyzja: komunikat wyłącznie na terminalach mobilnych (+15 %). Pozostałe grupy
  // z tabeli Zebry (tablety, akcesoria, drukarki mobilne i kart, RFID) bez komunikatu.
  if (product.categoryId === 'terminale-mobilne') return { percent: 15, headline: 'Ten terminal będzie droższy o 15%' }
  return null
}
