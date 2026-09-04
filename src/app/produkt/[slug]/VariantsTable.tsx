'use client'

import { useEffect, useState, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Badge } from '@/components/ui'
import { Button } from '@/components/ui'
import { PlusIcon, CheckIcon, BellIcon, ChevronDownIcon } from '@/components/ui/Icons'
import { useCartStore } from '@/store/cartStore'
import { ProductVariant } from '@/data/products'
import { useSmartPrice } from './SmartPriceContext'
import { MANUAL_STOCK_OVERRIDES } from '@/lib/stock-overrides'

interface VariantsTableProps {
  productSlug: string
  productName: string
  productImage?: string
  variants: ProductVariant[]
  variantAttributeTooltips?: Record<string, string>
  manufacturerId?: string
}

const availabilityConfig: Record<string, { label: string; variant: 'success' | 'warning' | 'danger' }> = {
  available: { label: 'Dostępny', variant: 'success' },
  check: { label: 'Na zamówienie', variant: 'warning' },
  'on-order': { label: 'Na zamówienie', variant: 'warning' },
  unavailable: { label: 'Niedostępny', variant: 'danger' },
}

function StockCell({ stockPL, stockDE, inDelivery, incomingDate, loading, manual }: { stockPL: number; stockDE: number; inDelivery: number; incomingDate?: string; loading: boolean; manual?: boolean }) {
  if (loading) {
    return <span className="text-xs text-gray-400 animate-pulse">...</span>
  }

  if (manual && stockPL + stockDE > 0) {
    return <span className="text-xs text-gray-700">Dystrybutor: {stockPL + stockDE} szt.</span>
  }

  if (stockPL === 0 && stockDE === 0 && inDelivery === 0) {
    return <span className="text-xs text-gray-400">—</span>
  }

  if (stockPL === 0 && stockDE === 0 && inDelivery > 0) {
    return (
      <div className="relative group space-y-0.5">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          <span className="text-xs text-gray-700">W drodze: {inDelivery}</span>
        </div>
        {incomingDate && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10">
            ETA: {new Date(incomingDate).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative group space-y-0.5">
      {stockPL > 0 && (
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          <span className="text-xs text-gray-700">PL: {stockPL}</span>
        </div>
      )}
      {stockDE > 0 && (
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
          <span className="text-xs text-gray-700">EU: {stockDE}</span>
        </div>
      )}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          PL — Dostawa 24h
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
          EU — Dostawa 72h
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
      </div>
    </div>
  )
}

function NotifyButton({ partNumber, productName }: { partNumber: string; productName: string }) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('sending')
    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, partNumber, productName }),
      })
      if (res.ok) {
        setStatus('done')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs text-green-600 font-medium">
        <CheckIcon size={14} />
        Powiadomimy Cię
      </span>
    )
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg px-3 py-2.5 transition-colors whitespace-nowrap"
      >
        <BellIcon size={14} />
        Powiadom
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-1">
      <input
        ref={inputRef}
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-32 px-2.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-50 rounded-lg px-3 py-2 transition-colors"
      >
        {status === 'sending' ? '...' : 'OK'}
      </button>
      <button
        type="button"
        onClick={() => { setOpen(false); setStatus('idle') }}
        className="text-gray-400 hover:text-gray-600 text-sm leading-none p-1"
      >
        &times;
      </button>
      {status === 'error' && (
        <span className="text-xs text-red-500">!</span>
      )}
    </form>
  )
}

