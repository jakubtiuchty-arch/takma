# Weryfikacja V1 po wdrożeniu: Honeywell CT37 HC z akcesoriami, kategoria, CipherLab RS38H (25.10.2026)

Zakres: strony produkcyjne https://www.takma.com.pl (wdrożenie z commitu a78412fc), porównane z dokumentami producentów zdanie po zdaniu. Tekst stron pobrany Playwrightem po pełnym załadowaniu (rozwinięte warianty, specyfikacja, FAQ, akcesoria, dymki atrybutów), zrzuty 1440 px: `$SP/hc4/weryfikacja/<slug>.txt|.png|.json`.

## Źródła

| Skrót | Dokument |
|---|---|
| HW-DS | Honeywell CT37 HC Datasheet Rev C 09/25 (= `public/downloads/honeywell/honeywell-ct37-hc-karta-katalogowa-en.pdf`, MD5 zgodne z kopią źródłową) |
| HW-WEB | Strona CT37 HC, automation.honeywell.com (kopia 25.10.2026) |
| HW-CG | CT37 Configuration Guide Rev B 11/24 (= `public/instrukcje/honeywell-ct37-konfiguracja-en.pdf`); numery stron w tabelach |
| HW-AG | CT37 / CT37 HC Accessories Guide Rev B 10/24 |
| HW-HCP | Honeywell Healthcare Computers (strona przeglądowa) |
| HW-CT37 | CT37 Datasheet (`public/datasheets/ct37-spec-sheet-en.pdf`) |
| CL-BR | CipherLab RS38H brochure TR38HX0101501-09/2024 (= `public/datasheets/cipherlab-rs38h.pdf`, MD5 zgodne) |
| CL-WEB | cipherlab.com, RS38H Series (specyfikacja) |
| CL-CLEAN | cipherlab.com, Device Cleaning & Disinfecting – Mobile Computers |
| JT / ERS | Jarltech, ERS — tylko opisy PN |
| ZB-SS | Zebra HC2X/HC5X Spec Sheet 05/14/2025 |
| DL-DS | Datalogic DS-MEMOR12-17-HEALTHCARE-EN Rev A (2026); DL-PD — lista PN Memor 12-17 na datalogic.com |
| API | `/api/stock`, dwa wywołania 25.10.2026 ok. 16:30, wyniki zgodne |

## 1. honeywell-ct37-hc

