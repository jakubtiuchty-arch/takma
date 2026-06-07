import { NextResponse } from 'next/server'
import { bulkPublishBatch } from '@/lib/allegro/bulk'

export const runtime = 'nodejs'
export const maxDuration = 300
export const dynamic = 'force-dynamic'

/**
 * Hurtowe wystawianie taśm + etykiet (z GTIN) wsadami. Włączane env
 * ALLEGRO_BULK_PUBLISH=true. Co kilka minut publikuje kolejną paczkę,
 * aż wystawi wszystko (potem idle). Po zakończeniu można wyłączyć flagę.
 */
export async function GET() {
  if (process.env.ALLEGRO_BULK_PUBLISH !== 'true') {
    return NextResponse.json({ ok: true, disabled: true })
  }
  try {
    const progress = await bulkPublishBatch(30)
    return NextResponse.json({ ok: true, ...progress })
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 200 })
  }
}
