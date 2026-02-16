'use client'

import { useEffect, useState } from 'react'
import { PlusIcon, CheckIcon, ChevronDownIcon } from '@/components/ui/Icons'
import { useRFQStore } from '@/store/rfqStore'
import { ServicePlan } from '@/data/products'

interface ServicePlansBoxProps {
  plans: ServicePlan[]
  productSlug: string
  productName: string
}

export default function ServicePlansBox({ plans, productSlug, productName }: ServicePlansBoxProps) {
  const { addItem, isInRFQ } = useRFQStore()
  const [mounted, setMounted] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (plans.length === 0) return null

  return (
    <div className="mt-6 border border-blue-100 bg-blue-50 rounded-xl p-4">
      <div className="mb-3">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-gray-900">Zebra OneCare — kontrakt serwisowy</p>
          {/* Desktop: tooltip hover */}
          <span className="relative group/tip hidden sm:inline-flex">
            <span className="inline-flex w-4 h-4 rounded-full bg-gray-300 text-white text-[10px] font-bold leading-none items-center justify-center cursor-help hover:bg-primary-500 transition-colors">?</span>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 px-3 py-2 bg-gray-900 text-white text-xs font-normal rounded-lg text-left leading-relaxed z-50 whitespace-normal opacity-0 pointer-events-none group-hover/tip:opacity-100 transition-opacity">
              Zebra OneCare Essential (Comprehensive) — oficjalny program serwisowy Zebra Technologies. Obejmuje naprawę uszkodzeń przypadkowych (rozbity ekran, pęknięta obudowa), wymianę urządzenia oraz wsparcie techniczne 8×5. Czas naprawy: 3 dni robocze. Kontrakt można wykupić w ciągu 30 dni od daty zakupu urządzenia.
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
        <p className="text-xs text-gray-500">Rozszerzona ochrona z naprawą i wymianą urządzenia</p>
        {/* Mobile: expanded info */}
        {infoOpen && (
          <div className="sm:hidden mt-2 px-3 py-2 bg-gray-900 text-white text-xs font-normal rounded-lg leading-relaxed">
            Zebra OneCare Essential (Comprehensive) — oficjalny program serwisowy Zebra Technologies. Obejmuje naprawę uszkodzeń przypadkowych (rozbity ekran, pęknięta obudowa), wymianę urządzenia oraz wsparcie techniczne 8×5. Czas naprawy: 3 dni robocze. Kontrakt można wykupić w ciągu 30 dni od daty zakupu urządzenia.
          </div>
        )}
      </div>

      {plans.length === 1 ? (
        // Single plan — compact inline row
        (() => {
          const plan = plans[0]
          const itemId = `${productSlug}__onecare__${plan.partNumber}`
          const inRFQ = mounted ? isInRFQ(itemId) : false
          return (
            <div className="bg-white rounded-lg border border-gray-200 p-3 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-blue-700">{plan.duration}</span>
                  <span className="text-lg font-bold text-gray-900">
                    {plan.priceNetto.toLocaleString('pl-PL', { minimumFractionDigits: 2 })}
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
            const inRFQ = mounted ? isInRFQ(itemId) : false

            return (
              <div key={plan.partNumber} className="bg-white rounded-lg border border-gray-200 p-3">
                <p className="text-xs font-semibold text-blue-700 mb-0.5">{plan.duration}</p>
                <p className="text-lg font-bold text-gray-900">
                  {plan.priceNetto.toLocaleString('pl-PL', { minimumFractionDigits: 2 })}
                  <span className="text-xs font-normal text-gray-500 ml-1">zł netto</span>
                </p>
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
                  {inRFQ ? 'Dodano' : 'Dodaj'}
                </button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
