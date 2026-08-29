import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ds3678DemoActive, ds3678DemoSlotsLeft, DS3678_DEMO } from '@/data/promos'
import { getProductBySlug } from '@/data/products'
import AskAboutProductButton from '../produkt/[slug]/AskAboutProductButton'
import { CheckIcon, ArrowRightIcon } from '@/components/ui/Icons'

/**
 * Landing programu testów DS3678 (maskowanie kanałów BLE).
 *
 * Strona pod kampanię Ads — świadomie BEZ ceny i bez procentu rabatu: pula to
 * 3 egzemplarze demonstracyjne, więc obietnica ceny byłaby niemożliwa do
 * utrzymania przy zamówieniu floty i zakotwiczyłaby cennik DS3678 w dół.
 * Sprzedajemy test u klienta, nie tanie urządzenie.
 *
 * Gdy komplet zgłoszeń się zbierze: `slotsTaken: 3` w src/data/promos.ts —
 * landing przestaje istnieć (404), a kampanię trzeba wtedy zatrzymać w Ads.
 */

const URL = 'https://www.takma.com.pl/testy-ds3678'

export const metadata: Metadata = {
  title: 'Testy Zebra DS3678 z maskowaniem kanałów BLE — zgłoś stanowisko | TAKMA',
  description:
    'Wypożycz skaner Zebra DS3678 z maskowaniem kanałów Bluetooth Low Energy na dwa tygodnie i sprawdź go na własnych kodach. Pula ograniczona do 3 stanowisk testowych.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Testy Zebra DS3678 z maskowaniem kanałów BLE',
    description:
      'Dwa tygodnie testu we własnej hali, na własnych kodach. Trzy stanowiska testowe, zgłoszenia w kolejności wpływu.',
    url: URL,
    type: 'website',
    locale: 'pl_PL',
    siteName: 'TAKMA',
    images: [{ url: 'https://www.takma.com.pl/images/ds3678-demo-landing-v2.webp', width: 1920, height: 714 }],
  },
}

const WARIANTY = [
  { slug: 'zebra-ds3678-sr', nazwa: 'DS3678-SR', opis: 'Standardowy zasięg — kody z ręki i z regału.' },
  { slug: 'zebra-ds3678-xr', nazwa: 'DS3678-XR', opis: 'Największy zasięg w gamie — odczyt z drugiego końca hali.' },
  { slug: 'zebra-ds3678-hp', nazwa: 'DS3678-HP', opis: 'Zdjęcia, podpisy i OCR obok skanowania kodów.' },
  { slug: 'zebra-ds3678-dp', nazwa: 'DS3678-DP', opis: 'Oznaczenia DPM wybijane i grawerowane bezpośrednio na częściach.' },
  { slug: 'zebra-ds3678-hd', nazwa: 'DS3678-HD', opis: 'Kody o dużej gęstości — elektronika i wyroby medyczne.' },
]

