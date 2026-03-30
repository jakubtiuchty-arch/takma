'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'
import type { Guide } from '@/data/guides'
import { guideCategoryLabels } from '@/data/guides'

const DRUKARKI_TAGS = ['drukarki-etykiet', 'termiczna', 'termotransferowa', 'baselinker', 'mikroetykiety', 'zd421t', 'zd621', 'zt111', 'zt231', 'zt411', 'zt510', 'zt610', 'pc45t', 'tasmy-termotransferowe']
const TERMINALE_TAGS = ['terminale-mobilne', 'terminal-mobilny', 'tc22', 'tc27', 'tc58', 'tc58e', 'tc501', 'mc3400', 'mc9400', 'kolektor-danych', 'inwentaryzacja', 'em45', 'enterprise-mobile', 'datalogic', 'memor-12']
const SKANERY_TAGS = ['skanery', 'skanery-kodow-kreskowych', 'skaner Zebra', 'skaner kodów kreskowych', 'DS2208', 'DS3608', 'DS9308', 'ds3678-xr', 'granit-ultra-2105i', 'ultra-rugged']

type FilterKey = 'wszystkie' | 'drukarki' | 'terminale' | 'skanery'

function categoryBadgeClass(category: Guide['category']): string {
  switch (category) {
    case 'poradnik': return 'bg-blue-100 text-blue-700'
    case 'porownanie': return 'bg-amber-100 text-amber-700'
    case 'przewodnik': return 'bg-emerald-100 text-emerald-700'
    case 'branzowy': return 'bg-purple-100 text-purple-700'
    case 'serwisowy': return 'bg-rose-100 text-rose-700'
    default: return 'bg-gray-100 text-gray-700'
  }
}

function matchesTags(guideTags: string[], filterTags: string[]): boolean {
  return guideTags.some(t => filterTags.includes(t))
}

export default function GuidesGrid({ guides }: { guides: Guide[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('wszystkie')

  const counts = useMemo(() => ({
    wszystkie: guides.length,
    drukarki: guides.filter(g => matchesTags(g.tags, DRUKARKI_TAGS)).length,
    terminale: guides.filter(g => matchesTags(g.tags, TERMINALE_TAGS)).length,
    skanery: guides.filter(g => matchesTags(g.tags, SKANERY_TAGS)).length,
  }), [guides])

  const filteredGuides = useMemo(() => {
    if (activeFilter === 'wszystkie') return guides
    const tagMap: Record<Exclude<FilterKey, 'wszystkie'>, string[]> = {
      drukarki: DRUKARKI_TAGS,
      terminale: TERMINALE_TAGS,
      skanery: SKANERY_TAGS,
    }
    return guides.filter(g => matchesTags(g.tags, tagMap[activeFilter]))
  }, [guides, activeFilter])

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'wszystkie', label: 'Wszystkie' },
    { key: 'drukarki', label: 'Drukarki etykiet' },
    { key: 'terminale', label: 'Terminale mobilne' },
    { key: 'skanery', label: 'Skanery kodów' },
  ]

  if (guides.length === 0) {
    return (
      <p className="text-gray-500 text-center py-16">
        Artykuły w przygotowaniu — wkrótce tutaj pojawią się eksperckie poradniki.
      </p>
    )
  }

  return (
    <>
      {/* Filtry */}
      <div className="flex gap-2 pb-8 overflow-x-auto scrollbar-hide">
        {filters.map(f => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === f.key
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {f.label} ({counts[f.key]})
          </button>
        ))}
      </div>

      {/* Lista */}
      <div className="space-y-5">
        {filteredGuides.map(guide => (
          <Link
            key={guide.slug}
            href={`/poradnik/${guide.slug}`}
            className="group flex flex-col sm:flex-row bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-card-hover hover:border-primary-200 transition-all duration-300"
          >
            {/* Obrazek */}
            {guide.heroImage && (
              <div className="relative w-full sm:w-64 md:w-80 h-48 sm:h-auto shrink-0 bg-gray-100">
                <Image
                  src={guide.heroImage}
                  alt={guide.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: guide.cardImagePosition || '30% center' }}
                  sizes="(max-width: 640px) 100vw, 320px"
                />
                <span className={`absolute top-3 left-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryBadgeClass(guide.category)}`}>
                  {guideCategoryLabels[guide.category]}
                </span>
              </div>
            )}

            {/* Treść */}
            <div className="flex flex-col justify-center p-5 sm:p-6 min-w-0">
              {!guide.heroImage && (
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryBadgeClass(guide.category)}`}>
                    {guideCategoryLabels[guide.category]}
                  </span>
                  <span className="text-xs text-gray-400">{guide.readTime}</span>
                </div>
              )}
              {guide.heroImage && (
                <span className="text-xs text-gray-400 mb-2">{guide.readTime}</span>
              )}
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                {guide.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                {guide.excerpt}
              </p>
              <div className="flex items-center text-sm text-primary-600 font-medium">
                Czytaj
                <ChevronRightIcon size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
