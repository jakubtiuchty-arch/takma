/**
 * Ikony korzyści (strona główna) — płaskie, dwutonowe (błękit #2563EB +
 * granat #1E3A5F) z limonkowym akcentem #A8F000, bez obrysów i cieni.
 * Wygenerowane jednym obrazem w Higgsfield (gpt_image_2), żeby styl był spójny;
 * pliki: /images/ikony/flat-*.png (512 px, przezroczyste tło).
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
        src={`/images/ikony/flat-${variant}.png`}
        alt={ALT[variant]}
        width={512}
        height={512}
        className="w-full h-full object-contain motion-safe:group-hover:[animation:ti-float_1.6s_ease-in-out_infinite]"
      />
    </div>
  )
}
