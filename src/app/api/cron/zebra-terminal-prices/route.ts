import { NextRequest, NextResponse } from 'next/server'
import { zebraTerminalPartNumbers } from '@/lib/zebra-terminal-catalog'
import { lookupUnifiedStock } from '@/lib/unified-stock'

export const maxDuration = 300

/** Odświeżenie pełnej puli terminali przed rozpoczęciem pracy i w ciągu dnia. */
export async function GET(request: NextRequest) {
  if (!process.env.CRON_SECRET || request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const started = Date.now()
  const deadline = started + 270_000
  const partNumbers = Array.from(zebraTerminalPartNumbers)
  let refreshed = 0
  let priced = 0
  const missing: string[] = []
  const errors: string[] = []
  for (let offset = 0; offset < partNumbers.length && Date.now() < deadline; offset += 12) {
    const batch = partNumbers.slice(offset, offset + 12)
    const response = await lookupUnifiedStock(batch, false, { maxWiekCacheMs: 0 })
    if (response.status !== 200 || !response.body.results) {
      errors.push(...batch)
      continue
    }
    refreshed += response.body.results.length
    for (const row of response.body.results) {
      if (row.found && row.price && row.price > 0) priced++
      else missing.push(row.partNumber)
    }
  }
  const complete = refreshed + errors.length === partNumbers.length
  return NextResponse.json({ complete, total: partNumbers.length, refreshed, priced, missing, errors,
    elapsedSeconds: Math.round((Date.now() - started) / 1000) }, { status: complete && !errors.length ? 200 : 503 })
}
