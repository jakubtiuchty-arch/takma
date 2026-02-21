import { ArrowRightIcon } from '@/components/ui/Icons'
import Button from '@/components/ui/Button'

const zebraLinks = [
  { label: 'Cennik naprawy drukarki Zebra', href: 'https://www.serwis-zebry.pl/blog/cennik-naprawy-drukarki-zebra-koszty-serwisu' },
  { label: 'Kalibracja drukarki Zebra', href: 'https://www.serwis-zebry.pl/blog/kalibracja-drukarki-zebra-poradnik-krok-po-kroku' },
  { label: 'Drukarka Zebra nie drukuje', href: 'https://www.serwis-zebry.pl/blog/drukarka-zebra-nie-drukuje-przyczyny-rozwiazania' },
  { label: 'Sterowniki Zebra Windows 11', href: 'https://www.serwis-zebry.pl/blog/sterowniki-zebra-windows-11-instalacja-problemy' },
  { label: 'TOP 10 awarii terminali Zebra', href: 'https://www.serwis-zebry.pl/blog/najczestsze-awarie-terminali-zebra-top10' },
  { label: 'Android 14 — TC52, MC3300', href: 'https://www.serwis-zebry.pl/blog/aktualizacja-zebra-android-14-tc52-tc72-mc3300-mc9300' },
  { label: 'Android 14 — MC3400, TC53e', href: 'https://www.serwis-zebry.pl/blog/aktualizacja-zebra-android-14-mc3400-mc9400-tc53e-wt5400' },
  { label: 'Reset fabryczny terminala Zebra', href: 'https://www.serwis-zebry.pl/blog/reset-fabryczny-terminal-zebra-factory-enterprise' },
]

export function ZebraAuthorizedBanner() {
  return (
    <section id="serwis-zebra" className="bg-gray-50 py-16 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Kontener główny - cały w intensywnym odcieniu limonkowo-zielonym (#A8F000) gradientem wpadającym w ciemniejszą wibrację */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-[#A8F000] to-[#8dbd00]">

          {/* Subtelny pattern tła dla nadania głębi (opcjonalny, lekko widoczny) */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 md:p-14 gap-8 md:gap-12">

            <div className="flex-1 text-[#0A1A2F]">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#0A1A2F] flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                  Autoryzowany Serwis Zebra
                </h2>
              </div>

              <p className="mt-3 sm:mt-4 text-base sm:text-xl text-[#0A1A2F]/80 max-w-2xl font-medium leading-relaxed">
                Jako oficjalny i autoryzowany serwis marki Zebra w Polsce, oferujemy najwyższy standard obsługi, oryginalne części zamienne oraz błyskawiczny czas reakcji.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
                <span className="inline-flex items-center rounded-full bg-[#0A1A2F]/10 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#0A1A2F] border border-[#0A1A2F]/20">
                  Naprawy gwarancyjne
                </span>
                <span className="inline-flex items-center rounded-full bg-[#0A1A2F]/10 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#0A1A2F] border border-[#0A1A2F]/20">
                  Serwis pogwarancyjny
                </span>
                <span className="inline-flex items-center rounded-full bg-[#0A1A2F]/10 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#0A1A2F] border border-[#0A1A2F]/20">
                  Oryginalne części
                </span>
                <span className="inline-flex items-center rounded-full bg-[#0A1A2F]/10 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#0A1A2F] border border-[#0A1A2F]/20">
                  Kontrakty OneCare
                </span>
              </div>
            </div>

            {/* Prawy Box - Biały dla mocnego kontrastu Call To Action na tle limonkowego gradientu */}
            <div className="flex flex-col items-center justify-center w-full md:w-auto shrink-0 bg-white p-6 sm:p-10 rounded-2xl shadow-xl md:min-w-[360px]">
              <p className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Posiadasz urządzenie Zebra?</p>

              <a
                href="https://www.serwis-zebry.pl/#formularz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button size="lg" variant="ghost" className="w-full !bg-[#0A1A2F] hover:!bg-black !text-[#A8F000] border-0 flex items-center justify-center gap-3 py-6 text-[18px] font-medium rounded-xl transition-all">
                  Zgłoś naprawę ZEBRA
                  <ArrowRightIcon className="h-5 w-5" />
                </Button>
              </a>

              <p className="text-sm text-gray-500 mt-6 max-w-[280px] text-center leading-relaxed font-medium">
                Zostaniesz przekierowany do naszego dedykowanego portalu dla marki Zebra.
              </p>
            </div>
          </div>
        </div>

        {/* Linki do artykułów serwis-zebry.pl — badge'e pod boxem */}
        <div className="mt-8">
          <p className="text-sm font-medium text-gray-500 mb-4">Baza wiedzy Zebra na serwis-zebry.pl:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {zebraLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#A8F000]/15 px-4 py-2.5 text-sm font-medium text-gray-800 border border-[#A8F000]/40 hover:bg-[#A8F000]/30 hover:border-[#A8F000]/60 transition-colors text-center"
              >
                {link.label}
                <svg className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
