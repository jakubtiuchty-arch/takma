import type { Product } from './products'

// Terminale naramienne Zebra WT5400 i WT6400 (24.10.2026), europejskie konfiguracje A6 jako warianty. Ceny i stany aktualizuje /api/stock; priceFrom to wartość startowa.
// W opakowaniu są tylko terminal i bateria, dlatego karty mają dwie grupy „jedno z”: mocowanie i ładowanie.
// Mocowania, paski i skaner RS5000x są w zebra-wt-mounts.ts. Źródła i decyzje: docs/catalog/zebra-wt5400-wt6400-2026-10-24/audit.md.
export const zebraWtProducts: Product[] = [
  {
    "id": "zebra-wt5400",
    "slug": "zebra-wt5400",
    "name": "Zebra WT5400",
    "seoH1": "Zebra WT5400",
    "seoTitle": "Zebra WT5400 — terminal naramienny do sklepów, ekran 4,7 cala, Wi-Fi 6E, USB-C",
    "seoDescription": "Terminal naramienny Zebra WT5400 z Androidem: ekran 4,7 cala, grubość 13,97 mm, NFC w obudowie, Wi-Fi 6E, USB-C. Komputer noszony na nadgarstku Zebra WT5400, terminal na rękę Zebra, WT5400 Zebra. PN: WT0-WT54B-T6DAC1A6, WT0-WT54B-T6DAE1A6.",
    "shortDescription": "Zebra WT5400 — terminal naramienny do sklepów: ekran 4,7 cala, grubość 13,97 mm, NFC w obudowie, Wi-Fi 6E i złącze USB-C.",
    "description": "Zebra WT5400 to komputer z Androidem noszony na nadgarstku, zaprojektowany do pracy w sklepach. Pracownik ma wolne obie ręce przy kompletacji zamówień internetowych, przyjęciu dostawy na zaplecze, uzupełnianiu półek na sali sprzedaży i weryfikacji cen. Nisko położony środek ciężkości zmniejsza zmęczenie ręki, a obudowa o grubości 13,97 mm ułatwia sięganie w ciasne miejsca.\n\nEkran 4,7 cala o rozdzielczości 720 × 1280 mieści dane zadania na jednym widoku. Chroni go szkło Corning Gorilla Glass. Kody odczytuje skaner noszony [Zebra RS2100](/produkt/zebra-rs2100), [RS5100](/produkt/zebra-rs5100) lub [RS6100](/produkt/zebra-rs6100). Antena NFC jest w obudowie terminala i ma oznaczenie, więc skaner lub zestaw słuchawkowy Bluetooth paruje się jednym zbliżeniem. RS5100 i RS6100 mogą pobierać zasilanie z terminala przez adapter USB-C.\n\nBaterię wymienia się bez zdejmowania terminala z ręki. Bateria standardowa 3500 mAh wystarcza na pełną zmianę, a rozszerzona 5000 mAh na dłuższą pracę. WT5400 ma procesor Qualcomm QCS4490, pamięć 6/64 GB, Wi-Fi 6E, Bluetooth 5.3 i złącze USB-C 3.0. Android otrzymuje aktualizacje do wersji 17.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane dla terminala: mocowanie (jedno z) — sprzedawane osobno**\n\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, pojedyncze pokrętło, rozmiar S (SG-WT5X6-WMTSS-01)](/produkt/zebra-wt-sg-wt5x6-wmtss-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, pojedyncze pokrętło, rozmiar L (SG-WT5X6-WMTSL-01)](/produkt/zebra-wt-sg-wt5x6-wmtsl-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, pojedyncze pokrętło, rozmiar XL na kurtkę (SG-WT5X6-WMTSX-01)](/produkt/zebra-wt-sg-wt5x6-wmtsx-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, podwójne pokrętło, rozmiar S (SG-WT5X6-WMTDS-01)](/produkt/zebra-wt-sg-wt5x6-wmtds-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, podwójne pokrętło, rozmiar L (SG-WT5X6-WMTDL-01)](/produkt/zebra-wt-sg-wt5x6-wmtdl-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, podwójne pokrętło, rozmiar XL na kurtkę (SG-WT5X6-WMTDX-01)](/produkt/zebra-wt-sg-wt5x6-wmtdx-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, dwa paski na rzep, rozmiar S (SG-WT5X6-WMTVS-01)](/produkt/zebra-wt-sg-wt5x6-wmtvs-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, dwa paski na rzep, rozmiar L (SG-WT5X6-WMTVL-01)](/produkt/zebra-wt-sg-wt5x6-wmtvl-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, dwa paski na rzep, rozmiar XL na kurtkę (SG-WT5X6-WMTVX-01)](/produkt/zebra-wt-sg-wt5x6-wmtvx-01)\n- [Mocowanie na pasek Zebra WT5400 / WT6400 (SG-WT5X6-HPMNT-01)](/produkt/zebra-wt-sg-wt5x6-hpmnt-01)\n\n**Wymagane dla terminala: ładowanie (jedno z) — sprzedawane osobno**\n\n- [Stacja ładująca Zebra WT5400 / WT6400 1-gniazdowa z gniazdem baterii (CRD-WT5X6-1S1BC-01)](/produkt/zebra-wt-crd-wt5x6-1s1bc-01)\n- [Stacja ładująca Zebra WT5400 / WT6400 5-gniazdowa z ładowarką 5 baterii (CRD-WT5X6-5S5BC-01)](/produkt/zebra-wt-crd-wt5x6-5s5bc-01)\n- [Stacja ładująca Zebra WT5400 / WT6400 10-gniazdowa (CRD-WT5X6-10SC-01)](/produkt/zebra-wt-crd-wt5x6-10sc-01)\n\nDokup tylko te elementy, których jeszcze nie masz.\n\n## Dobór i montaż\n\n- Terminal zatrzaskuje się w mocowaniu i odpina jednym przyciskiem. Każdy pracownik może mieć własne mocowanie i pasek. Mocowania w rozmiarze XL zakłada się na rękaw kurtki.\n\n- Zamiast stacji można ładować WT5400 przewodem: [przewód USB-C / USB-C (CBL-EC5X-USBC3A-01)](/produkt/zebra-cable-usbc-et4x) z [zasilaczem USB-C 45 W (PWR-WUA5V45W1EU)](/produkt/zebra-tc201-pwr-wua5v45w1eu) albo [przewód USB-A / USB-C (CBL-TC5X-USBC2A-01)](/produkt/zebra-tc201-cbl-tc5x-usbc2a-01) z [zasilaczem USB-A 12 W (PWR-WUA5V12W0EU)](/produkt/zebra-tc22-tc27-pwr-wua5v12w0eu). Przewód podłączony do komputera przesyła też dane.\n\n- Stacje 1- i 5-gniazdowe ładują zapasową baterię obok terminala. Więcej baterii ładuje [ładowarka 4 baterii](/produkt/zebra-wt-sac-wt5x6-4sc-01) albo [ładowarka 20 baterii](/produkt/zebra-wt-sac-wt5x6-20sc-01).\n\n- Skaner RS5100 lub RS6100 bez baterii zasila [adapter przewodowy USB-C (CBL-RS5X6-ADPTC-01)](/produkt/zebra-wt-cbl-rs5x6-adptc-01).",
    "categoryId": "terminale-mobilne",
    "subcategoryIds": [
      "terminale-naramienne"
    ],
    "manufacturerId": "zebra",
    "sameAs": "https://www.zebra.com/pl/pl/products/mobile-computers/wearable-computers/wt5400.html",
    "priceFrom": 5448.44,
    "availability": "available",
    "images": [
      "/images/products/WT0-WT54B-T6DAC1A6.png",
      "/images/products/WT0-WT54B-T6DAC1A6-2.png",
      "/images/products/WT0-WT54B-T6DAC1A6-3.png",
      "/images/products/WT0-WT54B-T6DAC1A6-4.png",
      "/images/products/WT0-WT54B-T6DAC1A6-5.png",
      "/images/products/WT0-WT54B-T6DAC1A6-6.png"
    ],
    "imageDescriptions": [
      "Zebra WT5400 — widok z przodu, ekran dotykowy 4,7 cala i przyciski P1, P2, P3 pod ekranem",
      "Zebra WT5400 — widok z boku pod kątem, złącze USB-C z osłoną",
      "Zebra WT5400 w mocowaniu na nadgarstek z pojedynczym pokrętłem (mocowanie sprzedawane osobno)",
      "Zebra WT5400 w mocowaniu na nadgarstek z dwoma paskami na rzep (mocowanie sprzedawane osobno)",
      "Zebra WT5400 na przedramieniu w mocowaniu z pojedynczym pokrętłem (mocowanie sprzedawane osobno)",
      "Zebra WT5400 — widok z tyłu, zaczep do mocowania i bateria"
    ],
    "tags": [
      "retail",
      "magazyn"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Typ urządzenia",
        "value": "Komputer noszony na nadgarstku (terminal naramienny) z ekranem dotykowym"
      },
      {
        "name": "Wymiary",
        "value": "132,5 × 93 × 13,97 mm (dł. × szer. × gł.)"
      },
      {
        "name": "Masa",
        "value": "254 g z baterią standardową; 310 g z baterią rozszerzoną"
      },
      {
        "name": "Wyświetlacz",
        "value": "4,7 cala, 720 × 1280 pikseli, kolorowy; automatyczna jasność z czujnikiem światła"
      },
      {
        "name": "Panel dotykowy",
        "value": "Pojemnościowy, wielotrybowy; obsługa palcem lub w cienkiej rękawicy; szkło Corning Gorilla Glass"
      },
      {
        "name": "Procesor",
        "value": "Qualcomm QCS4490, 8 rdzeni, 2,4 GHz"
      },
      {
        "name": "Pamięć",
        "value": "6 GB RAM, 64 GB Flash"
      },
      {
        "name": "System operacyjny",
        "value": "Android 13 z usługami Google Mobile Services, aktualizacja do Androida 17; aktualizacje zabezpieczeń LifeGuard for Android"
      },
      {
        "name": "Bezpieczeństwo",
        "value": "FIPS 140-2 i FIPS 140-3 (od wydania Android 14); certyfikat Common Criteria; Secure Boot i Verified Boot"
      },
      {
        "name": "Wi-Fi",
        "value": "IEEE 802.11 a/b/g/n/ac/ax/d/h/i/r/k/v/w/mc, Wi-Fi 6E; 2,4, 5 i 6 GHz; 2×2 MU-MIMO; do 2402 Mb/s; WPA3 Personal i Enterprise (także tryb 192-bitowy), WPA2, Enhanced Open"
      },
      {
        "name": "Bluetooth",
        "value": "Bluetooth 5.3, klasa 1"
      },
      {
        "name": "NFC",
        "value": "ISO 14443 typ A i B, FeliCa, ISO 15693, NFC Forum typ 1–5; antena w obudowie terminala, oznaczona ikoną"
      },
      {
        "name": "Skanowanie",
        "value": "Skanery noszone Bluetooth Zebra RS2100, RS5100 i RS6100 parowane przez NFC; RS5100 i RS6100 mogą być zasilane z terminala przez adapter USB-C, dane przez Bluetooth"
      },
      {
        "name": "Złącza",
        "value": "1 × USB-C (USB 3.0 SuperSpeed, klient i host) z osłoną; styki ładowania po dwóch stronach obudowy"
      },
      {
        "name": "Przyciski",
        "value": "Przycisk zasilania; 3 programowalne przyciski funkcyjne"
      },
      {
        "name": "Audio",
        "value": "Głośnik, mikrofon, komunikacja głosowa PTT"
      },
      {
        "name": "Powiadomienia",
        "value": "Sygnał dźwiękowy, wielokolorowa dioda LED, wibracje"
      },
      {
        "name": "Czujniki",
        "value": "Czujnik światła; 3-osiowy akcelerometr z żyroskopem MEMS"
      },
      {
        "name": "Bateria",
        "value": "Wymienna Li-Ion PowerPrecision+: standardowa 3500 mAh lub rozszerzona 5000 mAh (zależnie od wersji)"
      },
      {
        "name": "Ładowanie",
        "value": "W stacji lub przewodem USB; bateria standardowa ok. 4 h, rozszerzona ok. 5,5 h w temperaturze pokojowej; ładowanie w temperaturze 0–40 °C"
      },
      {
        "name": "Temperatura pracy",
        "value": "−20 °C do 50 °C (z baterią standardową i rozszerzoną)"
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
        "value": "1,8 m na beton w temperaturze 23–50 °C (MIL-STD-810H); 1,2 m na beton w zakresie −20–50 °C"
      },
      {
        "name": "Odporność na przewroty",
        "value": "1000 przewrotów z 0,5 m w temperaturze pokojowej"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP65; IP67 z baterią (normy IEC)"
      },
      {
        "name": "Drgania",
        "value": "Sinusoidalne 4 g, 5 Hz–2 kHz; losowe 0,04 g²/Hz, 20 Hz–2 kHz; 60 min na oś, 3 osie"
      },
      {
        "name": "ESD",
        "value": "±15 kV w powietrzu, ±8 kV bezpośrednio i pośrednio"
      },
      {
        "name": "Certyfikaty",
        "value": "Android Enterprise Recommended"
      },
      {
        "name": "Materiały",
        "value": "Ponad 40% tworzyw z recyklingu poużytkowego; opakowanie w 90% biodegradowalne"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Terminal, bateria, Regulatory Guide"
      },
      {
        "name": "Elementy poza zestawem",
        "value": "Mocowanie na nadgarstek lub na pasek; stacja ładująca lub przewód USB"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy; usługi Zebra OneCare Essential i Select na zapytanie"
      }
    ],
    "applications": [
      "Realizacja zamówień internetowych i kompletacja na sali sprzedaży",
      "Przyjęcie dostawy i zarządzanie zapasami na zapleczu sklepu",
      "Uzupełnianie półek na sali sprzedaży",
      "Weryfikacja i aktualizacja cen",
      "Obsługa zwrotów (logistyka zwrotna)"
    ],
    "variants": [
      {
        "partNumber": "WT0-WT54B-T6DAC1A6",
        "name": "WT0-WT54B-T6DAC1A6, ekran dotykowy, bateria standardowa 3500 mAh",
        "attributes": {
          "Bateria": "Standardowa 3500 mAh"
        },
        "priceFrom": 5448.44,
        "availability": "available"
      },
      {
        "partNumber": "WT0-WT54B-T6DAE1A6",
        "name": "WT0-WT54B-T6DAE1A6, ekran dotykowy, bateria rozszerzona 5000 mAh",
        "attributes": {
          "Bateria": "Rozszerzona 5000 mAh"
        },
        "priceFrom": 5587.43,
        "availability": "available"
      }
    ],
    "variantAttributeTooltips": {
      "Bateria": "Wymienna bateria PowerPrecision+ dołączona do WT5400. Z obiema bateriami terminal pracuje od −20 do 50 °C.\n\n• Standardowa 3500 mAh — na pełną zmianę; terminal waży 254 g.\n\n• Rozszerzona 5000 mAh — na dłuższą pracę; terminal waży 310 g."
    },
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-wt-crd-wt5x6-1s1bc-01",
      "zebra-wt-crd-wt5x6-5s5bc-01",
      "zebra-wt-btry-wt5x6-35ma-01",
      "zebra-wt-btry-wt5x6-50ma-01",
      "zebra-wt-crd-wt5x6-10sc-01",
      "zebra-wt-sac-wt5x6-4sc-01",
      "zebra-wt-sac-wt5x6-20sc-01",
      "zebra-wt-sg-wt5x6-wmtss-01",
      "zebra-wt-sg-wt5x6-wmtsl-01",
      "zebra-wt-sg-wt5x6-wmtsx-01",
      "zebra-wt-sg-wt5x6-wmtds-01",
      "zebra-wt-sg-wt5x6-wmtdl-01",
      "zebra-wt-sg-wt5x6-wmtdx-01",
      "zebra-wt-sg-wt5x6-wmtvs-01",
      "zebra-wt-sg-wt5x6-wmtvl-01",
      "zebra-wt-sg-wt5x6-wmtvx-01",
      "zebra-wt-sg-wt5x6-hpmnt-01",
      "zebra-wt-cbl-rs5x6-adptc-01",
      "zebra-cable-usbc-et4x",
      "zebra-tc201-pwr-wua5v45w1eu",
      "zebra-tc201-cbl-tc5x-usbc2a-01",
      "zebra-tc22-tc27-pwr-wua5v12w0eu",
      "zebra-wt-misc-wt5x6-scrn-05",
      "zebra-wt-sg-wt4027050-01r",
      "zebra-wt-sg-ngwt-wstpst-01",
      "zebra-wt-sg-ngwt-wstpln-01",
      "zebra-wt-sg-ngwt-wstpxl-01",
      "zebra-wt-sg-wt5x6-wstds-01",
      "zebra-wt-sg-wt5x6-wstdl-01",
      "zebra-wt-sg-wt5x6-wstdx-01",
      "zebra-wt-sg-wt5x6-wstvs-01",
      "zebra-wt-sg-wt5x6-wstvl-01",
      "zebra-wt-sg-wt5x6-wstvx-01",
      "zebra-wt-sg-ngwt-wstvls-02",
      "zebra-wt-sg-ngwt-wstvlm-02",
      "zebra-wt-sg-ngwt-wstvll-02"
    ],
    "relatedProducts": [
      "zebra-wt6400"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa Zebra WT5400 (PL)",
        "type": "datasheet",
        "url": "/downloads/zebra-wt5400-karta-katalogowa-pl.pdf",
        "size": "396 KB"
      },
      {
        "name": "Instrukcja szybkiego startu Zebra WT5400 / WT6400 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-wt5400-wt6400-instrukcja-szybkiego-startu-en.pdf",
        "size": "731 KB"
      },
      {
        "name": "Przewodnik akcesoriów Zebra WT5400 / WT6400 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-wt5400-wt6400-akcesoria-en.pdf",
        "size": "4,1 MB"
      }
    ],
    "faq": [
      {
        "question": "Jakie skanery współpracują z Zebra WT5400?",
        "answer": "WT5400 obsługuje skanery Bluetooth. Z noszonymi skanerami [RS2100](/produkt/zebra-rs2100), [RS5100](/produkt/zebra-rs5100) i [RS6100](/produkt/zebra-rs6100) paruje się przez zbliżenie skanera do ikony NFC na obudowie terminala. Skanerów przewodowych RS4000 i RS5000x nie można podłączyć do WT5400."
      },
      {
        "question": "Czy WT5400 może zasilać skaner?",
        "answer": "Tak, skaner RS5100 lub RS6100. [Adapter przewodowy CBL-RS5X6-ADPTC-01](/produkt/zebra-wt-cbl-rs5x6-adptc-01) łączy skaner ze złączem USB-C terminala i doprowadza do niego zasilanie. Odczytane kody nadal trafiają do WT5400 przez Bluetooth."
      },
      {
        "question": "Czym ładuje się WT5400 i zapasowe baterie?",
        "answer": "Terminal z baterią ładuje stacja [1-gniazdowa](/produkt/zebra-wt-crd-wt5x6-1s1bc-01), [5-gniazdowa](/produkt/zebra-wt-crd-wt5x6-5s5bc-01) lub [10-gniazdowa](/produkt/zebra-wt-crd-wt5x6-10sc-01), a także przewód USB-C z zasilaczem. Stacje 1- i 5-gniazdowe mają też gniazda na zapasowe baterie. W temperaturze pokojowej bateria standardowa ładuje się około 4 godzin, a rozszerzona około 5,5 godziny. Stacji Ethernet CRD-WT64-5S5BE-01 nie można używać z WT5400."
      },
      {
        "question": "Jak wymienić baterię w WT5400 w trakcie zmiany?",
        "answer": "Najpierw należy krótko nacisnąć przycisk zasilania, aby uśpić terminal. Następnie trzeba ścisnąć zatrzaski po obu stronach baterii, wyjąć ją i wsunąć naładowaną baterię do zatrzaśnięcia. Kąt gniazda baterii pozwala zrobić to bez zdejmowania terminala z ręki."
      },
      {
        "question": "Czym WT5400 różni się od WT6400?",
        "answer": "WT5400 jest przeznaczony do sklepów, ma złącze USB-C 3.0 i współpracuje tylko ze skanerami Bluetooth. [WT6400](/produkt/zebra-wt6400) jest przeznaczony do magazynów i produkcji. Ma boczny aparat 13 MP, dwa wzmocnione złącza boczne do skanerów przewodowych, wersję z klawiaturą i obsługę stacji Ethernet. Z baterią rozszerzoną WT6400 pracuje od −30 °C, a WT5400 od −20 °C."
      },
      {
        "question": "Co jest w opakowaniu WT5400?",
        "answer": "Terminal, bateria i broszura Regulatory Guide. Mocowanie na nadgarstek lub na pasek oraz stację ładującą albo przewód USB zamawia się osobno."
      },
      {
        "question": "Czy WT5400 nadaje się do chłodni?",
        "answer": "WT5400 pracuje w temperaturze od −20 do 50 °C, także z baterią rozszerzoną. Do pracy w mroźni w temperaturze do −30 °C przeznaczony jest [WT6400](/produkt/zebra-wt6400) z baterią rozszerzoną."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-wt6400",
    "slug": "zebra-wt6400",
    "name": "Zebra WT6400",
    "seoH1": "Zebra WT6400",
    "seoTitle": "Zebra WT6400 — terminal naramienny do magazynu i mroźni, aparat 13 MP, klawiatura",
    "seoDescription": "Terminal naramienny Zebra WT6400 z Androidem: ekran 4,7 cala, aparat 13 MP, wersja z klawiaturą, skanery Bluetooth i przewodowe, praca do −30 °C. Komputer noszony na nadgarstku Zebra WT6400, terminal na rękę Zebra, WT6400 Zebra. PN: WT0-WT64B-T6DCC2A6, WT0-WT64B-T6DCE2A6, WT0-WT64B-K6DCC2A6, WT0-WT64B-K6DCE2A6.",
    "shortDescription": "Zebra WT6400 — terminal naramienny do magazynu, produkcji i mroźni: ekran 4,7 cala, aparat 13 MP, wersja z klawiaturą, skanery przewodowe.",
    "description": "Zebra WT6400 to terminal z Androidem mocowany na przedramieniu, przeznaczony do magazynów, centrów dystrybucji i zakładów produkcyjnych. Służy do kompletacji, sortowania, przyjęć i rozlokowania towaru, zasilania linii produkcyjnej oraz kontroli jakości. Z baterią rozszerzoną pracuje w mroźni w temperaturze do −30 °C.\n\nEkran 4,7 cala ma dwa razy większą powierzchnię niż w modelu WT6300, a obudowa jest o prawie jedną trzecią cieńsza. Szkło Corning Gorilla Glass Victus 2 chroni ekran, który działa po zamoczeniu i w grubych rękawicach. Wersja z klawiaturą ma 23 klawisze pod ekranem, równie wygodne dla prawo- i leworęcznych.\n\nBoczny aparat 13 MP jest pochylony o 22°, więc zdjęcie stanu przesyłki wykonuje się bez obracania ręki. Kody odczytują skanery Bluetooth Zebra [RS2100](/produkt/zebra-rs2100), [RS5100](/produkt/zebra-rs5100) i [RS6100](/produkt/zebra-rs6100), parowane przez NFC, albo skanery przewodowe RS4000 i RS5000 podłączane do wzmocnionych złączy bocznych. Baterię wymienia się bez wyłączania terminala i bez przerywania zadania.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane dla terminala: mocowanie (jedno z) — sprzedawane osobno**\n\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, pojedyncze pokrętło, rozmiar S (SG-WT5X6-WMTSS-01)](/produkt/zebra-wt-sg-wt5x6-wmtss-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, pojedyncze pokrętło, rozmiar L (SG-WT5X6-WMTSL-01)](/produkt/zebra-wt-sg-wt5x6-wmtsl-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, pojedyncze pokrętło, rozmiar XL na kurtkę (SG-WT5X6-WMTSX-01)](/produkt/zebra-wt-sg-wt5x6-wmtsx-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, podwójne pokrętło, rozmiar S (SG-WT5X6-WMTDS-01)](/produkt/zebra-wt-sg-wt5x6-wmtds-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, podwójne pokrętło, rozmiar L (SG-WT5X6-WMTDL-01)](/produkt/zebra-wt-sg-wt5x6-wmtdl-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, podwójne pokrętło, rozmiar XL na kurtkę (SG-WT5X6-WMTDX-01)](/produkt/zebra-wt-sg-wt5x6-wmtdx-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, dwa paski na rzep, rozmiar S (SG-WT5X6-WMTVS-01)](/produkt/zebra-wt-sg-wt5x6-wmtvs-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, dwa paski na rzep, rozmiar L (SG-WT5X6-WMTVL-01)](/produkt/zebra-wt-sg-wt5x6-wmtvl-01)\n- [Mocowanie na nadgarstek Zebra WT5400 / WT6400, dwa paski na rzep, rozmiar XL na kurtkę (SG-WT5X6-WMTVX-01)](/produkt/zebra-wt-sg-wt5x6-wmtvx-01)\n- [Mocowanie na pasek Zebra WT5400 / WT6400 (SG-WT5X6-HPMNT-01)](/produkt/zebra-wt-sg-wt5x6-hpmnt-01)\n\n**Wymagane dla terminala: ładowanie (jedno z) — sprzedawane osobno**\n\n- [Stacja ładująca Zebra WT5400 / WT6400 1-gniazdowa z gniazdem baterii (CRD-WT5X6-1S1BC-01)](/produkt/zebra-wt-crd-wt5x6-1s1bc-01)\n- [Stacja ładująca Zebra WT5400 / WT6400 5-gniazdowa z ładowarką 5 baterii (CRD-WT5X6-5S5BC-01)](/produkt/zebra-wt-crd-wt5x6-5s5bc-01)\n- [Stacja ładująca Zebra WT5400 / WT6400 10-gniazdowa (CRD-WT5X6-10SC-01)](/produkt/zebra-wt-crd-wt5x6-10sc-01)\n- [Stacja Ethernet Zebra WT6400 5-gniazdowa z ładowarką 5 baterii (CRD-WT64-5S5BE-01)](/produkt/zebra-wt-crd-wt64-5s5be-01)\n\nDokup tylko te elementy, których jeszcze nie masz.\n\n## Dobór i montaż\n\n- Do wersji z klawiaturą najlepiej pasuje mocowanie z podwójnym pokrętłem: dwa paski pewniej trzymają terminal na ręce. Mocowanie odpina się jednym przyciskiem, więc każdy pracownik może mieć własne.\n\n- Mocowanie na pasek służy do kompletacji głosowej z terminalem przy biodrze. Wymaga skanera z długim przewodem, przewodowego zestawu słuchawkowego albo skanera Bluetooth.\n\n- Przewodem WT6400 ładuje [przewód USB do ładowania (CBL-NGWT-USBCHG-01)](/produkt/zebra-wt-cbl-ngwt-usbchg-01) z [zasilaczem USB-A 12 W (PWR-WUA5V12W0EU)](/produkt/zebra-tc22-tc27-pwr-wua5v12w0eu). Podłączony do komputera przewód przesyła dane przez USB.\n\n- Zapasowe baterie ładuje [ładowarka 4 baterii](/produkt/zebra-wt-sac-wt5x6-4sc-01) albo [ładowarka 20 baterii](/produkt/zebra-wt-sac-wt5x6-20sc-01).",
    "categoryId": "terminale-mobilne",
    "subcategoryIds": [
      "terminale-naramienne"
    ],
    "manufacturerId": "zebra",
    "sameAs": "https://www.zebra.com/pl/pl/products/mobile-computers/wearable-computers/wt6400.html",
    "priceFrom": 11740.12,
    "availability": "available",
    "images": [
      "/images/products/WT0-WT64B-T6DCC2A6.png",
      "/images/products/WT0-WT64B-T6DCC2A6-2.png",
      "/images/products/WT0-WT64B-T6DCC2A6-3.png",
      "/images/products/WT0-WT64B-T6DCC2A6-4.png",
      "/images/products/WT0-WT64B-T6DCC2A6-5.png",
      "/images/products/WT0-WT64B-T6DCC2A6-6.png",
      "/images/products/WT0-WT64B-T6DCC2A6-7.png",
      "/images/products/WT0-WT64B-T6DCC2A6-8.png"
    ],
    "imageDescriptions": [
      "Zebra WT6400 z ekranem dotykowym — widok z przodu, ekran 4,7 cala i przyciski P1, P2, P3",
      "Zebra WT6400 z klawiaturą — widok z przodu, 23 klawisze pod ekranem",
      "Zebra WT6400 z ekranem dotykowym — widok z boku pod kątem, wzmocnione złącze boczne",
      "Zebra WT6400 z klawiaturą — widok z góry pod kątem, klawiatura i złącze boczne",
      "Zebra WT6400 w mocowaniu na nadgarstek z pojedynczym pokrętłem (mocowanie sprzedawane osobno)",
      "Zebra WT6400 z ekranem dotykowym na przedramieniu w mocowaniu z pojedynczym pokrętłem (mocowanie sprzedawane osobno)",
      "Zebra WT6400 z klawiaturą na przedramieniu w mocowaniu z pojedynczym pokrętłem (mocowanie sprzedawane osobno)",
      "Zebra WT6400 z klawiaturą — widok z tyłu, zaczep do mocowania i bateria"
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
        "name": "Typ urządzenia",
        "value": "Komputer noszony na przedramieniu (terminal naramienny) z ekranem dotykowym lub z ekranem i klawiaturą"
      },
      {
        "name": "Wymiary",
        "value": "Wersja dotykowa: 132,5 × 93 × 13,97 mm; wersja z klawiaturą: 132,5 × 107 × 13,97 mm (dł. × szer. × gł.)"
      },
      {
        "name": "Masa",
        "value": "Wersja dotykowa: 205 g bez baterii, 277 g z baterią standardową, 331 g z rozszerzoną; wersja z klawiaturą: 223 g bez baterii, 296 g z baterią standardową, 350 g z rozszerzoną"
      },
      {
        "name": "Wyświetlacz",
        "value": "4,7 cala, 720 × 1280 pikseli, kolorowy; automatyczna jasność z czujnikiem światła"
      },
      {
        "name": "Panel dotykowy",
        "value": "Pojemnościowy; obsługa palcem, w rękawicy lub rysikiem pojemnościowym; szkło Corning Gorilla Glass Victus 2"
      },
      {
        "name": "Klawiatura",
        "value": "23 klawisze alfanumeryczne i funkcyjne (wersja z klawiaturą)"
      },
      {
        "name": "Procesor",
        "value": "Qualcomm QCS4490, 8 rdzeni, 2,4 GHz"
      },
      {
        "name": "Pamięć",
        "value": "6 GB RAM, 64 GB Flash"
      },
      {
        "name": "System operacyjny",
        "value": "Android 13 z usługami Google Mobile Services, aktualizacja do Androida 17; LifeGuard for Android w ramach umowy Zebra OneCare"
      },
      {
        "name": "Bezpieczeństwo",
        "value": "FIPS 140-2 i FIPS 140-3 (od wydania Android 14); certyfikat Common Criteria; Secure Boot i Verified Boot"
      },
      {
        "name": "Aparat",
        "value": "Boczny 13 MP, pochylony o 22°, z diodą doświetlającą"
      },
      {
        "name": "Wi-Fi",
        "value": "IEEE 802.11 a/b/g/n/ac/ax/d/h/i/r/k/v/w/mc, Wi-Fi 6E; 2,4, 5 i 6 GHz; 2×2 MU-MIMO; do 2402 Mb/s; WPA3 Personal i Enterprise (także tryb 192-bitowy), WPA2, Enhanced Open"
      },
      {
        "name": "Bluetooth",
        "value": "Bluetooth 5.3, klasa 1"
      },
      {
        "name": "NFC",
        "value": "ISO 14443 typ A i B, FeliCa, ISO 15693, NFC Forum typ 1–5; antena w obudowie terminala, oznaczona ikoną"
      },
      {
        "name": "Skanowanie",
        "value": "Skanery noszone Bluetooth Zebra RS2100, RS5100 i RS6100 parowane przez NFC; skanery przewodowe Zebra RS4000 i RS5000 przez złącza boczne; RS5100 i RS6100 mogą być zasilane z terminala przez adapter przewodowy, dane przez Bluetooth"
      },
      {
        "name": "Złącza",
        "value": "2 wzmocnione złącza boczne (USB 2.0, klient i host; audio, ładowanie); styki ładowania po dwóch stronach obudowy"
      },
      {
        "name": "Przyciski",
        "value": "Przycisk zasilania; w wersji dotykowej 3 programowalne przyciski funkcyjne"
      },
      {
        "name": "Audio",
        "value": "Głośnik, mikrofon, komunikacja głosowa PTT; przewodowy zestaw słuchawkowy przez adapter audio"
      },
      {
        "name": "Powiadomienia",
        "value": "Sygnał dźwiękowy, wielokolorowa dioda LED, wibracje"
      },
      {
        "name": "Czujniki",
        "value": "Czujnik światła; 3-osiowy akcelerometr z żyroskopem MEMS; magnetometr (eCompass)"
      },
      {
        "name": "Bateria",
        "value": "Wymienna Li-Ion PowerPrecision+, wymiana bez wyłączania terminala: standardowa 3500 mAh lub rozszerzona 5000 mAh do mroźni (zależnie od wersji)"
      },
      {
        "name": "Ładowanie",
        "value": "W stacji lub przewodem USB; bateria standardowa ok. 4 h, rozszerzona ok. 5,5 h w temperaturze pokojowej; ładowanie w temperaturze 0–40 °C"
      },
      {
        "name": "Temperatura pracy",
        "value": "Z baterią standardową: −20 °C do 50 °C; z baterią rozszerzoną: −30 °C do 50 °C (mroźnia)"
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
        "value": "1,8 m na beton w temperaturze 23–50 °C (MIL-STD-810H); 1,2 m na beton w zakresie −30–50 °C"
      },
      {
        "name": "Odporność na przewroty",
        "value": "1000 przewrotów z 0,5 m w temperaturze pokojowej"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP65; IP67 z baterią (normy IEC)"
      },
      {
        "name": "Drgania",
        "value": "Sinusoidalne 4 g, 5 Hz–2 kHz; losowe 0,04 g²/Hz, 20 Hz–2 kHz; 60 min na oś, 3 osie"
      },
      {
        "name": "ESD",
        "value": "±15 kV w powietrzu, ±8 kV bezpośrednio i pośrednio"
      },
      {
        "name": "Certyfikaty",
        "value": "Android Enterprise Recommended"
      },
      {
        "name": "Materiały",
        "value": "Ponad 40% tworzyw z recyklingu poużytkowego; szkło ekranu w 22% z recyklingu; opakowanie w 90% biodegradowalne"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Terminal, bateria, Regulatory Guide"
      },
      {
        "name": "Elementy poza zestawem",
        "value": "Mocowanie na nadgarstek lub na pasek; stacja ładująca lub przewód USB"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy; usługi Zebra OneCare Essential i Select na zapytanie"
      }
    ],
    "applications": [
      "Kompletacja, sortowanie i pakowanie w magazynie i centrum dystrybucji",
      "Przyjęcie i rozlokowanie towaru, uzupełnianie lokalizacji",
      "Obsługa zwrotów",
      "Zasilanie linii produkcyjnej, śledzenie produkcji w toku i kontrola jakości",
      "Praca w chłodni i mroźni do −30 °C z baterią rozszerzoną"
    ],
    "variants": [
      {
        "partNumber": "WT0-WT64B-T6DCC2A6",
        "name": "WT0-WT64B-T6DCC2A6, ekran dotykowy, bateria standardowa 3500 mAh",
        "attributes": {
          "Interfejs": "Ekran dotykowy",
          "Bateria": "Standardowa 3500 mAh"
        },
        "priceFrom": 11740.12,
        "availability": "on-order"
      },
      {
        "partNumber": "WT0-WT64B-T6DCE2A6",
        "name": "WT0-WT64B-T6DCE2A6, ekran dotykowy, bateria rozszerzona 5000 mAh",
        "attributes": {
          "Interfejs": "Ekran dotykowy",
          "Bateria": "Rozszerzona 5000 mAh"
        },
        "priceFrom": 11920.37,
        "availability": "on-order"
      },
      {
        "partNumber": "WT0-WT64B-K6DCC2A6",
        "name": "WT0-WT64B-K6DCC2A6, klawiatura i ekran dotykowy, bateria standardowa 3500 mAh",
        "attributes": {
          "Interfejs": "Klawiatura i ekran dotykowy",
          "Bateria": "Standardowa 3500 mAh"
        },
        "priceFrom": 13199.91,
        "availability": "available"
      },
      {
        "partNumber": "WT0-WT64B-K6DCE2A6",
        "name": "WT0-WT64B-K6DCE2A6, klawiatura i ekran dotykowy, bateria rozszerzona 5000 mAh",
        "attributes": {
          "Interfejs": "Klawiatura i ekran dotykowy",
          "Bateria": "Rozszerzona 5000 mAh"
        },
        "priceFrom": 13380.2,
        "availability": "on-order"
      }
    ],
    "variantAttributeTooltips": {
      "Interfejs": "Sposób wprowadzania danych w WT6400.\n\n• Ekran dotykowy — ekran 4,7 cala i trzy programowalne przyciski; szerokość 93 mm.\n\n• Klawiatura i ekran dotykowy — dodatkowo 23 klawisze pod ekranem, do wpisywania w grubych rękawicach; szerokość 107 mm.",
      "Bateria": "Wymienna bateria PowerPrecision+ dołączona do WT6400. Od niej zależy, czy terminal może pracować w mroźni.\n\n• Standardowa 3500 mAh — praca od −20 do 50 °C.\n\n• Rozszerzona 5000 mAh — praca od −30 do 50 °C, także w mroźni."
    },
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-wt-crd-wt5x6-1s1bc-01",
      "zebra-wt-crd-wt5x6-5s5bc-01",
      "zebra-wt-btry-wt5x6-50ma-01",
      "zebra-wt-btry-wt5x6-35ma-01",
      "zebra-wt-crd-wt64-5s5be-01",
      "zebra-wt-crd-wt5x6-10sc-01",
      "zebra-wt-sac-wt5x6-4sc-01",
      "zebra-wt-sac-wt5x6-20sc-01",
      "zebra-wt-sg-wt5x6-wmtss-01",
      "zebra-wt-sg-wt5x6-wmtsl-01",
      "zebra-wt-sg-wt5x6-wmtsx-01",
      "zebra-wt-sg-wt5x6-wmtds-01",
      "zebra-wt-sg-wt5x6-wmtdl-01",
      "zebra-wt-sg-wt5x6-wmtdx-01",
      "zebra-wt-sg-wt5x6-wmtvs-01",
      "zebra-wt-sg-wt5x6-wmtvl-01",
      "zebra-wt-sg-wt5x6-wmtvx-01",
      "zebra-wt-sg-wt5x6-hpmnt-01",
      "zebra-rs5000x",
      "zebra-rs6100-cbl-rs5x6-adpwt-01",
      "zebra-wt-cbl-ngwt-usbchg-01",
      "zebra-tc22-tc27-pwr-wua5v12w0eu",
      "zebra-wt-misc-wt5x6-scrn-05",
      "zebra-wt-sg-wt4027050-01r",
      "zebra-wt-sg-ngwt-wstpst-01",
      "zebra-wt-sg-ngwt-wstpln-01",
      "zebra-wt-sg-ngwt-wstpxl-01",
      "zebra-wt-sg-wt5x6-wstds-01",
      "zebra-wt-sg-wt5x6-wstdl-01",
      "zebra-wt-sg-wt5x6-wstdx-01",
      "zebra-wt-sg-wt5x6-wstvs-01",
      "zebra-wt-sg-wt5x6-wstvl-01",
      "zebra-wt-sg-wt5x6-wstvx-01",
      "zebra-wt-sg-ngwt-wstvls-02",
      "zebra-wt-sg-ngwt-wstvlm-02",
      "zebra-wt-sg-ngwt-wstvll-02"
    ],
    "relatedProducts": [
      "zebra-wt5400"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa Zebra WT6400 (PL)",
        "type": "datasheet",
        "url": "/downloads/zebra-wt6400-karta-katalogowa-pl.pdf",
        "size": "389 KB"
      },
      {
        "name": "Instrukcja szybkiego startu Zebra WT5400 / WT6400 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-wt5400-wt6400-instrukcja-szybkiego-startu-en.pdf",
        "size": "731 KB"
      },
      {
        "name": "Przewodnik akcesoriów Zebra WT5400 / WT6400 (EN)",
        "type": "pdf",
        "url": "/downloads/zebra-wt5400-wt6400-akcesoria-en.pdf",
        "size": "4,1 MB"
      }
    ],
    "faq": [
      {
        "question": "Jakie skanery można podłączyć do Zebra WT6400?",
        "answer": "Bezprzewodowo: skanery noszone [RS2100](/produkt/zebra-rs2100), [RS5100](/produkt/zebra-rs5100) i [RS6100](/produkt/zebra-rs6100), które łączą się z terminalem po zbliżeniu do ikony NFC. Przewodowo: skanery RS4000 i [RS5000x](/produkt/zebra-rs5000x), podłączane do wzmocnionego złącza bocznego. RS5000x ma wersję ze spustem do rękawic do pracy w mroźni."
      },
      {
        "question": "Czy WT6400 pracuje w mroźni?",
        "answer": "Tak, z [baterią rozszerzoną 5000 mAh](/produkt/zebra-wt-btry-wt5x6-50ma-01). Wtedy zakres pracy wynosi od −30 do 50 °C, a z baterią standardową od −20 do 50 °C. Ekran działa w mroźni, po zamoczeniu i w grubych rękawicach. Odporność na upadki na beton z wysokości 1,2 m obejmuje cały zakres od −30 do 50 °C."
      },
      {
        "question": "Czym różni się WT6400 z klawiaturą od wersji dotykowej?",
        "answer": "Wersja z klawiaturą ma pod ekranem 23 klawisze alfanumeryczne i funkcyjne. Klawisze mają rozmiar i odstępy dobrane do pracy w grubych rękawicach. Klawiatura pod ekranem zwiększa szerokość terminala z 93 do 107 mm i masę o kilkanaście gramów. Wersja dotykowa ma trzy programowalne przyciski pod ekranem."
      },
      {
        "question": "Czy WT6400 zasila skaner Bluetooth?",
        "answer": "Tak. RS5100 lub RS6100 można zasilać z terminala przez [adapter przewodowy CBL-RS5X6-ADPWT-01](/produkt/zebra-rs6100-cbl-rs5x6-adpwt-01) podłączony do złącza bocznego. Skaner przesyła kody przez Bluetooth, a z adapterem RS6100 może pracować w mroźni."
      },
      {
        "question": "Jakie stacje ładujące pasują do WT6400?",
        "answer": "Pasują wszystkie stacje WT5400 / WT6400: [1-gniazdowa](/produkt/zebra-wt-crd-wt5x6-1s1bc-01), [5-gniazdowa](/produkt/zebra-wt-crd-wt5x6-5s5bc-01) i [10-gniazdowa](/produkt/zebra-wt-crd-wt5x6-10sc-01). Tylko z WT6400 współpracuje [stacja Ethernet CRD-WT64-5S5BE-01](/produkt/zebra-wt-crd-wt64-5s5be-01), która łączy pięć terminali z siecią przewodową. Pojedynczy terminal można też ładować przewodem CBL-NGWT-USBCHG-01."
      },
      {
        "question": "Czy do WT6400 można podłączyć przewodowy zestaw słuchawkowy?",
        "answer": "Tak, przez adapter audio z szybkozłączem wpinany w złącze boczne. Krótki adapter jest przeznaczony do pracy z terminalem na nadgarstku, a długi do pracy z terminalem na biodrze. Zestaw słuchawkowy Bluetooth paruje się przez NFC. Adaptery audio są dostępne na zapytanie."
      },
      {
        "question": "Co zawiera opakowanie WT6400 i jak długo Android jest aktualizowany?",
        "answer": "W pudełku WT6400 znajdują się sam terminal, bateria oraz Regulatory Guide, a mocowanie i sposób ładowania wybiera się osobno. Android jest aktualizowany do wersji 17. Program LifeGuard for Android, dostępny w ramach umowy Zebra OneCare, pozwala decydować, kiedy aktualizacje trafią na terminale."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  }
]

