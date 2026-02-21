import { ChevronDownIcon } from '@/components/ui/Icons'

const faqs = [
  {
    question: "Ile trwa naprawa terminala magazynowego w TAKMA?",
    answer: "Standardowa diagnoza sprzętu odbywa się w ciągu 48 godzin od dostarczenia urządzenia do naszego centrum serwisowego. Czas właściwej naprawy zależy od skomplikowania usterki i dostępności części zamiennych, jednak najczęściej nie przekracza 5-7 dni roboczych."
  },
  {
    question: "Czy naprawiacie urządzenia AutoID po gwarancji?",
    answer: "Tak, jako specjalistyczny serwis AutoID prowadzimy kompleksowe naprawy pogwarancyjne urządzeń marek takich jak Honeywell, Datalogic, Brother, M3 Mobile, Newland, Citizen i Godex. Przed naprawą zawsze przygotowujemy darmową wycenę."
  },
  {
    question: "Jak zgłosić skaner kodów kreskowych lub drukarkę do naprawy?",
    answer: "Wystarczy wypełnić formularz na dole tej strony. Po wysłaniu formularza, skontaktujemy się z Tobą podając instrukcje dotyczące wysyłki uszkodzonego sprzętu i nadamy mu unikalny numer RMA."
  },
  {
    question: "Czy otrzymam gwarancję na naprawiony sprzęt?",
    answer: "Oczywiście. Na każdą wykonaną przez nas naprawę pogwarancyjną (oraz użyte oryginalne części zamienne) udzielamy od 3 do 6 miesięcy gwarancji, w zależności od rodzaju wymienionego podzespołu."
  },
  {
    question: "Ile kosztuje naprawa drukarki etykiet?",
    answer: "Koszt naprawy zależy od rodzaju usterki i modelu urządzenia. Diagnostyka jest darmowa przy zleceniu naprawy. Orientacyjne ceny: wymiana głowicy drukarki biurkowej od 430 PLN netto, drukarki przemysłowej od 1 600 PLN netto, wymiana wałka dociskowego od 150 PLN netto, naprawa płyty głównej od 300 PLN netto. Dokładną wycenę przygotowujemy po diagnostyce urządzenia."
  },
  {
    question: "Czy oferujecie urządzenie zastępcze na czas naprawy?",
    answer: "W przypadku dłuższych napraw lub klientów z kontraktem serwisowym możemy udostępnić urządzenie zastępcze. Dostępność zależy od modelu i aktualnego stanu magazynowego. Prosimy o zgłoszenie takiej potrzeby przy zlecaniu naprawy — dobierzemy odpowiedni zamiennik."
  },
  {
    question: "Jakie marki terminali mobilnych naprawiacie?",
    answer: "Naprawiamy terminale mobilne praktycznie wszystkich wiodących producentów: Zebra Technologies (TC, MC, EC), Honeywell (CT, CK, EDA, Dolphin), Datalogic (Memor, Skorpio, Joya), M3 Mobile, Newland, Unitech i inne. Jako autoryzowany serwis Zebra mamy bezpośredni dostęp do oryginalnych części zamiennych i dokumentacji serwisowej."
  },
  {
    question: "Czy naprawiacie urządzenia z całej Polski?",
    answer: "Tak, obsługujemy klientów z całej Polski. Urządzenie można dostarczyć osobiście do naszego serwisu we Wrocławiu (ul. Poświęcka 1a) lub wysłać kurierem. Po naprawie odsyłamy sprzęt kurierem na nasz koszt (przy naprawach powyżej 200 PLN netto). Cały proces — od zgłoszenia po odbiór — koordynujemy zdalnie."
  },
  {
    question: "Czym różni się serwis gwarancyjny od pogwarancyjnego?",
    answer: "Serwis gwarancyjny obejmuje naprawy w ramach aktywnej gwarancji producenta — koszty pokrywa producent, a my jako autoryzowany partner realizujemy naprawę. Serwis pogwarancyjny dotyczy urządzeń po upływie gwarancji — klient pokrywa koszt naprawy i części, ale zyskuje naszą gwarancję na wykonaną naprawę (3-6 miesięcy). W obu przypadkach diagnostyka jest bezpłatna."
  },
  {
    question: "Czy mogę śledzić status naprawy online?",
    answer: "Każde zgłoszenie serwisowe otrzymuje unikalny numer RMA. O postępach naprawy informujemy e-mailowo na każdym etapie: przyjęcie urządzenia, wynik diagnostyki, wycena, realizacja naprawy i wysyłka. W razie pytań można również skontaktować się telefonicznie lub mailowo z podaniem numeru RMA."
  },
  {
    question: "Co to jest kontrakt serwisowy Zebra OneCare?",
    answer: "Zebra OneCare to program rozszerzonych usług serwisowych od producenta. Obejmuje naprawy gwarancyjne, wymianę uszkodzonych urządzeń i wsparcie techniczne. Jako autoryzowany partner Zebra oferujemy sprzedaż i obsługę kontraktów OneCare Essential, Select i SV (Special Value). Szczegóły na serwis-zebry.pl."
  },
  {
    question: "Jakie są najczęstsze usterki drukarek etykiet Zebra?",
    answer: "Najczęstsze usterki drukarek Zebra to: 1) zużyta głowica drukująca (białe pasy na etykiecie), 2) rozkalibrowany czujnik przerw (puste etykiety), 3) uszkodzony wałek dociskowy (nierówny nadruk), 4) problem z zasilaczem (drukarka się nie włącza) oraz 5) zużyte łożyska nawijaka taśmy (w drukarkach termotransferowych). Wszystkie te usterki naprawiamy w naszym serwisie z użyciem oryginalnych części Zebra."
  }
]

export function FaqAEO() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 mb-12">
          Najczęściej zadawane pytania (FAQ)
        </h2>
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
      </div>
    </section>
  )
}
