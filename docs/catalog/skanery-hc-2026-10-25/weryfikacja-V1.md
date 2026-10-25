# Weryfikacja V1 po wdrożeniu: skanery Zebra HC, akcesoria HC, zmienione karty DS2208/DS2278/DS9908, kategoria „Skanery dla służby zdrowia” (25.10.2026)

Sprawdzana jest strona produkcyjna https://www.takma.com.pl z wdrożenia commita 711a3dbf. Tekst pobrano po pełnym załadowaniu strony: rozwinięto niedostępne warianty, specyfikację i FAQ oraz odczytano dymki atrybutów z DOM. Kopie tekstów, JSON i zrzuty 1440 px leżą w scratchpadzie sesji w `hc3/weryfikacja/`, a zrzuty 390 px w `hc3/weryfikacja/*-390.png`. Poprawki są na gałęzi `weryfikacja/skanery-hc-v1`.

## Źródła

| Skrót | Dokument | Data |
|---|---|---|
| HC22 | Zebra DS2200 Series for Healthcare, SS-DS2200-HC (HTML i PDF `public/downloads/zebra-ds2200-hc-karta-katalogowa-en.pdf`) | 07/09/2019 |
| HC46 | Zebra DS4600 Series for Healthcare, SS-DS4600-Healthcare (HTML) | 10/03/2019 |
| HC82 | Zebra DS82 Series for Healthcare (HTML) | 08/12/2026 |
| HC60 | Zebra CS60-HC Series Companion Scanner (HTML) | 09/14/2023 |
| HC81 | Zebra DS8100 Series for Healthcare (HTML), dane DS8108-HC/DS8178-HC do porównań | — |
| CL | Cleaning and disinfecting guidelines for Zebra Healthcare Scanners (`public/downloads/zebra-skanery-hc-czyszczenie-i-dezynfekcja-en.pdf`) | 07/13/2026 |
| AG22 / AG46 / AG82 / AG60 / AG99 | Przewodniki akcesoriów Zebry: DS2200, DS4608/DS4608-HC (Feb 19 2021), DS82-HC (Feb 16 2026), CS60/CS60-HC, DS9908 | — |
| R22 | Zebra DS2200 Series (retail), HTML i PDF `ds2200-series-spec-sheet-en-us.pdf` | 08/12/2026 |
| R46 | Zebra DS4600 Series for Retail (PDF) | 06/2024 |
| R82 | Zebra DS82 Series (retail), HTML | 2026 |
| R99 | Zebra DS9900 Series (retail), SS-DS9900-RETAIL (HTML) | 11/02/2022 |
| L99 | Zebra DS9900 Series for Labs (HTML) | 11/02/2022 |
| H60 / H62 | Honeywell Xenon Ultra 1960h Rev E 04/26, 1962h Rev C 04/26 | 04/2026 |
| DL | Datalogic Gryphon 4600, karta katalogowa | 2025 |
| NL | Newland HR33 / HR23 AI White, cztery karty (przewodowe i Bluetooth) | 2026 |
| SM | Socket Mobile: strony D745, D765 i „Medical-Grade Plastic” | 25.10.2026 |
| D | Dystrybutorzy (konfiguracja PN): The Barcode Warehouse (TBW), Jarltech, Levata, eyo | 25.10.2026 |
| API | `https://www.takma.com.pl/api/stock`, dwa wywołania dla 51 PN; decyduje drugie | 25.10.2026 |

## Wyniki zbiorcze (wszystkie 30 stron)

| Kontrola | Wynik |
|---|---|
| Status HTTP 26 kart, kategorii i 3 kart akcesoriów istniejących | 200 |
| Linki (191: karty, kategorie, PDF, obrazy `/_next/image`, instrukcje serwis-zebry.pl) | 191 × 200; instrukcje PL DS2208/DS2278/DS4608/DS8208/DS8288/CS6080/DS9908 prowadzą do właściwych modeli |
| Linki zewnętrzne do zebra.com na kartach DS2208 i DS9908 („Karta katalogowa”) | **404**, poprawione (pliki lokalne, niżej) |
| Ceny i dostępność w tabelach wariantów, ramce zakupu i kaflach akcesoriów a API | zgodne (51 PN) |
| JSON-LD Product (nazwa, marka Zebra, sku/mpn = PN, `offers` dla każdego PN) | zgodne z treścią i API; dla PN `on-order` (DS8288-HCMF00BVMWW, DS2208-SR6U2100SGW) schemat podaje `OutOfStock`, tak samo jak napis „Niedostępny” w całym sklepie |
| Tabela wariantów po „Pokaż niedostępne warianty”, 1440/1280/1024 px | bez poziomego przewijania; wyjątek: DS2278 przy 1024 px (982 > 960 px), poprawione |
| 390 px (6 kart HC, 2 akcesoria, kategoria) | bez poziomego przewijania |
| Galeria (6 kart HC) | każda miniatura zmienia zdjęcie główne; pole 584 × 584 px jak na kartach Zebra |
| Błędy konsoli | tylko blokada CSP dla `google.pl/ads/ga-audiences` (cały serwis, nie treść) |

