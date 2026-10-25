# Weryfikacja V2 po wdrożeniu: Datalogic Memor 12 HC / 17 HC i akcesoria (25.10.2026)

Gałąź `weryfikacja/terminale-hc-v2` (z `origin/claude/takma-frontend-build-RrM9E`, a78412fc). Kontrola stron produkcyjnych https://www.takma.com.pl (tekst po pełnym załadowaniu, rozwinięte specyfikacje, FAQ, akcesoria i dymki wariantów) zdanie po zdaniu z dokumentami Datalogic. Raporty T2 i audytu Q nie były podstawą oceny.

Zakres: 16 kart — `datalogic-memor-12-hc`, `datalogic-memor-17-hc`, 9 akcesoriów z `src/data/datalogic-hc-terminals.ts` oraz 5 zmienionych kart w `products.ts`: 94A150128 (`datalogic-dock-1slot-memor-12`), 94A150129 (`datalogic-dock-wireless-memor-12`), 94ACC0380 (`datalogic-psu-memor-12`), 94ACC0327 (`datalogic-kabel-usb-c-skorpio-x5`), 94ACC0392 (`datalogic-charger-4slot-memor-12`).

## Źródła

| Skrót | Dokument |
|---|---|
| DS | Datalogic DS-MEMOR12-17-HEALTHCARE-EN Rev A (`public/datasheets/datalogic-memor-12-17-hc-en.pdf`): s. 1 — Features, Industry Applications, opisy sekcji; s. 2 — Technical Specifications, Accessories |
| PD-1130 | datalogic.com, strona Memor 12/17 HC (pd-1130): Overview, Comfort and Efficiency, Designed for Continuous Disinfection, Uninterrupted Coverage, Fast & Easy Scanning, Full set of Dedicated Accessories, Emergency or Alarm Calls |
| PD-1102 | datalogic.com, strona Memor 12-17 (pd-1102), „Models & Accessories”: modele, EASEOFCARE, Docks, Batteries, Miscellaneous, Power Supplies/Cords |
| UM | Memor 12/17 User's Manual (`public/downloads/memor12_17_um.pdf`): PDF s. 13–14 Accessories, s. 16 Charge with USB, s. 18 Wireless Charging Docks, s. 67 Desktop Mode |
| SX5-UM | Skorpio X5 User's Manual (`public/downloads/skorpiox5_um.pdf`): PDF s. 16 Accessories, s. 18 Charge with USB, s. 102 USB Direct Connection |
| HIMSS | Komunikat Datalogic HIMSS 2026 („Smart Docking HC … full desktop environment while charging”) |
| FOTO | zdjęcia na karcie, obejrzane na ciemnym tle |
| API | `https://www.takma.com.pl/api/stock` — 2 wywołania 25.10.2026 ok. 16:30, wyniki identyczne |

## Wynik

- 16 kart, wszystkie 200. W pełni zgodne bez poprawek: 4 (Memor 12 HC, 94A150141, 94ACC0405, 94ACC0411). Poprawki: 12 kart (lista na końcu).
- Cena i dostępność na stronie = API na wszystkich 16 kartach (górna cena, tabela wariantów, kafle akcesoriów, JSON-LD `offers`); wszystkie `available` → „Dodaj do koszyka”. Wyjątek w metadanych: tytuł i opis meta 94ACC0392 podawały cenę statyczną 1106,46 zł zamiast 1193,61 zł z API (V2-12).
- JSON-LD Product: nazwa, marka Datalogic, sku/mpn = PN, cena, `InStock` zgodne z treścią na wszystkich kartach. Karty z zastępczym zdjęciem nie mają pola `image` (poprawnie).
- Linki: 37 adresów wewnętrznych z 16 stron — wszystkie 200. PDF: karta katalogowa 638 KB, skrócona instrukcja 1,3 MB, instrukcja 8,9 MB — 200, rozmiary zgodne z opisem.
- Galeria: Memor 12 HC (3 zdjęcia) i Memor 17 HC (5) — miniatury przełączają zdjęcie i opis (alt). Przy 1280, 1024 i 390 px brak poziomego przewijania strony i tabeli wariantów.
- Akcesoria: Memor 12 HC — 4 + „Pokaż pozostałe (5)” i „Zwiń”; Memor 17 HC — 4 + „Pokaż pozostałe (7)” i „Zwiń”.
- Teksty stron: `$SP/hc4/weryfikacja/<slug>.txt`, zrzuty 1440 px: `<slug>.png`, odpowiedzi API: `v2-api-1.json`, `v2-api-2.json`.

