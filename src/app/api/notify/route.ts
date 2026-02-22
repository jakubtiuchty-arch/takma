import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'
import { buildNotifySubscriptionEmail, buildAdminNotifySubscriptionEmail } from '@/lib/email-templates'

/**
 * POST /api/notify
 *
 * Zapisuje prośbę o powiadomienie o dostępności produktu.
 * Body: { email, partNumber, productName }
 */

// In-memory store (na start — można potem podpiąć bazę danych)
const notifications: {
  email: string
  partNumber: string
  productName: string
  createdAt: string
}[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, partNumber, productName } = body

    if (!email || !partNumber) {
      return NextResponse.json(
        { error: 'Wymagane pola: email, partNumber' },
        { status: 400 }
      )
    }

    // Prosta walidacja email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Nieprawidłowy adres email' },
        { status: 400 }
      )
    }

    // Sprawdź czy już zapisany
    const existing = notifications.find(
      n => n.email === email && n.partNumber === partNumber
    )
    if (existing) {
      return NextResponse.json({ ok: true, message: 'Już zapisano' })
    }

    const entry = {
      email,
      partNumber,
      productName: productName || '',
      createdAt: new Date().toISOString(),
    }

    notifications.push(entry)
    console.log(`[Notify] Nowa subskrypcja: ${email} → ${partNumber}`)

    const adminEmail = process.env.ADMIN_EMAIL || 'jakub.tiuchty@takma.com.pl'
    const displayName = productName || partNumber

    // Mail do klienta — potwierdzenie zapisu
    await sendEmail({
      to: email,
      subject: `Powiadomienie o dostępności: ${displayName} — TAKMA`,
      html: buildNotifySubscriptionEmail({ email, displayName, partNumber }),
    })

    // Mail do admina — informacja o nowej subskrypcji
    await sendEmail({
      to: adminEmail,
      subject: `[Notify] ${email} → ${partNumber}`,
      html: buildAdminNotifySubscriptionEmail({ email, displayName, partNumber, createdAt: entry.createdAt }),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'Błąd przetwarzania żądania' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Prosty endpoint do podglądu subskrypcji (do usunięcia w produkcji lub zabezpieczenia)
  return NextResponse.json({
    count: notifications.length,
    notifications,
  })
}
