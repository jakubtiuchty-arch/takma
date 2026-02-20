import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/ui/Icons'

export function HeroService() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_serwis.jpeg" 
          alt="Serwis urządzeń AutoID TAKMA" 
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-multiply"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 z-0"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Kompleksowy Serwis Urządzeń AutoID i IT
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Profesjonalna naprawa drukarek etykiet, terminali mobilnych, tabletów przemysłowych i skanerów kodów kreskowych. Minimalizujemy przestoje w Twojej firmie. Obsługujemy m.in. marki: Honeywell, Datalogic, Brother, M3 Mobile i Newland.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#serwis-zebra" className="w-full sm:w-auto">
              <Button size="lg" variant="zebra" className="w-full flex items-center justify-center gap-2">
                Zgłoś naprawę ZEBRA
                <ArrowRightIcon className="h-4 w-4" />
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
