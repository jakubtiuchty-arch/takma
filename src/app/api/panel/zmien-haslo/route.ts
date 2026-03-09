import { NextResponse } from 'next/server'
import { getCustomerFromCookie, hashPassword, verifyPassword } from '@/lib/customer-auth'
import { checkPasswordChangeRateLimit, getClientIp } from '@/lib/spam-protection'
import { prisma } from '@/lib/db'

export async function POST(request: Request) {
  const session = await getCustomerFromCookie()
  if (!session) {
    return NextResponse.json({ error: 'Brak autoryzacji' }, { status: 401 })
  }

  const ip = getClientIp(request.headers)
  const rateLimit = checkPasswordChangeRateLimit(ip)
  if (rateLimit.blocked) {
    return NextResponse.json(
      { error: `Zbyt wiele prób zmiany hasła. Spróbuj ponownie za ${Math.ceil((rateLimit.retryAfterSeconds || 3600) / 60)} min.` },
      { status: 429 }
    )
  }

  try {
    const body = await request.json()
    const { currentPassword, newPassword } = body

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Podaj aktualne i nowe haslo' },
        { status: 400 }
      )
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: 'Nowe haslo musi miec minimum 8 znakow' },
        { status: 400 }
      )
    }

    const customer = await prisma.customer.findUnique({
      where: { id: session.customerId },
      select: { hashedPassword: true },
    })

    if (!customer?.hashedPassword) {
      return NextResponse.json(
        { error: 'Konto nie ma ustawionego hasla' },
        { status: 400 }
      )
    }

    const valid = await verifyPassword(currentPassword, customer.hashedPassword)
    if (!valid) {
      return NextResponse.json(
        { error: 'Aktualne haslo jest nieprawidlowe' },
        { status: 400 }
      )
    }

    const newHashed = await hashPassword(newPassword)

    await prisma.customer.update({
      where: { id: session.customerId },
      data: { hashedPassword: newHashed },
    })

    return NextResponse.json({ success: true, message: 'Haslo zostalo zmienione' })
  } catch (err) {
    console.error('[POST /api/panel/zmien-haslo] Error:', err)
    return NextResponse.json(
      { error: 'Blad serwera' },
      { status: 500 }
    )
  }
}
