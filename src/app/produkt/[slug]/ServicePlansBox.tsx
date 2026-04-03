'use client'

import { useEffect, useState, useMemo } from 'react'
import { PlusIcon, CheckIcon, ChevronDownIcon } from '@/components/ui/Icons'
import { useCartStore } from '@/store/cartStore'
import { ServicePlan } from '@/data/products'
import { useStockData } from './StockInfo'

interface ServicePlansBoxProps {
  plans: ServicePlan[]
  productSlug: string
  productName: string
  manufacturerId?: string
}

const SERVICE_INFO: Record<string, { title: string; subtitle: string; tooltip: string }> = {
  zebra: {
    title: 'Zebra OneCare — kontrakt serwisowy',
    subtitle: 'Rozszerzona ochrona z naprawą i wymianą urządzenia',
    tooltip: 'Zebra OneCare Essential (Comprehensive) — oficjalny program serwisowy Zebra Technologies. Obejmuje naprawę uszkodzeń przypadkowych (rozbity ekran, pęknięta obudowa), wymianę urządzenia oraz wsparcie techniczne 8×5. Czas naprawy: 3 dni robocze. Kontrakt można wykupić w ciągu 30 dni od daty zakupu urządzenia.',
  },
  datalogic: {
    title: 'Datalogic EaseOfCare — kontrakt serwisowy',
    subtitle: 'Kompleksowa ochrona z naprawą w 3 dni robocze',
    tooltip: 'Datalogic EaseOfCare (Comprehensive) — oficjalny program serwisowy Datalogic. Obejmuje naprawę uszkodzeń przypadkowych, wymianę podzespołów oraz wsparcie techniczne. Czas naprawy: 3 dni robocze (opcja Overnight Replacement dla najszybszego zwrotu). Kontrakt dostępny w wariantach 1, 3 i 5 lat.',
  },
  honeywell: {
    title: 'Honeywell Service Plan — kontrakt serwisowy',
    subtitle: 'Rozszerzona ochrona z naprawą i wsparciem technicznym',
    tooltip: 'Honeywell Service Plan — oficjalny program serwisowy Honeywell. Obejmuje naprawę uszkodzeń, wymianę urządzenia oraz wsparcie techniczne. Czas naprawy zależny od poziomu kontraktu.',
  },
  'm3-mobile': {
    title: 'M3 Speed Care — kontrakt serwisowy',
    subtitle: 'Rozszerzona gwarancja z naprawą uszkodzeń przypadkowych',
    tooltip: 'M3 Speed Care — oficjalny program serwisowy M3 Mobile. Pakiet 3-letni i 5-letni obejmuje naprawę uszkodzeń przypadkowych, gwarancję baterii 1 rok, czas naprawy 7 dni (vs 14 w Basic). Kontrakt trzeba wykupić w ciągu 45 dni od zakupu. Szczegóły: /poradnik/m3-speed-care-kontrakty-serwisowe',
  },
  _default: {
    title: 'Kontrakt serwisowy',
    subtitle: 'Rozszerzona ochrona z naprawą urządzenia',
    tooltip: 'Kontrakt serwisowy producenta. Obejmuje naprawę uszkodzeń i wsparcie techniczne. Szczegóły zależne od wybranego planu.',
  },
}

const MARGIN = 1.15

