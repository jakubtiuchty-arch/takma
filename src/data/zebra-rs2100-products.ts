import type { Product } from './products'

// Skaner noszony Zebra RS2100 (24.10.2026). Ceny i stany na karcie aktualizuje /api/stock; priceFrom to wartość startowa.
// Spust jest w mocowaniu, a bateria ładuje się w stacji, dlatego karta skanera ma bloki „Wymagane … (jedno z)”.
// Źródła i decyzje: docs/catalog/zebra-rs2100-2026-10-24/audit.md.
export const zebraRs2100Products: Product[] = [
  {
    "id": "zebra-rs2100",
    "slug": "zebra-rs2100",
    "name": "Zebra RS2100",
    "seoH1": "Zebra RS2100",
    "seoTitle": "Zebra RS2100 — skaner noszony na grzbiecie dłoni, 31 g, IP54",
    "seoDescription": "Skaner noszony Zebra RS2100: 31 g, imager 1D/2D SE4770, Bluetooth 5.2, NFC, IP54. Skaner pierścieniowy Zebra RS2100, skaner na dłoń Zebra, RS2100 Zebra. PN: RS21C0-TS00ZWR.",
    "shortDescription": "Zebra RS2100 — skaner kodów 1D/2D noszony na grzbiecie dłoni: 31 g, wysokość 14,6 mm, odkryte wnętrze dłoni, Bluetooth 5.2 i parowanie NFC.",
    "description": "Zebra RS2100 to skaner kodów kreskowych noszony na grzbiecie dłoni. Mocowanie obejmuje nadgarstek i nasadę palca wskazującego, a wewnętrzna strona dłoni pozostaje odkryta. Pracownik chwyta więc towar gołą dłonią albo w cienkiej rękawiczce. Skaner waży 31 g i ma 14,6 mm wysokości, co ułatwia kompletację w ciasnych miejscach.\n\nImager SE4770 z technologią PRZM Intelligent Imaging czyta kody 1D i 2D, także uszkodzone, słabo wydrukowane lub zabrudzone, oraz znaki OCR-A i OCR-B. Etykietę UPC-A odczytuje z odległości 4,1–63,2 cm, a kod QR 20 mil z 2,8–44,5 cm. Odczyt potwierdzają brzęczyk i kolorowe diody widoczne w polu widzenia pracownika.\n\nRS2100 łączy się przez Bluetooth 5.2 z komputerami mobilnymi Zebra, ze smartfonami i tabletami z Androidem lub iOS oraz z komputerem PC. Do parowania wystarczy zbliżenie NFC (Tap-to-Pair) albo zeskanowanie kodu wyświetlonego przez aplikację Scan-to-Connect. [Adapter Bluetooth](/produkt/zebra-rs2100-bt-rs5x6-dngl-01) podłączony do portu USB komputera obsługuje do siedmiu skanerów, np. na stanowiskach pakowania.\n\nBateria 480 mAh jest wbudowana, więc nie ma osobnych baterii do wymiany. Obudowa ma klasę IP54 i wytrzymuje wielokrotne upadki na beton z wysokości 1,8 m.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane dla skanera: mocowanie (jedno z) — sprzedawane osobno**\n\n- [Mocowanie ze spustem Zebra RS2100, prawa ręka, 1 szt. (SG-RS2X-HMTRA-01)](/produkt/zebra-rs2100-sg-rs2x-hmtra-01)\n- [Mocowanie ze spustem Zebra RS2100, lewa ręka, 1 szt. (SG-RS2X-HMTLA-01)](/produkt/zebra-rs2100-sg-rs2x-hmtla-01)\n- [Mocowanie ze spustem Zebra RS2100, prawa ręka, 10 szt. (SG-RS2X-HMTRA-10)](/produkt/zebra-rs2100-sg-rs2x-hmtra-10)\n- [Mocowanie ze spustem Zebra RS2100, lewa ręka, 10 szt. (SG-RS2X-HMTLA-10)](/produkt/zebra-rs2100-sg-rs2x-hmtla-10)\n\n**Wymagane dla skanera: stacja ładująca (jedna z) — sprzedawane osobno**\n\n- [Stacja ładująca Zebra RS2100 2-gniazdowa (CRD-RS2X-2SCHG-01)](/produkt/zebra-rs2100-crd-rs2x-2schg-01)\n- [Stacja ładująca Zebra RS2100 20-gniazdowa (CRD-RS2X-20SCHG-01)](/produkt/zebra-rs2100-crd-rs2x-20schg-01)\n\nDokup tylko te elementy, których jeszcze nie masz.",
    "categoryId": "skanery-kodow-kreskowych",
    "subcategoryIds": [
      "skanery-pierscieniowe"
    ],
    "manufacturerId": "zebra",
    "sameAs": "https://www.zebra.com/pl/pl/products/mobile-computers/wearable-computers/rs2100.html",
    "priceFrom": 1765.59,
    "availability": "available",
    "images": [
      "/images/products/RS21C0-TS00ZWR.png",
      "/images/products/RS21C0-TS00ZWR-2.png",
      "/images/products/RS21C0-TS00ZWR-3.png",
      "/images/products/RS21C0-TS00ZWR-4.png",
      "/images/products/RS21C0-TS00ZWR-5.png"
    ],
    "imageDescriptions": [
      "Zebra RS2100 — limonkowy skaner noszony, widok z przodu z oknem imagera",
      "Zebra RS2100 w mocowaniu na grzbiecie prawej dłoni — widok z boku (mocowanie sprzedawane osobno)",
      "Zebra RS2100 na prawej dłoni, mocowanie z paskiem na nadgarstek i palec wskazujący (mocowanie sprzedawane osobno)",
      "Zebra RS2100 na grzbiecie prawej dłoni — widok z góry (mocowanie sprzedawane osobno)",
      "Zebra RS2100 na prawej dłoni — widok z boku, niski profil skanera (mocowanie sprzedawane osobno)"
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
        "value": "Imager 1D/2D SE4770 o standardowym zasięgu, technologia PRZM Intelligent Imaging"
      },
      {
        "name": "Rozdzielczość optyczna",
        "value": "1280 × 800 pikseli"
      },
      {
        "name": "Celownik i oświetlenie",
        "value": "Celownik laserowy 655 nm; oświetlenie: jedna dioda LED Hyper Red 660 nm"
      },
      {
        "name": "Pole widzenia",
        "value": "48° w poziomie, 30° w pionie"
      },
      {
        "name": "Tolerancja ustawienia kodu",
        "value": "Obrót 360°, odchylenie w pionie ±60°, odchylenie w poziomie ±60°"
      },
      {
        "name": "Zasięg odczytu",
        "value": "UPC-A 100%: 4,1–63,2 cm; Code 39 20 mil: 4,1–91,7 cm; Code 128 15 mil: 6,1–70,6 cm; QR 20 mil: 2,8–44,5 cm; Data Matrix 10 mil: 5,3–27,8 cm; PDF417 6,67 mil: 6,3–25,7 cm; PDF417 5 mil: 7,6–20,1 cm; Code 128 5 mil: 5,8–24,9 cm; Code 39 3 mil: 7,6–14,7 cm (zależnie od jakości druku, kontrastu i oświetlenia)"
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
        "value": "NFC (Tap-to-Pair), Scan-to-Connect, Bluetooth Pairing Utility na komputerach mobilnych Zebra, kod parowania adaptera Bluetooth lub stacji STB3678"
      },
      {
        "name": "Połączenie z systemem",
        "value": "Komputery mobilne Zebra (DataWedge); smartfony i tablety z Androidem lub iOS; komputery PC z Windows przez Bluetooth HID albo adapter Bluetooth BT-RS5X6-DNGL-01 na USB (do 7 skanerów)"
      },
      {
        "name": "Spust",
        "value": "W mocowaniu na dłoń (prawa lub lewa ręka), sprzedawanym osobno"
      },
      {
        "name": "Bateria",
        "value": "Li-Ion 480 mAh, wbudowana"
      },
      {
        "name": "Ładowanie",
        "value": "W stacji 2- lub 20-gniazdowej; 0–90% w mniej niż 2,5 h w temperaturze pokojowej; ładowanie w temperaturze 5–40 °C"
      },
      {
        "name": "Sygnalizacja",
        "value": "2 diody RGB z tyłu obudowy; brzęczyk do 85 dBA w odległości 10 cm"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP54 (IEC 60529)"
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
        "value": "0 °C do 50 °C"
      },
      {
        "name": "Temperatura przechowywania",
        "value": "−40 °C do 60 °C"
      },
      {
        "name": "Wilgotność",
        "value": "5–95% bez kondensacji"
      },
      {
        "name": "Wymiary",
        "value": "52 × 35,5 × 14,6 mm (dł. × szer. × wys.)"
      },
      {
        "name": "Masa",
        "value": "31 g"
      },
      {
        "name": "Oprogramowanie",
        "value": "123Scan, Wi-Fi Friendly Mode, DataWedge na komputerach mobilnych Zebra; Device Tracker — licencja opcjonalna"
      },
      {
        "name": "Zgodność z normami",
        "value": "RoHS 2011/65/UE z poprawką 2015/863, REACH SVHC 1907/2006"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Skaner i Regulatory Guide; mocowanie i stację ładującą zamawia się osobno"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy; usługi Zebra OneCare Essential i Select na zapytanie"
      }
    ],
    "applications": [
      "Kompletacja, sortowanie, przyjęcie i uzupełnianie towaru w magazynie",
      "Pakowanie zamówień i obsługa zwrotów",
      "Inwentaryzacja, kompletacja w sklepie i zarządzanie cenami",
      "Realizacja zamówień internetowych i wydawanie zamówień w sklepie",
      "Skanowanie biletów i rezerwacji w hotelarstwie",
      "Zasilanie linii produkcyjnej, produkcja w toku (WIP) i kontrola jakości",
      "Sortowanie, załadunek i rozładunek w transporcie"
    ],
    "variants": [
      {
        "partNumber": "RS21C0-TS00ZWR",
        "name": "RS21C0-TS00ZWR, SE4770, Bluetooth i NFC",
        "attributes": {},
        "priceFrom": 1765.59,
        "availability": "available"
      }
    ],
    "variantAttributeTooltips": {},
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-rs2100-sg-rs2x-hmtra-01",
      "zebra-rs2100-sg-rs2x-hmtla-01",
      "zebra-rs2100-crd-rs2x-2schg-01",
      "zebra-rs2100-crd-rs2x-20schg-01",
      "zebra-rs2100-bt-rs5x6-dngl-01",
      "zebra-rs2100-kt-rs5x6-btdcbl-01",
      "zebra-rs2100-cba-u46-s07zar",
      "zebra-rs2100-sg-rs2x-hmtra-10",
      "zebra-rs2100-sg-rs2x-hmtla-10",
      "zebra-tc201-cbl-tc5x-usbc2a-01",
      "zebra-tc22-tc27-pwr-wua5v12w0eu",
      "zebra-psu-108w",
      "zebra-mc33-dc-cable-382",
      "zebra-tc201-50-16000-220r"
    ],
    "relatedProducts": [
      "m3-wr15",
      "m3-wr10",
      "proglove-leo",
      "proglove-mark-2"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa Zebra RS2100 (PL)",
        "type": "datasheet",
        "url": "/downloads/zebra-rs2100-karta-katalogowa-pl.pdf",
        "size": "346 KB"
      },
      {
        "name": "Instrukcja szybkiego startu Zebra RS2100 (PL)",
        "type": "manual",
        "url": "/downloads/zebra-rs2100-instrukcja-szybkiego-startu-pl.pdf",
        "size": "743 KB"
      },
      {
        "name": "Przewodnik akcesoriów Zebra RS2100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs2100-akcesoria.pdf",
        "size": "2,2 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS2100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs2100-przewodnik-en.pdf",
        "size": "3,3 MB"
      }
    ],
    "faq": [
      {
        "question": "Z jakimi urządzeniami współpracuje Zebra RS2100?",
        "answer": "RS2100 przesyła kody przez Bluetooth do komputerów mobilnych Zebra, smartfonów i tabletów z Androidem lub iOS oraz do komputerów PC. Na komputerach mobilnych Zebra ustawienia skanera i format danych określa aplikacja DataWedge. Skaner łączy się także z bazą Zebra STB3678 podłączoną do komputera."
      },
      {
        "question": "Czy RS2100 działa z iPhone'em i komputerem z Windows?",
        "answer": "Tak. W trybie HID skaner łączy się z iPhone'em, iPadem, urządzeniem z Androidem albo komputerem z Windows jak klawiatura Bluetooth, a kod trafia do aplikacji jako wpisane znaki. Do komputera stacjonarnego można też podłączyć [adapter Bluetooth](/produkt/zebra-rs2100-bt-rs5x6-dngl-01) przez port USB."
      },
      {
        "question": "Ile skanerów RS2100 obsługuje jeden adapter Bluetooth?",
        "answer": "Do siedmiu jednocześnie. Skanery kilku pracowników mogą więc przesyłać kody do jednego komputera, bez terminala dla każdej osoby. Adapter jest dostępny sam ([BT-RS5X6-DNGL-01](/produkt/zebra-rs2100-bt-rs5x6-dngl-01)) albo w zestawie z przewodem USB ([KT-RS5X6-BTDCBL-01](/produkt/zebra-rs2100-kt-rs5x6-btdcbl-01))."
      },
      {
        "question": "Czym ładuje się skaner RS2100?",
        "answer": "Wbudowaną baterię 480 mAh ładuje stacja Zebra: [2-gniazdowa](/produkt/zebra-rs2100-crd-rs2x-2schg-01) albo [20-gniazdowa](/produkt/zebra-rs2100-crd-rs2x-20schg-01). Przed włożeniem do gniazda skaner wyjmuje się z mocowania. Ładowanie od 0 do 90% trwa mniej niż 2,5 godziny w temperaturze pokojowej."
      },
      {
        "question": "Czy RS2100 można nosić na lewej ręce?",
        "answer": "Tak. Skaner jest jeden, a stronę ręki wyznacza mocowanie: dostępne są wersje na prawą i na lewą rękę, po 1 albo po 10 sztuk. Każde mocowanie ma jeden rozmiar, który pasuje na wszystkie dłonie."
      },
      {
        "question": "Czy RS2100 nadaje się do pracy w rękawicach?",
        "answer": "Mocowanie jest przeznaczone do pracy gołą dłonią albo w cienkich rękawiczkach. Grubych rękawic roboczych nie przewidziano. Wnętrze dłoni pozostaje odkryte, więc chwyt towaru nie zmienia się."
      },
      {
        "question": "Co zawiera opakowanie RS2100?",
        "answer": "Skaner i broszurę Regulatory Guide. Skaner jest wysyłany w trybie oszczędzania baterii. Wychodzi z niego po naciśnięciu spustu mocowania albo po włożeniu do stacji. Mocowanie i stację zamawia się osobno."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  }
]

