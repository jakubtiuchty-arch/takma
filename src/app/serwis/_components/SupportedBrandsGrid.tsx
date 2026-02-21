import Image from 'next/image'

const brands = [
  { name: 'Honeywell', src: '/images/partners/logo_honeywell.png', alt: 'Serwis terminali i skanerów Honeywell', desc: 'Terminale CT, CK, EDA, skanery Voyager, Xenon' },
  { name: 'Datalogic', src: '/images/partners/logo_datalogic.png', alt: 'Serwis terminali i skanerów Datalogic', desc: 'Memor, Skorpio, Joya Touch, skanery Gryphon' },
  { name: 'M3 Mobile', src: '/images/partners/logo_m3mobile.png', alt: 'Serwis terminali M3 Mobile', desc: 'Terminale UL20, SM20, SL10' },
  { name: 'Newland', src: '/images/partners/logo_newland.png', alt: 'Serwis skanerów i terminali Newland', desc: 'Skanery HR, MT90, terminale NFT10' },
  { name: 'Citizen', src: '/images/partners/logo_citizen.png', alt: 'Serwis drukarek etykiet Citizen', desc: 'Drukarki CL-S, CL-E, CT-S' },
  { name: 'Godex', src: '/images/partners/logo-godex.png', alt: 'Serwis drukarek etykiet Godex', desc: 'Drukarki G500, EZ, RT700' },
  { name: 'SATO', src: '/images/partners/logo_sato.png', alt: 'Serwis drukarek etykiet SATO', desc: 'Drukarki CL4NX, CT4-LX, FX3-LX' },
  { name: 'TSC', src: '/images/partners/logo_tsc.png', alt: 'Serwis drukarek etykiet TSC', desc: 'Drukarki TTP, TE, MH series' },
  { name: 'Brother', src: '/images/partners/brother_logo.png', alt: 'Serwis drukarek etykiet Brother', desc: 'Drukarki mobilne RJ, TD, QL' },
]

export function SupportedBrandsGrid() {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Producenci, których urządzenia serwisujemy
          </h2>
          <p className="mt-2 text-gray-500">
            Nasi certyfikowani inżynierowie serwisują pogwarancyjnie sprzęt AutoID wiodących producentów — terminale mobilne, skanery kodów i drukarki etykiet.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 sm:gap-6 lg:gap-8 items-start justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center text-center group"
            >
              <div className="flex items-center justify-center h-12 w-28 sm:h-16 sm:w-36 md:h-20 md:w-44">
                <div className="relative w-full h-full opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 112px, 144px"
                  />
                </div>
              </div>
              <p className="mt-1.5 text-[10px] sm:text-xs text-gray-400 group-hover:text-gray-600 transition-colors leading-tight max-w-[140px] sm:max-w-[160px]">
                {brand.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