| Element | Na stronie | Dokument | Wynik |
|---|---|---|---|
| Nazwa, H1, seoTitle | Honeywell CT37 HC; „…terminal mobilny dla służby zdrowia” | HW-DS tytuł | zgodne |
| shortDescription | 6", biała obudowa przygotowana do dezynfekcji, N6700, Wi-Fi 6E lub 5G, wymiana baterii bez wyłączania | HW-DS s. 1–3, HW-CG s. 6 i 8 | zgodne |
| seoDescription | obudowa do dezynfekcji, N6700 do opasek, Wi-Fi 6E lub 5G, hot swap, oba PN | HW-DS, HW-WEB („patient wristbands”) | zgodne |
| Opis ak. 1 | lekki terminal 6"; biały z niebieskimi akcentami; obudowa i złącza przygotowane do dezynfekcji; 46 środków | HW-DS s. 1 („Disinfectant-ready housing and connectors…”), HW-CG s. 8 (H = „White Colour with Blue highlights”), HW-WEB („46 approved solutions”) | zgodne |
| Opis ak. 2 | N6700 7. generacji, celownik LED, 1D/2D, opaski i fiolki; mniejsze zmęczenie przy małych etykietach | HW-WEB, HW-DS s. 1, HW-CG s. 6 | zgodne |
| Opis ak. 3 | 3846 mAh bez wyłączania; PTT, głośnik, 3 mikrofony; Secure Element | HW-DS s. 2–3 | zgodne |
| Opis ak. 4 | 2 PN, 8/128 GB, Android 14–18, w zestawie bateria i zaślepka, osobne akcesoria HC | HW-CG s. 6, HW-DS s. 3 | zgodne |
| Specyfikacja (34 wiersze) | wersja H, Android GMS 14–18 z zastrzeżeniem Qualcomm, QCS4490/QCM4490 2,4 GHz, 8 GB DDR5 / 128 GB UFS 3.1, microSD 2 TB, 6,0" 2280 × 1080 600 nitów Gorilla Glass, tryby rękawiczki/rysik/deszcz, N6700 0–1 m zielony liniowy celownik, 13/8 MP, przyciski, audio HAC, Wi-Fi 6E 2×2, zabezpieczenia WLAN, WWAN/SIM/GNSS dla X1N, BT 5.3 + 2. BLE, NFC, USB-C 3.1 OTG + I/O, bateria i warm swap < −10°C, QC 4.0 < 3 h, 12+ h, czujniki, SE, IP65/IP68, upadki 1,8/2,1 – 1,5/1,8 – 1,2/1,5 m, przewroty 1500 × 0,5 m / 750 × 1,0 m, ESD, temperatury, 167,4 × 76,0 × 12,6 mm, 241 g, zestaw, oprogramowanie, gwarancja 12 mies. | HW-DS s. 3, HW-WEB, HW-CG s. 6 | zgodne (każda liczba i jednostka) |
| Warianty | CT37-X0N-56S10HG Wi-Fi 6E; CT37-X1N-56S10HG 5G + Wi-Fi 6E | HW-CG s. 6 | zgodne |
| Dymek „Łączność” | trzy pasma; tylko Wi-Fi przyjmuje biały klips; 5G/LTE, eSIM + nano SIM, GNSS | HW-DS, HW-CG s. 6 i 18 | zgodne |
| Zastosowania | opaski; leki i terapie przy łóżku; fiolki i małe etykiety; PTT/VoIP | HW-DS s. 1, HW-WEB, HW-HCP („bedside care”, „medication administration”) | zgodne |
| FAQ 1 | DRH w każdej konfiguracji; N6700 vs S0703/S0803/bez skanera; kolory; zaślepka w zestawie, pasek osobno; CT37-SH-UVN/UVB nie pasują; osobne wersje HC | HW-CG s. 6, 8, 13, 40 | zgodne |
| FAQ 2 | 46 środków; PB-GRY nieprzygotowana do dezynfekcji; zalecana zaślepka | HW-WEB, HW-AG s. 12–13, HW-CG s. 17 i 35 | zgodne |
| FAQ 3–4 | klips tylko WLAN; stacje UVN/UVB, DB z HDMI/Ethernet/USB, QBC; zasilacz w zestawie; C5 / C13 | HW-CG s. 18, 25–27 | zgodne |
| FAQ 5 | IH45-BK-37S i CT37-WS-KIT bez wersji HC; SH niezgodny | HW-CG s. 40 (kolumna CT37 Healthcare „—”), s. 13 | zgodne (rozbieżność źródeł: HW-DS wymienia ogólnie „RFID reader handle”) |
| FAQ 6 | Android 14–18 z zastrzeżeniem Qualcomm; 12 mies.; Edge Services Gold/Platinum 3 lub 5 lat | HW-DS s. 3, HW-CG s. 9 | zgodne |
| FAQ 7 | HC50 Wi-Fi, HC55 5G, Memor 17 HC, RS38H | ZB-SS, DL-PD, CL-BR | zgodne |
| Zdjęcia (4) i alt | biały terminal z niebieskimi akcentami; alt zgodne z kadrem (zdjęcie 4: dwa terminale — górna krawędź z oknem N6700 i dolna z USB-C) | Scene7 Honeywell CT37 HC | zgodne; galeria przełącza 4/4 |
| Pliki | karta katalogowa 157 KB, przewodnik 15,3 MB — oba 200 | rozmiary rzeczywiste | zgodne |
| Cena / dostępność | 5644,53 / 6008,64 zł netto; EU 18 i 13 szt.; koszyk aktywny | API | zgodne |
| JSON-LD | Product, Honeywell, AggregateOffer 5644.53–6008.64, sku/mpn = PN, InStock | treść strony | zgodne |
| Akcesoria / podobne | 14 kart, pierwszy rząd 4 + „Pokaż pozostałe (10)”/„Zwiń”; HC50, HC55, Memor 17 HC, RS38H; linki 200 | — | zgodne |
| Tabela wariantów | bez poziomego scrolla przy 1440/1280/1024; 390 px bez scrolla strony | — | zgodne |

## 2. Akcesoria HC (honeywell-hc-terminals.ts) i przewód 77900508E

Każda karta: nazwa, shortDescription, seoTitle, seoDescription, opis, „Co jest w kartonie”, specyfikacja, zastosowania, blok „Wymagane”, alt zdjęcia, pliki (przewodnik 200), cena i dostępność, JSON-LD (nazwa, Honeywell, sku = PN, cena netto = API, dostępność = API).

