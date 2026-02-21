import Link from 'next/link'
import { Button } from '@/components/ui'
import { ArrowRightIcon } from '@/components/ui/Icons'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-gradient-mesh-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

      <div className="container-main relative py-16 lg:py-28">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-sm text-[#A8F000] font-medium mb-6 reveal">
          <span className="w-2 h-2 rounded-full bg-[#A8F000]" />
          25+ lat na rynku AutoID
        </div>

        {/* H1 — SEO-friendly, opisujący ofertę firmy */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl text-balance leading-[1.1] reveal reveal-delay-1">
          Drukarki etykiet, terminale mobilne i&nbsp;skanery kodów kreskowych
        </h1>

        {/* Podtytuł — E-E-A-T + value proposition, multi-brand */}
        <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed reveal reveal-delay-2">
          Autoryzowany dystrybutor Zebra, Honeywell, Datalogic i&nbsp;innych czołowych marek.
          Doradztwo, sprzedaż i&nbsp;serwis urządzeń AutoID dla firm w&nbsp;całej Polsce.
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-3">
          <Link href="/kontakt">
            <Button
              size="lg"
              className="!bg-[#A8F000] !text-gray-900 hover:!bg-[#9AE000] font-semibold px-8"
              rightIcon={<ArrowRightIcon size={18} />}
            >
              Zamów indywidualną ofertę
            </Button>
          </Link>
          <Link href="/katalog">
            <Button
              size="lg"
              variant="ghost"
              className="!text-gray-300 hover:!text-white hover:!bg-white/[0.06] !border !border-white/[0.1]"
            >
              Przeglądaj katalog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
