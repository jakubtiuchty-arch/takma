'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/ui'
import { ArrowRightIcon } from '@/components/ui/Icons'

interface ProductSlide {
  type: 'product'
  image: string
  name: string
  slug: string
  tagline: string
  imageClassName?: string
  /** 'lifestyle' = gradient od prawej, tekst po prawej; 'packshot' = gradient od lewej, tekst po lewej */
  imageType?: 'lifestyle' | 'packshot'
  /** Baner — bez gradientów/overlay'ów, tło dopasowane do koloru obrazu */
  noOverlay?: boolean
  /** Obraz flush do lewej (h-full w-auto, bez skalowania) — tekst po prawej */
  imageLeft?: boolean
  /** Kolor tła sekcji dopasowany do banera */
  bgColor?: string
  /** Opcjonalne wideo w pętli (cinemagraph) zamiast statycznego obrazu; image = poster */
  video?: string
  /** Nakładka CSS z animowanym impulsem światła (obraz 5:1 kotwiczony do lewej) */
  lightArtifacts?: boolean
}

interface InfoSlide {
  type: 'info'
}

interface MaterialsSlide {
  type: 'materials'
}

type HeroSlide = InfoSlide | ProductSlide | MaterialsSlide

const slides: HeroSlide[] = [
  { type: 'info' },
  { type: 'materials' },
  {
    type: 'product',
    image: '/images/zebra-tc501-baner-v2.webp',
    lightArtifacts: true,
    name: 'Zebra TC501',
    slug: 'zebra-tc501',
    tagline: 'Flagowy kolektor danych z AI, RFID UHF i Wi-Fi 7. Ekran AMOLED 6" 1500 nit, skaner AC670 do 30 m i Android 15 ze wsparciem do v19.',
    imageType: 'lifestyle',
    imageClassName: 'object-cover object-left',
    bgColor: '#11150f',
  },
  {
    type: 'product',
    image: '/images/hero-zt231.webp',
    name: 'Zebra ZT231',
    slug: 'zebra-zt231',
    tagline: 'Drukarka etykiet klasy light-industrial z ekranem dotykowym 4,3" i metalowa obudowa. Kompaktowa, 304 mm/s, RFID opcja — nastepca ZT230.',
    imageType: 'packshot',
    noOverlay: true,
    bgColor: '#090f0e',
  },
  {
    type: 'product',
    image: '/images/hero-ct70.webp',
    name: 'Honeywell CT70',
    slug: 'honeywell-ct70',
    tagline: 'Pierwszy terminal enterprise z Wi-Fi 7 i Bluetooth 6.0. Ekran 6" FHD+, ladowanie bezprzewodowe Qi, Android 15-19.',
    imageClassName: 'object-contain object-[70%_center]',
    imageType: 'packshot',
    noOverlay: true,
    bgColor: '#0a0e10',
  },
  {
    type: 'product',
    image: '/images/hero-ds8208.webp',
    name: 'Zebra DS8288',
    slug: 'zebra-ds8288',
    tagline: 'Bezprzewodowy skaner premium 2D z sensorem 2 MP i Bluetooth 5.2. Ladowanie indukcyjne, FIPS 140-3, gwarancja 3 lata.',
    imageClassName: 'object-contain object-[75%_center]',
    imageType: 'packshot',
    noOverlay: true,
    bgColor: '#191e22',
  },
]

