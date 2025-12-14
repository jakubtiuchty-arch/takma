'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { SearchIcon } from '@/components/ui/Icons'
import { products } from '@/data/products'

interface SearchBarProps {
  fullWidth?: boolean
  onSearch?: () => void
}

export default function SearchBar({ fullWidth = false, onSearch }: SearchBarProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<typeof products>([])
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Debounced search
  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([])
      return
    }

    const timer = setTimeout(() => {
      const searchLower = query.toLowerCase()
      const results = products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchLower) ||
            p.shortDescription.toLowerCase().includes(searchLower)
        )
        .slice(0, 5)
      setSuggestions(results)
      setIsOpen(results.length > 0)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  // Zamknij dropdown przy kliknięciu poza
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/katalog?szukaj=${encodeURIComponent(query.trim())}`)
      setQuery('')
      setIsOpen(false)
      onSearch?.()
    }
  }

  const handleSuggestionClick = (slug: string) => {
    router.push(`/produkt/${slug}`)
    setQuery('')
    setIsOpen(false)
    onSearch?.()
  }

  return (
    <div ref={wrapperRef} className={clsx('relative', fullWidth ? 'w-full' : 'w-64')}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Szukaj produktów..."
            className={clsx(
              'w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200',
              'bg-gray-50 placeholder:text-gray-400',
              'focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white',
              'transition-all duration-200'
            )}
            aria-label="Wyszukaj produkty"
            aria-autocomplete="list"
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls="search-suggestions"
          />
          <SearchIcon
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </form>

      {/* Suggestions dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 animate-fade-in">
          <ul role="listbox" id="search-suggestions">
            {suggestions.map((product) => (
              <li key={product.id}>
                <button
                  onClick={() => handleSuggestionClick(product.slug)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                    {/* Placeholder dla obrazka */}
                    <span className="text-xs text-gray-400">IMG</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {product.shortDescription}
                    </p>
                  </div>
                  {product.priceFrom && (
                    <span className="text-sm font-medium text-primary-600 flex-shrink-0">
                      od {product.priceFrom.toLocaleString('pl-PL')} zł
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-100 px-4 py-2">
            <button
              onClick={handleSubmit}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Zobacz wszystkie wyniki dla &quot;{query}&quot;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
