'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { ArrowRightIcon, CheckIcon } from '@/components/ui/Icons'

// Typy problemów/zastosowań
interface UseCase {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
  solutions: Solution[]
}

interface Solution {
  category: string
  categorySlug: string
  description: string
  products: string[]
  benefits: string[]
}

const useCases: UseCase[] = [
  {
    id: 'shipping',
    title: 'Wysyłki',
    subtitle: 'Paczki i przesyłki',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="12" width="28" height="20" rx="2" className="stroke-current" strokeWidth="2" />
        <path d="M6 18h28" className="stroke-current" strokeWidth="2" />
        <path d="M14 12V8a2 2 0 012-2h8a2 2 0 012 2v4" className="stroke-current" strokeWidth="2" />
        <rect x="12" y="22" width="16" height="6" rx="1" className="fill-current opacity-30" />
      </svg>
    ),
    solutions: [
      {
        category: 'Drukarki etykiet',
        categorySlug: 'drukarki-etykiet',
        description: 'Drukuj etykiety wysyłkowe z kodami kreskowymi i adresami',
        products: ['Zebra ZD421t', 'Zebra ZD621t', 'Zebra ZT411'],
        benefits: ['Szybki wydruk', 'Integracja z kurierami', 'Trwałe etykiety'],
      },
      {
        category: 'Skanery kodów',
        categorySlug: 'skanery-kodow',
        description: 'Weryfikuj paczki i rejestruj wysyłki',
        products: ['Zebra DS2208', 'Zebra DS2278'],
        benefits: ['Błyskawiczne skanowanie', 'Odczyt z ekranów', 'Plug & Play'],
      },
    ],
  },
  {
    id: 'production',
    title: 'Produkcja',
    subtitle: 'Linia produkcyjna',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="20" width="10" height="14" rx="1" className="stroke-current" strokeWidth="2" />
        <rect x="15" y="16" width="10" height="18" rx="1" className="stroke-current" strokeWidth="2" />
        <rect x="26" y="12" width="10" height="22" rx="1" className="stroke-current" strokeWidth="2" />
        <path d="M9 8v6M20 6v6M31 4v4" className="stroke-current" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="8" r="2" className="fill-current" />
        <circle cx="20" cy="6" r="2" className="fill-current" />
        <circle cx="31" cy="4" r="2" className="fill-current" />
      </svg>
    ),
    solutions: [
      {
        category: 'Drukarki przemysłowe',
        categorySlug: 'drukarki-etykiet',
        description: 'Wytrzymałe drukarki do pracy 24/7 na linii produkcyjnej',
        products: ['Zebra ZT610', 'Zebra ZT411', 'Zebra ZT620'],
        benefits: ['Praca ciągła 24/7', 'Metalowa konstrukcja', 'Wysoka rozdzielczość'],
      },
      {
        category: 'Skanery przemysłowe',
        categorySlug: 'skanery-kodow',
        description: 'Ultra-wytrzymałe skanery do trudnych warunków',
        products: ['Zebra DS3608', 'Zebra DS8178'],
        benefits: ['IP67', 'Odporność -30°C do +50°C', 'Multi-kod do 20 naraz'],
      },
    ],
  },
  {
    id: 'warehouse',
    title: 'Magazyn',
    subtitle: 'Zarządzanie zapasami',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <path d="M4 16L20 6l16 10v20H4V16z" className="stroke-current" strokeWidth="2" strokeLinejoin="round" />
        <rect x="10" y="20" width="6" height="8" className="fill-current opacity-30" />
        <rect x="18" y="20" width="6" height="8" className="fill-current opacity-30" />
        <rect x="26" y="20" width="6" height="8" className="fill-current opacity-30" />
        <rect x="10" y="30" width="6" height="6" className="fill-current opacity-30" />
        <rect x="18" y="30" width="6" height="6" className="fill-current opacity-30" />
        <rect x="26" y="30" width="6" height="6" className="fill-current opacity-30" />
      </svg>
    ),
    solutions: [
      {
        category: 'Terminale mobilne',
        categorySlug: 'terminale-mobilne',
        description: 'Kolektory danych do inwentaryzacji i zarządzania magazynem',
        products: ['Zebra TC52x', 'Zebra MC3300x', 'Zebra TC21'],
        benefits: ['Android', 'Wbudowany skaner', 'IP67', 'Bateria na zmianę'],
      },
      {
        category: 'RFID',
        categorySlug: 'rfid',
        description: 'Automatyczna inwentaryzacja - setki produktów w sekundę',
        products: ['Zebra RFD40', 'Zebra FX9600'],
        benefits: ['Inwentaryzacja w minuty', 'Bez skanowania po kolei', 'Zasięg do 9m'],
      },
    ],
  },
  {
    id: 'retail',
    title: 'Sklep',
    subtitle: 'Handel detaliczny',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="8" width="28" height="26" rx="2" className="stroke-current" strokeWidth="2" />
        <path d="M6 14h28" className="stroke-current" strokeWidth="2" />
        <circle cx="14" cy="11" r="1.5" className="fill-current" />
        <circle cx="20" cy="11" r="1.5" className="fill-current" />
        <circle cx="26" cy="11" r="1.5" className="fill-current" />
        <rect x="10" y="18" width="8" height="12" rx="1" className="fill-current opacity-30" />
        <rect x="22" y="18" width="8" height="6" rx="1" className="fill-current opacity-30" />
        <rect x="22" y="26" width="8" height="4" rx="1" className="fill-current opacity-30" />
      </svg>
    ),
    solutions: [
      {
        category: 'Skanery kodów',
        categorySlug: 'skanery-kodow',
        description: 'Skanery do kas i obsługi klienta',
        products: ['Zebra DS2208', 'Zebra DS2278', 'Zebra LI4278'],
        benefits: ['Szybka obsługa', 'Kody z telefonów', 'Bezprzewodowe opcje'],
      },
      {
        category: 'Drukarki etykiet',
        categorySlug: 'drukarki-etykiet',
        description: 'Etykiety cenowe i oznaczenia produktów',
        products: ['Zebra ZD421d', 'Zebra ZD421t'],
        benefits: ['Kompaktowe', 'Ciche', 'Łatwa obsługa'],
      },
    ],
  },
  {
    id: 'field',
    title: 'Teren',
    subtitle: 'Praca mobilna',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="16" r="6" className="stroke-current" strokeWidth="2" />
        <path d="M20 22v6" className="stroke-current" strokeWidth="2" />
        <path d="M14 34c0-4 2.5-6 6-6s6 2 6 6" className="stroke-current" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 20l-4 4M32 20l4 4M8 12l-4-4M32 12l4-4" className="stroke-current" strokeWidth="2" strokeLinecap="round" />
        <rect x="16" y="30" width="8" height="6" rx="1" className="fill-current opacity-30" />
      </svg>
    ),
    solutions: [
      {
        category: 'Terminale mobilne',
        categorySlug: 'terminale-mobilne',
        description: 'Wytrzymałe urządzenia z LTE do pracy w terenie',
        products: ['Zebra TC26', 'Zebra TC57x', 'Zebra TC27'],
        benefits: ['4G LTE', 'GPS', 'IP67', 'Bateria cały dzień'],
      },
      {
        category: 'Drukarki mobilne',
        categorySlug: 'drukarki-mobilne',
        description: 'Drukuj etykiety i paragony w terenie',
        products: ['Zebra ZQ521', 'Zebra ZQ630 Plus', 'Zebra ZQ320 Plus'],
        benefits: ['Bluetooth/Wi-Fi', 'Odporne na upadki', 'Lekkie'],
      },
    ],
  },
  {
    id: 'healthcare',
    title: 'Medycyna',
    subtitle: 'Służba zdrowia',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="8" width="24" height="24" rx="4" className="stroke-current" strokeWidth="2" />
        <path d="M20 14v12M14 20h12" className="stroke-current" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    solutions: [
      {
        category: 'Skanery HC',
        categorySlug: 'skanery-kodow',
        description: 'Skanery z powłoką antybakteryjną do szpitali',
        products: ['Zebra DS8178', 'Zebra DS2208'],
        benefits: ['Obudowa antybakteryjna', 'Łatwa dezynfekcja', 'Ciche'],
      },
      {
        category: 'Drukarki opasek',
        categorySlug: 'drukarki-etykiet',
        description: 'Druk opasek identyfikacyjnych pacjentów',
        products: ['Zebra ZD621t', 'Zebra ZD421d'],
        benefits: ['Opaski wodoodporne', 'Kody 2D', 'Integracja z HIS'],
      },
    ],
  },
]

