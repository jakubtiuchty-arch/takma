import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSessionFromCookie } from '@/lib/auth'
import {
  parsujDokumentCenowy,
  koncesjeDlaPn,
  cennikJakoDokument,
  czyListaTradeUp,
  parsujListeTradeUp,
  tradeUpJakoDokument,
  type DaneKoncesji,
} from '@/lib/koncesje'
import { parsujCennikXlsx } from '@/lib/cennik-xlsx'

export const runtime = 'nodejs'
export const maxDuration = 60

/**
 * GET  /api/admin/koncesje?pn=A,B,C — aktywne koncesje dla numerów katalogowych.
 *      Kreator oferty pyta o wszystkie pozycje naraz, więc podpowiedź pojawia
 *      się także przy ofercie wczytanej do edycji albo skopiowanej z innej.
 * POST /api/admin/koncesje          — wgranie PDF-a: koncesji Zebry z
 *      PartnerConnect, oferty Jarltecha wystawionej na tę koncesję albo listy
 *      numerów Zebra Trade UP; do tego cennik producenta w arkuszu.
 */

export async function GET(request: NextRequest) {
  if (!(await getSessionFromCookie())) {
    return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  }
  const surowe = request.nextUrl.searchParams.get('pn') || ''
  const numery = Array.from(new Set(surowe.split(',').map((x) => x.trim()).filter(Boolean))).slice(0, 100)
  if (numery.length === 0) return NextResponse.json({ koncesje: [], wgPn: {} })

  const wgPn: Record<string, Awaited<ReturnType<typeof koncesjeDlaPn>>> = {}
  for (const pn of numery) {
    const trafienia = await koncesjeDlaPn(pn)
    if (trafienia.length > 0) wgPn[pn] = trafienia
  }
  // `koncesje` zostaje dla zgodności z pojedynczym zapytaniem
  return NextResponse.json({ wgPn, koncesje: numery.length === 1 ? (wgPn[numery[0]] ?? []) : [] })
}

/**
 * Tekst PDF-a z zachowaniem kolumn. Zwykły pdf-parse skleja komórki tabeli w
 * jeden ciąg („Y1309.4040.0047.024.98N"), z którego nie da się odzyskać granic
 * liczb. Dlatego czytamy pozycje elementów tekstowych i składamy wiersze po
 * współrzędnej Y, a kolumny rozdzielamy tabulatorem.
 *
 * Tryb `komorki` jest dla list, w których PDF tnie jedną komórkę na kilka
 * elementów tekstu (numer katalogowy „DS2208-7U21SG-14" przychodzi jako trzy
 * kawałki). Kawałki jednej komórki stykają się, a kolumny dzieli kilkanaście
 * punktów, więc sklejamy wszystko, co leży bliżej niż kilka punktów. Wiersz
 * grupujemy z tolerancją zamiast zaokrąglać Y — pojedyncze komórki bywają
 * przesunięte o ułamek punktu i zaokrąglenie odcinało je do osobnej linii.
 * Dotychczasowe dokumenty zostają przy starym trybie, pod który pisano parsery.
 */
