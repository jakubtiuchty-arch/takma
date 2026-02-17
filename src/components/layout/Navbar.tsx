'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { SearchIcon, MenuIcon, CloseIcon, PhoneIcon, ChevronDownIcon, UserIcon } from '@/components/ui/Icons'
import RFQBadge from '@/components/rfq/RFQBadge'
import SearchBar from '@/components/search/SearchBar'

interface NavItem {
  name: string
  href: string
  children?: { name: string; href: string }[]
}

const navigation: NavItem[] = [
  {
    name: 'Drukarki',
    href: '/drukarki-etykiet',
    children: [
      { name: 'Wszystkie drukarki', href: '/drukarki-etykiet' },
      { name: 'Drukarki biurkowe', href: '/biurkowe-drukarki-etykiet' },
      { name: 'Drukarki przemysłowe', href: '/przemyslowe-drukarki-etykiet' },
      { name: 'Drukarki termotransferowe', href: '/termotransferowe-drukarki-etykiet' },
      { name: 'Drukarki termiczne', href: '/termiczne-drukarki-etykiet' },
      { name: 'Drukarki mobilne', href: '/mobilne-drukarki-etykiet' },
      { name: 'Drukarki opasek', href: '/drukarki-opasek' },
      { name: 'Drukarki kart', href: '/drukarki-kart' },
    ],
  },
  {
    name: 'Materiały',
    href: '/materialy-eksploatacyjne',
    children: [
      { name: 'Wszystkie materiały', href: '/materialy-eksploatacyjne' },
      { name: 'Etykiety TT papierowe', href: '/etykiety-termotransferowe-papierowe' },
      { name: 'Etykiety TT foliowe', href: '/etykiety-termotransferowe-foliowe' },
      { name: 'Etykiety termiczne', href: '/etykiety-termiczne' },
      { name: 'Taśmy termotransferowe', href: '/tasmy-termotransferowe' },
      { name: 'Opaski identyfikacyjne', href: '/opaski-identyfikacyjne' },
      { name: 'Karty PCV', href: '/karty-pcv' },
      { name: 'Taśmy do drukarek kart', href: '/tasmy-do-drukarek-kart' },
    ],
  },
  {
    name: 'Poradniki',
    href: '/poradnik',
    children: [
      { name: 'Wszystkie poradniki', href: '/poradnik' },
      { name: 'Jak wybrać drukarkę etykiet', href: '/poradnik/jak-wybrac-drukarke-etykiet' },
      { name: 'Termiczna vs termotransferowa', href: '/poradnik/drukarka-termiczna-vs-termotransferowa' },
      { name: 'Przewodnik po drukarkach Zebra', href: '/poradnik/drukarki-etykiet-zebra-przewodnik' },
    ],
  },
  {
    name: 'Branże',
    href: '/drukarki-etykiet-e-commerce',
    children: [
      { name: 'E-commerce i fulfillment', href: '/drukarki-etykiet-e-commerce' },
      { name: 'Magazyn i dystrybucja', href: '/drukarki-etykiet-magazyn' },
      { name: 'Produkcja', href: '/drukarki-etykiet-produkcja' },
      { name: 'Logistyka i transport', href: '/drukarki-etykiet-logistyka' },
      { name: 'Apteka i healthcare', href: '/drukarki-etykiet-apteka' },
      { name: 'Gastronomia i HoReCa', href: '/drukarki-etykiet-gastronomia' },
    ],
  },
  {
    name: 'Terminale',
    href: '/terminale-mobilne',
    children: [
      { name: 'Wszystkie terminale', href: '/terminale-mobilne' },
      { name: 'Baterie i akumulatory', href: '/baterie-do-terminali' },
      { name: 'Stacje dokujące i ładowarki', href: '/stacje-ladowarki-terminali' },
      { name: 'Etui, kabury i uchwyty', href: '/etui-kabury-uchwyty' },
      { name: 'Kable i zasilacze', href: '/kable-zasilacze-terminali' },
    ],
  },
  { name: 'Katalog', href: '/katalog' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
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
    setIsMobileSearchOpen(false)
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
          <div className="container-main flex items-center justify-between py-1.5">
            <p className="text-gray-300">
              <span className="text-primary-400 font-medium">25 lat</span> doświadczenia na rynku AutoID
            </p>
            <div className="flex items-center gap-6">
              <a
                href="tel:+48607819688"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <PhoneIcon size={14} />
                <span>+48 607 819 688</span>
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-gray-300">Pon-Pt: 7:30-15:30</span>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <nav className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center lg:w-48">
              <Image
                src="/images/takma_logo.png"
                alt="TAKMA"
                width={568}
                height={225}
                className="h-14 lg:h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                  || (item.children?.some(c => pathname === c.href))

                if (item.children) {
                  return (
                    <div key={item.name} className="relative group">
                      <Link
                        href={item.href}
                        className={clsx(
                          'text-sm font-medium transition-colors relative py-2 inline-flex items-center gap-1',
                          isActive ? 'text-primary-600' : 'text-gray-600 hover:text-gray-900'
                        )}
                      >
                        {item.name}
                        <ChevronDownIcon size={14} className="transition-transform group-hover:rotate-180" />
                        {isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full" />
                        )}
                      </Link>
                      <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[240px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={clsx(
                                'block px-4 py-2.5 text-sm transition-colors',
                                pathname === child.href
                                  ? 'text-primary-600 bg-primary-50 font-medium'
                                  : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      'text-sm font-medium transition-colors relative py-2',
                      isActive ? 'text-primary-600' : 'text-gray-600 hover:text-gray-900'
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Desktop RFQ only */}
            <div className="hidden lg:flex items-center justify-end lg:w-48 gap-1">
              <button
                className="p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                aria-label="Panel klienta"
              >
                <UserIcon size={24} />
              </button>
              <RFQBadge />
            </div>

            {/* Mobile actions */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label={isMobileSearchOpen ? 'Zamknij wyszukiwanie' : 'Otwórz wyszukiwanie'}
              >
                {isMobileSearchOpen ? <CloseIcon size={24} /> : <SearchIcon size={24} />}
              </button>
              <button
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Panel klienta"
              >
                <UserIcon size={24} />
              </button>
              <RFQBadge />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <MenuIcon size={24} />
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          {isMobileSearchOpen && (
            <div className="lg:hidden py-3 border-t border-gray-100 animate-slide-in-up">
              <SearchBar fullWidth onSearch={() => setIsMobileSearchOpen(false)} />
            </div>
          )}
        </nav>

        {/* Sub-header: Search bar — desktop only, always visible */}
        <div className="hidden lg:block border-t border-gray-100 bg-gray-50/80">
          <div className="container-main py-2 flex justify-center">
            <div className="w-full max-w-xl">
              <SearchBar fullWidth />
            </div>
          </div>
        </div>

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
                    {item.children && (
                      <ul className="ml-4 mt-1 space-y-0.5">
                        {item.children.filter(c => c.href !== item.href).map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={clsx(
                                'block px-4 py-2 rounded-lg text-sm transition-colors',
                                pathname === child.href
                                  ? 'text-primary-600 bg-primary-50 font-medium'
                                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                              )}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href="tel:+48607819688"
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <PhoneIcon size={20} />
                  <span className="font-medium">+48 607 819 688</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer dla fixed navbar: top bar (32px) + main nav (64px) + sub-header search (52px) */}
      <div className="h-16 lg:h-[148px]" />
    </>
  )
}
