import { NextRequest, NextResponse } from 'next/server'
import { refreshBatch } from '@/lib/allegro/bulk'

export const runtime = 'nodejs'
export const maxDuration = 300
export const dynamic = 'force-dynamic'

/**
 * Masowy re-PATCH opisów żywych ofert (po zmianie szablonu opisu).
 * Autoryzacja: Bearer CRON_SECRET. Poza /admin, więc middleware nie blokuje.
 * Mieli wsadami po 20 (od najdawniej aktualizowanych) w pętli, aż do limitu
 * czasu (~240 s) lub liczby wsadów (?batches=N, domyślnie 20 → ~400 ofert).
 */
export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization')
  if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const start = Date.now()
  const MAX_MS = 240_000
  const maxBatches = Math.max(1, Math.min(50, Number(request.nextUrl.searchParams.get('batches') || '20')))

  let processed = 0
  let succeeded = 0
  let failed = 0
  let batches = 0
  while (batches < maxBatches && Date.now() - start < MAX_MS) {
    const r = await refreshBatch(20)
    processed += r.processed
    succeeded += r.succeeded
    failed += r.failed
    batches++
    if (r.processed === 0) break
  }

  return NextResponse.json({ ok: true, batches, processed, succeeded, failed, elapsedMs: Date.now() - start })
}
