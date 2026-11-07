import type { Product } from './products'

// Brother QL (rolki DK) i etykieciarki P-touch (taśmy TZe). Ceny i stany przychodzą na żywo
// od dystrybutora (prefiks DI w lib/ingram.ts), dlatego karty nie mają priceFrom.

export const brotherQlProducts: Product[] = [
  {
    "id": "brother-ql-600",
    "slug": "brother-ql-600",
    "name": "Brother QL-600",
    "seoTitle": "Brother QL-600",
    "seoDescription": "Brother QL-600: drukarka etykiet DK 12–62 mm, 300 × 600 dpi, 71 mm/s (44 etykiety/min), USB, obcinarka. Obudowa niebieska, szara lub czerwona.",
    "shortDescription": "Biurkowa drukarka etykiet na rolki DK o szerokości 12–62 mm, z USB i automatyczną obcinarką. Drukuje do 71 mm/s (44 etykiety adresowe na minutę), 300 × 600 dpi. Trzy kolory obudowy.",
    "description": "Brother QL-600 to biurkowa drukarka etykiet podłączana do komputera przez USB. Drukuje etykiety adresowe, wysyłkowe i pocztowe, opisy segregatorów oraz tymczasowe oznaczenia. Pracuje z komputerami PC i Mac.\n\nDruk jest termiczny, w rozdzielczości 300 × 300 dpi lub 300 × 600 dpi w trybie wysokiej rozdzielczości. Prędkość druku wynosi do 71 mm/s, czyli 44 standardowe etykiety adresowe na minutę. Maksymalna szerokość druku wynosi 60,96 mm.\n\nDrukarka przyjmuje rolki DK o szerokości od 12 do 62 mm: z taśmą ciągłą lub z etykietami wycinanymi. Na taśmie ciągłej automatyczna obcinarka odcina etykietę o długości ustawionej w programie, do 1 m. W zestawie jest rolka DK z taśmą ciągłą 62 mm o długości 8 m.\n\nEtykiety projektuje się w bezpłatnym programie P-touch Editor dla Windows i macOS. Na etykiecie można umieścić tekst, obrazy, ramki i kody kreskowe, m.in. CODE128, EAN-13, QR Code i Data Matrix. Dla Windows dostępny jest zestaw SDK b-PAC.\n\nQL-600 występuje w trzech kolorach obudowy: niebieskim (QL-600B), szarym (QL-600G) i czerwonym (QL-600R), zawsze z białą dolną częścią. Parametry wszystkich wersji są takie same. Model QL-700 o tych samych wymiarach drukuje do 150 mm/s.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "biurkowe-drukarki-etykiet",
      "termiczne-drukarki-etykiet"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/ql-600b-1.png",
      "/images/products/brother/ql-600b-2.png",
      "/images/products/brother/ql-600b-3.png",
      "/images/products/brother/ql-600g-1.png",
      "/images/products/brother/ql-600g-2.png",
      "/images/products/brother/ql-600g-3.png",
      "/images/products/brother/ql-600r-1.png",
      "/images/products/brother/ql-600r-2.png",
      "/images/products/brother/ql-600r-3.png",
      "/images/products/brother-ql-600-etykieta-adresowa.webp",
      "/images/products/brother-ql-600-identyfikator.webp",
      "/images/products/brother-ql-600-segregatory.webp",
      "/images/products/brother-ql-600-oznaczenie-sali.webp",
      "/images/products/brother-ql-600-kartony.webp"
    ],
    "imageDescriptions": [
      "Brother QL-600B (niebieska) — drukarka etykiet, widok pod kątem",
      "Brother QL-600B (niebieska) — widok z przodu",
      "Brother QL-600B (niebieska) — widok pod kątem z drugiej strony",
      "Brother QL-600G (szara) — drukarka etykiet, widok pod kątem",
      "Brother QL-600G (szara) — widok z przodu",
      "Brother QL-600G (szara) — widok pod kątem z drugiej strony",
      "Brother QL-600R (czerwona) — drukarka etykiet, widok pod kątem",
      "Brother QL-600R (czerwona) — widok z przodu",
      "Brother QL-600R (czerwona) — widok pod kątem z drugiej strony",
      "Etykieta adresowa z drukarki Brother QL-600 na kopercie",
      "Identyfikator gościa wydrukowany na etykiecie DK",
      "Etykiety grzbietowe na segregatorach",
      "Etykieta z oznaczeniem sali na szklanych drzwiach",
      "Etykiety z kodem kreskowym na kartonach archiwizacyjnych"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termiczna bezpośrednia"
      },
      {
        "name": "Rozdzielczość",
        "value": "300 × 300 dpi (standard), 300 × 600 dpi (tryb wysokiej rozdzielczości)"
      },
      {
        "name": "Prędkość druku",
        "value": "do 71 mm/s (44 standardowe etykiety adresowe na minutę)"
      },
      {
        "name": "Szerokość etykiety",
        "value": "12–62 mm"
      },
      {
        "name": "Maks. szerokość druku",
        "value": "60,96 mm"
      },
      {
        "name": "Długość etykiety",
        "value": "do 1 m"
      },
      {
        "name": "Obcinarka",
        "value": "automatyczna, pełne cięcie"
      },
      {
        "name": "Czujnik nośnika",
        "value": "refleksyjny"
      },
      {
        "name": "Nośniki",
        "value": "rolki DK: taśma ciągła i etykiety wycinane"
      },
      {
        "name": "Materiały DK",
        "value": "etykiety wycinane: DK-11201 (29 × 90 mm), DK-11208 (38 × 90 mm), DK-11209 (29 × 62 mm), DK-11202 (62 × 100 mm), DK-11203 (17 × 87 mm), DK-11204 (17 × 54 mm), DK-11221 (23 × 23 mm), DK-11207 (Ø 58 mm, folia), DK-11219 (Ø 12 mm), DK-11218 (Ø 24 mm), DK-11234 (60 × 86 mm); taśmy ciągłe papierowe (30,48 m): DK-22214 (12 mm), DK-22210 (29 mm), DK-22225 (38 mm), DK-22223 (50 mm), DK-N55224 (54 mm, nieprzylepna), DK-22205 (62 mm), DK-44205 (62 mm, klej usuwalny), DK-44605 (62 mm, żółta, klej usuwalny); taśmy ciągłe foliowe (15,24 m): DK-22211 (29 mm), DK-22212 (62 mm), DK-22606 (62 mm, żółta), DK-22113 (62 mm, przezroczysta)"
      },
      {
        "name": "Interfejsy",
        "value": "USB 2.0 Full Speed (złącze mini-B)"
      },
      {
        "name": "Przyciski",
        "value": "3"
      },
      {
        "name": "Zasilanie",
        "value": "220–240 V AC, zasilacz wbudowany"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "128 × 221 × 153 mm"
      },
      {
        "name": "Masa",
        "value": "1,12 kg"
      },
      {
        "name": "Kolor obudowy",
        "value": "niebieski (QL-600B), szary (QL-600G) lub czerwony (QL-600R); dolna część biała"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (Windows, macOS); dodatek do Microsoft Word, Excel i Outlook (Windows)"
      },
      {
        "name": "SDK",
        "value": "b-PAC (Windows)"
      },
      {
        "name": "Polecenia drukarki",
        "value": "Raster"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows 7, 8, 8.1, 10; macOS 10.12–10.15; Linux"
      },
      {
        "name": "Kody kreskowe (P-touch Editor)",
        "value": "CODE39, CODE128, GS1-128 (UCC/EAN-128), ITF (I-2/5), CODABAR (NW-7), UPC-A, UPC-E, EAN-13, EAN-8, ISBN-2, ISBN-5, Laser Barcode, POSTNET, GS1 DataBar (RSS), PDF417, QR Code, Data Matrix, MaxiCode, IMB"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, rolka DK z taśmą ciągłą 62 mm (8 m), kabel USB, przewód zasilający, dokumentacja"
      },
      {
        "name": "Part Number",
        "value": "QL600BXX1 (QL-600B), QL600GXX1 (QL-600G), QL600RXX1 (QL-600R)"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "QL600BXX1",
        "name": "Brother QL-600B",
        "attributes": {
          "Kolor obudowy": "niebieski"
        },
        "gtin13": "4977766798471",
        "availability": "unavailable"
      },
      {
        "partNumber": "QL600GXX1",
        "name": "Brother QL-600G",
        "attributes": {
          "Kolor obudowy": "szary"
        },
        "gtin13": "4977766798457",
        "availability": "unavailable"
      },
      {
        "partNumber": "QL600RXX1",
        "name": "Brother QL-600R",
        "attributes": {
          "Kolor obudowy": "czerwony"
        },
        "gtin13": "4977766798518",
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-ql-700",
      "brother-ql-800"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-ql-600-karta-katalogowa.pdf",
        "size": "2,3 MB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/ql/ql600b",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-ql-700",
    "slug": "brother-ql-700",
    "name": "Brother QL-700",
    "seoTitle": "Brother QL-700",
    "seoDescription": "Brother QL-700: drukarka etykiet DK 12–62 mm, 150 mm/s (93 etykiety/min), 300 × 600 dpi, USB, obcinarka, P-touch Editor Lite bez sterownika.",
    "shortDescription": "Drukarka etykiet z USB i wbudowanym programem P-touch Editor Lite: na komputerze z Windows drukuje bez instalacji sterownika. Rolki DK 12–62 mm, do 150 mm/s (93 etykiety/min), obcinarka.",
    "description": "Brother QL-700 to biurkowa drukarka etykiet z interfejsem USB. Służy do druku etykiet adresowych, oznaczeń, identyfikatorów i etykiet z kodami kreskowymi. Drukarka ma wymiary 128 × 221 × 153 mm i waży 1,12 kg.\n\nKomputer z Windows rozpoznaje podłączoną drukarkę jako dysk USB z programem P-touch Editor Lite. Program uruchamia się z tego dysku, więc projekt i wydruk etykiety nie wymagają instalacji sterownika ani oprogramowania.\n\nDrukarka drukuje do 150 mm/s, czyli 93 standardowe etykiety adresowe na minutę. Rozdzielczość wynosi 300 × 300 dpi, a w trybie wysokiej rozdzielczości 300 × 600 dpi. Druk jest termiczny, jednokolorowy.\n\nQL-700 przyjmuje rolki DK o szerokości od 12 do 62 mm, z taśmą ciągłą lub z etykietami wycinanymi. Automatyczna obcinarka typu gilotynowego odcina etykiety z taśmy ciągłej o długości od 12,7 mm do 1 m. W zestawie są dwie rolki startowe: 100 etykiet DK-11201 (29 × 90 mm) i 8 m taśmy ciągłej 62 mm.\n\nPełny, bezpłatny program P-touch Editor dodaje do etykiet obrazy, ramki i kody kreskowe, m.in. CODE128, EAN-13, QR Code i Data Matrix. Do wyboru jest zestaw gotowych szablonów etykiet do zastosowań biurowych i domowych. Dodatek do Microsoft Word, Excel i Outlook drukuje adresy prosto z tych programów. Druk czarno-czerwony obsługują modele serii QL-800.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "biurkowe-drukarki-etykiet",
      "termiczne-drukarki-etykiet"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/ql-700-1.png",
      "/images/products/brother/ql-700-2.png",
      "/images/products/brother/ql-700-3.png"
    ],
    "imageDescriptions": [
      "Brother QL-700 — drukarka etykiet, widok pod kątem",
      "Brother QL-700 — widok z przodu",
      "Brother QL-700 — widok pod kątem z drugiej strony"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termiczna bezpośrednia"
      },
      {
        "name": "Rozdzielczość",
        "value": "300 × 300 dpi (standard), 300 × 600 dpi (tryb wysokiej rozdzielczości)"
      },
      {
        "name": "Prędkość druku",
        "value": "do 150 mm/s (93 standardowe etykiety adresowe na minutę)"
      },
      {
        "name": "Kolory druku",
        "value": "jeden kolor"
      },
      {
        "name": "Szerokość etykiety",
        "value": "12–62 mm"
      },
      {
        "name": "Maks. szerokość druku",
        "value": "60,96 mm"
      },
      {
        "name": "Długość etykiety",
        "value": "12,7 mm – 1 m"
      },
      {
        "name": "Obcinarka",
        "value": "automatyczna, gilotynowa, pełne cięcie"
      },
      {
        "name": "Czujnik nośnika",
        "value": "refleksyjny"
      },
      {
        "name": "Nośniki",
        "value": "rolki DK: taśma ciągła i etykiety wycinane"
      },
      {
        "name": "Materiały DK",
        "value": "etykiety wycinane: DK-11201 (29 × 90 mm), DK-11208 (38 × 90 mm), DK-11209 (29 × 62 mm), DK-11202 (62 × 100 mm), DK-11203 (17 × 87 mm), DK-11204 (17 × 54 mm), DK-11221 (23 × 23 mm), DK-11207 (Ø 58 mm, folia), DK-11219 (Ø 12 mm), DK-11218 (Ø 24 mm), DK-11234 (60 × 86 mm); taśmy ciągłe papierowe (30,48 m): DK-22214 (12 mm), DK-22210 (29 mm), DK-22225 (38 mm), DK-22223 (50 mm), DK-N55224 (54 mm, nieprzylepna), DK-22205 (62 mm), DK-44205 (62 mm, klej usuwalny), DK-44605 (62 mm, żółta, klej usuwalny); taśmy ciągłe foliowe (15,24 m): DK-22211 (29 mm), DK-22212 (62 mm), DK-22606 (62 mm, żółta), DK-22113 (62 mm, przezroczysta)"
      },
      {
        "name": "Interfejsy",
        "value": "USB 2.0 Full Speed (złącze mini-B)"
      },
      {
        "name": "Pamięć",
        "value": "6 MB flash na szablony etykiet"
      },
      {
        "name": "Przyciski",
        "value": "4: zasilanie, Editor Lite, podawanie, cięcie"
      },
      {
        "name": "Zasilanie",
        "value": "zasilacz wbudowany"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "128 × 221 × 153 mm"
      },
      {
        "name": "Masa",
        "value": "1,12 kg"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor Lite (wbudowany, Windows), P-touch Editor, dodatek do Microsoft Word, Excel i Outlook"
      },
      {
        "name": "SDK",
        "value": "b-PAC (Windows)"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows, macOS, Linux"
      },
      {
        "name": "Kody kreskowe (P-touch Editor)",
        "value": "CODE39, CODE128, GS1-128 (UCC/EAN-128), ITF (I-2/5), CODABAR (NW-7), UPC-A, UPC-E, EAN-13, EAN-8, ISBN-2, ISBN-5, Laser Barcode, POSTNET, RSS (GS1 DataBar), PDF417, QR Code, Data Matrix, MaxiCode, CODE93, MSI, Aztec"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, 100 etykiet adresowych DK-11201 (29 × 90 mm), rolka DK-22205 z taśmą ciągłą 62 mm (8 m), kabel USB, przewód zasilający, dokumentacja"
      },
      {
        "name": "Part Number",
        "value": "QL700ZG1"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "QL700ZG1",
        "name": "Brother QL-700",
        "attributes": {},
        "gtin13": "4977766707084",
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-ql-600",
      "brother-ql-800"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (EN)",
        "type": "datasheet",
        "url": "/downloads/brother-ql-700-karta-katalogowa.pdf",
        "size": "746 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/ql/ql700",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-ql-800",
    "slug": "brother-ql-800",
    "name": "Brother QL-800",
    "seoTitle": "Brother QL-800",
    "seoDescription": "Brother QL-800: drukarka etykiet DK 12–62 mm, druk czarno-czerwony (DK-22251), 148 mm/s, 300 × 600 dpi, USB, wbudowany P-touch Editor Lite.",
    "shortDescription": "Drukarka etykiet z USB i drukiem w kolorze czarnym i czerwonym na rolce DK-22251, bez tuszu i tonera. Rolki DK 12–62 mm, do 148 mm/s (93 etykiety/min), 300 × 600 dpi, wbudowany P-touch Editor Lite.",
    "description": "Brother QL-800 to biurkowa drukarka etykiet z interfejsem USB i drukiem w dwóch kolorach. Na rolce DK-22251 drukuje w kolorze czarnym i czerwonym, bez tuszu i tonera. Czerwony nadruk wyróżnia np. datę przydatności, alergeny lub ostrzeżenie na etykiecie paczki.\n\nW druku czarnym drukarka osiąga 148 mm/s, czyli 93 standardowe etykiety adresowe na minutę. Druk czarno-czerwony ma prędkość 24 mm/s, co odpowiada 15 etykietom na minutę. Rozdzielczość wynosi 300 × 300 dpi, a w trybie wysokiej rozdzielczości 300 × 600 dpi.\n\nDrukarka przyjmuje rolki DK o szerokości od 12 do 62 mm, z taśmą ciągłą lub z etykietami wycinanymi. Automatyczna obcinarka odcina etykiety z taśmy ciągłej o długości od 12,7 mm do 1 m. W zestawie są rolki startowe: 100 etykiet DK-11201 (29 × 90 mm) i 5 m taśmy DK-22251.\n\nPo podłączeniu kablem USB komputer widzi drukarkę jak pamięć USB z programem P-touch Editor Lite, bez instalacji sterownika. Ten program drukuje tylko na czarno. Pełny P-touch Editor dla Windows i macOS drukuje w dwóch kolorach. Wersja dla Windows pobiera dane z plików CSV, Excel i Access.\n\nQL-800 ma zasilacz wbudowany w obudowę i łączy się z komputerem wyłącznie przez USB. Model QL-810Wc dodaje Wi-Fi i AirPrint, a QL-820NWBc także Ethernet, Bluetooth i wyświetlacz LCD. Oba te modele drukują na czarno z prędkością 176 mm/s.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "biurkowe-drukarki-etykiet",
      "termiczne-drukarki-etykiet"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/ql-800-1.png",
      "/images/products/brother/ql-800-2.png"
    ],
    "imageDescriptions": [
      "Brother QL-800 — drukarka etykiet, widok pod kątem",
      "Brother QL-800 — widok pod kątem z drugiej strony"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termiczna bezpośrednia, druk jedno- lub dwukolorowy"
      },
      {
        "name": "Rozdzielczość",
        "value": "300 × 300 dpi (standard), 300 × 600 dpi (tryb wysokiej rozdzielczości)"
      },
      {
        "name": "Prędkość druku",
        "value": "druk czarny: do 148 mm/s (93 etykiety/min); druk czarno-czerwony: do 24 mm/s (15 etykiet/min)"
      },
      {
        "name": "Druk dwukolorowy",
        "value": "czarny i czerwony, wyłącznie na rolce DK-22251"
      },
      {
        "name": "Szerokość etykiety",
        "value": "12–62 mm"
      },
      {
        "name": "Maks. szerokość druku",
        "value": "58,93 mm"
      },
      {
        "name": "Długość etykiety",
        "value": "12,7 mm – 1 m"
      },
      {
        "name": "Obcinarka",
        "value": "automatyczna, gilotynowa, pełne cięcie"
      },
      {
        "name": "Czujnik nośnika",
        "value": "refleksyjny"
      },
      {
        "name": "Nośniki",
        "value": "rolki DK: taśma ciągła i etykiety wycinane"
      },
      {
        "name": "Materiały DK",
        "value": "etykiety wycinane: DK-11201 (29 × 90 mm), DK-11208 (38 × 90 mm), DK-11209 (29 × 62 mm), DK-11202 (62 × 100 mm), DK-11203 (17 × 87 mm), DK-11204 (17 × 54 mm), DK-11221 (23 × 23 mm), DK-11207 (Ø 58 mm, folia), DK-11219 (Ø 12 mm), DK-11218 (Ø 24 mm), DK-11234 (60 × 86 mm); taśmy ciągłe papierowe (30,48 m): DK-22214 (12 mm), DK-22210 (29 mm), DK-22225 (38 mm), DK-22223 (50 mm), DK-N55224 (54 mm, nieprzylepna), DK-22205 (62 mm), DK-44205 (62 mm, klej usuwalny), DK-44605 (62 mm, żółta, klej usuwalny); taśmy ciągłe foliowe (15,24 m): DK-22211 (29 mm), DK-22212 (62 mm), DK-22606 (62 mm, żółta), DK-22113 (62 mm, przezroczysta); taśma do druku czarno-czerwonego: DK-22251 (62 mm, 15,24 m)"
      },
      {
        "name": "Interfejsy",
        "value": "USB 2.0 Full Speed (złącze mini-B)"
      },
      {
        "name": "Przyciski",
        "value": "4"
      },
      {
        "name": "Zasilanie",
        "value": "220–240 V AC, zasilacz wbudowany"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "125 × 213 × 142 mm"
      },
      {
        "name": "Masa",
        "value": "1,15 kg"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor Lite (wbudowany w drukarkę, druk tylko czarny), P-touch Editor (Windows, macOS; druk czarno-czerwony), dodatek do Microsoft Word, Excel i Outlook (Windows)"
      },
      {
        "name": "Bazy danych (P-touch Editor)",
        "value": "Windows: CSV, TXT, MDB, XLS, XLSX, XLSM, ACCDB, Microsoft SQL Server; macOS: CSV, TXT"
      },
      {
        "name": "SDK",
        "value": "b-PAC (Windows)"
      },
      {
        "name": "Polecenia drukarki",
        "value": "Raster"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows, macOS, Linux"
      },
      {
        "name": "Kody kreskowe (P-touch Editor)",
        "value": "CODE39, ITF (I-2/5), EAN-13, EAN-8, UPC-A, UPC-E, CODABAR (NW-7), CODE128, GS1-128, ISBN-2, ISBN-5, Laser Barcode, GS1 DataBar (RSS), QR Code, Micro QR, PDF417, Data Matrix, MaxiCode, POSTNET, GS1 Composite, Aztec"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, 100 etykiet DK-11201 (29 × 90 mm), rolka DK-22251 do druku czarno-czerwonego (62 mm × 5 m), kabel USB, przewód zasilający, dokumentacja"
      },
      {
        "name": "Part Number",
        "value": "QL800ZG1"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "QL800ZG1",
        "name": "Brother QL-800",
        "attributes": {},
        "gtin13": "4977766769181",
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-ql-810wc",
      "brother-ql-820nwbc",
      "brother-ql-700"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa serii QL-800 (EN)",
        "type": "datasheet",
        "url": "/downloads/brother-ql-800-karta-katalogowa.pdf",
        "size": "2,8 MB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/ql/ql800",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-ql-810wc",
    "slug": "brother-ql-810wc",
    "name": "Brother QL-810Wc",
    "seoTitle": "Brother QL-810Wc",
    "seoDescription": "Brother QL-810Wc: drukarka etykiet DK 12–62 mm z Wi-Fi i AirPrint, druk czarno-czerwony, 176 mm/s (110 etykiet/min), 300 × 600 dpi, USB.",
    "shortDescription": "Drukarka etykiet z Wi-Fi, AirPrint i USB oraz drukiem w kolorze czarnym i czerwonym na rolce DK-22251. Rolki DK 12–62 mm, do 176 mm/s (110 etykiet/min), druk z komputera, smartfona i tabletu.",
    "description": "Brother QL-810Wc to drukarka etykiet z interfejsami USB i Wi-Fi (IEEE 802.11b/g/n, Wireless Direct). Drukuje z komputerów PC i Mac oraz ze smartfonów i tabletów z iOS lub Androidem. Na urządzeniach mobilnych działa aplikacja Brother iPrint&Label i funkcja AirPrint.\n\nW druku czarnym drukarka osiąga 176 mm/s, czyli 110 standardowych etykiet adresowych na minutę. Na rolce DK-22251 drukuje w kolorze czarnym i czerwonym z prędkością 24 mm/s (15 etykiet na minutę). Przez AirPrint dostępny jest tylko druk czarny. Rozdzielczość wynosi 300 × 300 dpi, w trybie wysokiej rozdzielczości 300 × 600 dpi.\n\nDrukarka przyjmuje rolki DK o szerokości od 12 do 62 mm, z taśmą ciągłą lub z etykietami wycinanymi. Automatyczna obcinarka odcina etykiety z taśmy ciągłej o długości od 12,7 mm do 1 m. W zestawie są rolki startowe: 100 etykiet DK-11201 i 5 m taśmy DK-22251.\n\nWbudowany program P-touch Editor Lite uruchamia się z pamięci drukarki po podłączeniu kablem USB, bez instalacji. Pełny P-touch Editor działa w systemach Windows i macOS. Wersja dla Windows ma dodatek do Word, Excel i Outlook. Do integracji służą polecenia ESC/P, P-touch Template i Raster oraz SDK dla Windows, iOS i Androida.\n\nWzględem QL-800 model QL-810Wc dodaje Wi-Fi, AirPrint i szybszy druk czarny: 176 mm/s zamiast 148 mm/s. Obsługuje opcjonalną bazę akumulatorową PA-BU-001 do pracy bez zasilania sieciowego. Ethernet, Bluetooth i wyświetlacz LCD ma model QL-820NWBc.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "biurkowe-drukarki-etykiet",
      "termiczne-drukarki-etykiet"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/ql-810wc-1.png",
      "/images/products/brother/ql-810wc-2.png",
      "/images/products/brother/ql-810wc-3.png"
    ],
    "imageDescriptions": [
      "Brother QL-810Wc — drukarka etykiet, widok pod kątem",
      "Brother QL-810Wc — widok z przodu, z etykietami czarno-czerwonymi",
      "Brother QL-810Wc — widok pod kątem z drugiej strony"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termiczna bezpośrednia, druk jedno- lub dwukolorowy"
      },
      {
        "name": "Rozdzielczość",
        "value": "300 × 300 dpi (standard), 300 × 600 dpi (tryb wysokiej rozdzielczości)"
      },
      {
        "name": "Prędkość druku",
        "value": "druk czarny: do 176 mm/s (110 etykiet/min); druk czarno-czerwony: do 24 mm/s (15 etykiet/min)"
      },
      {
        "name": "Druk dwukolorowy",
        "value": "czarny i czerwony, wyłącznie na rolce DK-22251; przez AirPrint tylko czarny"
      },
      {
        "name": "Szerokość etykiety",
        "value": "12–62 mm"
      },
      {
        "name": "Maks. szerokość druku",
        "value": "60,96 mm"
      },
      {
        "name": "Długość etykiety",
        "value": "12,7 mm – 1 m"
      },
      {
        "name": "Obcinarka",
        "value": "automatyczna, pełne cięcie"
      },
      {
        "name": "Czujnik nośnika",
        "value": "refleksyjny"
      },
      {
        "name": "Nośniki",
        "value": "rolki DK: taśma ciągła i etykiety wycinane"
      },
      {
        "name": "Materiały DK",
        "value": "etykiety wycinane: DK-11201 (29 × 90 mm), DK-11208 (38 × 90 mm), DK-11209 (29 × 62 mm), DK-11202 (62 × 100 mm), DK-11203 (17 × 87 mm), DK-11204 (17 × 54 mm), DK-11221 (23 × 23 mm), DK-11207 (Ø 58 mm, folia), DK-11219 (Ø 12 mm), DK-11218 (Ø 24 mm), DK-11234 (60 × 86 mm); taśmy ciągłe papierowe (30,48 m): DK-22214 (12 mm), DK-22210 (29 mm), DK-22225 (38 mm), DK-22223 (50 mm), DK-N55224 (54 mm, nieprzylepna), DK-22205 (62 mm), DK-44205 (62 mm, klej usuwalny), DK-44605 (62 mm, żółta, klej usuwalny); taśmy ciągłe foliowe (15,24 m): DK-22211 (29 mm), DK-22212 (62 mm), DK-22606 (62 mm, żółta), DK-22113 (62 mm, przezroczysta); taśma do druku czarno-czerwonego: DK-22251 (62 mm, 15,24 m)"
      },
      {
        "name": "Interfejsy",
        "value": "USB 2.0 Full Speed (typ B), Wi-Fi IEEE 802.11b/g/n, Wireless Direct"
      },
      {
        "name": "Zabezpieczenia Wi-Fi (tryb infrastruktury)",
        "value": "WEP, WPA-PSK/WPA2-PSK/WPA3-SAE (TKIP+AES), WPA3-SAE (AES), EAP-FAST, PEAP, EAP-TTLS, EAP-TLS (TKIP/AES)"
      },
      {
        "name": "Druk mobilny",
        "value": "iOS i Android; AirPrint; aplikacja Brother iPrint&Label"
      },
      {
        "name": "Pamięć",
        "value": "6 MB flash, do 99 szablonów etykiet"
      },
      {
        "name": "Zasilanie",
        "value": "100–240 V AC, zewnętrzny zasilacz sieciowy"
      },
      {
        "name": "Automatyczne usypianie",
        "value": "tak"
      },
      {
        "name": "Akumulator (opcja)",
        "value": "baza akumulatorowa Li-ion PA-BU-001: do 4300 etykiet (druk czarny) lub 1400 (dwukolorowy) na jednym ładowaniu, ładowanie poniżej 2 h 30 min"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "125 × 234 × 145 mm"
      },
      {
        "name": "Masa",
        "value": "1,12 kg"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (Windows, macOS), dodatek do Microsoft Word, Excel i Outlook (Windows), P-touch Editor Lite (wbudowany, Windows), Brother iPrint&Label (iOS, Android)"
      },
      {
        "name": "SDK",
        "value": "b-PAC (Windows), SDK dla iOS, SDK dla Androida"
      },
      {
        "name": "Polecenia drukarki",
        "value": "ESC/P, P-touch Template, Raster"
      },
      {
        "name": "Przycinanie i druk",
        "value": "tak (tylko Windows): arkusz etykiet A4 dzielony na pojedyncze etykiety"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows 8.1, 10, 11, Windows Server 2012, 2012 R2, 2016, 2019, 2022; macOS 10.15, 11, 12; iPrint&Label: iOS, Android 4.1 lub nowszy"
      },
      {
        "name": "Czcionki wbudowane",
        "value": "bitmapowe: Helsinki, Brussels, Letter Gothic Bold, San Diego, Brougham (24, 32, 48 punktów); konturowe: Helsinki, Brussels, Letter Gothic (33–400 punktów, 22 rozmiary)"
      },
      {
        "name": "Kody kreskowe wbudowane w drukarkę",
        "value": "CODE39, CODE128, GS1-128 (UCC/EAN-128), ITF (I-2/5), CODABAR (NW-7), UPC-A, UPC-E, EAN-13 (JAN13), EAN-8, GS1 DataBar (RSS), PDF417, QR Code, Data Matrix, MaxiCode, CODE93, POSTNET, UPC-E Extension"
      },
      {
        "name": "Kody kreskowe (P-touch Editor)",
        "value": "CODE39, CODE128, GS1-128 (UCC/EAN-128), ITF (I-2/5), CODABAR (NW-7), UPC-A, UPC-E, EAN-13, EAN-8, ISBN-2, ISBN-5, Laser Barcode, POSTNET, GS1 DataBar (RSS), PDF417, QR Code, Data Matrix, MaxiCode, IMB"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, 100 etykiet DK-11201, rolka DK-22251 (62 mm × 5 m), kabel USB, przewód zasilający i zasilacz sieciowy, dokumentacja"
      },
      {
        "name": "Part Number",
        "value": "QL810WCZG1"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "QL810WCZG1",
        "name": "Brother QL-810Wc",
        "attributes": {},
        "gtin13": "4977766827058",
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-ql-800",
      "brother-ql-820nwbc"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-ql-810wc-karta-katalogowa.pdf",
        "size": "264 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/ql/ql810wc",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-ql-820nwbc",
    "slug": "brother-ql-820nwbc",
    "name": "Brother QL-820NWBc",
    "seoTitle": "Brother QL-820NWBc",
    "seoDescription": "Brother QL-820NWBc: drukarka etykiet DK 12–62 mm, USB, LAN, Wi-Fi, Bluetooth 5.2, LCD, druk czarno-czerwony, 176 mm/s, druk bez komputera.",
    "shortDescription": "Sieciowa drukarka etykiet z USB, Ethernet, Wi-Fi i Bluetooth 5.2, wyświetlaczem LCD i drukiem czarno-czerwonym. Drukuje szablony z pamięci bez komputera. Rolki DK 12–62 mm, do 176 mm/s.",
    "description": "Brother QL-820NWBc łączy się przez USB 2.0, Ethernet 10/100BASE-TX, Wi-Fi (IEEE 802.11b/g/n, Wireless Direct) i Bluetooth 5.2. Drukuje z komputerów PC i Mac oraz ze smartfonów i tabletów z iOS lub Androidem. Obsługuje AirPrint i aplikację Brother iPrint&Label, ma certyfikat MFi.\n\nPodświetlany graficzny wyświetlacz LCD 320 × 120 punktów i panel przycisków służą do konfiguracji i druku bez komputera. W pamięci 6 MB drukarka przechowuje do 255 szablonów zaprojektowanych w P-touch Editor. Szablony mogą się aktualizować automatycznie z serwera FTP.\n\nW druku czarnym drukarka osiąga 176 mm/s, czyli 110 standardowych etykiet adresowych na minutę. Na rolce DK-22251 drukuje w kolorze czarnym i czerwonym z prędkością 24 mm/s. Rozdzielczość wynosi 300 × 300 dpi, w trybie wysokiej rozdzielczości 300 × 600 dpi. Obcinarka odcina etykiety z taśmy ciągłej o długości od 12,7 mm do 1 m.\n\nDo integracji z systemami służą polecenia ESC/P, P-touch Template i Raster oraz SDK dla Windows (b-PAC), iOS i Androida. P-touch Editor działa w systemach Windows i macOS. Wersja dla Windows ma dodatek do Word, Excel i Outlook. Z opcjonalną bazą akumulatorową PA-BU-001 drukarka drukuje do 4300 etykiet czarnych na jednym ładowaniu.\n\nWersja QL-820NWBcVM (QL820NWBCVMXX1) to zestaw do druku identyfikatorów gości i uczestników wydarzeń. Zawiera drukarkę i trzy rolki DK-N55224 z nieprzylepną taśmą papierową 54 mm × 30,48 m, na około 1000 identyfikatorów. Wersja QL820NWBCZG1 ma rolki startowe DK-11201 (100 etykiet) i DK-22251 (5 m).",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "biurkowe-drukarki-etykiet",
      "termiczne-drukarki-etykiet"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/ql-820nwbc-1.png",
      "/images/products/brother/ql-820nwbc-2.png",
      "/images/products/brother/ql-820nwbc-3.png",
      "/images/products/brother/ql-820nwbcvm-zestaw.png",
      "/images/products/brother-ql-820nwbc-wydruk-z-laptopa.webp",
      "/images/products/brother-ql-820nwbc-ethernet.webp",
      "/images/products/brother-ql-820nwbc-lada-sklepowa.webp"
    ],
    "imageDescriptions": [
      "Brother QL-820NWBc — drukarka etykiet, widok pod kątem",
      "Brother QL-820NWBc — widok z przodu, wyświetlacz LCD",
      "Brother QL-820NWBc — widok pod kątem z drugiej strony",
      "Zestaw Brother QL-820NWBcVM: drukarka i trzy rolki DK-N55224",
      "Etykieta z nadrukiem czarnym i czerwonym z drukarki Brother QL-820NWBc",
      "Podłączanie kabla sieciowego do drukarki Brother QL-820NWBc",
      "Brother QL-820NWBc na ladzie sklepu z etykietą cenową"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termiczna bezpośrednia, druk jedno- lub dwukolorowy"
      },
      {
        "name": "Rozdzielczość",
        "value": "300 × 300 dpi (standard), 300 × 600 dpi (tryb wysokiej rozdzielczości)"
      },
      {
        "name": "Prędkość druku",
        "value": "druk czarny: do 176 mm/s (110 etykiet/min); druk czarno-czerwony: do 24 mm/s (15 etykiet/min)"
      },
      {
        "name": "Druk dwukolorowy",
        "value": "czarny i czerwony, wyłącznie na rolce DK-22251; przez AirPrint tylko czarny"
      },
      {
        "name": "Szerokość etykiety",
        "value": "12–62 mm"
      },
      {
        "name": "Maks. szerokość druku",
        "value": "60,96 mm"
      },
      {
        "name": "Długość etykiety",
        "value": "12,7 mm – 1 m"
      },
      {
        "name": "Obcinarka",
        "value": "automatyczna, pełne cięcie"
      },
      {
        "name": "Czujnik nośnika",
        "value": "refleksyjny"
      },
      {
        "name": "Nośniki",
        "value": "rolki DK: taśma ciągła i etykiety wycinane"
      },
      {
        "name": "Materiały DK",
        "value": "etykiety wycinane: DK-11201 (29 × 90 mm), DK-11208 (38 × 90 mm), DK-11209 (29 × 62 mm), DK-11202 (62 × 100 mm), DK-11203 (17 × 87 mm), DK-11204 (17 × 54 mm), DK-11221 (23 × 23 mm), DK-11207 (Ø 58 mm, folia), DK-11219 (Ø 12 mm), DK-11218 (Ø 24 mm), DK-11234 (60 × 86 mm); taśmy ciągłe papierowe (30,48 m): DK-22214 (12 mm), DK-22210 (29 mm), DK-22225 (38 mm), DK-22223 (50 mm), DK-N55224 (54 mm, nieprzylepna), DK-22205 (62 mm), DK-44205 (62 mm, klej usuwalny), DK-44605 (62 mm, żółta, klej usuwalny); taśmy ciągłe foliowe (15,24 m): DK-22211 (29 mm), DK-22212 (62 mm), DK-22606 (62 mm, żółta), DK-22113 (62 mm, przezroczysta); taśma do druku czarno-czerwonego: DK-22251 (62 mm, 15,24 m)"
      },
      {
        "name": "Interfejsy",
        "value": "USB 2.0 Full Speed (typ B), Ethernet 10/100BASE-TX, Wi-Fi IEEE 802.11b/g/n z Wireless Direct, Bluetooth 5.2"
      },
      {
        "name": "Profile Bluetooth",
        "value": "SPP, OPP, HCRP"
      },
      {
        "name": "Zabezpieczenia Wi-Fi (tryb infrastruktury)",
        "value": "WEP, WPA-PSK/WPA2-PSK/WPA3-SAE (TKIP+AES), WPA3-SAE (AES), EAP-FAST, PEAP, EAP-TTLS, EAP-TLS (TKIP/AES)"
      },
      {
        "name": "Druk mobilny",
        "value": "iOS i Android; AirPrint, MFi; aplikacja Brother iPrint&Label"
      },
      {
        "name": "Wyświetlacz",
        "value": "graficzny LCD 320 × 120 punktów z podświetleniem"
      },
      {
        "name": "Druk bez komputera",
        "value": "tak — szablony z pamięci drukarki wybierane na wyświetlaczu"
      },
      {
        "name": "Pamięć",
        "value": "6 MB flash, do 255 szablonów etykiet"
      },
      {
        "name": "Aktualizacja szablonów przez FTP",
        "value": "tak"
      },
      {
        "name": "Przyciski",
        "value": "7"
      },
      {
        "name": "Zasilanie",
        "value": "100–240 V AC, zewnętrzny zasilacz sieciowy"
      },
      {
        "name": "Automatyczne usypianie",
        "value": "tak"
      },
      {
        "name": "Akumulator (opcja)",
        "value": "baza akumulatorowa Li-ion PA-BU-001: do 4300 etykiet (druk czarny) lub 1400 (dwukolorowy) na jednym ładowaniu, ładowanie poniżej 2 h 30 min"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "125 × 234 × 145 mm"
      },
      {
        "name": "Masa",
        "value": "1,16 kg"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (Windows, macOS), dodatek do Microsoft Word, Excel i Outlook (Windows), Brother iPrint&Label (iOS, Android)"
      },
      {
        "name": "SDK",
        "value": "b-PAC (Windows), SDK dla iOS, SDK dla Androida"
      },
      {
        "name": "Polecenia drukarki",
        "value": "ESC/P, P-touch Template, Raster"
      },
      {
        "name": "Przycinanie i druk",
        "value": "tak (tylko Windows): arkusz etykiet A4 dzielony na pojedyncze etykiety"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows 8.1, 10, 11, Windows Server 2012, 2012 R2, 2016, 2019, 2022; macOS 10.15, 11, 12; iPrint&Label: iOS, Android 4.1 lub nowszy"
      },
      {
        "name": "Czcionki wbudowane",
        "value": "bitmapowe: Helsinki, Brussels, Letter Gothic Bold, San Diego, Brougham (24, 32, 48 punktów); konturowe: Helsinki, Brussels, Letter Gothic (33–400 punktów, 22 rozmiary)"
      },
      {
        "name": "Kody kreskowe wbudowane w drukarkę",
        "value": "CODE39, CODE128, GS1-128 (UCC/EAN-128), ITF (I-2/5), CODABAR (NW-7), UPC-A, UPC-E, EAN-13 (JAN13), EAN-8, GS1 DataBar (RSS), PDF417, QR Code, Data Matrix, MaxiCode, CODE93, POSTNET, UPC-E Extension"
      },
      {
        "name": "Kody kreskowe (P-touch Editor)",
        "value": "CODE39, CODE128, GS1-128 (UCC/EAN-128), ITF (I-2/5), CODABAR (NW-7), UPC-A, UPC-E, EAN-13, EAN-8, ISBN-2, ISBN-5, Laser Barcode, POSTNET, GS1 DataBar (RSS), PDF417, QR Code, Data Matrix, MaxiCode, IMB"
      },
      {
        "name": "Zawartość opakowania (QL820NWBCZG1)",
        "value": "drukarka, 100 etykiet DK-11201, rolka DK-22251 (62 mm × 5 m), kabel USB, przewód zasilający, zasilacz, dokumentacja"
      },
      {
        "name": "Zawartość opakowania (QL820NWBCVMXX1)",
        "value": "drukarka QL-820NWBc, 3 rolki DK-N55224 (taśma papierowa nieprzylepna 54 mm × 30,48 m), przewód zasilający i zasilacz, kabel USB, dokumentacja"
      },
      {
        "name": "Part Number",
        "value": "QL820NWBCZG1; QL820NWBCVMXX1 (zestaw VM)"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "QL820NWBCZG1",
        "name": "Brother QL-820NWBc",
        "attributes": {
          "Zestaw": "rolki startowe DK-11201 i DK-22251"
        },
        "gtin13": "4977766826921",
        "availability": "unavailable"
      },
      {
        "partNumber": "QL820NWBCVMXX1",
        "name": "Brother QL-820NWBcVM",
        "attributes": {
          "Zestaw": "3 rolki DK-N55224 do identyfikatorów"
        },
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-ql-810wc",
      "brother-ql-1110nwbc"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-ql-820nwbc-karta-katalogowa.pdf",
        "size": "281 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/ql/ql820nwbc",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-ql-1100c",
    "slug": "brother-ql-1100c",
    "name": "Brother QL-1100c",
    "seoTitle": "Brother QL-1100c",
    "seoDescription": "Brother QL-1100c: drukarka etykiet DK do 103,6 mm, 110 mm/s, 300 dpi, USB, etykiety wysyłkowe 102 × 152 mm, druk etykiet FBA z PDF.",
    "shortDescription": "Drukarka etykiet z USB do rolek DK o szerokości do 103,6 mm (druk 101,6 mm). Etykiety wysyłkowe 102 × 152 mm i 103 × 164 mm, do 110 mm/s, długość do 3 m, druk etykiet FBA z pliku PDF.",
    "description": "Brother QL-1100c to drukarka etykiet z głowicą o szerokości 101,6 mm (4 cale), podłączana przez USB do komputera PC lub Mac. Drukuje papierowe etykiety samoprzylepne na paczki, koperty i przesyłki pocztowe. Szerokość 4 cali odpowiada etykietom z programów wysyłkowych kurierów i przewoźników.\n\nDrukarka przyjmuje rolki DK o szerokości od 12 do 103,6 mm. Obejmuje to etykiety wysyłkowe 102 × 152 mm (DK-11241) i 103 × 164 mm (DK-11247) oraz taśmy ciągłe 102 i 103 mm. W zestawie jest 41 etykiet DK-11247 i 8,1 m taśmy ciągłej DK-22205 o szerokości 62 mm.\n\nDrukarka drukuje do 110 mm/s, czyli 69 standardowych etykiet adresowych na minutę, w rozdzielczości 300 × 300 dpi. Etykieta z taśmy ciągłej może mieć od 25,4 mm do 3 m przy druku z Windows lub macOS. Drukarka ma automatyczną obcinarkę. Drukuje jedną etykietę albo wiele etykiet naraz.\n\nFunkcja wydruku z przycięciem (tylko Windows) wyodrębnia etykiety z kodami kreskowymi z pliku PDF lub arkusza A4 i drukuje je pojedynczo. W ten sposób powstają etykiety zgodne z wymaganiami usługi Amazon FBA (Fulfilled by Amazon). Do integracji służą polecenia ESC/P, P-touch Template i Raster oraz SDK dla Windows.\n\nEtykiety projektuje się w P-touch Editor dla Windows i macOS albo w P-touch Editor Lite dla Windows. Na Androidzie drukuje aplikacja iPrint&Label przez kabel USB. Model QL-1110NWBc o tej samej szerokości druku dodaje Wi-Fi, Bluetooth i Ethernet.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "biurkowe-drukarki-etykiet",
      "termiczne-drukarki-etykiet"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/ql-1100c-1.png",
      "/images/products/brother/ql-1100c-2.png",
      "/images/products/brother/ql-1100c-3.png"
    ],
    "imageDescriptions": [
      "Brother QL-1100c — drukarka etykiet, widok pod kątem",
      "Brother QL-1100c — widok z przodu",
      "Brother QL-1100c — widok pod kątem z drugiej strony"
    ],
    "tags": [
      "logistyka",
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termiczna bezpośrednia"
      },
      {
        "name": "Rozdzielczość",
        "value": "300 × 300 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "do 110 mm/s (69 standardowych etykiet adresowych na minutę)"
      },
      {
        "name": "Szerokość etykiety",
        "value": "12–103,6 mm"
      },
      {
        "name": "Maks. szerokość druku",
        "value": "101,6 mm (4 cale)"
      },
      {
        "name": "Długość etykiety",
        "value": "25,4 mm – 3 m (Windows, macOS); maks. 1 m w P-touch Editor Lite i iPrint&Label"
      },
      {
        "name": "Obcinarka",
        "value": "automatyczna, pełne cięcie"
      },
      {
        "name": "Czujnik nośnika",
        "value": "refleksyjny"
      },
      {
        "name": "Nośniki",
        "value": "rolki DK: taśma ciągła i etykiety wycinane"
      },
      {
        "name": "Interfejsy",
        "value": "USB 2.0 Full Speed (typ B)"
      },
      {
        "name": "Pamięć",
        "value": "7,8 MB flash, do 99 szablonów etykiet"
      },
      {
        "name": "Przyciski",
        "value": "4: zasilanie, podawanie, cięcie, P-touch Editor Lite"
      },
      {
        "name": "Zasilanie",
        "value": "220–240 V, zasilacz wbudowany"
      },
      {
        "name": "Automatyczne usypianie",
        "value": "tak"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "170 × 222 × 151 mm"
      },
      {
        "name": "Masa",
        "value": "1,71 kg"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (Windows, macOS), dodatek do Microsoft Word, Excel i Outlook, P-touch Editor Lite (Windows), Brother iPrint&Label (tylko Android, przez kabel USB)"
      },
      {
        "name": "SDK",
        "value": "Windows (b-PAC)"
      },
      {
        "name": "Polecenia drukarki",
        "value": "ESC/P, P-touch Template, Raster"
      },
      {
        "name": "Przycinanie i druk (FBA)",
        "value": "tak (tylko Windows): etykiety z kodami kreskowymi z pliku PDF lub arkusza A4 drukowane pojedynczo; zgodne z wymaganiami Amazon FBA"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows 8.1, 10, 11, Windows Server 2012, 2012 R2, 2016, 2019, 2022; macOS 10.15, 11, 12"
      },
      {
        "name": "Czcionki wbudowane",
        "value": "bitmapowe: Helsinki, Brussels, Letter Gothic Bold, San Diego, Brougham (24, 32, 48 punktów); konturowe: Helsinki, Brussels, Letter Gothic (33–400 punktów, 22 rozmiary)"
      },
      {
        "name": "Kody kreskowe wbudowane w drukarkę",
        "value": "CODE39, CODE128, GS1-128 (UCC/EAN-128), ITF (I-2/5), CODABAR (NW-7), UPC-A, UPC-E, EAN-13, EAN-8, ISBN-2, ISBN-5, Laser Barcode, POSTNET, RSS (GS1 DataBar), PDF417, QR Code, Data Matrix, MaxiCode, IMB"
      },
      {
        "name": "Kody kreskowe (P-touch Editor)",
        "value": "CODE39, CODE128, GS1-128 (UCC/EAN-128), ITF (I-2/5), CODABAR (NW-7), UPC-A, UPC-E, EAN-13, EAN-8, ISBN-2, ISBN-5, Laser Barcode, POSTNET, RSS (GS1 DataBar), Aztec Code (tylko Windows), PDF417, QR Code, Data Matrix, MaxiCode, IMB"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, 41 etykiet wysyłkowych DK-11247 (103 × 164 mm), rolka DK-22205 z taśmą ciągłą 62 mm (8,1 m), kabel USB, przewód zasilający, dokumentacja"
      },
      {
        "name": "Part Number",
        "value": "QL1100CZG1"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "QL1100CZG1",
        "name": "Brother QL-1100c",
        "attributes": {},
        "gtin13": "4977766826068",
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-ql-1110nwbc",
      "brother-td-4d"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-ql-1100c-karta-katalogowa.pdf",
        "size": "243 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/ql/ql1100c",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-ql-1110nwbc",
    "slug": "brother-ql-1110nwbc",
    "name": "Brother QL-1110NWBc",
    "seoTitle": "Brother QL-1110NWBc",
    "seoDescription": "Brother QL-1110NWBc: drukarka etykiet DK do 103,6 mm, USB, LAN, Wi-Fi, Bluetooth 5.2, AirPrint, 110 mm/s, etykiety 102 × 152 mm, FBA z PDF.",
    "shortDescription": "Sieciowa drukarka etykiet do rolek DK o szerokości do 103,6 mm (druk 101,6 mm): USB, Ethernet, Wi-Fi i Bluetooth 5.2, AirPrint i MFi. Etykiety wysyłkowe 102 × 152 mm, do 110 mm/s, druk etykiet FBA z PDF.",
    "description": "Brother QL-1110NWBc to drukarka etykiet o szerokości druku 101,6 mm (4 cale) z czterema interfejsami. Łączy się przez USB 2.0, Ethernet 10/100BASE-TX, Wi-Fi (IEEE 802.11b/g/n, Wireless Direct) i Bluetooth 5.2. Drukuje z komputerów PC i Mac oraz ze smartfonów i tabletów z iOS lub Androidem.\n\nDrukarka obsługuje AirPrint (iOS i macOS) i ma certyfikat MFi. Na smartfonach i tabletach działa aplikacja Brother iPrint&Label. Do integracji służą polecenia ESC/P, P-touch Template i Raster oraz SDK dla Windows, iOS i Androida.\n\nQL-1110NWBc przyjmuje rolki DK o szerokości od 12 do 103,6 mm. Obejmuje to etykiety wysyłkowe 102 × 152 mm (DK-11241) i 103 × 164 mm (DK-11247). Drukuje do 110 mm/s, czyli 69 standardowych etykiet adresowych na minutę, w rozdzielczości 300 × 300 dpi. Etykieta z taśmy ciągłej może mieć do 3 m przy druku z Windows lub macOS.\n\nFunkcja wydruku z przycięciem (tylko Windows) wyodrębnia etykiety z kodami kreskowymi z pliku PDF lub arkusza A4 i drukuje je pojedynczo. Etykiety z kodami kreskowymi spełniają wymagania usługi Amazon FBA (Fulfilled by Amazon). Szablony etykiet można wgrywać do drukarki przez FTP.\n\nOd modelu QL-1100c różni się interfejsami Ethernet, Wi-Fi i Bluetooth oraz zestawami SDK dla iOS i Androida. Szerokość druku, prędkość i obsługiwane rolki DK są w obu modelach takie same. W zestawie jest 41 etykiet DK-11247 i 8,1 m taśmy ciągłej DK-22205 o szerokości 62 mm.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "biurkowe-drukarki-etykiet",
      "termiczne-drukarki-etykiet"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/ql-1110nwbc-1.png",
      "/images/products/brother/ql-1110nwbc-2.png",
      "/images/products/brother/ql-1110nwbc-3.png"
    ],
    "imageDescriptions": [
      "Brother QL-1110NWBc — drukarka etykiet, widok pod kątem",
      "Brother QL-1110NWBc — widok z przodu",
      "Brother QL-1110NWBc — widok pod kątem z drugiej strony"
    ],
    "tags": [
      "logistyka",
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termiczna bezpośrednia"
      },
      {
        "name": "Rozdzielczość",
        "value": "300 × 300 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "do 110 mm/s (69 standardowych etykiet adresowych na minutę)"
      },
      {
        "name": "Szerokość etykiety",
        "value": "12–103,6 mm"
      },
      {
        "name": "Maks. szerokość druku",
        "value": "101,6 mm (4 cale)"
      },
      {
        "name": "Długość etykiety",
        "value": "25,4 mm – 3 m (Windows, macOS); maks. 1 m w P-touch Editor Lite i iPrint&Label"
      },
      {
        "name": "Obcinarka",
        "value": "automatyczna, pełne cięcie"
      },
      {
        "name": "Czujnik nośnika",
        "value": "refleksyjny"
      },
      {
        "name": "Nośniki",
        "value": "rolki DK: taśma ciągła i etykiety wycinane"
      },
      {
        "name": "Interfejsy",
        "value": "USB 2.0 Full Speed (typ B), Ethernet 10/100BASE-TX, Wi-Fi IEEE 802.11b/g/n z Wireless Direct, Bluetooth 5.2"
      },
      {
        "name": "Profile Bluetooth",
        "value": "SPP, OPP, HCRP"
      },
      {
        "name": "Druk mobilny",
        "value": "iOS i Android; AirPrint, MFi; aplikacja Brother iPrint&Label"
      },
      {
        "name": "Pamięć",
        "value": "7,8 MB flash na szablony etykiet"
      },
      {
        "name": "Aktualizacja szablonów przez FTP",
        "value": "tak"
      },
      {
        "name": "Zasilanie",
        "value": "220–240 V AC, zasilacz wbudowany"
      },
      {
        "name": "Automatyczne usypianie",
        "value": "tak"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "170 × 222 × 151 mm"
      },
      {
        "name": "Masa",
        "value": "1,73 kg"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (Windows, macOS), dodatek do Microsoft Word, Excel i Outlook, Brother iPrint&Label (iOS, Android)"
      },
      {
        "name": "SDK",
        "value": "b-PAC (Windows), SDK dla iOS, SDK dla Androida"
      },
      {
        "name": "Polecenia drukarki",
        "value": "ESC/P, P-touch Template, Raster"
      },
      {
        "name": "Przycinanie i druk (FBA)",
        "value": "tak (tylko Windows): etykiety z kodami kreskowymi z pliku PDF lub arkusza A4 drukowane pojedynczo; zgodne z wymaganiami Amazon FBA"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows 8.1, 10, 11, Windows Server 2012, 2012 R2, 2016, 2019, 2022; macOS 10.15, 11, 12; iPrint&Label: iOS 10/11, Android 4.4 lub nowszy"
      },
      {
        "name": "Czcionki wbudowane",
        "value": "bitmapowe: Helsinki, Brussels, Letter Gothic Bold, San Diego, Brougham (24, 32, 48 punktów); konturowe: Helsinki, Brussels, Letter Gothic (33–400 punktów, 22 rozmiary)"
      },
      {
        "name": "Kody kreskowe wbudowane w drukarkę",
        "value": "CODE39, CODE128, GS1-128 (UCC/EAN-128), ITF (I-2/5), CODABAR (NW-7), UPC-A, UPC-E, EAN-13 (JAN13), EAN-8, GS1 DataBar (RSS), PDF417, QR Code, Data Matrix, MaxiCode, CODE93, POSTNET, UPC-E Extension, MSI, Aztec"
      },
      {
        "name": "Kody kreskowe (P-touch Editor)",
        "value": "CODE39, CODE128, GS1-128 (UCC/EAN-128), ITF (I-2/5), CODABAR (NW-7), UPC-A, UPC-E, EAN-13, EAN-8, ISBN-2, ISBN-5, Laser Barcode, POSTNET, RSS (GS1 DataBar), Aztec Code (tylko Windows), PDF417, QR Code, Data Matrix, MaxiCode, IMB"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, 41 etykiet wysyłkowych DK-11247 (103 × 164 mm), rolka DK-22205 z taśmą ciągłą 62 mm (8,1 m), kabel USB, przewód zasilający, dokumentacja"
      },
      {
        "name": "Part Number",
        "value": "QL1110NWBCZG1"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "QL1110NWBCZG1",
        "name": "Brother QL-1110NWBc",
        "attributes": {},
        "gtin13": "4977766826808",
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-ql-1100c",
      "brother-ql-820nwbc"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-ql-1110nwbc-karta-katalogowa.pdf",
        "size": "271 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/ql/ql1110nwbc",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  }
]

