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
    "relatedAccessories": [],
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
        "answer": "Moduł KC401-SCNR-SR1 (+25°) odczytuje kody przed kioskiem. Zebra zaleca go do większości zastosowań, a jego kąt skanowania jest taki sam jak w CC6000. Moduł KC401-SCNR-SR0 (0°) służy do kiosku na słupie lub stojaku, gdy przedmiot jest trzymany bezpośrednio pod kioskiem. Moduł KC401-SCNR-SR2 (−25°) odczytuje kody za kioskiem zamontowanym pod kątem, gdy przedmiot jest niżej, np. przy zwrotach paczek. Każdy moduł pracuje w orientacji pionowej i poziomej."
      },
      {
        "question": "Czym zasilić Zebra KC401?",
        "answer": "Zasilacza nie ma w zestawie. Zebra zaleca zasilacz 12 V / 36 W PWR-BGA12V36W0WW. Przewód sieciowy C5 kupuje się osobno; wersja z wtyczką EU to 450042. Drugi sposób to PoE+ (30 W) przez port RJ45 z przełącznika sieciowego zgodnego z IEEE 802.3at/bt, klasa 4 lub wyższa. Zasilacz z CC6000 (5,4 V / 16 W) wymaga przejściówki i według Zebra zasila KC401 gorzej niż zasilacz 36 W."
      },
      {
        "question": "Jak zamontować Zebra KC401?",
        "answer": "KC401 ma mocowanie VESA. Uchwyty Zebra mają VESA 100 × 100, elementy montażowe i śrubę zabezpieczającą w zestawie. Na ścianę służy uchwyt KT-152097-03 z półką na zasilacz albo uchwyt KT-152097-04 z ulepszoną blokadą. Na słup służy uchwyt KT-152096-03 z półką na zasilacz. Uchwyt BRKT-DPA-SK1-01 łączy kiosk z drukarką biurkową Zebra ZD4 lub ZD6 w jednym stanowisku PrintKiosk. Te uchwyty pasują także do CC6000."
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

export const zebraKc401Accessories: Product[] = []
