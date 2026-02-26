/**
 * POST /api/admin/seo-agent/run
 * Trigger SEO Agent pipeline.
 * Dual auth: admin JWT cookie OR Authorization: Bearer CRON_SECRET
 */

import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth'
import { runSeoAgentPipeline } from '@/lib/seo-agent/pipeline'

export const dynamic = 'force-dynamic'
export const maxDuration = 120

export async function POST(request: NextRequest) {
  // Auth: admin session cookie
  const sessionCookie = request.cookies.get('admin-session')?.value
  if (sessionCookie) {
    const session = await verifySession(sessionCookie)
    if (session) {
      const force = request.nextUrl.searchParams.get('force') === '1'
      return runPipeline(force)
    }
  }

  // Auth: Vercel CRON_SECRET (for scheduled runs)
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && authHeader === `Bearer ${cronSecret}`) {
    return runPipeline(false)
  }

  // Auth: ADMIN_SECRET query param (for dashboard manual trigger)
  const adminSecret = request.nextUrl.searchParams.get('secret')
  const envAdminSecret = process.env.CRON_SECRET
  if (envAdminSecret && adminSecret === envAdminSecret) {
    const force = request.nextUrl.searchParams.get('force') === '1'
    return runPipeline(force)
  }

  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}

async function runPipeline(force: boolean) {
  try {
    const result = await runSeoAgentPipeline(force)
    return NextResponse.json(result, {
      status: result.status === 'completed' ? 200 : 500,
    })
  } catch (error) {
    console.error('[SEO Agent API] Pipeline error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Pipeline failed' },
      { status: 500 },
    )
  }
}
