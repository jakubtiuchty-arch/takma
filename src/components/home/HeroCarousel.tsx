'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/ui'
import { ArrowRightIcon } from '@/components/ui/Icons'

interface HeroSlide {
  image: string
  name: string
  slug: string
  priceFrom?: number
  imageClassName?: string
}

const slides: HeroSlide[] = [
  {
    image: '/images/hero-zt411.jpeg',
    name: 'Zebra ZT411',
    slug: 'zebra-zt411',
    priceFrom: 5299,
    imageClassName: 'object-contain scale-[1.3] translate-y-[3%]',
  },
  {
    image: '/images/hero-memor17.jpeg',
    name: 'Datalogic Memor 17',
    slug: 'datalogic-memor-17',
    priceFrom: undefined,
    imageClassName: 'object-cover scale-[1.4]',
  },
]

const INTERVAL = 6000

export default function HeroCarousel() {
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

  return (
    <section className="relative overflow-hidden w-full h-[300px] md:h-[420px] lg:h-[520px] bg-gray-950">
      {/* Background image */}
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
          className={clsx('brightness-[1.3] contrast-[1.05]', slide.imageClassName)}
          priority={current === 0}
        />
      </div>

      {/* Gradient blend */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 from-15% via-gray-950/60 via-35% to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-l from-gray-950 from-10% via-gray-950/50 via-25% to-transparent z-10" />

      {/* Content */}
      <div className="container-main relative h-full flex items-center z-20">
        <div
          className={clsx(
            'transition-all duration-500 ease-in-out',
            isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          )}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
            {slide.name}
          </h1>
          {slide.priceFrom && (
            <div className="text-white/70 mb-5">
              <span className="text-sm">od </span>
              <span className="text-2xl lg:text-3xl font-bold text-white">
                {slide.priceFrom.toLocaleString('pl-PL')} zł
              </span>
              <span className="text-sm"> netto</span>
            </div>
          )}
          {!slide.priceFrom && <div className="mb-5" />}
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
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Baner ${i + 1}`}
            className={clsx(
              'rounded-full transition-all duration-300',
              i === current
                ? 'w-8 h-2.5 bg-white'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
            )}
          />
        ))}
      </div>
    </section>
  )
}
