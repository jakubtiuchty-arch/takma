# Audyt Y — SATO, Honeywell, Citizen i nowe wersje Zebra HC (25.10.2026)

Gałąź `audyt/hc2-y` z `integracja/hc-producenci` (a072b5be). Zakres: `sato-ct4-lx-hc`, `sato-ws2-2` (`src/data/sato-hc-products.ts`), zmiany w `sato-ct4-rfid-products.ts`, `honeywell-pc45d-hc`, `citizen-cl-h300sv` (`src/data/honeywell-citizen-hc-products.ts`), zmiany w `products.ts` (głowica 225-783-001, wałek 205-187-002, FAQ `honeywell-pc45d`, akcesoria P1112640-233 / -239C), zmiany J4 w `zebra-hc-zd4/zd6/zq6-products.ts` i stronie wariantu taśmy CT11007, `relatedProducts` kart Zebra HC.

Teksty agentów (J2–J4) i ich dokumentacji traktowano jako niezweryfikowane. Każde twierdzenie sprawdzono w dokumencie producenta; konfiguracje PN — w dokumencie producenta albo u dwóch zgodnych dystrybutorów.

## Źródła użyte w audycie

| Dokument | Plik |
|---|---|
| SATO CT4-LX-HC datasheet (04.2023) i broszura | `$SP/hc2/src/sato/sato-ct4-lx-hc-datasheet.txt`, `…-brochure.txt` |
| SATO CT4-LX-HC Operator Manual (online, 2020): „Cleaning the Exterior … Using Disinfectant Chemicals”, „Optional Devices”, „Bundled Accessories”, „Cleaning Intervals” | `$SP/hc2/src/sato/ct4hc-manual/*.txt` (pozostałych stron nie dało się pobrać — operator sieci blokuje domenę manual.sato-global.com) |
| SATO Service Parts CT4-LX-HC (08.2020) | `$SP/hc2/src/sato/czesci.txt` = `public/downloads/sato-ct4-lx-czesci-en.pdf` |
| SATO Europe, Desktop Printers (sekcje CT4-LX-HC i WS2-2) | `$SP/hc2/src/sato/satoeurope-desktop-printers.txt` |
| SATO WS2-2 broszura Rev B 11.2024, WS2 Operator Manual (2020), WS2 datasheet 08.2018 | `$SP/hc2/src/sato/sato-ws2-*.txt` |
| Dystrybutorzy SATO: BlueStar (CT4-LX-HC, WS2), The Barcode Warehouse (14 PN CT4-LX-HC, pobrane w audycie), Levata (WS2-2) | `$SP/hc2/src/sato/dist/`, `$SP/hc2/src/audit/sato-dist/tbw-*.html` |
| Honeywell PC45 Healthcare datasheet Rev A 01/24, Application Brief Rev A 03/25, Accessories Guide Rev B 04/26, Quick Start (EN 07/23, PL 09/23), Healthcare DRH Cleaning Guide Rev E 10/22, General Purpose DRH Cleaning Guide (strona, 28.08.2024), strona PC45D Healthcare (opisy SKU) | `$SP/hc2/src/honeywell/`, teksty w `$SP/hc2/src/audit/hon/` |
| Citizen CL-H300SV datasheet EN/PL V.1.0, User’s Manual, komunikat prasowy 12.01.2023, strona produktu, broszura Healthcare | `$SP/hc2/src/citizen/`, teksty w `$SP/hc2/src/audit/cit/` |
| Zebra ZD421-HC spec sheet (03/11/2024), Desktop Printer Accessory Guide (sekcja ZD421c / ZD421c-HC), strony ZD411-HC, ZQ610 Plus-HC, ZQ620 Plus-HC (PL, GB) | `$SP/hc/src/`, `$SP/hc2/src/zebra/`, `$SP/hc2/src/audit/zebra/zq620-plus-hc-gb.html` |
| Dystrybutorzy Zebra: ERS (strony gwarancji z opisem PN), Levata, Videoton, zebrasklep.pl (opisy Zebry do PN) | `$SP/hc2/src/audit/zebra/ers-*.html`, `lev-*.html`, `videoton-zd421hc.html`, `$SP/hc/h3-web/z4519…`, `z4521…` |
| API sklepu, 2 wywołania 25.10.2026 ok. 07:56 (użyte drugie) | `$SP/hc2/api-audyt-y/call2-*.json` |

