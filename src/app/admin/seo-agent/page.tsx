/**
 * /admin/seo-agent — Dashboard Server Component
 * 3 parallel Prisma queries -> props for Client Components
 */

import { prisma } from '@/lib/db'
import Dashboard from '@/components/admin/seo-agent/Dashboard'

export const dynamic = 'force-dynamic'

export default async function SeoAgentPage() {
  // 3 parallel queries
  const [latestReport, recentMetrics, unreadAlerts] = await Promise.all([
    prisma.seoReport.findFirst({
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
    }),

    prisma.seoMetricsHistory.findMany({
      orderBy: { date: 'desc' },
      take: 16, // 8 reports = 16 entries max
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
      where: { isRead: false },
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
  ])

  return (
    <Dashboard
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
    />
  )
}
