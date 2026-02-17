'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Input, Textarea, Checkbox } from '@/components/ui'
import {
  ChevronRightIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon,
  CheckIcon,
  ArrowRightIcon,
  ShoppingCartIcon,
  TruckIcon,
} from '@/components/ui/Icons'
import { useCartStore, type CartItem } from '@/store/cartStore'
import { products, type Product } from '@/data/products'

// ── Typy ────────────────────────────────────────────────────────

type PaymentMethod = 'online' | 'proforma'

interface CheckoutFormData {
  firstName: string
  lastName: string
  company: string
  nip: string
  email: string
  phone: string
  street: string
  postalCode: string
  city: string
  differentShipping: boolean
  shippingStreet: string
  shippingPostalCode: string
  shippingCity: string
  notes: string
  paymentMethod: PaymentMethod
  consent: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  company?: string
  nip?: string
  email?: string
  phone?: string
  street?: string
  postalCode?: string
  city?: string
  shippingStreet?: string
  shippingPostalCode?: string
  shippingCity?: string
  consent?: string
}

// ── Stale ────────────────────────────────────────────────────────

const FREE_SHIPPING_THRESHOLD = 500 // netto PLN
const SHIPPING_COST = 25 // netto PLN

// ── Helpers ─────────────────────────────────────────────────────

function formatPrice(value: number): string {
  return value.toLocaleString('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function validateNIP(nip: string): boolean {
  const digits = nip.replace(/[\s-]/g, '')
  if (digits.length !== 10 || !/^\d{10}$/.test(digits)) return false

  // Wagi kontrolne NIP
  const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7]
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(digits[i]) * weights[i]
  }
  return sum % 11 === parseInt(digits[9])
}

function validatePostalCode(code: string): boolean {
  return /^\d{2}-?\d{3}$/.test(code.trim())
}

/**
 * Dynamiczne szukanie ceny produktu — identycznie jak w drawerze.
 * Obsługuje warianty (slug__partNumber) i zwykłe produkty.
 */
function findProductPrice(productId: string): number | undefined {
  if (productId.includes('__') && !productId.includes('__onecare__')) {
    const [slug, partNumber] = productId.split('__')
    const product = products.find((p) => p.slug === slug)
    if (product?.variants) {
      const variant = product.variants.find((v) => v.partNumber === partNumber)
      if (variant?.priceFrom) return variant.priceFrom
    }
    return product?.priceFrom
  }
  if (productId.includes('__onecare__')) return undefined
  const product = products.find((p) => p.id === productId)
  return product?.priceFrom
}

// ── Komponent ───────────────────────────────────────────────────

