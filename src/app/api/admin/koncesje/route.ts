import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSessionFromCookie } from '@/lib/auth'
import { parsujDokumentCenowy, koncesjeDlaPn, cennikJakoDokument, type DaneKoncesji } from '@/lib/koncesje'
import { parsujCennikXlsx } from '@/lib/cennik-xlsx'

export const runtime = 'nodejs'
export const maxDuration = 60

/**
 * GET  /api/admin/koncesje?pn=A,B,C — aktywne koncesje dla numerów katalogowych.
 *      Kreator oferty pyta o wszystkie pozycje naraz, więc podpowiedź pojawia
 *      się także przy ofercie wczytanej do edycji albo skopiowanej z innej.
 * POST /api/admin/koncesje          — wgranie PDF-a: koncesji Zebry z
 *      PartnerConnect albo oferty Jarltecha wystawionej na tę koncesję.
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
 */
async function tekstZPdf(buffer: Buffer): Promise<string> {
  const pdfParse = (await import('pdf-parse')).default
  interface Element { str: string; transform: number[] }
  interface Strona { getTextContent: (o: unknown) => Promise<{ items: Element[] }> }

  const render = async (pageData: Strona) => {
    const tc = await pageData.getTextContent({ normalizeWhitespace: false, disableCombineTextItems: false })
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
      dane = parsujDokumentCenowy(await tekstZPdf(bufor), plik.name)
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
