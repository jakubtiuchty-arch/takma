'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Product } from '@/data/products'
import { useSmartPrice } from './SmartPriceContext'
import StockInfo from './StockInfo'

interface SmartPriceProps {
  product: Product
}

/** Kategorie urządzeń — tooltip "oferta projektowa" wyświetlany tylko dla nich */
const DEVICE_CATEGORIES = new Set([
  'drukarki-etykiet', 'drukarki-kart', 'drukarki-opasek',
  'terminale-mobilne', 'skanery-kodow-kreskowych', 'tablety-przemyslowe',
])

export default function SmartPrice({ product }: SmartPriceProps) {
  const { displayedPn, price, loading, variantName } = useSmartPrice()

  // Brak wariantów i brak PNa → "Cena na zapytanie"
  if (!displayedPn && !product.priceFrom) {
    return (
      <div className="bg-gray-100 shadow-sm rounded-xl p-4 sm:p-6 mb-6">
        <p className="text-lg text-gray-600">Cena na zapytanie</p>
      </div>
    )
  }

  const displayedPnArr = displayedPn ? [displayedPn] : []

  return (
    <div className="bg-gray-100 shadow-sm rounded-xl p-4 sm:p-6 mb-6">
      {displayedPn && (
        <p className="text-xs font-mono text-gray-500 mb-2 flex items-center gap-1.5">
          PN: {displayedPn}
          {variantName && <PNVariantTooltip variantName={variantName} />}
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
      {displayedPnArr.length > 0 && <StockInfo partNumbers={displayedPnArr} />}
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
