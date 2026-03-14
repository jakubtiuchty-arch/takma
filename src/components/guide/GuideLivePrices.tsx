'use client'

import { useEffect, useState } from 'react'

interface Props {
  /** Map: product slug → array of variant Part Numbers */
  productPNs: Record<string, string[]>
}

/**
 * Client component that fetches live prices from /api/stock
 * and updates all <span data-live-price="slug"> elements in the DOM.
 * Mounted inside GuidePage — does not render any visible UI.
 */
export default function GuideLivePrices({ productPNs }: Props) {
  const [prices, setPrices] = useState<Record<string, number>>({})

  useEffect(() => {
    const allPNs = Object.values(productPNs).flat()
    if (allPNs.length === 0) return

    // Fetch all PNs in one request (max 50)
    fetch(`/api/stock?pn=${allPNs.join(',')}`)
      .then(r => r.json())
      .then(data => {
        if (!data.results) return
        const resultMap = new Map<string, number>()
        for (const item of data.results) {
          if (item.found && item.price) {
            resultMap.set(item.partNumber, item.price)
          }
        }

        // For each slug, find the minimum live price
        const minPrices: Record<string, number> = {}
        for (const [slug, pns] of Object.entries(productPNs)) {
          let min = Infinity
          for (const pn of pns) {
            const p = resultMap.get(pn)
            if (p && p < min) min = p
          }
          if (min < Infinity) minPrices[slug] = min
        }
        setPrices(minPrices)
      })
      .catch(() => {})
  }, [productPNs])

  // Update DOM when prices arrive
  useEffect(() => {
    if (Object.keys(prices).length === 0) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-live-price]'))
    elements.forEach(el => {
      const slug = el.dataset.livePrice
      if (!slug || !prices[slug]) return
      const formatted = Math.round(prices[slug]).toLocaleString('pl-PL')
      el.textContent = `od ${formatted} zł`
      el.classList.remove('animate-pulse')
    })
  }, [prices])

  return null
}
