import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'
import { buildAdminInquiryEmail, buildInquiryConfirmationEmail, buildPromoCodeEmail } from '@/lib/email-templates'
import { wystawKod } from '@/lib/promo-codes'
import { promocjeUzupelniajace } from '@/data/promos'
import { checkSpam, getClientIp } from '@/lib/spam-protection'
import { verifyTurnstile } from '@/lib/turnstile'
import { prisma } from '@/lib/db'
import { readAttribution } from '@/lib/attribution'

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

    // Turnstile verification
    if (!body.turnstileToken || !(await verifyTurnstile(body.turnstileToken))) {
      console.log(`[Inquiry SPAM] Turnstile failed`)
      return NextResponse.json({ ok: true })
    }

    // Spam protection
    const ip = getClientIp(request.headers)
    const spam = checkSpam(ip, body)
    if (spam.blocked) {
      console.log(`[Inquiry SPAM] Blocked: ${spam.reason} from ${ip}`)
      return NextResponse.json({ ok: true })
    }

    const { name, email, phone, message, productName, productSlug, promo } = body

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

    // Lead do bazy z atrybucją (dotąd tylko in-memory + mail)
    try {
      const attr = await readAttribution()
      await prisma.lead.create({
        data: {
          source: 'inquiry',
          name, email, phone: phone || null,
          subject: promo ? `🏷️ PROMOCJA — zamówienie: ${productName}` : `Zapytanie o produkt: ${productName}`,
          message: String(message).slice(0, 4000),
          productSlug: productSlug || null,
          ...attr,
        },
      })
    } catch (e) {
      console.error('[Inquiry] Lead save failed:', (e as Error).message)
    }

    inquiries.push(entry)
    console.log(`[Inquiry] Nowe zapytanie od ${name} (${email}) o ${productName}`)

    const adminEmails = [
      process.env.ADMIN_EMAIL || 'takma@takma.com.pl',
      'jakub.tiuchty@takma.com.pl',
    ]
    const productLink = productSlug ? `https://www.takma.com.pl/produkt/${productSlug}` : ''

    // Zgłoszenie promocyjne — imienny kod rabatowy dla tego klienta.
    // Cena voucherowa nie może obowiązywać każdego, kto doda produkt do koszyka,
    // więc rabat wychodzi wyłącznie kodem powiązanym z tym zgłoszeniem.
    let kod = null
    if (promo && productSlug) {
      try {
        kod = await wystawKod({ productSlug, productName: productName || '', name, email, phone })
      } catch (e) {
        console.error('[Inquiry] Nie udało się wystawić kodu:', (e as Error).message)
      }
    }

    // Mail do admina — nowe zapytanie o produkt
    await sendEmail({
      to: adminEmails,
      subject: kod
        ? `🏷️ [PROMOCJA — kod ${kod.code}] ${productName || 'Produkt'} — ${name}`
        : promo ? `🏷️ [PROMOCJA — zamówienie] ${productName || 'Produkt'} — ${name}` : `[Zapytanie] ${productName || 'Produkt'} — ${name}`,
      html: buildAdminInquiryEmail({
        name, email, phone,
        productName: productName || 'Brak nazwy produktu',
        productLink: productLink || undefined,
        message: kod
          ? `${message}\n\n— — —\nKod wystawiony automatycznie: ${kod.code}\n${kod.sku} — ${kod.promoNetto} zł netto/szt., do ${kod.maxQty} szt., ważny do ${kod.expiresAt.toLocaleDateString('pl-PL')}.\nDo załatwienia: voucher Zebra CEE na tego klienta.`
          : message,
      }),
    })

    // Mail do klienta — kod z instrukcją zamówienia albo zwykłe potwierdzenie
    await sendEmail({
      to: email,
      subject: kod
        ? `Kod rabatowy ${kod.code}: ${productName || 'produkt'} za ${kod.promoNetto} zł netto — TAKMA`
        : promo ? `Potwierdzenie zamówienia promocyjnego: ${productName || 'produkt'} — TAKMA` : `Potwierdzenie zapytania: ${productName || 'produkt'} — TAKMA`,
      html: kod
        ? buildPromoCodeEmail({
            productName: productName || '',
            productSlug,
            code: kod.code,
            sku: kod.sku,
            promoNetto: kod.promoNetto,
            regularNetto: kod.regularNetto,
            maxQty: kod.maxQty,
            expiresAt: kod.expiresAt,
            inne: promocjeUzupelniajace(productSlug),
          })
        : buildInquiryConfirmationEmail({ name, productName: productName || '', message }),
    })

    return NextResponse.json({ ok: true, kod: !!kod })
  } catch {
    return NextResponse.json(
      { error: 'Błąd przetwarzania żądania' },
      { status: 500 }
    )
  }
}
