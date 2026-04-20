import Image from 'next/image'
import Link from 'next/link'
import { serviceBrands } from '../_data/brands'

export function SupportedBrandsGrid() {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Producenci, których urządzenia serwisujemy
          </h2>
          <p className="mt-2 text-gray-500">
            Nasi certyfikowani inżynierowie serwisują pogwarancyjnie sprzęt AutoID wiodących producentów — terminale mobilne, skanery kodów i drukarki etykiet. Kliknij logo, aby zobaczyć szczegóły serwisu per marka.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 sm:gap-6 lg:gap-8 items-start justify-items-center">
          {serviceBrands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/serwis/${brand.slug}`}
              className="flex flex-col items-center text-center group rounded-xl p-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-center h-12 w-28 sm:h-16 sm:w-36 md:h-20 md:w-44">
                <div className="relative w-full h-full opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={brand.logoSrc}
                    alt={brand.logoAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 112px, 144px"
                  />
                </div>
              </div>
              <p className="mt-1.5 text-[10px] sm:text-xs text-gray-400 group-hover:text-gray-600 transition-colors leading-tight max-w-[140px] sm:max-w-[160px]">
                {brand.shortDesc}
              </p>
              <p className="mt-1 text-[10px] font-semibold text-lime-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Serwis {brand.name} →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
