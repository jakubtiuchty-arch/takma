/**
 * Rabat ilościowy dla produktów sprzedawanych na sztuki (np. karty zbliżeniowe):
 * cena za sztukę spada po przekroczeniu progu ilości. Progi są cenami bezwzględnymi
 * (nie procentami), żeby na karcie i w koszyku pokazywać dokładnie tę samą kwotę.
 * Używane w boksie ceny (SmartPrice) i w koszyku (cartStore.updateQuantity).
 */
export interface PriceTier {
  /** Od tej ilości sztuk obowiązuje `priceNetto`. */
  minQty: number
  /** Cena netto za sztukę od progu `minQty`. */
  priceNetto: number
}

/** Cena za sztukę dla danej ilości: najwyższy osiągnięty próg albo cena bazowa. */
export function tierPrice(basePrice: number, tiers: PriceTier[] | undefined, quantity: number): number {
  if (!tiers || tiers.length === 0) return basePrice
  const reached = tiers
    .filter((t) => quantity >= t.minQty)
    .sort((a, b) => b.minQty - a.minQty)[0]
  return reached ? reached.priceNetto : basePrice
}
