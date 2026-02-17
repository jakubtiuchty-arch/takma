import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Regulamin sklepu | TAKMA',
  description:
    'Regulamin sklepu internetowego takma.com.pl. Warunki sprzedaży B2B, zamówień, dostaw, płatności, gwarancji i reklamacji. TAKMA Tadeusz Tiuchty, Wrocław.',
  robots: 'index, follow',
}

export default function RegulaminPage() {
  return (
    <div className="container-main py-8 lg:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600 transition-colors">
          Strona główna
        </Link>
        <ChevronRightIcon size={16} />
        <span className="text-gray-900 font-medium">Regulamin sklepu</span>
      </nav>

      <div className="max-w-4xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          Regulamin sklepu internetowego
        </h1>
        <p className="text-sm text-gray-500 mb-2">
          Obowiązuje od: 17 lutego 2026 r. &nbsp;|&nbsp; Ostatnia aktualizacja: 17 lutego 2026 r.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Niniejszy regulamin jest dokumentem, o którym mowa w art. 8 ust. 1 pkt 1 ustawy z dnia
          18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2002 nr 144 poz. 1204
          z późn. zm.).
        </p>

        {/* Spis treści */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
          <p className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
            Spis treści
          </p>
          <ol className="text-sm text-primary-600 space-y-1 list-decimal list-inside">
            {[
              ['#par1', 'Definicje'],
              ['#par2', 'Dane Sprzedawcy i kontakt'],
              ['#par3', 'Zakres i charakter działalności — sprzedaż B2B'],
              ['#par4', 'Warunki techniczne korzystania ze Sklepu (art. 8 UŚUDE)'],
              ['#par5', 'Składanie i realizacja zamówień'],
              ['#par6', 'Ceny i warunki płatności'],
              ['#par7', 'Dostawa i koszty dostawy'],
              ['#par8', 'Zawarcie umowy sprzedaży'],
              ['#par9', 'Prawa konsumenta i quasi-konsumentów JDG (art. 12 i 27 UPK)'],
              ['#par10', 'Wzór formularza odstąpienia od umowy'],
              ['#par11', 'Rękojmia za wady'],
              ['#par12', 'Gwarancja producenta'],
              ['#par13', 'Reklamacje — tryb postępowania'],
              ['#par14', 'Ochrona danych osobowych'],
              ['#par15', 'Własność intelektualna'],
              ['#par16', 'Postanowienia końcowe'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="prose prose-gray max-w-none space-y-10">

          {/* § 1 DEFINICJE */}
          <section id="par1">
            <h2 className="text-xl font-semibold text-gray-900 mt-0 mb-4">
              § 1. Definicje
            </h2>
            <p className="text-gray-600 mb-3">
              Użyte w niniejszym Regulaminie pojęcia oznaczają:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2 text-sm">
              <li>
                <strong>Sprzedawca</strong> — TAKMA Tadeusz Tiuchty, ul. Poświęcka 1a,
                51-128 Wrocław, NIP: 9151004377, prowadzący działalność gospodarczą
                wpisaną do Centralnej Ewidencji i Informacji o Działalności Gospodarczej.
              </li>
              <li>
                <strong>Sklep</strong> — serwis internetowy prowadzony przez Sprzedawcę
                pod adresem <strong>takma.com.pl</strong>, za pośrednictwem którego
                Kupujący mogą składać zamówienia na Towary.
              </li>
              <li>
                <strong>Kupujący</strong> — przedsiębiorca w rozumieniu art. 43¹ Kodeksu
                cywilnego, składający zamówienie w Sklepie.
              </li>
              <li>
                <strong>Konsument</strong> — osoba fizyczna dokonująca czynności prawnej
                niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową
                (art. 22¹ KC). Sklep nie prowadzi sprzedaży dla konsumentów — zakupy
                wymagają podania danych firmy i numeru NIP.
              </li>
              <li>
                <strong>Quasi-konsument / Przedsiębiorca na prawach konsumenta</strong>
                — osoba fizyczna prowadząca jednoosobową działalność gospodarczą (JDG),
                zawierająca umowę bezpośrednio związaną z jej działalnością gospodarczą,
                lecz niemającą dla tej osoby charakteru zawodowego, wynikającego
                w szczególności z przedmiotu wykonywanej przez nią działalności
                gospodarczej (art. 38a ustawy z dnia 30 maja 2014 r. o prawach
                konsumenta, Dz.U. 2014 poz. 827 z późn. zm.; art. 385⁵ KC;
                art. 556⁴ KC). Dotyczy zakupów dokonanych od 1 stycznia 2021 r.
              </li>
              <li>
                <strong>Towar</strong> — rzecz ruchoma oferowana w Sklepie (drukarki
                etykiet, terminale mobilne, skanery kodów kreskowych, akcesoria i
                materiały eksploatacyjne).
              </li>
              <li>
                <strong>Zamówienie</strong> — oświadczenie woli Kupującego złożone za
                pośrednictwem Sklepu, zmierzające do zawarcia umowy sprzedaży Towaru.
              </li>
              <li>
                <strong>Umowa sprzedaży</strong> — umowa sprzedaży Towaru zawierana
                przez Sprzedawcę z Kupującym za pośrednictwem Sklepu.
              </li>
              <li>
                <strong>Konto</strong> — indywidualny profil Kupującego w Sklepie.
                Sklep nie wymaga zakładania konta — zamówienia mogą być składane
                bez rejestracji.
              </li>
              <li>
                <strong>Ustawa o prawach konsumenta (UPK)</strong> — ustawa z dnia
                30 maja 2014 r. o prawach konsumenta (Dz.U. 2014 poz. 827 z późn. zm.).
              </li>
              <li>
                <strong>UŚUDE</strong> — ustawa z dnia 18 lipca 2002 r. o świadczeniu
                usług drogą elektroniczną (Dz.U. 2002 nr 144 poz. 1204 z późn. zm.).
              </li>
              <li>
                <strong>KC</strong> — ustawa z dnia 23 kwietnia 1964 r. Kodeks cywilny
                (Dz.U. 1964 nr 16 poz. 93 z późn. zm.).
              </li>
            </ol>
          </section>

          {/* § 2 DANE SPRZEDAWCY */}
          <section id="par2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 2. Dane Sprzedawcy i kontakt
            </h2>
            <p className="text-gray-600 mb-3">
              Sprzedawcą prowadzącym Sklep jest:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-700 space-y-1 mb-4">
              <p className="font-semibold text-gray-900">TAKMA Tadeusz Tiuchty</p>
              <p>ul. Poświęcka 1a, 51-128 Wrocław</p>
              <p>NIP: 9151004377</p>
              <p>REGON: (wpis w CEIDG)</p>
              <p>
                E-mail:{' '}
                <a href="mailto:takma@takma.com.pl" className="text-primary-600 hover:underline">
                  takma@takma.com.pl
                </a>
              </p>
              <p>
                Telefon: <a href="tel:+48607819688" className="text-primary-600 hover:underline">
                  +48 607 819 688
                </a>
              </p>
              <p>Strona internetowa: takma.com.pl</p>
            </div>
            <p className="text-gray-600 text-sm">
              Sprzedawca jest czynnym podatnikiem VAT. Faktury VAT wystawiane są
              na dane podane podczas składania zamówienia.
            </p>
          </section>

          {/* § 3 CHARAKTER SPRZEDAŻY B2B */}
          <section id="par3">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 3. Zakres i charakter działalności — sprzedaż B2B
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2 text-sm">
              <li>
                Sklep prowadzi sprzedaż wyłącznie na rzecz podmiotów prowadzących
                działalność gospodarczą (B2B). Warunkiem złożenia zamówienia jest
                podanie numeru NIP (lub unijnego numeru VAT dla podmiotów zagranicznych).
              </li>
              <li>
                Zakupy dokonywane przez osoby fizyczne prowadzące jednoosobową
                działalność gospodarczą (<strong>JDG</strong>), dla których dana
                umowa <strong>nie posiada charakteru zawodowego</strong> wynikającego
                z przedmiotu prowadzonej działalności (kody PKD), objęte są
                szczególnymi uprawnieniami określonymi w § 9 Regulaminu
                (quasi-konsumenci).
              </li>
              <li>
                Sprzedawca zastrzega sobie prawo do weryfikacji statusu Kupującego
                i odmowy realizacji zamówienia, jeżeli zaistnieją uzasadnione
                wątpliwości co do charakteru transakcji.
              </li>
              <li>
                Informacje o Towarach zamieszczone w Sklepie, w szczególności opisy,
                parametry techniczne i ceny, stanowią zaproszenie do zawarcia umowy
                w rozumieniu art. 71 KC, a nie ofertę w rozumieniu art. 66 KC.
              </li>
            </ol>
          </section>

          {/* § 4 WARUNKI TECHNICZNE — ART. 8 UŚUDE */}
          <section id="par4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 4. Warunki techniczne korzystania ze Sklepu (art. 8 UŚUDE)
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-3 text-sm">
              <li>
                <strong>Wymagania techniczne:</strong> Do korzystania ze Sklepu
                niezbędne jest urządzenie z dostępem do sieci Internet oraz
                przeglądarka internetowa obsługująca JavaScript i pliki cookies
                (Chrome 90+, Firefox 90+, Safari 14+, Edge 90+ lub nowsze).
                Zalecana rozdzielczość ekranu: min. 1024×768 px.
              </li>
              <li>
                <strong>Usługi świadczone drogą elektroniczną:</strong> Sprzedawca
                świadczy drogą elektroniczną następujące usługi nieodpłatne:
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>przeglądanie katalogu produktów i treści informacyjnych Sklepu,</li>
                  <li>wyszukiwanie produktów,</li>
                  <li>składanie zamówień i zapytań ofertowych,</li>
                  <li>kontakt za pośrednictwem formularza kontaktowego,</li>
                  <li>korzystanie z koszyka zakupowego (sesja bez rejestracji).</li>
                </ul>
              </li>
              <li>
                <strong>Zawarcie umowy o świadczenie usług:</strong> Korzystanie
                z Usług jest równoznaczne z zawarciem umowy o świadczenie usług
                drogą elektroniczną na warunkach niniejszego Regulaminu, bez
                konieczności sporządzania odrębnej umowy.
              </li>
              <li>
                <strong>Rozwiązanie umowy o świadczenie usług elektronicznych:</strong>
                Kupujący może w każdej chwili zaprzestać korzystania z usług
                elektronicznych bez ponoszenia jakichkolwiek kosztów. Usługi
                bezterminowe mogą być rozwiązane przez Kupującego w każdym czasie.
              </li>
              <li>
                <strong>Zakaz dostarczania treści bezprawnych:</strong> Kupujący
                zobowiązany jest do korzystania ze Sklepu zgodnie z prawem,
                niniejszym Regulaminem oraz dobrymi obyczajami. W szczególności
                zabronione jest dostarczanie treści o charakterze bezprawnym
                (art. 8 ust. 3 pkt 2 lit. b UŚUDE).
              </li>
              <li>
                <strong>Pliki cookies:</strong> Sklep wykorzystuje pliki cookies
                zgodnie z Polityką Prywatności dostępną pod adresem
                takma.com.pl/polityka-prywatnosci i wymogami ustawy z dnia
                12 lipca 2024 r. — Prawo komunikacji elektronicznej.
              </li>
              <li>
                <strong>Reklamacje na usługi elektroniczne:</strong> Reklamacje
                dotyczące funkcjonowania Sklepu jako usługi elektronicznej należy
                kierować na adres: takma@takma.com.pl. Sprzedawca rozpatruje
                reklamację w terminie 14 dni od jej otrzymania i informuje
                Kupującego o wynikach postępowania reklamacyjnego.
              </li>
              <li>
                <strong>Awarie i przerwy techniczne:</strong> Sprzedawca dołoży
                wszelkich starań, aby Sklep działał w sposób ciągły, jednak
                zastrzega prawo do przerw technicznych niezbędnych do konserwacji,
                aktualizacji lub naprawy Sklepu, o których — w miarę możliwości —
                będzie uprzednio informował.
              </li>
            </ol>
          </section>

          {/* § 5 ZAMÓWIENIA */}
          <section id="par5">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 5. Składanie i realizacja zamówień
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-3 text-sm">
              <li>
                Zamówienia w Sklepie można składać 24 godziny na dobę, 7 dni
                w tygodniu, przez cały rok. Zamówienia złożone poza godzinami
                pracy Sprzedawcy (pon.–pt., godz. 8:00–17:00) realizowane są
                następnego dnia roboczego.
              </li>
              <li>
                W celu złożenia zamówienia Kupujący:
                <ol className="list-decimal pl-4 mt-2 space-y-1" type="a">
                  <li>wybiera Towar i dodaje go do koszyka;</li>
                  <li>przechodzi do formularza zamówienia;</li>
                  <li>podaje dane: nazwa firmy, NIP, adres dostawy, dane
                  kontaktowe (imię, nazwisko, e-mail, telefon);</li>
                  <li>wybiera metodę płatności i dostawy;</li>
                  <li>akceptuje Regulamin i Politykę Prywatności;</li>
                  <li>klika przycisk „Zamawiam i płacę" (lub „Zamawiam —
                  płatność przelewem").</li>
                </ol>
              </li>
              <li>
                Złożenie zamówienia stanowi ofertę zawarcia umowy sprzedaży
                w rozumieniu art. 66 KC.
              </li>
              <li>
                Po złożeniu zamówienia Kupujący otrzymuje na podany adres
                e-mail automatyczne potwierdzenie przyjęcia zamówienia do
                systemu (potwierdzenie techniczne — nie stanowi przyjęcia oferty).
              </li>
              <li>
                Umowa sprzedaży zostaje zawarta z chwilą wysłania przez
                Sprzedawcę wiadomości e-mail potwierdzającej przyjęcie
                zamówienia do realizacji. Treść zawartej umowy utrwalana
                jest w systemie informatycznym Sprzedawcy i przekazywana
                Kupującemu w formie faktury VAT.
              </li>
              <li>
                Sprzedawca zastrzega sobie prawo do odmowy realizacji
                zamówienia lub jego anulowania w przypadku:
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>braku dostępności Towaru w magazynie lub u dostawcy;</li>
                  <li>podania przez Kupującego nieprawdziwych lub niekompletnych danych;</li>
                  <li>oczywistej omyłki cenowej w Sklepie;</li>
                  <li>braku płatności w terminie (dot. zamówień pro forma).</li>
                </ul>
                O anulowaniu zamówienia Kupujący zostanie niezwłocznie
                poinformowany drogą elektroniczną, a ewentualna dokonana
                wpłata zostanie zwrócona w ciągu 5 dni roboczych.
              </li>
              <li>
                Orientacyjny czas realizacji zamówienia (od momentu
                zaksięgowania płatności lub potwierdzenia zamówienia pro forma)
                wynosi <strong>1–5 dni roboczych</strong>, chyba że karta
                produktu wskazuje inaczej. Termin ten może ulec wydłużeniu
                w przypadku produktów dostępnych na zamówienie.
              </li>
            </ol>
          </section>

          {/* § 6 CENY I PŁATNOŚCI */}
          <section id="par6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 6. Ceny i warunki płatności
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-3 text-sm">
              <li>
                Wszystkie ceny podane w Sklepie wyrażone są w złotych polskich
                (PLN) i stanowią ceny <strong>netto</strong> (bez podatku VAT).
                Do ceny netto doliczany jest podatek VAT w obowiązującej
                stawce (podstawowa stawka VAT: 23%). Łączna cena brutto
                wyświetlana jest w koszyku przed złożeniem zamówienia.
              </li>
              <li>
                Ceny nie obejmują kosztów dostawy, które są podawane
                oddzielnie w trakcie składania zamówienia.
              </li>
              <li>
                Sprzedawca zastrzega sobie prawo do zmiany cen Towarów,
                przeprowadzania akcji promocyjnych, udzielania rabatów
                i zawierania indywidualnych umów handlowych. Zmiana ceny
                nie dotyczy zamówień już złożonych i potwierdzonych przez
                Sprzedawcę.
              </li>
              <li>
                <strong>Dostępne metody płatności:</strong>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>
                    <strong>Płatność online (Stripe):</strong> karta płatnicza
                    (Visa, Mastercard), BLIK, Przelewy24 — płatność realizowana
                    jest w momencie składania zamówienia. Operatorem płatności
                    elektronicznych jest Stripe Payments Europe Limited
                    z siedzibą w Irlandii (Grand Canal Street Lower, Grand
                    Canal Dock, Dublin, D02 H210, Irlandia).
                  </li>
                  <li>
                    <strong>Przelew bankowy (faktura pro forma):</strong> po
                    złożeniu zamówienia Sprzedawca wystawia fakturę pro forma
                    z 7-dniowym terminem płatności i danymi do przelewu.
                    Zamówienie realizowane jest po zaksięgowaniu płatności
                    na rachunku Sprzedawcy.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Terminy zapłaty w transakcjach handlowych</strong>
                (ustawa z dnia 8 marca 2013 r. o przeciwdziałaniu nadmiernym
                opóźnieniom w transakcjach handlowych, Dz.U. 2013 poz. 403
                z późn. zm.):
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>
                    Termin płatności na fakturze pro forma wynosi
                    <strong> 7 dni</strong> od daty wystawienia faktury pro forma.
                  </li>
                  <li>
                    W przypadku indywidualnych umów handlowych lub ofert
                    cenowych termin płatności nie może przekroczyć
                    <strong> 30 dni</strong> od daty dostarczenia faktury VAT,
                    chyba że strony pisemnie uzgodnią inaczej (max. 60 dni
                    dla podmiotów innych niż podmioty lecznicze — art. 7
                    ust. 3 ustawy).
                  </li>
                  <li>
                    Po upływie terminu płatności Sprzedawcy przysługują
                    odsetki ustawowe za opóźnienie w transakcjach handlowych
                    (art. 7 ustawy) oraz rekompensata za koszty odzyskiwania
                    należności w wysokości równowartości 40 EUR (art. 10
                    ustawy).
                  </li>
                </ul>
              </li>
              <li>
                Sprzedawca wystawia fakturę VAT i przesyła ją drogą
                elektroniczną (e-mail) lub w formie papierowej dołączonej
                do przesyłki. Akceptacja faktury elektronicznej stanowi
                element procesu zamówienia.
              </li>
            </ol>
          </section>

          {/* § 7 DOSTAWA */}
          <section id="par7">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 7. Dostawa i koszty dostawy
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-3 text-sm">
              <li>
                Dostawa Towarów realizowana jest na terytorium Rzeczypospolitej
                Polskiej. Dostawy zagraniczne wymagają indywidualnej wyceny —
                prosimy o kontakt przed złożeniem zamówienia.
              </li>
              <li>
                <strong>Dostępne formy dostawy:</strong>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>Kurier DPD</li>
                  <li>Kurier DHL</li>
                  <li>Paczkomat InPost</li>
                  <li>Odbiór osobisty pod adresem Sprzedawcy
                  (ul. Poświęcka 1a, 51-128 Wrocław) — po wcześniejszym
                  uzgodnieniu telefonicznym lub mailowym</li>
                </ul>
              </li>
              <li>
                <strong>Koszt dostawy:</strong>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>
                    Standardowa przesyłka kurierska: <strong>25 zł netto</strong>
                    {' '}(+ VAT 23%).
                  </li>
                  <li>
                    <strong>Darmowa dostawa</strong> dla zamówień o wartości
                    co najmniej <strong>500 zł netto</strong>.
                  </li>
                  <li>
                    Dla Towarów wielkogabarytowych lub niestandardowych
                    (np. drukarki przemysłowe) koszt dostawy może być inny —
                    Sprzedawca poinformuje o nim przed potwierdzeniem zamówienia.
                  </li>
                </ul>
              </li>
              <li>
                Kupujący zobowiązany jest do odbioru przesyłki i — w miarę
                możliwości — sprawdzenia stanu Towaru w obecności kuriera.
                W przypadku stwierdzenia uszkodzeń mechanicznych przesyłki
                zaleca się sporządzenie protokołu szkody w obecności kuriera,
                co usprawni postępowanie reklamacyjne.
              </li>
              <li>
                Ryzyko przypadkowej utraty lub uszkodzenia Towaru przechodzi
                na Kupującego z chwilą wydania Towaru kurierowi (art. 548 KC),
                z zastrzeżeniem § 9 ust. 6 dla quasi-konsumentów.
              </li>
              <li>
                Sprzedawca przekazuje Kupującemu numer listu przewozowego
                drogą e-mail po nadaniu przesyłki.
              </li>
            </ol>
          </section>

          {/* § 8 ZAWARCIE UMOWY */}
          <section id="par8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 8. Zawarcie umowy sprzedaży
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-3 text-sm">
              <li>
                Umowa sprzedaży zawierana jest w języku polskim, w formie
                elektronicznej.
              </li>
              <li>
                Treść zawartej umowy jest utrwalana i udostępniana Kupującemu
                poprzez:
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>potwierdzenie zamówienia przesłane na adres e-mail,</li>
                  <li>fakturę VAT dołączoną do przesyłki lub przesłaną e-mailem,</li>
                  <li>niniejszy Regulamin, który jest trwale dostępny na stronie
                  takma.com.pl/regulamin.</li>
                </ul>
              </li>
              <li>
                Sprzedawca rekomenduje, aby Kupujący zapisał lub wydrukowął
                potwierdzenie zamówienia oraz fakturę VAT na potrzeby ewentualnych
                postępowań reklamacyjnych lub gwarancyjnych.
              </li>
              <li>
                Niniejszy Regulamin stanowi integralną część każdej umowy
                sprzedaży zawartej za pośrednictwem Sklepu.
              </li>
            </ol>
          </section>

          {/* § 9 PRAWA KONSUMENTA / QUASI-KONSUMENCI */}
          <section id="par9">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 9. Prawa konsumenta i quasi-konsumentów JDG
              <span className="block text-sm font-normal text-gray-500 mt-1">
                (art. 12, 27–38 UPK; art. 38a UPK w zw. z art. 385⁵, 556⁴ KC;
                obowiązuje od 1 stycznia 2021 r.)
              </span>
            </h2>

            {/* 9.1 Informacja o charakterze sklepu */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 text-sm text-amber-900">
              <strong>Ważna informacja:</strong> Sklep takma.com.pl prowadzi
              sprzedaż wyłącznie B2B. Jeżeli jednak zamówienie zostaje złożone
              przez osobę fizyczną prowadzącą JDG, a nabywany Towar
              <strong> nie jest związany zawodowo z profilem jej działalności</strong>
              {' '}(np. firma świadcząca usługi projektowe kupuje terminal mobilny
              do zarządzania magazynem), wówczas taka osoba traktowana jest jak
              konsument w zakresie wskazanym w niniejszym paragrafie.
            </div>

            <ol className="list-decimal pl-6 text-gray-600 space-y-3 text-sm">
              <li>
                <strong>Obowiązek informacyjny przed zawarciem umowy
                (art. 12 UPK):</strong> Przed złożeniem zamówienia Kupującemu
                będącemu quasi-konsumentem Sprzedawca udostępnia w szczególności:
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>dane identyfikacyjne Sprzedawcy (§ 2 Regulaminu),</li>
                  <li>główne cechy Towaru (karta produktu),</li>
                  <li>łączną cenę brutto z podatkami i kosztami dostawy,</li>
                  <li>sposób i termin płatności oraz dostawy,</li>
                  <li>informację o prawie do odstąpienia od umowy
                  (art. 27 UPK) lub o jego braku,</li>
                  <li>czas trwania umowy i warunkach jej rozwiązania,</li>
                  <li>informację o możliwości skorzystania z pozasądowych
                  sposobów rozpatrywania reklamacji.</li>
                </ul>
              </li>
              <li>
                <strong>Prawo do odstąpienia od umowy (art. 27 UPK):</strong>
                Quasi-konsumentowi przysługuje prawo do odstąpienia od umowy
                zawartej na odległość bez podania przyczyny w terminie
                <strong> 14 dni</strong> od dnia, w którym Kupujący wszedł
                w posiadanie Towaru (lub ostatniego Towaru w przypadku
                zamówienia zbiorczego).
              </li>
              <li>
                <strong>Wykonanie prawa do odstąpienia:</strong> Aby skorzystać
                z prawa do odstąpienia, quasi-konsument musi poinformować
                Sprzedawcę o swojej decyzji w drodze jednoznacznego oświadczenia
                (np. pismo wysłane pocztą lub e-mailem). Quasi-konsument może
                skorzystać ze wzoru formularza odstąpienia od umowy zamieszczonego
                w § 10 Regulaminu, jednak nie jest to obowiązkowe.
              </li>
              <li>
                <strong>Skutki odstąpienia:</strong>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>
                    Sprzedawca zwraca wszystkie dokonane przez quasi-konsumenta
                    płatności, w tym koszty dostawy (z wyjątkiem dodatkowych
                    kosztów wynikających z wybranego przez Kupującego sposobu
                    dostawy innego niż najtańszy zwykły sposób) — niezwłocznie,
                    nie później niż w ciągu <strong>14 dni</strong> od dnia
                    otrzymania oświadczenia o odstąpieniu.
                  </li>
                  <li>
                    Zwrot płatności następuje przy użyciu takich samych metod
                    płatności, jakich użył quasi-konsument, chyba że wyraźnie
                    zgodzi się na inne rozwiązanie.
                  </li>
                  <li>
                    Sprzedawca może wstrzymać się ze zwrotem płatności do
                    chwili otrzymania Towaru lub potwierdzenia jego odesłania.
                  </li>
                  <li>
                    Quasi-konsument odsyła Towar niezwłocznie, nie później
                    niż w ciągu <strong>14 dni</strong> od dnia odstąpienia.
                    Bezpośrednie koszty zwrotu Towaru ponosi Kupujący.
                  </li>
                  <li>
                    Quasi-konsument odpowiada za zmniejszenie wartości Towaru
                    wynikające z korzystania z niego w sposób inny niż
                    konieczny do stwierdzenia jego charakteru, cech i
                    funkcjonowania.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Wyłączenia prawa do odstąpienia (art. 38 UPK):</strong>
                Prawo do odstąpienia nie przysługuje w odniesieniu do:
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>
                    Towaru nieprefabrykowanego, wytworzonego według specyfikacji
                    Kupującego lub służącego zaspokojeniu jego zindywidualizowanych
                    potrzeb (zamówienia specjalne, konfiguracje na zamówienie);
                  </li>
                  <li>
                    Towaru, który po dostarczeniu, ze względu na swój charakter,
                    zostaje nierozłącznie połączony z innymi rzeczami;
                  </li>
                  <li>
                    Materiałów eksploatacyjnych (taśmy termotransferowe, etykiety)
                    z naruszonymi oryginalnymi opakowaniami.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Przejście ryzyka:</strong> W przypadku quasi-konsumenta
                niebezpieczeństwo przypadkowej utraty lub uszkodzenia Towaru
                przechodzi na Kupującego z chwilą objęcia Towaru w posiadanie
                (art. 548 § 1 KC), nie zaś z chwilą wydania przewoźnikowi.
              </li>
              <li>
                <strong>Ochrona przed niedozwolonymi postanowieniami
                umownymi:</strong> W stosunku do quasi-konsumentów stosuje się
                przepisy art. 385¹–385³ KC o niedozwolonych postanowieniach
                umownych (klauzulach abuzywnych).
              </li>
              <li>
                <strong>Pozasądowe metody rozwiązywania sporów:</strong>
                Quasi-konsument ma prawo skorzystać z pozasądowych sposobów
                rozpatrywania reklamacji i dochodzenia roszczeń, w tym:
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>mediacji prowadzonej przez Inspekcję Handlową,</li>
                  <li>stałych polubownych sądów konsumenckich przy Wojewódzkich Inspektoratach Inspekcji Handlowej,</li>
                  <li>Rzecznika Praw Konsumentów lub powiatowego/miejskiego rzecznika konsumentów.</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">
                  Unijna platforma ODR (ec.europa.eu/odr) została trwale zamknięta
                  w dniu 20 lipca 2025 r. i nie jest dostępna do rozwiązywania sporów.
                  Szczegółowe informacje o pozasądowym rozstrzyganiu sporów:{' '}
                  <a href="https://www.uokik.gov.pl" target="_blank" rel="noopener nofollow" className="text-primary-600 hover:underline">uokik.gov.pl</a>.
                </p>
              </li>
            </ol>
          </section>

          {/* § 10 WZÓR FORMULARZA */}
          <section id="par10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 10. Wzór formularza odstąpienia od umowy
              <span className="block text-sm font-normal text-gray-500 mt-1">
                (Załącznik nr 2 do Ustawy o prawach konsumenta)
              </span>
            </h2>
            <p className="text-gray-600 mb-3 text-sm">
              Poniższy formularz należy wypełnić i odesłać wyłącznie w przypadku
              chęci odstąpienia od umowy (dotyczy wyłącznie quasi-konsumentów —
              osób fizycznych prowadzących JDG, o których mowa w § 9).
            </p>
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-5 text-sm text-gray-700 space-y-3">
              <p className="font-semibold text-gray-900 text-center">
                FORMULARZ ODSTĄPIENIA OD UMOWY
              </p>
              <p className="text-xs text-gray-500 text-center">
                (formularz ten należy wypełnić i odesłać tylko w przypadku chęci odstąpienia od umowy)
              </p>
              <div className="border-t border-gray-200 pt-3">
                <p>
                  Adresat: <strong>TAKMA Tadeusz Tiuchty</strong>, ul. Poświęcka 1a,
                  51-128 Wrocław, e-mail: takma@takma.com.pl
                </p>
              </div>
              <div className="border-t border-gray-200 pt-3 space-y-3">
                <p>
                  Ja/My(*) niniejszym informuję/informujemy(*) o moim/naszym(*) odstąpieniu
                  od umowy sprzedaży następujących Towarów(*) / o świadczenie następującej
                  usługi(*):
                </p>
                <p>.....................................................</p>
                <p>
                  Data zawarcia umowy(*)/odbioru(*):{' '}
                  <span className="underline decoration-dotted">
                    .....................................................
                  </span>
                </p>
                <p>
                  Numer zamówienia:{' '}
                  <span className="underline decoration-dotted">
                    .....................................................
                  </span>
                </p>
                <p>
                  Imię i nazwisko / Firma:{' '}
                  <span className="underline decoration-dotted">
                    .....................................................
                  </span>
                </p>
                <p>
                  Adres:{' '}
                  <span className="underline decoration-dotted">
                    .....................................................
                  </span>
                </p>
                <p>
                  Podpis (wymagany tylko w wersji papierowej):{' '}
                  <span className="underline decoration-dotted">
                    .............................
                  </span>
                </p>
                <p>
                  Data:{' '}
                  <span className="underline decoration-dotted">
                    .....................................................
                  </span>
                </p>
              </div>
              <p className="text-xs text-gray-500 border-t border-gray-200 pt-2">
                (*) Niepotrzebne skreślić.
              </p>
            </div>
          </section>

          {/* § 11 RĘKOJMIA */}
          <section id="par11">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 11. Rękojmia za wady
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-3 text-sm">
              <li>
                <strong>Wyłączenie rękojmi wobec przedsiębiorców (art. 558
                § 1 KC):</strong> W stosunku do Kupujących będących
                przedsiębiorcami (z wyłączeniem quasi-konsumentów, o których
                mowa w pkt 3), Sprzedawca wyłącza swoją odpowiedzialność
                z tytułu rękojmi za wady fizyczne i prawne Towaru na podstawie
                art. 558 § 1 KC. Oznacza to, że:
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>
                    Kupującemu przedsiębiorcy (B2B) nie przysługują roszczenia
                    z tytułu rękojmi (wymiana, naprawa, obniżenie ceny, odstąpienie);
                  </li>
                  <li>
                    Ewentualne roszczenia z tytułu wad Towaru powinny być
                    kierowane bezpośrednio do Sprzedawcy w trybie gwarancyjnym
                    (§ 12) lub na podstawie indywidualnych ustaleń.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Dobrowolna polityka reklamacyjna dla B2B:</strong>
                Pomimo wyłączenia rękojmi, Sprzedawca zobowiązuje się do
                rzetelnego rozpatrywania zgłoszeń reklamacyjnych B2B i —
                w miarę możliwości — pomocy w uzyskaniu serwisu gwarancyjnego
                producenta (patrz § 12).
              </li>
              <li>
                <strong>Rękojmia quasi-konsumentów (art. 556⁴ KC):</strong>
                W stosunku do Kupujących będących quasi-konsumentami (§ 1
                pkt 5), wyłączenie rękojmi, o którym mowa w pkt 1
                niniejszego paragrafu, <strong>nie ma zastosowania</strong>.
                Quasi-konsumentom przysługują pełne uprawnienia z tytułu
                rękojmi za wady fizyczne i prawne Towaru na zasadach
                określonych w art. 556–576 KC, w tym:
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>
                    żądanie wymiany Towaru na wolny od wad,
                  </li>
                  <li>
                    żądanie usunięcia wady (naprawy),
                  </li>
                  <li>
                    obniżenia ceny,
                  </li>
                  <li>
                    odstąpienia od umowy — jeżeli wada jest istotna.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Termin odpowiedzialności z rękojmi (quasi-konsumenci):</strong>
                Sprzedawca odpowiada z tytułu rękojmi przez <strong>2 lata</strong>
                {' '}od dnia wydania Towaru. Domniemanie istnienia wady w chwili
                wydania stosuje się przez rok od dnia wydania Towaru.
              </li>
              <li>
                <strong>Zgłoszenie wady (quasi-konsumenci):</strong> Kupujący
                powinien zawiadomić Sprzedawcę o wadzie w ciągu roku od jej
                wykrycia, przesyłając reklamację na adres: takma@takma.com.pl
                z opisem wady, dowodem zakupu i — jeżeli to możliwe —
                dokumentacją fotograficzną.
              </li>
            </ol>
          </section>

          {/* § 12 GWARANCJA */}
          <section id="par12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 12. Gwarancja producenta
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-3 text-sm">
              <li>
                Towary sprzedawane w Sklepie są objęte <strong>gwarancją
                producenta</strong> udzielaną bezpośrednio przez danego
                producenta (zwanego dalej „Gwarantem"). Gwarancja jest
                niezależna od zobowiązań Sprzedawcy. W ofercie Sklepu
                znajdują się produkty następujących producentów:
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li><strong>Zebra Technologies Corp.</strong> — Lincolnshire, Illinois, USA</li>
                  <li><strong>Honeywell International Inc.</strong> — Charlotte, North Carolina, USA</li>
                  <li><strong>Datalogic S.p.A.</strong> — Lippo di Calderara di Reno, Włochy</li>
                  <li><strong>M3 Mobile Co., Ltd.</strong> — Seul, Korea Południowa</li>
                  <li><strong>Newland Digital Technology Co., Ltd.</strong> — Fuzhou, Chiny</li>
                  <li><strong>Godex International Co., Ltd.</strong> — Tajpej, Tajwan</li>
                  <li><strong>Citizen Systems Japan Co., Ltd.</strong> — Tokio, Japonia</li>
                </ul>
              </li>
              <li>
                <strong>Zakres i okres gwarancji</strong> zależy od producenta,
                rodzaju produktu i jest określony w dokumentacji dostarczonej
                wraz z Towarem lub dostępnej na stronie internetowej danego
                Gwaranta. Orientacyjne standardowe okresy gwarancji:
                <div className="overflow-x-auto mt-2">
                  <table className="w-full text-xs border border-gray-200 rounded-lg">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-2 border-b border-gray-200 font-semibold">Producent</th>
                        <th className="text-left p-2 border-b border-gray-200 font-semibold">Urządzenia</th>
                        <th className="text-left p-2 border-b border-gray-200 font-semibold">Akcesoria / baterie</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border-b border-gray-100">Zebra Technologies</td>
                        <td className="p-2 border-b border-gray-100">1–2 lata (zal. od modelu)</td>
                        <td className="p-2 border-b border-gray-100">90 dni</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-gray-100">Honeywell</td>
                        <td className="p-2 border-b border-gray-100">1–2 lata</td>
                        <td className="p-2 border-b border-gray-100">90 dni – 1 rok</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-gray-100">Datalogic</td>
                        <td className="p-2 border-b border-gray-100">1–3 lata</td>
                        <td className="p-2 border-b border-gray-100">90 dni – 1 rok</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-gray-100">M3 Mobile</td>
                        <td className="p-2 border-b border-gray-100">1 rok</td>
                        <td className="p-2 border-b border-gray-100">90 dni</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-gray-100">Newland</td>
                        <td className="p-2 border-b border-gray-100">2 lata</td>
                        <td className="p-2 border-b border-gray-100">1 rok</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-gray-100">Godex</td>
                        <td className="p-2 border-b border-gray-100">2 lata</td>
                        <td className="p-2 border-b border-gray-100">6 mies. – 1 rok</td>
                      </tr>
                      <tr>
                        <td className="p-2">Citizen</td>
                        <td className="p-2">2 lata</td>
                        <td className="p-2">6 mies. – 1 rok</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Powyższe okresy mają charakter orientacyjny. Dokładne
                  warunki gwarancji zawarte są w karcie gwarancyjnej
                  dołączonej do produktu lub na stronie producenta.
                </p>
              </li>
              <li>
                <strong>Serwis gwarancyjny produktów Zebra Technologies:</strong>
                {' '}Sprzedawca jest autoryzowanym partnerem serwisowym
                Zebra Technologies. Serwis gwarancyjny i pogwarancyjny
                urządzeń Zebra realizowany jest przez:
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mt-2">
                  <p className="font-semibold">Serwis Zebry</p>
                  <p>
                    Strona:{' '}
                    <a
                      href="https://www.serwis-zebry.pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      www.serwis-zebry.pl
                    </a>
                  </p>
                </div>
                <p className="mt-2">
                  W przypadku produktów pozostałych producentów (Honeywell,
                  Datalogic, M3 Mobile, Newland, Godex, Citizen) Sprzedawca
                  pośredniczy w przekazaniu sprzętu do autoryzowanego serwisu
                  producenta lub wskazuje bezpośredni kontakt do serwisu.
                </p>
              </li>
              <li>
                <strong>Warunki skorzystania z gwarancji:</strong>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>wada musi ujawnić się w okresie gwarancji;</li>
                  <li>
                    wada nie może wynikać z: uszkodzeń mechanicznych,
                    zalania, zwarcia, nieautoryzowanych modyfikacji,
                    używania niezgodnego z instrukcją obsługi lub
                    materiałów eksploatacyjnych nieodpowiednich dla
                    danego modelu;
                  </li>
                  <li>
                    Kupujący powinien zachować dowód zakupu (faktura VAT)
                    i — jeżeli to możliwe — oryginalne opakowanie.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Rozszerzone umowy serwisowe (opcjonalne):</strong>
                {' '}Dla wybranych produktów Sprzedawca oferuje możliwość
                zakupu rozszerzonych umów serwisowych producenta (np. Zebra
                OneCare Essential/Select, Honeywell Service Plans, Datalogic
                Easeofcare), które przedłużają standardową gwarancję
                i zapewniają priorytetowe wsparcie techniczne. Szczegóły
                dostępne na stronie produktu lub po kontakcie ze Sprzedawcą.
              </li>
              <li>
                Gwarancja producenta nie wyłącza, nie ogranicza ani nie
                zawiesza uprawnień quasi-konsumenta wynikających z przepisów
                o rękojmi za wady rzeczy sprzedanej (art. 577 § 2 KC).
              </li>
            </ol>
          </section>

          {/* § 13 REKLAMACJE */}
          <section id="par13">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 13. Reklamacje — tryb postępowania
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-3 text-sm">
              <li>
                Reklamacje dotyczące Towarów lub realizacji zamówień należy
                kierować do Sprzedawcy drogą elektroniczną na adres:
                <strong> takma@takma.com.pl</strong> lub pisemnie na adres
                siedziby Sprzedawcy.
              </li>
              <li>
                <strong>Treść zgłoszenia reklamacyjnego powinna zawierać:</strong>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>imię i nazwisko / nazwę firmy Kupującego,</li>
                  <li>numer zamówienia lub numer faktury VAT,</li>
                  <li>opis stwierdzonej wady lub niezgodności,</li>
                  <li>żądanie (naprawa, wymiana, obniżenie ceny, zwrot) —
                  dotyczy quasi-konsumentów,</li>
                  <li>datę stwierdzenia wady,</li>
                  <li>dokumentację fotograficzną (jeśli dotyczy).</li>
                </ul>
              </li>
              <li>
                <strong>Termin rozpatrzenia reklamacji:</strong>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>
                    <strong>Quasi-konsumenci:</strong> Sprzedawca ustosunkuje
                    się do reklamacji w terminie <strong>14 dni</strong> od
                    dnia jej otrzymania (art. 561⁵ KC). Brak odpowiedzi
                    w tym terminie oznacza uznanie reklamacji.
                  </li>
                  <li>
                    <strong>Przedsiębiorcy B2B:</strong> Sprzedawca rozpatruje
                    reklamację w terminie do 30 dni roboczych.
                  </li>
                </ul>
              </li>
              <li>
                O sposobie rozpatrzenia reklamacji Kupujący zostanie
                poinformowany drogą elektroniczną lub pisemnie.
              </li>
              <li>
                W przypadku konieczności odesłania Towaru do naprawy lub
                wymiany, Kupujący zostanie poinformowany o dalszym trybie
                postępowania. Koszty przesyłki reklamacyjnej do Sprzedawcy
                ponosi Kupujący; Sprzedawca pokrywa koszty odesłania
                naprawionego lub wymienionego Towaru.
              </li>
            </ol>
          </section>

          {/* § 14 DANE OSOBOWE */}
          <section id="par14">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 14. Ochrona danych osobowych
            </h2>
            <p className="text-gray-600 text-sm">
              Zasady przetwarzania danych osobowych przez Sprzedawcę określa
              odrębna Polityka Prywatności dostępna pod adresem:{' '}
              <Link href="/polityka-prywatnosci" className="text-primary-600 hover:underline">
                takma.com.pl/polityka-prywatnosci
              </Link>
              . Polityka Prywatności stanowi integralną część niniejszego
              Regulaminu w zakresie dotyczącym przetwarzania danych osobowych
              Kupujących. Administratorem danych jest Sprzedawca (§ 2).
            </p>
          </section>

          {/* § 15 WŁASNOŚĆ INTELEKTUALNA */}
          <section id="par15">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 15. Własność intelektualna
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-3 text-sm">
              <li>
                Wszelkie materiały zamieszczone w Sklepie, w szczególności
                teksty, grafiki, zdjęcia, logotypy, kod źródłowy, są chronione
                przepisami ustawy z dnia 4 lutego 1994 r. o prawie autorskim
                i prawach pokrewnych (Dz.U. 2022 poz. 2509) oraz przepisami
                o znakach towarowych.
              </li>
              <li>
                Logotypy, nazwy i znaki towarowe Zebra Technologies, jak
                również nazwy produktów Zebra, są zastrzeżonymi znakami
                towarowymi Zebra Technologies Corp. lub jej podmiotów
                stowarzyszonych. Ich użycie w Sklepie następuje wyłącznie
                w celach informacyjno-handlowych jako autoryzowanego dystrybutora.
              </li>
              <li>
                Kupujący nie jest uprawniony do kopiowania, rozpowszechniania,
                modyfikowania ani wykorzystywania materiałów zamieszczonych
                w Sklepie bez uprzedniej pisemnej zgody Sprzedawcy.
              </li>
            </ol>
          </section>

          {/* § 16 POSTANOWIENIA KOŃCOWE */}
          <section id="par16">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              § 16. Postanowienia końcowe
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-3 text-sm">
              <li>
                <strong>Prawo właściwe:</strong> Do wszelkich stosunków prawnych
                wynikających z niniejszego Regulaminu i umów sprzedaży zawieranych
                za pośrednictwem Sklepu stosuje się prawo polskie, w szczególności
                Kodeks cywilny (KC), Ustawa o prawach konsumenta (UPK), Ustawa
                o świadczeniu usług drogą elektroniczną (UŚUDE) oraz Ustawa
                o przeciwdziałaniu nadmiernym opóźnieniom w transakcjach
                handlowych.
              </li>
              <li>
                <strong>Właściwość sądu:</strong>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>
                    Spory pomiędzy Sprzedawcą a Kupującym będącym
                    <strong> przedsiębiorcą (B2B)</strong> — z wyłączeniem
                    quasi-konsumentów — rozstrzygane będą przez sąd powszechny
                    właściwy dla siedziby Sprzedawcy (Wrocław).
                  </li>
                  <li>
                    Spory z udziałem <strong>quasi-konsumentów</strong> (§ 1
                    pkt 5) rozstrzygane są przez sąd właściwy według przepisów
                    ogólnych KC (art. 27 i nast. KPC), tj. sąd właściwy
                    dla miejsca zamieszkania lub siedziby pozwanego albo,
                    według wyboru powoda, sąd właściwy dla miejsca wykonania
                    umowy lub miejsca zamieszkania Kupującego.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Język:</strong> Niniejszy Regulamin sporządzony jest
                w języku polskim, który jest jedynym językiem wiążącym strony.
              </li>
              <li>
                <strong>Rozdzielność postanowień:</strong> Jeżeli jakiekolwiek
                postanowienie niniejszego Regulaminu okaże się nieważne lub
                bezskuteczne, nie wpływa to na ważność pozostałych postanowień.
                W miejsce nieważnego postanowienia stosuje się przepisy prawa
                powszechnie obowiązującego.
              </li>
              <li>
                <strong>Zmiana Regulaminu:</strong> Sprzedawca zastrzega sobie
                prawo do zmiany niniejszego Regulaminu z uzasadnionych przyczyn,
                w szczególności w przypadku:
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>zmian przepisów prawa powszechnie obowiązującego,</li>
                  <li>zmian w ofercie produktowej lub metodach płatności,</li>
                  <li>orzeczeń sądowych lub decyzji organów regulacyjnych,</li>
                  <li>zmian technicznych w funkcjonowaniu Sklepu.</li>
                </ul>
                O zmianie Regulaminu Sprzedawca poinformuje Kupujących poprzez
                zamieszczenie nowej wersji na stronie takma.com.pl/regulamin
                z podaniem daty wejścia w życie. Zmiana Regulaminu nie dotyczy
                zamówień złożonych przed datą jej wejścia w życie.
              </li>
              <li>
                <strong>Archiwizacja:</strong> Poprzednie wersje Regulaminu
                dostępne są na żądanie Kupującego, przesłane na adres
                takma@takma.com.pl.
              </li>
              <li>
                Niniejszy Regulamin wchodzi w życie z dniem <strong>17 lutego 2026 r.</strong>
              </li>
            </ol>

            {/* Podstawy prawne */}
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-500 space-y-1">
              <p className="font-semibold text-gray-600 mb-2">Podstawy prawne niniejszego Regulaminu:</p>
              <ul className="space-y-1">
                <li>Ustawa z dnia 23 kwietnia 1964 r. — Kodeks cywilny (Dz.U. 2023 poz. 1610 t.j.)</li>
                <li>Ustawa z dnia 30 maja 2014 r. o prawach konsumenta (Dz.U. 2023 poz. 2759 t.j.)</li>
                <li>Ustawa z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2020 poz. 344 t.j.)</li>
                <li>Ustawa z dnia 8 marca 2013 r. o przeciwdziałaniu nadmiernym opóźnieniom w transakcjach handlowych (Dz.U. 2023 poz. 1790 t.j.)</li>
                <li>Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO)</li>
                <li>Ustawa z dnia 12 lipca 2024 r. — Prawo komunikacji elektronicznej (Dz.U. 2024 poz. 1221)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
