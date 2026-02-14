import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui'
import {
  ArrowRightIcon,
  CheckIcon,
  TruckIcon,
  WrenchIcon,
  UserGroupIcon,
} from '@/components/ui/Icons'
import { ProductCard } from '@/components/product'
import { categories, getBestsellers } from '@/data/products'
import HeroCarousel from '@/components/home/HeroCarousel'

const categoryIcons: Record<string, string> = {
  printer: '/images/drukarki-etykiet.png',
  scan: '/images/skanery-czytniki.png',
  smartphone: '/images/terminale.png',
  tablet: '/images/tablety.png',
  tag: '/images/Materialy-eksploatacyjne.png',
  package: '/images/akcesoria.png',
}

export default function HomePage() {
  const bestsellers = getBestsellers(4)

  return (
    <>
      {/* ── Hero Carousel ── */}
      <HeroCarousel />

      {/* ── Bento Categories ── */}
      <section className="py-10 lg:py-14 bg-gradient-mesh relative">
        <div className="container-main">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                Kategorie produktów
              </h2>
              <p className="text-gray-500 mt-2">Znajdź urządzenie idealne do Twoich potrzeb</p>
            </div>
            <Link
              href="/katalog"
              className="hidden md:flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              Cały katalog
              <ArrowRightIcon size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
            {categories.slice(0, 6).map((category, i) => (
              <Link
                key={category.id}
                href={`/${category.slug}`}
                className={`bento-card group p-5 lg:p-6 flex flex-col items-start gap-4 reveal reveal-delay-${Math.min(i + 1, 5)}`}
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={categoryIcons[category.icon] || '/images/icon-accessories.png'}
                    alt={category.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-sm">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2 hidden lg:block">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bestsellers ── */}
      <section className="py-10 lg:py-14">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              Bestsellery
            </h2>
            <Link
              href="/katalog?sortuj=popularnosc"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1.5 transition-colors"
            >
              Wszystkie produkty
              <ArrowRightIcon size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Serwis-Zebry Banner ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600" />
        <div className="absolute inset-0 bg-gradient-mesh-dark opacity-50" />

        <div className="container-main relative py-10 lg:py-14">
          <a
            href="https://serwis-zebry.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col lg:flex-row items-center justify-between gap-6 group"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-white/15 transition-colors">
                <WrenchIcon size={32} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">
                  Serwis-Zebry.pl
                </div>
                <div className="text-primary-100 mt-1">
                  Profesjonalna naprawa i serwis urządzeń Zebra — autoryzowany partner z 20-letnim doświadczeniem
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl group-hover:bg-primary-50 transition-all duration-300 shadow-glass flex-shrink-0">
              Sprawdź ofertę serwisu
              <ArrowRightIcon size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* ── Why TAKMA - Bento Grid ── */}
      <section className="py-16 lg:py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

        <div className="container-main relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              Dlaczego TAKMA?
            </h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">
              Kompleksowe rozwiązania AutoID z profesjonalnym wsparciem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <UserGroupIcon size={28} />,
                title: '20 lat doświadczenia',
                desc: 'Tysiące zrealizowanych projektów i zadowolonych klientów w całej Polsce',
              },
              {
                icon: <TruckIcon size={28} />,
                title: 'Szybka dostawa',
                desc: 'Wysyłka 24-48h — większość produktów dostępna od ręki z magazynu',
              },
              {
                icon: <WrenchIcon size={28} />,
                title: 'Autoryzowany serwis',
                desc: 'Pełna obsługa gwarancyjna i pogwarancyjna urządzeń Zebra',
              },
              {
                icon: <CheckIcon size={28} />,
                title: 'Doradztwo techniczne',
                desc: 'Pomożemy dobrać rozwiązanie idealne dla Twojej branży i potrzeb',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bento-card p-6 lg:p-7 flex flex-col reveal reveal-delay-${Math.min(i + 1, 5)}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-5">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-gradient-mesh-dark" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

        <div className="container-main relative py-16 lg:py-24 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-balance">
            Potrzebujesz pomocy w wyborze?
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
            Skontaktuj się z nami — doradzimy i przygotujemy indywidualną ofertę
            dopasowaną do Twoich potrzeb.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button
                size="lg"
                variant="ghost"
                className="!bg-white !text-gray-900 hover:!bg-gray-100 font-semibold px-8"
              >
                Skontaktuj się
              </Button>
            </Link>
            <Link href="/katalog">
              <Button
                size="lg"
                variant="ghost"
                className="!text-gray-300 hover:!text-white hover:!bg-white/[0.06] !border !border-white/[0.1]"
              >
                Przeglądaj produkty
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
