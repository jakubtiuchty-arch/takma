import { ribbonCartonQty } from '@/data/ribbon-carton-qty'

/**
 * Wersja dla komponentów klienckich: rozpoznaje karton taśmy SATO bez importu danych SATO
 * (te trafiłyby do bundla). Taśma SATO = producent 'sato' + PN z liczbą rolek w kartonie.
 * Zwraca liczbę rolek w kartonie albo null, gdy to nie karton SATO.
 */
export function rolekWKartonieSatoKlient(manufacturerId: string | undefined, pn: string | undefined): number | null {
  if (manufacturerId !== 'sato' || !pn) return null
  return ribbonCartonQty(pn)
}
