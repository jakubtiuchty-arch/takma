import { NextRequest, NextResponse } from 'next/server'

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

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'Błąd przetwarzania żądania' },
      { status: 500 }
    )
  }
}
