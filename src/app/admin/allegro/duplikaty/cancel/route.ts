import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { cancelPackage } from '@/lib/furgonetka-rest'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  const { packageId } = await request.json().catch(() => ({}))
  if (!packageId) return NextResponse.json({ error: 'Brak packageId.' }, { status: 400 })
  try {
    await cancelPackage(String(packageId))
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 422 })
  }
}
