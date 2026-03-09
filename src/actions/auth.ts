'use server'

import { prisma } from '@/lib/db'
import { verifyPassword, createSession, setSessionCookie, clearSessionCookie } from '@/lib/auth'
import { checkLoginRateLimit, getClientIp } from '@/lib/spam-protection'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAdmin(
  _prevState: { error?: string } | null,
  formData: FormData
): Promise<{ error?: string }> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Podaj email i hasło' }
  }

  const headersList = await headers()
  const ip = getClientIp(headersList)
  const rateLimit = checkLoginRateLimit(ip)
  if (rateLimit.blocked) {
    return { error: `Zbyt wiele prób logowania. Spróbuj ponownie za ${Math.ceil((rateLimit.retryAfterSeconds || 900) / 60)} min.` }
  }

  try {
    const admin = await prisma.adminUser.findUnique({ where: { email } })
    if (!admin) {
      return { error: 'Nieprawidłowy email lub hasło' }
    }

    const valid = await verifyPassword(password, admin.hashedPassword)
    if (!valid) {
      return { error: 'Nieprawidłowy email lub hasło' }
    }

    const token = await createSession(admin.id, admin.email, admin.name)
    await setSessionCookie(token)
  } catch (err) {
    console.error('[loginAdmin] Błąd:', err)
    const message = err instanceof Error ? err.message : 'Nieznany błąd'
    return { error: `Błąd serwera: ${message}` }
  }

  redirect('/admin')
}

export async function logoutAdmin() {
  await clearSessionCookie()
  redirect('/admin/login')
}
