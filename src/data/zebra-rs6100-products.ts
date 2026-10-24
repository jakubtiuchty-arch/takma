import type { Product } from './products'

// Skaner noszony Zebra RS6100 (24.10.2026), 8 konfiguracji jako warianty. Ceny i stany aktualizuje /api/stock; priceFrom to wartość startowa.
// Bateria w zestawie ładuje się w skanerze, dlatego karta ma blok „Wymagane dla skanera: ładowanie (jedno z)”.
// Mocowania, spusty i paski są w zebra-rs6100-mounts.ts. Źródła i decyzje: docs/catalog/zebra-rs6100-2026-10-24/audit.md.
export const zebraRs6100Products: Product[] = [
  {
    "id": "zebra-rs6100",
    "slug": "zebra-rs6100",
    "name": "Zebra RS6100",
    "seoH1": "Zebra RS6100",
    "seoTitle": "Zebra RS6100 — skaner noszony 1D/2D, zasięg do 12,2 m, wymienna bateria",
    "seoDescription": "Skaner noszony Zebra RS6100: imager SE55 od 5,08 cm do 12,2 m, wymienna bateria, IP65, wersja do mroźni. Skaner pierścieniowy Zebra RS6100, skaner na palec Zebra, RS6100 Zebra. PN: RS61B0-KBSSZWR, RS61B0-KESSXWR, RS61B0-KBDSZWR, RS61B0-KEDSXWR, RS61B0-KBBHZWR, RS61B0-KBENZWR, RS61B0-KEENXWR, RS61B0-KFSSYWR.",
    "shortDescription": "Zebra RS6100 — skaner kodów 1D/2D noszony na palcu lub dłoni: imager SE55 od 5,08 cm do 12,2 m, wymienna bateria, obudowa IP65 i konfiguracja do pracy w mroźni.",
    "description": "Zebra RS6100 to skaner kodów kreskowych 1D i 2D noszony na palcu albo na dłoni. Imager SE55 z technologią IntelliFocus czyta kody z odległości od 5,08 cm do 12,2 m. Tym samym skanerem pracownik odczytuje etykietę towaru trzymanego w ręce i etykietę na najwyższym poziomie regału. Zasięg zależy od rodzaju i wielkości kodu, jakości druku, kontrastu oraz oświetlenia.\n\nZamiast odstawiać skaner do ładowania, pracownik wkłada naładowaną baterię i pracuje dalej. Do wyboru są baterie PowerPrecision+: standardowa 480 mAh na pełną zmianę i rozszerzona 735 mAh na dłuższe zmiany. Bateria 660 mAh z niebieską etykietą umożliwia pracę w mroźni do −30 °C. Bez baterii skaner pracuje z adapterem przewodowym, który pobiera zasilanie z komputera noszonego WT6000 lub WT6300.\n\nSkaner nosi się na pięć sposobów: z pojedynczym lub podwójnym spustem na palcu wskazującym, w mocowaniu Enterprise Hand Mount, w mocowaniu na grzbiet dłoni albo na smyczy. Spust jest osobnym zespołem i tylko on dotyka skóry, więc każdy pracownik może mieć własny.\n\nObudowa ma szczelność IP65. Wytrzymuje wielokrotne upadki na betonową posadzkę z wysokości 1,8 m przy każdej temperaturze z zakresu pracy. Cztery programowalne diody RGB z tyłu skanera potwierdzają odczyt i mogą prowadzić pracownika do kolejnej pozycji na liście kompletacji.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane dla skanera: ładowanie (jedno z) — sprzedawane osobno**\n\n- [Stacja ładująca Zebra RS5100 / RS6100 2-gniazdowa (CRD-RS5X6-2SCHG-01)](/produkt/zebra-rs6100-crd-rs5x6-2schg-01)\n- [Zestaw stacji 2-gniazdowej Zebra RS5100 / RS6100 z zasilaczem (KT-RS5X6-2SCPWR-01)](/produkt/zebra-rs6100-kt-rs5x6-2scpwr-01)\n- [Stacja ładująca Zebra RS6100 4-gniazdowa (CRD-RS61-4SCHG-01)](/produkt/zebra-rs6100-crd-rs61-4schg-01)\n- [Stacja ładująca Zebra RS6100 20-gniazdowa (CRD-RS61-20SCHG-01)](/produkt/zebra-rs6100-crd-rs61-20schg-01)\n\nBateria jest w zestawie ze skanerem i ładuje się w skanerze włożonym do jednej z tych stacji. Dokup tylko te elementy, których jeszcze nie masz.\n\n## Dobór i montaż\n\n- Wersje RS61B0-KBENZWR i RS61B0-KEENXWR mają mocowanie Enterprise Hand Mount, czyli ramę ze spustem. Owijkę na dłoń zamawia się osobno, w rozmiarze i na rękę pracownika:\n\n- [Owijka na dłoń Zebra, prawa ręka, rozmiar S (SG-WEAR-HNWPRS-02)](/produkt/zebra-rs6100-sg-wear-hnwprs-02)\n- [Owijka na dłoń Zebra, prawa ręka, rozmiar M (SG-WEAR-HNWPRM-02)](/produkt/zebra-rs6100-sg-wear-hnwprm-02)\n- [Owijka na dłoń Zebra, prawa ręka, rozmiar L (SG-WEAR-HNWPRL-02)](/produkt/zebra-rs6100-sg-wear-hnwprl-02)\n- [Owijka na dłoń Zebra, lewa ręka, rozmiar S (SG-WEAR-HNWPLS-02)](/produkt/zebra-rs6100-sg-wear-hnwpls-02)\n- [Owijka na dłoń Zebra, lewa ręka, rozmiar M (SG-WEAR-HNWPLM-02)](/produkt/zebra-rs6100-sg-wear-hnwplm-02)\n- [Owijka na dłoń Zebra, lewa ręka, rozmiar L (SG-WEAR-HNWPLL-02)](/produkt/zebra-rs6100-sg-wear-hnwpll-02)\n\n- Zapasowe baterie ładuje [ładowarka 8 baterii](/produkt/zebra-rs6100-sac-rs51-8schg-01) albo [ładowarka 40 baterii](/produkt/zebra-rs6100-sac-rs51-40schg-01).",
    "categoryId": "skanery-kodow-kreskowych",
    "subcategoryIds": [
      "skanery-pierscieniowe"
    ],
    "manufacturerId": "zebra",
    "sameAs": "https://www.zebra.com/pl/pl/products/mobile-computers/wearable-computers/rs6100.html",
    "priceFrom": 3661.99,
    "availability": "available",
    "images": [
      "/images/products/RS61B0-KBSSZWR.png",
      "/images/products/RS61B0-KBSSZWR-2.png",
      "/images/products/RS61B0-KBSSZWR-3.png",
      "/images/products/RS61B0-KBSSZWR-4.png",
      "/images/products/RS61B0-KBSSZWR-5.png",
      "/images/products/RS61B0-KBSSZWR-6.png",
      "/images/products/RS61B0-KBSSZWR-7.png"
    ],
    "imageDescriptions": [
      "Zebra RS6100 z pojedynczym spustem i paskiem na palec — widok z przodu, okno imagera SE55",
      "Zebra RS6100 z pojedynczym spustem — widok z drugiej strony, żółty przycisk spustu",
      "Zebra RS6100 z podwójnym spustem — przyciski spustu po obu stronach",
      "Zebra RS6100 w mocowaniu na grzbiet dłoni, spust na palcu wskazującym (mocowanie w zestawie wersji RS61B0-KBBHZWR)",
      "Zebra RS6100 w mocowaniu Enterprise Hand Mount na dłoni w rękawicy, spust na palcu wskazującym (owijka na dłoń sprzedawana osobno)",
      "Zebra RS6100 ze spustem smyczy (spust smyczy sprzedawany osobno)",
      "Zebra RS6100 z pojedynczym spustem — widok z tyłu, diody RGB"
    ],
    "tags": [
      "magazyn",
      "logistyka",
      "retail",
      "produkcja"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Typ skanera",
        "value": "Imager 1D/2D SE55 Advanced Range z technologią IntelliFocus; oprogramowanie PRZM Intelligent Imaging"
      },
      {
        "name": "Rozdzielczość optyczna",
        "value": "2688 × 1520 pikseli"
      },
      {
        "name": "Celownik i oświetlenie",
        "value": "Celownik laserowy 515 nm; oświetlenie: 1 dioda LED o ciepłej białej barwie"
      },
      {
        "name": "Pole widzenia",
        "value": "37° w poziomie, 21,4° w pionie"
      },
      {
        "name": "Tolerancja ustawienia kodu",
        "value": "Obrót 360°, odchylenie w pionie ±60°, odchylenie w poziomie ±60°"
      },
      {
        "name": "Zasięg odczytu",
        "value": "Code 39 3 mil: 6,9–41,1 cm; Code 39 5 mil: 6,4–67,6 cm; PDF417 5 mil: 7,1–49,8 cm; PDF417 6,7 mil: 6,6–65,0 cm; Data Matrix 10 mil: 5,6–68,8 cm; UPC 100% (13 mil): 6,4–180 cm; Code 128 15 mil: 18,2–182,9 cm; Code 39 20 mil: do 276,9 cm; Code 39 55 mil: do 744,2 cm; Code 39 100 mil: do 1407,2 cm; Data Matrix 100 mil: do 685,8 cm. Wartości typowe, zależne od rozdzielczości druku, kontrastu i oświetlenia. Dla Code 128 15 mil, Code 39 20/55/100 mil i Data Matrix 100 mil najmniejszą odległość ogranicza pole widzenia"
      },
      {
        "name": "Kody 1D",
        "value": "Code 39, Code 128, Code 93, Codabar/NW7, Code 11, MSI, UPC/EAN, Interleaved 2 of 5, Korean 3 of 5, GS1 DataBar, Base 32 (Italian Pharmacode)"
      },
      {
        "name": "Kody 2D",
        "value": "PDF417, MicroPDF417, kody złożone, TLC-39, Aztec, Data Matrix, MaxiCode, QR Code, Micro QR, Han Xin, kody pocztowe"
      },
      {
        "name": "OCR",
        "value": "OCR-A, OCR-B"
      },
      {
        "name": "Odporność na światło otoczenia",
        "value": "Do 107 639 lx (bezpośrednie światło słoneczne)"
      },
      {
        "name": "Łączność",
        "value": "Bluetooth 5.2, klasa 1 i 2, z Bluetooth Low Energy; profile SPP, HID, SDAP"
      },
      {
        "name": "Parowanie",
        "value": "NFC (Tap-to-Pair) z urządzeniami Zebra z NFC; Bluetooth Pairing Utility na komputerach mobilnych Zebra; kod parowania adaptera Bluetooth BT-RS5X6-DNGL-01"
      },
      {
        "name": "Połączenie z systemem",
        "value": "Komputery mobilne Zebra z Bluetooth (ręczne, tablety, noszone, pokładowe); smartfony, tablety i komputery PC z Bluetooth; adapter Bluetooth na USB do 7 skanerów"
      },
      {
        "name": "Sposób noszenia",
        "value": "Pojedynczy spust na palec, podwójny spust na palec, mocowanie Enterprise Hand Mount, mocowanie na grzbiet dłoni, smycz; mocowania spoza konfiguracji sprzedawane osobno"
      },
      {
        "name": "Spust",
        "value": "Oburęczny, wymienny zespół spustu; pojedynczy spust obraca się na lewą lub prawą rękę, podwójny pozwala zmienić rękę bez zdejmowania; tryb skanowania ciągłego"
      },
      {
        "name": "Bateria",
        "value": "Wymienna Li-Ion PowerPrecision+: standardowa 480 mAh, rozszerzona 735 mAh lub do mroźni 660 mAh (zależnie od wersji)"
      },
      {
        "name": "Zasilanie przewodowe",
        "value": "Adaptery przewodowe do komputerów Zebra WT6000, WT6300, TC21/TC26 i TC53/TC58"
      },
      {
        "name": "Ładowanie",
        "value": "Skaner z baterią: stacja 2-, 4- lub 20-gniazdowa; zapasowe baterie: ładowarka 8- lub 40-gniazdowa; bateria standardowa 0–90% w mniej niż 2,5 h w temperaturze pokojowej; ładowanie w temperaturze 5–40 °C"
      },
      {
        "name": "Sygnalizacja",
        "value": "4 programowalne diody RGB z tyłu obudowy, dioda systemowa; brzęczyk do 85 dBA w odległości 10 cm"
      },
      {
        "name": "Przycisk Restore",
        "value": "Ponowne uruchomienie bez wyłączania zasilania i ponowne połączenie Bluetooth po przekroczeniu czasu rozłączenia"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP65 (IEC 60529)"
      },
      {
        "name": "Odporność na upadki",
        "value": "Wielokrotne upadki z 1,8 m na beton w zakresie temperatur pracy"
      },
      {
        "name": "Odporność na przewroty",
        "value": "1000 przewrotów z 0,5 m"
      },
      {
        "name": "Drgania",
        "value": "Sinusoidalne 5–2000 Hz, 4 g, 1 h na oś; losowe 20–2000 Hz, 6 g RMS lub 0,04 g²/Hz, 1 h na oś"
      },
      {
        "name": "ESD",
        "value": "±15 kV w powietrzu, ±8 kV kontaktowo"
      },
      {
        "name": "Temperatura pracy",
        "value": "Bateria standardowa 480 mAh: 0 °C do 50 °C; bateria rozszerzona 735 mAh: −20 °C do 50 °C; bateria do mroźni 660 mAh: −30 °C do 50 °C; z adapterem przewodowym do WT6000 / WT6300 praca w mroźni (−20 °C i −30 °C)"
      },
      {
        "name": "Temperatura przechowywania",
        "value": "−40 °C do 60 °C z baterią; −40 °C do 70 °C bez baterii"
      },
      {
        "name": "Wilgotność",
        "value": "5–95% bez kondensacji"
      },
      {
        "name": "Wymiary",
        "value": "66,6 × 32,7 × 21 mm (dł. × szer. × gł.)"
      },
      {
        "name": "Masa",
        "value": "70 g z baterią standardową; 76 g z baterią rozszerzoną"
      },
      {
        "name": "Oprogramowanie",
        "value": "123Scan, Scanner SDK (Android, iOS), DataWedge na komputerach mobilnych Zebra, Wi-Fi Friendly Mode, PowerPrecision Console"
      },
      {
        "name": "Zgodność z normami",
        "value": "RoHS 2011/65/UE z poprawką 2015/863, REACH SVHC"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Skaner, bateria, spust lub mocowanie według konfiguracji, Regulatory Guide, opcjonalna śruba mocowania spustu; stację ładującą zamawia się osobno, a w wersjach Enterprise Hand Mount także owijkę na dłoń"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy; usługi Zebra OneCare Essential i Select na zapytanie"
      }
    ],
    "applications": [
      "Przyjęcie towaru, kompletacja, rozlokowanie, sortowanie i załadunek w magazynie",
      "Zarządzanie zapasami, uzupełnianie, śledzenie części, montaż i kontrola wyrobów gotowych w produkcji",
      "Zarządzanie magazynem w transporcie i logistyce",
      "Magazyn na zapleczu sklepu, przyjęcie towaru i zarządzanie zapasami w handlu",
      "Praca w chłodniach i mroźniach, na placu załadunkowym i w kabinie wózka widłowego"
    ],
    "variants": [
      {
        "partNumber": "RS61B0-KBSSZWR",
        "name": "RS61B0-KBSSZWR, SE55, pojedynczy spust, bateria standardowa 480 mAh",
        "attributes": {
          "Mocowanie": "Pojedynczy spust",
          "Bateria": "Standardowa 480 mAh"
        },
        "priceFrom": 3661.99,
        "availability": "available"
      },
      {
        "partNumber": "RS61B0-KESSXWR",
        "name": "RS61B0-KESSXWR, SE55, pojedynczy spust, bateria rozszerzona 735 mAh",
        "attributes": {
          "Mocowanie": "Pojedynczy spust",
          "Bateria": "Rozszerzona 735 mAh"
        },
        "priceFrom": 3738.86,
        "availability": "available"
      },
      {
        "partNumber": "RS61B0-KBDSZWR",
        "name": "RS61B0-KBDSZWR, SE55, podwójny spust, bateria standardowa 480 mAh",
        "attributes": {
          "Mocowanie": "Podwójny spust",
          "Bateria": "Standardowa 480 mAh"
        },
        "priceFrom": 3661.99,
        "availability": "available"
      },
      {
        "partNumber": "RS61B0-KEDSXWR",
        "name": "RS61B0-KEDSXWR, SE55, podwójny spust, bateria rozszerzona 735 mAh",
        "attributes": {
          "Mocowanie": "Podwójny spust",
          "Bateria": "Rozszerzona 735 mAh"
        },
        "priceFrom": 3738.86,
        "availability": "unavailable"
      },
      {
        "partNumber": "RS61B0-KBBHZWR",
        "name": "RS61B0-KBBHZWR, SE55, mocowanie na grzbiet dłoni, bateria standardowa 480 mAh",
        "attributes": {
          "Mocowanie": "Mocowanie na grzbiet dłoni",
          "Bateria": "Standardowa 480 mAh"
        },
        "priceFrom": 3815.86,
        "availability": "available"
      },
      {
        "partNumber": "RS61B0-KBENZWR",
        "name": "RS61B0-KBENZWR, SE55, Enterprise Hand Mount, bateria standardowa 480 mAh",
        "attributes": {
          "Mocowanie": "Enterprise Hand Mount",
          "Bateria": "Standardowa 480 mAh"
        },
        "priceFrom": 3815.86,
        "availability": "available"
      },
      {
        "partNumber": "RS61B0-KEENXWR",
        "name": "RS61B0-KEENXWR, SE55, Enterprise Hand Mount, bateria rozszerzona 735 mAh",
        "attributes": {
          "Mocowanie": "Enterprise Hand Mount",
          "Bateria": "Rozszerzona 735 mAh"
        },
        "priceFrom": 3892.77,
        "availability": "on-order"
      },
      {
        "partNumber": "RS61B0-KFSSYWR",
        "name": "RS61B0-KFSSYWR, SE55, bateria do mroźni 660 mAh",
        "attributes": {
          "Bateria": "Do mroźni 660 mAh"
        },
        "priceFrom": 3738.86,
        "availability": "unavailable"
      }
    ],
    "variantAttributeTooltips": {
      "Mocowanie": "Spust lub mocowanie, z którym RS6100 jest dostarczany. Inne mocowania można dokupić i zmieniać.\n\n• Pojedynczy spust — na palcu wskazującym, obracany na lewą lub prawą rękę; można go używać w cienkich rękawicach.\n\n• Podwójny spust — przyciski po obu stronach, zmiana ręki bez zdejmowania; nie jest zalecany do pracy w rękawicach.\n\n• Mocowanie na grzbiet dłoni — jeden rozmiar na obie ręce, spust na palcu; mieści dłoń w rękawicy.\n\n• Enterprise Hand Mount — rama ze spustem; owijkę na dłoń (S, M, L, prawa lub lewa) zamawia się osobno.",
      "Bateria": "Wymienna bateria dołączona do skanera. Od niej zależy zakres temperatur pracy.\n\n• Standardowa 480 mAh — na pełną zmianę, praca od 0 do 50 °C.\n\n• Rozszerzona 735 mAh — na dłuższe zmiany, praca od −20 do 50 °C.\n\n• Do mroźni 660 mAh — niebieska etykieta, praca od −30 do 50 °C."
    },
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-rs6100-crd-rs5x6-2schg-01",
      "zebra-rs6100-kt-rs5x6-2scpwr-01",
      "zebra-rs6100-crd-rs61-4schg-01",
      "zebra-rs6100-crd-rs61-20schg-01",
      "zebra-rs6100-btry-rs51-4ma-01",
      "zebra-rs6100-btry-rs51-7ma-01",
      "zebra-rs6100-btry-rs5x6-6ma-01",
      "zebra-rs6100-sac-rs51-8schg-01",
      "zebra-rs6100-sac-rs51-40schg-01",
      "zebra-rs2100-bt-rs5x6-dngl-01",
      "zebra-rs6100-cbl-rs5x6-adpwt-01",
      "zebra-rs6100-sg-rs51-trgss-03",
      "zebra-rs6100-sg-rs51-trgds-01",
      "zebra-rs6100-sg-rs5x6-bhmt-01",
      "zebra-rs6100-sg-rs5x6-hnmt-02",
      "zebra-rs6100-sg-rs5x6-hmtra-01",
      "zebra-rs6100-sg-rs5x6-lnyd-01"
    ],
    "relatedProducts": [
      "zebra-rs2100",
      "proglove-mark-3",
      "m3-wr15",
      "proglove-mark-2"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa Zebra RS6100 (PL)",
        "type": "datasheet",
        "url": "/downloads/zebra-rs6100-karta-katalogowa-pl.pdf",
        "size": "256 KB"
      },
      {
        "name": "Instrukcja szybkiego startu Zebra RS6100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs6100-instrukcja-szybkiego-startu-en.pdf",
        "size": "1,2 MB"
      },
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS6100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs6100-przewodnik-en.pdf",
        "size": "17,9 MB"
      }
    ],
    "faq": [
      {
        "question": "Z jakimi urządzeniami łączy się Zebra RS6100?",
        "answer": "RS6100 przesyła kody przez Bluetooth 5.2. Pełny zestaw funkcji działa z komputerami mobilnymi Zebra z Bluetooth: ręcznymi, tabletami, noszonymi i pokładowymi. Skaner paruje się też ze smartfonem, tabletem albo komputerem PC z Bluetooth. Z urządzeniami Zebra obsługującymi NFC, np. WT6300, wystarczy zbliżyć skaner do ikony NFC. Do komputera stacjonarnego służy [adapter Bluetooth](/produkt/zebra-rs2100-bt-rs5x6-dngl-01), który obsługuje do siedmiu skanerów."
      },
      {
        "question": "Czy RS6100 współpracuje z iPhone'em lub telefonem z Androidem?",
        "answer": "Tak, w trybie emulacji klawiatury (HID). Po zeskanowaniu kodu HID Keyboard Emulation, wydrukowanego w przewodniku Product Reference Guide, RS6100 pojawia się na liście urządzeń Bluetooth w telefonie i wybiera się go z tej listy. Odczytany kod trafia do każdej aplikacji, która przyjmuje tekst z klawiatury."
      },
      {
        "question": "Czym ładuje się RS6100 i zapasowe baterie?",
        "answer": "Skaner z baterią w środku ładuje stacja 2-gniazdowa ([sama](/produkt/zebra-rs6100-crd-rs5x6-2schg-01) lub [w zestawie z zasilaczem](/produkt/zebra-rs6100-kt-rs5x6-2scpwr-01)), [4-gniazdowa](/produkt/zebra-rs6100-crd-rs61-4schg-01) albo [20-gniazdowa](/produkt/zebra-rs6100-crd-rs61-20schg-01). Zapasowe baterie ładuje ładowarka [8](/produkt/zebra-rs6100-sac-rs51-8schg-01) lub [40 baterii](/produkt/zebra-rs6100-sac-rs51-40schg-01). Stacje i ładowarki nie przesyłają danych. Przy temperaturze pokojowej bateria standardowa osiąga 90% naładowania w czasie krótszym niż 2,5 h."
      },
      {
        "question": "Czy RS6100 może pracować w mroźni?",
        "answer": "Tak. Wersja RS61B0-KFSSYWR ma [baterię do mroźni](/produkt/zebra-rs6100-btry-rs5x6-6ma-01) 660 mAh, z którą skaner pracuje od −30 do 50 °C. Bateria rozszerzona pozwala pracować od −20 °C, a standardowa od 0 °C. Poniżej −20 °C skaner z baterią do mroźni skraca czas sesji odczytu do mniej niż 1 sekundy. Drugą możliwością jest [adapter przewodowy](/produkt/zebra-rs6100-cbl-rs5x6-adpwt-01) zasilany z WT6000 lub WT6300."
      },
      {
        "question": "Jak wymienić baterię w RS6100 w trakcie zmiany?",
        "answer": "Należy nacisnąć zatrzask baterii, wysunąć rozładowaną baterię i wsunąć naładowaną do końca gniazda, aż zatrzask kliknie. Skaner nie wymaga odstawiania do stacji. Nowa bateria z fabryki jest w trybie transportowym, dlatego przed pierwszym użyciem trzeba ją włożyć do stacji lub ładowarki."
      },
      {
        "question": "Czy RS6100 nadaje się do pracy w rękawicach?",
        "answer": "To zależy od mocowania. Pojedynczego spustu można używać w cienkich rękawicach. Podwójny spust nie jest zalecany do pracy w rękawicach. Mocowanie na grzbiet dłoni ma jeden rozmiar i mieści dłoń w rękawicy. Do grubych rękawic w mroźni Zebra oferuje mocowanie SG-RS5X6-BHMTX-01, przeznaczone do pracy do −30 °C."
      },
      {
        "question": "Czy akcesoria do RS5100 pasują do RS6100?",
        "answer": "Część tak. Z RS6100 działają zespoły pojedynczego i podwójnego spustu z RS5100, baterie standardowe i rozszerzone oraz ładowarki 8 i 40 baterii. Nowe mocowania Enterprise Hand Mount, na grzbiet dłoni i smyczy pasują do obu modeli. Stacje 4- i 20-gniazdowe na skanery mają osobne wersje dla każdego modelu, a stacja 2-gniazdowa jest wspólna."
      },
      {
        "question": "Czy RS6100 może pracować bez baterii?",
        "answer": "Tak. [Adapter przewodowy CBL-RS5X6-ADPWT-01](/produkt/zebra-rs6100-cbl-rs5x6-adpwt-01) zasila skaner z komputera noszonego Zebra WT6000 lub WT6300. Przewód dostarcza tylko zasilanie, a kody nadal trafiają do terminala przez Bluetooth."
      },
      {
        "question": "Co zawiera opakowanie RS6100?",
        "answer": "Skaner, baterię, spust lub mocowanie według wybranej wersji, broszurę Regulatory Guide i opcjonalną śrubę mocowania spustu. Stację ładującą zamawia się osobno. W wersjach z Enterprise Hand Mount osobno zamawia się także owijkę na dłoń."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  }
]