## Karty skanerów HC

### zebra-ds2208-hc

| Element strony | Treść na stronie | Dokument producenta | Status |
|---|---|---|---|
| Nazwa, title, meta | Zebra DS2208-HC; przewodowy skaner 2D; obudowa przygotowana do dezynfekcji, tryb Do Not Disturb, USB i RS-232; PN obu wariantów | HC22 (opis, Supported Host Interfaces) | zgodne |
| Opis, akapit 1 | kolor Healthcare White, obudowa do regularnej dezynfekcji; kody z opasek, fiolek, worków do kroplówek, tacek na próbki | HC22 wstęp, „Easy to Clean and Sanitize” | zgodne |
| Opis, akapit 2 | 640 × 480, PRZM, linia celownika, Direct Decode Indicator zamiast dźwięku | HC22 „PRZM”, „aim line”, „Do Not Disturb” | zgodne |
| Opis, akapit 3 | podstawka włącza tryb prezentacyjny; przewody z autowykrywaniem; USB, RS-232, KBW, TGCS; konfiguracja fabryczna, 123Scan | HC22 | zgodne |
| Opis, akapit 4 | IP52, wielokrotne upadki 1,5 m, 60 mies. | HC22 Environmental, Warranty | zgodne |
| Specyfikacja (23 wiersze) | FOV 32,8° × 24,8°; ruch 13 / 76,2 cm/s; kody 1D/2D; min. element 4/4/6/6,7 mil; zasięgi UPC 1,3–36,8, DM 0,8–15,7, QR 0–27,9, C39 0,5–15,2, PDF 2,0–14,5 cm; 16,5 × 6,6 × 9,9 cm; 161,6 g; 4,5–5,5 V; 0–50 / −40–70 °C; 5–95%; 250 cykli; IP52; 0–107 600 lx; normy; 60 mies. | HC22 Specifications | zgodne |
| Zawartość PN | AZR: skaner i przewód USB; BZZRW: sam skaner | D: TBW (DS2208-HC0000BZZRW + CBA-U21-S07ZBR), Levata | zgodne |
| Warianty i dymek „W zestawie” | 2 PN, ceny 517,04 / 460,38 zł, dostępne | API | zgodne |
| Zastosowania (8) | rejestracja, identyfikacja pacjenta, leki, worki do kroplówek, próbki, krew, EDM | HC22 „Ideal for These Applications” | zgodne |
| FAQ: różnice z DS2208 | obudowa HC White, konfiguracja, osobna lista; matryca, interfejsy i DDI jak w DS2208 | HC22, R22 | zgodne |
| FAQ: środki czyszczące | 5 środków DS2200-HC; trzy z wybielaczem nie na stacje; bez IPA; nie rozpylać | CL (DS2200 series for healthcare, gwiazdki, „Never spray”) | zgodne |
| FAQ: Do Not Disturb, wariant, podstawki, gwarancja, alternatywy | DDI; bez wibracji; 20-/22-/21-71043-0BR; 60 mies. od wysyłki; OneCare; DS4608-HC (megapiksel, wibracja, zielony celownik dla noworodków) | HC22, AG22, HC46 | zgodne |
| Zdjęcia (3) i opisy | biały DS2208-HC z niebieską ramką, spustem i stopką | obrazy obejrzane | zgodne |
| Pliki | karta DS2200-HC 415 KB, CL 424 KB, AG22 522 KB, instrukcja PL | pliki 416/424/523 KB, 200 | zgodne |
| Akcesoria, podobne produkty | CBA-U21-S07ZBR, 20-/22-/21-71043-0BR; skanery przewodowe HC | AG22, D | zgodne (22-71043-0BR bez zdjęcia — sprawa dla właściciela) |

### zebra-ds2278-hc

