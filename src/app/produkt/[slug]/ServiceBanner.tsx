import Image from 'next/image'
import Link from 'next/link'

/**
 * Baner serwisowy na samym końcu karty produktu.
 * Marki z własną grafiką (Magicard) mają urządzenie wkomponowane w ciemny panel; serwis Zebry
 * prowadzi na serwis-zebry.pl, więc dostaje ten sam panel, ale link zewnętrzny.
 * Obraz z generatora (urządzenie 1:1 z renderu), tekst w HTML.
 */
export default function ServiceBanner({
  brandName,
  brandSlug,
  image,
  href,
  eyebrow,
  lead,
  cta,
  imageAlt,
  imageFit = 'contain',
  imagePosition = '65% 28%',
}: {
  brandName: string
  /** strona serwisowa u nas; pomijana, gdy podano zewnętrzny `href` */
  brandSlug?: string
  image: string
  /** zewnętrzny adres serwisu (Zebra: serwis-zebry.pl) */
  href?: string
  eyebrow?: string
  lead?: string
  cta?: string
  imageAlt?: string
  /** 'cover' dla zdjęć kadrowanych szeroko — wypełniają panel i schodzą w gradient */
  imageFit?: 'contain' | 'cover'
  /** Kadr przy `cover`; panel jest bardzo szeroki, więc pas widoczny na zdjęciu trzeba wskazać.
   *  Inline style, bo Tailwind nie wygeneruje klasy z wartości podanej w propsie. */
  imagePosition?: string
}) {
  const zewnetrzny = Boolean(href)
  const adres = href ?? `/serwis/${brandSlug}`
  const tekstCta = cta ?? `Sprawdź serwis urządzeń ${brandName}`

  return (
    <section
      id="serwis"
      aria-labelledby="serwis-h"
      className="relative overflow-hidden rounded-2xl bg-[#0c1424] text-white md:h-[172px] grid grid-cols-1 md:grid-cols-[1fr_auto_auto] items-center"
    >
      {imageFit === 'cover' && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? `Serwis urządzeń ${brandName}`}
            fill
            sizes="(min-width: 768px) 900px, 100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1424] via-[#0c1424]/85 to-[#0c1424]/10" />
        </>
      )}

      {/* Tekst po lewej */}
      <div className="relative min-w-0 px-6 py-5 sm:px-8 flex flex-col gap-1.5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-300">{eyebrow ?? `Serwis ${brandName}`}</p>
        <h3 id="serwis-h" className="text-lg sm:text-xl font-bold leading-tight">Potrzebujesz serwisu {brandName}?</h3>
        <p className="text-sm text-slate-300 leading-snug max-w-md">
          {lead ?? 'Naprawy wszystkich modeli: diagnostyka w 48 godzin, oryginalne części, gwarancja na naprawę do 6 miesięcy.'}
        </p>
      </div>

      {/* Urządzenie w całości po środku: kadr z ciemnym tłem, krawędzie wtopione gradientami w tło banera */}
      {imageFit === 'contain' && (
        <div className="relative hidden md:block h-full w-[320px] lg:w-[380px]">
          <Image src={image} alt={imageAlt ?? `Drukarka ${brandName} z komunikatem błędu na wyświetlaczu`} fill sizes="340px" className="object-contain object-center" />
        </div>
      )}

      {/* CTA po prawej */}
      <div className="relative px-6 pb-5 md:self-end md:pb-6 md:pr-8 md:pl-2">
        {zewnetrzny ? (
          <a
            href={adres}
            target="_blank"
            rel="noopener"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors whitespace-nowrap"
          >
            {tekstCta}
            <span aria-hidden="true">→</span>
          </a>
        ) : (
          <Link
            href={adres}
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors whitespace-nowrap"
          >
            {tekstCta}
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </section>
  )
}
