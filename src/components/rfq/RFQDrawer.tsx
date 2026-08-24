'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import { CloseIcon, TrashIcon, MinusIcon, PlusIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { Button } from '@/components/ui'
import { MAX_PROMO_QTY } from '@/data/promos'
import { useCartStore, type CartItem } from '@/store/cartStore'
import { products } from '@/data/products'
import { useStockData } from '@/app/produkt/[slug]/StockInfo'
import { trackRemoveFromCart, trackViewCart } from '@/lib/ga-events'

function formatPrice(price: number): string {
  return price.toLocaleString('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

/**
 * Statyczny fallback — szuka ceny w products.ts (używany gdy live API nie zwróci wyniku)
 */
function findStaticPrice(productId: string | undefined): number | undefined {
  if (!productId) return undefined
  if (productId.includes('__onecare__')) return undefined
  if (productId.includes('__') && !productId.includes('__onecare__')) {
    const [slug, partNumber] = productId.split('__')
    const product = products.find((p) => p.slug === slug)
    if (product?.variants) {
      const variant = product.variants.find((v) => v.partNumber === partNumber)
      if (variant?.priceFrom) return variant.priceFrom
    }
    return product?.priceFrom
  }
  const product = products.find((p) => p.id === productId)
  return product?.priceFrom
}

/**
 * Zwraca cenę dla elementu koszyka: live API > zapisana w cart > statyczny fallback
 */
function getItemPrice(
  item: CartItem,
  stockData: Map<string, { found: boolean; price?: number }>
): number | undefined {
  // Pozycja z oferty handlowej — cena wynegocjowana, zamrożona jak w kasie.
  if (item.quoteNumber && item.priceNetto) {
    return item.priceNetto
  }
  // Promocja producencka — cena z karty produktu, do limitu sztuk.
  if (item.promoSku && item.priceNetto && item.quantity <= MAX_PROMO_QTY) {
    return item.priceNetto
  }
  // Pozycja kartonowa (taśma) — cena kartonowa (marża 13%) jest zapisana w priceNetto;
  // NIE podmieniaj jej żywą ceną pojedynczej rolki (marża 20%), mimo tego samego PN.
  if (item.productId.endsWith('__karton')) {
    return item.priceNetto ?? findStaticPrice(item.productId)
  }
  // 1. Live cena z API (najświeższa)
  if (item.partNumber) {
    const stock = stockData.get(item.partNumber)
    if (stock?.found && stock?.price) return stock.price
  }
  // 2. Cena zapisana w koszyku przy dodawaniu
  if (item.priceNetto) return item.priceNetto
  // 3. Statyczny fallback z products.ts
  return findStaticPrice(item.productId)
}

export default function RFQDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, updateNote, clearAll, addItem } =
    useCartStore()
  const [mounted, setMounted] = useState(false)

  // Hydration fix
  useEffect(() => {
    setMounted(true)
  }, [])

  // Blokuj scroll body gdy drawer jest otwarty + track view_cart
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
      if (items.length > 0) {
        const ga4Items = items.map(item => ({
          item_id: item.productId,
          item_name: item.productName,
          quantity: item.quantity,
          price: item.priceNetto,
        }))
        const total = items.reduce((sum, item) => sum + (item.priceNetto ?? 0) * item.quantity, 0)
        trackViewCart(ga4Items, total)
      }
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen, items])

  // Zamknij drawer przy naciśnięciu Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDrawer()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [closeDrawer])

  // Pobierz part numbery z koszyka do live API
  const cartPartNumbers = useMemo(() => {
    return items
      .map(item => item.partNumber)
      .filter((pn): pn is string => !!pn)
  }, [items])

  const { stockData, loading: priceLoading } = useStockData(cartPartNumbers)

  // Oblicz ceny dla elementów w koszyku (live API > zapisane > static)
  const itemPrices = useMemo(() => {
    const prices = new Map<string, number | undefined>()
    for (const item of items) {
      prices.set(item.productId, getItemPrice(item, stockData))
    }
    return prices
  }, [items, stockData])

  // Suma netto (tylko elementy z ceną)
  const subtotalNetto = useMemo(() => {
    let total = 0
    let hasAnyPrice = false
    for (const item of items) {
      const price = itemPrices.get(item.productId)
      if (price) {
        total += price * item.quantity
        hasAnyPrice = true
      }
    }
    return hasAnyPrice ? total : null
  }, [items, itemPrices])

  if (!mounted) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          'fixed inset-0 bg-black/50 z-50 transition-opacity duration-300',
          isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={clsx(
          'fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-xl z-50',
          'transform transition-transform duration-300 ease-out',
          'flex flex-col',
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Koszyk"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Koszyk</h2>
            <p className="text-sm text-gray-500">
              {items.length === 0
                ? 'Brak produktów'
                : `${items.length} ${items.length === 1 ? 'produkt' : items.length < 5 ? 'produkty' : 'produktów'}`}
            </p>
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Zamknij"
          >
            <CloseIcon size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-5.98.572M7.5 14.25H18M18 14.25a3 3 0 005.98.572M18 14.25H7.5m0 0L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Twój koszyk jest pusty
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Dodaj produkty, aby złożyć zamówienie
              </p>
              <Button variant="secondary" onClick={closeDrawer}>
                Przeglądaj katalog
              </Button>
            </div>
          ) : (
            <>
              {/* Produkty w koszyku */}
              <ul className="divide-y divide-gray-100">
                {items.map((item) => {
                  const unitPrice = itemPrices.get(item.productId)
                  return (
                    <li key={item.productId} className="px-6 py-4">
                      <div className="flex items-start gap-4">
                        {/* Obrazek produktu */}
                        {(item.productId?.includes('__onecare__') || item.productImage) && (
                          <div className="relative w-[70px] h-[70px] rounded-lg flex-shrink-0 overflow-hidden bg-gray-50">
                            <Image
                              src={item.productId?.includes('__onecare__') ? '/images/zebra-onecare-logo.png' : item.productImage!}
                              alt={item.productId?.includes('__onecare__') ? 'Zebra OneCare' : item.productName}
                              fill
                              className="object-contain p-1.5"
                              sizes="64px"
                            />
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/produkt/${item.productSlug}`}
                            className="font-medium text-gray-900 hover:text-primary-600 transition-colors line-clamp-2 text-sm"
                            onClick={closeDrawer}
                          >
                            {item.productName}
                          </Link>
                          {item.partNumber && (
                            <p className="text-xs text-gray-500 mt-0.5">
                              {item.partNumber}
                            </p>
                          )}

                          {/* Cena jednostkowa */}
                          {priceLoading && item.partNumber ? (
                            <span className="inline-block h-4 w-20 bg-gray-200 rounded animate-pulse mt-1" />
                          ) : unitPrice ? (
                            <p className="text-sm font-semibold text-gray-900 mt-1">
                              {formatPrice(unitPrice)} zł
                              <span className="text-xs font-normal text-gray-400 ml-1">netto</span>
                            </p>
                          ) : null}

                          {/* Quantity controls */}
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                              aria-label="Zmniejsz ilość"
                            >
                              <MinusIcon size={16} />
                            </button>
                            <span className="w-10 text-center font-medium text-gray-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                              aria-label="Zwiększ ilość"
                            >
                              <PlusIcon size={16} />
                            </button>
                            <span className="text-sm text-gray-500 ml-1">szt.</span>

                            {/* Kwota za pozycję */}
                            {unitPrice && item.quantity > 1 && (
                              <span className="ml-auto text-sm font-medium text-gray-700">
                                {formatPrice(unitPrice * item.quantity)} zł
                              </span>
                            )}
                          </div>

                          {/* Note input */}
                          <input
                            type="text"
                            value={item.note}
                            onChange={(e) => updateNote(item.productId, e.target.value)}
                            placeholder="Dodaj notatkę..."
                            className="w-full mt-2 px-3 py-1.5 text-sm border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:border-primary-500"
                          />
                        </div>

                        {/* Remove button */}
                        <button
                          onClick={() => {
                            trackRemoveFromCart({
                              item_id: item.productId,
                              item_name: item.productName,
                              quantity: item.quantity,
                              price: unitPrice,
                            })
                            removeItem(item.productId)
                          }}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Usuń z koszyka"
                        >
                          <TrashIcon size={18} />
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ul>

            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-4 space-y-3 bg-gray-50">
            {/* Podsumowanie cenowe */}
            {subtotalNetto !== null && (
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Suma netto</span>
                <span className="text-lg font-bold text-gray-900">
                  {formatPrice(subtotalNetto)} zł
                </span>
              </div>
            )}

            {/* Darmowa dostawa */}
            {subtotalNetto !== null && subtotalNetto >= 1000 ? (
              <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 rounded-lg px-3 py-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Darmowa dostawa!</span>
              </div>
            ) : subtotalNetto !== null ? (
              <div className="text-sm text-gray-600 pb-3 border-b border-gray-200">
                <div className="flex justify-between mb-1.5">
                  <span>Do darmowej dostawy brakuje</span>
                  <span className="font-medium">{formatPrice(1000 - subtotalNetto)} zł</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-primary-600 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((subtotalNetto / 1000) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ) : null}

            <Link href="/zamowienie" onClick={closeDrawer}>
              <Button fullWidth rightIcon={<ArrowRightIcon size={18} />}>
                Przejdź do zamówienia
              </Button>
            </Link>
            <Button variant="secondary" fullWidth onClick={closeDrawer}>
              Kontynuuj zakupy
            </Button>
            <button
              onClick={clearAll}
              className="w-full text-sm text-gray-500 hover:text-red-500 transition-colors py-2"
            >
              Wyczyść koszyk
            </button>
          </div>
        )}
      </div>
    </>
  )
}
