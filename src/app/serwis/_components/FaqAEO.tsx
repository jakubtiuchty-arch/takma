import Link from 'next/link'
import { ChevronDownIcon } from '@/components/ui/Icons'

const faqs = [
  {
    question: "Ile trwa naprawa terminala magazynowego w TAKMA?",
    answer: "W serwisie TAKMA standardowa diagnoza sprzętu odbywa się w ciągu 48 godzin od dostarczenia urządzenia. Czas właściwej naprawy zależy od skomplikowania usterki i dostępności części zamiennych — najczęściej nie przekracza 5–7 dni roboczych. Przy prostszych usterkach (wymiana baterii, czyszczenie) realizujemy naprawę w 1–2 dni."
  },
  {
    question: "Czy naprawiacie urządzenia AutoID po gwarancji?",
    answer: "Tak — TAKMA prowadzi kompleksowe naprawy pogwarancyjne urządzeń marek Honeywell, Datalogic, Brother, M3 Mobile, Newland, Citizen i Godex. Jako autoryzowany serwis Zebra Technologies mamy bezpośredni dostęp do oryginalnych części zamiennych i dokumentacji serwisowej. Przed naprawą zawsze przygotowujemy darmową wycenę."
  },
  {
    question: "Jak zgłosić skaner kodów kreskowych lub drukarkę do naprawy?",
    answer: "Wystarczy wypełnić formularz RMA na dole tej strony lub zadzwonić do TAKMA pod numer +48 601 619 898. Po wysłaniu formularza skontaktujemy się z Tobą, podając instrukcje dotyczące wysyłki uszkodzonego sprzętu i nadamy mu unikalny numer RMA. Cały proces — od zgłoszenia po odbiór naprawionego urządzenia — koordynujemy zdalnie."
  },
  {
    question: "Czy otrzymam gwarancję na naprawiony sprzęt?",
    answer: "Oczywiście — na każdą naprawę pogwarancyjną wykonaną w serwisie TAKMA udzielamy od 3 do 6 miesięcy gwarancji, w zależności od rodzaju wymienionego podzespołu. Używamy wyłącznie oryginalnych części zamiennych, co gwarantuje najwyższą jakość naprawy."
  },
  {
    question: "Ile kosztuje naprawa drukarki etykiet?",
    answer: "Koszt naprawy w TAKMA zależy od rodzaju usterki i modelu urządzenia. Diagnostyka jest darmowa przy zleceniu naprawy. Orientacyjne ceny: wymiana głowicy drukarki biurkowej od 430 PLN netto, drukarki przemysłowej od 1 600 PLN netto, wymiana wałka dociskowego od 150 PLN netto, naprawa płyty głównej od 300 PLN netto. Dokładną wycenę przygotowujemy po diagnostyce urządzenia."
  },
  {
    question: "Czy oferujecie urządzenie zastępcze na czas naprawy?",
    answer: "W przypadku dłuższych napraw lub klientów z kontraktem serwisowym TAKMA może udostępnić urządzenie zastępcze. Dostępność zależy od modelu i aktualnego stanu magazynowego. Prosimy o zgłoszenie takiej potrzeby przy zlecaniu naprawy — dobierzemy odpowiedni zamiennik."
  },
  {
    question: "Jakie marki terminali mobilnych naprawiacie?",
    answer: "Serwis TAKMA naprawia terminale mobilne praktycznie wszystkich wiodących producentów: Zebra Technologies (TC, MC, EC), Honeywell (CT, CK, EDA, Dolphin), Datalogic (Memor, Skorpio, Joya), M3 Mobile, Newland, Unitech i inne. Jako autoryzowany serwis Zebra mamy bezpośredni dostęp do oryginalnych części zamiennych i dokumentacji serwisowej."
  },
  {
    question: "Czy naprawiacie urządzenia z całej Polski?",
    answer: "Tak — TAKMA obsługuje klientów z całej Polski: Warszawa, Kraków, Poznań, Łódź, Gdańsk, Katowice i inne miasta. Urządzenie można dostarczyć osobiście do naszego serwisu we Wrocławiu (ul. Poświęcka 1a) lub wysłać kurierem. Po naprawie odsyłamy sprzęt kurierem na nasz koszt (przy naprawach powyżej 200 PLN netto)."
  },
  {
    question: "Czym różni się serwis gwarancyjny od pogwarancyjnego?",
    answer: "Serwis gwarancyjny obejmuje naprawy w ramach aktywnej gwarancji producenta — koszty pokrywa producent, a TAKMA jako autoryzowany partner realizuje naprawę. Serwis pogwarancyjny dotyczy urządzeń po upływie gwarancji — klient pokrywa koszt naprawy i części, ale zyskuje naszą gwarancję na wykonaną naprawę (3–6 miesięcy). W obu przypadkach diagnostyka jest bezpłatna."
  },
  {
    question: "Czy mogę śledzić status naprawy online?",
    answer: "Każde zgłoszenie serwisowe w TAKMA otrzymuje unikalny numer RMA. O postępach naprawy informujemy e-mailowo na każdym etapie: przyjęcie urządzenia, wynik diagnostyki, wycena, realizacja naprawy i wysyłka. W razie pytań można również skontaktować się telefonicznie z Service Managerem pod numerem +48 601 619 898."
  },
  {
    question: "Co to jest kontrakt serwisowy Zebra OneCare?",
    answer: "Zebra OneCare to program rozszerzonych usług serwisowych od producenta obejmujący naprawy gwarancyjne, wymianę uszkodzonych urządzeń i wsparcie techniczne. TAKMA jako autoryzowany partner Zebra oferuje sprzedaż i obsługę kontraktów OneCare Essential, Select i SV (Special Value). Kontrakty obniżają całkowity koszt utrzymania floty urządzeń i gwarantują priorytetową obsługę."
  },
  {
    question: "Jakie są najczęstsze usterki drukarek etykiet Zebra?",
    answer: "Najczęstsze usterki drukarek Zebra naprawiane w serwisie TAKMA to: 1) zużyta głowica drukująca (białe pasy na etykiecie), 2) rozkalibrowany czujnik przerw (puste etykiety), 3) uszkodzony wałek dociskowy (nierówny nadruk), 4) problem z zasilaczem (drukarka się nie włącza) oraz 5) zużyte łożyska nawijaka taśmy (w drukarkach termotransferowych). Wszystkie naprawiamy z użyciem oryginalnych części Zebra."
  },
  {
    question: "Jak przebiega kalibracja drukarki etykiet?",
    answer: "Kalibracja drukarki etykiet w serwisie TAKMA obejmuje: regulację czujnika przerw (gap sensor) lub czarnego znaku (black mark), kalibrację głowicy drukującej (docisk, temperatura), ustawienie prowadnic nośnika i testowy wydruk kontrolny. Prawidłowa kalibracja eliminuje problemy z przepuszczaniem pustych etykiet, nierównym nadrukiem i błędami Media Out."
  },
  {
    question: "Ile trwa wymiana ekranu w terminalu mobilnym?",
    answer: "Wymiana ekranu (LCD + digitizer) w terminalu mobilnym w serwisie TAKMA trwa zazwyczaj 5–7 dni roboczych od dostarczenia urządzenia. Czas zależy od dostępności części do konkretnego modelu. Na wymieniony ekran udzielamy 3 miesięcy gwarancji. Po naprawie weryfikujemy szczelność obudowy IP65/IP67."
  },
  {
    question: "Czy TAKMA serwisuje drukarki etykiet innych marek niż Zebra?",
    answer: "Tak — oprócz autoryzowanego serwisu Zebra, TAKMA naprawia drukarki etykiet marek Honeywell, Citizen, Godex, TSC, Brother i SATO. Zakres napraw obejmuje wymianę głowic, wałków dociskowych, płyt głównych, zasilaczy oraz kalibrację czujników. Diagnostyka jest zawsze bezpłatna przy zleceniu naprawy."
  },
]

export function FaqAEO() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 mb-4">
          Najczęściej zadawane pytania (FAQ)
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Odpowiedzi na najczęstsze pytania dotyczące serwisu i naprawy urządzeń AutoID w TAKMA.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b border-gray-200 pb-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer py-2 font-medium text-gray-900">
                <span className="text-lg">{faq.question}</span>
                <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                </span>
              </summary>
              <div className="pt-4 text-gray-600 leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          <Link href="/drukarki-etykiet" className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors">Drukarki etykiet</Link>
          <Link href="/terminale-mobilne" className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors">Terminale mobilne</Link>
          <Link href="/poradnik/jak-wybrac-drukarke-etykiet" className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors">Jak wybrać drukarkę etykiet?</Link>
          <Link href="/poradnik/jak-wybrac-terminal-mobilny" className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors">Jak wybrać terminal mobilny?</Link>
          <a href="https://www.serwis-zebry.pl" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors">
            Serwis drukarek Zebra
            <svg className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