## Ustalenia

Kategorie: SPRZECZNE (treść przeczy źródłu), NIEPRECYZYJNE, SPOZA (twierdzenie bez źródła), STYL (zasady treści, unikalność, tabela), POMINIĘTE (brak danych, które źródła potwierdzają).

| ID | Karta | Pole | Było | Jest | Źródło | Kategoria |
|---|---|---|---|---|---|---|
| Y01 | sato-ct4-lx-hc | faq (środki dezynfekcyjne) | „Do obudowy dopuszczone są: …”; brak wymogu usunięcia środka z powierzchni i wytarcia go z części metalowych | „Obudowę można czyścić czterema środkami: … zgodnie z zaleceniami producenta środka … tak aby na powierzchni nie pozostał płyn … środek, który na nie trafi, trzeba od razu wytrzeć” | instrukcja CT4-LX-HC, „Cleaning the Exterior of the Product Using Disinfectant Chemicals” (`ct4hc-manual/9CDF4093…txt`) | NIEPRECYZYJNE |
| Y02 | sato-ct4-lx-hc | faq (opaski) | „Z aplikacją AEP i czytnikiem Bluetooth drukarka może wydrukować opaskę zaraz po zeskanowaniu kodu pacjenta.” | „… może też służyć do rejestracji pacjentów noszących wydrukowane na niej opaski.” | broszura CT4-LX-HC s. 6, przykład „Bluetooth-powered wristband registration” | SPOZA |
| Y03 | sato-ct4-lx-hc | variants (kolumna „Druk”), dymek | „Termotransferowy”; tabela przy 1024 px: 975/960 | „Termotransfer”; 960/960 | pomiar `#warianty .overflow-x-auto` | STYL |
| Y04 | sato-ws2-2 | description, applications, faq | opaski „dla noworodków” | „dla niemowląt” | broszura WS2-2 s. 3: „from adult to infant ID wristbands” | NIEPRECYZYJNE |
| Y05 | sato-ws2-2 | description, applications | „etykiety próbek histopatologicznych” | „… histologicznych” | broszura WS2-2 s. 3 i strona SATO EU: „Histology sample labels” | NIEPRECYZYJNE |
| Y06 | sato-ws2-2 | applications | „Etykiety na probówki z krwią i do transfuzji” | „Etykiety do pobrań krwi i transfuzji” | „Blood collection/transfusion labels” (bez probówek) | SPOZA |
| Y07 | sato-ws2-2 | faq (opaski) | „Najlepsza jakość wydruku jest na opaskach SATO” | „Drukarka jest dostrojona do opasek SATO” | broszura: „optimised to work with SATO wristbands”; zasada bez superlatyw | STYL |
| Y08 | sato-ws2-2 | faq (IEC 60601-1) | „Nie. Ta norma nie jest podawana …” | „Norma IEC 60601-1 nie jest podawana ani dla WS2-2, ani dla jej zasilacza.” | brak normy w broszurze i instrukcji WS2 — brak deklaracji, nie potwierdzony brak | NIEPRECYZYJNE |
| Y09 | sato-ws2-2 | variants, dymki, seoDescription, faq | brak W2302-401CN-EU; dokumentacja J2: „drugi dystrybutor nie potwierdza” | dodany wariant „WS212-2 — 300 dpi, USB i Ethernet, obcinak” (atrybut „Obcinak”, dymek, PN w seoDescription i FAQ), 3437,07 zł netto, `unavailable` | BlueStar: „WS212-2 305 dpi with USB, LAN + Cutter (EU)”; Levata: „… Cutter, USB + Fast Ethernet”; API: found, 0 szt. | POMINIĘTE |
| Y10 | sato-ws2-2 | description | „a WS212-2 ma 300 dpi i drukuje do 127 mm/s” (6-gramy wspólne z `brother-td-4t`) | „a WS212-2 ma głowicę 300 dpi i prędkość do 127 mm/s” | `porownaj-opisy` (6-gramy) | STYL |
| Y11 | honeywell-pc45d-hc | specifications | nazwa wiersza „Opcje (według karty katalogowej)” | „Opcje” | AGENTS.md: bez notatek o źródłach | STYL |
| Y12 | honeywell-pc45d-hc | specifications „Wykrywanie materiału” | czujnik niskiego poziomu materiału jak standard | „opcjonalnie czujnik niskiego poziomu materiału” | datasheet HC Rev A 01/24: „optional low media … sensor”, Options: „Media low sensor” | NIEPRECYZYJNE |
| Y13 | honeywell-pc45d-hc | faq (czyszczenie) | „Do drukarek biurkowych Honeywell … dopuszczone są …”; tryb rozkazujący („odłącz”, „Nanieś”, „nie dopuść”, „ustal”) | lista przypisana obudowie PC45; forma bezosobowa; dodane: tylko zewnętrzne powierzchnie z tworzywa, bez kontaktu środka z metalowymi stykami i złączami | strona Honeywell „General Purpose DRH” (28.08.2024): lista „PC45 Desktop Printers” (wszystkie 6 środków na niej są) i procedura „Do not wipe or apply disinfectant chemicals to any electrical contacts … or metal connectors” | NIEPRECYZYJNE, STYL |
| Y14 | honeywell-pc45d-hc | downloads | „Czyszczenie obudów Honeywell dla ochrony zdrowia (EN)” (Rev E 10/22) | usunięty z karty | dokument nie wymienia PC45; jego lista „Desktop printers for healthcare” zawiera m.in. Ammonium Chloride < 10%, Clorox Bleach 10%, Ethylene Glycol, Spartan Super HDQL 10, a nowsza instrukcja Honeywell oznacza tę listę jako „Desktop Printers (Excludes PC45)” i podaje dla PC45 osobną listę | SPRZECZNE |
| Y15 | honeywell-pc45d-hc | downloads (rozmiary) | QS PL 2,2 MB; UG EN 7,2 MB | 2,1 MB; 6,9 MB | `stat`: 2 227 356 B i 7 241 696 B (jak pozostałe pliki — w MiB) | NIEPRECYZYJNE |
| Y16 | honeywell-pc45d-hc | seoDescription | „etykiety na próbki i leki, opaski dla pacjentów” (6-gramy wspólne z `zebra-zd411-hc`) | „etykiety próbek laboratoryjnych i leków, opaski identyfikacyjne pacjentów” | `porownaj-opisy` | STYL |
| Y17 | citizen-cl-h300sv | faq (czyszczenie) | „Nie rozpylaj … i nie dopuszczaj …” | „Środków chemicznych nie rozpyla się na drukarkę, a płyn nie może się na nią rozlać.” | bez formy „Ty”; treść: instrukcja, uwagi bezpieczeństwa (s. 7–8) | STYL |
| Y18 | citizen-cl-h300sv | imageDescriptions[4] | „z wydrukowanymi etykietami na próbki medyczne” | „z wydrukowanymi małymi etykietami medycznymi z kodami kreskowymi” | na zdjęciu napis „Ideal for small medical labels” (nie próbki) | NIEPRECYZYJNE |
| Y19 | citizen-cl-h300sv | description, faq | 6-gramy wspólne z `tsc-dh220thc` („bez taśmy barwiącej, w rozdzielczości 203”) i `citizen-cmp-20ii` („termicznie w 203 dpi z prędkością do”) | zdania przeredagowane | `porownaj-opisy` | STYL |
| Y20 | zebra-zq620-plus-hc | variants, specifications, description, dymki | ZQ62-HUWAE04-00: „Bluetooth 4.2” (przyjęte „ze schematu” ZQ610) | „Bluetooth 4.x” (wariant, atrybut, specyfikacja, opis, dymki) | opis Zebry do PN (zebrasklep.pl): „Dual 802.11AC / BT4.x”; ERS: „Bluetooth – Wi-Fi”; Levata: „WiFi, Bluetooth”; strony Zebra ZQ620 Plus-HC (PL, GB) nie wymieniają opcji Wi-Fi 5 — wersja 4.2 przy Wi-Fi 5 jest potwierdzona tylko dla ZQ610 Plus-HC | SPOZA |
| Y21 | zebra-zq610-plus-hc | faq (wybór wariantu) | „Obie wersje można podłączyć …” przy trzech wariantach | „Każdą z trzech wersji …” | tabela wariantów | NIEPRECYZYJNE |
| Y22 | zebra-zd421-hc | imageDescriptions (ZD421C-HC) | „biała obudowa, szary panel przycisków” | „biała obudowa z grafitowym przodem, szary panel przycisków” | zdjęcie `ZD4AH42-C0EE00EZ.png` (front i klapa grafitowe) | NIEPRECYZYJNE |
| Y23 | zebra-zd421-hc | description | „w wersjach termicznej i rolkowej” | „w wersjach termicznej i na rolki taśmy” | — | STYL |
| Y24 | zebra-zd421-hc | variants, dymek „Druk” | „Termotransferowy”; 1024 px: 977/960 | „Termotransfer”; 960/960 | pomiar tabeli | STYL |
| Y25 | zebra-zd611-hc | variants, dymki | kolumny „Technologia druku”, „Odklejak”, „Obcinak”, „Ekran dotykowy”; 1024 px: 1109/960 | „Druk” (Termiczny / Termotransfer), „Moduł” (Odklejak / Obcinak); ekran dotykowy opisany w dymku „Druk” (ma go każda ZD611t-HC); 960/960 | pomiar tabeli; spec sheet ZD611-HC | STYL |
| Y26 | zebra-zd621-hc | variants, dymek | „Technologia druku” (Termiczna / Termotransferowa); 1024 px: 961/960 | „Druk” (Termiczny / Termotransfer); 960/960 | pomiar tabeli | STYL |
| Y27 | zebra-zd611-hc | availability (karta i ZD6AH22-D0EE00EZ) | `unavailable` | `on-order` | API (2. wywołanie): „W dostawie (3 szt., ETA: 2026-12-16)”; zasada `feedback-dostepnosc` | SPRZECZNE |
| Y28 | sato-ct4-lx-wwct0505n / 0503n / 0506n (`sato-ct4-rfid-products.ts`) | description, shortDescription, seoDescription | zgodność z CT4-LX-HC tylko w specyfikacji; tryb rozkazujący („zleć serwisowi”, „Dobierz”, „podaj”, „Sprawdź”) | CT4-LX-HC w opisie i SEO (także końcówki PN HC z Wi-Fi i RTC), forma bezosobowa; to samo w odklejaku WWCT0502N (bez HC) | Service Parts CT4-LX-HC, „Accessories and Option”; instrukcja HC, „Optional Devices”; BlueStar (ZNCR = obcinak + RTC) | NIEPRECYZYJNE, STYL |
| Y29 | akcesoria SATO CT4 (4 karty) | downloads | rozmiar „PDF” | „5,3 MB” | `stat`: 5 584 527 B | NIEPRECYZYJNE |

