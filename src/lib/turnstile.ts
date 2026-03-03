/**
 * Server-side Cloudflare Turnstile token verification.
 */
export async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    console.warn('[Turnstile] TURNSTILE_SECRET_KEY not configured — skipping verification')
    return true
  }

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, response: token }),
    })

    const data = await res.json()
    return data.success === true
  } catch (err) {
    console.error('[Turnstile] Verification error:', err)
    return false
  }
}
