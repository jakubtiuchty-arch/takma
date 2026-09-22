import { prisma } from '@/lib/db'
import { lookupStock } from '@/lib/bluestar'

/**
 * Koncesje cenowe Zebry (Price Concession).
 *
 * Dokument z PartnerConnect przyznaje specjalną cenę zakupu na konkretną szansę
 * sprzedaży: dla jednego resellera (TAKMA albo Scanter), na jednego klienta
 * końcowego, z terminem i limitem sztuk per numer katalogowy. Formalnie cena
 * dotyczy tylko tej szansy, ale w praktyce niewielkie ilości da się wykorzystać
 * gdzie indziej — dlatego przy wystawianiu oferty pokazujemy podpowiedź zamiast
 * wstawiać cenę automatycznie. Decyzja zostaje po stronie handlowca.
 */

/** Skąd pochodzi cena specjalna. */
export type ZrodloKoncesji = 'ZEBRA' | 'JARLTECH' | 'CENNIK' | 'TRADEUP'

/** Wartość z bazy na typ — nieznane źródło traktujemy jak koncesję Zebry. */
export const zrodloCeny = (s: string): ZrodloKoncesji =>
  s === 'JARLTECH' || s === 'CENNIK' || s === 'TRADEUP' ? s : 'ZEBRA'

/** Wiersz tabeli „Price Concession Items" po sparsowaniu PDF-a. */
export interface PozycjaKoncesji {
  partNumber: string
  description?: string
  minQty: number
  maxQty?: number
  listPrice?: number  // setne części waluty
  unitPrice: number   // cena specjalna, setne części waluty
  discountPct?: number
}

export interface DaneKoncesji {
  source: ZrodloKoncesji
  requestId: string
  revision?: string
  docNumber?: string
  reseller: string
  resellerNo?: string
  distributor?: string
  endUser?: string
  currency: string
  startDate: Date
  endDate: Date
  /** Warunki, które mają stać przy podpowiedzi w kreatorze oferty. */
  note?: string
  items: PozycjaKoncesji[]
}

const MIESIACE: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
}

/** „14-Aug-2026" → Date. Zebra używa tego formatu w całym dokumencie. */
function dataZebry(tekst: string): Date | null {
  const m = tekst.match(/(\d{1,2})-([A-Za-z]{3})-(\d{4})/)
  if (!m) return null
  const mies = MIESIACE[m[2].toLowerCase()]
  if (mies === undefined) return null
  return new Date(Date.UTC(Number(m[3]), mies, Number(m[1]), 12))
}

/** Wartość pola z nagłówka: „Reseller\t:\tSCANTER Sp. z o.o." */
function pole(linie: string[], etykieta: string): string | undefined {
  const wiersz = linie.find((l) => l.startsWith(`${etykieta}\t`))
  if (!wiersz) return undefined
  const czesci = wiersz.split('\t').map((c) => c.trim()).filter(Boolean)
  // [etykieta, ':', wartość] — bierzemy wszystko po dwukropku
  const i = czesci.indexOf(':')
  return i >= 0 ? czesci.slice(i + 1).join(' ').trim() || undefined : undefined
}

const grosze = (s: string) => Math.round(parseFloat(s) * 100)

/**
 * Parsuje tekst PDF-a rozłożony na kolumny (patrz tekstZPdf w route imports).
 * Wiersz pozycji ma postać:
 *   PN [opis] Y minQty maxQty listPrice stdDisc totalDisc unitPrice N
 */