| Karta | Fakty na stronie | Dokument | Wynik |
|---|---|---|---|
| CT37-5CB-UVN-HC0 | 4 terminale bez osłony + 4 baterie, tylko ładowanie; CT37 HC i CT30 XP; zestaw: 4 × CT37-UCP-NHC, CT37-QBC-UCP-HC, zasilacz; bez baterii; nie z PB-GRY; przewód C5 osobno (3007-4683-001) | HW-CG s. 25, HW-AG s. 9, HW-CG s. 38 | zgodne; API 2120,03 zł, 0 szt. = „Niedostępny”, bez koszyka |
| CT37-5CB-UVB-HC0 | 4 terminale w osłonie PB-GRY + 4 baterie; CT30 XP w osłonie; 4 × CT30P-UCP-BHC, CT37-QBC-UCP-HC, zasilacz; C5 osobno; zdjęcie wersji UVN opisane jako poglądowe | HW-CG s. 25, HW-AG s. 9 | zgodne; API 2120,03 zł, unavailable |
| CT37-DB-UVN-HC0 | 1 terminal bez osłony; tył HDMI, Ethernet, USB-A, zasilanie, bok 2 × USB-A; Primary/Mirror, Desktop z licencją DCP; zestaw: kubek CT37-UCP-NHC, zasilacz; CT30 XP; C13 osobno (77900508E) | HW-CG s. 26 i 38, HW-AG s. 9 („3 USB ports, compatible with CT30 XP and CT37”) | zgodne; API 1318,58 zł, unavailable |
| CT37-QBC-HC0 | 4 baterie: CT37-BTSC-002/-001, CT37-BTEC-001, CT30P-BTSC-001/-002; ładowarka + zasilacz; C13 osobno | HW-CG s. 27, HW-AG s. 9 | zgodne; API 1173,17 zł, unavailable |
| CT37-BTSC-002 | 3846 mAh, Healthcare, konfiguracje H i W, 1 szt., jedna w zestawie terminala; D → BTSC-001/BTEC-001 | HW-CG s. 6 i 29, HW-AG s. 10 | treść zgodna; **dostępność w danych „unavailable”, API: available (EU 20 szt.)** — poprawione |
| CT37-HS-HC-3PK | szary, 3 szt., nie w zestawie terminala; czarny CT37-HS-3PK niezgodny z HC; nie z klipsem | HW-AG s. 12 („Hand Strap, Grey”), HW-CG s. 6, 18, 35 | treść zgodna; **dostępność „unavailable”, API: available (EU 99 szt.)** — poprawione |
| CT37-CLIP-LAN-HC | biały, zatrzaskowy, 1 szt.; tylko WLAN (X0N…H/W); nie z 5G, PB-GRY ani paskiem | HW-AG s. 12, HW-CG s. 18 | zgodne; API 24,98 zł, EU 4 szt., koszyk |
| CT37-USBC-PLUG-5PK | 5 szt., zalecana do CT37-xxx-xxxxxHx; jedna zaślepka w zestawie terminala | HW-CG s. 6 i 35, HW-AG s. 13 | zgodne; API 24,10 zł, unavailable |
| CT37-PB-GRY | szara; zalecana do H i W; nieprzygotowana do dezynfekcji; stacje UVB (CT30P-xx-UVB, CT37-xx-UVB); nie do CT30 XP; nie z klipsem; upadki 2,1 m zamiast 1,8 m | HW-CG s. 17–18, HW-AG s. 12, HW-DS s. 3 | zgodne; API 33,47 zł, unavailable |
| CT37-SP-1PK | 1 szt., z rysikiem; CT37 i CT37 HC; odrzucanie kropel w trybie z ochroną ekranu | HW-CG s. 35, HW-AG s. 13, HW-DS s. 3 | zgodne; API 46,38 zł, EU 1040 szt. |
| CT37-UCP-NHC | kubek HC bez osłony, CT37/CT30 XP; 4 w 5CB-UVN-HC0, 1 w DB-UVN-HC0; stacja, zasilacz i przewody osobno | HW-CG s. 25–26 i 37, HW-AG s. 9 | zgodne; API 115,65 zł, unavailable |
| CT30P-UCP-BHC | kubek HC w osłonie PB-GRY, CT37 HC i CT30 XP; 4 w 5CB-UVB-HC0; bez stacji, zasilacza i przewodów | HW-CG s. 25 i 37, HW-AG s. 9 | zgodne; API 121,45 zł, unavailable |
| 3007-4683-001 | wtyk EU, C5; zasilacz stacji 5-gniazdowych; DB i QBC wymagają C13 | HW-CG s. 36 („Requires IEC C5”), s. 38 („C5 type power cable, Europe”) | zgodne; API 49,85 zł, EU 244 szt. |
| honeywell-ih45-cord-eu (77900508E) | EU, IEC320-C13, 2,5 m; zasilacz CT40-HB-UVN-0; DB-UVN-HC0 i QBC-HC0; stacje 5-gniazdowe wymagają C5 | HW-CG s. 38 (77900508E), s. 36 (50121666-001 do CT40 Homebase „Requires IEC C13”), s. 26–27 | zgodne; API 54,49 zł, EU 301 szt.; JSON-LD tej karty (ścieżka live) podaje cenę brutto 67,02 — widoczną na stronie |

