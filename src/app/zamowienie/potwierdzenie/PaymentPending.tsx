'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

/**
 * Klient wrócił z Przelewy24 zanim dotarła notyfikacja płatności.
 * Pollingujemy status co 3 s (do 2 min) i odświeżamy stronę po opłaceniu —
 * wtedy renderuje się normalne potwierdzenie + GA4 purchase.
 */
export default function PaymentPending({ orderNumber, sid }: { orderNumber: string; sid: string }) {
  const [timedOut, setTimedOut] = useState(false)

  useEffect(() => {
    let tries = 0
    const timer = setInterval(async () => {
      try {
        const res = await fetch(`/api/p24/status?order=${encodeURIComponent(orderNumber)}&sid=${encodeURIComponent(sid)}`)
        const d = await res.json()
        if (d.paid) {
          clearInterval(timer)
          window.location.reload()
          return
        }
      } catch {
        /* spróbujemy ponownie */
      }
      if (++tries >= 40) {
        clearInterval(timer)
        setTimedOut(true)
      }
    }, 3000)
    return () => clearInterval(timer)
  }, [orderNumber, sid])

  return (
    <div className="container-main py-16 lg:py-24">
      <div className="max-w-lg mx-auto text-center">
        {!timedOut ? (
          <>
            <div className="w-20 h-20 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin mx-auto mb-6" />
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Przetwarzamy płatność…</h1>
            <p className="text-gray-600 mb-2">
              Zamówienie: <strong className="text-gray-900">{orderNumber}</strong>
            </p>
            <p className="text-gray-500">
              Czekamy na potwierdzenie z Przelewy24 — zwykle kilka sekund. Nie zamykaj tej strony.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Płatność jeszcze nie została potwierdzona
            </h1>
            <p className="text-gray-600 mb-6">
              Jeśli opłaciłeś zamówienie <strong>{orderNumber}</strong>, potwierdzenie przyjdzie mailem — czasem
              trwa to kilka minut. Jeśli płatność się nie powiodła, złóż zamówienie ponownie lub skontaktuj się z
              nami.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => window.location.reload()} className="btn-primary px-6 py-3">
                Sprawdź ponownie
              </button>
              <Link href="/zamowienie" className="btn-secondary px-6 py-3">
                Wróć do zamówienia
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              Pytania:{' '}
              <a href="mailto:takma@takma.com.pl" className="text-primary-600 hover:underline">
                takma@takma.com.pl
              </a>{' '}
              |{' '}
              <a href="tel:+48607819688" className="text-primary-600 hover:underline">
                +48 607 819 688
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
