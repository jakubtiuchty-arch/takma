import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description: 'Polityka prywatności i ochrony danych osobowych w serwisie TAKMA.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container-main py-8 lg:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600 transition-colors">
          Strona główna
        </Link>
        <ChevronRightIcon size={16} />
        <span className="text-gray-900 font-medium">Polityka prywatności</span>
      </nav>

      <div className="max-w-3xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          Polityka prywatności
        </h1>

        {/* PLACEHOLDER - treść do uzupełnienia przez klienta */}
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <em>
              [PLACEHOLDER] Poniższy tekst jest szablonem i powinien zostać uzupełniony
              o rzeczywiste informacje dotyczące przetwarzania danych osobowych przez firmę TAKMA.
            </em>
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            1. Administrator danych osobowych
          </h2>
          <p className="text-gray-600 mb-4">
            Administratorem Państwa danych osobowych jest TAKMA Sp. z o.o. z siedzibą w Krakowie,
            ul. Przykładowa 123, 30-000 Kraków, NIP: [NIP], REGON: [REGON].
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            2. Cel przetwarzania danych
          </h2>
          <p className="text-gray-600 mb-4">
            Państwa dane osobowe są przetwarzane w celu:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Realizacji zapytań ofertowych i zawierania umów</li>
            <li>Obsługi korespondencji i odpowiadania na pytania</li>
            <li>Realizacji obowiązków prawnych ciążących na administratorze</li>
            <li>Prowadzenia marketingu bezpośredniego (za zgodą)</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            3. Podstawa prawna przetwarzania
          </h2>
          <p className="text-gray-600 mb-4">
            Podstawą prawną przetwarzania danych jest:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Art. 6 ust. 1 lit. a RODO – zgoda osoby, której dane dotyczą</li>
            <li>Art. 6 ust. 1 lit. b RODO – wykonanie umowy</li>
            <li>Art. 6 ust. 1 lit. c RODO – obowiązek prawny</li>
            <li>Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            4. Okres przechowywania danych
          </h2>
          <p className="text-gray-600 mb-4">
            Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów,
            dla których zostały zebrane, a po tym czasie przez okres wymagany przepisami prawa
            lub do momentu wycofania zgody.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            5. Prawa osób, których dane dotyczą
          </h2>
          <p className="text-gray-600 mb-4">
            Przysługuje Państwu prawo do:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Dostępu do swoich danych osobowych</li>
            <li>Sprostowania danych</li>
            <li>Usunięcia danych (&bdquo;prawo do bycia zapomnianym&rdquo;)</li>
            <li>Ograniczenia przetwarzania</li>
            <li>Przenoszenia danych</li>
            <li>Wniesienia sprzeciwu</li>
            <li>Cofnięcia zgody w dowolnym momencie</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            6. Pliki cookies
          </h2>
          <p className="text-gray-600 mb-4">
            Serwis wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania strony,
            analizy ruchu oraz personalizacji treści. Szczegółowe informacje znajdują się
            w Polityce cookies.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            7. Kontakt
          </h2>
          <p className="text-gray-600 mb-4">
            W sprawach związanych z ochroną danych osobowych można kontaktować się:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>E-mail: kontakt@takma.com.pl</li>
            <li>Telefon: +48 12 345 67 89</li>
            <li>Adres: ul. Przykładowa 123, 30-000 Kraków</li>
          </ul>

          <p className="text-sm text-gray-500 mt-8">
            Ostatnia aktualizacja: Grudzień 2024
          </p>
        </div>
      </div>
    </div>
  )
}