Zdjęcia: stacje i ładowarka — rendery Honeywell wersji HC (biało-niebieskie), alt zgodny z kadrem; pozostałe karty mają zaślepkę zdjęcia (bez zmian). Na kubku stacji DB widać napis „CT30” — to oficjalny render Honeywell CT37 HC Display Base (kubek CT37-UCP-NHC jest wspólny dla CT37 i CT30 XP).

## 3. honeywell-ct37 — FAQ z linkiem do HC

„Każda konfiguracja CT37 ma obudowę przygotowaną do dezynfekcji (DRH) i szczelność IP65 oraz IP68, a ekran obsługuje pracę w rękawiczkach. … CT37 HC: biała z niebieskimi akcentami, ze skanerem N6700 i z osobnymi akcesoriami HC.” — HW-CG s. 8 (D/H/W = DRH), HW-CT37 (IP65/IP68, „Glove … modes”), HW-CG s. 6. **Zgodne**; link `/produkt/honeywell-ct37-hc` → 200, także w JSON-LD FAQPage.

## 4. /terminale-dla-sluzby-zdrowia

| Element | Na stronie | Dokument | Wynik |
|---|---|---|---|
| Wstęp (longDescription) | komputery z Androidem i skanerem; szpitale, przychodnie, laboratoria, opieka domowa; środki wskazane przez producenta | ZB-SS, HW-DS, DL-DS, CL-BR | zgodne |
| Definicja ak. 1 | 4 producentów: disinfectant-ready; Zebra 30+ środków, tworzywa HC, zaślepka USB-C; Honeywell 46; Datalogic lista dla terminala, osłony i ładowarek; CipherLab 24+ i UV-C | ZB-SS s. 1 i 4, HW-WEB, DL-DS („applies to device, rubber boot and chargers”), CL-BR | zgodne |
| Definicja ak. 2 | alarm Zebra i RS38H; Datalogic przycisk/gest; CT37 HC bez alarmu, z PTT; SE4720 białe oświetlenie + zielony celownik; Green Spot; N6700 | ZB-SS s. 1–3, CL-BR, DL-WEB, HW-DS | zgodne |
| Tabela — Zebra HC20/HC25/HC50/HC55 (5 × 4 komórek + podpisy) | Wi-Fi 6 (6E z licencją) / 5G + nano SIM i eSIM / Wi-Fi 6E; 6/64 i 8/128 GB; 16 MP tył, 5 MP przód HC5X; SE4720; 30+ środków, zaślepka; czerwony przycisk; 3800 mAh, dowolny przewód USB-C / true hot swap | ZB-SS s. 2–4, przypisy 2, 3, 5 | zgodne |
| Tabela — Honeywell CT37 HC | Wi-Fi 6E albo 5G + Wi-Fi 6E; 8/128; PTT; N6700; obudowa i złącza, 46 środków; „—”; 3846 mAh hot swap, QC 4.0 | HW-DS, HW-WEB, HW-CG s. 6 | zgodne |
| Tabela — Memor 12 HC / 17 HC | Wi-Fi 6E / 5G + Wi-Fi 6E; Halogen DE2121-DL, Green Spot; lista środków; przycisk/gest + klips 94ACC0411; 4000 mAh, SafeSwap tylko 17 HC 6/128; Qi | DL-DS (Battery, Wireless Charging, Chemical Resistance, Accessories), DL-PD | zgodne |
| Tabela — CipherLab RS38H | 5G, Wi-Fi 6E, nano SIM + eSIM; 8/128; 16 MP; SE4720 zielony celownik; obudowa i złącza, 24+ środków, UV-C, zaślepka; SOS; 4500 mAh hot swap | CL-BR, CL-WEB | zgodne |
| Notka pod tabelą | 6", NFC, aparat tylny, IP65 i IP68, roczna gwarancja; Workstation Connect HC20/HC25 z licencją | ZB-SS (przypis 7), HW-DS, DL-DS, CL-BR | zgodne |
| Poradnik (7 punktów) | Wi-Fi/5G; 450/600/630 nitów, cienkie rękawiczki; alarm i sekwencja przeciw fałszywym alarmom; hot swap HC5X 60 s, CT37 HC, RS38H, SafeSwap; Qi bez odsłoniętych styków; akcesoria; Connect Cradle, Workstation Connect, CT37-DB-UVN-HC0 | ZB-SS, HW-DS, DL-DS, DL-WEB, CL-BR, HW-CG s. 26 | zgodne |
| Obudowa, czyszczenie (ak. 1) | wykaz CipherLab dla RS35/RS36/RS38/RS38H „m.in. … alkohol medyczny 75%” | CL-CLEAN: wykaz „Applicable to RS35, RS36, RS38 and RS38H models only” (24 pozycje) nie zawiera alkoholu medycznego; ten jest w osobnej liście ogólnej; CL-BR: RS38H testowany „including isopropyl and medicinal alcohol” | **niezgodne** — poprawione |
| Obudowa, czyszczenie (ak. 3) | „upadki na beton według MIL-STD-810H: Zebra z 1,25 m … CipherLab z 1,5 m” | ZB-SS i CL-BR: „drops to tile over concrete”; DL-DS i HW-DS: „to concrete” | **nieprecyzyjne** — poprawione (płytki na betonie vs beton, wysokości bez zmian) |
| Zastosowania (6) | podawanie leków, próbki, komunikacja i PBX (Workcloud), zdjęcia ran + Pic 'n Fill OCR, 5G poza szpitalem, UDI | HW-HCP, ZB-SS, CL-BR | zgodne |
| Co sprawdzić, porównania (3), kroki (4) | środki, akcesoria HC, licencje; HC20 vs HC50; Wi-Fi vs 5G i sieci prywatne (Zebra, Honeywell, CipherLab); CT37 HC vs Memor 17 HC vs RS38H | ZB-SS, HW-DS, CL-WEB, DL-DS | zgodne |
| FAQ (8) | wyróżniki; środki; alarm; opaski; hot swap i warm swap; PTT/PBX; gwarancja roczna + OneCare SV / Essential / Select; skanery i drukarki HC | ZB-SS, HW-DS, DL-DS, CL-BR | zgodne |
| Filtry | Producent 4/1/2/1; „Tylko Wi-Fi”: HC20, HC50, CT37 HC, Memor 12 HC; „Wi-Fi + 5G”: HC25, HC55, CT37 HC, Memor 17 HC, RS38H; „W obudowie terminala”: HC20, HC25, HC50, HC55, RS38H — sprawdzone kliknięciem | dokumenty jw. | zgodne |
| Kafle | ceny i dostępność 8 modeli = API (HC20 3626,40; HC25 3683,88; HC50 5691,59; HC55 5943,95; CT37 HC 5644,53; Memor 12 HC 2779,49; Memor 17 HC 3471,94; RS38H 5570,96 niedostępny) | API | zgodne |
| Linki, SEO | 85 linków wewnętrznych z treści stron V1 → 200; title, description, canonical, FAQPage, HowTo | — | zgodne |

