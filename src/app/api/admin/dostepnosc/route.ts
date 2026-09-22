import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { lookupUnifiedStock } from '@/lib/unified-stock'

export const runtime = 'nodejs'
export const maxDuration = 60

/**
 * GET /api/admin/dostepnosc?pn=A,B,C — stan u dystrybutorów dla pozycji oferty.
 *
 * Sklep czyta stany z cache odświeżanego dwa razy dziennie, więc wpis bywa
 * sprzed doby. Przed wysłaniem oferty to za mało — przy dwóch sztukach na
 * stanie wczorajszy odczyt nic nie mówi — dlatego wpis starszy niż godzina
 * odświeżamy u dystrybutorów na żywo. Endpoint jest tylko dla zalogowanych,
 * bo wymusza zapytania do API dystrybutorów.
 *
 * O każdy numer pytamy osobno: BlueStar przy zapytaniu zbiorczym zwraca pustą
 * listę dla wszystkich numerów, gdy choć jeden jest u niego niedostępny.
 */
const MAKS_WIEK_CACHE_MS = 60 * 60 * 1000

interface DostepnoscPozycji {
  found: boolean
  stockPL: number
  stockDE: number
  inDelivery: number
  incomingDate: string | null
  lastSync: string
}

export async function GET(request: NextRequest) {
  if (!(await getSessionFromCookie())) {
    return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  }
  const surowe = request.nextUrl.searchParams.get('pn') || ''
  const numery = Array.from(new Set(surowe.split(',').map((x) => x.trim()).filter(Boolean))).slice(0, 50)
  if (numery.length === 0) return NextResponse.json({ wgPn: {} })

  const wyniki = await Promise.all(
    numery.map(async (pn): Promise<[string, DostepnoscPozycji] | null> => {
      try {
        const { body } = await lookupUnifiedStock([pn], false, { maxWiekCacheMs: MAKS_WIEK_CACHE_MS })
        const r = body.results?.[0]
        if (!r) return null
        return [
          pn,
          {
            found: r.found,
            stockPL: r.stockPL,
            stockDE: r.stockDE,
            inDelivery: r.inDelivery,
            incomingDate: r.incomingDate ?? null,
            lastSync: r.lastSync,
          },
        ]
      } catch (e) {
        console.error(`[dostepnosc] ${pn}:`, e instanceof Error ? e.message : e)
        return null
      }
    })
  )

  return NextResponse.json({
    wgPn: Object.fromEntries(wyniki.filter((w): w is [string, DostepnoscPozycji] => w !== null)),
  })
}
