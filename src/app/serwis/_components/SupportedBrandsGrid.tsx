import Image from 'next/image'
import Link from 'next/link'
import { serviceBrands, brandUrl } from '../_data/brands'

export function SupportedBrandsGrid() {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Producenci, których urządzenia serwisujemy
          </h2>
          <p className="mt-2 text-gray-500">
            Nasi certyfikowani inżynierowie serwisują pogwarancyjnie sprzęt AutoID wiodących producentów — terminale mobilne, skanery kodów, drukarki etykiet i drukarki kart. Kliknij logo, aby zobaczyć szczegóły serwisu per marka.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 md:grid-cols-5 sm:gap-x-6 sm:gap-y-6 lg:gap-x-8 items-start">
          {serviceBrands.map((brand) => (
            <Link
              key={brand.slug}
              href={brandUrl(brand)}
              className="flex flex-col items-center text-center group w-full rounded-xl px-2 py-2 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-center h-[38.4px] w-[89.6px] sm:h-[51.2px] sm:w-[115.2px] md:h-16 md:w-[140.8px]">
                <div className="relative w-full h-full opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={brand.logoSrc}
                    alt={brand.logoAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 90px, (max-width: 768px) 116px, 141px"
                  />
                </div>
              </div>
              <p className="mt-3 text-[10px] sm:text-xs text-gray-400 group-hover:text-gray-600 transition-colors leading-tight max-w-[140px] sm:max-w-[160px]">
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
