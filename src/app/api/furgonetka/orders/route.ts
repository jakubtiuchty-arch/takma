import { NextResponse } from 'next/server'
import { listOrders } from '@/lib/allegro/orders'
import { verifyFurgonetkaToken, mapOrderToFurgonetka } from '@/lib/furgonetka'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Furgonetka pobiera nasze zamówienia (opłacone, jeszcze niewysłane) do utworzenia przesyłek.
export async function GET(request: Request) {
  if (!verifyFurgonetkaToken(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const { orders } = await listOrders(50)
    const toShip = orders.filter(
      (o) =>
        o.status === 'READY_FOR_PROCESSING' &&
        o.fulfillment?.status !== 'SENT' &&
        o.fulfillment?.status !== 'PICKED_UP',
    )
    return NextResponse.json(toShip.map(mapOrderToFurgonetka))
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 })
  }
}
