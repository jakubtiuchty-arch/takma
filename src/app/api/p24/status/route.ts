export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

/**
 * Status płatności dla strony potwierdzenia (polling, gdy klient wrócił z P24
 * zanim dotarł webhook). Dopasowanie po numerze zamówienia + p24SessionId —
 * nie ujawnia niczego bez znajomości obu wartości.
 */
export async function GET(request: NextRequest) {
  const orderNumber = request.nextUrl.searchParams.get('order')
  const sid = request.nextUrl.searchParams.get('sid')
  if (!orderNumber || !sid) return NextResponse.json({ paid: false })

  const order = await prisma.order.findFirst({
    where: { orderNumber, p24SessionId: sid },
    select: { status: true },
  })
  return NextResponse.json({ paid: order?.status === 'PAID' })
}
