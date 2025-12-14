import Link from 'next/link'
import { PhoneIcon, MailIcon, LocationIcon } from '@/components/ui/Icons'

const footerLinks = {
  produkty: [
    { name: 'Drukarki etykiet', href: '/katalog?kategoria=drukarki-etykiet' },
    { name: 'Skanery kodów', href: '/katalog?kategoria=skanery-kodow' },
    { name: 'Terminale mobilne', href: '/katalog?kategoria=terminale-mobilne' },
    { name: 'RFID', href: '/katalog?kategoria=rfid' },
    { name: 'Etykiety i taśmy', href: '/katalog?kategoria=etykiety-tasmy' },
    { name: 'Akcesoria', href: '/katalog?kategoria=akcesoria' },
  ],
  firma: [
    { name: 'O nas', href: '/o-nas' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Polityka prywatności', href: '/polityka-prywatnosci' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
              Od 20 lat dostarczamy rozwiązania AutoID dla firm w całej Polsce.
              Drukarki etykiet, skanery kodów, terminale mobilne i systemy RFID.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+48123456789"
                className="flex items-center gap-3 text-sm hover:text-primary-400 transition-colors"
              >
                <PhoneIcon size={18} className="text-primary-400" />
                <span>+48 12 345 67 89</span>
              </a>
              <a
                href="mailto:kontakt@takma.pl"
                className="flex items-center gap-3 text-sm hover:text-primary-400 transition-colors"
              >
                <MailIcon size={18} className="text-primary-400" />
                <span>kontakt@takma.pl</span>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <LocationIcon size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span>
                  ul. Przykładowa 123<br />
                  00-000 Kraków
                </span>
              </div>
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
                Pon-Pt: 8:00 - 16:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-main py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} TAKMA. Wszelkie prawa zastrzeżone.</p>
            <p>
              Strona ma charakter informacyjny. Ceny i dostępność mogą ulec zmianie.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
