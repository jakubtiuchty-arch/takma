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
import { useStockData } from '@/app/produkt/[slug]/StockInfo'
import LiveRibbonPrice, { LiveRibbonProvider } from '@/components/labels/LiveRibbonPrice'
import { createCheckoutSession, createProformaOrder } from '@/actions/checkout'
import { trackBeginCheckout, trackAddPaymentInfo, trackPurchase } from '@/lib/ga-events'

// ── Typy ────────────────────────────────────────────────────────

type PaymentMethod = 'online' | 'proforma'

interface CheckoutFormData {
  firstName: string
  buildingNumber: string
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
  acceptTerms: boolean
}

interface FormErrors {
  firstName?: string
  buildingNumber?: string
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
  acceptTerms?: string
}

// ── Stale ────────────────────────────────────────────────────────

const FREE_SHIPPING_THRESHOLD = 1000 // netto PLN
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

/**
 * Szuka rozmiaru wariantu po PartNumber. Iteruje wszystkie produkty (mała tablica
 * na takma, ~10k wariantów łącznie — akceptowalne dla render-time lookup).
 * Format wyjścia: "102×64 mm, rdzeń 25 mm" (z atrybutów Rozmiar + Rdzeń).
 */
function findVariantSize(partNumber: string | undefined): string | null {
  if (!partNumber) return null
  for (const p of products) {
    if (!p.variants) continue
    const v = p.variants.find((x) => x.partNumber === partNumber)
    if (!v) continue
    const rozmiar = v.attributes['Rozmiar']
    const rdzen = v.attributes['Rdzeń (gilza)'] ?? v.attributes['Rdzeń']
    if (rozmiar && rdzen) return `${rozmiar}, rdzeń ${rdzen}`
    if (rozmiar) return rozmiar
    return null
  }
  return null
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
    getRibbonSuggestions,
    addItem,
  } = useCartStore()

  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState<1 | 2>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')

  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    buildingNumber: '',
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
    acceptTerms: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    setMounted(true)
    document.title = 'Zamówienie | TAKMA'

    // begin_checkout GA4 event
    if (items.length > 0) {
      const ga4Items = items.map(item => ({
        item_id: item.productId,
        item_name: item.productName,
        quantity: item.quantity,
        price: item.priceNetto,
      }))
      const total = items.reduce((sum, item) => sum + (item.priceNetto ?? 0) * item.quantity, 0)
      trackBeginCheckout(ga4Items, total)
    }

    // Obsługa powrotu z bramki po anulowaniu płatności
    const params = new URLSearchParams(window.location.search)
    if (params.get('cancelled') === 'true') {
      setSubmitError('Płatność została anulowana. Możesz spróbować ponownie lub wybrać płatność pro forma.')
      // Wyczyść parametr z URL
      window.history.replaceState({}, '', '/zamowienie')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Ceny (live z API > zapisane > static fallback) ────────────

  const cartPartNumbers = useMemo(() => {
    return items.map(item => item.partNumber).filter((pn): pn is string => !!pn)
  }, [items])

  const { stockData, loading: priceLoading } = useStockData(cartPartNumbers)

  /** Numer oferty, jeśli koszyk przyszedł z linku „zamów z oferty". */
  const quoteNumber = useMemo(() => items.find((i) => i.quoteNumber)?.quoteNumber, [items])

  const itemPrices = useMemo(() => {
    const prices = new Map<string, number | undefined>()
    for (const item of items) {
      // Pozycja z oferty handlowej — cena wynegocjowana, zamrożona do końca ważności
      // oferty. Podmiana na żywą pokazałaby klientowi wyższą kwotę niż w mailu.
      if (item.quoteNumber) {
        prices.set(item.productId, item.priceNetto)
        continue
      }
      // Pozycja kartonowa (taśma) — cena kartonowa (marża 13%) w priceNetto; nie podmieniaj
      // żywą ceną pojedynczej rolki (×20%), mimo tego samego PN. Dotyczy też ceny w zamówieniu.
      if (item.productId.endsWith('__karton')) {
        prices.set(item.productId, item.priceNetto ?? findProductPrice(item.productId))
        continue
      }
      // 1. Live cena z API
      if (item.partNumber) {
        const stock = stockData.get(item.partNumber)
        if (stock?.found && stock?.price) {
          prices.set(item.productId, stock.price)
          continue
        }
      }
      // 2. Cena zapisana w koszyku > 3. Static fallback
      prices.set(item.productId, item.priceNetto ?? findProductPrice(item.productId))
    }
    return prices
  }, [items, stockData])

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

  // ── Sugestie taśm dla etykiet TT w koszyku (z konkretnym rozmiarem SKU) ─────
  // Jeśli klient dodał etykietę termotransferową, podpowiadamy taśmę barwiącą
  // dopasowaną do szerokości i rdzenia tej etykiety (algorytm `pickRibbonVariantForLabel`).
  const ribbonSuggestions = useMemo(() => {
    if (!mounted || items.length === 0) return []
    return getRibbonSuggestions()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, items])

  // ── Walidacja ─────────────────────────────────────────────────

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Osoba kontaktowa jest wymagana'
    }

    if (!formData.buildingNumber.trim()) {
      newErrors.buildingNumber = 'Nr budynku jest wymagany'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Nazwa firmy jest wymagana'
    }

    if (!formData.nip.trim()) {
      newErrors.nip = 'NIP jest wymagany do wystawienia faktury'
    } else if (!validateNIP(formData.nip)) {
      newErrors.nip = 'Nieprawidłowy numer NIP'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Adres e-mail jest wymagany'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy format adresu e-mail'
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
      newErrors.consent = 'Zgoda jest wymagana do złożenia zamówienia'
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Akceptacja regulaminu jest wymagana do złożenia zamówienia'
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
    setSubmitError('')

    try {
      // Build checkout items from cart
      const checkoutItems = items.map((item) => ({
        productId: item.productId,
        productName: item.productName,
        productSlug: item.productSlug,
        partNumber: item.partNumber || '',
        quantity: item.quantity,
        priceNetto: itemPrices.get(item.productId) ?? 0,
        image: item.productImage,
        note: item.note || undefined,
        quoteNumber: item.quoteNumber,
      }))

      // Walidacja: żaden produkt nie może mieć ceny 0 zł
      const zeroPriceItem = checkoutItems.find(item => !item.priceNetto || item.priceNetto <= 0)
      if (zeroPriceItem) {
        setSubmitError(`Produkt "${zeroPriceItem.productName}" nie ma ustalonej ceny. Skontaktuj się z nami przez formularz "Zapytaj o produkt" aby otrzymać wycenę.`)
        setIsSubmitting(false)
        return
      }

      const customerData = {
        email: formData.email,
        firstName: formData.firstName,
        lastName: '',
        company: formData.company,
        nip: formData.nip || undefined,
        phone: formData.phone,
        address: `${formData.street} ${formData.buildingNumber}`.trim(),
        postalCode: formData.postalCode,
        city: formData.city,
        shippingAddress: formData.differentShipping
          ? `${formData.shippingStreet}, ${formData.shippingPostalCode} ${formData.shippingCity}`
          : undefined,
      }

      if (formData.paymentMethod === 'proforma') {
        // 1. Save order to database
        const result = await createProformaOrder(
          checkoutItems,
          customerData,
          shippingNetto,
          formData.notes || undefined
        )

        // 2. Generate proforma HTML and open in new tab
        const proformaItems = items.map((item) => ({
          productName: item.productName,
          partNumber: item.partNumber,
          quantity: item.quantity,
          priceNetto: itemPrices.get(item.productId) ?? 0,
        }))

        const response = await fetch('/api/checkout/proforma', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: proformaItems,
            customer: {
              company: formData.company,
              nip: formData.nip,
              contactName: formData.firstName,
              email: formData.email,
              phone: formData.phone,
              street: formData.street,
              buildingNumber: formData.buildingNumber,
              postalCode: formData.postalCode,
              city: formData.city,
            },
            subtotalNetto,
            shippingNetto,
            vatAmount,
            totalBrutto,
            orderNumber: result.orderNumber,
            notes: formData.notes || undefined,
          }),
        })

        if (!response.ok) throw new Error('Błąd generowania pro formy')

        const html = await response.text()
        const blob = new Blob([html], { type: 'text/html' })
        const blobUrl = URL.createObjectURL(blob)
        window.open(blobUrl, '_blank')

        // GA4: purchase event
        const ga4Items = items.map(item => ({
          item_id: item.productId,
          item_name: item.productName,
          quantity: item.quantity,
          price: itemPrices.get(item.productId),
        }))
        trackAddPaymentInfo(ga4Items, totalNetto, 'proforma')
        trackPurchase(result.orderNumber, ga4Items, totalNetto, shippingNetto)

        setOrderNumber(result.orderNumber)
        setIsSubmitting(false)
        setIsSuccess(true)
        clearAll()
        window.scrollTo({ top: 0, behavior: 'instant' })
      } else {
        // Online payment — Przelewy24
        // GA4: add_payment_info (purchase tracked after P24 redirect success)
        const ga4Items = items.map(item => ({
          item_id: item.productId,
          item_name: item.productName,
          quantity: item.quantity,
          price: itemPrices.get(item.productId),
        }))
        trackAddPaymentInfo(ga4Items, totalNetto, 'przelewy24')

        const result = await createCheckoutSession(
          checkoutItems,
          customerData,
          shippingNetto,
          formData.notes || undefined
        )

        // Koszyka NIE czyścimy tutaj — re-render pokazywał „koszyk pusty" przed
        // przekierowaniem. Czyści go PurchaseTracker na potwierdzeniu opłaconego
        // zamówienia; przy porzuconej płatności koszyk zostaje do ponowienia.

        // Redirect to Przelewy24
        window.location.href = result.url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Wystąpił błąd podczas składania zamówienia. Spróbuj ponownie.'
      )
      setIsSubmitting(false)
    }
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

  /** Dodaje konkretny wariant taśmy do koszyka (z dopasowanego SKU rozmiarowego). */
  const handleAddRibbonSuggestion = (s: ReturnType<typeof getRibbonSuggestions>[number]) => {
    addItem({
      id: `${s.product.id}__${s.variant.partNumber}`,
      name: `${s.product.name} ${s.sizeLabel}`,
      slug: s.productSlug,
      image: s.product.images?.[0],
      partNumber: s.variant.partNumber,
      priceNetto: s.priceFrom,
      categoryId: s.product.categoryId,
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
              ? 'Zamówienie zostało przyjęte!'
              : 'Zamówienie zostało złożone!'}
          </h1>

          {orderNumber && (
            <p className="text-lg font-medium text-primary-600 mb-2">
              Numer zamówienia: {orderNumber}
            </p>
          )}

          <p className="text-lg text-gray-600 mb-8">
            {formData.paymentMethod === 'proforma'
              ? 'Faktura pro forma została otwarta w nowej karcie. Opłać przelew w ciągu 7 dni — realizacja po zaksięgowaniu.'
              : 'Potwierdzenie zamówienia zostanie wysłane na podany adres e-mail. Dziękujemy za zakupy!'}
          </p>

          {formData.paymentMethod === 'proforma' && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 max-w-md mx-auto">
              <p className="text-sm font-semibold text-blue-900 mb-1">Dane do przelewu</p>
              <p className="text-sm text-blue-800">TAKMA Tadeusz Tiuchty</p>
              <p className="text-sm text-blue-800 font-mono">39 1020 5297 0000 1902 0283 3069</p>
              <p className="text-sm text-blue-800">PKO BP</p>
              <p className="text-sm text-blue-800 mt-1">Tytuł: <strong>Zamówienie {orderNumber}</strong></p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/katalog">
              <Button variant="primary" rightIcon={<ArrowRightIcon size={18} />}>
                Kontynuuj zakupy
              </Button>
            </Link>
            <Link href="/">
              <Button variant="secondary">Strona główna</Button>
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
            Strona główna
          </Link>
          <ChevronRightIcon size={16} />
          <span className="text-gray-900 font-medium">Zamówienie</span>
        </nav>

        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
            <ShoppingCartIcon size={36} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Twój koszyk jest pusty
          </h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Dodaj produkty do koszyka, aby złożyć zamówienie. Przejrzyj nasz katalog
            drukarek etykiet, terminali mobilnych i akcesoriów.
          </p>
          <Link href="/katalog">
            <Button size="lg" rightIcon={<ArrowRightIcon size={18} />}>
              Przeglądaj katalog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // ── Checkout ──────────────────────────────────────────────────

  return (
    <div className="container-main py-6 sm:py-8 lg:py-12 overflow-x-hidden">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600 transition-colors">
          Strona główna
        </Link>
        <ChevronRightIcon size={16} />
        <span className="text-gray-900 font-medium">Zamówienie</span>
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
          Dane i płatność
        </span>
      </div>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* KROK 1: Koszyk + Cross-sell + Podsumowanie                 */}
      {/* ════════════════════════════════════════════════════════════ */}
      {step === 1 && (
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">
          <div className="lg:col-span-3 space-y-6">
            {/* Zamówienie z oferty handlowej — ceny wynegocjowane, nie cennikowe */}
            {quoteNumber && (
              <div className="rounded-2xl border border-gray-200 bg-white px-4 sm:px-6 py-4">
                <p className="font-semibold text-gray-900">Zamówienie z oferty {quoteNumber}</p>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Ceny poniżej pochodzą z tej wyceny — są niższe niż cennik sklepu i obowiązują
                  do końca jej ważności. Wystarczy uzupełnić dane do faktury.
                </p>
              </div>
            )}

            {/* Lista produktow */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-4 sm:px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                  <ShoppingCartIcon size={20} className="text-primary-600" />
                  Produkty w zamówieniu ({items.length})
                </h2>
                <button
                  onClick={clearAll}
                  className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                  Wyczyść wszystko
                </button>
              </div>

              <ul className="divide-y divide-gray-100">
                {items.map((item) => (
                  <CartItemRow
                    key={item.productId}
                    item={item}
                    livePrice={itemPrices.get(item.productId)}
                    onRemove={removeItem}
                    onUpdateQuantity={updateQuantity}
                  />
                ))}
              </ul>
            </div>

            {/* Polecane taśmy dla etykiet TT w koszyku — z konkretnym wariantem rozmiaru */}
            {ribbonSuggestions.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-900">
                    Polecane taśmy
                  </h2>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Druk termotransferowy wymaga taśmy barwiącej. Dobraliśmy konkretne warianty rozmiarowe dopasowane do etykiet w koszyku.
                  </p>
                </div>

                <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ribbonSuggestions.map((s) => (
                    <LiveRibbonProvider
                      key={`${s.product.id}__${s.variant.partNumber}`}
                      partNumber={s.variant.partNumber}
                      fallbackPrice={s.priceFrom}
                    >
                      <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50/30 transition-all">
                        {s.product.images?.[0] && (
                          <div className="relative w-16 h-16 rounded-lg flex-shrink-0 overflow-hidden bg-gray-50">
                            <Image
                              src={s.product.images[0]}
                              alt={`${s.product.name} ${s.sizeLabel}`}
                              fill
                              className="object-contain p-1"
                              sizes="64px"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/produkt/${s.productSlug}`}
                            className="text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors line-clamp-2"
                          >
                            {s.product.name.replace(/^Taśma termotransferowa\s+/i, '')}
                          </Link>
                          <p className="text-xs text-gray-600 mt-0.5">
                            <span className="font-medium text-gray-900">{s.sizeLabel}</span>
                            <span className="mx-1 text-gray-300">·</span>
                            <span className="font-mono text-[11px] text-gray-500">{s.variant.partNumber}</span>
                          </p>
                          <div className="mt-1 flex items-baseline gap-1 text-sm font-semibold text-primary-600">
                            <LiveRibbonPrice />
                          </div>
                        </div>
                        <button
                          onClick={() => handleAddRibbonSuggestion(s)}
                          className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center transition-colors"
                          aria-label={`Dodaj ${s.product.name} ${s.sizeLabel} do koszyka`}
                        >
                          <PlusIcon size={18} />
                        </button>
                      </div>
                    </LiveRibbonProvider>
                  ))}
                </div>
              </div>
            )}

            {/* Generic cross-sell (drukarki, terminale, akcesoria) — pokazujemy tylko gdy NIE
                mamy etykiet w koszyku (etykieta + taśma jako podstawowa kombinacja TT). */}
            {ribbonSuggestions.length === 0 && crossSellProducts.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-900">
                    Uzupełnij zamówienie
                  </h2>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Polecane akcesoria do produktów w koszyku
                  </p>
                </div>

                <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                            {formatPrice(product.priceFrom)} zł netto
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
            <div className="lg:sticky lg:top-[164px] space-y-4">
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
                Przejdź do danych firmy
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════ */}
      {/* KROK 2: Dane firmy + Adres + Płatność                      */}
      {/* ════════════════════════════════════════════════════════════ */}
      {step === 2 && (
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 sm:gap-6">
          {/* ────── PRAWA KOLUMNA: Sticky podsumowanie + submit (desktop) ────── */}
          <div className="lg:col-span-2 order-first lg:order-last">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 space-y-4 lg:sticky lg:top-[164px]">
              <h2 className="font-semibold text-gray-900">Twoje zamówienie</h2>

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
                  label={<span className="text-sm text-gray-600">Wyrażam zgodę na przetwarzanie danych osobowych w celu realizacji zamówienia. <Link href="/polityka-prywatnosci" className="text-primary-600 hover:underline">Polityka prywatności</Link></span>}
                  checked={formData.consent}
                  onChange={(e) => { setFormData((prev) => ({ ...prev, consent: e.target.checked })); if (errors.consent) { setErrors((prev) => ({ ...prev, consent: undefined })) } }}
                  error={errors.consent}
                />
                <Checkbox
                  label={<span className="text-sm text-gray-600">Zapoznałem się i akceptuję <Link href="/regulamin" target="_blank" className="text-primary-600 hover:underline">Regulamin</Link> sklepu.</span>}
                  checked={formData.acceptTerms}
                  onChange={(e) => { setFormData((prev) => ({ ...prev, acceptTerms: e.target.checked })); if (errors.acceptTerms) { setErrors((prev) => ({ ...prev, acceptTerms: undefined })) } }}
                  error={errors.acceptTerms}
                />
                <Button
                  fullWidth
                  size="lg"
                  isLoading={isSubmitting}
                  disabled={items.length === 0}
                  onClick={() => { const form = document.getElementById('checkout-form') as HTMLFormElement; form?.requestSubmit() }}
                >
                  {formData.paymentMethod === 'online' ? 'Przejdź do płatności' : 'Złóż zamówienie'}
                </Button>
                <button
                  type="button"
                  onClick={() => { setStep(1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors py-1 text-center"
                >
                  &larr; Wróć do koszyka
                </button>
                {formData.paymentMethod === 'online' && (
                  <p className="text-xs text-gray-400 text-center">
                    Zostaniesz przekierowany do bezpiecznej strony płatności Przelewy24
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ────── LEWA KOLUMNA: Formularz ────── */}
          <form id="checkout-form" onSubmit={handleSubmit} className="lg:col-span-3 space-y-4 sm:space-y-6 order-last lg:order-first">
            {/* Dane do faktury */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 space-y-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Dane do faktury</h2>

              <Input label="Nazwa firmy" name="company" value={formData.company} onChange={handleInputChange} error={errors.company} placeholder="np. ABC Sp. z o.o." required />

              <Input label="NIP" name="nip" value={formData.nip} onChange={handleInputChange} error={errors.nip} placeholder="np. 1234567890" helperText="Wymagany do faktury VAT" required />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Osoba kontaktowa" name="firstName" value={formData.firstName} onChange={handleInputChange} error={errors.firstName} placeholder="Imię i nazwisko" required />
                <Input label="Telefon" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} error={errors.phone} placeholder="np. 601 619 898" required />
              </div>

              <Input label="E-mail" name="email" type="email" value={formData.email} onChange={handleInputChange} error={errors.email} placeholder="email@firma.pl" required />
            </div>

            {/* Adres dostawy */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 space-y-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Adres dostawy</h2>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Input label="Ulica" name="street" value={formData.street} onChange={handleInputChange} error={errors.street} placeholder="np. Główna" required />
                </div>
                <div className="col-span-1">
                  <Input label="Nr bud." name="buildingNumber" value={formData.buildingNumber} onChange={handleInputChange} error={errors.buildingNumber} placeholder="12A" required />
                </div>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-4 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <Input label="Kod poczt." name="postalCode" value={formData.postalCode} onChange={handleInputChange} error={errors.postalCode} placeholder="00-000" required />
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

            {/* Płatność */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 space-y-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Metoda płatności</h2>

              <label className={`flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.paymentMethod === 'online' ? 'border-primary-500 bg-primary-50/50' : 'border-gray-200 hover:border-gray-300'}`}>
                <input type="radio" name="paymentMethod" value="online" checked={formData.paymentMethod === 'online'} onChange={() => setFormData((prev) => ({ ...prev, paymentMethod: 'online' }))} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500" />
                <div className="flex-1">
                  <span className="text-sm font-semibold text-gray-900">Płatność online</span>
                  <span className="ml-2 inline-block text-xs font-medium text-green-700 bg-green-100 rounded-full px-2.5 py-0.5">Zalecane</span>
                  <span className="text-xs text-gray-500 mt-0.5 block">BLIK, przelew z Twojego banku, karta płatnicza. Szybka i bezpieczna płatność przez Przelewy24.</span>
                </div>
              </label>

              <label className={`flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.paymentMethod === 'proforma' ? 'border-primary-500 bg-primary-50/50' : 'border-gray-200 hover:border-gray-300'}`}>
                <input type="radio" name="paymentMethod" value="proforma" checked={formData.paymentMethod === 'proforma'} onChange={() => setFormData((prev) => ({ ...prev, paymentMethod: 'proforma' }))} className="mt-1 h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500" />
                <div className="flex-1">
                  <span className="text-sm font-semibold text-gray-900">Pro forma</span>
                  <span className="text-xs text-gray-500 mt-0.5 block">Pobierz fakturę pro forma i opłać przelewem. Realizacja po zaksięgowaniu.</span>
                </div>
              </label>
            </div>

            {/* Mobile: zgoda + submit na dole formularza */}
            <div className="lg:hidden bg-white rounded-2xl border border-gray-200 p-4 space-y-4">
              <Checkbox
                label={<span className="text-sm text-gray-600">Wyrażam zgodę na przetwarzanie danych osobowych w celu realizacji zamówienia. <Link href="/polityka-prywatnosci" className="text-primary-600 hover:underline">Polityka prywatności</Link></span>}
                checked={formData.consent}
                onChange={(e) => { setFormData((prev) => ({ ...prev, consent: e.target.checked })); if (errors.consent) { setErrors((prev) => ({ ...prev, consent: undefined })) } }}
                error={errors.consent}
              />
              <Checkbox
                label={<span className="text-sm text-gray-600">Zapoznałem się i akceptuję <Link href="/regulamin" target="_blank" className="text-primary-600 hover:underline">Regulamin</Link> sklepu.</span>}
                checked={formData.acceptTerms}
                onChange={(e) => { setFormData((prev) => ({ ...prev, acceptTerms: e.target.checked })); if (errors.acceptTerms) { setErrors((prev) => ({ ...prev, acceptTerms: undefined })) } }}
                error={errors.acceptTerms}
              />
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                  {submitError}
                </div>
              )}
              <Button type="submit" fullWidth size="lg" isLoading={isSubmitting} disabled={items.length === 0}>
                {formData.paymentMethod === 'online' ? `Zapłać ${formatPrice(totalBrutto)} zl` : `Złóż zamówienie (${formatPrice(totalBrutto)} zl)`}
              </Button>
              <button
                type="button"
                onClick={() => { setStep(1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors py-1 text-center"
              >
                &larr; Wróć do koszyka
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
  livePrice,
  onRemove,
  onUpdateQuantity,
}: {
  item: CartItem
  livePrice?: number
  onRemove: (id: string) => void
  onUpdateQuantity: (id: string, qty: number) => void
}) {
  const unitPrice = livePrice ?? item.priceNetto ?? findProductPrice(item.productId)
  const lineTotal = unitPrice ? unitPrice * item.quantity : null

  return (
    <li className="p-3 sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Obrazek */}
        {(item.productImage || item.productId.includes('__onecare__')) && (
          <div className="relative w-16 h-16 sm:w-32 sm:h-32 rounded-lg flex-shrink-0 overflow-hidden">
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
            <p className="text-xs text-gray-500 mt-0.5">
              {(() => {
                const size = findVariantSize(item.partNumber)
                return (
                  <>
                    {size && <span className="text-gray-700">{size}</span>}
                    {size && <span className="mx-1.5 text-gray-300">·</span>}
                    <span className="font-mono">{item.partNumber}</span>
                  </>
                )
              })()}
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
            <span className="text-xs text-gray-500">Ilość:</span>
            <button
              onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
              className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              aria-label="Zmniejsz ilość"
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
              aria-label="Zwiększ ilość"
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
            aria-label="Usuń z koszyka"
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
    <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
      <h2 className="font-semibold text-gray-900 mb-4">Podsumowanie</h2>

      <div className="space-y-3 text-sm">
        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Wartość produktów netto</span>
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
