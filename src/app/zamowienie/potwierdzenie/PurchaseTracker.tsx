'use client'

import { useEffect } from 'react'
import { trackPurchase, type GA4Item } from '@/lib/ga-events'
import { useCartStore } from '@/store/cartStore'

interface Props {
  orderNumber: string
  items: GA4Item[]
  value: number
  shipping: number
}

/**
 * Wysyła GA4 `purchase` po powrocie ze Stripe (pro forma trackuje w checkoucie).
 * Czeka aż załaduje się gtag (Script afterInteractive) i pilnuje, żeby event
 * poszedł raz — guard w localStorage + deduplikacja GA po transaction_id.
 */
export default function PurchaseTracker({ orderNumber, items, value, shipping }: Props) {
  const clearAll = useCartStore((s) => s.clearAll)

  // Zamówienie opłacone → dopiero teraz czyścimy koszyk (nie przed redirectem
  // do P24 — re-render pokazywał „koszyk pusty"; porzucona płatność = koszyk zostaje).
  useEffect(() => {
    clearAll()
  }, [clearAll])

  useEffect(() => {
    const key = `ga_purchase_${orderNumber}`
    try {
      if (localStorage.getItem(key)) return
    } catch {
      /* localStorage niedostępny — GA i tak deduplikuje po transaction_id */
    }

    let tries = 0
    const timer = setInterval(() => {
      if (typeof window.gtag === 'function') {
        trackPurchase(orderNumber, items, value, shipping)
        try {
          localStorage.setItem(key, '1')
        } catch {}
        clearInterval(timer)
      } else if (++tries >= 40) {
        clearInterval(timer)
      }
    }, 250)

    return () => clearInterval(timer)
  }, [orderNumber, items, value, shipping])

  return null
}
