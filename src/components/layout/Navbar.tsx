'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UZYWANE_WIDOCZNE } from '@/lib/used-devices'
import clsx from 'clsx'
import { SearchIcon, MenuIcon, CloseIcon, PhoneIcon, ChevronDownIcon, UserIcon } from '@/components/ui/Icons'
import RFQBadge from '@/components/rfq/RFQBadge'
import SearchBar from '@/components/search/SearchBar'

interface FeaturedProduct {
  name: string
  slug: string
  image: string
  manufacturer: string
  manufacturerLogo?: string
  shortDesc: string
  priceFrom: number
  imageHeight?: string
}

interface BrandLink {
  name: string
  href: string
  logo: string
  logoClassName?: string
}

interface NavItem {
  name: string
  href: string
  children?: { name: string; href: string }[]
  brandLinks?: BrandLink[]
  featuredProduct?: FeaturedProduct
}

const navigation: NavItem[] = [
  {
    name: 'Terminale',
    href: '/terminale-mobilne',
    featuredProduct: {
      name: 'M3 SM30',
      slug: 'm3-sm30',
      image: '/images/products/m3-sm30-1.png',
      manufacturer: 'M3 Mobile',
      manufacturerLogo: '/images/partners/logo_m3mobile.png',
      shortDesc: 'Flagowy terminal 5G z AI 12 TOPS, Snapdragon QCM6490, 5,7" FHD, IP68, hot-swap',
      priceFrom: 3610,
      imageHeight: 'h-48',
    },
    children: [
      { name: 'Wszystkie terminale', href: '/terminale-mobilne' },
      { name: 'Terminale Zebra', href: '/terminale-mobilne-zebra' },
      { name: 'Terminale Newland', href: '/terminale-newland' },
      { name: 'Terminale Honeywell', href: '/terminale-honeywell' },
      { name: 'Terminale Datalogic', href: '/terminale-datalogic' },
      { name: 'Terminale M3', href: '/terminale-m3-mobile' },
      { name: 'Akcesoria do terminali', href: '/akcesoria-do-terminali' },
      { name: '— Baterie i akumulatory', href: '/baterie-do-terminali' },
      { name: '— Stacje dokujące i ładowarki', href: '/stacje-ladowarki-terminali' },
      { name: '— Etui, kabury i uchwyty', href: '/etui-kabury-uchwyty' },
      { name: '— Kable i zasilacze', href: '/kable-zasilacze-terminali' },
    ],
  },
  {
    name: 'Drukarki',
    href: '/drukarki-etykiet',
    featuredProduct: {
      name: 'Honeywell PC45t',
      slug: 'honeywell-pc45t',
      image: '/images/products/pc45t_3.png',
      manufacturer: 'Honeywell',
      manufacturerLogo: '/images/partners/logo_honeywell.png',
      shortDesc: 'Biurkowa drukarka termotransferowa 4" z ekranem LCD 3,5", Wi-Fi 6 i BT 5.2',
      priceFrom: 2159,
    },
    brandLinks: [
      { name: 'Zebra', href: '/drukarki-etykiet-zebra', logo: '/images/partners/logo_zebra.png' },
      { name: 'Honeywell', href: '/drukarki-etykiet-honeywell', logo: '/images/partners/logo_honeywell.png' },
      { name: 'Brother', href: '/drukarki-etykiet-brother', logo: '/images/partners/brother_logo.png' },
      { name: 'TSC', href: '/drukarki-etykiet-tsc', logo: '/images/partners/logo_tsc.png' },
      { name: 'Citizen', href: '/drukarki-etykiet-citizen', logo: '/images/partners/logo_citizen.png' },
      { name: 'Magicard by Brady', href: '/katalog?producent=magicard', logo: '/images/partners/logo_magicard.png', logoClassName: 'h-[38px]' },
    ],
    children: [
      { name: 'Wszystkie drukarki', href: '/drukarki-etykiet' },
      { name: 'Drukarki biurkowe', href: '/biurkowe-drukarki-etykiet' },
      { name: 'Drukarki przemysłowe', href: '/przemyslowe-drukarki-etykiet' },
      { name: 'Drukarki termotransferowe', href: '/termotransferowe-drukarki-etykiet' },
      { name: 'Drukarki termiczne', href: '/termiczne-drukarki-etykiet' },
      { name: 'Drukarki mobilne', href: '/mobilne-drukarki-etykiet' },
      { name: 'Drukarki opasek', href: '/drukarki-opasek' },
      { name: 'Drukarki kart', href: '/drukarki-kart' },
      { name: 'Akcesoria do drukarek', href: '/akcesoria-do-drukarek-etykiet' },
    ],
  },
  {
    name: 'Skanery',
    href: '/skanery-kodow-kreskowych',
    children: [
      { name: 'Wszystkie skanery', href: '/skanery-kodow-kreskowych' },
      { name: 'Skanery Zebra', href: '/skanery-kodow-kreskowych-zebra' },
      { name: 'Skanery Honeywell', href: '/skanery-honeywell' },
      { name: 'Skanery Newland', href: '/skanery-kodow-kreskowych-newland' },
      { name: 'Skanery przewodowe', href: '/skanery-kodow-kreskowych/przewodowe' },
      { name: 'Skanery bezprzewodowe', href: '/skanery-kodow-kreskowych/bezprzewodowe' },
      { name: 'Skanery prezentacyjne', href: '/skanery-kodow-kreskowych/prezentacyjne' },
      { name: 'Skanery pierścieniowe', href: '/skanery-kodow-kreskowych/pierscieniowe' },
    ],
  },
  {
    name: 'Tablety',
    href: '/tablety-przemyslowe',
    children: [
      { name: 'Wszystkie tablety', href: '/tablety-przemyslowe' },
      { name: 'Tablety Zebra', href: '/tablety-przemyslowe-zebra' },
      { name: 'Tablety Honeywell', href: '/tablety-honeywell' },
    ],
  },
  {
    name: 'Materiały',
    href: '/materialy-eksploatacyjne',
    children: [
      { name: 'Wszystkie materiały', href: '/materialy-eksploatacyjne' },
      { name: 'Etykiety termotransferowe', href: '/etykiety-termotransferowe-zebra' },
      { name: 'Etykiety termiczne', href: '/etykiety-termiczne-zebra' },
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
      { name: 'Instrukcje obsługi urządzeń', href: '/instrukcje' },
      { name: 'Jak wybrać drukarkę etykiet', href: '/poradnik/jak-wybrac-drukarke-etykiet' },
      { name: 'Termiczna vs termotransferowa', href: '/poradnik/drukarka-termiczna-vs-termotransferowa' },
      { name: 'Przewodnik po drukarkach Zebra', href: '/poradnik/drukarki-etykiet-zebra-przewodnik' },
      { name: 'Jak wybrać terminal mobilny', href: '/poradnik/jak-wybrac-terminal-mobilny' },
      { name: 'TOP 10 terminali mobilnych 2026', href: '/poradnik/top-10-terminali-mobilnych-2026' },
      { name: 'Zebra vs Honeywell — porównanie', href: '/poradnik/zebra-vs-honeywell-terminale-mobilne' },
      { name: 'Drukarka Zebra + BaseLinker', href: '/poradnik/drukarka-zebra-baselinker-konfiguracja' },
      { name: 'Kolektor danych do inwentaryzacji', href: '/poradnik/kolektor-danych-do-inwentaryzacji' },
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
  // Sekcja sprzętu używanego czeka na premierę — patrz UZYWANE_WIDOCZNE.
  ...(UZYWANE_WIDOCZNE ? [{ name: 'Używane', href: '/uzywane' }] : []),
  { name: 'Promocje', href: '/promocje' },
  { name: 'Serwis', href: '/serwis' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)
  // Obrazy „Polecany produkt" w mega-menu wchodzą do DOM dopiero po pierwszym
  // najechaniu myszą — Googlebot nie hoveruje, więc nie widzi tych URL-i i nie
  // wybiera drukarki z menu jako miniatury SERP dla kart innych produktów
  // (sam CSS background nie wystarczył: URL i tak był w wyrenderowanym HTML).
  const [menuImagesArmed, setMenuImagesArmed] = useState(false)

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
        <div className="hidden xl:block bg-gray-900 text-white text-sm">
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
          <div className="flex items-center justify-between h-16 xl:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 -ml-1 xl:-ml-3">
              <Image
                src="/images/takma_logo.png"
                alt="TAKMA"
                width={568}
                height={225}
                className="h-14 xl:h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            {/* Jedenaście pozycji nie mieści się poniżej 1280 px (brakuje ~165 px nawet
                bez odstępów), dlatego pełne menu startuje dopiero od xl — niżej hamburger.
                Kontener ma stałą szerokość maksymalną, więc szersze odstępy nie dodają
                powietrza, tylko zjadają margines przy logo i ikonach. */}
            <div className="hidden xl:flex items-center justify-center flex-1 gap-4 px-4">
              {navigation.map((item) => {
                const isActive = item.href === '/' 
                  ? pathname === item.href 
                  : (pathname === item.href || pathname.startsWith(item.href + '/') || (item.children?.some(c => pathname === c.href)))

                if (item.children) {
                  return (
                    <div key={item.name} className="relative group" onMouseEnter={() => setMenuImagesArmed(true)}>
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
                      <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50 before:absolute before:inset-x-0 before:-top-2 before:h-4 before:content-['']">
                        {item.featuredProduct ? (
                          <div className={clsx(
                            'bg-white rounded-xl shadow-lg ring-1 ring-gray-100 flex overflow-hidden',
                            item.brandLinks ? 'min-w-[720px]' : 'min-w-[560px]'
                          )}>
                            {/* Left: category links */}
                            <div className="py-2 min-w-[220px] border-r border-gray-100 bg-white">
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
                            {/* Middle: brand logos (if present) */}
                            {item.brandLinks && (
                              <div className="py-4 px-5 min-w-[160px] border-r border-gray-100 flex flex-col items-center bg-white">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-3">Producenci</p>
                                <div className="space-y-1 flex flex-col items-center w-full">
                                  {item.brandLinks.map((brand) => (
                                    <Link
                                      key={brand.href}
                                      href={brand.href}
                                      className="flex items-center justify-center px-3 py-2 rounded-lg hover:bg-primary-50 transition-colors w-full"
                                    >
                                      <img
                                        loading="lazy"
                                        src={brand.logo}
                                        alt={brand.name}
                                        className={clsx(brand.logoClassName || 'h-[25px]', 'w-auto opacity-70')}
                                      />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                            {/* Right: featured product */}
                            <Link
                              href={`/produkt/${item.featuredProduct.slug}`}
                              className="flex-1 min-w-[280px] p-5 group/featured bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 hover:from-blue-100 hover:via-purple-50 hover:to-pink-100 transition-all border-l-2 border-l-blue-200"
                            >
                              <div>
                              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-3">Polecany produkt</p>
                              {/* CSS background zamiast <img> — obrazy menu nie mogą konkurować
                                  o miniaturę SERP z obrazem produktu na kartach (Google wybierał
                                  drukarkę z menu zamiast np. białej rolki etykiet) */}
                              <div
                                role="img"
                                aria-label={item.featuredProduct.name}
                                className={clsx("relative w-full mb-3 bg-contain bg-center bg-no-repeat", item.featuredProduct.imageHeight || 'h-40')}
                                style={menuImagesArmed ? { backgroundImage: `url(${item.featuredProduct.image})` } : undefined}
                              />
                              <p className="text-sm font-bold text-gray-900 group-hover/featured:text-primary-600 transition-colors">
                                {item.featuredProduct.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                                {item.featuredProduct.shortDesc}
                              </p>
                              <div className="flex items-center justify-between mt-2">
                                <p className="text-sm font-bold text-primary-600">
                                  od {item.featuredProduct.priceFrom.toLocaleString('pl-PL')} zł <span className="text-xs font-normal text-gray-400">netto</span>
                                </p>
                                <span className="text-xs font-semibold text-primary-600 opacity-0 group-hover/featured:opacity-100 transition-opacity">
                                  Zobacz →
                                </span>
                              </div>
                              </div>
                            </Link>
                          </div>
                        ) : (
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
                        )}
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
            <div className="hidden xl:flex items-center shrink-0 gap-1 pl-2 border-l border-gray-200">
              <Link
                href="/panel"
                className="p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                aria-label="Panel klienta"
              >
                <UserIcon size={24} />
              </Link>
              <RFQBadge />
            </div>

            {/* Mobile actions */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label={isMobileSearchOpen ? 'Zamknij wyszukiwanie' : 'Otwórz wyszukiwanie'}
              >
                {isMobileSearchOpen ? <CloseIcon size={24} /> : <SearchIcon size={24} />}
              </button>
              <Link
                href="/panel"
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Panel klienta"
              >
                <UserIcon size={24} />
              </Link>
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
            <div className="xl:hidden py-3 border-t border-gray-100 animate-slide-in-up">
              <SearchBar fullWidth onSearch={() => setIsMobileSearchOpen(false)} />
            </div>
          )}
        </nav>

        {/* Sub-header: Search bar — desktop only, always visible */}
        <div className="hidden xl:block border-t border-gray-100 bg-gray-50/80">
          <div className="container-main py-2 flex justify-center">
            <div className="w-full max-w-xl">
              <SearchBar fullWidth />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 animate-slide-in-up overflow-y-auto max-h-[calc(100vh-4rem)]">
            <nav className="container-main py-4">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const isActive = item.href === '/' 
                    ? pathname === item.href 
                    : (pathname === item.href || pathname.startsWith(item.href + '/') || (item.children?.some(c => pathname === c.href)))
                  const isExpanded = expandedMobileItem === item.name

                  return (
                    <li key={item.name}>
                      {item.children ? (
                        <>
                          <button
                            onClick={() => setExpandedMobileItem(isExpanded ? null : item.name)}
                            className={clsx(
                              'flex items-center justify-between w-full px-4 py-3 rounded-lg font-medium transition-colors',
                              isActive
                                ? 'bg-primary-50 text-primary-600'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            )}
                          >
                            {item.name}
                            <ChevronDownIcon
                              size={16}
                              className={clsx('transition-transform', isExpanded && 'rotate-180')}
                            />
                          </button>
                          {isExpanded && (
                            <ul className="ml-4 mt-1 space-y-0.5">
                              {item.children.map((child) => (
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
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className={clsx(
                            'block px-4 py-3 rounded-lg font-medium transition-colors',
                            isActive
                              ? 'bg-primary-50 text-primary-600'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          )}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  )
                })}
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
      <div className="h-16 xl:h-[148px]" />
    </>
  )
}
