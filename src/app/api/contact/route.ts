import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'
import { buildAdminContactNotificationEmail, buildContactConfirmationEmail } from '@/lib/email-templates'
import { checkSpam, getClientIp } from '@/lib/spam-protection'
import { verifyTurnstile } from '@/lib/turnstile'

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

    // Turnstile verification
    if (!body.turnstileToken || !(await verifyTurnstile(body.turnstileToken))) {
      console.log(`[Contact SPAM] Turnstile failed`)
      return NextResponse.json({ ok: true })
    }

    // Spam protection
    const ip = getClientIp(request.headers)
    const spam = checkSpam(ip, body)
    if (spam.blocked) {
      console.log(`[Contact SPAM] Blocked: ${spam.reason} from ${ip}`)
      // Return 200 to not tip off bots
      return NextResponse.json({ ok: true })
    }

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
    const adminEmails = [
      process.env.ADMIN_EMAIL || 'takma@takma.com.pl',
      'jakub.tiuchty@takma.com.pl',
    ]

    // Send notification to admin
    await sendEmail({
      to: adminEmails,
      subject: `[Kontakt] ${reasonLabel} — ${name}`,
      html: buildAdminContactNotificationEmail({ name, email, phone, company, reasonLabel, message }),
    })

    // Send confirmation to user
    await sendEmail({
      to: email,
      subject: 'Potwierdzenie wiadomości — TAKMA',
      html: buildContactConfirmationEmail({ name, message }),
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
