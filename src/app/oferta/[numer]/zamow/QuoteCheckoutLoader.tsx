'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore, type CartItem } from '@/store/cartStore'

/**
 * Wsypuje pozycje oferty do koszyka i przerzuca do kasy.
 *
 * Osobny komponent kliencki, bo koszyk żyje w localStorage — serwer nie ma jak
 * go zapisać. Ekran przejściowy jest celowo ubogi: klient widzi go ułamek sekundy.
 */
export default function QuoteCheckoutLoader({
  quoteNumber,
  items,
}: {
  quoteNumber: string
  items: Omit<CartItem, 'note' | 'quoteNumber'>[]
}) {
  const router = useRouter()
  const loadFromQuote = useCartStore((s) => s.loadFromQuote)
  const done = useRef(false)

  useEffect(() => {
    if (done.current) return
    done.current = true
    loadFromQuote(quoteNumber, items)
    router.replace('/zamowienie')
  }, [quoteNumber, items, loadFromQuote, router])

  return (
    <main className="container-main py-24 text-center">
      <p className="text-gray-600">Przygotowujemy zamówienie z oferty {quoteNumber}…</p>
    </main>
  )
}
