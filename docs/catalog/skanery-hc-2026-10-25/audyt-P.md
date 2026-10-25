# Audyt P — skanery Zebra HC, akcesoria HC, podkategoria „Skanery dla służby zdrowia” (25.10.2026)

Zakres: `src/data/zebra-hc-scanners.ts` (6 skanerów, 17 akcesoriów), zmiany S1 w istniejących treściach (`subcategory-content.ts`, `guides.ts`, `zebra-ds2208`, `zebra-ds2278`, `zebra-ds9908`, `CBA-U21-S07ZBR`, `BTRY-DS22EAB0E-00`, `BTRY-DS82EAB0E-00`, `next.config.mjs`), `healthcare-scanner-category.ts` (wszystkie komórki tabeli 18 modeli, definicja, poradnik, FAQ, HowTo), filtry `skanery-dla-sluzby-zdrowia`, `Navbar.tsx`, `llms.txt`, linki w `healthcare-printer-category.ts`. Baza: `integracja/skanery-hc` (a5fd0fd8), gałąź `audyt/skanery-hc-p`.

## Źródła (kopie w scratchpadzie sesji: `hc3/src/<producent>/`, `hc3/s1-pdf/`, `hc3/src/audit/`)

| Dokument | Data | Uwagi |
|---|---|---|
| DS2200 Series for Healthcare, SS-DS2200-HC (HTML + PDF Zebry, `public/downloads/zebra-ds2200-hc-karta-katalogowa-en.pdf`) | 07/09/2019 | DS2208-HC, DS2278-HC, CR2278 |
| DS2200 Series (retail), spec sheet zebra.com | 2026 | porównanie z modelem podstawowym |
| DS4600 Series for Healthcare, SS-DS4600-Healthcare (HTML) | 10/03/2019 | DS4608-HC |
| DS4600 Series for Retail (PDF) | 06/2024 | porównanie |
| DS82 Series for Healthcare (HTML) | 08/12/2026 | DS8208-HC, DS8288-HC, CR8288 |
| DS82 Series for Healthcare (PDF) | 01/29/2026 | starszy (IP54) |
| DS82 Series (retail), `…/general-purpose-scanners/handheld/ds82-series.html` | 2026 | porównanie |
| CS60-HC Series (HTML) i CS60 (retail, `…/companion-scanners/cs60.html`) | 09/14/2023, 09/13/2023 | CS60-HC |
| DS9900 Series for Labs (HTML) | 11/02/2022 | DS9908-HD |
| Cleaning and disinfecting guidelines for Zebra Healthcare Scanners | 07/13/2026 | listy środków |
| Przewodniki akcesoriów: AG-DS2200 (02/2021), AG-DS4608 (02/2021), AG-DS82-HC (02/16/2026), AG CS60/CS60-HC (09/2023) | | zgodność akcesoriów |
| Strona zebra.com DS82 Series (dane modeli: „replaces”) | 25.10.2026 | DS8208-HC → DS8108-HC, DS8288-HC → DS8178-HC |
| Honeywell Xenon Ultra 1960h (06/2026), 1962h (04/2026); Datalogic Gryphon 4600 (2025); Newland HR33/HR23 AI White (4 karty); Socket Mobile D745, D765, „Medical-Grade Plastic” | | komórki tabeli kategorii |
| Dystrybutorzy (konfiguracja PN): The Barcode Warehouse (opisy SKU Zebry), Levata, Jarltech, barcodesite.eu, eyo.com.au | 25.10.2026 | |
| `/api/stock` — 2 wywołania, użyte drugie (25.10.2026) | | wszystkie 33 PN: ceny i `availability` w pliku zgodne z API |

## Ustalenia i poprawki

