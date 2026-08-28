import { NextRequest, NextResponse } from 'next/server'
import sitemap from '@/app/sitemap'
import { zglosDoIndexNow } from '@/lib/indexnow'

export const runtime = 'nodejs'
export const maxDuration = 120
export const dynamic = 'force-dynamic'

/**
 * GET /api/cron/indexnow — zgłasza adresy z mapy strony do IndexNow (Bing).
 *
 * Autoryzacja: Bearer CRON_SECRET.
 * Domyślnie idą adresy zmienione w ostatnich `?dni=N` dniach (domyślnie 7) —
 * pełna mapa ma kilka tysięcy wpisów i codzienne zgłaszanie wszystkiego to
 * hałas, na który wyszukiwarki reagują ograniczeniem limitów. `?wszystko=1`
 * wysyła całość: przydatne raz, po wdrożeniu, i po dużej przebudowie serwisu.
 */
export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization')
  if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const wszystko = request.nextUrl.searchParams.get('wszystko') === '1'
  const dni = Math.max(1, Math.min(90, Number(request.nextUrl.searchParams.get('dni') || '7')))
  const prog = new Date(Date.now() - dni * 86_400_000)

  const mapa = await sitemap()
  const wybrane = wszystko
    ? mapa
    : mapa.filter((w) => {
        const lm = w.lastModified ? new Date(w.lastModified) : null
        return lm ? lm >= prog : false
      })

  const wynik = await zglosDoIndexNow(wybrane.map((w) => String(w.url)))

  return NextResponse.json({
    ...wynik,
    wMapie: mapa.length,
    zakres: wszystko ? 'cała mapa' : `zmienione w ${dni} dniach`,
  })
}