## 5. cipherlab-rs38h, cipherlab-ars38wccnhe01, cipherlab-kbrs381455502

| Element | Na stronie | Dokument | Wynik |
|---|---|---|---|
| RS38H: nazwa, short, SEO | terminal dla ochrony zdrowia, obudowa przygotowana do dezynfekcji, 24+ środków i UV-C, SE4720, 6", 5G, SOS, PN | CL-BR, CL-WEB | zgodne |
| RS38H: opis (194 słowa) | pielęgniarki, laboratorium, rejestracja; opaski i probówki; celownik SE4720 bezpieczny w zastosowaniach medycznych; 24+ środków, alkohol izopropylowy i medyczny, UV-C; zaślepka z akcesoriów; wymiana baterii bez zdejmowania akcesoriów; SOS; Pic 'n Fill OCR; Workstation Connect → monitor wózka; 4500 mAh, 14+ h, 24/7; 5G, Wi-Fi 6E, BT 5.2, NFC, nano SIM + eSIM; IP65/IP68; 1,5 m na płytki na betonie | CL-BR s. 1–4, CL-WEB („admissions/discharge papers, patient check-in records”) | zgodne |
| RS38H: specyfikacja (17 wierszy) | Android 13 GMS → 15; QCM4490 2,4 GHz; 8/128 GB, microSD 1 TB; SE4720; 6" 1080 × 2160 630 nitów; łączność; GNSS; 16 MP PDAF + LED / 8 MP; przyciski; 4500 mAh hot swap; 2 h z QC 4.0/PD 3.0 > 27 W; IP65/IP68; 1,5 m, 1000 × 0,5 m; 165,4 × 78,5 × 15 mm; 268 g; −20…+50°C; 12 mies. | CL-WEB (Android 15), CL-BR | zgodne z CL-WEB; **CL-BR i PDF na karcie podają Android 18** — sprawa dla właściciela |
| RS38H: wariant | AS3858SF4NSGH, bez atrybutów; 5570,96 zł; 0 szt. → „Niedostępny”, „Powiadom”, bez koszyka (także w pasku mobilnym 390 px) | API, JT | zgodne |
| RS38H: FAQ (5) | środki i UV-C; 14+ h; monitor wózka; przycisk SOS (agresja wobec personelu); 5G w HC25, HC55, Memor 17 HC, CT37 HC 5G; Wi-Fi: HC20, HC50, Memor 12 HC | CL-BR, ZB-SS, DL-PD | zgodne |
| RS38H: zdjęcia | przód, przód pod kątem z czerwonym SOS, tył, tył z klipsem, tył z paskiem; galeria 5/5 | CipherLab | zgodne |
| RS38H: plik, JSON-LD, akcesoria | broszura 3,2 MB → 200; Product CipherLab, sku AS3858SF4NSGH, OutOfStock, cena brutto 6852,28 (widoczna); 7 akcesoriów, 4 + „Pokaż pozostałe (3)” | — | zgodne |
| ARS38WCCNHE01 | Workstation Connect Cradle (Healthcare) do RS38H; 1 terminal; zasilacz EU w zestawie; monitor wózka, przyjęcie/wypis; ARS38CHCNHE01 do ładowania; ARS38WCCNNE01 do RS38 | ERS, JT („incl. EU adapter”), CL-WEB | zgodne (zasilacz EU tylko wg JT); 1789,45 zł, unavailable = API; zdjęcie zastępcze |
| KBRS381455502 | bateria 4500 mAh (Healthcare) do RS38H; 14+ h; hot swap bez zdejmowania paska i klipsa; 2 h z QC 4.0/PD 3.0 > 27 W; ARS384SBHCE01 | ERS, JT, CL-WEB, CL-BR | zgodne; 472,70 zł, unavailable = API; zdjęcie zastępcze |

