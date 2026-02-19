import { NextResponse } from 'next/server'
import { getCustomerFromCookie } from '@/lib/customer-auth'
import { prisma } from '@/lib/db'

// GET — pobierz dane zalogowanego klienta
export async function GET() {
  const session = await getCustomerFromCookie()
  if (!session) {
    return NextResponse.json({ error: 'Brak autoryzacji' }, { status: 401 })
  }

  const customer = await prisma.customer.findUnique({
    where: { id: session.customerId },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      company: true,
      nip: true,
      phone: true,
      address: true,
      shippingAddress: true,
      createdAt: true,
    },
  })

  if (!customer) {
    return NextResponse.json({ error: 'Klient nie znaleziony' }, { status: 404 })
  }

  return NextResponse.json(customer)
}

// PUT — aktualizuj dane klienta
export async function PUT(request: Request) {
  const session = await getCustomerFromCookie()
  if (!session) {
    return NextResponse.json({ error: 'Brak autoryzacji' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { firstName, lastName, phone, address, shippingAddress } = body

    if (!firstName?.trim() || !lastName?.trim()) {
      return NextResponse.json(
        { error: 'Imie i nazwisko sa wymagane' },
        { status: 400 }
      )
    }

    const updated = await prisma.customer.update({
      where: { id: session.customerId },
      data: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        phone: phone?.trim() || null,
        address: address?.trim() || null,
        shippingAddress: shippingAddress?.trim() || null,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        company: true,
        nip: true,
        phone: true,
        address: true,
        shippingAddress: true,
      },
    })

    return NextResponse.json(updated)
  } catch (err) {
    console.error('[PUT /api/panel/profil] Error:', err)
    return NextResponse.json(
      { error: 'Blad serwera' },
      { status: 500 }
    )
  }
}