export const zebraRs6100Accessories: Product[] = [
  {
    "id": "zebra-rs6100-crd-rs5x6-2schg-01",
    "slug": "zebra-rs6100-crd-rs5x6-2schg-01",
    "name": "Stacja ładująca Zebra RS5100 / RS6100 2-gniazdowa",
    "seoH1": "Stacja ładująca Zebra RS5100 / RS6100 2-gniazdowa",
    "seoTitle": "Stacja ładująca Zebra RS5100 / RS6100 2-gniazdowa — CRD-RS5X6-2SCHG-01",
    "seoDescription": "Stacja ładująca Zebra CRD-RS5X6-2SCHG-01 na dwa skanery noszone RS6100 lub RS5100, zasilanie 5 V przez przewód USB-C. Ładowarka Zebra RS6100 na stanowisko pracy.",
    "shortDescription": "Zebra CRD-RS5X6-2SCHG-01 — stacja na dwa skanery noszone RS5100 lub RS6100 z bateriami, tylko ładowanie, zasilanie 5 V, 1 A przez przewód USB-A / USB-C.",
    "description": "Stacja CRD-RS5X6-2SCHG-01 ładuje dwa skanery Zebra RS5100 lub RS6100 razem z bateriami włożonymi do skanerów. Nie przesyła danych. Przy każdym gnieździe jest dioda, która pokazuje stan ładowania.\n\nStację zasila przewód USB-A / USB-C z zasilacza o wydajności co najmniej 5 V, 1 A. Przy słabszym zasilaczu działa tylko dolne gniazdo, a dioda górnego miga na czerwono. Stacja ma wymiary 180 × 48 × 19 mm i waży 96 g. Temperatura pracy stacji: od −20 do 50 °C. Baterie ładują się przy 5–40 °C. Stacja z przewodem i zasilaczem w jednym opakowaniu ma numer [KT-RS5X6-2SCPWR-01](/produkt/zebra-rs6100-kt-rs5x6-2scpwr-01).\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Przewód USB-A / USB-C 1 m Zebra (CBL-TC5X-USBC2A-01)](/produkt/zebra-tc201-cbl-tc5x-usbc2a-01)\n- [Zasilacz USB-A Zebra 12 W EU (PWR-WUA5V12W0EU)](/produkt/zebra-tc22-tc27-pwr-wua5v12w0eu)\n\nDokup tylko te elementy, których jeszcze nie masz.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CRD-RS5X6-2SCHG-01.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca Zebra RS5100 / RS6100 2-gniazdowa — widok bez skanerów, ze skanerami w gniazdach i z boku (skanery sprzedawane osobno)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 578.11,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "CRD-RS5X6-2SCHG-01"
      },
      {
        "name": "Liczba gniazd",
        "value": "2 skanery RS5100 lub RS6100 z baterią"
      },
      {
        "name": "Funkcja",
        "value": "Tylko ładowanie, bez komunikacji"
      },
      {
        "name": "Zasilanie",
        "value": "5 V DC, 1 A; przewód CBL-TC5X-USBC2A-01 i zasilacz PWR-WUA5V12W0EU sprzedawane osobno"
      },
      {
        "name": "Wymiary",
        "value": "180 × 48 × 19 mm (wys. × szer. × gł.)"
      },
      {
        "name": "Masa",
        "value": "96 g"
      },
      {
        "name": "Temperatura pracy",
        "value": "−20 °C do 50 °C"
      },
      {
        "name": "Temperatura ładowania",
        "value": "5 °C do 40 °C"
      },
      {
        "name": "Temperatura przechowywania",
        "value": "−40 °C do 70 °C"
      },
      {
        "name": "Wilgotność",
        "value": "5–95% bez kondensacji"
      },
      {
        "name": "Odporność na upadki",
        "value": "75 cm na beton w temperaturze pokojowej"
      },
      {
        "name": "ESD",
        "value": "±15 kV w powietrzu, ±8 kV kontaktowo"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS5100, Zebra RS6100"
      }
    ],
    "applications": [
      "Ładowanie dwóch skanerów RS6100 lub RS5100 przy stanowisku pracy"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-tc201-cbl-tc5x-usbc2a-01",
      "zebra-tc22-tc27-pwr-wua5v12w0eu",
      "zebra-rs6100-kt-rs5x6-2scpwr-01"
    ],
    "relatedProducts": [
      "zebra-rs6100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS6100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs6100-przewodnik-en.pdf",
        "size": "17,9 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs6100-kt-rs5x6-2scpwr-01",
    "slug": "zebra-rs6100-kt-rs5x6-2scpwr-01",
    "name": "Zestaw stacji 2-gniazdowej Zebra RS5100 / RS6100 z zasilaczem",
    "seoH1": "Zestaw stacji 2-gniazdowej Zebra RS5100 / RS6100 z zasilaczem",
    "seoTitle": "Zestaw stacji 2-gniazdowej Zebra RS5100 / RS6100 z zasilaczem — KT-RS5X6-2SCPWR-01",
    "seoDescription": "Zestaw Zebra KT-RS5X6-2SCPWR-01: stacja ładująca na dwa skanery RS6100 lub RS5100, przewód USB-A / USB-C i zasilacz. Ładowarka Zebra RS6100 z zasilaczem w komplecie.",
    "shortDescription": "Zebra KT-RS5X6-2SCPWR-01 — stacja ładująca na dwa skanery RS5100 lub RS6100 w zestawie z przewodem USB-A / USB-C CBL-TC5X-USBC2A-01 i zasilaczem.",
    "description": "Zestaw KT-RS5X6-2SCPWR-01 zawiera stację CRD-RS5X6-2SCHG-01, przewód USB-A / USB-C CBL-TC5X-USBC2A-01 i zasilacz. Do uruchomienia stacji nie trzeba dokupować przewodu ani zasilacza.\n\nStacja obsługuje jednocześnie dwa skanery RS5100 lub RS6100 z bateriami w środku i nie przesyła danych. Stan ładowania w każdym gnieździe pokazuje osobna dioda. Stacja waży 96 g. Jej zakres temperatur pracy to −20…50 °C, a ładowanie baterii wymaga 5–40 °C. Gdy przewód i zasilacz są już na stanowisku, wystarczy sama [stacja CRD-RS5X6-2SCHG-01](/produkt/zebra-rs6100-crd-rs5x6-2schg-01).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CRD-RS5X6-2SCHG-01.png"
    ],
    "imageDescriptions": [
      "Stacja z zestawu Zebra KT-RS5X6-2SCPWR-01 — widok bez skanerów, ze skanerami w gniazdach i z boku (przewód i zasilacz w zestawie, skanery sprzedawane osobno)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 716.56,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "KT-RS5X6-2SCPWR-01"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Stacja CRD-RS5X6-2SCHG-01, przewód USB-A / USB-C CBL-TC5X-USBC2A-01, zasilacz"
      },
      {
        "name": "Liczba gniazd",
        "value": "2 skanery RS5100 lub RS6100 z baterią"
      },
      {
        "name": "Funkcja",
        "value": "Tylko ładowanie, bez komunikacji"
      },
      {
        "name": "Zasilanie stacji",
        "value": "5 V DC, 1 A"
      },
      {
        "name": "Wymiary stacji",
        "value": "180 × 48 × 19 mm (wys. × szer. × gł.)"
      },
      {
        "name": "Masa stacji",
        "value": "96 g"
      },
      {
        "name": "Temperatura pracy",
        "value": "−20 °C do 50 °C"
      },
      {
        "name": "Temperatura ładowania",
        "value": "5 °C do 40 °C"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS5100, Zebra RS6100"
      }
    ],
    "applications": [
      "Pierwsze stanowisko ładowania skanerów RS6100 lub RS5100"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-rs6100-crd-rs5x6-2schg-01"
    ],
    "relatedProducts": [
      "zebra-rs6100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS6100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs6100-przewodnik-en.pdf",
        "size": "17,9 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs6100-crd-rs61-4schg-01",
    "slug": "zebra-rs6100-crd-rs61-4schg-01",
    "name": "Stacja ładująca Zebra RS6100 4-gniazdowa",
    "seoH1": "Stacja ładująca Zebra RS6100 4-gniazdowa",
    "seoTitle": "Stacja ładująca Zebra RS6100 4-gniazdowa — CRD-RS61-4SCHG-01",
    "seoDescription": "Stacja ładująca Zebra CRD-RS61-4SCHG-01 dla czterech skanerów noszonych RS6100, zasilana 12 V DC (zasilacz 50 W). Ładowarka Zebra RS6100 4-gniazdowa.",
    "shortDescription": "Zebra CRD-RS61-4SCHG-01 — czterogniazdowa stacja ładująca do skanerów RS6100 (bateria w skanerze), bez transmisji danych; zasilacz Zebra 50 W, 12 V DC.",
    "description": "Stacja CRD-RS61-4SCHG-01 ładuje cztery skanery Zebra RS6100 z bateriami włożonymi do skanerów. Służy tylko do ładowania, bez transmisji danych. Postęp ładowania widać na diodach skanerów; stacja ma własną diodę zasilania.\n\nStacja pobiera 12 V DC przy mocy 50 W. Zasilacz łączy się z uziemionym gniazdkiem. Waży 433 g i pracuje w temperaturze 5–40 °C; ładowanie odbywa się w temperaturze 10–40 °C. Stacja pasuje tylko do RS6100. Zapasowe baterie ładuje [ładowarka 8 baterii](/produkt/zebra-rs6100-sac-rs51-8schg-01).\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy Zebra 50 W (PWR-BGA12V50W0WW)](/produkt/zebra-zasilacz-50w)\n- [Przewód DC Zebra CBL-DC-388A1-01 (CBL-DC-388A1-01)](/produkt/zebra-kabel-zasilajacy-388)\n- [Przewód sieciowy Zebra — Europa, C13 (50-16000-220R)](/produkt/zebra-tc201-50-16000-220r)\n\nDokup tylko te elementy, których jeszcze nie masz.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CRD-RS61-4SCHG-01.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca Zebra RS6100 4-gniazdowa ze skanerami w gniazdach (skanery sprzedawane osobno)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 1220.23,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "CRD-RS61-4SCHG-01"
      },
      {
        "name": "Liczba gniazd",
        "value": "4 skanery RS6100 z baterią"
      },
      {
        "name": "Funkcja",
        "value": "Tylko ładowanie, bez komunikacji"
      },
      {
        "name": "Zasilanie",
        "value": "12 V DC, 50 W; zasilacz PWR-BGA12V50W0WW, przewód DC CBL-DC-388A1-01 i przewód sieciowy 50-16000-220R sprzedawane osobno"
      },
      {
        "name": "Wymiary",
        "value": "87,97 × 97,52 × 136,25 mm (wys. × szer. × gł.)"
      },
      {
        "name": "Masa",
        "value": "433 g"
      },
      {
        "name": "Temperatura pracy",
        "value": "5 °C do 40 °C"
      },
      {
        "name": "Temperatura ładowania",
        "value": "10 °C do 40 °C"
      },
      {
        "name": "Temperatura przechowywania",
        "value": "−40 °C do 70 °C"
      },
      {
        "name": "Wilgotność",
        "value": "5–95% bez kondensacji"
      },
      {
        "name": "Odporność na upadki",
        "value": "75 cm na beton w temperaturze pokojowej"
      },
      {
        "name": "ESD",
        "value": "±15 kV w powietrzu, ±8 kV kontaktowo"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS6100"
      }
    ],
    "applications": [
      "Ładowanie skanerów RS6100 małego zespołu"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-psu-50w",
      "zebra-cable-dc-388",
      "zebra-tc201-50-16000-220r"
    ],
    "relatedProducts": [
      "zebra-rs6100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS6100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs6100-przewodnik-en.pdf",
        "size": "17,9 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs6100-crd-rs61-20schg-01",
    "slug": "zebra-rs6100-crd-rs61-20schg-01",
    "name": "Stacja ładująca Zebra RS6100 20-gniazdowa",
    "seoH1": "Stacja ładująca Zebra RS6100 20-gniazdowa",
    "seoTitle": "Stacja ładująca Zebra RS6100 20-gniazdowa — CRD-RS61-20SCHG-01",
    "seoDescription": "Stacja ShareCradle Zebra CRD-RS61-20SCHG-01 ładuje 20 skanerów noszonych RS6100 naraz; wymaga zasilacza 108 W. Stacja ładująca Zebra RS6100 20-gniazdowa.",
    "shortDescription": "Zebra CRD-RS61-20SCHG-01 — stacja ShareCradle na 20 skanerów RS6100 z bateriami w skanerach; zasilacz 108 W, opcjonalny uchwyt ścienny lub do szafy rack.",
    "description": "Stacja ShareCradle CRD-RS61-20SCHG-01 ładuje jednocześnie 20 skanerów Zebra RS6100 z bateriami w skanerach. Pięć takich stacji ładuje 100 skanerów bez stu osobnych przewodów USB. Stan ładowania pokazują diody skanerów, a dioda zasilania na stacji informuje, że stacja jest pod napięciem.\n\nStacja ma wymiary 523 × 221 × 131 mm i waży 2660 g. Pracuje w temperaturze 0–50 °C i pobiera 12 V DC z zasilacza 108 W. Opcjonalny uchwyt ShareCradle mocuje ją na ścianie lub w szafie rack. Na jedno stanowisko wystarczy [stacja 4-gniazdowa](/produkt/zebra-rs6100-crd-rs61-4schg-01).\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy Zebra 108 W (PWR-BGA12V108W0WW)](/produkt/zebra-zasilacz-108w)\n- [Przewód DC Zebra CBL-DC-381A1-01 (CBL-DC-381A1-01)](/produkt/zebra-kabel-zasilajacy-381)\n- [Przewód sieciowy Zebra — Europa, C13 (50-16000-220R)](/produkt/zebra-tc201-50-16000-220r)\n\nDokup tylko te elementy, których jeszcze nie masz.\n\n## Elementy opcjonalne\n\n- [Uchwyt montażowy ShareCradle Zebra (BRKT-SCRD-SMRK-01)](/produkt/zebra-tc201-brkt-scrd-smrk-01)",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CRD-RS61-20SCHG-01.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca Zebra RS6100 20-gniazdowa ShareCradle — widok z boku na rząd gniazd (skanery sprzedawane osobno)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 5287.78,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "CRD-RS61-20SCHG-01"
      },
      {
        "name": "Liczba gniazd",
        "value": "20 skanerów RS6100 z baterią"
      },
      {
        "name": "Funkcja",
        "value": "Tylko ładowanie, bez komunikacji"
      },
      {
        "name": "Zasilanie",
        "value": "12 V DC; zasilacz PWR-BGA12V108W0WW, przewód DC CBL-DC-381A1-01 i przewód sieciowy 50-16000-220R sprzedawane osobno"
      },
      {
        "name": "Wymiary",
        "value": "523 × 221 × 131 mm"
      },
      {
        "name": "Masa",
        "value": "2660 g"
      },
      {
        "name": "Temperatura pracy",
        "value": "0 °C do 50 °C"
      },
      {
        "name": "Temperatura przechowywania",
        "value": "−40 °C do 70 °C"
      },
      {
        "name": "Wilgotność",
        "value": "5–95% bez kondensacji"
      },
      {
        "name": "Odporność na upadki",
        "value": "75 cm na beton w temperaturze pokojowej"
      },
      {
        "name": "ESD",
        "value": "±20 kV w powietrzu, ±10 kV kontaktowo"
      },
      {
        "name": "Montaż",
        "value": "Na blacie; na ścianie lub w szafie rack z uchwytem BRKT-SCRD-SMRK-01 (opcja)"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS6100"
      }
    ],
    "applications": [
      "Ładowanie skanerów RS6100 całej zmiany w jednym miejscu"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-psu-108w",
      "zebra-cable-dc-381",
      "zebra-tc201-50-16000-220r",
      "zebra-tc201-brkt-scrd-smrk-01"
    ],
    "relatedProducts": [
      "zebra-rs6100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS6100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs6100-przewodnik-en.pdf",
        "size": "17,9 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs6100-sac-rs51-8schg-01",
    "slug": "zebra-rs6100-sac-rs51-8schg-01",
    "name": "Ładowarka 8 baterii Zebra RS5100 / RS6100",
    "seoH1": "Ładowarka 8 baterii Zebra RS5100 / RS6100",
    "seoTitle": "Ładowarka 8 baterii Zebra RS5100 / RS6100 — SAC-RS51-8SCHG-01",
    "seoDescription": "Ładowarka Zebra SAC-RS51-8SCHG-01 na osiem baterii skanerów noszonych RS6100 i RS5100, z zasilaczem PWR-BGA12V50W0WW. Ładowarka baterii Zebra RS6100 8-gniazdowa.",
    "shortDescription": "Zebra SAC-RS51-8SCHG-01 — ładowarka na osiem baterii RS5100 / RS6100 wyjętych ze skanerów; zasilanie 12 V DC, 50 W.",
    "description": "Ładowarka SAC-RS51-8SCHG-01 ładuje osiem zapasowych baterii skanerów Zebra RS5100 i RS6100 poza skanerem. Przy każdym gnieździe dioda pokazuje stan ładowania, a osobna dioda sygnalizuje zasilanie. Pracownik wymienia rozładowaną baterię na naładowaną z ładowarki, a skaner pozostaje w użyciu.\n\nŁadowarka ma wymiary 83,64 × 97,52 × 137,29 mm i waży 486 g. Zasilanie wynosi 12 V DC, 50 W. Ładowanie baterii jest możliwe w zakresie 10–40 °C. Nowe baterie są w trybie transportowym i aktywują się po włożeniu do ładowarki.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy Zebra 50 W (PWR-BGA12V50W0WW)](/produkt/zebra-zasilacz-50w)\n- [Przewód DC Zebra CBL-DC-388A1-01 (CBL-DC-388A1-01)](/produkt/zebra-kabel-zasilajacy-388)\n- [Przewód sieciowy Zebra — Europa, C13 (50-16000-220R)](/produkt/zebra-tc201-50-16000-220r)\n\nDokup tylko te elementy, których jeszcze nie masz.\n\n## Elementy opcjonalne\n\n- [Bateria standardowa 480 mAh Zebra RS5100 / RS6100 (BTRY-RS51-4MA-01)](/produkt/zebra-rs6100-btry-rs51-4ma-01)\n- [Bateria rozszerzona 735 mAh Zebra RS5100 / RS6100 (BTRY-RS51-7MA-01)](/produkt/zebra-rs6100-btry-rs51-7ma-01)",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/SAC-RS51-8SCHG-01.png"
    ],
    "imageDescriptions": [
      "Ładowarka 8 baterii Zebra RS5100 / RS6100 — puste gniazda baterii i diody stanu (baterie sprzedawane osobno)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 2104.52,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "SAC-RS51-8SCHG-01"
      },
      {
        "name": "Liczba gniazd",
        "value": "8 baterii RS5100 / RS6100"
      },
      {
        "name": "Funkcja",
        "value": "Ładowanie zapasowych baterii"
      },
      {
        "name": "Zasilanie",
        "value": "12 V DC, 50 W; zasilacz PWR-BGA12V50W0WW, przewód DC CBL-DC-388A1-01 i przewód sieciowy 50-16000-220R sprzedawane osobno"
      },
      {
        "name": "Wymiary",
        "value": "83,64 × 97,52 × 137,29 mm (wys. × szer. × gł.)"
      },
      {
        "name": "Masa",
        "value": "486 g"
      },
      {
        "name": "Temperatura pracy",
        "value": "5 °C do 40 °C"
      },
      {
        "name": "Temperatura ładowania",
        "value": "10 °C do 40 °C"
      },
      {
        "name": "Temperatura przechowywania",
        "value": "−40 °C do 70 °C"
      },
      {
        "name": "Wilgotność",
        "value": "5–95% bez kondensacji"
      },
      {
        "name": "Odporność na upadki",
        "value": "75 cm na beton w temperaturze pokojowej"
      },
      {
        "name": "ESD",
        "value": "±15 kV w powietrzu, ±8 kV kontaktowo"
      },
      {
        "name": "Kompatybilność",
        "value": "Baterie skanerów Zebra RS5100 i RS6100"
      }
    ],
    "applications": [
      "Ładowanie zapasowych baterii do wymiany w trakcie zmiany"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-psu-50w",
      "zebra-cable-dc-388",
      "zebra-tc201-50-16000-220r",
      "zebra-rs6100-btry-rs51-4ma-01",
      "zebra-rs6100-btry-rs51-7ma-01"
    ],
    "relatedProducts": [
      "zebra-rs6100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS6100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs6100-przewodnik-en.pdf",
        "size": "17,9 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs6100-sac-rs51-40schg-01",
    "slug": "zebra-rs6100-sac-rs51-40schg-01",
    "name": "Ładowarka 40 baterii Zebra RS5100 / RS6100",
    "seoH1": "Ładowarka 40 baterii Zebra RS5100 / RS6100",
    "seoTitle": "Ładowarka 40 baterii Zebra RS5100 / RS6100 — SAC-RS51-40SCHG-01",
    "seoDescription": "Ładowarka Zebra SAC-RS51-40SCHG-01 mieści 40 zapasowych baterii do RS6100 i RS5100; pracuje z zasilaczem PWR-BGA12V108W0WW. Ładowarka baterii Zebra RS6100 40-gniazdowa.",
    "shortDescription": "Zebra SAC-RS51-40SCHG-01 — ładowarka 40 zapasowych baterii skanerów RS5100 i RS6100 z diodą stanu przy każdym gnieździe; zasilana z zasilacza Zebra 108 W.",
    "description": "Ładowarka SAC-RS51-40SCHG-01 mieści 40 baterii do skanerów noszonych Zebra RS5100 i RS6100. Jest przeznaczona dla dużych zespołów, które wymieniają baterie w trakcie zmiany zamiast odstawiać skanery do stacji. Każde gniazdo ma diodę stanu ładowania, a ładowarka ma diodę zasilania.\n\nŁadowarka ma wymiary 540 × 150 × 190 mm i waży 3200 g. Zasilacz 108 W dostarcza do niej napięcie 12 V DC. Zakres temperatur pracy: 5–40 °C. Z opcjonalnym uchwytem ShareCradle można ją zamontować na ścianie albo w szafie rack.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy Zebra 108 W (PWR-BGA12V108W0WW)](/produkt/zebra-zasilacz-108w)\n- [Przewód DC Zebra CBL-DC-381A1-01 (CBL-DC-381A1-01)](/produkt/zebra-kabel-zasilajacy-381)\n- [Przewód sieciowy Zebra — Europa, C13 (50-16000-220R)](/produkt/zebra-tc201-50-16000-220r)\n\nDokup tylko te elementy, których jeszcze nie masz.\n\n## Elementy opcjonalne\n\n- [Uchwyt montażowy ShareCradle Zebra (BRKT-SCRD-SMRK-01)](/produkt/zebra-tc201-brkt-scrd-smrk-01)\n- [Bateria standardowa 480 mAh Zebra RS5100 / RS6100 (BTRY-RS51-4MA-01)](/produkt/zebra-rs6100-btry-rs51-4ma-01)\n- [Bateria rozszerzona 735 mAh Zebra RS5100 / RS6100 (BTRY-RS51-7MA-01)](/produkt/zebra-rs6100-btry-rs51-7ma-01)",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/SAC-RS51-40SCHG-01.png"
    ],
    "imageDescriptions": [
      "Ładowarka 40 baterii Zebra RS5100 / RS6100 — pięć modułów po osiem gniazd z diodami stanu (baterie sprzedawane osobno)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 8824.74,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "SAC-RS51-40SCHG-01"
      },
      {
        "name": "Liczba gniazd",
        "value": "40 baterii RS5100 / RS6100"
      },
      {
        "name": "Funkcja",
        "value": "Ładowanie zapasowych baterii"
      },
      {
        "name": "Zasilanie",
        "value": "12 V DC; zasilacz PWR-BGA12V108W0WW, przewód DC CBL-DC-381A1-01 i przewód sieciowy 50-16000-220R sprzedawane osobno"
      },
      {
        "name": "Wymiary",
        "value": "540 × 150 × 190 mm"
      },
      {
        "name": "Masa",
        "value": "3200 g"
      },
      {
        "name": "Temperatura pracy",
        "value": "5 °C do 40 °C"
      },
      {
        "name": "Temperatura przechowywania",
        "value": "−40 °C do 70 °C"
      },
      {
        "name": "Wilgotność",
        "value": "5–95% bez kondensacji"
      },
      {
        "name": "Odporność na upadki",
        "value": "75 cm na beton w temperaturze pokojowej"
      },
      {
        "name": "ESD",
        "value": "±20 kV w powietrzu, ±10 kV kontaktowo"
      },
      {
        "name": "Montaż",
        "value": "Na blacie; na ścianie lub w szafie rack z uchwytem BRKT-SCRD-SMRK-01 (opcja)"
      },
      {
        "name": "Kompatybilność",
        "value": "Baterie skanerów Zebra RS5100 i RS6100"
      }
    ],
    "applications": [
      "Centralne ładowanie baterii skanerów RS6100 i RS5100 dla kilku zmian"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-psu-108w",
      "zebra-cable-dc-381",
      "zebra-tc201-50-16000-220r",
      "zebra-tc201-brkt-scrd-smrk-01",
      "zebra-rs6100-btry-rs51-4ma-01",
      "zebra-rs6100-btry-rs51-7ma-01"
    ],
    "relatedProducts": [
      "zebra-rs6100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS6100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs6100-przewodnik-en.pdf",
        "size": "17,9 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs6100-btry-rs51-4ma-01",
    "slug": "zebra-rs6100-btry-rs51-4ma-01",
    "name": "Bateria standardowa 480 mAh Zebra RS5100 / RS6100",
    "seoH1": "Bateria standardowa 480 mAh Zebra RS5100 / RS6100",
    "seoTitle": "Bateria standardowa 480 mAh Zebra RS5100 / RS6100 — BTRY-RS51-4MA-01",
    "seoDescription": "Bateria Zebra BTRY-RS51-4MA-01 do skanerów RS6100 i RS5100: Li-Ion 480 mAh, PowerPrecision+, wystarcza na pełną zmianę. Bateria do skanera Zebra RS6100.",
    "shortDescription": "Zebra BTRY-RS51-4MA-01 — standardowa bateria Li-Ion 480 mAh PowerPrecision+ do skanerów noszonych RS5100 i RS6100, praca w temperaturze 0–50 °C.",
    "description": "BTRY-RS51-4MA-01 to standardowa bateria litowo-jonowa 480 mAh do skanerów Zebra RS5100 i RS6100. Technologia PowerPrecision+ przekazuje dane o poziomie naładowania i stanie zużycia baterii. Narzędzie PowerPrecision Console na komputerze mobilnym Zebra wskazuje baterie, które nie utrzymają już ładunku na całą zmianę.\n\nW RS6100 bateria wystarcza na pełną zmianę i pozwala pracować w temperaturze 0–50 °C. Skaner z tą baterią waży 70 g. Ładowanie od pustej do 90% trwa poniżej 2,5 godziny przy temperaturze pokojowej, a w chłodzie (5–10 °C) do 5 godzin. Ładuje się w skanerze w stacji albo osobno w [ładowarce 8 baterii](/produkt/zebra-rs6100-sac-rs51-8schg-01) lub [40 baterii](/produkt/zebra-rs6100-sac-rs51-40schg-01). Nowa bateria jest w trybie transportowym i aktywuje się po włożeniu do stacji lub ładowarki.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "baterie-do-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/BTRY-RS51-4MA-01.png"
    ],
    "imageDescriptions": [
      "Bateria standardowa 480 mAh Zebra BTRY-RS51-4MA-01 — czarna obudowa z uchwytem do wysuwania"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 264.5,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "BTRY-RS51-4MA-01"
      },
      {
        "name": "Typ",
        "value": "Li-Ion, PowerPrecision+"
      },
      {
        "name": "Pojemność",
        "value": "480 mAh"
      },
      {
        "name": "Temperatura pracy z RS6100",
        "value": "0 °C do 50 °C"
      },
      {
        "name": "Masa RS6100 z baterią",
        "value": "70 g"
      },
      {
        "name": "Czas ładowania",
        "value": "0–90% w mniej niż 2,5 h w temperaturze pokojowej; w 5–10 °C mniej niż 5 h"
      },
      {
        "name": "Temperatura ładowania",
        "value": "5 °C do 40 °C"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS5100, Zebra RS6100"
      }
    ],
    "applications": [
      "Zapasowa bateria do wymiany w skanerze w trakcie zmiany"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-rs6100-sac-rs51-8schg-01",
      "zebra-rs6100-sac-rs51-40schg-01",
      "zebra-rs6100-btry-rs51-7ma-01"
    ],
    "relatedProducts": [
      "zebra-rs6100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS6100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs6100-przewodnik-en.pdf",
        "size": "17,9 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs6100-btry-rs51-7ma-01",
    "slug": "zebra-rs6100-btry-rs51-7ma-01",
    "name": "Bateria rozszerzona 735 mAh Zebra RS5100 / RS6100",
    "seoH1": "Bateria rozszerzona 735 mAh Zebra RS5100 / RS6100",
    "seoTitle": "Bateria rozszerzona 735 mAh Zebra RS5100 / RS6100 — BTRY-RS51-7MA-01",
    "seoDescription": "Rozszerzona bateria Zebra BTRY-RS51-7MA-01 735 mAh PowerPrecision+ do RS6100 i RS5100: dłuższe zmiany, praca od −20 °C. Bateria rozszerzona do skanera Zebra RS6100.",
    "shortDescription": "Zebra BTRY-RS51-7MA-01 — bateria rozszerzona Li-Ion 735 mAh PowerPrecision+ do skanerów RS5100 i RS6100, na dłuższe zmiany i do pracy od −20 °C.",
    "description": "Bateria BTRY-RS51-7MA-01 ma pojemność 735 mAh, półtora raza większą niż bateria standardowa. Zasila skanery Zebra RS5100 i RS6100 przez dłuższe zmiany i pozwala im pracować w zimnie do −20 °C.\n\nZ RS6100 bateria pracuje w zakresie od −20 do 50 °C. Poniżej −10 °C skaner z tą baterią przechodzi w tryb niskiego poboru energii. RS6100 z baterią rozszerzoną waży 76 g. Technologia PowerPrecision+ informuje o naładowaniu i zużyciu baterii. Do pracy poniżej −20 °C służy [bateria do mroźni BTRY-RS5X6-6MA-01](/produkt/zebra-rs6100-btry-rs5x6-6ma-01).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "baterie-do-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/BTRY-RS51-7MA-01.png"
    ],
    "imageDescriptions": [
      "Bateria rozszerzona 735 mAh Zebra BTRY-RS51-7MA-01 — wyższa obudowa z uchwytem do wysuwania"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "on-order",
    "priceFrom": 358.89,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "BTRY-RS51-7MA-01"
      },
      {
        "name": "Typ",
        "value": "Li-Ion, PowerPrecision+"
      },
      {
        "name": "Pojemność",
        "value": "735 mAh"
      },
      {
        "name": "Temperatura pracy z RS6100",
        "value": "−20 °C do 50 °C"
      },
      {
        "name": "Masa RS6100 z baterią",
        "value": "76 g"
      },
      {
        "name": "Temperatura ładowania",
        "value": "5 °C do 40 °C"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS5100, Zebra RS6100"
      }
    ],
    "applications": [
      "Dłuższe zmiany i praca w chłodniach do −20 °C"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-rs6100-sac-rs51-8schg-01",
      "zebra-rs6100-sac-rs51-40schg-01",
      "zebra-rs6100-btry-rs5x6-6ma-01"
    ],
    "relatedProducts": [
      "zebra-rs6100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS6100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs6100-przewodnik-en.pdf",
        "size": "17,9 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs6100-btry-rs5x6-6ma-01",
    "slug": "zebra-rs6100-btry-rs5x6-6ma-01",
    "name": "Bateria do mroźni 660 mAh Zebra RS5100 / RS6100",
    "seoH1": "Bateria do mroźni 660 mAh Zebra RS5100 / RS6100",
    "seoTitle": "Bateria do mroźni 660 mAh Zebra RS5100 / RS6100 — BTRY-RS5X6-6MA-01",
    "seoDescription": "Bateria Zebra BTRY-RS5X6-6MA-01 do pracy w mroźni: Li-Ion 660 mAh, niebieska etykieta, RS6100 od −30 do 50 °C, RS5100 od −20 do 50 °C. Bateria do mroźni Zebra RS6100.",
    "shortDescription": "Zebra BTRY-RS5X6-6MA-01 — bateria Li-Ion 660 mAh do mroźni, z niebieską etykietą: skaner RS6100 pracuje z nią od −30 do 50 °C, a RS5100 od −20 do 50 °C.",
    "description": "Bateria BTRY-RS5X6-6MA-01 o pojemności 660 mAh jest przeznaczona do pracy w mroźni. Niebieska etykieta odróżnia ją od baterii standardowej i rozszerzonej. Ze skanerem Zebra RS6100 zakres pracy wynosi od −30 do 50 °C, a z RS5100 od −20 do 50 °C.\n\nW temperaturze od −10 do −20 °C RS6100 przechodzi w tryb niskiego poboru energii i zachowuje domyślny 4-sekundowy czas sesji odczytu. Poniżej −20 °C czas sesji odczytu skraca się do mniej niż 1 sekundy. Wersja [Zebra RS6100](/produkt/zebra-rs6100) RS61B0-KFSSYWR jest dostarczana z tą baterią.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "baterie-do-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/BTRY-RS5X6-6MA-01.png"
    ],
    "imageDescriptions": [
      "Bateria do mroźni 660 mAh Zebra BTRY-RS5X6-6MA-01 — niebieska etykieta i styki baterii"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 358.89,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "BTRY-RS5X6-6MA-01"
      },
      {
        "name": "Typ",
        "value": "Li-Ion"
      },
      {
        "name": "Pojemność",
        "value": "660 mAh"
      },
      {
        "name": "Oznaczenie",
        "value": "Niebieska etykieta"
      },
      {
        "name": "Temperatura pracy z RS6100",
        "value": "−30 °C do 50 °C"
      },
      {
        "name": "Temperatura pracy z RS5100",
        "value": "−20 °C do 50 °C"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS5100, Zebra RS6100"
      }
    ],
    "applications": [
      "Praca skanera RS6100 w mroźni do −30 °C"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-rs6100-btry-rs51-7ma-01",
      "zebra-rs6100-cbl-rs5x6-adpwt-01"
    ],
    "relatedProducts": [
      "zebra-rs6100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS6100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs6100-przewodnik-en.pdf",
        "size": "17,9 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs6100-cbl-rs5x6-adpwt-01",
    "slug": "zebra-rs6100-cbl-rs5x6-adpwt-01",
    "name": "Adapter przewodowy Zebra RS5100 / RS6100 do WT6000 / WT6300",
    "seoH1": "Adapter przewodowy Zebra RS5100 / RS6100 do WT6000 / WT6300",
    "seoTitle": "Adapter przewodowy Zebra RS5100 / RS6100 do WT6000 / WT6300 — CBL-RS5X6-ADPWT-01",
    "seoDescription": "Adapter przewodowy Zebra CBL-RS5X6-ADPWT-01: zasila skaner RS6100 lub RS5100 z komputera noszonego WT6000 lub WT6300, praca bez baterii i w mroźni. Kabel zasilający Zebra RS6100.",
    "shortDescription": "Zebra CBL-RS5X6-ADPWT-01 — adapter przewodowy, który zasila skaner noszony RS5100 lub RS6100 z komputera WT6000 lub WT6300; dane płyną przez Bluetooth.",
    "description": "Adapter CBL-RS5X6-ADPWT-01 łączy skaner Zebra RS5100 lub RS6100 z komputerem noszonym Zebra WT6000 lub WT6300, zamocowanym na przedramieniu lub nadgarstku. Terminal zasila skaner przez przewód, więc skaner pracuje bez baterii. Kody nadal trafiają do terminala przez Bluetooth, a nie przez przewód.\n\nZ adapterem RS6100 może pracować w mroźni, w temperaturze −20 °C i −30 °C. Gdy WT6000 lub WT6300 ma baterię 5000 mAh, skaner nie skraca czasu sesji odczytu i utrzymuje domyślne 4 sekundy w całym zakresie temperatur. Terminal WT6000 lub WT6300 nie jest dołączony do adaptera.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "kable-do-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CBL-RS5X6-ADPWT-01.png"
    ],
    "imageDescriptions": [
      "Adapter przewodowy Zebra CBL-RS5X6-ADPWT-01 — złącze skanera, przewód spiralny i wtyk do terminala WT6000 / WT6300"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 534.97,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "CBL-RS5X6-ADPWT-01"
      },
      {
        "name": "Funkcja",
        "value": "Zasilanie skanera z terminala; komunikacja przez Bluetooth"
      },
      {
        "name": "Terminal",
        "value": "Zebra WT6000, Zebra WT6300 (sprzedawane osobno)"
      },
      {
        "name": "Praca w mroźni",
        "value": "RS6100: −20 °C i −30 °C"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS5100, Zebra RS6100"
      }
    ],
    "applications": [
      "Praca skanera RS6100 bez baterii, zasilanego z komputera noszonego WT6000 lub WT6300"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-rs6100-btry-rs5x6-6ma-01"
    ],
    "relatedProducts": [
      "zebra-rs6100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS6100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs6100-przewodnik-en.pdf",
        "size": "17,9 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  }
]