const attributeTooltips: Record<string, string> = {
  'Odklejak': 'Odklejak (dyspenser) automatycznie oddziela etykietę od podłoża (liner) podczas druku. Dzięki temu etykieta jest gotowa do natychmiastowego naklejenia — nie musisz jej ręcznie odrywać. Przydatny przy dużych ilościach etykiet naklejanych ręcznie.',
  'Gilotyna': 'Gilotyna (obcinacz) automatycznie odcina etykietę po wydrukowaniu. Idealna przy druku pojedynczych etykiet lub krótkich serii — każda etykieta jest od razu gotowa do użycia, bez ręcznego odrywania.',
  'Nawijak': 'Nawijak (rewinder) nawija zużyty liner (podłoże) po odklejeniu etykiety, utrzymując porządek na stanowisku pracy. Niezbędny przy dużych wolumenach druku z odklejakiem — bez niego liner spada na podłogę i plącze się.',
  'Linerless': 'Tryb linerless pozwala drukować na etykietach bez podłoża (linera). Eliminuje odpady — nie ma wstęgi do wyrzucenia. Na jednej rolce mieści się nawet 40% więcej etykiet. Wymaga specjalnej głowicy i wałka dociskowego przystosowanego do kleju.',
  'RFID-ready': 'Wariant z gniazdem do montażu czytnika RFID (np. Zebra RFD40). Pozwala dodać funkcję odczytu znaczników RFID bez wymiany terminala. Przydatne w magazynach i sklepach do szybkiej inwentaryzacji — skanowanie całej półki w sekundach zamiast pojedynczych kodów kreskowych.',
  'Lokalizator BLE': 'Wbudowany beacon Bluetooth Low Energy umożliwia śledzenie lokalizacji urządzenia w budynku. Jeśli terminal zostanie zgubiony, administrator widzi jego pozycję na mapie w aplikacji Zebra Device Tracker. Przydatne przy dużych flotach urządzeń.',
  'Zasięg': 'Typ fokusa optyki skanera:\n• SR (Standard Range) — standardowe kody do ~1 m, najczęstszy wybór do retail i magazynu.\n• HD (High Density) — małe kody do ~22 cm, apteki, elektronika, farmacja.\n• Ultra HD (tylko wariant li) — kody od 2 mil + DPM z metalu/plastiku, produkcja.',
  'Ładowanie': 'Sposób ładowania skanera w bazie:\n• Stykowe (contact) — metalowe styki w bazie, tańsze.\n• Indukcyjne (contactless) — bezstykowe, eliminuje korozję styków i wydłuża żywotność bazy. Droższe o ~15–40 zł.',
  'Zasilanie': 'Źródło energii skanera:\n• Li-ion (3 300 mAh) — 80 000 skanów / 22 h pracy, ładowanie 4,5 h. Gwarancja 1 rok.\n• Superkondensator — 450+ skanów, ładowanie < 60 s, gwarancja 5 lat. Lżejszy (218 g vs 247 g). Idealny do kas POS.',
}


function AttributeLabel({ label, extraTooltips }: { label: string; extraTooltips?: Record<string, string> }) {
  const tooltip = extraTooltips?.[label] || attributeTooltips[label]
  const [show, setShow] = useState(false)
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)
  const triggerRef = useRef<HTMLSpanElement>(null)

  if (!tooltip) return <>{label}</>

  const handleEnter = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setPos({ top: rect.bottom + 8, left: rect.left + rect.width / 2 })
    }
    setShow(true)
  }

  return (
    <span className="inline-flex items-center gap-1.5">
      {label}
      <span
        ref={triggerRef}
        onMouseEnter={handleEnter}
        onMouseLeave={() => setShow(false)}
        className="inline-flex w-4 h-4 rounded-full bg-gray-300 text-white text-[10px] font-bold leading-none items-center justify-center cursor-help hover:bg-primary-500 transition-colors"
        aria-label={`Wyjaśnienie: ${label}`}
      >
        ?
      </span>
      {show && pos && createPortal(
        <span
          style={{ top: pos.top, left: pos.left }}
          className="fixed -translate-x-1/2 w-72 px-3 py-2 bg-gray-900 text-white text-xs font-normal rounded-lg text-left leading-relaxed z-[9999] whitespace-pre-line shadow-lg"
        >
          {tooltip}
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900" />
        </span>,
        document.body
      )}
    </span>
  )
}

