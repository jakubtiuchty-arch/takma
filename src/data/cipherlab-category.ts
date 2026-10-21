import type { BrandCategoryRichContent } from './brand-category-content'

export const cipherlabCategory: BrandCategoryRichContent = {
  "updatedAt": "2026-10-21",
  "definition": {
    "heading": "Terminale CipherLab — modele dotykowe i klawiaturowe",
    "content": "Terminal mobilny CipherLab łączy system Android z odczytem kodów i komunikacją z aplikacją firmy. Seria RS obejmuje modele dotykowe. Seria RK ma fizyczną klawiaturę do wpisywania ilości i lokalizacji."
  },
  "buyingGuide": {
    "heading": "Jak dobrać terminal CipherLab?",
    "items": [
      "Miejsce pracy — sklep, magazyn, dostawy, placówka ochrony zdrowia lub mroźnia wymagają różnego wyposażenia.",
      "Odczyt — wybierz moduł standardowy, MR lub większego zasięgu według PN. Przetestuj docelowe kody.",
      "Łączność — odróżnij konfigurację WLAN od wersji LTE i 5G. Standard Wi-Fi także zależy od PN.",
      "Zasilanie — sprawdź baterię, stację i zawartość zestawu. Osobny zasilacz może być potrzebny do ładowania."
    ]
  },
  "expertAuthority": "Pomożemy dobrać terminal do aplikacji, kodów i infrastruktury sieciowej. Porównaj konfiguracje na kartach, a następnie ustal wymagania wdrożenia oraz wyposażenie stanowiska.",
  "technicalDeepDive": "[RS20](/produkt/cipherlab-rs20) jest lekkim terminalem do sali sprzedaży z Androidem 16. [RS36](/produkt/cipherlab-rs36) oferuje ekran 5,5 cala i konfiguracje z 4G LTE. [RS38](/produkt/cipherlab-rs38) ma większy ekran 6 cali, pamięć 8/128 GB i wersje 5G. [RS38H](/produkt/cipherlab-rs38h) ma obudowę do czyszczenia środkami dopuszczonymi dla placówek ochrony zdrowia.\n\n[RK26](/produkt/cipherlab-rk26) łączy ekran 4 cale z klawiaturą 25 lub 28 klawiszy. Do intensywnej kompletacji porównaj [RK96](/produkt/cipherlab-rk96) z Wi-Fi 7 i baterią 7000 mAh. [RK96 Cold Storage](/produkt/cipherlab-rk96-cold-storage) ma podgrzewanie i baterię 5500 mAh do pracy od −30°C. Nie zastępuj tej wersji zwykłym terminalem tylko na podstawie klasy IP.\n\nSE4750 SR i MR mają różne przeznaczenie. SE5500 oraz SE5800 obsługują większy zakres odczytu, ale odległość zależy od kodu. Nie każdy PN ma modem komórkowy, uchwyt lub zasilacz. Porównaj tabelę wariantów na karcie. NFC nie oznacza wbudowanego czytnika UHF.\n\nWszystkie urządzenia wymagają zgodnej aplikacji. Licencja systemu magazynowego jest osobnym elementem wdrożenia. Do porównania innych marek przejdź do [terminali mobilnych](/terminale-mobilne).",
  "sectionHeadings": {
    "technicalDeepDive": "Porównanie rodzin CipherLab",
    "expertAuthority": "Dobór terminala w TAKMA"
  },
  "useCases": [
    {
      "title": "Sklep i uzupełnianie półek",
      "description": "RS20 ma niewielką masę, ekran 5,5 cala i Wi-Fi 6E. RS36 pozwala dobrać różne skanery i wersje LTE."
    },
    {
      "title": "Kompletacja i dostawy",
      "description": "RK26 ułatwia wpisywanie danych klawiaturą. RK96 obsługuje Wi-Fi 7. RS38 oferuje duży ekran i konfiguracje 5G."
    },
    {
      "title": "Szczególne warunki",
      "description": "RS38H ma obudowę do czyszczenia zgodnymi środkami. RK96 Cold Storage jest przeznaczony do niskiej temperatury."
    }
  ],
  "uniqueInsights": {
    "heading": "Co sprawdzić przed doborem wyposażenia?",
    "items": [
      {
        "title": "Sprawdź temperaturę i baterię razem",
        "text": "Klasa IP nie oznacza gotowości do pracy w mroźni. RK96 Cold Storage ma podgrzewanie i inną baterię niż standardowy RK96."
      },
      {
        "title": "Zawartość zestawu zależy od PN",
        "text": "Stacja, osłona, uchwyt i zasilacz mogą być opcjonalne. Dobierz je do wersji terminala, zamiast kopiować komplet wyposażenia z innego modelu."
      }
    ]
  },
  "comparisons": [],
  "howToSteps": [],
  "faq": [
    {
      "question": "Który CipherLab wybrać do mroźni?",
      "answer": "RK96 Cold Storage ma podgrzewanie i baterię do niskiej temperatury. Zakres pracy wynosi od −30°C do +50°C. Standardowy RK96 ma inną baterię oraz zakres temperatur."
    },
    {
      "question": "Czy terminal ma program magazynowy?",
      "answer": "Terminal wymaga zgodnej aplikacji oraz połączenia z systemem firmy. Licencja programu magazynowego jest osobnym elementem wdrożenia."
    },
    {
      "question": "Czy NFC oznacza obsługę UHF RFID?",
      "answer": "Nie. NFC jest funkcją zbliżeniową. Odczyt UHF wymaga osobnego zgodnego modułu, jeśli model go obsługuje. Nie jest częścią podstawowych konfiguracji."
    }
  ]
}
