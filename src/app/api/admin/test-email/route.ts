export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'
import { sendEmail } from '@/lib/email'

export async function GET(request: NextRequest) {
  // Auth: admin cookie OR ?secret= query param matching ADMIN_JWT_SECRET
  const { searchParams } = new URL(request.url)
  const querySecret = searchParams.get('secret')
  const adminSecret = process.env.ADMIN_JWT_SECRET || ''

  let authorized = false

  // Method 1: query param
  if (querySecret && adminSecret && querySecret === adminSecret) {
    authorized = true
  }

  // Method 2: admin cookie
  if (!authorized) {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value
    if (token) {
      try {
        await jwtVerify(token, new TextEncoder().encode(adminSecret))
        authorized = true
      } catch { /* invalid token */ }
    }
  }

  if (!authorized) {
    return NextResponse.json({ error: 'Unauthorized. Use ?secret=YOUR_ADMIN_JWT_SECRET' }, { status: 401 })
  }

  const adminEmail = process.env.ADMIN_EMAIL || 'jakub.tiuchty@takma.com.pl'

  console.log('[Test Email] RESEND_API_KEY set:', !!process.env.RESEND_API_KEY)
  console.log('[Test Email] Sending to:', adminEmail)

  const result = await sendEmail({
    to: adminEmail,
    subject: `[TEST] Email z TAKMA — ${new Date().toLocaleString('pl-PL')}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#1e40af">Test powiadomień e-mail</h2>
        <p>Jeśli widzisz tego maila — Resend działa poprawnie.</p>
        <table style="border-collapse:collapse;width:100%;margin:1rem 0">
          <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">RESEND_API_KEY</td><td style="padding:8px;border:1px solid #e5e7eb">${process.env.RESEND_API_KEY ? '✅ Ustawiony' : '❌ Brak'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">ADMIN_EMAIL</td><td style="padding:8px;border:1px solid #e5e7eb">${adminEmail}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Timestamp</td><td style="padding:8px;border:1px solid #e5e7eb">${new Date().toISOString()}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Environment</td><td style="padding:8px;border:1px solid #e5e7eb">${process.env.VERCEL_ENV || 'local'}</td></tr>
        </table>
        <p style="color:#6b7280;font-size:0.875rem">Ten mail został wysłany z endpointu /api/admin/test-email</p>
      </div>
    `,
  })

  console.log('[Test Email] Result:', result)

  return NextResponse.json({
    ...result,
    resendConfigured: !!process.env.RESEND_API_KEY,
    sentTo: adminEmail,
    timestamp: new Date().toISOString(),
  })
}
