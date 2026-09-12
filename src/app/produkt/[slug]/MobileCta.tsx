'use client'

import { useSmartPrice } from './SmartPriceContext'
import AddToRFQButton from './AddToRFQButton'
import AskAboutProductButton from './AskAboutProductButton'
import { PhoneIcon } from '@/components/ui/Icons'
import type { Product } from '@/data/products'

/**
 * Stały pasek na telefonie. Gdy produkt ma cenę, głównym działaniem jest zakup wybranego
 * wariantu (cena w przycisku), obok skrót do wyboru wariantu i telefon. Bez ceny zostaje
 * zapytanie o produkt. Wcześniej pasek zawsze promował tylko zapytanie i telefon.
 */
export default function MobileCta({ product, hasVariants }: { product: Product; hasVariants: boolean }) {
  const { price, loading } = useSmartPrice()
  const canBuy = loading || !!price
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] lg:hidden z-40">
      <div className="flex items-center gap-2">
        <div className="flex-1 min-w-0">
          {canBuy ? (
            <AddToRFQButton product={product} compact />
          ) : (
            <AskAboutProductButton productName={product.name} productSlug={product.slug} compact />
          )}
        </div>
        {canBuy && hasVariants && (
          <a
            href="#warianty"
            className="flex items-center justify-center h-12 px-3 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-800 shrink-0"
          >
            Warianty
          </a>
        )}
        <a
          href="tel:+48607819688"
          aria-label="Zadzwoń do nas"
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors active:scale-[0.96] shrink-0"
        >
          <PhoneIcon size={22} />
        </a>
      </div>
      {canBuy && !loading && price && (
        <p className="mt-1 text-center text-xs text-gray-500 tabular-nums">
          {price.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł netto za wybrany wariant
        </p>
      )}
    </div>
  )
}
