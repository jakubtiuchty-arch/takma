import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  const checks: Record<string, string> = {}

  // 1. Check DATABASE_URL
  checks.databaseUrl = process.env.DATABASE_URL ? 'set' : 'MISSING'

  // 2. Try DB connection
  try {
    const count = await prisma.adminUser.count()
    checks.dbConnection = 'ok'
    checks.adminUserCount = String(count)
  } catch (err) {
    checks.dbConnection = 'FAILED'
    checks.dbError = err instanceof Error ? err.message : String(err)
  }

  const ok = checks.dbConnection === 'ok' && checks.databaseUrl === 'set'

  return NextResponse.json({ ok, checks }, { status: ok ? 200 : 500 })
}
