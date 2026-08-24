'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { trackGenerateLead, trackFormSubmit } from '@/lib/ga-events'
import * as z from 'zod'
import { RegistrationLightbox } from './RegistrationLightbox'
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Upload,
  X,
  Calendar,
  AlertCircle,
  Loader2
} from 'lucide-react'

// Zod Schema — multi-brand (bez walidacji modeli Zebra)
const repairFormSchema = z.object({
  // KROK 1: Dane kontaktowe
  firstName: z.string().min(2, 'Imie musi miec min. 2 znaki'),
  lastName: z.string().min(2, 'Nazwisko musi miec min. 2 znaki'),
  email: z.string().email('Nieprawidlowy adres email'),
  phone: z.string().min(9, 'Nieprawidlowy numer telefonu'),
  company: z.string().min(1, 'Nazwa firmy jest wymagana'),
  nip: z.string().min(10, 'NIP musi miec 10 cyfr').max(10, 'NIP musi miec 10 cyfr'),

  // KROK 2: Szczegóły urządzenia
  deviceType: z.enum(['drukarka', 'terminal', 'skaner', 'tablet', 'akcesoria', 'inne'], {
    message: 'Wybierz typ urządzenia',
  }),
  deviceModel: z.string().min(1, 'Wpisz model urządzenia'),
  serialNumber: z.string().min(1, 'Podaj numer seryjny lub zaznacz, ze jest nieczytelny'),
  purchaseDate: z.string().optional(),
  isWarranty: z.enum(['tak', 'nie', 'nie_wiem']),

  // KROK 3: Opis usterki
  issueDescription: z.string().min(20, 'Opis musi miec min. 20 znakow'),
  urgency: z.enum(['standard', 'express']),

  // KROK 4: Adres odbioru
  street: z.string().min(3, 'Podaj ulice i numer'),
  zipCode: z.string().regex(/^\d{2}-\d{3}$/, 'Format: 00-000'),
  city: z.string().min(2, 'Podaj miasto'),
  contactPhone: z.string().min(9, 'Nieprawidlowy numer telefonu'),
  pickupDate: z.string().min(1, 'Wybierz date odbioru'),
  courierNotes: z.string().optional(),

  // KROK 5: Zgody
  privacyConsent: z.boolean().refine(val => val === true, 'Wymagana zgoda'),
  termsConsent: z.boolean().refine(val => val === true, 'Wymagana zgoda'),
})

type RepairFormData = z.infer<typeof repairFormSchema>

// Kompresja obrazka po stronie klienta (max 1200px, JPEG 0.7)
async function compressImage(file: File, maxWidth = 1200, quality = 0.7): Promise<File> {
  return new Promise((resolve) => {
    if (file.size < 500 * 1024) {
      resolve(file)
      return
    }

    const img = new Image()
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!

    img.onload = () => {
      let { width, height } = img
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width)
        width = maxWidth
      }

      canvas.width = width
      canvas.height = height
      ctx.drawImage(img, 0, 0, width, height)

      canvas.toBlob(
        (blob) => {
          if (blob && blob.size < file.size) {
            resolve(new File([blob], file.name.replace(/\.\w+$/, '.jpg'), { type: 'image/jpeg' }))
          } else {
            resolve(file)
          }
        },
        'image/jpeg',
        quality
      )
    }

    img.onerror = () => resolve(file)
    img.src = URL.createObjectURL(file)
  })
}

