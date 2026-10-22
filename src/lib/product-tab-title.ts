import { products, type Product } from '@/data/products'
import { getManufacturerById } from '@/data/manufacturers'
import { rfidPrinterCategory } from '@/data/rfid-printer-category'

/**
 * Tytuł karty przeglądarki dla strony produktu: „Producent Model” bez
 * specyfikacji (decyzja właściciela, 22.10.2026 — specyfikacja idzie do meta
 * description). „| TAKMA” dokłada szablon z `src/app/layout.tsx`.
 *
 * Na razie obejmuje tylko produkty z sześciu listingów (`isShortTabTitleScope`);
 * reszta katalogu zostaje przy tytułach z `seoTitle`.
 *
 * Tytuły w zakresie liczymy raz, bo krótka forma musi być unikalna: dwa
 * produkty o tym samym modelu w nazwie dostałyby ten sam tytuł. Przy kolizji
 * krótki tytuł zostaje u urządzenia, a akcesoria i materiały przechodzą na
 * „Producent PN” albo na swoją nazwę.
 */

const RFID_PRINTER_IDS = new Set(rfidPrinterCategory.productIds)

/**
 * Produkty z listingów /terminale-sunmi, /terminale-cipherlab, /drukarki-pos, /komputery-pos, /ekrany-kds, /kioski-samoobslugowe,
 * /drukarki-rfid, /skanery-datalogic i /skanery-kodow-kreskowych/ladowe.
 */
export function isShortTabTitleScope(product: Product): boolean {
  const { manufacturerId, categoryId, subcategoryIds } = product
  return (
    (manufacturerId === 'sunmi' && categoryId === 'terminale-mobilne') ||
    (manufacturerId === 'cipherlab' && categoryId === 'terminale-mobilne') ||
    categoryId === 'drukarki-pos' ||
    categoryId === 'komputery-pos' ||
    categoryId === 'ekrany-kds' ||
    categoryId === 'kioski-samoobslugowe' ||
    RFID_PRINTER_IDS.has(product.id) ||
    RFID_PRINTER_IDS.has(product.slug) ||
    !!subcategoryIds?.includes('drukarki-rfid') ||
    (manufacturerId === 'datalogic' && categoryId === 'skanery-kodow-kreskowych') ||
    !!subcategoryIds?.includes('skanery-ladowe')
  )
}

const SEPARATORY = [' — ', ' – ', ', ', ' (', ': ']

/** Kategorie, które przy kolizji ustępują krótkiego tytułu urządzeniu. */
const KATEGORIE_PODRZEDNE = new Set(['akcesoria', 'materialy-eksploatacyjne'])

function przytnij(tekst: string): string {
  let koniec = tekst.length
  for (const sep of SEPARATORY) {
    const i = tekst.indexOf(sep)
    if (i !== -1 && i < koniec) koniec = i
  }
  return tekst.slice(0, koniec).trim()
}

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Pozycja słowa (całego, bez rozróżniania wielkości liter) w tekście albo -1. */
function pozycjaSlowa(tekst: string, slowo: string): number {
  const m = new RegExp(`(^|[^\\p{L}\\p{N}])${escapeRegExp(slowo)}(?![\\p{L}\\p{N}])`, 'iu').exec(tekst)
  return m ? m.index + m[1].length : -1
}

/**
 * Marka w postaci, w jakiej występuje w nazwie: pełna nazwa producenta, a dla
 * marek wielowyrazowych („Magicard by Brady”, „M3 Mobile”) także samo pierwsze
 * słowo — nazwy produktów zwykle zawierają tylko je („Magicard Prima 8”).
 */
function markaWNazwie(nazwa: string, producent: string): { marka: string; i: number } | null {
  const pelna = pozycjaSlowa(nazwa, producent)
  if (pelna !== -1) return { marka: producent, i: pelna }
  const pierwsze = producent.split(' ')[0]
  if (pierwsze !== producent) {
    const i = pozycjaSlowa(nazwa, pierwsze)
    if (i !== -1) return { marka: pierwsze, i }
  }
  return null
}

/** Kody wewnętrzne („ZESTAW-…”, „Prima 831”) nie są numerami katalogowymi producenta. */
const pnWewnetrzny = (pn: string) => pn.startsWith('ZESTAW-') || pn.includes(' ')

function partNumber(product: Product): string | undefined {
  const pn = product.specifications.find(spec => spec.name === 'Part Number')?.value?.trim()
    || (product.variants?.length === 1 ? product.variants[0].partNumber : undefined)
  return pn && !pnWewnetrzny(pn) ? pn : undefined
}

const jestZestawem = (product: Product) => product.name.startsWith('Zestaw')

/** Długi tytuł materiału bez części „do <urządzenia>” („Epson SJIC36P(MK) czarny matowy”). */
function bezDo(product: Product, tytul: string): string {
  if (product.categoryId !== 'materialy-eksploatacyjne' || tytul.length <= 40) return tytul
  const i = tytul.indexOf(' do ')
  return i > 0 ? tytul.slice(0, i).trim() : tytul
}