## Datalogic Memor 12 HC (`datalogic-memor-12-hc`)

| Element strony | Treść na stronie | Dokument producenta | Ocena |
|---|---|---|---|
| Nazwa, H1, model w JSON-LD | Datalogic Memor 12 HC | DS s. 1 „Memor 12 HC” | zgodne |
| Krótki opis | biały terminal 6", Wi-Fi 6E, obudowa przygotowana do dezynfekcji, skaner 2D Halogen z Green Spot, Qi | PD-1102 944950027 („White Color”, Wi-Fi6E); DS s. 1 „Disinfectant-ready”, s. 2 Scan Engine, Wireless Charging | zgodne |
| seoTitle / seoDescription | terminal medyczny z Wi-Fi 6E; ekran 6" FHD+, NFC, PTT, ładowanie Qi; PN 944950027 na końcu | PD-1102 944950027; DS s. 2 | zgodne |
| Opis, akapit 1 | Android, białe wykonanie HC; bez modemu komórkowego; Wi-Fi 6E; przyjęcie pacjenta, opieka przy łóżku, dokumentacja medyczna, laboratorium | DS s. 1 (Memor 12 HC „Wi-fi 6/6E”, Memor 17 HC „Cellular 5G”; Industry Applications); PD-1130 Overview („inside the hospitals with their Wi-Fi 6E”) | zgodne |
| Opis, akapit 2 | obudowa i akcesoria HC przygotowane do dezynfekcji; odporność dotyczy terminala, osłony i ładowarek | PD-1130 „housing and accessories are disinfectant-ready”; DS s. 2 Chemical Resistance „(applies to device, rubber boot and chargers)” | zgodne |
| Opis, akapit 3 | grubość 13,5 mm; Gorilla Glass 7; dotyk w rękawiczkach; Halogen DE2121-DL, DeepSight, kody uszkodzone i zabrudzone; Green Spot potwierdza odczyt | DS s. 2 Dimensions, Touch Panel, Scan Engine; DS s. 1 Fast and Easy Scanning | zgodne |
| Opis, akapit 4 | alarm przyciskiem programowalnym lub gestem; PTT, NFC, aparaty 13/8 MP; bateria 4000 mAh, Qi; stacje bez odsłoniętych styków; 4 + 4 lata; gwarancja 1 rok | DS s. 1 Emergency or Alarm Calls, Maximize your investment; s. 2 Electrical, Camera, Warranty; PD-1130 Accessories („eliminating the need for exposed contacts”) | zgodne |
| Specyfikacja (29 wierszy) | typ, kolor, dezynfekcja, Android 13 GMS, QCx4490 2,4 GHz, 6/64 GB + SWAP 2 GB, microSD 2 TB, 6" LTPS 1080 × 2160 450 nit, panel 5-punktowy GG7, skaner, aparaty, Wi-Fi 6E 2×2 WPA3, BT 5.3, NFC, A-GPS/GPS/Galileo/BeiDou, czujniki bez barometru, przyciski, audio, USB-C, bateria 3,87 V 14,98 Wh, Qi EPP 7 W, IP65/IP68, upadki 1,3/1,5 m, przewroty 500 × 0,5/1 m, temperatury, ESD 15/8 kV, 165 × 76,7 × 13,5 mm 245 g, oprogramowanie, EMM, gwarancja | DS s. 2 (wszystkie sekcje); PD-1102 944950027 | zgodne |
| Zastosowania | 4 pozycje | DS s. 1 Industry Applications — Healthcare | zgodne |
| Wariant | 944950027: Wi-Fi 6E, 6 / 64 GB, Android 13 GMS, biały; bez atrybutów (jeden wariant) | PD-1102 944950027 | zgodne |
| FAQ 1–7 | różnice względem Memor 12; lista środków; brak przycisku alarmowego, klips 94ACC0411; ładowanie i stacje 94A150126 / 94A150127 z zasilaniem; brak sieci komórkowej; wsparcie 4 + 4, Shield w umowach rocznych / 3-letnich / do 5 lat; alternatywy | PD-1102 (944950001, Docks, Miscellaneous, EASEOFCARE „MEMOR 12, DATALOGIC SHIELD, ANNUAL / 3 YEARS / <=5 YEARS”); DS s. 2 Chemical Resistance, Accessories; UM PDF s. 16 | zgodne |
| Zdjęcia i alt | 944950027: przód z ikoną Wi-Fi i tył; -2: tył; -3: boki z miętowymi przyciskami | FOTO (ikona Wi-Fi, brak 5G) | zgodne |
| Pliki | karta katalogowa HC, QSG, UM Memor 12/17 | pliki 200, rozmiary zgodne | zgodne |
| Cena / dostępność / JSON-LD | 2779,49 zł, EU 18 szt., Dostępny; Offer 944950027 InStock | API | zgodne |

