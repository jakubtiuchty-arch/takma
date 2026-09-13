import Image from 'next/image'
import Link from 'next/link'

/**
 * Baner serwisowy na samym końcu karty produktu (dla marek z własną grafiką banera).
 * Obraz z Higgsfield (urządzenie 1:1 z renderu), tekst w HTML na ciemnym gradiencie po lewej.
 */
export default function ServiceBanner({ brandName, brandSlug, image }: { brandName: string; brandSlug: string; image: string }) {
  return (
    <section
      id="serwis"
      aria-labelledby="serwis-h"
      className="relative overflow-hidden rounded-2xl bg-[#0c1424] text-white md:h-[172px] grid grid-cols-1 md:grid-cols-[1fr_auto_auto] items-center"
    >
      {/* Tekst po lewej */}
      <div className="min-w-0 px-6 py-5 sm:px-8 flex flex-col gap-1.5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-300">Serwis {brandName}</p>
        <h3 id="serwis-h" className="text-lg sm:text-xl font-bold leading-tight">Potrzebujesz serwisu {brandName}?</h3>
        <p className="text-sm text-slate-300 leading-snug max-w-md">
          Naprawy wszystkich modeli: diagnostyka w 48 godzin, oryginalne części, gwarancja na naprawę do 6 miesięcy.
        </p>
      </div>
      {/* Drukarka w całości po środku: kadr z ciemnym tłem, krawędzie wtopione gradientami w tło banera */}
      <div className="relative hidden md:block h-full w-[320px] lg:w-[380px]">
        <Image src={image} alt={`Drukarka ${brandName} z komunikatem błędu na wyświetlaczu`} fill sizes="340px" className="object-contain object-center" />
      </div>
      {/* CTA po prawej */}
      <div className="px-6 pb-5 md:self-end md:pb-6 md:pr-8 md:pl-2">
        <Link
          href={`/serwis/${brandSlug}`}
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors whitespace-nowrap"
        >
          Sprawdź serwis urządzeń {brandName}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
