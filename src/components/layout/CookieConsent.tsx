'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type ConsentState = 'pending' | 'accepted' | 'rejected'

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>('accepted') // default hidden
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // localStorage rzuca SecurityError przy zablokowanych danych witryny (np. w rendererze
    // Google). Bez try/catch wyjątek zamieniał całą stronę na ekran błędu.
    let stored: string | null = null
    try { stored = localStorage.getItem('takma-cookie-consent') } catch { /* brak dostępu */ }
    if (!stored) {
      setConsent('pending')
    } else {
      setConsent(stored as ConsentState)
    }
  }, [])

  const zapisz = (wybor: ConsentState) => {
    try { localStorage.setItem('takma-cookie-consent', wybor) } catch { /* brak dostępu */ }
    setConsent(wybor)
  }

  const handleAccept = () => zapisz('accepted')

  const handleReject = () => zapisz('rejected')

  if (!mounted || consent !== 'pending') return null

  return (
    <div
      role="dialog"
      aria-label="Zgoda na pliki cookie"
      className="fixed bottom-0 left-0 right-0 z-[9998] animate-slide-in-up"
    >
      <div className="bg-white border-t border-gray-200 shadow-[0_-4px_24px_rgba(0,0,0,0.12)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Text */}
            <div className="flex-1 text-sm text-gray-600 leading-relaxed">
              <p>
                Używamy plików cookie, aby zapewnić prawidłowe działanie strony i analizować ruch.
                Szczegóły znajdziesz w{' '}
                <Link
                  href="/polityka-prywatnosci"
                  className="text-primary-600 underline hover:text-primary-700"
                >
                  Polityce Prywatności
                </Link>
                .
              </p>
            </div>

            {/* Buttons — identyczne wizualnie per EAA */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleReject}
                className="px-5 py-2.5 text-sm font-medium rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Odrzuć
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2.5 text-sm font-medium rounded-lg border border-primary-600 text-white bg-primary-600 hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Akceptuję
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
