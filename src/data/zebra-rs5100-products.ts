import type { Product } from './products'

// Skaner noszony Zebra RS5100 (24.10.2026), 7 konfiguracji RS51C0 (Bluetooth 5.2) jako warianty. Ceny i stany aktualizuje /api/stock; priceFrom to wartość startowa.
// Wspólne akcesoria RS5100 / RS6100 (stacja 2-gniazdowa, baterie, ładowarki baterii, spusty, mocowania) są w plikach RS6100;
// tu są tylko stacje 4- i 20-gniazdowe, które mają osobne wersje dla RS5100. Źródła i decyzje: docs/catalog/zebra-rs5100-2026-10-24/audit.md.
export const zebraRs5100Products: Product[] = [
  {
    "id": "zebra-rs5100",
    "slug": "zebra-rs5100",
    "name": "Zebra RS5100",
    "seoH1": "Zebra RS5100",
    "seoTitle": "Zebra RS5100 — skaner pierścieniowy 1D/2D Bluetooth, imager SE4710 lub SE4770",
    "seoDescription": "Skaner pierścieniowy Zebra RS5100: 70 g, imager SE4710 lub SE4770, Bluetooth 5.2 z NFC, IP65, bateria na 12 h i 14 400 skanów. Skaner noszony Zebra RS5100, skaner na palec Zebra, RS5100 Zebra. PN: RS51C0-LBSNWR, RS51C0-LESNWR, RS51C0-TBSNWR, RS51C0-TESNWR, RS51C0-TBDNWR, RS51C0-TEDNWR, RS51C0-TBBHWR.",
    "shortDescription": "Zebra RS5100 — skaner pierścieniowy 1D/2D na palec wskazujący, 70 g: imager SE4710 lub SE4770, Bluetooth 5.2 z parowaniem NFC, obudowa IP65, wymienna bateria na 12 godzin pracy.",
    "description": "Zebra RS5100 to pierścieniowy czytnik kodów 1D i 2D zakładany na palec wskazujący. Mierzy 61 × 28 × 21 mm i waży 70 g. Niski profil obudowy ułatwia sięganie do ciasnych miejsc, a kody trafiają przez Bluetooth 5.2 bez przewodu do urządzenia.\n\nSkaner jest dostępny z jednym z dwóch silników. SE4710 oświetla kod na czerwono i celuje pomarańczowym punktem LED. SE4770 ma migawkę globalną i dobrze widoczny czerwony celownik laserowy w kształcie krzyża. Oba silniki odczytują kody uszkodzone, zabrudzone i słabo wydrukowane.\n\nBateria standardowa PowerPrecision+ daje ponad pełną zmianę: 12 godzin pracy i 14 400 skanów na jednym ładowaniu. Bateria rozszerzona służy do dłuższych zmian i do pracy w chłodzie, od −20 °C. Rozładowaną baterię wymienia się na naładowaną, a skaner zostaje na palcu pracownika.\n\nZespół spustu jest zaprojektowany na miliony naciśnięć i zawiera styki ładowania. Wymienia się go na miejscu, bez wysyłki skanera do serwisu. Obudowa ma szczelność IP65 i jest odporna na wielokrotne upadki na beton z 1,8 m.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane dla skanera: ładowanie (jedno z) — sprzedawane osobno**\n\n- [Stacja ładująca Zebra RS5100 / RS6100 2-gniazdowa (CRD-RS5X6-2SCHG-01)](/produkt/zebra-rs6100-crd-rs5x6-2schg-01)\n- [Zestaw stacji 2-gniazdowej Zebra RS5100 / RS6100 z zasilaczem (KT-RS5X6-2SCPWR-01)](/produkt/zebra-rs6100-kt-rs5x6-2scpwr-01)\n- [Stacja ładująca Zebra RS5100 4-gniazdowa (CRD-RS51-4SCHG-01)](/produkt/zebra-rs5100-crd-rs51-4schg-01)\n- [Stacja ładująca Zebra RS5100 20-gniazdowa (CRD-RS51-20SCHG-01)](/produkt/zebra-rs5100-crd-rs51-20schg-01)\n\nBateria z zestawu ładuje się w skanerze, gdy skaner stoi w jednej z tych stacji. Dokup tylko te elementy, których jeszcze nie masz.\n\n## Dobór i montaż\n\n- Wersje z literą L po RS51C0- mają silnik SE4710, a wersje z literą T — silnik SE4770.\n\n- Wersja RS51C0-TBBHWR ma mocowanie na grzbiet dłoni. Inne mocowania, spusty i smycz ze spustem zamawia się osobno.\n\n- Zapasowe baterie ładuje [ładowarka 8 baterii](/produkt/zebra-rs6100-sac-rs51-8schg-01) albo [ładowarka 40 baterii](/produkt/zebra-rs6100-sac-rs51-40schg-01).",
    "categoryId": "skanery-kodow-kreskowych",
    "subcategoryIds": [
      "skanery-pierscieniowe"
    ],
    "manufacturerId": "zebra",
    "sameAs": "https://www.zebra.com/pl/pl/products/mobile-computers/wearable-computers/rs5100.html",
    "priceFrom": 3200.65,
    "availability": "available",
    "images": [
      "/images/products/RS51C0-LBSNWR.png",
      "/images/products/RS51C0-LBSNWR-2.png",
      "/images/products/RS51C0-LBSNWR-3.png",
      "/images/products/RS51C0-LBSNWR-4.png"
    ],
    "imageDescriptions": [
      "Zebra RS5100 z pojedynczym spustem — widok z przodu, okno skanera i pomarańczowy przycisk spustu",
      "Zebra RS5100 z pojedynczym spustem — widok z tyłu, diody RGB i pasek na palec z metalową klamrą",
      "Zebra RS5100 z podwójnym spustem — widok z przodu, przycisk spustu z boku",
      "Zebra RS5100 z pojedynczym spustem i nylonowym paskiem na palec — zdjęcie wersji RS51C0-TBSNWR z silnikiem SE4770"
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
        "value": "Imager 1D/2D SE4710 lub SE4770/SR560 (zależnie od wersji), matryca megapikselowa, oprogramowanie PRZM Intelligent Imaging"
      },
      {
        "name": "Rozdzielczość optyczna",
        "value": "1280 × 960 pikseli"
      },
      {
        "name": "Celownik",
        "value": "SE4710: punkt LED 610 nm; SE4770: krzyż laserowy 655 nm"
      },
      {
        "name": "Oświetlenie",
        "value": "1 dioda LED Hyper Red 660 nm"
      },
      {
        "name": "Pole widzenia",
        "value": "SE4710: 42° w poziomie, 28° w pionie; SE4770: 48° w poziomie, 30° w pionie"
      },
      {
        "name": "Tolerancja ustawienia kodu",
        "value": "Obrót 360°, odchylenie w pionie ±60°, odchylenie w poziomie ±60°"
      },
      {
        "name": "Zasięg odczytu SE4710",
        "value": "Code 39 4 mil: 8,4–22,4 cm; Code 128 5 mil: 7,1–20,8 cm; Code 39 5 mil: 5,08–34,3 cm; PDF417 5 mil: 7,9–21,3 cm; Data Matrix 10 mil: 7,4–25,7 cm; UPC-A 100%: 4,62–66,0 cm; Code 39 20 mil: 5,08–76,2 cm. Wartości typowe; dla UPC-A 100% i Code 39 20 mil najmniejszą odległość ogranicza pole widzenia"
      },
      {
        "name": "Zasięg odczytu SE4770",
        "value": "Code 39 3 mil: 7,6–14,7 cm; Code 128 5 mil: 5,8–24,9 cm; PDF417 5 mil: 7,6–20,1 cm; PDF417 6,67 mil: 6,4–25,7 cm; Data Matrix 10 mil: 5,3–27,9 cm; UPC-A 100%: 4,1–63,2 cm; Code 128 15 mil: 6,1–70,6 cm; Code 39 20 mil: 4,1–91,7 cm; QR 20 mil: 2,8–44,5 cm. Wartości typowe"
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
        "value": "Bluetooth 5.2 (sprzęt RS51C0), klasa 1 i 2, z Bluetooth Low Energy; profile SPP, HID, SDAP"
      },
      {
        "name": "Parowanie",
        "value": "NFC (Tap to Pair) z urządzeniami Zebra z NFC, np. WT6300 i TC52; Bluetooth Pairing Utility na komputerach mobilnych Zebra; kod parowania adaptera Bluetooth BT-RS5X6-DNGL-01"
      },
      {
        "name": "Połączenie z systemem",
        "value": "Komputery mobilne Zebra (noszone, ręczne, pokładowe); smartfony, tablety i komputery PC z Bluetooth; adapter Bluetooth na USB do 7 skanerów"
      },
      {
        "name": "Sposób noszenia",
        "value": "Pojedynczy spust na palec, podwójny spust na palec, mocowanie na grzbiet dłoni, mocowanie Enterprise Hand Mount, smycz ze spustem; mocowania spoza konfiguracji sprzedawane osobno"
      },
      {
        "name": "Spust",
        "value": "Oburęczny, wymienny zespół spustu ze stykami ładowania; pojedynczy spust obraca się na lewą lub prawą rękę, podwójny pozwala zmieniać rękę w trakcie pracy; opcjonalny spust podwójny z wibracją lub z portem USB-C"
      },
      {
        "name": "Bateria",
        "value": "Wymienna Li-Ion PowerPrecision+: standardowa 480 mAh (12 h pracy i 14 400 skanów na jednym ładowaniu) lub rozszerzona 735 mAh (zależnie od wersji)"
      },
      {
        "name": "Ładowanie",
        "value": "Skaner z baterią: stacja 2-, 4- lub 20-gniazdowa; zapasowe baterie: ładowarka 8 lub 40 baterii; bateria standardowa 0–90% w mniej niż 2,5 h w temperaturze pokojowej, w 5–10 °C w mniej niż 5 h; ładowanie w temperaturze 5–40 °C"
      },
      {
        "name": "Sygnalizacja",
        "value": "4 programowalne diody RGB z tyłu obudowy; brzęczyk do 85 dBA w odległości 10 cm"
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
        "value": "Bateria standardowa 480 mAh: 0 °C do 50 °C; bateria rozszerzona 735 mAh: −20 °C do 50 °C"
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
        "value": "61 × 28 × 21 mm (dł. × szer. × gł.)"
      },
      {
        "name": "Masa",
        "value": "70 g"
      },
      {
        "name": "Oprogramowanie",
        "value": "123Scan, Scanner SDK (Windows, Android, iOS), PowerPrecision Console"
      },
      {
        "name": "Zgodność z normami",
        "value": "RoHS 2011/65/UE z poprawką 2015/863, REACH SVHC 1907/2006"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Skaner ze spustem lub mocowaniem według konfiguracji, bateria, Regulatory Guide, opcjonalna śruba mocowania spustu; stację ładującą zamawia się osobno"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy; usługi Zebra OneCare Essential i Select na zapytanie"
      }
    ],
    "applications": [
      "Kompletacja, sortowanie, rozlokowanie i pakowanie w magazynie i centrum dystrybucji",
      "Sortowanie, kompletacja, załadunek pojazdów, wysyłka i przyjęcie towaru w transporcie i logistyce",
      "Zarządzanie zapasami, uzupełnianie, sortowanie, montaż i kontrola wyrobów gotowych w produkcji",
      "Wydawanie zamówień internetowych w sklepie (click and collect), inwentaryzacja i przeceny w handlu",
      "Rozliczanie tras i weryfikacja przesyłek w serwisie terenowym"
    ],
    "variants": [
      {
        "partNumber": "RS51C0-LBSNWR",
        "name": "RS51C0-LBSNWR, SE4710, pojedynczy spust, bateria standardowa 480 mAh",
        "attributes": {
          "Silnik": "SE4710",
          "Mocowanie": "Pojedynczy spust",
          "Bateria": "Standardowa 480 mAh"
        },
        "priceFrom": 3200.65,
        "availability": "available"
      },
      {
        "partNumber": "RS51C0-LESNWR",
        "name": "RS51C0-LESNWR, SE4710, pojedynczy spust, bateria rozszerzona 735 mAh",
        "attributes": {
          "Silnik": "SE4710",
          "Mocowanie": "Pojedynczy spust",
          "Bateria": "Rozszerzona 735 mAh"
        },
        "priceFrom": 3279.05,
        "availability": "available"
      },
      {
        "partNumber": "RS51C0-TBSNWR",
        "name": "RS51C0-TBSNWR, SE4770, pojedynczy spust, bateria standardowa 480 mAh",
        "attributes": {
          "Silnik": "SE4770",
          "Mocowanie": "Pojedynczy spust",
          "Bateria": "Standardowa 480 mAh"
        },
        "priceFrom": 3341.86,
        "availability": "available"
      },
      {
        "partNumber": "RS51C0-TESNWR",
        "name": "RS51C0-TESNWR, SE4770, pojedynczy spust, bateria rozszerzona 735 mAh",
        "attributes": {
          "Silnik": "SE4770",
          "Mocowanie": "Pojedynczy spust",
          "Bateria": "Rozszerzona 735 mAh"
        },
        "priceFrom": 3420.35,
        "availability": "on-order"
      },
      {
        "partNumber": "RS51C0-TBDNWR",
        "name": "RS51C0-TBDNWR, SE4770, podwójny spust, bateria standardowa 480 mAh",
        "attributes": {
          "Silnik": "SE4770",
          "Mocowanie": "Podwójny spust",
          "Bateria": "Standardowa 480 mAh"
        },
        "priceFrom": 3341.86,
        "availability": "available"
      },
      {
        "partNumber": "RS51C0-TEDNWR",
        "name": "RS51C0-TEDNWR, SE4770, podwójny spust, bateria rozszerzona 735 mAh",
        "attributes": {
          "Silnik": "SE4770",
          "Mocowanie": "Podwójny spust",
          "Bateria": "Rozszerzona 735 mAh"
        },
        "priceFrom": 3420.35,
        "availability": "on-order"
      },
      {
        "partNumber": "RS51C0-TBBHWR",
        "name": "RS51C0-TBBHWR, SE4770, mocowanie na grzbiet dłoni, bateria standardowa 480 mAh",
        "attributes": {
          "Silnik": "SE4770",
          "Mocowanie": "Mocowanie na grzbiet dłoni",
          "Bateria": "Standardowa 480 mAh"
        },
        "priceFrom": 3749.82,
        "availability": "available"
      }
    ],
    "variantAttributeTooltips": {
      "Silnik": "Silnik skanujący, który odczytuje kody 1D i 2D. Oba mają rozdzielczość 1280 × 960 pikseli.\n\n• SE4710 — czerwone oświetlenie i pomarańczowy punkt celowania LED; pole widzenia 42° × 28°.\n\n• SE4770 — migawka globalna, czerwony celownik laserowy w kształcie krzyża; pole widzenia 48° × 30°. Dla części kodów sięga dalej, np. Code 39 20 mil do 91,7 cm (SE4710: do 76,2 cm).",
      "Mocowanie": "Sposób noszenia, z którym RS5100 jest dostarczany. Spusty i mocowania są wymienne i można je dokupić.\n\n• Pojedynczy spust — przycisk z jednej strony; zespół spustu obraca się na lewą lub prawą rękę i nadaje się do cienkich rękawic.\n\n• Podwójny spust — przyciski z obu stron, zmiana ręki w trakcie pracy; niezalecany do rękawic.\n\n• Mocowanie na grzbiet dłoni — jeden rozmiar na obie ręce, spust przy palcu; regulowany pasek mieści dłoń w rękawicy.",
      "Bateria": "Wymienna bateria PowerPrecision+ z zestawu. Od niej zależą czas pracy i zakres temperatur.\n\n• Standardowa 480 mAh — 12 godzin i 14 400 skanów na jednym ładowaniu; praca od 0 do 50 °C.\n\n• Rozszerzona 735 mAh — na dłuższe zmiany i pracę w chłodzie, od −20 do 50 °C."
    },
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-rs6100-crd-rs5x6-2schg-01",
      "zebra-rs6100-kt-rs5x6-2scpwr-01",
      "zebra-rs5100-crd-rs51-4schg-01",
      "zebra-rs5100-crd-rs51-20schg-01",
      "zebra-rs6100-btry-rs51-4ma-01",
      "zebra-rs6100-btry-rs51-7ma-01",
      "zebra-rs6100-sac-rs51-8schg-01",
      "zebra-rs6100-sac-rs51-40schg-01",
      "zebra-rs6100-sg-rs51-trgss-03",
      "zebra-rs6100-sg-rs51-trgds-01",
      "zebra-rs6100-sg-rs51-trgdu-01",
      "zebra-rs6100-sg-rs51-trgdv-01",
      "zebra-rs6100-sg-rs5x6-bhmt-01",
      "zebra-rs6100-sg-rs5x6-hnmt-02",
      "zebra-rs6100-sg-rs5x6-hmtra-01",
      "zebra-rs6100-sg-rs5x6-lnyd-01",
      "zebra-rs2100-bt-rs5x6-dngl-01"
    ],
    "relatedProducts": [
      "zebra-rs6100",
      "m3-wr15",
      "m3-wr10",
      "zebra-rs2100"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa Zebra RS5100 (PL)",
        "type": "datasheet",
        "url": "/downloads/zebra-rs5100-karta-katalogowa-pl.pdf",
        "size": "401 KB"
      },
      {
        "name": "Instrukcja szybkiego startu Zebra RS5100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs5100-instrukcja-szybkiego-startu-en.pdf",
        "size": "3,3 MB"
      },
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS5100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs5100-przewodnik-en.pdf",
        "size": "9,2 MB"
      }
    ],
    "faq": [
      {
        "question": "Czym różnią się wersje RS5100 z silnikiem SE4710 i SE4770?",
        "answer": "SE4710 (wersje RS51C0-L…) celuje pomarańczowym punktem LED i ma pole widzenia 42° × 28°. SE4770 (wersje RS51C0-T…) ma migawkę globalną, czerwony krzyż laserowy i szersze pole widzenia, 48° × 30°. SE4770 czyta też bardzo gęste kody Code 39 3 mil, a zasięg dla Code 39 20 mil wynosi u niego do 91,7 cm. Dla SE4710 ten sam kod ma zasięg do 76,2 cm. Oba silniki mają matrycę 1280 × 960 pikseli i czytają kody 1D, 2D oraz OCR-A i OCR-B."
      },
      {
        "question": "Z jakimi urządzeniami łączy się Zebra RS5100?",
        "answer": "Przez Bluetooth RS5100 łączy się ze smartfonami, tabletami i komputerami PC. Najwięcej funkcji skanera jest dostępnych po sparowaniu z komputerem mobilnym Zebra, np. noszonym, ręcznym lub pokładowym. Z WT6300, TC52 i innymi urządzeniami Zebra z NFC wystarczy zetknąć ikony NFC. Komputer stacjonarny odbiera kody przez [adapter Bluetooth BT-RS5X6-DNGL-01](/produkt/zebra-rs2100-bt-rs5x6-dngl-01), do którego można podłączyć do siedmiu skanerów."
      },
      {
        "question": "Jak połączyć RS5100 z iPhone'em albo telefonem z Androidem?",
        "answer": "Skaner pracuje wtedy jako klawiatura Bluetooth (HID). Należy wykonać Clean Boot, zeskanować odpowiedni kod HID Bluetooth z przewodnika Product Reference Guide, a następnie wyjąć i ponownie włożyć baterię. W ustawieniach Bluetooth telefonu skaner jest widoczny jako RS5100 z numerem seryjnym. Odczytany kod trafia wtedy do pola tekstowego dowolnej aplikacji na telefonie."
      },
      {
        "question": "Jakie stacje ładujące pasują do RS5100?",
        "answer": "Skaner razem z baterią ładuje stacja 2-gniazdowa ([sama](/produkt/zebra-rs6100-crd-rs5x6-2schg-01) lub [z zasilaczem](/produkt/zebra-rs6100-kt-rs5x6-2scpwr-01)), wspólna dla RS5100 i RS6100. Większe stacje są różne dla obu modeli: do RS5100 służą [CRD-RS51-4SCHG-01](/produkt/zebra-rs5100-crd-rs51-4schg-01) i [CRD-RS51-20SCHG-01](/produkt/zebra-rs5100-crd-rs51-20schg-01). Stacje RS6100 (CRD-RS61-…) nie pasują do RS5100. Stacje służą tylko do ładowania i nie przesyłają danych."
      },
      {
        "question": "Jak długo pracuje RS5100 na jednej baterii?",
        "answer": "Na baterii standardowej 480 mAh skaner pracuje 12 godzin i wykonuje 14 400 skanów na jednym ładowaniu. Bateria rozszerzona 735 mAh wydłuża czas pracy. Przy pracy na kilka zmian rozładowaną baterię zastępuje się naładowaną z [ładowarki 8 baterii](/produkt/zebra-rs6100-sac-rs51-8schg-01) lub [40 baterii](/produkt/zebra-rs6100-sac-rs51-40schg-01). Naładowanie baterii standardowej od 0 do 90% zajmuje mniej niż 2,5 h, jeśli temperatura jest pokojowa."
      },
      {
        "question": "Czy RS5100 pracuje w chłodni?",
        "answer": "Tak, z [baterią rozszerzoną](/produkt/zebra-rs6100-btry-rs51-7ma-01) skaner pracuje od −20 do 50 °C. Ten sam zakres ma RS5100 z [baterią do mroźni BTRY-RS5X6-6MA-01](/produkt/zebra-rs6100-btry-rs5x6-6ma-01). Z baterią standardową zakres pracy to 0–50 °C. Baterie ładuje się w temperaturze 5–40 °C."
      },
      {
        "question": "Czy spusty, baterie i mocowania RS6100 pasują do RS5100?",
        "answer": "Tak. Spusty pojedyncze i podwójne (także z wibracją i z portem USB-C), baterie, ładowarki 8 i 40 baterii oraz mocowania na grzbiet dłoni, Enterprise Hand Mount, Slim Mount i smycz są wspólne dla RS5100 i [RS6100](/produkt/zebra-rs6100). Wyjątkiem są stacje na 4 i 20 skanerów, które dla RS5100 mają numery CRD-RS51-…."
      },
      {
        "question": "Czy w RS5100 można pracować w rękawicach?",
        "answer": "Zależy od sposobu noszenia. Pojedynczy spust nadaje się do pracy w lekkich rękawicach, a podwójnego spustu nie zaleca się do rękawic. Pasek mocowania na grzbiet dłoni łatwo się reguluje, więc można je założyć na rękawicę. Do pracy w mroźni przeznaczone jest [mocowanie na grzbiet dłoni SG-RS5X6-BHMTX-01](/produkt/zebra-rs6100-sg-rs5x6-bhmtx-01)."
      },
      {
        "question": "Co jest w opakowaniu RS5100?",
        "answer": "Skaner ze spustem albo mocowaniem zgodnym z wersją, bateria, broszura Regulatory Guide i śruba do unieruchomienia spustu, gdy nie trzeba go obracać ani zdejmować. Nowa bateria jest w trybie transportowym i uruchamia się po włożeniu do stacji lub ładowarki. Stację ładującą zamawia się osobno."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  }
]

