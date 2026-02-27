import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, MailIcon } from '@/components/ui/Icons'

const footerLinks = {
  produkty: [
    { name: 'Drukarki etykiet', href: '/drukarki-etykiet' },
    { name: 'Terminale mobilne', href: '/terminale-mobilne' },
    { name: 'Skanery kodów', href: '/skanery-kodow-kreskowych' },
    { name: 'Materiały eksploatacyjne', href: '/materialy-eksploatacyjne' },
    { name: 'Akcesoria do drukarek', href: '/akcesoria-do-drukarek-etykiet' },
  ],
  producenci: [
    { name: 'Honeywell', href: '/katalog?producent=honeywell' },
    { name: 'Datalogic', href: '/katalog?producent=datalogic' },
    { name: 'TSC', href: '/katalog?producent=tsc' },
  ],
  serwis: [
    { name: 'Serwis drukarek Zebra', href: 'https://serwis-zebry.pl/serwis-drukarek-zebra' },
    { name: 'Instrukcje obsługi (PL)', href: 'https://serwis-zebry.pl/instrukcje' },
    { name: 'Sterowniki Windows', href: 'https://serwis-zebry.pl/sterowniki' },
    { name: 'Blog — poradniki i FAQ', href: 'https://serwis-zebry.pl/blog' },
    { name: 'Poradniki wideo', href: 'https://serwis-zebry.pl/poradniki-wideo' },
  ],
  firma: [
    { name: 'O nas', href: '/o-nas' },
    { name: 'Serwis urządzeń', href: '/serwis' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Poradniki', href: '/poradnik' },
    { name: 'Regulamin sklepu', href: '/regulamin' },
    { name: 'Polityka prywatności', href: '/polityka-prywatnosci' },
    { name: 'Mapa strony', href: '/mapa-strony' },
  ],
}

/* Inline SVG — brak ClockIcon w UI Icons */
function ClockSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />

      {/* Cross pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      {/* Duży napis TAKMA w tle */}
      <div className="absolute left-0 right-0 bottom-0 flex items-end justify-center pointer-events-none" style={{ transform: 'translateY(20%)' }}>
        <h2 className="w-full text-center font-black tracking-[-0.05em] whitespace-nowrap leading-none bg-gradient-to-t from-white/[0.07] via-white/[0.02] to-transparent bg-clip-text text-transparent select-none" style={{ fontSize: 'min(25vw, 22rem)' }}>
          TAKMA
        </h2>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-white">
        {/* Top section — logo + certyfikaty + kontakt */}
        <div className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
              {/* Logo + certyfikaty */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <Link href="/" className="shrink-0">
                  <Image
                    src="/images/takma_logo.png"
                    alt="TAKMA — Autoryzowany dystrybutor urządzeń AutoID"
                    width={176}
                    height={70}
                    className="object-contain h-[52px] sm:h-[62px] w-auto brightness-0 invert"
                  />
                </Link>
                <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              </div>

              {/* Przyciski kontaktowe */}
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-end">
                <a
                  href="tel:+48607819688"
                  className="group flex items-center gap-2 sm:gap-2.5 px-3 sm:px-5 py-2.5 sm:py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300"
                >
                  <span className="w-7 sm:w-8 h-7 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <PhoneIcon size={16} className="text-white" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium">+48 607 819 688</span>
                </a>
                <a
                  href="mailto:takma@takma.com.pl"
                  className="group flex items-center gap-2 sm:gap-2.5 px-3 sm:px-5 py-2.5 sm:py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300"
                >
                  <span className="w-7 sm:w-8 h-7 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <MailIcon size={16} className="text-white" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium hidden sm:inline">takma@takma.com.pl</span>
                  <span className="text-xs font-medium sm:hidden">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Links section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
            {/* Produkty */}
            <div className="text-center">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3 sm:mb-5">Produkty</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.produkty.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Producenci */}
            <div className="text-center">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3 sm:mb-5">Producenci</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.producenci.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Serwis-Zebry.pl */}
            <div className="text-center">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3 sm:mb-5">
                <a href="https://serwis-zebry.pl" target="_blank" rel="noopener" className="hover:text-white transition-colors">
                  Serwis-Zebry.pl
                </a>
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.serwis.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Firma */}
            <div className="text-center">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3 sm:mb-5">Firma</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.firma.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dostępność */}
            <div className="text-center flex flex-col items-center">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3 sm:mb-5">Dostępność</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-7 sm:w-8 h-7 sm:h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                    <ClockSvg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-400" />
                  </span>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm text-white font-medium">Pon – Pt</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">7:30 – 15:30</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-7 sm:w-8 h-7 sm:h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                    <PhoneIcon size={16} className="text-gray-400" />
                  </span>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm text-white font-medium">Doradztwo</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">Bezpłatne</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-7 sm:w-8 h-7 sm:h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0 relative">
                    <MailIcon size={16} className="text-gray-400" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </span>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm text-white font-medium">Email</p>
                    <p className="text-[10px] sm:text-xs text-gray-400">Odp. do 24h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-6">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
              {/* Lewa: Copyright */}
              <div className="md:flex-1 text-center md:text-left order-2 md:order-none">
                <p className="text-xs text-gray-500">
                  © {new Date().getFullYear()} <span className="text-gray-400">TAKMA</span> <span className="mx-1 opacity-50">|</span> ul. Poświęcka 1a, 51-128 Wrocław <span className="mx-1 opacity-50">|</span> NIP: 915-100-43-77
                </p>
              </div>

              {/* Środek: Linki prawne */}
              <div className="flex items-center justify-center gap-6 sm:gap-8 text-xs text-gray-500 md:absolute md:left-1/2 md:-translate-x-1/2 order-3 md:order-none border-t md:border-t-0 border-white/5 pt-6 md:pt-0 w-full md:w-auto">
                <Link href="/regulamin" className="hover:text-white transition-colors">Regulamin</Link>
                <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka prywatności</Link>
              </div>

              {/* Prawa: qba.dev */}
              <div className="md:flex-1 flex justify-center md:justify-end order-1 md:order-none">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
                  <span className="text-[10px] text-gray-600 font-medium tracking-tight">Crafted with</span>
                  <span className="text-red-400/80 animate-pulse text-[10px]">&#9829;</span>
                  <span className="text-[10px] text-gray-600 font-medium tracking-tight">by</span>
                  <a
                    href="https://www.qba.dev/"
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className="group relative inline-flex items-center ml-0.5"
                  >
                    <span className="absolute inset-0 bg-blue-500/20 rounded-md blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-0.5 px-1.5 py-0.5 bg-slate-900 rounded border border-white/10 group-hover:border-blue-400/50 transition-all duration-300">
                      <span className="text-blue-400/80 font-mono text-[9px]">&lt;</span>
                      <span className="text-[10px] font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        qba.dev
                      </span>
                      <span className="text-blue-400/80 font-mono text-[9px]">/&gt;</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
