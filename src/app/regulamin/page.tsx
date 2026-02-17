import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Regulamin sklepu | TAKMA',
  description:
    'Regulamin sklepu internetowego takma.com.pl. Warunki sprzedaży B2B, zamówień, dostaw, płatności, gwarancji i reklamacji. TAKMA Tadeusz Tiuchty, Wrocław.',
  robots: 'index, follow',
}

/* Inline SVG icons (no lucide-react dependency) */
function FileTextIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  )
}
function BookIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  )
}
function BuildingIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  )
}
function ShoppingCartIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  )
}
function CreditCardIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>
  )
}
function TruckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-2.25 0h-2.25m2.25 0v4.5m0-4.5h6.75" />
    </svg>
  )
}
function ShieldIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  )
}
function WrenchIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437" />
    </svg>
  )
}
function ScaleIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
    </svg>
  )
}
function UserIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  )
}
function ChevronRightSm() {
  return (
    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  )
}
function ArrowLeftIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  )
}

function SectionHeading({ icon, iconBg, title, id }: { icon: React.ReactNode; iconBg: string; title: string; id?: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <h2 id={id} className="text-xl font-bold text-gray-900 m-0">{title}</h2>
    </div>
  )
}

export default function RegulaminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600 transition-colors">Strona główna</Link>
            <ChevronRightSm />
            <span className="text-gray-900 font-medium">Regulamin sklepu</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeftIcon />
            Powrót do strony głównej
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
              <FileTextIcon />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Regulamin sklepu internetowego</h1>
              <p className="text-gray-400 mt-1">Ostatnia aktualizacja: 17 lutego 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Wstęp */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-gray-600 m-0">
            Niniejszy regulamin jest dokumentem, o którym mowa w art. 8 ust. 1 pkt 1 ustawy z dnia
            18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2002 nr 144 poz. 1204
            z późn. zm.). Określa zasady korzystania ze sklepu internetowego <strong>takma.com.pl</strong>,
            prowadzonego przez firmę TAKMA.
          </p>
        </div>

        {/* Spis treści */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-10">
          <h2 className="font-semibold text-gray-900 mb-3">Spis treści</h2>
          <ol className="grid sm:grid-cols-2 gap-2 text-sm text-blue-700">
            {[
              ['par1', 'Definicje'],
              ['par2', 'Dane Sprzedawcy i kontakt'],
              ['par3', 'Zakres i charakter działalności — sprzedaż B2B'],
              ['par4', 'Warunki techniczne (art. 8 UŚUDE)'],
              ['par5', 'Składanie i realizacja zamówień'],
              ['par6', 'Ceny i warunki płatności'],
              ['par7', 'Dostawa i koszty dostawy'],
              ['par8', 'Zawarcie umowy sprzedaży'],
              ['par9', 'Prawa konsumenta i quasi-konsumentów'],
              ['par10', 'Wzór formularza odstąpienia'],
              ['par11', 'Rękojmia za wady'],
              ['par12', 'Gwarancja producenta'],
              ['par13', 'Reklamacje — tryb postępowania'],
              ['par14', 'Ochrona danych osobowych'],
              ['par15', 'Własność intelektualna'],
              ['par16', 'Postanowienia końcowe'],
            ].map(([id, label], i) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:underline">{i + 1}. {label}</a>
              </li>
            ))}
          </ol>
        </div>

        <div className="prose prose-gray max-w-none">

          {/* § 1 DEFINICJE */}
          <section id="par1" className="mb-10">
            <SectionHeading
              icon={<BookIcon className="text-blue-600" />}
              iconBg="bg-blue-100"
              title="§ 1. Definicje"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Użyte w niniejszym Regulaminie pojęcia oznaczają:</p>
              <ol className="list-decimal pl-6 space-y-2">
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
                  {' '}— osoba fizyczna prowadząca jednoosobową działalność gospodarczą (JDG),
                  zawierająca umowę bezpośrednio związaną z jej działalnością gospodarczą,
                  lecz niemającą dla tej osoby charakteru zawodowego, wynikającego
                  w szczególności z przedmiotu wykonywanej przez nią działalności
                  gospodarczej (art. 38a UPK; art. 385⁵ KC; art. 556⁴ KC).
                  Dotyczy zakupów dokonanych od 1 stycznia 2021 r.
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
                  <strong>UPK</strong> — ustawa z dnia 30 maja 2014 r. o prawach
                  konsumenta (Dz.U. 2014 poz. 827 z późn. zm.).
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
            </div>
          </section>

          {/* § 2 DANE SPRZEDAWCY */}
          <section id="par2" className="mb-10">
            <SectionHeading
              icon={<BuildingIcon className="text-gray-600" />}
              iconBg="bg-gray-100"
              title="§ 2. Dane Sprzedawcy i kontakt"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Sprzedawcą prowadzącym Sklep jest:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-1">
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
                  Telefon:{' '}
                  <a href="tel:+48607819688" className="text-primary-600 hover:underline">
                    +48 607 819 688
                  </a>
                </p>
                <p>Strona internetowa: takma.com.pl</p>
              </div>
              <p>
                Sprzedawca jest czynnym podatnikiem VAT. Faktury VAT wystawiane są
                na dane podane podczas składania zamówienia.
              </p>
            </div>
          </section>

          {/* § 3 CHARAKTER SPRZEDAŻY B2B */}
          <section id="par3" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              § 3. Zakres i charakter działalności — sprzedaż B2B
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>3.1. Sklep prowadzi sprzedaż wyłącznie na rzecz podmiotów prowadzących
                działalność gospodarczą (B2B). Warunkiem złożenia zamówienia jest
                podanie numeru NIP (lub unijnego numeru VAT dla podmiotów zagranicznych).</p>
              <p>3.2. Zakupy dokonywane przez osoby fizyczne prowadzące jednoosobową
                działalność gospodarczą (<strong>JDG</strong>), dla których dana
                umowa <strong>nie posiada charakteru zawodowego</strong> wynikającego
                z przedmiotu prowadzonej działalności (kody PKD), objęte są
                szczególnymi uprawnieniami określonymi w § 9 Regulaminu
                (quasi-konsumenci).</p>
              <p>3.3. Sprzedawca zastrzega sobie prawo do weryfikacji statusu Kupującego
                i odmowy realizacji zamówienia, jeżeli zaistnieją uzasadnione
                wątpliwości co do charakteru transakcji.</p>
              <p>3.4. Informacje o Towarach zamieszczone w Sklepie, w szczególności opisy,
                parametry techniczne i ceny, stanowią zaproszenie do zawarcia umowy
                w rozumieniu art. 71 KC, a nie ofertę w rozumieniu art. 66 KC.</p>
            </div>
          </section>

          {/* § 4 WARUNKI TECHNICZNE */}
          <section id="par4" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              § 4. Warunki techniczne korzystania ze Sklepu (art. 8 UŚUDE)
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>4.1. <strong>Wymagania techniczne:</strong> Do korzystania ze Sklepu
                niezbędne jest urządzenie z dostępem do sieci Internet oraz
                przeglądarka internetowa obsługująca JavaScript i pliki cookies
                (Chrome 90+, Firefox 90+, Safari 14+, Edge 90+ lub nowsze).
                Zalecana rozdzielczość ekranu: min. 1024×768 px.</p>
              <p>4.2. <strong>Usługi świadczone drogą elektroniczną:</strong> Sprzedawca
                świadczy drogą elektroniczną następujące usługi nieodpłatne:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>przeglądanie katalogu produktów i treści informacyjnych Sklepu,</li>
                <li>wyszukiwanie produktów,</li>
                <li>składanie zamówień i zapytań ofertowych,</li>
                <li>kontakt za pośrednictwem formularza kontaktowego,</li>
                <li>korzystanie z koszyka zakupowego (sesja bez rejestracji).</li>
              </ul>
              <p>4.3. <strong>Zawarcie umowy o świadczenie usług:</strong> Korzystanie
                z Usług jest równoznaczne z zawarciem umowy o świadczenie usług
                drogą elektroniczną na warunkach niniejszego Regulaminu, bez
                konieczności sporządzania odrębnej umowy.</p>
              <p>4.4. <strong>Rozwiązanie umowy:</strong> Kupujący może w każdej chwili
                zaprzestać korzystania z usług elektronicznych bez ponoszenia
                jakichkolwiek kosztów.</p>
              <p>4.5. <strong>Zakaz dostarczania treści bezprawnych:</strong> Kupujący
                zobowiązany jest do korzystania ze Sklepu zgodnie z prawem,
                niniejszym Regulaminem oraz dobrymi obyczajami (art. 8 ust. 3 pkt 2 lit. b UŚUDE).</p>
              <p>4.6. <strong>Pliki cookies:</strong> Sklep wykorzystuje pliki cookies
                zgodnie z{' '}
                <Link href="/polityka-prywatnosci" className="text-primary-600 hover:underline">Polityką Prywatności</Link>
                {' '}i wymogami ustawy z dnia 12 lipca 2024 r. — Prawo komunikacji elektronicznej.</p>
              <p>4.7. <strong>Reklamacje na usługi elektroniczne:</strong> Reklamacje
                dotyczące funkcjonowania Sklepu należy kierować na adres: takma@takma.com.pl.
                Sprzedawca rozpatruje reklamację w terminie 14 dni od jej otrzymania.</p>
              <p>4.8. <strong>Awarie i przerwy techniczne:</strong> Sprzedawca dołoży
                wszelkich starań, aby Sklep działał w sposób ciągły, jednak zastrzega
                prawo do przerw technicznych niezbędnych do konserwacji, aktualizacji
                lub naprawy Sklepu.</p>
            </div>
          </section>

          {/* § 5 ZAMÓWIENIA */}
          <section id="par5" className="mb-10">
            <SectionHeading
              icon={<ShoppingCartIcon className="text-blue-600" />}
              iconBg="bg-blue-100"
              title="§ 5. Składanie i realizacja zamówień"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>5.1. Zamówienia w Sklepie można składać 24 godziny na dobę, 7 dni
                w tygodniu. Zamówienia złożone poza godzinami pracy Sprzedawcy
                (pon.–pt., godz. 8:00–17:00) realizowane są następnego dnia roboczego.</p>
              <p>5.2. W celu złożenia zamówienia Kupujący:</p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>wybiera Towar i dodaje go do koszyka;</li>
                <li>przechodzi do formularza zamówienia;</li>
                <li>podaje dane: nazwa firmy, NIP, adres dostawy, dane kontaktowe;</li>
                <li>wybiera metodę płatności i dostawy;</li>
                <li>akceptuje Regulamin i Politykę Prywatności;</li>
                <li>klika przycisk „Zamawiam i płacę" (lub „Zamawiam — płatność przelewem").</li>
              </ol>
              <p>5.3. Złożenie zamówienia stanowi ofertę zawarcia umowy sprzedaży (art. 66 KC).</p>
              <p>5.4. Po złożeniu zamówienia Kupujący otrzymuje automatyczne potwierdzenie
                przyjęcia zamówienia (potwierdzenie techniczne — nie stanowi przyjęcia oferty).</p>
              <p>5.5. Umowa sprzedaży zostaje zawarta z chwilą wysłania potwierdzenia
                zamówienia do realizacji. Treść umowy utrwalana jest w systemie
                informatycznym Sprzedawcy i przekazywana Kupującemu w formie faktury VAT.</p>
              <p>5.6. Sprzedawca zastrzega sobie prawo do odmowy realizacji zamówienia w przypadku:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>braku dostępności Towaru w magazynie lub u dostawcy;</li>
                <li>podania nieprawdziwych lub niekompletnych danych;</li>
                <li>oczywistej omyłki cenowej w Sklepie;</li>
                <li>braku płatności w terminie (dot. zamówień pro forma).</li>
              </ul>
              <p>5.7. Orientacyjny czas realizacji zamówienia wynosi <strong>1–5 dni roboczych</strong>,
                chyba że karta produktu wskazuje inaczej.</p>
            </div>
          </section>

          {/* § 6 CENY I PŁATNOŚCI */}
          <section id="par6" className="mb-10">
            <SectionHeading
              icon={<CreditCardIcon className="text-green-600" />}
              iconBg="bg-green-100"
              title="§ 6. Ceny i warunki płatności"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>6.1. Wszystkie ceny podane w Sklepie wyrażone są w złotych polskich
                (PLN) i stanowią ceny <strong>netto</strong> (bez podatku VAT).
                Do ceny netto doliczany jest podatek VAT 23%. Łączna cena brutto
                wyświetlana jest w koszyku przed złożeniem zamówienia.</p>
              <p>6.2. Ceny nie obejmują kosztów dostawy, które są podawane
                oddzielnie w trakcie składania zamówienia.</p>
              <p>6.3. Sprzedawca zastrzega sobie prawo do zmiany cen Towarów,
                przeprowadzania akcji promocyjnych i udzielania rabatów.
                Zmiana ceny nie dotyczy zamówień już złożonych i potwierdzonych.</p>
              <p>6.4. <strong>Dostępne metody płatności:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Płatność online (Stripe):</strong> karta płatnicza (Visa, Mastercard),
                  BLIK, Przelewy24 — płatność realizowana jest w momencie składania zamówienia.
                  Operatorem płatności jest Stripe Payments Europe Limited (Irlandia).</li>
                <li><strong>Przelew bankowy (faktura pro forma):</strong> po złożeniu zamówienia
                  Sprzedawca wystawia fakturę pro forma z 7-dniowym terminem płatności.
                  Zamówienie realizowane jest po zaksięgowaniu płatności.</li>
              </ul>
              <p>6.5. <strong>Terminy zapłaty w transakcjach handlowych</strong>
                (ustawa z dnia 8 marca 2013 r. o przeciwdziałaniu nadmiernym
                opóźnieniom):</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Termin płatności pro forma: <strong>7 dni</strong> od daty wystawienia.</li>
                <li>W przypadku indywidualnych umów: max. <strong>30 dni</strong> od dostarczenia faktury
                  (max. 60 dni za pisemną zgodą stron).</li>
                <li>Po upływie terminu przysługują odsetki ustawowe za opóźnienie w transakcjach
                  handlowych oraz rekompensata 40 EUR (art. 10 ustawy).</li>
              </ul>
              <p>6.6. Sprzedawca wystawia fakturę VAT i przesyła ją drogą elektroniczną
                lub w formie papierowej dołączonej do przesyłki.</p>
            </div>
          </section>

          {/* § 7 DOSTAWA */}
          <section id="par7" className="mb-10">
            <SectionHeading
              icon={<TruckIcon className="text-blue-600" />}
              iconBg="bg-blue-100"
              title="§ 7. Dostawa i koszty dostawy"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>7.1. Dostawa Towarów realizowana jest na terytorium Rzeczypospolitej
                Polskiej. Dostawy zagraniczne wymagają indywidualnej wyceny.</p>
              <p>7.2. <strong>Dostępne formy dostawy:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Kurier DPD</li>
                <li>Kurier DHL</li>
                <li>Paczkomat InPost</li>
                <li>Odbiór osobisty (ul. Poświęcka 1a, 51-128 Wrocław) — po wcześniejszym
                  uzgodnieniu telefonicznym lub mailowym</li>
              </ul>
              <p>7.3. <strong>Koszt dostawy:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Standardowa przesyłka kurierska: <strong>25 zł netto</strong> (+ VAT 23%).</li>
                <li><strong>Darmowa dostawa</strong> dla zamówień od <strong>500 zł netto</strong>.</li>
                <li>Dla Towarów wielkogabarytowych koszt dostawy może być inny —
                  Sprzedawca poinformuje przed potwierdzeniem zamówienia.</li>
              </ul>
              <p>7.4. Kupujący zobowiązany jest do odbioru przesyłki i — w miarę
                możliwości — sprawdzenia stanu Towaru w obecności kuriera.
                Zaleca się sporządzenie protokołu szkody w przypadku uszkodzeń.</p>
              <p>7.5. Ryzyko przypadkowej utraty lub uszkodzenia Towaru przechodzi
                na Kupującego z chwilą wydania Towaru kurierowi (art. 548 KC),
                z zastrzeżeniem § 9 ust. 6 dla quasi-konsumentów.</p>
              <p>7.6. Sprzedawca przekazuje numer listu przewozowego drogą e-mail
                po nadaniu przesyłki.</p>
            </div>
          </section>

          {/* § 8 ZAWARCIE UMOWY */}
          <section id="par8" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              § 8. Zawarcie umowy sprzedaży
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>8.1. Umowa sprzedaży zawierana jest w języku polskim, w formie elektronicznej.</p>
              <p>8.2. Treść zawartej umowy jest utrwalana i udostępniana Kupującemu poprzez:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>potwierdzenie zamówienia przesłane na adres e-mail,</li>
                <li>fakturę VAT dołączoną do przesyłki lub przesłaną e-mailem,</li>
                <li>niniejszy Regulamin, dostępny na stronie takma.com.pl/regulamin.</li>
              </ul>
              <p>8.3. Sprzedawca rekomenduje zapisanie lub wydrukowanie potwierdzenia
                zamówienia oraz faktury VAT na potrzeby ewentualnych postępowań
                reklamacyjnych lub gwarancyjnych.</p>
              <p>8.4. Niniejszy Regulamin stanowi integralną część każdej umowy
                sprzedaży zawartej za pośrednictwem Sklepu.</p>
            </div>
          </section>

          {/* § 9 PRAWA KONSUMENTA / QUASI-KONSUMENCI */}
          <section id="par9" className="mb-10">
            <SectionHeading
              icon={<UserIcon className="text-amber-600" />}
              iconBg="bg-amber-100"
              title="§ 9. Prawa konsumenta i quasi-konsumentów JDG"
            />
            <p className="text-xs text-gray-500 -mt-2 mb-4">
              (art. 12, 27–38 UPK; art. 38a UPK w zw. z art. 385⁵, 556⁴ KC; obowiązuje od 1 stycznia 2021 r.)
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 text-sm text-amber-900">
              <strong>Ważna informacja:</strong> Sklep takma.com.pl prowadzi
              sprzedaż wyłącznie B2B. Jeżeli jednak zamówienie zostaje złożone
              przez osobę fizyczną prowadzącą JDG, a nabywany Towar
              <strong> nie jest związany zawodowo z profilem jej działalności</strong>
              {' '}(np. firma świadcząca usługi projektowe kupuje terminal mobilny
              do zarządzania magazynem), wówczas taka osoba traktowana jest jak
              konsument w zakresie wskazanym w niniejszym paragrafie.
            </div>

            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>9.1. <strong>Obowiązek informacyjny (art. 12 UPK):</strong> Przed
                złożeniem zamówienia quasi-konsumentowi Sprzedawca udostępnia:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>dane identyfikacyjne Sprzedawcy (§ 2),</li>
                <li>główne cechy Towaru (karta produktu),</li>
                <li>łączną cenę brutto z podatkami i kosztami dostawy,</li>
                <li>sposób i termin płatności oraz dostawy,</li>
                <li>informację o prawie do odstąpienia od umowy (art. 27 UPK),</li>
                <li>informację o pozasądowych sposobach rozpatrywania reklamacji.</li>
              </ul>
              <p>9.2. <strong>Prawo do odstąpienia (art. 27 UPK):</strong> Quasi-konsumentowi
                przysługuje prawo do odstąpienia od umowy bez podania przyczyny w terminie
                <strong> 14 dni</strong> od dnia wejścia w posiadanie Towaru.</p>
              <p>9.3. <strong>Wykonanie prawa do odstąpienia:</strong> Quasi-konsument
                musi poinformować Sprzedawcę jednoznacznym oświadczeniem (pismo, e-mail).
                Może skorzystać ze wzoru formularza z § 10, jednak nie jest to obowiązkowe.</p>
              <p>9.4. <strong>Skutki odstąpienia:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Sprzedawca zwraca wszystkie płatności, w tym koszty dostawy (z wyjątkiem
                  dodatkowych kosztów wynikających z wyboru droższego sposobu dostawy) —
                  w ciągu <strong>14 dni</strong> od otrzymania oświadczenia.</li>
                <li>Zwrot następuje przy użyciu tych samych metod płatności.</li>
                <li>Sprzedawca może wstrzymać się ze zwrotem do chwili otrzymania Towaru.</li>
                <li>Quasi-konsument odsyła Towar w ciągu <strong>14 dni</strong> od dnia
                  odstąpienia. Koszty zwrotu ponosi Kupujący.</li>
                <li>Quasi-konsument odpowiada za zmniejszenie wartości Towaru wynikające
                  z korzystania z niego ponad miarę konieczną do stwierdzenia jego charakteru.</li>
              </ul>
              <p>9.5. <strong>Wyłączenia prawa do odstąpienia (art. 38 UPK):</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Towar nieprefabrykowany, wytworzony na zamówienie;</li>
                <li>Towar po dostarczeniu nierozłącznie połączony z innymi rzeczami;</li>
                <li>Materiały eksploatacyjne z naruszonymi oryginalnymi opakowaniami.</li>
              </ul>
              <p>9.6. <strong>Przejście ryzyka:</strong> W przypadku quasi-konsumenta
                ryzyko utraty lub uszkodzenia przechodzi z chwilą objęcia Towaru w posiadanie
                (art. 548 § 1 KC), nie zaś z chwilą wydania przewoźnikowi.</p>
              <p>9.7. <strong>Ochrona przed klauzulami abuzywnymi:</strong> W stosunku
                do quasi-konsumentów stosuje się przepisy art. 385¹–385³ KC.</p>
              <p>9.8. <strong>Pozasądowe metody rozwiązywania sporów:</strong> Quasi-konsument
                może skorzystać z:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>mediacji Inspekcji Handlowej,</li>
                <li>stałych polubownych sądów konsumenckich przy WIIH,</li>
                <li>Rzecznika Praw Konsumentów.</li>
              </ul>
              <p className="text-xs text-gray-500">
                Unijna platforma ODR (ec.europa.eu/odr) została trwale zamknięta
                w dniu 20 lipca 2025 r. Szczegóły o pozasądowym rozstrzyganiu sporów:{' '}
                <a href="https://www.uokik.gov.pl" target="_blank" rel="noopener nofollow" className="text-primary-600 hover:underline">uokik.gov.pl</a>.
              </p>
            </div>
          </section>

          {/* § 10 WZÓR FORMULARZA */}
          <section id="par10" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              § 10. Wzór formularza odstąpienia od umowy
              <span className="block text-sm font-normal text-gray-500 mt-1">
                (Załącznik nr 2 do Ustawy o prawach konsumenta)
              </span>
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Poniższy formularz należy wypełnić i odesłać wyłącznie w przypadku
              chęci odstąpienia od umowy (dotyczy wyłącznie quasi-konsumentów — § 9).
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
                <p>Data zawarcia umowy(*)/odbioru(*): <span className="underline decoration-dotted">..........................................................</span></p>
                <p>Numer zamówienia: <span className="underline decoration-dotted">..........................................................</span></p>
                <p>Imię i nazwisko / Firma: <span className="underline decoration-dotted">..........................................................</span></p>
                <p>Adres: <span className="underline decoration-dotted">..........................................................</span></p>
                <p>Podpis (wymagany tylko w wersji papierowej): <span className="underline decoration-dotted">...........................</span></p>
                <p>Data: <span className="underline decoration-dotted">..........................................................</span></p>
              </div>
              <p className="text-xs text-gray-500 border-t border-gray-200 pt-2">
                (*) Niepotrzebne skreślić.
              </p>
            </div>
          </section>

          {/* § 11 RĘKOJMIA */}
          <section id="par11" className="mb-10">
            <SectionHeading
              icon={<ScaleIcon className="text-purple-600" />}
              iconBg="bg-purple-100"
              title="§ 11. Rękojmia za wady"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>11.1. <strong>Wyłączenie rękojmi wobec przedsiębiorców (art. 558 § 1 KC):</strong>
                {' '}W stosunku do Kupujących będących przedsiębiorcami (z wyłączeniem
                quasi-konsumentów), Sprzedawca wyłącza odpowiedzialność z tytułu rękojmi
                za wady fizyczne i prawne Towaru. Oznacza to, że:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Kupującemu B2B nie przysługują roszczenia z tytułu rękojmi;</li>
                <li>Roszczenia powinny być kierowane w trybie gwarancyjnym (§ 12).</li>
              </ul>
              <p>11.2. <strong>Dobrowolna polityka reklamacyjna B2B:</strong> Pomimo wyłączenia
                rękojmi, Sprzedawca zobowiązuje się do rzetelnego rozpatrywania zgłoszeń
                i pomocy w uzyskaniu serwisu gwarancyjnego producenta (§ 12).</p>
              <p>11.3. <strong>Rękojmia quasi-konsumentów (art. 556⁴ KC):</strong> W stosunku
                do quasi-konsumentów wyłączenie rękojmi <strong>nie ma zastosowania</strong>.
                Przysługują pełne uprawnienia:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>żądanie wymiany Towaru na wolny od wad,</li>
                <li>żądanie usunięcia wady (naprawy),</li>
                <li>obniżenia ceny,</li>
                <li>odstąpienia od umowy — jeżeli wada jest istotna.</li>
              </ul>
              <p>11.4. <strong>Termin rękojmi (quasi-konsumenci):</strong> Sprzedawca odpowiada
                przez <strong>2 lata</strong> od dnia wydania Towaru. Domniemanie istnienia
                wady w chwili wydania stosuje się przez rok.</p>
              <p>11.5. <strong>Zgłoszenie wady:</strong> Kupujący powinien zawiadomić Sprzedawcę
                w ciągu roku od wykrycia wady, przesyłając reklamację na takma@takma.com.pl
                z opisem wady, dowodem zakupu i dokumentacją fotograficzną.</p>
            </div>
          </section>

          {/* § 12 GWARANCJA */}
          <section id="par12" className="mb-10">
            <SectionHeading
              icon={<ShieldIcon className="text-green-600" />}
              iconBg="bg-green-100"
              title="§ 12. Gwarancja producenta"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>12.1. Towary sprzedawane w Sklepie są objęte <strong>gwarancją producenta</strong>
                {' '}udzielaną bezpośrednio przez danego producenta (Gwaranta).
                Gwarancja jest niezależna od zobowiązań Sprzedawcy. Producenci w ofercie:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Zebra Technologies Corp.</strong> — Lincolnshire, Illinois, USA</li>
                <li><strong>Honeywell International Inc.</strong> — Charlotte, North Carolina, USA</li>
                <li><strong>Datalogic S.p.A.</strong> — Lippo di Calderara di Reno, Włochy</li>
                <li><strong>M3 Mobile Co., Ltd.</strong> — Seul, Korea Południowa</li>
                <li><strong>Newland Digital Technology Co., Ltd.</strong> — Fuzhou, Chiny</li>
                <li><strong>Godex International Co., Ltd.</strong> — Tajpej, Tajwan</li>
                <li><strong>Citizen Systems Japan Co., Ltd.</strong> — Tokio, Japonia</li>
              </ul>

              <p>12.2. <strong>Orientacyjne okresy gwarancji:</strong></p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-2.5 border-b border-gray-200 font-semibold">Producent</th>
                      <th className="text-left p-2.5 border-b border-gray-200 font-semibold">Urządzenia</th>
                      <th className="text-left p-2.5 border-b border-gray-200 font-semibold">Akcesoria / baterie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2.5 border-b border-gray-100">Zebra Technologies</td><td className="p-2.5 border-b border-gray-100">1–2 lata</td><td className="p-2.5 border-b border-gray-100">90 dni</td></tr>
                    <tr><td className="p-2.5 border-b border-gray-100">Honeywell</td><td className="p-2.5 border-b border-gray-100">1–2 lata</td><td className="p-2.5 border-b border-gray-100">90 dni – 1 rok</td></tr>
                    <tr><td className="p-2.5 border-b border-gray-100">Datalogic</td><td className="p-2.5 border-b border-gray-100">1–3 lata</td><td className="p-2.5 border-b border-gray-100">90 dni – 1 rok</td></tr>
                    <tr><td className="p-2.5 border-b border-gray-100">M3 Mobile</td><td className="p-2.5 border-b border-gray-100">1 rok</td><td className="p-2.5 border-b border-gray-100">90 dni</td></tr>
                    <tr><td className="p-2.5 border-b border-gray-100">Newland</td><td className="p-2.5 border-b border-gray-100">2 lata</td><td className="p-2.5 border-b border-gray-100">1 rok</td></tr>
                    <tr><td className="p-2.5 border-b border-gray-100">Godex</td><td className="p-2.5 border-b border-gray-100">2 lata</td><td className="p-2.5 border-b border-gray-100">6 mies. – 1 rok</td></tr>
                    <tr><td className="p-2.5">Citizen</td><td className="p-2.5">2 lata</td><td className="p-2.5">6 mies. – 1 rok</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500">
                Powyższe okresy mają charakter orientacyjny. Dokładne warunki gwarancji
                zawarte są w karcie gwarancyjnej dołączonej do produktu lub na stronie producenta.
              </p>

              <p>12.3. <strong>Serwis gwarancyjny produktów Zebra Technologies:</strong>
                {' '}Sprzedawca jest autoryzowanym partnerem serwisowym Zebra Technologies.
                Serwis gwarancyjny i pogwarancyjny urządzeń Zebra realizowany jest przez:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <p className="font-semibold text-gray-900">Serwis Zebry</p>
                <p>
                  Strona:{' '}
                  <a href="https://www.serwis-zebry.pl" target="_blank" rel="noopener noreferrer"
                    className="text-primary-600 hover:underline">www.serwis-zebry.pl</a>
                </p>
              </div>
              <p>W przypadku produktów pozostałych producentów (Honeywell, Datalogic,
                M3 Mobile, Newland, Godex, Citizen) Sprzedawca pośredniczy w przekazaniu
                sprzętu do autoryzowanego serwisu producenta lub wskazuje bezpośredni kontakt.</p>

              <p>12.4. <strong>Warunki skorzystania z gwarancji:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>wada musi ujawnić się w okresie gwarancji;</li>
                <li>wada nie może wynikać z: uszkodzeń mechanicznych, zalania, zwarcia,
                  nieautoryzowanych modyfikacji lub używania niezgodnego z instrukcją;</li>
                <li>Kupujący powinien zachować dowód zakupu i oryginalne opakowanie.</li>
              </ul>

              <p>12.5. <strong>Rozszerzone umowy serwisowe (opcjonalne):</strong> Dla wybranych
                produktów dostępne są rozszerzone umowy serwisowe producenta (np. Zebra OneCare
                Essential/Select, Honeywell Service Plans, Datalogic Easeofcare). Szczegóły
                na stronie produktu lub po kontakcie ze Sprzedawcą.</p>

              <p>12.6. Gwarancja producenta nie wyłącza, nie ogranicza ani nie zawiesza
                uprawnień quasi-konsumenta z tytułu rękojmi (art. 577 § 2 KC).</p>
            </div>
          </section>

          {/* § 13 REKLAMACJE */}
          <section id="par13" className="mb-10">
            <SectionHeading
              icon={<WrenchIcon className="text-red-600" />}
              iconBg="bg-red-100"
              title="§ 13. Reklamacje — tryb postępowania"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>13.1. Reklamacje dotyczące Towarów lub realizacji zamówień należy
                kierować na adres: <strong>takma@takma.com.pl</strong> lub pisemnie
                na adres siedziby Sprzedawcy.</p>
              <p>13.2. <strong>Treść zgłoszenia reklamacyjnego powinna zawierać:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>imię i nazwisko / nazwę firmy Kupującego,</li>
                <li>numer zamówienia lub numer faktury VAT,</li>
                <li>opis stwierdzonej wady lub niezgodności,</li>
                <li>żądanie (naprawa, wymiana, obniżenie ceny, zwrot) — dotyczy quasi-konsumentów,</li>
                <li>datę stwierdzenia wady,</li>
                <li>dokumentację fotograficzną (jeśli dotyczy).</li>
              </ul>
              <p>13.3. <strong>Termin rozpatrzenia reklamacji:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Quasi-konsumenci:</strong> <strong>14 dni</strong> od otrzymania
                  (art. 561⁵ KC). Brak odpowiedzi = uznanie reklamacji.</li>
                <li><strong>Przedsiębiorcy B2B:</strong> do 30 dni roboczych.</li>
              </ul>
              <p>13.4. O sposobie rozpatrzenia reklamacji Kupujący zostanie poinformowany
                drogą elektroniczną lub pisemnie.</p>
              <p>13.5. Koszty przesyłki reklamacyjnej do Sprzedawcy ponosi Kupujący;
                Sprzedawca pokrywa koszty odesłania naprawionego/wymienionego Towaru.</p>
            </div>
          </section>

          {/* § 14 DANE OSOBOWE */}
          <section id="par14" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              § 14. Ochrona danych osobowych
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Zasady przetwarzania danych osobowych określa odrębna{' '}
                <Link href="/polityka-prywatnosci" className="text-primary-600 hover:underline">
                  Polityka Prywatności
                </Link>
                , stanowiąca integralną część niniejszego Regulaminu.
                Administratorem danych jest Sprzedawca (§ 2).</p>
            </div>
          </section>

          {/* § 15 WŁASNOŚĆ INTELEKTUALNA */}
          <section id="par15" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              § 15. Własność intelektualna
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>15.1. Wszelkie materiały zamieszczone w Sklepie, w szczególności
                teksty, grafiki, zdjęcia, logotypy, kod źródłowy, są chronione
                przepisami ustawy z dnia 4 lutego 1994 r. o prawie autorskim
                i prawach pokrewnych oraz przepisami o znakach towarowych.</p>
              <p>15.2. Logotypy, nazwy i znaki towarowe producentów (Zebra Technologies,
                Honeywell, Datalogic, M3 Mobile, Newland, Godex, Citizen) są zastrzeżonymi
                znakami towarowymi odpowiednich podmiotów. Ich użycie w Sklepie następuje
                wyłącznie w celach informacyjno-handlowych jako autoryzowanego dystrybutora.</p>
              <p>15.3. Kupujący nie jest uprawniony do kopiowania, rozpowszechniania,
                modyfikowania ani wykorzystywania materiałów zamieszczonych w Sklepie
                bez uprzedniej pisemnej zgody Sprzedawcy.</p>
            </div>
          </section>

          {/* § 16 POSTANOWIENIA KOŃCOWE */}
          <section id="par16" className="mb-10">
            <SectionHeading
              icon={<ScaleIcon className="text-gray-600" />}
              iconBg="bg-gray-100"
              title="§ 16. Postanowienia końcowe"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>16.1. <strong>Prawo właściwe:</strong> Do wszelkich stosunków prawnych
                wynikających z Regulaminu stosuje się prawo polskie, w szczególności
                KC, UPK, UŚUDE oraz ustawę o przeciwdziałaniu nadmiernym opóźnieniom.</p>
              <p>16.2. <strong>Właściwość sądu:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Przedsiębiorcy B2B</strong> — sąd właściwy dla siedziby
                  Sprzedawcy (Wrocław).</li>
                <li><strong>Quasi-konsumenci</strong> — sąd właściwy według przepisów
                  ogólnych KC (art. 27 i nast. KPC).</li>
              </ul>
              <p>16.3. <strong>Język:</strong> Regulamin sporządzony jest w języku polskim,
                który jest jedynym językiem wiążącym strony.</p>
              <p>16.4. <strong>Rozdzielność postanowień:</strong> Nieważność jednego
                postanowienia nie wpływa na ważność pozostałych. W miejsce nieważnego
                postanowienia stosuje się przepisy prawa powszechnie obowiązującego.</p>
              <p>16.5. <strong>Zmiana Regulaminu:</strong> Sprzedawca zastrzega sobie prawo
                do zmiany Regulaminu z uzasadnionych przyczyn (zmiany prawa, oferty, orzeczenia
                sądowe, zmiany techniczne). Nowa wersja zostanie opublikowana na stronie
                takma.com.pl/regulamin. Zmiana nie dotyczy zamówień złożonych wcześniej.</p>
              <p>16.6. <strong>Archiwizacja:</strong> Poprzednie wersje Regulaminu dostępne
                są na żądanie — prosimy o kontakt: takma@takma.com.pl.</p>
              <p>16.7. Niniejszy Regulamin wchodzi w życie z dniem <strong>17 lutego 2026 r.</strong></p>
            </div>

            {/* Podstawy prawne */}
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-500 space-y-1">
              <p className="font-semibold text-gray-600 mb-2">Podstawy prawne niniejszego Regulaminu:</p>
              <ul className="space-y-1">
                <li>Ustawa z dnia 23 kwietnia 1964 r. — Kodeks cywilny (Dz.U. 2023 poz. 1610 t.j.)</li>
                <li>Ustawa z dnia 30 maja 2014 r. o prawach konsumenta (Dz.U. 2023 poz. 2759 t.j.)</li>
                <li>Ustawa z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2020 poz. 344 t.j.)</li>
                <li>Ustawa z dnia 8 marca 2013 r. o przeciwdziałaniu nadmiernym opóźnieniom w transakcjach handlowych (Dz.U. 2023 poz. 1790 t.j.)</li>
                <li>Rozporządzenie (UE) 2016/679 — RODO</li>
                <li>Ustawa z dnia 12 lipca 2024 r. — Prawo komunikacji elektronicznej (Dz.U. 2024 poz. 1221)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
