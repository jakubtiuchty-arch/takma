/**
 * /admin/seo-agent — Dashboard Server Component
 * Parallel Prisma queries -> props for Client Components
 * Faza 1 + 2 + 3: GSC metrics, alerts, SERP positions, scores
 */

import { prisma } from '@/lib/db'
import Dashboard from '@/components/admin/seo-agent/Dashboard'

export const dynamic = 'force-dynamic'

export default async function SeoAgentPage() {
  // First: get latest report ID (needed for SERP query)
  const latestReport = await prisma.seoReport.findFirst({
    where: { status: 'COMPLETED' },
    orderBy: { generatedAt: 'desc' },
    select: {
      id: true,
      generatedAt: true,
      periodStart: true,
      periodEnd: true,
      scoreOverall: true,
      scoreSeo: true,
      scoreAeo: true,
      scoreGeo: true,
      scoreDelta: true,
      alertsCount: true,
      status: true,
    },
  })

  // Then: parallel queries for metrics, alerts, and SERP positions
  const [recentMetrics, unreadAlerts, serpPositions] = await Promise.all([
    prisma.seoMetricsHistory.findMany({
      orderBy: { date: 'desc' },
      take: 16,
      select: {
        date: true,
        totalClicks: true,
        totalImpressions: true,
        avgCtr: true,
        avgPosition: true,
        totalSessions: true,
        totalConversions: true,
      },
    }),

    prisma.seoAlert.findMany({
      where: {
        isRead: false,
        // Filtruj stare URL-e WooCommerce
        NOT: {
          OR: [
            { title: { contains: '/product/' } },
            { title: { contains: '/shop/' } },
            { title: { contains: '?p=' } },
          ],
        },
      },
      orderBy: [{ severity: 'asc' }, { createdAt: 'desc' }],
      take: 10,
      select: {
        id: true,
        severity: true,
        category: true,
        title: true,
        description: true,
        action: true,
        createdAt: true,
      },
    }),

    // SERP positions from latest report
    latestReport
      ? prisma.seoSerpPosition.findMany({
          where: { reportId: latestReport.id },
          orderBy: { keyword: 'asc' },
          select: {
            keyword: true,
            keywordGroup: true,
            takmaPosition: true,
            competitorPositions: true,
          },
        })
      : Promise.resolve([]),
  ])

  const runSecret = process.env.CRON_SECRET || ''

  return (
    <Dashboard
      runSecret={runSecret}
      latestReport={latestReport ? {
        ...latestReport,
        generatedAt: latestReport.generatedAt.toISOString(),
        periodStart: latestReport.periodStart.toISOString(),
        periodEnd: latestReport.periodEnd.toISOString(),
      } : null}
      recentMetrics={recentMetrics.map(m => ({
        ...m,
        date: m.date.toISOString(),
      })).reverse()}
      unreadAlerts={unreadAlerts.map(a => ({
        ...a,
        severity: a.severity as 'CRITICAL' | 'WARNING' | 'INFO',
        createdAt: a.createdAt.toISOString(),
      }))}
      serpPositions={serpPositions.map(s => ({
        ...s,
        keywordGroup: s.keywordGroup ?? '',
        competitorPositions: s.competitorPositions as Record<string, number | null>,
      }))}
    />
  )
}