export default function CheckoutPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearAll,
    getSubtotalNetto,
    getVatAmount,
    getTotalBrutto,
    getCrossSellProducts,
    addItem,
  } = useCartStore()

  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState<1 | 2>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')

  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    company: '',
    nip: '',
    email: '',
    phone: '',
    street: '',
    postalCode: '',
    city: '',
    differentShipping: false,
    shippingStreet: '',
    shippingPostalCode: '',
    shippingCity: '',
    notes: '',
    paymentMethod: 'online',
    consent: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    setMounted(true)
    document.title = 'Zamowienie | TAKMA'
  }, [])

  // ── Ceny (dynamiczne, jak w drawerze) ─────────────────────────

  const itemPrices = useMemo(() => {
    const prices = new Map<string, number | undefined>()
    for (const item of items) {
      prices.set(item.productId, item.priceNetto ?? findProductPrice(item.productId))
    }
    return prices
  }, [items])

  const subtotalNetto = useMemo(() => {
    if (!mounted) return 0
    let total = 0
    for (const item of items) {
      const price = itemPrices.get(item.productId)
      if (price) total += price * item.quantity
    }
    return total
  }, [mounted, items, itemPrices])

  const isFreeShipping = subtotalNetto >= FREE_SHIPPING_THRESHOLD
  const shippingNetto = isFreeShipping ? 0 : (items.length > 0 ? SHIPPING_COST : 0)
  const totalNetto = subtotalNetto + shippingNetto
  const vatAmount = totalNetto * 0.23
  const totalBrutto = totalNetto + vatAmount

  // ── Cross-sell ────────────────────────────────────────────────

  const crossSellProducts = useMemo(() => {
    if (!mounted || items.length === 0) return []

    const allSuggestions: Product[] = []
    const seenIds = new Set<string>()
    const cartIds = new Set(items.map((i) => i.productId))

    for (const item of items) {
      const suggestions = getCrossSellProducts(item.productId)
      for (const s of suggestions) {
        if (!seenIds.has(s.id) && !cartIds.has(s.id) && allSuggestions.length < 4) {
          seenIds.add(s.id)
          allSuggestions.push(s)
        }
      }
    }

    return allSuggestions
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, items])

  // ── Walidacja ─────────────────────────────────────────────────

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Imie jest wymagane'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Nazwisko jest wymagane'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Nazwa firmy jest wymagana'
    }

    if (!formData.nip.trim()) {
      newErrors.nip = 'NIP jest wymagany do wystawienia faktury'
    } else if (!validateNIP(formData.nip)) {
      newErrors.nip = 'Nieprawidlowy numer NIP'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Adres e-mail jest wymagany'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nieprawidlowy format adresu e-mail'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Numer telefonu jest wymagany'
    }

    if (!formData.street.trim()) {
      newErrors.street = 'Adres firmy jest wymagany'
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Kod pocztowy jest wymagany'
    } else if (!validatePostalCode(formData.postalCode)) {
      newErrors.postalCode = 'Format: XX-XXX'
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Miasto jest wymagane'
    }

    // Adres dostawy
    if (formData.differentShipping) {
      if (!formData.shippingStreet.trim()) {
        newErrors.shippingStreet = 'Adres dostawy jest wymagany'
      }
      if (!formData.shippingPostalCode.trim()) {
        newErrors.shippingPostalCode = 'Kod pocztowy jest wymagany'
      } else if (!validatePostalCode(formData.shippingPostalCode)) {
        newErrors.shippingPostalCode = 'Format: XX-XXX'
      }
      if (!formData.shippingCity.trim()) {
        newErrors.shippingCity = 'Miasto jest wymagane'
      }
    }

    if (!formData.consent) {
      newErrors.consent = 'Zgoda jest wymagana do zlozenia zamowienia'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ── Submit ────────────────────────────────────────────────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm() || items.length === 0) {
      return
    }

    setIsSubmitting(true)

    // TODO: Integracja z API
    // if (formData.paymentMethod === 'online') {
    //   const response = await fetch('/api/checkout/stripe', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       items: items.map(i => ({
    //         productId: i.productId,
    //         partNumber: i.partNumber,
    //         quantity: i.quantity,
    //         priceNetto: i.priceNetto,
    //       })),
    //       customer: {
    //         firstName: formData.firstName,
    //         lastName: formData.lastName,
    //         company: formData.company,
    //         nip: formData.nip,
    //         email: formData.email,
    //         phone: formData.phone,
    //       },
    //       billingAddress: {
    //         street: formData.street,
    //         postalCode: formData.postalCode,
    //         city: formData.city,
    //       },
    //       shippingAddress: formData.differentShipping ? {
    //         street: formData.shippingStreet,
    //         postalCode: formData.shippingPostalCode,
    //         city: formData.shippingCity,
    //       } : null,
    //       notes: formData.notes,
    //     }),
    //   })
    //   const { sessionUrl } = await response.json()
    //   window.location.href = sessionUrl // Redirect do Stripe Checkout
    // }

    // if (formData.paymentMethod === 'proforma') {
    //   const response = await fetch('/api/checkout/proforma', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ ... }),
    //   })
    //   const { orderNumber } = await response.json()
    //   setOrderNumber(orderNumber)
    // }

    // MOCK - symulacja
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const mockOrderNumber = `TK-${Date.now().toString().slice(-6)}`
    console.log('Checkout submission:', {
      formData,
      items,
      subtotalNetto,
      shippingNetto,
      vatAmount,
      totalBrutto,
      orderNumber: mockOrderNumber,
    })

    setOrderNumber(mockOrderNumber)
    setIsSubmitting(false)
    setIsSuccess(true)
    clearAll()
  }

  // ── Handlers ──────────────────────────────────────────────────

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleAddCrossSell = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      image: product.images?.[0],
      partNumber: product.variants?.[0]?.partNumber ?? undefined,
      priceNetto: product.priceFrom,
      categoryId: product.categoryId,
    })
  }

  // ── Skeleton loading ──────────────────────────────────────────

  if (!mounted) {
    return (
      <div className="container-main py-8 lg:py-12">
        <div className="animate-pulse">
          <div className="h-5 bg-gray-200 rounded w-48 mb-6" />
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-2" />
          <div className="h-5 bg-gray-200 rounded w-2/3 mb-8" />
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-4">
              <div className="h-64 bg-gray-200 rounded-2xl" />
              <div className="h-32 bg-gray-200 rounded-2xl" />
            </div>
            <div className="lg:col-span-2">
              <div className="h-96 bg-gray-200 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── Sukces ────────────────────────────────────────────────────

  if (isSuccess) {
    return (
      <div className="container-main py-16 lg:py-24">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckIcon size={40} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {formData.paymentMethod === 'proforma'
              ? 'Zamowienie zostalo przyjete!'
              : 'Zamowienie zostalo zlozone!'}
          </h1>

          {orderNumber && (
            <p className="text-lg font-medium text-primary-600 mb-2">
              Numer zamowienia: {orderNumber}
            </p>
          )}

          <p className="text-lg text-gray-600 mb-8">
            {formData.paymentMethod === 'proforma'
              ? 'Faktura pro forma zostanie wyslana na podany adres e-mail. Po zaksiegowaniu platnosci wyslemy zamowienie.'
              : 'Potwierdzenie zamowienia zostanie wyslane na podany adres e-mail. Dziekujemy za zakupy!'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/katalog">
              <Button variant="primary" rightIcon={<ArrowRightIcon size={18} />}>
                Kontynuuj zakupy
              </Button>
            </Link>
            <Link href="/">
              <Button variant="secondary">Strona glowna</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ── Pusty koszyk ──────────────────────────────────────────────

  if (items.length === 0) {
    return (
      <div className="container-main py-8 lg:py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600 transition-colors">
            Strona glowna
          </Link>
          <ChevronRightIcon size={16} />
          <span className="text-gray-900 font-medium">Zamowienie</span>
        </nav>

        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
            <ShoppingCartIcon size={36} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Twoj koszyk jest pusty
          </h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Dodaj produkty do koszyka, aby zlozyc zamowienie. Przejrzyj nasz katalog
            drukarek etykiet, terminali mobilnych i akcesoriow.
          </p>
          <Link href="/katalog">
            <Button size="lg" rightIcon={<ArrowRightIcon size={18} />}>
              Przegladaj katalog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // ── Checkout ──────────────────────────────────────────────────

  return (
    <div className="container-main py-8 lg:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600 transition-colors">
          Strona glowna
        </Link>
        <ChevronRightIcon size={16} />
        <span className="text-gray-900 font-medium">Zamowienie</span>
      </nav>

      {/* ── Stepper ── */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => setStep(1)}
          className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
            step === 1 ? 'text-primary-600' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
            step === 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
          }`}>1</span>
          Koszyk
        </button>
        <ChevronRightIcon size={16} className="text-gray-300" />
        <span
          className={`flex items-center gap-2 text-sm font-semibold ${
            step === 2 ? 'text-primary-600' : 'text-gray-400'
          }`}
        >
          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
            step === 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
          }`}>2</span>
          Dane i platnosc
        </span>
      </div>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* KROK 1: Koszyk + Cross-sell + Podsumowanie                 */}
      {/* ════════════════════════════════════════════════════════════ */}
      {step === 1 && (
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-3 space-y-6">
            {/* Lista produktow */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                  <ShoppingCartIcon size={20} className="text-primary-600" />
                  Produkty w zamowieniu ({items.length})
                </h2>
                <button
                  onClick={clearAll}
                  className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                  Wyczysc wszystko
                </button>
              </div>

              <ul className="divide-y divide-gray-100">
                {items.map((item) => (
                  <CartItemRow
                    key={item.productId}
                    item={item}
                    onRemove={removeItem}
                    onUpdateQuantity={updateQuantity}
                  />
                ))}
              </ul>
            </div>

            {/* Cross-sell */}
            {crossSellProducts.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-900">
                    Uzupelnij zamowienie
                  </h2>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Polecane akcesoria do produktow w koszyku
                  </p>
                </div>

                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {crossSellProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50/30 transition-all"
                    >
                      {product.images?.[0] && (
                        <div className="relative w-16 h-16 rounded-lg flex-shrink-0 overflow-hidden bg-gray-50">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-contain p-1"
                            sizes="64px"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/produkt/${product.slug}`}
                          className="text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors line-clamp-2"
                        >
                          {product.name}
                        </Link>
                        {product.priceFrom && (
                          <p className="text-sm font-semibold text-primary-600 mt-0.5">
                            {formatPrice(product.priceFrom)} zl netto
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => handleAddCrossSell(product)}
                        className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center transition-colors"
                        aria-label={`Dodaj ${product.name} do koszyka`}
                      >
                        <PlusIcon size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Podsumowanie + przycisk Dalej */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28 space-y-4">
              <PriceSummary
                subtotalNetto={subtotalNetto}
                shippingNetto={shippingNetto}
                isFreeShipping={isFreeShipping}
                vatAmount={vatAmount}
                totalBrutto={totalBrutto}
              />
              <Button
                fullWidth
                size="lg"
                rightIcon={<ArrowRightIcon size={18} />}
                onClick={() => { setStep(2); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                disabled={items.length === 0}
              >
                Przejdz do danych firmy
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════ */}
      {/* KROK 2: Dane firmy + Adres + Platnosc                      */}
      {/* ════════════════════════════════════════════════════════════ */}
      {step === 2 && (
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 sm:gap-6">
          {/* ────── PRAWA KOLUMNA: Sticky podsumowanie + submit (desktop) ────── */}
          <div className="lg:col-span-2 order-first lg:order-last">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 space-y-4 lg:sticky lg:top-36">
              <h2 className="font-semibold text-gray-900">Twoje zamowienie</h2>

              {/* Lista produktow (scrollowalna) */}
              <div className="max-h-48 sm:max-h-64 overflow-y-auto divide-y divide-gray-100 -mx-4 sm:-mx-5 px-4 sm:px-5">
                {items.map((item) => {
                  const price = itemPrices.get(item.productId)
                  return (
                    <div key={item.productId} className="flex items-center gap-3 py-2.5 text-sm">
                      <span className="text-gray-500 flex-shrink-0">{item.quantity}&times;</span>
                      <span className="text-gray-700 truncate flex-1">{item.productName}</span>
                      {price && (
                        <span className="text-gray-900 font-medium flex-shrink-0 whitespace-nowrap">
                          {formatPrice(price * item.quantity)} zl
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Ceny */}
              <div className="border-t border-gray-200 pt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Suma netto</span>
                  <span className="font-medium text-gray-900">{formatPrice(subtotalNetto)} zl</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 flex items-center gap-1.5"><TruckIcon size={14} /> Dostawa</span>
                  {isFreeShipping ? (
                    <span className="font-medium text-green-600">Gratis</span>
                  ) : (
                    <span className="font-medium text-gray-900">{formatPrice(shippingNetto)} zl</span>
                  )}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">VAT 23%</span>
                  <span className="font-medium text-gray-900">{formatPrice(vatAmount)} zl</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between">
                  <span className="text-base font-bold text-gray-900">Razem brutto</span>
                  <span className="text-lg sm:text-xl font-bold text-primary-600">{formatPrice(totalBrutto)} zl</span>
                </div>
              </div>

              {isFreeShipping && (
                <div className="flex items-center gap-2 text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2">
                  <TruckIcon size={14} />
                  Darmowa dostawa
                </div>
              )}

              {/* Desktop: zgoda + submit w sticky */}
              <div className="hidden lg:block space-y-4 pt-2">
                <Checkbox
                  label={<span className="text-sm text-gray-600">Wyrazam zgode na przetwarzanie danych osobowych w celu realizacji zamowienia. <Link href="/polityka-prywatnosci" className="text-primary-600 hover:underline">Polityka prywatnosci</Link></span>}
                  checked={formData.consent}
                  onChange={(e) => { setFormData((prev) => ({ ...prev, consent: e.target.checked })); if (errors.consent) { setErrors((prev) => ({ ...prev, consent: undefined })) } }}
                  error={errors.consent}
                />
                <Button
                  fullWidth
                  size="lg"
                  isLoading={isSubmitting}
                  disabled={items.length === 0}
                  onClick={() => { const form = document.getElementById('checkout-form') as HTMLFormElement; form?.requestSubmit() }}
                >
                  {formData.paymentMethod === 'online' ? 'Przejdz do platnosci' : 'Zloz zamowienie'}
                </Button>
                <button
                  type="button"
                  onClick={() => { setStep(1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors py-1 text-center"
                >
                  &larr; Wroc do koszyka
                </button>
                {formData.paymentMethod === 'online' && (
                  <p className="text-xs text-gray-400 text-center">
                    Zostaniesz przekierowany do bezpiecznej strony platnosci
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ────── LEWA KOLUMNA: Formularz ────── */}
          <form id="checkout-form" onSubmit={handleSubmit} className="lg:col-span-3 space-y-4 sm:space-y-6 order-last lg:order-first">
            {/* Dane firmy */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 space-y-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Dane firmy</h2>

              <div className="grid grid-cols-2 gap-4">
                <Input label="Imie" name="firstName" value={formData.firstName} onChange={handleInputChange} error={errors.firstName} placeholder="Jan" required />
                <Input label="Nazwisko" name="lastName" value={formData.lastName} onChange={handleInputChange} error={errors.lastName} placeholder="Kowalski" required />
              </div>

              <Input label="Firma" name="company" value={formData.company} onChange={handleInputChange} error={errors.company} placeholder="Nazwa firmy Sp. z o.o." required />

              <Input label="NIP" name="nip" value={formData.nip} onChange={handleInputChange} error={errors.nip} placeholder="123-456-78-90" helperText="Wymagany do faktury VAT" required />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="E-mail" name="email" type="email" value={formData.email} onChange={handleInputChange} error={errors.email} placeholder="jan@firma.pl" required />
                <Input label="Telefon" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} error={errors.phone} placeholder="+48 123 456 789" required />
              </div>
            </div>

            {/* Adres */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 space-y-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Adres dostawy</h2>

              <Input label="Ulica i numer" name="street" value={formData.street} onChange={handleInputChange} error={errors.street} placeholder="ul. Przykladowa 10/2" required />

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                  <Input label="Kod pocztowy" name="postalCode" value={formData.postalCode} onChange={handleInputChange} error={errors.postalCode} placeholder="00-000" required />
                </div>
                <div className="col-span-3">
                  <Input label="Miasto" name="city" value={formData.city} onChange={handleInputChange} error={errors.city} placeholder="Warszawa" required />
                </div>
              </div>

              <Checkbox
                label={<span className="text-sm font-medium text-gray-700">Inny adres dostawy</span>}
                checked={formData.differentShipping}
                onChange={(e) => setFormData((prev) => ({ ...prev, differentShipping: e.target.checked }))}
              />

              {formData.differentShipping && (
                <div className="space-y-4 pl-6 border-l-2 border-primary-200">
                  <Input label="Ulica i numer" name="shippingStreet" value={formData.shippingStreet} onChange={handleInputChange} error={errors.shippingStreet} placeholder="ul. Dostawcza 5" required />
                  <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-2">
                      <Input label="Kod pocztowy" name="shippingPostalCode" value={formData.shippingPostalCode} onChange={handleInputChange} error={errors.shippingPostalCode} placeholder="00-000" required />
                    </div>
                    <div className="col-span-3">
                      <Input label="Miasto" name="shippingCity" value={formData.shippingCity} onChange={handleInputChange} error={errors.shippingCity} placeholder="Warszawa" required />
                    </div>
                  </div>
                </div>
              )}

              <Textarea label="Uwagi do zamowienia" name="notes" value={formData.notes} onChange={handleInputChange} placeholder="Dodatkowe informacje, np. preferowany termin dostawy..." rows={3} />
            </div>

            {/* Platnosc */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 space-y-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Metoda platnosci</h2>

              <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.paymentMethod === 'online' ? 'border-primary-500 bg-primary-50/50' : 'border-gray-200 hover:border-gray-300'}`}>
                <input type="radio" name="paymentMethod" value="online" checked={formData.paymentMethod === 'online'} onChange={() => setFormData((prev) => ({ ...prev, paymentMethod: 'online' }))} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500" />
                <div className="flex-1">
                  <span className="text-sm font-semibold text-gray-900">Platnosc online</span>
                  <span className="text-xs text-gray-500 mt-0.5 block">BLIK, karta platnicza, Przelewy24</span>
                </div>
              </label>

              <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.paymentMethod === 'proforma' ? 'border-primary-500 bg-primary-50/50' : 'border-gray-200 hover:border-gray-300'}`}>
                <input type="radio" name="paymentMethod" value="proforma" checked={formData.paymentMethod === 'proforma'} onChange={() => setFormData((prev) => ({ ...prev, paymentMethod: 'proforma' }))} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500" />
                <div className="flex-1">
                  <span className="text-sm font-semibold text-gray-900">Przelew tradycyjny</span>
                  <span className="text-xs text-gray-500 mt-0.5 block">Otrzymasz fakture pro forma na e-mail. Wysylka po zaksiegowaniu platnosci.</span>
                </div>
              </label>
            </div>

            {/* Mobile: zgoda + submit na dole formularza */}
            <div className="lg:hidden bg-white rounded-2xl border border-gray-200 p-4 space-y-4">
              <Checkbox
                label={<span className="text-sm text-gray-600">Wyrazam zgode na przetwarzanie danych osobowych w celu realizacji zamowienia. <Link href="/polityka-prywatnosci" className="text-primary-600 hover:underline">Polityka prywatnosci</Link></span>}
                checked={formData.consent}
                onChange={(e) => { setFormData((prev) => ({ ...prev, consent: e.target.checked })); if (errors.consent) { setErrors((prev) => ({ ...prev, consent: undefined })) } }}
                error={errors.consent}
              />
              <Button type="submit" fullWidth size="lg" isLoading={isSubmitting} disabled={items.length === 0}>
                {formData.paymentMethod === 'online' ? `Zaplac ${formatPrice(totalBrutto)} zl` : `Zloz zamowienie (${formatPrice(totalBrutto)} zl)`}
              </Button>
              <button
                type="button"
                onClick={() => { setStep(1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors py-1 text-center"
              >
                &larr; Wroc do koszyka
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

// ── Komponent: Wiersz produktu ──────────────────────────────────

function CartItemRow({
  item,
  onRemove,
  onUpdateQuantity,
}: {
  item: CartItem
  onRemove: (id: string) => void
  onUpdateQuantity: (id: string, qty: number) => void
}) {
  const unitPrice = item.priceNetto ?? findProductPrice(item.productId)
  const lineTotal = unitPrice ? unitPrice * item.quantity : null

  return (
    <li className="p-4 sm:p-6">
      <div className="flex items-center gap-4">
        {/* Obrazek */}
        {(item.productImage || item.productId.includes('__onecare__')) && (
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg flex-shrink-0 overflow-hidden">
            <Image
              src={item.productId.includes('__onecare__') ? '/images/zebra-onecare-logo.png' : item.productImage!}
              alt={item.productId.includes('__onecare__') ? 'Zebra OneCare' : item.productName}
              fill
              className="object-contain p-2"
              sizes="96px"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          {/* Nazwa i PN */}
          <Link
            href={`/produkt/${item.productSlug}`}
            className="font-medium text-gray-900 hover:text-primary-600 transition-colors text-sm sm:text-base line-clamp-2"
          >
            {item.productName}
          </Link>
          {item.partNumber && (
            <p className="text-xs text-gray-500 mt-0.5 font-mono">
              {item.partNumber}
            </p>
          )}

          {/* Cena jednostkowa */}
          {unitPrice && (
            <p className="text-sm text-gray-600 mt-1">
              {formatPrice(unitPrice)} zl netto / szt.
            </p>
          )}

          {/* Ilosc */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs text-gray-500">Ilosc:</span>
            <button
              onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
              className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              aria-label="Zmniejsz ilosc"
            >
              <MinusIcon size={14} />
            </button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                onUpdateQuantity(item.productId, parseInt(e.target.value) || 1)
              }
              min="1"
              className="w-14 h-7 text-center border border-gray-200 rounded-md text-sm focus:outline-none focus:border-primary-500"
            />
            <button
              onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
              className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              aria-label="Zwieksz ilosc"
            >
              <PlusIcon size={14} />
            </button>
          </div>
        </div>

        {/* Prawa strona: subtotal + delete */}
        <div className="flex flex-col items-end justify-between flex-shrink-0">
          <button
            onClick={() => onRemove(item.productId)}
            className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Usun z koszyka"
          >
            <TrashIcon size={18} />
          </button>

          {lineTotal !== null && (
            <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">
              {formatPrice(lineTotal)} zl
            </p>
          )}
        </div>
      </div>
    </li>
  )
}

// ── Komponent: Podsumowanie cenowe ──────────────────────────────

function PriceSummary({
  subtotalNetto,
  shippingNetto,
  isFreeShipping,
  vatAmount,
  totalBrutto,
}: {
  subtotalNetto: number
  shippingNetto: number
  isFreeShipping: boolean
  vatAmount: number
  totalBrutto: number
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h2 className="font-semibold text-gray-900 mb-4">Podsumowanie</h2>

      <div className="space-y-3 text-sm">
        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Wartosc produktow netto</span>
          <span className="font-medium text-gray-900">
            {formatPrice(subtotalNetto)} zl
          </span>
        </div>

        {/* Dostawa */}
        <div className="flex items-center justify-between">
          <span className="text-gray-600 flex items-center gap-1.5">
            <TruckIcon size={16} />
            Dostawa
          </span>
          {isFreeShipping ? (
            <span className="font-medium text-green-600">Gratis</span>
          ) : (
            <span className="font-medium text-gray-900">
              {formatPrice(shippingNetto)} zl
            </span>
          )}
        </div>

        {!isFreeShipping && subtotalNetto > 0 && (
          <p className="text-xs text-gray-500 bg-blue-50 rounded-lg px-3 py-2">
            Darmowa dostawa od {formatPrice(FREE_SHIPPING_THRESHOLD)} zl netto.
            Brakuje Ci jeszcze{' '}
            <span className="font-semibold text-primary-600">
              {formatPrice(FREE_SHIPPING_THRESHOLD - subtotalNetto)} zl
            </span>
          </p>
        )}

        {/* VAT */}
        <div className="flex items-center justify-between">
          <span className="text-gray-600">VAT 23%</span>
          <span className="font-medium text-gray-900">
            {formatPrice(vatAmount)} zl
          </span>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-200 pt-3">
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-gray-900">Razem brutto</span>
            <span className="text-xl font-bold text-primary-600">
              {formatPrice(totalBrutto)} zl
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
