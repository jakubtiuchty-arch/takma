'use client'

import { useMemo, useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Product } from '@/data/products'
import { useStockData } from './StockInfo'
import StockInfo from './StockInfo'

interface SmartPriceProps {
  product: Product
}

/** Kategorie urządzeń — tooltip "oferta projektowa" wyświetlany tylko dla nich */
const DEVICE_CATEGORIES = new Set([
  'drukarki-etykiet', 'drukarki-kart', 'drukarki-opasek',
  'terminale-mobilne', 'skanery-kodow-kreskowych', 'tablety-przemyslowe',
])

/**
 * Wyświetla cenę produktu z inteligentnym fallbackiem:
 * Jeśli najtańszy wariant jest niedostępny, pokazuje najtańszy DOSTĘPNY wariant.
 * Dzięki temu klient nie widzi "Niedostępny" i nie odchodzi — widzi alternatywę.
 */
export default function SmartPrice({ product }: SmartPriceProps) {
  // Zbierz wszystkie warianty z PN-ami (nawet bez statycznej ceny — API ją dostarczy)
  const allVariants = useMemo(() => {
    if (product.variants && product.variants.length > 0) {
      return product.variants
        .map(v => ({ partNumber: v.partNumber, price: v.priceFrom ?? null, name: v.name }))
        .sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity))
    }
    const pnSpec = product.specifications.find(s => s.name === 'Part Number')
    if (pnSpec) {
      return [{ partNumber: pnSpec.value, price: product.priceFrom ?? null, name: '' }]
    }
    return []
  }, [product])

  const partNumbers = useMemo(() => allVariants.map(v => v.partNumber), [allVariants])
  const { stockData, loading } = useStockData(partNumbers)

  // Znajdź najlepszy wariant do wyświetlenia (uwzględniając ceny live z API)
  const displayed = useMemo(() => {
    if (allVariants.length === 0) return null

    // Jeśli jeszcze ładuje — pokaż najtańszy ze statyczną ceną
    if (loading || stockData.size === 0) {
      const withPrice = allVariants.filter(v => v.price !== null)
      return withPrice.length > 0
        ? { ...withPrice[0], fallback: false }
        : { ...allVariants[0], fallback: false }
    }

    // Zbuduj listę wariantów z cenami live (API) lub statycznymi
    const withLivePrices = allVariants.map(v => {
      const s = stockData.get(v.partNumber)
      const livePrice = (s?.found && s?.price) ? s.price : null
      return { ...v, effectivePrice: livePrice ?? v.price, hasStock: (s?.found && s.totalStock > 0) || false }
    }).sort((a, b) => (a.effectivePrice ?? Infinity) - (b.effectivePrice ?? Infinity))

    // Sprawdź czy API w ogóle zwróciło dane
    const anyFound = partNumbers.some(pn => stockData.get(pn)?.found)
    if (!anyFound) {
      return { ...withLivePrices[0], fallback: false }
    }

    // Najtańszy dostępny
    const cheapestAvailable = withLivePrices.find(v => v.hasStock)
    if (cheapestAvailable) {
      const isFirst = cheapestAvailable.partNumber === withLivePrices[0].partNumber
      return { ...cheapestAvailable, fallback: !isFirst }
    }

    // Wszystkie niedostępne — pokaż najtańszy
    return { ...withLivePrices[0], fallback: false }
  }, [allVariants, stockData, loading, partNumbers])

  // Brak wariantów i brak PNa → "Cena na zapytanie"
  if (!displayed && !product.priceFrom && allVariants.length === 0) {
    return (
      <div className="bg-gray-100 shadow-sm rounded-xl p-4 sm:p-6 mb-6">
        <p className="text-lg text-gray-600">Cena na zapytanie</p>
      </div>
    )
  }

  const pn = displayed?.partNumber

  // Live cena z API dystrybutora — fallback na statyczną
  const stock = pn ? stockData.get(pn) : null
  const livePrice = (stock?.found && stock?.price) ? stock.price : null
  const price = livePrice ?? displayed?.price ?? product.priceFrom

  // Dla StockInfo przekaż tylko PN wyświetlanego wariantu — żeby status był spójny z ceną
  const displayedPn = pn ? [pn] : partNumbers

  return (
    <div className="bg-gray-100 shadow-sm rounded-xl p-4 sm:p-6 mb-6">
      {pn && (
        <p className="text-xs font-mono text-gray-500 mb-2 flex items-center gap-1.5">
          PN: {pn}
          {displayed?.name && <PNVariantTooltip variantName={displayed.name} />}
        </p>
      )}
      <div className="flex items-baseline gap-2">
        {loading || !price ? (
          <span className="inline-block h-9 w-40 bg-gray-200 rounded animate-pulse" />
        ) : (
          <span className="text-2xl sm:text-3xl font-bold text-gray-900">
            {price.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
          </span>
        )}
        <span className="text-sm text-gray-500">netto</span>
        {DEVICE_CATEGORIES.has(product.categoryId) && <PriceTooltip />}
      </div>
      <p className="text-sm text-gray-400 mt-1">
        {loading || !price ? (
          <span className="inline-block h-4 w-28 bg-gray-200 rounded animate-pulse" />
        ) : (
          <>{(price * 1.23).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł brutto</>
        )}
      </p>
      {displayedPn.length > 0 && <StockInfo partNumbers={displayedPn} />}
    </div>
  )
}

function PNVariantTooltip({ variantName }: { variantName: string }) {
  const [show, setShow] = useState(false)
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)
  const triggerRef = useRef<HTMLSpanElement>(null)

  const handleEnter = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setPos({ top: rect.bottom + 8, left: rect.left + rect.width / 2 })
    }
    setShow(true)
  }, [])

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={handleEnter}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(s => !s)}
        className="inline-flex w-4 h-4 rounded-full bg-gray-300 text-white text-[10px] font-bold leading-none items-center justify-center cursor-help hover:bg-primary-500 transition-colors shrink-0"
        aria-label={`Wariant: ${variantName}`}
      >
        ?
      </span>
      {show && pos && createPortal(
        <span
          style={{ top: pos.top, left: pos.left }}
          className="fixed -translate-x-1/2 w-72 px-3 py-2 bg-gray-900 text-white text-xs font-normal rounded-lg text-left leading-relaxed z-[9999] whitespace-pre-line shadow-lg pointer-events-none"
        >
          {variantName}
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900" />
        </span>,
        document.body
      )}
    </>
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
        className="w-7 h-7 sm:w-[18px] sm:h-[18px] rounded-full bg-gray-300 text-gray-600 text-xs sm:text-[11px] font-semibold leading-none flex items-center justify-center hover:bg-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        i
      </button>
      {open && (
        <div className="absolute right-0 sm:left-1/2 sm:-translate-x-1/2 bottom-full mb-2 w-56 sm:w-64 bg-gray-900 text-white text-xs leading-relaxed rounded-lg p-3 shadow-lg z-50">
          <p>Cena dotyczy 1 sztuki. Planujesz zakup większej ilości? Kliknij <strong>&bdquo;Zapytaj o produkt&rdquo;</strong> i podaj liczbę urządzeń &mdash; przygotujemy ofertę projektową z dedykowaną ceną.</p>
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-[6px] border-x-transparent border-t-[6px] border-t-gray-900" />
        </div>
      )}
    </div>
  )
}
