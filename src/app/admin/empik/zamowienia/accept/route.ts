import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { getEmpikOrder, acceptEmpikOrder } from '@/lib/empik/orders'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Akceptacja zamówienia (OR21) — formularz ze strony szczegółów. */
export async function POST(request: Request) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  const form = await request.formData()
  const orderId = String(form.get('orderId') || '').trim()
  const back = new URL(`/admin/empik/zamowienia?order=${encodeURIComponent(orderId)}`, request.url)
  if (!orderId) return NextResponse.redirect(new URL('/admin/empik/zamowienia', request.url), 303)

  try {
    const order = await getEmpikOrder(orderId)
    if (!order) throw new Error('Nie znaleziono zamówienia')
    await acceptEmpikOrder(order)
  } catch (e) {
    back.searchParams.set('err', (e as Error).message)
  }
  return NextResponse.redirect(back, 303)
}
