/**
 * Google Service Account auth via JWT RS256 (jose)
 * Wzorzec cache'owania z bluestar.ts — token z 5-minutowym buforem.
 * Zero nowych dependencies — jose jest już w projekcie.
 */

import { importPKCS8, SignJWT } from 'jose'

// ---------------------------------------------------------------------------
// Service Account credentials
// ---------------------------------------------------------------------------

interface ServiceAccountKey {
  client_email: string
  private_key: string
}

let parsedKey: ServiceAccountKey | null = null

function getServiceAccountKey(): ServiceAccountKey {
  if (parsedKey) return parsedKey

  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (!raw) {
    throw new Error('[SEO Agent Auth] Brak GOOGLE_SERVICE_ACCOUNT_JSON env var')
  }

  try {
    const json = JSON.parse(Buffer.from(raw, 'base64').toString('utf-8'))
    if (!json.client_email || !json.private_key) {
      throw new Error('Brak client_email lub private_key w JSON')
    }
    parsedKey = { client_email: json.client_email, private_key: json.private_key }
    return parsedKey
  } catch (err) {
    throw new Error(`[SEO Agent Auth] Nie udało się sparsować Service Account JSON: ${err}`)
  }
}

// ---------------------------------------------------------------------------
// Token cache (per scope)
// ---------------------------------------------------------------------------

const TOKEN_BUFFER_MS = 5 * 60 * 1000 // 5 min buffer before expiry

interface CachedToken {
  accessToken: string
  expiresAt: number
}

const tokenCache = new Map<string, CachedToken>()

// ---------------------------------------------------------------------------
// Get access token
// ---------------------------------------------------------------------------

export async function getGoogleAccessToken(scope: string): Promise<string> {
  // Check cache
  const cached = tokenCache.get(scope)
  if (cached && Date.now() < cached.expiresAt) {
    return cached.accessToken
  }

  const sa = getServiceAccountKey()
  const now = Math.floor(Date.now() / 1000)

  // Build JWT assertion (RS256)
  const privateKey = await importPKCS8(sa.private_key, 'RS256')
  const assertion = await new SignJWT({
    iss: sa.client_email,
    scope,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })
    .setProtectedHeader({ alg: 'RS256', typ: 'JWT' })
    .sign(privateKey)

  // Exchange for access token
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`[SEO Agent Auth] Token error HTTP ${response.status}: ${errorText}`)
    throw new Error(`Google OAuth error: HTTP ${response.status}`)
  }

  const data = await response.json()
  const accessToken: string = data.access_token
  const expiresIn: number = data.expires_in || 3600

  // Cache with buffer
  tokenCache.set(scope, {
    accessToken,
    expiresAt: Date.now() + (expiresIn * 1000) - TOKEN_BUFFER_MS,
  })

  console.log(`[SEO Agent Auth] Token OK dla scope ${scope.split('/').pop()}, ważny ${expiresIn}s`)
  return accessToken
}

// ---------------------------------------------------------------------------
// Convenience: scope constants
// ---------------------------------------------------------------------------

export const GSC_SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly'
export const GA4_SCOPE = 'https://www.googleapis.com/auth/analytics.readonly'
