'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/ui'
import { ArrowRightIcon } from '@/components/ui/Icons'

const heroProducts = [
  {
    name: 'Zebra ZT411',
    slug: 'zebra-zt411',
    image: '/images/hero-zt411.jpeg',
    priceFrom: 5132,
    label: 'Drukarka przemysłowa',
    imageClassName: 'object-contain scale-[1.15]',
  },
  {
    name: 'Zebra ZD421t',
    slug: 'zebra-zd421t',
    image: '/images/products/zd421t_1.png',
    priceFrom: 1649,
    label: 'Bestseller biurkowy',
    imageClassName: 'object-contain',
  },
  {
    name: 'Zebra TC22',
    slug: 'zebra-tc22',
    image: '/images/products/tc22_scanner_1.png',
    priceFrom: 2417,
    label: 'Terminal mobilny',
    imageClassName: 'object-contain',
  },
  {
    name: 'Zebra ZQ620 Plus',
    slug: 'zebra-zq620-plus',
    image: '/images/products/zq620plus_1_s.png',
    priceFrom: 3622,
    label: 'Drukarka mobilna',
    imageClassName: 'object-contain',
  },
]

const INTERVAL = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index: number) => {
    if (index === current || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }, [current, isTransitioning])

  const next = useCallback(() => {
    goTo((current + 1) % heroProducts.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [next])

  const product = heroProducts[current]

  return (
    <section className="relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-gradient-mesh-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

      <div className="container-main relative py-14 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Lewa strona — tekst */}
          <div className="lg:w-[55%] flex-shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-sm text-[#A8F000] font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#A8F000]" />
              Od 2001 roku
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 text-balance leading-[1.1]">
              Drukarki etykiet, terminale mobilne i&nbsp;skanery kodów kreskowych
            </h1>

            <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
              Autoryzowany dystrybutor Zebra, Honeywell, Datalogic i&nbsp;innych czołowych marek.
              Doradztwo, sprzedaż i&nbsp;serwis urządzeń AutoID dla firm w&nbsp;całej Polsce.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="!bg-[#A8F000] !text-gray-900 hover:!bg-[#9AE000] font-semibold px-8"
                  rightIcon={<ArrowRightIcon size={18} />}
                >
                  Zamów indywidualną ofertę
                </Button>
              </Link>
              <Link href="/katalog">
                <Button
                  size="lg"
                  variant="ghost"
                  className="!text-gray-300 hover:!text-white hover:!bg-white/[0.06] !border !border-white/[0.1]"
                >
                  Przeglądaj katalog
                </Button>
              </Link>
            </div>
          </div>

          {/* Prawa strona — karuzela produktów */}
          <div className="lg:w-[45%] mt-10 lg:mt-0">
            <Link href={`/produkt/${product.slug}`} className="block group">
              <div className="relative aspect-square max-w-[380px] mx-auto lg:max-w-none">
                {/* Obrazek produktu */}
                <div
                  className={clsx(
                    'relative w-full h-full transition-all duration-500 ease-in-out',
                    isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  )}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={clsx('drop-shadow-2xl', product.imageClassName)}
                    priority={current === 0}
                  />
                </div>

                {/* Info pod obrazkiem */}
                <div
                  className={clsx(
                    'absolute bottom-0 left-0 right-0 text-center transition-all duration-400',
                    isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                  )}
                >
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{product.label}</span>
                  <p className="text-white font-bold text-lg mt-0.5 group-hover:text-[#A8F000] transition-colors">
                    {product.name}
                  </p>
                  <p className="text-gray-400 text-sm">
                    od <span className="text-white font-semibold">{product.priceFrom.toLocaleString('pl-PL')}&nbsp;zł</span> netto
                  </p>
                </div>
              </div>
            </Link>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2.5 mt-6">
              {heroProducts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Produkt ${i + 1}`}
                  className={clsx(
                    'rounded-full transition-all duration-300',
                    i === current
                      ? 'w-8 h-2.5 bg-[#A8F000]'
                      : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
