import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSessionFromCookie } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Wewnętrzny znacznik „Zrealizowano" (dział realizacji) — toggle.
export async function POST(request: Request) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  let orderId: string | undefined
  let fulfilled = false
  try {
    const body = await request.json()
    orderId = typeof body?.orderId === 'string' ? body.orderId : undefined
    fulfilled = body?.fulfilled === true
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowe body.' }, { status: 400 })
  }
  if (!orderId) return NextResponse.json({ error: 'Brak orderId.' }, { status: 400 })

  await prisma.allegroOrderNotified.upsert({
    where: { orderId },
    create: { orderId, fulfilled, fulfilledAt: fulfilled ? new Date() : null },
    update: { fulfilled, fulfilledAt: fulfilled ? new Date() : null },
  })
  return NextResponse.json({ ok: true, fulfilled })
}