| Element strony | Treść na stronie | Dokument producenta | Status |
|---|---|---|---|
| Nazwa, title, meta | Bluetooth 4.0, 2400 mAh na 14 h, obudowa do dezynfekcji, stacja HC White, PN | HC22 | zgodne |
| Opis (4 akapity) | przy łóżku, w aptece, na wózku; BT 4.0 BLE klasa 2 do 10 m; Scan-to-Connect; Wi-Fi Friendly; 14 h; stacja ładuje w trakcie pracy bez zasilacza; Micro USB; DDI; IP52; 36/12 mies. | HC22 („Full-Shift Battery”, „Fast, Flexible and Easy Charging”, Radio, Warranty) | zgodne |
| Specyfikacja (22 wiersze) | BT 4.0 klasa 2, 8 kroków mocy; 640 × 480; zasięgi; 110 000 / 50 000 odczytów; czasy ładowania na zmianę 4 h / 1 h / 1,5 h / 1 h; interfejsy stacji; 17,5 × 6,6 × 9,0 cm; stacja 7,2 × 9,4 × 12,2 cm i 151 g; 214 g; 0–50 / 0–40 °C; normy | HC22 | zgodne |
| Warianty, dymek | PRR: skaner, stacja, przewód USB; BZZRW: sam skaner; 881,54 / 473,62 zł | D: TBW (DS2278-HC0000BZZRW + CBA-U21-S07ZBR + CR2278-PC1000BRW); API | zgodne |
| FAQ (7) | lista DS2200-HC; wybielacz nie na stacje; Micro USB 25-MCXUSB-01R osobno; 4 h / 1 h; BTRY-DS22EAB0E-00; 36/12 mies.; alternatywy | CL, AG22, HC22 | zgodne |
| Zdjęcia (3), pliki, akcesoria | stacja CR2278, skaner pod kątem i z przodu; CR2278-PC1000BRW, BTRY-DS22EAB0E-00, CBA-U21-S07ZBR | obrazy, AG22 | zgodne |

### zebra-ds4608-hc

| Element strony | Treść na stronie | Dokument producenta | Status |
|---|---|---|---|
| Nazwa, title, meta | megapiksel, ogniskowanie HD, białe oświetlenie, celownik LED, wibracja, IP52 | HC46 | zgodne |
| Opis (4 akapity) | cały szpital; zakryte otwory śrub i głośnika; 1280 × 800, 800 MHz, PRZM; HD do kodów na butelkach, strzykawkach i workach; białe LED; NICU; tryb nocny; Preferred Symbol; MDF; IP52, podwójnie uszczelniona optyka, 1,8 m; 5 lat | HC46 | zgodne |
| Specyfikacja (24 wiersze) | celownik 528 nm, 2 ciepłe białe LED, FOV 35° × 22°, kody 1D/2D, min. element 2/4 mil, 5 zasięgów, interfejsy USB, RS-232, TGCS (bez KBW), 16,5 × 6,7 × 9,8 cm, 161,9 g, 2000 cykli, 0–107 000 lx, normy z EN/IEC 60601-1-2, 5 lat | HC46 | zgodne |
| Warianty | AZW: skaner + USB (903,47 zł, dostępny); BVZWW: sam skaner (839,80 zł, niedostępny) | D: TBW (DS4608-HC0000BZZWW + CBA-U21-S07ZBR; „Scanner only”); API | zgodne |
| FAQ (7) | różnice z DS4608 (białe LED, tryb nocny — R46: bursztynowy celownik 617 nm, czerwone LED, brak wibracji); lista DS4600-HC (7 pozycji); IEC 60601-1-2, bez deklaracji IEC 60601-1; 20-71043-0BR; OneCare | HC46, R46, CL, AG46 | zgodne |
| Zdjęcia, pliki, akcesoria | 2 ujęcia (prawie jednakowe), CL, AG46, instrukcja PL | AG46 | zgodne |

### zebra-ds8208-hc

| Element strony | Treść na stronie | Dokument producenta | Status |
|---|---|---|---|
| Nazwa, title, meta | 2 MP, uszczelniony spust, etykiety antymikrobowe, wibracja, tryb nocny, FIPS 140-3, 5 lat, następca DS8108-HC | HC82; zebra.com („replaces”) | zgodne |
| Opis (4 akapity) | tworzywa do dezynfekcji, gładkie powierzchnie; spust indukcyjny; 1600 × 1200, kody na opaskach najmniejszych pacjentów, przezroczystych workach; UDI Scan+, Blood Bag Parse+, IDC; przycisk wielofunkcyjny; NICU; lampka; FIPS | HC82 | zgodne |
| Specyfikacja (25 wierszy) | FOV 48° × 36°; 406 / 102 cm/s; kody, OCR, Digital Link, Digimarc; min. element 3/5 mil; zasięgi; 140 PPI; USB, RS-232; 16,5 × 6,9 × 10,5 cm; 185,5 g; 4,8–5,5 V; 54 upadki 1,8 m, MIL-STD-810H 2,4 m; IP52; normy; 5 lat | HC82 | zgodne |
| Warianty | ZVW: skaner + USB; BVZWW: sam skaner; 1080,90 / 1019,36 zł | D: Jarltech, Levata; API | zgodne |
| FAQ (7) | lista 37 środków z 5 gwiazdkami; następca DS8108-HC (HC81: 1280 × 960, bez spustu indukcyjnego i etykiet); STND-GS0082C-0B, STND-WS0082C-0B, CUP-GS0082C-0B | CL, HC81, AG82 | zgodne |
| Zdjęcia (4), pliki, akcesoria | w tym zdjęcie z podstawką STND-GS0082C-0B | AG82 | zgodne |

