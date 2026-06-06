/**
 * Walidacja GTIN/EAN przed wysłaniem do Allegro.
 *
 * Feed Ingrama zawiera placeholdery (9999999999999, 5656565656562, kody
 * współdzielone przez wiele produktów), które przechodzą sumę kontrolną, ale
 * Allegro je odrzuca („Invalid GTIN"). Filtrujemy je tu, a publisher dodatkowo
 * ponawia publikację bez EAN, gdyby coś się prześlizgnęło.
 */

/** Czy ciąg wygląda na prawdziwy GTIN-8/12/13/14 (struktura + suma kontrolna + nie-placeholder). */
export function isValidGtin(ean: string | null | undefined): ean is string {
  if (!ean || !/^\d{8,14}$/.test(ean)) return false
  if (![8, 12, 13, 14].includes(ean.length)) return false
  // placeholdery
  if (/^(\d)\1+$/.test(ean)) return false // wszystkie te same cyfry
  if (/^(\d\d)\1+\d?$/.test(ean)) return false // powtarzalna para (5656565656562)
  if (/^0+/.test(ean)) return false // wiodące zera = wewnętrzny kod, nie GTIN
  // suma kontrolna (mod 10)
  const digits = ean.split('').map(Number)
  const check = digits.pop() as number
  let sum = 0
  digits.reverse().forEach((d, i) => {
    sum += d * (i % 2 === 0 ? 3 : 1)
  })
  return (10 - (sum % 10)) % 10 === check
}