| ID | Karta / plik | Pole | Było | Jest | Źródło | Kategoria |
|---|---|---|---|---|---|---|
| P01 | zebra-ds2208-hc | faq „Czym różni się od DS2208?” | biały kolor i tryb „Do Not Disturb” jako różnice | obudowa Healthcare White do dezynfekcji, konfiguracja fabryczna, osobna lista środków; matryca, interfejsy i Direct Decode Indicator jak w DS2208 | DS2200 retail: „Color: Nova White, Twilight Black”, „User Indicators: Direct Decode Indicator” | SPRZECZNE |
| P02 | zebra-ds2278-hc | faq „Czym różni się od DS2278?” | biała obudowa i „Do Not Disturb” jako różnice | obudowa HC, konfiguracja, stacja HC; Bluetooth 4.0, bateria 2400 mAh i światło na kodzie jak w DS2278 | jw., DS2200 retail (BT 4.0, 2400 mAh) | SPRZECZNE |
| P03 | zebra-ds8208-hc | faq „Czym różni się od DS8208?” | „dodaje … zielony celownik LED” | celownik i czujnik 2 MP jak w DS8208; różnice: tworzywa, uszczelniony spust, etykiety antymikrobowe, tryb nocny, lampka, UDI Scan+, Blood Bag Parse+ | DS82 retail: „Aiming Pattern: Circular 524 nm green LED” | SPRZECZNE |
| P04 | zebra-ds8288-hc | faq „Czym różni się od DS8288?” | „celownik ma zieloną diodę LED” jako różnica | zamiast tego: tryb nocny jednym dotknięciem | jw.; DS82-HC „one-touch Night Mode” | SPRZECZNE |
| P05 | zebra-ds4608-hc | faq „Alternatywy” | „Następca z czujnikiem 2 MP … DS8208-HC” | „Model z czujnikiem 2 MP …” | zebra.com: DS8208-HC zastępuje DS8108-HC, nie DS4608-HC | SPRZECZNE |
| P06 | zebra-hc-stnd-ws0082c-0b | imageDescriptions | „…, bez skanera” | „…ze skanerem DS8208-HC widocznym od tyłu (skaner sprzedawany osobno)” | obraz `STND-WS0082C-0B.png` | SPRZECZNE |
| P07 | zebra-ds8288-hc | zdjęcie `DS8288-HCBU210MPAW-2.png` | wycięcie tła wgryzło się w lewą krawędź rękojeści (ząbki) | ponownie wycięte z renderu Zebry (tło 255, próg 254), ten sam kadr 0,92 | `hc3/s1-raw/ds8288-hc-…-front-left-3x2-3600.jpg` | NIEPRECYZYJNE (zdjęcie) |
| P08 | zebra-hc-btry-cs60eabhe-0b | specyfikacja „Pojemność” | „745 mAh według karty katalogowej CS60-HC (przewodnik akcesoriów podaje 735 mAh)” | „745 mAh” | CS60-HC spec 09/14/2023 i strony produktu PL/US (745 mAh); AG CS60 09/13/2023 (735) — rozstrzyga nowszy | STYL (notatka o źródle) |
| P09 | zebra-ds2208-hc, ds2278-hc, ds4608-hc, ds8208-hc, cs60-hc | variantAttributeTooltips „W zestawie” | dodatkowy punkt o pustej kolumnie / „sam skaner …” | usunięty | memory `feedback-tooltipy-wariantow` | STYL |
| P10 | zebra-ds2208-hc | faq „Alternatywy” | „celownik LED do oddziału noworodków … ma DS4608-HC” (DS2208-HC też ma celownik LED) | „zielony celownik LED, który można stosować na oddziale noworodków” | SS-DS2200-HC: „Linear 624nm Amber LED”; DS4600-HC: „circular 528nm true green LED”, NICU | NIEPRECYZYJNE |
| P11 | zebra-ds2278-hc | faq „Czy wymaga stacji?” | „ładuje się przewodem Micro USB” | „(25-MCXUSB-01R, sprzedawany osobno)” | AG-DS2200 (Micro USB Cable 25-MCXUSB-01R); TBW: DS2278-HC0000BZZRW „Scanner only” | NIEPRECYZYJNE |
| P12 | zebra-ds8288-hc | specyfikacja „Stacje” | „4,7–5,5 V DC z hosta” dla obu stacji | standardowa 4,8–5,5 V, prezentacyjna 4,7–5,5 V | DS82-HC „Input Voltage Range” | NIEPRECYZYJNE |
| P13 | zebra-cs60-hc (faq), zebra-hc-btry-cs60eabhe-0b (opis) | wymiana baterii | „bez narzędzi” | „bez specjalnych narzędzi” | CS60-HC: „without special tools” | NIEPRECYZYJNE |
| P14 | zebra-ds2278-hc | imageDescriptions[2] | „widok pod kątem od lewej strony, … ze stykami ładowania” (styków nie widać) | „widok z przodu na okno odczytu, spust i jasne zakończenie uchwytu” | obraz `DS2278-HCBU2100PRR-3.png` | NIEPRECYZYJNE |
| P15 | zebra-ds2208-hc | applications | „Oznaczanie worków do kroplówek” | „Odczyt kodów z worków do kroplówek” | SS-DS2200-HC „Patient IV bag” | NIEPRECYZYJNE |
| P16 | zebra-hc-stnd-gs0082c-0b | description | „oznaczaniu próbek” | „śledzeniu próbek” | DS82-HC „specimen track and trace” | NIEPRECYZYJNE |
| P17 | zebra-hc-cr8288-sc100fbww | description | „magnes przytrzymuje skaner przy montażu pionowym” | „Gdy stacja jest zamocowana, wbudowany magnes przytrzymuje skaner” | DS82-HC „integrated magnet … when mounted” | NIEPRECYZYJNE |
| P18 | zebra-hc-stnd-ws0082c-0b, zebra-hc-stnd-ws0060c-0b | description | „bez przykręcania”, „bez mocowania” | usunięte | AG-DS82-HC, AG CS60 — brak takiej informacji | SPOZA |
| P19 | zebra-ds4608-hc | faq „Gwarancja” | „pakiety … obejmują m.in. przyspieszone naprawy” | „producent zaleca pakiety Zebra OneCare Select lub Essential” | DS4600-HC „Recommended Services” | SPOZA |
| P20 | zebra-ds9908 (`products.ts`) | specyfikacja „Kolor” | „Midnight Black” (przy wariancie HD for Labs) | „Midnight Black; DS9908-HD for Labs (DS9908-HD4000WZZWW): Alpine White” | DS9900 for Labs „Color: Alpine White”; TBW: DS9908-HD4000WZZWW „… Alpine White” | NIEPRECYZYJNE |
| P21 | healthcare-scanner-category | faq „Praca w nocy” | lampkę stanowiska ma „Honeywell Xenon Ultra (Scan Lamp)” | lampkę mają DS82-HC i CS60-HC, Honeywell ma tryb Scan Lamp | Honeywell 1960h/1962h: Scan Lamp tylko jako tryb, bez opisu oświetlania stanowiska | SPOZA |
| P22 | healthcare-scanner-category | definicja | „Honeywell … wibrację i lampkę Scan Lamp” | „tryby Patient Do-Not-Disturb i Scan Lamp oraz wibrację (w 1960h jako opcję)” | 1960h: „Vibration (optional)” | NIEPRECYZYJNE |
| P23 | healthcare-scanner-category (definicja, poradnik, FAQ), `llms.txt` | DS82-HC | „tryb nocny z wibracją” | „tryb nocny i wibracja” | DS82-HC: wibracja i „one-touch Night Mode” osobno; „night mode with vibrate” tylko DS4600-HC i CS60-HC | NIEPRECYZYJNE |
| P24 | healthcare-scanner-category | FAQ „Co wyróżnia” | „tryb nocny z wibracją albo ciche potwierdzenie (Zebra, Honeywell)” | „tryb nocny albo tryb Patient Do-Not-Disturb (Zebra, Honeywell), wibrację i zielony celownik LED” | wibrację mają też Newland AI White i bezprzewodowe Gryphon 4600 HC | NIEPRECYZYJNE |
| P25 | healthcare-scanner-category | FAQ „Praca w nocy” | światło na kodzie tylko „Zebra DS2208-HC i DS2278-HC” | Direct Decode Indicator (Zebra) i Green Spot (Datalogic); w DS22-HC tryb „Do Not Disturb” | User Indicators DS4600-HC, DS82-HC, CS60-HC; Gryphon 4600: „Green Spot on the Code” | NIEPRECYZYJNE |
| P26 | `category-filters.ts` | „Ciche potwierdzenie” → „Światło na kodzie” | tylko DS2208-HC, DS2278-HC (wartość „… (Do Not Disturb)”) | 6 Zebra HC + 4 Datalogic Gryphon 4600 HC; opis filtra uzupełniony | jw. | NIEPRECYZYJNE (slugi) |
| P27 | healthcare-scanner-category | definicja | „…które według producenta spełnia normy ISO 10993 i EN 60529” | „…spełniającego normy ISO 10993 i EN 60529” | AGENTS.md (bez notatek o źródłach); socketmobile.com | STYL |
| P28 | healthcare-scanner-category | tabela Newland HR33/HR23 Bluetooth White, poradnik „Zasięg” | „Bluetooth 5.0 (do 100 m)”, Newland w „klasie 1” | „(min. 100 m)”; Newland bez klasy, „co najmniej 100 m” | Newland: „Wireless Distance (max.) ≥100 m (in open space)” | NIEPRECYZYJNE |
| P29 | healthcare-scanner-category | tabela D745 (rola), poradnik „System i urządzenie” | „do aplikacji iOS i Android”, „przeznaczone głównie do aplikacji na iOS i Android” | „do iOS, Androida i Windows”; łączą się z iOS, Android i Windows, w aplikacjach z CaptureSDK działają bez konfiguracji | socketmobile.com D745/D765 („Compatible with … Apple iOS, Android, Windows”, CaptureSDK) | SPOZA |
| P30 | zebra-ds2208-hc, ds2278-hc, ds4608-hc, cs60-hc, ds8288-hc | shortDescription, description, faq | wspólne 6-gramy z kartami Honeywell 1960h/1962h, Socket D745, Datalogic GM4600, TSC DH220L HC / Alpha-30L HC, CVTR-U70060C-0B oraz między DS8208-HC i DS8288-HC | przeredagowane | test 6-gramów | STYL |