### zebra-ds8288-hc

| Element strony | Treść na stronie | Dokument producenta | Status |
|---|---|---|---|
| Nazwa, title, meta | 2 MP, ładowanie indukcyjne, PowerPrecision+ 3500 mAh lub PowerCap, BT 5.2, Virtual Tether | HC82 | zgodne |
| Opis (4 akapity) | zastępuje DS8178-HC; ładowanie bez odsłoniętych styków; 100 000 odczytów; PowerCap 6000 i 100 skanów po 35 s; wskaźnik zasilania; BT 5.2 klasa 1/2; Virtual Tether, tryb nocny, beaconing; dwie stacje USB, magnes; 3 lata | HC82, AG82 | zgodne |
| Specyfikacja (19 wierszy) | bateria 3500 mAh 100 000 / 65 000, 108 h, 13 h / 3,5 h; PowerCap 1000 F, 6000 / 4000, 6,7 h, 60 / 13–15 min; stacje: wymiary, wagi, 4,8 / 4,7–5,5 V, 10,8–13,2 V; 17,6 × 6,9 × 11,1 cm; 272,5 / 248,3 g | HC82 | zgodne |
| Warianty (6) i dymki „Zasilanie”, „Stacja” | MPAW bateria + prezentacyjna; MSAW bateria + standardowa; PPAW PowerCap + prezentacyjna; PSAW PowerCap + standardowa; MF00 / PF00 sam skaner; ceny i dostępność | D: Jarltech, Levata, eyo; AG82; API (MF00 w dostawie, PF00 i PSAW 0 szt.) | zgodne |
| FAQ (7) | lista 37 środków; bateria czy PowerCap; zastępuje DS8178-HC; stacje pionowo / poziomo, indukcja, FIPS; 3 lata, Battery Maintenance | CL, AG82, HC82 | zgodne |
| Zdjęcia (5), pliki, akcesoria | stacje CR8288 PC/SC, BTRY-DS82EAB0E-00, SUPR-DS82EAB0E-00, CBA-U21-S07ZBR | AG82 | zgodne |

### zebra-cs60-hc

| Element strony | Treść na stronie | Dokument producenta | Status |
|---|---|---|---|
| Nazwa, title, meta | kompaktowy, przewodowy lub bezprzewodowy, IP65, Qi, BT 5.0, NFC, celownik LED | HC60 | zgodne |
| Opis (4 akapity) | zamiana baterii na konwerter; kieszeń; specjalne tworzywa i IP65; monocoque, dotykowe przyciski, ładowanie bez styków; Qi tylko z baterią w skanerze; 1280 × 960; porodówka i noworodki; drugi przycisk; 745 mAh, 18 h; NFC; BT 5.0 klasa 1; AutoConfig; przycisk przywoływania; 3 lata | HC60 | zgodne |
| Specyfikacja (22 wiersze) | celownik 525 nm, 1 ciepła biała LED, FOV 45° × 34°, kody, zasięgi (UPC 4,6–49,5; DM 7,4–20,3; QR 3,0–35,6; C39 6,4–66,0 cm), bateria 13 000 odczytów, 8 h / 6 h, FIPS 140-3, 2,3 × 4,6 × 10,9 cm, stacja 9,0 × 5,3 × 6,1 cm i 96 g, 87 / 58 g, IP65, normy, 3 lata | HC60 | zgodne |
| Warianty | P1W: skaner, stacja CR6080, przewód USB-C; ZWW: sam skaner; 2492,01 / 1640,66 zł | D: TBW (zestaw CS6080-HC4F00BVZWW + CR6080-PC100FBWW + CBL-CS6-S07-0B); API | zgodne |
| FAQ (7) | konwerter CVTR-U70060C-0B; lista 37 środków; CBL-CS6-S07-0B osobno; zapasowe baterie nie na Qi; 18 h; Qi Pad 1 miesiąc gwarancji | HC60, AG60, CL | zgodne |
| Zdjęcia (5), pliki, akcesoria | 7 akcesoriów HC | AG60 | zgodne |

## Akcesoria HC (17) i akcesoria istniejące (3)

We wszystkich 20 kartach sprawdzono nazwę, opis, specyfikację, zgodność, zdjęcie, cenę, dostępność, JSON-LD i plik do pobrania.