export default function ServicePlansBox({ plans, productSlug, productName, manufacturerId }: ServicePlansBoxProps) {
  const info = SERVICE_INFO[manufacturerId || ''] || SERVICE_INFO._default
  const { addItem, isInCart } = useCartStore()
  const [mounted, setMounted] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)

  const partNumbers = useMemo(() => plans.map(p => p.partNumber), [plans])
  const { stockData, loading: priceLoading } = useStockData(partNumbers)

  // Cena live z Ingram (ingramPrice × 1.15) lub fallback na statyczną
  function getLivePrice(plan: ServicePlan): number {
    const stock = stockData.get(plan.partNumber)
    if (stock?.found && stock.ingramPrice) {
      return Math.round(stock.ingramPrice * MARGIN * 100) / 100
    }
    return plan.priceNetto
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (plans.length === 0) return null

  return (
    <div className="mt-6 border border-blue-100 bg-blue-50 rounded-xl p-4">
      <div className="mb-3">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-gray-900">{info.title}</p>
          {/* Desktop: tooltip hover */}
          <span className="relative group/tip hidden sm:inline-flex">
            <span className="inline-flex w-4 h-4 rounded-full bg-gray-300 text-white text-[10px] font-bold leading-none items-center justify-center cursor-help hover:bg-primary-500 transition-colors">?</span>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 px-3 py-2 bg-gray-900 text-white text-xs font-normal rounded-lg text-left leading-relaxed z-50 whitespace-normal opacity-0 pointer-events-none group-hover/tip:opacity-100 transition-opacity">
              {info.tooltip}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
            </span>
          </span>
          {/* Mobile: click to expand */}
          <button
            onClick={() => setInfoOpen(!infoOpen)}
            className="sm:hidden inline-flex w-4 h-4 rounded-full bg-gray-300 text-white text-[10px] font-bold leading-none items-center justify-center active:bg-primary-500 transition-colors"
          >
            ?
          </button>
        </div>
        <p className="text-xs text-gray-500">{info.subtitle}</p>
        {/* Mobile: expanded info */}
        {infoOpen && (
          <div className="sm:hidden mt-2 px-3 py-2 bg-gray-900 text-white text-xs font-normal rounded-lg leading-relaxed">
            {info.tooltip}
          </div>
        )}
      </div>

      {plans.length === 1 ? (
        // Single plan — compact inline row
        (() => {
          const plan = plans[0]
          const itemId = `${productSlug}__onecare__${plan.partNumber}`
          const inRFQ = mounted ? isInCart(itemId) : false
          return (
            <div className="bg-white rounded-lg border border-gray-200 p-3 flex flex-col xs:flex-row xs:items-center justify-between gap-3 xs:gap-4">
              <div className="min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-blue-700">{plan.duration}</span>
                  <span className={`text-lg font-bold text-gray-900 ${priceLoading ? 'animate-pulse' : ''}`}>
                    {getLivePrice(plan).toLocaleString('pl-PL', { minimumFractionDigits: 2 })}
                    <span className="text-xs font-normal text-gray-500 ml-1">zł netto</span>
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{plan.partNumber}</p>
              </div>
              <button
                onClick={() => addItem({
                  id: itemId,
                  name: `${plan.name} (${productName})`,
                  slug: productSlug,
                  partNumber: plan.partNumber,
                })}
                className={`shrink-0 flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-medium rounded-lg transition-all duration-200 active:scale-[0.98] ${
                  inRFQ
                    ? 'bg-white text-primary-600 border-2 border-primary-600'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {inRFQ ? <CheckIcon size={14} /> : <PlusIcon size={14} />}
                {inRFQ ? 'Dodano' : 'Dodaj'}
              </button>
            </div>
          )
        })()
      ) : (
        // Multiple plans — grid layout
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {plans.map((plan) => {
            const itemId = `${productSlug}__onecare__${plan.partNumber}`
            const inRFQ = mounted ? isInCart(itemId) : false

            return (
              <div key={plan.partNumber} className="bg-white rounded-lg border border-gray-200 p-3">
                <p className="text-xs font-semibold text-blue-700 mb-0.5">{plan.duration}</p>
                {getLivePrice(plan) > 0 ? (
                  <p className={`text-lg font-bold text-gray-900 ${priceLoading ? 'animate-pulse' : ''}`}>
                    {getLivePrice(plan).toLocaleString('pl-PL', { minimumFractionDigits: 2 })}
                    <span className="text-xs font-normal text-gray-500 ml-1">zł netto</span>
                  </p>
                ) : (
                  <p className={`text-sm font-semibold text-gray-500 ${priceLoading ? 'animate-pulse' : ''}`}>
                    Zapytaj o cenę
                  </p>
                )}
                <p className="text-xs text-gray-400 mb-2.5">{plan.partNumber}</p>
                <button
                  onClick={() => addItem({
                    id: itemId,
                    name: `${plan.name} (${productName})`,
                    slug: productSlug,
                    partNumber: plan.partNumber,
                  })}
                  className={`w-full flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-lg transition-all duration-200 active:scale-[0.98] ${
                    inRFQ
                      ? 'bg-white text-primary-600 border-2 border-primary-600'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  {inRFQ ? <CheckIcon size={14} /> : <PlusIcon size={14} />}
                  {inRFQ ? 'Dodano' : getLivePrice(plan) > 0 ? 'Dodaj' : '+ Zapytaj'}
                </button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
