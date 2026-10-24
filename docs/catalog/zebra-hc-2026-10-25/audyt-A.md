# Audyt A — drukarki biurkowe Zebra HC (25.10.2026)

Zakres: `zebra-zd411-hc`, `zebra-zd421-hc` (`zebra-hc-zd4-products.ts`), `zebra-zd611-hc`, `zebra-zd621-hc` (`zebra-hc-zd6-products.ts`), `zebra-zd510-hc` i jego głowica/wałek (`products.ts`), części HC (`zebra-hc-p1086845-001`, `zebra-hc-105950-015`, `zebra-glowica-zd421d-hc-*`), pole „Kompatybilność” zmienionych kart akcesoriów ZD4/ZD6, kategoria `healthcare-printer-category.ts`, łączność EX02EZ/EW02EZ w kartach `zebra-zd421d`, `zebra-zd421t`, `zebra-zd411d`, `zebra-zd411t`.

Baza: gałąź `produkt/hc-opaski` (9dbdd82c), gałąź audytu `audyt/hc-a`.

## Źródła

`$SP` = `/private/tmp/claude-501/-Users-jakubtiuchty-takma/ac3db9fd-eaa6-4337-bc62-04cc01b87260/scratchpad`

| Skrót | Dokument | Plik |
|---|---|---|
| KK411 | ZD411-HC spec sheet EN, 03/12/2024 | `$SP/hc/src/zd411-hc-spec-sheet-en-us.txt` |
| KK421 | ZD421-HC spec sheet EN, 03/11/2024 | `$SP/hc/src/zd421-hc-spec-sheet-en-us.txt` |
| KK611 | ZD611-HC spec sheet EN, 03/08/2024 | `$SP/hc/src/zd611-hc-spec-sheet-en-us.txt` |
| KK621 | ZD621-HC spec sheet EN, 03/11/2024 | `$SP/hc/src/zd621-hc-spec-sheet-en-us.txt` |
| KK510 | ZD510-HC spec sheet EN, 10/20/2025 | `$SP/hc/src/zd510-hc-spec-sheet-en-us.txt` |
| UG510 | ZD510 User Guide (P1099655-04EN) | `$SP/hc/src/zd510-ug-en.txt` |
| PA | Desktop Printers Accessories Guide, sierpień 2024, v4 | `$SP/hc/src/desktop-printer-guide-accessory-en-us.txt` |
| STR | Strony modeli Zebra PL (sekcja „Łączność”) | `$SP/hc/src/zd4?1-hc-page.txt`, `zd6?1-hc-page.txt` |
| GW | Zebra Product Warranty Exceptions List, październik 2026 (pobrane 25.10.2026) | `$SP/hc/src/audit/product-warranty-exceptions-list.pdf` / `.txt` |
| DYST | Opisy PN u dystrybutorów (tylko konfiguracja PN) | Levata `zebra-zd4a042-d0ex02ez-label-printer` (zapis `$SP/hc/src/audit/dyst/l-zd4a042-d0ex02ez.html`); thebarcodewarehouse.co.uk i thelabelman.co.uk (ZD4A022-D0EW02EZ); barcodesite.com i barcodecenter.shop (ZD6A043-30EL02EZ, ZD6AH43-30EL02EZ); thermalprintersupport.com (ZD6A022-D1EE00EZ, -D2EE00EZ) |

## Decyzja: gwarancja

GW (październik 2026), „Regional Product Warranty Exceptions List”, s. 6, wiersz EMEA (txt l. 311–317): ZD120, ZD220, ZD230, ZD411, ZD421, **ZD510-HC**, ZD611, ZD611R, ZD621, ZD621R — **36 miesięcy na drukarkę kupioną po 1 kwietnia 2024 r.**; głowice: odesłanie do wiersza „Printheads” (s. 2, l. 70–74): **1 rok lub 1 mln cali, zależnie od tego, co nastąpi pierwsze** (EMEA, NA, LA). Globalnie (s. 1, l. 50–54) te same rodziny mają 24 miesiące; karty HC podają „minimum 2 lata, zależnie od regionu”, co nie przeczy wierszowi EMEA.