| Karta (PN) | Najważniejsze treści | Dokument | Status |
|---|---|---|---|
| 20-71043-0BR | gooseneck bez obciążenia, HC White; dla DS2208, DS4308, DS4608, DS8108; sprzedaż z DS2208-HC w EMEA, LA, APAC; 158,16 zł, dostępna | AG22, AG46, API | zgodne |
| 22-71043-0BR | gooseneck z obciążeniem, HC White; ta sama zgodność; 196,86 zł | AG22, AG46, API | zgodne; **brak zdjęcia** (zastępczy obraz) |
| 21-71043-0BR | kubek HC White; czarny 21-71043-04R; 103,24 zł, niedostępny | AG22, AG46, API | zgodne |
| CR2278-PC1000BRW | stacja Bluetooth HC White; LA/EMEA/APAC; ładowanie w trakcie pracy z USB hosta; 4 h / 1 h; Connect+; bez wybielacza; 7,2 × 9,4 × 12,2 cm, 151 g, 0–40 °C, 36 mies.; 469,94 zł, niedostępna | AG22, HC22, CL, API | zgodne |
| STND-GS0082C-0B / STND-WS0082C-0B / CUP-GS0082C-0B | gooseneck, obciążony, kubek do DS8208-HC, HC White; 163,53 / 204,45 / 106,28 zł | AG82, API | zgodne |
| CR8288-PC100FBWW | pionowo, indukcja, Bluetooth, FIPS, HC White; 7,7 × 9,4 × 12,5 cm, 226,3 g, 4,7–5,5 V lub 10,8–13,2 V, 3 lata; 784,59 zł, niedostępna | AG82, HC82, API | zgodne |
| CR8288-SC100FBWW | pionowo lub poziomo, biurko / ściana / ramię / wózek, magnes, 7,3 × 7,6 × 21,1 cm, 255,3 g, 4,8–5,5 V; 784,59 zł | AG82, HC82, API | zgodne |
| SUPR-DS82EAB0E-00 | PowerCap 1000 F, 6000 / 4000, 6,7 h, ładowanie 60 / 13–15 min, trzyma ładunek kilka godzin; zielona etykieta; 354,34 zł | AG82 str. 4, HC82, API | zgodne |
| CR6080-PC100FBWW | 1 skaner, montaż na wózku, indukcja, Bluetooth, AutoConfig, przycisk przywoływania, przewód osobno, 3 lata; 953,57 zł, niedostępna | AG60, HC60, API | zgodne |
| CBL-CS6-S07-0B | USB-C / USB-A, 2,1 m, prosty, HC White; 86,19 zł | AG60, API | zgodne; **brak zdjęcia** |
| BTRY-CS60EABHE-0B | litowo-polimerowa 745 mAh, wymiana bez specjalnych narzędzi, nie na Qi; 344,73 zł | HC60 (745 mAh; AG60 podaje 735 mAh), API | zgodne |
| CVTR-U70060C-0B | konwerter USB-A 2,1 m, HC White; 206,86 zł, niedostępny | AG60, API | zgodne |
| STND-GS0060C-0B / STND-WS0060C-0B / CUP-GS0060C-0B | gooseneck, obciążony, kubek do przewodowego CS60-HC, HC White; 193,04 / 237,88 / 51,74 zł | AG60, API | zgodne; **WS i CUP bez zdjęcia** |
| CBA-U21-S07ZBR (istniejąca) | zgodność z HC: DS2208-HC, DS4608-HC, DS8208-HC | D: TBW (zestawy DS2208-HC, DS4608-HC, DS2278-HC), Jarltech (zestawy DS8288-HC), AG82 | **niepełne:** brak stacji DS2278-HC i DS8288-HC; tytuł podawał 88 zł przy cenie 87,20 zł; poprawione |
| BTRY-DS22EAB0E-00 (istniejąca) | zgodność DS2278, DS2278-HC | AG22 | zgodne; tytuł podawał 142 zł przy cenie 138,74 zł, poprawione |
| BTRY-DS82EAB0E-00 (istniejąca) | zgodność DS8288, DS8288-HC | AG82 | **niezgodne zdjęcie:** pokazywało PowerCap z zieloną etykietą, a według AG82 str. 4 bateria ma białą etykietę; tytuł podawał 262 zł przy cenie 256,18 zł; poprawione |

## Zmienione karty modeli handlowych

### zebra-ds2208

