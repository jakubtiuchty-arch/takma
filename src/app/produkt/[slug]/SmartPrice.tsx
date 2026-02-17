'use client'

import { useMemo, useState, useRef, useEffect } from 'react'
import { Product } from '@/data/products'
import { useStockData } from './StockInfo'
import StockInfo from './StockInfo'

interface SmartPriceProps {
  product: Product
}

/** Kategorie urządzeń — tooltip "oferta projektowa" wyświetlany tylko dla nich */
const DEVICE_CATEGORIES = new Set([
  'drukarki-etykiet', 'drukarki-kart', 'drukarki-opasek',
  'terminale-mobilne', 'skanery-kodow', 'tablety',
])

/**
 * Wyświetla cenę produktu z inteligentnym fallbackiem:
 * Jeśli najtańszy wariant jest niedostępny, pokazuje najtańszy DOSTĘPNY wariant.
 * Dzięki temu klient nie widzi "Niedostępny" i nie odchodzi — widzi alternatywę.
 */
export default function SmartPrice({ product }: SmartPriceProps) {
  // Zbierz wszystkie warianty z cenami i PN-ami
  const allVariants = useMemo(() => {
    if (product.variants && product.variants.length > 0) {
      return product.variants
        .filter(v => v.priceFrom)
        .map(v => ({ partNumber: v.partNumber, price: v.priceFrom!, name: v.name }))
        .sort((a, b) => a.price - b.price)
    }
    const pnSpec = product.specifications.find(s => s.name === 'Part Number')
    if (pnSpec && product.priceFrom) {
      return [{ partNumber: pnSpec.value, price: product.priceFrom, name: '' }]
    }
    return []
  }, [product])

  const partNumbers = useMemo(() => allVariants.map(v => v.partNumber), [allVariants])
  const { stockData, loading } = useStockData(partNumbers)

  // Znajdź najlepszy wariant do wyświetlenia
  const displayed = useMemo(() => {
    if (allVariants.length === 0) return null

    const cheapest = allVariants[0]

    // Jeśli jeszcze ładuje — pokaż najtańszy
    if (loading || stockData.size === 0) {
      return { ...cheapest, fallback: false }
    }

    // Sprawdź czy Ingram w ogóle zwrócił dane
    const anyFound = partNumbers.some(pn => stockData.get(pn)?.found)
    if (!anyFound) {
      return { ...cheapest, fallback: false }
    }

    // Sprawdź czy najtańszy jest dostępny
    const cheapestStock = stockData.get(cheapest.partNumber)
    if (cheapestStock?.found && cheapestStock.totalStock > 0) {
      return { ...cheapest, fallback: false }
    }

    // Najtańszy niedostępny → szukaj najtańszego dostępnego
    for (const v of allVariants) {
      const stock = stockData.get(v.partNumber)
      if (stock?.found && stock.totalStock > 0) {
        return { ...v, fallback: true }
      }
    }

    // Wszystkie niedostępne — pokaż najtańszy
    return { ...cheapest, fallback: false }
  }, [allVariants, stockData, loading, partNumbers])

  if (!displayed && !product.priceFrom) {
    return (
      <div className="bg-gray-100 shadow-sm rounded-xl p-6 mb-6">
        <p className="text-lg text-gray-600">Cena na zapytanie</p>
      </div>
    )
  }

  const price = displayed?.price || product.priceFrom!
  const pn = displayed?.partNumber

  // Dla StockInfo przekaż tylko PN wyświetlanego wariantu — żeby status był spójny z ceną
  const displayedPn = pn ? [pn] : partNumbers

  return (
    <div className="bg-gray-100 shadow-sm rounded-xl p-6 mb-6">
      {pn && (
        <p className="text-xs font-mono text-gray-500 mb-2">PN: {pn}</p>
      )}
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-gray-900">
          {price.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
        </span>
        <span className="text-sm text-gray-500">netto</span>
        {DEVICE_CATEGORIES.has(product.categoryId) && <PriceTooltip />}
      </div>
      <p className="text-sm text-gray-400 mt-1">
        {(price * 1.23).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł brutto
      </p>
      {displayedPn.length > 0 && <StockInfo partNumbers={displayedPn} />}
    </div>
  )
}

function PriceTooltip() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div ref={ref} className="relative inline-flex self-center">
      <button
        type="button"
        aria-label="Informacja o cenie"
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="w-[18px] h-[18px] rounded-full bg-gray-300 text-gray-600 text-[11px] font-semibold leading-none flex items-center justify-center hover:bg-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        i
      </button>
      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 bg-gray-900 text-white text-xs leading-relaxed rounded-lg p-3 shadow-lg z-50">
          <p>Cena dotyczy 1 sztuki. Planujesz zakup większej ilości? Kliknij <strong>&bdquo;Zapytaj o produkt&rdquo;</strong> i podaj liczbę urządzeń &mdash; przygotujemy ofertę projektową z dedykowaną ceną.</p>
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-[6px] border-x-transparent border-t-[6px] border-t-gray-900" />
        </div>
      )}
    </div>
  )
}
