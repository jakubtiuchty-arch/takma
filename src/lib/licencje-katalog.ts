import { products, type Product } from '@/data/products'
import {
  czyNaZapytanie,
  dopiszLicencjobiorce,
  poprawnyLicencjobiorca,
  zastosujRegulyLicencji,
  type Licencjobiorca,
} from '@/lib/licencje'

/**
 * Numery katalogowe licencji i pozycji „na zapytanie” wyliczone z katalogu — tylko serwer
 * (import products.ts). Trasy, które już czytają katalog (unified-stock, feedy, checkout),
 * dostają reguły bez osobnej listy PN do utrzymywania: nowa karta z `licenseDelivery`
 * albo `quoteOnly` działa od razu.
 */

function numeryKarty(product: Product): string[] {
  if (product.variants?.length) return product.variants.map(v => v.partNumber)
  const pn = product.specifications.find(s => s.name === 'Part Number')?.value
  return pn ? [pn] : []
}

function zbudujZbiory() {
  const licencje = new Set<string>()
  const naZapytanie = new Set<string>()
  // PN sprzedawany normalnie na innej karcie (np. akcesorium przypięte do karty licencji albo
  // karty na zapytanie) zachowuje cenę i stan — reguła dotyczy konkretnej karty lub wariantu.
  const wSprzedazy = new Set<string>()
  const towar = new Set<string>()
  for (const product of products) {
    if (product.comingSoon) continue
    for (const pn of numeryKarty(product)) {
      if (product.licenseDelivery === 'email') licencje.add(pn.toUpperCase())
      else towar.add(pn.toUpperCase())
    }
    if (product.variants?.length) {
      for (const v of product.variants) {
        const pn = v.partNumber.toUpperCase()
        if (product.quoteOnly || v.quoteOnly) naZapytanie.add(pn)
        else wSprzedazy.add(pn)
      }
    } else {
      for (const pn of numeryKarty(product)) {
        if (product.quoteOnly) naZapytanie.add(pn.toUpperCase())
        else wSprzedazy.add(pn.toUpperCase())
      }
    }
  }
  for (const pn of Array.from(naZapytanie)) if (wSprzedazy.has(pn)) naZapytanie.delete(pn)
  for (const pn of Array.from(licencje)) if (towar.has(pn)) licencje.delete(pn)
  return { licencje, naZapytanie }
}

const { licencje: LICENCJE_PN, naZapytanie: NA_ZAPYTANIE_PN } = zbudujZbiory()

export function czyPnLicencji(partNumber: string): boolean {
  return LICENCJE_PN.has(partNumber.toUpperCase())
}

export function czyPnNaZapytanie(partNumber: string): boolean {
  return NA_ZAPYTANIE_PN.has(partNumber.toUpperCase())
}

/** Reguły licencji dla wiersza stanu według PN (odpowiedź /api/stock, render, feedy). */
export function nalozRegulyLicencji<T extends Parameters<typeof zastosujRegulyLicencji>[0]>(row: T): T {
  return zastosujRegulyLicencji(row, {
    licencja: czyPnLicencji(row.partNumber),
    naZapytanie: czyPnNaZapytanie(row.partNumber),
  })
}

/**
 * Strażnik zamówienia po stronie serwera (koszyk w localStorage bywa nieaktualny albo zmieniony):
 * - pozycja na zapytanie bez numeru oferty przerywa zamówienie,
 * - licencja e-mailem wymaga firmy i e-maila użytkownika licencji; dane trafiają na początek uwag.
 * Zwraca uwagi do zapisania w zamówieniu.
 */
export function przygotujUwagiZamowienia(
  items: { productSlug: string; productName: string; partNumber: string; quoteNumber?: string }[],
  uwagi: string | undefined,
  licencjobiorca: Partial<Licencjobiorca> | undefined,
): string | undefined {
  const karta = (slug: string) => products.find(p => p.slug === slug)
  const naZapytanie = items.find(item => !item.quoteNumber && czyNaZapytanie(karta(item.productSlug), item.partNumber))
  if (naZapytanie) {
    throw new Error(`${naZapytanie.productName} — cenę tej pozycji podajemy na zapytanie. Usuń ją z koszyka i skorzystaj z przycisku „Zapytaj o cenę” na karcie produktu.`)
  }
  if (!items.some(item => karta(item.productSlug)?.licenseDelivery === 'email')) return uwagi
  if (!poprawnyLicencjobiorca(licencjobiorca)) {
    throw new Error('Podaj firmę i adres e-mail użytkownika licencji — na ten adres wyślemy kod licencji.')
  }
  return dopiszLicencjobiorce(uwagi, licencjobiorca)
}