| Element strony | Treść na stronie (przed) | Dokument producenta | Status |
|---|---|---|---|
| Fragmenty o DS2208-HC (opis, FAQ „apteka”) | „wersja Zebra DS2208-HC z białą obudową przygotowaną do regularnej dezynfekcji” | HC22 | zgodne |
| Title, meta | „od 352 zł”, „Cena od 352 zł netto” (API: od 322,51 zł) | API; zasada: bez cen w treści | niezgodne, poprawione |
| Specyfikacja „Skanowane kody 2D” | MicroPDF417 | R22: Micro QR, bez MicroPDF417 | niezgodne, poprawione |
| Specyfikacja i opis „Szybkość skanowania 220 skanów/s” | 220 skanów/s | R22: tolerancja ruchu 13 cm/s ręcznie, 76,2 cm/s w trybie prezentacyjnym | brak w dokumencie, poprawione |
| Zasięg | 1,2–36,8 cm (EAN-13) | R22: UPC 13 mil 1,27–36,8 cm | niezgodne, poprawione |
| Interfejsy | USB HID, USB COM, RS-232 | R22: USB, RS232, Keyboard Wedge, TGCS (IBM) 46XX przez RS485 | niezgodne, poprawione |
| Waga, opis zdjęcia | 115 g | R22: 161,6 g | niezgodne, poprawione |
| Wariant DS2208-SR00007ZZWW | „sam skaner + podstawka”, Podstawka: Gooseneck | D: TBW „Scanner only, purchase accessories separately” | niezgodne, poprawione |
| Dymki „Podstawka”, „Kolor” (słownik ogólny) | „STD-AUTO-QD25-BK — podstawka Autosense do QuickScan QD2500” (Datalogic); „Biały — apteki, placówki medyczne” | R22: Nova White / Twilight Black; TBW: zestawy SGW z 20-71043-04R | niezgodne, poprawione (dymki karty) |
| Opis i FAQ: „spełnia wymagania dyrektywy FMD”, „pełna kompatybilność kabli i podstawek z LS2208”, „TCO niższy niż…”, „jedna z najdłuższych w klasie”, „1–3 lata u konkurencji”, „silnik SE4720”, DataMatrix 10 mil 1,5–20,3 cm, Voyager 1470g „~500–600 zł, gwarancja 3 lata”, „Cena od 352 zł” | — | R22 (DM 10 mil 0,8–15,7 cm), AG22 (uniwersalna podstawka STND-GS00UNC-04 dla LS2208 i DS2208) | brak w dokumencie lub niezgodne, poprawione |
| Ceny i dostępność wariantów (`priceFrom`) | 352–404 zł, SR6U2100SGW „available” | API: 322,51–370,10 zł, SR6U2100SGW w dostawie | niezgodne, poprawione |
| Pliki | karta katalogowa → zebra.com **404**; link do strony Zebry | zasada: PDF lokalnie | poprawione: lokalna karta DS2200 (08/12/2026) i AG22 |
| Tabela wariantów, JSON-LD, ceny na stronie | — | API | zgodne |

### zebra-ds2278

| Element strony | Treść na stronie (przed) | Dokument producenta | Status |
|---|---|---|---|
| Fragmenty o DS2278-HC (opis, FAQ „apteka”) | link do DS2278-HC, kolor Healthcare White, obudowa do dezynfekcji | HC22 | zgodne |
| Zasięg Bluetooth (opis, specyfikacja, FAQ) | „Class 1 z bazą: 100 m”, „w biurze 20–30 m”, „buforowanie danych” | R22: klasa 2, min. 10 m i do 100 m w parze z CR2278 | niezgodne lub brak w dokumencie, poprawione |
| Kolory wariantów | Antracyt / Jasnoszary | R22, D: Twilight Black / Nova White | niezgodne, poprawione (Czarny / Biały) |
| Wariant DS2278-SR7UMC00AZW | „skaner + kabel USB” | D: TBW — zestaw z przewodem Micro USB 25-MCXUSB-01R | nieprecyzyjne, poprawione |
| „(IntelliStand)” przy bazie, „OneCare do 5 lat”, „OneCare na 3 lub 5 lat”, „adaptacyjna regulacja ekspozycji”, „zgodność z dyrektywą FMD”, „opaską pacjenta”, zastosowanie „placówki medyczne” | — | R22, HC22 | brak w dokumencie, poprawione |
| Ceny w title, meta, FAQ i tabeli porównania | od 449 / 352 / 2243 / 2111 zł (API: DS2278 od 423,32 zł) | API; zasada | niezgodne, usunięte |
| Tabela wariantów przy 1024 px | przewijanie 22 px | memory: tabela bez scrolla | poprawione (982 → 960 px z danymi produkcyjnymi) |
| Opisy zdjęć 2–4 | „widok z boku…”, „z tyłu…”, „z góry, antena Bluetooth” | obrazy: biały / czarny skaner od przodu pod kątem | niezgodne, poprawione |
| Pliki | karta (link do zebra.com) i strona Zebry | zasada: PDF lokalnie | poprawione |
| Pozostałe parametry (640 × 480, FOV, kody, zasięgi, 2400 mAh, 1 h BC1.2, IP52, 214 g, 175 × 66 × 90 mm, gwarancje) | — | R22 | zgodne |

### zebra-ds9908

