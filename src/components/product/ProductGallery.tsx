'use client'

import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/Icons'

interface ProductGalleryProps {
  images: string[]
  productName: string
  imageDescriptions?: string[]
}

export default function ProductGallery({ images, productName, imageDescriptions }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const displayImages = images.length > 0 ? images : ['/images/products/placeholder.svg']
  const hasRealImages = images.length > 0 && images[0] !== '/images/products/placeholder.svg'

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      {/* Main image */}
      <figure className="relative aspect-[4/3] sm:aspect-square bg-white rounded-2xl overflow-hidden group">
        {hasRealImages ? (
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

        {/* Navigation arrows */}
        {displayImages.length > 1 && (
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
        {displayImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 text-white text-sm rounded-full">
            {activeIndex + 1} / {displayImages.length}
          </div>
        )}
        <figcaption className="sr-only">
          {imageDescriptions?.[activeIndex] || `${productName} — zdjęcie produktu`}
        </figcaption>
      </figure>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
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
        </div>
      )}
    </div>
  )
}
