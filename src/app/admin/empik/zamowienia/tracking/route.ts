import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { shipEmpikOrder } from '@/lib/empik/orders'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Tracking + oznaczenie jako wysłane (OR23 + OR24). */
export async function POST(request: Request) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  const form = await request.formData()
  const orderId = String(form.get('orderId') || '').trim()
  const carrier = String(form.get('carrier') || '').trim()
  const tracking = String(form.get('tracking') || '').trim()
  const back = new URL(`/admin/empik/zamowienia?order=${encodeURIComponent(orderId)}`, request.url)
  if (!orderId || !carrier || !tracking) {
    back.searchParams.set('err', 'Podaj przewoźnika i numer śledzenia.')
    return NextResponse.redirect(back, 303)
  }

  try {
    await shipEmpikOrder(orderId, carrier, tracking)
  } catch (e) {
    back.searchParams.set('err', (e as Error).message)
  }
  return NextResponse.redirect(back, 303)
}
