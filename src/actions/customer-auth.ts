'use server'

import { prisma } from '@/lib/db'
import { hashPassword, verifyPassword } from '@/lib/auth'
import {
  createCustomerSession,
  setCustomerSessionCookie,
  clearCustomerSessionCookie,
} from '@/lib/customer-auth'
import { checkLoginRateLimit, getClientIp } from '@/lib/spam-protection'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

// --- Register ---

export async function registerCustomer(
  _prevState: { error?: string; fieldErrors?: Record<string, string> } | null,
  formData: FormData
): Promise<{ error?: string; fieldErrors?: Record<string, string> }> {
  const email = (formData.get('email') as string)?.trim().toLowerCase()
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string
  const firstName = (formData.get('firstName') as string)?.trim()
  const lastName = (formData.get('lastName') as string)?.trim()
  const company = (formData.get('company') as string)?.trim()
  const nip = (formData.get('nip') as string)?.replace(/-/g, '').trim()
  const phone = (formData.get('phone') as string)?.trim() || null
  const address = (formData.get('address') as string)?.trim() || null

  // Validation
  if (!email || !password || !firstName || !lastName || !company) {
    return { error: 'Wypełnij wszystkie wymagane pola' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { fieldErrors: { email: 'Nieprawidłowy format adresu email' } }
  }

  if (password.length < 8) {
    return { fieldErrors: { password: 'Hasło musi mieć minimum 8 znaków' } }
  }

  if (password !== confirmPassword) {
    return { fieldErrors: { confirmPassword: 'Hasła nie są identyczne' } }
  }

  if (nip && !/^\d{10}$/.test(nip)) {
    return { fieldErrors: { nip: 'NIP musi składać się z 10 cyfr' } }
  }

  try {
    // Check if email already exists
    const existing = await prisma.customer.findUnique({ where: { email } })
    if (existing) {
      return { fieldErrors: { email: 'Konto z tym adresem email już istnieje' } }
    }

    const hashedPassword = await hashPassword(password)

    const customer = await prisma.customer.create({
      data: {
        email,
        hashedPassword,
        firstName,
        lastName,
        company,
        nip: nip || null,
        phone,
        address,
        isActive: true,
        activatedAt: new Date(),
      },
    })

    const token = await createCustomerSession(
      customer.id,
      customer.email,
      customer.firstName,
      customer.company
    )
    await setCustomerSessionCookie(token)
  } catch (err) {
    console.error('[registerCustomer] Error:', err)
    const message = err instanceof Error ? err.message : 'Nieznany błąd'
    return { error: `Błąd serwera: ${message}` }
  }

  redirect('/panel')
}

// --- Login ---

export async function loginCustomer(
  _prevState: { error?: string } | null,
  formData: FormData
): Promise<{ error?: string }> {
  const email = (formData.get('email') as string)?.trim().toLowerCase()
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
    const customer = await prisma.customer.findUnique({ where: { email } })
    if (!customer || !customer.hashedPassword) {
      return { error: 'Nieprawidłowy email lub hasło' }
    }

    if (!customer.isActive) {
      return { error: 'Konto nie zostało jeszcze aktywowane' }
    }

    const valid = await verifyPassword(password, customer.hashedPassword)
    if (!valid) {
      return { error: 'Nieprawidłowy email lub hasło' }
    }

    const token = await createCustomerSession(
      customer.id,
      customer.email,
      customer.firstName,
      customer.company
    )
    await setCustomerSessionCookie(token)
  } catch (err) {
    console.error('[loginCustomer] Error:', err)
    const message = err instanceof Error ? err.message : 'Nieznany błąd'
    return { error: `Błąd serwera: ${message}` }
  }

  redirect('/panel')
}

// --- Logout ---

export async function logoutCustomer() {
  await clearCustomerSessionCookie()
  redirect('/panel/login')
}
