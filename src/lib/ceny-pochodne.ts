import type { Product } from '@/data/products'
import { ribbonCartonQty } from '@/data/ribbon-carton-qty'
import { labelCartonQty } from '@/data/label-carton-qty'

/**
 * Ceny sprzedaży liczone z ceny zakupu, a nie z ceny za sztukę.
 *
 * Do 21.10.2026 przeglądarka dostawała z publicznego /api/stock cenę zakupu
 * (`ingramPrice`) i sama liczyła z niej cenę kartonową (SmartPrice) oraz cenę
 * kontraktu serwisowego (ServicePlansBox). Konkurencja odczytywała z tego marżę
 * każdego produktu, dlatego obie ceny powstają teraz na serwerze — tym samym
 * wzorem i zaokrągleniem co wcześniej w przeglądarce.
 */

// Karton taśm i etykiet: niższa marża niż przy sprzedaży na sztuki
// (taśmy 13% vs 20%, etykiety 10% vs 15%).
export const MARZA_KARTONU = { tasma: 1.13, etykieta: 1.10 } as const
export const MARZA_PLANU_SERWISOWEGO = 1.15

export type RodzajKartonu = keyof typeof MARZA_KARTONU

type ProduktDoCen = Pick<Product, 'subcategoryIds' | 'variants' | 'specifications' | 'servicePlans'>

/** Taśma czy etykieta — z kategorii produktu, ta sama reguła co w SmartPrice. */
export function rodzajKartonuProduktu(subcategoryIds?: string[]): RodzajKartonu | null {
  if (subcategoryIds?.includes('tasmy-termotransferowe')) return 'tasma'
  if (subcategoryIds?.some(id => id === 'etykiety-termiczne' || id === 'etykiety-termotransferowe')) return 'etykieta'
  return null
}

export function cenaKartonowaZaRolke(cenaZakupu: number, rodzaj: RodzajKartonu): number {
  return Math.round(cenaZakupu * MARZA_KARTONU[rodzaj] * 100) / 100
}

export function cenaPlanuSerwisowego(cenaZakupu: number): number {
  return Math.round(cenaZakupu * MARZA_PLANU_SERWISOWEGO * 100) / 100
}

/**
 * PN → rodzaj kartonu, tylko dla numerów z kartonem większym niż 1 szt.
 * Karta pokazuje cenę kartonową wyłącznie dla nich, więc API nie podaje jej
 * dla pozostałych.
 */
export function mapaKartonow(produkty: ProduktDoCen[]): Map<string, RodzajKartonu> {
  const mapa = new Map<string, RodzajKartonu>()
  for (const p of produkty) {
    const rodzaj = rodzajKartonuProduktu(p.subcategoryIds)
    if (!rodzaj) continue
    // Warianty i PN ze specyfikacji — karta wybiera jeden z nich (SmartPriceContext).
    const numery = [
      ...(p.variants ?? []).map(v => v.partNumber),
      ...p.specifications.filter(s => s.name === 'Part Number').map(s => s.value),
    ]
    for (const pn of numery) {
      const sztukWKartonie = rodzaj === 'tasma' ? ribbonCartonQty(pn) : labelCartonQty(pn)
      if (sztukWKartonie && sztukWKartonie > 1) mapa.set(pn, rodzaj)
    }
  }
  return mapa
}

export function numeryPlanowSerwisowych(produkty: ProduktDoCen[]): Set<string> {
  return new Set(produkty.flatMap(p => p.servicePlans ?? []).map(plan => plan.partNumber))
}

interface WierszZCenaZakupu {
  partNumber: string
  found: boolean
  ingramPrice?: number
  cartonPrice?: number
  servicePlanPrice?: number
}

/** Dopisuje do wiersza stanu ceny pochodne (mutuje i zwraca ten sam obiekt). */
export function dopiszCenyPochodne<T extends WierszZCenaZakupu>(
  wiersz: T,
  kartony: Map<string, RodzajKartonu>,
  planySerwisowe: Set<string>,
): T {
  if (!wiersz.ingramPrice) return wiersz
  const rodzaj = kartony.get(wiersz.partNumber)
  if (rodzaj) wiersz.cartonPrice = cenaKartonowaZaRolke(wiersz.ingramPrice, rodzaj)
  if (wiersz.found && planySerwisowe.has(wiersz.partNumber)) {
    wiersz.servicePlanPrice = cenaPlanuSerwisowego(wiersz.ingramPrice)
  }
  return wiersz
}