const INTERVAL = 6000
const SM_BREAKPOINT = 640

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < SM_BREAKPOINT)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const goTo = useCallback((index: number) => {
    if (index === current || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 400)
  }, [current, isTransitioning])

  const next = useCallback(() => {
    if (isMobile) return
    goTo((current + 1) % slides.length)
  }, [current, goTo, isMobile])

  useEffect(() => {
    if (isMobile) return
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [next, isMobile])

  // Na mobile zawsze info slide
  const activeIndex = isMobile ? 0 : current
  const slide = slides[activeIndex]
  const isLifestyle = slide.type === 'product' && slide.imageType === 'lifestyle'
  const isBanner = slide.type === 'product' && slide.noOverlay
  const isImageLeft = slide.type === 'product' && slide.imageLeft
  const sectionBg = slide.type === 'materials' ? '#0d0d0d' : (slide.type === 'product' && slide.bgColor) ? slide.bgColor : '#0c1525'

  return (
    <section className="relative overflow-hidden w-full h-[400px] md:h-[420px] lg:h-[520px]" style={{ backgroundColor: sectionBg }}>
      {/* Tło — gradient mesh (nie dla info ani banner) */}
      {slide.type !== 'info' && slide.type !== 'materials' && !isBanner && <div className="absolute inset-0 bg-gradient-mesh-dark" />}

      {/* Info slide — obraz po prawej, tło sekcji dopasowane do koloru tła obrazu */}
      {slide.type === 'info' && (
        <div
          className={clsx(
            'absolute top-0 right-0 bottom-0 w-[55%] hidden md:block transition-opacity duration-700 ease-in-out',
            isTransitioning ? 'opacity-0' : 'opacity-100'
          )}
        >
          <Image
            src="/images/hero_prawa.jpeg"
            alt="Drukarka etykiet Honeywell, terminal mobilny Zebra i skaner kodów Datalogic"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      )}

      {/* Materials slide — baner etykiet i taśm, obraz od prawej z maską w tło */}
      {slide.type === 'materials' && (
        <div
          className={clsx(
            'absolute inset-0 transition-opacity duration-700 ease-in-out',
            isTransitioning ? 'opacity-0' : 'opacity-100'
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-materialy.webp"
            alt="Etykiety termiczne i taśmy termotransferowe Zebra — rolki materiałów eksploatacyjnych"
            className="absolute right-0 top-0 h-full w-auto max-w-[85%] object-contain object-right"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
            }}
          />
        </div>
      )}

      {slide.type === 'product' && (
        <div
          key={`img-${activeIndex}`}
          className={clsx(
            'absolute inset-0 transition-opacity duration-700 ease-in-out origin-center',
            !slide.lightArtifacts && 'animate-hero-zoom',
            isTransitioning ? 'opacity-0' : 'opacity-100'
          )}
        >
          {isImageLeft ? (
            /* Image flush left — h-full, natural width, mask fades right edge */
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={slide.image}
              alt={slide.name}
              className="absolute left-0 top-0 h-full w-auto object-contain object-left"
              style={{
                maskImage: 'linear-gradient(to left, transparent 0%, black 20%)',
                WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 20%)',
              }}
            />
          ) : isBanner ? (
            /* Banner mode — image right-aligned, mask fades left edge into bgColor */
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={slide.image}
              alt={slide.name}
              className="absolute right-0 top-0 h-full w-auto max-w-[85%] object-contain object-right"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
              }}
            />
          ) : slide.video ? (
            /* Cinemagraph — wideo w pętli, poster = statyczny obraz */
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={slide.image}
              className={clsx('absolute inset-0 h-full w-full', slide.imageClassName)}
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={slide.image}
              alt={slide.name}
              fill
              className={clsx(
                !isLifestyle ? 'brightness-[1.3] contrast-[1.05]' : '',
                slide.imageClassName
              )}
              priority={current <= 1}
            />
          )}
        </div>
      )}

      {/* Artefakty świetlne (CSS) — box 5:1 kotwiczony do lewej śledzi obraz 1:1 */}
      {slide.type === 'product' && slide.lightArtifacts && (
        <div key={`fx-${activeIndex}`} aria-hidden className="pointer-events-none absolute left-0 top-0 h-full aspect-[5/1] z-[5] hidden sm:block">
          {/* poświata belki — oddycha */}
          <div
            className="absolute animate-hero-glow"
            style={{
              left: '15%', top: '17%', width: '11.5%', height: '17%',
              background: 'radial-gradient(ellipse at center, rgba(168,240,0,0.28) 0%, rgba(168,240,0,0) 70%)',
              filter: 'blur(8px)',
              transform: 'rotate(9deg)',
            }}
          />
          {/* poświata słupa — oddycha w kontrze */}
          <div
            className="absolute animate-hero-glow-alt"
            style={{
              left: '21.8%', top: '30%', width: '4%', height: '42%',
              background: 'radial-gradient(ellipse at center, rgba(168,240,0,0.22) 0%, rgba(168,240,0,0) 70%)',
              filter: 'blur(9px)',
            }}
          />
        </div>
      )}

      {/* Gradienty — różne dla lifestyle vs packshot (baner: bez overlay'ów) */}
      {slide.type === 'product' && !isBanner && !isImageLeft && (
        isLifestyle ? (
          /* Lifestyle: gradient od PRAWEJ — tekst po prawej, zdjęcie widoczne po lewej */
          <>
            <div className="absolute inset-0 bg-gradient-to-l from-gray-950/90 from-10% via-gray-950/50 via-40% to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 via-transparent to-transparent z-10" />
          </>
        ) : (
          /* Packshot: gradient od LEWEJ — tekst po lewej */
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 from-15% via-gray-950/60 via-35% to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-l from-gray-950 from-10% via-gray-950/50 via-25% to-transparent z-10" />
          </>
        )
      )}

      {/* Content */}
      <div className={clsx(
        'container-main relative h-full flex items-center z-20',
        isLifestyle ? 'justify-end' : 'justify-start'
      )}>
        <div
          key={`txt-${activeIndex}`}
          className={clsx(
            'transition-opacity duration-500 ease-in-out animate-hero-fade-up',
            isLifestyle ? 'max-w-md text-right translate-y-[10%]' : 'max-w-2xl',
            isTransitioning ? 'opacity-0' : 'opacity-100'
          )}
        >
          {slide.type === 'info' ? (
            <>
              <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-xs md:text-sm text-[#A8F000] font-medium mb-3 md:mb-5">
                Od 2001 roku
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 md:mb-5 text-balance leading-[1.15]">
                Drukarki etykiet, terminale mobilne i&nbsp;skanery kodów kreskowych
              </h1>

              <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-xl mb-4 md:mb-7 leading-relaxed">
                Autoryzowany partner Zebra, Honeywell, Datalogic i&nbsp;innych czołowych marek.
                Doradztwo, sprzedaż i&nbsp;serwis urządzeń AutoID dla firm w&nbsp;całej Polsce.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/kontakt">
                  <Button
                    size="md"
                    className="!bg-[#A8F000] !text-gray-900 hover:!bg-[#9AE000] font-semibold px-6"
                    rightIcon={<ArrowRightIcon size={16} />}
                  >
                    Zamów indywidualną ofertę
                  </Button>
                </Link>
                <Link href="/katalog">
                  <Button
                    size="md"
                    variant="ghost"
                    className="!text-gray-300 hover:!text-white hover:!bg-white/[0.06] !border !border-white/[0.1]"
                  >
                    Przeglądaj katalog
                  </Button>
                </Link>
              </div>
            </>
          ) : slide.type === 'materials' ? (
            <>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 md:mb-4 leading-[1.15]">
                Etykiety termiczne,<br />
                etykiety termotransferowe<br />
                i&nbsp;taśmy termotransferowe
              </h2>
              <p className="text-sm md:text-base text-gray-300 max-w-md mb-4 md:mb-6 leading-relaxed">
                Ponad 1400 wariantów oryginalnych materiałów Zebra z&nbsp;żywym stanem magazynowym.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                {[
                  { label: 'Taśmy', href: '/tasmy-termotransferowe' },
                  { label: 'Etykiety termiczne', href: '/etykiety-termiczne-zebra' },
                  { label: 'Etykiety termotransferowe', href: '/etykiety-termotransferowe-zebra' },
                ].map(({ label, href }) => (
                  <Link key={href} href={href}>
                    <Button
                      size="md"
                      variant="ghost"
                      className="!text-white hover:!text-gray-900 hover:!bg-[#A8F000] !border !border-[#A8F000]/60 font-semibold"
                      rightIcon={<ArrowRightIcon size={16} />}
                    >
                      {label}
                    </Button>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2 md:mb-3">
                {slide.name}
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-md mb-4 md:mb-5 leading-relaxed">
                {slide.tagline}
              </p>
              <Link href={`/produkt/${slide.slug}`}>
                <Button
                  size="md"
                  variant="ghost"
                  className="!bg-white !text-gray-900 hover:!bg-gray-100 font-semibold px-6"
                  rightIcon={<ArrowRightIcon size={16} />}
                >
                  Zobacz więcej
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Dots — tylko desktop */}
      <div className="absolute bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slajd ${i + 1}`}
            className={clsx(
              'rounded-full transition-all duration-300',
              i === current
                ? 'w-8 h-2.5 bg-[#A8F000]'
                : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'
            )}
          />
        ))}
      </div>
    </section>
  )
}
