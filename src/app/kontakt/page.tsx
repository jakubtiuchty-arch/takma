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
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-14 lg:py-20">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-primary-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Strona główna
            </Link>
            <ChevronRightIcon size={16} />
            <span className="text-white">Kontakt</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Porozmawiajmy o Twoim projekcie
            </h1>
            <p className="text-xl text-primary-100">
              Potrzebujesz pomocy w doborze terminali, drukarek etykiet lub skanerów?
              Nasi specjaliści z 25-letnim doświadczeniem pomogą dobrać optymalne rozwiązanie.
            </p>
          </div>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="relative -mt-8 z-10 mb-12">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            <a
              href="tel:+48607819688"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 p-6 flex items-center gap-5 transition-all hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors flex-shrink-0">
                <PhoneIcon size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">Zadzwoń do nas</p>
                <p className="text-lg font-bold text-gray-900">+48 607 819 688</p>
                <p className="text-xs text-gray-400 mt-0.5">Pon-Pt: 7:30 - 15:30</p>
              </div>
            </a>

            <a
              href="mailto:kontakt@takma.com.pl"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 p-6 flex items-center gap-5 transition-all hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors flex-shrink-0">
                <MailIcon size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">Napisz do nas</p>
                <p className="text-lg font-bold text-gray-900">kontakt@takma.com.pl</p>
                <p className="text-xs text-gray-400 mt-0.5">Odpowiadamy w ciągu 24h</p>
              </div>
            </a>

            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex items-center gap-5">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                <LocationIcon size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">Odwiedź nas</p>
                <p className="text-lg font-bold text-gray-900">ul. Poświęcka 1a</p>
                <p className="text-xs text-gray-400 mt-0.5">51-128 Wrocław</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="container-main pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Formularz kontaktowy</h2>
              <p className="text-gray-500 mb-6">Opisz swoje potrzeby — przygotujemy indywidualną ofertę.</p>

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

                <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full sm:w-auto">
                  Wyślij wiadomość
                </Button>
              </form>
            </div>
          </div>

          {/* Map + info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.5!2d16.977!3d51.138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c2d4b5f1c1%3A0x0!2zNTHCsDA4JzE3LjAiTiAxNsKwNTgnMzcuMCJF!5e0!3m2!1spl!2spl!4v1"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TAKMA - lokalizacja firmy, ul. Poświęcka 1a, Wrocław"
              />
            </div>

            {/* Trust signals */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Dlaczego TAKMA?</h3>
              <ul className="space-y-3">
                {[
                  '25 lat na rynku AutoID w Polsce',
                  'Autoryzowany partner Zebra Technologies',
                  'Własny serwis drukarek i terminali',
                  'Indywidualne wyceny dla firm B2B',
                  'Wsparcie techniczne przed i po zakupie',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon size={12} className="text-primary-600" />
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick CTA */}
            <div className="bg-gradient-hero rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Potrzebujesz szybkiej wyceny?</h3>
              <p className="text-primary-100 text-sm mb-4">
                Zadzwoń bezpośrednio — doradzimy i przygotujemy ofertę na miejscu.
              </p>
              <a
                href="tel:+48607819688"
                className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-50 transition-colors text-sm"
              >
                <PhoneIcon size={18} />
                +48 607 819 688
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
