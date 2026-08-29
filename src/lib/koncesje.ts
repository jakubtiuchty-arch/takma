import { prisma } from '@/lib/db'

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
export type ZrodloKoncesji = 'ZEBRA' | 'JARLTECH'

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
  // Numer koncesji: wprost ze zdania wstępnego, a gdy go brak — z pola Projekt.
  const requestId =
    caly.match(/koncesji\s+(\d{5,})/i)?.[1] ||
    caly.match(/Projekt:\t(\d{5,})/)?.[1] ||
    caly.match(/Referencje:\t(\d{5,})/)?.[1]
  if (!requestId) throw new Error('To oferta Jarltecha, ale nie ma w niej numeru koncesji — nie wiem, do czego ją przypiąć.')

  const startDate = dataPl(caly.match(/Data:\t([\d.]+)/)?.[1] || '')
  const endDate =
    dataPl(caly.match(/Valid until:\t([\d.]+)/)?.[1] || '') ||
    dataPl(caly.match(/Oferta wazna do ([\d.]+)/)?.[1] || '')
  if (!startDate || !endDate) throw new Error('Nie znalazłem daty wystawienia albo terminu ważności oferty.')

  // Odbiorca oferty to pierwszy wiersz adresu — jedyny bez tabulatora przed
  // blokiem pozycji („SCANTER Sp. z o.o.").
  const reseller =
    linie.find((l, i) => i > 0 && !l.includes('\t') && /\S/.test(l) && !/^Oferta\b/.test(l))?.trim() || '(nieznany)'

  const endUser =
    caly.match(/dotycz\S+ projektu\s+(.+?):\s*$/m)?.[1]?.trim() ||
    caly.match(/Referencje:\t\d+\s*\/\s*(.+)$/m)?.[1]?.trim()

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
 * Rozpoznaje dokument po treści. Ceny specjalne przychodzą dwiema drogami:
 * koncesja od Zebry i oparta na niej oferta dystrybutora — obie trafiają do
 * tej samej tabeli, więc w kreatorze oferty widać je obok siebie.
 */
export function parsujDokumentCenowy(tekst: string, nazwaPliku?: string): DaneKoncesji {
  if (/PC Request ID/i.test(tekst)) return parsujKoncesje(tekst, nazwaPliku)
  if (/Jarltech/i.test(tekst)) return parsujOferteJarltech(tekst)
  throw new Error('Nie rozpoznaję dokumentu — czytam koncesje Zebry z PartnerConnect i oferty Jarltecha.')
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
  unitPrice: number      // w walucie koncesji (setne)
  unitPricePln: number   // przeliczone na grosze
  maxQty: number | null
  usedQty: number
  pozostaloSztuk: number | null
  itemId: string
}

/**
 * Aktywne koncesje dla numeru katalogowego. Zwraca posortowane od najtańszej —
 * bywa, że ten sam PN ma koncesję i dla TAKMY, i dla Scantera.
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

  const kurs = await kursEur()

  return pozycje
    .map((p) => ({
      source: (p.concession.source === 'JARLTECH' ? 'JARLTECH' : 'ZEBRA') as ZrodloKoncesji,
      requestId: p.concession.requestId,
      docNumber: p.concession.docNumber,
      revision: p.concession.revision,
      reseller: p.concession.reseller,
      endUser: p.concession.endUser,
      distributor: p.concession.distributor,
      endDate: p.concession.endDate,
      dniDoKonca: Math.ceil((p.concession.endDate.getTime() - teraz.getTime()) / 86_400_000),
      currency: p.concession.currency,
      unitPrice: p.unitPrice,
      unitPricePln: p.concession.currency === 'PLN' ? p.unitPrice : Math.round(p.unitPrice * kurs),
      maxQty: p.maxQty,
      usedQty: p.usedQty,
      pozostaloSztuk: p.maxQty != null ? Math.max(0, p.maxQty - p.usedQty) : null,
      itemId: p.id,
    }))
    .sort((a, b) => a.unitPricePln - b.unitPricePln)
}
