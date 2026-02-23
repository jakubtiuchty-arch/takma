'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, ShieldCheck, Bell, MessageSquare, CreditCard } from 'lucide-react'

interface RegistrationLightboxProps {
  isOpen: boolean
  repairId: string
  userEmail: string
  userFirstName?: string
  userLastName?: string
  userPhone?: string
}

export function RegistrationLightbox({
  isOpen,
  repairId,
  userEmail,
  userFirstName,
  userLastName,
  userPhone,
}: RegistrationLightboxProps) {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password.length < 8) {
      setError('Haslo musi miec minimum 8 znakow')
      return
    }

    if (password !== confirmPassword) {
      setError('Hasla nie sa identyczne')
      return
    }

    if (!termsAccepted) {
      setError('Musisz zaakceptowac regulamin')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/register-with-repair', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: userEmail,
          password,
          firstName: userFirstName,
          lastName: userLastName,
          phone: userPhone,
          repairId,
          marketingConsent,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Blad rejestracji')
      }

      // Auto-login: redirect na serwis-zebry.pl z magic link token
      if (data.tokenHash) {
        const autoLoginUrl = new URL('https://www.serwis-zebry.pl/api/auth/auto-login')
        autoLoginUrl.searchParams.set('token_hash', data.tokenHash)
        autoLoginUrl.searchParams.set('type', 'magiclink')
        autoLoginUrl.searchParams.set('next', '/panel')
        window.location.href = autoLoginUrl.toString()
      } else {
        // Fallback: redirect na logowanie z pre-filled email
        const loginUrl = new URL('https://www.serwis-zebry.pl/logowanie')
        loginUrl.searchParams.set('email', userEmail)
        loginUrl.searchParams.set('from', 'takma')
        loginUrl.searchParams.set('redirect', '/panel')
        window.location.href = loginUrl.toString()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Wystapil blad')
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />

          {/* Lightbox */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      Zgloszenie wyslane!
                    </h2>
                    <p className="text-sm text-gray-600">
                      ID: <span className="font-mono font-semibold text-orange-600">#{repairId.slice(0, 8).toUpperCase()}</span>
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gray-50 rounded-lg p-2.5 mb-3">
                  <p className="text-xs font-semibold text-gray-700 mb-1.5">Twoje konto umozliwi:</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <ShieldCheck className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                      <span>Status naprawy na zywo</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <Bell className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                      <span>Powiadomienia email</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <MessageSquare className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                      <span>Chat z serwisem</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <CreditCard className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                      <span>Platnosc BLIK/karta</span>
                    </div>
                  </div>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit}>
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
                    <h3 className="text-sm font-bold text-gray-900 mb-2 text-center">
                      Utworz haslo do konta
                    </h3>

                    {/* Email (read-only) */}
                    <div className="mb-2">
                      <input
                        type="email"
                        value={userEmail}
                        disabled
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
                      />
                    </div>

                    {/* Password fields */}
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={8}
                        placeholder="Haslo (min. 8 zn.)"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        autoFocus
                      />
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        minLength={8}
                        placeholder="Powtorz haslo"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-1 mb-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={termsAccepted}
                          onChange={(e) => setTermsAccepted(e.target.checked)}
                          required
                          className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <span className="text-xs text-gray-700">
                          Akceptuje{' '}
                          <a href="/regulamin" target="_blank" className="text-orange-600 underline">regulamin</a>
                          {' '}i{' '}
                          <a href="/polityka-prywatnosci" target="_blank" className="text-orange-600 underline">polityke prywatnosci</a>
                        </span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={marketingConsent}
                          onChange={(e) => setMarketingConsent(e.target.checked)}
                          className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <span className="text-xs text-gray-700">
                          Chce otrzymywac promocje (opcjonalne)
                        </span>
                      </label>
                    </div>

                    {/* Error */}
                    {error && (
                      <div className="mb-2 p-2 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs">
                        {error}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 text-sm rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Tworzenie konta...
                        </>
                      ) : (
                        'Utworz konto i sledz naprawe'
                      )}
                    </button>
                  </div>
                </form>

                {/* Trust badges */}
                <div className="mt-3 pt-2 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                    <span>SSL</span>
                    <span>RODO</span>
                    <span>PL</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
