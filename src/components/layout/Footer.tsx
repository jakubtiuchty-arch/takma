import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, MailIcon } from '@/components/ui/Icons'

const footerLinks = {
  produkty: [
    { name: 'Drukarki etykiet', href: '/drukarki-etykiet' },
    { name: 'Akcesoria do drukarek', href: '/akcesoria-do-drukarek-etykiet' },
    { name: 'Terminale mobilne', href: '/terminale-mobilne' },
    { name: 'Materiały eksploatacyjne', href: '/materialy-eksploatacyjne' },
  ],
  firma: [
    { name: 'O nas', href: '/o-nas' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Regulamin sklepu', href: '/regulamin' },
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
    <footer className="bg-[#0A1A2F] text-gray-400 font-medium">
      {/* Main footer */}
      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Info o firmie (Większa kolumna, 4/12) */}
          <div className="lg:col-span-4 pr-0 lg:pr-12">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/images/takma_logo.png"
                alt="TAKMA — Centrum Systemów Mobilnych"
                width={180}
                height={36}
                className="brightness-0 invert h-9 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-[15px] leading-relaxed mb-8 text-gray-400/90 max-w-sm">
              Od 25 lat dostarczamy rozwiązania AutoID dla firm w całej Polsce.
              Drukarki etykiet, skanery kodów, terminale mobilne i systemy RFID.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+48607819688"
                className="flex items-center gap-3 text-[15px] hover:text-white transition-colors group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 group-hover:bg-primary-500/20 transition-colors">
                  <PhoneIcon size={18} className="text-primary-400 group-hover:text-primary-300" />
                </span>
                <span>+48 607 819 688</span>
              </a>
              <a
                href="mailto:takma@takma.com.pl"
                className="flex items-center gap-3 text-[15px] hover:text-white transition-colors group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 group-hover:bg-primary-500/20 transition-colors">
                  <MailIcon size={18} className="text-primary-400 group-hover:text-primary-300" />
                </span>
                <span>takma@takma.com.pl</span>
              </a>
            </div>
          </div>

          {/* Kolumny z linkami (Każda po 2/12) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Produkty</h3>
            <ul className="space-y-3.5">
              {footerLinks.produkty.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] hover:text-white hover:underline underline-offset-4 decoration-primary-500/30 transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Producenci</h3>
            <ul className="space-y-3.5">
              {footerLinks.producenci.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] hover:text-white hover:underline underline-offset-4 decoration-primary-500/30 transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">
              <a href="https://serwis-zebry.pl" target="_blank" rel="noopener" className="hover:text-primary-400 transition-colors">
                Serwis-Zebry.pl
              </a>
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.serwis.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="text-[15px] hover:text-white hover:underline underline-offset-4 decoration-primary-500/30 transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Firma</h3>
            <ul className="space-y-3.5">
              {footerLinks.firma.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] hover:text-white hover:underline underline-offset-4 decoration-primary-500/30 transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-500 font-normal">
                Godziny pracy:<br />
                <span className="text-gray-400 mt-1 inline-block">Pon-Pt: 7:30 - 15:30</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="container-main py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-normal">
            <p>
              © {new Date().getFullYear()} TAKMA <span className="mx-2 opacity-50">|</span> ul. Poświęcka 1a, 51-128 Wrocław <span className="mx-2 opacity-50">|</span> NIP: 915-100-43-77
            </p>
            <a
              href="https://www.qba.dev/"
              target="_blank"
              rel="noopener nofollow sponsored"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-xs text-gray-400 transition-all"
            >
              Crafted with <span className="animate-pulse text-red-500">❤</span> by
              <span className="font-mono ml-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-medium tracking-tight">
                &lt; qba.dev/&gt;
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