Zastosowano jedną wersję w polu „Gwarancja” wszystkich pięciu drukarek biurkowych HC:
„36 miesięcy na drukarkę kupioną w regionie EMEA po 1 kwietnia 2024 r.; głowica drukująca: rok lub milion cali wydruku, zależnie od tego, co nastąpi wcześniej”.
Karty głowic HC (-026, -027) i głowicy ZD510-HC (P1100266-003): „Rok lub milion cali wydruku…”. ZQ6 Plus-HC — zakres audytora B.

Uwaga: lista nie wymienia osobno wersji „-HC” dla ZD411/ZD421/ZD611/ZD621; karty HC nazywają je częścią serii ZD400/ZD600 („ZD400 Series printers are warranted…”), więc przyjęto, że wiersz rodziny obejmuje wersje HC.

## Ustalenia

| ID | Karta | Pole | Było | Jest | Źródło | Kategoria |
|---|---|---|---|---|---|---|
| A01 | zebra-zd611-hc | specifications „Gwarancja” | Co najmniej 2 lata od daty wysyłki; warunki zależą od regionu | 36 mies. (EMEA, po 1.04.2024); głowica: rok lub 1 mln cali | GW s. 6 l. 311–317, s. 2 l. 70–74 | NIEPRECYZYJNE |
| A02 | zebra-zd621-hc | specifications „Gwarancja” | j.w. | j.w. | GW | NIEPRECYZYJNE |
| A03 | zebra-zd510-hc | specifications „Gwarancja” | j.w. | j.w. | GW (ZD510-HC wymieniona wprost) | NIEPRECYZYJNE |
| A04 | zebra-zd411-hc, zebra-zd421-hc | specifications „Gwarancja” | „głowica: rok lub milion cali…” | „głowica drukująca: …” (ujednolicenie brzmienia) | GW | STYL |
| A05 | zebra-zd510-hc | faq „Czy drukarkę ZD510-HC można dezynfekować?” | „Złączy, styków czytnika chipu ani wnętrza drukarki nie czyści się wilgotnymi materiałami.” | „Złączy ani wnętrza drukarki nie czyści się materiałami zwilżonymi roztworem czyszczącym.” | UG510 l. 3004–3005 (zakaz dotyczy złączy i wnętrza); l. 3099–3101: styki chipu czyści się wacikiem zwilżonym alkoholem izopropylowym | SPRZECZNE |
| A06 | zebra-zd510-hc | faq „Jak ładuje się opaski do ZD510-HC?” | „Personel nie dotyka opasek podczas ładowania ani wyjmowania kartridża.” | usunięte | brak w KK510, UG510, stronie modelu | SPOZA |
| A07 | kategoria | comparisons[0].verdict | „ZD510-HC do szybkiej wymiany opasek bez kontaktu z nośnikiem” | „ZD510-HC do opasek z kartridżów z automatyczną kalibracją” | KK510 s. 1 („smartchip … automatic calibration”); brak źródła dla „bez kontaktu” | SPOZA |
| A08 | kategoria | comparisons „ZD421-HC czy ZD621-HC?” | „na taśmę w rolce 300 m albo w kasecie 74 m” | „na taśmę w rolce (74 m lub 300 m) albo na kasetę z taśmą 74 m” | KK421 s. 3 „Ribbon Standard Length: Roll 300 m; 74 m; Cartridge 74 m” | NIEPRECYZYJNE |
| A09 | zebra-zd621-hc | description | „ma o 30% większą moc niż drukarki ZD620” | „…większą moc obliczeniową…” | KK621 s. 2 („30% more powerful … innovative architecture”) | NIEPRECYZYJNE |
| A10 | zebra-zd621-hc | faq „Czy komorę … na klucz?” | „a tylny panel ma gniazdo zabezpieczenia Kensington” | „a obudowa ma gniazdo zabezpieczenia Kensington” | KK621 s. 3 „Media Locking Cabinet” — położenie gniazda nie jest podane | SPOZA |
| A11 | zebra-zd611-hc | description | „Obudowę można czyścić także promieniami UV.” | „Obudowa jest odporna na promieniowanie UV i nadaje się do procedur czyszczenia z użyciem UV.” | KK611 s. 3 „UV-resistant housing supports UV cleaning protocols” | NIEPRECYZYJNE |
| A12 | zebra-zd611-hc | faq „Czym … różni się od zwykłej ZD611?” | „Odporność na UV pozwala stosować dezynfekcję promieniami UV.” | „Dzięki odporności na UV drukarkę można objąć procedurami czyszczenia z zastosowaniem UV.” | KK611 s. 3 | NIEPRECYZYJNE |
| A13 | zebra-zd411-hc | faq „Jak czyścić obudowę…” | „…dobierz według instrukcji…” | „…należy dobrać według instrukcji…” | standard języka (bez formy „ty”) | STYL |
| A14 | zebra-zd421-hc | faq „Czy ZD421-HC zastąpi…” | „Przed wymianą sprawdź szablony…” | „Przed wymianą należy sprawdzić szablony…” | standard języka | STYL |
| A15 | zebra-zd421-hc | faq „Jaka gwarancja…” | „Gwarancja Zebra na ZD421-HC kupioną w EMEA po 1 kwietnia 2024 r. trwa 36 miesięcy.” | „Dla ZD421-HC kupionej w regionie EMEA po 1.04.2024 r. Zebra przewiduje 36 miesięcy gwarancji.” | GW; wspólny 6-gram z FAQ ZD411-HC | STYL (unikalność) |
| A16 | zebra-zd510-hc | faq „Czy ZD510-HC ma Wi-Fi…” | „Moduł Wi-Fi 802.11ac z Bluetooth 4.1 jest montowany fabrycznie w innych wersjach drukarki.” | „Dwuradiowy moduł 802.11ac i Bluetooth 4.1 Zebra montuje fabrycznie w innych wersjach drukarki.” | KK510 s. 3 „Factory installed wireless dual radio”; wspólny 6-gram z FAQ ZD411-HC | STYL (unikalność) |
| A17 | zebra-printhead-zd510-hc | specifications | „300 dpi (12 dots/mm)”; brak gwarancji | „300 dpi (12 pkt/mm)”; dodano „Gwarancja: Rok lub milion cali wydruku…” | GW s. 2 l. 70–74 | NIEPRECYZYJNE |
| A18 | zebra-platen-roller-zd510-hc | applications | „Poprawa jakości druku na opaskach” | „Zapasowy wałek do szpitalnej drukarki opasek” | brak źródła obietnicy | SPOZA |
| A19 | zebra-printhead-zd510-hc, zebra-platen-roller-zd510-hc | relatedAccessories | `[]` | `['zebra-zd510-hc']` (jak w pozostałych częściach HC) | PA s. 11 (sekcja ZD510-HC: P1100266-003, P1100266-008) | STYL |
| A20 | zebra-zd421t | description | „Wersje z końcówką PN EX02EZ mają Wi-Fi 802.11ac i Bluetooth 4.1.” | „…mają fabryczny moduł 802.11ax (Wi-Fi 6) z Bluetooth 5.3.” | STR (ZD421-HC: „Wi-Fi 6 (802.11ax) z Bluetooth 5.3 (opcjonalnie)”); DYST Levata ZD4A042-D0EX02EZ: „Modular Connectivity Slot, 802.11ax, BT5.3”; SHI (wg H1) ZD4AH43-30EX02EZ: „802.11AX BT5.3” | SPRZECZNE |
| A21 | zebra-zd421t | faq „Który wariant ma Ethernet lub Wi-Fi?” | „ZD4A042-30EX02EZ i ZD4A043-30EX02EZ mają Wi-Fi 802.11ac oraz Bluetooth 4.1.” | „…mają Wi-Fi 6 (802.11ax) oraz Bluetooth 5.3.” | j.w. | SPRZECZNE |
| A22 | zebra-zd421d, zebra-zd421t | variantAttributeTooltips „Wi-Fi” | brak (ogólny dymek) | „Fabrycznie zamontowany moduł Wi-Fi 6 (802.11ax) z Bluetooth 5.3 — wersje EX02EZ. Moduł montowany u klienta (P1112640-017C) to Wi-Fi 5 (802.11ac) z Bluetooth 4.1.” | j.w.; PA s. 12–13 (P1112640-017C = 802.11ac + BT 4.1) | NIEPRECYZYJNE |
| A23 | zebra-zd411d, zebra-zd411t | variantAttributeTooltips „Wi-Fi” | brak (ogólny dymek) | „Fabrycznie zamontowany moduł Wi-Fi 5 (802.11ac) z Bluetooth 4.1 — wersje EW02EZ. Gniazdo modułu łączności pozostaje wolne, np. na moduł Ethernet.” | DYST ZD4A022-D0EW02EZ: „Modular Connectivity Slot, 802.11ac, BT4”; STR ZD411-HC: Wi-Fi 5 z BT 4.1 | NIEPRECYZYJNE |

