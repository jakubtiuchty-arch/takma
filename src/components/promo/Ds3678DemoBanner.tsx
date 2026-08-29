import Link from 'next/link'
import { ds3678DemoActive, ds3678DemoSlotsLeft, DS3678_DEMO } from '@/data/promos'
import { ArrowRightIcon } from '@/components/ui/Icons'

/**
 * Baner programu testów DS3678 na kartach produktów (5 wariantów).
 *
 * Prowadzi na landing /testy-ds3678 — świadomie bez ceny i bez procentu rabatu,
 * bo pula to 3 egzemplarze demonstracyjne. Znika sam, gdy w src/data/promos.ts
 * ustawimy `slotsTaken: 3` albo minie termin akcji.
 */
export default function Ds3678DemoBanner({ productSlug }: { productSlug: string }) {
  if (!ds3678DemoActive()) return null
  if (!DS3678_DEMO.slugs.includes(productSlug)) return null

  const slotsLeft = ds3678DemoSlotsLeft()

  return (
    <Link
      href="/testy-ds3678"
      className="group relative block overflow-hidden rounded-2xl bg-[#0b0f0d] mb-6 shadow-[0_18px_40px_-18px_rgba(4,10,6,0.6)]"
    >
      {/* zdjęcie po lewej, prawa strona ciemna pod tekst */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-2/3 bg-[url('/images/ds3678-demo-card.webp')] bg-cover bg-left opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0b0f0d]/70 to-[#0b0f0d]" />

      <div className="relative flex items-center gap-4 p-5 sm:p-6 pl-[38%] sm:pl-[42%]">
        <div className="min-w-0">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-gray-900"
            style={{ background: '#A8F000' }}
          >
            Program testów
          </span>
          <p className="mt-2 text-white font-semibold leading-snug">
            Przetestuj DS3678 z maskowaniem kanałów BLE u siebie
          </p>
          <p className="mt-1 text-sm text-gray-300 leading-relaxed">
            Dwa tygodnie w Twojej hali, na Twoich kodach.{' '}
            <span className="text-white font-medium">
              {slotsLeft === 1 ? 'Zostało ostatnie stanowisko.' : `Wolne stanowiska: ${slotsLeft} z ${DS3678_DEMO.slots}.`}
            </span>
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#A8F000]">
            Zgłoś stanowisko
            <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