| Element strony | Treść na stronie (przed) | Dokument producenta | Status |
|---|---|---|---|
| Wariant DS9908-HD4000WZZWW: nazwa, dymek, kolor, FAQ | for Labs, Alpine White, małe kody i zakrzywione fiolki, białe oświetlenie; czyszczenie: 70% IPA i płyn do naczyń | L99, CL (DS9900 series for labs), D: TBW | zgodne |
| Opis „Wariant HD … (DataMatrix GS1 na opakowaniach leków)” | — | L99 | nieprecyzyjne, poprawione |
| Specyfikacja „Oświetlenie” | „Amber LED 617 nm (koliste) + 2× Red LED 645 nm” (617 nm to celownik; brak danych HD) | R99, L99 (HD: celownik zielony 528 nm, 2 białe LED) | niezgodne, poprawione |
| „Prędkość skanowania … (tryb automatyczny)” | — | R99: 610 cm/s w trybie hands-free, tryb zoptymalizowany | nieprecyzyjne, poprawione |
| „standard wdrażany przez Walmart, P&G”, „najdłuższa w kategorii” (×3), „od daty zakupu”, „naprawa w 3 dni”, „97 układów klawiatury” | — | R99: ponad 90 układów, gwarancja od daty wysyłki | brak w dokumencie lub niezgodne, poprawione |
| Ceny (title, meta, FAQ, tabela porównania) | od 1 169 zł i inne (API: od 1017,76 zł) | API | niezgodne, usunięte; `priceFrom` i dostępność wariantów zgodne z API |
| Tabela porównania: pole widzenia DS4608 i DS2208 | 42° H | R46: 31,6° H; R22: 32,8° H | niezgodne, poprawione |
| Pliki | „Karta katalogowa (PL)” → zebra.com **404**; strona Zebry | Zebra nie udostępnia PDF karty DS9900 (tylko generator HTML) | poprawione: lokalny AG99 i CL (lista środków dla DS9908-HD) |
| Pozostała specyfikacja (1280 × 800, FOV 48° × 30,6°, zasięgi, kody, IP52, 1,5 m, 2000 cykli, ESD, 321 mA, 203 × 94 × 132 mm, 330 g, 5 lat) | — | R99 | zgodne |

## Kategoria `/skanery-dla-sluzby-zdrowia`

| Element strony | Treść na stronie | Dokument producenta / karta | Status |
|---|---|---|---|
| Wstęp, definicja | obudowy do dezynfekcji: Zebra, Honeywell, Datalogic; antymikrobowe: Honeywell; ISO 22196: Datalogic; powłoka: Newland; spust i etykiety: DS82-HC; IP65: CS60-HC; ISO 10993 i EN 60529: Socket | HC22–HC60, H60, H62, DL, NL, SM | zgodne |
| Tabela 18 modeli: łączność, sensor, obudowa, sygnalizacja, szczelność | 6 × Zebra; Honeywell 1280 × 1080, BT 4.2 klasa 1, wibracja opcjonalna w 1960h; Datalogic 1,5 MP + VGA / 1,5 MP, USB-C/USB/RS-232 lub USB-C/USB, BT 5.2 do 100 m, STAR min. 50 m; Newland 1280 × 800 / 800 × 640, BT 5.0 min. 100 m; Socket 1280 × 960, Bluetooth Classic, IP54 | karty modeli i dokumenty | zgodne (każda komórka) |
| Filtry (Producent 6/2/4/4/2; Łączność 8/9/1; Rodzaj 15/3; Wibracja 12; Światło na kodzie 10) | slugi | karty, HC22–HC60, DL | zgodne |
| Poradnik „Czyszczenie” | „Zebra ma osobne listy dla każdej rodziny skanerów HC” | CL: osobne DS2200-HC i DS4600-HC, wspólna DS8100/DS82-HC i CS60-HC | nieprecyzyjne, poprawione |
| Pozostałe punkty poradnika, sekcja „Obudowa, normy i zasilanie”, zastosowania, porównania, HowTo, FAQ (8) | zasięgi klasy 1, HD, superkondensatory (PowerCap 6000 i 13–60 min; 1962h 450 skanów, < 60 s), wybielacz nie na stacje, EN 60601-1-2 w DS4608-HC/DS82-HC, MRZ w D765, Blood Bag Parse+ i UDI Scan+, gwarancje 5 / 3 lata, SMU / Aladdin / EasySet | HC46, HC82, HC60, CL, H60, H62, DL, NL, SM | zgodne |

## Przy okazji: treści o DS2208-HC wdrożone w tej samej zmianie

| Plik | Było | Jest | Źródło |
|---|---|---|---|
| `guides.ts` (poradnik o skanerach Zebra, „Do apteki”) | „DS2208 spełnia wymagania dyrektywy FMD”; „Zasięg DataMatrix 10 mil: 1,5–20,3 cm” | odczytuje kody DataMatrix do weryfikacji KOWAL/NMVS (dyrektywa FMD); 0,8–15,7 cm | R22 |
| `subcategory-content.ts` (wskazówka o środkach do dezynfekcji) | „osobne listy … dla każdej rodziny” | osobne dla DS2200-HC i DS4600-HC, wspólna dla DS82-HC, DS8100-HC i CS60-HC | CL |

