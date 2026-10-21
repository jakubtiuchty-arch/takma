import type { BrandCategoryRichContent } from './brand-category-content'

export const datalogicScannerCategory: BrandCategoryRichContent = {
  "updatedAt": "2026-10-21",
  "sectionHeadings": {
    "technicalDeepDive": "Skanery Datalogic — porównanie rodzin i zastosowań",
    "useCases": "Czytnik Datalogic do sklepu, magazynu i produkcji",
    "comparisons": "USB, Bluetooth czy STAR? Dobór sposobu pracy",
    "expertAuthority": "Dobór czytnika, zestawu i zgodnych akcesoriów"
  },
  "definition": {
    "heading": "Czytniki kodów kreskowych Datalogic — co obejmuje oferta?",
    "content": "Skanery i czytniki Datalogic służą do odczytu kodów z etykiet, dokumentów i ekranów oraz przekazywania danych do kasy lub komputera. Model 1D odczytuje kody liniowe, np. EAN i Code 128. Kody QR i Data Matrix odczytuje czytnik 2D. Odczyt oznaczeń bezpośrednich na częściach wymaga wersji DPM.\n\nQuickScan i Gryphon obejmują modele do kas, biur i obsługi towaru. PowerScan służy do pracy w magazynie i na produkcji. Magellan obejmuje czytniki prezentacyjne na blat oraz skanery ladowe do zabudowy. Heron i TD1100 uzupełniają wybór do stałych stanowisk. Wyposażenie zestawu zależy od numeru PN.\n\nNazwy skaner i czytnik kodów opisują tu tę samą grupę urządzeń. Nie oznaczają jednak terminala z ekranem i własną aplikacją magazynową. Do pracy z dokumentami i stanami na urządzeniu mobilnym służą [terminale Datalogic](/terminale-datalogic)."
  },
  "buyingGuide": {
    "heading": "Jak wybrać czytnik Datalogic?",
    "items": [
      "Kody 1D lub 2D — do EAN i Code 128 wystarczy model 1D. Kody QR, Data Matrix i kody z ekranu odczytuje czytnik 2D.",
      "USB lub RS-232 — decyduje port kasy albo komputera. Model tylko z USB nie uzyska RS-232 po samej zmianie przewodu.",
      "Bluetooth lub STAR — system radiowy i baza muszą odpowiadać modelowi. Czytniki STAR 433 MHz nie łączą się z bazą Bluetooth.",
      "Praca ręczna lub przy kasie — podstawka ułatwia odczyt bez trzymania urządzenia. Skaner ladowy wymaga otworu i mocowania w blacie.",
      "Warunki magazynu i produkcji — liczą się klasa ochrony, zakres odczytu i odporność obudowy. Odczyt DPM warto potwierdzić testem na próbkach części.",
      "Zestaw według PN — sam czytnik, zestaw z przewodem i zestaw z bazą mają różne numery PN. Podobny wygląd złącza nie potwierdza zgodności akcesoriów."
    ]
  },
  "expertAuthority": "Dobór czytnika zależy od rodzaju kodów, portu hosta i warunków pracy. Zapytanie powinno zawierać model kasy lub komputera, przykładowy kod i wymaganą odległość odczytu. Przy wymianie samego skanera potrzebne są też PN obecnej bazy, przewodu i zasilacza. Pozwala to potwierdzić zgodność zestawu przed zakupem.",
  "technicalDeepDive": "Tabela zestawia rodzaj kodów, połączenie i sposób pracy. Seria nie określa całego wyposażenia: przewód, baza i zasilacz zależą od konkretnego PN. Ceny netto i dostępność są przy modelach i ich wariantach.\n\n| Rodzina i modele | Rodzaj kodów | Połączenie | Zastosowanie |\n|---|---|---|---|\n| [Magellan 900i](/produkt/datalogic-magellan-900i), [1500i](/produkt/datalogic-magellan-1500i), [3600VSi](/produkt/datalogic-magellan-3600vsi) | 1D i 2D | USB lub RS-232 według zestawu | Kasa i kiosk; odczyt bez trzymania czytnika |\n| [TD1120](/produkt/datalogic-td1120), [TD1130](/produkt/datalogic-td1130), [TD1170](/produkt/datalogic-td1170) | 1D | USB lub RS-232/KBW według modelu | Dokumenty i etykiety z bliska; okno 65 albo 90 mm |\n| [QuickScan QD2220](/produkt/datalogic-quickscan-qd2220) | 1D | USB | Długie kody liniowe, rachunki, kasa |\n| [QW2520](/produkt/datalogic-quickscan-qw2520), [QD2590](/produkt/datalogic-quickscan-qd2590), [QBT2500](/produkt/datalogic-quickscan-qbt2500), [QM2500](/produkt/datalogic-quickscan-qm2500) | 1D i 2D | Przewód, Bluetooth lub STAR według modelu | Etykiety, QR i kody z ekranów |\n| [GD4220](/produkt/datalogic-gryphon-gd4220), [GD4290](/produkt/datalogic-gryphon-gd4290), [GBT4200](/produkt/datalogic-gryphon-gbt4200), [GM4200](/produkt/datalogic-gryphon-gm4200) | 1D | USB, RS-232, Bluetooth lub STAR według modelu | Odczyt liniowy; bezprzewodowe modele z ładowaniem indukcyjnym |\n| [GD4690](/produkt/datalogic-gryphon-gd4690), [GBT4600](/produkt/datalogic-gryphon-gbt4600), [GM4600](/produkt/datalogic-gryphon-gm4600) | 1D i 2D | Przewód, Bluetooth lub STAR według modelu | Warianty HP do różnych wielkości kodów |\n| [Heron HD3130](/produkt/datalogic-heron-hd3130), [HD3430](/produkt/datalogic-heron-hd3430) | 1D albo 1D/2D według modelu | USB, RS-232, KBW | Punkt sprzedaży, odczyt w podstawce |\n| [PD9130](/produkt/datalogic-powerscan-pd9130), [PBT9100](/produkt/datalogic-powerscan-pbt9100), [PM9100](/produkt/datalogic-powerscan-pm9100) | 1D | Przewód, Bluetooth lub STAR według modelu | Produkcja i magazyn, obudowa IP65 |\n| [PD9630](/produkt/datalogic-powerscan-pd9630), [PBT9600](/produkt/datalogic-powerscan-pbt9600), [PM9600](/produkt/datalogic-powerscan-pm9600) | 1D i 2D | Przewód, Bluetooth lub STAR według modelu | Przemysłowe etykiety 2D, optyka SR lub HP, IP65/IP67 |\n| [PD9531 DPM Evo](/produkt/datalogic-powerscan-pd9531-dpm), [PBT9501 DPM Evo](/produkt/datalogic-powerscan-pbt9501-dpm), [PM9501 DPM Evo](/produkt/datalogic-powerscan-pm9501-dpm) | 1D, 2D i DPM | Przewód, Bluetooth lub STAR według modelu | Kody znakowane bezpośrednio na częściach |\n| [Magellan 3510HSi](/produkt/datalogic-magellan-3510hsi), [3550HSi](/produkt/datalogic-magellan-3550hsi), [3700HSi](/produkt/datalogic-magellan-3700hsi) | 1D i 2D | USB lub RS-232 według modelu i przewodu | Jedno poziome okno, zabudowa w blacie; zob. [skanery ladowe](/skanery-kodow-kreskowych/ladowe) |\n| [Magellan 9550i](/produkt/datalogic-magellan-9550i), [9600i](/produkt/datalogic-magellan-9600i), [9900i](/produkt/datalogic-magellan-9900i) | 1D i 2D | USB lub RS-232 według zestawu | Dwa okna odczytu, stanowisko kasowe z zabudową |",
  "useCases": [
    {
      "title": "Czytnik do kasy i punktu obsługi",
      "description": "Do stałego połączenia USB służą [QuickScan QW2520](/produkt/datalogic-quickscan-qw2520) i [QD2590](/produkt/datalogic-quickscan-qd2590). Do samych kodów liniowych wystarczy [QD2220](/produkt/datalogic-quickscan-qd2220). Odczyt na podstawce zapewniają [Heron HD3430](/produkt/datalogic-heron-hd3430) i [Magellan 1500i](/produkt/datalogic-magellan-1500i)."
    },
    {
      "title": "Skaner bezprzewodowy do przyjęć i wydań",
      "description": "[QBT2500](/produkt/datalogic-quickscan-qbt2500) i [GBT4600](/produkt/datalogic-gryphon-gbt4600) korzystają z Bluetooth. [QM2500](/produkt/datalogic-quickscan-qm2500) i [GM4600](/produkt/datalogic-gryphon-gm4600) używają STAR 433 MHz. Baza musi odpowiadać systemowi radiowemu czytnika. Zasięg zależy od przeszkód w miejscu pracy. Skaner przekazuje kod; dokumenty i stany obsługuje aplikacja."
    },
    {
      "title": "Czytnik przemysłowy do magazynu i produkcji",
      "description": "Do magazynu i produkcji służą przewodowy [PowerScan PD9630](/produkt/datalogic-powerscan-pd9630), [PBT9600](/produkt/datalogic-powerscan-pbt9600) z Bluetooth i [PM9600](/produkt/datalogic-powerscan-pm9600) z radiem STAR. Kody znakowane na częściach odczytują wersje [DPM Evo](/produkt/datalogic-powerscan-pd9531-dpm). Optyka SR służy do standardowych odczytów, a HP do drobnych kodów i większych odległości."
    },
    {
      "title": "Skaner prezentacyjny lub ladowy Magellan",
      "description": "[900i](/produkt/datalogic-magellan-900i) i [1500i](/produkt/datalogic-magellan-1500i) służą do pracy przy stanowisku obsługi. Do zabudowy w blacie służą [3700HSi](/produkt/datalogic-magellan-3700hsi) oraz dwuokienkowe [9550i](/produkt/datalogic-magellan-9550i), [9600i](/produkt/datalogic-magellan-9600i) i [9900i](/produkt/datalogic-magellan-9900i). Szczegóły zabudowy opisuje kategoria [skanerów ladowych](/skanery-kodow-kreskowych/ladowe)."
    }
  ],
  "uniqueInsights": {
    "heading": "Czego nie zakładać przy wyborze czytnika?",
    "items": [
      {
        "title": "1D nie odczytuje QR",
        "text": "TD1100, QD2220, Gryphon 4200, HD3130 i PowerScan 9100 są czytnikami liniowymi. Kody QR odczytują modele 2D."
      },
      {
        "title": "STAR nie oznacza Bluetooth",
        "text": "QuickScan QM, Gryphon GM i PowerScan PM używają radia STAR 433 MHz. QBT, GBT i PBT korzystają z Bluetooth. Bazy muszą pasować do modelu."
      },
      {
        "title": "DPM wymaga próby na materiale",
        "text": "Kod na metalu, tworzywie i papierowej etykiecie może wymagać innej optyki i odległości. Sama obsługa Data Matrix nie potwierdza odczytu każdego oznaczenia DPM."
      },
      {
        "title": "Sam czytnik STAR nie działa bez bazy",
        "text": "[GM4200-BK-433-WLC](/produkt/datalogic-gryphon-gm4200), [PM9100-433RB](/produkt/datalogic-powerscan-pm9100) i [PM9501-DPM433RB](/produkt/datalogic-powerscan-pm9501-dpm) to same czytniki STAR. Bez bazy STAR 433 MHz nie przesyłają danych."
      }
    ]
  },
  "faq": [
    {
      "question": "Jaki czytnik Datalogic wybrać do kodów QR?",
      "answer": "Kody QR odczytują modele 2D, np. QuickScan QW2520 lub QD2590, Gryphon GD4690 i skanery Magellan. Czytniki 1D, takie jak QD2220 i Gryphon GD4220, nie odczytują QR."
    },
    {
      "question": "Czy skaner Datalogic USB działa jak klawiatura?",
      "answer": "Tak, modele z USB obsługują tryb USB HID Keyboard. Kod trafia wtedy do aktywnego pola programu jak z klawiatury. Tryb i układ klawiatury ustawia się kodami programującymi lub w programie Datalogic Aladdin."
    },
    {
      "question": "Czy każdy bezprzewodowy czytnik Datalogic ma Bluetooth?",
      "answer": "Nie. Bluetooth mają QBT2500 (4.0), GBT4200 (5.0), GBT4600 (5.2), PBT9600 (5.0) oraz PBT9100 i PBT9501 DPM Evo (3.0). QM2500, GM4200, GM4600, PM9100, PM9600 i PM9501 DPM Evo używają STAR 433 MHz i wymagają bazy STAR."
    },
    {
      "question": "Który Datalogic nadaje się do magazynu?",
      "answer": "Do przyjęć i kompletacji służą modele bezprzewodowe, np. QuickScan QBT2500 lub Gryphon GBT4600. Do trudniejszych warunków służą PowerScan 9100 (IP65) i 9600 (IP65 i IP67). Wybór zależy od rodzaju kodu, odległości i warunków otoczenia."
    },
    {
      "question": "Czy czytnik Datalogic odczyta kod z telefonu?",
      "answer": "Tak, modele 2D odczytują kody z ekranów, np. QuickScan 2500 i Gryphon 4600. Wynik zależy od wielkości, kontrastu, jakości oraz jasności kodu na ekranie."
    },
    {
      "question": "Ile kosztuje skaner kodów Datalogic?",
      "answer": "Najtańszy czytnik 1D to [QuickScan QD2220](/produkt/datalogic-quickscan-qd2220), a najtańszy 2D to [QuickScan QW2520](/produkt/datalogic-quickscan-qw2520). Najtańsze kompletne zestawy bezprzewodowe to [QuickScan QM2500](/produkt/datalogic-quickscan-qm2500) z bazą STAR 433 MHz i [QBT2500](/produkt/datalogic-quickscan-qbt2500) z bazą Bluetooth. Ceny netto i stany są przy każdym modelu."
    },
    {
      "question": "Czy baza, przewód i zasilacz są w zestawie?",
      "answer": "To zależy od PN. Zestawy z końcówką K1 zawierają przewód USB. Zasilacz zewnętrzny jest w zestawach PowerScan K10/K10EU i w wybranych zestawach Magellan; skład podaje tabela wariantów na karcie. Baza ładująca nie zawsze zapewnia transmisję danych."
    },
    {
      "question": "Jak długo trwa gwarancja skanera Datalogic?",
      "answer": "5 lat: QuickScan QD2220, QW2520, QD2590, QBT2500 i QM2500, przewodowe Gryphon (GD4220, GD4290, GD4690), Heron HD3130 i HD3430, TD1100. 3 lata: bezprzewodowe Gryphon (GBT4200, GM4200, GBT4600, GM4600), PowerScan 9100, 9600 i 9501 DPM Evo, Magellan 900i, 1500i, 3600VSi, 3510HSi, 3550HSi i 3700HSi. 1 rok: Magellan 9550i, 9600i i 9900i."
    },
    {
      "question": "Czy można wykorzystać dotychczasową bazę i przewody?",
      "answer": "Tylko po potwierdzeniu zgodności dokładnych PN czytnika, bazy, przewodu i zasilacza. Zgodność z jedną generacją QuickScan lub Gryphon nie potwierdza zgodności z inną."
    }
  ],
  "comparisons": [
    {
      "title": "Przewodowy czytnik USB czy skaner bezprzewodowy?",
      "verdict": "USB do stałego stanowiska; połączenie radiowe, gdy trzeba odejść od kasy lub komputera.",
      "content": "[QD2220](/produkt/datalogic-quickscan-qd2220) odczytuje kody 1D przez USB. Kody 2D przez USB odczytują [QW2520](/produkt/datalogic-quickscan-qw2520) i [QD2590](/produkt/datalogic-quickscan-qd2590). Bezprzewodowe [QBT2500](/produkt/datalogic-quickscan-qbt2500) i [QM2500](/produkt/datalogic-quickscan-qm2500) pracują poza długością przewodu. Wymagają bazy, a ich akumulator trzeba ładować."
    },
    {
      "title": "Bluetooth a STAR 433 MHz",
      "verdict": "To dwa różne systemy. Baza musi odpowiadać czytnikowi i wersji radiowej.",
      "content": "Bluetooth mają QBT2500 (4.0), GBT4200 (5.0), GBT4600 (5.2), PBT9600 (5.0), PBT9100 (3.0) i PBT9501 DPM Evo (3.0). QM2500, GM4200, GM4600, PM9100, PM9600 i PM9501 DPM Evo używają STAR 433 MHz. Baza musi odpowiadać systemowi radiowemu, nawet jeśli obudowy wyglądają podobnie. Zasięg zależy od modelu, przeszkód i warunków instalacji."
    },
    {
      "title": "QuickScan czy Gryphon?",
      "verdict": "Liczą się rodzaj kodów i optyka wybranej generacji, a nie sama nazwa rodziny.",
      "content": "QuickScan 2500 obejmuje modele 2D do codziennego odczytu etykiet i ekranów. Gryphon 4200 jest rodziną 1D. Gryphon 4600 w wersjach HP obsługuje 1D/2D i ma dwie matryce. [GD4220](/produkt/datalogic-gryphon-gd4220) ma USB, a [GD4290](/produkt/datalogic-gryphon-gd4290) również RS-232. Kody 2D odczytuje [GD4690](/produkt/datalogic-gryphon-gd4690)."
    },
    {
      "title": "PowerScan 9100, 9600 czy DPM Evo?",
      "verdict": "Odporna obudowa nie potwierdza odczytu każdego oznaczenia na metalu.",
      "content": "PowerScan 9100 służy do kodów liniowych. PowerScan 9600 SR i HP odczytują kody 1D i 2D na etykietach. [PD9531 DPM Evo](/produkt/datalogic-powerscan-pd9531-dpm), [PBT9501 DPM Evo](/produkt/datalogic-powerscan-pbt9501-dpm) i [PM9501 DPM Evo](/produkt/datalogic-powerscan-pm9501-dpm) służą do oznaczeń bezpośrednich. Odczyt DPM warto potwierdzić na rzeczywistej próbce."
    },
    {
      "title": "Magellan na blat czy do zabudowy?",
      "verdict": "Czytnik prezentacyjny ogranicza potrzebę trzymania urządzenia; ladowy wymaga dopasowania stanowiska.",
      "content": "[Magellan 900i](/produkt/datalogic-magellan-900i), [1500i](/produkt/datalogic-magellan-1500i) i pionowy [3600VSi](/produkt/datalogic-magellan-3600vsi) pracują na blacie lub w kiosku. Poziome 3510HSi, 3550HSi oraz 3700HSi służą do zabudowy w blacie. Modele 9550i, 9600i i 9900i mają dwa okna. Skanery Magellan są sprzedawane bez wagi, a integrację z wagą opisuje kategoria [skanery ladowe](/skanery-kodow-kreskowych/ladowe)."
    }
  ],
  "howToSteps": [],
  "contactText": "W zapytaniu wystarczy rodzaj kodu, model kasy lub komputera oraz PN obecnego wyposażenia. Pomożemy dobrać czytnik, bazę, przewód i zasilanie do stanowiska."
}
