'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/Icons'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Używamy placeholder jeśli brak obrazków
  const displayImages = images.length > 0 ? images : ['/images/products/placeholder.svg']

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden group">
        {/* Placeholder content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-xl mx-auto mb-3 flex items-center justify-center">
              <span className="text-gray-400 text-2xl">📷</span>
            </div>
            <p className="text-sm text-gray-400">Zdjęcie produktu</p>
          </div>
        </div>

        {/* Navigation arrows (shown if multiple images) */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Poprzednie zdjęcie"
            >
              <ChevronLeftIcon size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"
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
      </div>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={clsx(
                'w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden transition-all',
                index === activeIndex
                  ? 'ring-2 ring-primary-500 ring-offset-2'
                  : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'
              )}
              aria-label={`Zdjęcie ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : 'false'}
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                IMG
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