## Poprawki w tym commicie

1. `healthcare-terminal-category.ts`, sekcja „Obudowa, czyszczenie i ładowanie”: alkohol medyczny usunięty z opisu wykazu CipherLab dla RS35/RS36/RS38/RS38H; dodane „RS38H przetestowano także z alkoholem medycznym” (CL-BR).
2. Ta sama sekcja: powierzchnia upadków wg producentów — Zebra i CipherLab na płytki na betonie, Datalogic i Honeywell na beton; wysokości bez zmian; zdanie podzielone na krótsze.
3. `honeywell-hc-terminals.ts`: `availability` CT37-BTSC-002 i CT37-HS-HC-3PK → `available` (API: EU 20 i 99 szt.). Przed poprawką HTML z serwera pokazywał przy PN „Niedostępny”, a JSON-LD tej samej strony „InStock”.

## Sprawy dla właściciela (bez zmian w treści)

- RS38H Android: CL-WEB „upgradable to Android 15”, CL-BR (PDF na karcie) i Jarltech „Android 18”; karta RS38 podaje 18. Na karcie RS38H zostaje 15.
- JSON-LD cen: karty z cenami live (CipherLab, 77900508E) podają cenę brutto, karty Honeywell HC — netto. Obie kwoty są na stronie; to logika cen, poza zakresem.
- HowTo JSON-LD na stronach podkategorii: szablon tworzy „wdrożenie terminale dla służby zdrowia w firmie” (brak odmiany) — dotyczy wszystkich podkategorii.
- Zdjęcia zastępcze: 9 kart akcesoriów Honeywell HC bez renderu oraz ARS38WCCNHE01 i KBRS381455502.
