/**
 * Ikony korzyści (strona główna) — miękkie 3D / claymorphism (trend 2026):
 * napompowane, zaokrąglone formy renderowane 3D w kolorach TAKMA
 * (błękit + granat + limonkowy akcent). Pliki: /images/ikony/clay-*.png.
 * Hover karty (.group) → delikatny float + powiększenie (motion-safe).
 */
import Image from 'next/image'

type Variant = 'medal' | 'delivery' | 'service' | 'consulting'
const ALT: Record<Variant, string> = {
  medal: '25 lat doświadczenia',
  delivery: 'Szybka dostawa',
  service: 'Autoryzowany serwis',
  consulting: 'Doradztwo techniczne',
}

export function FeatureIcon({ variant }: { variant: Variant }) {
  return (
    <div className="w-14 h-14 lg:w-[76px] lg:h-[76px] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:-translate-y-1.5 motion-safe:group-hover:scale-105">
      <Image
        src={`/images/ikony/clay-${variant}.png`}
        alt={ALT[variant]}
        width={320}
        height={320}
        className="w-full h-full object-contain motion-safe:group-hover:[animation:ti-float_1.6s_ease-in-out_infinite]"
      />
    </div>
  )
}
