import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { gaConfigured, gaRealtime } from '@/lib/ga'
import { prisma } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export interface LiveIp {
  ip: string
  path: string
  city: string | null
  country: string | null
  minutesAgo: number
}

/** Świeże IP z logu odwiedzin (ostatnie 10 min, unikalne IP) + sprzątanie >48 h. */
async function recentIps(): Promise<LiveIp[]> {
  const now = Date.now()
  // retencja: skasuj wpisy starsze niż 48 h (RODO — minimalna retencja)
  await prisma.liveVisitor
    .deleteMany({ where: { createdAt: { lt: new Date(now - 48 * 3600 * 1000) } } })
    .catch(() => {})

  const rows = await prisma.liveVisitor.findMany({
    where: { createdAt: { gte: new Date(now - 10 * 60 * 1000) } },
    orderBy: { createdAt: 'desc' },
    take: 500,
  })
  const seen = new Set<string>()
  const out: LiveIp[] = []
  for (const r of rows) {
    if (seen.has(r.ip)) continue // tylko najświeższy wpis per IP
    seen.add(r.ip)
    out.push({
      ip: r.ip,
      path: r.path,
      city: r.city,
      country: r.country,
      minutesAgo: Math.floor((now - r.createdAt.getTime()) / 60000),
    })
  }
  return out.slice(0, 50)
}

/** Dane „Na żywo" dla panelu /admin/analytics — pollowane co 30 s z klienta. */
export async function GET() {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  try {
    const [ga, liveIps] = await Promise.all([
      gaConfigured() ? gaRealtime() : Promise.resolve(null),
      recentIps().catch(() => [] as LiveIp[]),
    ])
    return NextResponse.json({ ...(ga || {}), liveIps }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 502 })
  }
}