export const zebraRs2100Accessories: Product[] = [
  {
    "id": "zebra-rs2100-sg-rs2x-hmtra-01",
    "slug": "zebra-rs2100-sg-rs2x-hmtra-01",
    "name": "Mocowanie ze spustem Zebra RS2100, prawa ręka, 1 szt.",
    "seoH1": "Mocowanie ze spustem Zebra RS2100, prawa ręka, 1 szt.",
    "seoTitle": "Mocowanie ze spustem Zebra RS2100, prawa ręka, 1 szt. — SG-RS2X-HMTRA-01",
    "seoDescription": "Mocowanie Zebra SG-RS2X-HMTRA-01 na grzbiet prawej dłoni ze spustem do skanera RS2100. Uchwyt na dłoń Zebra RS2100 w jednym rozmiarze, 1 szt.",
    "shortDescription": "Mocowanie Zebra SG-RS2X-HMTRA-01 na grzbiet prawej dłoni ze spustem pod palcem wskazującym do skanera RS2100. Jeden rozmiar, 1 sztuka.",
    "description": "Mocowanie SG-RS2X-HMTRA-01 trzyma skaner Zebra RS2100 na grzbiecie prawej dłoni. Spust skanera znajduje się w mocowaniu, przy palcu wskazującym. Sam skaner nie ma spustu, dlatego każdy RS2100 potrzebuje jednego mocowania.\n\nMocowanie ma pasek na nadgarstek i pasek na palec wskazujący, a wewnętrzna strona dłoni pozostaje odkryta. Występuje w jednym rozmiarze dla wszystkich dłoni. Jest przeznaczone do pracy gołą dłonią lub w cienkich rękawiczkach.\n\nSkaner wsuwa się do gniazda końcem z diodą, a następnie dociska przód, aż zaczepy zamkną się na wycięciach obudowy. Do ładowania skaner wyjmuje się z mocowania. Opakowanie zawiera jedno mocowanie; dziesięć sztuk ma numer [SG-RS2X-HMTRA-10](/produkt/zebra-rs2100-sg-rs2x-hmtra-10), a wersja na lewą rękę numer [SG-RS2X-HMTLA-01](/produkt/zebra-rs2100-sg-rs2x-hmtla-01).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/SG-RS2X-HMTRA-01.png",
      "/images/products/SG-RS2X-HMTRA-01-2.png"
    ],
    "imageDescriptions": [
      "Mocowanie ze spustem Zebra RS2100 na prawą rękę — gniazdo skanera, paski na nadgarstek i palec",
      "Mocowanie Zebra RS2100 na prawej dłoni od strony wnętrza dłoni — pasek na palec i nadgarstek, odkryta dłoń (skaner sprzedawany osobno)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 174.1,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "SG-RS2X-HMTRA-01"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "1"
      },
      {
        "name": "Ręka",
        "value": "Prawa"
      },
      {
        "name": "Spust",
        "value": "Wbudowany, obsługiwany palcem wskazującym"
      },
      {
        "name": "Rozmiar",
        "value": "Jeden, regulowany paskami na nadgarstek i na palec"
      },
      {
        "name": "Rękawice",
        "value": "Tylko gołą dłonią lub w cienkich rękawiczkach"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS2100"
      }
    ],
    "applications": [
      "Noszenie skanera RS2100 na prawej dłoni"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "zebra-rs2100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS2100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs2100-akcesoria.pdf",
        "size": "2,2 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS2100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs2100-przewodnik-en.pdf",
        "size": "3,3 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs2100-sg-rs2x-hmtla-01",
    "slug": "zebra-rs2100-sg-rs2x-hmtla-01",
    "name": "Mocowanie ze spustem Zebra RS2100, lewa ręka, 1 szt.",
    "seoH1": "Mocowanie ze spustem Zebra RS2100, lewa ręka, 1 szt.",
    "seoTitle": "Mocowanie ze spustem Zebra RS2100, lewa ręka, 1 szt. — SG-RS2X-HMTLA-01",
    "seoDescription": "Lewe mocowanie Zebra SG-RS2X-HMTLA-01 ze spustem, do noszenia skanera RS2100 na grzbiecie lewej dłoni. Uchwyt na dłoń Zebra RS2100, 1 szt.",
    "shortDescription": "Lewostronne mocowanie Zebra SG-RS2X-HMTLA-01 z wbudowanym spustem trzyma skaner RS2100 na grzbiecie lewej dłoni. Opakowanie: 1 szt.",
    "description": "SG-RS2X-HMTLA-01 to mocowanie na lewą rękę do skanera Zebra RS2100. Skaner leży na grzbiecie lewej dłoni, a spust w mocowaniu obsługuje lewy palec wskazujący. Skaner RS2100 jest ten sam dla obu rąk; o stronie decyduje wyłącznie mocowanie.\n\nMocowanie zakłada się, przekładając dłoń przez pasek na nadgarstek, a palec wskazujący przez pasek na palec. Po dociągnięciu pasek na palec leży u nasady palca. Pasuje na każdą dłoń. Można je nosić na gołej dłoni albo na cienkiej rękawiczce.\n\nW opakowaniu jest jedno mocowanie. Dziesięć sztuk na lewą rękę ma numer [SG-RS2X-HMTLA-10](/produkt/zebra-rs2100-sg-rs2x-hmtla-10), a pojedyncze mocowanie na prawą rękę numer [SG-RS2X-HMTRA-01](/produkt/zebra-rs2100-sg-rs2x-hmtra-01).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/SG-RS2X-HMTLA-01.png"
    ],
    "imageDescriptions": [
      "Mocowanie ze spustem Zebra RS2100 na lewą rękę — gniazdo skanera, paski na nadgarstek i palec (zdjęcie poglądowe)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "unavailable",
    "priceFrom": 174.9,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "SG-RS2X-HMTLA-01"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "1"
      },
      {
        "name": "Ręka",
        "value": "Lewa"
      },
      {
        "name": "Spust",
        "value": "Wbudowany, obsługiwany palcem wskazującym"
      },
      {
        "name": "Rozmiar",
        "value": "Jeden, regulowany paskami na nadgarstek i na palec"
      },
      {
        "name": "Rękawice",
        "value": "Tylko gołą dłonią lub w cienkich rękawiczkach"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS2100"
      }
    ],
    "applications": [
      "Noszenie skanera RS2100 na lewej dłoni"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "zebra-rs2100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS2100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs2100-akcesoria.pdf",
        "size": "2,2 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS2100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs2100-przewodnik-en.pdf",
        "size": "3,3 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs2100-sg-rs2x-hmtra-10",
    "slug": "zebra-rs2100-sg-rs2x-hmtra-10",
    "name": "Mocowanie ze spustem Zebra RS2100, prawa ręka, 10 szt.",
    "seoH1": "Mocowanie ze spustem Zebra RS2100, prawa ręka, 10 szt.",
    "seoTitle": "Mocowanie ze spustem Zebra RS2100, prawa ręka, 10 szt. — SG-RS2X-HMTRA-10",
    "seoDescription": "Zestaw 10 mocowań Zebra SG-RS2X-HMTRA-10 na prawą dłoń ze spustem do skanerów RS2100. Uchwyty na dłoń Zebra RS2100 dla zespołu.",
    "shortDescription": "Pakiet 10 mocowań na prawą rękę z wbudowanym spustem do skanerów Zebra RS2100. PN SG-RS2X-HMTRA-10.",
    "description": "Opakowanie SG-RS2X-HMTRA-10 zawiera dziesięć mocowań na prawą rękę do skanerów Zebra RS2100. Pakiet pozwala wyposażyć dziesięć skanerów jednym zamówieniem.\n\nKażde mocowanie ma wbudowany spust pod palcem wskazującym oraz dwa regulowane paski: nadgarstkowy i palcowy. Jeden rozmiar pasuje na każdą dłoń. Mocowanie nosi się na gołej dłoni lub na cienkiej rękawiczce, a wnętrze dłoni zostaje wolne.\n\nPojedyncze mocowanie na prawą rękę ma numer [SG-RS2X-HMTRA-01](/produkt/zebra-rs2100-sg-rs2x-hmtra-01). Dziesięć mocowań na lewą rękę to [SG-RS2X-HMTLA-10](/produkt/zebra-rs2100-sg-rs2x-hmtla-10).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/SG-RS2X-HMTRA-01.png",
      "/images/products/SG-RS2X-HMTRA-01-2.png"
    ],
    "imageDescriptions": [
      "Mocowanie ze spustem Zebra RS2100 na prawą rękę — jedno z dziesięciu w opakowaniu",
      "Mocowanie Zebra RS2100 założone na prawą dłoń, widok od strony wnętrza dłoni (skaner sprzedawany osobno)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "unavailable",
    "priceFrom": 1709.91,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "SG-RS2X-HMTRA-10"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "10"
      },
      {
        "name": "Ręka",
        "value": "Prawa"
      },
      {
        "name": "Spust",
        "value": "Wbudowany, obsługiwany palcem wskazującym"
      },
      {
        "name": "Rozmiar",
        "value": "Jeden, regulowany paskami na nadgarstek i na palec"
      },
      {
        "name": "Rękawice",
        "value": "Tylko gołą dłonią lub w cienkich rękawiczkach"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS2100"
      }
    ],
    "applications": [
      "Wyposażenie zespołu w skanery RS2100 noszone na prawej dłoni"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "zebra-rs2100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS2100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs2100-akcesoria.pdf",
        "size": "2,2 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS2100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs2100-przewodnik-en.pdf",
        "size": "3,3 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs2100-sg-rs2x-hmtla-10",
    "slug": "zebra-rs2100-sg-rs2x-hmtla-10",
    "name": "Mocowanie ze spustem Zebra RS2100, lewa ręka, 10 szt.",
    "seoH1": "Mocowanie ze spustem Zebra RS2100, lewa ręka, 10 szt.",
    "seoTitle": "Mocowanie ze spustem Zebra RS2100, lewa ręka, 10 szt. — SG-RS2X-HMTLA-10",
    "seoDescription": "Dziesięć lewych mocowań Zebra SG-RS2X-HMTLA-10 z wbudowanym spustem dla skanerów RS2100. Lewe uchwyty na dłoń Zebra RS2100.",
    "shortDescription": "Dziesięć lewych mocowań Zebra ze spustem do skanerów noszonych RS2100 w jednym opakowaniu. PN SG-RS2X-HMTLA-10.",
    "description": "W opakowaniu SG-RS2X-HMTLA-10 jest dziesięć mocowań do skanerów Zebra RS2100 noszonych na lewej ręce. Każde mocowanie ma własny spust, ponieważ skaner RS2100 nie ma przycisku odczytu na obudowie.\n\nPaski na nadgarstek i na palec wskazujący regulują dopasowanie, dlatego jeden rozmiar obsługuje wszystkie dłonie. Mocowanie zostawia odkryte wnętrze dłoni. Przewidziano je do pracy bez rękawic albo w cienkich rękawiczkach.\n\nJedno mocowanie na lewą rękę to [SG-RS2X-HMTLA-01](/produkt/zebra-rs2100-sg-rs2x-hmtla-01). Pakiet dziesięciu mocowań na prawą rękę ma numer [SG-RS2X-HMTRA-10](/produkt/zebra-rs2100-sg-rs2x-hmtra-10).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/SG-RS2X-HMTLA-01.png"
    ],
    "imageDescriptions": [
      "Mocowanie ze spustem Zebra RS2100 na lewą rękę — jedno z dziesięciu w opakowaniu (zdjęcie poglądowe)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 1644.14,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "SG-RS2X-HMTLA-10"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "10"
      },
      {
        "name": "Ręka",
        "value": "Lewa"
      },
      {
        "name": "Spust",
        "value": "Wbudowany, obsługiwany palcem wskazującym"
      },
      {
        "name": "Rozmiar",
        "value": "Jeden, regulowany paskami na nadgarstek i na palec"
      },
      {
        "name": "Rękawice",
        "value": "Tylko gołą dłonią lub w cienkich rękawiczkach"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS2100"
      }
    ],
    "applications": [
      "Wyposażenie zespołu w skanery RS2100 noszone na lewej dłoni"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "zebra-rs2100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS2100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs2100-akcesoria.pdf",
        "size": "2,2 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS2100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs2100-przewodnik-en.pdf",
        "size": "3,3 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs2100-crd-rs2x-2schg-01",
    "slug": "zebra-rs2100-crd-rs2x-2schg-01",
    "name": "Stacja ładująca Zebra RS2100 2-gniazdowa",
    "seoH1": "Stacja ładująca Zebra RS2100 2-gniazdowa",
    "seoTitle": "Stacja ładująca Zebra RS2100 2-gniazdowa — CRD-RS2X-2SCHG-01",
    "seoDescription": "Stacja ładująca Zebra CRD-RS2X-2SCHG-01 na dwa skanery noszone RS2100, zasilanie 5 V z zasilacza USB. Ładowarka Zebra RS2100 na jedno stanowisko.",
    "shortDescription": "Zebra CRD-RS2X-2SCHG-01 — stacja na dwa skanery noszone RS2100, tylko ładowanie, zasilanie 5 V przez przewód USB-C. PN CRD-RS2X-2SCHG-01.",
    "description": "Stacja CRD-RS2X-2SCHG-01 ładuje jednocześnie dwa skanery Zebra RS2100. Nie przesyła danych: skaner w gnieździe tylko się ładuje. Bateria skanera ładuje się od 0 do 90% w mniej niż 2,5 godziny w temperaturze pokojowej, a dioda skanera pokazuje stan ładowania.\n\nPrzed ładowaniem skaner wyjmuje się z mocowania i wkłada do gniazda tak, aby styki skanera trafiły na styki stacji. Skaner dociska się, aż zatrzaski zaskoczą. Pierwsze włożenie nowego skanera do stacji wyłącza tryb oszczędzania baterii, w którym skaner jest wysyłany.\n\nStacja ma wymiary 111 × 57 × 40 mm i waży 75 g. Wymaga zasilania 5 V, 1 A. Ładowanie odbywa się w temperaturze 5–40 °C; powyżej 33 °C trwa dłużej. Do większej liczby skanerów służy [stacja 20-gniazdowa](/produkt/zebra-rs2100-crd-rs2x-20schg-01).\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Przewód USB-A / USB-C 1 m Zebra (CBL-TC5X-USBC2A-01)](/produkt/zebra-tc201-cbl-tc5x-usbc2a-01)\n- [Zasilacz USB-A Zebra 12 W EU (PWR-WUA5V12W0EU)](/produkt/zebra-tc22-tc27-pwr-wua5v12w0eu)\n\nDokup tylko te elementy, których jeszcze nie masz.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CRD-RS2X-2SCHG-01.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca Zebra RS2100 2-gniazdowa z dwoma skanerami w gniazdach (skanery nie są dołączone)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 266.76,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "CRD-RS2X-2SCHG-01"
      },
      {
        "name": "Liczba gniazd",
        "value": "2 skanery RS2100"
      },
      {
        "name": "Funkcja",
        "value": "Tylko ładowanie, bez komunikacji"
      },
      {
        "name": "Zasilanie",
        "value": "5 V, 1 A; przewód CBL-TC5X-USBC2A-01 i zasilacz PWR-WUA5V12W0EU sprzedawane osobno"
      },
      {
        "name": "Wymiary",
        "value": "111 × 57 × 40 mm (szer. × gł. × wys.)"
      },
      {
        "name": "Masa",
        "value": "75 g"
      },
      {
        "name": "Temperatura pracy",
        "value": "0 °C do 50 °C"
      },
      {
        "name": "Temperatura ładowania",
        "value": "5 °C do 40 °C (od 33 °C ładowanie wolniejsze)"
      },
      {
        "name": "Temperatura przechowywania",
        "value": "−40 °C do 60 °C"
      },
      {
        "name": "Wilgotność",
        "value": "0–95% bez kondensacji"
      },
      {
        "name": "Odporność na upadki",
        "value": "76,2 cm na beton w temperaturze pokojowej"
      },
      {
        "name": "ESD",
        "value": "±20 kV w powietrzu, ±10 kV kontaktowo"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS2100"
      }
    ],
    "applications": [
      "Ładowanie dwóch skanerów RS2100 na stanowisku pracy"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-tc201-cbl-tc5x-usbc2a-01",
      "zebra-tc22-tc27-pwr-wua5v12w0eu"
    ],
    "relatedProducts": [
      "zebra-rs2100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS2100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs2100-akcesoria.pdf",
        "size": "2,2 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS2100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs2100-przewodnik-en.pdf",
        "size": "3,3 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs2100-crd-rs2x-20schg-01",
    "slug": "zebra-rs2100-crd-rs2x-20schg-01",
    "name": "Stacja ładująca Zebra RS2100 20-gniazdowa",
    "seoH1": "Stacja ładująca Zebra RS2100 20-gniazdowa",
    "seoTitle": "Stacja ładująca Zebra RS2100 20-gniazdowa — CRD-RS2X-20SCHG-01",
    "seoDescription": "Stacja ładująca Zebra CRD-RS2X-20SCHG-01 na 20 skanerów noszonych RS2100, zasilanie 12 V z zasilacza 108 W. Ładowarka wielogniazdowa Zebra RS2100.",
    "shortDescription": "Zebra CRD-RS2X-20SCHG-01 — stacja ładująca do 20 skanerów noszonych RS2100 jednocześnie, zasilanie 12 V z zasilacza 108 W. PN CRD-RS2X-20SCHG-01.",
    "description": "Stacja CRD-RS2X-20SCHG-01 ładuje jednocześnie do 20 skanerów Zebra RS2100. Służy tylko do ładowania. Każdy skaner przed włożeniem do gniazda wyjmuje się z mocowania, a dioda zasilania na obudowie pokazuje, że stacja jest pod napięciem.\n\nWymiary stacji wynoszą 489 × 147,7 × 81,6 mm (szer. × gł. × wys.), a masa 2 kg. Stacja pracuje w temperaturze 0–45 °C, a skanery ładują się w niej w temperaturze 5–40 °C.\n\nStację zasila napięcie 12 V, 9 A. Tor zasilania składa się z trzech elementów: zasilacza 108 W, przewodu DC między zasilaczem a stacją oraz uziemionego przewodu sieciowego. Do jednego lub dwóch skanerów wystarczy [stacja 2-gniazdowa](/produkt/zebra-rs2100-crd-rs2x-2schg-01).\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy Zebra 108 W (PWR-BGA12V108W0WW)](/produkt/zebra-zasilacz-108w)\n- [Przewód DC Zebra z uchwytem zwalniającym (CBL-DC-382A1-01)](/produkt/zebra-mc33-dc-cable-382)\n- [Przewód sieciowy Zebra — Europa, C13 (50-16000-220R)](/produkt/zebra-tc201-50-16000-220r)\n\nDokup tylko te elementy, których jeszcze nie masz.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [],
    "imageDescriptions": [],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 2334.48,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "CRD-RS2X-20SCHG-01"
      },
      {
        "name": "Liczba gniazd",
        "value": "20 skanerów RS2100"
      },
      {
        "name": "Funkcja",
        "value": "Tylko ładowanie"
      },
      {
        "name": "Zasilanie",
        "value": "12 V, 9 A; zasilacz PWR-BGA12V108W0WW, przewód DC CBL-DC-382A1-01 i przewód sieciowy 50-16000-220R sprzedawane osobno"
      },
      {
        "name": "Wymiary",
        "value": "489 × 147,7 × 81,6 mm (szer. × gł. × wys.)"
      },
      {
        "name": "Masa",
        "value": "2000 g"
      },
      {
        "name": "Temperatura pracy",
        "value": "0 °C do 45 °C"
      },
      {
        "name": "Temperatura ładowania",
        "value": "5 °C do 40 °C"
      },
      {
        "name": "Temperatura przechowywania",
        "value": "−40 °C do 60 °C"
      },
      {
        "name": "Wilgotność",
        "value": "0–95% bez kondensacji"
      },
      {
        "name": "Odporność na upadki",
        "value": "76,2 cm na beton w temperaturze pokojowej"
      },
      {
        "name": "ESD",
        "value": "±20 kV w powietrzu, ±10 kV kontaktowo"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS2100"
      }
    ],
    "applications": [
      "Ładowanie skanerów RS2100 całego zespołu w jednym miejscu"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-psu-108w",
      "zebra-mc33-dc-cable-382",
      "zebra-tc201-50-16000-220r"
    ],
    "relatedProducts": [
      "zebra-rs2100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS2100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs2100-akcesoria.pdf",
        "size": "2,2 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS2100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs2100-przewodnik-en.pdf",
        "size": "3,3 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs2100-bt-rs5x6-dngl-01",
    "slug": "zebra-rs2100-bt-rs5x6-dngl-01",
    "name": "Adapter Bluetooth Zebra do skanerów RS2100",
    "seoH1": "Adapter Bluetooth Zebra do skanerów RS2100",
    "seoTitle": "Adapter Bluetooth Zebra do skanerów RS2100 — BT-RS5X6-DNGL-01",
    "seoDescription": "Adapter Bluetooth Zebra BT-RS5X6-DNGL-01 do komputera PC przez USB: do 7 skanerów noszonych RS2100, Bluetooth 5.2. Przewód USB sprzedawany osobno.",
    "shortDescription": "Zebra BT-RS5X6-DNGL-01 — adapter Bluetooth 5.2 podłączany przez USB do komputera; łączy do 7 skanerów noszonych RS2100. Przewód USB sprzedawany osobno.",
    "description": "Adapter BT-RS5X6-DNGL-01 łączy skanery noszone Zebra RS2100 z komputerem stacjonarnym przez port USB. Obsługuje do siedmiu skanerów RS2100 jednocześnie. Pracownicy kilku stanowisk, np. pakowania, mogą więc przesyłać kody do jednego komputera z dużym ekranem.\n\nSkaner paruje się z adapterem, skanując kod parowania na obudowie adaptera. Skaner musi mieć wtedy ustawienia fabryczne. Po połączeniu dioda skanera gaśnie, a skaner potwierdza parowanie sygnałem dźwiękowym. Adapter można położyć na poziomej powierzchni albo zamocować pionowo.\n\nAdapter obsługuje Bluetooth 5.2 klasy 1 i 2 z profilami SPP, HID i SSI. Ma wymiary 113 × 60,1 × 31 mm, waży 98 g i pobiera 5 V DC, 200 mA. Pracuje w temperaturze od −20 do 50 °C.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Przewód USB Zebra do adaptera Bluetooth (CBA-U46-S07ZAR)](/produkt/zebra-rs2100-cba-u46-s07zar)\n\nAdapter z przewodem w jednym opakowaniu to zestaw [KT-RS5X6-BTDCBL-01](/produkt/zebra-rs2100-kt-rs5x6-btdcbl-01).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/BT-RS5X6-DNGL-01.png"
    ],
    "imageDescriptions": [
      "Adapter Bluetooth Zebra BT-RS5X6-DNGL-01 — zielona obudowa z kodem parowania i gniazdem przewodu"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 617.49,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "BT-RS5X6-DNGL-01"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Adapter; przewód USB CBA-U46-S07ZAR sprzedawany osobno"
      },
      {
        "name": "Łączność",
        "value": "Bluetooth 5.2, klasa 1 i 2; profile SPP, HID, SSI"
      },
      {
        "name": "Liczba skanerów",
        "value": "Do 7 skanerów RS2100 jednocześnie"
      },
      {
        "name": "Połączenie z komputerem",
        "value": "USB"
      },
      {
        "name": "Zasilanie",
        "value": "5 V DC, 200 mA"
      },
      {
        "name": "Wymiary",
        "value": "113 × 60,1 × 31 mm (wys. × szer. × gł.)"
      },
      {
        "name": "Masa",
        "value": "98 g"
      },
      {
        "name": "Temperatura pracy",
        "value": "−20 °C do 50 °C"
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
        "name": "Montaż",
        "value": "Na poziomej powierzchni lub pionowo"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS2100"
      }
    ],
    "applications": [
      "Skanowanie do aplikacji na komputerze przy stanowisku pakowania"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-rs2100-cba-u46-s07zar",
      "zebra-rs2100-kt-rs5x6-btdcbl-01"
    ],
    "relatedProducts": [
      "zebra-rs2100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS2100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs2100-akcesoria.pdf",
        "size": "2,2 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS2100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs2100-przewodnik-en.pdf",
        "size": "3,3 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs2100-kt-rs5x6-btdcbl-01",
    "slug": "zebra-rs2100-kt-rs5x6-btdcbl-01",
    "name": "Zestaw adaptera Bluetooth Zebra z przewodem USB",
    "seoH1": "Zestaw adaptera Bluetooth Zebra z przewodem USB",
    "seoTitle": "Zestaw adaptera Bluetooth Zebra z przewodem USB — KT-RS5X6-BTDCBL-01",
    "seoDescription": "Zestaw Zebra KT-RS5X6-BTDCBL-01: adapter Bluetooth i przewód USB CBA-U46-S07ZAR do połączenia do 7 skanerów RS2100 z komputerem PC.",
    "shortDescription": "Zebra KT-RS5X6-BTDCBL-01 — adapter Bluetooth z przewodem USB w jednym opakowaniu, do połączenia skanerów noszonych RS2100 z komputerem. PN KT-RS5X6-BTDCBL-01.",
    "description": "Zestaw KT-RS5X6-BTDCBL-01 zawiera adapter Bluetooth i przewód USB CBA-U46-S07ZAR. Po podłączeniu do portu USB komputera adapter odbiera kody z maksymalnie siedmiu skanerów Zebra RS2100.\n\nKażdy skaner łączy się z adapterem po zeskanowaniu kodu parowania z obudowy adaptera. Adapter pracuje w standardzie Bluetooth 5.2, ma obudowę 113 × 60,1 × 31 mm i może stać na blacie albo być zamocowany pionowo.\n\nZestaw nie wymaga dokupowania żadnego przewodu. Sam adapter, bez przewodu, ma numer [BT-RS5X6-DNGL-01](/produkt/zebra-rs2100-bt-rs5x6-dngl-01); ten numer wybiera się, gdy przewód CBA-U46-S07ZAR jest już na miejscu.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/KT-RS5X6-BTDCBL-01.png"
    ],
    "imageDescriptions": [
      "Zestaw Zebra KT-RS5X6-BTDCBL-01 — adapter Bluetooth i zwinięty przewód USB"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 761.06,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "KT-RS5X6-BTDCBL-01"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Adapter Bluetooth BT-RS5X6-DNGL-01, przewód USB CBA-U46-S07ZAR"
      },
      {
        "name": "Łączność",
        "value": "Bluetooth 5.2, klasa 1 i 2; profile SPP, HID, SSI"
      },
      {
        "name": "Liczba skanerów",
        "value": "Do 7 skanerów RS2100 jednocześnie"
      },
      {
        "name": "Połączenie z komputerem",
        "value": "USB"
      },
      {
        "name": "Zasilanie",
        "value": "5 V DC, 200 mA"
      },
      {
        "name": "Wymiary",
        "value": "113 × 60,1 × 31 mm (wys. × szer. × gł.)"
      },
      {
        "name": "Masa",
        "value": "98 g"
      },
      {
        "name": "Temperatura pracy",
        "value": "−20 °C do 50 °C"
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
        "name": "Montaż",
        "value": "Na poziomej powierzchni lub pionowo"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS2100"
      }
    ],
    "applications": [
      "Pierwsze podłączenie skanerów RS2100 do komputera"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-rs2100-bt-rs5x6-dngl-01",
      "zebra-rs2100-cba-u46-s07zar"
    ],
    "relatedProducts": [
      "zebra-rs2100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS2100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs2100-akcesoria.pdf",
        "size": "2,2 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS2100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs2100-przewodnik-en.pdf",
        "size": "3,3 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs2100-cba-u46-s07zar",
    "slug": "zebra-rs2100-cba-u46-s07zar",
    "name": "Przewód USB Zebra do adaptera Bluetooth",
    "seoH1": "Przewód USB Zebra do adaptera Bluetooth",
    "seoTitle": "Przewód USB Zebra do adaptera Bluetooth — CBA-U46-S07ZAR",
    "seoDescription": "Przewód USB Zebra CBA-U46-S07ZAR do adaptera Bluetooth BT-RS5X6-DNGL-01, który łączy skanery noszone RS2100 z komputerem PC. Kabel USB Zebra.",
    "shortDescription": "Zebra CBA-U46-S07ZAR — przewód USB do adaptera Bluetooth BT-RS5X6-DNGL-01, który łączy skanery noszone RS2100 z komputerem PC.",
    "description": "Przewód CBA-U46-S07ZAR podłącza adapter Bluetooth Zebra BT-RS5X6-DNGL-01 do portu USB komputera. Adapter jest sprzedawany bez przewodu, dlatego przy zakupie samego adaptera potrzebny jest ten przewód.\n\nPrzewód jest też częścią zestawu [KT-RS5X6-BTDCBL-01](/produkt/zebra-rs2100-kt-rs5x6-btdcbl-01), który zawiera adapter i przewód. Przy zakupie zestawu nie trzeba kupować przewodu osobno.\n\nAdapter podłączony tym przewodem obsługuje do siedmiu skanerów [Zebra RS2100](/produkt/zebra-rs2100).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "kable-do-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CBA-U46-S07ZAR.png"
    ],
    "imageDescriptions": [
      "Przewód USB Zebra CBA-U46-S07ZAR — czarny zwinięty przewód z wtykiem USB-A"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 112.95,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "CBA-U46-S07ZAR"
      },
      {
        "name": "Przeznaczenie",
        "value": "Adapter Bluetooth Zebra BT-RS5X6-DNGL-01"
      },
      {
        "name": "Połączenie z komputerem",
        "value": "USB"
      },
      {
        "name": "Kompatybilność",
        "value": "Adapter BT-RS5X6-DNGL-01 do skanerów Zebra RS2100"
      }
    ],
    "applications": [
      "Podłączenie adaptera Bluetooth do komputera"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-rs2100-bt-rs5x6-dngl-01",
      "zebra-rs2100-kt-rs5x6-btdcbl-01"
    ],
    "relatedProducts": [
      "zebra-rs2100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS2100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs2100-akcesoria.pdf",
        "size": "2,2 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  }
]
