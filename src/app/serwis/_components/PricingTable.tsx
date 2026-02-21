const services = [
  { name: 'Diagnostyka usterki', price: 'GRATIS*', highlight: true },
  { name: 'Wymiana głowicy (drukarki biurkowe)', price: 'od 430 PLN' },
  { name: 'Wymiana głowicy (drukarki przemysłowe)', price: 'od 1 600 PLN' },
  { name: 'Wymiana wałka dociskowego', price: 'od 150 PLN' },
  { name: 'Naprawa ekranu terminala mobilnego', price: 'od 350 PLN' },
  { name: 'Wymiana baterii terminala', price: 'od 120 PLN' },
  { name: 'Czyszczenie / konserwacja urządzenia', price: 'od 150 PLN' },
  { name: 'Naprawa płyty głównej', price: 'od 300 PLN' },
]

export function PricingTable() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Cennik orientacyjny napraw
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Przejrzyste ceny serwisu urządzeń AutoID. Dokładna wycena po diagnostyce.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold">Usługa</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm font-semibold">Cena netto</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-500 text-center">
          * Diagnostyka gratis przy zleceniu naprawy. Bez zlecenia naprawy: 99 PLN netto + koszty wysyłki.
          Ceny orientacyjne netto. Dokładna wycena po diagnostyce urządzenia.
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
