// Spec „Part Number” bywa listą wariantów albo numerem z dopiskiem, np.
// „MS633-DUBU00-SG (MS633), MS633-OUBU00-SG (MS633 LR)”. Do synchronizacji
// stanów potrzebne są pojedyncze numery — taka wartość wysłana w całości do
// dystrybutora nigdy nie dostaje ceny, a w BlueStar psuje całą paczkę zapytań.
const MAKS_DLUGOSC_PN = 50

/**
 * Rozbija wartość pola „Part Number” na pojedyncze numery katalogowe.
 * Dzieli po przecinku oraz po ukośniku i kropce środkowej otoczonych spacjami;
 * ukośnik bez spacji należy do numeru (MC300YMCKO/S). Spacja w środku też (Prima 831).
 */
export function rozbijNumeryKatalogowe(value: string | undefined | null): string[] {
  if (!value) return []
  const numery = value
    .replace(/\s*\([^)]*\)/g, '')
    .split(/\s*,\s*|\s+[/·]\s+/)
    .map(pn => pn.trim())
    .filter(pn => pn.length > 0 && pn.length <= MAKS_DLUGOSC_PN && !pn.includes('"'))
  return Array.from(new Set(numery))
}
