type ServiceRow = {
  name: string
  price: string
  time: string
  warranty: string
  highlight?: boolean
}

type PricingVariant = 'all' | 'printers' | 'devices'

// Wspólne: diagnostyka, płyta główna, czyszczenie, Wi-Fi
const SHARED_SERVICES: ServiceRow[] = [
  { name: 'Diagnostyka usterki', price: 'GRATIS*', time: '48h', warranty: '—', highlight: true },
]

// Tylko drukarki
const PRINTER_SERVICES: ServiceRow[] = [
  { name: 'Wymiana głowicy (drukarki biurkowe)', price: 'od 430 PLN', time: '3–5 dni', warranty: '6 mies.' },
  { name: 'Wymiana głowicy (drukarki przemysłowe)', price: 'od 1 600 PLN', time: '3–5 dni', warranty: '6 mies.' },
  { name: 'Wymiana wałka dociskowego', price: 'od 150 PLN', time: '2–4 dni', warranty: '6 mies.' },
  { name: 'Kalibracja czujników drukarki', price: 'od 100 PLN', time: '1–2 dni', warranty: '3 mies.' },
  { name: 'Wymiana obcinaka gilotynowego', price: 'od 200 PLN', time: '2–4 dni', warranty: '3 mies.' },
  { name: 'Wymiana zasilacza', price: 'od 200 PLN', time: '2–4 dni', warranty: '6 mies.' },
  { name: 'Czyszczenie / konserwacja drukarki', price: 'od 150 PLN', time: '1–2 dni', warranty: '—' },
  { name: 'Naprawa płyty głównej', price: 'od 300 PLN', time: '5–10 dni', warranty: '3 mies.' },
  { name: 'Naprawa modułu sieciowego (Ethernet/Wi-Fi)', price: 'od 250 PLN', time: '5–7 dni', warranty: '3 mies.' },
]

// Tylko terminale i skanery
const DEVICE_SERVICES: ServiceRow[] = [
  { name: 'Naprawa ekranu terminala (LCD + digitizer)', price: 'od 350 PLN', time: '5–7 dni', warranty: '3 mies.' },
  { name: 'Wymiana baterii terminala', price: 'od 120 PLN', time: '1–2 dni', warranty: '3 mies.' },
  { name: 'Naprawa modułu skanującego (imager)', price: 'od 350 PLN', time: '5–7 dni', warranty: '3 mies.' },
  { name: 'Naprawa złącza ładowania / USB', price: 'od 250 PLN', time: '3–5 dni', warranty: '3 mies.' },
  { name: 'Wymiana klawiatury (terminale rugged)', price: 'od 250 PLN', time: '3–5 dni', warranty: '3 mies.' },
  { name: 'Czyszczenie / konserwacja urządzenia', price: 'od 150 PLN', time: '1–2 dni', warranty: '—' },
  { name: 'Naprawa płyty głównej', price: 'od 300 PLN', time: '5–10 dni', warranty: '3 mies.' },
  { name: 'Naprawa modułu Wi-Fi / WLAN', price: 'od 250 PLN', time: '5–7 dni', warranty: '3 mies.' },
  { name: 'Kontrola szczelności IP65/IP67', price: 'od 180 PLN', time: '3–5 dni', warranty: '—' },
]

// Wszystko (strona główna /serwis — każdy kategoria urządzeń)
const ALL_SERVICES: ServiceRow[] = [
  ...PRINTER_SERVICES.slice(0, 3), // głowice + wałek
  ...DEVICE_SERVICES.slice(0, 2), // ekran + bateria
  { name: 'Czyszczenie / konserwacja urządzenia', price: 'od 150 PLN', time: '1–2 dni', warranty: '—' },
  { name: 'Naprawa płyty głównej', price: 'od 300 PLN', time: '5–10 dni', warranty: '3 mies.' },
  { name: 'Kalibracja czujników drukarki', price: 'od 100 PLN', time: '1–2 dni', warranty: '3 mies.' },
  { name: 'Naprawa modułu Wi-Fi / WLAN', price: 'od 250 PLN', time: '5–7 dni', warranty: '3 mies.' },
]

function getServices(variant: PricingVariant): ServiceRow[] {
  if (variant === 'printers') return [...SHARED_SERVICES, ...PRINTER_SERVICES]
  if (variant === 'devices') return [...SHARED_SERVICES, ...DEVICE_SERVICES]
  return [...SHARED_SERVICES, ...ALL_SERVICES]
}

function getHeadline(variant: PricingVariant): { title: string; subtitle: string } {
  if (variant === 'printers') {
    return {
      title: 'Cennik orientacyjny — naprawa drukarek',
      subtitle: 'Ceny netto napraw drukarek etykiet biurkowych i przemysłowych. Dokładna wycena po bezpłatnej diagnostyce.',
    }
  }
  if (variant === 'devices') {
    return {
      title: 'Cennik orientacyjny — naprawa terminali i skanerów',
      subtitle: 'Ceny netto napraw terminali mobilnych i skanerów kodów kreskowych. Dokładna wycena po bezpłatnej diagnostyce.',
    }
  }
  return {
    title: 'Cennik orientacyjny napraw',
    subtitle: 'Przejrzyste ceny serwisu urządzeń AutoID w TAKMA. Dokładna wycena po bezpłatnej diagnostyce.',
  }
}

export function PricingTable({ variant = 'all' }: { variant?: PricingVariant } = {}) {
  const services = getServices(variant)
  const { title, subtitle } = getHeadline(variant)

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full min-w-[540px]">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold">Usługa</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm font-semibold">Cena netto</th>
                <th className="px-3 sm:px-5 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold">Czas realizacji</th>
                <th className="px-3 sm:px-5 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold">Gwarancja</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {services.map((service, index) => (
                <tr
                  key={index}
                  className={`transition-colors hover:bg-gray-50 ${
                    service.highlight ? 'bg-lime-50' : ''
                  }`}
                >
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-medium">
                    {service.name}
                  </td>
                  <td className={`px-4 sm:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm font-bold whitespace-nowrap ${
                    service.highlight ? 'text-lime-700' : 'text-gray-900'
                  }`}>
                    {service.price}
                  </td>
                  <td className="px-3 sm:px-5 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    {service.time}
                  </td>
                  <td className="px-3 sm:px-5 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    {service.warranty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-500 text-center">
          * Diagnostyka gratis przy zleceniu naprawy. Bez zlecenia naprawy: 99 PLN netto + koszty wysyłki.
          Ceny orientacyjne netto. Dokładna wycena po diagnostyce urządzenia. Aktualizacja: luty 2026.
        </p>

        <div className="mt-8 text-center">
          <a
            href="#zgloszenie"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
          >
            Zapytaj o wycenę naprawy
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