Razem 29 ustaleń: SPRZECZNE 2, NIEPRECYZYJNE 12 (w tym 2 łączone ze STYL), SPOZA 3, STYL 11, POMINIĘTE 1.

## Sprawdzone bez uwag

- **SATO CT4-LX-HC:** name, seoH1, seoTitle, seoDescription (14 PN zgodne z tabelą), shortDescription; opis zdanie po zdaniu (zastosowania, obudowa antymikrobowa do przecierania, TT z możliwością DT, 104 mm, 203/152 mm/s, Label Waste Prevention, profile materiału, ekran 4,3", filmy przy błędzie, USB + LAN 10/100/1000 + NFC, Wi-Fi 802.11a/b/g/n/ac + BT 4.1, RTC, obcinak, AEP, języki, PDF, zasilacz 24 V); wszystkie 31 wierszy specyfikacji (w tym RS-232C i cięcie częściowe — „Optional Devices”; zawartość opakowania — „Bundled Accessories”; normy — datasheet); keyParams; applications; FAQ 3–7; dymki; downloads (pliki istnieją, rozmiary zgodne); `relatedAccessories` (WWCT0505N/0503N/0506N — lista części HC; odklejak słusznie pominięty); `relatedProducts` (same 4"). „Antymikrobowa” = „anti-microbial casing” — bez słowa „antybakteryjna”; IEC 60601-1 nie przypisana.
- **Konfiguracje 14 PN CT4-LX-HC:** każdy PN potwierdzony u dwóch dystrybutorów (BlueStar i The Barcode Warehouse — zapis tytułów stron w `$SP/hc2/src/audit/sato-dist/`): 03/04 = TT 203/305, 01/02 = DT 203/305, ZNAR = RTC, ZWAN = WLAN + BT, ZWAR = WLAN + BT + RTC, ZNCN = obcinak, ZNCR = obcinak + RTC.
- **SATO WS2-2:** name, seoTitle, shortDescription, opis (poza Y04, Y05, Y10), specyfikacja (szerokość druku 54,1/56,8 mm i grubość 0,06–0,2 mm z instrukcji WS2; CPU 600 MHz, 128 MB SDRAM, 1 kg, CB/CE/Wireless IEEE z broszury WS2-2; zestaw czyszczący — strona SATO EU), FAQ o różnicy WS208-2/WS212-2, czyszczeniu (instrukcja WS2, rozdz. 4), integracji (Cerner — strona SATO EU), dymki, downloads, `relatedProducts` (2"). Konfiguracje W2202-401NN-EU i W2302-401DN-EU — BlueStar + Levata; W2302-401NN-EU — BlueStar + standard SATO (Levata podaje błędnie RS-232 i Wi-Fi). Zdjęcia: oba bez artefaktów, opisy zgodne.
- **Honeywell PC45d Healthcare:** opis (poza zmianą stylistyczną nic), specyfikacja (wymiary, masa, zasilacz, temperatury, wilgotność, pamięć, języki, interfejsy, RS-232, zestaw 205-190-012 — przewodnik 04/26, bezpieczeństwo, normy, zawartość opakowania — QS, brak przewodu — opis SKU „NO PC”, gwarancja 2 lata), PN PC45D100000200 (strona Honeywell: „SKU,LCD,HC,ETH,203DPI,NO PC”), FAQ o różnicy z PC45d (głowica 225-783-001, wałek 205-187-002 wspólne; odklejak 205-189-001, obcinarka 205-189-006 z tacką 205-191-007 osobne — przewodnik 04/26), o opaskach, Wi-Fi, przewodzie, Printer Edge, alternatywach; zdjęcia 4 (na -3 widoczny napis „SELF STRIP” — opis „z odklejakiem (sprzedawany osobno)” poprawny); brak IEC 60601-1 i „antybakteryjnej”.
- **Citizen CL-H300SV:** opis (samoochronna obudowa, jony srebra — instrukcja 1.3, SIAA / ISO 22196 — datasheet, odporność na agresywne środki, branże, prosta bryła, Hi-Lift / ClickClose, karty interfejsu — „interchangeable interface board”, Cross-Emulation, gwarancja), specyfikacja (instrukcja rozdz. 12: druk, materiał, pamięć, czujniki, zasilacz 24 V 2,5 A, port USB 5 V 2,1 A, normy, wymiary rysunku „Standard model”, masa 2,0 kg, warunki pracy i przechowywania, zawartość opakowania), PN CLH300SVXEWNXXA (budowa numeru w instrukcji 1.3), FAQ (system operacyjny macOS — strona produktu; XML — instrukcja 1.1), zdjęcia 1–4.
- **products.ts:** głowica 225-783-001 i wałek 205-187-002 — dopisanie PC45d Healthcare zgodne z przewodnikiem 04/26; FAQ `honeywell-pc45d` — zestaw 205-190-012 dla Europy (przewodnik: „Rest of World”); P1112640-233 i P1112640-239C — ZD421C-HC zgodne z sekcją „ZD421c / ZD421c-HC” przewodnika akcesoriów; podpowiedź strony wariantu taśmy CT11007.
- **Zebra (zmiany J4):** wszystkie nowe PN potwierdzone u dwóch dystrybutorów — ZD4AH42/43-C0EE00EZ (Videoton = opis Zebry, ERS, Levata), ZD4AH42/43-C0EW02EZ, ZD4AH42-D0EW02EZ, ZD4AH42/43-30EW02EZ (ERS „MCS – Wi-Fi – BT4”, Levata „802.11ac, Bluetooth 4.1”), ZD4AH22-D0EX02EZ (ERS, Levata: 802.11ax), ZD6AH42-D0EL02EZ (ERS, Levata: 802.11ac), ZQ61-HUWAE04-00 (strona Zebra ZQ610 Plus-HC: „Wi-Fi 5 (802.11ac) and Bluetooth 4.2 option”, ERS, Levata). ZD421C-HC: szerokość druku 104 mm przy 203 i 300 dpi, materiał 15–118 mm, kaseta 74 m / 109,2 mm z chipem, 254 × 202 × 177 mm, 2,3 kg — spec sheet; głowice P1116110-009/-010, moduł P1112640-239C, odklejak P1112640-233, podstawa baterii P1080383-600, torba SG-DM-CASE2-01 — przewodnik akcesoriów; kasety 02300/03300/01600CT11007 — karty taśm w sklepie. `relatedProducts` kart Zebra HC — tylko ta sama klasa (2" / 4" / mobilne 2" / mobilne 3").
- **Ceny i dostępność:** wszystkie 56 PN z zakresu zgodne z API (drugie wywołanie) poza Y27; ceny wariantów i `priceFrom` kart bez rozbieżności.
- **Unikalność:** po poprawkach 0 wspólnych 6-gramów kart J2/J3 (description, shortDescription, seoDescription, faq) z 1239 kartami ze wszystkich plików `src/data`. W kartach Zebra HC jedyne nowe wspólne ciągi z J4 to nazwy standardów („Wi-Fi 5 (802.11ac) i Bluetooth 4.1”, „Wi-Fi 6 (802.11ax) i Bluetooth 5.3”).
- **Tabele wariantów (scrollWidth/clientWidth `#warianty .overflow-x-auto`, z rozwiniętymi niedostępnymi):** 1440 — 1216/1216, 1280 — 1216/1216, 1024 — 960/960 we wszystkich 10 kartach; 390 px — brak poziomego przewijania strony. Wszystkie karty → HTTP 200.

## Rozbieżności źródeł

- SATO CT4-LX-HC: datasheet podaje drugą średnicę rolki „Max. ø 115 mm” bez czytelnej gilzy — karta podaje tylko 128 mm na gilzie 40 mm.
- SATO WS2: instrukcja WS2 (2020) — SDRAM 32 MB, 1,05 kg, certyfikaty FCC/RCM/cTUVus; broszura WS2-2 (11.2024) — 128 MB, 600 MHz, 1 kg, CB/CE/Wireless IEEE (przyjęto broszurę). Strona SATO EU — maks. długość 2500 mm (203 dpi), broszura i instrukcja — 2540 mm.
- Honeywell: datasheet HC 01/24 — Wi-Fi 5 + BT 5.2 (i „Bluetooth 5.1”); application brief 03/25 — Wi-Fi 6, BT 5.1; strona HC — „Wi-Fi 5 and Bluetooth 5.1 LE”; przewodnik akcesoriów 04/26 — zestaw Wi-Fi 6 + BT 5.2 + NFC (na karcie: zestaw z przewodnika). Listy środków czyszczących: Healthcare Guide 10/22 vs strona DRH 2024 (Y14).
- Citizen: strona produktu — „Paper thickness up to 0.150 mm”, datasheet i instrukcja — 190 µm (model standardowy); rolka 125 mm (datasheet) vs 127 mm (instrukcja); kolor: komunikat „white only”, instrukcja — czarny lub biały.
- Zebra EX02EZ (ZD411-HC, ZD421-HC): strona Zebra — Wi-Fi 6 z Bluetooth 5.3; opis Zebry do PN (Levata) i ERS — „BT5.2”. Karta zostaje przy 5.3 (strona producenta), zgodnie z kartą ZD421-HC po wcześniejszym audycie.
- Zebra EL02/EW02: przewodnik i spec sheet — Bluetooth 4.1; ERS „BT4”, Levata przy ZD6AH42-D0EL02EZ „Bluetooth 4.0”.

## Sprawy dla właściciela

1. **ZQ62-HUWAE04-00 (ZQ620 Plus-HC, Wi-Fi 5):** Zebra nie wymienia opcji Wi-Fi 5 na stronie ZQ620 Plus-HC (tylko Wi-Fi 6 + BT 5.3 albo sam Bluetooth); PN istnieje w cenniku Zebry z opisem „Dual 802.11AC / BT4.x”. Na karcie zostawiono „Bluetooth 4.x”. Do decyzji: potwierdzić u dystrybutora Zebry albo usunąć wariant (0 szt.).
2. **Głowice Honeywell 225-783-001 / 225-784-001** (karty sprzed HC): pole „Kompatybilność” i opisy podają też PC43d, PC43t i PD43 oraz „wymianę po 50–150 km” — przewodnik akcesoriów PC45 wymienia tylko PC45d, PC45d Healthcare i PC45t. Warto zweryfikować.
3. Karta **`honeywell-pc45d`** ma w innych FAQ ceny („od 1 518 zł”, „od 2 614 zł” itd.) — poza zakresem audytu, sprzeczne z zasadą „bez cen w treści”.
4. **Odklejak Healthcare 205-189-001** ma teraz w API 10 szt. (`available`) — można dodać kartę akcesorium do PC45d Healthcare.
5. **W2302-401CN-EU** (WS212-2 z obcinakiem) dodany jako wariant (0 szt.) — dwa dystrybutory zgodne. **WWHC02042** (CT4-LX-HC DT 305 dpi bez RTC) ma cenę, ale potwierdza go tylko jeden dystrybutor — pominięty.
6. Plik `public/downloads/honeywell/honeywell-healthcare-czyszczenie-obudow-en.pdf` nie jest już podlinkowany (Y14) — można go usunąć z repozytorium.
7. Karta CT4-LX-HC domyślnie pokazuje najtańszy PN (WWHC01042ZNAR, niedostępny), choć WWHC04042 jest w dostawie — zachowanie komponentu, bez zmian.
8. Zdjęcia akcesoriów SATO CT4 są w `.webp` (zasada: `.png`) — stan sprzed HC.
9. W kartach Zebra HC pozostały wspólne 6-gramy sprzed J4 (np. „ma o 30% większą moc obliczeniową” — FAQ ZD421-HC i opis ZD621-HC; „do procedur czyszczenia z użyciem UV” — ZD411-HC i ZD611-HC).
10. Instrukcji online CT4-LX-HC (manual.sato-global.com) nie dało się pobrać w tej sieci (przekierowanie operatora) — sprawdzono strony zapisane wcześniej i kartę katalogową; strona „Product Specifications → Standards” nie była dostępna.

## Weryfikacja

- `npx tsc --noEmit` — bez błędów; `npx next build` — exit 0 (błędy `prisma.stockCache` w logu dotyczą lokalnej bazy stanów).
- `npx next start -p 3252`: 10 kart z zakresu → 200, pomiary tabel jak wyżej, zrzuty 1440 i 390 px w `$SP/hc2/shots-audyt-Y/` (pomiary w `pomiary.json`). Serwer zatrzymany.
