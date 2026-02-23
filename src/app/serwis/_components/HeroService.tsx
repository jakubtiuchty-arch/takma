import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/ui/Icons'

export function HeroService() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <Image
        src="/images/hero_serwis.jpeg"
        alt="Serwis urządzeń AutoID TAKMA"
        fill
        priority
        className="object-cover object-center opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Serwis i naprawa drukarek etykiet, terminali i skanerów
          </h1>
          <p className="mt-4 inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium text-lime-300">
            Autoryzowany serwis Zebra Technologies | 25+ lat doświadczenia
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
            TAKMA to profesjonalny serwis pogwarancyjny urządzeń AutoID z&nbsp;siedzibą we&nbsp;Wrocławiu, działający od&nbsp;2001&nbsp;roku. Naprawiamy drukarki etykiet, terminale mobilne i&nbsp;skanery kodów kreskowych — Zebra, Honeywell, Datalogic, Brother, M3&nbsp;Mobile, Newland, Citizen i&nbsp;Godex. Darmowa diagnostyka w&nbsp;48h, gwarancja 3–6&nbsp;miesięcy na każdą naprawę.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#serwis-zebra" className="w-full sm:w-auto">
              <Button size="lg" variant="zebra" className="w-full flex items-center justify-center gap-3 py-5 text-lg font-medium rounded-xl">
                Zgłoś naprawę ZEBRA
                <ArrowRightIcon className="h-5 w-5" />
              </Button>
            </a>
            <a href="#zgloszenie" className="w-full sm:w-auto">
              <Button variant="ghost" size="lg" className="w-full border border-white text-white hover:bg-white/10 flex items-center justify-center gap-2">
                Zgłoś urządzenie innej marki
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
