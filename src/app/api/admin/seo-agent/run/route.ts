/**
 * POST /api/admin/seo-agent/run
 * Trigger SEO Agent pipeline.
 * Dual auth: admin JWT cookie OR Authorization: Bearer CRON_SECRET
 */

import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth'
import { runSeoAgentPipeline } from '@/lib/seo-agent/pipeline'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function POST(request: NextRequest) {
  // Auth: admin session cookie
  const sessionCookie = request.cookies.get('admin-session')?.value
  if (sessionCookie) {
    const session = await verifySession(sessionCookie)
    if (session) {
      return runPipeline()
    }
  }

  // Auth: Vercel CRON_SECRET (for scheduled runs)
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && authHeader === `Bearer ${cronSecret}`) {
    return runPipeline()
  }

  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}

async function runPipeline() {
  try {
    const result = await runSeoAgentPipeline()
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
