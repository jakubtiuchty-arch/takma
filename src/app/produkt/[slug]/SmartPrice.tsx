'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Product } from '@/data/products'
import { useSmartPrice } from './SmartPriceContext'
import { useCartStore } from '@/store/cartStore'
import { ribbonCartonQty } from '@/data/ribbon-carton-qty'
import { Button } from '@/components/ui'
import { PlusIcon, CheckIcon } from '@/components/ui/Icons'

interface SmartPriceProps {
  product: Product
}

/** Kategorie urządzeń — tooltip "oferta projektowa" wyświetlany tylko dla nich */
const DEVICE_CATEGORIES = new Set([
  'drukarki-etykiet', 'drukarki-kart', 'drukarki-opasek',
  'terminale-mobilne', 'skanery-kodow-kreskowych', 'tablety-przemyslowe',
])

export default function SmartPrice({ product }: SmartPriceProps) {
  const { displayedPn, price, loading, variantName, stockData } = useSmartPrice()
  const { addItem, updateQuantity, isInCart, openDrawer } = useCartStore()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Brak wariantów i brak PNa → "Cena na zapytanie"
  if (!displayedPn && !product.priceFrom) {
    return (
      <div className="bg-gray-100 shadow-sm rounded-xl p-4 sm:p-6 mb-6">
        <p className="text-lg text-gray-600">Cena na zapytanie</p>
      </div>
    )
  }

  // Stock info z kontekstu — zero osobnych fetchów
  const stock = displayedPn ? stockData.get(displayedPn) : undefined
  const hasStockData = !loading && stock?.found

  // Cena kartonowa (tylko taśmy) — zakup całego opakowania wychodzi taniej za rolkę:
  // liczymy marżę 13% zamiast 20%. Raw (ingramPrice) gdy live, fallback z ceny per-rolkę.
  // Liczba rolek w kartonie ze snapshotu BlueStar (ribbon-carton-qty.ts).
  const isRibbon = product.subcategoryIds?.includes('tasmy-termotransferowe') ?? false
  const cartonQty = isRibbon && displayedPn ? ribbonCartonQty(displayedPn) : null
  const cartonPerRollRaw = isRibbon && price
    ? (stock?.ingramPrice ? stock.ingramPrice * 1.13 : (price * 1.13) / 1.20)
    : undefined
  const cartonPerRoll = cartonPerRollRaw ? Math.round(cartonPerRollRaw * 100) / 100 : undefined
  const showCarton = !!(cartonQty && cartonQty > 1 && cartonPerRoll)
  const cartonId = displayedPn ? `${displayedPn}__karton` : undefined
  const cartonInCart = mounted && cartonId ? isInCart(cartonId) : false

  const handleAddCarton = () => {
    if (!cartonId || !showCarton || cartonInCart) return
    addItem({
      id: cartonId,
      name: `${product.name}${variantName ? ` ${variantName}` : ''} — karton (${cartonQty} szt.)`,
      slug: product.slug,
      image: product.images[0],
      partNumber: displayedPn,
      priceNetto: cartonPerRoll,
      categoryId: product.categoryId,
    })
    updateQuantity(cartonId, cartonQty!)
    openDrawer()
  }

  return (
    <div className="bg-gray-100 shadow-sm rounded-xl p-4 sm:p-6 mb-6">
      {displayedPn && (
        <p className="text-xs font-mono text-gray-500 mb-2 flex items-center gap-1.5">
          PN: {displayedPn}
          {variantName && <PNVariantTooltip variantName={variantName} />}
        </p>
      )}
      <div className="flex items-baseline gap-2">
        {loading ? (
          <span className="inline-block h-9 w-40 bg-gray-200 rounded animate-pulse" />
        ) : price ? (
          <span className="text-2xl sm:text-3xl font-bold text-gray-900">
            {price.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
          </span>
        ) : (
          <span className="text-lg sm:text-xl font-medium text-gray-700">Cena na zapytanie</span>
        )}
        {price && <span className="text-sm text-gray-500">netto</span>}
        {DEVICE_CATEGORIES.has(product.categoryId) && <PriceTooltip />}
      </div>
      {(loading || price) && (
        <p className="text-sm text-gray-400 mt-1">
          {loading ? (
            <span className="inline-block h-4 w-28 bg-gray-200 rounded animate-pulse" />
          ) : (
            <>{(price! * 1.23).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł brutto</>
          )}
        </p>
      )}

      {/* Cena kartonowa (taśmy) — pełne opakowanie taniej za rolkę, z dodaniem do koszyka */}
      {!loading && showCarton && (
        <div className="mt-3 rounded-lg border border-slate-200 bg-white px-3 py-3 flex items-center justify-between gap-3 flex-wrap">
          <p className="text-sm text-gray-700">
            <strong className="text-gray-900">
              {cartonPerRoll!.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł netto
            </strong>
            <span className="text-gray-500">/szt.</span> przy zakupie kartonu{' '}
            <strong className="text-gray-900">({cartonQty} szt.)</strong>
          </p>
          <Button
            size="sm"
            variant={cartonInCart ? 'secondary' : 'primary'}
            onClick={handleAddCarton}
            leftIcon={cartonInCart ? <CheckIcon size={16} /> : <PlusIcon size={16} />}
          >
            {cartonInCart ? 'Karton w koszyku' : 'Zamów karton'}
          </Button>
        </div>
      )}

      {/* Stany magazynowe — bezpośrednio z kontekstu, bez osobnego fetcha */}
      {loading && displayedPn && (
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-400 animate-pulse">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          Sprawdzanie stanów magazynowych...
        </div>
      )}
      {hasStockData && (
        <div className="mt-3 space-y-1.5">
          {stock!.stockPL > 0 && (
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-gray-600">
                Magazyn PL: <strong className="text-gray-900">{stock!.stockPL} szt.</strong>
                <span className="text-gray-400 ml-1">— wysyłka 24h</span>
              </span>
            </div>
          )}
          {stock!.stockDE > 0 && (
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span className="text-gray-600">
                Magazyn EU: <strong className="text-gray-900">{stock!.stockDE} szt.</strong>
                <span className="text-gray-400 ml-1">— wysyłka 2-3 dni</span>
              </span>
            </div>
          )}
          {stock!.stockPL === 0 && stock!.stockDE === 0 && stock!.inDelivery > 0 && (
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-gray-600">
                W drodze: <strong className="text-gray-900">{stock!.inDelivery} szt.</strong>
              </span>
            </div>
          )}
          {stock!.stockPL === 0 && stock!.stockDE === 0 && stock!.inDelivery === 0 && (
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-400 rounded-full" />
              <span className="text-gray-500">Chwilowo niedostępn{isRibbon ? 'a' : 'y'}</span>
            </div>
          )}
        </div>
      )}
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
