import { getProductsByBrandCategory, type BrandCategory, type Product } from '@/data/products'

/**
 * Najniższa cena „od" z listy produktów. Ta sama funkcja liczy pasek „ceny netto
 * od … zł" pod H1 strony marka + kategoria i cenę w jej tytule, więc obie liczby
 * nie mogą się rozjechać.
 */
export function najnizszaCena(produkty: Pick<Product, 'priceFrom'>[]): number | null {
  const ceny = produkty.map(p => p.priceFrom).filter((c): c is number => !!c && c > 0)
  return ceny.length ? Math.min(...ceny) : null
}

/** pl-PL nie grupuje czterocyfrowych liczb, a „2269 zł" czyta się gorzej niż „2 269 zł" (twarda spacja). */
export function zlote(v: number): string {
  return String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const ZNACZNIK = '{cenaOd}'

/**
 * Bez ceny wycina fragment ze znacznikiem: od poprzedzającego „ — ", „ | " lub
 * przecinka do najbliższej kropki, przecinka, pauzy albo „|", żeby w tytule nie
 * został „{cenaOd}", „od  zł" ani wiszący separator.
 */
function podstawCene(tekst: string, cena: number | null): string {
  if (!tekst.includes(ZNACZNIK)) return tekst
  if (cena === null) {
    return tekst.replace(/(?:\s+[—|]\s+|,\s+)?[^—|,.]*\{cenaOd\}(?:[^—|,.]*[^—|,.\s])?/g, '').trim()
  }
  return tekst.split(ZNACZNIK).join(zlote(cena))
}

/**
 * Wstawia najniższą cenę produktów strony w miejsce `{cenaOd}` w `seoTitle`
 * albo `seoDescription` wpisu marka + kategoria.
 */
export function wstawCeneOd(tekst: string, bc: BrandCategory): string {
  if (!tekst.includes(ZNACZNIK)) return tekst
  return podstawCene(tekst, najnizszaCena(getProductsByBrandCategory(bc)))
}

/**
 * Wstawia cenę netto w miejsce `{cenaOd}` w `seoTitle` karty produktu. Cenę
 * podaje wywołujący, i to tylko z danych na żywo: `priceFrom` po kilku dniach
 * nie zgadza się z ceną na stronie. Bez ceny (brak danych, zapowiedź, „na
 * zapytanie") fragment ze znacznikiem znika razem z separatorem.
 */
export function wstawCeneProduktu(tekst: string, cenaNetto: number | null | undefined): string {
  return podstawCene(tekst, cenaNetto && cenaNetto > 0 ? cenaNetto : null)
}