async function tekstZPdf(buffer: Buffer, tryb: 'kolumny' | 'komorki' = 'kolumny'): Promise<string> {
  const pdfParse = (await import('pdf-parse')).default
  interface Element { str: string; transform: number[]; width?: number }
  interface Strona { getTextContent: (o: unknown) => Promise<{ items: Element[] }> }

  const render = async (pageData: Strona) => {
    const tc = await pageData.getTextContent({ normalizeWhitespace: false, disableCombineTextItems: false })

    if (tryb === 'komorki') {
      const elementy = tc.items
        .filter((it) => it.str.trim())
        .map((it) => ({ y: it.transform[5], x: it.transform[4], w: it.width ?? 0, s: it.str }))
        .sort((a, b) => b.y - a.y)
      const wiersze: { y: number; kom: typeof elementy }[] = []
      for (const e of elementy) {
        const ostatni = wiersze[wiersze.length - 1]
        if (ostatni && ostatni.y - e.y <= 2) ostatni.kom.push(e)
        else wiersze.push({ y: e.y, kom: [e] })
      }
      return wiersze
        .map(({ kom }) => {
          const komorki: string[] = []
          let prawaKrawedz = -Infinity
          for (const k of kom.sort((a, b) => a.x - b.x)) {
            const odstep = k.x - prawaKrawedz
            if (komorki.length && odstep < 0.5) komorki[komorki.length - 1] += k.s
            else if (komorki.length && odstep < 6) komorki[komorki.length - 1] += ` ${k.s}`
            else komorki.push(k.s)
            prawaKrawedz = k.x + k.w
          }
          return komorki.map((c) => c.replace(/\s+/g, ' ').trim()).filter(Boolean).join('\t')
        })
        .join('\n')
    }

    const wiersze = new Map<number, { x: number; s: string }[]>()
    for (const it of tc.items) {
      if (!it.str.trim()) continue
      const y = Math.round(it.transform[5])
      if (!wiersze.has(y)) wiersze.set(y, [])
      wiersze.get(y)!.push({ x: it.transform[4], s: it.str })
    }
    return Array.from(wiersze.entries())
      .sort((a, b) => b[0] - a[0])
      .map(([, kom]) => kom.sort((a, b) => a.x - b.x).map((k) => k.s.trim()).filter(Boolean).join('\t'))
      .join('\n')
  }

  const dane = await pdfParse(buffer, { pagerender: render as never })
  return dane.text
}

/** Okres obowiązywania z pól formularza „od" / „do" (YYYY-MM-DD). */
function okresZFormularza(form: FormData): { startDate: Date; endDate: Date } | { blad: string } {
  const od = (form.get('od') as string | null) || ''
  const doKiedy = (form.get('do') as string | null) || ''
  const startDate = new Date(`${od}T12:00:00Z`)
  const endDate = new Date(`${doKiedy}T12:00:00Z`)
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime()))
    return { blad: 'Podaj, od kiedy i do kiedy dokument obowiązuje.' }
  if (endDate <= startDate) return { blad: 'Data końca musi być późniejsza niż początek.' }
  return { startDate, endDate }
}

