import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

// Re-export password utilities from admin auth
export { hashPassword, verifyPassword } from '@/lib/auth'

const SECRET = new TextEncoder().encode(
  process.env.CUSTOMER_JWT_SECRET || 'takma-customer-secret-2026'
)

const COOKIE_NAME = 'customer-session'
const MAX_AGE = 30 * 24 * 60 * 60 // 30 days

// --- JWT ---

export async function createCustomerSession(
  customerId: string,
  email: string,
  firstName: string,
  company: string
): Promise<string> {
  return new SignJWT({ customerId, email, firstName, company })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(SECRET)
}

export async function verifyCustomerSession(
  token: string
): Promise<{ customerId: string; email: string; firstName: string; company: string } | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET)
    return {
      customerId: payload.customerId as string,
      email: payload.email as string,
      firstName: payload.firstName as string,
      company: payload.company as string,
    }
  } catch {
    return null
  }
}

// --- Cookie helpers ---

export async function setCustomerSessionCookie(token: string) {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: MAX_AGE,
  })
}

export async function getCustomerFromCookie(): Promise<{
  customerId: string
  email: string
  firstName: string
  company: string
} | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return null
  return verifyCustomerSession(token)
}

export async function clearCustomerSessionCookie() {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}