function DesktopRow({ variant, productSlug, productName, productImage, attributeKeys, rowIndex, mounted, stockData, stockLoading, addItem, isInCart, manufacturerId }: {
  variant: ProductVariant
  productSlug: string
  productName: string
  productImage?: string
  attributeKeys: string[]
  rowIndex: number
  mounted: boolean
  stockData: Map<string, { found: boolean; stockPL: number; stockDE: number; inDelivery: number; incomingDate?: string; availability: 'available' | 'on-order' | 'unavailable'; price?: number; ingramPrice?: number }>
  stockLoading: boolean
  addItem: (item: { id: string; name: string; slug: string; image?: string; partNumber: string; priceNetto?: number }) => void
  isInCart: (id: string) => boolean
  manufacturerId?: string
}) {
  const inRFQ = mounted ? isInCart(`${productSlug}__${variant.partNumber}`) : false
  const stock = stockData.get(variant.partNumber)
  // Live nadpisuje editorial gdy dystrybutor zwrócił realny sygnał: found=true LUB totalStock>0
  // (np. override Jarltech, który nie ustawia found). Brak sygnału → editorial fallback.
  const liveSignal = !!stock && (stock.found || stock.stockPL > 0 || stock.stockDE > 0 || stock.inDelivery > 0)
  const avail = liveSignal
    ? availabilityConfig[stock!.availability]
    : availabilityConfig[variant.availability]
  const effectiveAvailability = liveSignal ? stock!.availability : variant.availability
  const isUnavailable = !stockLoading && (effectiveAvailability === 'unavailable' || effectiveAvailability === 'on-order')
  const livePrice = liveSignal && stock!.price ? stock!.price : variant.priceFrom
  const cartPrice = variant.promoPrice || livePrice

  return (
    <tr className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-primary-50/50 transition-colors`}>
      <td className={`${attributeKeys.length >= 5 ? 'px-2' : 'px-3'} py-3.5 text-sm font-mono font-semibold text-gray-900 whitespace-nowrap`}>
        {variant.partNumber}
      </td>
      {attributeKeys.map((key) => (
        <td key={key} className={`${attributeKeys.length >= 5 ? 'px-2' : 'px-3'} py-3.5 text-sm text-gray-700 text-center`}>
          {variant.attributes[key] || '—'}
        </td>
      ))}
      <td className="px-3 py-3.5 text-sm whitespace-nowrap">
        {stockLoading ? (
          <span className="inline-block h-4 w-20 bg-gray-200 rounded animate-pulse" />
        ) : variant.promoPrice ? (
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-gray-400 line-through">
              {livePrice ? `${livePrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł` : ''}
            </span>
            <span className="font-bold text-red-600">
              {variant.promoPrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
            </span>
            {variant.promoLabel && (
              <span className="inline-block text-[10px] font-bold text-white bg-red-500 rounded px-1.5 py-0.5 w-fit uppercase tracking-wide">
                {variant.promoLabel}
              </span>
            )}
          </div>
        ) : livePrice
            ? <span className="font-semibold text-gray-900">{`${livePrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł`}</span>
            : 'Na zapytanie'
        }
      </td>
      <td className="px-3 py-3.5">
        <StockCell stockPL={stock?.stockPL ?? 0} stockDE={stock?.stockDE ?? 0} inDelivery={stock?.inDelivery ?? 0} incomingDate={stock?.incomingDate} loading={stockLoading} manual={MANUAL_STOCK_OVERRIDES.has(variant.partNumber.toUpperCase())} />
      </td>
      <td className="px-3 py-3.5 text-center">
        <Badge variant={avail.variant}>{avail.label}</Badge>
      </td>
      <td className="sticky right-0 z-10 bg-inherit px-3 py-3.5 text-center whitespace-nowrap shadow-[-8px_0_12px_-8px_rgba(0,0,0,0.12)]">
        {isUnavailable ? (
          <NotifyButton partNumber={variant.partNumber} productName={`${productName} (${variant.partNumber})`} />
        ) : !cartPrice ? (
          <span className="text-xs text-gray-400">Zapytaj</span>
        ) : (
          <Button
            size="sm"
            variant={inRFQ ? 'secondary' : manufacturerId === 'zebra' ? 'zebra' : 'primary'}
            onClick={() => addItem({
              id: `${productSlug}__${variant.partNumber}`,
              name: productName,
              slug: productSlug,
              image: productImage,
              partNumber: variant.partNumber,
              priceNetto: cartPrice,
            })}
            leftIcon={inRFQ ? <CheckIcon size={14} /> : <PlusIcon size={14} />}
          >
            {inRFQ ? 'Dodano' : 'Koszyk'}
          </Button>
        )}
      </td>
    </tr>
  )
}

function MobileCard({ variant, productSlug, productName, productImage, attributeKeys, mounted, stockData, stockLoading, addItem, isInCart, variantAttributeTooltips, manufacturerId }: {
  variant: ProductVariant
  productSlug: string
  productName: string
  productImage?: string
  attributeKeys: string[]
  mounted: boolean
  stockData: Map<string, { found: boolean; stockPL: number; stockDE: number; inDelivery: number; incomingDate?: string; availability: 'available' | 'on-order' | 'unavailable'; price?: number; ingramPrice?: number }>
  stockLoading: boolean
  addItem: (item: { id: string; name: string; slug: string; image?: string; partNumber: string; priceNetto?: number }) => void
  isInCart: (id: string) => boolean
  variantAttributeTooltips?: Record<string, string>
  manufacturerId?: string
}) {
  const inRFQ = mounted ? isInCart(`${productSlug}__${variant.partNumber}`) : false
  const stock = stockData.get(variant.partNumber)
  // Live nadpisuje editorial gdy dystrybutor zwrócił realny sygnał: found=true LUB totalStock>0
  // (np. override Jarltech, który nie ustawia found). Brak sygnału → editorial fallback.
  const liveSignal = !!stock && (stock.found || stock.stockPL > 0 || stock.stockDE > 0 || stock.inDelivery > 0)
  const avail = liveSignal
    ? availabilityConfig[stock!.availability]
    : availabilityConfig[variant.availability]
  const effectiveAvailability = liveSignal ? stock!.availability : variant.availability
  const isUnavailable = !stockLoading && (effectiveAvailability === 'unavailable' || effectiveAvailability === 'on-order')
  const livePrice = liveSignal && stock!.price ? stock!.price : variant.priceFrom
  const cartPrice = variant.promoPrice || livePrice

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-wide">Part Number</span>
          <p className="text-sm font-mono font-semibold text-gray-900 break-all">{variant.partNumber}</p>
        </div>
        <Badge variant={avail.variant}>{avail.label}</Badge>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
        {attributeKeys.map((key) => (
          <div key={key}>
            <span className="text-xs text-gray-500"><AttributeLabel label={key} extraTooltips={variantAttributeTooltips} /></span>
            <p className="text-sm font-medium text-gray-900">
              {variant.attributes[key] || '—'}
            </p>
          </div>
        ))}
      </div>

      {!stockLoading && stock && (stock.stockPL > 0 || stock.stockDE > 0) && (
        <div className="flex items-center gap-3 text-xs text-gray-600">
          {stock.stockPL > 0 && (
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              {MANUAL_STOCK_OVERRIDES.has(variant.partNumber.toUpperCase()) ? 'Dystrybutor' : 'PL'}: {stock.stockPL} szt.
            </span>
          )}
          {stock.stockDE > 0 && (
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
              EU: {stock.stockDE} szt.
            </span>
          )}
        </div>
      )}
      {!stockLoading && stock && stock.stockPL === 0 && stock.stockDE === 0 && stock.inDelivery > 0 && (
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            W drodze: {stock.inDelivery} szt.
          </span>
          {stock.incomingDate && (
            <span className="text-blue-500">
              (ETA: {new Date(stock.incomingDate).toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' })})
            </span>
          )}
        </div>
      )}

      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div>
          {stockLoading ? (
            <span className="inline-block h-5 w-24 bg-gray-200 rounded animate-pulse" />
          ) : variant.promoPrice ? (
              <div>
                <span className="text-sm text-gray-400 line-through block">
                  {livePrice ? `${livePrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł` : ''}
                </span>
                <span className="text-lg font-bold text-red-600">
                  {variant.promoPrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
                </span>
                <span className="text-xs text-gray-500"> netto</span>
                {variant.promoLabel && (
                  <span className="ml-2 inline-block text-[10px] font-bold text-white bg-red-500 rounded px-1.5 py-0.5 uppercase tracking-wide">
                    {variant.promoLabel}
                  </span>
                )}
              </div>
            ) : livePrice ? (
              <div>
                <span className="text-lg font-bold text-gray-900">
                  {livePrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
                </span>
                <span className="text-xs text-gray-500"> netto</span>
              </div>
            ) : (
              <span className="text-sm text-gray-600">Cena na zapytanie</span>
            )
          }
        </div>
        {isUnavailable ? (
          <NotifyButton partNumber={variant.partNumber} productName={`${productName} (${variant.partNumber})`} />
        ) : (
          <Button
            size="md"
            variant={inRFQ ? 'secondary' : manufacturerId === 'zebra' ? 'zebra' : 'primary'}
            onClick={() => addItem({
              id: `${productSlug}__${variant.partNumber}`,
              name: productName,
              slug: productSlug,
              image: productImage,
              partNumber: variant.partNumber,
              priceNetto: cartPrice,
            })}
            leftIcon={inRFQ ? <CheckIcon size={16} /> : <PlusIcon size={16} />}
          >
            {inRFQ ? 'Dodano' : 'Koszyk'}
          </Button>
        )}
      </div>
    </div>
  )
}

export default function VariantsTable({ productSlug, productName, productImage, variants, variantAttributeTooltips, manufacturerId }: VariantsTableProps) {
  const { addItem, isInCart } = useCartStore()
  const [mounted, setMounted] = useState(false)
  const [showUnavailable, setShowUnavailable] = useState(false)

  const { stockData, loading: stockLoading } = useSmartPrice()

  useEffect(() => {
    setMounted(true)
  }, [])

  const attributeKeys = useMemo(() => Array.from(
    new Set(variants.flatMap((v) => Object.keys(v.attributes)))
  ), [variants])

  // Podział na dostępne i niedostępne
  // Gdy stock się ładuje, pokaż wszystko razem (bez podziału)
  const { availableVariants, unavailableVariants } = useMemo(() => {
    if (stockLoading) {
      return { availableVariants: variants, unavailableVariants: [] as ProductVariant[] }
    }
    const available: ProductVariant[] = []
    const unavailable: ProductVariant[] = []
    for (const v of variants) {
      const stock = stockData.get(v.partNumber)
      const liveSignal = !!stock && (stock.found || stock.stockPL > 0 || stock.stockDE > 0 || stock.inDelivery > 0)
      const effectiveAvailability = liveSignal ? stock!.availability : v.availability
      if (effectiveAvailability === 'unavailable' || effectiveAvailability === 'on-order') {
        unavailable.push(v)
      } else {
        available.push(v)
      }
    }
    return { availableVariants: available, unavailableVariants: unavailable }
  }, [variants, stockData, stockLoading])

  if (variants.length === 0) return null

  const sharedProps = { productSlug, productName, productImage, attributeKeys, mounted, stockData, stockLoading, addItem, isInCart, variantAttributeTooltips, manufacturerId }
  const colCount = 4 + attributeKeys.length // PN + attrs + cena + magazyn + status + akcja
  // Przy wielu atrybutach (np. TC501: 6) tabela nie mieściła się w kolumnie —
  // ciaśniejsze odstępy i nagłówki łamane na dwie linie zamiast jednej długiej
  const dense = attributeKeys.length >= 5

  return (
    <section id="warianty" className="scroll-mt-28">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Dostępne warianty</h2>

      {/* Desktop: tabela */}
      <div className="hidden md:block overflow-x-auto bg-gray-50 rounded-xl">
        <table className="w-full">
          <caption className="sr-only">Warianty i konfiguracje {productName}</caption>
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th scope="col" className={`${dense ? 'px-2' : 'px-3'} py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider first:rounded-tl-xl`}>
                Part Number
              </th>
              {attributeKeys.map((key) => (
                <th key={key} scope="col" className={`${dense ? 'px-2' : 'px-3'} py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider leading-tight ${dense ? 'max-w-[6.5rem]' : 'whitespace-nowrap'}`}>
                  <AttributeLabel label={key} extraTooltips={variantAttributeTooltips} />
                </th>
              ))}
              <th scope="col" className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Cena netto
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Magazyn
              </th>
              <th scope="col" className="px-3 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="sticky right-0 z-10 bg-gray-100 px-3 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider rounded-tr-xl shadow-[-8px_0_12px_-8px_rgba(0,0,0,0.12)]">
                Akcja
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {availableVariants.map((variant, i) => (
              <DesktopRow key={variant.partNumber} variant={variant} rowIndex={i} {...sharedProps} />
            ))}
          </tbody>
          {unavailableVariants.length > 0 && (
            <tbody>
              <tr>
                <td colSpan={colCount}>
                  <button
                    onClick={() => setShowUnavailable(!showUnavailable)}
                    className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <ChevronDownIcon size={16} className={`transition-transform duration-200 ${showUnavailable ? 'rotate-180' : ''}`} />
                    {showUnavailable
                      ? 'Ukryj niedostępne warianty'
                      : `Pokaż niedostępne warianty (${unavailableVariants.length})`}
                  </button>
                </td>
              </tr>
            </tbody>
          )}
          {showUnavailable && unavailableVariants.length > 0 && (
            <tbody className="divide-y divide-gray-200 bg-gray-50/50">
              {unavailableVariants.map((variant, i) => (
                <DesktopRow key={variant.partNumber} variant={variant} rowIndex={i} {...sharedProps} />
              ))}
            </tbody>
          )}
        </table>
      </div>

      {/* Mobile: karty */}
      <div className="md:hidden space-y-3">
        {availableVariants.map((variant) => (
          <MobileCard key={variant.partNumber} variant={variant} {...sharedProps} />
        ))}

        {unavailableVariants.length > 0 && (
          <>
            <button
              onClick={() => setShowUnavailable(!showUnavailable)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
            >
              <ChevronDownIcon size={16} className={`transition-transform duration-200 ${showUnavailable ? 'rotate-180' : ''}`} />
              {showUnavailable
                ? 'Ukryj niedostępne warianty'
                : `Pokaż niedostępne warianty (${unavailableVariants.length})`}
            </button>
            {showUnavailable && unavailableVariants.map((variant) => (
              <MobileCard key={variant.partNumber} variant={variant} {...sharedProps} />
            ))}
          </>
        )}
      </div>
    </section>
  )
}
