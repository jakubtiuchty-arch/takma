'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { ArrowRightIcon, ArrowDownIcon } from '@/components/ui/Icons'

interface StorySection {
  id: string
  step: number
  title: string
  subtitle: string
  description: string
  category: string
  categorySlug: string
  products: string[]
  color: string
  bgPattern: 'circles' | 'grid' | 'waves' | 'dots' | 'lines'
  icon: React.ReactNode
}

const storySections: StorySection[] = [
  {
    id: 'production',
    step: 1,
    title: 'Produkt powstaje',
    subtitle: 'Linia produkcyjna',
    description: 'Każdy produkt potrzebuje tożsamości. Drukarka etykiet nadaje mu unikalny kod kreskowy - jego cyfrowy paszport przez cały łańcuch dostaw.',
    category: 'Drukarki etykiet',
    categorySlug: 'drukarki-etykiet',
    products: ['Zebra ZT411', 'Zebra ZT610', 'Zebra ZD621t'],
    color: 'from-blue-600 to-blue-800',
    bgPattern: 'grid',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 120 120" fill="none">
        {/* Printer icon - animated */}
        <rect x="20" y="40" width="80" height="50" rx="4" className="fill-white/20 stroke-white stroke-2" />
        <rect x="30" y="30" width="60" height="20" rx="2" className="fill-white/30" />
        <rect x="25" y="70" width="70" height="4" rx="1" className="fill-white animate-pulse" />
        {/* Label coming out */}
        <rect x="35" y="85" width="50" height="25" rx="2" className="fill-white" />
        <rect x="40" y="92" width="30" height="3" rx="1" className="fill-blue-600" />
        <rect x="40" y="98" width="40" height="6" rx="1" className="fill-blue-600/60" />
      </svg>
    ),
  },
  {
    id: 'receiving',
    step: 2,
    title: 'Przyjęcie do magazynu',
    subtitle: 'Kontrola dostaw',
    description: 'Towar przyjeżdża do magazynu. Skaner kodów błyskawicznie weryfikuje dostawę - każda paczka jest natychmiast zarejestrowana w systemie.',
    category: 'Skanery kodów',
    categorySlug: 'skanery-kodow',
    products: ['Zebra DS2208', 'Zebra DS3608', 'Zebra DS8178'],
    color: 'from-emerald-600 to-emerald-800',
    bgPattern: 'waves',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 120 120" fill="none">
        {/* Scanner icon */}
        <path d="M30 90 L50 40 L70 40 L90 90" className="stroke-white stroke-2 fill-white/10" strokeLinejoin="round" />
        <rect x="45" y="35" width="30" height="10" rx="2" className="fill-white/30" />
        {/* Scan beam */}
        <line x1="60" y1="50" x2="60" y2="85" className="stroke-red-400 stroke-2 animate-pulse" />
        <line x1="40" y1="70" x2="80" y2="70" className="stroke-red-400/50 stroke-1" />
        {/* Barcode */}
        <g className="translate-y-2">
          <rect x="42" y="100" width="2" height="12" className="fill-white" />
          <rect x="46" y="100" width="4" height="12" className="fill-white" />
          <rect x="52" y="100" width="2" height="12" className="fill-white" />
          <rect x="56" y="100" width="6" height="12" className="fill-white" />
          <rect x="64" y="100" width="2" height="12" className="fill-white" />
          <rect x="68" y="100" width="4" height="12" className="fill-white" />
          <rect x="74" y="100" width="2" height="12" className="fill-white" />
        </g>
      </svg>
    ),
  },
  {
    id: 'inventory',
    step: 3,
    title: 'Zarządzanie zapasami',
    subtitle: 'Inwentaryzacja',
    description: 'Terminal mobilny w rękach magazyniera to pełna kontrola. Lokalizacja, ilości, daty - wszystko dostępne w jednym urządzeniu.',
    category: 'Terminale mobilne',
    categorySlug: 'terminale-mobilne',
    products: ['Zebra TC52x', 'Zebra MC3300x', 'Zebra TC21'],
    color: 'from-violet-600 to-violet-800',
    bgPattern: 'dots',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 120 120" fill="none">
        {/* Mobile terminal */}
        <rect x="35" y="15" width="50" height="90" rx="6" className="fill-white/20 stroke-white stroke-2" />
        <rect x="40" y="25" width="40" height="60" rx="2" className="fill-white/90" />
        {/* Screen content */}
        <rect x="45" y="30" width="30" height="4" className="fill-violet-600" />
        <rect x="45" y="38" width="20" height="3" className="fill-violet-400" />
        <rect x="45" y="45" width="30" height="8" rx="1" className="fill-violet-100 stroke-violet-400 stroke-1" />
        <rect x="45" y="57" width="30" height="8" rx="1" className="fill-violet-100 stroke-violet-400 stroke-1" />
        <rect x="45" y="69" width="30" height="8" rx="1" className="fill-green-100 stroke-green-500 stroke-1" />
        {/* Scanner bump */}
        <rect x="40" y="10" width="20" height="8" rx="2" className="fill-white/30" />
        {/* Bottom buttons */}
        <circle cx="60" cy="95" r="5" className="fill-white/40" />
      </svg>
    ),
  },
  {
    id: 'picking',
    step: 4,
    title: 'Kompletacja zamówienia',
    subtitle: 'Przygotowanie wysyłki',
    description: 'Zamówienie wpada do systemu. Pracownik z terminalem zbiera produkty z półek - system prowadzi go optymalną trasą przez magazyn.',
    category: 'Terminale mobilne',
    categorySlug: 'terminale-mobilne',
    products: ['Zebra TC57x', 'Zebra TC26', 'Zebra TC22/TC27'],
    color: 'from-amber-500 to-orange-600',
    bgPattern: 'lines',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 120 120" fill="none">
        {/* Warehouse shelves */}
        <rect x="10" y="30" width="25" height="70" rx="2" className="fill-white/10 stroke-white/50 stroke-1" />
        <rect x="47" y="30" width="25" height="70" rx="2" className="fill-white/10 stroke-white/50 stroke-1" />
        <rect x="85" y="30" width="25" height="70" rx="2" className="fill-white/10 stroke-white/50 stroke-1" />
        {/* Products on shelves */}
        <rect x="14" y="40" width="8" height="8" className="fill-white/60" />
        <rect x="24" y="40" width="6" height="8" className="fill-amber-300" />
        <rect x="51" y="55" width="8" height="8" className="fill-white/60" />
        <rect x="61" y="55" width="6" height="8" className="fill-amber-300" />
        <rect x="89" y="70" width="8" height="8" className="fill-amber-300" />
        {/* Pick path */}
        <path d="M22 110 L22 48 L60 48 L60 63 L97 63 L97 78" className="stroke-amber-300 stroke-2 stroke-dasharray-4" fill="none" />
        {/* Person with terminal */}
        <circle cx="97" cy="90" r="6" className="fill-white" />
        <rect x="91" y="96" width="12" height="14" rx="2" className="fill-white" />
        <rect x="100" y="94" width="8" height="12" rx="1" className="fill-amber-300 stroke-white stroke-1" />
      </svg>
    ),
  },
  {
    id: 'shipping',
    step: 5,
    title: 'Wysyłka',
    subtitle: 'Etykieta kurierska',
    description: 'Paczka gotowa do drogi. Mobilna drukarka generuje etykietę wysyłkową na miejscu - bez chodzenia do biura, bez opóźnień.',
    category: 'Drukarki mobilne',
    categorySlug: 'drukarki-mobilne',
    products: ['Zebra ZQ521', 'Zebra ZQ630 Plus', 'Zebra ZQ320 Plus'],
    color: 'from-rose-500 to-pink-600',
    bgPattern: 'circles',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 120 120" fill="none">
        {/* Package */}
        <rect x="15" y="50" width="45" height="35" rx="2" className="fill-white/20 stroke-white stroke-2" />
        <line x1="15" y1="60" x2="60" y2="60" className="stroke-white/50 stroke-1" />
        <line x1="37" y1="50" x2="37" y2="85" className="stroke-white/50 stroke-1" />
        {/* Mobile printer */}
        <rect x="65" y="45" width="40" height="30" rx="4" className="fill-white/30 stroke-white stroke-2" />
        <rect x="70" y="50" width="20" height="10" rx="1" className="fill-white/50" />
        {/* Label printing */}
        <rect x="70" y="72" width="30" height="20" rx="1" className="fill-white" />
        <rect x="73" y="76" width="18" height="3" className="fill-rose-500" />
        <rect x="73" y="82" width="24" height="6" className="fill-rose-500/40" />
        {/* Print animation line */}
        <line x1="70" y1="75" x2="100" y2="75" className="stroke-rose-300 stroke-1 animate-pulse" />
      </svg>
    ),
  },
  {
    id: 'tracking',
    step: 6,
    title: 'Pełna kontrola',
    subtitle: 'Śledzenie RFID',
    description: 'Technologia RFID to następny poziom. Automatyczny odczyt setek produktów jednocześnie, bez skanowania każdego z osobna. Inwentaryzacja w minuty zamiast dni.',
    category: 'RFID',
    categorySlug: 'rfid',
    products: ['Zebra FX9600', 'Zebra RFD40', 'Zebra RFD90'],
    color: 'from-cyan-500 to-teal-600',
    bgPattern: 'waves',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 120 120" fill="none">
        {/* RFID Reader */}
        <rect x="35" y="50" width="50" height="35" rx="4" className="fill-white/20 stroke-white stroke-2" />
        <rect x="40" y="55" width="15" height="8" rx="1" className="fill-cyan-300/50" />
        <circle cx="75" cy="59" r="3" className="fill-green-400 animate-pulse" />
        {/* Radio waves */}
        <path d="M60 30 Q80 40 60 50" className="stroke-cyan-300/80 stroke-2 fill-none" />
        <path d="M60 25 Q90 38 60 55" className="stroke-cyan-300/50 stroke-2 fill-none" />
        <path d="M60 20 Q100 35 60 60" className="stroke-cyan-300/30 stroke-2 fill-none" />
        {/* Tags being read */}
        <rect x="10" y="35" width="15" height="10" rx="1" className="fill-white/80" />
        <rect x="12" y="38" width="4" height="4" className="fill-cyan-500" />
        <rect x="20" y="55" width="15" height="10" rx="1" className="fill-white/80" />
        <rect x="22" y="58" width="4" height="4" className="fill-cyan-500" />
        <rect x="15" y="75" width="15" height="10" rx="1" className="fill-white/80" />
        <rect x="17" y="78" width="4" height="4" className="fill-cyan-500" />
        {/* Connection lines */}
        <line x1="25" y1="40" x2="35" y2="50" className="stroke-cyan-300/50 stroke-1 stroke-dasharray-2" />
        <line x1="35" y1="60" x2="35" y2="60" className="stroke-cyan-300/50 stroke-1 stroke-dasharray-2" />
        <line x1="30" y1="80" x2="35" y2="70" className="stroke-cyan-300/50 stroke-1 stroke-dasharray-2" />
      </svg>
    ),
  },
]