const wtDownloads = [
  {
    "name": "Przewodnik akcesoriów Zebra WT5400 / WT6400 (EN)",
    "type": "pdf" as const,
    "url": "/downloads/zebra-wt5400-wt6400-akcesoria-en.pdf",
    "size": "4,1 MB"
  },
  {
    "name": "Instrukcja szybkiego startu Zebra WT5400 / WT6400 (EN)",
    "type": "manual" as const,
    "url": "/downloads/zebra-wt5400-wt6400-instrukcja-szybkiego-startu-en.pdf",
    "size": "731 KB"
  }
]

export const zebraWtAccessories: Product[] = [
  {
    "id": "zebra-wt-crd-wt5x6-1s1bc-01",
    "slug": "zebra-wt-crd-wt5x6-1s1bc-01",
    "name": "Stacja ładująca Zebra WT5400 / WT6400 1-gniazdowa z gniazdem baterii",
    "seoH1": "Stacja ładująca Zebra WT5400 / WT6400 1-gniazdowa z gniazdem baterii",
    "seoTitle": "Stacja ładująca Zebra WT5400 / WT6400 1-gniazdowa — CRD-WT5X6-1S1BC-01",
    "seoDescription": "Stacja Zebra CRD-WT5X6-1S1BC-01 ładuje terminal naramienny WT5400 lub WT6400 i zapasową baterię. Ładowarka Zebra WT6400 na biurko, zasilacz 50 W sprzedawany osobno.",
    "shortDescription": "Zebra CRD-WT5X6-1S1BC-01 — stacja na jeden terminal WT5400 lub WT6400 i jedną zapasową baterię; tylko ładowanie, zasilanie 12 V DC z zasilacza 50 W.",
    "description": "Stacja CRD-WT5X6-1S1BC-01 ładuje jeden terminal Zebra [WT5400](/produkt/zebra-wt5400) lub [WT6400](/produkt/zebra-wt6400) z baterią w środku. Tylne gniazdo jednocześnie ładuje zapasową baterię standardową lub rozszerzoną, więc na początku zmiany pracownik ma pod ręką drugą naładowaną baterię. Stacja nie przesyła danych.\n\nTerminal wsuwa się do gniazda dowolnym końcem i dociska. Dioda terminala miga podczas ładowania. Dioda przy gnieździe baterii świeci na pomarańczowo w trakcie ładowania i na zielono po jego zakończeniu. Stacja ma wymiary 97,5 × 134,5 × 81,8 mm i waży 424 g. Stawia się ją poziomo na biurku albo na półce.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy Zebra 50 W (PWR-BGA12V50W0WW)](/produkt/zebra-zasilacz-50w)\n- [Przewód DC Zebra CBL-DC-388A1-01 (CBL-DC-388A1-01)](/produkt/zebra-kabel-zasilajacy-388)\n- [Przewód sieciowy Zebra — Europa, C13 (50-16000-220R)](/produkt/zebra-tc201-50-16000-220r)\n\nDokup tylko te elementy, których jeszcze nie masz.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "stacje-ladowarki-terminali",
      "akcesoria-do-terminali"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CRD-WT5X6-1S1BC-01.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca Zebra WT5400 / WT6400 1-gniazdowa — gniazdo terminala i gniazdo zapasowej baterii (terminal i bateria sprzedawane osobno)"
    ],
    "tags": [
      "retail",
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 1044.58,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      { "name": "Part Number", "value": "CRD-WT5X6-1S1BC-01" },
      { "name": "Liczba terminali", "value": "1 terminal WT5400 lub WT6400 z baterią" },
      { "name": "Liczba zapasowych baterii", "value": "1 (standardowa lub rozszerzona)" },
      { "name": "Komunikacja", "value": "Brak, tylko ładowanie" },
      { "name": "Zasilanie", "value": "12 V DC, pobór 11,8 W; zasilacz PWR-BGA12V50W0WW, przewód DC CBL-DC-388A1-01 i przewód sieciowy 50-16000-220R sprzedawane osobno" },
      { "name": "Wymiary", "value": "97,5 × 134,5 × 81,8 mm (szer. × gł. × wys.)" },
      { "name": "Masa", "value": "424 g" },
      { "name": "Temperatura pracy", "value": "0 °C do 50 °C" },
      { "name": "Temperatura ładowania", "value": "0 °C do 40 °C" },
      { "name": "Temperatura przechowywania", "value": "−40 °C do 70 °C" },
      { "name": "Wilgotność", "value": "5–95% bez kondensacji" },
      { "name": "Odporność na upadki", "value": "76,2 cm na beton pokryty płytkami winylowymi, w temperaturze pokojowej" },
      { "name": "ESD", "value": "±20 kV w powietrzu, ±10 kV kontaktowo i pośrednio" },
      { "name": "Montaż", "value": "Poziomo na biurku lub półce; nie montować pionowo bezpośrednio na ścianie" },
      { "name": "Kompatybilność", "value": "Zebra WT5400, Zebra WT6400" }
    ],
    "applications": [
      "Ładowanie terminala i zapasowej baterii na jednym stanowisku"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-psu-50w",
      "zebra-cable-dc-388",
      "zebra-tc201-50-16000-220r",
      "zebra-wt-btry-wt5x6-35ma-01",
      "zebra-wt-btry-wt5x6-50ma-01"
    ],
    "relatedProducts": [
      "zebra-wt5400",
      "zebra-wt6400"
    ],
    "downloads": wtDownloads,
    "faq": [
      {
        "question": "Czy stacja CRD-WT5X6-1S1BC-01 przesyła dane do komputera?",
        "answer": "Nie. Stacja tylko ładuje terminal i zapasową baterię. Do przesyłania danych przez USB służy przewód: do WT5400 przewód USB-C, do WT6400 przewód CBL-NGWT-USBCHG-01."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-wt-crd-wt5x6-5s5bc-01",
    "slug": "zebra-wt-crd-wt5x6-5s5bc-01",
    "name": "Stacja ładująca Zebra WT5400 / WT6400 5-gniazdowa z ładowarką 5 baterii",
    "seoH1": "Stacja ładująca Zebra WT5400 / WT6400 5-gniazdowa z ładowarką 5 baterii",
    "seoTitle": "Stacja ładująca Zebra WT5400 / WT6400 5-gniazdowa — CRD-WT5X6-5S5BC-01",
    "seoDescription": "Stacja ShareCradle Zebra CRD-WT5X6-5S5BC-01 ładuje pięć terminali WT5400 lub WT6400 i pięć zapasowych baterii. Stacja ładująca Zebra WT6400 5-gniazdowa, zasilacz 108 W.",
    "shortDescription": "Zebra CRD-WT5X6-5S5BC-01 — stacja ShareCradle na pięć terminali WT5400 / WT6400 i pięć zapasowych baterii; tylko ładowanie, zasilacz 108 W.",
    "description": "Stacja CRD-WT5X6-5S5BC-01 ładuje jednocześnie pięć terminali Zebra [WT5400](/produkt/zebra-wt5400) lub [WT6400](/produkt/zebra-wt6400) z bateriami oraz pięć zapasowych baterii w osobnych gniazdach. Jedna stacja obsługuje zespół pięciu osób razem z bateriami na wymianę. Stacja tylko ładuje i nie przesyła danych.\n\nObudowa ma szerokość 489 mm, głębokość 134,5 mm, wysokość 86,3 mm i masę 2228 g. Stacja pobiera do 64 W. Stawia się ją poziomo na blacie albo mocuje w uchwycie ShareCradle na ścianie bądź w szafie rack. Diody przy gniazdach baterii pokazują stan ładowania.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy Zebra 108 W (PWR-BGA12V108W0WW)](/produkt/zebra-zasilacz-108w)\n- [Przewód DC Zebra z uchwytem zwalniającym (CBL-DC-382A1-01)](/produkt/zebra-mc33-dc-cable-382)\n- [Przewód sieciowy Zebra — Europa, C13 (50-16000-220R)](/produkt/zebra-tc201-50-16000-220r)\n\nDokup tylko te elementy, których jeszcze nie masz.\n\n## Elementy opcjonalne\n\n- [Uchwyt montażowy ShareCradle Zebra (BRKT-SCRD-SMRK-01)](/produkt/zebra-tc201-brkt-scrd-smrk-01)",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "stacje-ladowarki-terminali",
      "akcesoria-do-terminali"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CRD-WT5X6-5S5BC-01.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca Zebra WT5400 / WT6400 5-gniazdowa ShareCradle — pięć gniazd terminali i pięć gniazd baterii (terminale sprzedawane osobno)"
    ],
    "tags": [
      "retail",
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 3571.61,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      { "name": "Part Number", "value": "CRD-WT5X6-5S5BC-01" },
      { "name": "Liczba terminali", "value": "5 terminali WT5400 lub WT6400 z bateriami" },
      { "name": "Liczba zapasowych baterii", "value": "5 (standardowe lub rozszerzone)" },
      { "name": "Komunikacja", "value": "Brak, tylko ładowanie" },
      { "name": "Zasilanie", "value": "12 V DC, pobór 64 W; zasilacz PWR-BGA12V108W0WW, przewód DC CBL-DC-382A1-01 i przewód sieciowy 50-16000-220R sprzedawane osobno" },
      { "name": "Wymiary", "value": "489 × 134,5 × 86,3 mm (szer. × gł. × wys.)" },
      { "name": "Masa", "value": "2228 g" },
      { "name": "Temperatura pracy", "value": "0 °C do 50 °C" },
      { "name": "Temperatura ładowania", "value": "0 °C do 40 °C" },
      { "name": "Temperatura przechowywania", "value": "−40 °C do 70 °C" },
      { "name": "Wilgotność", "value": "0–95% bez kondensacji" },
      { "name": "Odporność na upadki", "value": "76,2 cm na beton pokryty płytkami winylowymi, w temperaturze pokojowej" },
      { "name": "ESD", "value": "±20 kV w powietrzu, ±10 kV kontaktowo i pośrednio" },
      { "name": "Montaż", "value": "Poziomo na blacie; na ścianie lub w szafie rack z uchwytem BRKT-SCRD-SMRK-01 (opcja)" },
      { "name": "Kompatybilność", "value": "Zebra WT5400, Zebra WT6400" }
    ],
    "applications": [
      "Ładowanie terminali i baterii na wymianę dla zespołu pięciu osób"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-psu-108w",
      "zebra-mc33-dc-cable-382",
      "zebra-tc201-50-16000-220r",
      "zebra-tc201-brkt-scrd-smrk-01"
    ],
    "relatedProducts": [
      "zebra-wt5400",
      "zebra-wt6400"
    ],
    "downloads": wtDownloads,
    "faq": [
      {
        "question": "Czym stacja CRD-WT5X6-5S5BC-01 różni się od stacji Ethernet CRD-WT64-5S5BE-01?",
        "answer": "Obie ładują pięć terminali i pięć baterii. [Stacja Ethernet](/produkt/zebra-wt-crd-wt64-5s5be-01) dodatkowo łączy terminale z siecią przewodową, ale współpracuje tylko z WT6400. CRD-WT5X6-5S5BC-01 tylko ładuje i pasuje do WT5400 i WT6400."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-wt-crd-wt5x6-10sc-01",
    "slug": "zebra-wt-crd-wt5x6-10sc-01",
    "name": "Stacja ładująca Zebra WT5400 / WT6400 10-gniazdowa",
    "seoH1": "Stacja ładująca Zebra WT5400 / WT6400 10-gniazdowa",
    "seoTitle": "Stacja ładująca Zebra WT5400 / WT6400 10-gniazdowa — CRD-WT5X6-10SC-01",
    "seoDescription": "Stacja ShareCradle Zebra CRD-WT5X6-10SC-01 ładuje dziesięć terminali naramiennych WT5400 lub WT6400 naraz. Stacja ładująca Zebra WT5400 10-gniazdowa, zasilacz 108 W.",
    "shortDescription": "Zebra CRD-WT5X6-10SC-01 — stacja ShareCradle na dziesięć terminali WT5400 / WT6400, bez gniazd na zapasowe baterie i bez komunikacji; zasilacz 108 W.",
    "description": "Stacja CRD-WT5X6-10SC-01 ładuje jednocześnie dziesięć terminali [WT5400](/produkt/zebra-wt5400) lub [WT6400](/produkt/zebra-wt6400); baterie ładują się w terminalach. Stacja nie ma gniazd na zapasowe baterie i nie przesyła danych.\n\nWymiary stacji to 489 × 134,5 × 86,3 mm, masa 2,2 kg, a pobór mocy do 71 W. Można ją postawić na blacie albo zamontować w uchwycie ShareCradle. Zapasowe baterie ładuje osobna [ładowarka 4 baterii](/produkt/zebra-wt-sac-wt5x6-4sc-01) albo [ładowarka 20 baterii](/produkt/zebra-wt-sac-wt5x6-20sc-01).\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy Zebra 108 W (PWR-BGA12V108W0WW)](/produkt/zebra-zasilacz-108w)\n- [Przewód DC Zebra z uchwytem zwalniającym (CBL-DC-382A1-01)](/produkt/zebra-mc33-dc-cable-382)\n- [Przewód sieciowy Zebra — Europa, C13 (50-16000-220R)](/produkt/zebra-tc201-50-16000-220r)\n\nDokup tylko te elementy, których jeszcze nie masz.\n\n## Elementy opcjonalne\n\n- [Uchwyt montażowy ShareCradle Zebra (BRKT-SCRD-SMRK-01)](/produkt/zebra-tc201-brkt-scrd-smrk-01)",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "stacje-ladowarki-terminali",
      "akcesoria-do-terminali"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CRD-WT5X6-10SC-01.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca Zebra WT5400 / WT6400 10-gniazdowa ShareCradle — dziesięć gniazd terminali (terminale sprzedawane osobno)"
    ],
    "tags": [
      "retail",
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 3571.61,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      { "name": "Part Number", "value": "CRD-WT5X6-10SC-01" },
      { "name": "Liczba terminali", "value": "10 terminali WT5400 lub WT6400 z bateriami" },
      { "name": "Liczba zapasowych baterii", "value": "Brak gniazd na zapasowe baterie" },
      { "name": "Komunikacja", "value": "Brak, tylko ładowanie" },
      { "name": "Zasilanie", "value": "12 V DC, pobór 71 W; zasilacz PWR-BGA12V108W0WW, przewód DC CBL-DC-382A1-01 i przewód sieciowy 50-16000-220R sprzedawane osobno" },
      { "name": "Wymiary", "value": "489 × 134,5 × 86,3 mm (szer. × gł. × wys.)" },
      { "name": "Masa", "value": "2,2 kg" },
      { "name": "Temperatura pracy", "value": "0 °C do 50 °C" },
      { "name": "Temperatura ładowania", "value": "0 °C do 40 °C" },
      { "name": "Temperatura przechowywania", "value": "−40 °C do 70 °C" },
      { "name": "Wilgotność", "value": "5–95% bez kondensacji" },
      { "name": "Odporność na upadki", "value": "76,2 cm na beton pokryty płytkami winylowymi, w temperaturze pokojowej" },
      { "name": "ESD", "value": "±20 kV w powietrzu, ±10 kV kontaktowo i pośrednio" },
      { "name": "Montaż", "value": "Poziomo na blacie; na ścianie lub w szafie rack z uchwytem BRKT-SCRD-SMRK-01 (opcja)" },
      { "name": "Kompatybilność", "value": "Zebra WT5400, Zebra WT6400" }
    ],
    "applications": [
      "Ładowanie dziesięciu terminali po zakończeniu zmiany"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-psu-108w",
      "zebra-mc33-dc-cable-382",
      "zebra-tc201-50-16000-220r",
      "zebra-tc201-brkt-scrd-smrk-01",
      "zebra-wt-sac-wt5x6-20sc-01"
    ],
    "relatedProducts": [
      "zebra-wt5400",
      "zebra-wt6400"
    ],
    "downloads": wtDownloads,
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-wt-crd-wt64-5s5be-01",
    "slug": "zebra-wt-crd-wt64-5s5be-01",
    "name": "Stacja Ethernet Zebra WT6400 5-gniazdowa z ładowarką 5 baterii",
    "seoH1": "Stacja Ethernet Zebra WT6400 5-gniazdowa z ładowarką 5 baterii",
    "seoTitle": "Stacja Ethernet Zebra WT6400 5-gniazdowa — CRD-WT64-5S5BE-01",
    "seoDescription": "Stacja Zebra CRD-WT64-5S5BE-01 ładuje pięć terminali WT6400 i pięć baterii oraz łączy terminale z siecią Ethernet. Stacja dokująca Zebra WT6400 z Ethernetem, zasilacz 108 W.",
    "shortDescription": "Zebra CRD-WT64-5S5BE-01 — stacja na pięć terminali WT6400 i pięć zapasowych baterii z komunikacją Ethernet; nie pasuje do WT5400.",
    "description": "Stacja CRD-WT64-5S5BE-01 ładuje pięć terminali Zebra [WT6400](/produkt/zebra-wt6400) i pięć zapasowych baterii. Jednocześnie łączy włożone terminale z przewodową siecią Ethernet. Stacja współpracuje wyłącznie z WT6400. Terminal WT5400 nie pasuje do tej stacji.\n\nStacja ma dwa porty Ethernet z tyłu. Pierwszy łączy się z przełącznikiem sieciowym, a drugi z następną stacją. W ten sposób można połączyć w łańcuch do dziesięciu stacji, jeśli połączenie z siecią ma prędkość większą niż 10 Mb/s. Obudowa ma szerokość 489 mm i masę 2,2 kg, a pobór mocy wynosi do 65,5 W. Stacja pracuje w temperaturze 0–40 °C.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy Zebra 108 W (PWR-BGA12V108W0WW)](/produkt/zebra-zasilacz-108w)\n- [Przewód DC Zebra z uchwytem zwalniającym (CBL-DC-382A1-01)](/produkt/zebra-mc33-dc-cable-382)\n- [Przewód sieciowy Zebra — Europa, C13 (50-16000-220R)](/produkt/zebra-tc201-50-16000-220r)\n\nDokup tylko te elementy, których jeszcze nie masz.\n\n## Elementy opcjonalne\n\n- [Uchwyt montażowy ShareCradle Zebra (BRKT-SCRD-SMRK-01)](/produkt/zebra-tc201-brkt-scrd-smrk-01)",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "stacje-ladowarki-terminali",
      "akcesoria-do-terminali"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CRD-WT64-5S5BE-01.png"
    ],
    "imageDescriptions": [
      "Stacja Ethernet Zebra WT6400 5-gniazdowa — pięć gniazd terminali i pięć gniazd baterii (terminale sprzedawane osobno)"
    ],
    "tags": [
      "magazyn",
      "logistyka"
    ],
    "availability": "unavailable",
    "priceFrom": 5291.59,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      { "name": "Part Number", "value": "CRD-WT64-5S5BE-01" },
      { "name": "Liczba terminali", "value": "5 terminali WT6400 z bateriami" },
      { "name": "Liczba zapasowych baterii", "value": "5 (standardowe lub rozszerzone)" },
      { "name": "Komunikacja", "value": "Ethernet; port główny i port do łączenia w łańcuch do 10 stacji" },
      { "name": "Zasilanie", "value": "12 V DC, pobór 65,5 W; zasilacz PWR-BGA12V108W0WW, przewód DC CBL-DC-382A1-01 i przewód sieciowy 50-16000-220R sprzedawane osobno" },
      { "name": "Wymiary", "value": "489 × 134,5 × 86,3 mm (szer. × gł. × wys.)" },
      { "name": "Masa", "value": "2,2 kg" },
      { "name": "Temperatura pracy", "value": "0 °C do 40 °C" },
      { "name": "Temperatura ładowania", "value": "0 °C do 40 °C" },
      { "name": "Temperatura przechowywania", "value": "−40 °C do 70 °C" },
      { "name": "Wilgotność", "value": "5–95% bez kondensacji" },
      { "name": "Odporność na upadki", "value": "76,2 cm na beton pokryty płytkami winylowymi, w temperaturze pokojowej" },
      { "name": "ESD", "value": "±20 kV w powietrzu, ±10 kV kontaktowo i pośrednio" },
      { "name": "Montaż", "value": "Poziomo na blacie; na ścianie lub w szafie rack z uchwytem BRKT-SCRD-SMRK-01 (opcja)" },
      { "name": "Kompatybilność", "value": "Zebra WT6400 (nie pasuje do WT5400)" }
    ],
    "applications": [
      "Ładowanie terminali WT6400 z przewodowym dostępem do sieci Ethernet"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-psu-108w",
      "zebra-mc33-dc-cable-382",
      "zebra-tc201-50-16000-220r",
      "zebra-tc201-brkt-scrd-smrk-01"
    ],
    "relatedProducts": [
      "zebra-wt6400"
    ],
    "downloads": wtDownloads,
    "faq": [
      {
        "question": "Ile stacji CRD-WT64-5S5BE-01 można połączyć w łańcuch?",
        "answer": "Do dziesięciu. Przewód z przełącznika podłącza się do portu 1 pierwszej stacji, a port 2 łączy się z portem 1 następnej stacji. Można użyć przewodu prostego lub skrosowanego. Łączenia w łańcuch nie zaleca się, gdy połączenie z siecią ma prędkość 10 Mb/s."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-wt-sac-wt5x6-4sc-01",
    "slug": "zebra-wt-sac-wt5x6-4sc-01",
    "name": "Ładowarka 4 baterii Zebra WT5400 / WT6400",
    "seoH1": "Ładowarka 4 baterii Zebra WT5400 / WT6400",
    "seoTitle": "Ładowarka 4 baterii Zebra WT5400 / WT6400 — SAC-WT5X6-4SC-01",
    "seoDescription": "Ładowarka Zebra SAC-WT5X6-4SC-01 na cztery zapasowe baterie terminali WT5400 i WT6400. Ładowarka 4-gniazdowa do baterii Zebra WT6400, zasilacz 50 W sprzedawany osobno.",
    "shortDescription": "Zebra SAC-WT5X6-4SC-01 — ładowarka na cztery zapasowe baterie WT5400 / WT6400, standardowe lub rozszerzone; wymaga zasilacza 50 W PWR-BGA12V50W0WW.",
    "description": "Ładowarka SAC-WT5X6-4SC-01 ładuje cztery zapasowe baterie terminali Zebra [WT5400](/produkt/zebra-wt5400) i [WT6400](/produkt/zebra-wt6400), wyjęte z terminali. Przyjmuje baterie standardowe 3500 mAh i rozszerzone 5000 mAh. Każde gniazdo ma własną diodę: pomarańczowa oznacza ładowanie, zielona naładowaną baterię, a szybko migająca czerwona błąd, np. zbyt niską lub zbyt wysoką temperaturę.\n\nŁadowarka ma wymiary 97,5 × 134,5 × 62,4 mm, waży 422 g i pobiera do 16,4 W. Ładowarka działa w temperaturze od 0 do 40 °C. Cztery takie ładowarki można zamontować w szafie rack na jednym uchwycie ShareCradle ustawionym pod kątem 25°.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy Zebra 50 W (PWR-BGA12V50W0WW)](/produkt/zebra-zasilacz-50w)\n- [Przewód DC Zebra CBL-DC-388A1-01 (CBL-DC-388A1-01)](/produkt/zebra-kabel-zasilajacy-388)\n- [Przewód sieciowy Zebra — Europa, C13 (50-16000-220R)](/produkt/zebra-tc201-50-16000-220r)\n\nDokup tylko te elementy, których jeszcze nie masz.\n\n## Elementy opcjonalne\n\n- [Bateria standardowa 3500 mAh Zebra WT5400 / WT6400 (BTRY-WT5X6-35MA-01)](/produkt/zebra-wt-btry-wt5x6-35ma-01)\n- [Bateria rozszerzona 5000 mAh Zebra WT5400 / WT6400 (BTRY-WT5X6-50MA-01)](/produkt/zebra-wt-btry-wt5x6-50ma-01)\n- [Uchwyt montażowy ShareCradle Zebra (BRKT-SCRD-SMRK-01)](/produkt/zebra-tc201-brkt-scrd-smrk-01)",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "stacje-ladowarki-terminali",
      "akcesoria-do-terminali"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/SAC-WT5X6-4SC-01.png"
    ],
    "imageDescriptions": [
      "Ładowarka 4 baterii Zebra WT5400 / WT6400 — cztery puste gniazda baterii (baterie sprzedawane osobno)"
    ],
    "tags": [
      "retail",
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 1290.71,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      { "name": "Part Number", "value": "SAC-WT5X6-4SC-01" },
      { "name": "Liczba gniazd", "value": "4 baterie WT5400 / WT6400 (standardowe lub rozszerzone)" },
      { "name": "Zasilanie", "value": "12 V DC, pobór 16,4 W; zasilacz PWR-BGA12V50W0WW, przewód DC CBL-DC-388A1-01 i przewód sieciowy 50-16000-220R sprzedawane osobno" },
      { "name": "Wymiary", "value": "97,5 × 134,5 × 62,4 mm (szer. × gł. × wys.)" },
      { "name": "Masa", "value": "422 g" },
      { "name": "Temperatura pracy", "value": "0 °C do 40 °C" },
      { "name": "Temperatura ładowania", "value": "0 °C do 40 °C" },
      { "name": "Temperatura przechowywania", "value": "−40 °C do 70 °C" },
      { "name": "Wilgotność", "value": "5–95% bez kondensacji" },
      { "name": "Odporność na upadki", "value": "76,2 cm na beton pokryty płytkami winylowymi, w temperaturze pokojowej" },
      { "name": "ESD", "value": "±20 kV w powietrzu, ±10 kV kontaktowo i pośrednio" },
      { "name": "Montaż", "value": "Poziomo na blacie; do czterech ładowarek w szafie rack na uchwycie BRKT-SCRD-SMRK-01 (opcja)" },
      { "name": "Kompatybilność", "value": "Baterie BTRY-WT5X6-35MA-01 i BTRY-WT5X6-50MA-01; terminale Zebra WT5400 i WT6400" }
    ],
    "applications": [
      "Ładowanie zapasowych baterii poza terminalem"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-psu-50w",
      "zebra-cable-dc-388",
      "zebra-tc201-50-16000-220r",
      "zebra-wt-btry-wt5x6-35ma-01",
      "zebra-wt-btry-wt5x6-50ma-01",
      "zebra-tc201-brkt-scrd-smrk-01"
    ],
    "relatedProducts": [
      "zebra-wt5400",
      "zebra-wt6400"
    ],
    "downloads": wtDownloads,
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-wt-sac-wt5x6-20sc-01",
    "slug": "zebra-wt-sac-wt5x6-20sc-01",
    "name": "Ładowarka 20 baterii Zebra WT5400 / WT6400",
    "seoH1": "Ładowarka 20 baterii Zebra WT5400 / WT6400",
    "seoTitle": "Ładowarka 20 baterii Zebra WT5400 / WT6400 — SAC-WT5X6-20SC-01",
    "seoDescription": "Ładowarka Zebra SAC-WT5X6-20SC-01 ładuje 20 zapasowych baterii terminali naramiennych WT5400 i WT6400. Ładowarka baterii Zebra WT5400 20-gniazdowa, zasilacz 108 W.",
    "shortDescription": "Zebra SAC-WT5X6-20SC-01 — ładowarka na 20 zapasowych baterii WT5400 / WT6400; zasilacz 108 W, montaż na blacie, ścianie lub w szafie rack.",
    "description": "Ładowarka SAC-WT5X6-20SC-01 ładuje jednocześnie 20 zapasowych baterii terminali Zebra [WT5400](/produkt/zebra-wt5400) i [WT6400](/produkt/zebra-wt6400). Służy do obsługi rotacji baterii w dużym zespole: pracownik oddaje rozładowaną baterię i zabiera naładowaną, a terminal zostaje na ręce. Stan ładowania każdej baterii sygnalizuje dioda obok gniazda.\n\nWymiary ładowarki: 489 mm szerokości, 134,5 mm głębokości i 66,9 mm wysokości; masa 2,2 kg; pobór mocy do 97,8 W. Zakres temperatur pracy to 0–40 °C. Uchwyt ShareCradle pozwala zawiesić ją na ścianie albo umieścić w szafie rack.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy Zebra 108 W (PWR-BGA12V108W0WW)](/produkt/zebra-zasilacz-108w)\n- [Przewód DC Zebra z uchwytem zwalniającym (CBL-DC-382A1-01)](/produkt/zebra-mc33-dc-cable-382)\n- [Przewód sieciowy Zebra — Europa, C13 (50-16000-220R)](/produkt/zebra-tc201-50-16000-220r)\n\nDokup tylko te elementy, których jeszcze nie masz.\n\n## Elementy opcjonalne\n\n- [Uchwyt montażowy ShareCradle Zebra (BRKT-SCRD-SMRK-01)](/produkt/zebra-tc201-brkt-scrd-smrk-01)",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "stacje-ladowarki-terminali",
      "akcesoria-do-terminali"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/SAC-WT5X6-20SC-01.png"
    ],
    "imageDescriptions": [
      "Ładowarka 20 baterii Zebra WT5400 / WT6400 ShareCradle — cztery rzędy po pięć gniazd baterii (baterie sprzedawane osobno)"
    ],
    "tags": [
      "retail",
      "magazyn"
    ],
    "availability": "on-order",
    "priceFrom": 5640.71,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      { "name": "Part Number", "value": "SAC-WT5X6-20SC-01" },
      { "name": "Liczba gniazd", "value": "20 baterii WT5400 / WT6400 (standardowe lub rozszerzone)" },
      { "name": "Zasilanie", "value": "12 V DC, pobór 97,8 W; zasilacz PWR-BGA12V108W0WW, przewód DC CBL-DC-382A1-01 i przewód sieciowy 50-16000-220R sprzedawane osobno" },
      { "name": "Wymiary", "value": "489 × 134,5 × 66,9 mm (szer. × gł. × wys.)" },
      { "name": "Masa", "value": "2,2 kg" },
      { "name": "Temperatura pracy", "value": "0 °C do 40 °C" },
      { "name": "Temperatura ładowania", "value": "0 °C do 40 °C" },
      { "name": "Temperatura przechowywania", "value": "−40 °C do 70 °C" },
      { "name": "Wilgotność", "value": "5–95% bez kondensacji" },
      { "name": "Odporność na upadki", "value": "76,2 cm na beton pokryty płytkami winylowymi, w temperaturze pokojowej" },
      { "name": "ESD", "value": "±20 kV w powietrzu, ±10 kV kontaktowo i pośrednio" },
      { "name": "Montaż", "value": "Poziomo na blacie; na ścianie lub w szafie rack z uchwytem BRKT-SCRD-SMRK-01 (opcja)" },
      { "name": "Kompatybilność", "value": "Baterie BTRY-WT5X6-35MA-01 i BTRY-WT5X6-50MA-01; terminale Zebra WT5400 i WT6400" }
    ],
    "applications": [
      "Rotacja zapasowych baterii w zespole kilkunastu lub kilkudziesięciu osób"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-psu-108w",
      "zebra-mc33-dc-cable-382",
      "zebra-tc201-50-16000-220r",
      "zebra-tc201-brkt-scrd-smrk-01",
      "zebra-wt-btry-wt5x6-35ma-01",
      "zebra-wt-btry-wt5x6-50ma-01"
    ],
    "relatedProducts": [
      "zebra-wt5400",
      "zebra-wt6400"
    ],
    "downloads": wtDownloads,
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-wt-btry-wt5x6-35ma-01",
    "slug": "zebra-wt-btry-wt5x6-35ma-01",
    "name": "Bateria standardowa 3500 mAh Zebra WT5400 / WT6400",
    "seoH1": "Bateria standardowa 3500 mAh Zebra WT5400 / WT6400",
    "seoTitle": "Bateria Zebra WT5400 / WT6400 3500 mAh PowerPrecision+ — BTRY-WT5X6-35MA-01",
    "seoDescription": "Bateria standardowa Zebra BTRY-WT5X6-35MA-01, 3500 mAh PowerPrecision+, do terminali naramiennych WT5400 i WT6400, zakres pracy −20–50 °C. Bateria Zebra WT6400, akumulator WT5400.",
    "shortDescription": "Zebra BTRY-WT5X6-35MA-01 — wymienna bateria Li-Ion PowerPrecision+ 3500 mAh do WT5400 i WT6400, na pełną zmianę; praca od −20 do 50 °C.",
    "description": "Bateria BTRY-WT5X6-35MA-01 to standardowa bateria litowo-jonowa 3500 mAh do terminali Zebra [WT5400](/produkt/zebra-wt5400) i [WT6400](/produkt/zebra-wt6400). Wystarcza na pełną zmianę. Zakres pracy obu terminali z tą baterią to −20–50 °C. Technologia PowerPrecision+ przekazuje informacje o stanie naładowania i kondycji baterii, dzięki czemu baterię wymienia się dopiero wtedy, gdy jest to potrzebne.\n\nBaterię wyjmuje się po ściśnięciu zatrzasków po obu stronach, bez zdejmowania terminala z ręki. Styki samoczynnie oczyszczają się przy każdym włożeniu i wyjęciu baterii. W terminalu bateria ładuje się do pełna w około 4 godziny w temperaturze pokojowej. Poza terminalem ładuje ją gniazdo zapasowej baterii w stacji 1- lub 5-gniazdowej albo ładowarka 4 lub 20 baterii. Bateria ładuje się w temperaturze 0–40 °C.\n\n## Ładowanie zapasowej baterii\n\n- [Ładowarka 4 baterii Zebra WT5400 / WT6400 (SAC-WT5X6-4SC-01)](/produkt/zebra-wt-sac-wt5x6-4sc-01)\n- [Ładowarka 20 baterii Zebra WT5400 / WT6400 (SAC-WT5X6-20SC-01)](/produkt/zebra-wt-sac-wt5x6-20sc-01)\n- [Stacja ładująca Zebra WT5400 / WT6400 1-gniazdowa z gniazdem baterii (CRD-WT5X6-1S1BC-01)](/produkt/zebra-wt-crd-wt5x6-1s1bc-01)",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "baterie-do-terminali",
      "akcesoria-do-terminali"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/BTRY-WT5X6-35MA-01.png"
    ],
    "imageDescriptions": [
      "Bateria standardowa 3500 mAh PowerPrecision+ Zebra BTRY-WT5X6-35MA-01 do terminali WT5400 i WT6400"
    ],
    "tags": [
      "retail",
      "magazyn"
    ],
    "availability": "on-order",
    "priceFrom": 453.96,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      { "name": "Part Number", "value": "BTRY-WT5X6-35MA-01" },
      { "name": "Typ", "value": "Li-Ion PowerPrecision+, standardowa" },
      { "name": "Pojemność", "value": "3500 mAh (typowa)" },
      { "name": "Temperatura pracy", "value": "−20 °C do 50 °C (WT5400 i WT6400)" },
      { "name": "Temperatura ładowania", "value": "0 °C do 40 °C" },
      { "name": "Czas ładowania", "value": "Ok. 4 h w terminalu w temperaturze pokojowej" },
      { "name": "Ładowanie poza terminalem", "value": "Stacje CRD-WT5X6-1S1BC-01 i CRD-WT5X6-5S5BC-01, stacja Ethernet CRD-WT64-5S5BE-01, ładowarki SAC-WT5X6-4SC-01 i SAC-WT5X6-20SC-01" },
      { "name": "Kompatybilność", "value": "Zebra WT5400, Zebra WT6400" }
    ],
    "applications": [
      "Bateria zapasowa na wymianę w trakcie zmiany",
      "Bateria zamienna po zużyciu baterii z zestawu"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-wt-sac-wt5x6-4sc-01",
      "zebra-wt-sac-wt5x6-20sc-01",
      "zebra-wt-crd-wt5x6-1s1bc-01",
      "zebra-wt-btry-wt5x6-50ma-01"
    ],
    "relatedProducts": [
      "zebra-wt5400",
      "zebra-wt6400"
    ],
    "downloads": wtDownloads,
    "faq": [
      {
        "question": "Czy baterię standardową można zastąpić rozszerzoną?",
        "answer": "Tak. WT5400 i WT6400 przyjmują baterię standardową i [rozszerzoną 5000 mAh](/produkt/zebra-wt-btry-wt5x6-50ma-01). Rozszerzona wydłuża pracę i zwiększa masę terminala. W WT6400 tylko bateria rozszerzona pozwala pracować w mroźni do −30 °C."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-wt-btry-wt5x6-50ma-01",
    "slug": "zebra-wt-btry-wt5x6-50ma-01",
    "name": "Bateria rozszerzona 5000 mAh Zebra WT5400 / WT6400",
    "seoH1": "Bateria rozszerzona 5000 mAh Zebra WT5400 / WT6400",
    "seoTitle": "Bateria Zebra WT5400 / WT6400 5000 mAh do mroźni — BTRY-WT5X6-50MA-01",
    "seoDescription": "Bateria rozszerzona Zebra BTRY-WT5X6-50MA-01, 5000 mAh PowerPrecision+; WT6400 pracuje z nią od −30 °C w mroźni, WT5400 od −20 °C. Bateria rozszerzona Zebra WT6400 i WT5400.",
    "shortDescription": "Zebra BTRY-WT5X6-50MA-01 — wymienna bateria Li-Ion PowerPrecision+ 5000 mAh do WT5400 i WT6400; z WT6400 praca w mroźni od −30 °C.",
    "description": "Bateria BTRY-WT5X6-50MA-01 to rozszerzona bateria litowo-jonowa 5000 mAh do terminali Zebra [WT5400](/produkt/zebra-wt5400) i [WT6400](/produkt/zebra-wt6400). Pozwala pracować dłużej niż bateria standardowa. Z WT6400 bateria jest przystosowana do mroźni: terminal pracuje w temperaturze od −30 do 50 °C. Z WT5400 zakres pracy wynosi od −20 do 50 °C.\n\nPowerPrecision+ podaje stan naładowania i kondycję baterii. Zatrzaski po obu stronach pozwalają wymienić baterię na ręce pracownika. W WT6400 wymiana nie wymaga wyłączania terminala. Pełne naładowanie w terminalu trwa około 5,5 godziny w temperaturze pokojowej. Ładowanie jest możliwe w temperaturze 0–40 °C, dlatego zapasowe baterie do mroźni ładuje się poza nią.\n\n## Ładowanie zapasowej baterii\n\n- [Ładowarka 4 baterii Zebra WT5400 / WT6400 (SAC-WT5X6-4SC-01)](/produkt/zebra-wt-sac-wt5x6-4sc-01)\n- [Ładowarka 20 baterii Zebra WT5400 / WT6400 (SAC-WT5X6-20SC-01)](/produkt/zebra-wt-sac-wt5x6-20sc-01)\n- [Stacja ładująca Zebra WT5400 / WT6400 5-gniazdowa z ładowarką 5 baterii (CRD-WT5X6-5S5BC-01)](/produkt/zebra-wt-crd-wt5x6-5s5bc-01)",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "baterie-do-terminali",
      "akcesoria-do-terminali"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/BTRY-WT5X6-50MA-01.png"
    ],
    "imageDescriptions": [
      "Bateria rozszerzona 5000 mAh PowerPrecision+ Zebra BTRY-WT5X6-50MA-01 do terminali WT5400 i WT6400"
    ],
    "tags": [
      "magazyn",
      "logistyka"
    ],
    "availability": "available",
    "priceFrom": 565.98,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      { "name": "Part Number", "value": "BTRY-WT5X6-50MA-01" },
      { "name": "Typ", "value": "Li-Ion PowerPrecision+, rozszerzona; z WT6400 przystosowana do mroźni" },
      { "name": "Pojemność", "value": "5000 mAh (typowa)" },
      { "name": "Temperatura pracy", "value": "WT6400: −30 °C do 50 °C; WT5400: −20 °C do 50 °C" },
      { "name": "Temperatura ładowania", "value": "0 °C do 40 °C" },
      { "name": "Czas ładowania", "value": "Ok. 5,5 h w terminalu w temperaturze pokojowej" },
      { "name": "Ładowanie poza terminalem", "value": "Stacje CRD-WT5X6-1S1BC-01 i CRD-WT5X6-5S5BC-01, stacja Ethernet CRD-WT64-5S5BE-01, ładowarki SAC-WT5X6-4SC-01 i SAC-WT5X6-20SC-01" },
      { "name": "Kompatybilność", "value": "Zebra WT5400, Zebra WT6400" }
    ],
    "applications": [
      "Praca terminala WT6400 w mroźni do −30 °C",
      "Dłuższa praca terminala bez wymiany baterii"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-wt-sac-wt5x6-4sc-01",
      "zebra-wt-sac-wt5x6-20sc-01",
      "zebra-wt-crd-wt5x6-5s5bc-01",
      "zebra-wt-btry-wt5x6-35ma-01"
    ],
    "relatedProducts": [
      "zebra-wt6400",
      "zebra-wt5400"
    ],
    "downloads": wtDownloads,
    "faq": [
      {
        "question": "Czy WT5400 z baterią rozszerzoną pracuje w mroźni?",
        "answer": "Nie. Z baterią BTRY-WT5X6-50MA-01 WT5400 pracuje od −20 °C. Pracę w mroźni do −30 °C zapewnia ta bateria tylko w terminalu WT6400."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-wt-cbl-ngwt-usbchg-01",
    "slug": "zebra-wt-cbl-ngwt-usbchg-01",
    "name": "Przewód USB do ładowania Zebra WT6400",
    "seoH1": "Przewód USB do ładowania Zebra WT6400",
    "seoTitle": "Przewód USB do ładowania Zebra WT6400 / WT6300 — CBL-NGWT-USBCHG-01",
    "seoDescription": "Przewód Zebra CBL-NGWT-USBCHG-01 ładuje terminal naramienny WT6400 lub WT6300 i przesyła dane przez USB. Kabel USB Zebra WT6400 do złącza bocznego terminala.",
    "shortDescription": "Zebra CBL-NGWT-USBCHG-01 — przewód USB do złącza bocznego WT6400 i WT6300: ładowanie i transmisja danych; nie pasuje do WT5400.",
    "description": "Przewód CBL-NGWT-USBCHG-01 wpina się we wzmocnione złącze boczne terminala Zebra [WT6400](/produkt/zebra-wt6400) lub WT6300. Drugi koniec ma wtyk USB-A. Podłączony do komputera przewód ładuje terminal i pozwala przesyłać pliki przez USB. Podłączony do zasilacza USB ładuje terminal bez stacji.\n\nPodczas ładowania dioda terminala świeci na pomarańczowo, a po naładowaniu na zielono. Przewód ma długość 160,3 cm, a zakres temperatur pracy wynosi −20–50 °C. Nie pasuje do WT5400, który ma złącze USB-C.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane dla ładowania z gniazda sieciowego — sprzedawane osobno**\n\n- [Zasilacz USB-A Zebra 12 W EU (PWR-WUA5V12W0EU)](/produkt/zebra-tc22-tc27-pwr-wua5v12w0eu)\n\nDokup tylko te elementy, których jeszcze nie masz.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "kable-zasilacze-terminali",
      "akcesoria-do-terminali"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CBL-NGWT-USBCHG-01.png"
    ],
    "imageDescriptions": [
      "Przewód USB do ładowania Zebra CBL-NGWT-USBCHG-01 — wtyk USB-A i czerwony wtyk do złącza bocznego WT6400"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "on-order",
    "priceFrom": 472.22,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      { "name": "Part Number", "value": "CBL-NGWT-USBCHG-01" },
      { "name": "Funkcja", "value": "Ładowanie terminala i komunikacja USB z komputerem" },
      { "name": "Złącza", "value": "Wtyk do złącza bocznego terminala; USB-A" },
      { "name": "Długość", "value": "160,3 cm" },
      { "name": "Temperatura pracy", "value": "−20 °C do 50 °C" },
      { "name": "Temperatura przechowywania", "value": "−40 °C do 70 °C" },
      { "name": "Zasilanie z sieci", "value": "Zasilacz PWR-WUA5V12W0EU sprzedawany osobno" },
      { "name": "Kompatybilność", "value": "Zebra WT6400, Zebra WT6300 (nie pasuje do WT5400)" }
    ],
    "applications": [
      "Ładowanie WT6400 bez stacji",
      "Przesyłanie plików i instalacja aplikacji przez USB"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-tc22-tc27-pwr-wua5v12w0eu"
    ],
    "relatedProducts": [
      "zebra-wt6400"
    ],
    "downloads": wtDownloads,
    "faq": [
      {
        "question": "Czy CBL-NGWT-USBCHG-01 pasuje do WT5400?",
        "answer": "Nie. WT5400 ma złącze USB-C i ładuje się [przewodem USB-C / USB-C](/produkt/zebra-cable-usbc-et4x) albo [przewodem USB-A / USB-C](/produkt/zebra-tc201-cbl-tc5x-usbc2a-01)."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "zebra-wt-cbl-rs5x6-adptc-01",
    "slug": "zebra-wt-cbl-rs5x6-adptc-01",
    "name": "Adapter przewodowy USB-C Zebra RS5100 / RS6100",
    "seoH1": "Adapter przewodowy USB-C Zebra RS5100 / RS6100",
    "seoTitle": "Adapter przewodowy USB-C Zebra RS5100 / RS6100 do WT5400 — CBL-RS5X6-ADPTC-01",
    "seoDescription": "Adapter Zebra CBL-RS5X6-ADPTC-01 zasila skaner noszony RS6100 lub RS5100 ze złącza USB-C terminala WT5400, TC21/TC26 lub TC53/TC58; dane przez Bluetooth. Adapter USB-C Zebra RS6100.",
    "shortDescription": "Zebra CBL-RS5X6-ADPTC-01 — adapter USB-C do zasilania skanerów RS5100 i RS6100 z terminala WT5400, TC21/TC26 lub TC53/TC58; kody nadal płyną przez Bluetooth.",
    "description": "Adapter CBL-RS5X6-ADPTC-01 łączy skaner noszony Zebra [RS5100](/produkt/zebra-rs5100) lub [RS6100](/produkt/zebra-rs6100) ze złączem USB-C terminala. Terminal zasila skaner przez przewód spiralny, więc skaner nie potrzebuje naładowanej baterii. Przewód nie przenosi danych: skaner przesyła kody do terminala przez Bluetooth.\n\nAdapter pasuje do komputera noszonego [Zebra WT5400](/produkt/zebra-wt5400) oraz terminali Zebra TC21/TC26 i [TC53](/produkt/zebra-tc53)/TC58. Do terminali WT6000, WT6300 i WT6400 ze złączem bocznym służy [adapter CBL-RS5X6-ADPWT-01](/produkt/zebra-rs6100-cbl-rs5x6-adpwt-01). Terminal i skaner nie są dołączone do adaptera.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-skanerow",
      "kable-do-skanerow"
    ],
    "manufacturerId": "zebra",
    "images": [
      "/images/products/CBL-RS5X6-ADPTC-01.png"
    ],
    "imageDescriptions": [
      "Adapter przewodowy USB-C Zebra CBL-RS5X6-ADPTC-01 — złącze skanera, przewód spiralny i kątowy wtyk USB-C"
    ],
    "tags": [
      "retail",
      "magazyn"
    ],
    "availability": "unavailable",
    "priceFrom": 534.97,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      { "name": "Part Number", "value": "CBL-RS5X6-ADPTC-01" },
      { "name": "Funkcja", "value": "Zasilanie skanera z terminala przez USB-C; komunikacja przez Bluetooth" },
      { "name": "Skaner", "value": "Zebra RS5100, Zebra RS6100 (sprzedawane osobno)" },
      { "name": "Terminal", "value": "Zebra WT5400, TC21/TC26, TC53/TC58 ze złączem USB-C (sprzedawane osobno)" },
      { "name": "Złącza", "value": "Złącze skanera, przewód spiralny, kątowy wtyk USB-C" },
      { "name": "Kompatybilność", "value": "Zebra RS5100, Zebra RS6100; Zebra WT5400" }
    ],
    "applications": [
      "Praca skanera RS5100 lub RS6100 zasilanego z terminala WT5400",
      "Zasilanie skanera noszonego z terminala TC21/TC26 lub TC53/TC58"
    ],
    "compatibleAccessories": [],
    "relatedAccessories": [
      "zebra-rs6100-cbl-rs5x6-adpwt-01"
    ],
    "relatedProducts": [
      "zebra-rs6100",
      "zebra-rs5100",
      "zebra-wt5400"
    ],
    "downloads": [
      {
        "name": "Product Reference Guide Zebra RS6100 (EN)",
        "type": "manual",
        "url": "/downloads/zebra-rs6100-przewodnik-en.pdf",
        "size": "17,9 MB"
      },
      {
        "name": "Karta katalogowa Zebra WT5400 (PL)",
        "type": "datasheet",
        "url": "/downloads/zebra-wt5400-karta-katalogowa-pl.pdf",
        "size": "396 KB"
      }
    ],
    "faq": [
      {
        "question": "Czym różni się adapter CBL-RS5X6-ADPTC-01 od CBL-RS5X6-ADPWT-01?",
        "answer": "Wtykiem po stronie terminala. ADPTC-01 ma wtyk USB-C do WT5400, TC21/TC26 i TC53/TC58. [ADPWT-01](/produkt/zebra-rs6100-cbl-rs5x6-adpwt-01) wpina się w złącze boczne komputerów noszonych WT6000, WT6300 i WT6400. Oba adaptery tylko zasilają skaner, a dane płyną przez Bluetooth."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  }
]