export function parsujKoncesje(tekst: string, nazwaPliku?: string): DaneKoncesji {
  const linie = tekst.split('\n')

  const naglowek = linie.find((l) => /PC Request ID/i.test(l)) || ''
  const requestId = naglowek.match(/PC Request ID\s*#?:?\s*(\d+)/i)?.[1]
  const revision = naglowek.match(/Revision\s*#?:?\s*([\d.]+)/i)?.[1]
  if (!requestId) throw new Error('Nie znalazłem numeru PC Request ID — czy to na pewno dokument koncesji?')

  const startDate = dataZebry(pole(linie, 'Start Date') || '')
  const endDate = dataZebry(pole(linie, 'End Date') || '')
  if (!startDate || !endDate) throw new Error('Nie znalazłem dat obowiązywania koncesji.')

  const items: PozycjaKoncesji[] = []
  // Kolumny liczbowe zawsze kończą wiersz: Y|N, dwie liczby całkowite, cztery
  // liczby z dwoma miejscami, na końcu Y|N (flaga „Cancelled" — pomijamy anulowane).
  const wzor = /^([A-Z0-9][A-Z0-9-]{4,})\t(?:(.*)\t)?([YN])\t(\d+)\t(\d+)\t([\d.]+)\t([\d.]+)\t([\d.]+)\t([\d.]+)\t([YN])$/

  for (const l of linie) {
    const m = l.trim().match(wzor)
    if (!m) continue
    const anulowana = m[10] === 'Y'
    if (anulowana) continue
    items.push({
      partNumber: m[1],
      description: (m[2] || '').trim() || undefined,
      minQty: Number(m[4]) || 1,
      maxQty: Number(m[5]) || undefined,
      listPrice: grosze(m[6]),
      discountPct: Number(m[8]),
      unitPrice: grosze(m[9]),
    })
  }

  if (items.length === 0) throw new Error('Nie znalazłem żadnej pozycji cenowej w dokumencie.')

  return {
    source: 'ZEBRA',
    requestId,
    revision,
    reseller: pole(linie, 'Reseller') || '(nieznany)',
    resellerNo: pole(linie, 'Reseller #'),
    distributor: pole(linie, 'Account'),
    endUser: pole(linie, 'End User'),
    currency: pole(linie, 'Currency') || 'EUR',
    startDate,
    endDate,
    ...(nazwaPliku ? {} : {}),
    items,
  }
}

/** „10.530,00" → 1053000. Jarltech pisze po polsku: kropka tysiące, przecinek grosze. */
const kwotaPl = (s: string) => Math.round(parseFloat(s.replace(/\./g, '').replace(',', '.')) * 100)

/** „25.08.2026" → Date. */
function dataPl(tekst: string): Date | null {
  const m = tekst.match(/(\d{2})\.(\d{2})\.(\d{4})/)
  return m ? new Date(Date.UTC(Number(m[3]), Number(m[2]) - 1, Number(m[1]), 12)) : null
}

/**
 * Oferta Jarltecha wystawiona na koncesję.
 *
 * Zebra przyznaje koncesję, ale towar kupujemy u dystrybutora — i to jego
 * oferta mówi, ile naprawdę zapłacimy. Dokument wygląda zupełnie inaczej niż
 * PDF z PartnerConnect: pozycje mają numer Jarltecha („sytc22"), a numer
 * katalogowy producenta stoi kilka wierszy niżej, w opisie. Dlatego wiersz
 * tabeli otwiera blok, a numer, cenę detaliczną i resztę zbieramy z linii aż
 * do następnej pozycji.
 */
export function parsujOferteJarltech(tekst: string): DaneKoncesji {
  const linie = tekst.split('\n')
  const caly = tekst

  const docNumber = caly.match(/Oferta:\t(\d+)/)?.[1] || caly.match(/^Oferta (\d+)$/m)?.[1]
  // Numer wiążący: najpierw koncesja Zebry ze zdania wstępnego (same cyfry),
  // a gdy oferta na koncesji nie stoi — numer projektu Jarltecha z nagłówka.
  // Sprzęt spoza PartnerConnect (M3 Mobile) koncesji Zebry nie ma i mieć nie
  // będzie, a wycena projektowa i tak obowiązuje, więc nie odrzucamy dokumentu.
  const requestId =
    caly.match(/koncesji\s+([A-Za-z0-9][\w-]{4,})/i)?.[1] ||
    caly.match(/Projekt:\t([A-Za-z0-9][\w-]{4,})/)?.[1] ||
    caly.match(/Referencje:\t([A-Za-z0-9][\w-]{4,})/)?.[1]
  if (!requestId)
    throw new Error(
      'To oferta Jarltecha, ale nie ma w niej ani numeru koncesji, ani numeru projektu — nie wiem, do czego ją przypiąć.'
    )

  const startDate = dataPl(caly.match(/Data:\t([\d.]+)/)?.[1] || '')
  const endDate =
    dataPl(caly.match(/Valid until:\t([\d.]+)/)?.[1] || '') ||
    dataPl(caly.match(/Oferta wazna do ([\d.]+)/)?.[1] || '')
  if (!startDate || !endDate) throw new Error('Nie znalazłem daty wystawienia albo terminu ważności oferty.')

  // Odbiorca oferty to pierwszy wiersz adresu — jedyny bez tabulatora przed
  // blokiem pozycji („SCANTER Sp. z o.o.").
  const reseller =
    linie.find((l, i) => i > 0 && !l.includes('\t') && /\S/.test(l) && !/^Oferta\b/.test(l))?.trim() || '(nieznany)'

  // Klient końcowy stoi w zdaniu wstępnym, ale dłuższa nazwa łamie się na dwa
  // wiersze („…Sp. z" / „o.o.,:"), a justowanie rozstrzeliwuje wyrazy podwójnymi
  // spacjami. Czytamy więc z tekstu sklejonego w jeden ciąg, do dwukropka
  // zamykającego zdanie. Pole „Referencje" zostaje jako zapasowe, choć w
  // kolumnowym układzie widać z niego tylko pierwszy wyraz nazwy.
  const ciagly = caly.replace(/\s+/g, ' ')
  const endUser =
    ciagly
      .match(/dotycz\S+ projektu\s+(.{3,80}?)\s*,?\s*:/)?.[1]
      ?.replace(/[,;]\s*$/, '')
      .trim() ||
    caly.match(/Referencje:\t\S+\s*\/\s*(.+)$/m)?.[1]?.trim()

  const items: PozycjaKoncesji[] = []
  let biezaca: PozycjaKoncesji | null = null
  let nazwa: string[] = []
  let nazwaOtwarta = false

  const zamknij = () => {
    if (!biezaca) return
    if (nazwa.length && !biezaca.description) biezaca.description = nazwa.join(' ').replace(/\s+/g, ' ').trim()
    items.push(biezaca)
    biezaca = null
    nazwa = []
  }

  for (const l of linie) {
    const c = l.split('\t')
    // Wiersz pozycji: Poz | Rewizja | Nr Jarltecha | opis | ilość | serwisy… |
    // cena jedn. | rabat% | suma. Kolumn serwisowych bywa różna liczba, więc
    // liczymy od końca — suma i rabat zawsze zamykają wiersz.
    const naglowekPozycji =
      c.length >= 8 && /^\d+$/.test(c[0].trim()) && /^\d+$/.test((c[1] || '').trim()) && /^\d+$/.test((c[4] || '').trim())

    if (naglowekPozycji) {
      zamknij()
      const rabatOstatni = /%$/.test(c[c.length - 2]?.trim() || '')
      const cena = c[c.length - (rabatOstatni ? 3 : 2)]?.trim() || ''
      const rabat = rabatOstatni ? parseFloat(c[c.length - 2].replace('%', '').replace(',', '.')) : undefined
      if (!/^[\d.,]+$/.test(cena)) continue
      biezaca = {
        partNumber: c[2].trim(),
        minQty: 1,
        maxQty: Number(c[4]) || undefined,
        unitPrice: kwotaPl(cena),
        discountPct: Number.isFinite(rabat) ? rabat : undefined,
      }
      nazwa = [c[3]?.trim() || '']
      nazwaOtwarta = true
      continue
    }

    if (!biezaca) continue

    const pn = l.match(/numer produktu producenta:\s*(\S+)/i)?.[1]
    if (pn) { biezaca.partNumber = pn; continue }

    const detaliczna = l.match(/Cena detaliczna:\s*([\d.,]+)/i)?.[1]
    if (detaliczna) { biezaca.listPrice = kwotaPl(detaliczna); continue }

    // Nazwa handlowa łamie się na kilka wierszy i zawsze zaczyna się wielką
    // literą. Pierwsza linia, która tak nie wygląda, to już opis techniczny
    // („portable data collection device…") — od niej nazwy nie zbieramy, bo
    // inaczej dokleiłby się cały akapit i stopka dokumentu.
    if (nazwaOtwarta) {
      const t = l.trim()
      // Nazwa łamie się w środku wyliczenia („…8-Pin, USB-C, BT, Wi-Fi," →
      // „eSIM, 5G, NFC,"), więc po przecinku na końcu bierzemy też wiersz
      // zaczynający się małą literą.
      const dalszyCiag = /,$/.test(nazwa[nazwa.length - 1] || '')
      if (!l.includes('\t') && nazwa.length < 10 && (/^[A-ZĄĆĘŁŃÓŚŹŻ]/.test(t) || dalszyCiag)) nazwa.push(t)
      else nazwaOtwarta = false
    }
  }
  zamknij()

  if (items.length === 0) throw new Error('Nie znalazłem żadnej pozycji w ofercie Jarltecha.')

  return {
    source: 'JARLTECH',
    requestId,
    revision: caly.match(/Revision:\t#?([\w.]+)/)?.[1],
    docNumber,
    reseller,
    resellerNo: caly.match(/Nr Klienta:\t(\d+)/)?.[1],
    distributor: 'Jarltech Europe GmbH',
    endUser,
    currency: /Suma:\tPLN|PLN\s*[\d.,]+$/m.test(caly) ? 'PLN' : 'EUR',
    startDate,
    endDate,
    items,
  }
}

/**
 * Cennik zakupowy producenta (arkusz) jako dokument cenowy.
 *
 * Różni się od koncesji tym, że nie stoi za nim ani jedna szansa sprzedaży, ani
 * limit sztuk: to nasza cena zakupu na wszystko z listy, ważna do następnej
 * rewizji cennika. Trzymamy go w tej samej tabeli, żeby kreator oferty pytał o
 * cenę zakupu w jednym miejscu, a nie w trzech.
 */
export function cennikJakoDokument(
  items: PozycjaKoncesji[],
  meta: { dostawca: string; kod: string; reseller: string; startDate: Date; endDate: Date }
): DaneKoncesji {
  return {
    source: 'CENNIK',
    requestId: meta.kod,
    reseller: meta.reseller,
    distributor: meta.dostawca,
    currency: 'PLN',
    startDate: meta.startDate,
    endDate: meta.endDate,
    items,
  }
}

/**
 * Lista numerów programu Zebra Trade UP.
 *
 * Inaczej niż koncesja nie podaje ceny, tylko rabat od ceny katalogowej
 * producenta — kwotę liczymy dopiero przy ofercie, z bieżącego cennika
 * (patrz koncesjeDlaPn), żeby zmiana cennika nie zostawiła w podpowiedzi
 * starej kwoty. Nie ma w niej też okresu promocji: stoi w osobnym biuletynie
 * programu, więc daty przychodzą z formularza importu.
 *
 * Dokument jest poufny, dlatego w kodzie nie ma z niego nic poza układem
 * tabeli — numery, rabaty i warunki żyją wyłącznie w bazie.
 */
export const czyListaTradeUp = (tekst: string) =>
  // Koncesja albo oferta Jarltecha na transakcję z Trade UP może zawierać te
  // same słowa — ich parsery mają pierwszeństwo.
  !/PC Request ID/i.test(tekst) &&
  !/Jarltech/i.test(tekst) &&
  /Trade\s*UP/i.test(tekst) &&
  /Recommended\s+Discount/i.test(tekst) &&
  /Part\s+Number/i.test(tekst)

/**
 * Tekst musi pochodzić z ekstrakcji sklejającej sąsiadujące kawałki komórki
 * (tekstZPdf w trybie komórek), bo PDF zapisuje numer katalogowy jako kilka
 * elementów tekstu. Wiersz ma wtedy cztery kolumny:
 *   linia produktów | rodzina | numer katalogowy | rabat%
 */
export function parsujListeTradeUp(tekst: string): { rewizja?: string; items: PozycjaKoncesji[] } {
  const items: PozycjaKoncesji[] = []
  const widziane = new Set<string>()
  for (const l of tekst.split('\n')) {
    const k = l.split('\t').map((c) => c.trim())
    if (k.length < 3) continue
    const rabat = k[k.length - 1].match(/^(\d{1,2}(?:[.,]\d+)?)\s*%$/)?.[1]
    const pn = k[k.length - 2]
    if (!rabat || !/^[A-Z0-9][A-Z0-9-]{5,}$/.test(pn) || widziane.has(pn)) continue
    widziane.add(pn)
    items.push({
      partNumber: pn,
      // Rodzina mówi handlowcowi więcej niż linia produktów, więc stoi pierwsza.
      description: [k[k.length - 3], k.slice(0, -3).join(' ')].filter(Boolean).join(' · ') || undefined,
      minQty: 1,
      unitPrice: 0,
      discountPct: Number(rabat.replace(',', '.')),
    })
  }
  if (items.length === 0)
    throw new Error(
      'To dokument programu Trade UP, ale bez numerów katalogowych — wczytaj listę numerów z rabatami, nie biuletyn programu.'
    )

  // Data wydania listy stoi w stopce każdej strony, po tytule dokumentu.
  const d = tekst.match(/Discounts[^\n]*?(\d{2})-(\d{2})-(\d{4})/)
  return { rewizja: d ? `${d[1]}.${d[2]}.${d[3]}` : undefined, items }
}

/** Lista Trade UP jako dokument cenowy — okres i warunki programu podaje człowiek. */
export function tradeUpJakoDokument(
  lista: { rewizja?: string; items: PozycjaKoncesji[] },
  meta: { startDate: Date; endDate: Date; uwagi?: string }
): DaneKoncesji {
  return {
    source: 'TRADEUP',
    // Stały numer: nowa lista zastępuje poprzednią, a nie leży obok niej.
    requestId: 'TRADE-UP',
    revision: lista.rewizja,
    reseller: 'TAKMA',
    currency: 'EUR',
    startDate: meta.startDate,
    endDate: meta.endDate,
    note: meta.uwagi?.trim() || undefined,
    items: lista.items,
  }
}

/**
 * Rozpoznaje dokument po treści. Ceny specjalne przychodzą dwiema drogami:
 * koncesja od Zebry i oparta na niej oferta dystrybutora — obie trafiają do
 * tej samej tabeli, więc w kreatorze oferty widać je obok siebie. Listę
 * Trade UP rozpoznaje wcześniej route importu, bo potrzebuje innej ekstrakcji
 * tekstu i dat z formularza.
 */
export function parsujDokumentCenowy(tekst: string, nazwaPliku?: string): DaneKoncesji {
  if (/PC Request ID/i.test(tekst)) return parsujKoncesje(tekst, nazwaPliku)
  if (/Jarltech/i.test(tekst)) return parsujOferteJarltech(tekst)
  throw new Error(
    'Nie rozpoznaję dokumentu — czytam koncesje Zebry z PartnerConnect, oferty Jarltecha i listy numerów Zebra Trade UP.'
  )
}

/**
 * Gdzie ma trafić przypomnienie o kończącej się cenie. Koncesje wystawiane są
 * na dwie firmy i każda pilnuje swoich terminów u siebie; przy nieznanej
 * nazwie mail idzie do nas, żeby nie zginął.
 */
export function adresPrzypomnienia(reseller: string): string {
  return /scanter/i.test(reseller) ? 'biuro@scanter.pl' : 'handlowy@takma.com.pl'
}

/** Kurs EUR/PLN z NBP (cache 12 h) — koncesje są w euro, oferty w złotych. */
let kursCache: { kurs: number; o: number } | null = null
export async function kursEur(): Promise<number> {
  if (kursCache && Date.now() - kursCache.o < 12 * 3600_000) return kursCache.kurs
  try {
    const r = await fetch('https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json', {
      signal: AbortSignal.timeout(8000),
    })
    if (r.ok) {
      const j = (await r.json()) as { rates: { mid: number }[] }
      const kurs = j.rates?.[0]?.mid
      if (kurs > 0) {
        kursCache = { kurs, o: Date.now() }
        return kurs
      }
    }
  } catch {
    // brak NBP — kurs awaryjny, ten sam co w /api/stock
  }
  return kursCache?.kurs ?? 4.3
}

export interface TrafienieKoncesji {
  source: ZrodloKoncesji
  requestId: string
  docNumber: string | null
  revision: string | null
  reseller: string
  endUser: string | null
  distributor: string | null
  endDate: Date
  dniDoKonca: number
  currency: string
  unitPrice: number      // w walucie koncesji (setne); 0 = nie da się policzyć
  unitPricePln: number   // przeliczone na grosze; 0 = nie da się policzyć
  maxQty: number | null
  usedQty: number
  pozostaloSztuk: number | null
  itemId: string
  /** Rabat z dokumentu w procentach — przy Trade UP to jedyna liczba, jaką daje lista. */
  rabatPct: number | null
  /** Cena katalogowa producenta (setne waluty), od której liczy się rabat Trade UP. */
  cenaKatalogowa: number | null
  /** Warunki dokumentu wpisane przy imporcie — stoją pod podpowiedzią. */
  uwagi: string | null
  opis: string | null
}

/**
 * Cena katalogowa producenta w setnych euro. Podaje ją tylko BlueStar, więc
 * pytamy go w chwili wystawiania oferty — o każdy numer osobno, bo przy
 * zapytaniu zbiorczym jeden niedostępny numer zeruje odpowiedź dla wszystkich.
 */
async function cenaKatalogowa(partNumber: string): Promise<number | null> {
  try {
    const [wynik] = await lookupStock([partNumber])
    return wynik?.found && wynik.listPrice && wynik.listPrice > 0 ? Math.round(wynik.listPrice * 100) : null
  } catch {
    return null
  }
}

/**
 * Aktywne koncesje dla numeru katalogowego. Zwraca posortowane od najtańszej —
 * bywa, że ten sam PN ma koncesję i dla TAKMY, i dla Scantera. Pozycje bez
 * policzalnej ceny idą na koniec.
 */
export async function koncesjeDlaPn(partNumber: string): Promise<TrafienieKoncesji[]> {
  const teraz = new Date()
  const pozycje = await prisma.priceConcessionItem.findMany({
    where: {
      partNumber: { equals: partNumber, mode: 'insensitive' },
      concession: { startDate: { lte: teraz }, endDate: { gte: teraz } },
    },
    include: { concession: true },
  })
  if (pozycje.length === 0) return []

  const tradeUp = pozycje.some((p) => p.concession.source === 'TRADEUP')
  const [kurs, katalog] = await Promise.all([kursEur(), tradeUp ? cenaKatalogowa(partNumber) : Promise.resolve(null)])

  const wynik: TrafienieKoncesji[] = pozycje.map((p) => {
    const source = zrodloCeny(p.concession.source)
    // Trade UP daje rabat od ceny katalogowej, a nie kwotę. Liczymy ją z
    // cennika pobranego teraz; bez ceny katalogowej zostaje sam rabat.
    const unitPrice =
      source === 'TRADEUP'
        ? katalog != null && p.discountPct != null
          ? Math.round(katalog * (1 - p.discountPct / 100))
          : 0
        : p.unitPrice
    return {
      source,
      requestId: p.concession.requestId,
      docNumber: p.concession.docNumber,
      revision: p.concession.revision,
      reseller: p.concession.reseller,
      endUser: p.concession.endUser,
      distributor: p.concession.distributor,
      endDate: p.concession.endDate,
      dniDoKonca: Math.ceil((p.concession.endDate.getTime() - teraz.getTime()) / 86_400_000),
      currency: p.concession.currency,
      unitPrice,
      unitPricePln: p.concession.currency === 'PLN' ? unitPrice : Math.round(unitPrice * kurs),
      maxQty: p.maxQty,
      usedQty: p.usedQty,
      pozostaloSztuk: p.maxQty != null ? Math.max(0, p.maxQty - p.usedQty) : null,
      itemId: p.id,
      rabatPct: p.discountPct,
      cenaKatalogowa: source === 'TRADEUP' ? katalog : p.listPrice,
      uwagi: p.concession.note,
      opis: p.description,
    }
  })

  const klucz = (t: TrafienieKoncesji) => (t.unitPricePln > 0 ? t.unitPricePln : Number.MAX_SAFE_INTEGER)
  return wynik.sort((a, b) => klucz(a) - klucz(b))
}
