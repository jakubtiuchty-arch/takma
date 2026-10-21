import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { lookupUnifiedStock } from '@/lib/unified-stock'

export const runtime = 'nodejs'

/**
 * GET /api/admin/stock?pn=A,B — to samo co /api/stock, razem z ceną zakupu
 * (`ingramPrice`). Kreator oferty pokazuje ją jako podłogę rabatu. Publiczne
 * /api/stock ceny zakupu nie podaje, dlatego ta trasa jest tylko dla zalogowanych.
 */
export async function GET(request: NextRequest) {
  if (!(await getSessionFromCookie())) {
    return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  }

  const partNumbers = (request.nextUrl.searchParams.get('pn') || '')
    .split(',').map(pn => pn.trim()).filter(Boolean)
  if (partNumbers.length === 0) {
    return NextResponse.json({ error: 'Brak parametru ?pn=.' }, { status: 400 })
  }
  if (partNumbers.length > 50) {
    return NextResponse.json({ error: 'Maksymalnie 50 Part Numberow na jedno zapytanie.' }, { status: 400 })
  }

  const { body, status } = await lookupUnifiedStock(partNumbers)
  return NextResponse.json(body, { status, headers: { 'Cache-Control': 'private, no-store' } })
}
