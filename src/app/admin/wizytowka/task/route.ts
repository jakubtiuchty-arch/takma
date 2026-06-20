import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { prisma } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Przełączenie „zrobione" / usunięcie zadania optymalizacyjnego. */
export async function POST(req: NextRequest) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  const { action, id, done } = (await req.json().catch(() => ({}))) as { action?: string; id?: string; done?: boolean }
  if (!id) return NextResponse.json({ error: 'Brak id.' }, { status: 400 })

  if (action === 'toggle') {
    const t = await prisma.gbpTask.update({ where: { id }, data: { done: Boolean(done) } })
    return NextResponse.json({ ok: true, done: t.done })
  }
  if (action === 'delete') {
    await prisma.gbpTask.delete({ where: { id } }).catch(() => {})
    return NextResponse.json({ ok: true })
  }
  return NextResponse.json({ error: 'Nieznana akcja.' }, { status: 400 })
}
