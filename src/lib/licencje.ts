import type { Product } from '@/data/products'

/**
 * Licencje oprogramowania (BarTender, Loftware, CardStudio) i pozycje „na zapytanie”.
 *
 * Moduł bez importu katalogu: korzystają z niego komponenty klienta (karta, kafel, koszyk)
 * i serwer (lib/licencje-katalog nakłada te same reguły na wiersze stanu z dystrybutorów).
 *
 * Decyzja właściciela z 25.10.2026: licencja elektroniczna z ceną u dystrybutora jest
 * dostępna, a kod przychodzi e-mailem. Stan magazynowy nie ma tu znaczenia — Jarltech
 * podaje wirtualne 9999 szt. („wysyłka 2–3 dni”), BlueStar 0 szt. („Niedostępny”),
 * a obie licencje da się zamówić tak samo.
 */

export const LICENCJA_DOSTAWA = 'Licencja elektroniczna — kod e-mailem'
export const NA_ZAPYTANIE_DOSTAWA = 'Cena na zapytanie'

/** Pola wiersza stanu, które zmieniają reguły licencji (StockInfo, wiersz StockCache). */
interface WierszStanu {
  partNumber: string
  found?: boolean
  price?: number | null
  priceBrutto?: number | null
  cartonPrice?: number | null
  servicePlanPrice?: number | null
  availability?: string | null
  deliveryText?: string | null
  stockPL?: number
  stockDE?: number
  inDelivery?: number
  totalStock?: number
  incomingDate?: string
  electronicLicense?: boolean
}

/**
 * Nakłada na wiersz stanu reguły licencji (mutuje i zwraca ten sam obiekt, jak applyStockOverrides).
 *
 * - `naZapytanie` (quoteOnly karty albo wariantu): bez ceny i bez stanu, nawet gdy dystrybutor
 *   podaje cenę — edycje Enterprise wyceniamy indywidualnie.
 * - `licencja` (karta z `licenseDelivery`): przy cenie > 0 wiersz jest dostępny, a tekst dostawy
 *   mówi o kodzie e-mailem. Stany zerujemy, żeby nigdzie nie pokazać „EU: 9999 szt.”
 *   ani „W drodze”; dostępność niesie flaga `electronicLicense`. Bez ceny — bez zmian.
 */
export function zastosujRegulyLicencji<T extends WierszStanu>(
  row: T,
  rodzaj: { licencja?: boolean; naZapytanie?: boolean },
): T {
  if (rodzaj.naZapytanie) {
    row.price = undefined
    row.priceBrutto = undefined
    row.cartonPrice = undefined
    row.servicePlanPrice = undefined
    zerujStany(row)
    row.availability = 'unavailable'
    row.deliveryText = NA_ZAPYTANIE_DOSTAWA
    row.electronicLicense = undefined
    return row
  }
  if (rodzaj.licencja && row.found && row.price != null && row.price > 0) {
    zerujStany(row)
    row.availability = 'available'
    row.deliveryText = LICENCJA_DOSTAWA
    row.electronicLicense = true
  }
  return row
}

function zerujStany(row: WierszStanu) {
  row.stockPL = 0
  row.stockDE = 0
  row.inDelivery = 0
  row.totalStock = 0
  row.incomingDate = undefined
}

/**
 * Czy pozycję można kupić od ręki: towar na magazynie (PL lub EU) albo licencja e-mailem.
 * Zastępuje warunek `stockPL + stockDE > 0` w komponentach — bez tego licencja z zerowym
 * stanem wyglądałaby na niedostępną.
 */
export function jestNaStanie(stock: { stockPL: number; stockDE: number; electronicLicense?: boolean } | undefined | null): boolean {
  if (!stock) return false
  return !!stock.electronicLicense || stock.stockPL + stock.stockDE > 0
}

export function czyLicencjaElektroniczna(product: Pick<Product, 'licenseDelivery'> | undefined | null): boolean {
  return product?.licenseDelivery === 'email'
}