export const zebraRs5100Accessories: Product[] = [
  {
    "id": "zebra-rs5100-crd-rs51-4schg-01",
    "slug": "zebra-rs5100-crd-rs51-4schg-01",
    "name": "Stacja ładująca Zebra RS5100 4-gniazdowa",
    "seoH1": "Stacja ładująca Zebra RS5100 4-gniazdowa",
    "seoTitle": "Stacja ładująca Zebra RS5100 4-gniazdowa — CRD-RS51-4SCHG-01",
    "seoDescription": "Czterogniazdowa stacja Zebra CRD-RS51-4SCHG-01 do skanerów pierścieniowych RS5100, tylko ładowanie; zasilacz 50 W PWR-BGA12V50W0WW. Ładowarka Zebra RS5100 na 4 skanery.",
    "shortDescription": "Zebra CRD-RS51-4SCHG-01 — stacja na cztery skanery pierścieniowe RS5100 z bateriami w środku; tylko ładowanie, 12 V DC, 50 W z zasilacza Zebra.",
    "description": "CRD-RS51-4SCHG-01 to stacja na cztery skanery Zebra RS5100. Skaner wkłada się do gniazda oknem skanera w stronę styków, a jego bateria ładuje się bez wyjmowania. Stacja zasila skanery w gniazdach; danych nie przesyła. O postępie ładowania informują diody na skanerach, a osobna dioda stacji — o zasilaniu.\n\nStacja waży 433 g. Zasilanie: 12 V DC, 50 W. Działa w temperaturze 5–40 °C, a baterie ładuje w zakresie 10–40 °C. Skanery RS6100 wymagają innej stacji, CRD-RS61-4SCHG-01. Do zapasowych baterii RS5100 służy [ładowarka 8 baterii](/produkt/zebra-rs6100-sac-rs51-8schg-01).\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy Zebra 50 W (PWR-BGA12V50W0WW)](/produkt/zebra-zasilacz-50w)\n- [Przewód DC Zebra CBL-DC-388A1-01 (CBL-DC-388A1-01)](/produkt/zebra-kabel-zasilajacy-388)\n- [Przewód sieciowy Zebra — Europa, C13 (50-16000-220R)](/produkt/zebra-tc201-50-16000-220r)\n\nDokup tylko te elementy, których jeszcze nie masz.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CRD-RS51-4SCHG-01.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca Zebra RS5100 4-gniazdowa ze skanerami w trzech gniazdach (skanery sprzedawane osobno)"
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
        "value": "CRD-RS51-4SCHG-01"
      },
      {
        "name": "Liczba gniazd",
        "value": "4 skanery RS5100 z baterią"
      },
      {
        "name": "Funkcja",
        "value": "Ładowanie i zasilanie skanerów, bez komunikacji"
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
        "value": "Zebra RS5100"
      }
    ],
    "applications": [
      "Ładowanie skanerów RS5100 przy stanowisku kilkuosobowego zespołu"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-psu-50w",
      "zebra-cable-dc-388",
      "zebra-tc201-50-16000-220r",
      "zebra-rs6100-sac-rs51-8schg-01"
    ],
    "relatedProducts": [
      "zebra-rs5100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS5100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs5100-przewodnik-en.pdf",
        "size": "9,2 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-rs5100-crd-rs51-20schg-01",
    "slug": "zebra-rs5100-crd-rs51-20schg-01",
    "name": "Stacja ładująca Zebra RS5100 20-gniazdowa",
    "seoH1": "Stacja ładująca Zebra RS5100 20-gniazdowa",
    "seoTitle": "Stacja ładująca Zebra RS5100 20-gniazdowa — CRD-RS51-20SCHG-01",
    "seoDescription": "Stacja ShareCradle Zebra CRD-RS51-20SCHG-01 na 20 skanerów pierścieniowych RS5100; zasilacz 108 W, montaż na blacie, ścianie lub w szafie rack. Stacja ładująca Zebra RS5100 20-gniazdowa.",
    "shortDescription": "Zebra CRD-RS51-20SCHG-01 — 20-gniazdowa stacja ShareCradle do skanerów RS5100 z bateriami; zasilacz 108 W i przewód DC 382A1; można ją zawiesić na ścianie lub zamontować w szafie rack.",
    "description": "Stacja ShareCradle CRD-RS51-20SCHG-01 mieści 20 skanerów Zebra RS5100 i ładuje ich baterie bez wyjmowania. Zasila skanery w gniazdach, ale nie przesyła danych. Do floty 100 skanerów wystarcza pięć takich stacji zamiast 100 przewodów USB. Diody skanerów pokazują stan ładowania, a dioda stacji informuje o zasilaniu.\n\nNapięcie 12 V DC dostarcza zasilacz 108 W przez przewód DC CBL-DC-382A1-01. Zakres temperatur pracy: 0–50 °C. Uchwyt BRKT-SCRD-SMRK-01 pozwala zawiesić stację na ścianie albo zamontować ją w szafie rack. Do kilku skanerów wystarczy [stacja 4-gniazdowa RS5100](/produkt/zebra-rs5100-crd-rs51-4schg-01). Skanery RS6100 mają własną stację CRD-RS61-20SCHG-01.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy Zebra 108 W (PWR-BGA12V108W0WW)](/produkt/zebra-zasilacz-108w)\n- [Przewód DC Zebra z uchwytem zwalniającym (CBL-DC-382A1-01)](/produkt/zebra-mc33-dc-cable-382)\n- [Przewód sieciowy Zebra — Europa, C13 (50-16000-220R)](/produkt/zebra-tc201-50-16000-220r)\n\nDokup tylko te elementy, których jeszcze nie masz.\n\n## Elementy opcjonalne\n\n- [Uchwyt montażowy ShareCradle Zebra (BRKT-SCRD-SMRK-01)](/produkt/zebra-tc201-brkt-scrd-smrk-01)",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CRD-RS51-20SCHG-01.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca Zebra RS5100 20-gniazdowa ShareCradle — pięć modułów po cztery gniazda, ze skanerami w gniazdach (skanery sprzedawane osobno)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "on-order",
    "priceFrom": 5287.78,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "CRD-RS51-20SCHG-01"
      },
      {
        "name": "Liczba gniazd",
        "value": "20 skanerów RS5100 z baterią"
      },
      {
        "name": "Funkcja",
        "value": "Ładowanie i zasilanie skanerów, bez komunikacji"
      },
      {
        "name": "Zasilanie",
        "value": "12 V DC; zasilacz PWR-BGA12V108W0WW, przewód DC CBL-DC-382A1-01 i przewód sieciowy 50-16000-220R sprzedawane osobno"
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
        "value": "±15 kV w powietrzu, ±8 kV kontaktowo"
      },
      {
        "name": "Montaż",
        "value": "Na blacie; na ścianie lub w szafie rack z uchwytem BRKT-SCRD-SMRK-01 (opcja)"
      },
      {
        "name": "Kompatybilność",
        "value": "Zebra RS5100"
      }
    ],
    "applications": [
      "Ładowanie wszystkich skanerów RS5100 zmiany w jednym miejscu, na ścianie lub w szafie rack"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-psu-108w",
      "zebra-mc33-dc-cable-382",
      "zebra-tc201-50-16000-220r",
      "zebra-tc201-brkt-scrd-smrk-01",
      "zebra-rs6100-sac-rs51-40schg-01"
    ],
    "relatedProducts": [
      "zebra-rs5100"
    ],
    "downloads": [
      {
        "name": "Przewodnik akcesoriów Zebra RS5100 / RS6100 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-rs6100-akcesoria.pdf",
        "size": "5,0 MB"
      },
      {
        "name": "Product Reference Guide Zebra RS5100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs5100-przewodnik-en.pdf",
        "size": "9,2 MB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  }
]
