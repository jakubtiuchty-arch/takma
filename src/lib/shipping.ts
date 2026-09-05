/**
 * Zasady kosztu dostawy — jedno źródło dla koszyka, karty produktu i regulaminu.
 * Kwoty netto w złotych.
 */
export const SHIPPING_COST_NETTO = 25
export const FREE_SHIPPING_FROM_NETTO = 1000

export function isFreeShipping(subtotalNetto: number): boolean {
  return subtotalNetto >= FREE_SHIPPING_FROM_NETTO
}

/** Koszt dostawy dla wartości zamówienia netto (0 przy pustym koszyku). */
export function shippingNettoFor(subtotalNetto: number, hasItems = true): number {
  if (!hasItems) return 0
  return isFreeShipping(subtotalNetto) ? 0 : SHIPPING_COST_NETTO
}