/** Karta albo wybrany wariant tylko „Zapytaj o cenę”: bez ceny i koszyka. */
export function czyNaZapytanie(
  product: Pick<Product, 'quoteOnly' | 'variants'> | undefined | null,
  partNumber?: string | null,
): boolean {
  if (!product) return false
  if (product.quoteOnly) return true
  if (!partNumber) return false
  const pn = partNumber.toUpperCase()
  return !!product.variants?.some(v => v.quoteOnly && v.partNumber.toUpperCase() === pn)
}

/**
 * Wariant-dodatek do licencji głównej (np. „+1 drukarka” albo opcja planu, jak baza w chmurze):
 * nie działa samodzielnie, więc nie może być „ceną od” karty licencji. Rozpoznajemy go po nazwie
 * lub atrybucie wariantu; opcje planu mają atrybut „Licencja: Opcja”.
 */
export function czyDodatekLicencji(variant: { name?: string; attributes?: Record<string, string> }): boolean {
  const teksty = [variant.name ?? '', ...Object.values(variant.attributes ?? {})]
  return teksty.some(t => /(^|\s)\+\s*\d+\s*drukar|dodatkow\S*\s+drukar|dokupieni|^opcja$/i.test(t.trim()))
}

// ── Dane licencjobiorcy w zamówieniu ─────────────────────────────

/** Firma i e-mail użytkownika licencji — na ten adres producent kieruje kod licencji. */
export interface Licencjobiorca {
  firma: string
  email: string
}

/**
 * Dane licencjobiorcy zapisujemy w uwagach zamówienia (Order.customerNotes), bez migracji
 * bazy. Uwagi trafiają do panelu zamówień, wydruku, panelu klienta i wszystkich maili
 * zamówienia, więc dane widać wszędzie, gdzie obsługuje się zamówienie. Stały początek
 * wiersza pozwala odczytać je z powrotem (osobny boks w panelu admina i w mailach).
 */
const POCZATEK_WIERSZA = 'Dane licencjobiorcy — firma: '
const SEPARATOR_EMAIL = '; e-mail: '

const WZOR_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function poprawnyLicencjobiorca(dane: Partial<Licencjobiorca> | undefined | null): dane is Licencjobiorca {
  return !!dane && typeof dane.firma === 'string' && dane.firma.trim().length > 0
    && typeof dane.email === 'string' && WZOR_EMAIL.test(dane.email.trim())
}

export function dopiszLicencjobiorce(uwagi: string | undefined | null, dane: Licencjobiorca): string {
  // Średnik przed „e-mail:” rozdziela pola; w nazwie firmy zamieniamy go na przecinek.
  const firma = dane.firma.trim().replace(/\s+/g, ' ').replace(/;/g, ',')
  const wiersz = `${POCZATEK_WIERSZA}${firma}${SEPARATOR_EMAIL}${dane.email.trim()}`
  const reszta = (uwagi ?? '').trim()
  return reszta ? `${wiersz}\n\n${reszta}` : wiersz
}

export function odczytajLicencjobiorce(uwagi: string | undefined | null): { licencjobiorca?: Licencjobiorca; uwagi: string } {
  const tekst = uwagi ?? ''
  if (!tekst.startsWith(POCZATEK_WIERSZA)) return { uwagi: tekst }
  const koniecWiersza = tekst.indexOf('\n')
  const wiersz = koniecWiersza === -1 ? tekst : tekst.slice(0, koniecWiersza)
  const podzial = wiersz.lastIndexOf(SEPARATOR_EMAIL)
  if (podzial === -1) return { uwagi: tekst }
  return {
    licencjobiorca: {
      firma: wiersz.slice(POCZATEK_WIERSZA.length, podzial).trim(),
      email: wiersz.slice(podzial + SEPARATOR_EMAIL.length).trim(),
    },
    uwagi: koniecWiersza === -1 ? '' : tekst.slice(koniecWiersza + 1).trim(),
  }
}
