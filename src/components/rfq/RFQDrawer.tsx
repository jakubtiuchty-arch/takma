'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import { CloseIcon, TrashIcon, PlusIcon, MinusIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { Button } from '@/components/ui'
import { useCartStore } from '@/store/cartStore'
import { products } from '@/data/products'
import type { Product } from '@/data/products'

function formatPrice(price: number): string {
  return price.toLocaleString('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

/**
 * Znajduje cenę netto produktu na podstawie ID.
 * Sprawdza czy ID zawiera `__` (wariant), jeśli tak — szuka ceny wariantu.
 */
function findProductPrice(productId: string): number | undefined {
  // Wariant: "slug__partNumber"
  if (productId.includes('__') && !productId.includes('__onecare__')) {
    const [slug, partNumber] = productId.split('__')
    const product = products.find((p) => p.slug === slug)
    if (product?.variants) {
      const variant = product.variants.find((v) => v.partNumber === partNumber)
      if (variant?.priceFrom) return variant.priceFrom
    }
    return product?.priceFrom
  }

  // OneCare — brak ceny w drawer
  if (productId.includes('__onecare__')) return undefined

  // Zwykły produkt
  const product = products.find((p) => p.id === productId)
  return product?.priceFrom
}

/**
 * Zbiera sugestie cross-sell na podstawie wszystkich produktów w koszyku.
 * Priorytet: relatedAccessories > compatibleAccessories.
 * Filtruje produkty już w koszyku. Max 3 wyniki.
 */
function getCrossSellSuggestions(
  cartItemIds: string[],
  maxResults: number = 3
): Product[] {
  const cartProductIds = new Set(cartItemIds)

  // Zbieramy slugi z ID-ków wariantów
  const cartSlugs = new Set<string>()
  for (const id of cartItemIds) {
    if (id.includes('__')) {
      cartSlugs.add(id.split('__')[0])
    }
  }

  const seenIds = new Set<string>()
  const suggestions: Product[] = []

  // Iteruj po produktach w koszyku
  for (const itemId of cartItemIds) {
    if (suggestions.length >= maxResults) break

    // Znajdź odpowiadający produkt
    let product: Product | undefined
    if (itemId.includes('__') && !itemId.includes('__onecare__')) {
      const slug = itemId.split('__')[0]
      product = products.find((p) => p.slug === slug)
    } else {
      product = products.find((p) => p.id === itemId)
    }

    if (!product) continue

    // Priorytet: relatedAccessories, potem compatibleAccessories
    const relatedIds = product.relatedAccessories ?? []
    const compatibleIds = product.compatibleAccessories ?? []
    const combinedIds = [...relatedIds, ...compatibleIds]

    for (const accessoryId of combinedIds) {
      if (suggestions.length >= maxResults) break
      if (cartProductIds.has(accessoryId)) continue
      if (seenIds.has(accessoryId)) continue

      // Sprawdź czy slug akcesorium nie jest już w koszyku (wariant)
      const accessory = products.find((p) => p.id === accessoryId)
      if (!accessory) continue
      if (cartSlugs.has(accessory.slug)) continue

      seenIds.add(accessoryId)
      suggestions.push(accessory)
    }
  }

  return suggestions
}

export default function RFQDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, updateNote, clearAll, addItem } =
    useCartStore()
  const [mounted, setMounted] = useState(false)

  // Hydration fix
  useEffect(() => {
    setMounted(true)
  }, [])

  // Blokuj scroll body gdy drawer jest otwarty
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

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

  // Oblicz ceny dla elementów w koszyku
  const itemPrices = useMemo(() => {
    const prices = new Map<string, number | undefined>()
    for (const item of items) {
      prices.set(item.productId, findProductPrice(item.productId))
    }
    return prices
  }, [items])

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

  // Cross-sell sugestie
  const crossSellProducts = useMemo(() => {
    if (items.length === 0) return []
    return getCrossSellSuggestions(items.map((i) => i.productId))
  }, [items])

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
                        {(item.productId.includes('__onecare__') || item.productImage) && (
                          <div className="relative w-[70px] h-[70px] rounded-lg flex-shrink-0 overflow-hidden bg-gray-50">
                            <Image
                              src={item.productId.includes('__onecare__') ? '/images/zebra-onecare-logo.png' : item.productImage!}
                              alt={item.productId.includes('__onecare__') ? 'Zebra OneCare' : item.productName}
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
                          {unitPrice && (
                            <p className="text-sm font-semibold text-gray-900 mt-1">
                              {formatPrice(unitPrice)} zł
                              <span className="text-xs font-normal text-gray-400 ml-1">netto</span>
                            </p>
                          )}

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
                          onClick={() => removeItem(item.productId)}
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

              {/* Cross-sell: Uzupełnij zamówienie */}
              {crossSellProducts.length > 0 && (
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">
                    Uzupełnij zamówienie
                  </h3>
                  <div className="space-y-2.5">
                    {crossSellProducts.map((product) => {
                      const hasImage =
                        product.images.length > 0 &&
                        !product.images[0].includes('placeholder')
                      return (
                        <div
                          key={product.id}
                          className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          {/* Miniatura */}
                          <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-white border border-gray-100">
                            {hasImage ? (
                              <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-contain p-1"
                                sizes="48px"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="text-gray-300 text-[10px]">IMG</span>
                              </div>
                            )}
                          </div>

                          {/* Nazwa i cena */}
                          <div className="flex-1 min-w-0">
                            <Link
                              href={`/produkt/${product.slug}`}
                              className="text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors line-clamp-1"
                              onClick={closeDrawer}
                            >
                              {product.name}
                            </Link>
                            {product.priceFrom ? (
                              <p className="text-xs text-gray-500">
                                od {formatPrice(product.priceFrom)} zł netto
                              </p>
                            ) : (
                              <p className="text-xs text-gray-400">Cena na zapytanie</p>
                            )}
                          </div>

                          {/* Przycisk Dodaj */}
                          <button
                            onClick={() =>
                              addItem({
                                id: product.id,
                                name: product.name,
                                slug: product.slug,
                                image: product.images[0],
                                partNumber:
                                  product.variants?.[0]?.partNumber ||
                                  product.specifications.find((s) => s.name === 'Part Number')?.value,
                              })
                            }
                            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-primary-600 border border-primary-200 bg-white rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-colors flex-shrink-0"
                            aria-label={`Dodaj ${product.name} do koszyka`}
                          >
                            <PlusIcon size={14} />
                            Dodaj
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
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

            <Link href="/zamowienie" onClick={closeDrawer}>
              <Button fullWidth rightIcon={<ArrowRightIcon size={18} />}>
                Przejdź do zamówienia
              </Button>
            </Link>
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
