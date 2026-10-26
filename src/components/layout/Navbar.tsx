'use client'

import { useState, useEffect } from 'react'
import mega from './NavbarMegaMenu.module.css'
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
  children?: { name: string; href: string; group?: 'brand' }[]
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
      priceFrom: 4132,
      imageHeight: 'h-48',
    },
    children: [
      { name: 'Wszystkie terminale', href: '/terminale-mobilne' },
      { name: 'Komputery POS', href: '/komputery-pos' },
      { name: 'Ekrany KDS', href: '/ekrany-kds' },
      { name: 'Kioski samoobsługowe', href: '/kioski-samoobslugowe' },
      { name: 'Terminale RFID', href: '/terminale-rfid' },
      { name: 'Terminale naramienne', href: '/terminale-naramienne' },
      { name: 'Terminale dla służby zdrowia', href: '/terminale-dla-sluzby-zdrowia' },
      { name: 'Uchwyty RFID', href: '/uchwyty-rfid' },
      { name: 'Czytniki RFID', href: '/czytniki-rfid' },
      { name: 'Terminale Zebra', href: '/terminale-mobilne-zebra', group: 'brand' },
      { name: 'Terminale Newland', href: '/terminale-newland', group: 'brand' },
      { name: 'Terminale Honeywell', href: '/terminale-honeywell', group: 'brand' },
      { name: 'Terminale Datalogic', href: '/terminale-datalogic', group: 'brand' },
      { name: 'Terminale M3', href: '/terminale-m3-mobile', group: 'brand' },
      { name: 'Terminale CipherLab', href: '/terminale-cipherlab', group: 'brand' },
      { name: 'Terminale SUNMI', href: '/terminale-sunmi', group: 'brand' },
      { name: 'Terminale Bluebird', href: '/terminale-bluebird', group: 'brand' },
      { name: 'Akcesoria do terminali', href: '/akcesoria-do-terminali' },
      { name: 'Akcesoria do komputerów POS', href: '/akcesoria-do-komputerow-pos' },
      { name: 'Akcesoria do ekranów KDS', href: '/akcesoria-do-ekranow-kds' },
      { name: 'Akcesoria do kiosków', href: '/akcesoria-do-kioskow' },
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
      { name: 'BIXOLON', href: '/drukarki-etykiet-bixolon', logo: '/images/manufacturers/bixolon.jpg' },
      { name: 'Epson', href: '/kolorowe-drukarki-etykiet', logo: '/images/partners/logo_epson.png' },
      { name: 'Magicard by Brady', href: '/drukarki-kart-magicard', logo: '/images/partners/logo_magicard.png', logoClassName: 'h-[38px]' },
    ],
    children: [
      { name: 'Wszystkie drukarki', href: '/drukarki-etykiet' },
      { name: 'Drukarki biurkowe', href: '/biurkowe-drukarki-etykiet' },
      { name: 'Drukarki przemysłowe', href: '/przemyslowe-drukarki-etykiet' },
      { name: 'Drukarki termotransferowe', href: '/termotransferowe-drukarki-etykiet' },
      { name: 'Drukarki termiczne', href: '/termiczne-drukarki-etykiet' },
      { name: 'Drukarki mobilne', href: '/mobilne-drukarki-etykiet' },
      { name: 'Drukarki POS', href: '/drukarki-pos' },
      { name: 'Mobilne drukarki paragonów', href: '/mobilne-drukarki-paragonow' },
      { name: 'Drukarki RFID', href: '/drukarki-rfid' },
      { name: 'Drukarki kolorowe', href: '/kolorowe-drukarki-etykiet' },
      { name: 'Drukarki dla służby zdrowia', href: '/drukarki-dla-sluzby-zdrowia' },
      { name: 'Drukarki opasek', href: '/drukarki-opasek' },
      { name: 'Drukarki kart', href: '/drukarki-kart' },
      { name: 'Akcesoria do drukarek', href: '/akcesoria-do-drukarek-etykiet' },
      { name: 'Nawijarki do etykiet', href: '/nawijarki-do-etykiet' },
      { name: 'Dyspensery etykiet', href: '/dyspensery-etykiet' },
    ],
  },
  {
    name: 'Skanery',
    href: '/skanery-kodow-kreskowych',
    children: [
      { name: 'Wszystkie skanery', href: '/skanery-kodow-kreskowych' },
      { name: 'Skanery Zebra', href: '/skanery-kodow-kreskowych-zebra', group: 'brand' },
      { name: 'Skanery Honeywell', href: '/skanery-honeywell', group: 'brand' },
      { name: 'Skanery Datalogic', href: '/skanery-datalogic', group: 'brand' },
      { name: 'Skanery Newland', href: '/skanery-kodow-kreskowych-newland', group: 'brand' },
      { name: 'Skanery ProGlove', href: '/skanery-proglove', group: 'brand' },
      { name: 'Skanery przewodowe', href: '/skanery-kodow-kreskowych/przewodowe' },
      { name: 'Skanery bezprzewodowe', href: '/skanery-kodow-kreskowych/bezprzewodowe' },
      { name: 'Skanery prezentacyjne', href: '/skanery-kodow-kreskowych/prezentacyjne' },
      { name: 'Skanery ladowe', href: '/skanery-kodow-kreskowych/ladowe' },
      { name: 'Skanery pierścieniowe i noszone', href: '/skanery-kodow-kreskowych/pierscieniowe' },
      { name: 'Skanery dla służby zdrowia', href: '/skanery-dla-sluzby-zdrowia' },
    ],
  },
  {
    name: 'Tablety',
    href: '/tablety-przemyslowe',
    children: [
      { name: 'Wszystkie tablety', href: '/tablety-przemyslowe' },
      { name: 'Tablety Zebra', href: '/tablety-przemyslowe-zebra', group: 'brand' },
      { name: 'Tablety Honeywell', href: '/tablety-honeywell', group: 'brand' },
      { name: 'Tablety Brady', href: '/tablety-brady', group: 'brand' },
      { name: 'Tablety Getac', href: '/tablety-getac', group: 'brand' },
      { name: 'Tablety Bluebird', href: '/tablety-bluebird', group: 'brand' },
      { name: 'Laptopy przemysłowe', href: '/laptopy-przemyslowe' },
    ],
  },
  {
    name: 'Materiały',
    href: '/materialy-eksploatacyjne',
    children: [
      { name: 'Wszystkie materiały', href: '/materialy-eksploatacyjne' },
      { name: 'Etykiety termotransferowe', href: '/etykiety-termotransferowe-zebra' },
      { name: 'Etykiety termiczne', href: '/etykiety-termiczne-zebra' },
      { name: 'Etykiety RFID Zebra', href: '/etykiety-rfid-zebra' },
      { name: 'Taśmy termotransferowe', href: '/tasmy-termotransferowe' },
      { name: 'Etykiety do drukarek kolorowych', href: '/etykiety-do-kolorowych-drukarek' },
      { name: 'Tusze do drukarek kolorowych', href: '/tusze-do-kolorowych-drukarek' },
      { name: 'Opaski identyfikacyjne', href: '/opaski-identyfikacyjne' },
      { name: 'Karty plastikowe PVC', href: '/karty-plastikowe' },
      { name: 'Karty zbliżeniowe RFID i NFC', href: '/karty-zblizeniowe' },
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
    name: 'Oprogramowanie',
    href: '/oprogramowanie',
    children: [
      { name: 'Wszystkie programy', href: '/oprogramowanie' },
      { name: 'Programy do etykiet', href: '/programy-do-etykiet' },
      { name: 'Programy do kart', href: '/programy-do-kart' },
    ],
  },
  // Sekcja sprzętu używanego czeka na premierę — patrz UZYWANE_WIDOCZNE.
  ...(UZYWANE_WIDOCZNE ? [{ name: 'Używane', href: '/uzywane' }] : []),
  { name: 'Promocje', href: '/promocje' },
  { name: 'Serwis', href: '/serwis' },
  { name: 'Kontakt', href: '/kontakt' },
]

