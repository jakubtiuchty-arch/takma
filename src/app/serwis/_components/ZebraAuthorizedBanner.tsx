import { ArrowRightIcon } from '@/components/ui/Icons'
import Button from '@/components/ui/Button'

export function ZebraAuthorizedBanner() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Kontener główny - cały w intensywnym odcieniu limonkowo-zielonym (#A8F000) gradientem wpadającym w ciemniejszą wibrację */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-[#A8F000] to-[#8dbd00]">
          
          {/* Subtelny pattern tła dla nadania głębi (opcjonalny, lekko widoczny) */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-14 gap-12">
            
            <div className="flex-1 text-[#0A1A2F]">
              <div className="flex items-center gap-4 mb-6">
                {/* Ikona Tarczy - granatowa/czarna kontrastująca z jasnym tłem */}
                <svg className="w-10 h-10 text-[#0A1A2F]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  Autoryzowany Serwis Zebra
                </h2>
              </div>
              
              <p className="mt-4 text-xl text-[#0A1A2F]/80 max-w-2xl font-medium leading-relaxed">
                Jako oficjalny i autoryzowany serwis marki Zebra w Polsce, oferujemy najwyższy standard obsługi, oryginalne części zamienne oraz błyskawiczny czas reakcji.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-[#0A1A2F]/10 px-5 py-2 text-sm font-bold text-[#0A1A2F] border border-[#0A1A2F]/20">
                  Naprawy gwarancyjne
                </span>
                <span className="inline-flex items-center rounded-full bg-[#0A1A2F]/10 px-5 py-2 text-sm font-bold text-[#0A1A2F] border border-[#0A1A2F]/20">
                  Serwis pogwarancyjny
                </span>
                <span className="inline-flex items-center rounded-full bg-[#0A1A2F]/10 px-5 py-2 text-sm font-bold text-[#0A1A2F] border border-[#0A1A2F]/20">
                  Oryginalne części
                </span>
                <span className="inline-flex items-center rounded-full bg-[#0A1A2F]/10 px-5 py-2 text-sm font-bold text-[#0A1A2F] border border-[#0A1A2F]/20">
                  Kontrakty OneCare
                </span>
              </div>
            </div>
            
            {/* Prawy Box - Biały dla mocnego kontrastu Call To Action na tle limonkowego gradientu */}
            <div className="flex flex-col items-center justify-center w-full md:w-auto shrink-0 bg-white p-10 rounded-2xl shadow-xl min-w-[360px]">
              <p className="text-xl font-bold text-gray-900 mb-6 text-center">Posiadasz urządzenie Zebra?</p>
              
              <a 
                href="https://www.serwis-zebry.pl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                {/* Intensywnie granatowy/czarny przycisk z tekstem z pierwszego obrazka "Zgłoś naprawę ZEBRA" */}
                <Button size="lg" className="w-full bg-[#0A1A2F] hover:bg-black text-[#A8F000] border-0 flex items-center justify-center gap-3 py-5 text-lg font-bold shadow-lg rounded-xl transition-all hover:scale-105">
                  Zgłoś naprawę ZEBRA
                  <ArrowRightIcon className="h-6 w-6" />
                </Button>
              </a>
              
              <p className="text-sm text-gray-500 mt-6 max-w-[280px] text-center leading-relaxed font-medium">
                Zostaniesz przekierowany do naszego dedykowanego portalu dla marki Zebra.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
