import Link from 'next/link'

/**
 * Opinie klientów — placeholder do uzupełnienia przez Jakuba.
 *
 * Struktura:
 * - Link do Google Reviews (prawdziwe opinie)
 * - Kafelki case studies (user doda 3-5 prawdziwych realizacji)
 *
 * Po dodaniu prawdziwej liczby ocen można dołożyć schema AggregateRating
 * do serwis/layout.tsx (obecnie świadomie pominięte — nie wymyślamy danych).
 */
export function ReviewsSection() {
  return (
    <section className="bg-white py-14 sm:py-20 border-b border-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Opinie i realizacje
          </h2>
          <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
            Serwisujemy urządzenia AutoID dla firm z całej Polski — od małych sklepów po centra dystrybucji.
            Zobacz co mówią o nas klienci.
          </p>
        </div>

        {/* CTA do Google Reviews */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
              {/* Google "G" icon */}
              <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Pełne opinie w Google</h3>
              <p className="text-sm text-gray-600 mt-1">
                Przeczytaj recenzje klientów korzystających z serwisu TAKMA we Wrocławiu.
              </p>
            </div>
          </div>
          <a
            href="https://g.page/r/CQPSbw6hYd6cEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-700 transition-colors whitespace-nowrap"
          >
            Zobacz opinie
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 7h10v10" />
              <path d="M7 17L17 7" />
            </svg>
          </a>
        </div>

        {/* Case studies placeholder — do uzupełnienia przez klienta */}
        <div className="grid gap-4 sm:grid-cols-3">
          <CaseStudyPlaceholder
            industry="Logistyka 3PL"
            deviceType="Flota drukarek etykiet"
            description="Case study zostanie uzupełniony — wymiana 12 głowic w drukarkach przemysłowych z zachowaniem ciągłości pracy 24/7."
          />
          <CaseStudyPlaceholder
            industry="Produkcja"
            deviceType="Terminale mobilne"
            description="Case study zostanie uzupełniony — regeneracja terminali po 4 latach pracy w trudnych warunkach."
          />
          <CaseStudyPlaceholder
            industry="Retail / sieć sklepów"
            deviceType="Skanery kodów"
            description="Case study zostanie uzupełniony — diagnostyka i naprawa 50+ skanerów POS w terminie 7 dni."
          />
        </div>

        <p className="text-center mt-8 text-sm text-gray-500">
          Prowadzisz firmę i masz pytania o serwis swojej floty urządzeń?{' '}
          <Link href="#formularz-naprawy" className="text-lime-600 font-semibold hover:underline">
            Skontaktuj się z nami
          </Link>{' '}
          — pomożemy dobrać optymalny plan serwisowy.
        </p>
      </div>
    </section>
  )
}

function CaseStudyPlaceholder({
  industry,
  deviceType,
  description,
}: {
  industry: string
  deviceType: string
  description: string
}) {
  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block px-2 py-0.5 rounded-full bg-white border border-gray-200 text-[10px] font-bold uppercase tracking-wider text-gray-500">
          {industry}
        </span>
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{deviceType}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