export default function TestyDS3678Page() {
  if (!ds3678DemoActive()) notFound()

  const slotsLeft = ds3678DemoSlotsLeft()
  // DS3678-DP (Direct Part Marking) nie ma jeszcze karty w katalogu — pokazujemy go
  // na liście, bo to najczęstszy powód testu w motoryzacji, ale bez martwego odnośnika.
  const produkty = WARIANTY.map((w) => ({ ...w, maKarte: Boolean(getProductBySlug(w.slug)) }))

  return (
    <main className="bg-[#eef1f5] py-4 lg:py-8">
      <div className="container-main space-y-4 lg:space-y-6">
      {/* ── Hero ── */}
      <section className="relative bg-[#0b0f0d] text-white overflow-hidden rounded-3xl">
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('/images/ds3678-demo-landing-v2.webp')] bg-cover bg-right"
        />
        {/* obraz ma pustą lewą połowę pod nagłówek — gradient tylko domyka czytelność */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0b0f0d] via-[#0b0f0d]/60 to-transparent" />
        <div className="relative px-6 sm:px-10 lg:px-14 py-8 lg:py-12">
          <div className="max-w-2xl">
            <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-tight">
              Sprawdź DS3678 z maskowaniem kanałów BLE u siebie w hali
            </h1>
            <p className="mt-3 text-sm lg:text-base text-gray-300 leading-relaxed max-w-xl">
              Zebra udostępniła maskowanie kanałów Bluetooth Low Energy — skaner przestaje wchodzić w drogę
              pozostałym urządzeniom radiowym w hali. Sprawdź to na swoich kodach i w swojej sieci.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="#jak-to-dziala"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Jak wyglądają testy? <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* na wąskich ekranach zdjęcie w całości, pod treścią — widać wszystkie pięć sztuk */}
        <img
          src="/images/ds3678-demo-landing-v2.webp"
          alt="Pięć skanerów Zebra DS3678 na stanowisku w hali produkcyjnej"
          className="lg:hidden w-full h-auto"
          loading="eager"
        />
      </section>

      {/* ── Dla kogo ── */}
      <section className="bg-white rounded-3xl px-6 sm:px-10 lg:px-14 py-10 lg:py-14">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            Kiedy maskowanie kanałów robi różnicę
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Problem pojawia się tam, gdzie na jednej powierzchni pracuje sieć Wi-Fi, systemy sterowania i dziesiątki
            urządzeń Bluetooth naraz. Skaner można wtedy odsunąć od zajętych kanałów, zamiast walczyć o pasmo.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {[
              {
                t: 'Motoryzacja',
                d: 'Linie montażowe z gęstą siecią czujników i narzędzi bezprzewodowych, gdzie każdy nieodczytany kod zatrzymuje takt.',
              },
              {
                t: 'Obronność i lotnictwo',
                d: 'Środowiska z restrykcyjną polityką radiową, w których trzeba kontrolować, na których kanałach pracuje sprzęt.',
              },
              {
                t: 'Produkcja i magazyn wysokiego składowania',
                d: 'Hale, w których terminale, skanery i punkty dostępowe konkurują o to samo pasmo.',
              },
            ].map((k) => (
              <div key={k.t} className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900">{k.t}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jak wygląda test ── */}
      <section id="jak-to-dziala" className="bg-white rounded-3xl px-6 sm:px-10 lg:px-14 py-10 lg:py-14 scroll-mt-24">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">Jak wygląda test</h2>
          <ol className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-5">
            {[
              { n: '1', t: 'Zgłoszenie', d: 'Piszesz, co skanujecie i w jakim środowisku. Odpowiadamy w jeden dzień roboczy.' },
              { n: '2', t: 'Dobór wariantu', d: 'Wspólnie wybieramy wersję skanera — inną do kodów DPM, inną do odczytu z 15 metrów.' },
              { n: '3', t: 'Dwa tygodnie u Was', d: 'Skaner jedzie do Was skonfigurowany. Testujecie na własnych kodach i własnej sieci.' },
              { n: '4', t: 'Decyzja', d: 'Zwrot bez zobowiązań albo zakup przetestowanego egzemplarza na warunkach preferencyjnych.' },
            ].map((s) => (
              <li key={s.n} className="rounded-2xl bg-white border border-gray-200 p-6">
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-gray-900"
                  style={{ background: '#A8F000' }}
                >
                  {s.n}
                </span>
                <h3 className="mt-4 font-semibold text-gray-900">{s.t}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-gray-500 max-w-3xl">
            Test jest bezpłatny. Ponosicie tylko koszt zwrotu, jeśli zdecydujecie się oddać sprzęt. Urządzenia
            pochodzą z puli demonstracyjnej — po teście sprzedajemy je jako egzemplarze demo, z pełną gwarancją.
          </p>
        </div>
      </section>

      {/* ── Warianty ── */}
      <section className="bg-white rounded-3xl px-6 sm:px-10 lg:px-14 py-10 lg:py-14">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">Który wariant do testu</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            DS3678 to jedna rodzina w pięciu wersjach optyki. Różnica jest większa, niż sugeruje wspólna nazwa —
            wariant do kodów wybijanych na metalu nie odczyta kodu z 15 metrów i odwrotnie.
          </p>
          <div className="mt-8 divide-y divide-gray-100 rounded-2xl border border-gray-200">
            {produkty.map((w) => (
              <div key={w.slug} className="flex flex-col sm:flex-row sm:items-center gap-3 p-5">
                <div className="sm:w-44 font-semibold text-gray-900">{w.nazwa}</div>
                <p className="flex-1 text-sm text-gray-600">{w.opis}</p>
                {w.maKarte ? (
                  <Link
                    href={`/produkt/${w.slug}`}
                    className="text-sm font-medium text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5 whitespace-nowrap"
                  >
                    Dane techniczne <ArrowRightIcon size={14} />
                  </Link>
                ) : (
                  <span className="text-sm text-gray-400 whitespace-nowrap">sprowadzamy na zamówienie</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Zgłoszenie ── */}
      <section className="bg-[#0b0f0d] text-white rounded-3xl px-6 sm:px-10 lg:px-14 py-10 lg:py-14">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
            {slotsLeft === 1 ? 'Zostało ostatnie stanowisko' : `Zostały ${slotsLeft} stanowiska testowe`}
          </h2>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Zgłoszenia rozpatrujemy w kolejności wpływu. Po skompletowaniu puli zamykamy nabór — kolejne testy
            dopiero przy następnej partii sprzętu demonstracyjnego.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-300">
            {['Dwa tygodnie w Waszej hali', 'Skaner skonfigurowany pod Wasze kody', 'Wsparcie inżyniera w trakcie testu'].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <CheckIcon size={16} className="text-[#A8F000]" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex justify-center">
            <AskAboutProductButton
              productName="Testy DS3678 — maskowanie kanałów BLE"
              productSlug="testy-ds3678"
              label="Zgłoś swoje stanowisko"
              initialMessage={
                'Chcemy przetestować skaner Zebra DS3678 z maskowaniem kanałów BLE.\n\n' +
                'Branża / zastosowanie: \n' +
                'Rodzaj kodów (1D, 2D, DPM): \n' +
                'Interesujący wariant (SR / XR / HP / DP / HD): \n' +
                'Lokalizacja testu: '
              }
              promo
              promoStyle
              arrow
            />
          </div>
        </div>
      </section>
      </div>
    </main>
  )
}
