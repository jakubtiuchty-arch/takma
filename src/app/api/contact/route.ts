import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

const REASON_LABELS: Record<string, string> = {
  quote: 'Zapytanie ofertowe',
  support: 'Wsparcie techniczne',
  service: 'Serwis / Naprawa',
  partnership: 'Współpraca',
  other: 'Inne',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, reason, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Wymagane pola: name, email, message' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Nieprawidłowy adres email' },
        { status: 400 }
      )
    }

    const reasonLabel = REASON_LABELS[reason] || reason || 'Brak tematu'
    const adminEmail = process.env.ADMIN_EMAIL || 'takma@takma.com.pl'

    // Send notification to admin
    await sendEmail({
      to: adminEmail,
      subject: `[Kontakt] ${reasonLabel} — ${name}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1e40af;color:white;padding:24px;border-radius:12px 12px 0 0">
            <h1 style="margin:0;font-size:20px">Nowa wiadomość z formularza kontaktowego</h1>
            <p style="margin:8px 0 0;opacity:0.9">${reasonLabel}</p>
          </div>
          <div style="padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#6b7280;width:120px">Imię i nazwisko</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#2563eb">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:8px 0;color:#6b7280">Telefon</td><td style="padding:8px 0"><a href="tel:${phone}" style="color:#2563eb">${phone}</a></td></tr>` : ''}
              ${company ? `<tr><td style="padding:8px 0;color:#6b7280">Firma</td><td style="padding:8px 0">${company}</td></tr>` : ''}
              <tr><td style="padding:8px 0;color:#6b7280">Temat</td><td style="padding:8px 0">${reasonLabel}</td></tr>
            </table>
            <div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb">
              <p style="margin:0;color:#374151;white-space:pre-wrap">${message}</p>
            </div>
            <p style="margin-top:16px;color:#9ca3af;font-size:12px">Wiadomość wysłana z formularza kontaktowego na takma.com.pl</p>
          </div>
        </div>
      `,
    })

    // Send confirmation to user
    await sendEmail({
      to: email,
      subject: 'Potwierdzenie wiadomości — TAKMA',
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1e40af;color:white;padding:24px;border-radius:12px 12px 0 0">
            <h1 style="margin:0;font-size:20px">Dziękujemy za wiadomość!</h1>
          </div>
          <div style="padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
            <p>Cześć ${name},</p>
            <p>Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe — zwykle w ciągu 1 godziny roboczej.</p>
            <div style="margin:20px 0;padding:16px;background:#f0f9ff;border-radius:8px;border:1px solid #bfdbfe">
              <p style="margin:0;font-weight:600;color:#1e40af">Twoja wiadomość:</p>
              <p style="margin:8px 0 0;color:#374151;white-space:pre-wrap">${message}</p>
            </div>
            <p style="color:#6b7280;font-size:14px">W razie pilnych spraw zadzwoń: <a href="tel:+48607819688" style="color:#2563eb">+48 607 819 688</a></p>
            <p style="color:#6b7280;font-size:14px">Pozdrawiamy,<br><strong>Zespół TAKMA</strong></p>
          </div>
        </div>
      `,
    })

    console.log(`[Contact] Nowa wiadomość od ${name} (${email}): ${reasonLabel}`)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[Contact Error]', err)
    return NextResponse.json(
      { error: 'Błąd przetwarzania żądania' },
      { status: 500 }
    )
  }
}
