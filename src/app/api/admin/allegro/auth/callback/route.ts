import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { exchangeCode, saveToken } from '@/lib/allegro/auth'

export const runtime = 'nodejs'

// OAuth callback: Allegro przekierowuje tu z ?code=...&state=... (nawigacja cross-site).
// Ochrona przez `state` (cookie ustawiony przez zalogowanego admina w initiate) — sesji
// admina tu nie sprawdzamy, bo cookie admin-session (sameSite=strict) nie dochodzi cross-site.
export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  const oauthError = url.searchParams.get('error')

  const store = await cookies()
  const savedState = store.get('allegro_oauth_state')?.value
  store.delete('allegro_oauth_state')

  const back = (query: string) =>
    NextResponse.redirect(new URL(`/admin/allegro/konfiguracja?${query}`, request.url))

  if (oauthError) return back(`error=${encodeURIComponent(oauthError)}`)
  if (!code || !state || !savedState || state !== savedState) return back('error=invalid_state')

  try {
    const tokens = await exchangeCode(code)
    await saveToken(tokens)
    return back('connected=1')
  } catch (e) {
    return back(`error=${encodeURIComponent((e as Error).message.slice(0, 140))}`)
  }
}
