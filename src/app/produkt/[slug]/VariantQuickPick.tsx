'use client'

import { useRouter } from 'next/navigation'
import { useSmartPrice } from './SmartPriceContext'
import type { ProductVariant } from '@/data/products'

/**
 * Szybki wybór wariantu na telefonie: jedna pigułka na konfigurację („203 dpi, USB + Ethernet”),
 * zamiast czytania tabeli po numerach PN. Klik ustawia ?pn= w adresie, a boks ceny i koszyk
 * biorą wybrany wariant z kontekstu. Na desktopie zostaje tabela.
 */
export default function VariantQuickPick({ variants }: { variants: ProductVariant[] }) {
  const router = useRouter()
  const { displayedPn, stockData, loading } = useSmartPrice()
  const named = variants.filter(v => v.name)
  if (named.length < 2) return null
  const isOut = (pn: string) => {
    const s = stockData.get(pn)
    return !loading && !!s?.found && s.totalStock <= 0
  }
  return (
    <div className="lg:hidden mb-5">
      <p className="text-sm font-semibold text-gray-900 mb-2">Wybierz konfigurację</p>
      <div className="flex flex-wrap gap-2">
        {named.map(v => {
          const active = v.partNumber === displayedPn
          const out = isOut(v.partNumber)
          return (
            <button
              key={v.partNumber}
              type="button"
              aria-pressed={active}
              onClick={() => router.replace(`?pn=${encodeURIComponent(v.partNumber)}`, { scroll: false })}
              className={`rounded-lg border px-3 py-2 text-sm text-left transition-colors ${
                active ? 'border-primary-600 bg-primary-50 text-primary-800 font-semibold' : 'border-gray-300 bg-white text-gray-800'
              } ${out ? 'opacity-50' : ''}`}
            >
              {v.name}
              {out ? <span className="block text-[11px] font-normal text-gray-500">niedostępny</span> : null}
            </button>
          )
        })}
      </div>
    </div>
  )
}
