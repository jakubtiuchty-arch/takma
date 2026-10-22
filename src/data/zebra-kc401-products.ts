import type { Product } from './products'

// Kiosk Zebra KC401 w /kioski-samoobslugowe. Parametry: karta katalogowa KC401 (08/2026,
// public/datasheets/zebra-kc401.pdf); akcesoria: przewodnik akcesoriów KC401 (07/2026,
// public/downloads/zebra-kc401-akcesoria.pdf). Źródła i decyzje: docs/catalog/zebra-kc401-2026-10-22/audit.md.
export const zebraKc401Products: Product[] = [
  {
    "id": "zebra-kc401",
    "slug": "zebra-kc401",
    "name": "Zebra KC401",
    "seoH1": "Zebra KC401",
    "seoTitle": "Kiosk Zebra KC401 10\" z Androidem, Wi-Fi 7 i NFC",
    "seoDescription": "Kiosk samoobsługowy Zebra KC401: kiosk Zebra 10,1\" z Androidem, NFC i Wi-Fi 7, następca CC6000. KC401 Zebra ze skanerem SR500. PN: KC4010B-00101CP0-A6.",
    "shortDescription": "Zebra KC401 — kiosk samoobsługowy z ekranem dotykowym 10,1\", Androidem, NFC na ekranie i Wi-Fi 7. Służy do sprawdzania cen, rejestracji czasu pracy i kas samoobsługowych. Opcjonalny moduł skanera SR500 ma trzy kąty skanowania. Następca Zebra CC600 i CC6000.",
    "description": "Zebra KC401 to kiosk samoobsługowy z ekranem dotykowym 10,1\" i systemem Android. Służy do sprawdzania cen, rejestracji czasu pracy, kas samoobsługowych, obsługi kuponów i programów lojalnościowych oraz zamówień i zwrotów towaru. Pracuje w orientacji pionowej lub poziomej.\n\nEkran ma rozdzielczość 1280 × 800 px i jasność 300 nitów. NFC na ekranie odczytuje karty zbliżeniowe i telefony, np. karty lojalnościowe i bilety cyfrowe. Kiosk ma Wi-Fi 7, Bluetooth 6.0, port Ethernet z zasilaniem PoE+, kamerę przednią 5 MP i obudowę IP65.\n\nOpcjonalny moduł skanera SR500 odczytuje kody 1D i 2D. Montuje się go na miejscu instalacji. Moduł ma trzy wersje kąta skanowania: +25°, 0° i −25°. Kąt dobiera się do sposobu montażu kiosku.\n\nKC401 mocuje się przez VESA na ścianie, na słupie lub w zabudowie. Zastępuje modele Zebra CC600 i CC6000. W miejsce CC6000 montuje się go w tych samych uchwytach i zabudowie. Zasilacz, moduł skanera i uchwyty kupuje się osobno.\n\nKiosk z większym ekranem, od 15,6\" do 27\", to [SUNMI FLEX 3](/produkt/sunmi-flex-3).",
    "categoryId": "kioski-samoobslugowe",
    "subcategoryIds": [],
    "manufacturerId": "zebra",
    "sameAs": "https://www.zebra.com/pl/pl/products/interactive-kiosks/kc4-series/kc401.html",
    "priceFrom": 5478.63,
    "availability": "available",
    "images": [
      "/images/products/placeholder.svg"
    ],
    "imageDescriptions": [
      "Zebra KC401 — brak zdjęcia urządzenia"
    ],
    "tags": [
      "retail",
      "healthcare"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "KC4010B-00101CP0-A6"
      },
      {
        "name": "Konfiguracja",
        "value": "Wi-Fi 7, Android z usługami Google (GMS), 6 GB RAM / 64 GB, kamera przednia"
      },
      {
        "name": "Ekran",
        "value": "10,1\" (25,7 cm) WXGA 1280 × 800 px, 300 nitów"
      },
      {
        "name": "Ekran dotykowy",
        "value": "Pojemnościowy, wielotrybowy: palec, palec w rękawiczce lub rysik przewodzący (sprzedawany osobno); powłoka ograniczająca odciski palców; szkło o twardości 9H"
      },
      {
        "name": "Orientacja",
        "value": "Pionowa lub pozioma"
      },
      {
        "name": "System operacyjny",
        "value": "Android 15 z usługami Google (GMS); ostatnia obsługiwana wersja według Zebra: Android 18; aktualizacje systemu i poprawki zabezpieczeń wymagają planu Zebra OneCare"
      },
      {
        "name": "Procesor",
        "value": "Qualcomm Dragonwing Q-6690, do 2,0 GHz"
      },
      {
        "name": "Pamięć",
        "value": "6 GB RAM / 64 GB (LPDDR5, UFS 2.2); microSD do 2 TB"
      },
      {
        "name": "NFC",
        "value": "Na ekranie: ISO 14443 typ A i B, MIFARE, FeliCa, ISO 15693, MIFARE DESFire EV1, EV2 i EV3, tagi NFC Forum typ 2–5, emulacja karty (HCE); zgodność z EMVCo RR2; obsługa płatności zbliżeniowych i Google Wallet; certyfikaty Apple VAS i Google Smart Tap; SoftPOS w kiosku bez obsługi personelu nie jest obsługiwany"
      },
      {
        "name": "Skanowanie",
        "value": "Kamera przednia; opcjonalny moduł skanera SR500 1D/2D z kątem skanowania 0°, −25° lub +25°"
      },
      {
        "name": "Kamera",
        "value": "Przednia 5 MP, stała ostrość"
      },
      {
        "name": "Łączność bezprzewodowa",
        "value": "Wi-Fi 7 (802.11be/ax/ac/n/a/g/b), 2,4, 5 i 6 GHz, 2 × 2 MU-MIMO; Bluetooth 6.0 klasy 1 z BLE"
      },
      {
        "name": "Sieć przewodowa",
        "value": "LAN 10/100/1000 Mb/s (RJ45)"
      },
      {
        "name": "Interfejsy",
        "value": "USB-C (USB 2.0, host lub klient), 2 × USB-A (USB 2.0), RJ45"
      },
      {
        "name": "Zasilanie",
        "value": "Zasilacz Zebra 12 V DC, 36 W (zalecany); zasilacz Zebra 5,4 V DC, 16 W z przejściówką i ograniczeniami według Zebra; PoE+ 30 W przez RJ45 (IEEE 802.3at/bt, klasa 4 lub wyższa)"
      },
      {
        "name": "Sygnalizacja",
        "value": "Sygnał dźwiękowy; wielokolorowe paski LED (czerwony, niebieski, zielony); wibracje"
      },
      {
        "name": "Audio",
        "value": "Głośniki stereo, 2 mikrofony; zestaw słuchawkowy USB lub Bluetooth; VoIP z PTT; redukcja szumów Qualcomm Fluence AI"
      },
      {
        "name": "Czujniki",
        "value": "Czujnik światła (automatyczna jasność ekranu); żyroskop i akcelerometr 3-osiowe; czujnik zbliżeniowy (wykrywanie obecności)"
      },
      {
        "name": "Przyciski",
        "value": "Głośność +/−; zasilanie/reset"
      },
      {
        "name": "Klawiatura",
        "value": "Ekranowa; Bluetooth; USB"
      },
      {
        "name": "Stopień ochrony",
        "value": "IP65"
      },
      {
        "name": "Odporność",
        "value": "Wibracje: sinusoidalne 4 g (5 Hz–2 kHz), losowe 6 g RMS (20 Hz–2 kHz); szok termiczny od -40 do 70°C; ESD ±15 kV (powietrze), ±8 kV (kontakt i pośrednie)"
      },
      {
        "name": "Montaż",
        "value": "VESA (ściana, słup, lada, zabudowa); uchwyty Zebra do KC401: VESA 100 × 100"
      },
      {
        "name": "Wymiary",
        "value": "Bez skanera: 262,9 × 163,7 × 36,2 mm (poziomo); ze skanerem: 262,9 × 189,0 × 36,2 mm (poziomo), 163,6 × 288,3 × 36,2 mm (pionowo)"
      },
      {
        "name": "Masa",
        "value": "920 g bez skanera; 947 g ze skanerem"
      },
      {
        "name": "Warunki pracy",
        "value": "0–40°C; przechowywanie od -40 do 70°C; wilgotność 5–95% bez kondensacji"
      },
      {
        "name": "Zastępuje",
        "value": "Zebra CC600 i CC6000"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Kiosk; zasilacz, przewód sieciowy i moduł skanera kupuje się osobno"
      },
      {
        "name": "Akcesoria opcjonalne",
        "value": "Moduł skanera SR500 (KC401-SCNR-SR1 +25°, KC401-SCNR-SR0 0°, KC401-SCNR-SR2 −25°); zasilacz 36 W PWR-BGA12V36W0WW z przewodem sieciowym C5 (EU: 450042); uchwyty ścienne KT-152097-03 i KT-152097-04; uchwyt na słup KT-152096-03; uchwyt PrintKiosk BRKT-DPA-SK1-01"
      },
      {
        "name": "Zastosowanie",
        "value": "Sprawdzanie cen, rejestracja czasu pracy, kasa samoobsługowa, kupony i programy lojalnościowe, zamówienia i zwroty towaru"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy"
      }
    ],
    "applications": [
      "Sprawdzanie cen i dostępności towaru",
      "Rejestracja czasu pracy",
      "Kasa samoobsługowa",
      "Kupony i programy lojalnościowe",
      "Zamówienia i zwroty towaru"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-modul-skanera-kc401-scnr-sr1",
      "zebra-zasilacz-36w-pwr-bga12v36w0ww",
      "zebra-et6x-450042",
      "zebra-uchwyt-scienny-kt-152097-03",
      "zebra-modul-skanera-kc401-scnr-sr0",
      "zebra-modul-skanera-kc401-scnr-sr2",
      "zebra-uchwyt-scienny-kt-152097-04",
      "zebra-uchwyt-na-slup-kt-152096-03",
      "zebra-printkiosk-cc6000-zd621r"
    ],
    "relatedProducts": [],
    "downloads": [
      {
        "name": "Karta katalogowa Zebra KC401 (EN)",
        "type": "datasheet",
        "url": "/datasheets/zebra-kc401.pdf",
        "size": "220 KB"
      },
      {
        "name": "Katalog akcesoriów Zebra KC401 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-kc401-akcesoria.pdf",
        "size": "392 KB"
      }
    ],
    "faq": [
      {
        "question": "Który moduł skanera wybrać do Zebra KC401?",
        "answer": "Moduł [KC401-SCNR-SR1](/produkt/zebra-modul-skanera-kc401-scnr-sr1) (+25°) odczytuje kody przed kioskiem. Zebra zaleca go do większości zastosowań, a jego kąt skanowania jest taki sam jak w CC6000. Moduł [KC401-SCNR-SR0](/produkt/zebra-modul-skanera-kc401-scnr-sr0) (0°) służy do kiosku na słupie lub stojaku, gdy przedmiot jest trzymany bezpośrednio pod kioskiem. Moduł [KC401-SCNR-SR2](/produkt/zebra-modul-skanera-kc401-scnr-sr2) (−25°) odczytuje kody za kioskiem zamontowanym pod kątem, gdy przedmiot jest niżej, np. przy zwrotach paczek. Każdy moduł pracuje w orientacji pionowej i poziomej."
      },
      {
        "question": "Czym zasilić Zebra KC401?",
        "answer": "Zasilacza nie ma w zestawie. Zebra zaleca zasilacz 12 V / 36 W [PWR-BGA12V36W0WW](/produkt/zebra-zasilacz-36w-pwr-bga12v36w0ww). Przewód sieciowy C5 kupuje się osobno; wersja z wtyczką EU to [450042](/produkt/zebra-et6x-450042). Drugi sposób to PoE+ (30 W) przez port RJ45 z przełącznika sieciowego zgodnego z IEEE 802.3at/bt, klasa 4 lub wyższa. Zasilacz z CC6000 (5,4 V / 16 W) wymaga przejściówki i według Zebra zasila KC401 gorzej niż zasilacz 36 W."
      },
      {
        "question": "Jak zamontować Zebra KC401?",
        "answer": "KC401 ma mocowanie VESA. Uchwyty Zebra mają VESA 100 × 100, elementy montażowe i śrubę zabezpieczającą w zestawie. Na ścianę służy uchwyt [KT-152097-03](/produkt/zebra-uchwyt-scienny-kt-152097-03) z półką na zasilacz albo uchwyt [KT-152097-04](/produkt/zebra-uchwyt-scienny-kt-152097-04) z ulepszoną blokadą. Na słup służy uchwyt [KT-152096-03](/produkt/zebra-uchwyt-na-slup-kt-152096-03) z półką na zasilacz. Uchwyt [BRKT-DPA-SK1-01](/produkt/zebra-uchwyt-printkiosk-cc6000-brkt-dpa-sk1-01) łączy kiosk z drukarką biurkową Zebra ZD4 lub ZD6 w jednym stanowisku PrintKiosk. Te uchwyty pasują także do CC6000."
      },
      {
        "question": "Czy Zebra KC401 zastąpi CC600 i CC6000?",
        "answer": "Tak. Zebra podaje KC401 jako następcę modeli CC600 i CC6000. W miejsce CC6000 KC401 montuje się w istniejącej zabudowie, uchwytach i instalacji. Moduł skanera KC401-SCNR-SR1 ma ten sam kąt skanowania co CC6000. Do zasilania Zebra zaleca nowy zasilacz 36 W zamiast zasilacza CC6000."
      },
      {
        "question": "Czy Zebra KC401 ma Google Play i jak długo dostaje aktualizacje?",
        "answer": "Wersja KC4010B-00101CP0-A6 ma Androida z usługami Google (GMS). Kiosk pracuje na Androidzie 15, a Zebra podaje Androida 18 jako ostatnią obsługiwaną wersję. Aktualizacje systemu i poprawki zabezpieczeń (LifeGuard for Android) wymagają planu serwisowego Zebra OneCare. Jeśli program kiosku wymaga Sklepu Google Play, prosimy o kontakt przed zamówieniem."
      }
    ],
    "createdAt": "2026-10-22",
    "updatedAt": "2026-10-22"
  }
]

