/**
 * Urządzenia używane — jedna sztuka na wiersz.
 *
 * Ten plik trzymamy bez importu bazy: korzysta z niego koszyk, czyli komponent
 * kliencki. Wszystko, co dotyka Prismy, siedzi w used-devices-db.ts.
 *
 * Katalog nowego sprzętu opiera się na products.ts i żywych stanach
 * dystrybutorów: ten sam numer katalogowy można sprzedać wielokrotnie. Tutaj
 * jest odwrotnie — każdy egzemplarz istnieje raz, ma swój numer seryjny i po
 * sprzedaży musi zniknąć z oferty. Stąd status na wierszu i weryfikacja ceny
 * przy składaniu zamówienia; koszyk mieszka w przeglądarce, więc ani cena, ani
 * dostępność nie mogą pochodzić stamtąd.
 */

/**
 * Czy sekcja jest widoczna publicznie.
 *
 * Wyłączona do czasu dopracowania: /uzywane i karty egzemplarzy zwracają wtedy
 * 404, zakładka znika z menu, a sitemap ich nie wypisuje. Panel /admin/uzywane
 * działa niezależnie, a zalogowany administrator widzi strony normalnie — można
 * spokojnie przygotować całą ofertę przed premierą.
 *
 * Włączenie: zmiana na `true` (i przywrócenie `revalidate` w obu stronach,
 * bo podgląd dla admina wymusił render dynamiczny).
 */
export const UZYWANE_WIDOCZNE = false

/** Prefiks id pozycji koszyka — po nim poznajemy używkę wśród zwykłych produktów. */
export const USED_PREFIX = 'uzywane__'

export function usedSlugFromProductId(productId: string): string | null {
  return productId.startsWith(USED_PREFIX) ? productId.slice(USED_PREFIX.length) : null
}

export function usedProductId(slug: string): string {
  return `${USED_PREFIX}${slug}`
}

export const STANY = {
  A: { etykieta: 'Stan A — jak nowe', opis: 'Bez śladów użytkowania, sprzęt z ekspozycji lub zwrotu.' },
  B: { etykieta: 'Stan B — ślady używania', opis: 'Drobne rysy obudowy, pełna sprawność techniczna.' },
  C: { etykieta: 'Stan C — widoczne zużycie', opis: 'Wyraźne ślady pracy w terenie, sprawność potwierdzona testami.' },
} as const

export type StanKlasa = keyof typeof STANY

export function stanOpis(grade: string): { etykieta: string; opis: string } {
  return STANY[(grade as StanKlasa)] ?? STANY.B
}

export const KATEGORIE = {
  terminal: 'Terminale',
  drukarka: 'Drukarki etykiet',
  skaner: 'Skanery',
  tablet: 'Tablety',
  inne: 'Pozostałe',
} as const

/** Slug z nazwy — „Zebra TC57 (2021)" → „zebra-tc57-2021". Unikat pilnuje baza. */
export function slugFromName(name: string): string {
  const znaki: Record<string, string> = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' }
  return name
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, z => znaki[z] ?? z)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}
