import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Polityka prywatności | TAKMA',
  description:
    'Polityka prywatności i ochrony danych osobowych w serwisie takma.com.pl. Informacje o przetwarzaniu danych, cookies i prawach użytkowników.',
}

/* Inline SVG icons */
function ShieldIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  )
}
function UserCheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
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
function DatabaseIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  )
}
function EyeIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  )
}
function LockIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  )
}
function CookieIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
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
function MailIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
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

function SectionHeading({ icon, iconBg, title }: { icon: React.ReactNode; iconBg: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <h2 className="text-xl font-bold text-gray-900 m-0">{title}</h2>
    </div>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600 transition-colors">Strona główna</Link>
            <ChevronRightSm />
            <span className="text-gray-900 font-medium">Polityka prywatności</span>
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
              <ShieldIcon />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Polityka Prywatności</h1>
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
            Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych
            przekazanych przez Użytkowników w związku z korzystaniem ze sklepu internetowego{' '}
            <strong>takma.com.pl</strong>, prowadzonego przez firmę TAKMA. Dbamy o Twoją prywatność
            i bezpieczeństwo danych zgodnie z Rozporządzeniem RODO.
          </p>
        </div>

        {/* Spis treści */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-10">
          <h2 className="font-semibold text-gray-900 mb-3">Spis treści</h2>
          <ol className="grid sm:grid-cols-2 gap-2 text-sm text-blue-700">
            {[
              ['administrator', 'Administrator danych'],
              ['podstawy', 'Podstawy prawne'],
              ['cele', 'Cele i okres przechowywania'],
              ['zakres', 'Zakres zbieranych danych'],
              ['odbiorcy', 'Odbiorcy danych'],
              ['transfer', 'Przekazywanie poza EOG'],
              ['prawa', 'Prawa użytkownika'],
              ['skarga', 'Prawo do skargi'],
              ['cookies', 'Pliki cookies'],
              ['platnosci', 'Bezpieczeństwo płatności'],
              ['profilowanie', 'Profilowanie'],
              ['zabezpieczenia', 'Środki bezpieczeństwa'],
              ['zmiany', 'Zmiany polityki'],
              ['kontakt', 'Kontakt'],
            ].map(([id, label], i) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:underline">{i + 1}. {label}</a>
              </li>
            ))}
          </ol>
        </div>

        <div className="prose prose-gray max-w-none">

          {/* 1. Administrator */}
          <section id="administrator" className="mb-10">
            <SectionHeading
              icon={<UserCheckIcon className="text-blue-600" />}
              iconBg="bg-blue-100"
              title="1. Administrator danych osobowych"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Administratorem Państwa danych osobowych jest:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-900">TAKMA Tadeusz Tiuchty</p>
                <p>ul. Poświęcka 1a, 51-128 Wrocław</p>
                <p>NIP: 9151004377</p>
                <p>E-mail: <a href="mailto:takma@takma.com.pl" className="text-primary-600 hover:underline">takma@takma.com.pl</a></p>
                <p>Tel.: +48 607 819 688</p>
              </div>
              <p>Administrator nie wyznaczył Inspektora Ochrony Danych (IOD).
                We wszelkich sprawach związanych z ochroną danych osobowych
                prosimy o kontakt na powyższy adres e-mail.</p>
            </div>
          </section>

          {/* 2. Podstawy prawne */}
          <section id="podstawy" className="mb-10">
            <SectionHeading
              icon={<ScaleIcon className="text-purple-600" />}
              iconBg="bg-purple-100"
              title="2. Podstawy prawne przetwarzania"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Przetwarzanie danych osobowych odbywa się na podstawie:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Rozporządzenie (UE) 2016/679</strong> z dnia 27 kwietnia 2016 r. (RODO)</li>
                <li><strong>Ustawa z dnia 10 maja 2018 r.</strong> o ochronie danych osobowych (Dz.U. 2019 poz. 1781)</li>
                <li><strong>Ustawa z dnia 12 lipca 2024 r.</strong> — Prawo komunikacji elektronicznej (Dz.U. 2024 poz. 1221) — pliki cookies</li>
                <li><strong>Ustawa z dnia 18 lipca 2002 r.</strong> o świadczeniu usług drogą elektroniczną (Dz.U. 2002 nr 144 poz. 1204)</li>
              </ul>
            </div>
          </section>

          {/* 3. Cele i okres */}
          <section id="cele" className="mb-10">
            <SectionHeading
              icon={<DatabaseIcon className="text-green-600" />}
              iconBg="bg-green-100"
              title="3. Cele, podstawy prawne i okres przechowywania"
            />
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">Cel przetwarzania</th>
                    <th className="px-4 py-3 text-left font-semibold">Podstawa prawna</th>
                    <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">Okres przechowywania</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">Realizacja zamówienia</td>
                    <td className="px-4 py-3">Art. 6 ust. 1 lit. b RODO — wykonanie umowy</td>
                    <td className="px-4 py-3">Do zakończenia + 2 lata (rękojmia)</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Faktura, rozliczenia podatkowe</td>
                    <td className="px-4 py-3">Art. 6 ust. 1 lit. c RODO — obowiązek prawny</td>
                    <td className="px-4 py-3">5 lat od końca roku podatkowego</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">Zapytania ofertowe</td>
                    <td className="px-4 py-3">Art. 6 ust. 1 lit. f RODO — uzasadniony interes</td>
                    <td className="px-4 py-3">Do zakończenia sprawy + 1 rok</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Dochodzenie roszczeń</td>
                    <td className="px-4 py-3">Art. 6 ust. 1 lit. f RODO — uzasadniony interes</td>
                    <td className="px-4 py-3">6 lat (przedawnienie, art. 117 KC)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">Analityka (cookies)</td>
                    <td className="px-4 py-3">Art. 6 ust. 1 lit. a RODO — zgoda</td>
                    <td className="px-4 py-3">Do wycofania zgody (max 2 lata)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Logi serwera</td>
                    <td className="px-4 py-3">Art. 6 ust. 1 lit. f RODO — uzasadniony interes</td>
                    <td className="px-4 py-3">Do 12 miesięcy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Zakres danych */}
          <section id="zakres" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Zakres zbieranych danych</h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>W zależności od celu przetwarzania zbieramy następujące dane:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Zamówienie:</strong> nazwa firmy, NIP, imię i nazwisko, e-mail, telefon, adres dostawy</li>
                <li><strong>Zapytanie / formularz kontaktowy:</strong> imię i nazwisko, e-mail, telefon, treść wiadomości</li>
                <li><strong>Dane techniczne (automatycznie):</strong> adres IP, przeglądarka, system, czas wizyty</li>
              </ul>
              <p>Podanie danych niezbędnych do realizacji zamówienia jest wymogiem umownym.
                Podanie pozostałych danych jest dobrowolne.</p>
            </div>
          </section>

          {/* 5. Odbiorcy */}
          <section id="odbiorcy" className="mb-10">
            <SectionHeading
              icon={<EyeIcon className="text-amber-600" />}
              iconBg="bg-amber-100"
              title="5. Odbiorcy danych"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Państwa dane mogą być udostępniane:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Stripe Payments Europe Limited</strong> (Irlandia) — obsługa płatności, certyfikacja PCI DSS Level 1</li>
                <li><strong>Firmy kurierskie:</strong> DPD, DHL, InPost — realizacja dostawy</li>
                <li><strong>Vercel Inc.</strong> (USA) — hosting strony internetowej</li>
                <li><strong>Biuro rachunkowe</strong> — obsługa księgowa i fakturowanie</li>
                <li><strong>Organy państwowe</strong> — na żądanie (UODO, urzędy skarbowe, sądy)</li>
              </ul>
            </div>
          </section>

          {/* 6. Transfer poza EOG */}
          <section id="transfer" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              6. Przekazywanie danych poza Europejski Obszar Gospodarczy
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>W związku z korzystaniem z usług Stripe oraz Vercel, dane mogą
                być przekazywane do USA na podstawie:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Decyzji Komisji Europejskiej w sprawie EU-US Data Privacy Framework</li>
                <li>Standardowych klauzul umownych (SCC) z 4 czerwca 2021 r.</li>
              </ul>
            </div>
          </section>

          {/* 7. Prawa */}
          <section id="prawa" className="mb-10">
            <SectionHeading
              icon={<UserCheckIcon className="text-green-600" />}
              iconBg="bg-green-100"
              title="7. Prawa osób, których dane dotyczą"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Na podstawie RODO przysługują Państwu:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Prawo dostępu</strong> (art. 15) — informacja o przetwarzanych danych i ich kopia</li>
                <li><strong>Prawo do sprostowania</strong> (art. 16) — poprawienie nieprawidłowych danych</li>
                <li><strong>Prawo do usunięcia</strong> (art. 17) — gdy dane nie są już niezbędne lub cofnięto zgodę</li>
                <li><strong>Prawo do ograniczenia</strong> (art. 18) — np. kwestionowanie prawidłowości danych</li>
                <li><strong>Prawo do przenoszenia</strong> (art. 20) — dane w formacie do odczytu maszynowego</li>
                <li><strong>Prawo sprzeciwu</strong> (art. 21) — wobec przetwarzania na uzasadnionym interesie</li>
                <li><strong>Prawo cofnięcia zgody</strong> (art. 7 ust. 3) — bez wpływu na wcześniejsze przetwarzanie</li>
              </ul>
              <p>Kontakt: <a href="mailto:takma@takma.com.pl" className="text-primary-600 hover:underline">takma@takma.com.pl</a>. Odpowiedź w ciągu 30 dni.</p>
            </div>
          </section>

          {/* 8. Skarga */}
          <section id="skarga" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Prawo do skargi</h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Jeżeli uznają Państwo, że przetwarzanie narusza przepisy RODO,
                przysługuje prawo do skargi do organu nadzorczego:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-900">Prezes Urzędu Ochrony Danych Osobowych (UODO)</p>
                <p>ul. Stawki 2, 00-193 Warszawa</p>
                <p>Strona: <a href="https://uodo.gov.pl" target="_blank" rel="noopener nofollow" className="text-primary-600 hover:underline">uodo.gov.pl</a></p>
              </div>
            </div>
          </section>

          {/* 9. Cookies */}
          <section id="cookies" className="mb-10">
            <SectionHeading
              icon={<CookieIcon className="text-amber-600" />}
              iconBg="bg-amber-100"
              title="9. Pliki cookies"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Serwis takma.com.pl wykorzystuje pliki cookies — małe pliki tekstowe
                zapisywane na urządzeniu użytkownika. Podstawa prawna: art. 399 Prawa
                komunikacji elektronicznej.</p>

              <p className="font-semibold text-gray-900 !mt-6">Kategorie plików cookies</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary-600 text-white">
                      <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">Kategoria</th>
                      <th className="px-4 py-3 text-left font-semibold">Cel</th>
                      <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">Zgoda?</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-900">Niezbędne</td>
                      <td className="px-4 py-3">Koszyk, sesja, CSRF, Stripe</td>
                      <td className="px-4 py-3">Nie</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Analityczne</td>
                      <td className="px-4 py-3">Statystyki, Google Analytics</td>
                      <td className="px-4 py-3">Tak</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Marketingowe</td>
                      <td className="px-4 py-3">Remarketing, reklamy dopasowane</td>
                      <td className="px-4 py-3">Tak</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="font-semibold text-gray-900 !mt-6">Zarządzanie cookies</p>
              <p>Przy pierwszej wizycie wyświetlany jest baner umożliwiający wyrażenie
                lub odmowę zgody. Zgodę można w każdej chwili zmienić lub wycofać.</p>
              <p>Niezależnie od banera, można zarządzać cookies w ustawieniach przeglądarki:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Chrome — Ustawienia &rarr; Prywatność i bezpieczeństwo &rarr; Pliki cookie</li>
                <li>Firefox — Ustawienia &rarr; Prywatność i bezpieczeństwo &rarr; Pliki cookie</li>
                <li>Safari — Preferencje &rarr; Prywatność &rarr; Zarządzaj danymi witryn</li>
                <li>Edge — Ustawienia &rarr; Pliki cookie i uprawnienia witryn</li>
              </ul>
            </div>
          </section>

          {/* 10. Płatności */}
          <section id="platnosci" className="mb-10">
            <SectionHeading
              icon={<CreditCardIcon className="text-green-600" />}
              iconBg="bg-green-100"
              title="10. Bezpieczeństwo płatności"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Płatności online obsługuje <strong>Stripe Payments Europe Limited</strong>
                {' '}posiadający certyfikację PCI DSS Level 1 (najwyższy poziom bezpieczeństwa
                danych kart płatniczych).</p>
              <p>TAKMA <strong>nie przechowuje, nie przetwarza ani nie transmituje</strong> danych
                kart płatniczych — proces ten odbywa się wyłącznie na serwerach Stripe.</p>
            </div>
          </section>

          {/* 11. Profilowanie */}
          <section id="profilowanie" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              11. Zautomatyzowane podejmowanie decyzji i profilowanie
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Administrator nie podejmuje decyzji opartych wyłącznie na zautomatyzowanym
                przetwarzaniu danych, w tym profilowaniu, które wywierałyby skutki prawne
                lub w podobny sposób istotnie wpływały na osoby, których dane dotyczą.</p>
            </div>
          </section>

          {/* 12. Zabezpieczenia */}
          <section id="zabezpieczenia" className="mb-10">
            <SectionHeading
              icon={<LockIcon className="text-red-600" />}
              iconBg="bg-red-100"
              title="12. Środki bezpieczeństwa"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Administrator stosuje odpowiednie środki techniczne i organizacyjne (art. 32 RODO):</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Szyfrowanie transmisji SSL/TLS (HTTPS)</li>
                <li>Ograniczenie dostępu do osób upoważnionych</li>
                <li>Regularne aktualizacje oprogramowania</li>
                <li>Certyfikowani operatorzy płatności (Stripe — PCI DSS Level 1)</li>
              </ul>
            </div>
          </section>

          {/* 13. Zmiany */}
          <section id="zmiany" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">13. Zmiany polityki prywatności</h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Administrator zastrzega sobie prawo do wprowadzania zmian. O istotnych
                zmianach użytkownicy zostaną poinformowani komunikatem na stronie.
                Aktualna wersja jest zawsze dostępna pod adresem{' '}
                <Link href="/polityka-prywatnosci" className="text-primary-600 hover:underline">
                  takma.com.pl/polityka-prywatnosci
                </Link>.</p>
            </div>
          </section>

          {/* 14. Kontakt */}
          <section id="kontakt" className="mb-10">
            <SectionHeading
              icon={<MailIcon className="text-blue-600" />}
              iconBg="bg-blue-100"
              title="14. Kontakt w sprawach danych osobowych"
            />
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>We wszelkich sprawach związanych z przetwarzaniem danych prosimy o kontakt:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>E-mail: <a href="mailto:takma@takma.com.pl" className="text-primary-600 hover:underline">takma@takma.com.pl</a></li>
                <li>Telefon: +48 607 819 688</li>
                <li>Adres: ul. Poświęcka 1a, 51-128 Wrocław</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
