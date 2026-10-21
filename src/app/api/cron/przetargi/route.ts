import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { BUILTIN_SOURCES, syncSource, syncPlatform } from '@/lib/tenders/sources'
import { sendTenderDigest } from '@/lib/tenders/digest'
import { analyzeOne } from '@/lib/tenders/analysis'

export const maxDuration = 300
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!process.env.CRON_SECRET || request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (request.nextUrl.searchParams.get('dry') === '1') return NextResponse.json({ dry: true, pending: await prisma.tender.count({ where: { analysisStatus: { in: ['pending', 'error'] } } }), sources: await prisma.tenderSource.findMany({ where: { id: { notIn: ['_lock', '_digest'] } } }) })
  const start = Date.now()
  await prisma.tenderSource.upsert({ where: { id: '_lock' }, create: { id: '_lock', name: 'Blokada synchronizacji' }, update: {} })
  const lock = await prisma.tenderSource.updateMany({ where: { id: '_lock', OR: [{ lastAttemptAt: null }, { lastAttemptAt: { lt: new Date(start - 360000) } }] }, data: { lastAttemptAt: new Date(start) } })
  if (!lock.count) return NextResponse.json({ ok: true, running: true })
  try {
    const recent = BUILTIN_SOURCES.map(s => ({ id: `RECENT/${s.id}`, name: `${s.name} — nowe dzisiaj` }))
    for (const s of [...BUILTIN_SOURCES, ...recent]) await prisma.tenderSource.upsert({ where: { id: s.id }, create: s, update: {} })
    // Źródła są niezależne. Każda ukończona strona jest zapisana przed przesunięciem kursora.
    if (request.nextUrl.searchParams.get('only') !== 'analysis') {
      await Promise.all(recent.map(s => syncSource(s.id, start + 30000)))
      await Promise.all(BUILTIN_SOURCES.map(s => syncSource(s.id, start + 85000)))
    }
    const platforms = await prisma.tenderSource.findMany({ where: { url: { not: null }, enabled: true } })
    for (const s of platforms) {
      if (Date.now() > start + 100000) break
      await syncPlatform(s.id)
    }
    let analyzed = 0, failed = 0
    while (Date.now() < start + 170000) {
      const target = request.nextUrl.searchParams.get('id')
      const n = await prisma.tender.findFirst({ where: target ? { id: target } : {
        nextCheckAt: { lte: new Date() },
        OR: [{ analysisStatus: { in: ['pending', 'error'] } }, { submittingOffersDate: { gte: new Date() }, analyzedAt: { lt: new Date(Date.now() - 24 * 3600000) } }, { submittingOffersDate: null, analyzedAt: { lt: new Date(Date.now() - 24 * 3600000) } }],
      }, orderBy: [{ status: 'desc' }, { publicationDate: 'desc' }, { nextCheckAt: 'asc' }] })
      if (!n) break
      const result = await analyzeOne(n.id, start + 265000)
      analyzed++; if (!result.ok) failed++
      if (request.nextUrl.searchParams.get('id')) break
    }
    if (request.nextUrl.searchParams.get('notify') !== '0') await sendTenderDigest()
    const sources = await prisma.tenderSource.findMany({ where: { id: { notIn: ['_lock', '_digest'] } } })
    const pending = await prisma.tender.count({ where: { analysisStatus: { in: ['pending', 'error'] } } })
    return NextResponse.json({ ok: !sources.some(s => s.error), analyzed, failed, pending, sources })
  } finally {
    await prisma.tenderSource.updateMany({ where: { id: '_lock', lastAttemptAt: new Date(start) }, data: { lastAttemptAt: null } })
  }
}