## Datalogic Memor 17 HC (`datalogic-memor-17-hc`)

| Element strony | Treść na stronie | Dokument producenta | Ocena |
|---|---|---|---|
| Nazwa, H1 | Datalogic Memor 17 HC | DS s. 1 | zgodne |
| Krótki opis | „biała obudowa do dezynfekcji” | DS s. 1 „Disinfectant-ready”; brief: „przygotowana do dezynfekcji” | niezgodne terminologicznie → V2-01 |
| seoTitle / seoDescription | 5G, Wi-Fi 6E, eSIM, obudowa przygotowana do dezynfekcji, Green Spot, Qi; PN 944950006, 944950023 | DS s. 2 System (1 Nano SIM, 1 eSIM); PD-1102 | zgodne |
| Opis, akapit 1 | praca w szpitalu i poza nim; nano SIM i eSIM; wizyty domowe, przemieszczanie się między placówkami; prywatne sieci 5G | PD-1130 Overview („visiting patients at home or navigating across medical facilities”, „Private 5G systems”) | zgodne |
| Opis, akapit 2 | ciągła dezynfekcja; zapobieganie gromadzeniu się zarazków i bakterii; Qi EPP 7 W w białych stacjach bez odkrytych styków | DS s. 1 Designed for Continuous Disinfection; s. 2 Wireless Charging; PD-1130 Accessories | zgodne |
| Opis, akapit 3 | 944950006 — 64 GB; 944950023 — 128 GB i SafeSwap | DS s. 2 Battery („M17HC 6/128GB version only”), Memory; PD-1102 | zgodne |
| Opis, akapit 4 | Green Spot: identyfikacja pacjenta, leki, ewidencja sprzętu; alarm przyciskiem lub gestem; klips 94ACC0411 osobno; Smart Docking 94A150141 w trybie Desktop; gwarancja 1 rok | PD-1130 Fast & Easy Scanning; DS s. 1; PD-1102 94ACC0411, 94A150141 | zgodne |
| Specyfikacja (28 wierszy) | jak Memor 12 HC + łączność 5G/LTE (Rel. 16, VoLTE, VoNR, Wi-Fi calling), pasma EMEA 5G/FDD/TDD/WCDMA/GSM, barometr, Zello PTT | DS s. 2 WWAN (EMEA and ROW), Sensors (Barometer „Memor 17 only”), Terminal Emulator and PTT | zgodne |
| Warianty i dymki | Pamięć 6/64 i 6/128 GB; SafeSwap „Tak” tylko 944950023; dymki: pamięć RAM/UFS, microSD 2 TB; SafeSwap tylko 6/128 GB | PD-1102 944950006, 944950023; DS s. 2 | zgodne |
| Zastosowania | wizyty domowe, identyfikacja pacjenta i leki, ewidencja sprzętu, przemieszczanie się między placówkami | PD-1130 | zgodne |
| FAQ 1–7 | wybór wersji; różnice względem Memor 17; lista środków; alarm; stacje HC i Smart Docking; bateria 94ACC0414; alternatywy z modemem | DS s. 2; PD-1102 (944950014/003, Docks, 94ACC0414); PD-1130 Emergency; HIMSS | zgodne |
| Zdjęcia i alt (5) | przód z ikoną 5G; tył; lewy bok z przyciskiem skanowania i głośnością; prawy bok; profile 13,5 mm | FOTO (ikona 5G widoczna) | zgodne |
| Pliki, linki | 3 PDF, 15 linków do kart | 200 | zgodne |
| Cena / dostępność / JSON-LD | 3471,94 zł (EU 103) i 3814,60 zł (EU 128), Dostępny; dwa Offer InStock | API | zgodne |