Razem 23: SPRZECZNE 3 (A05, A20, A21), NIEPRECYZYJNE 10 (A01–A03, A08, A09, A11, A12, A17, A22, A23), SPOZA 4 (A06, A07, A10, A18), STYL 6 (A04, A13–A16, A19).

## Sprawdzone bez uwag

- **ZD411-HC**: name, shortDescription, seoTitle, seoDescription, description (wymiary 220 × 115 × 151 mm, 1,0 kg, 152/102 mm/s, 56/54 mm, materiał 15–60 mm, rolka 127 mm, ZPL/EPL, bateria 2750 mAh), wszystkie specyfikacje liczbowe (KK411 s. 3), cechy HC (KK411 „Healthcare Features”), opcje (odklejak fabrycznie/u klienta, obcinak u klienta), warianty: D0EE00EZ = Ethernet + BLE 5 (DYST), D0EW02EZ = 802.11ac + BT 4.1 bez Ethernetu (DYST, STR), dymki, FAQ (bateria P1080383-603 + podstawa P1080383-602 — PA s. 16), zastosowania (KK411 „Markets and Applications”), zdjęcia (5 — opisy zgodne z kadrem), pliki do pobrania (PDF PL istnieje, 400 KB; instrukcja serwis-zebry.pl 200).
- **ZD421-HC**: wszystkie liczby i wymiary DT/TT (KK421 s. 3), taśmy 74/300 m, stosunek 1:1/1:4, szer. taśmy 33,8–109,2 mm, zawartość opakowania TT, następca ZD420-HC/GK420/GT800 (STR), 30%/700% mocy obliczeniowej (KK421 s. 2), torby SG-DM-CASE1-01/CASE2-01, podstawy -601/-600 (PA s. 12–13), głowice HC -026/-027 dla DT i -218/-219 dla TT (PA s. 12–13), warianty EE00EZ = Ethernet, EX02EZ = 802.11ax + BT 5.3 (DYST, STR), zdjęcia (6), pliki.
- **ZD611-HC**: liczby (KK611 s. 3; grubość 0,06–0,1905 mm tylko w trybie odrywania), ekran 4,3" tylko TT, ramię naprężające (dancer) TT, linerless tylko DT, warianty D1 = odklejak, D2 = obcinak (DYST), T0 = TT z ekranem, akcesoria w FAQ (odklejak/obcinak P1117258-030/-031 i -230/-231, podstawy -602 i P1117258-235, Wi-Fi P1112640-017C — PA s. 8 i 10), wspornik LP/TLP2824 (KK611), zdjęcia (6), pliki PDF PL/EN.
- **ZD621-HC**: liczby DT/TT (KK621 s. 3), ekran 4,3" w każdej wersji, zamek z 2 kluczami tylko DT HC, Ethernet + RS-232 standard, EL02EZ = 802.11ac + BT 4 + Ethernet + RS-232 (DYST), Wi-Fi u klienta P1112640-017C (DT) / -239C (TT) (PA s. 5 i 7), bateria/podstawy/futerał (przypis 2: nie mieści obcinaka/odklejaka), PrintSecure i dane pacjentów (KK621 s. 1 „safeguard your sensitive data, including patient information”), zdjęcia (7), pliki.
- **ZD510-HC**: description, specyfikacje (KK510 s. 3: 300 dpi, 51/102 mm/s, szerokości 19,05/25,4/30,16 mm, długość 76–558 mm, pamięć, temperatury i wilgotność, przechowywanie kartridży, normy, IEC 60601-1:2012), EMEA bez BLE/NFC (przypis), W zestawie (UG510 l. 428–440), cicha praca, uszczelnione przyciski (UG510 l. 3007), przewodnik dezynfekcji (UG510 l. 3008–3009), czyszczenie co 5 kartridży (UG510 l. 2923), HC100 i kartridże (KK510; karta Z-Band Direct), zdjęcia (6), pliki.
- **Części HC**: P1086845-001 (75 W Healthcare bez przewodu) i 105950-015 (AC Power Cable - EU) — w sekcjach ZD411d/-HC, ZD421d/-HC, ZD421t/-HC, ZD611d/-HC, ZD611t/-HC, ZD621d/-HC, ZD621t/-HC i ZD510-HC (PA); głowice -026/-027 tylko ZD421d-HC (PA s. 13).
- **Kompatybilność kart akcesoriów (PA)**: P1080383-603 (wszystkie HC biurkowe ZD4/ZD6), P1080383-600 (ZD421t-HC, ZD621t-HC), P1080383-601 (ZD421d-HC, ZD621d-HC), P1112640-015/-016 (ZD411-HC, ZD421-HC), P1112640-017C (ZD411-HC, ZD421-HC, ZD611d/t-HC, ZD621d-HC; nie ZD621t-HC), P1112640-031/-061/-062 (ZD421d-HC, ZD621d-HC), **ZD621d-HC używa zwykłych głowic P1112640-050/-051** (PA s. 7 — brak osobnych głowic HC; głowice HC -026/-027 są tylko w sekcji ZD421d/-HC), ZD621t-HC: -240/-241, -251/-252, -232, -233, -239C, P1080383-022, P1080383-037, SG-DM-CASE2-01, ZD611t-HC: P1117258-230/-231/-232/-233/-215/-216/-234, ZD421t-HC: P1112640-218/-219/-216/-217/-230/-231, ZKDU (wszystkie). Wszystkie zgodne.
- **Kategoria**: wstęp (definicja bez listy modeli w pierwszym akapicie), tabela porównawcza — każda komórka sprawdzona z KK411/421/611/621/510 i kartą ZQ600 Plus-HC (48/72 mm, 115 mm/s, 203 dpi, Wi-Fi 6 + BT 5.3 albo BT 4.2, RS-232, USB), przypis o 300 dpi/104 mm, poradnik, IEC 60601-1 przypisana zasilaczowi, zasilacz IEC 60601 ZQ6 (karta ZQ6 HC), CPCL dla ZQ6, bateria 3250 mAh, przechowywanie kartridży, FAQ.
- Styl: brak cen, superlatyw, „autoryzowany”, notatek o źródłach i formy „ty” w kartach HC; „zaczernienie” nie występuje.
- Unikalność (`porownaj-opisy.py`, n = 6, description/shortDescription/seoDescription/faq, karty HC ZD4/ZD6/ZQ6, ZD510-HC i modele podstawowe): 0 par z udziałem kart HC po poprawkach.

