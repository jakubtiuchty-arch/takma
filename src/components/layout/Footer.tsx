import Link from 'next/link'
import { PhoneIcon, MailIcon } from '@/components/ui/Icons'

const footerLinks = {
  produkty: [
    { name: 'Drukarki etykiet', href: '/drukarki-etykiet' },
    { name: 'Drukarki biurkowe', href: '/biurkowe-drukarki-etykiet' },
    { name: 'Drukarki przemysłowe', href: '/przemyslowe-drukarki-etykiet' },
    { name: 'Drukarki termotransferowe', href: '/termotransferowe-drukarki-etykiet' },
    { name: 'Drukarki termiczne', href: '/termiczne-drukarki-etykiet' },
    { name: 'Skanery kodów', href: '/katalog?kategoria=skanery-kodow' },
    { name: 'Terminale mobilne', href: '/terminale-mobilne' },
    { name: 'Akcesoria do terminali', href: '/akcesoria-do-terminali' },
    { name: '— Baterie i akumulatory', href: '/baterie-do-terminali' },
    { name: '— Stacje dokujące i ładowarki', href: '/stacje-ladowarki-terminali' },
    { name: '— Etui, kabury i uchwyty', href: '/etui-kabury-uchwyty' },
    { name: '— Kable i zasilacze', href: '/kable-zasilacze-terminali' },
    { name: 'RFID', href: '/katalog?kategoria=rfid' },
    { name: 'Etykiety i taśmy', href: '/katalog?kategoria=etykiety-tasmy' },
    { name: 'Akcesoria', href: '/katalog?kategoria=akcesoria' },
  ],
  firma: [
    { name: 'O nas', href: '/o-nas' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Polityka prywatności', href: '/polityka-prywatnosci' },
  ],
  serwis: [
    { name: 'Serwis drukarek Zebra', href: 'https://serwis-zebry.pl/serwis-drukarek-zebra' },
    { name: 'Instrukcje obsługi (PL)', href: 'https://serwis-zebry.pl/instrukcje' },
    { name: 'Sterowniki Windows', href: 'https://serwis-zebry.pl/sterowniki' },
    { name: 'Blog — poradniki i FAQ', href: 'https://serwis-zebry.pl/blog' },
    { name: 'Poradniki wideo', href: 'https://serwis-zebry.pl/poradniki-wideo' },
  ],
  producenci: [
    { name: 'Zebra Technologies', href: '/katalog?producent=zebra' },
    { name: 'Honeywell', href: '/katalog?producent=honeywell' },
    { name: 'Datalogic', href: '/katalog?producent=datalogic' },
    { name: 'TSC', href: '/katalog?producent=tsc' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="container-main py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Info o firmie */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-xl text-white mb-4"
            >
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span>TAKMA</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Od 25 lat dostarczamy rozwiązania AutoID dla firm w całej Polsce.
              Drukarki etykiet, skanery kodów, terminale mobilne i systemy RFID.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+48607819688"
                className="flex items-center gap-3 text-sm hover:text-primary-400 transition-colors"
              >
                <PhoneIcon size={18} className="text-primary-400" />
                <span>+48 607 819 688</span>
              </a>
              <a
                href="mailto:kontakt@takma.com.pl"
                className="flex items-center gap-3 text-sm hover:text-primary-400 transition-colors"
              >
                <MailIcon size={18} className="text-primary-400" />
                <span>kontakt@takma.com.pl</span>
              </a>
            </div>
          </div>

          {/* Produkty */}
          <div>
            <h3 className="font-semibold text-white mb-4">Produkty</h3>
            <ul className="space-y-2.5">
              {footerLinks.produkty.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Producenci */}
          <div>
            <h3 className="font-semibold text-white mb-4">Producenci</h3>
            <ul className="space-y-2.5">
              {footerLinks.producenci.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serwis Zebra */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              <a href="https://serwis-zebry.pl" target="_blank" rel="noopener" className="hover:text-primary-400 transition-colors">
                Serwis-Zebry.pl
              </a>
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.serwis.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Firma */}
          <div>
            <h3 className="font-semibold text-white mb-4">Firma</h3>
            <ul className="space-y-2.5">
              {footerLinks.firma.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-500">
                Godziny pracy:<br />
                Pon-Pt: 7:30 - 15:30
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-main py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p className="text-xs">© {new Date().getFullYear()} TAKMA · ul. Poświęcka 1a, 51-128 Wrocław · NIP: 915-100-43-77</p>
            <a
              href="https://www.qba.dev/"
              target="_blank"
              rel="noopener nofollow sponsored"
              className="inline-flex items-center gap-1 pl-2.5 pr-0.5 py-0.5 rounded-full bg-gray-800/60 border border-gray-700/50 text-[10px] text-gray-500 hover:border-gray-600 transition-colors"
            >
              Crafted with <span className="animate-pulse text-red-500 text-[8px]">&#10084;</span> by
              <span className="inline-flex items-center px-1.5 py-px rounded-full bg-gray-800 border border-gray-700 font-mono text-[10px] ml-0.5">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">&lt; qba.dev/&gt;</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