export async function POST(request: NextRequest) {
  if (!(await getSessionFromCookie())) {
    return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  }

  try {
    const form = await request.formData()
    const plik = form.get('file') as File | null
    if (!plik) return NextResponse.json({ error: 'Brak pliku.' }, { status: 400 })

    const bufor = Buffer.from(await plik.arrayBuffer())
    const arkusz = /\.xlsx?$/i.test(plik.name)

    let dane: DaneKoncesji
    if (arkusz) {
      // Cennik producenta nie niesie w sobie metryki: kto go wystawił i na jak
      // długo. Te trzy pola przychodzą z formularza obok pola na plik.
      const dostawca = (form.get('dostawca') as string | null)?.trim()
      const od = (form.get('od') as string | null) || ''
      const doKiedy = (form.get('do') as string | null) || ''
      if (!dostawca) return NextResponse.json({ error: 'Podaj dostawcę, od którego jest cennik.' }, { status: 400 })
      const startDate = new Date(`${od}T12:00:00Z`)
      const endDate = new Date(`${doKiedy}T12:00:00Z`)
      if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime()))
        return NextResponse.json({ error: 'Podaj, od kiedy i do kiedy cennik obowiązuje.' }, { status: 400 })
      if (endDate <= startDate)
        return NextResponse.json({ error: 'Data końca cennika musi być późniejsza niż początek.' }, { status: 400 })

      const wiersze = await parsujCennikXlsx(bufor)
      // Kod cennika wiąże rewizje tego samego dostawcy: nowy plik na ten sam
      // miesiąc zastępuje poprzedni, a nie dokłada drugiej listy.
      const kod = `${dostawca.toUpperCase().replace(/[^A-Z0-9]+/g, '-')}-${startDate.getUTCFullYear()}-${String(startDate.getUTCMonth() + 1).padStart(2, '0')}`
      dane = cennikJakoDokument(
        wiersze.map((w) => ({ partNumber: w.partNumber, description: w.description, minQty: 1, unitPrice: w.unitPrice })),
        { dostawca, kod, reseller: 'TAKMA', startDate, endDate }
      )
    } else {
      const tekst = await tekstZPdf(bufor)
      if (czyListaTradeUp(tekst)) {
        const lista = parsujListeTradeUp(await tekstZPdf(bufor, 'komorki'))
        // Lista nie podaje okresu promocji, więc pierwsze wysłanie wraca z
        // prośbą o daty. Podpowiadamy je z poprzedniej listy — program trwa
        // dłużej niż jedna wersja listy, a warunki zwykle się nie zmieniają.
        if (!form.get('od') || !form.get('do')) {
          const poprzednia = await prisma.priceConcession.findFirst({
            where: { source: 'TRADEUP' },
            orderBy: { createdAt: 'desc' },
          })
          const iso = (d: Date) => d.toISOString().slice(0, 10)
          return NextResponse.json(
            {
              error: 'Lista Trade UP nie podaje okresu promocji — wpisz go z biuletynu programu.',
              potrzebnyOkres: true,
              rewizja: lista.rewizja ?? null,
              pozycji: lista.items.length,
              od: poprzednia ? iso(poprzednia.startDate) : '',
              do: poprzednia ? iso(poprzednia.endDate) : '',
              uwagi: poprzednia?.note ?? '',
            },
            { status: 422 }
          )
        }
        const okres = okresZFormularza(form)
        if ('blad' in okres) return NextResponse.json({ error: okres.blad }, { status: 400 })
        dane = tradeUpJakoDokument(lista, { ...okres, uwagi: (form.get('uwagi') as string | null) ?? undefined })
      } else {
        dane = parsujDokumentCenowy(tekst, plik.name)
      }
    }

    // Nowa wersja dokumentu zastępuje poprzednią — rewizje wydaje się przy
    // zmianie ilości albo cen i dwie naraz nie obowiązują. Kasujemy tylko w
    // obrębie tego samego źródła: koncesja Zebry i oferta Jarltecha mają ten
    // sam numer, a mówią o czym innym (cena od producenta vs. od dystrybutora).
    await prisma.priceConcession.deleteMany({ where: { requestId: dane.requestId, source: dane.source } })

    const zapisana = await prisma.priceConcession.create({
      data: {
        source: dane.source,
        requestId: dane.requestId,
        revision: dane.revision ?? null,
        docNumber: dane.docNumber ?? null,
        reseller: dane.reseller,
        resellerNo: dane.resellerNo ?? null,
        distributor: dane.distributor ?? null,
        endUser: dane.endUser ?? null,
        currency: dane.currency,
        startDate: dane.startDate,
        endDate: dane.endDate,
        note: dane.note ?? null,
        fileName: plik.name,
        items: {
          create: dane.items.map((i) => ({
            partNumber: i.partNumber,
            description: i.description ?? null,
            minQty: i.minQty,
            maxQty: i.maxQty ?? null,
            listPrice: i.listPrice ?? null,
            unitPrice: i.unitPrice,
            discountPct: i.discountPct ?? null,
          })),
        },
      },
      include: { items: true },
    })

    return NextResponse.json({
      ok: true,
      source: zapisana.source,
      docNumber: zapisana.docNumber,
      requestId: zapisana.requestId,
      revision: zapisana.revision,
      reseller: zapisana.reseller,
      distributor: zapisana.distributor,
      pozycji: zapisana.items.length,
      waznaDo: zapisana.endDate,
    })
  } catch (e) {
    const wiadomosc = e instanceof Error ? e.message : 'Nie udało się wczytać dokumentu.'
    console.error('[koncesje] import:', wiadomosc)
    return NextResponse.json({ error: wiadomosc }, { status: 400 })
  }
}
