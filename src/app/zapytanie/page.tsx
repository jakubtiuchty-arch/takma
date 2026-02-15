'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button, Input, Textarea, Checkbox, Select } from '@/components/ui'
import {
  ChevronRightIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon,
  CheckIcon,
  ArrowRightIcon,
} from '@/components/ui/Icons'
import { useRFQStore } from '@/store/rfqStore'

const contactPreferences = [
  { value: 'email', label: 'E-mail' },
  { value: 'phone', label: 'Telefon' },
  { value: 'any', label: 'Dowolnie' },
]

interface FormData {
  firstName: string
  lastName: string
  company: string
  nip: string
  email: string
  phone: string
  message: string
  contactPreference: string
  consent: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  company?: string
  email?: string
  phone?: string
  consent?: string
}

export default function RFQPage() {
  const router = useRouter()
  const { items, removeItem, updateQuantity, updateNote, clearAll } = useRFQStore()
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    nip: '',
    email: '',
    phone: '',
    message: '',
    contactPreference: 'email',
    consent: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    setMounted(true)
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Imię jest wymagane'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Nazwisko jest wymagane'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Nazwa firmy jest wymagana'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Adres e-mail jest wymagany'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy format adresu e-mail'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Numer telefonu jest wymagany'
    }

    if (!formData.consent) {
      newErrors.consent = 'Zgoda jest wymagana do wysłania zapytania'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // MOCK - symulacja wysyłki do API
    // W przyszłości: fetch('/api/rfq', { method: 'POST', body: JSON.stringify({...formData, items}) })
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('RFQ Submission:', { formData, items })

    setIsSubmitting(false)
    setIsSuccess(true)
    clearAll()
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (!mounted) {
    return (
      <div className="container-main py-8 lg:py-12">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-8" />
          <div className="h-64 bg-gray-200 rounded-xl" />
        </div>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="container-main py-16 lg:py-24">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckIcon size={40} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Zapytanie zostało wysłane!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Dziękujemy za przesłanie zapytania ofertowego. Nasz zespół skontaktuje się z Tobą
            w ciągu 1-2 dni roboczych.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/katalog">
              <Button variant="primary">Przeglądaj katalog</Button>
            </Link>
            <Link href="/">
              <Button variant="secondary">Wróć na stronę główną</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-main py-8 lg:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600 transition-colors">
          Strona główna
        </Link>
        <ChevronRightIcon size={16} />
        <span className="text-gray-900 font-medium">Zapytanie ofertowe</span>
      </nav>

      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
        Zapytanie ofertowe
      </h1>
      <p className="text-gray-600 mb-8">
        Wypełnij formularz, aby otrzymać indywidualną wycenę wybranych produktów.
      </p>

      {items.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">📋</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Lista zapytania jest pusta
          </h2>
          <p className="text-gray-500 mb-6">
            Dodaj produkty do listy, aby przygotować zapytanie ofertowe
          </p>
          <Link href="/katalog">
            <Button rightIcon={<ArrowRightIcon size={18} />}>
              Przeglądaj katalog
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Products list */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">
                  Produkty w zapytaniu ({items.length})
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
                  <li key={item.productId} className="p-6">
                    <div className="flex gap-4">
                      {/* Obrazek produktu */}
                      {(item.productId.includes('__onecare__') || item.productImage) && (
                        <div className="relative w-28 h-28 rounded-lg flex-shrink-0 overflow-hidden">
                          <Image
                            src={item.productId.includes('__onecare__') ? '/images/zebra-onecare-logo.png' : item.productImage!}
                            alt={item.productId.includes('__onecare__') ? 'Zebra OneCare' : item.productName}
                            fill
                            className="object-contain p-2"
                            sizes="80px"
                          />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/produkt/${item.productSlug}`}
                          className="font-medium text-gray-900 hover:text-primary-600 transition-colors"
                        >
                          {item.productName}
                        </Link>
                        {item.partNumber && (
                          <p className="text-sm text-gray-500 mt-0.5">
                            {item.partNumber}
                          </p>
                        )}

                        {/* Quantity */}
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-sm text-gray-500">Ilość:</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                          >
                            <MinusIcon size={16} />
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.productId, parseInt(e.target.value) || 1)
                            }
                            min="1"
                            className="w-16 h-8 text-center border border-gray-200 rounded-lg text-sm"
                          />
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                          >
                            <PlusIcon size={16} />
                          </button>
                        </div>

                        {/* Note */}
                        <input
                          type="text"
                          value={item.note}
                          onChange={(e) => updateNote(item.productId, e.target.value)}
                          placeholder="Dodaj notatkę (np. kolor, wersja)..."
                          className="w-full mt-3 px-3 py-2 text-sm border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:border-primary-500"
                        />
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors self-start"
                        aria-label="Usuń z listy"
                      >
                        <TrashIcon size={20} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 space-y-4">
                <h2 className="font-semibold text-gray-900 mb-4">Dane kontaktowe</h2>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Imię"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    error={errors.firstName}
                    required
                  />
                  <Input
                    label="Nazwisko"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
                    required
                  />
                </div>

                <Input
                  label="Firma"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  error={errors.company}
                  required
                />

                <Input
                  label="NIP"
                  name="nip"
                  value={formData.nip}
                  onChange={handleInputChange}
                  placeholder="Opcjonalnie"
                />

                <Input
                  label="E-mail"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  required
                />

                <Input
                  label="Telefon"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                  required
                />

                <Select
                  label="Preferowany kontakt"
                  name="contactPreference"
                  value={formData.contactPreference}
                  onChange={handleInputChange}
                  options={contactPreferences}
                />

                <Textarea
                  label="Wiadomość"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Dodatkowe informacje, pytania..."
                  rows={3}
                />

                <Checkbox
                  label={
                    <span className="text-sm text-gray-600">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych w celu realizacji
                      zapytania ofertowego.{' '}
                      <Link href="/polityka-prywatnosci" className="text-primary-600 hover:underline">
                        Polityka prywatności
                      </Link>
                    </span>
                  }
                  checked={formData.consent}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, consent: e.target.checked }))
                    if (errors.consent) {
                      setErrors((prev) => ({ ...prev, consent: undefined }))
                    }
                  }}
                  error={errors.consent}
                />

                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  isLoading={isSubmitting}
                  disabled={items.length === 0}
                >
                  Wyślij zapytanie
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Odpowiemy w ciągu 1-2 dni roboczych
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
