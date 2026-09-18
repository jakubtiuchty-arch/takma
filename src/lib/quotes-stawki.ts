/**
 * Stawki VAT ofert — bez zależności serwerowych, bo korzysta z nich także
 * kreator w przeglądarce (import z `lib/quotes` wciągnąłby Prismę do bundla).
 *
 * Domyślnie 23 %. Zero wystawiamy klientom zwolnionym z VAT-u; stawki nie
 * trzymamy w bazie osobno, bo wynika z zapisanych kwot.
 */

export const STAWKI_VAT = [23, 0] as const
export const VAT_DOMYSLNY = 23

/** Stawka zapisanej oferty odczytana z kwot. Zerowy VAT = zwolnienie. */
export function stawkaVat(subtotalNetto: number, vatAmount: number): number {
  if (vatAmount === 0) return 0
  if (subtotalNetto <= 0) return VAT_DOMYSLNY
  return Math.round((vatAmount / subtotalNetto) * 100)
}
