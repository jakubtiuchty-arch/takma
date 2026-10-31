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

/** Odmiana słowa „karton” po liczbie: 1 karton, 2–4 kartony (bez 12–14), pozostałe kartonów. */
export function kartonyOdmiana(n: number): 'karton' | 'kartony' | 'kartonów' {
  if (n === 1) return 'karton'
  const jednosci = n % 10
  const dziesiatki = n % 100
  if (jednosci >= 2 && jednosci <= 4 && !(dziesiatki >= 12 && dziesiatki <= 14)) return 'kartony'
  return 'kartonów'
}

/** „6 kartonów” — stan taśm SATO (dystrybutor podaje go w kartonach). */
export function liczbaKartonow(n: number): string {
  return `${n} ${kartonyOdmiana(n)}`
}
