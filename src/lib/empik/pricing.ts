/**
 * Cennik ofert Empik dla TAKMA.
 *
 * Reguła (ustalona 2026-06-11): cena na Empiku = cena ze sklepu + 8%
 * (prowizja Empika niższa niż Allegro, więc narzut mniejszy niż tamtejsze 12%).
 * Źródłem ceny sklepu jest ZAWSZE `StockCache.price` (żywa cena netto z marżą) —
 * NIGDY statyczny `priceFrom` z danych produktu. Empik wyświetla ceny BRUTTO.
 */

export const EMPIK_MARKUP = 1.08
export const VAT_RATE = 1.23

function round2(n: number): number {
  return Math.round(n * 100) / 100
}

/** Cena brutto na Empik z ceny sklepu netto (StockCache.price). */
export function empikGrossFromShopNet(shopNet: number): number {
  return round2(round2(shopNet * EMPIK_MARKUP) * VAT_RATE)
}
