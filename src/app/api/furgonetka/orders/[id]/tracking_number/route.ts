import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { addShipment } from '@/lib/allegro/orders'
import { verifyFurgonetkaToken } from '@/lib/furgonetka'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Furgonetka odsyła numer listu po utworzeniu przesyłki → wpinamy go w zamówienie Allegro.
// Body: { "tracking": { "number": "...", "courierService": "..." } }
async function handle(request: Request, id: string) {
  if (!verifyFurgonetkaToken(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  let number = ''
  let courierService = ''
  try {
    const body = await request.json()
    number = String(body?.tracking?.number || body?.number || '').trim()
    courierService = String(body?.tracking?.courierService || body?.courierService || '').trim()
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }
  if (!number) return NextResponse.json({ error: 'Missing tracking number' }, { status: 400 })

  try {
    await addShipment(id, number, courierService)
    await prisma.allegroOrderNotified.upsert({
      where: { orderId: id },
      create: { orderId: id, trackingNumber: number },
      update: { trackingNumber: number },
    })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 422 })
  }
}

export async function POST(request: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params
  return handle(request, id)
}

export async function PUT(request: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params
  return handle(request, id)
}
