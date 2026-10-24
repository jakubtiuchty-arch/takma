import type { Product } from './products'

// Skanery noszone ProGlove (24.10.2026). Ceny i stany na karcie aktualizuje /api/stock; priceFrom to wartość startowa.
// Skaner działa tylko z mocowaniem ProGlove i ładuje się tylko w stacji, dlatego opisy mają bloki „Wymagane … (jedno z)”.
export const progloveProducts: Product[] = [
  {
    "id": "proglove-leo",
    "slug": "proglove-leo",
    "name": "ProGlove LEO",
    "seoH1": "ProGlove LEO",
    "seoTitle": "ProGlove LEO — skaner noszony na dłoni, 35 g, ładowanie 1 h",
    "seoDescription": "Skaner noszony ProGlove LEO: 35 g, kody 1D i 2D z bliska, ok. 4000 skanów, ładowanie 1 h. Skaner na dłoń LEO ProGlove, PN: M009.",
    "shortDescription": "ProGlove LEO — wejściowy i najlżejszy skaner noszony ProGlove: 35 g, odczyt 1D/2D z bliska, pełne ładowanie w 1 godzinę.",
    "description": "ProGlove LEO waży 35 g i jest najlżejszym skanerem noszonym w ofercie ProGlove. Pełne ładowanie baterii 670 mAh trwa godzinę, czyli o połowę krócej niż w modelach MARK, a jedno ładowanie wystarcza na ok. 4000 skanów. To model wejściowy, dostępny w jednej wersji: Standard Range.\n\nLEO jest przeznaczony do odczytów blisko dłoni: kompletacji, pakowania, przyjęć i wysyłek, obsługi zwrotów, inwentaryzacji oraz realizacji zamówień e-commerce i click & collect. Zielona dioda celownicza wskazuje kod, a czytnik dekoduje kody 1D i 2D, m.in. QR i Data Matrix; Code 39 o module 20 mil odczytuje z odległości do 66 cm. Każdy odczyt potwierdzają światło, dźwięk i wibracja.\n\nObudowa 50 × 45 × 17 mm ma klasę szczelności IP43. Skaner znosi kilka upadków z 2 m na beton i 2000 cykli przewracania z pół metra, a pracuje w temperaturze 0–50°C. Kody przekazuje do urządzenia z Androidem lub iOS w profilu Bluetooth HID albo przez aplikację INSIGHT Mobile; do komputera trafiają przez ProGlove Gateway podłączony do portu USB.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane dla skanera: mocowanie (jedno z) — sprzedawane osobno**\n\n- [Hand Strap ProGlove, 2 × prawa i 1 × lewa ręka, 3 szt. (G011-MIX-3)](/produkt/proglove-g011-mix-3)\n- [Index Trigger ProGlove, rozmiar M, prawa ręka, 3 szt. (G006-MR-3)](/produkt/proglove-g006-mr-3)\n- [Reel ProGlove ze smyczami, 2 szt. (G008-LY-2)](/produkt/proglove-g008-ly-2)\n\n**Wymagane dla skanera: stacja ładująca (jedna z) — sprzedawane osobno**\n\n- [Stacja ładująca ProGlove 2-gniazdowa z zasilaczem EU (C006-EU)](/produkt/proglove-c006-eu)\n- [Stacja ładująca ProGlove 10-gniazdowa z zasilaczem (C007-INT)](/produkt/proglove-c007-int)\n\nDokup tylko te elementy, których jeszcze nie masz.",
    "categoryId": "skanery-kodow-kreskowych",
    "subcategoryIds": [
      "skanery-pierscieniowe"
    ],
    "manufacturerId": "proglove",
    "sameAs": "https://proglove.com/products/hardware/leo/",
    "priceFrom": 1827.52,
    "availability": "available",
    "images": [
      "/images/products/proglove-m009.png"
    ],
    "imageDescriptions": [
      "ProGlove LEO — niebieski skaner noszony na dłoni, widok z przodu z diodami stanu"
    ],
    "tags": [
      "magazyn",
      "logistyka",
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Typ skanera",
        "value": "Imager 2D, Standard Range; celownik: zielona dioda LED 550 nm"
      },
      {
        "name": "Zasięg odczytu",
        "value": "Do 66 cm (Code 39, 20 mil); np. QR 20 mil 3–36 cm, UPC-A 5–50 cm"
      },
      {
        "name": "Odczyt kodów",
        "value": "1D (m.in. GS1 DataBar), 2D (PDF417, MicroPDF417, Data Matrix, QR, Micro QR, Aztec, MaxiCode i inne), kody pocztowe"
      },
      {
        "name": "Łączność",
        "value": "Bluetooth Low Energy 4.0–5.0 (2,4 GHz)"
      },
      {
        "name": "Zasięg radiowy",
        "value": "40 m w otwartej przestrzeni i 10–20 m w budynku; z ProGlove Gateway 70 m i 30–40 m (w środowisku przemysłowym zasięg może być mniejszy)"
      },
      {
        "name": "Połączenie z systemem",
        "value": "Android i iOS: profil HID albo INSIGHT Mobile; komputer: USB przez ProGlove Gateway"
      },
      {
        "name": "Spust",
        "value": "Tylko mocowaniem ProGlove: Hand Strap, Index Trigger albo Reel"
      },
      {
        "name": "Bateria",
        "value": "670 mAh Li-Po, ok. 4000 skanów na ładowanie"
      },
      {
        "name": "Czas ładowania",
        "value": "1 h w stacji ładującej ProGlove"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP43"
      },
      {
        "name": "Odporność na upadki",
        "value": "Kilkukrotne upadki z 2 m na beton; 2000 przewrotów z 0,5 m"
      },
      {
        "name": "Temperatura pracy",
        "value": "0°C do +50°C (ładowanie +5°C do +40°C)"
      },
      {
        "name": "Wymiary",
        "value": "50 × 45 × 17 mm"
      },
      {
        "name": "Masa",
        "value": "35 g"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Skaner; mocowanie i stację ładującą zamawia się osobno"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy; kontrakty serwisowe ProGlove Care na 36 albo 60 miesięcy na zapytanie"
      }
    ],
    "applications": [
      "Kompletacja drobnych towarów z półek",
      "Inwentaryzacja w sklepie",
      "Pakowanie zamówień e-commerce",
      "Przygotowanie przesyłek do wysyłki"
    ],
    "variants": [
      {
        "partNumber": "M009",
        "name": "M009, Standard Range",
        "attributes": {},
        "priceFrom": 1827.52,
        "availability": "available"
      }
    ],
    "variantAttributeTooltips": {},
    "compatibleAccessories": [],
    "relatedAccessories": [
      "proglove-g011-mix-3",
      "proglove-g006-mr-3",
      "proglove-g008-ly-2",
      "proglove-c006-eu",
      "proglove-c007-int",
      "proglove-x001-a007",
      "proglove-a009-eu",
      "proglove-z001-001",
      "proglove-z009-000",
      "proglove-c006-int",
      "proglove-g011-r-10",
      "proglove-g011-l-10",
      "proglove-g008-2",
      "proglove-g006-ml-3",
      "proglove-g006-sr-3",
      "proglove-g006-sl-3",
      "proglove-g006-lr-3",
      "proglove-g006-ll-3",
      "proglove-g006-mr-10",
      "proglove-g006-ml-10",
      "proglove-g006-sr-10",
      "proglove-g006-sl-10",
      "proglove-g006-lr-10",
      "proglove-g006-ll-10"
    ],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa ProGlove LEO (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-leo.pdf",
        "size": "142 KB"
      },
      {
        "name": "Instrukcja szybkiego startu ProGlove MARK (EN)",
        "type": "manual",
        "url": "/datasheets/proglove-mark-quickstart.pdf",
        "size": "1,6 MB"
      }
    ],
    "faq": [
      {
        "question": "Czym LEO różni się od MARK Basic?",
        "answer": "LEO jest lżejszy (35 g wobec 39–40 g) i ładuje się w 1 godzinę zamiast 2. Ma tylko zasięg Standard Range i baterię na ok. 4000 skanów. [MARK Basic](/produkt/proglove-mark-basic) ma wersję Multi Range do ok. 250 cm, baterię na ok. 8000 skanów i obudowę IP54 zamiast IP43."
      },
      {
        "question": "Czy LEO działa bez dodatkowej aplikacji?",
        "answer": "Tak. W profilu Bluetooth HID skaner przekazuje kody do urządzenia z Androidem lub iOS tak jak klawiatura. Aplikacja INSIGHT Mobile daje na Androidzie pełną integrację z aplikacją firmy i konfigurację skanera, a SDK dla iOS integrację podstawową."
      },
      {
        "question": "Co trzeba dokupić do skanera LEO?",
        "answer": "LEO nie ma własnego spustu ani ładowarki. Potrzebne są jedno mocowanie ProGlove (Hand Strap, Index Trigger albo Reel) i stacja ładująca 2- lub 10-gniazdowa. Przy połączeniu z komputerem przez USB potrzebny jest też [Gateway](/produkt/proglove-x001-a007)."
      },
      {
        "question": "Na ile skanów wystarcza bateria LEO?",
        "answer": "Jedno ładowanie wystarcza na ok. 4000 skanów, zależnie od ustawień i warunków pracy. Pełne ładowanie w stacji trwa 1 godzinę i odbywa się w temperaturze od +5 do +40°C."
      },
      {
        "question": "Czy LEO nadaje się do chłodni?",
        "answer": "Nie. LEO pracuje w temperaturze 0–50°C, a jego obudowa ma klasę IP43. W temperaturze do −20°C pracują [MARK 2](/produkt/proglove-mark-2) i [MARK 3](/produkt/proglove-mark-3); MARK 3 ma dodatkowo obudowę IP65."
      },
      {
        "question": "Jaki skaner wybrać zamiast LEO do dalszych odczytów?",
        "answer": "Do etykiet na regałach lepszy jest [MARK Basic Multi Range](/produkt/proglove-mark-basic) z zakresem ok. 10–250 cm albo [MARK 3](/produkt/proglove-mark-3) z zakresem do 6 m. Skaner noszony na palcu to [M3 WR15](/produkt/m3-wr15)."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-mark-basic",
    "slug": "proglove-mark-basic",
    "name": "ProGlove MARK Basic",
    "seoH1": "ProGlove MARK Basic",
    "seoTitle": "ProGlove MARK Basic — skaner noszony Multi Range lub Standard Range",
    "seoDescription": "ProGlove MARK Basic: skaner noszony na dłoni, 39 g, IP54, Multi Range 10–250 cm lub Standard Range, ok. 8000 skanów. PN: M011, M007.",
    "shortDescription": "ProGlove MARK Basic — podstawowy skaner rodziny MARK do codziennego, powtarzalnego skanowania; wersja Multi Range do 250 cm albo Standard Range do 90 cm.",
    "description": "ProGlove MARK Basic to podstawowy model rodziny MARK w dwóch wersjach zasięgu. Multi Range (M011) z laserowym celownikiem 520 nm sam dopasowuje się do odległości od 10 do 250 cm, dlatego odczytuje zarówno etykiety na kartonach, jak i na regałach. Standard Range (M007) z celownikiem LED pracuje w zakresie 10–90 cm i jest szybszy przy częstych odczytach z bliska: przy pakowaniu, inwentaryzacji i przy kasie. Skaner służy do rutynowego skanowania w magazynie, pakowni i na linii montażowej, m.in. przy rozkładaniu towaru, paletyzacji i kompletacji.\n\nMARK Basic paruje się przez Bluetooth Low Energy z terminalem, tabletem lub smartfonem z Androidem albo iOS i przekazuje kody w profilu HID lub przez aplikację INSIGHT Mobile. Z komputerem łączy się przez ProGlove Gateway na USB. Szara obudowa ma 50 × 45 × 17 mm (Standard Range: 16 mm grubości) i waży 39–40 g. Klasa IP54 chroni ją przed pyłem i bryzgami wody; MARK Basic przechodzi test kilku upadków na beton z 2 m i 2000 przewrotów z 0,5 m. Zakres temperatury pracy to 0–50°C. Akumulator 670 mAh wystarcza na ok. 8000 odczytów i ładuje się w stacji przez 2 godziny.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane dla skanera: mocowanie (jedno z) — sprzedawane osobno**\n\n- [Hand Strap ProGlove, 2 × prawa i 1 × lewa ręka, 3 szt. (G011-MIX-3)](/produkt/proglove-g011-mix-3)\n- [Index Trigger ProGlove, rozmiar M, prawa ręka, 3 szt. (G006-MR-3)](/produkt/proglove-g006-mr-3)\n- [Reel ProGlove ze smyczami, 2 szt. (G008-LY-2)](/produkt/proglove-g008-ly-2)\n\n**Wymagane dla skanera: stacja ładująca (jedna z) — sprzedawane osobno**\n\n- [Stacja ładująca ProGlove 2-gniazdowa z zasilaczem EU (C006-EU)](/produkt/proglove-c006-eu)\n- [Stacja ładująca ProGlove 10-gniazdowa z zasilaczem (C007-INT)](/produkt/proglove-c007-int)\n\nDokup tylko te elementy, których jeszcze nie masz.",
    "categoryId": "skanery-kodow-kreskowych",
    "subcategoryIds": [
      "skanery-pierscieniowe"
    ],
    "manufacturerId": "proglove",
    "sameAs": "https://proglove.com/products/hardware/mark-basic/",
    "priceFrom": 3251.85,
    "availability": "available",
    "images": [
      "/images/products/proglove-m011.png",
      "/images/products/proglove-m011-2.png"
    ],
    "imageDescriptions": [
      "ProGlove MARK Basic — szary skaner noszony, widok z przodu",
      "ProGlove MARK Basic — skanery w opasce Hand Strap i w mocowaniu Index Trigger"
    ],
    "tags": [
      "magazyn",
      "logistyka",
      "retail"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Typ skanera",
        "value": "Imager 2D; Multi Range z celownikiem laserowym 520 nm albo Standard Range z celownikiem LED 650 nm"
      },
      {
        "name": "Zasięg odczytu",
        "value": "Multi Range: ok. 10–250 cm (np. Code 128 15 mil 18–165 cm); Standard Range: ok. 10–90 cm (np. Code 39 20 mil 4–92 cm)"
      },
      {
        "name": "Odczyt kodów",
        "value": "1D (m.in. GS1 DataBar), 2D (PDF417, MicroPDF417, Data Matrix, QR, Micro QR, Aztec, MaxiCode i inne), kody pocztowe"
      },
      {
        "name": "Łączność",
        "value": "Bluetooth Low Energy 4.0–5.0 (2,4 GHz)"
      },
      {
        "name": "Zasięg radiowy",
        "value": "40 m w otwartej przestrzeni i 10–20 m w budynku; z ProGlove Gateway 70 m i 30–40 m (w środowisku przemysłowym zasięg może być mniejszy)"
      },
      {
        "name": "Połączenie z systemem",
        "value": "Android i iOS: profil HID albo INSIGHT Mobile; komputer: USB przez ProGlove Gateway"
      },
      {
        "name": "Spust",
        "value": "Tylko mocowaniem ProGlove: Hand Strap, Index Trigger albo Reel"
      },
      {
        "name": "Bateria",
        "value": "670 mAh Li-Po, ok. 8000 skanów na ładowanie"
      },
      {
        "name": "Czas ładowania",
        "value": "2 h w stacji ładującej ProGlove"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP54"
      },
      {
        "name": "Odporność na upadki",
        "value": "Kilkukrotne upadki z 2 m na beton; 2000 przewrotów z 0,5 m"
      },
      {
        "name": "Temperatura pracy",
        "value": "0°C do +50°C (ładowanie +5°C do +40°C)"
      },
      {
        "name": "Wymiary",
        "value": "Multi Range: 50 × 45 × 17 mm; Standard Range: 50 × 45 × 16 mm"
      },
      {
        "name": "Masa",
        "value": "Multi Range: 39 g; Standard Range: 40 g"
      },
      {
        "name": "Laser",
        "value": "Multi Range: klasa 2 według EN 60825-1"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Skaner; mocowanie i stację ładującą zamawia się osobno"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy; kontrakty serwisowe ProGlove Care na 36 albo 60 miesięcy na zapytanie"
      }
    ],
    "applications": [
      "Codzienne przyjęcia i wydania w magazynie",
      "Odczyt etykiet regałowych z odległości do 2,5 m",
      "Pakowanie i kontrola wysyłek",
      "Skanowanie towaru w handlu"
    ],
    "variants": [
      {
        "partNumber": "M011",
        "name": "M011, Multi Range 10–250 cm",
        "attributes": {
          "Zasięg": "Multi Range 10–250 cm"
        },
        "priceFrom": 3251.85,
        "availability": "available"
      },
      {
        "partNumber": "M007",
        "name": "M007, Standard Range 10–90 cm",
        "attributes": {
          "Zasięg": "Standard Range 10–90 cm"
        },
        "priceFrom": 3251.85,
        "availability": "available"
      }
    ],
    "variantAttributeTooltips": {
      "Zasięg": "Odległość, z której MARK Basic odczytuje typowe kody.\n\n• Multi Range — ok. 10–250 cm, celownik laserowy; etykiety na towarze i na regałach.\n\n• Standard Range — ok. 10–90 cm, celownik LED; szybkie odczyty z bliska."
    },
    "compatibleAccessories": [],
    "relatedAccessories": [
      "proglove-g011-mix-3",
      "proglove-g006-mr-3",
      "proglove-g008-ly-2",
      "proglove-c006-eu",
      "proglove-c007-int",
      "proglove-x001-a007",
      "proglove-a009-eu",
      "proglove-z001-001",
      "proglove-z009-000",
      "proglove-c006-int",
      "proglove-g011-r-10",
      "proglove-g011-l-10",
      "proglove-g008-2",
      "proglove-g006-ml-3",
      "proglove-g006-sr-3",
      "proglove-g006-sl-3",
      "proglove-g006-lr-3",
      "proglove-g006-ll-3",
      "proglove-g006-mr-10",
      "proglove-g006-ml-10",
      "proglove-g006-sr-10",
      "proglove-g006-sl-10",
      "proglove-g006-lr-10",
      "proglove-g006-ll-10"
    ],
    "relatedProducts": [
      "proglove-leo",
      "proglove-mark-2",
      "proglove-mark-3",
      "m3-wr15"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa ProGlove MARK Basic (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mark-basic.pdf",
        "size": "148 KB"
      },
      {
        "name": "Instrukcja szybkiego startu ProGlove MARK (EN)",
        "type": "manual",
        "url": "/datasheets/proglove-mark-quickstart.pdf",
        "size": "1,6 MB"
      }
    ],
    "faq": [
      {
        "question": "Którą wersję MARK Basic wybrać: Multi Range czy Standard Range?",
        "answer": "Multi Range odczytuje kody w zakresie ok. 10–250 cm, więc sprawdza się w magazynie z etykietami na regałach. Standard Range pracuje w zakresie ok. 10–90 cm i jest przeznaczony do szybkich odczytów z bliska: pakowania, inwentaryzacji i handlu."
      },
      {
        "question": "Czym MARK Basic różni się od MARK 2?",
        "answer": "[MARK 2](/produkt/proglove-mark-2) ma baterię na ok. 12 000 skanów i pracuje od −20°C, a MARK Basic wykonuje ok. 8000 skanów i pracuje od 0°C. MARK 2 ma też dodatkowe radio 868 MHz do ProGlove Access Point. Obie serie mają obudowę IP54 i łączą się przez Bluetooth Low Energy."
      },
      {
        "question": "Czy MARK Basic współpracuje z terminalem innej marki?",
        "answer": "Tak, jeśli terminal, tablet lub smartfon obsługuje Bluetooth Low Energy. W profilu HID skaner wprowadza kody jak klawiatura. Na Androidzie można też użyć aplikacji INSIGHT Mobile, która daje konfigurację i integrację z aplikacją firmy."
      },
      {
        "question": "Ile skanów wykona MARK Basic na baterii?",
        "answer": "Jedno ładowanie wystarcza na ok. 8000 odczytów; wynik zmienia się z konfiguracją i otoczeniem. Przy pracy wielozmianowej producent wskazuje, że czasem potrzebne są dwa skanery na stanowisko, używane na zmianę."
      },
      {
        "question": "Co jest w opakowaniu MARK Basic?",
        "answer": "Sam skaner. Mocowanie i stację ładującą zamawia się osobno; do wyboru są Hand Strap, Index Trigger lub Reel. Mocowania są sprzedawane w opakowaniach po 2, 3 lub 10 sztuk."
      },
      {
        "question": "Jakie są alternatywy dla MARK Basic?",
        "answer": "Lżejszy i tańszy jest [LEO](/produkt/proglove-leo) do odczytów z bliska. Obudowę IP65 i zasięg do 6 m ma [MARK 3](/produkt/proglove-mark-3). Instrukcje na ekranie przy skanerze wyświetla [MARK Display](/produkt/proglove-mark-display)."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-mark-2",
    "slug": "proglove-mark-2",
    "name": "ProGlove MARK 2",
    "seoH1": "ProGlove MARK 2",
    "seoTitle": "ProGlove MARK 2 — skaner noszony na dłoni, ok. 12 000 skanów",
    "seoDescription": "Skaner noszony ProGlove MARK 2: Standard Range lub Mid Range, ok. 12 000 skanów, praca od −20°C. MARK 2 ProGlove na dłoń, PN: M004-EU, M003-EU.",
    "shortDescription": "ProGlove MARK 2 — najczęściej używany skaner noszony ProGlove: bateria na ok. 12 000 skanów, praca od −20°C, wersje Standard Range i Mid Range.",
    "description": "ProGlove MARK 2 to pierwotny model rodziny MARK i najczęściej używany skaner noszony ProGlove. Pomarańczowa obudowa 50 × 45 × 16 mm waży 40 g i jest cieńsza niż palec, więc skaner nie przeszkadza przy pracy w ciasnych miejscach, np. przy montażu.\n\nOd MARK Basic odróżniają go dwie cechy: akumulator 670 mAh na ok. 12 000 skanów, czyli na pracę wielozmianową, oraz praca w temperaturze od −20 do +50°C, także w chłodni. Ładowanie w stacji trwa 2 godziny. Obudowa IP54 jest odporna na kilkukrotne upadki z wysokości 2 m na beton, a każdy odczyt sygnalizują dioda, dźwięk i wibracja.\n\nWersja Mid Range (M003-EU) z celownikiem laserowym służy do wymagających zadań logistycznych; kod Code 39 20 mil czyta w zakresie 5–137 cm. Wersja Standard Range (M004-EU) odczytuje kody blisko dłoni, do ok. 90 cm, i sprawdza się przy montażu i w produkcji.\n\nMARK 2 komunikuje się z Androidem i iOS w standardzie Bluetooth Low Energy, z komputerem przez ProGlove Gateway na USB, a wersje EU mają też radio 868 MHz do ProGlove Access Point.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane dla skanera: mocowanie (jedno z) — sprzedawane osobno**\n\n- [Hand Strap ProGlove, 2 × prawa i 1 × lewa ręka, 3 szt. (G011-MIX-3)](/produkt/proglove-g011-mix-3)\n- [Index Trigger ProGlove, rozmiar M, prawa ręka, 3 szt. (G006-MR-3)](/produkt/proglove-g006-mr-3)\n- [Reel ProGlove ze smyczami, 2 szt. (G008-LY-2)](/produkt/proglove-g008-ly-2)\n\n**Wymagane dla skanera: stacja ładująca (jedna z) — sprzedawane osobno**\n\n- [Stacja ładująca ProGlove 2-gniazdowa z zasilaczem EU (C006-EU)](/produkt/proglove-c006-eu)\n- [Stacja ładująca ProGlove 10-gniazdowa z zasilaczem (C007-INT)](/produkt/proglove-c007-int)\n\nDokup tylko te elementy, których jeszcze nie masz.",
    "categoryId": "skanery-kodow-kreskowych",
    "subcategoryIds": [
      "skanery-pierscieniowe"
    ],
    "manufacturerId": "proglove",
    "sameAs": "https://proglove.com/products/hardware/mark-2/",
    "priceFrom": 4472.71,
    "availability": "available",
    "images": [
      "/images/products/proglove-m004-eu.png",
      "/images/products/proglove-m004-eu-2.png"
    ],
    "imageDescriptions": [
      "ProGlove MARK 2 Standard Range — pomarańczowy skaner noszony, widok z przodu",
      "ProGlove MARK 2 — wersje Standard Range i Mid Range obok siebie"
    ],
    "tags": [
      "logistyka",
      "produkcja",
      "magazyn"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Typ skanera",
        "value": "Imager 2D; Standard Range z celownikiem LED albo Mid Range z celownikiem laserowym, 650 nm"
      },
      {
        "name": "Zasięg odczytu",
        "value": "Standard Range: ok. 10–90 cm (np. UPC-A 4–58 cm); Mid Range: optymalnie ok. 30–150 cm (np. UPC-A 6–97 cm, Code 39 20 mil 5–137 cm, Code 39 100 mil 28–437 cm)"
      },
      {
        "name": "Odczyt kodów",
        "value": "1D (m.in. GS1 DataBar), 2D (PDF417, MicroPDF417, Data Matrix, QR, Micro QR, Aztec, MaxiCode i inne), kody pocztowe"
      },
      {
        "name": "Łączność",
        "value": "Bluetooth Low Energy 4.0–5.0 (2,4 GHz); wersje EU także Sub-GHz 863–870 MHz (tylko z ProGlove Access Point)"
      },
      {
        "name": "Zasięg radiowy",
        "value": "40 m w otwartej przestrzeni i 10–20 m w budynku; z ProGlove Gateway 70 m i 30–40 m (w środowisku przemysłowym zasięg może być mniejszy)"
      },
      {
        "name": "Połączenie z systemem",
        "value": "Android i iOS: profil HID albo INSIGHT Mobile; komputer: USB przez ProGlove Gateway"
      },
      {
        "name": "Spust",
        "value": "Tylko mocowaniem ProGlove: Hand Strap, Index Trigger albo Reel"
      },
      {
        "name": "Bateria",
        "value": "670 mAh Li-Po, ok. 12 000 skanów na ładowanie"
      },
      {
        "name": "Czas ładowania",
        "value": "2 h w stacji ładującej ProGlove"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP54"
      },
      {
        "name": "Odporność na upadki",
        "value": "Kilkukrotne upadki z 2 m na beton; 2000 przewrotów z 0,5 m"
      },
      {
        "name": "Temperatura pracy",
        "value": "−20°C do +50°C (ładowanie +5°C do +40°C)"
      },
      {
        "name": "Wymiary",
        "value": "50 × 45 × 16 mm"
      },
      {
        "name": "Masa",
        "value": "40 g"
      },
      {
        "name": "Laser",
        "value": "Mid Range: klasa 2 według EN 60825-1"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Skaner; mocowanie i stację ładującą zamawia się osobno"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy; kontrakty serwisowe ProGlove Care na 36 albo 60 miesięcy na zapytanie"
      }
    ],
    "applications": [
      "Kompletacja i sortowanie w centrach logistycznych",
      "Montaż i produkcja z odczytem z bliska",
      "Kontrola jakości na linii",
      "Praca w temperaturze do −20°C"
    ],
    "variants": [
      {
        "partNumber": "M004-EU",
        "name": "M004-EU, Standard Range",
        "attributes": {
          "Zasięg": "Standard Range"
        },
        "priceFrom": 4472.71,
        "availability": "available"
      },
      {
        "partNumber": "M003-EU",
        "name": "M003-EU, Mid Range",
        "attributes": {
          "Zasięg": "Mid Range"
        },
        "priceFrom": 4472.71,
        "availability": "on-order"
      }
    ],
    "variantAttributeTooltips": {
      "Zasięg": "Odległość odczytu kodów w MARK 2.\n\n• Standard Range — celownik LED, odczyt z bliska do ok. 90 cm; montaż i produkcja.\n\n• Mid Range — celownik laserowy, optymalnie ok. 30–150 cm; logistyka i etykiety dalej od dłoni."
    },
    "compatibleAccessories": [],
    "relatedAccessories": [
      "proglove-g011-mix-3",
      "proglove-g006-mr-3",
      "proglove-g008-ly-2",
      "proglove-c006-eu",
      "proglove-c007-int",
      "proglove-x001-a007",
      "proglove-a009-eu",
      "proglove-z001-001",
      "proglove-z009-000",
      "proglove-c006-int",
      "proglove-g011-r-10",
      "proglove-g011-l-10",
      "proglove-g008-2",
      "proglove-g006-ml-3",
      "proglove-g006-sr-3",
      "proglove-g006-sl-3",
      "proglove-g006-lr-3",
      "proglove-g006-ll-3",
      "proglove-g006-mr-10",
      "proglove-g006-ml-10",
      "proglove-g006-sr-10",
      "proglove-g006-sl-10",
      "proglove-g006-lr-10",
      "proglove-g006-ll-10"
    ],
    "relatedProducts": [
      "proglove-mark-3",
      "proglove-mark-basic",
      "proglove-mark-display",
      "m3-wr10"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa ProGlove MARK 2 (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mark-2.pdf",
        "size": "150 KB"
      },
      {
        "name": "Instrukcja szybkiego startu ProGlove MARK (EN)",
        "type": "manual",
        "url": "/datasheets/proglove-mark-quickstart.pdf",
        "size": "1,6 MB"
      }
    ],
    "faq": [
      {
        "question": "Czym różni się MARK 2 Standard Range od Mid Range?",
        "answer": "Standard Range ma celownik LED i odczytuje kody z bliska, np. UPC-A z 4–58 cm. Mid Range ma laser klasy 2 i odczytuje dalej, np. UPC-A z 6–97 cm, a duży Code 39 100 mil do ok. 4,4 m. Producent zaleca Mid Range do logistyki, a Standard Range do montażu."
      },
      {
        "question": "Do czego służy radio 868 MHz w MARK 2?",
        "answer": "Wersje EU mają oprócz Bluetooth radio Sub-GHz 863–870 MHz. Działa ono tylko z ProGlove Access Point, który łączy skaner z komputerem przez USB lub RS-232. Przy połączeniu Bluetooth z terminalem albo przez Gateway to radio nie jest używane."
      },
      {
        "question": "Czy MARK 2 może pracować w chłodni?",
        "answer": "Tak, w zakresie od −20 do +50°C. Ładowanie odbywa się w temperaturze +5 do +40°C, więc stacja powinna stać poza strefą chłodzoną. W niskiej temperaturze producent zaleca Hand Strap lub Reel, bo Index Trigger działa od −5°C."
      },
      {
        "question": "Ile skanów wykona MARK 2 na jednym ładowaniu?",
        "answer": "Około 12 000, zależnie od ustawień i warunków. To tyle samo co w MARK 3 i więcej niż w MARK Basic (ok. 8000) i LEO (ok. 4000)."
      },
      {
        "question": "Czy MARK 2 zastąpi skaner ręczny?",
        "answer": "Producent przeznacza MARK 2 właśnie do zastąpienia skanerów ręcznych. Skaner na grzbiecie dłoni nie wymaga podnoszenia i odkładania, a odczyt uruchamia spust w mocowaniu. Do kodów z dużej odległości lepszy jest skaner Multi Range, np. [MARK 3](/produkt/proglove-mark-3)."
      },
      {
        "question": "Jakie są alternatywy dla MARK 2?",
        "answer": "[MARK Basic](/produkt/proglove-mark-basic) oferuje wersję Multi Range czytającą od 10 do 250 cm, ale działa dopiero od 0°C. [MARK 3](/produkt/proglove-mark-3) czyta kody do 6 m i ma szczelniejszą obudowę IP65. Skanery pierścieniowe na palec to [M3 WR10](/produkt/m3-wr10) i [M3 WR15](/produkt/m3-wr15)."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-mark-3",
    "slug": "proglove-mark-3",
    "name": "ProGlove MARK 3",
    "seoH1": "ProGlove MARK 3",
    "seoTitle": "ProGlove MARK 3 — skaner noszony Multi Range do 6 m, IP65",
    "seoDescription": "ProGlove MARK 3: skaner noszony na dłoni, Multi Range 10 cm–6 m, IP65, praca od −20°C, ok. 12 000 skanów. Skaner MARK 3 ProGlove, PN: M010.",
    "shortDescription": "ProGlove MARK 3 — skaner noszony z silnikiem Multi Range od 10 cm do 6 m, obudową IP65 i pracą od −20°C; do magazynu, rampy i wózków widłowych.",
    "description": "ProGlove MARK 3 ma silnik Multi Range o rozdzielczości 2688 × 1520 z zielonym celownikiem laserowym 520 nm. Zakres roboczy sięga od 10 cm do 6 m: etykietę UPC-A skaner odczytuje z 6–180 cm, a duży kod Code 39 100 mil nawet z 14 m. ProGlove przeznacza ten model do ok. 95% procesów.\n\nJeden MARK 3 zastępuje więc kilka różnych czytników: przy pracy z wózka widłowego i z pojazdu, w cross-dockingu, przy kompletacji palet, obsłudze bagażu, przyjęciach towaru, pakowaniu, sortowaniu oraz przy montażu i sekwencjonowaniu.\n\nObudowa w klasie IP65 jest pyłoszczelna i odporna na strugi wody, dlatego skaner pracuje także na zewnątrz, a w zakresie od −20 do +50°C również w chłodni. Przy masie 39 g i wymiarach 50 × 45 × 17 mm akumulator 670 mAh daje ok. 12 000 skanów, a ładowanie trwa 2 godziny. MARK 3 łączy się z Androidem i iOS przez Bluetooth Low Energy albo z komputerem przez ProGlove Gateway; z bramką zasięg radiowy wynosi do 70 m w otwartej przestrzeni.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane dla skanera: mocowanie (jedno z) — sprzedawane osobno**\n\n- [Hand Strap ProGlove, 2 × prawa i 1 × lewa ręka, 3 szt. (G011-MIX-3)](/produkt/proglove-g011-mix-3)\n- [Index Trigger ProGlove, rozmiar M, prawa ręka, 3 szt. (G006-MR-3)](/produkt/proglove-g006-mr-3)\n- [Reel ProGlove ze smyczami, 2 szt. (G008-LY-2)](/produkt/proglove-g008-ly-2)\n\n**Wymagane dla skanera: stacja ładująca (jedna z) — sprzedawane osobno**\n\n- [Stacja ładująca ProGlove 2-gniazdowa z zasilaczem EU (C006-EU)](/produkt/proglove-c006-eu)\n- [Stacja ładująca ProGlove 10-gniazdowa z zasilaczem (C007-INT)](/produkt/proglove-c007-int)\n\nDokup tylko te elementy, których jeszcze nie masz.",
    "categoryId": "skanery-kodow-kreskowych",
    "subcategoryIds": [
      "skanery-pierscieniowe"
    ],
    "manufacturerId": "proglove",
    "sameAs": "https://proglove.com/products/hardware/mark-3/",
    "priceFrom": 4472.71,
    "availability": "available",
    "images": [
      "/images/products/proglove-m010.png"
    ],
    "imageDescriptions": [
      "ProGlove MARK 3 Multi Range — pomarańczowy skaner zapięty w opasce Hand Strap (opaska sprzedawana osobno)"
    ],
    "tags": [
      "magazyn",
      "logistyka",
      "produkcja",
      "outdoor"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Typ skanera",
        "value": "Imager 2D Multi Range, 2688 × 1520; celownik: zielony laser 520 nm"
      },
      {
        "name": "Zasięg odczytu",
        "value": "Zakres roboczy ok. 10 cm–6 m; np. Data Matrix 10 mil 6–69 cm, Code 128 15 mil 18–183 cm, Code 39 100 mil do 14 m"
      },
      {
        "name": "Odczyt kodów",
        "value": "1D (m.in. GS1 DataBar), 2D (PDF417, MicroPDF417, Data Matrix, QR, Micro QR, Aztec, MaxiCode i inne), kody pocztowe"
      },
      {
        "name": "Łączność",
        "value": "Bluetooth Low Energy 4.0–5.0 (2,4 GHz)"
      },
      {
        "name": "Zasięg radiowy",
        "value": "40 m w otwartej przestrzeni i 10–20 m w budynku; z ProGlove Gateway 70 m i 30–40 m (w środowisku przemysłowym zasięg może być mniejszy)"
      },
      {
        "name": "Połączenie z systemem",
        "value": "Android i iOS: profil HID albo INSIGHT Mobile; komputer: USB przez ProGlove Gateway"
      },
      {
        "name": "Spust",
        "value": "Tylko mocowaniem ProGlove: Hand Strap, Index Trigger albo Reel"
      },
      {
        "name": "Bateria",
        "value": "670 mAh Li-Po, ok. 12 000 skanów na ładowanie"
      },
      {
        "name": "Czas ładowania",
        "value": "2 h w stacji ładującej ProGlove"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP65"
      },
      {
        "name": "Odporność na upadki",
        "value": "Kilkukrotne upadki z 2 m na beton; 2000 przewrotów z 0,5 m"
      },
      {
        "name": "Temperatura pracy",
        "value": "−20°C do +50°C (ładowanie +5°C do +40°C)"
      },
      {
        "name": "Wymiary",
        "value": "50 × 45 × 17 mm"
      },
      {
        "name": "Masa",
        "value": "39 g"
      },
      {
        "name": "Laser",
        "value": "Klasa 2 według EN 60825-1"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Skaner; mocowanie i stację ładującą zamawia się osobno"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy; kontrakty serwisowe ProGlove Care na 36 albo 60 miesięcy na zapytanie"
      }
    ],
    "applications": [
      "Skanowanie z wózka widłowego i pojazdu",
      "Cross-docking i kompletacja palet",
      "Obsługa bagażu i przyjęć towaru",
      "Montaż, sekwencjonowanie i staging",
      "Praca na zewnątrz i w chłodni"
    ],
    "variants": [
      {
        "partNumber": "M010",
        "name": "M010, Multi Range",
        "attributes": {},
        "priceFrom": 4472.71,
        "availability": "available"
      }
    ],
    "variantAttributeTooltips": {},
    "compatibleAccessories": [],
    "relatedAccessories": [
      "proglove-g011-mix-3",
      "proglove-g006-mr-3",
      "proglove-g008-ly-2",
      "proglove-c006-eu",
      "proglove-c007-int",
      "proglove-x001-a007",
      "proglove-a009-eu",
      "proglove-z001-001",
      "proglove-z009-000",
      "proglove-c006-int",
      "proglove-g011-r-10",
      "proglove-g011-l-10",
      "proglove-g008-2",
      "proglove-g006-ml-3",
      "proglove-g006-sr-3",
      "proglove-g006-sl-3",
      "proglove-g006-lr-3",
      "proglove-g006-ll-3",
      "proglove-g006-mr-10",
      "proglove-g006-ml-10",
      "proglove-g006-sr-10",
      "proglove-g006-sl-10",
      "proglove-g006-lr-10",
      "proglove-g006-ll-10"
    ],
    "relatedProducts": [
      "proglove-mark-2",
      "proglove-mark-basic",
      "proglove-mai",
      "m3-wr15"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa ProGlove MARK 3 (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mark-3.pdf",
        "size": "141 KB"
      },
      {
        "name": "Instrukcja szybkiego startu ProGlove MARK (EN)",
        "type": "manual",
        "url": "/datasheets/proglove-mark-quickstart.pdf",
        "size": "1,6 MB"
      }
    ],
    "faq": [
      {
        "question": "Jaki zasięg odczytu ma ProGlove MARK 3?",
        "answer": "Zależy od wielkości kodu. Data Matrix 10 mil MARK 3 odczytuje z 6–69 cm, Code 128 15 mil z 18–183 cm, a Code 39 100 mil do 14 m. Producent podaje zakres roboczy 10 cm–6 m."
      },
      {
        "question": "Czy MARK 3 pracuje w chłodni i na zewnątrz?",
        "answer": "Tak: pracuje od −20 do +50°C i ma obudowę IP65. Stację trzeba jednak ustawić w miejscu o temperaturze 5–40°C, bo tylko wtedy skaner się ładuje. W zimnie lepiej sprawdzają się opaska Hand Strap i Reel niż Index Trigger, który działa od −5°C."
      },
      {
        "question": "Czym MARK 3 różni się od MARK 2?",
        "answer": "Oba modele wykonują ok. 12 000 skanów na ładowaniu i działają od −20°C. MARK 3 odczytuje kody do 6 m dzięki silnikowi Multi Range i ma obudowę IP65. [MARK 2](/produkt/proglove-mark-2) występuje w wersji Standard Range albo Mid Range, ma obudowę IP54 i dodatkowe radio 868 MHz."
      },
      {
        "question": "Jak MARK 3 łączy się z systemem?",
        "answer": "Bezprzewodowo, przez BLE: w profilu HID z urządzeniami z Androidem i iOS albo przez aplikację INSIGHT Mobile. Z komputerem łączy się przez [ProGlove Gateway](/produkt/proglove-x001-a007) na USB. Z Gateway zasięg radiowy wynosi do 70 m w otwartej przestrzeni i 30–40 m w budynku."
      },
      {
        "question": "Czy laser MARK 3 jest bezpieczny?",
        "answer": "MARK 3 ma laser klasy 2 według EN 60825-1 i IEC 60825-1. Producent ostrzega, aby nie patrzeć bezpośrednio w wiązkę."
      },
      {
        "question": "Jaka jest alternatywa dla MARK 3?",
        "answer": "Gdy wystarczy zasięg do ok. 250 cm i praca od 0°C, tańszy jest [MARK Basic Multi Range](/produkt/proglove-mark-basic). Ten sam zasięg do 6 m, kolorowy ekran dotykowy i Wi-Fi ma [MAI](/produkt/proglove-mai)."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-mark-display",
    "slug": "proglove-mark-display",
    "name": "ProGlove MARK Display",
    "seoH1": "ProGlove MARK Display",
    "seoTitle": "ProGlove MARK Display — skaner noszony z ekranem e-paper",
    "seoDescription": "Skaner noszony z ekranem ProGlove MARK Display: e-paper 1,54″, 48 g, wersje SR i MR, ok. 7500 skanów na baterii. PN: M008, M006.",
    "shortDescription": "ProGlove MARK Display — skaner noszony z ekranem e-paper 1,54″, który pokazuje pracownikowi kolejny krok, lokalizację i ilość.",
    "description": "ProGlove MARK Display pokazuje pracownikowi na dłoni kolejny krok pracy: lokalizację, numer artykułu albo ilość do pobrania. Ekran e-paper 1,54″ (200 × 200 pikseli, 188 dpi) jest kontrastowy, nie odbija światła i pozostaje czytelny przy każdym oświetleniu; układ i orientację treści ustala się w konfiguracji.\n\nSkaner z ekranem pracuje w parze z urządzeniem mobilnym i zastępuje terminal pistoletowy przy kompletacji, sortowaniu, inwentaryzacji, sekwencjonowaniu i montażu.\n\nMARK Display nie działa jako klawiatura Bluetooth (HID). Z Androidem łączy się przez aplikację INSIGHT Mobile, z iOS przez ProGlove iOS SDK, a z komputerem przez ProGlove Gateway. Treść ekranu przekazuje zintegrowany system: WebSocket API, np. z ABAP Push Channels, ITS Mobile albo Ivanti Wavelink.\n\nWersja Standard Range (M008) z celownikiem LED najszybciej odczytuje kody blisko dłoni. Mid Range (M006) z celownikiem laserowym ma optymalny zakres ok. 30–150 cm, a Code 39 20 mil odczytuje z 5–137 cm. Skaner waży 48 g, ma obudowę IP54 i pracuje w temperaturze 0–45°C; na jednym ładowaniu akumulatora 670 mAh wykonuje ok. 7500 odczytów, a ładowanie trwa 2 godziny.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane dla skanera: mocowanie (jedno z) — sprzedawane osobno**\n\n- [Hand Strap ProGlove, 2 × prawa i 1 × lewa ręka, 3 szt. (G011-MIX-3)](/produkt/proglove-g011-mix-3)\n- [Index Trigger ProGlove, rozmiar M, prawa ręka, 3 szt. (G006-MR-3)](/produkt/proglove-g006-mr-3)\n- [Reel ProGlove ze smyczami, 2 szt. (G008-LY-2)](/produkt/proglove-g008-ly-2)\n\n**Wymagane dla skanera: stacja ładująca (jedna z) — sprzedawane osobno**\n\n- [Stacja ładująca ProGlove 2-gniazdowa z zasilaczem EU (C006-EU)](/produkt/proglove-c006-eu)\n- [Stacja ładująca ProGlove 10-gniazdowa z zasilaczem (C007-INT)](/produkt/proglove-c007-int)\n\nDokup tylko te elementy, których jeszcze nie masz.",
    "categoryId": "skanery-kodow-kreskowych",
    "subcategoryIds": [
      "skanery-pierscieniowe"
    ],
    "manufacturerId": "proglove",
    "sameAs": "https://proglove.com/products/hardware/mark-display/",
    "priceFrom": 5286.61,
    "availability": "available",
    "images": [
      "/images/products/proglove-m008.png",
      "/images/products/proglove-m008-2.png"
    ],
    "imageDescriptions": [
      "ProGlove MARK Display — wersje Standard Range i Mid Range z ekranem e-paper",
      "ProGlove MARK Display Mid Range — ekran z lokalizacją i ilością do pobrania"
    ],
    "tags": [
      "magazyn",
      "logistyka",
      "produkcja"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Typ skanera",
        "value": "Imager 2D; Standard Range z celownikiem LED albo Mid Range z celownikiem laserowym, 650 nm"
      },
      {
        "name": "Zasięg odczytu",
        "value": "Standard Range: np. Data Matrix 10 mil 6–27 cm, Code 39 20 mil 4–92 cm; Mid Range: optymalnie ok. 30–150 cm, np. Code 39 20 mil 5–137 cm"
      },
      {
        "name": "Ekran",
        "value": "E-paper 1,54″, 200 × 200 pikseli, 188 dpi"
      },
      {
        "name": "Odczyt kodów",
        "value": "1D (m.in. GS1 DataBar), 2D (PDF417, MicroPDF417, Data Matrix, QR, Micro QR, Aztec, MaxiCode i inne), kody pocztowe"
      },
      {
        "name": "Łączność",
        "value": "Bluetooth Low Energy 4.0–5.0 (2,4 GHz)"
      },
      {
        "name": "Zasięg radiowy",
        "value": "40 m w otwartej przestrzeni, 10–20 m w budynku (w środowisku przemysłowym zasięg może być mniejszy)"
      },
      {
        "name": "Połączenie z systemem",
        "value": "Android: INSIGHT Mobile (aplikacja/SDK); iOS: ProGlove iOS SDK; komputer: USB przez ProGlove Gateway"
      },
      {
        "name": "Spust",
        "value": "Tylko mocowaniem ProGlove: Hand Strap, Index Trigger albo Reel"
      },
      {
        "name": "Bateria",
        "value": "670 mAh Li-Po, ok. 7500 skanów na ładowanie"
      },
      {
        "name": "Czas ładowania",
        "value": "2 h w stacji ładującej ProGlove"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP54"
      },
      {
        "name": "Odporność na upadki",
        "value": "Kilkukrotne upadki z 2 m na beton; 1000 przewrotów z 0,5 m"
      },
      {
        "name": "Temperatura pracy",
        "value": "0°C do +45°C (ładowanie +5°C do +40°C)"
      },
      {
        "name": "Wymiary",
        "value": "50 × 45 × 18 mm"
      },
      {
        "name": "Masa",
        "value": "48 g"
      },
      {
        "name": "Laser",
        "value": "Mid Range: klasa 2 według EN 60825-1"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Skaner; mocowanie i stację ładującą zamawia się osobno"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy; kontrakty serwisowe ProGlove Care na 36 albo 60 miesięcy na zapytanie"
      }
    ],
    "applications": [
      "Wyświetlanie lokalizacji i ilości przy kompletacji",
      "Zastąpienie terminali pistoletowych",
      "Praca z systemami telnet i SAP ITS Mobile"
    ],
    "variants": [
      {
        "partNumber": "M008",
        "name": "M008, Standard Range",
        "attributes": {
          "Zasięg": "Standard Range"
        },
        "priceFrom": 5286.61,
        "availability": "available"
      },
      {
        "partNumber": "M006",
        "name": "M006, Mid Range",
        "attributes": {
          "Zasięg": "Mid Range"
        },
        "priceFrom": 5286.61,
        "availability": "on-order"
      }
    ],
    "variantAttributeTooltips": {
      "Zasięg": "Zakres odczytu w MARK Display.\n\n• Standard Range — celownik LED; najszybszy odczyt kodów blisko dłoni.\n\n• Mid Range — celownik laserowy, optymalnie ok. 30–150 cm; zadania ze zmienną odległością od kodu."
    },
    "compatibleAccessories": [],
    "relatedAccessories": [
      "proglove-g011-mix-3",
      "proglove-g006-mr-3",
      "proglove-g008-ly-2",
      "proglove-c006-eu",
      "proglove-c007-int",
      "proglove-x001-a007",
      "proglove-a009-eu",
      "proglove-z001-001",
      "proglove-z009-000",
      "proglove-c006-int",
      "proglove-g011-r-10",
      "proglove-g011-l-10",
      "proglove-g008-2",
      "proglove-g006-ml-3",
      "proglove-g006-sr-3",
      "proglove-g006-sl-3",
      "proglove-g006-lr-3",
      "proglove-g006-ll-3",
      "proglove-g006-mr-10",
      "proglove-g006-ml-10",
      "proglove-g006-sr-10",
      "proglove-g006-sl-10",
      "proglove-g006-lr-10",
      "proglove-g006-ll-10"
    ],
    "relatedProducts": [
      "proglove-mai",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-basic"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa ProGlove MARK Display (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mark-display.pdf",
        "size": "149 KB"
      },
      {
        "name": "Instrukcja szybkiego startu ProGlove MARK (EN)",
        "type": "manual",
        "url": "/datasheets/proglove-mark-quickstart.pdf",
        "size": "1,6 MB"
      }
    ],
    "faq": [
      {
        "question": "Co wyświetla ekran MARK Display?",
        "answer": "Treść ustala system, z którym skaner jest zintegrowany, np. lokalizację, numer artykułu, ilość albo potwierdzenie kroku. Układ i orientację ekranu można skonfigurować. Ekran e-paper ma przekątną 1,54″ i rozdzielczość 200 × 200 pikseli."
      },
      {
        "question": "Czy MARK Display działa jako zwykły skaner Bluetooth HID?",
        "answer": "Nie. MARK Display nie działa jako klawiatura Bluetooth (HID). Łączy się przez aplikację INSIGHT Mobile (Android), ProGlove iOS SDK albo przez ProGlove Gateway z komputerem. Treść ekranu przekazuje zintegrowany system."
      },
      {
        "question": "Jak zintegrować MARK Display z WMS lub SAP?",
        "answer": "Producent udostępnia WebSocket API do bezpośredniej komunikacji z serwerem, np. przez ABAP Push Channels, oraz integrację z ITS Mobile i Ivanti Wavelink. Systemy terminalowe telnet można dostosować z pomocą partnerów ProGlove: StayLinked i Ivanti."
      },
      {
        "question": "Który zasięg MARK Display wybrać?",
        "answer": "W wersji Standard Range celownikiem jest dioda LED, a odczyt z bliska jest najszybszy: Data Matrix 10 mil z 6–27 cm. Wersja Mid Range celuje laserem klasy 2 i ma optymalny zakres ok. 30–150 cm; Code 39 20 mil odczytuje z 5–137 cm."
      },
      {
        "question": "Czy MARK Display nadaje się do chłodni?",
        "answer": "Nie. Zakres temperatury pracy MARK Display to 0–45°C. Od −20°C działają [MARK 2](/produkt/proglove-mark-2) i [MARK 3](/produkt/proglove-mark-3), ale nie mają ekranu."
      },
      {
        "question": "Jaka jest alternatywa dla MARK Display?",
        "answer": "Kolorowy, dotykowy ekran 1,95″ oraz Wi-Fi i zasięg do 6 m oferuje [MAI](/produkt/proglove-mai). Bez ekranu, za to z baterią na ok. 12 000 skanów, pracuje [MARK 2](/produkt/proglove-mark-2)."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-mai",
    "slug": "proglove-mai",
    "name": "ProGlove MAI",
    "seoH1": "ProGlove MAI",
    "seoTitle": "ProGlove MAI — skaner noszony z ekranem dotykowym i Wi-Fi 6",
    "seoDescription": "ProGlove MAI: skaner noszony z kolorowym ekranem dotykowym AMOLED 1,95″, Wi-Fi 6 i BLE 5.4, Multi Range, IP65. MAI ProGlove, PN: M020-EU.",
    "shortDescription": "ProGlove MAI — urządzenie noszone na dłoni ze skanerem Multi Range, kolorowym ekranem dotykowym 1,95″ i czterema przyciskami; pracuje przez Wi-Fi albo Bluetooth.",
    "description": "ProGlove MAI to urządzenie noszone na grzbiecie dłoni (wearable companion), które łączy skaner Multi Range z kolorowym ekranem dotykowym AMOLED 1,95″ (410 × 502 piksele, do 900 nitów). Ekran prowadzi pracownika krok po kroku przy kompletacji, sortowaniu, uzupełnianiu i inwentaryzacji. Pozwala potwierdzić lub poprawić ilość i zgłosić wyjątek, np. pustą lokalizację. Do dyspozycji jest ponad 80 konfigurowalnych szablonów ekranu.\n\nUrządzenie pracuje samodzielnie przez Wi-Fi 6 (2,4 i 5 GHz). Przez Bluetooth 5.4 łączy się z urządzeniem z Androidem (aplikacja INSIGHT Mobile), z iOS (SDK) albo z ProGlove Gateway. Odczyt uruchamia spust w opasce Hand Strap Gen 2; skanowanie można też przypisać do jednego z czterech programowalnych przycisków lub do ekranu. Silnik Multi Range odczytuje kody z odległości od 5 cm do 6 m. Sygnalizację zapewniają cztery kolorowe diody, głośnik 85 dB(A) i wibracje, a czujniki to 9-osiowy IMU i barometr.\n\nMAI waży 68 g, ma obudowę IP65 i przetrzymuje wielokrotne upadki z 2 m oraz tysiąc przewrotów z wysokości metra. Pracuje w temperaturze od −10 do +50°C. Bateria 1250 mAh wystarcza na 1–2 zmiany, a ładowanie w stacji Gen 2 trwa ok. 130 minut.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane dla MAI: mocowanie (jedno z) — sprzedawane osobno**\n\n- [Hand Strap Gen 2 ProGlove do MAI, lewa i prawa ręka, 3 szt. (G020-MIX-3)](/produkt/proglove-g020-mix-3)\n- [Hand Strap Gen 2 ProGlove do MAI, prawa ręka, 10 szt. (G020-R-10)](/produkt/proglove-g020-r-10)\n- [Hand Strap Gen 2 ProGlove do MAI, lewa ręka, 10 szt. (G020-L-10)](/produkt/proglove-g020-l-10)\n\n**Wymagane dla MAI: stacja ładująca (jedna z) — sprzedawane osobno**\n\n- [Stacja ładująca ProGlove Gen 2 do MAI, 2-gniazdowa, zasilacz EU (C021-EU)](/produkt/proglove-c021-eu)\n- [Stacja ładująca ProGlove Gen 2 do MAI, 2-gniazdowa, zasilacz INT (C021-INT)](/produkt/proglove-c021-int)\n\nMocowania i stacje do skanerów MARK i LEO nie pasują do MAI.",
    "categoryId": "skanery-kodow-kreskowych",
    "subcategoryIds": [
      "skanery-pierscieniowe"
    ],
    "manufacturerId": "proglove",
    "sameAs": "https://proglove.com/products/wearable-companion/mai/",
    "priceFrom": 6590.36,
    "availability": "available",
    "images": [
      "/images/products/proglove-m020-eu.png",
      "/images/products/proglove-m020-eu-2.png"
    ],
    "imageDescriptions": [
      "ProGlove MAI — pomarańczowa obudowa, ekran dotykowy z komunikatem i polami Report i Skip, po bokach cztery przyciski",
      "ProGlove MAI — ekran z lokalizacją, numerem artykułu i ilością do pobrania"
    ],
    "tags": [
      "magazyn",
      "logistyka"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Typ skanera",
        "value": "Imager 2D Multi Range, 2688 × 1520; celownik: zielony laser 520 nm"
      },
      {
        "name": "Zasięg odczytu",
        "value": "Ok. 5 cm–6 m; np. Data Matrix 10 mil 6–69 cm, Code 39 100 mil do 14 m"
      },
      {
        "name": "Ekran",
        "value": "Kolorowy AMOLED 1,95″, dotykowy, 410 × 502 piksele, 332 ppi, do 900 nitów"
      },
      {
        "name": "Sterowanie i sygnalizacja",
        "value": "4 programowalne przyciski, 4 kolorowe diody LED, głośnik 85 dB(A), wibracje"
      },
      {
        "name": "Czujniki",
        "value": "9-osiowy IMU (akcelerometr, żyroskop, kompas), barometr"
      },
      {
        "name": "Odczyt kodów",
        "value": "1D (m.in. Code 128, Interleaved 2 of 5, GS1 DataBar), 2D (PDF417, MicroPDF417, Data Matrix, QR, Micro QR, Aztec, MaxiCode i inne), kody pocztowe"
      },
      {
        "name": "Łączność",
        "value": "Wi-Fi 6 (IEEE 802.11a/b/g/n/ac/ax), 2,4 i 5 GHz; Bluetooth Low Energy 5.4"
      },
      {
        "name": "Zasięg radiowy",
        "value": "Bluetooth: 75 m w otwartej przestrzeni, 30 m w budynku; Wi-Fi 2,4 GHz: 70 m / 25 m; Wi-Fi 5 GHz: 35 m / 15 m"
      },
      {
        "name": "Połączenie z systemem",
        "value": "Wi-Fi samodzielnie; Android: INSIGHT Mobile (SDK, Intent, MQTT, WebSocket, klawiatura); iOS: SDK; ProGlove Gateway i Gateway Plus"
      },
      {
        "name": "Spust",
        "value": "Opaska Hand Strap Gen 2; skanowanie można przypisać do przycisku lub ekranu"
      },
      {
        "name": "Bateria",
        "value": "1250 mAh Li-Po, 1–2 zmiany pracy; co najmniej 80% pojemności po 500 cyklach"
      },
      {
        "name": "Czas ładowania",
        "value": "Ok. 130 min w stacji ładującej Gen 2 z dołączonym zasilaczem"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP65"
      },
      {
        "name": "Odporność na upadki",
        "value": "Wielokrotne upadki z 2 m na beton; 1000 przewrotów z 1 m"
      },
      {
        "name": "Temperatura pracy",
        "value": "−10°C do +50°C (ładowanie +5°C do +40°C)"
      },
      {
        "name": "Wymiary",
        "value": "59,6 × 52,1 × 21,4 mm"
      },
      {
        "name": "Masa",
        "value": "68 g"
      },
      {
        "name": "Laser",
        "value": "Klasa 2 według EN 60825-1"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Urządzenie MAI; opaskę Hand Strap Gen 2 i stację ładującą Gen 2 zamawia się osobno"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy; kontrakty serwisowe ProGlove Care na 36 albo 60 miesięcy na zapytanie"
      }
    ],
    "applications": [
      "Prowadzenie operatora krok po kroku na ekranie",
      "Potwierdzanie i korekta ilości przy kompletacji",
      "Zgłaszanie wyjątków, np. pustej lokalizacji",
      "Uzupełnianie zapasów i inwentaryzacja bez terminala"
    ],
    "variants": [
      {
        "partNumber": "M020-EU",
        "name": "M020-EU, wersja EU",
        "attributes": {},
        "priceFrom": 6590.36,
        "availability": "available"
      }
    ],
    "variantAttributeTooltips": {},
    "compatibleAccessories": [],
    "relatedAccessories": [
      "proglove-g020-mix-3",
      "proglove-g020-r-10",
      "proglove-g020-l-10",
      "proglove-c021-eu",
      "proglove-c021-int",
      "proglove-x001-a007",
      "proglove-a009-eu",
      "proglove-z001-001",
      "proglove-z009-000"
    ],
    "relatedProducts": [
      "proglove-mark-display",
      "proglove-mark-3"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa ProGlove MAI (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mai.pdf",
        "size": "250 KB"
      },
      {
        "name": "Instrukcja szybkiego startu ProGlove MAI (EN)",
        "type": "manual",
        "url": "/datasheets/proglove-mai-quickstart.pdf",
        "size": "2,4 MB"
      }
    ],
    "faq": [
      {
        "question": "Czym MAI różni się od MARK Display?",
        "answer": "MAI ma kolorowy ekran dotykowy AMOLED 1,95″, cztery przyciski, Wi-Fi 6 i silnik Multi Range do 6 m. [MARK Display](/produkt/proglove-mark-display) ma ekran e-paper 1,54″ bez dotyku i wersje Standard Range lub Mid Range. MAI waży 68 g, a MARK Display 48 g."
      },
      {
        "question": "Czy MAI działa bez telefonu lub terminala?",
        "answer": "Tak. MAI może pracować samodzielnie przez Wi-Fi w pasmach 2,4 i 5 GHz. Może też łączyć się przez Bluetooth 5.4 z Androidem (INSIGHT Mobile), z iOS (SDK) albo przez Gateway lub Gateway Plus z systemem po USB, Ethernecie lub RS-232."
      },
      {
        "question": "Czy do MAI pasują mocowania i stacje skanerów MARK?",
        "answer": "Nie. MAI ma inny klips, dlatego wymaga opaski [Hand Strap Gen 2](/produkt/proglove-g020-mix-3) i stacji ładującej Gen 2. Index Trigger, Hand Strap, Reel i stacje do skanerów MARK i LEO do MAI nie pasują."
      },
      {
        "question": "Na jak długo wystarcza bateria MAI?",
        "answer": "Producent podaje 1–2 zmiany pracy z ekranem, dotykiem i przyciskami przy połączeniu Bluetooth. Wynik zależy od aplikacji i warunków. Po 500 cyklach ładowania bateria zachowuje co najmniej 80% pojemności."
      },
      {
        "question": "Czy MAI jest sprzedawany z oprogramowaniem?",
        "answer": "Ta karta dotyczy samego urządzenia. Pakiety MAI z oprogramowaniem i serwisem ProGlove Care przygotujemy na zapytanie. Licencję kupioną w pakiecie trzeba aktywować w ciągu 90 dni; po tym czasie producent uznaje ją za aktywną."
      },
      {
        "question": "Jaka jest alternatywa dla MAI?",
        "answer": "Bez ekranu, z tym samym zasięgiem do 6 m i obudową IP65, pracuje [MARK 3](/produkt/proglove-mark-3). Prostszy ekran e-paper ma [MARK Display](/produkt/proglove-mark-display)."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  }
]

export const progloveAccessories: Product[] = [
  {
    "id": "proglove-g011-mix-3",
    "slug": "proglove-g011-mix-3",
    "name": "Hand Strap ProGlove, 2 × prawa i 1 × lewa ręka, 3 szt.",
    "seoH1": "Hand Strap ProGlove, 2 × prawa i 1 × lewa ręka, 3 szt.",
    "seoTitle": "Hand Strap ProGlove, 2 × prawa i 1 × lewa ręka, 3 szt. — G011-MIX-3",
    "seoDescription": "Hand Strap ProGlove G011-MIX-3: trzy opaski (dwie prawe, jedna lewa) na skaner MARK lub LEO. Opaska ProGlove na dłoń w jednym rozmiarze.",
    "shortDescription": "Hand Strap ProGlove w opakowaniu trzech sztuk: dwie opaski na prawą i jedna na lewą rękę. Opaski trzymają skaner MARK lub LEO na grzbiecie dłoni. PN G011-MIX-3.",
    "description": "Opakowanie G011-MIX-3 zawiera trzy opaski Hand Strap: dwie na prawą rękę i jedną na lewą. Producent przygotował je do testów i projektów pilotażowych.\n\nHand Strap trzyma skaner na grzbiecie dłoni. Występuje w jednym rozmiarze: rozciągliwe pasy na rzep regulują się płynnie, a wnętrze dłoni pozostaje odkryte. Opaskę można nosić na gołej dłoni albo na rękawicy.\n\nOpaski przyjmują skanery [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo). MAI wymaga opaski Hand Strap Gen 2.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g011-r-10.png"
    ],
    "imageDescriptions": [
      "Hand Strap ProGlove — opaska na prawą dłoń z pomarańczowym klipsem na skaner"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 444.63,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G011-MIX-3"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "3 (2 na prawą rękę, 1 na lewą)"
      },
      {
        "name": "Rozmiar",
        "value": "Jeden, regulowany rzepem"
      },
      {
        "name": "Masa",
        "value": "17,5 g (1 szt.)"
      },
      {
        "name": "Temperatura pracy",
        "value": "−30°C do +50°C"
      },
      {
        "name": "Pranie",
        "value": "W 30°C, do 6 cykli"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Pilotaż skanerów noszonych na jednym stanowisku"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g011-l-10",
    "slug": "proglove-g011-l-10",
    "name": "Hand Strap ProGlove, lewa ręka, 10 szt.",
    "seoH1": "Hand Strap ProGlove, lewa ręka, 10 szt.",
    "seoTitle": "Hand Strap ProGlove, lewa ręka, 10 szt. — G011-L-10",
    "seoDescription": "Hand Strap ProGlove lewy, G011-L-10, 10 szt. Opaska na lewą dłoń ze spustem do skanera ProGlove MARK albo LEO, praca od −30°C.",
    "shortDescription": "Dziesięć lewostronnych opasek Hand Strap ProGlove — osobna opaska dla każdego leworęcznego pracownika ze skanerem MARK lub LEO. PN G011-L-10.",
    "description": "W opakowaniu jest dziesięć opasek Hand Strap na lewą rękę. Taki zapas pozwala dać każdemu leworęcznemu pracownikowi własną opaskę; producent zaleca przydział osobisty, bo wydłuża on żywotność. W testach przemysłowych opaska wytrzymuje średnio ok. 60 zmian po 8 godzin.\n\nHand Strap waży 17,5 g i pracuje w temperaturze od −30 do +50°C, więc sprawdza się także w chłodni. Do lakierni lepszy jest Index Trigger, ponieważ Hand Strap nie jest wolny od substancji PWIS.\n\nKlips opaski mieści każdy z modeli: [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo); urządzenie MAI ma inny klips.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g011-l-10.png"
    ],
    "imageDescriptions": [
      "Hand Strap ProGlove w wersji na lewą rękę (zdjęcie poglądowe)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 1341.44,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G011-L-10"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "10"
      },
      {
        "name": "Strona dłoni",
        "value": "Lewa"
      },
      {
        "name": "Rozmiar",
        "value": "Jeden, regulowany rzepem"
      },
      {
        "name": "Masa",
        "value": "17,5 g (1 szt.)"
      },
      {
        "name": "Temperatura pracy",
        "value": "−30°C do +50°C"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Wyposażenie leworęcznych pracowników w osobiste opaski"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g011-r-10",
    "slug": "proglove-g011-r-10",
    "name": "Hand Strap ProGlove, prawa ręka, 10 szt.",
    "seoH1": "Hand Strap ProGlove, prawa ręka, 10 szt.",
    "seoTitle": "Hand Strap ProGlove, prawa ręka, 10 szt. — G011-R-10",
    "seoDescription": "Hand Strap ProGlove G011-R-10: 10 prawych opasek, pranie w 30°C (wersja 1.4 i nowsze). Opaska na skaner ProGlove MARK 2, MARK 3, MARK Basic, MARK Display, LEO.",
    "shortDescription": "Hand Strap ProGlove dla prawej ręki w opakowaniu zbiorczym 10 szt. — współdzielone skanery i zmienna obsada. PN G011-R-10.",
    "description": "Opakowanie zbiorcze zawiera dziesięć opasek Hand Strap na prawą rękę. Producent poleca Hand Strap przy zmiennej obsadzie, współdzielonych skanerach i sezonowych szczytach: opaska ma jeden rozmiar i szybko przechodzi z ręki do ręki.\n\nMateriał to głównie poliester, nylon i poliuretan. Opaskę w wersji 1.4 i nowszych pierze się ręcznie lub w pralce w 30°C na delikatnym programie, najwyżej sześć razy; nie wolno jej wybielać ani suszyć w suszarce. Zużytą opaskę wymienia się bez wymiany skanera.\n\nOpaska współpracuje z modelami [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo). Do MAI służy osobny Hand Strap Gen 2.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g011-r-10.png"
    ],
    "imageDescriptions": [
      "Hand Strap ProGlove — opaska na prawą dłoń z etykietą RIGHT i miejscem na imię"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "on-order",
    "priceFrom": 1341.44,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G011-R-10"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "10"
      },
      {
        "name": "Strona dłoni",
        "value": "Prawa"
      },
      {
        "name": "Rozmiar",
        "value": "Jeden, regulowany rzepem"
      },
      {
        "name": "Masa",
        "value": "17,5 g (1 szt.)"
      },
      {
        "name": "Materiał",
        "value": "39% poliester, 24% nylon, 23% poliuretan, 4% guma"
      },
      {
        "name": "Pranie",
        "value": "W 30°C, do 6 cykli"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Opaski dla współdzielonych skanerów i pracowników sezonowych"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g006-sl-3",
    "slug": "proglove-g006-sl-3",
    "name": "Index Trigger ProGlove, rozmiar S, lewa ręka, 3 szt.",
    "seoH1": "Index Trigger ProGlove, rozmiar S, lewa ręka, 3 szt.",
    "seoTitle": "Index Trigger ProGlove, rozmiar S, lewa ręka, 3 szt. — G006-SL-3",
    "seoDescription": "Index Trigger ProGlove G006-SL-3: rozmiar S, lewa ręka, 3 szt. Mocowanie skanera MARK i LEO na dłoń, dla dłoni 5,5–8 cm. Spust ProGlove S lewy.",
    "shortDescription": "Index Trigger ProGlove S na lewą dłoń, trzy sztuki — dla wąskich dłoni (5,5–8 cm); spust z boku palca wskazującego, naciskany kciukiem. PN G006-SL-3.",
    "description": "Trzy mocowania Index Trigger w rozmiarze S na lewą dłoń. Rozmiar S odpowiada szerokości dłoni od 5,5 do 8 cm, mierzonej bez rękawicy. Index Trigger zakłada się jednym ruchem, a spust z boku palca wskazującego naciska się kciukiem, dlatego producent poleca go stałym operatorom przy dużej liczbie skanów. Opakowanie po trzy sztuki pozwala sprawdzić dopasowanie przed zakupem większej partii.\n\nKlips mocowania utrzyma [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo). Dla MAI przewidziano inne mocowanie.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g006-l.png"
    ],
    "imageDescriptions": [
      "Index Trigger ProGlove w wersji na lewą rękę (zdjęcie poglądowe)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 568.98,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G006-SL-3"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "3"
      },
      {
        "name": "Rozmiar",
        "value": "S — szerokość dłoni 5,5–8 cm"
      },
      {
        "name": "Strona dłoni",
        "value": "Lewa"
      },
      {
        "name": "Temperatura pracy",
        "value": "−5°C do +50°C"
      },
      {
        "name": "Materiał",
        "value": "Nylon, poliester, MDF, klej EVAC; wolny od substancji PWIS"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Sprawdzenie rozmiaru S u leworęcznych operatorów"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g006-sr-3",
    "slug": "proglove-g006-sr-3",
    "name": "Index Trigger ProGlove, rozmiar S, prawa ręka, 3 szt.",
    "seoH1": "Index Trigger ProGlove, rozmiar S, prawa ręka, 3 szt.",
    "seoTitle": "Index Trigger ProGlove, rozmiar S, prawa ręka, 3 szt. — G006-SR-3",
    "seoDescription": "Index Trigger ProGlove S prawy (G006-SR-3), opakowanie 3 szt. Spust do skanera noszonego ProGlove MARK albo LEO dla wąskich dłoni 5,5–8 cm.",
    "shortDescription": "Prawostronny Index Trigger ProGlove w rozmiarze S, opakowanie po trzy — mocowanie skanera MARK lub LEO dla wąskiej dłoni. PN G006-SR-3.",
    "description": "Index Trigger S dla prawej ręki, opakowanie trzech sztuk. Mocowanie jest przeznaczone na wąskie dłonie o szerokości 5,5–8 cm. Klips trzyma skaner na grzbiecie dłoni, a spust znajduje się z boku palca wskazującego i jest naciskany kciukiem. Producent zaleca przymierzenie mocowania; przy pracy w rękawicy do pomiaru dłoni dolicza się kilka milimetrów.\n\nMocowanie obsługuje [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo); przy MAI potrzebny jest Hand Strap Gen 2.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g006.png"
    ],
    "imageDescriptions": [
      "Index Trigger ProGlove w wersji na prawą rękę (na zdjęciu rozmiar M)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 568.98,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G006-SR-3"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "3"
      },
      {
        "name": "Rozmiar",
        "value": "S — szerokość dłoni 5,5–8 cm"
      },
      {
        "name": "Strona dłoni",
        "value": "Prawa"
      },
      {
        "name": "Temperatura pracy",
        "value": "−5°C do +50°C"
      },
      {
        "name": "Materiał",
        "value": "Nylon, poliester, MDF, klej EVAC; wolny od substancji PWIS"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Pierwsze mocowania dla osób o wąskich dłoniach"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g006-sl-10",
    "slug": "proglove-g006-sl-10",
    "name": "Index Trigger ProGlove, rozmiar S, lewa ręka, 10 szt.",
    "seoH1": "Index Trigger ProGlove, rozmiar S, lewa ręka, 10 szt.",
    "seoTitle": "Index Trigger ProGlove, rozmiar S, lewa ręka, 10 szt. — G006-SL-10",
    "seoDescription": "Mocowanie Index Trigger ProGlove w rozmiarze S na lewą dłoń, 10 szt., PN G006-SL-10. Osobny spust dla każdego operatora skanera MARK lub LEO.",
    "shortDescription": "Dziesięć lewych mocowań Index Trigger ProGlove S, by każdy operator miał własne. Szerokość dłoni 5,5–8 cm. PN G006-SL-10.",
    "description": "Opakowanie dziesięciu sztuk Index Trigger w rozmiarze S, przeznaczonych na lewą rękę. Dziesięć sztuk ułatwia przydzielenie każdemu operatorowi własnego mocowania, co według producenta wyraźnie wydłuża jego żywotność; w testach przemysłowych wynosi ona średnio ok. 80 zmian. Mały rozmiar obejmuje dłonie o szerokości od 5,5 do 8 cm.\n\nKażde z dziesięciu mocowań przyjmuje [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo). Urządzenia MAI nie da się w nim zamocować.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g006-l.png"
    ],
    "imageDescriptions": [
      "Index Trigger ProGlove w wersji na lewą rękę (zdjęcie poglądowe)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 1789.83,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G006-SL-10"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "10"
      },
      {
        "name": "Rozmiar",
        "value": "S — szerokość dłoni 5,5–8 cm"
      },
      {
        "name": "Strona dłoni",
        "value": "Lewa"
      },
      {
        "name": "Temperatura pracy",
        "value": "−5°C do +50°C"
      },
      {
        "name": "Materiał",
        "value": "Nylon, poliester, MDF, klej EVAC; wolny od substancji PWIS"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Osobiste mocowania S dla leworęcznej zmiany"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g006-sr-10",
    "slug": "proglove-g006-sr-10",
    "name": "Index Trigger ProGlove, rozmiar S, prawa ręka, 10 szt.",
    "seoH1": "Index Trigger ProGlove, rozmiar S, prawa ręka, 10 szt.",
    "seoTitle": "Index Trigger ProGlove, rozmiar S, prawa ręka, 10 szt. — G006-SR-10",
    "seoDescription": "Index Trigger ProGlove G006-SR-10: S, prawa dłoń, 10 szt., wolny od PWIS. Uchwyt na skaner ProGlove MARK/LEO do lakierni i motoryzacji.",
    "shortDescription": "Index Trigger ProGlove S dla prawej dłoni, 10 sztuk, wolny od substancji PWIS — także do lakierni. PN G006-SR-10.",
    "description": "Dziesięć prawostronnych mocowań Index Trigger w najmniejszym rozmiarze S, czyli dla dłoni szerokich na 5,5–8 cm. Mocowanie jest wolne od substancji PWIS zaburzających zwilżanie powierzchni, dlatego można go używać przy lakierowaniu i powlekaniu, np. w motoryzacji. Pracuje w zakresie od −5 do +50°C; w niższej temperaturze producent zaleca Hand Strap lub Reel.\n\nZgodne urządzenia: [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo). Wyjątek stanowi MAI z klipsem drugiej generacji.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g006.png"
    ],
    "imageDescriptions": [
      "Index Trigger ProGlove w wersji na prawą rękę (na zdjęciu rozmiar M)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 1789.83,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G006-SR-10"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "10"
      },
      {
        "name": "Rozmiar",
        "value": "S — szerokość dłoni 5,5–8 cm"
      },
      {
        "name": "Strona dłoni",
        "value": "Prawa"
      },
      {
        "name": "Temperatura pracy",
        "value": "−5°C do +50°C"
      },
      {
        "name": "Materiał",
        "value": "Nylon, poliester, MDF, klej EVAC; wolny od substancji PWIS"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Skanowanie w lakierniach i przy powlekaniu"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g006-ml-3",
    "slug": "proglove-g006-ml-3",
    "name": "Index Trigger ProGlove, rozmiar M, lewa ręka, 3 szt.",
    "seoH1": "Index Trigger ProGlove, rozmiar M, lewa ręka, 3 szt.",
    "seoTitle": "Index Trigger ProGlove, rozmiar M, lewa ręka, 3 szt. — G006-ML-3",
    "seoDescription": "Index Trigger ProGlove M lewy, 3 sztuki, PN G006-ML-3. Spust na palec wskazujący do skanerów MARK i LEO firmy ProGlove, dłoń 8–9,5 cm.",
    "shortDescription": "Index Trigger ProGlove M dla leworęcznych, 3 szt.; dłoń szeroka na 8–9,5 cm, masa 20 g. PN G006-ML-3.",
    "description": "Index Trigger w rozmiarze M na lewą rękę, trzy sztuki w opakowaniu. Rozmiar średni dotyczy dłoni o szerokości 8–9,5 cm. Jedno mocowanie M waży 20 g i jest wykonane z nylonu, poliestru, płyty MDF i kleju EVAC. Trzy sztuki wystarczają na uruchomienie jednego stanowiska z zapasem.\n\nIndex Trigger M współpracuje z [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo), ale nie z MAI.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g006-l.png"
    ],
    "imageDescriptions": [
      "Index Trigger ProGlove w wersji na lewą rękę (zdjęcie poglądowe)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 568.98,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G006-ML-3"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "3"
      },
      {
        "name": "Rozmiar",
        "value": "M — szerokość dłoni 8–9,5 cm"
      },
      {
        "name": "Strona dłoni",
        "value": "Lewa"
      },
      {
        "name": "Temperatura pracy",
        "value": "−5°C do +50°C"
      },
      {
        "name": "Materiał",
        "value": "Nylon, poliester, MDF, klej EVAC; wolny od substancji PWIS"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Start stanowiska dla leworęcznego operatora"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g006-mr-3",
    "slug": "proglove-g006-mr-3",
    "name": "Index Trigger ProGlove, rozmiar M, prawa ręka, 3 szt.",
    "seoH1": "Index Trigger ProGlove, rozmiar M, prawa ręka, 3 szt.",
    "seoTitle": "Index Trigger ProGlove, rozmiar M, prawa ręka, 3 szt. — G006-MR-3",
    "seoDescription": "Index Trigger ProGlove G006-MR-3 — rozmiar M, prawa ręka, 3 szt. Najprostszy start ze skanerem noszonym ProGlove MARK lub LEO.",
    "shortDescription": "Index Trigger ProGlove M na prawą rękę, trzy sztuki — średni rozmiar (8–9,5 cm) do pierwszego skanera MARK lub LEO. PN G006-MR-3.",
    "description": "Trzy prawostronne mocowania Index Trigger M dla dłoni o szerokości od 8 do 9,5 cm. Mocowania nie pierze się w pralce; czyści się je sprayem z 70-procentowym alkoholem izopropylowym lub środkiem do tkanin i suszy przed użyciem. Producent traktuje Index Trigger jako materiał eksploatacyjny wymieniany okresowo.\n\nDo klipsa wpina się [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo). Jedynym mocowaniem MAI jest opaska Gen 2.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g006.png"
    ],
    "imageDescriptions": [
      "Index Trigger ProGlove w wersji na prawą rękę (na zdjęciu rozmiar M)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 568.98,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G006-MR-3"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "3"
      },
      {
        "name": "Rozmiar",
        "value": "M — szerokość dłoni 8–9,5 cm"
      },
      {
        "name": "Strona dłoni",
        "value": "Prawa"
      },
      {
        "name": "Temperatura pracy",
        "value": "−5°C do +50°C"
      },
      {
        "name": "Materiał",
        "value": "Nylon, poliester, MDF, klej EVAC; wolny od substancji PWIS"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Mocowanie do pierwszego skanera MARK lub LEO"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g006-ml-10",
    "slug": "proglove-g006-ml-10",
    "name": "Index Trigger ProGlove, rozmiar M, lewa ręka, 10 szt.",
    "seoH1": "Index Trigger ProGlove, rozmiar M, lewa ręka, 10 szt.",
    "seoTitle": "Index Trigger ProGlove, rozmiar M, lewa ręka, 10 szt. — G006-ML-10",
    "seoDescription": "Index Trigger ProGlove w rozmiarze M dla leworęcznych, opakowanie 10 szt. (G006-ML-10). Zapas mocowań na skanery ProGlove LEO i MARK.",
    "shortDescription": "Zbiorcze opakowanie 10 szt. Index Trigger ProGlove w rozmiarze M, lewa ręka; zapas mocowań dla leworęcznych operatorów. PN G006-ML-10.",
    "description": "Opakowanie zbiorcze: dziesięć sztuk Index Trigger M na lewą dłoń. Rozmiar M obejmuje szerokość dłoni 8–9,5 cm, mierzoną bez rękawicy. Skaner MARK lub LEO wpina się w klips bez narzędzi i bez konfiguracji. Większe opakowanie ułatwia utrzymanie zapasu mocowań na wymianę.\n\nPasujące modele to [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo); model MAI do nich nie należy.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g006-l.png"
    ],
    "imageDescriptions": [
      "Index Trigger ProGlove w wersji na lewą rękę (zdjęcie poglądowe)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 1789.83,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G006-ML-10"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "10"
      },
      {
        "name": "Rozmiar",
        "value": "M — szerokość dłoni 8–9,5 cm"
      },
      {
        "name": "Strona dłoni",
        "value": "Lewa"
      },
      {
        "name": "Temperatura pracy",
        "value": "−5°C do +50°C"
      },
      {
        "name": "Materiał",
        "value": "Nylon, poliester, MDF, klej EVAC; wolny od substancji PWIS"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Wymiana zużytych mocowań w zespole"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g006-mr-10",
    "slug": "proglove-g006-mr-10",
    "name": "Index Trigger ProGlove, rozmiar M, prawa ręka, 10 szt.",
    "seoH1": "Index Trigger ProGlove, rozmiar M, prawa ręka, 10 szt.",
    "seoTitle": "Index Trigger ProGlove, rozmiar M, prawa ręka, 10 szt. — G006-MR-10",
    "seoDescription": "Opakowanie 10 szt. Index Trigger ProGlove M na prawą dłoń, PN G006-MR-10. Mocowania do floty skanerów ProGlove MARK w magazynie.",
    "shortDescription": "Index Trigger ProGlove M, prawa dłoń, opakowanie dziesięciu sztuk do floty skanerów pracujących na kilka zmian. PN G006-MR-10.",
    "description": "Dziesięć mocowań Index Trigger w rozmiarze M, wersja prawostronna, dla dłoni szerokich na 8–9,5 cm. Trwałość zależy od pracy: kontakt z ostrymi krawędziami, olejem i brudem ją skraca, a rękawica ochronna noszona pod spodem może ją wydłużyć. Wersje do stref ESD producent wykonuje na zamówienie; nie obejmuje ich ten numer PN.\n\nZ mocowaniem pracują [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo). Wyjątkiem jest MAI.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g006.png"
    ],
    "imageDescriptions": [
      "Index Trigger ProGlove w wersji na prawą rękę (na zdjęciu rozmiar M)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 1789.83,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G006-MR-10"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "10"
      },
      {
        "name": "Rozmiar",
        "value": "M — szerokość dłoni 8–9,5 cm"
      },
      {
        "name": "Strona dłoni",
        "value": "Prawa"
      },
      {
        "name": "Temperatura pracy",
        "value": "−5°C do +50°C"
      },
      {
        "name": "Materiał",
        "value": "Nylon, poliester, MDF, klej EVAC; wolny od substancji PWIS"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Flota skanerów przy kompletacji wielozmianowej"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g006-ll-3",
    "slug": "proglove-g006-ll-3",
    "name": "Index Trigger ProGlove, rozmiar L, lewa ręka, 3 szt.",
    "seoH1": "Index Trigger ProGlove, rozmiar L, lewa ręka, 3 szt.",
    "seoTitle": "Index Trigger ProGlove, rozmiar L, lewa ręka, 3 szt. — G006-LL-3",
    "seoDescription": "Index Trigger ProGlove L lewy, G006-LL-3, 3 szt. Duży spust ProGlove dla dłoni 9,5–11,5 cm do skanera noszonego MARK lub LEO.",
    "shortDescription": "Duży Index Trigger ProGlove L dla lewej dłoni (9,5–11,5 cm), trzy sztuki do przymiarki i startu. PN G006-LL-3.",
    "description": "Index Trigger L dla lewej ręki w opakowaniu trzech sztuk. Duży rozmiar jest przeznaczony dla dłoni szerokich na 9,5–11,5 cm. Za luźne mocowanie ociera skórę, a za ciasne zwiększa nacisk i przyspiesza zużycie, dlatego przed zamówieniem warto zmierzyć dłoń. Numer partii jest wygrawerowany na pomarańczowym klipsie.\n\nRozmiar L przyjmuje te same skanery co S i M: [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo). Nie pasuje natomiast do MAI.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g006-l.png"
    ],
    "imageDescriptions": [
      "Index Trigger ProGlove w wersji na lewą rękę (zdjęcie poglądowe)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 568.98,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G006-LL-3"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "3"
      },
      {
        "name": "Rozmiar",
        "value": "L — szerokość dłoni 9,5–11,5 cm"
      },
      {
        "name": "Strona dłoni",
        "value": "Lewa"
      },
      {
        "name": "Temperatura pracy",
        "value": "−5°C do +50°C"
      },
      {
        "name": "Materiał",
        "value": "Nylon, poliester, MDF, klej EVAC; wolny od substancji PWIS"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Dopasowanie mocowania dla szerokiej lewej dłoni"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g006-lr-3",
    "slug": "proglove-g006-lr-3",
    "name": "Index Trigger ProGlove, rozmiar L, prawa ręka, 3 szt.",
    "seoH1": "Index Trigger ProGlove, rozmiar L, prawa ręka, 3 szt.",
    "seoTitle": "Index Trigger ProGlove, rozmiar L, prawa ręka, 3 szt. — G006-LR-3",
    "seoDescription": "Index Trigger ProGlove G006-LR-3: rozmiar L, prawa ręka, opakowanie 3 szt. Mocowanie ProGlove dla szerokiej dłoni, skaner MARK albo LEO.",
    "shortDescription": "Index Trigger ProGlove L na prawą rękę w trójpaku — szerokie dłonie, wolne palce do chwytania drobnych części. PN G006-LR-3.",
    "description": "Trzy sztuki Index Trigger w rozmiarze L na prawą rękę, dla dłoni o szerokości od 9,5 do 11,5 cm. Mocowanie zostawia wolne palce i wnętrze dłoni, więc operator chwyta i składa nawet drobne części. Przy pracy wymagającej dużej siły producent radzi przenieść skaner na rękę niedominującą.\n\nW mocowaniu pracuje jeden ze skanerów: [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo). Osobnej opaski wymaga MAI.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g006.png"
    ],
    "imageDescriptions": [
      "Index Trigger ProGlove w wersji na prawą rękę (na zdjęciu rozmiar M)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 568.98,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G006-LR-3"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "3"
      },
      {
        "name": "Rozmiar",
        "value": "L — szerokość dłoni 9,5–11,5 cm"
      },
      {
        "name": "Strona dłoni",
        "value": "Prawa"
      },
      {
        "name": "Temperatura pracy",
        "value": "−5°C do +50°C"
      },
      {
        "name": "Materiał",
        "value": "Nylon, poliester, MDF, klej EVAC; wolny od substancji PWIS"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Montaż drobnych części przy szerokiej dłoni"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g006-ll-10",
    "slug": "proglove-g006-ll-10",
    "name": "Index Trigger ProGlove, rozmiar L, lewa ręka, 10 szt.",
    "seoH1": "Index Trigger ProGlove, rozmiar L, lewa ręka, 10 szt.",
    "seoTitle": "Index Trigger ProGlove, rozmiar L, lewa ręka, 10 szt. — G006-LL-10",
    "seoDescription": "Index Trigger ProGlove L na lewą rękę, 10 szt., PN G006-LL-10. Komplet spustów ProGlove dla zespołu, który pracuje skanerami MARK.",
    "shortDescription": "Lewostronny Index Trigger ProGlove w rozmiarze L, 10 sztuk; zapas mocowań na wymianę dla całego zespołu. PN G006-LL-10.",
    "description": "Dziesięć lewostronnych mocowań Index Trigger L. Rozmiar duży obejmuje szerokość dłoni 9,5–11,5 cm; jeśli operator nosi rękawicę, wynik pomiaru zwiększa się o kilka milimetrów. Opakowanie dziesięciu sztuk pozwala wyposażyć cały zespół i wymieniać zużyte mocowania bez przestojów.\n\nDziesięć lewych mocowań L obsłuży [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo), bez MAI.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g006-l.png"
    ],
    "imageDescriptions": [
      "Index Trigger ProGlove w wersji na lewą rękę (zdjęcie poglądowe)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 1789.83,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G006-LL-10"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "10"
      },
      {
        "name": "Rozmiar",
        "value": "L — szerokość dłoni 9,5–11,5 cm"
      },
      {
        "name": "Strona dłoni",
        "value": "Lewa"
      },
      {
        "name": "Temperatura pracy",
        "value": "−5°C do +50°C"
      },
      {
        "name": "Materiał",
        "value": "Nylon, poliester, MDF, klej EVAC; wolny od substancji PWIS"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Zapas mocowań L dla zespołu leworęcznego"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g006-lr-10",
    "slug": "proglove-g006-lr-10",
    "name": "Index Trigger ProGlove, rozmiar L, prawa ręka, 10 szt.",
    "seoH1": "Index Trigger ProGlove, rozmiar L, prawa ręka, 10 szt.",
    "seoTitle": "Index Trigger ProGlove, rozmiar L, prawa ręka, 10 szt. — G006-LR-10",
    "seoDescription": "Dziesięć mocowań Index Trigger ProGlove L, prawa dłoń, PN G006-LR-10. Spust ProGlove do skanerów LEO i MARK, praca w zakresie od −5°C.",
    "shortDescription": "Dziesięć prawych mocowań Index Trigger ProGlove L dla dłoni o szerokości 9,5–11,5 cm, praca od −5°C. PN G006-LR-10.",
    "description": "Index Trigger w rozmiarze L, prawa ręka, dziesięć sztuk w opakowaniu, dla dłoni o szerokości 9,5–11,5 cm. Skaner wpięty w mocowanie pozostaje na grzbiecie dłoni przez całą zmianę, a operator naciska kciukiem spust umieszczony z boku palca wskazującego. Mocowanie pracuje w temperaturze od −5 do +50°C, więc do mroźni lepszy jest Hand Strap.\n\nMocowanie jest przeznaczone dla [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo). Z MAI nie współpracuje.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g006.png"
    ],
    "imageDescriptions": [
      "Index Trigger ProGlove w wersji na prawą rękę (na zdjęciu rozmiar M)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "on-order",
    "priceFrom": 1789.83,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G006-LR-10"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "10"
      },
      {
        "name": "Rozmiar",
        "value": "L — szerokość dłoni 9,5–11,5 cm"
      },
      {
        "name": "Strona dłoni",
        "value": "Prawa"
      },
      {
        "name": "Temperatura pracy",
        "value": "−5°C do +50°C"
      },
      {
        "name": "Materiał",
        "value": "Nylon, poliester, MDF, klej EVAC; wolny od substancji PWIS"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Duże dłonie w zespołach o wysokiej liczbie skanów"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g008-2",
    "slug": "proglove-g008-2",
    "name": "Reel ProGlove, 2 szt.",
    "seoH1": "Reel ProGlove, 2 szt.",
    "seoTitle": "Reel ProGlove, 2 szt. — G008-2",
    "seoDescription": "Reel ProGlove G008-2: 2 zwijane mocowania do skanerów MARK i LEO, klips na pasek. Reel do skanera ProGlove na stałe stanowiska i montaż.",
    "shortDescription": "Reel ProGlove — zwijane mocowanie skanera MARK lub LEO na lince, przypinane klipsem; opakowanie 2 szt. bez smyczy. PN G008-2.",
    "description": "Reel to mocowanie zwijane: skaner MARK lub LEO wisi na wysuwanej lince i po odczycie wraca na miejsce, więc nie upada i nie trzeba go szukać. Producent poleca Reel przy niewielkiej liczbie skanów, na stałych stanowiskach, w montażu i w handlu, a także do odczytu nad głową i w wąskich miejscach.\n\nOpakowanie zawiera dwie sztuki bez smyczy; Reel przypina się klipsem do paska, kieszeni lub kamizelki. W obudowie są magnesy, dlatego osoby z implantami medycznymi powinny skonsultować jego użycie z lekarzem.\n\nReel jest zgodny ze skanerami [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo), lecz nie z MAI.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g008.png"
    ],
    "imageDescriptions": [
      "Reel ProGlove — pomarańczowe gniazdo na skaner z klipsem"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 810.14,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G008-2"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "2"
      },
      {
        "name": "Smycz",
        "value": "Brak w opakowaniu"
      },
      {
        "name": "Masa",
        "value": "44 g (1 szt.)"
      },
      {
        "name": "Wymiary",
        "value": "74 × 48 × 22 mm"
      },
      {
        "name": "Temperatura pracy",
        "value": "−20°C do +50°C"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Skanowanie na stałym stanowisku montażowym"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g008-ly-2",
    "slug": "proglove-g008-ly-2",
    "name": "Reel ProGlove ze smyczami, 2 szt.",
    "seoH1": "Reel ProGlove ze smyczami, 2 szt.",
    "seoTitle": "Reel ProGlove ze smyczami, 2 szt. — G008-LY-2",
    "seoDescription": "Reel ProGlove G008-LY-2 ze smyczami: 2 zwijane uchwyty do skanera ProGlove MARK i LEO noszone na szyi lub klipsie. Linka z aramidu.",
    "shortDescription": "Reel ProGlove ze smyczami — dwa zwijane mocowania skanera MARK lub LEO do noszenia na szyi albo na klipsie. PN G008-LY-2.",
    "description": "Dwa zwijane mocowania Reel w zestawie z dwiema smyczami. Smycz pozwala nosić skaner na szyi, a klips przypiąć go do paska lub kieszeni. Wysuwana linka z aramidu utrzymuje skaner przy pracowniku między odczytami, a spust uruchamia się przyciskiem.\n\nReel czyści się chusteczkami z 70-procentowym alkoholem izopropylowym, bez wybielaczy i bez spryskiwania styków. Magnesy w obudowie mogą zakłócać działanie implantów medycznych.\n\nGniazdo Reelu utrzymuje [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo). Reel nie obsługuje MAI.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g008.png"
    ],
    "imageDescriptions": [
      "Reel ProGlove — gniazdo na skaner z klipsem; w zestawie także smycze"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 810.14,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G008-LY-2"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "2"
      },
      {
        "name": "Smycz",
        "value": "2 smycze w opakowaniu"
      },
      {
        "name": "Masa",
        "value": "44 g (1 szt.)"
      },
      {
        "name": "Wymiary",
        "value": "74 × 48 × 22 mm"
      },
      {
        "name": "Temperatura pracy",
        "value": "−20°C do +50°C"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Skanowanie okazjonalne w sklepie i przy kasie"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań ProGlove (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mocowania.pdf",
        "size": "143 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-c006-eu",
    "slug": "proglove-c006-eu",
    "name": "Stacja ładująca ProGlove 2-gniazdowa z zasilaczem EU",
    "seoH1": "Stacja ładująca ProGlove 2-gniazdowa z zasilaczem EU",
    "seoTitle": "Stacja ładująca ProGlove 2-gniazdowa z zasilaczem EU — C006-EU",
    "seoDescription": "Stacja ładująca ProGlove C006-EU, 2 gniazda, zasilacz EU w zestawie. Ładowarka do skanerów ProGlove LEO i MARK na jedno stanowisko.",
    "shortDescription": "Dwugniazdowa stacja ładująca ProGlove S z zasilaczem EU i przewodem USB — ładuje skaner MARK w 2 h, LEO w 1 h. PN C006-EU.",
    "description": "Stacja ładująca S ma dwa gniazda i ładuje jednocześnie dwa skanery ProGlove; MARK 2 ładuje się w niej w 2 godziny, a LEO w 1 godzinę. Zestaw EU zawiera stację, zasilacz 5 V / 1,2 A z wtyczką do gniazd stosowanych w Polsce oraz przewód USB. Producent dopuszcza wyłącznie dołączony zasilacz.\n\nStacja ma klasę IP20, dlatego stawia się ją w suchym miejscu. Skanery ładują się w temperaturze od +5 do +40°C. Przy większej liczbie skanerów wygodniejsza jest [stacja 10-gniazdowa](/produkt/proglove-c007-int).\n\nStacja ładuje [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo). Stacją dla MAI jest model Gen 2 (C021).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-c006.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca ProGlove S — pomarańczowa podstawa z dwoma gniazdami na skanery"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 772.45,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "C006-EU"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Stacja, zasilacz z wtyczką EU, przewód USB"
      },
      {
        "name": "Liczba gniazd",
        "value": "2"
      },
      {
        "name": "Zasilanie",
        "value": "5 V DC / 1,2 A z dołączonego zasilacza"
      },
      {
        "name": "Wymiary",
        "value": "140 × 56 × 19 mm"
      },
      {
        "name": "Masa",
        "value": "110 g"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP20"
      },
      {
        "name": "Temperatura ładowania",
        "value": "+5°C do +40°C"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Ładowanie skanerów jednego stanowiska"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna stacji ładującej ProGlove S (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-stacja-2.pdf",
        "size": "104 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-c006-int",
    "slug": "proglove-c006-int",
    "name": "Stacja ładująca ProGlove 2-gniazdowa z zasilaczem INT",
    "seoH1": "Stacja ładująca ProGlove 2-gniazdowa z zasilaczem INT",
    "seoTitle": "Stacja ładująca ProGlove 2-gniazdowa z zasilaczem INT — C006-INT",
    "seoDescription": "Stacja ładująca ProGlove C006-INT: 2 gniazda do skanerów MARK i LEO, zasilacz z wtykami EU, UK, US i AU. Ładowarka ProGlove do oddziałów.",
    "shortDescription": "Stacja ładująca ProGlove S w zestawie INT: dwa gniazda i zasilacz z wymiennymi wtykami EU, UK, US, AU. PN C006-INT.",
    "description": "Zestaw INT to dwugniazdowa stacja ładująca S z zasilaczem 5 V / 1,2 A i wymiennymi wtykami EU, UK, US i AU. Przydaje się firmom, które przenoszą sprzęt między krajami albo wysyłają stacje do oddziałów poza Unią Europejską. Do pracy wyłącznie w Polsce wystarcza [zestaw EU](/produkt/proglove-c006-eu).\n\nW stacji ładują się jednocześnie dwa skanery ProGlove. Obudowa ma wymiary 140 × 56 × 19 mm, waży 110 g i nie jest odporna na wodę (IP20).\n\nGniazda są dopasowane do [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo); stacja Gen 2 obsługuje MAI.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-c006.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca ProGlove S — dwa gniazda na skanery noszone (zestaw z zasilaczem INT)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 772.45,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "C006-INT"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Stacja, zasilacz z wtykami EU, UK, US i AU"
      },
      {
        "name": "Liczba gniazd",
        "value": "2"
      },
      {
        "name": "Zasilanie",
        "value": "5 V DC / 1,2 A z dołączonego zasilacza"
      },
      {
        "name": "Wymiary",
        "value": "140 × 56 × 19 mm"
      },
      {
        "name": "Masa",
        "value": "110 g"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP20"
      },
      {
        "name": "Temperatura ładowania",
        "value": "+5°C do +40°C"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Wyposażenie oddziałów zagranicznych"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna stacji ładującej ProGlove S (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-stacja-2.pdf",
        "size": "104 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-c007-int",
    "slug": "proglove-c007-int",
    "name": "Stacja ładująca ProGlove 10-gniazdowa z zasilaczem",
    "seoH1": "Stacja ładująca ProGlove 10-gniazdowa z zasilaczem",
    "seoTitle": "Stacja ładująca ProGlove 10-gniazdowa z zasilaczem — C007-INT",
    "seoDescription": "Stacja ładująca ProGlove C007-INT: 10 gniazd, zasilacz 24 V w zestawie. Ładowarka ProGlove 10-gniazdowa do floty skanerów noszonych.",
    "shortDescription": "Stacja ładująca ProGlove na 10 skanerów MARK lub LEO z zasilaczem 24 V / 1,67 A i kompletem wtyków. PN C007-INT.",
    "description": "Stacja 10-gniazdowa ładuje jednocześnie do dziesięciu skanerów ProGlove, np. całą zmianę kompletacji; skaner MARK 2 potrzebuje w niej 2 godzin na pełne ładowanie. W zestawie jest zasilacz 24 V / 1,67 A z kompletem wtyków EU, UK, US i AU. Producent zabrania stosowania innych zasilaczy.\n\nStacja ma wymiary 298 × 203 × 25 mm i waży 840 g. Sposób montażu opisuje instrukcja użytkownika. Pracuje w temperaturze 0–45°C i ma klasę IP20, więc wymaga suchego miejsca.\n\nGniazda stacji przyjmują [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display) i [LEO](/produkt/proglove-leo). W tej stacji nie ładuje się MAI.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-c007-int.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca ProGlove 10-gniazdowa — dwa rzędy gniazd na skanery na wspólnej szynie"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 3251.85,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "C007-INT"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Stacja, zasilacz 24 V z wtykami EU, UK, US i AU"
      },
      {
        "name": "Liczba gniazd",
        "value": "10"
      },
      {
        "name": "Zasilanie",
        "value": "24 V DC / 1,67 A z dołączonego zasilacza"
      },
      {
        "name": "Wymiary",
        "value": "298 × 203 × 25 mm"
      },
      {
        "name": "Masa",
        "value": "840 g"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP20"
      },
      {
        "name": "Temperatura pracy",
        "value": "0°C do +45°C"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO (także MARK One S); nie pasuje do MAI"
      }
    ],
    "applications": [
      "Wspólne ładowanie floty skanerów po zmianie"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo"
    ],
    "downloads": [
      {
        "name": "Karta techniczna stacji ładującej ProGlove 10-gniazdowej (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-stacja-10.pdf",
        "size": "105 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-x001-a007",
    "slug": "proglove-x001-a007",
    "name": "Gateway ProGlove z przewodem USB",
    "seoH1": "Gateway ProGlove z przewodem USB",
    "seoTitle": "Gateway ProGlove z przewodem USB — X001-A007",
    "seoDescription": "Gateway ProGlove X001-A007: połączenie skanerów MARK, LEO i MAI z komputerem przez USB HID lub CDC, do 5 skanerów. Bramka Bluetooth ProGlove.",
    "shortDescription": "ProGlove Gateway z przewodem USB — łączy skanery noszone ProGlove z komputerem z Windows lub Linux jako klawiatura lub port COM. PN X001-A007.",
    "description": "ProGlove Gateway łączy skanery noszone z komputerem z systemem Windows lub Linux przez USB. Na komputerze działa jako klawiatura (USB HID) albo wirtualny port COM (USB CDC). Pozwala szybko parować i przełączać do 5 skanerów. Przez Wi-Fi 2,4 GHz łączy się z platformą INSIGHT, która umożliwia zdalną konfigurację i aktualizacje oprogramowania.\n\nZ Gateway zasięg radiowy skanera wynosi do 70 m w otwartej przestrzeni i 30–40 m w budynku. Gateway nie jest potrzebny, gdy skaner łączy się przez Bluetooth z telefonem, tabletem lub terminalem. Zestaw zawiera Gateway i przewód USB.\n\nWspółpracuje ze skanerami ProGlove [MARK Basic](/produkt/proglove-mark-basic), [MARK 2](/produkt/proglove-mark-2), [MARK 3](/produkt/proglove-mark-3), [MARK Display](/produkt/proglove-mark-display), [LEO](/produkt/proglove-leo) i [MAI](/produkt/proglove-mai).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-x001-a007.png"
    ],
    "imageDescriptions": [
      "ProGlove Gateway — pomarańczowa bramka z diodami USB, MARK i Cloud oraz kodem QR"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 1055.07,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "X001-A007"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Gateway, przewód USB"
      },
      {
        "name": "Połączenie z komputerem",
        "value": "USB HID (klawiatura), USB CDC (wirtualny port COM)"
      },
      {
        "name": "Liczba skanerów",
        "value": "Do 5, przełączane"
      },
      {
        "name": "Łączność",
        "value": "Bluetooth Low Energy 4.0–4.2; Wi-Fi 2,4 GHz (802.11b/g/n)"
      },
      {
        "name": "Zasięg radiowy",
        "value": "70 m w otwartej przestrzeni, 30–40 m w budynku"
      },
      {
        "name": "Wymiary",
        "value": "95 × 52 × 23 mm"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO, MAI"
      }
    ],
    "applications": [
      "Skanowanie do aplikacji na komputerze stacjonarnym"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo",
      "proglove-mai"
    ],
    "downloads": [
      {
        "name": "Karta techniczna ProGlove Gateway (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-gateway.pdf",
        "size": "417 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-a009-eu",
    "slug": "proglove-a009-eu",
    "name": "Gateway Plus ProGlove",
    "seoH1": "Gateway Plus ProGlove",
    "seoTitle": "Gateway Plus ProGlove — A009-EU",
    "seoDescription": "Gateway Plus ProGlove A009-EU: do 10 skanerów MARK, LEO i MAI, USB, Ethernet PoE, RS-232, Wi-Fi 2,4/5 GHz. Bramka ProGlove dla starszych systemów.",
    "shortDescription": "ProGlove Gateway Plus — bramka do 10 skanerów noszonych z wyjściem USB, Ethernet z PoE i RS-232 oraz dwuzakresowym Wi-Fi. PN A009-EU.",
    "description": "Gateway Plus łączy jednocześnie do 10 skanerów ProGlove przez Bluetooth i przekazuje dane do systemu przez USB (HID lub CDC), Ethernet 10/100 Mb/s z zasilaniem PoE (IEEE 802.3af) albo RS-232. Ma także dwuzakresowe Wi-Fi 2,4 i 5 GHz do połączenia z INSIGHT. Złącza szeregowe pozwalają podłączyć skanery również do starszych systemów.\n\nPN A009-EU to sam korpus bramki. Do pracy potrzebny jest przewód: USB, który zasila bramkę z komputera, albo Ethernet z PoE. Połączenie RS-232 wymaga osobnych przewodów i zasilacza ProGlove, które dobierzemy na zapytanie. Nieużywane gniazda zamykają zaślepki dołączone do bramki.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane dla Gateway Plus: przewód (jeden z) — sprzedawane osobno**\n\n- [Przewód USB do Gateway Plus ProGlove (Z001-001)](/produkt/proglove-z001-001)\n- [Przewód Ethernet z PoE do Gateway Plus ProGlove (Z009-000)](/produkt/proglove-z009-000)\n\nPrzewód Ethernet zasila bramkę tylko z przełącznika lub portu z PoE.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-a009-eu.png"
    ],
    "imageDescriptions": [
      "ProGlove Gateway Plus — pomarańczowa bramka z diodami Power, Data, Scanner i Cloud oraz kodem QR"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "on-order",
    "priceFrom": 1462.01,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "A009-EU"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Gateway Plus z zaślepkami gniazd; przewód zamawia się osobno"
      },
      {
        "name": "Interfejsy",
        "value": "USB HID, USB CDC, Ethernet 10/100 Mb/s z PoE (IEEE 802.3af), RS-232"
      },
      {
        "name": "Liczba skanerów",
        "value": "Do 10 jednocześnie"
      },
      {
        "name": "Łączność",
        "value": "Bluetooth Low Energy; Wi-Fi 2,4 i 5 GHz (802.11a/b/g/n/ac/ax)"
      },
      {
        "name": "Zasięg radiowy",
        "value": "Bluetooth: 70 m w otwartej przestrzeni, 30 m w budynku"
      },
      {
        "name": "Wymiary",
        "value": "125 × 76 × 26 mm"
      },
      {
        "name": "Masa",
        "value": "107 g"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP40"
      },
      {
        "name": "Temperatura pracy",
        "value": "−20°C do +50°C"
      },
      {
        "name": "Kompatybilność",
        "value": "ProGlove MARK Basic, MARK 2, MARK 3, MARK Display, LEO, MAI"
      }
    ],
    "applications": [
      "Podłączenie skanerów do sieci LAN i starszych systemów z RS-232"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mark-basic",
      "proglove-mark-2",
      "proglove-mark-3",
      "proglove-mark-display",
      "proglove-leo",
      "proglove-mai"
    ],
    "downloads": [
      {
        "name": "Karta techniczna ProGlove Gateway Plus (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-gateway-plus.pdf",
        "size": "135 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-z001-001",
    "slug": "proglove-z001-001",
    "name": "Przewód USB do Gateway Plus ProGlove",
    "seoH1": "Przewód USB do Gateway Plus ProGlove",
    "seoTitle": "Przewód USB do Gateway Plus ProGlove — Z001-001",
    "seoDescription": "Przewód USB ProGlove Z001-001 do Gateway Plus: dane USB HID lub CDC i zasilanie bramki z komputera (min. 500 mA przy 5 V). Kabel USB ProGlove.",
    "shortDescription": "Przewód USB ProGlove do Gateway Plus — transmisja danych i zasilanie bramki z portu USB komputera. PN Z001-001.",
    "description": "Przewód USB ProGlove łączy Gateway Plus z komputerem. Przenosi dane w trybie USB HID lub CDC i jednocześnie zasila bramkę z portu USB 2.0 lub 3.0, który musi dostarczyć co najmniej 500 mA przy 5 V. Producent dopuszcza do zasilania Gateway Plus przez USB wyłącznie ten przewód.\n\nPasuje do [Gateway Plus](/produkt/proglove-a009-eu).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "kable-do-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [],
    "imageDescriptions": [],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 82.9,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "Z001-001"
      },
      {
        "name": "Przeznaczenie",
        "value": "Gateway Plus ProGlove"
      },
      {
        "name": "Funkcja",
        "value": "Dane USB HID lub CDC i zasilanie bramki"
      },
      {
        "name": "Wymagania portu",
        "value": "USB 2.0 lub 3.0, min. 500 mA przy 5 V"
      }
    ],
    "applications": [
      "Połączenie Gateway Plus z komputerem stanowiskowym"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-a009-eu"
    ],
    "downloads": [
      {
        "name": "Karta techniczna ProGlove Gateway Plus (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-gateway-plus.pdf",
        "size": "135 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-z009-000",
    "slug": "proglove-z009-000",
    "name": "Przewód Ethernet z PoE do Gateway Plus ProGlove",
    "seoH1": "Przewód Ethernet z PoE do Gateway Plus ProGlove",
    "seoTitle": "Przewód Ethernet z PoE do Gateway Plus ProGlove — Z009-000",
    "seoDescription": "Przewód Ethernet ProGlove Z009-000 do Gateway Plus: LAN 10/100 Mb/s i zasilanie PoE (IEEE 802.3af) bez zasilacza. Kabel sieciowy ProGlove.",
    "shortDescription": "Przewód Ethernet ProGlove do Gateway Plus — połączenie z siecią LAN i zasilanie bramki przez PoE. PN Z009-000.",
    "description": "Przewód Ethernet ProGlove łączy Gateway Plus z siecią LAN 10/100 Mb/s. Przy przełączniku z PoE (IEEE 802.3af) ten sam przewód zasila bramkę, więc nie są potrzebne zasilacz ani połączenie USB. Do zasilania przez PoE producent wymaga właśnie tego przewodu.\n\nPasuje do [Gateway Plus](/produkt/proglove-a009-eu).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "kable-do-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [],
    "imageDescriptions": [],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 82.9,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "Z009-000"
      },
      {
        "name": "Przeznaczenie",
        "value": "Gateway Plus ProGlove"
      },
      {
        "name": "Funkcja",
        "value": "Ethernet 10/100 Mb/s i zasilanie PoE"
      },
      {
        "name": "Standard PoE",
        "value": "IEEE 802.3af"
      }
    ],
    "applications": [
      "Zasilanie i podłączenie Gateway Plus z przełącznika PoE"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-a009-eu"
    ],
    "downloads": [
      {
        "name": "Karta techniczna ProGlove Gateway Plus (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-gateway-plus.pdf",
        "size": "135 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g020-mix-3",
    "slug": "proglove-g020-mix-3",
    "name": "Hand Strap Gen 2 ProGlove do MAI, lewa i prawa ręka, 3 szt.",
    "seoH1": "Hand Strap Gen 2 ProGlove do MAI, lewa i prawa ręka, 3 szt.",
    "seoTitle": "Hand Strap Gen 2 ProGlove do MAI, lewa i prawa ręka, 3 szt. — G020-MIX-3",
    "seoDescription": "Hand Strap Gen 2 ProGlove G020-MIX-3: 3 opaski (lewe i prawe) do ProGlove MAI. Mocowanie MAI na dłoń, jeden rozmiar, pranie w 30°C.",
    "shortDescription": "Hand Strap Gen 2 ProGlove — opaska do urządzenia MAI; opakowanie trzech sztuk w wersjach na lewą i prawą rękę. PN G020-MIX-3.",
    "description": "Opakowanie zawiera trzy opaski Hand Strap Gen 2 w wersjach na lewą i prawą rękę. Hand Strap Gen 2 to jedyne mocowanie do [ProGlove MAI](/produkt/proglove-mai): trzyma urządzenie na grzbiecie dłoni tak, że kolorowy ekran pozostaje widoczny, a wnętrze dłoni wolne.\n\nKlips różni się od klipsa pierwszej generacji, dlatego opaski Gen 2 nie pasują do skanerów MARK i LEO. Opaska ma jeden rozmiar z płynną regulacją rzepem.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g020-r-10.png"
    ],
    "imageDescriptions": [
      "Hand Strap Gen 2 ProGlove — czarna opaska z szarym klipsem na urządzenie MAI"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 444.63,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G020-MIX-3"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "3 (wersje na lewą i prawą rękę)"
      },
      {
        "name": "Rozmiar",
        "value": "Jeden, regulowany rzepem"
      },
      {
        "name": "Masa",
        "value": "17,5 g (1 szt.)"
      },
      {
        "name": "Temperatura pracy",
        "value": "−20°C do +50°C"
      },
      {
        "name": "Kompatybilność",
        "value": "Wyłącznie ProGlove MAI"
      }
    ],
    "applications": [
      "Uruchomienie pierwszego urządzenia MAI"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mai"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań i stacji Gen 2 do MAI (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mai-akcesoria.pdf",
        "size": "149 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g020-l-10",
    "slug": "proglove-g020-l-10",
    "name": "Hand Strap Gen 2 ProGlove do MAI, lewa ręka, 10 szt.",
    "seoH1": "Hand Strap Gen 2 ProGlove do MAI, lewa ręka, 10 szt.",
    "seoTitle": "Hand Strap Gen 2 ProGlove do MAI, lewa ręka, 10 szt. — G020-L-10",
    "seoDescription": "Hand Strap Gen 2 ProGlove G020-L-10, lewa ręka, 10 szt. Opaska do ProGlove MAI na dłoń, pranie w 30°C do 6 razy, praca od −20°C.",
    "shortDescription": "Dziesięć opasek Hand Strap Gen 2 dla lewej ręki do ProGlove MAI; można je prać w pralce. PN G020-L-10.",
    "description": "Dziesięć opasek Hand Strap Gen 2 na lewą rękę do urządzeń [ProGlove MAI](/produkt/proglove-mai). Opaskę można prać w pralce w 30°C, do sześciu razy w całym okresie użytkowania, bez wybielacza i płynu do płukania; suszy się ją na powietrzu, z dala od słońca.\n\nW testach przemysłowych opaska Gen 2 wytrzymuje średnio ok. 80 zmian po 8 godzin. Nie pasuje do skanerów MARK i LEO.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g020-l-10.png"
    ],
    "imageDescriptions": [
      "Hand Strap Gen 2 ProGlove — opaska na lewą dłoń z etykietą LEFT"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 1341.44,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G020-L-10"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "10"
      },
      {
        "name": "Strona dłoni",
        "value": "Lewa"
      },
      {
        "name": "Rozmiar",
        "value": "Jeden, regulowany rzepem"
      },
      {
        "name": "Masa",
        "value": "17,5 g (1 szt.)"
      },
      {
        "name": "Temperatura pracy",
        "value": "−20°C do +50°C"
      },
      {
        "name": "Kompatybilność",
        "value": "Wyłącznie ProGlove MAI"
      }
    ],
    "applications": [
      "Osobiste opaski dla leworęcznych użytkowników MAI"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mai"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań i stacji Gen 2 do MAI (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mai-akcesoria.pdf",
        "size": "149 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-g020-r-10",
    "slug": "proglove-g020-r-10",
    "name": "Hand Strap Gen 2 ProGlove do MAI, prawa ręka, 10 szt.",
    "seoH1": "Hand Strap Gen 2 ProGlove do MAI, prawa ręka, 10 szt.",
    "seoTitle": "Hand Strap Gen 2 ProGlove do MAI, prawa ręka, 10 szt. — G020-R-10",
    "seoDescription": "Hand Strap Gen 2 ProGlove prawy (G020-R-10), 10 sztuk. Mocowanie MAI ProGlove na grzbiet dłoni, zgodne z VDMA 24364 (bez PWIS).",
    "shortDescription": "Opaski Hand Strap Gen 2 ProGlove dla prawej ręki, opakowanie zbiorcze 10 szt. do urządzeń MAI. PN G020-R-10.",
    "description": "Opakowanie zbiorcze: dziesięć prawostronnych opasek Hand Strap Gen 2 do [ProGlove MAI](/produkt/proglove-mai). Producent zaleca przydzielić każdemu pracownikowi własną opaskę, bo wspólne używanie skraca jej trwałość. Opaskę można nosić także na rękawicy ochronnej.\n\nHand Strap Gen 2 spełnia wymagania VDMA 24364 i jest wolny od substancji zaburzających zwilżanie powłok (PWIS). Ze skanerami MARK i LEO nie współpracuje.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "etui-kabury-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-g020-r-10.png"
    ],
    "imageDescriptions": [
      "Hand Strap Gen 2 ProGlove — opaska na prawą dłoń z etykietą RIGHT"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 1341.44,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "G020-R-10"
      },
      {
        "name": "Liczba sztuk w opakowaniu",
        "value": "10"
      },
      {
        "name": "Strona dłoni",
        "value": "Prawa"
      },
      {
        "name": "Materiał",
        "value": "35% poliester, 34% nylon, 27% poliuretan, 4% guma"
      },
      {
        "name": "Rozmiar",
        "value": "Jeden, regulowany rzepem"
      },
      {
        "name": "Masa",
        "value": "17,5 g (1 szt.)"
      },
      {
        "name": "Temperatura pracy",
        "value": "−20°C do +50°C"
      },
      {
        "name": "Kompatybilność",
        "value": "Wyłącznie ProGlove MAI"
      }
    ],
    "applications": [
      "Wyposażenie zespołu pracującego z MAI"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mai"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań i stacji Gen 2 do MAI (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mai-akcesoria.pdf",
        "size": "149 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-c021-eu",
    "slug": "proglove-c021-eu",
    "name": "Stacja ładująca ProGlove Gen 2 do MAI, 2-gniazdowa, zasilacz EU",
    "seoH1": "Stacja ładująca ProGlove Gen 2 do MAI, 2-gniazdowa, zasilacz EU",
    "seoTitle": "Stacja ładująca ProGlove Gen 2 do MAI, 2-gniazdowa, zasilacz EU — C021-EU",
    "seoDescription": "Stacja ładująca ProGlove Gen 2 C021-EU: 2 gniazda do ProGlove MAI, zasilacz EU, ładowanie ok. 130 min. Ładowarka MAI ProGlove.",
    "shortDescription": "Stacja ładująca Gen 2 do ProGlove MAI — dwa gniazda, zasilacz EU, pełne ładowanie w ok. 130 minut. PN C021-EU.",
    "description": "Stacja ładująca Gen 2 ładuje jednocześnie dwa urządzenia [ProGlove MAI](/produkt/proglove-mai); pełne ładowanie trwa ok. 130 minut. W zestawie EU jest zasilacz 5 V (1,2 A) z wtyczką europejską. Producent poleca tę stację tam, gdzie urządzenia są rozmieszczone przy wielu stanowiskach, a nie przechowywane centralnie.\n\nBateria MAI najlepiej znosi ładowanie w temperaturze od +18 do +30°C. Stacja pasuje wyłącznie do MAI; skanery MARK i LEO wymagają stacji pierwszej generacji.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-c021.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca ProGlove Gen 2 — dwa gniazda z urządzeniami MAI (urządzenia sprzedawane osobno)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 772.45,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "C021-EU"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Stacja, zasilacz z wtyczką EU"
      },
      {
        "name": "Liczba gniazd",
        "value": "2"
      },
      {
        "name": "Czas ładowania",
        "value": "Ok. 130 min (MAI)"
      },
      {
        "name": "Zasilanie",
        "value": "5 V DC / 1,2 A z dołączonego zasilacza"
      },
      {
        "name": "Wymiary",
        "value": "155 × 58 × 20 mm"
      },
      {
        "name": "Masa",
        "value": "123 g"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP20"
      },
      {
        "name": "Temperatura ładowania",
        "value": "+5°C do +40°C (najlepiej +18°C do +30°C)"
      },
      {
        "name": "Kompatybilność",
        "value": "Wyłącznie ProGlove MAI"
      }
    ],
    "applications": [
      "Ładowanie MAI przy stanowiskach pracy"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mai"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań i stacji Gen 2 do MAI (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mai-akcesoria.pdf",
        "size": "149 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "proglove-c021-int",
    "slug": "proglove-c021-int",
    "name": "Stacja ładująca ProGlove Gen 2 do MAI, 2-gniazdowa, zasilacz INT",
    "seoH1": "Stacja ładująca ProGlove Gen 2 do MAI, 2-gniazdowa, zasilacz INT",
    "seoTitle": "Stacja ładująca ProGlove Gen 2 do MAI, 2-gniazdowa, zasilacz INT — C021-INT",
    "seoDescription": "Stacja ładująca ProGlove Gen 2 C021-INT na dwa MAI, zasilacz z wtykami UK, US i AU. Ładowarka MAI ProGlove do oddziałów zagranicznych.",
    "shortDescription": "Zestaw INT stacji ładującej Gen 2 dla ProGlove MAI: zasilacz z wtykami brytyjskimi, amerykańskimi i australijskimi. PN C021-INT.",
    "description": "Zestaw INT stacji Gen 2 ma zasilacz z wtykami UK, US i AU, więc służy do wyposażenia oddziałów w Wielkiej Brytanii, Stanach Zjednoczonych i Australii. Do gniazd w Polsce przeznaczony jest [zestaw EU](/produkt/proglove-c021-eu).\n\nStacja ma dwa gniazda dla urządzeń [ProGlove MAI](/produkt/proglove-mai), wymiary 155 × 58 × 20 mm, masę 123 g i klasę IP20.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "stacje-ladowarki-skanerow"
    ],
    "manufacturerId": "proglove",
    "images": [
      "/images/products/proglove-c021.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca ProGlove Gen 2 do MAI — dwa gniazda z urządzeniami MAI (urządzenia sprzedawane osobno; zestaw z zasilaczem INT)"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 772.45,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "C021-INT"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Stacja, zasilacz z wtykami UK, US i AU"
      },
      {
        "name": "Liczba gniazd",
        "value": "2"
      },
      {
        "name": "Czas ładowania",
        "value": "Ok. 130 min (MAI)"
      },
      {
        "name": "Zasilanie",
        "value": "5 V DC / 1,2 A z dołączonego zasilacza"
      },
      {
        "name": "Wymiary",
        "value": "155 × 58 × 20 mm"
      },
      {
        "name": "Masa",
        "value": "123 g"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP20"
      },
      {
        "name": "Temperatura ładowania",
        "value": "+5°C do +40°C (najlepiej +18°C do +30°C)"
      },
      {
        "name": "Kompatybilność",
        "value": "Wyłącznie ProGlove MAI"
      }
    ],
    "applications": [
      "Wyposażenie zagranicznych oddziałów w ładowanie MAI"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "proglove-mai"
    ],
    "downloads": [
      {
        "name": "Karta techniczna mocowań i stacji Gen 2 do MAI (EN)",
        "type": "datasheet",
        "url": "/datasheets/proglove-mai-akcesoria.pdf",
        "size": "149 KB"
      }
    ],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  }
]