## Akcesoria HC (`datalogic-hc-terminals.ts`)

| Karta | Element | Treść na stronie | Dokument producenta | Ocena |
|---|---|---|---|---|
| 94A150126 | nazwa, SEO, opis | jednogniazdowa, biała, ładowanie bezprzewodowe jednego terminala Memor 12 HC / 17 HC, tylko ładowanie, bez odsłoniętych styków, odporność chemiczna ładowarek | DS s. 2 Accessories „94A150126 Charging Dock wireless HC”; PD-1102 „white version, charge only”; PD-1130; UM PDF s. 13 „SSD WLC HC” | zgodne |
| 94A150126 | Wymagane | 94ACC0327 + 94ACC0383 | PD-1102 „requires 94ACC0327 - USB-C cable and 94ACC0383” | zgodne |
| 94A150126 | Zastosowania | „Ładowanie terminala na stanowisku pielęgniarskim” | brak | brak w dokumencie → V2-02 |
| 94A150126 | zdjęcie, cena | biała stacja; 645,93 zł, EU 63 | FOTO; API | zgodne |
| 94A150127 | nazwa, SEO, opis, Wymagane | 4 gniazda, biała, bezprzewodowo, tylko ładowanie; 94ACC0380 + 95A051041 | DS s. 2 „94A150127 4-Slot Charging Dock wireless HC”; PD-1102 „requires 94ACC0380 - Power supply and regional power cord”, 95A051041 „Power Cord, Europe” | zgodne |
| 94A150127 | Zastosowania | „Ładowanie kilku terminali oddziału w jednym miejscu” | brak („oddziału”) | brak w dokumencie → V2-03 |
| 94A150127 | zdjęcie | zastępcze (placeholder) | — | sprawa dla właściciela |
| 94A150141 | całość | Smart Docking, biała, tryb Desktop, obraz na zewnętrznym monitorze, pulpit podczas ładowania, tylko Memor 17 HC, 94ACC0380 + 95A051041; zastosowanie: dokumentacja przy stanowisku | PD-1102 „Smart Docking Station M17 white - Desktop mode (requires 94ACC0380 …)”; UM PDF s. 67; HIMSS („point-of-care documentation”, „full desktop environment while charging”) | zgodne (zdjęcie zastępcze) |
| 94ACC0414 | nazwa, SEO, opis | bateria HC do Memor 17 HC; do czarnych Memor 12/17 — 94ACC0410 | PD-1102 „Battery, HC, Memor 17 HC”, „94ACC0410 … for Memor 12-17” | zgodne (zdjęcie zastępcze) |
| 94ACC0414 | Zastosowania | „Bateria zapasowa na kolejną zmianę” | brak („na kolejną zmianę”) | brak w dokumencie → V2-04 |
| 94ACC0409 | nazwa, SEO, kolor, 5 szt., zgodność | jasnozielony, 5 szt., Memor 12 HC i 17 HC | PD-1102 „Handstrap (5 pieces) for Memor 17 HC - light green”; DS s. 2 „94ACC0409 Hand Strap HC” | zgodne (zdjęcie zastępcze) |
| 94ACC0409 | opis, Zastosowania | „ułatwia trzymanie terminala w jednej ręce”; „Praca terminalem w jednej ręce” | PD-1130: „ergonomic hand straps offer flexible carrying solutions, helping reduce hand fatigue during long shifts” | brak w dokumencie → V2-05 |
| 94ACC0405 | całość | gumowa osłona HC, upadki 1,5 m (bez osłony 1,3 m), 500 przewrotów z 1 m, ta sama lista środków | DS s. 2 „94ACC0405 Rubber Boot HC”, Drop Resistance, Tumbles, Chemical Resistance; PD-1130 „shielding the devices from accidental drops and daily wear” | zgodne (zdjęcie zastępcze) |
| 94ACC0411 | całość | biały klips kieszeniowy, czerwony przycisk alarmowy na górnej krawędzi, zdejmowany; terminal bez własnego przycisku | PD-1102 „Pocket clip with emergency red button … clip is removable”; DS s. 2; FOTO (kolor, położenie przycisku) | zgodne |
| 94ACC0383 | nazwa, SEO, spec., zdjęcie | USB-A, 4 wtyczki (EU, UK, AU, US); stacje 94A150126, 94A150128, 94A150129 przez 94ACC0327; ładowanie terminala przez USB-C | PD-1102 „Power Wall Adapter with 4 regional plugs – USB A”; UM PDF s. 16; FOTO | zgodne |
| 94ACC0383 | opis na stronie | „oraz stacje Datalogic Stacja dokująca 1-slotowa Memor 12/17/30/35 i Datalogic Stacja dokująca bezprzewodowa Memor 12/17/30/35 do Memor 12/17” — link z PN zamieniony na pełną nazwę karty | — | niezgodne (zdanie zniekształcone przy renderowaniu) → V2-06 |
| 95A051041 | nazwa, SEO, spec. | przewód z wtyczką europejską do 94ACC0380 | PD-1102 „Power Cord, Europe 95A051041”; UM PDF s. 13 | zgodne |
| 95A051041 | opis na stronie | „zasilacz Datalogic Zasilacz do stacji dokujących Memor 12/17, który…”; „czterogniazdową 94A150127 i 94A150141” (z linku zniknęło „Smart Docking”) | — | niezgodne (renderowanie) → V2-07 |
| wszystkie 9 | cena, dostępność, JSON-LD | = API, available, InStock | API | zgodne |

