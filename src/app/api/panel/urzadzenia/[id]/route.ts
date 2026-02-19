import { NextResponse } from 'next/server'
import { getCustomerFromCookie } from '@/lib/customer-auth'
import { prisma } from '@/lib/db'

interface RouteParams {
  params: Promise<{ id: string }>
}

// GET — szczegoly urzadzenia (z weryfikacja ownership)
export async function GET(_request: Request, { params }: RouteParams) {
  const session = await getCustomerFromCookie()
  if (!session) {
    return NextResponse.json({ error: 'Brak autoryzacji' }, { status: 401 })
  }

  const { id } = await params

  const device = await prisma.device.findUnique({
    where: { id },
  })

  if (!device) {
    return NextResponse.json({ error: 'Urzadzenie nie znalezione' }, { status: 404 })
  }

  if (device.customerId !== session.customerId) {
    return NextResponse.json({ error: 'Brak dostepu' }, { status: 403 })
  }

  return NextResponse.json(device)
}

// DELETE — usun urzadzenie (z weryfikacja ownership)
export async function DELETE(_request: Request, { params }: RouteParams) {
  const session = await getCustomerFromCookie()
  if (!session) {
    return NextResponse.json({ error: 'Brak autoryzacji' }, { status: 401 })
  }

  const { id } = await params

  const device = await prisma.device.findUnique({
    where: { id },
    select: { customerId: true },
  })

  if (!device) {
    return NextResponse.json({ error: 'Urzadzenie nie znalezione' }, { status: 404 })
  }

  if (device.customerId !== session.customerId) {
    return NextResponse.json({ error: 'Brak dostepu' }, { status: 403 })
  }

  await prisma.device.delete({ where: { id } })

  return NextResponse.json({ success: true })
}
