'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { SearchIcon, MenuIcon, CloseIcon, PhoneIcon } from '@/components/ui/Icons'
import RFQBadge from '@/components/rfq/RFQBadge'
import SearchBar from '@/components/search/SearchBar'

const navigation = [
  { name: 'Katalog', href: '/katalog' },
  { name: 'O nas', href: '/o-nas' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Zamknij menu mobilne przy zmianie strony
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-white'
        )}
      >
        {/* Top bar - desktop only */}
        <div className="hidden lg:block bg-gray-900 text-white text-sm">
          <div className="container-main flex items-center justify-between py-2">
            <p className="text-gray-300">
              <span className="text-primary-400 font-medium">20 lat</span> doświadczenia na rynku AutoID
            </p>
            <div className="flex items-center gap-6">
              <a
                href="tel:+48123456789"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <PhoneIcon size={14} />
                <span>+48 12 345 67 89</span>
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-gray-300">Pon-Pt: 8:00-16:00</span>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <nav className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl lg:text-2xl text-gray-900 hover:text-primary-600 transition-colors"
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm lg:text-base">T</span>
              </div>
              <span>TAKMA</span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'text-sm font-medium transition-colors relative py-2',
                    pathname === item.href || pathname.startsWith(item.href + '/')
                      ? 'text-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  )}
                >
                  {item.name}
                  {(pathname === item.href || pathname.startsWith(item.href + '/')) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop search + RFQ */}
            <div className="hidden lg:flex items-center gap-4">
              <SearchBar />
              <RFQBadge />
            </div>

            {/* Mobile actions */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label={isSearchOpen ? 'Zamknij wyszukiwanie' : 'Otwórz wyszukiwanie'}
              >
                {isSearchOpen ? <CloseIcon size={24} /> : <SearchIcon size={24} />}
              </button>
              <RFQBadge />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <MenuIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          {isSearchOpen && (
            <div className="lg:hidden py-3 border-t border-gray-100 animate-slide-in-up">
              <SearchBar fullWidth onSearch={() => setIsSearchOpen(false)} />
            </div>
          )}
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-slide-in-up">
            <nav className="container-main py-4">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={clsx(
                        'block px-4 py-3 rounded-lg font-medium transition-colors',
                        pathname === item.href || pathname.startsWith(item.href + '/')
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href="tel:+48123456789"
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <PhoneIcon size={20} />
                  <span className="font-medium">+48 12 345 67 89</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer dla fixed navbar */}
      <div className="h-16 lg:h-[calc(5rem+2.5rem)]" />
    </>
  )
}
