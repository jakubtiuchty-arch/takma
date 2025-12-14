'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button, Input, Textarea, Select, Checkbox } from '@/components/ui'
import {
  ChevronRightIcon,
  PhoneIcon,
  MailIcon,
  LocationIcon,
  CheckIcon,
} from '@/components/ui/Icons'

const contactReasons = [
  { value: 'quote', label: 'Zapytanie ofertowe' },
  { value: 'support', label: 'Wsparcie techniczne' },
  { value: 'service', label: 'Serwis / Naprawa' },
  { value: 'partnership', label: 'Współpraca' },
  { value: 'other', label: 'Inne' },
]

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  reason: string
  message: string
  consent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
  consent?: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    reason: 'quote',
    message: '',
    consent: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Imię i nazwisko jest wymagane'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Adres e-mail jest wymagany'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy format adresu e-mail'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Wiadomość jest wymagana'
    }

    if (!formData.consent) {
      newErrors.consent = 'Zgoda jest wymagana do wysłania wiadomości'
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
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Contact form submission:', formData)

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSuccess) {
    return (
      <div className="container-main py-16 lg:py-24">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckIcon size={40} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Wiadomość została wysłana!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Dziękujemy za kontakt. Odpowiemy na Twoją wiadomość tak szybko, jak to możliwe.
          </p>
          <Link href="/">
            <Button variant="primary">Wróć na stronę główną</Button>
          </Link>
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
        <span className="text-gray-900 font-medium">Kontakt</span>
      </nav>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact info */}
        <div className="lg:col-span-1">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Skontaktuj się z nami
          </h1>
          <p className="text-gray-600 mb-8">
            Masz pytania? Potrzebujesz pomocy w wyborze urządzeń? Skontaktuj się z nami –
            chętnie pomożemy.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                <PhoneIcon size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                <a
                  href="tel:+48123456789"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  +48 12 345 67 89
                </a>
                <p className="text-sm text-gray-500 mt-1">Pon-Pt: 8:00 - 16:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                <MailIcon size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                <a
                  href="mailto:kontakt@takma.pl"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  kontakt@takma.pl
                </a>
                <p className="text-sm text-gray-500 mt-1">Odpowiadamy w ciągu 24h</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                <LocationIcon size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                <p className="text-gray-600">
                  ul. Przykładowa 123
                  <br />
                  30-000 Kraków
                </p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-8 bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
            <div className="text-center">
              <LocationIcon size={48} className="text-gray-300 mx-auto mb-2" />
              <p className="text-gray-400 text-sm">Mapa Google</p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-2">
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Formularz kontaktowy</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  label="Imię i nazwisko"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                  required
                />
                <Input
                  label="Firma"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Opcjonalnie"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
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
                  placeholder="Opcjonalnie"
                />
              </div>

              <Select
                label="Temat"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                options={contactReasons}
              />

              <Textarea
                label="Wiadomość"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                error={errors.message}
                rows={5}
                required
              />

              <Checkbox
                label={
                  <span className="text-sm text-gray-600">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia
                    odpowiedzi na moje zapytanie.{' '}
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

              <Button type="submit" size="lg" isLoading={isSubmitting}>
                Wyślij wiadomość
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
