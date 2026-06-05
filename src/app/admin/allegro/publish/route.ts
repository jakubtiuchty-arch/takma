import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { publishRibbonDraft } from '@/lib/allegro/publisher'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Wystawienie draftu oferty. Route pod /admin/* — cookie admin-session (path=/admin)
// tu dochodzi, więc wymagamy zalogowanego admina (pod /api/admin/* by nie dotarł).
export async function POST(request: Request) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  let partNumber: string | undefined
  try {
    const body = await request.json()
    partNumber = typeof body?.partNumber === 'string' ? body.partNumber.trim() : undefined
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowe body.' }, { status: 400 })
  }
  if (!partNumber) return NextResponse.json({ error: 'Brak partNumber.' }, { status: 400 })

  const result = await publishRibbonDraft(partNumber)
  return NextResponse.json(result, { status: result.ok ? 200 : 422 })
}
