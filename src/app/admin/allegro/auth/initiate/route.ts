import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getSessionFromCookie } from '@/lib/auth'
import { getAuthUrl, allegroConfigured } from '@/lib/allegro/auth'

export const runtime = 'nodejs'

// Start OAuth. Route pod /admin/* — cookie admin-session (path=/admin) tu dochodzi,
// więc możemy wymagać zalogowanego admina. Ustawiamy state (CSRF) z path=/ i sameSite=lax,
// żeby dotarł do callbacku (powrót z Allegro jest cross-site).
export async function GET(request: Request) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.redirect(new URL('/admin/login', request.url))
  if (!allegroConfigured()) {
    return NextResponse.json(
      { error: 'Allegro nieskonfigurowane — brak ALLEGRO_CLIENT_ID / SECRET w env.' },
      { status: 503 },
    )
  }
  const state = crypto.randomUUID()
  const store = await cookies()
  store.set('allegro_oauth_state', state, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 600,
    path: '/',
  })
  return NextResponse.redirect(getAuthUrl(state))
}
