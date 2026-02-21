import Image from 'next/image'

export function SupportedBrandsGrid() {
  const brands = [
    { name: 'Honeywell', src: '/images/partners/logo_honeywell.png' },
    { name: 'Datalogic', src: '/images/partners/logo_datalogic.png' },
    { name: 'M3 Mobile', src: '/images/partners/logo_m3mobile.png' },
    { name: 'Newland', src: '/images/partners/logo_newland.png' },
    { name: 'Citizen', src: '/images/partners/logo_citizen.png' },
    { name: 'Godex', src: '/images/partners/logo-godex.png' },
    { name: 'SATO', src: '/images/partners/logo_sato.png' },
    { name: 'TSC', src: '/images/partners/logo_tsc.png' },
    { name: 'Brother', src: '/images/partners/brother_logo.png' },
  ]

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Które marki naprawiamy?
          </h2>
          <p className="mt-2 text-gray-500">
            Nasi certyfikowani inżynierowie z powodzeniem serwisują pogwarancyjnie sprzęt wiodących producentów branży AutoID.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 sm:grid-cols-3 md:grid-cols-5 lg:gap-12 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center h-16 w-36 md:h-20 md:w-44"
            >
              {brand.src ? (
                <div className="relative w-full h-full opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                  <Image 
                    src={brand.src} 
                    alt={`Autoryzowany Serwis ${brand.name}`} 
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 112px, 144px"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center px-4 py-2 bg-gray-50 rounded border border-gray-200 w-full h-full opacity-70 hover:opacity-100 hover:bg-white transition-all duration-300 cursor-pointer">
                  <span className="font-bold text-gray-700 text-lg tracking-tight">{brand.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