## Sprawdzone bez uwag

- Wszystkie liczby w `specifications` 6 kart (wymiary, wagi, zasilanie, temperatury, upadki, IP, matryce, celowniki, oświetlenie, pola widzenia, tolerancja ruchu, zasięgi, min. element, normy, baterie, czasy ładowania, łączność, gwarancje) — zgodne z kartami HC; akcesoria: wymiary, wagi, zasilanie, gwarancje stacji.
- Listy środków w FAQ: DS2200-HC (5), DS4600-HC (7), DS82/DS8100/CS60-HC (37, gwiazdki = nie na stacje) — zgodne z przewodnikiem 07/13/2026; ostrzeżenia (nie rozpylać, nie łączyć, stężeń nie przekraczać, wybielacz nie na stacje) — zgodne.
- Terminy: „disinfectant-ready” = przygotowana do dezynfekcji; „antimicrobial labels” tylko DS82-HC; EN/IEC 60601-1-2 tylko DS4608-HC i DS82-HC jako normy EMC, bez IEC 60601-1; brak ISO 22196/10993 przy Zebrze.
- Warianty: 16 PN, konfiguracje potwierdzone dokumentem Zebry lub 2 dystrybutorami (TBW, Levata, Jarltech, barcodesite, eyo — DS8288-HCBU210PSAW: Jarltech + eyo); ceny i `availability` = API (on-order tylko DS8288-HCMF00BVMWW, 5 w dostawie). Bloki „Wymagane” (CBA-U21-S07ZBR; CBL-CS6-S07-0B przy CR6080) — zgodne z TBW i AG CS60.
- `relatedAccessories` (zgodność z AG-DS2200, AG-DS4608, AG-DS82-HC, AG CS60), `relatedProducts` (ta sama klasa), downloads (pliki istnieją, rozmiary realne, instrukcje PL serwis-zebry.pl — 6 × 200), `sameAs`, zdjęcia (kolor HC, bez odwróconych napisów i znaków wodnych; obrazy z dystrybutora tylko 20/21-71043-0BR i CR6080).
- Zmiany S1: `subcategory-content.ts` (5 miejsc), `guides.ts` (2), `zebra-ds2208`, `zebra-ds2278`, `zebra-ds9908` (nazwa wariantu, dymek, FAQ), zgodność CBA-U21-S07ZBR / BTRY-DS22… / BTRY-DS82…, przekierowania DS8108-HC → DS8208-HC i DS8178-HC → DS8288-HC (zebra.com „replaces”).
- Kategoria: wstęp, pozostałe komórki tabeli (wszystkie 18 wierszy sprawdzone w kartach producentów), porównania, HowTo, filtry Producent / Łączność / Rodzaj, menu, link w kategorii drukarek HC.

