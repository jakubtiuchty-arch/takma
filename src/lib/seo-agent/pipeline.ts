/**
 * SEO Agent Pipeline — Orchestrator
 * Idempotency check -> collect parallel -> save to DB
 * Graceful degradation: partial data saved if one collector fails
 */

import { prisma } from '@/lib/db'
import { collectGSC } from './collectors/gsc'
import { collectGA4 } from './collectors/ga4'
import type { PipelineResult, CollectedData } from './types'

// ---------------------------------------------------------------------------
// Run pipeline
// ---------------------------------------------------------------------------

export async function runSeoAgentPipeline(): Promise<PipelineResult> {
  const startTime = Date.now()

  // Idempotency: skip if today's COMPLETED report exists
  const todayStart = new Date()
  todayStart.setHours(0, 0, 0, 0)
  const todayEnd = new Date()
  todayEnd.setHours(23, 59, 59, 999)

  const existing = await prisma.seoReport.findFirst({
    where: {
      status: 'COMPLETED',
      generatedAt: { gte: todayStart, lte: todayEnd },
    },
  })

  if (existing) {
    console.log(`[SEO Pipeline] Raport z dzisiaj już istnieje (${existing.id}), skip`)
    return {
      reportId: existing.id,
      status: 'completed',
      duration: Date.now() - startTime,
      gscOk: true,
      ga4Ok: true,
    }
  }

  // Crash recovery: delete stale RUNNING reports (>30 min old)
  const staleThreshold = new Date(Date.now() - 30 * 60 * 1000)
  await prisma.seoReport.deleteMany({
    where: {
      status: 'RUNNING',
      createdAt: { lt: staleThreshold },
    },
  })

  // Create RUNNING report
  const now = new Date()
  const periodEnd = new Date(now)
  periodEnd.setDate(periodEnd.getDate() - 3) // GSC delay
  const periodStart = new Date(periodEnd)
  periodStart.setDate(periodStart.getDate() - 7)

  const report = await prisma.seoReport.create({
    data: {
      status: 'RUNNING',
      periodStart,
      periodEnd,
    },
  })

  console.log(`[SEO Pipeline] Raport ${report.id} — start collection`)

  // Parallel collection
  const [gscResult, ga4Result] = await Promise.allSettled([
    collectGSC(),
    collectGA4(),
  ])

  const gscOk = gscResult.status === 'fulfilled'
  const ga4Ok = ga4Result.status === 'fulfilled'
  const gscData = gscOk ? gscResult.value : null
  const ga4Data = ga4Ok ? ga4Result.value : null

  if (gscResult.status === 'rejected') {
    console.error('[SEO Pipeline] GSC collector failed:', gscResult.reason)
  }
  if (ga4Result.status === 'rejected') {
    console.error('[SEO Pipeline] GA4 collector failed:', ga4Result.reason)
  }

  // Both failed = mark as FAILED
  if (!gscOk && !ga4Ok) {
    const errorMsg = [
      gscResult.status === 'rejected' ? `GSC: ${gscResult.reason}` : '',
      ga4Result.status === 'rejected' ? `GA4: ${ga4Result.reason}` : '',
    ].filter(Boolean).join('; ')

    await prisma.seoReport.update({
      where: { id: report.id },
      data: {
        status: 'FAILED',
        errorMessage: errorMsg,
      },
    })

    return {
      reportId: report.id,
      status: 'failed',
      duration: Date.now() - startTime,
      gscOk: false,
      ga4Ok: false,
      error: errorMsg,
    }
  }

  // Build collected data blob
  const collectedData: CollectedData = {
    gsc: gscData,
    ga4: ga4Data,
    collectedAt: now.toISOString(),
  }

  // Compute basic metrics for history
  const totalClicks = gscData?.pages.reduce((sum, p) => sum + p.clicks, 0) ?? null
  const totalImpressions = gscData?.pages.reduce((sum, p) => sum + p.impressions, 0) ?? null
  const avgCtr = gscData && gscData.pages.length > 0
    ? gscData.pages.reduce((sum, p) => sum + p.ctr, 0) / gscData.pages.length
    : null
  const avgPosition = gscData && gscData.pages.length > 0
    ? gscData.pages.reduce((sum, p) => sum + p.avgPosition, 0) / gscData.pages.length
    : null
  const totalSessions = ga4Data?.pages.reduce((sum, p) => sum + p.sessions, 0) ?? null
  const totalConversions = ga4Data?.pages.reduce((sum, p) => sum + p.conversions, 0) ?? null

  // Count alerts from GSC
  const gscAlerts = gscData?.alerts
  let alertsCount = 0

  // Save everything in a transaction
  await prisma.$transaction(async (tx) => {
    // Update report
    await tx.seoReport.update({
      where: { id: report.id },
      data: {
        status: 'COMPLETED',
        reportJson: JSON.parse(JSON.stringify(collectedData)),
        alertsCount,
      },
    })

    // Create metrics history entry
    await tx.seoMetricsHistory.create({
      data: {
        reportId: report.id,
        date: now,
        totalClicks,
        totalImpressions,
        avgCtr,
        avgPosition,
        totalSessions,
        totalConversions,
      },
    })

    // Create alerts from GSC data
    if (gscAlerts) {
      const alertsToCreate = []

      for (const page of gscAlerts.droppedPages) {
        alertsToCreate.push({
          reportId: report.id,
          severity: 'WARNING' as const,
          category: 'ranking',
          title: `Spadek pozycji: ${page}`,
          description: `Strona spadła o więcej niż 5 pozycji w wynikach wyszukiwania.`,
          action: 'Sprawdź zmiany na stronie i w wynikach wyszukiwania.',
        })
      }

      for (const page of gscAlerts.ctrDrops) {
        alertsToCreate.push({
          reportId: report.id,
          severity: 'WARNING' as const,
          category: 'ranking',
          title: `Spadek CTR: ${page}`,
          description: `CTR strony spadł o więcej niż 20% w porównaniu do poprzedniego tygodnia.`,
          action: 'Sprawdź title i meta description strony.',
        })
      }

      for (const page of gscAlerts.newRankings) {
        alertsToCreate.push({
          reportId: report.id,
          severity: 'INFO' as const,
          category: 'ranking',
          title: `Nowy ranking w top 20: ${page}`,
          description: `Strona pojawiła się w top 20 wyników wyszukiwania.`,
          action: 'Monitoruj dalszy wzrost pozycji.',
        })
      }

      if (alertsToCreate.length > 0) {
        await tx.seoAlert.createMany({ data: alertsToCreate })
        alertsCount = alertsToCreate.length

        // Update alertsCount on report
        await tx.seoReport.update({
          where: { id: report.id },
          data: { alertsCount },
        })
      }
    }
  })

  const duration = Date.now() - startTime
  console.log(`[SEO Pipeline] Raport ${report.id} — COMPLETED w ${duration}ms (GSC: ${gscOk ? 'OK' : 'FAIL'}, GA4: ${ga4Ok ? 'OK' : 'FAIL'})`)

  return {
    reportId: report.id,
    status: 'completed',
    duration,
    gscOk,
    ga4Ok,
  }
}
