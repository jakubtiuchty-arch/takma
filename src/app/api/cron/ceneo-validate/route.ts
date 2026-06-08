import { NextRequest, NextResponse } from 'next/server'
import { runFeedValidations } from '@/lib/feeds/run'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 120

/**
 * Codzienna walidacja feedów Ceneo + Google Merchant. Autoryzacja Bearer CRON_SECRET.
 * Waliduje feedy bieżącego deploya (origin z requestu), zapisuje wynik i wysyła
 * mail alertowy, gdy któryś feed ma błędy (pusty, spadek ofert, ceny ≤0/za niskie).
 */
export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization')
  if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const results = await runFeedValidations(request.nextUrl.origin, { notify: true })
    return NextResponse.json({ ok: true, results })
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 200 })
  }
}
