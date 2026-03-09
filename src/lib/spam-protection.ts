/**
 * Spam protection for contact forms.
 *
 * Three layers:
 * 1. Honeypot — hidden "website" field; if filled → bot
 * 2. Timestamp — form must take ≥ 3 s to fill; instant submit → bot
 * 3. Rate limit — max 5 submissions per 10 min per IP
 */

// ---- Rate limiter (in-memory, resets on deploy) ----

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 min
const RATE_LIMIT_MAX = 5

function cleanupRateLimit() {
  const now = Date.now()
  rateLimitMap.forEach((entry, ip) => {
    if (entry.resetAt < now) rateLimitMap.delete(ip)
  })
}

// Cleanup every 5 minutes
setInterval(cleanupRateLimit, 5 * 60 * 1000)

export function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

// ---- Honeypot check ----

export function isHoneypotFilled(body: Record<string, unknown>): boolean {
  // If the hidden "website" field has any value → bot
  return typeof body._hp === 'string' && body._hp.length > 0
}

// ---- Timestamp check ----

const MIN_FILL_TIME_MS = 3_000 // 3 seconds

export function isTooFast(body: Record<string, unknown>): boolean {
  const ts = Number(body._ts)
  if (!ts || isNaN(ts)) return true // no timestamp → suspicious
  return Date.now() - ts < MIN_FILL_TIME_MS
}

// ---- Combined check ----

export interface SpamCheckResult {
  blocked: boolean
  reason?: string
}

export function checkSpam(ip: string, body: Record<string, unknown>): SpamCheckResult {
  if (isHoneypotFilled(body)) {
    return { blocked: true, reason: 'honeypot' }
  }

  if (isTooFast(body)) {
    return { blocked: true, reason: 'too-fast' }
  }

  if (isRateLimited(ip)) {
    return { blocked: true, reason: 'rate-limit' }
  }

  return { blocked: false }
}

/** Extract client IP from Next.js request headers */
export function getClientIp(headers: Headers): string {
  return (
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headers.get('x-real-ip') ||
    'unknown'
  )
}

// ---- Login rate limiter (stricter: 5 attempts / 15 min) ----

const loginRateLimitMap = new Map<string, { count: number; resetAt: number }>()
const LOGIN_RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000 // 15 min
const LOGIN_RATE_LIMIT_MAX = 5

function cleanupLoginRateLimit() {
  const now = Date.now()
  loginRateLimitMap.forEach((entry, ip) => {
    if (entry.resetAt < now) loginRateLimitMap.delete(ip)
  })
}

setInterval(cleanupLoginRateLimit, 5 * 60 * 1000)

/**
 * Rate limit for login endpoints — max 5 attempts per 15 minutes per IP.
 * Returns { blocked: false } if OK, { blocked: true, retryAfterSeconds } if rate limited.
 */
export function checkLoginRateLimit(ip: string): { blocked: boolean; retryAfterSeconds?: number } {
  const now = Date.now()
  const entry = loginRateLimitMap.get(ip)

  if (!entry || entry.resetAt < now) {
    loginRateLimitMap.set(ip, { count: 1, resetAt: now + LOGIN_RATE_LIMIT_WINDOW_MS })
    return { blocked: false }
  }

  entry.count++
  if (entry.count > LOGIN_RATE_LIMIT_MAX) {
    const retryAfterSeconds = Math.ceil((entry.resetAt - now) / 1000)
    return { blocked: true, retryAfterSeconds }
  }

  return { blocked: false }
}

// ---- Password change rate limiter (stricter: 3 attempts / 60 min) ----

const passwordChangeRateLimitMap = new Map<string, { count: number; resetAt: number }>()
const PASSWORD_CHANGE_WINDOW_MS = 60 * 60 * 1000 // 60 min
const PASSWORD_CHANGE_MAX = 3

function cleanupPasswordChangeRateLimit() {
  const now = Date.now()
  passwordChangeRateLimitMap.forEach((entry, ip) => {
    if (entry.resetAt < now) passwordChangeRateLimitMap.delete(ip)
  })
}

setInterval(cleanupPasswordChangeRateLimit, 5 * 60 * 1000)

export function checkPasswordChangeRateLimit(ip: string): { blocked: boolean; retryAfterSeconds?: number } {
  const now = Date.now()
  const entry = passwordChangeRateLimitMap.get(ip)

  if (!entry || entry.resetAt < now) {
    passwordChangeRateLimitMap.set(ip, { count: 1, resetAt: now + PASSWORD_CHANGE_WINDOW_MS })
    return { blocked: false }
  }

  entry.count++
  if (entry.count > PASSWORD_CHANGE_MAX) {
    const retryAfterSeconds = Math.ceil((entry.resetAt - now) / 1000)
    return { blocked: true, retryAfterSeconds }
  }

  return { blocked: false }
}
