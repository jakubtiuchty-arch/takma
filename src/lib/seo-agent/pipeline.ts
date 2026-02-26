/**
 * SEO Agent Pipeline — Orchestrator (Faza 1 + 2 + 3)
 * Idempotency check -> collect parallel (GSC + GA4 + SERP) -> competitors -> scoring -> save to DB
 * Graceful degradation: partial data saved if collectors fail
 */

import { prisma } from '@/lib/db'
import { collectGSC } from './collectors/gsc'
import { collectGA4 } from './collectors/ga4'
import { collectSERP } from './collectors/serp'
import { collectCompetitors } from './collectors/competitor'
import { scorePages } from './scoring'
import type { PipelineResult, CollectedData } from './types'
import type { Prisma } from '@/generated/prisma/client'

// ---------------------------------------------------------------------------
// Filtr starych URL-ów WooCommerce
// ---------------------------------------------------------------------------

const LEGACY_URL_PATTERNS = [
  '/product/',
  '/shop/',
  '?p=',
  '/wp-content/',
  '/wp-json/',
  '/koszyk/',
  '/moje-konto/',
]

function isLegacyUrl(url: string): boolean {
  return LEGACY_URL_PATTERNS.some(pattern => url.includes(pattern))
}

// ---------------------------------------------------------------------------
// Run pipeline
// ---------------------------------------------------------------------------