## Zmienione karty Datalogic w `products.ts`

| Karta | Element | Treść na stronie | Dokument producenta | Ocena |
|---|---|---|---|---|
| 94A150128 | opis, spec., Wymagane | 1-slotowa, Memor 12/17/30/35, tylko ładowanie; 94ACC0383 + 94ACC0327; adapter 94ACC0395 / 94ACC0401 bez osłony | PD-1102 94A150128; UM PDF s. 13 „SSD WIRED Single Slot Dock Std - charge only” | zgodne |
| 94A150128 | opis | „Umożliwia wygodne ładowanie…” | brak („wygodne”); pozycja pionowa — FOTO | brak w dokumencie → V2-08 |
| 94A150128 | zdjęcie, cena | czarna stacja z gniazdem; 383,86 zł, EU 478 | FOTO; API | zgodne |
| 94A150129 | opis, spec., Wymagane | bezprzewodowa, Qi, Memor 12/17/30/35, adapter 94ACC0394 / 94ACC0400; 94ACC0383 + 94ACC0327 | PD-1102 94A150129; UM PDF s. 18 „Always use the adapter” | zgodne |
| 94A150129 | opis | „Eliminuje zużycie złącza USB-C.” | brak; PD-1102: „Wireless charging cradles for contactless, carefree and frictionless operations” | brak w dokumencie → V2-09 |
| 94ACC0380 | opis, Wymagane | lista zasilanych stacji, jednogniazdowe przez 94ACC0383, przewód 95A051041 | PD-1102 Docks, Power Supplies/Cords | zgodne |
| 94ACC0380 | spec. „Kompatybilność” | „Stacje dokujące i ładowarki Memor 12/17/30/35 (poza jednogniazdowymi 94A150128 i 94A150129)” — obejmowało też stację samochodową 94A150125 i HC 94A150126 | PD-1102: 94A150125 wymaga 94ACC0382, 94A150126 wymaga 94ACC0383 | niezgodne → V2-10 |
| 94ACC0327 | nazwa, krótki opis, opis, alt, wariant | tylko „Skorpio X5”; „Wytrzymała konstrukcja do użytku enterprise”; brak długości. Karta jest pokazywana jako wymagany przewód na kartach Memor HC i stacji | PD-1102 „USB-A to USB C cable / 1.2m long” (lista Memor 12-17); UM PDF s. 13–14, s. 16; SX5-UM PDF s. 16, 18, 102 | niezgodne / brak w dokumencie → V2-11 |
| 94ACC0392 | opis | „Niezbędna przy pracy zmianowej — przygotuj naładowane baterie…” (forma „Ty”, bez źródła); brak bloku „Wymagane” mimo wymaganego zasilacza i przewodu | PD-1102 „4-Slot Multi-battery Charger (requires 94ACC0380 - Power supply and regional power cord) for Memor 12-17” | brak w dokumencie → V2-12 |
| 94ACC0392 | tytuł i opis meta | „1106,46 zł” | API: 1193,61 zł (strona i JSON-LD pokazują 1193,61) | niezgodne → V2-12 |
| 94ACC0392 | spec., zdjęcie | 4 gniazda, baterie Memor 12/17; 94ACC0380 + 95A051041 | PD-1102 | zgodne |
| wszystkie 5 | cena na stronie, dostępność, JSON-LD | = API, available, InStock | API | zgodne |