interface MenuSection { title: string; links: { name: string; href: string }[] }

function getMenuSections(item: NavItem): MenuSection[] {
  const links = (item.children || []).filter(link => link.href !== item.href)
  const isBrand = (link: { group?: 'brand' }) => link.group === 'brand'
  const accessories = links.filter(link => /akcesoria|nawijarki|dyspensery/.test(link.href))
  const brands = item.brandLinks?.map(({ name, href }) => ({ name, href })) || links.filter(isBrand).map(link => ({ ...link, name: link.name.replace(/^(Terminale|Skanery|Tablety) /, '') }))
  const types = links.filter(link => !isBrand(link) && !accessories.includes(link))
  if (brands.length || accessories.length) return [
    { title: 'Urządzenia', links: types },
    { title: 'Producenci', links: brands },
    { title: 'Akcesoria i wyposażenie', links: accessories },
  ].filter(section => section.links.length)
  if (item.name === 'Materiały') return [
    { title: 'Etykiety i opaski', links: links.filter(link => /etykiety|opaski/.test(link.href)) },
    { title: 'Taśmy i tusze', links: links.filter(link => /tasmy|tusze/.test(link.href)) },
    { title: 'Karty', links: links.filter(link => /karty/.test(link.href)) },
  ].filter(section => section.links.length)
  return [{ title: item.name === 'Poradniki' ? 'Wiedza i instrukcje' : 'Kategorie', links }]
}

