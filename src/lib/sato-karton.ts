import { isSatoRibbonPN } from '@/data/sato-ribbon-products'
import { ribbonCartonQty } from '@/data/ribbon-carton-qty'
import { MARZA_KARTONU } from '@/lib/ceny-pochodne'

/**
 * Taśmy SATO sprzedajemy wyłącznie w pełnych kartonach: jednostka sprzedaży = 1 karton.
 * Pole `price` (i `priceBrutto`) dla PN SATO to cena kartonu, liczona zawsze z ceny zakupu
 * za rolkę (`ingramPrice`, już po podziale przez multipleQty):
 *   round(cenaZakupuZaRolkę × marża kartonu taśm, 2) × liczba rolek w kartonie.
 *
 * Tylko serwer — importuje dane SATO. Część kliencka rozpoznaje karton SATO po
 * `manufacturerId === 'sato'` i `ribbonCartonQty(pn)` (patrz lib/sato-karton-klient).
 */

const VAT = 1.23

export function czyKartonowySato(pn: string): boolean {
  return isSatoRibbonPN(pn) && (ribbonCartonQty(pn) ?? 0) > 0
}

export function rolekWKartonieSato(pn: string): number | null {
  return isSatoRibbonPN(pn) ? ribbonCartonQty(pn) : null
}

/** Cena netto kartonu; undefined, gdy brak ceny zakupu albo liczby rolek. */
export function cenaKartonuSato(cenaZakupuZaRolke: number | null | undefined, pn: string): number | undefined {
  const rolek = rolekWKartonieSato(pn)
  if (!rolek || !cenaZakupuZaRolke || cenaZakupuZaRolke <= 0) return undefined
  const zaRolke = Math.round(cenaZakupuZaRolke * MARZA_KARTONU.tasma * 100) / 100
  return Math.round(zaRolke * rolek * 100) / 100
}

/**
 * Dzielnik ceny BlueStar (cena pakietu → cena za sztukę). Gdy BlueStar podaje multipleQty > 1 —
 * on; inaczej taśmy SATO dzielą się przez znaną liczbę rolek w kartonie (cena BlueStar dotyczy
 * kartonu), taśmy Zebry przez 12, reszta przez 1.
 */
export function dzielnikPakietuBlueStar(pn: string, multipleQty: number | undefined | null, tasmaZebry: boolean): number {
  if (multipleQty && multipleQty > 1) return multipleQty
  if (czyKartonowySato(pn)) return rolekWKartonieSato(pn) ?? 1
  return tasmaZebry ? 12 : 1
}

/**
 * Skrót jednostki ilości w mailu i pro formie. Zamówienie nie zapisuje jednostki
 * (OrderItem nie ma tej kolumny), więc karton SATO rozpoznajemy po numerze katalogowym.
 */
export function jednostkaIlosci(pn: string | null | undefined): 'kart.' | 'szt.' {
  return pn && czyKartonowySato(pn) ? 'kart.' : 'szt.'
}

export function bruttoZNetto(netto: number): number {
  return Math.round(netto * VAT * 100) / 100
}

/**
 * Nadpisuje cenę wiersza stanu (StockInfo albo wiersz StockCache) ceną kartonu SATO.
 * Wiersze zapisane przed wdrożeniem mają w `price` cenę za rolkę, więc cena zawsze
 * powstaje od nowa z `ingramPrice`; bez niego — cena na zapytanie. Inne PN bez zmian.
 */
export function przeliczCeneSato<T extends {
  partNumber: string
  price?: number | null
  priceBrutto?: number | null
  ingramPrice?: number | null
}>(wiersz: T): T {
  if (!czyKartonowySato(wiersz.partNumber)) return wiersz
  const netto = cenaKartonuSato(wiersz.ingramPrice, wiersz.partNumber)
  // Wiersz bazy ma null w pustych polach, StockInfo — undefined; brak ceny zapisujemy tak samo.
  const brak = wiersz.ingramPrice === null || wiersz.price === null ? null : undefined
  wiersz.price = (netto ?? brak) as T['price']
  wiersz.priceBrutto = (netto !== undefined ? bruttoZNetto(netto) : brak) as T['priceBrutto']
  return wiersz
}
