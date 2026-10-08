import { NextRequest, NextResponse } from 'next/server'
import { getProductBySlug } from '@/data/products'
import { lookupUnifiedStock } from '@/lib/unified-stock'
export const maxDuration = 120
export async function GET(request: NextRequest) {
  if (!process.env.CRON_SECRET || request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const pns = getProductBySlug('zebra-tc201')!.variants!.map(v => v.partNumber)
  const result = await lookupUnifiedStock(pns, false, { maxWiekCacheMs: 0 })
  return NextResponse.json({ total: pns.length, found: result.body.results?.filter(r => r.found).length ?? 0 }, { status: result.status })
}
