import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSessionFromCookie } from '@/lib/auth'
import { parsujKoncesje, koncesjeDlaPn } from '@/lib/koncesje'

export const runtime = 'nodejs'
export const maxDuration = 60

/**
 * GET  /api/admin/koncesje?pn=…  — aktywne koncesje dla numeru katalogowego
 *      (używa kreator oferty, żeby podpowiedzieć cenę specjalną).
 * POST /api/admin/koncesje       — wgranie PDF-a z PartnerConnect.
 */

export async function GET(request: NextRequest) {
  if (!(await getSessionFromCookie())) {
    return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  }
  const pn = request.nextUrl.searchParams.get('pn')?.trim()
  if (!pn) return NextResponse.json({ koncesje: [] })
  return NextResponse.json({ koncesje: await koncesjeDlaPn(pn) })
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

    const tekst = await tekstZPdf(Buffer.from(await plik.arrayBuffer()))
    const dane = parsujKoncesje(tekst, plik.name)

    // Ta sama koncesja w nowej rewizji zastępuje starą — Zebra wydaje rewizje
    // przy zmianie ilości albo cen, a obie naraz nie obowiązują.
    await prisma.priceConcession.deleteMany({ where: { requestId: dane.requestId } })

    const zapisana = await prisma.priceConcession.create({
      data: {
        requestId: dane.requestId,
        revision: dane.revision ?? null,
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
      requestId: zapisana.requestId,
      reseller: zapisana.reseller,
      pozycji: zapisana.items.length,
      waznaDo: zapisana.endDate,
    })
  } catch (e) {
    const wiadomosc = e instanceof Error ? e.message : 'Nie udało się wczytać dokumentu.'
    console.error('[koncesje] import:', wiadomosc)
    return NextResponse.json({ error: wiadomosc }, { status: 400 })
  }
}