export const brotherPtouchProducts: Product[] = [
  {
    "id": "brother-pt-h105",
    "slug": "brother-pt-h105",
    "name": "Brother P-touch PT-H105",
    "seoTitle": "Brother P-touch PT-H105",
    "seoDescription": "Brother P-touch PT-H105 — ręczna etykieciarka na taśmy TZe 3,5–12 mm, klawiatura ABC, 180 dpi, 20 mm/s, zasilanie z 6 baterii AAA lub zasilacza.",
    "shortDescription": "Ręczna etykieciarka na taśmy TZe o szerokości od 3,5 do 12 mm. Ma klawiaturę w układzie alfabetycznym ABC, wyświetlacz na 12 znaków, ręczną obcinarkę i zasilanie z 6 baterii AAA.",
    "description": "Brother P-touch PT-H105 to ręczna etykieciarka na laminowane taśmy TZe o szerokości 3,5, 6, 9 i 12 mm. Głowica 180 dpi drukuje z prędkością do 20 mm/s. Wysokość nadruku wynosi do 9 mm, a etykieta mieści 2 wiersze tekstu.\n\nLitery na klawiaturze ułożono alfabetycznie, w układzie ABC. Klawiatura ma 54 klawisze. Wyświetlacz LCD pokazuje 12 znaków w jednym wierszu oraz podgląd tekstu i długości etykiety. Menu obsługuje 20 języków, w tym polski.\n\nEtykieciarka ma jedną czcionkę w 3 rozmiarach i 3 szerokościach, 8 stylów tekstu, 7 ramek i 178 symboli. Tryb Deco oferuje 12 wzorów etykiet dekoracyjnych, a funkcja Auto-Design — 9 gotowych układów. Funkcja etykiet na kable drukuje etykiety typu flaga. Pamięć mieści 9 etykiet, łącznie do 720 znaków.\n\nZasilanie pochodzi z 6 baterii alkalicznych AAA (LR03) albo z zasilacza sieciowego AD-24ES. Baterie i zasilacz nie wchodzą w skład zestawu. Ręczna obcinarka odcina etykietę po wydruku. Urządzenie waży 390 g i nie łączy się z komputerem ani ze smartfonem.\n\nEtykiety z PT-H105 oznaczają segregatory, półki, szafy, kable, wtyczki, płyty CD i identyfikatory. W porównaniu z PT-H110 model PT-H105 nie numeruje etykiet i nie drukuje w odbiciu lustrzanym. PT-H110 ma 3 czcionki i pamięć 15 etykiet. Oba modele drukują na taśmach TZe do 12 mm.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-h105-1.png",
      "/images/products/brother/pt-h105-2.png",
      "/images/products/brother/pt-h105-3.png"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-H105 — etykieciarka, widok pod kątem",
      "Brother P-touch PT-H105 — widok z przodu",
      "Brother P-touch PT-H105 — widok pod kątem z drugiej strony"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "PTH105ZG1"
      },
      {
        "name": "Typ urządzenia",
        "value": "ręczna etykieciarka (drukarka etykiet)"
      },
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Szerokość taśmy",
        "value": "3,5 / 6 / 9 / 12 mm (taśmy TZe)"
      },
      {
        "name": "Maks. wysokość nadruku",
        "value": "9 mm"
      },
      {
        "name": "Rozdzielczość",
        "value": "180 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "do 20 mm/s"
      },
      {
        "name": "Liczba wierszy",
        "value": "do 2"
      },
      {
        "name": "Długość etykiety",
        "value": "30–300 mm"
      },
      {
        "name": "Czcionki",
        "value": "1 czcionka, 3 rozmiary, 3 szerokości, 8 stylów"
      },
      {
        "name": "Ramki / symbole",
        "value": "7 ramek / 178 symboli"
      },
      {
        "name": "Wzory dekoracyjne",
        "value": "tryb Deco — 12 wzorów; Auto-Design — 9 układów"
      },
      {
        "name": "Etykiety na kable",
        "value": "tak (flaga)"
      },
      {
        "name": "Funkcje druku",
        "value": "kopie 1–9, druk pionowy, podkreślenie; bez numerowania i bez druku lustrzanego"
      },
      {
        "name": "Pamięć etykiet",
        "value": "9 lokalizacji (720 znaków)"
      },
      {
        "name": "Klawiatura",
        "value": "alfabetyczna ABC, 54 klawisze"
      },
      {
        "name": "Wyświetlacz",
        "value": "LCD, 1 wiersz × 12 znaków, 58 × 22 mm, podgląd tekstu"
      },
      {
        "name": "Łączność",
        "value": "brak (praca samodzielna)"
      },
      {
        "name": "Zasilanie",
        "value": "6 × AAA (LR03, alkaliczne) lub zasilacz sieciowy AD-24ES (oba poza zestawem)"
      },
      {
        "name": "Automatyczne wyłączanie",
        "value": "tak"
      },
      {
        "name": "Obcinarka",
        "value": "ręczna"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "110 × 207 × 59 mm"
      },
      {
        "name": "Masa",
        "value": "390 g"
      },
      {
        "name": "Zawartość opakowania",
        "value": "etykieciarka PT-H105, taśma TZe 12 mm czarny nadruk na białym tle (4 m), instrukcja obsługi"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTH105ZG1",
        "name": "Brother P-touch PT-H105",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-h110",
      "brother-pt-d200bw"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (DE)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-h105-karta-katalogowa.pdf",
        "size": "5,7 MB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/pth105",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-h110",
    "slug": "brother-pt-h110",
    "name": "Brother P-touch PT-H110",
    "seoTitle": "Brother P-touch PT-H110",
    "seoDescription": "Brother P-touch PT-H110 — ręczna etykieciarka na taśmy TZe 3,5–12 mm, 180 dpi, 20 mm/s, 2 wiersze, etykiety na kable.",
    "shortDescription": "Ręczna etykieciarka na taśmy TZe od 3,5 do 12 mm z klawiaturą i graficznym wyświetlaczem na 16 znaków. Drukuje 2 wiersze, numeruje etykiety i ma funkcję etykiet typu flaga na kable.",
    "description": "Brother P-touch PT-H110 to ręczna etykieciarka na laminowane taśmy TZe o szerokości 3,5, 6, 9 i 12 mm. Drukuje w rozdzielczości 180 dpi z prędkością 20 mm/s. Wysokość nadruku wynosi do 9 mm, a etykieta mieści 2 wiersze tekstu.\n\nKlawiatura ma 60 klawiszy i osobny rząd cyfr. Graficzny wyświetlacz LCD pokazuje 16 znaków i podgląd etykiety przed wydrukiem. Menu obsługuje 20 języków, w tym polski.\n\nDo edycji służą 3 czcionki w 3 rozmiarach, 253 symbole i 15 ramek. Funkcja oznaczania kabli drukuje etykiety typu flaga z tym samym lub z różnym tekstem. Etykieciarka numeruje kolejne etykiety, drukuje do 9 kopii, tekst w pionie i w odbiciu lustrzanym. Pamięć przechowuje 15 etykiet.\n\nZasilanie pochodzi z 6 baterii AAA — alkalicznych LR03 albo akumulatorów Ni-MH HR03 — lub z zasilacza sieciowego AD-24ES. Baterie i zasilacz nie wchodzą w skład zestawu. Ręczna obcinarka ma wymienne ostrze TC4. Urządzenie waży 0,4 kg i wyłącza się samo po około 5 minutach.\n\nEtykiety z PT-H110 oznaczają segregatory, półki, szafy na dokumenty, kable, wtyczki, pamięci USB i identyfikatory. W porównaniu z PT-H105 model ma więcej symboli i ramek oraz numerowanie. Taśmy 18 i 24 mm, automatyczną obcinarkę i połączenie z komputerem ma model PT-H500.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-h110-1.png",
      "/images/products/brother/pt-h110-2.png"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-H110 — etykieciarka, widok pod kątem",
      "Brother P-touch PT-H110 — widok pod kątem z drugiej strony"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "PTH110ZG1"
      },
      {
        "name": "Typ urządzenia",
        "value": "ręczna etykieciarka (drukarka etykiet)"
      },
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Szerokość taśmy",
        "value": "3,5 / 6 / 9 / 12 mm (taśmy TZe)"
      },
      {
        "name": "Maks. wysokość nadruku",
        "value": "9 mm"
      },
      {
        "name": "Rozdzielczość",
        "value": "180 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "20 mm/s"
      },
      {
        "name": "Liczba wierszy",
        "value": "do 2"
      },
      {
        "name": "Długość etykiety",
        "value": "30–300 mm"
      },
      {
        "name": "Czcionki",
        "value": "3 czcionki, 3 rozmiary, 3 szerokości"
      },
      {
        "name": "Ramki / symbole",
        "value": "15 ramek / 253 symbole"
      },
      {
        "name": "Funkcje druku",
        "value": "numerowanie (do 9), kopie 1–9, druk pionowy, druk lustrzany, etykiety typu flaga na kable"
      },
      {
        "name": "Pamięć etykiet",
        "value": "15 lokalizacji, do 80 znaków na etykietę"
      },
      {
        "name": "Klawiatura",
        "value": "60 klawiszy, osobny rząd cyfr"
      },
      {
        "name": "Wyświetlacz",
        "value": "graficzny LCD, 1 wiersz × 16 znaków, 58 × 23 mm"
      },
      {
        "name": "Zasilanie",
        "value": "6 × AAA (LR03 alkaliczne lub HR03 Ni-MH) lub zasilacz sieciowy AD-24ES (poza zestawem)"
      },
      {
        "name": "Automatyczne wyłączanie",
        "value": "po ok. 5 min"
      },
      {
        "name": "Obcinarka",
        "value": "ręczna (ostrze TC4)"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "111 × 204 × 58 mm"
      },
      {
        "name": "Masa",
        "value": "0,40 kg (bez baterii i taśmy)"
      },
      {
        "name": "Zawartość opakowania",
        "value": "etykieciarka PT-H110, taśma TZe 12 mm czarny nadruk na białym tle (4 m), instrukcja obsługi"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTH110ZG1",
        "name": "Brother P-touch PT-H110",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-h105",
      "brother-pt-h500",
      "brother-pt-e110"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (EN)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-h110-karta-katalogowa.pdf",
        "size": "2,9 MB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/pth110",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-h500",
    "slug": "brother-pt-h500",
    "name": "Brother P-touch PT-H500",
    "seoTitle": "Brother P-touch PT-H500",
    "seoDescription": "Brother P-touch PT-H500 — etykieciarka na taśmy TZe 3,5–24 mm, USB 2.0, podświetlany wyświetlacz, automatyczna obcinarka, do 30 mm/s.",
    "shortDescription": "Ręczna etykieciarka na taśmy TZe od 3,5 do 24 mm z automatyczną obcinarką i podświetlanym wyświetlaczem. Pracuje samodzielnie albo z komputerem przez USB. Zasilanie z baterii AA, akumulatora lub zasilacza.",
    "description": "Brother P-touch PT-H500 to ręczna etykieciarka na taśmy TZe o szerokości 3,5, 6, 9, 12, 18 i 24 mm. Wysokość nadruku sięga 18 mm. Na taśmie 24 mm etykieta mieści do 7 wierszy, a na taśmie 12 mm — do 3 wierszy.\n\nPodświetlany graficzny wyświetlacz LCD pokazuje podgląd etykiety przed wydrukiem. Klawiatura ma 70 klawiszy. Automatyczna obcinarka odcina etykietę po wydruku. Głowica 180 dpi drukuje do 30 mm/s z zasilacza i do 20 mm/s na bateriach.\n\nBez komputera etykieciarka oferuje 14 czcionek, 99 ramek, 618 symboli i 9 rodzajów kodów kreskowych. Ma 18 szablonów, 24 układy blokowe, numerowanie i funkcję oznaczania kabli. Pamięć mieści 50 etykiet i łącznie do 2800 znaków. Jedna etykieta ma do 280 znaków.\n\nPrzez port USB 2.0 etykieciarka współpracuje z komputerem z systemem Windows lub Mac. W programie Brother P-touch Editor etykieta może zawierać czcionki TrueType, obrazy JPG, BMP i TIFF oraz 21 rodzajów kodów, także 2D. Program pobiera dane z plików Excel, Access, CSV i TXT.\n\nZasilanie pochodzi z 6 baterii AA (alkalicznych LR6 lub Ni-MH HR6), z akumulatora litowo-jonowego BA-E001 albo z zasilacza sieciowego AD-E001. Akumulator i zasilacz są opcjonalne. W porównaniu z PT-H110 model PT-H500 obsługuje taśmy 18 i 24 mm, ma automatyczną obcinarkę i port USB. Waży 830 g.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-h500-1.png",
      "/images/products/brother/pt-h500-2.png"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-H500 — etykieciarka, widok pod kątem",
      "Brother P-touch PT-H500 — widok z przodu"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "PTH500ZG1"
      },
      {
        "name": "Typ urządzenia",
        "value": "ręczna etykieciarka z łączem USB"
      },
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Szerokość taśmy",
        "value": "3,5 / 6 / 9 / 12 / 18 / 24 mm (taśmy TZe)"
      },
      {
        "name": "Maks. wysokość nadruku",
        "value": "18 mm"
      },
      {
        "name": "Rozdzielczość",
        "value": "180 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "do 30 mm/s (zasilacz), do 20 mm/s (baterie)"
      },
      {
        "name": "Liczba wierszy",
        "value": "do 7 (taśma 24 mm)"
      },
      {
        "name": "Czcionki",
        "value": "14 czcionek, rozmiary 6–48 pkt"
      },
      {
        "name": "Ramki / symbole",
        "value": "99 ramek / 618 symboli"
      },
      {
        "name": "Kody kreskowe",
        "value": "9 protokołów (urządzenie); 21 protokołów 1D/2D (P-touch Editor)"
      },
      {
        "name": "Funkcje druku",
        "value": "numerowanie do 99, kopie do 99, druk pionowy, druk obrócony, do 5 bloków tekstu, etykiety na kable"
      },
      {
        "name": "Szablony",
        "value": "18 szablonów, 24 układy blokowe"
      },
      {
        "name": "Pamięć etykiet",
        "value": "50 etykiet, do 280 znaków na etykietę, łącznie do 2800 znaków"
      },
      {
        "name": "Klawiatura",
        "value": "70 klawiszy"
      },
      {
        "name": "Wyświetlacz",
        "value": "podświetlany graficzny LCD, 128 × 64 punkty, podgląd wydruku"
      },
      {
        "name": "Łączność",
        "value": "USB 2.0 (Windows, Mac)"
      },
      {
        "name": "Zasilanie",
        "value": "6 × AA (LR6/HR6, poza zestawem); opcjonalnie akumulator Li-ion BA-E001 lub zasilacz sieciowy AD-E001"
      },
      {
        "name": "Obcinarka",
        "value": "automatyczna"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "122 × 91 × 245 mm"
      },
      {
        "name": "Masa",
        "value": "830 g"
      },
      {
        "name": "Warunki pracy",
        "value": "10–35 °C, wilgotność 20–80%"
      },
      {
        "name": "Zawartość opakowania",
        "value": "etykieciarka PT-H500, taśma TZe 24 mm czarny nadruk na białym tle (4 m), oprogramowanie i sterownik na CD-ROM, kabel USB, pasek na nadgarstek, instrukcja"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTH500ZG1",
        "name": "Brother P-touch PT-H500",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-h110",
      "brother-pt-d610bt"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (EN)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-h500-karta-katalogowa.pdf",
        "size": "3,7 MB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/pth500",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-d200bw",
    "slug": "brother-pt-d200bw",
    "name": "Brother P-touch PT-D200BW",
    "seoTitle": "Brother P-touch PT-D200BW",
    "seoDescription": "Brother P-touch PT-D200BW — kompaktowa etykieciarka na taśmy TZe 3,5–12 mm, 14 czcionek, tryb Deco, pamięć 30 etykiet.",
    "shortDescription": "Kompaktowa etykieciarka na taśmy TZe od 3,5 do 12 mm z klawiaturą. Ma 14 czcionek, 617 symboli, 97 ramek, tryb Deco i pamięć 30 etykiet. Wersja VP ma zasilacz i walizkę.",
    "description": "Brother P-touch PT-D200BW to kompaktowa etykieciarka na laminowane taśmy TZe o szerokości 3,5, 6, 9 i 12 mm. Głowica 180 dpi drukuje z prędkością do 20 mm/s. Wysokość nadruku sięga 9 mm, a etykieta mieści 2 wiersze. Obudowa ma kolorystykę czarno-białą.\n\nKlawiatura ma 61 klawiszy. Graficzny wyświetlacz o wymiarach 70 × 17 mm pokazuje 15 znaków oraz podgląd tekstu i długości etykiety. Menu obsługuje 20 języków, w tym polski.\n\nDo edycji służy 14 czcionek, 9 stylów, 3 rozmiary i 3 szerokości znaków, 617 symboli i 97 ramek. Tryb Deco drukuje 12 wzorów etykiet dekoracyjnych, a 6 szablonów służy do identyfikatorów. Etykieciarka numeruje etykiety, drukuje do 9 kopii, tekst w pionie i w odbiciu lustrzanym.\n\nPamięć przechowuje 30 etykiet po 80 znaków. Długość etykiety można ustawić w zakresie 30–300 mm. Ręczna obcinarka odcina etykietę po wydruku. Zasilanie pochodzi z 6 baterii alkalicznych AAA (LR03) albo z zasilacza sieciowego AD-24ES.\n\nW wersji PT-D200BW baterie i zasilacz nie wchodzą w skład zestawu. Wersja PT-D200BWVP zawiera zasilacz AD-24ES i twardą walizkę na urządzenie. Etykiety oznaczają segregatory, szafy, półki, kable, płyty CD i identyfikatory. Model PT-D210 ma 27 szablonów i etykiety wzorzyste o długości do 999 mm.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-d200bw-1.png",
      "/images/products/brother/pt-d200bw-2.png",
      "/images/products/brother/pt-d200bw-3.png",
      "/images/products/brother/pt-d200bwvp-walizka.png"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-D200BW — etykieciarka, widok pod kątem",
      "Brother P-touch PT-D200BW — widok z przodu",
      "Brother P-touch PT-D200BW — widok pod kątem z drugiej strony",
      "Zestaw Brother PT-D200BWVP — etykieciarka, zasilacz AD-24ES i taśma w otwartej walizce"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "PTD200BWZG1 (PT-D200BW); PTD200BWVPG1 (PT-D200BWVP)"
      },
      {
        "name": "Typ urządzenia",
        "value": "kompaktowa etykieciarka z klawiaturą"
      },
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Szerokość taśmy",
        "value": "3,5 / 6 / 9 / 12 mm (taśmy TZe)"
      },
      {
        "name": "Maks. wysokość nadruku",
        "value": "9 mm"
      },
      {
        "name": "Rozdzielczość",
        "value": "180 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "do 20 mm/s"
      },
      {
        "name": "Liczba wierszy",
        "value": "do 2"
      },
      {
        "name": "Długość etykiety",
        "value": "30–300 mm"
      },
      {
        "name": "Czcionki",
        "value": "14 czcionek, 9 stylów, 3 rozmiary, 3 szerokości"
      },
      {
        "name": "Ramki / symbole",
        "value": "97 ramek / 617 symboli"
      },
      {
        "name": "Wzory dekoracyjne",
        "value": "tryb Deco — 12 wzorów; 6 szablonów identyfikatorów"
      },
      {
        "name": "Funkcje druku",
        "value": "numerowanie 1–9, kopie 1–9, druk lustrzany, druk pionowy"
      },
      {
        "name": "Pamięć etykiet",
        "value": "30 etykiet × 80 znaków (2400 znaków)"
      },
      {
        "name": "Klawiatura",
        "value": "61 klawiszy"
      },
      {
        "name": "Wyświetlacz",
        "value": "graficzny LCD, 1 wiersz × 15 znaków, 70 × 17 mm"
      },
      {
        "name": "Łączność",
        "value": "brak (praca samodzielna)"
      },
      {
        "name": "Zasilanie",
        "value": "6 × AAA (LR03, alkaliczne) lub zasilacz sieciowy AD-24ES"
      },
      {
        "name": "Automatyczne wyłączanie",
        "value": "tak"
      },
      {
        "name": "Obcinarka",
        "value": "ręczna"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "165 × 155 × 68 mm"
      },
      {
        "name": "Masa",
        "value": "490 g"
      },
      {
        "name": "Zawartość opakowania (PT-D200BW)",
        "value": "etykieciarka, taśma TZe 12 mm czarny nadruk na białym tle (4 m), instrukcja"
      },
      {
        "name": "Zawartość opakowania (PT-D200BWVP)",
        "value": "etykieciarka, taśma TZe 12 mm czarny nadruk na białym tle (4 m), zasilacz sieciowy AD-24ES, twarda walizka, instrukcja"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTD200BWZG1",
        "name": "Brother P-touch PT-D200BW",
        "attributes": {
          "Zasilacz i walizka": "Nie"
        },
        "availability": "unavailable"
      },
      {
        "partNumber": "PTD200BWVPG1",
        "name": "Brother P-touch PT-D200BWVP",
        "attributes": {
          "Zasilacz i walizka": "Tak"
        },
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-d210",
      "brother-pt-d410"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (EN)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-d200bw-karta-katalogowa.pdf",
        "size": "4,3 MB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/ptd200",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-d210",
    "slug": "brother-pt-d210",
    "name": "Brother P-touch PT-D210",
    "seoTitle": "Brother P-touch PT-D210",
    "seoDescription": "Brother P-touch PT-D210 — biurkowa etykieciarka na taśmy TZe 3,5–12 mm, 27 szablonów, 14 czcionek, pamięć 30 etykiet.",
    "shortDescription": "Biurkowa etykieciarka na taśmy TZe od 3,5 do 12 mm z klawiaturą i 27 szablonami etykiet. Ma 14 czcionek, 97 ramek, 617 symboli i pamięć 30 etykiet. Wersja VP ma zasilacz i walizkę.",
    "description": "Brother P-touch PT-D210 to biurkowa etykieciarka na laminowane taśmy TZe o szerokości 3,5, 6, 9 i 12 mm. Głowica 180 dpi drukuje z prędkością 20 mm/s. Wysokość nadruku wynosi do 9 mm, a etykieta mieści 2 wiersze. Obudowa jest czarna.\n\nKlawiatura ma 62 klawisze z wyczuwalnym skokiem i 5 klawiszy funkcyjnych. Graficzny wyświetlacz o wymiarach 27 × 18 mm pokazuje tekst i podgląd etykiety przed wydrukiem. Menu obsługuje 20 języków, w tym polski.\n\nEtykieciarka ma 27 gotowych szablonów, w tym etykiety dekoracyjne ze wzorem. Etykieta standardowa ma długość 30–300 mm, a etykieta wzorzysta — do 999 mm. Do edycji służy 14 czcionek, 97 ramek i 617 symboli. Tekst można wyrównać do lewej, do środka, do prawej lub obustronnie.\n\nEtykieciarka drukuje do 9 kopii albo serię do 9 kolejnych numerów. Pamięć przechowuje 30 etykiet po 80 znaków. Ręczna obcinarka odcina etykietę po wydruku. Urządzenie waży 490 g bez baterii i taśmy.\n\nZasilanie pochodzi z 6 baterii AAA (alkalicznych LR03 albo Ni-MH HR03) lub z zasilacza sieciowego AD-24ES. Wersja PT-D210VP zawiera zasilacz i walizkę na urządzenie oraz akcesoria. Etykiety oznaczają segregatory, szafy na dokumenty, półki, pamięci USB, kable i identyfikatory. PT-D200BW ma tryb Deco z 12 wzorami, a PT-D210 — 27 szablonów i etykiety wzorzyste do 999 mm.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-d210-1.png",
      "/images/products/brother/pt-d210-2.png",
      "/images/products/brother/pt-d210-3.png"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-D210 — etykieciarka, widok pod kątem",
      "Brother P-touch PT-D210 — widok z przodu",
      "Brother P-touch PT-D210 — widok pod kątem z drugiej strony"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "PTD210ZG1 (PT-D210); PTD210VPZG1 (PT-D210VP)"
      },
      {
        "name": "Typ urządzenia",
        "value": "biurkowa etykieciarka"
      },
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Szerokość taśmy",
        "value": "3,5 / 6 / 9 / 12 mm (taśmy TZe)"
      },
      {
        "name": "Maks. wysokość nadruku",
        "value": "9 mm"
      },
      {
        "name": "Rozdzielczość",
        "value": "180 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "20 mm/s"
      },
      {
        "name": "Liczba wierszy",
        "value": "do 2"
      },
      {
        "name": "Długość etykiety",
        "value": "30–300 mm (standardowa), 30–999 mm (wzorzysta)"
      },
      {
        "name": "Czcionki",
        "value": "14 czcionek, 3 rozmiary, 3 szerokości"
      },
      {
        "name": "Ramki / symbole",
        "value": "97 ramek / 617 symboli"
      },
      {
        "name": "Szablony",
        "value": "27 wbudowanych formatów"
      },
      {
        "name": "Funkcje druku",
        "value": "kopie do 9, numerowanie do 9, wyrównanie do lewej / do środka / do prawej / obustronne"
      },
      {
        "name": "Pamięć etykiet",
        "value": "30 etykiet, do 80 znaków na etykietę"
      },
      {
        "name": "Klawiatura",
        "value": "62 klawisze, 5 klawiszy funkcyjnych"
      },
      {
        "name": "Wyświetlacz",
        "value": "graficzny LCD, 27 × 18 mm, 1 wiersz"
      },
      {
        "name": "Łączność",
        "value": "brak (praca samodzielna)"
      },
      {
        "name": "Zasilanie",
        "value": "6 × AAA (LR03 alkaliczne lub HR03 Ni-MH) lub zasilacz sieciowy AD-24ES"
      },
      {
        "name": "Obcinarka",
        "value": "ręczna"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "157 × 149 × 68 mm"
      },
      {
        "name": "Masa",
        "value": "490 g (bez baterii i taśmy)"
      },
      {
        "name": "Zawartość opakowania (PT-D210)",
        "value": "etykieciarka, taśma TZe 12 mm czarny nadruk na białym tle (4 m), instrukcja"
      },
      {
        "name": "Zawartość opakowania (PT-D210VP)",
        "value": "etykieciarka, taśma TZe 12 mm czarny nadruk na białym tle (4 m), zasilacz sieciowy AD-24ES, walizka, instrukcja"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTD210ZG1",
        "name": "Brother P-touch PT-D210",
        "attributes": {
          "Zasilacz i walizka": "Nie"
        },
        "availability": "unavailable"
      },
      {
        "partNumber": "PTD210VPZG1",
        "name": "Brother P-touch PT-D210VP",
        "attributes": {
          "Zasilacz i walizka": "Tak"
        },
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-d200bw",
      "brother-pt-d410"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa PT-D210VP (EN)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-d210-karta-katalogowa.pdf",
        "size": "15,5 MB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/ptd210",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-d410",
    "slug": "brother-pt-d410",
    "name": "Brother P-touch PT-D410",
    "seoTitle": "Brother P-touch PT-D410",
    "seoDescription": "Brother P-touch PT-D410: drukarka etykiet z klawiaturą, taśmy TZe 3,5–18 mm, 180 dpi, 20 mm/s, USB i P-touch Editor. Wersja VP z zasilaczem.",
    "shortDescription": "Biurkowa drukarka etykiet z klawiaturą i graficznym wyświetlaczem LCD. Drukuje na taśmach TZe od 3,5 do 18 mm z prędkością do 20 mm/s, a przez USB współpracuje z programem P-touch Editor.",
    "description": "PT-D410 to biurkowa drukarka etykiet do domowego biura i małej firmy. Etykiety powstają bez komputera, z klawiatury z 65 gumowymi klawiszami. Graficzny wyświetlacz LCD 128 × 48 punktów pokazuje 2 wiersze po 16 znaków i podgląd etykiety przed wydrukiem.\n\nDrukarka obsługuje taśmy TZe o szerokości 3,5, 6, 9, 12 i 18 mm. Druk termotransferowy ma rozdzielczość 180 dpi i prędkość do 20 mm/s. Wysokość wydruku sięga 15,8 mm, a na taśmie 18 mm mieści się do 5 wierszy. Etykietę odcina wbudowany obcinak ręczny.\n\nWbudowany edytor ma 15 czcionek, 120 ramek, 700 symboli i 30 gotowych układów etykiet. W trybie automatycznego formatowania drukarka przygotowuje też etykiety do oznaczania kabli. Drukarka tworzy 9 rodzajów kodów kreskowych, w tym EAN-13, CODE128 i GS1-128. W pamięci zostaje do 50 etykiet po 280 znaków.\n\nPT-D410 łączy się z komputerem tylko przez USB — nie ma modułu Bluetooth ani Wi-Fi. Po podłączeniu do komputera z systemem Windows lub macOS etykiety projektuje się w programie P-touch Editor. Program dodaje do etykiet logo, symbole i kody kreskowe.\n\nDrukarkę zasila 6 baterii alkalicznych AA (LR6) albo zasilacz sieciowy AD-E001A. Baterii nie ma w zestawie. Wersja PT-D410VP ma w zestawie zasilacz, walizkę, kabel USB i taśmę TZe 18 mm o długości 4 m.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-d410-1.png",
      "/images/products/brother/pt-d410-2.png",
      "/images/products/brother/pt-d410-3.png",
      "/images/products/brother/pt-d410vp-zestaw.png",
      "/images/products/brother-pt-d410-oznaczanie-kabli.webp"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-D410 — etykieciarka, widok pod kątem",
      "Brother P-touch PT-D410 — widok z przodu",
      "Brother P-touch PT-D410 — widok pod kątem z drugiej strony",
      "Zestaw Brother PT-D410VP: drukarka etykiet, walizka, zasilacz, taśma TZe i kabel USB",
      "Brother PT-D410 na biurku i kabel USB oznaczony etykietą z taśmy TZe"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Rozdzielczość druku",
        "value": "180 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "do 20 mm/s"
      },
      {
        "name": "Szerokości taśm TZe",
        "value": "3,5; 6; 9; 12; 18 mm"
      },
      {
        "name": "Maksymalna wysokość wydruku",
        "value": "15,8 mm"
      },
      {
        "name": "Liczba wierszy",
        "value": "do 5 (taśma 18 mm)"
      },
      {
        "name": "Długość etykiety",
        "value": "30–300 mm (ustawiana)"
      },
      {
        "name": "Obcinak",
        "value": "ręczny, wbudowany"
      },
      {
        "name": "Klawiatura",
        "value": "65 klawiszy gumowych, klawisze numeryczne"
      },
      {
        "name": "Wyświetlacz",
        "value": "LCD graficzny 128 × 48 punktów, 58 × 21 mm, 16 znaków × 2 wiersze, podgląd wydruku"
      },
      {
        "name": "Interfejs",
        "value": "USB 2.0 Full Speed (Micro B)"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (Windows 8.1/10/11, macOS 10.15/11/12)"
      },
      {
        "name": "Czcionki / ramki / symbole",
        "value": "15 / 120 / 700"
      },
      {
        "name": "Kody kreskowe",
        "value": "9 rodzajów: CODE39, ITF 2/5, EAN-13, EAN-8, UPC-A, UPC-E, CODABAR, GS1-128, CODE128"
      },
      {
        "name": "Szablony",
        "value": "30 gotowych układów; oznaczanie kabli w trybie automatycznego formatowania"
      },
      {
        "name": "Pamięć etykiet",
        "value": "50 etykiet × 280 znaków"
      },
      {
        "name": "Kopie i numerowanie",
        "value": "1–99"
      },
      {
        "name": "Języki menu",
        "value": "20, w tym polski"
      },
      {
        "name": "Zasilanie",
        "value": "6 × AA (alkaliczne LR6, brak w zestawie) lub zasilacz sieciowy AD-E001A"
      },
      {
        "name": "Automatyczne wyłączanie",
        "value": "zasilacz: 1, 2, 4, 8 h lub wył.; baterie: 5, 10, 30 min"
      },
      {
        "name": "Kolor obudowy",
        "value": "biały"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "187 × 178 × 72 mm"
      },
      {
        "name": "Masa",
        "value": "0,76 kg"
      },
      {
        "name": "Temperatura pracy",
        "value": "10–35 °C"
      },
      {
        "name": "Zawartość opakowania (PT-D410VP)",
        "value": "drukarka, zasilacz sieciowy, kabel USB 1 m, taśma TZe 18 mm × 4 m (czarny nadruk na białym tle), walizka"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTD410RG1",
        "name": "Brother P-touch PT-D410",
        "attributes": {
          "Zasilacz i walizka": "Nie"
        },
        "availability": "unavailable"
      },
      {
        "partNumber": "PTD410VPRG1",
        "name": "Brother P-touch PT-D410VP",
        "attributes": {
          "Zasilacz i walizka": "Tak"
        },
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-d460bt",
      "brother-pt-d610bt"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-d410-karta-katalogowa.pdf",
        "size": "917 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/ptd410",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-d460bt",
    "slug": "brother-pt-d460bt",
    "name": "Brother P-touch PT-D460BTVP",
    "seoTitle": "Brother P-touch PT-D460BTVP",
    "seoDescription": "Brother P-touch PT-D460BTVP: drukarka etykiet z klawiaturą, Bluetooth 5.0 i USB, taśmy TZe 3,5–18 mm, 30 mm/s. W zestawie zasilacz, futerał i taśma.",
    "shortDescription": "Biurkowa drukarka etykiet z klawiaturą, Bluetooth 5.0 i USB. Drukuje na taśmach TZe do 18 mm z prędkością do 30 mm/s. Zestaw zawiera zasilacz, futerał, kabel USB i taśmę startową.",
    "description": "PT-D460BTVP to biurkowa drukarka etykiet do małych i większych biur. Etykiety powstają na trzy sposoby: z klawiatury, w aplikacji Brother iPrint&Label na smartfonie lub w programie P-touch Editor na komputerze.\n\nGraficzny wyświetlacz LCD ma rozdzielczość 320 × 120 punktów i mieści 2 wiersze po 20 znaków. Przed wydrukiem na ekranie widać podgląd układu etykiety. Klawiatura ma 65 gumowych klawiszy, w tym klawisze numeryczne.\n\nDrukarka obsługuje taśmy TZe o szerokości 3,5, 6, 9, 12 i 18 mm. Druk termotransferowy ma rozdzielczość 180 dpi i prędkość do 30 mm/s. Wysokość wydruku sięga 15,8 mm, a na taśmie 18 mm mieści się do 5 wierszy. Etykietę odcina obcinak ręczny.\n\nBluetooth 5.0 łączy drukarkę ze smartfonem lub tabletem z systemem iOS albo Android. Przez USB drukarka współpracuje z programem P-touch Editor dla Windows i macOS. Wbudowany edytor ma 16 czcionek, 140 ramek, 800 symboli i 9 rodzajów kodów kreskowych.\n\nW pamięci zostaje do 70 etykiet do ponownego wydruku. Drukarka pracuje z zasilacza sieciowego AD-E001A z zestawu albo na 6 bateriach AA. W porównaniu z PT-D410 model ma Bluetooth, szybszy druk i wyświetlacz o wyższej rozdzielczości.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-d460bt-1.png",
      "/images/products/brother/pt-d460bt-2.png",
      "/images/products/brother/pt-d460bt-3.png",
      "/images/products/brother/pt-d460btvp-zestaw.png",
      "/images/products/brother-pt-d460btvp-druk-ze-smartfona.webp"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-D460BTVP — etykieciarka, widok pod kątem",
      "Brother P-touch PT-D460BTVP — widok z przodu",
      "Brother P-touch PT-D460BTVP — widok pod kątem z drugiej strony",
      "Zestaw Brother PT-D460BTVP: drukarka etykiet, futerał, zasilacz, taśma TZe i kabel USB",
      "Brother PT-D460BTVP na biurku i smartfon z projektem etykiety z kodem kreskowym"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Rozdzielczość druku",
        "value": "180 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "do 30 mm/s"
      },
      {
        "name": "Szerokości taśm TZe",
        "value": "3,5; 6; 9; 12; 18 mm"
      },
      {
        "name": "Maksymalna wysokość wydruku",
        "value": "15,8 mm"
      },
      {
        "name": "Liczba wierszy",
        "value": "do 5 (taśma 18 mm)"
      },
      {
        "name": "Długość etykiety",
        "value": "30–300 mm (ustawiana)"
      },
      {
        "name": "Obcinak",
        "value": "ręczny, wbudowany"
      },
      {
        "name": "Klawiatura",
        "value": "65 klawiszy gumowych, klawisze numeryczne"
      },
      {
        "name": "Wyświetlacz",
        "value": "LCD graficzny 320 × 120 punktów, 60 × 26 mm, 20 znaków × 2 wiersze, podgląd wydruku"
      },
      {
        "name": "Interfejsy",
        "value": "USB 2.0 Full Speed (Micro B), Bluetooth 5.0"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (Windows 8.1/10/11, macOS 10.15/11/12)"
      },
      {
        "name": "Aplikacja mobilna",
        "value": "Brother iPrint&Label (iOS, Android)"
      },
      {
        "name": "Czcionki / ramki / symbole",
        "value": "16 / 140 / 800"
      },
      {
        "name": "Kody kreskowe",
        "value": "9 rodzajów: CODE39, ITF 2/5, EAN-13, EAN-8, UPC-A, UPC-E, CODABAR, GS1-128, CODE128"
      },
      {
        "name": "Szablony",
        "value": "30 gotowych układów; oznaczanie kabli w trybie automatycznego formatowania"
      },
      {
        "name": "Pamięć etykiet",
        "value": "do 70 etykiet"
      },
      {
        "name": "Kopie i numerowanie",
        "value": "1–99"
      },
      {
        "name": "Języki menu",
        "value": "20, w tym polski"
      },
      {
        "name": "Zasilanie",
        "value": "zasilacz sieciowy AD-E001A (w zestawie) lub 6 × AA (alkaliczne LR6, brak w zestawie)"
      },
      {
        "name": "Kolor obudowy",
        "value": "czarny"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "187 × 178 × 72 mm"
      },
      {
        "name": "Masa",
        "value": "0,77 kg"
      },
      {
        "name": "Temperatura pracy",
        "value": "10–35 °C"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, zasilacz sieciowy, kabel USB 1 m, taśma TZe 18 mm × 4 m (czarny nadruk na białym tle), futerał"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTD460BTVPRG1",
        "name": "Brother P-touch PT-D460BTVP",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-d410",
      "brother-pt-d610bt"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-d460bt-karta-katalogowa.pdf",
        "size": "767 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/ptd460btvp",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-d610bt",
    "slug": "brother-pt-d610bt",
    "name": "Brother P-touch PT-D610BTVP",
    "seoTitle": "Brother P-touch PT-D610BTVP",
    "seoDescription": "Brother P-touch PT-D610BTVP: drukarka etykiet z klawiaturą, taśmy TZe 3,5–24 mm, automatyczny obcinak, kolorowy wyświetlacz, Bluetooth 5.0 i USB.",
    "shortDescription": "Biurkowa drukarka etykiet na taśmy TZe do 24 mm z kolorowym, podświetlanym wyświetlaczem, automatycznym obcinakiem, Bluetooth 5.0 i USB. Zestaw zawiera zasilacz, futerał, kabel USB i taśmę 24 mm.",
    "description": "PT-D610BTVP to biurkowa drukarka etykiet do biur i sklepów. Służy do oznaczania dokumentów, segregatorów i wyposażenia, a w handlu — do etykiet produktowych i etykiet do śledzenia zapasów. Etykiety powstają z klawiatury, w aplikacji Brother iPrint&Label lub w programie P-touch Editor.\n\nDrukarka obsługuje taśmy TZe o szerokości od 3,5 do 24 mm. Wysokość wydruku sięga 18 mm, a na taśmie 24 mm mieści się do 7 wierszy. Druk ma prędkość do 30 mm/s. Automatyczny obcinak odcina etykietę po wydruku.\n\nKolorowy, podświetlany wyświetlacz LCD ma wymiary 80 × 30 mm i rozdzielczość 320 × 120 punktów. Ekran pokazuje 2 wiersze po 20 znaków, widok etykiety i podgląd wydruku. Klawiatura ma gumowe klawisze, w tym klawisze numeryczne.\n\nWbudowany edytor ma 17 czcionek, 160 ramek, 900 symboli i 175 gotowych układów etykiet. Drukarka tworzy 9 rodzajów kodów kreskowych, w tym EAN-13 i CODE128. W pamięci zostaje do 99 etykiet. Po podłączeniu do komputera dostępny jest druk w wysokiej rozdzielczości dla kodów kreskowych, grafiki i logo.\n\nBluetooth 5.0 łączy drukarkę ze smartfonem lub tabletem z systemem iOS albo Android, a USB — z komputerem z programem P-touch Editor. Drukarka pracuje z zasilacza AD-E001A z zestawu albo na 6 bateriach AA. W porównaniu z PT-D460BTVP model obsługuje taśmy 24 mm i ma automatyczny obcinak.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-d610bt-1.png",
      "/images/products/brother/pt-d610bt-2.png",
      "/images/products/brother/pt-d610bt-3.png",
      "/images/products/brother/pt-d610btvp-zestaw.png",
      "/images/products/brother-pt-d610btvp-przy-komputerze.webp"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-D610BTVP — etykieciarka, widok pod kątem",
      "Brother P-touch PT-D610BTVP — widok z przodu",
      "Brother P-touch PT-D610BTVP — widok pod kątem z drugiej strony",
      "Zestaw Brother PT-D610BTVP: drukarka etykiet, futerał, zasilacz, taśma TZe 24 mm i kabel USB",
      "Brother PT-D610BTVP przy laptopie i kable oznaczone etykietami z taśmy TZe"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Rozdzielczość druku",
        "value": "180 dpi (z komputera tryb wysokiej rozdzielczości)"
      },
      {
        "name": "Prędkość druku",
        "value": "do 30 mm/s"
      },
      {
        "name": "Szerokości taśm TZe",
        "value": "3,5; 6; 9; 12; 18; 24 mm"
      },
      {
        "name": "Maksymalna wysokość wydruku",
        "value": "18 mm"
      },
      {
        "name": "Liczba wierszy",
        "value": "do 7 (taśma 24 mm)"
      },
      {
        "name": "Długość etykiety",
        "value": "30–300 mm (ustawiana)"
      },
      {
        "name": "Obcinak",
        "value": "automatyczny"
      },
      {
        "name": "Klawiatura",
        "value": "klawisze gumowe, klawisze numeryczne"
      },
      {
        "name": "Wyświetlacz",
        "value": "kolorowy, podświetlany LCD 80 × 30 mm, 320 × 120 punktów, 20 znaków × 2 wiersze"
      },
      {
        "name": "Interfejsy",
        "value": "USB 2.0 Full Speed (Micro B), Bluetooth 5.0"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (Windows 8.1/10/11, macOS 10.15/11/12)"
      },
      {
        "name": "Aplikacja mobilna",
        "value": "Brother iPrint&Label (iOS, Android)"
      },
      {
        "name": "Czcionki / ramki / symbole",
        "value": "17 / 160 / 900"
      },
      {
        "name": "Kody kreskowe",
        "value": "9 rodzajów: CODE39, ITF 2/5, EAN-13, EAN-8, UPC-A, UPC-E, CODABAR, GS1-128, CODE128"
      },
      {
        "name": "Szablony",
        "value": "175 gotowych układów; oznaczanie kabli w trybie automatycznego formatowania"
      },
      {
        "name": "Pamięć etykiet",
        "value": "99 etykiet × 280 znaków"
      },
      {
        "name": "Kopie i numerowanie",
        "value": "1–99"
      },
      {
        "name": "Języki menu",
        "value": "20, w tym polski"
      },
      {
        "name": "Zasilanie",
        "value": "zasilacz sieciowy AD-E001A (w zestawie) lub 6 × AA (alkaliczne LR6, brak w zestawie)"
      },
      {
        "name": "Kolor obudowy",
        "value": "czarny"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "202 × 199 × 87 mm"
      },
      {
        "name": "Masa",
        "value": "1,00 kg"
      },
      {
        "name": "Temperatura pracy",
        "value": "10–35 °C"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, zasilacz sieciowy, kabel USB 1 m, taśma TZe 24 mm × 4 m (czarny nadruk na białym tle), futerał"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTD610BTVPRG1",
        "name": "Brother P-touch PT-D610BTVP",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-d460bt",
      "brother-pt-p710bt"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-d610bt-karta-katalogowa.pdf",
        "size": "623 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/ptd610btvp",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-e110",
    "slug": "brother-pt-e110",
    "name": "Brother P-touch PT-E110",
    "seoTitle": "Brother P-touch PT-E110",
    "seoDescription": "Brother P-touch PT-E110: ręczna drukarka etykiet dla elektryków. Taśmy TZe do 12 mm, 180 dpi, blok numeryczny, zasilanie z baterii AAA lub zasilacza.",
    "shortDescription": "Ręczna drukarka etykiet dla elektryków i instalatorów teletechnicznych, drukująca na taśmach TZe od 3,5 do 12 mm. Ma klawiaturę z osobnym blokiem numerycznym i klawisze szablonów etykiet.",
    "description": "PT-E110 to ręczna drukarka etykiet do oznaczania instalacji elektrycznych i teletechnicznych. Opisuje gniazda, łączniki, płyty czołowe, kable, rury osłonowe i rozdzielnice. Obsługuje taśmy TZe o szerokości 3,5, 6, 9 i 12 mm. Szersze taśmy, do 18 i 24 mm, obsługują modele PT-E310BTVP i PT-E560BTVP.\n\nKlawiatura ma układ komputerowy i osobny blok numeryczny. Numery gniazd i łączników wpisuje się jednym palcem. Klawisze szablonów tworzą etykiety ogólne, etykiety na płyty czołowe, owijki kablowe i flagi kablowe. Funkcja numeracji drukuje serię etykiet z kolejnymi numerami, na przykład A001, A002, A003.\n\nDrukarka pracuje w rozdzielczości 180 dpi z prędkością do 20 mm/s. Etykieta mieści 2 wiersze tekstu, a wysokość druku sięga 9 mm. Graficzny wyświetlacz LCD pokazuje podgląd etykiety przed drukiem. Pamięć mieści 9 etykiet, łącznie do 720 znaków. Do wyboru jest 200 symboli, w tym elektryczne, teleinformatyczne i audio-wideo.\n\nPT-E110 pracuje samodzielnie, bez połączenia z komputerem. Zasilanie pochodzi z 6 baterii alkalicznych AAA albo z zasilacza sieciowego AD-24ES. Taśmę odcina ręczny obcinacz. Drukarka waży 0,4 kg i ma wymiary 111 × 58 × 204 mm.\n\nWersja PT-E110 zawiera kasetę z taśmą TZe 12 mm, czarny druk na białym tle, 4 m. Wersja PT-E110VP zawiera zasilacz sieciowy, twardą walizkę i taśmę TZe Flexi ID 9 mm, czarny druk na białym tle, 8 m.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-e110-1.png",
      "/images/products/brother/pt-e110-2.png",
      "/images/products/brother/pt-e110-3.png",
      "/images/products/brother/pt-e110vp-zestaw.png",
      "/images/products/brother/pt-e110vp-walizka.png",
      "/images/products/brother-pt-e110-rozdzielnica.webp",
      "/images/products/brother-pt-e110-czujka.webp",
      "/images/products/brother-pt-e110-etykieta-na-profilu.webp",
      "/images/products/brother-pt-e110-naklejanie-etykiety.webp"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-E110 — etykieciarka, widok pod kątem",
      "Brother P-touch PT-E110 — widok z przodu",
      "Brother P-touch PT-E110 — widok pod kątem z drugiej strony",
      "Zestaw Brother P-touch PT-E110VP z walizką, zasilaczem i kasetą z taśmą",
      "Otwarta walizka zestawu Brother P-touch PT-E110VP z drukarką w środku",
      "Instalator oznacza zabezpieczenia w rozdzielnicy drukarką Brother P-touch PT-E110",
      "Czujka pożarowa z etykietą identyfikacyjną wydrukowaną na taśmie TZe",
      "Żółta etykieta z oznaczeniem obwodu klimatyzacji na przewodzie",
      "Naklejanie żółtej etykiety z oznaczeniem obwodu na obudowę urządzenia"
    ],
    "tags": [
      "produkcja"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Typ urządzenia",
        "value": "Ręczna drukarka etykiet, praca samodzielna (bez złącza komputerowego)"
      },
      {
        "name": "Technologia druku",
        "value": "Termotransfer"
      },
      {
        "name": "Rozdzielczość druku",
        "value": "180 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "do 20 mm/s"
      },
      {
        "name": "Maksymalna wysokość druku",
        "value": "9 mm"
      },
      {
        "name": "Szerokości taśm TZe",
        "value": "3,5, 6, 9 i 12 mm"
      },
      {
        "name": "Długość etykiety",
        "value": "od 30 do 300 mm"
      },
      {
        "name": "Liczba wierszy na etykiecie",
        "value": "do 2"
      },
      {
        "name": "Obcinacz",
        "value": "ręczny"
      },
      {
        "name": "Marginesy",
        "value": "pełny, połowiczny, wąski, druk ciągły"
      },
      {
        "name": "Druk pionowy",
        "value": "tak"
      },
      {
        "name": "Druk lustrzany",
        "value": "nie"
      },
      {
        "name": "Kopie",
        "value": "od 1 do 9"
      },
      {
        "name": "Numeracja automatyczna",
        "value": "tak, od 1 do 50"
      },
      {
        "name": "Klawisze szablonów",
        "value": "etykieta ogólna, płyta czołowa, owijka kablowa, flaga kablowa"
      },
      {
        "name": "Klawiatura",
        "value": "układ komputerowy, osobny blok numeryczny"
      },
      {
        "name": "Wyświetlacz",
        "value": "graficzny, monochromatyczny LCD z podglądem etykiety; 16 znaków × 1 wiersz; 128 × 16 punktów"
      },
      {
        "name": "Czcionki",
        "value": "1 (Helsinki)"
      },
      {
        "name": "Style czcionki",
        "value": "normalny i 7 dodatkowych: pogrubiony, kontur, cień, kursywa, kursywa pogrubiona, kursywa z konturem, kursywa z cieniem"
      },
      {
        "name": "Rozmiary znaków",
        "value": "16, 22, 28, 42, 56 pkt"
      },
      {
        "name": "Symbole",
        "value": "200 (m.in. elektryczne, teleinformatyczne, audio-wideo)"
      },
      {
        "name": "Ramki",
        "value": "1 (prostokąt z zaokrąglonymi narożnikami)"
      },
      {
        "name": "Wyrównanie tekstu",
        "value": "do środka, do lewej"
      },
      {
        "name": "Pamięć etykiet",
        "value": "9 etykiet, łącznie do 720 znaków"
      },
      {
        "name": "Języki menu",
        "value": "20, w tym polski"
      },
      {
        "name": "Zasilanie",
        "value": "6 baterii alkalicznych AAA albo zasilacz sieciowy AD-24ES"
      },
      {
        "name": "Baterie w zestawie",
        "value": "nie"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "111 × 58 × 204 mm"
      },
      {
        "name": "Masa",
        "value": "0,4 kg"
      },
      {
        "name": "Wymiary opakowania PT-E110",
        "value": "190 × 94 × 286 mm"
      },
      {
        "name": "Wymiary opakowania PT-E110VP",
        "value": "314 × 116 × 279 mm"
      },
      {
        "name": "Zawartość opakowania PT-E110",
        "value": "drukarka, kaseta z taśmą TZe 12 mm (czarny na białym, 4 m), dokumentacja"
      },
      {
        "name": "Zawartość opakowania PT-E110VP",
        "value": "drukarka, kaseta z taśmą TZe Flexi ID 9 mm (czarny na białym, 8 m), zasilacz sieciowy, walizka, dokumentacja"
      },
      {
        "name": "Akcesoria opcjonalne",
        "value": "wymienne ostrze obcinacza TC-4, zasilacz sieciowy AD-24ES"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTE110G1",
        "name": "Brother P-touch PT-E110",
        "attributes": {
          "Zasilacz i walizka": "Nie"
        },
        "availability": "unavailable"
      },
      {
        "partNumber": "PTE110VPZG1",
        "name": "Brother P-touch PT-E110VP",
        "attributes": {
          "Zasilacz i walizka": "Tak"
        },
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-e310bt",
      "brother-pt-e560bt"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (EN)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-e110-karta-katalogowa.pdf",
        "size": "300 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/pte110vp",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-e310bt",
    "slug": "brother-pt-e310bt",
    "name": "Brother P-touch PT-E310BTVP",
    "seoTitle": "Brother P-touch PT-E310BTVP",
    "seoDescription": "Brother P-touch PT-E310BTVP: drukarka etykiet z Bluetooth, taśmy TZe do 18 mm, rurki HSe, akumulator Li-ion, aplikacja Pro Label Tool, walizka.",
    "shortDescription": "Ręczna drukarka etykiet z Bluetooth dla elektryków i instalatorów sieci. Drukuje na taśmach TZe do 18 mm i rurkach termokurczliwych HSe, ma akumulator Li-ion i walizkę w zestawie.",
    "description": "PT-E310BTVP to ręczna drukarka etykiet do instalacji elektrycznych i teleinformatycznych. Oznacza kable, przewody, łączniki, gniazda, znaki ostrzegawcze, panele fotowoltaiczne i sprzęt AV. Obsługuje taśmy TZe o szerokości 3,5, 6, 9, 12 i 18 mm. Model PT-E110 obsługuje taśmy do 12 mm, a PT-E560BTVP do 24 mm.\n\nSześć klawiszy aplikacji otwiera szablony etykiet: ogólnych, na płyty czołowe, owijek kablowych, flag kablowych, paneli krosowych i łączówek. Drukarka ma też funkcje rurki termokurczliwej i zaawansowanej numeracji. Etykieta mieści do 5 wierszy tekstu. Do wyboru jest 476 symboli, 7 czcionek oraz kody QR i Data Matrix.\n\nDrukarka obsługuje rurki termokurczliwe HSe o skurczu 2:1 w rozmiarach 5,8, 8,8, 11,7 i 17,7 mm. Rurki termokurczliwe HSe o skurczu 3:1 mają rozmiary 5,2, 9,0 i 11,2 mm. Drukarka współpracuje z taśmami Pro Tape, odpornymi na wodę, ścieranie, chemikalia i skrajne temperatury.\n\nBluetooth 5.0 łączy drukarkę ze smartfonem lub tabletem z aplikacją Brother Pro Label Tool. Przez USB-C drukarka współpracuje z programem P-touch Editor na komputerze. Aplikacja iLink&Label przesyła identyfikatory kabli z projektu Fluke Networks LinkWare Live.\n\nDrukarka pracuje w rozdzielczości 180 dpi z prędkością do 20 mm/s. Ręczny obcinacz ma tryb pauzy przed cięciem, który ogranicza straty taśmy. Zasilanie pochodzi z akumulatora litowo-jonowego BA-E001. Zestaw VP zawiera akumulator, kabel USB-C, walizkę i taśmę TZe z mocnym klejem 18 mm.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-e310bt-1.png",
      "/images/products/brother/pt-e310bt-2.png",
      "/images/products/brother/pt-e310bt-3.png",
      "/images/products/brother/pt-e310btvp-zestaw.png",
      "/images/products/brother-pt-e310btvp-kable-sieciowe.webp",
      "/images/products/brother-pt-e310btvp-etykieta-ostrzegawcza.webp"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-E310BTVP — etykieciarka, widok pod kątem",
      "Brother P-touch PT-E310BTVP — widok z przodu",
      "Brother P-touch PT-E310BTVP — widok pod kątem z drugiej strony",
      "Zestaw Brother P-touch PT-E310BTVP z walizką i akcesoriami",
      "Kable sieciowe oznaczone etykietami owijkowymi z taśmy TZe",
      "Żółta etykieta ostrzegawcza 230 V na obudowie urządzenia"
    ],
    "tags": [
      "produkcja"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Typ urządzenia",
        "value": "Ręczna, przenośna drukarka etykiet"
      },
      {
        "name": "Technologia druku",
        "value": "Termotransfer"
      },
      {
        "name": "Rozdzielczość druku",
        "value": "180 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "do 20 mm/s (z akumulatora i z zasilacza USB-PD PA-AD-004)"
      },
      {
        "name": "Maksymalna wysokość druku",
        "value": "15,8 mm (na taśmie 18 mm)"
      },
      {
        "name": "Szerokości taśm TZe",
        "value": "3,5, 6, 9, 12, 18 mm"
      },
      {
        "name": "Taśmy HGe",
        "value": "6, 9, 12, 18 mm"
      },
      {
        "name": "Rurki termokurczliwe HSe 2:1",
        "value": "5,8, 8,8, 11,7, 17,7 mm"
      },
      {
        "name": "Rurki termokurczliwe HSe 3:1",
        "value": "5,2, 9,0, 11,2 mm"
      },
      {
        "name": "Obcinacz",
        "value": "ręczny, nożycowy, z trybem pauzy cięcia"
      },
      {
        "name": "Funkcje etykietowania",
        "value": "etykieta ogólna, płyta czołowa, owijka kablowa, flaga kablowa, panel krosowy, łączówka, rurka termokurczliwa, zaawansowana numeracja"
      },
      {
        "name": "Liczba wierszy na etykiecie",
        "value": "do 5 (taśma 18 mm)"
      },
      {
        "name": "Długość taśmy",
        "value": "automatyczna lub od 25 do 300 mm; minimalna długość etykiety 30 mm"
      },
      {
        "name": "Klawiatura",
        "value": "gumowa, 64 klawisze"
      },
      {
        "name": "Wyświetlacz",
        "value": "graficzny LCD 128 × 56 punktów, 67 × 40 mm, podświetlany, podgląd etykiety; 15 znaków × 2 wiersze tekstu"
      },
      {
        "name": "Symbole",
        "value": "476"
      },
      {
        "name": "Czcionki",
        "value": "7 (Helsinki, Brussels, Los Angeles, Atlanta, Adams, Sofia, Letter Gothic)"
      },
      {
        "name": "Rozmiary znaków",
        "value": "auto, 6, 9, 12, 18, 24, 36, 42 pkt"
      },
      {
        "name": "Style pisma",
        "value": "10"
      },
      {
        "name": "Ramki",
        "value": "7"
      },
      {
        "name": "Kody kreskowe",
        "value": "CODE39, ITF 2/5, EAN-13, EAN-8, UPC-A, UPC-E, CODABAR, GS1-128, CODE128, kod QR, Data Matrix"
      },
      {
        "name": "Numeracja",
        "value": "od 1 do 99; tryb równoczesny, zaawansowany, ósemkowy, dziesiętny, szesnastkowy"
      },
      {
        "name": "Kopie",
        "value": "od 1 do 99"
      },
      {
        "name": "Druk lustrzany / pionowy / obrócony",
        "value": "tak / tak / tak (do oznaczania kabli)"
      },
      {
        "name": "Pamięć",
        "value": "99 etykiet; bufor tekstu do 1800 znaków; 6 MB na przesłane szablony"
      },
      {
        "name": "Bluetooth",
        "value": "5.0 (SPP, iAP), MFi"
      },
      {
        "name": "USB",
        "value": "USB-C, USB 2.0 Full Speed; Windows: USB 1.1/2.0/3.0, Mac: USB 1.1/2.0"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (komputer), aplikacja Brother Pro Label Tool (Android, iOS), Brother iLink&Label"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows 10, 11; macOS 11, 12, 13; Android 9–13; iOS 15, 16"
      },
      {
        "name": "Zasilanie",
        "value": "akumulator litowo-jonowy BA-E001 (7,2 V) w zestawie; zasilacz USB-PD PA-AD-004 (12 V) do kupienia oddzielnie"
      },
      {
        "name": "Czas ładowania",
        "value": "ok. 3 h (z zasilaczem PA-AD-004)"
      },
      {
        "name": "Automatyczne wyłączanie",
        "value": "akumulator: 20 min (wył., od 10 min do 1 h); zasilanie USB: 20 min (wył., od 10 min do 12 h)"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "135 × 235,5 × 70,3 mm"
      },
      {
        "name": "Masa",
        "value": "0,785 kg (bez akumulatora i kasety)"
      },
      {
        "name": "Temperatura pracy",
        "value": "od 10 do 35 °C, wilgotność od 20 do 80%"
      },
      {
        "name": "Kolor obudowy",
        "value": "pomarańczowy i czarny"
      },
      {
        "name": "Języki menu",
        "value": "20, w tym polski"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka PT-E310BT, akumulator litowo-jonowy, kabel USB-C (1 m, czarny), taśma TZe z mocnym klejem 18 mm (czarny na żółtym), dokumentacja, walizka"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTE310BTVPRG1",
        "name": "Brother P-touch PT-E310BTVP",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-e110",
      "brother-pt-e560bt"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-e310bt-karta-katalogowa.pdf",
        "size": "571 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/pte310btvp",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-e560bt",
    "slug": "brother-pt-e560bt",
    "name": "Brother P-touch PT-E560BTVP",
    "seoTitle": "Brother P-touch PT-E560BTVP",
    "seoDescription": "Brother P-touch PT-E560BTVP: drukarka etykiet z Bluetooth, taśmy TZe do 24 mm, rurki HSe, obcinacz z nacinaniem, do 30 mm/s, akumulator Li-ion.",
    "shortDescription": "Ręczna drukarka etykiet z Bluetooth dla elektryków i instalatorów sieci. Drukuje na taśmach TZe do 24 mm i rurkach termokurczliwych HSe, ma automatyczny obcinacz z nacinaniem etykiet.",
    "description": "PT-E560BTVP to ręczna drukarka etykiet do instalacji elektrycznych i sieciowych. Oznacza znaki ostrzegawcze, łączniki, przewody, rozdzielnice, łączówki, szafy i okablowanie CAT5E oraz CAT6A. Obsługuje taśmy TZe o szerokości od 3,5 do 24 mm. Na taśmie 24 mm etykieta mieści do 7 wierszy tekstu.\n\nAutomatyczny obcinacz odcina całą etykietę albo nacina ją bez przecinania podkładu. Nacięte etykiety wychodzą jednym paskiem i zachowują kolejność. Z zasilaczem USB-PD PA-AD-004 drukarka drukuje do 30 mm/s, a z akumulatora do 20 mm/s. Model PT-E310BTVP ma obcinacz ręczny i obsługuje taśmy do 18 mm.\n\nKlawiatura ma 70 gumowych klawiszy, w tym 6 klawiszy szablonów etykiet: ogólnych, na płyty czołowe, owijek i flag kablowych, paneli krosowych i łączówek. Podświetlany wyświetlacz graficzny 240 × 120 punktów pokazuje podgląd etykiety. Do wyboru jest 476 symboli, 14 czcionek oraz kody QR i Data Matrix.\n\nDrukarka obsługuje rurki termokurczliwe HSe o skurczu 2:1 w rozmiarach 5,8, 8,8, 11,7, 17,7 i 23,6 mm. Rurki termokurczliwe HSe o skurczu 3:1 mają rozmiary 5,2, 9,0, 11,2 i 21,0 mm. Drukarka ma też tryb taśmy samolaminującej do owijania kabli. Obsługuje taśmy Pro Tape, odporne na wodę, ścieranie, chemikalia i skrajne temperatury.\n\nBluetooth 5.0 łączy drukarkę z aplikacją Brother Pro Label Tool na Androidzie i iOS. Przez USB-C drukarka współpracuje z programem P-touch Editor. Zasilanie pochodzi z akumulatora litowo-jonowego BA-E001. Zestaw VP zawiera kabel USB-C, walizkę, taśmę TZe Flexi ID 12 mm i taśmę TZe z mocnym klejem 24 mm.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-e560bt-1.png",
      "/images/products/brother/pt-e560bt-2.png",
      "/images/products/brother/pt-e560bt-3.png",
      "/images/products/brother/pt-e560btvp-zestaw.png",
      "/images/products/brother-pt-e560btvp-rozdzielnica.webp",
      "/images/products/brother-pt-e560btvp-kable-sieciowe.webp",
      "/images/products/brother-pt-e560btvp-etykieta-ostrzegawcza.webp"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-E560BTVP — etykieciarka, widok pod kątem",
      "Brother P-touch PT-E560BTVP — widok z przodu",
      "Brother P-touch PT-E560BTVP — widok pod kątem z drugiej strony",
      "Zestaw Brother P-touch PT-E560BTVP z walizką, akumulatorem, kablem USB-C i dwiema taśmami",
      "Rozdzielnica z zabezpieczeniami opisanymi etykietami z taśmy TZe",
      "Kable sieciowe LAN oznaczone etykietami owijkowymi",
      "Żółta etykieta ostrzegawcza 400 V na szafie elektrycznej"
    ],
    "tags": [
      "produkcja"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Typ urządzenia",
        "value": "Ręczna, przenośna drukarka etykiet"
      },
      {
        "name": "Technologia druku",
        "value": "Termotransfer"
      },
      {
        "name": "Rozdzielczość druku",
        "value": "180 dpi (128 punktów)"
      },
      {
        "name": "Prędkość druku",
        "value": "do 30 mm/s z zasilaczem USB-PD PA-AD-004; do 20 mm/s z akumulatora"
      },
      {
        "name": "Maksymalna wysokość druku",
        "value": "18 mm (na taśmie 24 mm)"
      },
      {
        "name": "Szerokości taśm TZe",
        "value": "3,5, 6, 9, 12, 18, 24 mm"
      },
      {
        "name": "Taśmy HGe",
        "value": "6, 9, 12, 18, 24 mm"
      },
      {
        "name": "Rurki termokurczliwe HSe 2:1",
        "value": "5,8, 8,8, 11,7, 17,7, 23,6 mm"
      },
      {
        "name": "Rurki termokurczliwe HSe 3:1",
        "value": "5,2, 9,0, 11,2, 21,0 mm"
      },
      {
        "name": "Obcinacz",
        "value": "automatyczny: pełne cięcie lub nacinanie etykiety bez podkładu"
      },
      {
        "name": "Funkcje etykietowania",
        "value": "etykieta ogólna, płyta czołowa, owijka kablowa, flaga kablowa, panel krosowy, łączówka, rurka termokurczliwa, zaawansowana numeracja; tryb taśmy samolaminującej"
      },
      {
        "name": "Liczba wierszy na etykiecie",
        "value": "do 7 (taśma 24 mm)"
      },
      {
        "name": "Długość taśmy",
        "value": "automatyczna lub od 10 do 999 mm; minimalna długość etykiety 30 mm"
      },
      {
        "name": "Klawiatura",
        "value": "gumowa, 70 klawiszy"
      },
      {
        "name": "Wyświetlacz",
        "value": "graficzny LCD 240 × 120 punktów, 75 × 45 mm, podświetlany, podgląd etykiety; 17 znaków × 2 wiersze tekstu"
      },
      {
        "name": "Symbole",
        "value": "476"
      },
      {
        "name": "Czcionki",
        "value": "14 (Helsinki, Brussels, Belgium, Florida, Los Angeles, San Diego, US, Calgary, Atlanta, Adams, Brunei, Sofia, Germany, Letter Gothic)"
      },
      {
        "name": "Rozmiary znaków",
        "value": "auto, 6, 9, 12, 18, 24, 36, 42, 48 pkt"
      },
      {
        "name": "Style pisma",
        "value": "10"
      },
      {
        "name": "Ramki",
        "value": "7"
      },
      {
        "name": "Kody kreskowe",
        "value": "CODE39, ITF 2/5, EAN-13, EAN-8, UPC-A, UPC-E, CODABAR, GS1-128, CODE128, kod QR, Data Matrix"
      },
      {
        "name": "Numeracja",
        "value": "od 1 do 99; tryb równoczesny, zaawansowany, ósemkowy, dziesiętny, szesnastkowy"
      },
      {
        "name": "Kopie",
        "value": "od 1 do 99"
      },
      {
        "name": "Druk lustrzany / pionowy / obrócony",
        "value": "tak / tak / tak (do oznaczania kabli)"
      },
      {
        "name": "Pamięć",
        "value": "99 etykiet; bufor tekstu do 1800 znaków; 6 MB na przesłane szablony"
      },
      {
        "name": "Bluetooth",
        "value": "5.0 (SPP, iAP), MFi"
      },
      {
        "name": "USB",
        "value": "USB-C, USB 2.0 Full Speed; Windows: USB 1.1/2.0/3.0, Mac: USB 1.1/2.0"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (komputer), aplikacja Brother Pro Label Tool (Android, iOS), Brother iLink&Label"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows 10, 11; macOS 11, 12, 13; Android 9–13; iOS 15, 16"
      },
      {
        "name": "Zasilanie",
        "value": "akumulator litowo-jonowy BA-E001 (7,2 V) w zestawie; zasilacz USB-PD PA-AD-004 (12 V) do kupienia oddzielnie"
      },
      {
        "name": "Czas ładowania",
        "value": "ok. 3 h (z zasilaczem PA-AD-004)"
      },
      {
        "name": "Automatyczne wyłączanie",
        "value": "akumulator: 20 min (wył., od 10 min do 1 h); zasilanie USB: 20 min (wył., od 10 min do 12 h)"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "132 × 244 × 80 mm"
      },
      {
        "name": "Masa",
        "value": "1,05 kg (bez akumulatora i kasety)"
      },
      {
        "name": "Temperatura pracy",
        "value": "od 10 do 35 °C, wilgotność od 20 do 80%"
      },
      {
        "name": "Kolor obudowy",
        "value": "pomarańczowy i czarny"
      },
      {
        "name": "Języki menu",
        "value": "20, w tym polski"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka PT-E560BT, akumulator litowo-jonowy, kabel USB-C (1 m, czarny), taśma TZe Flexi ID 12 mm (czarny na białym), taśma TZe z mocnym klejem 24 mm (czarny na żółtym), dokumentacja, walizka"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTE560BTVPRG1",
        "name": "Brother P-touch PT-E560BTVP",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-e310bt",
      "brother-pt-e920bt"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-e560bt-karta-katalogowa.pdf",
        "size": "531 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/pte560btvp",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-e720bt",
    "slug": "brother-pt-e720bt",
    "name": "Brother P-touch PT-E720BT",
    "seoTitle": "Brother P-touch PT-E720BT",
    "seoDescription": "Brother P-touch PT-E720BT (CUBE Pro): drukarka etykiet z Bluetooth i akumulatorem, taśmy TZe do 24 mm, 180 dpi, aplikacja Pro Label Tool, 0,64 kg.",
    "shortDescription": "Kompaktowa drukarka etykiet P-touch CUBE Pro dla instalatorów, sterowana ze smartfona przez Bluetooth lub z komputera przez USB. Drukuje na taśmach TZe do 24 mm w rozdzielczości 180 dpi.",
    "description": "PT-E720BT to przenośna drukarka etykiet z serii P-touch CUBE Pro. Nie ma klawiatury ani wyświetlacza, na obudowie jest przycisk zasilania i diody stanu. Etykiety projektuje się w aplikacji Brother Pro Label Tool na smartfonie albo w programie P-touch Editor 6 na komputerze.\n\nDrukarka służy do oznaczania instalacji elektrycznych: znaków ostrzegawczych, paneli fotowoltaicznych, sprzętu AV, kabli i przewodów. Aplikacja Brother Pro Label Tool zawiera szablony etykiet ostrzegawczych i oznaczeń kabli. Szablony kabli, paneli krosowych, płyt czołowych i rozdzielnic pobiera się z serwera Brother w chmurze.\n\nDrukarka obsługuje taśmy TZe o szerokości od 3,5 do 24 mm. Drukuje w rozdzielczości 180 dpi z prędkością do 20 mm/s. Wysokość druku sięga 18 mm, a długość etykiety 1000 mm. Obcinacz jest automatyczny, z mechanizmem nożycowym. Na etykietach można drukować kody QR, kody kreskowe i logo.\n\nZasilanie pochodzi z akumulatora litowo-jonowego PA-BT-005 o pojemności 1750 mAh. Akumulator ładuje się przez USB Micro-B z komputera albo z ładowarki USB. Drukarka waży 0,64 kg i ma wymiary 128 × 67 × 128 mm. Większy model PT-E920BT drukuje na taśmach do 36 mm w 360 dpi.\n\nW zestawie jest kabel USB i taśma TZe-S651 24 mm z mocnym klejem, czarny druk na żółtym tle. Drukarka współpracuje z taśmami Pro Tape, odpornymi na wodę, chemikalia, ścieranie i skrajne temperatury. Jako akcesorium dostępny jest pasek na ramię ze zintegrowaną torbą.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-e720bt-1.png",
      "/images/products/brother/pt-e720bt-2.png",
      "/images/products/brother/pt-e720bt-3.png",
      "/images/products/brother-pt-e720bt-etykieta-ostrzegawcza.webp",
      "/images/products/brother-pt-e720bt-kable-sieciowe.webp",
      "/images/products/brother-pt-e720bt-rozlacznik.webp"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-E720BT — drukarka etykiet, widok pod kątem",
      "Brother P-touch PT-E720BT — widok z przodu",
      "Brother P-touch PT-E720BT — widok pod kątem, strona z okienkiem kasety",
      "Żółta etykieta ostrzegawcza 400 V na szafie elektrycznej",
      "Kable sieciowe oznaczone etykietami owijkowymi z taśmy TZe",
      "Etykieta rozdzielnicy pod wyłącznikiem obrotowym"
    ],
    "tags": [
      "produkcja"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Seria",
        "value": "P-touch CUBE Pro"
      },
      {
        "name": "Typ urządzenia",
        "value": "przenośna drukarka etykiet bez klawiatury i wyświetlacza; przycisk zasilania, diody zasilania i akumulatora"
      },
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Rozdzielczość druku",
        "value": "180 dpi (128 punktów)"
      },
      {
        "name": "Prędkość druku",
        "value": "do 20 mm/s"
      },
      {
        "name": "Maksymalna wysokość druku",
        "value": "18 mm"
      },
      {
        "name": "Szerokości taśm TZe",
        "value": "3,5, 6, 9, 12, 18, 24 mm"
      },
      {
        "name": "Taśmy HGe",
        "value": "6, 9, 12, 18, 24 mm"
      },
      {
        "name": "Maksymalna długość etykiety",
        "value": "1000 mm"
      },
      {
        "name": "Obcinacz",
        "value": "automatyczny, nożycowy"
      },
      {
        "name": "Kody i grafika",
        "value": "kody QR, kody kreskowe, logo"
      },
      {
        "name": "Bluetooth",
        "value": "5.0, profil SPP"
      },
      {
        "name": "USB",
        "value": "USB 2.0 Full Speed, złącze Micro-B"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor 6 (Windows), aplikacja Brother Pro Label Tool (Android, iOS), Printer Setting Tool, P-touch Update Software"
      },
      {
        "name": "SDK",
        "value": "b-PAC oraz SDK dla Androida i iOS (Brother Developer Center)"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows 10, 11; Android 12–16; iOS 17, 18"
      },
      {
        "name": "Zasilanie",
        "value": "akumulator litowo-jonowy PA-BT-005, 1750 mAh, wbudowany"
      },
      {
        "name": "Ładowanie",
        "value": "przez kabel USB z komputera lub z ładowarki USB 5 V, min. 0,5 A (ładowarka nie jest dołączona)"
      },
      {
        "name": "Automatyczne wyłączanie",
        "value": "akumulator: 10 min; zasilanie USB: 1 h"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "128 × 67 × 128 mm"
      },
      {
        "name": "Masa",
        "value": "0,64 kg (z akumulatorem)"
      },
      {
        "name": "Temperatura pracy",
        "value": "od 10 do 35 °C, wilgotność od 20 do 80%"
      },
      {
        "name": "Kolor obudowy",
        "value": "czarno-pomarańczowy"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, kabel USB, akumulator PA-BT-005 (wbudowany), taśma TZe-S651 24 mm z mocnym klejem (czarny na żółtym)"
      },
      {
        "name": "Akcesoria opcjonalne",
        "value": "akumulator PA-BT-005; futerał ochronny z paskiem na ramię BPA-CC7-700"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTE720BTZ1",
        "name": "Brother P-touch PT-E720BT",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-e920bt",
      "brother-pt-p710bt"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-e720bt-karta-katalogowa.pdf",
        "size": "413 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/pte720bt",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-e920bt",
    "slug": "brother-pt-e920bt",
    "name": "Brother P-touch PT-E920BT",
    "seoTitle": "Brother P-touch PT-E920BT",
    "seoDescription": "Brother P-touch PT-E920BT (CUBE Pro): drukarka etykiet 360 dpi z Bluetooth, taśmy TZe do 36 mm, kasety FLe, obcinacz z nacinaniem, akumulator Li-ion.",
    "shortDescription": "Przenośna drukarka etykiet P-touch CUBE Pro dla instalatorów elektrycznych i sieciowych. Drukuje w 360 dpi na taśmach TZe do 36 mm, ma Bluetooth i automatyczny obcinacz z nacinaniem.",
    "description": "PT-E920BT to przenośna drukarka etykiet z serii P-touch CUBE Pro, bez klawiatury i wyświetlacza. Etykiety projektuje się w aplikacji Brother Pro Label Tool albo w programie P-touch Editor 6. Drukarka łączy się z telefonem i komputerem przez Bluetooth 5.0 albo USB-C.\n\nDrukarka służy do oznaczania znaków ostrzegawczych, rozdzielnic, przewodów, paneli krosowych i okablowania CAT5E oraz CAT6A. Szablony etykiet kabli, płyt czołowych, rozdzielnic i urządzeń sieciowych pobiera się z serwera Brother w chmurze. Na etykietach można drukować kody QR, kody kreskowe i logo.\n\nDrukarka obsługuje taśmy TZe o szerokości od 3,5 do 36 mm. Współpracuje z taśmami Pro Tape, odpornymi na wodę, ścieranie, chemikalia i skrajne temperatury. Głowica 360 dpi drukuje do 32 mm wysokości z prędkością do 20 mm/s. Model PT-E720BT drukuje w 180 dpi i obsługuje taśmy do 24 mm.\n\nAutomatyczny obcinacz z nacinaniem wydaje serię etykiet na jednym pasku podkładu. Taki pasek ułatwia oznaczanie wielu kabli po kolei w dużych instalacjach. Drukarka obsługuje też kasety FLe z wycinanymi etykietami do flag kablowych.\n\nZasilanie pochodzi z akumulatora litowo-jonowego PA-BT-003 o pojemności 1750 mAh. Drukarka waży 1,17 kg i ma wymiary 138 × 94 × 138 mm. W zestawie jest kabel USB i taśma TZe-S661 36 mm z mocnym klejem, czarny druk na żółtym tle.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-e920bt-1.png",
      "/images/products/brother/pt-e920bt-2.png",
      "/images/products/brother/pt-e920bt-3.png",
      "/images/products/brother-pt-e920bt-panel-krosowy.webp",
      "/images/products/brother-pt-e920bt-etykieta-ostrzegawcza.webp",
      "/images/products/brother-pt-e920bt-flagi-kablowe.webp"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-E920BT — drukarka etykiet, widok pod kątem",
      "Brother P-touch PT-E920BT — widok z przodu",
      "Brother P-touch PT-E920BT — widok pod kątem, strona z okienkiem kasety",
      "Kabel Cat6a z etykietą owijkową przy panelu krosowym",
      "Żółta etykieta ostrzegawcza 400 V na szafie elektrycznej",
      "Kable światłowodowe oznaczone etykietą flagową"
    ],
    "tags": [
      "produkcja"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Seria",
        "value": "P-touch CUBE Pro"
      },
      {
        "name": "Typ urządzenia",
        "value": "przenośna drukarka etykiet bez klawiatury i wyświetlacza; przycisk zasilania, diody zasilania i akumulatora"
      },
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Rozdzielczość druku",
        "value": "360 dpi (560 punktów)"
      },
      {
        "name": "Prędkość druku",
        "value": "do 20 mm/s"
      },
      {
        "name": "Maksymalna wysokość druku",
        "value": "32 mm"
      },
      {
        "name": "Szerokości taśm TZe",
        "value": "3,5, 6, 9, 12, 18, 24, 36 mm"
      },
      {
        "name": "Taśmy HGe",
        "value": "6, 9, 12, 18, 24, 36 mm"
      },
      {
        "name": "Kasety FLe (etykiety wycinane)",
        "value": "tak"
      },
      {
        "name": "Maksymalna długość etykiety",
        "value": "1000 mm"
      },
      {
        "name": "Obcinacz",
        "value": "automatyczny, nożycowy, z nacinaniem etykiety bez podkładu"
      },
      {
        "name": "Kody i grafika",
        "value": "kody QR, kody kreskowe, logo"
      },
      {
        "name": "Bluetooth",
        "value": "5.0, profil SPP"
      },
      {
        "name": "USB",
        "value": "USB-C (USB 2.0 Full Speed)"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor 6 (Windows), aplikacja Brother Pro Label Tool (Android, iOS), Printer Setting Tool, P-touch Update Software"
      },
      {
        "name": "SDK",
        "value": "b-PAC oraz SDK dla Androida i iOS (Brother Developer Center)"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows 10, 11; Android 12–16; iOS 17, 18"
      },
      {
        "name": "Zasilanie",
        "value": "akumulator litowo-jonowy PA-BT-003, 1750 mAh"
      },
      {
        "name": "Ładowanie",
        "value": "przez kabel USB z komputera lub z ładowarki USB 5 V, min. 0,5 A (ładowarka nie jest dołączona)"
      },
      {
        "name": "Automatyczne wyłączanie",
        "value": "akumulator: 10 min; zasilanie USB: 1 h"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "138 × 94 × 138 mm"
      },
      {
        "name": "Masa",
        "value": "1,17 kg (z akumulatorem)"
      },
      {
        "name": "Temperatura pracy",
        "value": "od 10 do 35 °C, wilgotność od 20 do 80%"
      },
      {
        "name": "Kolor obudowy",
        "value": "czarno-pomarańczowy"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, kabel USB, akumulator PA-BT-003, taśma TZe-S661 36 mm z mocnym klejem (czarny na żółtym)"
      },
      {
        "name": "Akcesoria opcjonalne",
        "value": "akumulator PA-BT-003; futerał ochronny z paskiem na ramię BPA-CC9-900"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTE920BTZ1",
        "name": "Brother P-touch PT-E920BT",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-e720bt",
      "brother-pt-p950nw"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-e920bt-karta-katalogowa.pdf",
        "size": "409 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/pte920bt",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-p300bt",
    "slug": "brother-pt-p300bt",
    "name": "Brother P-touch PT-P300BT",
    "seoTitle": "Brother P-touch PT-P300BT",
    "seoDescription": "Brother P-touch PT-P300BT (CUBE): drukarka etykiet ze smartfonu przez Bluetooth, taśmy TZe 3,5–12 mm, 180 dpi, 20 mm/s, zasilanie 6 × AAA.",
    "shortDescription": "Kompaktowa drukarka etykiet P-touch CUBE obsługiwana ze smartfonu przez Bluetooth. Drukuje na taśmach TZe o szerokości od 3,5 do 12 mm z prędkością do 20 mm/s. Pracuje na 6 bateriach AAA.",
    "description": "PT-P300BT (P-touch CUBE) to drukarka etykiet bez klawiatury i wyświetlacza. Etykiety projektuje się na smartfonie lub tablecie w aplikacji P-touch Design&Print 2 albo Brother iPrint&Label. Drukarka łączy się z urządzeniem mobilnym przez Bluetooth 2.1 + EDR i ma certyfikat Apple MFi.\n\nDrukarka obsługuje taśmy TZe o szerokości 3,5, 6, 9 i 12 mm. Druk termotransferowy ma rozdzielczość 180 dpi i prędkość do 20 mm/s. Wysokość wydruku sięga 9 mm, a etykieta mieści do 2 wierszy. Taśmę odcina się ręcznie dźwignią odcinarki. Laminowane taśmy TZe chronią nadruk przed ścieraniem, cieczami, temperaturą, chemikaliami i promieniowaniem słonecznym.\n\nDrukarka służy do oznaczania segregatorów, kabli i przewodów oraz do etykiet w kuchni, domowym biurze, magazynie, szkole, garażu i ogrodzie. Aplikacja ma gotowe szablony i ramki. Aplikacja pokazuje w podglądzie rzeczywiste kolory tekstu i tła. Drukarka drukuje też na satynowych wstążkach ze złotym nadrukiem i na taśmach z wzorami ozdobnymi.\n\nDrukarkę zasila 6 baterii alkalicznych AAA (LR03) lub akumulatorów Ni-MH AAA (HR03). Baterii nie ma w zestawie. Drukarka może też pracować z opcjonalnym zasilaczem sieciowym AD-24ES. Obudowa ma wymiary 115 × 61 × 115 mm, a drukarka bez baterii waży 0,38 kg.\n\nW porównaniu z PT-P710BT model drukuje na węższych taśmach, do 12 mm, i nie ma portu USB do komputera. PT-P710BT ma wbudowany akumulator, a PT-P300BT pracuje na bateriach AAA. W zestawie jest kaseta z taśmą TZe 12 mm o długości 4 m.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-p300bt-1.png",
      "/images/products/brother/pt-p300bt-2.png",
      "/images/products/brother/pt-p300bt-3.png"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-P300BT — drukarka etykiet, widok pod kątem",
      "Brother P-touch PT-P300BT — widok z boku, szczelina wyjścia etykiety",
      "Brother P-touch PT-P300BT — widok pod kątem, strona z okienkiem kasety"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Rozdzielczość druku",
        "value": "180 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "do 20 mm/s"
      },
      {
        "name": "Szerokości taśm TZe",
        "value": "3,5; 6; 9; 12 mm"
      },
      {
        "name": "Maksymalna wysokość wydruku",
        "value": "9 mm"
      },
      {
        "name": "Liczba wierszy",
        "value": "do 2"
      },
      {
        "name": "Obcinak",
        "value": "ręczny (dźwignia)"
      },
      {
        "name": "Klawiatura i wyświetlacz",
        "value": "brak — obsługa z aplikacji mobilnej"
      },
      {
        "name": "Łączność",
        "value": "Bluetooth 2.1 + EDR klasa 2, certyfikat Apple MFi"
      },
      {
        "name": "Aplikacje mobilne",
        "value": "P-touch Design&Print 2, Brother iPrint&Label (iOS, Android)"
      },
      {
        "name": "Zasilanie",
        "value": "6 × AAA (LR03 lub Ni-MH HR03, brak w zestawie); opcjonalny zasilacz AD-24ES"
      },
      {
        "name": "Kolor obudowy",
        "value": "biały"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "115 × 61 × 115 mm"
      },
      {
        "name": "Masa",
        "value": "0,38 kg (bez baterii i kasety)"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, kaseta z taśmą TZe 12 mm × 4 m (czarny nadruk na białym tle), dokumentacja"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTP300BTRE1",
        "name": "Brother P-touch PT-P300BT",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-p710bt",
      "brother-pt-p910bt"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-p300bt-karta-katalogowa.pdf",
        "size": "1,4 MB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/ptouchcube",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-p710bt",
    "slug": "brother-pt-p710bt",
    "name": "Brother P-touch PT-P710BT",
    "seoTitle": "Brother P-touch PT-P710BT",
    "seoDescription": "Brother P-touch PT-P710BT (CUBE Plus): drukarka etykiet na taśmy TZe 3,5–24 mm, USB i Bluetooth, akumulator ładowany przez USB, automatyczny obcinak.",
    "shortDescription": "Drukarka etykiet P-touch CUBE Plus na taśmy TZe do 24 mm. Łączy się z komputerem przez USB i ze smartfonem przez Bluetooth. Ma wbudowany akumulator litowo-jonowy ładowany przez USB i automatyczny obcinak.",
    "description": "PT-P710BT (P-touch CUBE Plus) to kompaktowa drukarka etykiet do biura, bez klawiatury i wyświetlacza. Etykiety projektuje się na komputerze w programie P-touch Editor albo na smartfonie i tablecie w aplikacjach Brother iPrint&Label i P-touch Design&Print 2.\n\nDrukarka obsługuje taśmy TZe o szerokości od 3,5 do 24 mm. Wysokość wydruku sięga 18 mm, a długość etykiety — 500 mm. Druk ma rozdzielczość 180 dpi, a w trybie wysokiej rozdzielczości 180 × 360 dpi. Prędkość druku wynosi do 20 mm/s.\n\nWbudowany akumulator litowo-jonowy 3,6 V / 1870 mAh ładuje się przez port USB komputera lub ładowarkę USB. Ładowarki USB nie ma w zestawie. Jedno ładowanie wystarcza na wydruk 5–6 kaset z taśmą. Akumulator jest przewidziany na 500 cykli ładowania.\n\nPort USB 2.0 łączy drukarkę z komputerem Windows lub Mac. Bluetooth z profilem SPP i certyfikatem Apple MFi obsługuje urządzenia z systemem iOS i Android. P-touch Editor dodaje do etykiet obrazy, logo, ramki i kody kreskowe, w tym QR i Data Matrix, oraz pobiera dane z plików Excel i CSV.\n\nAutomatyczny obcinak wykonuje cięcie pełne. Drukarka ma wymiary 128 × 67 × 128 mm i waży 0,64 kg. W porównaniu z PT-P300BT model obsługuje taśmy do 24 mm, ma port USB i akumulator zamiast baterii AAA.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-p710bt-1.png",
      "/images/products/brother/pt-p710bt-2.png"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-P710BT — drukarka etykiet, widok pod kątem",
      "Brother P-touch PT-P710BT — widok pod kątem, strona z okienkiem kasety"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Rozdzielczość druku",
        "value": "180 dpi; tryb wysokiej rozdzielczości 180 × 360 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "do 20 mm/s"
      },
      {
        "name": "Szerokości taśm TZe",
        "value": "3,5; 6; 9; 12; 18; 24 mm"
      },
      {
        "name": "Maksymalna wysokość wydruku",
        "value": "18 mm"
      },
      {
        "name": "Długość etykiety",
        "value": "25,4–500 mm"
      },
      {
        "name": "Obcinak",
        "value": "automatyczny, cięcie pełne"
      },
      {
        "name": "Klawiatura i wyświetlacz",
        "value": "brak — obsługa z komputera lub aplikacji mobilnej"
      },
      {
        "name": "Interfejsy",
        "value": "USB 2.0 Full Speed, Bluetooth 2.1 + EDR klasa 2 (SPP, Apple MFi)"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (Windows, Mac), dodatek do Microsoft Word, Excel i Outlook"
      },
      {
        "name": "Kody kreskowe (P-touch Editor)",
        "value": "CODE39, CODE128, GS1-128 (UCC/EAN-128), ITF (I-2/5), CODABAR (NW-7), UPC-A, UPC-E, EAN-13, EAN-8, ISBN-2, ISBN-5, Laser Barcode, POSTNET, RSS (GS1 DataBar), PDF417, QR Code, Data Matrix, MaxiCode, IMB; Aztec Code tylko w wersji dla Windows"
      },
      {
        "name": "Aplikacje mobilne",
        "value": "Brother iPrint&Label, P-touch Design&Print 2 (iOS, Android)"
      },
      {
        "name": "Zasilanie",
        "value": "wbudowany akumulator litowo-jonowy 3,6 V / 1870 mAh (PA-BT-005), ładowanie przez USB"
      },
      {
        "name": "Wydajność akumulatora",
        "value": "5–6 kaset z taśmą na jednym ładowaniu; 500 cykli ładowania"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "128 × 67 × 128 mm"
      },
      {
        "name": "Masa",
        "value": "0,64 kg (z akumulatorem)"
      },
      {
        "name": "Temperatura pracy",
        "value": "10–35 °C"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka z akumulatorem, taśma TZe 24 mm × 4 m (czarny nadruk na białym tle), kabel micro USB, dokumentacja"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTP710BTZG1",
        "name": "Brother P-touch PT-P710BT",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-p300bt",
      "brother-pt-p910bt",
      "brother-pt-e720bt"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (EN)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-p710bt-karta-katalogowa.pdf",
        "size": "4,1 MB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/ptouchcubeplus",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-p910bt",
    "slug": "brother-pt-p910bt",
    "name": "Brother P-touch PT-P910BT",
    "seoTitle": "Brother P-touch PT-P910BT",
    "seoDescription": "Brother P-touch PT-P910BT (CUBE Pro): biała drukarka etykiet z Bluetooth i USB-C, taśmy TZe do 36 mm, 360 dpi, obcinacz z nacinaniem, akumulator Li-ion.",
    "shortDescription": "Biała drukarka etykiet P-touch CUBE Pro z Bluetooth i USB-C, zasilana akumulatorem. Drukuje w 360 dpi na taśmach TZe od 3,5 do 36 mm i ma obcinacz z funkcją nacinania etykiet.",
    "description": "PT-P910BT to drukarka etykiet z serii P-touch CUBE Pro do pracy z komputerem, smartfonem lub tabletem. Jest przeznaczona do biur, sklepów, szkół, placówek medycznych, hoteli i firm logistycznych. Obsługuje taśmy TZe o szerokości od 3,5 do 36 mm.\n\nNa komputerze PC lub Mac etykiety projektuje się w programie P-touch Editor. Wersja dla Windows łączy projekt z danymi z arkusza Excel i drukuje serię etykiet. Na smartfonie i tablecie działają aplikacje P-touch Design&Print 2 z gotowymi szablonami oraz iPrint&Label z kodami kreskowymi i QR.\n\nGłowica 360 dpi drukuje z prędkością do 20 mm/s. Na taśmie 36 mm wysokość druku sięga 32 mm, a wydruk może mieć do 1 m długości. Obcinacz odcina całą etykietę albo nacina ją bez przecinania podkładu. Nacięte etykiety wychodzą jednym paskiem i zachowują kolejność.\n\nDrukarka zadrukowuje taśmy TZe standardowe, z mocnym klejem, matowe, fluorescencyjne, zabezpieczające i taśmy TZe Flexi ID do kabli. Obsługuje też taśmy do naprasowania na odzież oraz satynowe wstążki do personalizacji upominków.\n\nAkumulator litowo-jonowy PA-BT-003 ładuje się przez USB-C, także podczas drukowania z komputera. Pełne naładowanie wystarcza na wydruk około 5 kaset z taśmą. Model PT-E920BT ma te same wymiary i rozdzielczość, ale obudowę czarno-pomarańczową i obsługę kaset FLe.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-p910bt-1.png",
      "/images/products/brother/pt-p910bt-2.png",
      "/images/products/brother/pt-p910bt-3.png",
      "/images/products/brother-pt-p910bt-biuro.webp",
      "/images/products/brother-pt-p910bt-sklep.webp",
      "/images/products/brother-pt-p910bt-sloiki.webp"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-P910BT — drukarka etykiet, widok pod kątem, z wysuniętą etykietą",
      "Brother P-touch PT-P910BT — widok z przodu",
      "Brother P-touch PT-P910BT — widok pod kątem z drugiej strony",
      "Drukarka Brother PT-P910BT w biurze, sterowana ze smartfona",
      "Drukarka Brother PT-P910BT na ladzie sklepu, projekt etykiety w telefonie",
      "Drukarka Brother PT-P910BT, słoik z etykietą i projekt etykiety w smartfonie"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Seria",
        "value": "P-touch CUBE Pro"
      },
      {
        "name": "Kolor obudowy",
        "value": "biały"
      },
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Rozdzielczość druku",
        "value": "360 dpi (głowica 560 punktów)"
      },
      {
        "name": "Prędkość druku",
        "value": "do 20 mm/s"
      },
      {
        "name": "Maksymalna wysokość druku",
        "value": "32 mm (na taśmie 36 mm)"
      },
      {
        "name": "Szerokości taśm TZe",
        "value": "3,5, 6, 9, 12, 18, 24, 36 mm"
      },
      {
        "name": "Maksymalna długość wydruku",
        "value": "1 m"
      },
      {
        "name": "Obcinacz",
        "value": "pełne cięcie lub nacinanie samej etykiety bez przecinania podkładu"
      },
      {
        "name": "USB",
        "value": "USB-C (USB 2.0 Full Speed): drukowanie z PC/Mac i ładowanie akumulatora"
      },
      {
        "name": "Bluetooth",
        "value": "5.0; drukowanie z PC/Mac i urządzeń mobilnych"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (Windows, Mac; łączenie z Excelem tylko w wersji Windows), aplikacje P-touch Design&Print 2 i iPrint&Label (iOS, Android)"
      },
      {
        "name": "SDK",
        "value": "SDK dla Windows, iOS i Androida"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows 7 SP1, 8.1, 10 lub nowszy; macOS 10.13, 10.14, 10.15 lub nowszy; iOS 12 lub nowszy; Android 5.0 lub nowszy"
      },
      {
        "name": "Zasilanie",
        "value": "akumulator litowo-jonowy PA-BT-003, fabrycznie zainstalowany; ok. 5 kaset z taśmą na pełnym naładowaniu"
      },
      {
        "name": "Drukowanie podczas ładowania",
        "value": "tak, przez kabel USB z komputera"
      },
      {
        "name": "Wymiary bez opakowania (szer. × gł. × wys.)",
        "value": "138 × 94 × 138 mm"
      },
      {
        "name": "Masa",
        "value": "1,06 kg"
      },
      {
        "name": "Wymiary i masa z opakowaniem",
        "value": "213 × 128 × 242 mm; 1,64 kg"
      },
      {
        "name": "Temperatura pracy",
        "value": "od 10 do 35 °C, wilgotność od 20 do 80%"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka PT-P910BT (biała), taśma TZe 36 mm czarny na białym (4 m), akumulator PA-BT-003 (zainstalowany), kabel USB-A na USB-C, dokumentacja (skrócona instrukcja instalacji, instrukcja bezpieczeństwa)"
      },
      {
        "name": "Akcesoria opcjonalne",
        "value": "akumulator PA-BT-003"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTP910BTZ1",
        "name": "Brother P-touch PT-P910BT",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-p710bt",
      "brother-pt-e920bt"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-p910bt-karta-katalogowa.pdf",
        "size": "2,7 MB"
      }
    ],
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-p750w",
    "slug": "brother-pt-p750w",
    "name": "Brother P-touch PT-P750W",
    "seoTitle": "Brother P-touch PT-P750W",
    "seoDescription": "Brother P-touch PT-P750W: drukarka etykiet z Wi-Fi, NFC i USB, taśmy TZe 3,5–24 mm, 30 mm/s, automatyczny obcinak z półcięciem, P-touch Editor.",
    "shortDescription": "Drukarka etykiet na taśmy TZe do 24 mm z Wi-Fi, NFC i USB. Drukuje z komputera, smartfona i tabletu z prędkością do 30 mm/s. Automatyczny obcinak wykonuje cięcie pełne i półcięcie.",
    "description": "PT-P750W to biurkowa drukarka etykiet bez klawiatury do wspólnej pracy w biurze. Wbudowane Wi-Fi (IEEE 802.11b/g/n) udostępnia drukarkę wielu użytkownikom w sieci. Tryb Wireless Direct łączy drukarkę bezpośrednio ze smartfonem lub tabletem. Drukarka służy do oznaczania segregatorów, dokumentów w archiwum, nośników danych, półek, kabli i wyposażenia biura.\n\nEtykiety projektuje się w programie P-touch Editor na komputerze Windows lub Mac albo w aplikacji Brother iPrint&Label na urządzeniach z systemem iOS i Android. Smartfon z Androidem i NFC łączy się z drukarką po dotknięciu znacznika NFC. Przycisk Editor Lite uruchamia program P-touch Editor Lite przez kabel USB.\n\nDrukarka obsługuje taśmy TZe o szerokości 3,5, 6, 9, 12, 18 i 24 mm. Drukuje też na rurkach termokurczliwych HSe. Na rurce obszar druku jest mniejszy niż na taśmie. Wysokość wydruku sięga 18,1 mm. W aplikacji iPrint&Label długość etykiety ustawia się w zakresie 24–600 mm. Prędkość druku z zasilaczem sieciowym sięga 30 mm/s. Drukarka rozpoznaje szerokość i kolor włożonej taśmy.\n\nAutomatyczny obcinak wykonuje cięcie pełne albo półcięcie. Półcięcie ułatwia odklejanie etykiet i zmniejsza straty taśmy. P-touch Editor korzysta z czcionek TrueType zainstalowanych w komputerze, importuje obrazy i pobiera dane z plików Excel, CSV i TXT. Program ma kreator etykiet do kabli.\n\nDrukarka pracuje z zasilacza sieciowego AD-E001 z zestawu, na 6 bateriach AA albo z opcjonalnym akumulatorem litowo-jonowym BA-E001. Z akumulatorem drukarka pracuje jako urządzenie przenośne, na przykład przy oznaczaniu wyposażenia w budynku. W porównaniu z PT-P710BT model ma Wi-Fi, NFC i półcięcie.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-p750w-1.png",
      "/images/products/brother/pt-p750w-2.png",
      "/images/products/brother/pt-p750w-3.png"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-P750W — drukarka etykiet, widok pod kątem",
      "Brother P-touch PT-P750W — widok z przodu",
      "Brother P-touch PT-P750W — widok pod kątem z drugiej strony"
    ],
    "tags": [
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Prędkość druku",
        "value": "do 30 mm/s (z zasilaczem sieciowym)"
      },
      {
        "name": "Szerokości taśm TZe",
        "value": "3,5; 6; 9; 12; 18; 24 mm"
      },
      {
        "name": "Rurki termokurczliwe HSe",
        "value": "tak; obszar druku mniejszy niż na taśmie TZe"
      },
      {
        "name": "Maksymalna wysokość wydruku",
        "value": "18,1 mm"
      },
      {
        "name": "Długość etykiety",
        "value": "24–600 mm (ustawienie w aplikacji iPrint&Label)"
      },
      {
        "name": "Obcinak",
        "value": "automatyczny, cięcie pełne i półcięcie"
      },
      {
        "name": "Rozpoznawanie taśmy",
        "value": "szerokość i kolor"
      },
      {
        "name": "Klawiatura i wyświetlacz",
        "value": "brak — obsługa z komputera lub aplikacji mobilnej"
      },
      {
        "name": "Interfejsy",
        "value": "USB 2.0, Wi-Fi IEEE 802.11b/g/n, Wireless Direct, NFC"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (Windows, Mac), P-touch Editor Lite (przycisk w drukarce)"
      },
      {
        "name": "Aplikacja mobilna",
        "value": "Brother iPrint&Label (iOS, Android)"
      },
      {
        "name": "Ramki / kody kreskowe (P-touch Editor)",
        "value": "154 ramki / 21 symbolik 1D i 2D"
      },
      {
        "name": "Bazy danych (P-touch Editor)",
        "value": "Microsoft Excel, CSV, MDB, TXT"
      },
      {
        "name": "Zasilanie",
        "value": "zasilacz sieciowy AD-E001 (w zestawie), 6 × AA (LR6 lub Ni-MH HR6, brak w zestawie), opcjonalny akumulator Li-ion BA-E001"
      },
      {
        "name": "Kolor obudowy",
        "value": "czarny"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "78 × 152 × 143 mm"
      },
      {
        "name": "Masa",
        "value": "ok. 0,82 kg (bez baterii i kasety)"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, taśma TZe 24 mm × 4 m (czarny nadruk na białym tle), zasilacz sieciowy AD-E001, kabel USB, skrócona instrukcja"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTP750WZG1",
        "name": "Brother P-touch PT-P750W",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-p710bt",
      "brother-pt-p900wc"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (EN)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-p750w-karta-katalogowa.pdf",
        "size": "4,5 MB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/ptp750w",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-p900wc",
    "slug": "brother-pt-p900wc",
    "name": "Brother P-touch PT-P900Wc",
    "seoTitle": "Brother P-touch PT-P900Wc",
    "seoDescription": "Brother P-touch PT-P900Wc: drukarka etykiet na taśmy TZe 3,5–36 mm, rurki HSe i etykiety FLe, 360 dpi, 60 mm/s, Wi-Fi, USB, obcinak z półcięciem.",
    "shortDescription": "Drukarka etykiet na taśmy TZe do 36 mm, rurki termokurczliwe HSe i etykiety FLe. Drukuje z rozdzielczością 360 dpi i prędkością do 60 mm/s. Ma Wi-Fi, Wi-Fi Direct, USB i obcinak z półcięciem.",
    "description": "PT-P900Wc to biurkowa drukarka etykiet bez klawiatury do pracy z komputerem, tabletem i smartfonem. Służy do zarządzania obiektami, archiwizacji dokumentów i znakowania środków trwałych. Drukuje też etykiety na kable, płyty czołowe i rozdzielnice elektryczne.\n\nDrukarka obsługuje taśmy TZe i HGe o szerokości od 3,5 do 36 mm. Drukuje też na rurkach termokurczliwych HSe o szerokości 5,2, 9, 11,2, 21 i 31 mm oraz na etykietach FLe 21 × 45 mm. Wysokość wydruku sięga 32 mm, a etykieta mieści do 17 wierszy.\n\nDruk ma rozdzielczość 360 dpi i prędkość do 60 mm/s. Długość etykiety wynosi od 4 do 1000 mm. Automatyczny obcinak odcina etykietę w całości albo przecina samą etykietę bez podkładu. Kopie i numerowanie obejmują zakres od 1 do 999.\n\nWi-Fi w trybie infrastruktury (IEEE 802.11b/g/n, WPS 2.0) udostępnia drukarkę wielu urządzeniom. Wi-Fi Direct (IEEE 802.11n) łączy drukarkę bezpośrednio z innym urządzeniem. Port USB obsługuje komputery Windows i Mac. Opcjonalna przejściówka PA-SCA-001 dodaje port szeregowy RS-232C do druku poleceniami ESC/P. Z opcjonalną bazą zasilającą PA-BB-002 i akumulatorem PA-BT-4000LI drukarka pracuje jako urządzenie mobilne.\n\nEtykiety projektuje się w programie P-touch Editor oraz w aplikacjach Brother iPrint&Label i Pro Label Tool. Program pobiera dane z arkusza kalkulacyjnego i drukuje serie etykiet. Drukarka przyjmuje polecenia ESC/P, P-touch Template i Raster, a pamięć flash 6 MB mieści 99 szablonów. W porównaniu z PT-P750W model obsługuje taśmy 36 mm i etykiety FLe oraz drukuje dwa razy szybciej.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-p900wc-1.png",
      "/images/products/brother/pt-p900wc-2.png",
      "/images/products/brother/pt-p900wc-3.png"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-P900Wc — drukarka etykiet, widok pod kątem",
      "Brother P-touch PT-P900Wc — widok z przodu",
      "Brother P-touch PT-P900Wc — widok pod kątem z drugiej strony"
    ],
    "tags": [
      "magazyn",
      "produkcja"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Rozdzielczość druku",
        "value": "360 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "do 60 mm/s"
      },
      {
        "name": "Szerokości taśm TZe",
        "value": "3,5; 6; 9; 12; 18; 24; 36 mm"
      },
      {
        "name": "Taśmy HGe",
        "value": "3,5; 6; 9; 12; 18; 24; 36 mm"
      },
      {
        "name": "Rurki termokurczliwe HSe",
        "value": "5,2; 9; 11,2; 21; 31 mm"
      },
      {
        "name": "Etykiety FLe",
        "value": "21 × 45 mm"
      },
      {
        "name": "Maksymalna wysokość wydruku",
        "value": "32 mm"
      },
      {
        "name": "Liczba wierszy",
        "value": "do 17"
      },
      {
        "name": "Długość etykiety",
        "value": "4–1000 mm"
      },
      {
        "name": "Obcinak",
        "value": "automatyczny, cięcie pełne i półcięcie"
      },
      {
        "name": "Kopie i numerowanie",
        "value": "1–999"
      },
      {
        "name": "Druk pionowy / lustrzany",
        "value": "tak / tak"
      },
      {
        "name": "Klawiatura i wyświetlacz",
        "value": "brak — obsługa z komputera lub aplikacji mobilnej"
      },
      {
        "name": "Interfejsy",
        "value": "USB, Wi-Fi IEEE 802.11b/g/n (WPS 2.0), Wi-Fi Direct IEEE 802.11n, RS-232C (opcjonalna przejściówka PA-SCA-001)"
      },
      {
        "name": "Polecenia drukarki",
        "value": "ESC/P, P-touch Template, Raster"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (Windows, Mac)"
      },
      {
        "name": "Aplikacje mobilne",
        "value": "Brother iPrint&Label, Brother Pro Label Tool (iOS, Android)"
      },
      {
        "name": "SDK",
        "value": "SDK dla Windows, iOS i Androida"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows 8.1/10/11, Windows Server 2008–2012 R2, macOS 10.12–13"
      },
      {
        "name": "Kody kreskowe",
        "value": "CODE39, ITF, EAN-13, EAN-8, UPC-A, UPC-E, CODABAR, CODE128, GS1-128, QR, PDF417, Data Matrix, MaxiCode, GS1 DataBar (RSS), POSTNET, Aztec"
      },
      {
        "name": "Pamięć szablonów",
        "value": "flash 6 MB, 99 szablonów"
      },
      {
        "name": "Zasilanie",
        "value": "zasilacz sieciowy z przewodem (w zestawie); opcjonalnie akumulator Li-ion PA-BT-4000LI z bazą PA-BB-002"
      },
      {
        "name": "Kolor obudowy",
        "value": "czarny"
      },
      {
        "name": "Wymiary (szer. × gł. × wys.)",
        "value": "118 × 192 × 146 mm"
      },
      {
        "name": "Masa",
        "value": "1,48 kg"
      },
      {
        "name": "Języki",
        "value": "20, w tym polski"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, taśma TZe 36 mm × 8 m (czarny nadruk na białym tle), zasilacz sieciowy, przewód zasilający, kabel USB, dokumentacja"
      },
      {
        "name": "Akcesoria opcjonalne",
        "value": "akumulator Li-ion PA-BT-4000LI, baza zasilająca PA-BB-002, przejściówka szeregowa PA-SCA-001, zasilacz sieciowy AD9100ESA"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTP900WCZG1",
        "name": "Brother P-touch PT-P900Wc",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-p950nw",
      "brother-pt-p750w"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-p900wc-karta-katalogowa.pdf",
        "size": "413 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/ptp900wc",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  },
  {
    "id": "brother-pt-p950nw",
    "slug": "brother-pt-p950nw",
    "name": "Brother P-touch PT-P950NW",
    "seoTitle": "Brother P-touch PT-P950NW",
    "seoDescription": "Brother P-touch PT-P950NW: biurkowa drukarka etykiet z LAN i Wi-Fi, 360 dpi, do 60 mm/s, taśmy TZe do 36 mm, rurki HSe i etykiety FLe.",
    "shortDescription": "Biurkowa drukarka etykiet z siecią LAN, Wi-Fi i USB. Drukuje w 360 dpi z prędkością do 60 mm/s na taśmach TZe do 36 mm, rurkach termokurczliwych HSe i etykietach FLe.",
    "description": "PT-P950NW to biurkowa drukarka etykiet do pracy z komputerem i siecią firmową. Drukarka służy do opisywania wyposażenia obiektów, archiwizacji dokumentów i oznaczania środków trwałych. Port LAN 10/100 Base-TX udostępnia drukarkę wielu użytkownikom. Wi-Fi działa w trybie infrastruktury, Wi-Fi Direct i z WPS 2.0.\n\nDrukarka pracuje w rozdzielczości 360 dpi z prędkością do 60 mm/s, czyli dwa razy szybciej niż PT-E560BTVP z zasilaczem. Obsługuje taśmy TZe o szerokości od 3,5 do 36 mm, z wysokością druku do 32 mm. Etykieta ma od 4 do 1000 mm długości i do 17 wierszy tekstu. Automatyczny obcinacz odcina całą etykietę albo nacina ją bez przecinania podkładu.\n\nOprócz taśm TZe drukarka obsługuje rurki termokurczliwe HSe w rozmiarach 5,8, 8,8, 11,7, 17,7 i 23,6 mm. Kasety FLe zawierają wycinane etykiety 21 × 45 mm do flag kablowych, w kolorze białym, żółtym lub zielonym.\n\nProgram P-touch Editor łączy projekt z danymi z plików Excel, CSV i TXT, baz Access oraz serwerów MSDE/SQL i drukuje serie etykiet. Na komputerze Mac źródłem danych jest plik CSV. Aplikacje iPrint&Label i Cable Label Tool działają na iOS i Androidzie. Tryb P-touch Template i pakiet b-PAC SDK pozwalają drukować etykiety z własnych systemów.\n\nW zestawie jest zasilacz sieciowy, kabel USB i taśma TZe 36 mm, czarny druk na białym tle, 8 m. Opcjonalna baza PA-BB-002 z akumulatorem PA-BT4000LI pozwala drukować bez gniazdka. Moduł PA-BI-002 dodaje Bluetooth dla skanerów kodów kreskowych. Panel dotykowy PA-TDU-003 drukuje zapisane szablony bez komputera. Wbudowany zegar panelu dodaje do etykiet bieżącą lub przyszłą datę i godzinę.",
    "categoryId": "drukarki-etykiet",
    "subcategoryIds": [
      "etykieciarki"
    ],
    "manufacturerId": "brother",
    "availability": "unavailable",
    "images": [
      "/images/products/brother/pt-p950nw-1.png",
      "/images/products/brother/pt-p950nw-2.png",
      "/images/products/brother/pt-p950nw-3.png"
    ],
    "imageDescriptions": [
      "Brother P-touch PT-P950NW — drukarka etykiet, widok pod kątem",
      "Brother P-touch PT-P950NW — widok z przodu",
      "Brother P-touch PT-P950NW — widok pod kątem z drugiej strony"
    ],
    "tags": [
      "magazyn",
      "produkcja"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Typ urządzenia",
        "value": "biurkowa drukarka etykiet z interfejsem sieci przewodowej i bezprzewodowej"
      },
      {
        "name": "Technologia druku",
        "value": "termotransfer"
      },
      {
        "name": "Rozdzielczość druku",
        "value": "360 dpi"
      },
      {
        "name": "Prędkość druku",
        "value": "do 60 mm/s"
      },
      {
        "name": "Maksymalna szerokość taśmy",
        "value": "36 mm"
      },
      {
        "name": "Maksymalna wysokość druku",
        "value": "32 mm"
      },
      {
        "name": "Obcinacz",
        "value": "automatyczny: pełne cięcie lub nacinanie etykiety bez warstwy podkładowej"
      },
      {
        "name": "Długość etykiety",
        "value": "od 4 do 1000 mm"
      },
      {
        "name": "Liczba wierszy na etykiecie",
        "value": "do 17"
      },
      {
        "name": "Druk pionowy / lustrzany",
        "value": "tak / tak"
      },
      {
        "name": "Kopie",
        "value": "od 1 do 999 (P-touch Template), od 1 do 5000 (P-touch Editor)"
      },
      {
        "name": "Numeracja",
        "value": "od 1 do 999 (P-touch Template), od 1 do 5000 (P-touch Editor)"
      },
      {
        "name": "Emulacje",
        "value": "P-touch Raster, ESC/P, P-touch Template"
      },
      {
        "name": "Kody kreskowe",
        "value": "CODE39, ITF (I-2/5), EAN-13, EAN-8, UPC-A, UPC-E, CODABAR, CODE128, GS1-128, kod QR, PDF417, Data Matrix, MaxiCode, RSS-14, RSS Limited, RSS Expanded, POSTNET, Aztec"
      },
      {
        "name": "USB",
        "value": "Windows: USB 1.1/2.0/3.0; Mac: USB 1.0/2.0"
      },
      {
        "name": "Sieć przewodowa",
        "value": "10 Base-T/100 Base-TX"
      },
      {
        "name": "Wi-Fi",
        "value": "Wi-Fi Direct IEEE 802.11n; tryb ad hoc IEEE 802.11b; tryb infrastruktury IEEE 802.11b/g/n; WPS 2.0"
      },
      {
        "name": "Interfejs szeregowy",
        "value": "RS-232C, opcja (tylko polecenia ESC/P, wymagana przejściówka PA-SCA-001)"
      },
      {
        "name": "Bluetooth",
        "value": "opcja: moduł PA-BI-002, Bluetooth 2.1+EDR, profile SPP, OPP"
      },
      {
        "name": "Systemy operacyjne",
        "value": "Windows, Mac, iOS, Android"
      },
      {
        "name": "Oprogramowanie",
        "value": "P-touch Editor (PC/Mac), aplikacje iPrint&Label i Cable Label Tool (iOS/Android), b-PAC SDK dla Windows"
      },
      {
        "name": "Bazy danych (P-touch Editor)",
        "value": "Windows: Excel, CSV, TXT, Access, MSDE/SQL; Mac: CSV"
      },
      {
        "name": "Pamięć szablonów",
        "value": "6 MB flash, 99 lokalizacji"
      },
      {
        "name": "Szerokości taśm TZe i HGe",
        "value": "3,5, 6, 9, 12, 18, 24, 36 mm"
      },
      {
        "name": "Rurki termokurczliwe HSe",
        "value": "5,8, 8,8, 11,7, 17,7, 23,6 mm"
      },
      {
        "name": "Etykiety FLe",
        "value": "21 × 45 mm (szerokość × długość); białe, żółte, zielone"
      },
      {
        "name": "Wymiary bez opakowania (szer. × gł. × wys.)",
        "value": "118 × 192 × 146 mm"
      },
      {
        "name": "Masa",
        "value": "1,51 kg"
      },
      {
        "name": "Wymiary i masa z opakowaniem",
        "value": "165 × 266 × 333 mm; 2,77 kg"
      },
      {
        "name": "Języki",
        "value": "20, w tym polski"
      },
      {
        "name": "Zawartość opakowania",
        "value": "drukarka, kaseta z taśmą TZe 36 mm czarny na białym (8 m), zasilacz sieciowy, kabel USB, dokumentacja"
      },
      {
        "name": "Akcesoria opcjonalne",
        "value": "akumulator Li-ion PA-BT-4000LI, baza akumulatora PA-BB-002, moduł Bluetooth PA-BI-002, panel dotykowy z wyświetlaczem PA-TDU-003, przejściówka szeregowa PA-SCA-001, zasilacz sieciowy AD9100ESA"
      }
    ],
    "applications": [],
    "variants": [
      {
        "partNumber": "PTP950NWZG1",
        "name": "Brother P-touch PT-P950NW",
        "attributes": {},
        "availability": "unavailable"
      }
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "brother-pt-p900wc",
      "brother-pt-e920bt"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa (PL)",
        "type": "datasheet",
        "url": "/downloads/brother-pt-p950nw-karta-katalogowa.pdf",
        "size": "756 KB"
      }
    ],
    "sameAs": "https://store.brother.pl/devices/label-printer/p-touch/pt/ptp950nw",
    "createdAt": "2026-11-07",
    "updatedAt": "2026-11-07"
  }
]