// Background patterns
const patterns: Record<string, React.ReactNode> = {
  grid: (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  ),
  dots: (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  ),
  waves: (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <pattern id="waves" width="100" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 10 Q25 0 50 10 T100 10" fill="none" stroke="white" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#waves)" />
    </svg>
  ),
  circles: (
    <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10%" cy="20%" r="100" fill="white" />
      <circle cx="90%" cy="80%" r="150" fill="white" />
      <circle cx="50%" cy="50%" r="200" fill="none" stroke="white" strokeWidth="1" />
    </svg>
  ),
  lines: (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="lines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lines)" />
    </svg>
  ),
}

export function StorytellingHero() {
  const [activeSection, setActiveSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionRefs.current.forEach((section, index) => {
      if (!section) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveSection(index)
            }
          })
        },
        { threshold: [0.5] }
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const container = containerRef.current
      const scrollTop = window.scrollY - container.offsetTop
      const scrollHeight = container.scrollHeight - window.innerHeight
      const progress = Math.max(0, Math.min(1, scrollTop / scrollHeight))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Progress indicator - fixed on side */}
      <div className="fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2">
        {/* Progress line */}
        <div className="relative h-48 w-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white rounded-full transition-all duration-300"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Step indicators */}
        <div className="flex flex-col gap-3 mt-4">
          {storySections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${activeSection === index
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
                }
              `}
              aria-label={`Przejdź do: ${section.title}`}
            />
          ))}
        </div>
      </div>

      {/* Story sections */}
      {storySections.map((section, index) => (
        <div
          key={section.id}
          ref={(el) => { sectionRefs.current[index] = el }}
          className={`
            relative min-h-screen flex items-center
            bg-gradient-to-br ${section.color}
            overflow-hidden
          `}
        >
          {/* Background pattern */}
          {patterns[section.bgPattern]}

          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-64 h-64 rounded-full bg-white/5 blur-3xl"
              style={{
                top: '10%',
                left: '10%',
                animation: 'float 20s infinite ease-in-out'
              }}
            />
            <div
              className="absolute w-96 h-96 rounded-full bg-black/10 blur-3xl"
              style={{
                bottom: '10%',
                right: '10%',
                animation: 'float 25s infinite ease-in-out reverse'
              }}
            />
          </div>

          <div className="container-main relative z-10 py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {/* Step indicator */}
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white font-bold text-lg">
                    {section.step}
                  </span>
                  <span className="text-white/80 font-medium uppercase tracking-wider text-sm">
                    {section.subtitle}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {section.title}
                </h2>

                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  {section.description}
                </p>

                {/* Products */}
                <div className="mb-8">
                  <p className="text-white/60 text-sm mb-3 uppercase tracking-wider">
                    Polecane produkty:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {section.products.map((product) => (
                      <span
                        key={product}
                        className="px-3 py-1 bg-white/10 rounded-full text-white text-sm"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={`/katalog?kategoria=${section.categorySlug}`}>
                  <Button
                    className="bg-white text-gray-900 hover:bg-white/90"
                    rightIcon={<ArrowRightIcon size={18} />}
                  >
                    Zobacz {section.category.toLowerCase()}
                  </Button>
                </Link>
              </div>

              {/* Icon/Illustration */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-110" />

                  {/* Icon container */}
                  <div className="relative w-full h-full p-8">
                    {section.icon}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator - only on first section */}
          {index === 0 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
              <span className="text-sm">Przewiń, aby zobaczyć historię</span>
              <ArrowDownIcon size={24} className="animate-bounce" />
            </div>
          )}
        </div>
      ))}

      {/* Final CTA section */}
      <div className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="final-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#final-grid)" />
          </svg>
        </div>

        <div className="container-main relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/20 rounded-full text-primary-300 text-sm mb-6">
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            Kompletne rozwiązania AutoID
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Zbuduj swój system
            <span className="block text-primary-400">razem z nami</span>
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Od 20 lat pomagamy firmom automatyzować procesy identyfikacji.
            Niezależnie od etapu - od produkcji po dostawę - mamy dla Ciebie rozwiązanie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/katalog">
              <Button
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white"
                rightIcon={<ArrowRightIcon size={20} />}
              >
                Przeglądaj katalog
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button
                size="lg"
                variant="secondary"
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                Porozmawiaj z ekspertem
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-gray-500 text-sm">lat doświadczenia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">35+</div>
              <div className="text-gray-500 text-sm">produktów Zebra</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-gray-500 text-sm">autoryzowany serwis</div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
        }
      `}</style>
    </div>
  )
}