export async function runSeoAgentPipeline(force = false): Promise<PipelineResult> {
  const startTime = Date.now()

  // Idempotency: skip if today's COMPLETED report exists (unless forced)
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

  if (existing && !force) {
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

  console.log(`[SEO Pipeline] Raport ${report.id} — start collection (Faza 1+2+3)`)

  // -----------------------------------------------------------------------
  // Faza 1: GSC + GA4 (parallel)
  // Faza 2: SERP (parallel with GSC/GA4)
  // -----------------------------------------------------------------------

  const [gscResult, ga4Result, serpResult] = await Promise.allSettled([
    collectGSC(),
    collectGA4(),
    collectSERP(),
  ])

  const gscOk = gscResult.status === 'fulfilled'
  const ga4Ok = ga4Result.status === 'fulfilled'
  const serpOk = serpResult.status === 'fulfilled'
  const gscData = gscOk ? gscResult.value : null
  const ga4Data = ga4Ok ? ga4Result.value : null
  const serpData = serpOk ? serpResult.value : null

  if (gscResult.status === 'rejected') {
    console.error('[SEO Pipeline] GSC collector failed:', gscResult.reason)
  }
  if (ga4Result.status === 'rejected') {
    console.error('[SEO Pipeline] GA4 collector failed:', ga4Result.reason)
  }
  if (serpResult.status === 'rejected') {
    console.error('[SEO Pipeline] SERP collector failed:', serpResult.reason)
  }

  // All failed = mark as FAILED (GSC + GA4 both down = no data at all)
  if (!gscOk && !ga4Ok) {
    const errorMsg = [
      gscResult.status === 'rejected' ? `GSC: ${gscResult.reason}` : '',
      ga4Result.status === 'rejected' ? `GA4: ${ga4Result.reason}` : '',
      serpResult.status === 'rejected' ? `SERP: ${serpResult.reason}` : '',
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

  // -----------------------------------------------------------------------
  // Faza 2B: Competitors (requires SERP results)
  // -----------------------------------------------------------------------

  let competitorData = null
  if (serpData) {
    try {
      competitorData = await collectCompetitors(serpData.results)
    } catch (err) {
      console.error('[SEO Pipeline] Competitor collector failed:', err)
    }
  }

  // -----------------------------------------------------------------------
  // Faza 3: Claude Scoring (requires GSC + optional SERP)
  // -----------------------------------------------------------------------

  let scoringResult = null
  if (gscData && gscData.pages.length > 0) {
    try {
      scoringResult = await scorePages(
        gscData.pages,
        serpData?.results ?? [],
      )
    } catch (err) {
      console.error('[SEO Pipeline] Claude scoring failed:', err)
    }
  }

  // -----------------------------------------------------------------------
  // Build collected data blob
  // -----------------------------------------------------------------------

  const collectedData: CollectedData = {
    gsc: gscData,
    ga4: ga4Data,
    serp: serpData,
    competitors: competitorData,
    scoring: scoringResult,
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

  // Scoring → previous report delta
  const previousReport = await prisma.seoReport.findFirst({
    where: { status: 'COMPLETED', id: { not: report.id } },
    orderBy: { generatedAt: 'desc' },
    select: { scoreOverall: true },
  })
  const scoreDelta = scoringResult && previousReport
    ? scoringResult.scoreOverall - previousReport.scoreOverall
    : 0

  // -----------------------------------------------------------------------
  // Build alerts (with WooCommerce URL filter)
  // -----------------------------------------------------------------------

  const gscAlerts = gscData?.alerts
  let alertsCount = 0

  // Save everything in a transaction
  await prisma.$transaction(async (tx) => {
    // Update report with scores
    await tx.seoReport.update({
      where: { id: report.id },
      data: {
        status: 'COMPLETED',
        reportJson: JSON.parse(JSON.stringify(collectedData)),
        scoreOverall: scoringResult?.scoreOverall ?? 0,
        scoreSeo: scoringResult?.scoreSeo ?? 0,
        scoreAeo: scoringResult?.scoreAeo ?? 0,
        scoreGeo: scoringResult?.scoreGeo ?? 0,
        scoreDelta,
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

    // -----------------------------------------------------------------------
    // SERP positions → SeoSerpPosition
    // -----------------------------------------------------------------------

    if (serpData && serpData.results.length > 0) {
      await tx.seoSerpPosition.createMany({
        data: serpData.results.map(r => ({
          reportId: report.id,
          keyword: r.keyword,
          keywordGroup: r.keywordGroup,
          takmaPosition: r.takmaPosition,
          competitorPositions: r.competitorPositions as Prisma.InputJsonValue,
          hasRichSnippet: r.hasRichSnippet,
        })),
      })
    }

    // -----------------------------------------------------------------------
    // Competitor snapshots → SeoCompetitorSnapshot
    // -----------------------------------------------------------------------

    if (competitorData && competitorData.snapshots.length > 0) {
      // Check contentChanged vs previous snapshots
      const prevSnapshots = await tx.seoCompetitorSnapshot.findMany({
        where: { competitor: { in: competitorData.snapshots.map(s => s.competitor) } },
        orderBy: { createdAt: 'desc' },
        distinct: ['competitor'],
        select: { competitor: true, contentHash: true },
      })
      const prevHashMap = new Map(prevSnapshots.map(s => [s.competitor, s.contentHash]))

      await tx.seoCompetitorSnapshot.createMany({
        data: competitorData.snapshots.map(s => ({
          reportId: report.id,
          competitor: s.competitor,
          url: s.url,
          title: s.title || null,
          metaDescription: s.metaDescription || null,
          contentLength: s.contentLength,
          hasPrice: s.hasPrice,
          price: s.price !== null ? String(s.price) : null,
          hasFaq: s.hasFaq,
          faqCount: s.faqCount,
          hasSchema: s.hasSchema,
          schemaTypes: s.schemaTypes,
          contentHash: s.contentHash || null,
          contentChanged: prevHashMap.has(s.competitor)
            ? prevHashMap.get(s.competitor) !== s.contentHash
            : false,
        })),
      })
    }

    // -----------------------------------------------------------------------
    // Alerts — z filtrem WooCommerce URL-ów
    // -----------------------------------------------------------------------

    const alertsToCreate = []

    if (gscAlerts) {
      for (const page of gscAlerts.droppedPages) {
        if (isLegacyUrl(page)) continue // Filtr starych URL-ów
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
        if (isLegacyUrl(page)) continue
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
        if (isLegacyUrl(page)) continue
        alertsToCreate.push({
          reportId: report.id,
          severity: 'INFO' as const,
          category: 'ranking',
          title: `Nowy ranking w top 20: ${page}`,
          description: `Strona pojawiła się w top 20 wyników wyszukiwania.`,
          action: 'Monitoruj dalszy wzrost pozycji.',
        })
      }
    }

    // SERP alerts: spadki pozycji fraz
    if (serpData) {
      // Pobierz poprzednie pozycje SERP z ostatniego raportu
      const prevSerpPositions = await tx.seoSerpPosition.findMany({
        where: {
          reportId: previousReport ? { not: report.id } : undefined,
        },
        orderBy: { createdAt: 'desc' },
        distinct: ['keyword'],
        select: { keyword: true, takmaPosition: true },
      })
      const prevPositionMap = new Map(prevSerpPositions.map(s => [s.keyword, s.takmaPosition]))

      for (const result of serpData.results) {
        const prevPos = prevPositionMap.get(result.keyword)

        // Utrata pozycji w top 10
        if (prevPos !== undefined && prevPos !== null && prevPos <= 10 &&
            (result.takmaPosition === null || result.takmaPosition > 10)) {
          alertsToCreate.push({
            reportId: report.id,
            severity: 'WARNING' as const,
            category: 'serp',
            title: `Wypadnięcie z top 10: "${result.keyword}"`,
            description: `Fraza wypadła z top 10 (była: ${prevPos}, teraz: ${result.takmaPosition ?? 'brak w top 30'}).`,
            action: 'Sprawdź treść strony i konkurencję.',
          })
        }

        // Nowa pozycja w top 10
        if (result.takmaPosition !== null && result.takmaPosition <= 10 &&
            (prevPos === undefined || prevPos === null || prevPos > 10)) {
          alertsToCreate.push({
            reportId: report.id,
            severity: 'INFO' as const,
            category: 'serp',
            title: `Nowa pozycja w top 10: "${result.keyword}"`,
            description: `Fraza weszła do top 10 (pozycja ${result.takmaPosition}).`,
            action: 'Monitoruj stabilność pozycji.',
          })
        }
      }
    }

    // Competitor change alerts
    if (competitorData) {
      const prevHashMap = new Map<string, string>()
      const prevSnapshots = await tx.seoCompetitorSnapshot.findMany({
        where: { reportId: { not: report.id } },
        orderBy: { createdAt: 'desc' },
        distinct: ['competitor'],
        select: { competitor: true, contentHash: true },
      })
      for (const s of prevSnapshots) {
        if (s.contentHash) prevHashMap.set(s.competitor, s.contentHash)
      }

      for (const snap of competitorData.snapshots) {
        if (prevHashMap.has(snap.competitor) && prevHashMap.get(snap.competitor) !== snap.contentHash) {
          alertsToCreate.push({
            reportId: report.id,
            severity: 'INFO' as const,
            category: 'competitor',
            title: `Zmiana u konkurenta: ${snap.competitor}`,
            description: `Wykryto zmianę treści na stronie ${snap.url}.`,
            action: 'Sprawdź co się zmieniło u konkurenta.',
          })
        }
      }
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
  })

  const duration = Date.now() - startTime
  console.log(
    `[SEO Pipeline] Raport ${report.id} — COMPLETED w ${duration}ms` +
    ` (GSC: ${gscOk ? 'OK' : 'FAIL'}, GA4: ${ga4Ok ? 'OK' : 'FAIL'}` +
    `, SERP: ${serpOk ? 'OK' : 'FAIL'}, Scoring: ${scoringResult ? 'OK' : 'SKIP'})`
  )

  return {
    reportId: report.id,
    status: 'completed',
    duration,
    gscOk,
    ga4Ok,
  }
}