## Rozbieżności źródeł

1. DS82-HC: IP52 (HTML 08/12/2026) vs IP54 (PDF 01/29/2026, Jarltech) — na kartach IP52 (najnowszy dokument). Ten sam PDF podaje MIL-STD 3 m (przewodowy) / 2,4 m (bezprzewodowy) na beton, HTML — 2,4 m na sklejkę na betonie; karty wg HTML.
2. CS60-HC bateria: 745 mAh (spec 09/14/2023, strony produktu) vs 735 mAh (AG CS60 09/13/2023); Levata „735–745”. Ujednolicone do 745 mAh.
3. DS2208-HCBU2100AZR: strona Zebry („In the box”) wymienia też podstawkę gooseneck; opis SKU (TBW: DS2208-HC0000BZZRW + CBA-U21-S07ZBR) i barcodesite („incl.: cable (USB, straight, 2 m)”) — bez podstawki. Karta: „zestaw z przewodem USB” (bez zmian).
4. DS2278-HC zasięg Bluetooth: karta HC 2019 „Class 2, 10 m”, karta DS2200 retail „min. 10 m, do 100 m z CR2278”. Karta HC wg karty HC.

## Sprawy dla właściciela

1. DS2278-HC0000BZZRW (sam skaner): do ładowania potrzebna stacja CR2278-PC1000BRW (0 szt.) albo przewód Micro USB 25-MCXUSB-01R — brak go w API i brak karty.
2. DS8288-HCMF00BVMWW / HCPF00BVMWW (sam skaner): ładowanie w stacji CR8288 (0 szt.) albo przez USB-C; przewód CBL-U67-S07ZAR (AG-DS82-HC) jest w API (1 szt.), nie ma karty — ewentualna karta i blok „Wymagane”.
3. Zdjęcia: logo zastępcze przy 22-71043-0BR, STND-WS0060C-0B, CUP-GS0060C-0B, CBL-CS6-S07-0B; DS4608-HC ma dwa prawie identyczne ujęcia; jasne obwódki z tła (DS2278-HC-2, CS60-HC 2–5, CR6080) są niewidoczne na białym tle karty.
4. Zebra HC zajmują 92% wysokości kadru (jak karty Zebra 95–100%), karty Honeywell/Datalogic/Newland HC 70–82% — w siatce kategorii Zebra wyglądają nieco większe (zakres audytora Q).
5. `brand-category-content.ts` (zakres Q): wpis „DS2208-HC … parametry jak DS2208, obudowa odporna na środki dezynfekcyjne” bez linku do karty.
6. DS9908: galeria pokazuje wersję czarną, a wariant HD for Labs jest Alpine White (zgłoszone przez S1).
7. Lokalnie ramka zakupu DS8288-HC przed wczytaniem stanów pokazuje najtańszy PN (HCMF00BVMWW, 0 szt.) — logika `SmartPriceContext`, poza zakresem treści.

## Testy

`porownaj-opisy.py` (description, shortDescription, seoDescription: 0 par; FAQ: wspólne tylko nazwy środków z listy Zebry) i test 6-gramów względem wszystkich kart (`products.ts`, karty HC wszystkich producentów): wspólne tylko nazwy środków i modeli. `npx tsc --noEmit` OK, `npx next build` OK. `next start -p 3291`: 6 kart, 17 akcesoriów, `/skanery-dla-sluzby-zdrowia`, `/drukarki-dla-sluzby-zdrowia`, kategorie skanerów, `/opaski-identyfikacyjne`, `/drukarki-opasek`, `/akcesoria-do-skanerow` — 200; przekierowania DS8108-HC/DS8178-HC działają. Tabela wariantów po „Pokaż niedostępne warianty” bez poziomego scrolla przy 1440/1280/1024 (DS4608-HC, DS8288-HC: scrollWidth = clientWidth); 390 px bez poziomego scrolla (karty, 3 akcesoria, kategoria); tabela porównawcza kategorii bez scrolla. Zrzuty: `hc3/shots-audyt-P/`.
