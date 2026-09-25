import { products, type Product } from '@/data/products'

/**
 * Pozycja oferty powiązana z katalogiem (`productId`) — link do karty w sklepie
 * i karty katalogowe do dołączenia przy wysyłce. Pozycje wpisane ręcznie nie mają
 * `productId`, więc zostają bez linku i bez kart.
 *
 * `productId` to `id` produktu, nie `slug` — w wielu produktach te pola się różnią.
 */

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.takma.com.pl'

const byId = new Map(products.map(p => [p.id, p]))

function produkt(productId?: string | null): Product | undefined {
  return productId ? byId.get(productId) : undefined
}

/** Karta w sklepie; numer wariantu w `?pn=` zaznacza od razu wariant z oferty. */
export function linkDoSklepu(productId?: string | null, partNumber?: string | null): string | null {
  const p = produkt(productId)
  if (!p) return null
  const url = `${SITE_URL}/produkt/${p.slug}`
  const maWariant = partNumber && p.variants?.some(v => v.partNumber === partNumber)
  return maWariant ? `${url}?pn=${encodeURIComponent(partNumber)}` : url
}

export interface KartaKatalogowa {
  url: string
  /** nazwa pozycji w materiałach do pobrania, np. „Karta katalogowa ZT231 (EN)” */
  nazwa: string
  produkt: string
}

/**
 * Karty katalogowe w PDF. Część produktów ma kartę z typem `manual` albo `pdf`,
 * więc oprócz typu `datasheet` bierzemy też pozycje nazwane „Karta katalogowa”.
 */
export function kartyKatalogowe(productId?: string | null): KartaKatalogowa[] {
  const p = produkt(productId)
  if (!p?.downloads) return []
  return p.downloads
    .filter(d => /\.pdf(\?|$)/i.test(d.url) && (d.type === 'datasheet' || /karta katalogowa|spec(ification)? sheet/i.test(d.name)))
    .map(d => ({ url: d.url.startsWith('http') ? d.url : `${SITE_URL}${d.url}`, nazwa: d.name, produkt: p.name }))
}

/** Karty wszystkich pozycji oferty, bez powtórzeń (ten sam produkt w kilku pozycjach). */
export function kartyKatalogoweOferty(items: { productId?: string | null }[]): KartaKatalogowa[] {
  const widziane = new Set<string>()
  return items.flatMap(i => kartyKatalogowe(i.productId)).filter(k => !widziane.has(k.url) && widziane.add(k.url))
}

/**
 * Pobranie karty spod jej adresu (nasze leżą w `public/datasheets`, więc też pod
 * adresem serwisu). Bez odczytu z dysku: ścieżka do `public/` w kodzie serwera
 * sprawia, że Next dołącza cały katalog do funkcji — 1,38 GB przy limicie 250 MB.
 */
async function pobierzPdf(url: string, opcje: { tylkoPoczatek?: boolean } = {}): Promise<Buffer> {
  const res = await fetch(url, {
    headers: opcje.tylkoPoczatek ? { Range: 'bytes=0-1023' } : undefined,
    signal: AbortSignal.timeout(opcje.tylkoPoczatek ? 8_000 : 15_000),
  })
  if (!res.ok) throw Object.assign(new Error(`HTTP ${res.status}`), { status: res.status })
  return Buffer.from(await res.arrayBuffer())
}

const MAX_PLIK = 10 * 1024 * 1024
const MAX_RAZEM = 25 * 1024 * 1024

/**
 * Pobiera wybrane karty do załącznika. Przyjmuje tylko adresy z kart pozycji oferty,
 * żeby formularz nie mógł dołączyć dowolnego pliku z sieci. Plik, który się nie
 * pobierze, przekroczy limit albo nie jest PDF-em, wypada z załączników — oferta
 * i tak wychodzi, a nazwy pominiętych wracają do panelu.
 */
export async function pobierzKartyKatalogowe(
  wybrane: string[],
  dozwolone: KartaKatalogowa[],
): Promise<{ zalaczniki: { filename: string; content: Buffer }[]; dolaczone: string[]; pominiete: string[] }> {
  const zalaczniki: { filename: string; content: Buffer }[] = []
  const dolaczone: string[] = []
  const pominiete: string[] = []
  let razem = 0
  const nazwyPlikow = new Set<string>()

  for (const karta of dozwolone.filter(k => wybrane.includes(k.url))) {
    try {
      const buf = await pobierzPdf(karta.url)
      if (buf.subarray(0, 4).toString() !== '%PDF') throw new Error('to nie jest PDF')
      if (buf.length > MAX_PLIK || razem + buf.length > MAX_RAZEM) throw new Error('za duży plik')
      let filename = decodeURIComponent(new URL(karta.url).pathname.split('/').pop() || 'karta-katalogowa.pdf')
      while (nazwyPlikow.has(filename)) filename = filename.replace(/\.pdf$/i, '-2.pdf')
      nazwyPlikow.add(filename)
      zalaczniki.push({ filename, content: buf })
      dolaczone.push(karta.produkt)
      razem += buf.length
    } catch (err) {
      console.error(`[Oferta] karta katalogowa ${karta.url} pominięta:`, err)
      pominiete.push(karta.nazwa)
    }
  }
  return { zalaczniki, dolaczone, pominiete }
}

/**
 * Czy kartę da się pobrać do załącznika: odpowiedź 200 i plik zaczynający się od
 * „%PDF". Czyta tylko początek pliku. Część adresów producentów jest martwa (404)
 * albo blokuje pobieranie spoza przeglądarki (403) — panel pokazuje to przed
 * wysyłką, żeby mail nie wyszedł bez obiecanej karty.
 */
export async function sprawdzKarte(url: string): Promise<{ ok: boolean; powod?: string }> {
  try {
    const buf = await pobierzPdf(url, { tylkoPoczatek: true })
    if (buf.subarray(0, 4).toString() !== '%PDF') return { ok: false, powod: 'pod adresem nie ma PDF' }
    return { ok: true }
  } catch (err) {
    const status = (err as { status?: number })?.status
    if (status === 404) return { ok: false, powod: 'plik usunięty u producenta (404)' }
    if (status) return { ok: false, powod: `serwer odmawia pobrania (${status})` }
    return { ok: false, powod: 'serwer nie odpowiada' }
  }
}
