import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Beacon „kto teraz na stronie" — klient POST-uje { path } przy każdej nawigacji,
 * serwer odczytuje IP i miasto z nagłówków Vercela i zapisuje wpis.
 * Tylko do wewnętrznego podglądu w /admin/analytics. Retencja 48 h
 * (kasowanie starych wpisów dzieje się przy odczycie po stronie admina).
 */
export async function POST(req: NextRequest) {
  try {
    const { path } = (await req.json().catch(() => ({}))) as { path?: string }
    if (!path || path.startsWith('/admin') || path.startsWith('/panel')) {
      return NextResponse.json({ ok: true })
    }
    // IP: pierwszy z X-Forwarded-For (Vercel), fallback na real-ip
    const xff = req.headers.get('x-forwarded-for') || ''
    const ip = xff.split(',')[0].trim() || req.headers.get('x-real-ip') || ''
    if (!ip) return NextResponse.json({ ok: true })

    const dec = (v: string | null) => {
      try { return v ? decodeURIComponent(v) : null } catch { return v }
    }
    await prisma.liveVisitor.create({
      data: {
        ip,
        path: path.slice(0, 300),
        city: dec(req.headers.get('x-vercel-ip-city')),
        country: req.headers.get('x-vercel-ip-country'),
      },
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true })
  }
}
