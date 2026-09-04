import { NextRequest, NextResponse } from 'next/server'
import { lookupUnifiedStock } from '@/lib/unified-stock'

export async function GET(request: NextRequest) {
  const showDebug = request.nextUrl.searchParams.get('debug') === '1'
  const pnParam = request.nextUrl.searchParams.get('pn')

  if (!pnParam) {
    return NextResponse.json(
      { error: 'Brak parametru ?pn=. Podaj Part Numbery oddzielone przecinkiem.' },
      { status: 400 }
    )
  }

  const partNumbers = pnParam.split(',').map(pn => pn.trim()).filter(Boolean)

  if (partNumbers.length === 0) {
    return NextResponse.json(
      { error: 'Nie podano prawidlowych Part Numberow.' },
      { status: 400 }
    )
  }

  if (partNumbers.length > 50) {
    return NextResponse.json(
      { error: 'Maksymalnie 50 Part Numberow na jedno zapytanie.' },
      { status: 400 }
    )
  }

  const { body, status, headers } = await lookupUnifiedStock(partNumbers, showDebug)
  return NextResponse.json(body, { status, headers })
}