// Akcesoria z przewodnika KC401 (07/2026), których nie było w katalogu. Przewód sieciowy 450042
// i uchwyt PrintKiosk BRKT-DPA-SK1-01 mają już karty (et6x i zd621r); tam dopisano zgodność z KC401.
export const zebraKc401Accessories: Product[] = [
  {
    "id": "zebra-modul-skanera-kc401-scnr-sr1",
    "slug": "zebra-modul-skanera-kc401-scnr-sr1",
    "name": "Moduł skanera Zebra KC401-SCNR-SR1, kąt +25°",
    "seoTitle": "Moduł skanera Zebra KC401-SCNR-SR1 SR500 +25° do kiosku KC401",
    "seoDescription": "Moduł skanera Zebra KC401-SCNR-SR1 do kiosku Zebra KC401: czytnik SR500 1D/2D, kąt skanowania +25°, odczyt kodów przed kioskiem. PN KC401-SCNR-SR1.",
    "shortDescription": "Zebra KC401-SCNR-SR1 — moduł skanera SR500 1D/2D do kiosku Zebra KC401 z kątem skanowania +25°. Odczytuje kody przed kioskiem; Zebra zaleca ten kąt do większości zastosowań.",
    "description": "Moduł skanera Zebra KC401-SCNR-SR1 dodaje do kiosku [Zebra KC401](/produkt/zebra-kc401) czytnik SR500, który odczytuje kody kreskowe 1D i 2D. Kąt skanowania wynosi +25°. Moduł odczytuje kody przed kioskiem, np. z towaru, karty lojalnościowej lub biletu w telefonie. Zebra zaleca ten kąt do większości zastosowań. Ten sam kąt skanowania mają kioski Zebra CC6000.\n\n## Montaż na miejscu instalacji\n\nModuł montuje się na miejscu instalacji kiosku. W zestawie są 2 śruby z łbem krzyżowym. Moduł pracuje w orientacji pionowej i poziomej kiosku.\n\nDo kiosku na słupie, pod którym trzyma się przedmiot, służy [moduł 0° KC401-SCNR-SR0](/produkt/zebra-modul-skanera-kc401-scnr-sr0). Do odczytu za kioskiem, np. przy zwrotach paczek, służy [moduł −25° KC401-SCNR-SR2](/produkt/zebra-modul-skanera-kc401-scnr-sr2).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-kioskow"
    ],
    "manufacturerId": "zebra",
    "priceFrom": 740.17,
    "availability": "available",
    "images": [
      "/images/products/KC401-SCNR-SR1.png"
    ],
    "imageDescriptions": [
      "Moduł skanera Zebra KC401-SCNR-SR1 — moduł SR500 i widok z boku modułu na krawędzi kiosku z zaznaczonym polem skanowania +25°"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "KC401-SCNR-SR1"
      },
      {
        "name": "Typ",
        "value": "Moduł skanera SR500, kody 1D i 2D"
      },
      {
        "name": "Kąt skanowania",
        "value": "+25°"
      },
      {
        "name": "Zastosowanie kąta",
        "value": "Odczyt kodów przed kioskiem; zalecany do większości zastosowań; ten sam kąt co w Zebra CC6000"
      },
      {
        "name": "Orientacja kiosku",
        "value": "Pionowa lub pozioma"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Moduł skanera, 2 śruby z łbem krzyżowym"
      },
      {
        "name": "Zgodność",
        "value": "Zebra KC401"
      }
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-modul-skanera-kc401-scnr-sr0",
      "zebra-modul-skanera-kc401-scnr-sr2"
    ],
    "relatedProducts": [
      "zebra-kc401"
    ],
    "applications": [
      "Sprawdzanie cen przy kiosku",
      "Odczyt kart lojalnościowych i biletów"
    ],
    "downloads": [
      {
        "name": "Katalog akcesoriów Zebra KC401 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-kc401-akcesoria.pdf",
        "size": "392 KB"
      }
    ],
    "createdAt": "2026-10-22",
    "updatedAt": "2026-10-22"
  },
  {
    "id": "zebra-modul-skanera-kc401-scnr-sr0",
    "slug": "zebra-modul-skanera-kc401-scnr-sr0",
    "name": "Moduł skanera Zebra KC401-SCNR-SR0, kąt 0°",
    "seoTitle": "Moduł skanera Zebra KC401-SCNR-SR0 SR500 0° do kiosku KC401",
    "seoDescription": "Moduł skanera Zebra KC401-SCNR-SR0 do kiosku Zebra KC401: czytnik SR500 1D/2D, kąt skanowania 0°, do kiosku na słupie lub stojaku. PN KC401-SCNR-SR0.",
    "shortDescription": "Zebra KC401-SCNR-SR0 — moduł skanera SR500 1D/2D do kiosku Zebra KC401 z kątem skanowania 0°. Do kiosku na słupie lub stojaku, gdy przedmiot jest trzymany bezpośrednio pod kioskiem.",
    "description": "Moduł skanera Zebra KC401-SCNR-SR0 dodaje do kiosku [Zebra KC401](/produkt/zebra-kc401) czytnik SR500, który odczytuje kody kreskowe 1D i 2D. Kąt skanowania wynosi 0°. Ten kąt jest przeznaczony do kiosku zamontowanego na słupie lub stojaku. Przedmiot z kodem trzyma się bezpośrednio pod kioskiem.\n\n## Montaż na miejscu instalacji\n\nModuł montuje się na miejscu instalacji kiosku. W zestawie są 2 śruby z łbem krzyżowym. Moduł pracuje w orientacji pionowej i poziomej kiosku.\n\nDo odczytu kodów przed kioskiem Zebra zaleca w większości zastosowań [moduł +25° KC401-SCNR-SR1](/produkt/zebra-modul-skanera-kc401-scnr-sr1). Do odczytu za kioskiem, np. przy zwrotach paczek, służy [moduł −25° KC401-SCNR-SR2](/produkt/zebra-modul-skanera-kc401-scnr-sr2).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-kioskow"
    ],
    "manufacturerId": "zebra",
    "priceFrom": 740.17,
    "availability": "available",
    "images": [
      "/images/products/KC401-SCNR-SR0.png"
    ],
    "imageDescriptions": [
      "Moduł skanera Zebra KC401-SCNR-SR0 — moduł SR500 i widok z boku modułu na krawędzi kiosku z zaznaczonym polem skanowania 0°"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "KC401-SCNR-SR0"
      },
      {
        "name": "Typ",
        "value": "Moduł skanera SR500, kody 1D i 2D"
      },
      {
        "name": "Kąt skanowania",
        "value": "0°"
      },
      {
        "name": "Zastosowanie kąta",
        "value": "Kiosk na słupie lub stojaku; przedmiot trzymany bezpośrednio pod kioskiem"
      },
      {
        "name": "Orientacja kiosku",
        "value": "Pionowa lub pozioma"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Moduł skanera, 2 śruby z łbem krzyżowym"
      },
      {
        "name": "Zgodność",
        "value": "Zebra KC401"
      }
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-modul-skanera-kc401-scnr-sr1",
      "zebra-modul-skanera-kc401-scnr-sr2"
    ],
    "relatedProducts": [
      "zebra-kc401"
    ],
    "applications": [
      "Kiosk na słupie lub stojaku",
      "Sprawdzanie cen przy kiosku"
    ],
    "downloads": [
      {
        "name": "Katalog akcesoriów Zebra KC401 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-kc401-akcesoria.pdf",
        "size": "392 KB"
      }
    ],
    "createdAt": "2026-10-22",
    "updatedAt": "2026-10-22"
  },
  {
    "id": "zebra-modul-skanera-kc401-scnr-sr2",
    "slug": "zebra-modul-skanera-kc401-scnr-sr2",
    "name": "Moduł skanera Zebra KC401-SCNR-SR2, kąt −25°",
    "seoTitle": "Moduł skanera Zebra KC401-SCNR-SR2 SR500 −25° do kiosku KC401",
    "seoDescription": "Moduł skanera Zebra KC401-SCNR-SR2 do kiosku Zebra KC401: czytnik SR500 1D/2D, kąt skanowania −25°, odczyt kodów za kioskiem. PN KC401-SCNR-SR2.",
    "shortDescription": "Zebra KC401-SCNR-SR2 — moduł skanera SR500 1D/2D do kiosku Zebra KC401 z kątem skanowania −25°. Odczytuje kody za kioskiem zamontowanym pod kątem, np. przy zwrotach paczek.",
    "description": "Moduł skanera Zebra KC401-SCNR-SR2 dodaje do kiosku [Zebra KC401](/produkt/zebra-kc401) czytnik SR500, który odczytuje kody kreskowe 1D i 2D. Kąt skanowania wynosi −25°. Ten kąt jest przeznaczony do kiosku zamontowanego pod kątem, gdy kod ma być odczytany za kioskiem, a przedmiot jest niżej. Przykładem zastosowania są zwroty paczek.\n\n## Montaż na miejscu instalacji\n\nModuł montuje się na miejscu instalacji kiosku. W zestawie są 2 śruby z łbem krzyżowym. Moduł pracuje w orientacji pionowej i poziomej kiosku.\n\nDo odczytu kodów przed kioskiem Zebra zaleca w większości zastosowań [moduł +25° KC401-SCNR-SR1](/produkt/zebra-modul-skanera-kc401-scnr-sr1). Do kiosku na słupie, pod którym trzyma się przedmiot, służy [moduł 0° KC401-SCNR-SR0](/produkt/zebra-modul-skanera-kc401-scnr-sr0).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-kioskow"
    ],
    "manufacturerId": "zebra",
    "priceFrom": 740.17,
    "availability": "available",
    "images": [
      "/images/products/KC401-SCNR-SR2.png"
    ],
    "imageDescriptions": [
      "Moduł skanera Zebra KC401-SCNR-SR2 — moduł SR500 i widok z boku modułu na krawędzi kiosku z zaznaczonym polem skanowania −25°"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "KC401-SCNR-SR2"
      },
      {
        "name": "Typ",
        "value": "Moduł skanera SR500, kody 1D i 2D"
      },
      {
        "name": "Kąt skanowania",
        "value": "−25°"
      },
      {
        "name": "Zastosowanie kąta",
        "value": "Kiosk zamontowany pod kątem; odczyt za kioskiem, przedmiot niżej, np. zwroty paczek"
      },
      {
        "name": "Orientacja kiosku",
        "value": "Pionowa lub pozioma"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Moduł skanera, 2 śruby z łbem krzyżowym"
      },
      {
        "name": "Zgodność",
        "value": "Zebra KC401"
      }
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-modul-skanera-kc401-scnr-sr1",
      "zebra-modul-skanera-kc401-scnr-sr0"
    ],
    "relatedProducts": [
      "zebra-kc401"
    ],
    "applications": [
      "Zwroty paczek",
      "Kiosk zamontowany pod kątem"
    ],
    "downloads": [
      {
        "name": "Katalog akcesoriów Zebra KC401 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-kc401-akcesoria.pdf",
        "size": "392 KB"
      }
    ],
    "createdAt": "2026-10-22",
    "updatedAt": "2026-10-22"
  },
  {
    "id": "zebra-zasilacz-36w-pwr-bga12v36w0ww",
    "slug": "zebra-zasilacz-36w-pwr-bga12v36w0ww",
    "name": "Zasilacz Zebra 36 W PWR-BGA12V36W0WW do KC401",
    "seoTitle": "Zasilacz Zebra PWR-BGA12V36W0WW 12 V 36 W do kiosku KC401",
    "seoDescription": "Zasilacz Zebra PWR-BGA12V36W0WW do kiosku Zebra KC401: 12 V DC, 3 A, 36 W, wtyk 5,5/2,1 mm. Przewód sieciowy C5 osobno (EU: 450042).",
    "shortDescription": "Zebra PWR-BGA12V36W0WW — zasilacz 12 V DC / 36 W, który Zebra zaleca do kiosku Zebra KC401. Przewód sieciowy C5 kupuje się osobno.",
    "description": "Zasilacz Zebra PWR-BGA12V36W0WW zasila kiosk [Zebra KC401](/produkt/zebra-kc401). Ma wyjście 12 V DC, 3 A, 36 W i wtyk 5,5/2,1 mm. Zasilacz spełnia wymagania sprawności energetycznej poziomu VI. Zebra zaleca ten zasilacz do KC401. Kiosk nie ma zasilacza w zestawie.\n\n## Przewód sieciowy kupuje się osobno\n\nZasilacz łączy się z gniazdkiem uziemionym przewodem sieciowym z wtykiem C5. Przewodu nie ma w zestawie zasilacza. Wersja z wtyczką EU to [przewód sieciowy Zebra 450042](/produkt/zebra-et6x-450042).\n\nZasilacz nie jest potrzebny, gdy KC401 jest zasilany przez PoE+ (30 W) z przełącznika sieciowego. Uchwyty [KT-152097-03](/produkt/zebra-uchwyt-scienny-kt-152097-03) i [KT-152096-03](/produkt/zebra-uchwyt-na-slup-kt-152096-03) mają półkę na zasilacz.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-kioskow"
    ],
    "manufacturerId": "zebra",
    "priceFrom": 190.73,
    "availability": "on-order",
    "images": [
      "/images/products/placeholder.svg"
    ],
    "imageDescriptions": [
      "Zebra — brak zdjęcia akcesorium"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "PWR-BGA12V36W0WW"
      },
      {
        "name": "Typ",
        "value": "Zasilacz AC/DC, poziom sprawności VI"
      },
      {
        "name": "Wyjście",
        "value": "12 V DC, 3 A, 36 W"
      },
      {
        "name": "Wtyk",
        "value": "5,5/2,1 mm"
      },
      {
        "name": "Przewód sieciowy",
        "value": "Uziemiony, z wtykiem C5, kupowany osobno (EU: 450042)"
      },
      {
        "name": "Zgodność",
        "value": "Zebra KC401"
      }
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-et6x-450042",
      "zebra-uchwyt-scienny-kt-152097-03",
      "zebra-uchwyt-na-slup-kt-152096-03"
    ],
    "relatedProducts": [
      "zebra-kc401"
    ],
    "applications": [
      "Zasilanie kiosku Zebra KC401 z gniazdka sieciowego"
    ],
    "downloads": [
      {
        "name": "Katalog akcesoriów Zebra KC401 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-kc401-akcesoria.pdf",
        "size": "392 KB"
      }
    ],
    "createdAt": "2026-10-22",
    "updatedAt": "2026-10-22"
  },
  {
    "id": "zebra-uchwyt-scienny-kt-152097-03",
    "slug": "zebra-uchwyt-scienny-kt-152097-03",
    "name": "Uchwyt ścienny Zebra KT-152097-03 z półką na zasilacz",
    "seoTitle": "Uchwyt ścienny Zebra KT-152097-03 do kiosku KC401 i CC6000, VESA 100 × 100",
    "seoDescription": "Uchwyt ścienny Zebra KT-152097-03 do kiosku Zebra KC401 i CC6000: VESA 100 × 100, półka na zasilacz, śruba zabezpieczająca w zestawie. PN KT-152097-03.",
    "shortDescription": "Zebra KT-152097-03 — uchwyt ścienny VESA 100 × 100 z półką na zasilacz do kiosków Zebra KC401 i CC6000. W zestawie są elementy montażowe i śruba zabezpieczająca.",
    "description": "Uchwyt ścienny Zebra KT-152097-03 mocuje na ścianie kiosk [Zebra KC401](/produkt/zebra-kc401) lub Zebra CC6000. Uchwyt ma mocowanie VESA 100 × 100 i półkę na zasilacz kiosku. Na półce mieści się zasilacz KC401 albo zasilacz CC6000. Masa uchwytu to ok. 0,41–0,45 kg.\n\nW zestawie są elementy do przykręcenia kiosku do uchwytu i śruba zabezpieczająca. Śruba blokuje kiosk na uchwycie.\n\nUchwyt pasuje do KC401 i CC6000, więc przy wymianie CC6000 na KC401 uchwyt zostaje na ścianie. [Zasilacz 36 W PWR-BGA12V36W0WW](/produkt/zebra-zasilacz-36w-pwr-bga12v36w0ww) kupuje się osobno. Uchwyt ścienny z ulepszoną blokadą to [KT-152097-04](/produkt/zebra-uchwyt-scienny-kt-152097-04).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-kioskow"
    ],
    "manufacturerId": "zebra",
    "priceFrom": 187.02,
    "availability": "available",
    "images": [
      "/images/products/KT-152097-03.png"
    ],
    "imageDescriptions": [
      "Uchwyt ścienny Zebra KT-152097-03 — płyta VESA z półką na zasilacz, śruby i rysunek montażu zasilacza"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "KT-152097-03"
      },
      {
        "name": "Typ",
        "value": "Uchwyt ścienny z półką na zasilacz"
      },
      {
        "name": "Mocowanie",
        "value": "VESA 100 × 100"
      },
      {
        "name": "Masa",
        "value": "ok. 0,41–0,45 kg (0,9–1,0 lb)"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Uchwyt, elementy montażowe kiosku, śruba zabezpieczająca"
      },
      {
        "name": "Zgodność",
        "value": "Zebra KC401, Zebra CC6000"
      }
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-zasilacz-36w-pwr-bga12v36w0ww",
      "zebra-uchwyt-scienny-kt-152097-04",
      "zebra-uchwyt-na-slup-kt-152096-03"
    ],
    "relatedProducts": [
      "zebra-kc401"
    ],
    "applications": [
      "Montaż kiosku Zebra KC401 na ścianie",
      "Wymiana Zebra CC6000 na KC401"
    ],
    "downloads": [
      {
        "name": "Katalog akcesoriów Zebra KC401 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-kc401-akcesoria.pdf",
        "size": "392 KB"
      }
    ],
    "createdAt": "2026-10-22",
    "updatedAt": "2026-10-22"
  },
  {
    "id": "zebra-uchwyt-scienny-kt-152097-04",
    "slug": "zebra-uchwyt-scienny-kt-152097-04",
    "name": "Uchwyt ścienny Zebra KT-152097-04 z ulepszoną blokadą",
    "seoTitle": "Uchwyt ścienny Zebra KT-152097-04 do kiosku KC401 i CC6000, VESA 100 × 100",
    "seoDescription": "Uchwyt ścienny Zebra KT-152097-04 do kiosku Zebra KC401 i CC6000: VESA 100 × 100, miejsce na zasilacz, śruba zabezpieczająca w zestawie. PN KT-152097-04.",
    "shortDescription": "Zebra KT-152097-04 — uchwyt ścienny VESA 100 × 100 z miejscem na zasilacz do kiosków Zebra KC401 i CC6000. Zastępuje KT-152097-01 i ma ulepszoną blokadę.",
    "description": "Uchwyt ścienny Zebra KT-152097-04 mocuje na ścianie kiosk [Zebra KC401](/produkt/zebra-kc401) lub Zebra CC6000. Uchwyt ma mocowanie VESA 100 × 100 i miejsce na zasilacz kiosku. Zastępuje uchwyt KT-152097-01 i ma ulepszony mechanizm blokady.\n\nW zestawie są elementy do przykręcenia kiosku do uchwytu i śruba zabezpieczająca. Śruba blokuje kiosk na uchwycie.\n\nUchwyt pasuje do KC401 i CC6000, więc przy wymianie CC6000 na KC401 uchwyt zostaje na ścianie. [Zasilacz 36 W PWR-BGA12V36W0WW](/produkt/zebra-zasilacz-36w-pwr-bga12v36w0ww) kupuje się osobno. Uchwyt ścienny z półką na zasilacz to [KT-152097-03](/produkt/zebra-uchwyt-scienny-kt-152097-03).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-kioskow"
    ],
    "manufacturerId": "zebra",
    "priceFrom": 211.0,
    "availability": "unavailable",
    "images": [
      "/images/products/KT-152097-04.png"
    ],
    "imageDescriptions": [
      "Uchwyt ścienny Zebra KT-152097-04 — czarna płyta VESA z otworami montażowymi i woreczek ze śrubami"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "KT-152097-04"
      },
      {
        "name": "Typ",
        "value": "Uchwyt ścienny z miejscem na zasilacz"
      },
      {
        "name": "Mocowanie",
        "value": "VESA 100 × 100"
      },
      {
        "name": "Zastępuje",
        "value": "KT-152097-01 (ulepszony mechanizm blokady)"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Uchwyt, elementy montażowe kiosku, śruba zabezpieczająca"
      },
      {
        "name": "Zgodność",
        "value": "Zebra KC401, Zebra CC6000"
      }
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-zasilacz-36w-pwr-bga12v36w0ww",
      "zebra-uchwyt-scienny-kt-152097-03",
      "zebra-uchwyt-na-slup-kt-152096-03"
    ],
    "relatedProducts": [
      "zebra-kc401"
    ],
    "applications": [
      "Montaż kiosku Zebra KC401 na ścianie",
      "Wymiana Zebra CC6000 na KC401"
    ],
    "downloads": [
      {
        "name": "Katalog akcesoriów Zebra KC401 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-kc401-akcesoria.pdf",
        "size": "392 KB"
      }
    ],
    "createdAt": "2026-10-22",
    "updatedAt": "2026-10-22"
  },
  {
    "id": "zebra-uchwyt-na-slup-kt-152096-03",
    "slug": "zebra-uchwyt-na-slup-kt-152096-03",
    "name": "Uchwyt na słup Zebra KT-152096-03 z półką na zasilacz",
    "seoTitle": "Uchwyt na słup Zebra KT-152096-03 do kiosku KC401 i CC6000, VESA 100 × 100",
    "seoDescription": "Uchwyt na słup Zebra KT-152096-03 do kiosku Zebra KC401 i CC6000: VESA 100 × 100, półka na zasilacz, śruba zabezpieczająca w zestawie. PN KT-152096-03.",
    "shortDescription": "Zebra KT-152096-03 — uchwyt VESA 100 × 100 do montażu kiosku Zebra KC401 lub CC6000 na słupie, z półką na zasilacz. W zestawie są elementy montażowe i śruba zabezpieczająca.",
    "description": "Uchwyt Zebra KT-152096-03 mocuje kiosk [Zebra KC401](/produkt/zebra-kc401) lub Zebra CC6000 bezpośrednio na słupie. Uchwyt ma mocowanie VESA 100 × 100 i półkę na zasilacz kiosku. Masa uchwytu to ok. 0,9–1,1 kg.\n\nW zestawie są elementy do przykręcenia kiosku do uchwytu i śruba zabezpieczająca. Śruba blokuje kiosk na uchwycie.\n\nUchwyt pasuje do KC401 i CC6000, więc przy wymianie CC6000 na KC401 uchwyt zostaje na słupie. Do kiosku na słupie, pod którym trzyma się przedmiot z kodem, służy [moduł skanera 0° KC401-SCNR-SR0](/produkt/zebra-modul-skanera-kc401-scnr-sr0). [Zasilacz 36 W PWR-BGA12V36W0WW](/produkt/zebra-zasilacz-36w-pwr-bga12v36w0ww) kupuje się osobno.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-kioskow"
    ],
    "manufacturerId": "zebra",
    "priceFrom": 374.0,
    "availability": "unavailable",
    "images": [
      "/images/products/placeholder.svg"
    ],
    "imageDescriptions": [
      "Zebra — brak zdjęcia akcesorium"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "KT-152096-03"
      },
      {
        "name": "Typ",
        "value": "Uchwyt na słup z półką na zasilacz"
      },
      {
        "name": "Mocowanie",
        "value": "VESA 100 × 100"
      },
      {
        "name": "Masa",
        "value": "ok. 0,9–1,1 kg (2,0–2,4 lb)"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Uchwyt, elementy montażowe kiosku, śruba zabezpieczająca"
      },
      {
        "name": "Zgodność",
        "value": "Zebra KC401, Zebra CC6000"
      }
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-modul-skanera-kc401-scnr-sr0",
      "zebra-zasilacz-36w-pwr-bga12v36w0ww",
      "zebra-uchwyt-scienny-kt-152097-03"
    ],
    "relatedProducts": [
      "zebra-kc401"
    ],
    "applications": [
      "Montaż kiosku Zebra KC401 na słupie",
      "Wymiana Zebra CC6000 na KC401"
    ],
    "downloads": [
      {
        "name": "Katalog akcesoriów Zebra KC401 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-kc401-akcesoria.pdf",
        "size": "392 KB"
      }
    ],
    "createdAt": "2026-10-22",
    "updatedAt": "2026-10-22"
  }
]