/** Producent spoza `manufacturers.ts` (np. dostawca kart acss) nie trafia do tytułu. */
function bezMarki(product: Product): string {
  return przytnij(product.name.replace(/dualna |zbliżeniowa | ISO\b| 13,56 MHz/g, ''))
}

function zNazwy(product: Product, producent: string): string {
  const nazwa = product.name
  const trafienie = markaWNazwie(nazwa, producent)
  if (!trafienie) return `${producent} ${przytnij(nazwa)}`
  if (trafienie.i === 0) return przytnij(nazwa)
  return przytnij(trafienie.marka + nazwa.slice(trafienie.i + trafienie.marka.length))
}

/** „Producent PN”, z marką skróconą tak jak w nazwie produktu. */
function zPn(product: Product, producent: string, pn: string): string {
  return `${markaWNazwie(product.name, producent)?.marka ?? producent} ${pn}`
}

/** Tytuł bez skracania materiałów na „ do ” — do niego wracamy, gdy skrócony koliduje. */
function kandydatPelny(product: Product): string {
  if (jestZestawem(product)) return przytnij(product.name)
  const producent = getManufacturerById(product.manufacturerId)?.name
  if (!producent) return bezMarki(product)
  const pn = partNumber(product)
  if (pn && product.categoryId === 'akcesoria') return zPn(product, producent, pn)
  if (pn && product.categoryId === 'materialy-eksploatacyjne' && !markaWNazwie(product.name, producent)) {
    return zPn(product, producent, pn)
  }
  return zNazwy(product, producent)
}

function kandydat(product: Product): string {
  return jestZestawem(product) ? kandydatPelny(product) : bezDo(product, kandydatPelny(product))
}

/** Tytuł dla produktu, który przy kolizji oddał krótki tytuł innemu. */
function zastepczy(product: Product): string {
  if (jestZestawem(product)) return product.name
  const producent = getManufacturerById(product.manufacturerId)?.name
  const pn = partNumber(product)
  return producent && pn ? zPn(product, producent, pn) : przytnij(product.name)
}

/** Kto zachowuje tytuł w grupie kolizji; null, gdy w grupie nie ma urządzenia. */
function glowny(grupa: Product[], tytul: string): Product | null {
  const urzadzenia = grupa.filter(p => !KATEGORIE_PODRZEDNE.has(p.categoryId) && !jestZestawem(p))
  if (!urzadzenia.length) return null
  const zgodne = urzadzenia.filter(p => przytnij(p.name) === tytul)
  const pula = zgodne.length ? zgodne : urzadzenia
  return pula.reduce((a, b) => (b.name.length < a.name.length ? b : a))
}

const klucz = (tytul: string) => tytul.toLowerCase()

function grupyKolizji(tytuly: Map<string, string>, poId: Map<string, Product>): Product[][] {
  const grupy = new Map<string, Product[]>()
  tytuly.forEach((t, id) => {
    const g = grupy.get(klucz(t)) ?? []
    g.push(poId.get(id)!)
    grupy.set(klucz(t), g)
  })
  return Array.from(grupy.values()).filter(g => g.length > 1)
}

let _tytuly: Map<string, string> | null = null

function tytulyKatalogu(): Map<string, string> {
  if (_tytuly) return _tytuly
  const zakres = products.filter(isShortTabTitleScope)
  const poId = new Map(zakres.map(p => [p.id, p]))
  const tytuly = new Map(zakres.map(p => [p.id, kandydat(p)]))

  // Materiał skrócony na „ do ”, który przez to z czymś koliduje, wraca do pełnej formy.
  for (const grupa of grupyKolizji(tytuly, poId)) {
    for (const p of grupa) tytuly.set(p.id, kandydatPelny(p))
  }

  const zmienione = new Set<string>()
  for (const grupa of grupyKolizji(tytuly, poId)) {
    const wygrany = glowny(grupa, tytuly.get(grupa[0].id)!)
    for (const p of grupa) {
      if (p === wygrany) continue
      tytuly.set(p.id, zastepczy(p))
      zmienione.add(p.id)
    }
  }

  // Tytuł zastępczy może trafić na cudzy tytuł; wtedy pełną nazwę dostaje ten,
  // kto już ustąpił, a gdy kolidują same tytuły pierwotne — wszyscy w grupie.
  for (const grupa of grupyKolizji(tytuly, poId)) {
    const ustepujacy = grupa.filter(p => zmienione.has(p.id))
    for (const p of ustepujacy.length ? ustepujacy : grupa) tytuly.set(p.id, p.name)
  }

  _tytuly = tytuly
  return tytuly
}

export function getProductTabTitle(product: Product): string {
  return tytulyKatalogu().get(product.id) ?? kandydat(product)
}

/** Tytuł strony wariantu: tytuł produktu i PN wariantu (bez dublowania, gdy PN już jest w tytule). */
export function getVariantTabTitle(product: Product, variantPartNumber?: string): string {
  const tytul = getProductTabTitle(product)
  return variantPartNumber && !tytul.includes(variantPartNumber) ? `${tytul} ${variantPartNumber}` : tytul
}