## Rozbieżności źródeł i uwagi otwarte

1. Bluetooth przy Wi-Fi 5: KK411 i KK611 — tekst „Bluetooth 4.1”, tabela opcji „Bluetooth Classic 4.2”; STR ZD611-HC/ZD621-HC — „Wi-Fi 5 z Bluetooth 4.2”; KK621 i PA — „Bluetooth 4.1”. Na kartach pozostawiono 4.1 (PA dla modułu P1112640-017C/-239C).
2. ZD4 i ZD6 HC mają według STR także opcję Wi-Fi 6 (802.11ax) z BT 5.3; karty katalogowe z 2024 r. jej nie wymieniają. Karty ZD611-HC i ZD621-HC opisują tylko moduł 802.11ac (zgodny z PA) — nie dopisywano.
3. Lista gwarancyjna nie wymienia wersji „-HC” ZD411/ZD421/ZD611/ZD621 osobno (tylko rodziny); ZD510-HC jest wymieniona wprost.
4. Poza zakresem, do decyzji: opisy kart `zebra-zd411d`/`zebra-zd411t` używają „najnowszy moduł Wi-Fi 6” i mają cenę w seoDescription; karty modeli podstawowych mają wiele wspólnych 6-gramów między sobą (ZD621d ↔ ZD621t: 194).
5. PA v4 (sierpień 2024) w sekcji ZD411d/-HC podaje ten sam PN wałka dla 203 i 300 dpi (P1079903-003) — prawdopodobny błąd przewodnika (bez wpływu na karty, brak kart wałków ZD411).
