import { prisma } from '@/lib/db'

/**
 * Allegro OAuth 2.0 — Authorization Code Grant.
 * Tokeny trzymamy w tabeli AllegroToken (po jednym na środowisko: sandbox/prod).
 * Sekrety w env (.env, gitignored): ALLEGRO_CLIENT_ID, ALLEGRO_CLIENT_SECRET.
 */

const CLIENT_ID = process.env.ALLEGRO_CLIENT_ID || ''
const CLIENT_SECRET = process.env.ALLEGRO_CLIENT_SECRET || ''
const REDIRECT_URI = process.env.ALLEGRO_REDIRECT_URI || ''
const AUTH_BASE = process.env.ALLEGRO_AUTH_BASE || 'https://allegro.pl.allegrosandbox.pl/auth/oauth'
export const ALLEGRO_ENV = process.env.ALLEGRO_ENV || 'sandbox'

export function allegroConfigured(): boolean {
  return !!CLIENT_ID && !!CLIENT_SECRET && !!REDIRECT_URI
}

function basicAuthHeader(): string {
  return 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
}

/** URL, na który przekierowujemy admina, żeby zalogował się i zaakceptował dostęp. */
export function getAuthUrl(state: string): string {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    state,
  })
  return `${AUTH_BASE}/authorize?${params.toString()}`
}

interface TokenResponse {
  access_token: string
  refresh_token: string
  expires_in: number
  scope: string
}

async function tokenRequest(body: URLSearchParams): Promise<TokenResponse> {
  const res = await fetch(`${AUTH_BASE}/token`, {
    method: 'POST',
    headers: {
      Authorization: basicAuthHeader(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Allegro token error ${res.status}: ${text}`)
  }
  return res.json() as Promise<TokenResponse>
}

/** Wymiana kodu (z callbacku) na access + refresh token. */
export function exchangeCode(code: string): Promise<TokenResponse> {
  return tokenRequest(new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: REDIRECT_URI,
  }))
}

/** Odświeżenie access tokena refresh tokenem. */
export function refreshAccessToken(refreshToken: string): Promise<TokenResponse> {
  return tokenRequest(new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    redirect_uri: REDIRECT_URI,
  }))
}

/** Login sprzedawcy z access tokena (JWT, claim user_name) — best-effort, bez weryfikacji podpisu. */
function loginFromAccessToken(accessToken: string): string | null {
  try {
    const payload = accessToken.split('.')[1]
    const json = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'))
    return json.user_name ?? null
  } catch {
    return null
  }
}

/** Zapis/aktualizacja tokena dla bieżącego środowiska. */
export async function saveToken(t: TokenResponse): Promise<void> {
  const expiresAt = new Date(Date.now() + (t.expires_in - 60) * 1000) // -60s margines
  const allegroLogin = loginFromAccessToken(t.access_token)
  await prisma.allegroToken.upsert({
    where: { environment: ALLEGRO_ENV },
    create: {
      environment: ALLEGRO_ENV,
      accessToken: t.access_token,
      refreshToken: t.refresh_token,
      expiresAt,
      scope: t.scope,
      allegroLogin,
    },
    update: {
      accessToken: t.access_token,
      refreshToken: t.refresh_token,
      expiresAt,
      scope: t.scope,
      allegroLogin,
    },
  })
}

export interface AllegroConnection {
  connected: boolean
  allegroLogin: string | null
  expiresAt: Date | null
  environment: string
}

/** Status połączenia (do UI). */
export async function getConnection(): Promise<AllegroConnection> {
  const tok = await prisma.allegroToken.findUnique({ where: { environment: ALLEGRO_ENV } })
  return {
    connected: !!tok,
    allegroLogin: tok?.allegroLogin ?? null,
    expiresAt: tok?.expiresAt ?? null,
    environment: ALLEGRO_ENV,
  }
}

/**
 * Zwraca ważny access token — odświeża automatycznie, jeśli wygasł.
 * null, gdy brak połączenia (trzeba kliknąć „Połącz z Allegro").
 */
export async function getValidAccessToken(): Promise<string | null> {
  const tok = await prisma.allegroToken.findUnique({ where: { environment: ALLEGRO_ENV } })
  if (!tok) return null
  if (tok.expiresAt.getTime() > Date.now()) return tok.accessToken
  // wygasł — odśwież
  try {
    const refreshed = await refreshAccessToken(tok.refreshToken)
    await saveToken(refreshed)
    return refreshed.access_token
  } catch {
    return null
  }
}
