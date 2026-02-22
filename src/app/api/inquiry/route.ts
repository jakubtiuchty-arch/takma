import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

/**
 * POST /api/inquiry
 *
 * Zapisuje zapytanie o produkt.
 * Body: { name, email, phone?, message, productName, productSlug }
 */

const inquiries: {
  name: string
  email: string
  phone: string
  message: string
  productName: string
  productSlug: string
  createdAt: string
}[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, productName, productSlug } = body

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

    const entry = {
      name,
      email,
      phone: phone || '',
      message,
      productName: productName || '',
      productSlug: productSlug || '',
      createdAt: new Date().toISOString(),
    }

    inquiries.push(entry)
    console.log(`[Inquiry] Nowe zapytanie od ${name} (${email}) o ${productName}`)

    const adminEmail = process.env.ADMIN_EMAIL || 'takma@takma.com.pl'
    const productLink = productSlug ? `https://takma.com.pl/produkt/${productSlug}` : ''

    // Mail do admina — nowe zapytanie o produkt
    await sendEmail({
      to: adminEmail,
      subject: `[Zapytanie] ${productName || 'Produkt'} — ${name}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1e40af;color:white;padding:24px;border-radius:12px 12px 0 0">
            <h1 style="margin:0;font-size:20px">Nowe zapytanie o produkt</h1>
            <p style="margin:8px 0 0;opacity:0.9">${productName || 'Brak nazwy produktu'}</p>
          </div>
          <div style="padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#6b7280;width:120px">Imię i nazwisko</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#2563eb">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:8px 0;color:#6b7280">Telefon</td><td style="padding:8px 0"><a href="tel:${phone}" style="color:#2563eb">${phone}</a></td></tr>` : ''}
              ${productLink ? `<tr><td style="padding:8px 0;color:#6b7280">Produkt</td><td style="padding:8px 0"><a href="${productLink}" style="color:#2563eb">${productName}</a></td></tr>` : ''}
            </table>
            <div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb">
              <p style="margin:0;color:#374151;white-space:pre-wrap">${message}</p>
            </div>
            <p style="margin-top:16px;color:#9ca3af;font-size:12px">Zapytanie wysłane z karty produktu na takma.com.pl</p>
          </div>
        </div>
      `,
    })

    // Mail do klienta — potwierdzenie otrzymania zapytania
    await sendEmail({
      to: email,
      subject: `Potwierdzenie zapytania: ${productName || 'produkt'} — TAKMA`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1e40af;color:white;padding:24px;border-radius:12px 12px 0 0">
            <h1 style="margin:0;font-size:20px">Otrzymaliśmy Twoje zapytanie!</h1>
          </div>
          <div style="padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
            <p>Cześć ${name},</p>
            <p>Dziękujemy za zainteresowanie produktem <strong>${productName || ''}</strong>. Odpowiemy najszybciej jak to możliwe — zwykle w ciągu <strong>1 godziny roboczej</strong>.</p>
            <div style="margin:20px 0;padding:16px;background:#f0f9ff;border-radius:8px;border:1px solid #bfdbfe">
              <p style="margin:0;font-weight:600;color:#1e40af">Twoje zapytanie:</p>
              <p style="margin:8px 0 0;color:#374151;white-space:pre-wrap">${message}</p>
            </div>
            <p style="color:#6b7280;font-size:14px">W razie pilnych spraw zadzwoń: <a href="tel:+48607819688" style="color:#2563eb">+48 607 819 688</a></p>
            <p style="color:#6b7280;font-size:14px">Pozdrawiamy,<br><strong>Zespół TAKMA</strong></p>
          </div>
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
