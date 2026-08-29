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
  requestId: string
  revision?: string
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
  requestId: string
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
      requestId: p.concession.requestId,
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