export default function RepairForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // State dla lightbox rejestracji
  const [showRegistrationLightbox, setShowRegistrationLightbox] = useState(false)
  const [submittedRepairId, setSubmittedRepairId] = useState<string | null>(null)
  const [submittedEmail, setSubmittedEmail] = useState<string>('')
  const [submittedFirstName, setSubmittedFirstName] = useState<string>('')
  const [submittedLastName, setSubmittedLastName] = useState<string>('')
  const [submittedPhone, setSubmittedPhone] = useState<string>('')

  const [serialUnreadable, setSerialUnreadable] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
    setValue,
  } = useForm<RepairFormData>({
    resolver: zodResolver(repairFormSchema),
    defaultValues: {
      urgency: 'standard',
      isWarranty: 'nie_wiem',
      privacyConsent: false,
      termsConsent: false,
    },
  })

  const formData = watch()

  const steps = [
    { number: 1, title: 'Dane kontaktowe' },
    { number: 2, title: 'Szczegóły urządzenia' },
    { number: 3, title: 'Opis usterki' },
    { number: 4, title: 'Adres odbioru' },
    { number: 5, title: 'Potwierdzenie' },
  ]

  const handleNextStep = async () => {
    let fieldsToValidate: (keyof RepairFormData)[] = []

    if (currentStep === 1) {
      fieldsToValidate = ['firstName', 'lastName', 'email', 'phone', 'company', 'nip']
    } else if (currentStep === 2) {
      fieldsToValidate = ['deviceType', 'deviceModel', 'serialNumber', 'isWarranty']
    } else if (currentStep === 3) {
      fieldsToValidate = ['issueDescription', 'urgency']
    } else if (currentStep === 4) {
      fieldsToValidate = ['street', 'zipCode', 'city', 'contactPhone', 'pickupDate']
    }

    const isValid = await trigger(fieldsToValidate)
    if (isValid && currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles: File[] = []
    const fileErrors: string[] = []

    files.forEach(file => {
      if (!file.type.startsWith('image/')) {
        fileErrors.push(`${file.name} nie jest obrazem`)
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        fileErrors.push(`${file.name} jest za duzy (max 5MB)`)
        return
      }
      validFiles.push(file)
    })

    if (uploadedFiles.length + validFiles.length > 5) {
      alert('Maksymalnie 5 zdjec')
      return
    }

    if (fileErrors.length > 0) {
      alert('Bledy:\n' + fileErrors.join('\n'))
    }

    if (validFiles.length > 0) {
      setUploadedFiles([...uploadedFiles, ...validFiles])
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
  }

  const onSubmit = async (data: RepairFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const formDataToSend = new FormData()

      formDataToSend.append('firstName', data.firstName)
      formDataToSend.append('lastName', data.lastName)
      formDataToSend.append('email', data.email)
      formDataToSend.append('phone', data.phone)
      formDataToSend.append('company', data.company)
      formDataToSend.append('nip', data.nip)

      formDataToSend.append('deviceType', data.deviceType)
      formDataToSend.append('deviceModel', data.deviceModel)
      if (data.serialNumber) formDataToSend.append('serialNumber', data.serialNumber)
      if (data.purchaseDate) formDataToSend.append('purchaseDate', data.purchaseDate)
      formDataToSend.append('isWarranty', data.isWarranty)

      formDataToSend.append('issueDescription', data.issueDescription)
      formDataToSend.append('urgency', data.urgency)

      formDataToSend.append('street', data.street)
      formDataToSend.append('zipCode', data.zipCode)
      formDataToSend.append('city', data.city)
      formDataToSend.append('contactPhone', data.contactPhone)
      formDataToSend.append('pickupDate', data.pickupDate)
      if (data.courierNotes) formDataToSend.append('courierNotes', data.courierNotes)

      // Dodaj zdjecia (skompresowane)
      for (let i = 0; i < uploadedFiles.length; i++) {
        const compressed = await compressImage(uploadedFiles[i])
        formDataToSend.append(`photo_${i}`, compressed)
      }

      const response = await fetch('/api/repair-request', {
        method: 'POST',
        body: formDataToSend,
      })

      const responseText = await response.text()
      let result: { requestId?: string; error?: string; photoCount?: number; success?: boolean }
      try {
        result = JSON.parse(responseText)
      } catch {
        if (responseText.includes('Entity Too Large') || responseText.includes('too large') || responseText.includes('FUNCTION_PAYLOAD')) {
          throw new Error('Przesylane dane sa za duze. Zmniejsz rozmiar lub liczbe zdjec i sprobuj ponownie.')
        }
        throw new Error(`Błąd serwera: ${responseText.substring(0, 200)}`)
      }

      if (!response.ok) {
        throw new Error(result.error || 'Błąd podczas wysyłania zgłoszenia')
      }

      // GA4: service request lead
      trackGenerateLead(`serwis_${data.deviceType}`)
      trackFormSubmit(`serwis_${data.deviceType}`, '/serwis')

      // Pokaz lightbox rejestracji
      setSubmittedRepairId(result.requestId || null)
      setSubmittedEmail(data.email)
      setSubmittedFirstName(data.firstName)
      setSubmittedLastName(data.lastName)
      setSubmittedPhone(data.phone)
      setShowRegistrationLightbox(true)
      setIsSubmitting(false)

    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Wystapil blad. Sprobuj ponownie.'
      setSubmitError(message)
      setIsSubmitting(false)
    }
  }

  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  return (
    <section id="zgloszenie" className="py-12 px-3 sm:px-4 lg:px-6 bg-gradient-to-br from-gray-50 to-gray-100 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            Formularz zgłoszenia serwisowego (RMA)
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Wypełnij formularz — nadamy numer RMA i zamówimy kuriera pod wskazany adres.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center mb-3">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base transition-all ${
                      currentStep > step.number
                        ? 'bg-green-500 text-white'
                        : currentStep === step.number
                        ? 'bg-blue-600 text-white scale-110'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="text-xs mt-2 font-medium text-gray-600 text-center hidden md:block">
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 min-w-[20px] transition-all ${
                      currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Error Alert */}
        {submitError && (
          <div className="mb-5 bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-red-900 mb-1">Błąd wysyłania</h4>
              <p className="text-sm text-red-700">{submitError}</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-10">
            {/* KROK 1: Dane kontaktowe */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  Dane kontaktowe
                </h3>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Imie *
                    </label>
                    <input
                      {...register('firstName')}
                      id="firstName"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Jan"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nazwisko *
                    </label>
                    <input
                      {...register('lastName')}
                      id="lastName"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Kowalski"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="jan.kowalski@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    {...register('phone')}
                    id="phone"
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123456789"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Firma <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('company')}
                    id="company"
                    type="text"
                    className={`w-full px-3 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Nazwa firmy"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="nip" className="block text-sm font-medium text-gray-700 mb-2">
                    NIP <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('nip')}
                    id="nip"
                    type="text"
                    className={`w-full px-3 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.nip ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="np. 1234567890"
                    maxLength={10}
                  />
                  {errors.nip && (
                    <p className="mt-1 text-sm text-red-500">{errors.nip.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* KROK 2: Szczegóły urządzenia */}
            {currentStep === 2 && (
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  Szczegóły urządzenia
                </h3>

                <div>
                  <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Typ urządzenia *
                  </label>
                  <select
                    {...register('deviceType')}
                    id="deviceType"
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">Wybierz typ urządzenia</option>
                    <option value="drukarka">Drukarka etykiet</option>
                    <option value="terminal">Terminal mobilny</option>
                    <option value="skaner">Skaner kodow</option>
                    <option value="tablet">Tablet przemyslowy</option>
                    <option value="akcesoria">Akcesoria (glowica, walek, zasilacz...)</option>
                    <option value="inne">Inne</option>
                  </select>
                  {errors.deviceType && (
                    <p className="mt-1 text-sm text-red-600">{errors.deviceType.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="deviceModel" className="block text-sm font-medium text-gray-700 mb-2">
                    Model urządzenia *
                  </label>
                  <input
                    {...register('deviceModel')}
                    id="deviceModel"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="np. ZD421, TC52, CT37, SL20, PC45, Memor 30..."
                  />
                  {errors.deviceModel && (
                    <p className="mt-1 text-sm text-red-600">{errors.deviceModel.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Numer seryjny *
                  </label>
                  <input
                    {...register('serialNumber')}
                    id="serialNumber"
                    type="text"
                    disabled={serialUnreadable}
                    className={`w-full px-3 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500 ${errors.serialNumber ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="S/N: XXXXXXXXXXXX"
                  />
                  <label className="mt-2 flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={serialUnreadable}
                      onChange={(e) => {
                        setSerialUnreadable(e.target.checked)
                        setValue('serialNumber', e.target.checked ? 'NIECZYTELNY' : '', { shouldValidate: true })
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    Numer seryjny jest nieczytelny lub zatarty
                  </label>
                  {errors.serialNumber && (
                    <p className="mt-1 text-sm text-red-600">{errors.serialNumber.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Data zakupu (opcjonalnie)
                  </label>
                  <input
                    {...register('purchaseDate')}
                    id="purchaseDate"
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Czy urządzenie jest w gwarancji? *
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'tak', label: 'Tak, mam gwarancje' },
                      { value: 'nie', label: 'Nie, gwarancja wygasla' },
                      { value: 'nie_wiem', label: 'Nie wiem' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          {...register('isWarranty')}
                          type="radio"
                          value={option.value}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.isWarranty && (
                    <p className="mt-1 text-sm text-red-600">{errors.isWarranty.message}</p>
                  )}

                  {formData.isWarranty === 'tak' && (
                    <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800">
                        <span className="font-medium">Wskazowka:</span> Jesli posiadasz kopie faktury zakupu,
                        możesz ją przesłać w czacie po zgłoszeniu naprawy &mdash; przyspieszy to weryfikację gwarancji.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* KROK 3: Opis usterki */}
            {currentStep === 3 && (
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  Opis usterki
                </h3>

                <div>
                  <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Opisz problem z urządzeniem *
                  </label>
                  <textarea
                    {...register('issueDescription')}
                    id="issueDescription"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Opisz szczegółowo problem, który występuje w urządzeniu..."
                  />
                  {errors.issueDescription && (
                    <p className="mt-1 text-sm text-red-600">{errors.issueDescription.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zdjecia problemu (opcjonalnie, max 5)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="w-10 h-10 mx-auto mb-2 text-gray-400" />
                      <p className="text-gray-600 mb-1">
                        Kliknij aby dodac zdjecia
                      </p>
                      <p className="text-sm text-gray-500">
                        JPG, PNG (max 5MB kazde)
                      </p>
                    </label>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Zdjecie ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priorytet naprawy *
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    <label
                      className={`relative flex items-center justify-between p-5 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.urgency === 'standard'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Zwykly</div>
                        <div className="text-sm text-gray-600">3-5 dni roboczych</div>
                      </div>
                      <input
                        {...register('urgency')}
                        type="radio"
                        value="standard"
                        className="w-4 h-4 text-blue-600"
                      />
                    </label>

                    <label
                      className={`relative flex items-center justify-between p-5 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.urgency === 'express'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Wysoki</div>
                        <div className="text-sm text-gray-600">1-2 dni robocze</div>
                        <div className="text-sm font-semibold text-orange-600 mt-1">+50% wartosci naprawy</div>
                      </div>
                      <input
                        {...register('urgency')}
                        type="radio"
                        value="express"
                        className="w-4 h-4 text-blue-600"
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* KROK 4: Adres odbioru */}
            {currentStep === 4 && (
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  Adres odbioru kuriera
                </h3>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-900">
                    Kurier odbierze urządzenie z podanego adresu. Sprawdź, czy dane są poprawne.
                  </p>
                </div>

                <div>
                  <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-2">
                    Ulica i numer *
                  </label>
                  <input
                    {...register('street')}
                    id="street"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ul. Przykladowa 123/45"
                  />
                  {errors.street && (
                    <p className="mt-1 text-sm text-red-600">{errors.street.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Kod pocztowy *
                    </label>
                    <input
                      {...register('zipCode')}
                      id="zipCode"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="00-000"
                    />
                    {errors.zipCode && (
                      <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      Miasto *
                    </label>
                    <input
                      {...register('city')}
                      id="city"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Warszawa"
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon kontaktowy (dla kuriera) *
                  </label>
                  <input
                    {...register('contactPhone')}
                    id="contactPhone"
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123456789"
                  />
                  {errors.contactPhone && (
                    <p className="mt-1 text-sm text-red-600">{errors.contactPhone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Preferowana data odbioru *
                  </label>
                  <input
                    {...register('pickupDate')}
                    id="pickupDate"
                    type="date"
                    min={getMinDate()}
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.pickupDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.pickupDate.message}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    Najwczesniejsza data odbioru: jutro
                  </p>
                </div>

                <div>
                  <label htmlFor="courierNotes" className="block text-sm font-medium text-gray-700 mb-2">
                    Uwagi dla kuriera (opcjonalnie)
                  </label>
                  <textarea
                    {...register('courierNotes')}
                    id="courierNotes"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="np. kod do bramy, pietro, preferowane godziny odbioru..."
                  />
                </div>
              </div>
            )}

            {/* KROK 5: Potwierdzenie */}
            {currentStep === 5 && (
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  Podsumowanie zgłoszenia
                </h3>

                <div className="space-y-5">
                  {/* Dane kontaktowe */}
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">Dane kontaktowe</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Imie i nazwisko:</span> <span className="font-medium">{formData.firstName} {formData.lastName}</span></p>
                      <p><span className="text-gray-600">Email:</span> <span className="font-medium">{formData.email}</span></p>
                      <p><span className="text-gray-600">Telefon:</span> <span className="font-medium">{formData.phone}</span></p>
                      <p><span className="text-gray-600">Firma:</span> <span className="font-medium">{formData.company}</span></p>
                      <p><span className="text-gray-600">NIP:</span> <span className="font-medium">{formData.nip}</span></p>
                    </div>
                  </div>

                  {/* Urzadzenie */}
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">Urzadzenie</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Typ:</span> <span className="font-medium">
                        {formData.deviceType === 'drukarka' && 'Drukarka etykiet'}
                        {formData.deviceType === 'terminal' && 'Terminal mobilny'}
                        {formData.deviceType === 'skaner' && 'Skaner kodow'}
                        {formData.deviceType === 'tablet' && 'Tablet przemyslowy'}
                        {formData.deviceType === 'akcesoria' && 'Akcesoria'}
                        {formData.deviceType === 'inne' && 'Inne'}
                      </span></p>
                      <p><span className="text-gray-600">Model:</span> <span className="font-medium">{formData.deviceModel}</span></p>
                      {formData.serialNumber && (
                        <p><span className="text-gray-600">S/N:</span> <span className="font-medium">{formData.serialNumber}</span></p>
                      )}
                      <p><span className="text-gray-600">Gwarancja:</span> <span className="font-medium">
                        {formData.isWarranty === 'tak' ? 'Tak' : formData.isWarranty === 'nie' ? 'Nie' : 'Nie wiem'}
                      </span></p>
                    </div>
                  </div>

                  {/* Opis problemu */}
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">Opis problemu</h4>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{formData.issueDescription}</p>
                    <div className="mt-2 text-sm">
                      <span className="text-gray-600">Priorytet:</span> <span className="font-medium">
                        {formData.urgency === 'express' ? 'Wysoki (+50% wartosci)' : 'Zwykly'}
                      </span>
                    </div>
                    {uploadedFiles.length > 0 && (
                      <div className="mt-2">
                        <span className="text-sm text-gray-600">Zdjecia: {uploadedFiles.length}</span>
                      </div>
                    )}
                  </div>

                  {/* Adres odbioru */}
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">Adres odbioru</h4>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium">{formData.street}</p>
                      <p className="font-medium">{formData.zipCode} {formData.city}</p>
                      <p><span className="text-gray-600">Telefon:</span> <span className="font-medium">{formData.contactPhone}</span></p>
                      <p><span className="text-gray-600">Data odbioru:</span> <span className="font-medium">{formData.pickupDate}</span></p>
                      {formData.courierNotes && (
                        <p><span className="text-gray-600">Uwagi:</span> <span className="font-medium">{formData.courierNotes}</span></p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Zgody */}
                <div className="space-y-3 pt-5 border-t border-gray-200">
                  <label className="flex items-start gap-2 cursor-pointer group">
                    <input
                      {...register('privacyConsent')}
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500 rounded"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      Wyrazam zgode na przetwarzanie moich danych osobowych zgodnie z <a href="/polityka-prywatnosci" target="_blank" className="text-blue-600 hover:underline">Polityka Prywatnosci</a> (RODO) *
                    </span>
                  </label>
                  {errors.privacyConsent && (
                    <p className="ml-6 text-sm text-red-600">{errors.privacyConsent.message}</p>
                  )}

                  <label className="flex items-start gap-2 cursor-pointer group">
                    <input
                      {...register('termsConsent')}
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500 rounded"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      Akceptuje <a href="/regulamin" target="_blank" className="text-blue-600 hover:underline">Regulamin Serwisu</a> *
                    </span>
                  </label>
                  {errors.termsConsent && (
                    <p className="ml-6 text-sm text-red-600">{errors.termsConsent.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-5 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Wstecz
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Dalej
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Wysylanie...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      Wyślij zgłoszenie
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Registration Lightbox */}
        <RegistrationLightbox
          isOpen={showRegistrationLightbox}
          repairId={submittedRepairId || ''}
          userEmail={submittedEmail}
          userFirstName={submittedFirstName}
          userLastName={submittedLastName}
          userPhone={submittedPhone}
        />
      </div>
    </section>
  )
}
