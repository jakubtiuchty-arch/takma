import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSessionFromCookie } from '@/lib/auth'
import { addShipment } from '@/lib/allegro/orders'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Ręczne dodanie numeru listu (spoza Furgonetki) + wysłanie do Allegro,
// żeby kupujący widział przesyłkę.
export async function POST(request: Request) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  let orderId = ''
  let waybill = ''
  let courier = ''
  try {
    const body = await request.json()
    orderId = String(body?.orderId || '').trim()
    waybill = String(body?.waybill || '').trim()
    courier = String(body?.courier || '').trim()
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowe body.' }, { status: 400 })
  }
  if (!orderId || !waybill) return NextResponse.json({ error: 'Podaj numer listu (i przewoźnika).' }, { status: 400 })

  try {
    await addShipment(orderId, waybill, courier)
    await prisma.allegroOrderNotified.upsert({
      where: { orderId },
      create: { orderId, trackingNumber: waybill },
      update: { trackingNumber: waybill },
    })
    return NextResponse.json({ ok: true, waybill })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 422 })
  }
}
