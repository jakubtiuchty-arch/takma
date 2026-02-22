import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

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

    const adminEmail = process.env.ADMIN_EMAIL || 'takma@takma.com.pl'
    const displayName = productName || partNumber

    // Mail do klienta — potwierdzenie zapisu
    await sendEmail({
      to: email,
      subject: `Powiadomienie o dostępności: ${displayName} — TAKMA`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1e40af;color:white;padding:24px;border-radius:12px 12px 0 0">
            <h1 style="margin:0;font-size:20px">Zapisaliśmy Cię na powiadomienie</h1>
          </div>
          <div style="padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
            <p>Gdy produkt <strong>${displayName}</strong> (PN: ${partNumber}) będzie dostępny, wyślemy Ci wiadomość na adres <strong>${email}</strong>.</p>
            <p style="color:#6b7280;font-size:14px;margin-top:16px">W razie pytań: <a href="mailto:takma@takma.com.pl" style="color:#2563eb">takma@takma.com.pl</a> | <a href="tel:+48607819688" style="color:#2563eb">+48 607 819 688</a></p>
            <p style="color:#6b7280;font-size:14px">Pozdrawiamy,<br><strong>Zespół TAKMA</strong></p>
          </div>
        </div>
      `,
    })

    // Mail do admina — informacja o nowej subskrypcji
    await sendEmail({
      to: adminEmail,
      subject: `[Notify] ${email} → ${partNumber}`,
      html: `
        <div style="font-family:Inter,sans-serif">
          <h2>Nowa subskrypcja powiadomienia</h2>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Produkt:</strong> ${displayName}</p>
          <p><strong>Part Number:</strong> ${partNumber}</p>
          <p><strong>Data:</strong> ${entry.createdAt}</p>
        </div>
      `,
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
