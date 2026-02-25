/**
 * GET /api/admin/seo-agent/reports
 * Lista raportów SEO Agent (bez reportJson — za duży na listę)
 */

import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  // Auth: admin session
  const sessionCookie = request.cookies.get('admin-session')?.value
  if (!sessionCookie) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const session = await verifySession(sessionCookie)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const reports = await prisma.seoReport.findMany({
    orderBy: { generatedAt: 'desc' },
    take: 20,
    select: {
      id: true,
      generatedAt: true,
      periodStart: true,
      periodEnd: true,
      status: true,
      scoreOverall: true,
      scoreSeo: true,
      scoreAeo: true,
      scoreGeo: true,
      scoreDelta: true,
      alertsCount: true,
      errorMessage: true,
      createdAt: true,
      // NOTE: reportJson excluded intentionally (too large for list)
    },
  })

  return NextResponse.json({ reports })
}