## Poprawki (ten commit)

| ID | Karta | Pole | Było | Jest | Źródło |
|---|---|---|---|---|---|
| V2-01 | datalogic-memor-17-hc | shortDescription | „biała obudowa do dezynfekcji” | „biała obudowa przygotowana do dezynfekcji” | DS s. 1 „Disinfectant-ready” |
| V2-02 | datalogic-memor-hc-94a150126 | applications | „Ładowanie terminala na stanowisku pielęgniarskim” | „Bezprzewodowe ładowanie jednego terminala Memor 12 HC lub Memor 17 HC” | DS s. 2 Accessories |
| V2-03 | datalogic-memor-hc-94a150127 | applications | „Ładowanie kilku terminali oddziału w jednym miejscu” | „Bezprzewodowe ładowanie do czterech terminali Memor HC jednocześnie” | DS s. 2 „4-Slot Charging Dock wireless HC” |
| V2-04 | datalogic-memor-hc-94acc0414 | applications | „Bateria zapasowa na kolejną zmianę” | „Wymiana baterii w terminalu Memor 17 HC” | PD-1102 „Battery, HC, Memor 17 HC” |
| V2-05 | datalogic-memor-hc-94acc0409 | description, applications | „ułatwia trzymanie terminala w jednej ręce i zmniejsza zmęczenie dłoni…”; „Praca terminalem w jednej ręce” | „Ergonomiczny pasek służy do noszenia terminala i pomaga ograniczyć zmęczenie dłoni podczas długiej zmiany.”; „Noszenie terminala podczas długiej zmiany” | PD-1130 Accessories |
| V2-06 | datalogic-zasilacz-usb-94acc0383 | description | linki `[94A150128]`, `[94A150129]` (na stronie zamieniane na pełne nazwy kart) | etykiety z PN w nawiasie — na stronie: „oraz stacje 94A150128 i 94A150129 do Memor 12/17” | `accessory-description.ts` (bez zmian logiki) |
| V2-07 | datalogic-przewod-zasilajacy-eu-95a051041 | description | `[94ACC0380]`; `[Smart Docking 94A150141]` | etykieta z PN → „zasilacz 94ACC0380”; „i Smart Docking 94A150141” | jw.; HIMSS „Smart Docking HC” |
| V2-08 | datalogic-dock-1slot-memor-12 | description | „Umożliwia wygodne ładowanie terminala w pozycji pionowej…” | „Ładuje terminal w pozycji pionowej…” | FOTO |
| V2-09 | datalogic-dock-wireless-memor-12 | description | „Eliminuje zużycie złącza USB-C.” | „Ładowanie jest bezstykowe.” | PD-1102 („contactless … operations”) |
| V2-10 | datalogic-psu-memor-12 | specifications „Kompatybilność” | ogólne „stacje i ładowarki … (poza 94A150128 i 94A150129)” | lista: 94A150130/131/132/133 (Memor 12/17 i 30/35), 94A150123 i 94ACC0392 (Memor 12/17), białe 94A150127 i 94A150141 | PD-1102 Docks, Batteries |
| V2-11 | datalogic-kabel-usb-c-skorpio-x5 | name, shortDescription, description, wariant, alt, spec. | „Kabel USB-A do USB-C Skorpio X5”, opis tylko o Skorpio X5 + „Wytrzymała konstrukcja do użytku enterprise” | „Datalogic Kabel USB-A do USB-C 1,2 m do Memor 12/17 i Skorpio X5”; opis: 1,2 m, ładowanie Memor 12/17 (także HC) z 94ACC0383, zasilanie stacji 94A150128/129/126, Skorpio X5 — ładowanie z portu USB i przesyłanie danych; spec. „Długość 1,2 m”; slug bez zmian | PD-1102; UM PDF s. 13–14, 16; SX5-UM PDF s. 16, 18, 102 |
| V2-12 | datalogic-charger-4slot-memor-12 | description, priceFrom | zdanie w formie „Ty” bez źródła; brak bloku „Wymagane”; 1106,46 | „Ładuje baterie wyjęte z terminala.” + blok „Wymagane”: 94ACC0380 i 95A051041 (jak 94A150127); priceFrom karty i wariantu 1193,61 = API | PD-1102 94ACC0392; API |

