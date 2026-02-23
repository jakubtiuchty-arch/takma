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
  priceFrom: number
  imageClassName?: string
  /** 'lifestyle' = gradient od prawej, tekst po prawej; 'packshot' = gradient od lewej, tekst po lewej */
  imageType?: 'lifestyle' | 'packshot'
}

interface InfoSlide {
  type: 'info'
}

type HeroSlide = InfoSlide | ProductSlide

const slides: HeroSlide[] = [
  { type: 'info' },
  {
    type: 'product',
    image: '/images/hero_tc501.jpeg',
    name: 'Zebra TC501',
    slug: 'zebra-tc501',
    priceFrom: 3730,
    imageClassName: 'object-cover object-[70%_center]',
    imageType: 'lifestyle',
  },
  {
    type: 'product',
    image: '/images/hero-zt411.jpeg',
    name: 'Zebra ZT411',
    slug: 'zebra-zt411',
    priceFrom: 5132,
    imageClassName: 'object-contain scale-[1.3] translate-y-[3%]',
    imageType: 'packshot',
  },
]

const INTERVAL = 6000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index: number) => {
    if (index === current || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 400)
  }, [current, isTransitioning])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]
  const isLifestyle = slide.type === 'product' && slide.imageType === 'lifestyle'

  return (
    <section className="relative overflow-hidden w-full h-[400px] md:h-[420px] lg:h-[520px]" style={{ backgroundColor: '#0c1525' }}>
      {/* Tło — gradient mesh (tylko gdy nie info slide) */}
      {slide.type !== 'info' && <div className="absolute inset-0 bg-gradient-mesh-dark" />}

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

      {slide.type === 'product' && (
        <div
          className={clsx(
            'absolute inset-0 transition-opacity duration-700 ease-in-out',
            isTransitioning ? 'opacity-0' : 'opacity-100'
          )}
        >
          <Image
            src={slide.image}
            alt={slide.name}
            fill
            className={clsx(
              isLifestyle ? '' : 'brightness-[1.3] contrast-[1.05]',
              slide.imageClassName
            )}
            priority={current <= 1}
          />
        </div>
      )}

      {/* Gradienty — różne dla lifestyle vs packshot */}
      {slide.type === 'product' && (
        isLifestyle ? (
          /* Lifestyle: gradient od PRAWEJ — tekst po prawej, zdjęcie widoczne po lewej */
          <>
            <div className="absolute inset-0 bg-gradient-to-l from-gray-950 from-15% via-gray-950/80 via-45% to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent z-10" />
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
          className={clsx(
            'transition-all duration-500 ease-in-out',
            isLifestyle ? 'max-w-md text-right translate-y-[10%]' : 'max-w-2xl',
            isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          )}
        >
          {slide.type === 'info' ? (
            <>
              <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-xs md:text-sm text-[#A8F000] font-medium mb-3 md:mb-5">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#A8F000]" />
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
          ) : (
            <>
              <p className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                {slide.name}
              </p>
              <div className="text-white/70 mb-4 md:mb-5">
                <span className="text-xs md:text-sm">od </span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  {slide.priceFrom.toLocaleString('pl-PL')} zł
                </span>
                <span className="text-xs md:text-sm"> netto</span>
              </div>
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

      {/* Dots */}
      <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
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