## Lista poprawek (commit na `weryfikacja/skanery-hc-v1`)

1. `healthcare-scanner-category.ts` — poradnik „Czyszczenie”: dokładny podział list Zebry.
2. `subcategory-content.ts`, `guides.ts` — podział list Zebry; zasięg DataMatrix DS2208 0,8–15,7 cm; bez „spełnia wymagania dyrektywy FMD”.
3. `zebra-ds2208` — specyfikacja (2D, tolerancja ruchu, zasięg, interfejsy, waga 161,6 g); wariant SR00007ZZWW bez podstawki; dymki karty (Kabel USB, Podstawka, Kolor); opis i FAQ bez 220 skanów/s, SE4720, superlatyw, porównań TCO i cen; ceny i dostępność wariantów = API; lokalna karta DS2200 (147 KB) i AG22; zdjęcia opisane według ujęć; `updatedAt` 25.10.2026.
4. `zebra-ds2278` — Bluetooth klasa 2 (10 m, do 100 m z CR2278); kolory Czarny / Biały; wariant z Micro USB; dymki karty; opis i FAQ bez twierdzeń spoza R22 i bez cen; tabela porównania bez wiersza „Cena od”; ceny i dostępność = API; pliki lokalne; opisy zdjęć 2–4; tabela wariantów bez przewijania przy 1024 px.
5. `zebra-ds9908` — celownik i oświetlenie (SR i HD); prędkość; opis wariantu HD; bez Walmart / P&G, superlatyw i cen; 90+ układów klawiatury; gwarancja od daty wysyłki; pole widzenia DS4608 / DS2208 w tabeli; ceny i dostępność = API; pliki: AG99 (494 KB, lokalnie) i CL.
6. `CBA-U21-S07ZBR` — zgodność ze stacjami DS2278-HC i DS8288-HC; `priceFrom` 87,20 zł. `BTRY-DS22EAB0E-00` 138,74 zł, `BTRY-DS82EAB0E-00` 256,18 zł.
7. `public/images/products/BTRY-DS82EAB0E-00.png` — zdjęcie baterii z przewodnika AG82 (biała etykieta), 800 × 800 px, przezroczyste tło, ta sama skala co SUPR-DS82EAB0E-00 (wymiary w mapie bez zmian).
8. `public/downloads/zebra-ds2200-karta-katalogowa-en.pdf` (Zebra, 08/12/2026), `public/downloads/zebra-ds9908-akcesoria-en.pdf` (Zebra AG DS9908).

Testy: `npx tsc --noEmit` OK, `npx next build` OK. Na `next start -p 3281` karty DS2208, DS2278 i DS9908, trzy akcesoria, kategoria oraz nowe PDF i zdjęcie zwracają 200. Tabele wariantów (z danymi stanów z produkcji) nie przewijają się przy 1440, 1280 i 1024 px. Dymki przeczytano z DOM.

## Sprawy dla właściciela

1. Brak zdjęć: 22-71043-0BR, CBL-CS6-S07-0B, STND-WS0060C-0B i CUP-GS0060C-0B. Komponent zastępczy pokazuje przy tym emoji „📷”.
2. Galeria DS9908 pokazuje tylko czarny model, a wariant HD for Labs jest w kolorze Alpine White. Zebra nie publikuje PDF karty DS9900; karta ma teraz przewodnik akcesoriów i przewodnik czyszczenia.
3. Pozostałe karty skanerów Zebra mają szablonowe tabele „Cena od” z nieaktualnymi cenami, ceny w title i meta oraz zdania TCO bez źródła (DS4608, DS8288, DS9308, DS3608/DS3678 i inne). Te karty są poza zakresem V1 i wymagają osobnego przepisania. Tabela DS9908 ma też niepotwierdzone wartości DS8178: sensor 1280 × 800 (HC81: 1280 × 960), pole widzenia 42° (HC81: 48°) i IP42.
4. Ogólny dymek „Podstawka” w `variant-attribute-tooltips.ts` opisuje podstawkę Datalogic QD2500 i wyświetla się na kartach innych marek. Ogólny „Kolor” podpowiada białe modele handlowe „do placówek medycznych”. Na kartach DS2208 i DS2278 nadpisują je teraz dymki karty.
5. Meta opisy akcesoriów tworzy szablon, który dopisuje „Od X zł netto” (ceny są teraz zgodne z API). Napisy „W drodze” / „Niedostępny” i `OutOfStock` dla PN w dostawie wynikają z logiki sklepu; nie zmieniałem ich.
6. DS2278-HC0000BZZRW: przewodu Micro USB 25-MCXUSB-01R nie ma w API. DS8288-HC (sam skaner): przewód CBL-U67-S07ZAR jest w API (1 szt.), ale nie ma karty.
