import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Polityka prywatności | TAKMA',
  description:
    'Polityka prywatności i ochrony danych osobowych w serwisie takma.com.pl. Informacje o przetwarzaniu danych, cookies i prawach użytkowników.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container-main py-8 lg:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link
          href="/"
          className="hover:text-primary-600 transition-colors"
        >
          Strona główna
        </Link>
        <ChevronRightIcon size={16} />
        <span className="text-gray-900 font-medium">
          Polityka prywatności
        </span>
      </nav>

      <div className="max-w-3xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          Polityka prywatności
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Ostatnia aktualizacja: 17 lutego 2026 r.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          {/* 1. Administrator */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-0 mb-4">
              1. Administrator danych osobowych
            </h2>
            <p className="text-gray-600 mb-3">
              Administratorem Państwa danych osobowych jest:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-700 space-y-1">
              <p className="font-semibold">TAKMA Tadeusz Tiuchty</p>
              <p>ul. Poświęcka 1a, 51-128 Wrocław</p>
              <p>NIP: 9151004377</p>
              <p>
                E-mail:{' '}
                <a
                  href="mailto:kontakt@takma.com.pl"
                  className="text-primary-600 hover:underline"
                >
                  kontakt@takma.com.pl
                </a>
              </p>
              <p>Tel.: +48 607 819 688</p>
            </div>
            <p className="text-gray-600 mt-3">
              Administrator nie wyznaczył Inspektora Ochrony Danych (IOD).
              We wszelkich sprawach związanych z ochroną danych osobowych
              prosimy o kontakt na powyższy adres e-mail.
            </p>
          </section>

          {/* 2. Podstawy prawne */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Podstawy prawne przetwarzania
            </h2>
            <p className="text-gray-600 mb-3">
              Przetwarzanie danych osobowych odbywa się na podstawie:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Rozporządzenia Parlamentu Europejskiego i Rady (UE)
                2016/679</strong> z dnia 27 kwietnia 2016 r. w sprawie ochrony
                osób fizycznych w związku z przetwarzaniem danych osobowych
                (RODO)
              </li>
              <li>
                <strong>Ustawy z dnia 10 maja 2018 r. o ochronie danych
                osobowych</strong> (Dz.U. 2019 poz. 1781)
              </li>
              <li>
                <strong>Ustawy z dnia 12 lipca 2024 r. — Prawo komunikacji
                elektronicznej</strong> (Dz.U. 2024 poz. 1221) — w zakresie
                plików cookies
              </li>
              <li>
                <strong>Ustawy z dnia 18 lipca 2002 r. o świadczeniu usług
                drogą elektroniczną</strong> (Dz.U. 2002 nr 144 poz. 1204)
              </li>
            </ul>
          </section>

          {/* 3. Cele i podstawy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Cele, podstawy prawne i okres przechowywania danych
            </h2>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                      Cel przetwarzania
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Podstawa prawna
                    </th>
                    <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                      Okres przechowywania
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Realizacja zamówienia i umowy sprzedaży
                    </td>
                    <td className="px-4 py-3">
                      Art. 6 ust. 1 lit. b RODO — wykonanie umowy
                    </td>
                    <td className="px-4 py-3">
                      Do zakończenia realizacji + 2 lata (rękojmia, art. 568 KC)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Wystawienie faktury, rozliczenia podatkowe
                    </td>
                    <td className="px-4 py-3">
                      Art. 6 ust. 1 lit. c RODO — obowiązek prawny
                    </td>
                    <td className="px-4 py-3">
                      5 lat od końca roku podatkowego (art. 112 ustawy o VAT,
                      art. 86 Ordynacji podatkowej)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Obsługa zapytań ofertowych i korespondencji
                    </td>
                    <td className="px-4 py-3">
                      Art. 6 ust. 1 lit. f RODO — uzasadniony interes
                    </td>
                    <td className="px-4 py-3">
                      Do zakończenia sprawy + 1 rok
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Dochodzenie i obrona roszczeń
                    </td>
                    <td className="px-4 py-3">
                      Art. 6 ust. 1 lit. f RODO — uzasadniony interes
                    </td>
                    <td className="px-4 py-3">
                      6 lat (przedawnienie roszczeń, art. 117 KC)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Analityka i poprawa jakości usług (cookies analityczne)
                    </td>
                    <td className="px-4 py-3">
                      Art. 6 ust. 1 lit. a RODO — zgoda
                    </td>
                    <td className="px-4 py-3">
                      Do wycofania zgody (max 2 lata)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Logi serwera i bezpieczeństwo
                    </td>
                    <td className="px-4 py-3">
                      Art. 6 ust. 1 lit. f RODO — uzasadniony interes
                    </td>
                    <td className="px-4 py-3">Do 12 miesięcy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Zakres danych */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Zakres zbieranych danych
            </h2>
            <p className="text-gray-600 mb-3">
              W zależności od celu przetwarzania zbieramy następujące dane:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Zamówienie:</strong> nazwa firmy, NIP, imię i nazwisko
                osoby kontaktowej, adres e-mail, numer telefonu, adres dostawy
              </li>
              <li>
                <strong>Zapytanie ofertowe / formularz kontaktowy:</strong> imię
                i nazwisko, adres e-mail, numer telefonu, treść wiadomości
              </li>
              <li>
                <strong>Dane techniczne (automatycznie):</strong> adres IP,
                rodzaj przeglądarki, system operacyjny, czas wizyty — na
                podstawie logów serwera
              </li>
            </ul>
            <p className="text-gray-600 mt-3">
              Podanie danych niezbędnych do realizacji zamówienia jest wymogiem
              umownym — bez nich nie jest możliwe złożenie i realizacja
              zamówienia. Podanie pozostałych danych jest dobrowolne.
            </p>
          </section>

          {/* 5. Odbiorcy danych */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Odbiorcy danych
            </h2>
            <p className="text-gray-600 mb-3">
              Państwa dane mogą być udostępniane następującym kategoriom
              odbiorców:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Operator płatności:</strong> Stripe Payments Europe
                Limited (Irlandia/USA) — w zakresie obsługi płatności kartą,
                BLIK i Przelewy24. Stripe posiada certyfikację PCI DSS Level 1
                i przetwarza dane kart płatniczych jako osobny administrator.
              </li>
              <li>
                <strong>Firmy kurierskie:</strong> DPD, DHL, InPost — w
                zakresie realizacji dostawy (imię, nazwisko, adres, telefon)
              </li>
              <li>
                <strong>Dostawca hostingu:</strong> Vercel Inc. (USA) — w
                zakresie przechowywania danych na serwerach
              </li>
              <li>
                <strong>Biuro rachunkowe</strong> — w zakresie obsługi
                księgowej i wystawiania faktur
              </li>
              <li>
                <strong>Organy państwowe</strong> — na żądanie uprawnionych
                organów (UODO, urzędy skarbowe, sądy)
              </li>
            </ul>
          </section>

          {/* 6. Przekazywanie poza EOG */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Przekazywanie danych poza Europejski Obszar Gospodarczy
            </h2>
            <p className="text-gray-600 mb-3">
              W związku z korzystaniem z usług Stripe oraz Vercel, Państwa
              dane mogą być przekazywane do Stanów Zjednoczonych. Transfer
              odbywa się na podstawie:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                Decyzji wykonawczej Komisji Europejskiej w sprawie
                EU-US Data Privacy Framework
              </li>
              <li>
                Standardowych klauzul umownych (SCC) zatwierdzonych decyzją
                Komisji Europejskiej z dnia 4 czerwca 2021 r.
              </li>
            </ul>
          </section>

          {/* 7. Prawa */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Prawa osób, których dane dotyczą
            </h2>
            <p className="text-gray-600 mb-3">
              Na podstawie RODO przysługują Państwu następujące prawa:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Prawo dostępu</strong> (art. 15 RODO) — prawo do
                uzyskania informacji o przetwarzanych danych i otrzymania
                ich kopii
              </li>
              <li>
                <strong>Prawo do sprostowania</strong> (art. 16 RODO) — prawo
                do poprawienia nieprawidłowych lub uzupełnienia niekompletnych
                danych
              </li>
              <li>
                <strong>Prawo do usunięcia</strong> (art. 17 RODO) — prawo do
                żądania usunięcia danych, gdy nie są już niezbędne do celów
                przetwarzania lub cofnięto zgodę. Prawo to nie przysługuje,
                gdy przetwarzanie jest niezbędne do wywiązania się z obowiązku
                prawnego (np. przechowywanie faktur)
              </li>
              <li>
                <strong>Prawo do ograniczenia przetwarzania</strong> (art. 18
                RODO) — np. gdy kwestionujecie Państwo prawidłowość danych
              </li>
              <li>
                <strong>Prawo do przenoszenia danych</strong> (art. 20 RODO)
                — prawo do otrzymania danych w formacie nadającym się do
                odczytu maszynowego (dotyczy danych przetwarzanych na
                podstawie zgody lub umowy)
              </li>
              <li>
                <strong>Prawo sprzeciwu</strong> (art. 21 RODO) — prawo do
                sprzeciwu wobec przetwarzania opartego na uzasadnionym
                interesie administratora, w tym wobec marketingu bezpośredniego
              </li>
              <li>
                <strong>Prawo do cofnięcia zgody</strong> (art. 7 ust. 3
                RODO) — w każdym momencie, bez wpływu na zgodność z prawem
                przetwarzania dokonanego przed cofnięciem
              </li>
            </ul>
            <p className="text-gray-600 mt-3">
              W celu realizacji powyższych praw prosimy o kontakt na adres:{' '}
              <a
                href="mailto:kontakt@takma.com.pl"
                className="text-primary-600 hover:underline"
              >
                kontakt@takma.com.pl
              </a>
              . Odpowiedź zostanie udzielona w ciągu 30 dni.
            </p>
          </section>

          {/* 8. Skarga do UODO */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Prawo do skargi
            </h2>
            <p className="text-gray-600 mb-3">
              Jeżeli uznają Państwo, że przetwarzanie danych narusza przepisy
              RODO, przysługuje Państwu prawo do wniesienia skargi do organu
              nadzorczego:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-700 space-y-1">
              <p className="font-semibold">
                Prezes Urzędu Ochrony Danych Osobowych (UODO)
              </p>
              <p>ul. Stawki 2, 00-193 Warszawa</p>
              <p>
                Strona:{' '}
                <a
                  href="https://uodo.gov.pl"
                  target="_blank"
                  rel="noopener nofollow"
                  className="text-primary-600 hover:underline"
                >
                  uodo.gov.pl
                </a>
              </p>
            </div>
          </section>

          {/* 9. Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Pliki cookies
            </h2>
            <p className="text-gray-600 mb-3">
              Serwis takma.com.pl wykorzystuje pliki cookies (ciasteczka) —
              małe pliki tekstowe zapisywane na urządzeniu użytkownika.
              Podstawą prawną jest art. 399 Prawa komunikacji elektronicznej.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Kategorie plików cookies
            </h3>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                      Kategoria
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Cel
                    </th>
                    <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                      Zgoda wymagana?
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Niezbędne (techniczne)
                    </td>
                    <td className="px-4 py-3">
                      Działanie koszyka, sesja, bezpieczeństwo (CSRF),
                      obsługa płatności Stripe
                    </td>
                    <td className="px-4 py-3">Nie</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Analityczne
                    </td>
                    <td className="px-4 py-3">
                      Statystyki odwiedzin, analiza zachowań użytkowników
                      (Google Analytics)
                    </td>
                    <td className="px-4 py-3">Tak</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Marketingowe
                    </td>
                    <td className="px-4 py-3">
                      Remarketing, reklamy dopasowane do zainteresowań
                    </td>
                    <td className="px-4 py-3">Tak</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Zarządzanie cookies
            </h3>
            <p className="text-gray-600 mb-3">
              Przy pierwszej wizycie na stronie wyświetlany jest baner
              umożliwiający wyrażenie lub odmowę zgody na poszczególne
              kategorie cookies. Zgodę można w każdej chwili zmienić lub
              wycofać.
            </p>
            <p className="text-gray-600">
              Niezależnie od ustawień banera, mogą Państwo zarządzać plikami
              cookies w ustawieniach przeglądarki. Instrukcje dla popularnych
              przeglądarek:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li>
                Google Chrome — Ustawienia &rarr; Prywatność i bezpieczeństwo
                &rarr; Pliki cookie
              </li>
              <li>
                Mozilla Firefox — Ustawienia &rarr; Prywatność i
                bezpieczeństwo &rarr; Pliki cookie
              </li>
              <li>
                Safari — Preferencje &rarr; Prywatność &rarr; Zarządzaj
                danymi witryn
              </li>
              <li>
                Microsoft Edge — Ustawienia &rarr; Pliki cookie i
                uprawnienia witryn
              </li>
            </ul>
          </section>

          {/* 10. Płatności */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. Bezpieczeństwo płatności
            </h2>
            <p className="text-gray-600 mb-3">
              Płatności online obsługuje operator{' '}
              <strong>Stripe Payments Europe Limited</strong> posiadający
              certyfikację PCI DSS Level 1 (najwyższy poziom bezpieczeństwa
              danych kart płatniczych).
            </p>
            <p className="text-gray-600">
              TAKMA <strong>nie przechowuje, nie przetwarza ani nie
              transmituje</strong> danych kart płatniczych — proces ten
              odbywa się wyłącznie na serwerach Stripe. W przypadku płatności
              przelewem (pro forma) dane bankowe klienta przetwarzane są
              wyłącznie w dokumentacji księgowej, zgodnie z obowiązującymi
              przepisami podatkowymi.
            </p>
          </section>

          {/* 11. Profilowanie */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              11. Zautomatyzowane podejmowanie decyzji i profilowanie
            </h2>
            <p className="text-gray-600">
              Administrator nie podejmuje decyzji opartych wyłącznie na
              zautomatyzowanym przetwarzaniu danych, w tym profilowaniu,
              które wywierałyby skutki prawne lub w podobny sposób istotnie
              wpływały na osoby, których dane dotyczą.
            </p>
          </section>

          {/* 12. Zabezpieczenia */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              12. Środki bezpieczeństwa
            </h2>
            <p className="text-gray-600">
              Administrator stosuje odpowiednie środki techniczne i
              organizacyjne zapewniające bezpieczeństwo danych osobowych
              (art. 32 RODO), w tym:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-3">
              <li>
                Szyfrowanie transmisji danych protokołem SSL/TLS (HTTPS)
              </li>
              <li>
                Ograniczenie dostępu do danych do osób upoważnionych
              </li>
              <li>
                Regularne aktualizacje oprogramowania i systemów
              </li>
              <li>
                Korzystanie z certyfikowanych operatorów płatności (Stripe —
                PCI DSS Level 1)
              </li>
            </ul>
          </section>

          {/* 13. Zmiany */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              13. Zmiany polityki prywatności
            </h2>
            <p className="text-gray-600">
              Administrator zastrzega sobie prawo do wprowadzania zmian w
              niniejszej polityce prywatności. O istotnych zmianach
              użytkownicy zostaną poinformowani poprzez komunikat na stronie
              internetowej. Aktualna wersja polityki jest zawsze dostępna pod
              adresem{' '}
              <Link
                href="/polityka-prywatnosci"
                className="text-primary-600 hover:underline"
              >
                takma.com.pl/polityka-prywatnosci
              </Link>
              .
            </p>
          </section>

          {/* 14. Kontakt */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              14. Kontakt w sprawach danych osobowych
            </h2>
            <p className="text-gray-600 mb-3">
              We wszelkich sprawach związanych z przetwarzaniem danych
              osobowych prosimy o kontakt:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                E-mail:{' '}
                <a
                  href="mailto:kontakt@takma.com.pl"
                  className="text-primary-600 hover:underline"
                >
                  kontakt@takma.com.pl
                </a>
              </li>
              <li>Telefon: +48 607 819 688</li>
              <li>Adres: ul. Poświęcka 1a, 51-128 Wrocław</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
