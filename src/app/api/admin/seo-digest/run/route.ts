import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Reuse the cron logic by calling it with auth
  const cronSecret = process.env.CRON_SECRET
  const url = new URL('/api/cron/seo-digest', request.url)
  const res = await fetch(url, {
    headers: { authorization: `Bearer ${cronSecret}` },
  })
  const data = await res.json()
  return NextResponse.json(data)
}
