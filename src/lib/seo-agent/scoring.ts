/**
 * Claude Scoring — Faza 3
 * Ocenia strony TAKMA w 3 wymiarach: SEO, AEO, GEO (0-100)
 * Model: claude-haiku-4-5-20251001 (~$0.001/call)
 * Scope: top 20 stron z GSC (po kliknięciach)
 */

import Anthropic from '@anthropic-ai/sdk'
import type { GSCPageData, SerpKeywordResult, PageScore, ScoringResult } from './types'

// ---------------------------------------------------------------------------
// Claude client (lazy init)
// ---------------------------------------------------------------------------

function getClient(): Anthropic {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('Brak ANTHROPIC_API_KEY')
  }
  return new Anthropic({ apiKey })
}

// ---------------------------------------------------------------------------
// Score a single page
// ---------------------------------------------------------------------------

async function scorePage(
  client: Anthropic,
  page: GSCPageData,
  serpContext: string,
): Promise<PageScore> {
  const prompt = `Jesteś ekspertem SEO/AEO/GEO dla polskich e-commerce B2B. Oceń stronę na podstawie dostępnych danych.

## Strona do oceny
- URL: ${page.url}
- Kliknięcia (7d): ${page.clicks}
- Wyświetlenia (7d): ${page.impressions}
- CTR: ${(page.ctr * 100).toFixed(1)}%
- Średnia pozycja: ${page.avgPosition.toFixed(1)}
- Zmiana pozycji (vs prev week): ${page.positionDelta > 0 ? '+' : ''}${page.positionDelta.toFixed(1)}
- Zmiana kliknięć: ${page.clicksDelta > 0 ? '+' : ''}${page.clicksDelta}

## Kontekst SERP
${serpContext}

## Zadanie
Oceń stronę w 3 wymiarach (0-100 każdy):

1. **SEO** (Search Engine Optimization):
   - Pozycja w SERP, trend pozycji, CTR vs benchmark
   - Czy CTR jest odpowiedni dla danej pozycji? (pos 1 → ~30% CTR, pos 5 → ~5%)
   - Trend: rośnie/spada/stabilny?

2. **AEO** (Answer Engine Optimization):
   - Czy strona jest gotowa na AI Overviews / featured snippets?
   - Na podstawie URL: czy ma FAQ schema, product schema, structured content?
   - Strony /poradnik/ → wyższy AEO, strony produktowe z FAQ → wyższy AEO

3. **GEO** (Generative Engine Optimization):
   - Czy treść jest cytowalna przez AI (Gemini, ChatGPT, Perplexity)?
   - Strony z E-E-A-T, unikalnymi danymi, eksperckimi FAQ → wyższy GEO
   - Strony kategorii bez unikalnej treści → niższy GEO

Odpowiedz TYLKO w formacie JSON (bez markdown):
{"seo": <0-100>, "aeo": <0-100>, "geo": <0-100>, "reasoning": "<1-2 zdania po polsku>"}`

  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 256,
      messages: [{ role: 'user', content: prompt }],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''

    // Parse JSON response
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      console.warn(`[Scoring] Nie udało się sparsować odpowiedzi dla ${page.url}`)
      return { url: page.url, scoreSeo: 0, scoreAeo: 0, scoreGeo: 0, reasoning: 'Parse error' }
    }

    const parsed = JSON.parse(jsonMatch[0])
    return {
      url: page.url,
      scoreSeo: Math.min(100, Math.max(0, Math.round(parsed.seo || 0))),
      scoreAeo: Math.min(100, Math.max(0, Math.round(parsed.aeo || 0))),
      scoreGeo: Math.min(100, Math.max(0, Math.round(parsed.geo || 0))),
      reasoning: (parsed.reasoning || '').slice(0, 500),
    }
  } catch (err) {
    console.error(`[Scoring] Błąd dla ${page.url}:`, err)
    return { url: page.url, scoreSeo: 0, scoreAeo: 0, scoreGeo: 0, reasoning: `Error: ${err}` }
  }
}

// ---------------------------------------------------------------------------
// Build SERP context string for Claude
// ---------------------------------------------------------------------------

function buildSerpContext(serpResults: SerpKeywordResult[]): string {
  if (serpResults.length === 0) return 'Brak danych SERP.'

  const lines: string[] = []

  // Top pozycje TAKMA
  const takmaInTop10 = serpResults.filter(r => r.takmaPosition !== null && r.takmaPosition <= 10)
  if (takmaInTop10.length > 0) {
    lines.push(`TAKMA w top 10 dla ${takmaInTop10.length}/${serpResults.length} fraz:`)
    for (const r of takmaInTop10.slice(0, 10)) {
      lines.push(`  - "${r.keyword}" → pozycja ${r.takmaPosition}`)
    }
  }

  // Konkurenci — kto dominuje
  const competitorWins: Record<string, number> = {}
  for (const r of serpResults) {
    for (const [comp, pos] of Object.entries(r.competitorPositions)) {
      if (pos !== null && pos <= 10) {
        competitorWins[comp] = (competitorWins[comp] || 0) + 1
      }
    }
  }

  const topCompetitors = Object.entries(competitorWins)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)

  if (topCompetitors.length > 0) {
    lines.push('\nTop konkurenci w top 10:')
    for (const [comp, count] of topCompetitors) {
      lines.push(`  - ${comp}: ${count}/${serpResults.length} fraz`)
    }
  }

  return lines.join('\n')
}

// ---------------------------------------------------------------------------
// Score all pages
// ---------------------------------------------------------------------------

export async function scorePages(
  gscPages: GSCPageData[],
  serpResults: SerpKeywordResult[],
): Promise<ScoringResult> {
  console.log(`[Scoring] Start — ${gscPages.length} stron GSC, ${serpResults.length} fraz SERP`)

  const client = getClient()
  const serpContext = buildSerpContext(serpResults)

  // Top 20 stron z GSC po kliknięciach
  const topPages = [...gscPages]
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 20)

  console.log(`[Scoring] Oceniam top ${topPages.length} stron`)

  // Score pages — batch of 5 at a time to avoid rate limits
  const pageScores: PageScore[] = []

  for (let i = 0; i < topPages.length; i += 5) {
    const batch = topPages.slice(i, i + 5)
    const batchResults = await Promise.all(
      batch.map(page => scorePage(client, page, serpContext))
    )
    pageScores.push(...batchResults)

    // Throttle between batches
    if (i + 5 < topPages.length) {
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }

  // Compute averages
  const validScores = pageScores.filter(s => s.scoreSeo > 0 || s.scoreAeo > 0 || s.scoreGeo > 0)
  const count = validScores.length || 1

  const scoreSeo = Math.round(validScores.reduce((sum, s) => sum + s.scoreSeo, 0) / count)
  const scoreAeo = Math.round(validScores.reduce((sum, s) => sum + s.scoreAeo, 0) / count)
  const scoreGeo = Math.round(validScores.reduce((sum, s) => sum + s.scoreGeo, 0) / count)

  // Weighted: SEO 40%, AEO 30%, GEO 30%
  const scoreOverall = Math.round(scoreSeo * 0.4 + scoreAeo * 0.3 + scoreGeo * 0.3)

  console.log(`[Scoring] Wyniki — Overall: ${scoreOverall}, SEO: ${scoreSeo}, AEO: ${scoreAeo}, GEO: ${scoreGeo}`)

  return {
    pages: pageScores,
    scoreOverall,
    scoreSeo,
    scoreAeo,
    scoreGeo,
  }
}
