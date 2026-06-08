import { NextRequest, NextResponse } from 'next/server'
import { pollShipments } from '@/lib/shipment-tracking'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 120

/**
 * Polling statusów przesyłek Furgonetki → własna oś czasu. Bearer CRON_SECRET.
 * Furgonetka nie ma historii zdarzeń, więc pollujemy bieżący stan i dopisujemy zmiany.
 */
export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization')
  if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const r = await pollShipments()
    return NextResponse.json({ ok: true, ...r })
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 200 })
  }
}
