'use client'

import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/Icons'

/** Obrót 360° jako ostatni slajd galerii: krótki MP4 bez dźwięku w pętli, miniatura z plakatem i znaczkiem 360°. */
export type SpinVideo = { file: string; poster: string }

interface ProductGalleryProps {
  images: string[]
  productName: string
  imageDescriptions?: string[]
  spin?: SpinVideo
}

export default function ProductGallery({ images, productName, imageDescriptions, spin }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const displayImages = images.length > 0 ? images : ['/images/products/placeholder.svg']
  const hasRealImages = images.length > 0 && images[0] !== '/images/products/placeholder.svg'
  // Slajdy = zdjęcia + (opcjonalnie) obrót 360° na końcu
  const slideCount = displayImages.length + (spin ? 1 : 0)
  const spinIndex = spin ? displayImages.length : -1
  const isSpin = activeIndex === spinIndex

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slideCount - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === slideCount - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      {/* Main image */}
      <figure className="relative aspect-[4/3] sm:aspect-square bg-white rounded-2xl overflow-hidden group">
        {isSpin && spin ? (
          <video
            key="spin"
            src={spin.file}
            poster={spin.poster}
            className="absolute inset-0 w-full h-full object-contain bg-white"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${productName} — obrót 360°`}
          />
        ) : hasRealImages ? (
          <Image
            src={displayImages[activeIndex]}
            alt={imageDescriptions?.[activeIndex] || `${productName} — zdjęcie ${activeIndex + 1}`}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={activeIndex === 0}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-400 text-2xl">📷</span>
              </div>
              <p className="text-sm text-gray-400">Zdjęcie produktu</p>
            </div>
          </div>
        )}

        {/* Skrót do obrotu 360°, gdy oglądamy zdjęcie */}
        {spin && !isSpin && (
          <button
            type="button"
            onClick={() => setActiveIndex(spinIndex)}
            className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-900/85 text-white text-xs font-semibold hover:bg-gray-900 transition-colors"
            aria-label="Pokaż obrót 360°"
          >
            <span aria-hidden="true">↻</span> 360°
          </button>
        )}

        {/* Navigation arrows */}
        {slideCount > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
              aria-label="Poprzednie zdjęcie"
            >
              <ChevronLeftIcon size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
              aria-label="Następne zdjęcie"
            >
              <ChevronRightIcon size={20} />
            </button>
          </>
        )}

        {/* Image counter */}
        {slideCount > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 text-white text-sm rounded-full">
            {isSpin ? 'Obrót 360°' : `${activeIndex + 1} / ${slideCount}`}
          </div>
        )}
        <figcaption className="sr-only">
          {isSpin ? `${productName} — obrót 360°` : imageDescriptions?.[activeIndex] || `${productName} — zdjęcie produktu`}
        </figcaption>
      </figure>

      {/* Thumbnails */}
      {slideCount > 1 && (
        <div className="flex gap-3 overflow-x-auto scrollbar-hide px-0.5">
          {displayImages.map((src, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={clsx(
                'w-16 h-16 xs:w-20 xs:h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden transition-all relative',
                index === activeIndex
                  ? 'opacity-100 ring-2 ring-primary-500'
                  : 'opacity-50 hover:opacity-80'
              )}
              aria-label={`Zdjęcie ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : 'false'}
            >
              {hasRealImages ? (
                <Image
                  src={src}
                  alt={imageDescriptions?.[index] || `${productName} — miniatura ${index + 1}`}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 374px) 64px, 80px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                  IMG
                </div>
              )}
            </button>
          ))}
          {spin && (
            <button
              onClick={() => setActiveIndex(spinIndex)}
              className={clsx(
                'w-16 h-16 xs:w-20 xs:h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden transition-all relative',
                isSpin ? 'opacity-100 ring-2 ring-primary-500' : 'opacity-50 hover:opacity-80'
              )}
              aria-label="Obrót 360°"
              aria-current={isSpin ? 'true' : 'false'}
            >
              <Image src={spin.poster} alt={`${productName} — obrót 360°`} fill className="object-contain p-1" sizes="(max-width: 374px) 64px, 80px" />
              <span className="absolute inset-x-0 bottom-0 bg-gray-900/80 text-white text-[10px] font-semibold text-center py-0.5">360°</span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}