export function ProblemSolverHero() {
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null)
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (useCase: UseCase) => {
    setSelectedUseCase(useCase)
    setShowResults(true)
  }

  const handleReset = () => {
    setSelectedUseCase(null)
    setShowResults(false)
  }

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>

          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container-main relative z-10 py-16">
          {!showResults ? (
            /* Question State */
            <div className="max-w-5xl mx-auto">
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/20 rounded-full text-primary-300 text-sm">
                  <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                  Znajdź idealne rozwiązanie w 30 sekund
                </div>
              </div>

              {/* Main question */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
                Czym się zajmujesz?
              </h1>
              <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Wybierz obszar, a pokażemy Ci sprawdzone rozwiązania AutoID dopasowane do Twoich potrzeb
              </p>

              {/* Use case grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {useCases.map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => handleSelect(useCase)}
                    className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/50 rounded-2xl p-6 lg:p-8 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/10"
                  >
                    {/* Icon */}
                    <div className="text-gray-400 group-hover:text-primary-400 transition-colors mb-4">
                      {useCase.icon}
                    </div>

                    {/* Text */}
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {useCase.subtitle}
                    </p>

                    {/* Arrow indicator */}
                    <div className="absolute top-6 right-6 text-gray-600 group-hover:text-primary-400 transition-all group-hover:translate-x-1">
                      <ArrowRightIcon size={20} />
                    </div>
                  </button>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-gray-500">
                  <CheckIcon size={18} className="text-green-500" />
                  <span className="text-sm">Autoryzowany partner Zebra</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <CheckIcon size={18} className="text-green-500" />
                  <span className="text-sm">20 lat doświadczenia</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <CheckIcon size={18} className="text-green-500" />
                  <span className="text-sm">Serwis gwarancyjny</span>
                </div>
              </div>
            </div>
          ) : (
            /* Results State */
            <div className="max-w-5xl mx-auto">
              {/* Back button */}
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                Zmień wybór
              </button>

              {/* Selected use case header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-primary-600/20 rounded-2xl text-primary-400">
                  {selectedUseCase?.icon}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {selectedUseCase?.title}
                  </h2>
                  <p className="text-gray-400">
                    Polecane rozwiązania dla: {selectedUseCase?.subtitle.toLowerCase()}
                  </p>
                </div>
              </div>

              {/* Solutions grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {selectedUseCase?.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8"
                  >
                    {/* Category header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">
                        {solution.category}
                      </h3>
                      <Link
                        href={`/${solution.categorySlug}`}
                        className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1"
                      >
                        Zobacz wszystkie
                        <ArrowRightIcon size={14} />
                      </Link>
                    </div>

                    <p className="text-gray-400 mb-6">
                      {solution.description}
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {solution.benefits.map((benefit, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm"
                        >
                          <CheckIcon size={14} />
                          {benefit}
                        </span>
                      ))}
                    </div>

                    {/* Recommended products */}
                    <div>
                      <p className="text-gray-500 text-sm mb-3">Polecane modele:</p>
                      <div className="flex flex-wrap gap-2">
                        {solution.products.map((product, i) => (
                          <Link
                            key={i}
                            href={`/katalog?szukaj=${encodeURIComponent(product)}`}
                            className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/50 rounded-lg text-white text-sm transition-all"
                          >
                            {product}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-600/20 to-blue-600/20 border border-primary-500/30 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Potrzebujesz pomocy w wyborze?
                </h3>
                <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                  Nasi eksperci pomogą dobrać optymalne rozwiązanie.
                  Bezpłatna konsultacja i wycena.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/kontakt">
                    <Button
                      size="lg"
                      className="bg-primary-600 hover:bg-primary-700 text-white"
                    >
                      Umów konsultację
                    </Button>
                  </Link>
                  <Link href="/katalog">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Przeglądaj katalog
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section - only visible when not in results */}
      {!showResults && (
        <section className="bg-gray-900 border-t border-white/10 py-12">
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">35+</div>
                <div className="text-gray-500 text-sm">produktów Zebra</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">20</div>
                <div className="text-gray-500 text-sm">lat na rynku</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-500 text-sm">autoryzowany serwis</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">48h</div>
                <div className="text-gray-500 text-sm">szybka wysyłka</div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
