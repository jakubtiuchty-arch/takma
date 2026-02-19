import { NextResponse } from 'next/server'
import { getCustomerFromCookie } from '@/lib/customer-auth'
import { prisma } from '@/lib/db'

// GET — lista urzadzen klienta
export async function GET() {
  const session = await getCustomerFromCookie()
  if (!session) {
    return NextResponse.json({ error: 'Brak autoryzacji' }, { status: 401 })
  }

  const devices = await prisma.device.findMany({
    where: { customerId: session.customerId },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(devices)
}
