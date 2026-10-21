import type { BrandCategoryRichContent } from './brand-category-content'

export const datalogicScannerCategory: BrandCategoryRichContent = {
  "updatedAt": "2026-10-21",
  "sectionHeadings": {
    "technicalDeepDive": "Porównanie rodzin skanerów Datalogic",
    "useCases": "Dobierz skaner do stanowiska",
    "comparisons": "Które modele warto porównać?",
    "expertAuthority": "Dobór i wyposażenie stanowiska"
  },
  "definition": {
    "heading": "Jak wybrać skaner Datalogic?",
    "content": "Skaner Datalogic odczytuje kod optycznie i przekazuje dane do komputera, kasy lub aplikacji. Zacznij od rodzaju kodu: czytnik 1D wystarczy do EAN i Code 128, a QR i Data Matrix wymagają modelu 2D. Do oznaczeń bezpośrednio na częściach dobierz wersję DPM. Następnie wybierz interfejs, sposób pracy i zawartość zestawu według PN.\n\nTa kategoria obejmuje skanery ręczne QuickScan, Gryphon, Heron, TD1100 i PowerScan oraz prezentacyjne Magellan. Wersje przewodowe pracują przy stałym stanowisku. Bluetooth i STAR pozwalają odejść od komputera, ale wymagają właściwej konfiguracji połączenia. Baza ładująca i komunikacyjna musi pasować do konkretnego modelu oraz systemu radiowego."
  },
  "buyingGuide": {
    "heading": "Co sprawdzić przed zakupem skanera?",
    "items": [
      "Rodzaj kodu: do samych kodów liniowych wybierz 1D. Do QR, Data Matrix i PDF417 potrzebujesz odpowiedniego skanera 2D.",
      "Podłoże: papierowa etykieta, ekran telefonu i oznaczenie na metalu stawiają różne wymagania. Do DPM przetestuj własną część.",
      "Interfejs: sprawdź port komputera lub kasy. Model USB-only nie obsłuży RS-232 po samej zmianie przewodu.",
      "Łączność: Bluetooth oraz STAR 433 MHz to różne systemy. Nie podłączaj czytnika STAR do bazy Bluetooth.",
      "Zawartość zestawu: sam czytnik, baza, przewód USB i zasilacz mogą być osobnymi pozycjami. Porównaj dokładny PN.",
      "Warunki pracy: do hali i magazynu wybierz obudowę o odpowiedniej klasie ochrony. Zasięg radiowy i odczytu sprawdź w rzeczywistym miejscu pracy."
    ]
  },
  "expertAuthority": "Dobieramy skaner do kodów, interfejsu i warunków stanowiska. Przy zapytaniu podaj obecny model, port komputera lub kasy oraz rodzaj kodów. Jeśli wymieniasz sam czytnik, podaj także PN bazy i przewodu. Ułatwi to sprawdzenie zgodności i ograniczy zakup zbędnych elementów.",
  "technicalDeepDive": "Poniższe zestawienie rozdziela rodzaj kodów i sposób połączenia. Szczegółowe parametry, aktualne ceny, stany i zawartość zestawów znajdziesz na kartach modeli.\n\n| Rodzina i modele | Rodzaj kodów | Połączenie | Kiedy porównać |\n|---|---|---|---|\n| [Magellan 900i](/produkt/datalogic-magellan-900i), [1500i](/produkt/datalogic-magellan-1500i), [3600VSi](/produkt/datalogic-magellan-3600vsi) | 1D i 2D | USB lub RS-232 według zestawu | Kasa i kiosk; odczyt bez trzymania czytnika |\n| [TD1120](/produkt/datalogic-td1120), [TD1130](/produkt/datalogic-td1130), [TD1170](/produkt/datalogic-td1170) | 1D | USB lub RS-232/KBW według modelu | Dokumenty i etykiety z bliska; okno 65 albo 90 mm |\n| [QuickScan QD2220](/produkt/datalogic-quickscan-qd2220) | 1D | USB | Długie kody liniowe, rachunki, kasa |\n| [QW2520](/produkt/datalogic-quickscan-qw2520), [QD2590](/produkt/datalogic-quickscan-qd2590), [QBT2500](/produkt/datalogic-quickscan-qbt2500), [QM2500](/produkt/datalogic-quickscan-qm2500) | 1D i 2D | Przewód, Bluetooth lub STAR według modelu | Etykiety, QR i kody z ekranów |\n| [GD4220](/produkt/datalogic-gryphon-gd4220), [GD4290](/produkt/datalogic-gryphon-gd4290), [GBT4200](/produkt/datalogic-gryphon-gbt4200), [GM4200](/produkt/datalogic-gryphon-gm4200) | 1D | USB, RS-232, Bluetooth lub STAR według modelu | Odczyt liniowy; bezprzewodowe modele z ładowaniem indukcyjnym |\n| [GD4690](/produkt/datalogic-gryphon-gd4690), [GBT4600](/produkt/datalogic-gryphon-gbt4600), [GM4600](/produkt/datalogic-gryphon-gm4600) | 1D i 2D | Przewód, Bluetooth lub STAR według modelu | Warianty HP do różnych wielkości kodów |\n| [Heron HD3130](/produkt/datalogic-heron-hd3130), [HD3430](/produkt/datalogic-heron-hd3430) | 1D albo 1D/2D według modelu | USB, RS-232, KBW | Punkt sprzedaży, odczyt w podstawce |\n| [PD9130](/produkt/datalogic-powerscan-pd9130), [PBT9100](/produkt/datalogic-powerscan-pbt9100), [PM9100](/produkt/datalogic-powerscan-pm9100) | 1D | Przewód, Bluetooth lub STAR według modelu | Produkcja i magazyn, obudowa IP65 |\n| [PD9630](/produkt/datalogic-powerscan-pd9630), [PBT9600](/produkt/datalogic-powerscan-pbt9600), [PM9600](/produkt/datalogic-powerscan-pm9600) | 1D i 2D | Przewód, Bluetooth lub STAR według modelu | Przemysłowe etykiety 2D, optyka SR lub HP, IP65/IP67 |\n| [PD9531 DPM Evo](/produkt/datalogic-powerscan-pd9531-dpm), [PBT9501 DPM Evo](/produkt/datalogic-powerscan-pbt9501-dpm), [PM9501 DPM Evo](/produkt/datalogic-powerscan-pm9501-dpm) | 1D, 2D i DPM | Przewód, Bluetooth lub STAR według modelu | Kody znakowane bezpośrednio na częściach |",
  "useCases": [
    {
      "title": "Kasa i obsługa klienta",
      "description": "Do stanowiska bez trzymania czytnika porównaj [Magellan 900i](/produkt/datalogic-magellan-900i) i [1500i](/produkt/datalogic-magellan-1500i). Do etykiet i kodów z telefonów porównaj [QW2520](/produkt/datalogic-quickscan-qw2520) oraz [Heron HD3430](/produkt/datalogic-heron-hd3430). Jeśli skanujesz wyłącznie kody liniowe, sprawdź [QD2220](/produkt/datalogic-quickscan-qd2220)."
    },
    {
      "title": "Przyjęcie dostaw i kompletacja",
      "description": "Do pracy bez przewodu wybierz odpowiedni system: [QBT2500](/produkt/datalogic-quickscan-qbt2500) z Bluetooth albo [QM2500](/produkt/datalogic-quickscan-qm2500) z radiem STAR 433 MHz. Skaner przesyła kod; aplikacja magazynowa obsługuje dokumenty i stany."
    },
    {
      "title": "Produkcja i identyfikacja części",
      "description": "Do etykiet 2D porównaj [PowerScan PD9630](/produkt/datalogic-powerscan-pd9630). Do kodów naniesionych bezpośrednio na częściach sprawdź [PD9531 DPM Evo](/produkt/datalogic-powerscan-pd9531-dpm) i przetestuj własne oznaczenia."
    }
  ],
  "uniqueInsights": {
    "heading": "Trzy rozróżnienia, które wpływają na dobór",
    "items": [
      {
        "title": "1D nie odczytuje QR",
        "text": "TD1100, QD2220, Gryphon 4200, HD3130 i PowerScan 9100 są czytnikami liniowymi. Do QR wybierz odpowiedni model 2D."
      },
      {
        "title": "STAR nie oznacza Bluetooth",
        "text": "Wersje QM, GM i PM z tej oferty używają radia STAR 433 MHz. QBT, GBT i PBT korzystają z Bluetooth. Bazy muszą pasować do modelu."
      },
      {
        "title": "DPM wymaga próby na materiale",
        "text": "Kod na metalu, tworzywie i papierowej etykiecie może wymagać innej optyki i odległości. Sama obsługa Data Matrix nie potwierdza odczytu każdego oznaczenia DPM."
      }
    ]
  },
  "faq": [
    {
      "question": "Czy każdy skaner Datalogic odczytuje QR?",
      "answer": "Nie. QR wymaga skanera 2D. Odczytują go między innymi QuickScan 2500, Gryphon 4600, Heron HD3430 i oferowane PowerScan 9600. Serie 1D odczytują kody liniowe."
    },
    {
      "question": "Co wybrać do długich kodów na dokumentach?",
      "answer": "Porównaj [QD2220](/produkt/datalogic-quickscan-qd2220), [Gryphon 4200](/produkt/datalogic-gryphon-gd4220) oraz TD1100 z oknem 90 mm. Wybór zależy od wielkości kodu, odległości i wymaganego interfejsu."
    },
    {
      "question": "Czy Bluetooth i STAR współpracują z tą samą bazą?",
      "answer": "Nie. Baza komunikacyjna musi odpowiadać modelowi i systemowi radiowemu. Wersja STAR 433 MHz nie jest bazą Bluetooth ani STAR 910 MHz."
    },
    {
      "question": "Czy skaner działa bez programu magazynowego?",
      "answer": "W trybie USB HID wiele modeli przekazuje kod jak klawiatura do aktywnego pola. Zapis stanów, kompletacja i dokumenty wymagają odpowiedniego programu. Inne interfejsy mogą wymagać sterownika lub konfiguracji."
    },
    {
      "question": "Czy zestaw zawiera bazę, przewód i zasilacz?",
      "answer": "To zależy od PN. Niektóre pozycje obejmują sam czytnik, inne także przewód lub bazę. Zawartość podajemy w tabeli i opisie wariantu. Nie zakładaj, że zasilacz jest w każdym zestawie USB."
    },
    {
      "question": "Jaki skaner Datalogic do kodów na metalu?",
      "answer": "Do oznaczeń bezpośrednich porównaj PowerScan PD9531, PBT9501 i PM9501 w wersjach DPM Evo. Dobór wymaga próby na konkretnym kodzie i powierzchni."
    },
    {
      "question": "Czy można wykorzystać stare akcesoria?",
      "answer": "Tylko po potwierdzeniu zgodności PN. Podobny wygląd złącza, bazy lub obudowy nie potwierdza współpracy. Podaj numery obecnego czytnika, bazy i przewodu."
    },
    {
      "question": "Gdzie sprawdzić aktualne ceny i stany?",
      "answer": "Aktualne ceny i dostępność znajdują się na kartach modeli i przy poszczególnych PN. Akcesoria mają osobne ceny i stany. Stan oraz termin wysyłki zależą od wybranej konfiguracji."
    }
  ],
  "comparisons": [
    {
      "title": "QD2220 czy QW2520?",
      "verdict": "QD2220 do kodów liniowych; QW2520, gdy potrzebujesz także QR.",
      "content": "[QD2220](/produkt/datalogic-quickscan-qd2220) to czytnik 1D USB. [QW2520](/produkt/datalogic-quickscan-qw2520) odczytuje 1D i 2D. Oba pasują do stałego stanowiska USB, ale obsługują inne rodzaje kodów."
    },
    {
      "title": "Gryphon GD4220 czy GD4290?",
      "verdict": "GD4220 do USB; GD4290, gdy wymagany jest także RS-232.",
      "content": "Oba modele odczytują kody 1D. [GD4220](/produkt/datalogic-gryphon-gd4220) ma USB, a [GD4290](/produkt/datalogic-gryphon-gd4290) USB i RS-232. Do danego interfejsu potrzebny jest właściwy przewód."
    },
    {
      "title": "PowerScan 9100, 9600 czy DPM Evo?",
      "verdict": "Wybierz według rodzaju kodu, nie wyłącznie odporności obudowy.",
      "content": "PowerScan 9100 służy do kodów 1D. Oferowane PowerScan 9600 SR i HP odczytują 1D i 2D na etykietach. Wersje 9501 DPM Evo są przeznaczone także do oznaczeń bezpośrednich. Odczyt DPM trzeba potwierdzić na próbce."
    }
  ],
  "howToSteps": [],
  "contactText": "Pomożemy dobrać skaner, bazę i przewody do kodów oraz interfejsu stanowiska. Podaj rodzaj kodu, środowisko pracy i numery obecnych urządzeń."
}