export default function Navbar() {
  const pathname = usePathname()
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null)
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
    setOpenDesktopMenu(null)
    setIsMobileMenuOpen(false)
    setIsMobileSearchOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!openDesktopMenu) return
    const closeOutside = (event: PointerEvent) => {
      if (!(event.target instanceof Element) || !event.target.closest('[data-desktop-menu]')) setOpenDesktopMenu(null)
    }
    document.addEventListener('pointerdown', closeOutside)
    return () => document.removeEventListener('pointerdown', closeOutside)
  }, [openDesktopMenu])

  return (
    <>
      <header
        onMouseLeave={() => setOpenDesktopMenu(null)}
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
        <nav className="container-main relative">
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
                    <div key={item.name} data-desktop-menu
                      onMouseEnter={() => { setOpenDesktopMenu(item.name); setMenuImagesArmed(true) }}
                      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpenDesktopMenu(null) }}
                      onKeyDown={(event) => {
                        if (event.key === 'Escape') { event.preventDefault(); setOpenDesktopMenu(null); event.currentTarget.querySelector('button')?.focus() }
                      }}
                    >
                      <div className="flex items-center gap-0.5">
                        <Link href={item.href} onFocus={() => { setOpenDesktopMenu(item.name); setMenuImagesArmed(true) }} onClick={() => setOpenDesktopMenu(null)}
                          className={clsx('text-sm font-medium transition-colors relative py-2', isActive || openDesktopMenu === item.name ? 'text-primary-600' : 'text-gray-600 hover:text-gray-900')}
                        >{item.name}{isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full" />}</Link>
                        <button type="button" aria-label={`Rozwiń menu: ${item.name}`} aria-expanded={openDesktopMenu === item.name} aria-controls={`nav-panel-${item.name}`}
                          className="p-1 -mr-1 rounded text-gray-500 hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600"
                          onClick={() => { setOpenDesktopMenu(openDesktopMenu === item.name ? null : item.name); setMenuImagesArmed(true) }}
                          onKeyDown={(event) => { if (event.key === 'ArrowDown') { event.preventDefault(); setOpenDesktopMenu(item.name); setMenuImagesArmed(true); const button = event.currentTarget; requestAnimationFrame(() => button.parentElement?.parentElement?.querySelector<HTMLElement>('[data-menu-panel] a')?.focus()) } }}
                        ><ChevronDownIcon size={14} className={clsx('transition-transform', openDesktopMenu === item.name && 'rotate-180')} /></button>
                      </div>
                      {openDesktopMenu === item.name && <div className={clsx(mega.panel, !item.featuredProduct && mega.compact)} id={`nav-panel-${item.name}`} data-menu-panel>
                        <div className={mega.surface}>
                          <div className={mega.body}>
                            {getMenuSections(item).map(section => <section key={section.title} className={clsx(mega.section, section.links.length >= 8 && mega.wide)} aria-label={section.title}>
                              <h2 className={mega.heading}>{section.title}</h2>
                              <div className={clsx(mega.links, section.links.length >= 8 && mega.twoColumns)}>{section.links.map(child => <Link key={child.href} href={child.href} onClick={() => setOpenDesktopMenu(null)} aria-current={pathname === child.href ? 'page' : undefined} className={clsx(mega.link, pathname === child.href && mega.active)}>{child.name}</Link>)}</div>
                            </section>)}
                            {item.featuredProduct && <Link href={`/produkt/${item.featuredProduct.slug}`} onClick={() => setOpenDesktopMenu(null)} className={mega.featured}>
                              <span className={mega.featuredLabel}>Polecany produkt</span>
                              <div role="img" aria-label={item.featuredProduct.name} className={mega.featuredImage} style={menuImagesArmed ? { backgroundImage: `url(${item.featuredProduct.image})` } : undefined} />
                              <strong className={mega.featuredName}>{item.featuredProduct.name}</strong>
                              <p className={mega.featuredDesc}>{item.featuredProduct.shortDesc}</p>
                              <p className={mega.featuredPrice}>od {item.featuredProduct.priceFrom.toLocaleString('pl-PL')} zł <small>netto</small></p>
                              <span className={mega.featuredCta}>Zobacz produkt →</span>
                            </Link>}
                          </div>
                          <div className={mega.footer}><Link href={item.href} onClick={() => setOpenDesktopMenu(null)} className={mega.all}>{item.children.find(child => child.href === item.href)?.name || `Zobacz: ${item.name}`} <span aria-hidden="true">→</span></Link><span className={mega.hint}>Potrzebujesz pomocy? <Link href="/kontakt" onClick={() => setOpenDesktopMenu(null)}>Skontaktuj się z nami</Link></span></div>
                        </div>
                      </div>}
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.name}
                    onMouseEnter={() => setOpenDesktopMenu(null)}
                    onFocus={() => setOpenDesktopMenu(null)}
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
                            aria-expanded={isExpanded}
                            aria-controls={`mobile-submenu-${item.name}`}
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
                            <ul id={`mobile-submenu-${item.name}`} className="ml-4 mt-1 space-y-0.5">
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
