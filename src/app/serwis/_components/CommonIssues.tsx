import { ChevronDownIcon } from '@/components/ui/Icons'

const issues = [
  {
    question: "Dlaczego drukarka etykiet przepuszcza puste strony?",
    answer: "Najczęstszą przyczyną jest rozkalibrowany czujnik przerw (gap sensor), zabrudzenie samego czujnika lub użycie niewłaściwych materiałów eksploatacyjnych. Zalecamy wykonanie autokalibracji w sterowniku. Jeśli problem nie ustępuje, sprzęt wymaga interwencji naszego serwisu w celu wyczyszczenia lub wymiany czujników optycznych płyty głównej."
  },
  {
    question: "Terminal Honeywell CT40/EDA51 nie ładuje baterii",
    answer: "W terminalach mobilnych Honeywell serii CT i EDA przyczyną może być mechaniczne uszkodzenie złącza ładowania, wyeksploatowanie pinów w stacji dokującej (cradle) lub całkowite zużycie samej baterii. W naszym serwisie mierzymy rezystancję złącza i w razie potrzeby przelutowujemy moduł zasilania. Dotyczy to również terminali Honeywell CK65, Dolphin i ScanPal."
  },
  {
    question: "Skaner Datalogic Gryphon / Honeywell Voyager pika, ale nie przesyła danych (brak Entera)",
    answer: "Jest to zazwyczaj problem konfiguracji — skaner odczytuje kod, ale brakuje mu tzw. 'sufiksu' (znaku przejścia do nowej linii). W skanerach Datalogic Gryphon i Honeywell Voyager/Xenon można to naprawić skanując odpowiedni kod konfiguracyjny z instrukcji producenta. W przypadku poważniejszych problemów z modułem komunikacji wymagana jest diagnostyka serwisowa."
  },
  {
    question: "Drukarka wydrukowała etykietę z białymi, pionowymi pasami",
    answer: "Pionowe nienadrukowane linie oznaczają, że wypaliły się punkty grzewcze (doty) na głowicy drukującej (printhead). Niestety, usterka ta jest nienaprawialna i wymaga fizycznej wymiany całej głowicy. W naszym serwisie dobieramy i wymieniamy głowice do drukarek termicznych i termotransferowych."
  },
  {
    question: "Ekran dotykowy terminala Datalogic Memor / M3 Mobile nie reaguje na dotyk",
    answer: "Uszkodzenie digitizera w terminalach Datalogic Memor 10/20/30/35, Skorpio X5 czy M3 Mobile następuje w wyniku upadku, uderzenia lub ekstremalnych temperatur. Naprawa w naszym centrum serwisowym polega na wymianie przedniego panelu (LCD + Digitizer). Oceniamy również szczelność obudowy IP65/IP67 po wymianie."
  },
  {
    question: "Drukarka etykiet Godex / Citizen grzeje się i wyłącza w trakcie druku",
    answer: "Przegrzewanie drukarek Godex (G500, RT700) i Citizen (CL-S, CL-E) może wskazywać na uszkodzony zasilacz, zablokowany wentylator chłodzący lub nieaktualny firmware. W naszym serwisie sprawdzamy napięcie zasilania, drożność kanałów wentylacyjnych i aktualizujemy oprogramowanie urządzenia. Dotyczy to również drukarek TSC i SATO."
  },
  {
    question: "Terminal mobilny nie łączy się z siecią Wi-Fi",
    answer: "Problem z Wi-Fi w terminalu mobilnym może mieć kilka przyczyn: uszkodzony moduł WLAN, nieprawidłowa konfiguracja profilu sieci bezprzewodowej lub nieaktualne sterowniki radiowe. Zalecamy weryfikację ustawień w Fusion Settings (Zebra) lub WiFi Manager. Jeśli restart i rekonfiguracja nie pomagają, nasi inżynierowie diagnozują sprawność modułu antenowego i w razie potrzeby wymieniają podzespół."
  },
  {
    question: "Skaner Newland HR / Honeywell Xenon nie odczytuje kodów QR / 2D",
    answer: "W skanerach Newland HR i Honeywell Xenon 1950/1900 brak odczytu kodów 2D (QR, DataMatrix, PDF417) może wynikać z wyłączonej symbologii w konfiguracji, zabrudzenia okna imager'a lub uszkodzenia modułu odczytującego. Najpierw sprawdź, czy dana symbologia jest aktywna w ustawieniach. Jeśli czyszczenie okna nie pomaga, wymagana jest diagnostyka serwisowa modułu imager."
  }
]

export function CommonIssues() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Baza wiedzy: Rozwiązywanie problemów (Troubleshooting)
          </h2>
        </div>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mb-12">
          Twój sprzęt nie działa prawidłowo? Sprawdź najczęstsze usterki zgłaszane przez naszych klientów oraz wstępną diagnozę inżynierów serwisowych TAKMA.
        </p>

        <div className="space-y-4">
          {issues.map((issue, index) => (
            <details key={index} className="group border border-gray-200 rounded-lg bg-gray-50 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 bg-white group-open:bg-gray-50 font-medium text-gray-900">
                <span>{issue.question}</span>
                <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                </span>
              </summary>
              <div className="px-6 py-5 text-gray-600 border-t border-gray-200">
                <p>{issue.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
