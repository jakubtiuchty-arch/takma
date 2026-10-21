import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Odbiór wyjątków z przeglądarki (lib/client-error-report). Zapis wyłącznie do logów Vercel:
 *   vercel logs --environment production --query "[client-error]"
 * Wpisy z bot:true pokazują, co psuje renderowanie kart w Google.
 * Bez bazy i bez danych osobowych; adres IP służy tylko do limitu w pamięci instancji.
 */

const MAKS_ROZMIAR = 4096
const OKNO_MS = 60_000
const LIMIT_IP = 10           // zgłoszeń na adres IP w oknie
const LIMIT_INSTANCJI = 200   // zgłoszeń na instancję funkcji w oknie

const liczniki = new Map<string, { start: number; ile: number }>()

function przekroczony(klucz: string, limit: number, teraz: number): boolean {
  const l = liczniki.get(klucz)
  if (!l || teraz - l.start > OKNO_MS) {
    liczniki.set(klucz, { start: teraz, ile: 1 })
    return false
  }
  l.ile++
  return l.ile > limit
}

const tekst = (v: unknown, max: number): string | null =>
  v == null ? null : String(v).slice(0, max)

const pusta = (status: number) => new NextResponse(null, { status })

export async function POST(req: NextRequest) {
  if (Number(req.headers.get('content-length') || 0) > MAKS_ROZMIAR) return pusta(413)
  const surowe = await req.text().catch(() => '')
  if (!surowe) return pusta(400)
  if (surowe.length > MAKS_ROZMIAR) return pusta(413)

  const teraz = Date.now()
  if (liczniki.size > 5000) liczniki.clear()
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || req.headers.get('x-real-ip') || '?'
  if (przekroczony('*', LIMIT_INSTANCJI, teraz) || przekroczony(ip, LIMIT_IP, teraz)) return pusta(429)

  let dane: Record<string, unknown>
  try {
    const j = JSON.parse(surowe)
    if (!j || typeof j !== 'object') return pusta(400)
    dane = j
  } catch {
    return pusta(400)
  }

  const ua = tekst(dane.ua, 300) ?? ''
  console.error('[client-error]', JSON.stringify({
    url: tekst(dane.url, 300),
    name: tekst(dane.name, 100),
    message: tekst(dane.message, 300),
    stack: tekst(dane.stack, 800),
    zrodlo: tekst(dane.zrodlo, 40),
    ua,
    dpl: tekst(dane.dpl, 60),
    ts: typeof dane.ts === 'number' ? dane.ts : null,
    bot: /Googlebot|Google-InspectionTool/i.test(ua),
  }))
  return pusta(204)
}