Kontrole po poprawkach: `porownaj-opisy.py` (description, shortDescription, seoDescription, faq) na zbiorze kart Datalogic HC, Gryphon 4600 HC / Newland HC, Honeywell HC i akcesoriów Memor w `products.ts` — nowe zdania bez wspólnych 6-gramów; wspólne pozostają tylko nazwy modeli i nazwy środków czyszczących. `npx tsc --noEmit` — 0 błędów; `npx next build` — kod 0; `next start` lokalnie: zmienione karty 200, zdania V2-06/V2-07 renderują się z PN, blok „Wymagane” na 94ACC0392 pokazuje 94ACC0380 i 95A051041.

## Sprawy dla właściciela

1. Zdjęcia zastępcze na 5 kartach HC (94A150127, 94A150141, 94ACC0414, 94ACC0409, 94ACC0405). Datalogic, Barcode Factory i e-katalog Datalogic nie mają tych zdjęć w dużej rozdzielczości. Karta katalogowa HC (s. 2) zawiera oficjalne zdjęcie 94A150127 w rozdzielczości 367 × 253 px z odbiciem lustrzanym. Po wycięciu odbicia można je powiększyć ok. 1,5 raza do kafla 800 × 800 px. Zdjęcia osłony, paska i klipsa w karcie mają 44–200 px, więc nie nadają się do użycia.
2. Adaptery do stacji HC: instrukcja (PDF s. 18) każe zawsze używać adaptera, a lista akcesoriów wymienia adaptery HC 94ACC0396 i 94ACC0399. PD-1102 nie podaje ich przy stacjach 94A150126 i 94A150127. Warto potwierdzić u Datalogic, czy adapter jest w zestawie (sprawa z audytu Q, nadal otwarta).
3. Cała strona: schemat FAQPage w JSON-LD zawiera surowe linki markdown, np. `[Datalogic Memor 12](/produkt/datalogic-memor-12)`. Dotyczy wszystkich kart z linkami w FAQ (`page.tsx`, `faqJsonLd`). Nie zmieniano, bo to logika wspólna wszystkich kart.
4. Cała strona: blok „Wymagane” ma tekst „Aby korzystać …, potrzebujesz poniższych elementów” (forma „Ty”) we wspólnym komponencie (`required-accessory-copy.ts`). Nie zmieniano.
5. Strony kart bez `seoTitle` (karty Memor w `products.ts`) mają cenę statyczną w tytule i opisie meta. Przy zmianie ceny w API meta się rozjeżdża (tak było z 94ACC0392). Pozostałe 4 karty z zakresu mają teraz ceny zgodne z API.
