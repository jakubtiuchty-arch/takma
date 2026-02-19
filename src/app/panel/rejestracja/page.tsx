'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { registerCustomer } from '@/actions/customer-auth'
import Link from 'next/link'
import { useState, useCallback, useEffect, useRef } from 'react'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-primary-600 text-white py-2.5 rounded-lg font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {pending ? 'Rejestracja...' : 'Zarejestruj się'}
    </button>
  )
}

interface NipData {
  name: string
  address: string
  nip: string
}

export default function CustomerRegistrationPage() {
  const [state, formAction] = useFormState(registerCustomer, null)
  const [nip, setNip] = useState('')
  const [nipLoading, setNipLoading] = useState(false)
  const [nipError, setNipError] = useState('')
  const [nipData, setNipData] = useState<NipData | null>(null)
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({})
  const companyRef = useRef<HTMLInputElement>(null)
  const addressRef = useRef<HTMLInputElement>(null)

  // NIP auto-lookup
  const lookupNip = useCallback(async (nipValue: string) => {
    const clean = nipValue.replace(/-/g, '')
    if (clean.length !== 10 || !/^\d{10}$/.test(clean)) return

    setNipLoading(true)
    setNipError('')
    setNipData(null)

    try {
      const res = await fetch(`/api/admin/nip?nip=${clean}`)
      const data = await res.json()

      if (!res.ok) {
        setNipError(data.error || 'Nie znaleziono firmy')
        return
      }

      setNipData(data)
      // Auto-fill company and address fields
      if (companyRef.current && data.name) {
        companyRef.current.value = data.name
      }
      if (addressRef.current && data.address) {
        addressRef.current.value = data.address
      }
    } catch {
      setNipError('Błąd podczas weryfikacji NIP')
    } finally {
      setNipLoading(false)
    }
  }, [])

  // Trigger NIP lookup when 10 digits entered
  useEffect(() => {
    const clean = nip.replace(/-/g, '')
    if (clean.length === 10 && /^\d{10}$/.test(clean)) {
      lookupNip(nip)
    }
  }, [nip, lookupNip])

  // Client-side validation
  const validateField = (name: string, value: string) => {
    const errors = { ...clientErrors }

    switch (name) {
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.email = 'Nieprawidłowy format adresu email'
        } else {
          delete errors.email
        }
        break
      case 'password':
        if (value && value.length < 8) {
          errors.password = 'Hasło musi mieć minimum 8 znaków'
        } else {
          delete errors.password
        }
        break
      case 'confirmPassword': {
        const form = document.querySelector('form')
        const passwordInput = form?.querySelector<HTMLInputElement>('[name="password"]')
        if (value && passwordInput && value !== passwordInput.value) {
          errors.confirmPassword = 'Hasła nie są identyczne'
        } else {
          delete errors.confirmPassword
        }
        break
      }
      case 'nip': {
        const clean = value.replace(/-/g, '')
        if (clean && (clean.length !== 10 || !/^\d+$/.test(clean))) {
          errors.nip = 'NIP musi składać się z 10 cyfr'
        } else {
          delete errors.nip
        }
        break
      }
    }

    setClientErrors(errors)
  }

  // Merge server-side and client-side errors
  const getError = (field: string) => {
    return state?.fieldErrors?.[field] || clientErrors[field] || ''
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">TAKMA</h1>
          <p className="text-slate-400 mt-1">Rejestracja konta B2B</p>
        </div>

        {/* Form */}
        <form action={formAction} className="bg-white rounded-xl shadow-xl p-6 space-y-4">
          {state?.error && (
            <div className="bg-red-50 text-red-700 px-4 py-2.5 rounded-lg text-sm font-medium">
              {state.error}
            </div>
          )}

          {nipData && (
            <div className="bg-green-50 text-green-700 px-4 py-2.5 rounded-lg text-sm">
              Znaleziono: <strong>{nipData.name}</strong>
            </div>
          )}

          {/* NIP */}
          <div>
            <label htmlFor="nip" className="block text-sm font-medium text-gray-700 mb-1">
              NIP
            </label>
            <div className="relative">
              <input
                id="nip"
                name="nip"
                type="text"
                inputMode="numeric"
                maxLength={13}
                value={nip}
                onChange={(e) => {
                  setNip(e.target.value)
                  validateField('nip', e.target.value)
                }}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                placeholder="1234567890"
              />
              {nipLoading && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg className="animate-spin h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </div>
              )}
            </div>
            {(getError('nip') || nipError) && (
              <p className="mt-1 text-sm text-red-600">{getError('nip') || nipError}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Nazwa firmy <span className="text-red-500">*</span>
            </label>
            <input
              ref={companyRef}
              id="company"
              name="company"
              type="text"
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
              placeholder="Nazwa Sp. z o.o."
            />
          </div>

          {/* Address (auto-filled from NIP) */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Adres
            </label>
            <input
              ref={addressRef}
              id="address"
              name="address"
              type="text"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
              placeholder="ul. Przykładowa 1, 00-001 Warszawa"
            />
          </div>

          {/* First name & Last name — side by side */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Imię <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                placeholder="Jan"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Nazwisko <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                placeholder="Kowalski"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefon
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
              placeholder="+48 123 456 789"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              onBlur={(e) => validateField('email', e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
              placeholder="jan@firma.pl"
            />
            {getError('email') && (
              <p className="mt-1 text-sm text-red-600">{getError('email')}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Hasło <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="new-password"
              minLength={8}
              onBlur={(e) => validateField('password', e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
              placeholder="Minimum 8 znaków"
            />
            {getError('password') && (
              <p className="mt-1 text-sm text-red-600">{getError('password')}</p>
            )}
          </div>

          {/* Confirm password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Powtórz hasło <span className="text-red-500">*</span>
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              autoComplete="new-password"
              onBlur={(e) => validateField('confirmPassword', e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
            />
            {getError('confirmPassword') && (
              <p className="mt-1 text-sm text-red-600">{getError('confirmPassword')}</p>
            )}
          </div>

          <SubmitButton />

          <div className="text-center text-sm pt-2">
            <Link
              href="/panel/login"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Masz konto? Zaloguj się
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
