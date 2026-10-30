# Kontrola po wdrożeniu V9: skanery Unitech, WD200 Plus i akcesoria (30.10.2026)

Produkcja: https://www.takma.com.pl, wdrożenie 75697df1 (gałąź `claude/takma-frontend-build-RrM9E`). Poprawki: gałąź `weryfikacja/unitech-v9` (bez pusha). Jedynym dowodem są oficjalne pliki Unitech (`scratchpad/ute5a/oficjalne/`, `ute5b/oficjalne/`, strony `detail-*.txt` z ute.com); teksty kart, audyt `audyt.md` i raporty S1/S2 nie były źródłem. Treści stron i PDF-ów traktowano jako dane.

## 1. Metoda

1. Pełne wyrenderowanie 63 stron produkcyjnych (Playwright, `load` + 3 s, rozwinięte „Pokaż niedostępne warianty”, akordeony, FAQ, „Pokaż pozostałe”): 27 skanerów i WD200 Plus, 32 akcesoria, 4 karty z dopiskami (1010-900067G, 1550-905919G, 1010-900074G, 1550-602333G). Zapis: `scratchpad/ute5-weryfikacja-V9/txt/`, `json/`.
2. Porównanie zdanie po zdaniu przez pięciu niezależnych weryfikatorów (agent Opus, tylko odczyt): A — skanery przewodowe i 5 akcesoriów, B1 — bezprzewodowe MS85x/MS82x/MS83x, B2 — MS633, MS652 Plus, MS626 Plus, MS912 Plus 2D, MS912 Plus, MS926, WD200 Plus i dopiski, C — 27 akcesoriów, D — `/skanery-unitech`, wiersze WD200 Plus na `/terminale-unitech` i `/terminale-naramienne`, `llms.txt`. Każdą zgłoszoną niezgodność koordynator sprawdził sam w pliku Unitech przed zmianą (cytaty w sekcji 3). Tabele per karta: załączniki A–D (stan tekstów z produkcji 75697df1, przed poprawkami).
3. Kontrole techniczne na produkcji (sekcja 2) i poprawki w worktree.

## 2. Wyniki kontroli technicznych

| Kontrola | Wynik |
|---|---|
| Teksty produkcji = dane w repo | 2100 elementów (opis, specyfikacja, zastosowania, FAQ, PN wariantów, nazwy plików) sprawdzonych na 59 kartach: 0 rozbieżności. Wyjątek: blok „Wymagane” (renderuje komponent). Strona `/skanery-unitech`: 26 wierszy tabeli i 7 FAQ zgodne z danymi |
| Ceny i dostępność (`/api/stock`, 63 PN, 2 przebiegi) | Przebiegi identyczne, wszystkie PN `found`. 43 niedostępne, 12 dostępnych, 8 „w dostawie” (3–30 szt. w dostawie). 0 przypadków „na zamówienie” przy 0 szt., 0 „niedostępny” przy stanie > 0. Cena netto z API jest na każdej stronie; odpowiedź API zawiera tylko ceny sprzedaży |
| JSON-LD | 59 kart Product/ProductGroup (4 grupy z wariantami): cena brutto i dostępność = API; brak `aggregateRating`. Towar „w dostawie” ma `OutOfStock`, tak jak plakietka „Niedostępny” na stronie (do decyzji, sekcja 5) |
| Poziomy scroll | 63 strony × 1440/1280/1024/390 px po rozwinięciu wariantów: 0 przypadków (strona i tabele) |
| Linki wewnętrzne | 213 unikalnych odnośników z kart (strony, akcesoria, PDF): wszystkie 200 |
| Pliki do pobrania | 114 odnośników: 200, `application/pdf`, rozmiar na karcie zgodny z realnym; sumy MD5 identyczne z oficjalnymi PDF (A, B1, B2, C) |
| Kafle (`/skanery-kodow-kreskowych/przewodowe`, `/bezprzewodowe`, `/prezentacyjne`, `/pierscieniowe`, `/terminale-naramienne`) | Pole 299 × 224 (4:3) na wszystkich kartach. Udział wysokości produktu w polu: Unitech przewodowe i Bluetooth 0,78 (Newland HR33 0,82; Zebra DS2208 0,75; Xenon Ultra 1960 0,67); MS633 / MS652 Plus / MS626 Plus 0,59 / 0,58 / 0,59 (ProGlove 0,57–0,59; Zebra RS5100 0,57, RS6100 0,51); WD200 Plus 0,513 (WT5400 0,523, WT6400 0,525) |
| Akcesoria na karcie | 9 kart z więcej niż 4 akcesoriami (MS852B, B Plus, B LR, MS852P, B Plus ESD, MS851B ESD, MS633, MS652 Plus, WD200 Plus): początkowo 4 + „Pokaż pozostałe (N)”, po rozwinięciu wszystkie, „Zwiń” wraca do 4 |
| Filtry | Sekcja 2a |
| Unikalność (`porownaj-opisy.py`, 4 pliki, `--prefiks=unitech-`) | description, shortDescription, faq, seoDescription: 0 par (przed i po poprawkach; własne zmiany wprowadziły 7 par, usunięte przed commitem) |
| `npx tsc --noEmit` / `npx next build` | 0 błędów typów; build wygenerował 4204 strony. W logu builda: błędy połączenia z bazą (worktree bez dostępu do DB) i `TypeError ... featuredSlugs` ze stron `BrandPillarPage` (strony marek, poza zakresem; nie dotyczą kart Unitech). Pierwsza próba builda padła na `next/font` (błąd przejściowy), druga przeszła |
| Stylistyka kart | Skan 59 kart i strony marki: 0 notatek o źródłach, 0 form drugiej osoby, 0 „autoryzowany”, 0 cen w treści, 0 emoji |

### 2a. Filtry (produkcja 75697df1)

- Zestawy filtrów: `/skanery-unitech` 26 kart; `/skanery-kodow-kreskowych/przewodowe` 51 (Unitech 10), `/bezprzewodowe` 48 (Unitech 12), `/prezentacyjne` 7 (TS100), `/pierscieniowe` 16 (MS633, MS652 Plus, MS626 Plus); `/terminale-naramienne` 4 (WD200 Plus).
- Upadki (pierwsza wysokość w wierszu): 2,0–2,2 m — MS852, MS852 Plus, MS852 DPM ESD, MS852 Plus ESD, MS851 ESD, MS852B, MS852B Plus, MS852P, MS852B Plus ESD, MS851B ESD (2,1 m); 1,8 m — MS852 LR i MS852B LR (etui 2,2 m w osobnym wierszu); do 1,5 m — pozostałe 14. Granit XP 1991i zostaje w 2,4–3 m (Honeywell: 2,4–3 m = 10, brak przedziału 2,0–2,2 m).
- Interfejsy: RS-232 tylko MS838 (MS838-2RCB00-SG); TS100 i MS282e bez RS-232 i bez Keyboard Wedge.
- Zastosowanie specjalne: Daleki zasięg — MS852 LR, MS852B LR, MS633; DPM — MS852 DPM ESD, MS852B Plus ESD. „Gęste kody (HD)” na produkcji obejmowało 4 karty Unitech (MS852 Plus, MS852 Plus ESD, MS852B Plus, MS852B Plus ESD) — po usunięciu nieudokumentowanego „High Density” (sekcja 3) Unitech nie trafia do tego filtra.
- WD200 Plus: filtr „Skaner” (`/terminale-unitech`, `/terminale-mobilne`) go nie obejmuje; „Złącza: USB-C” obejmuje; „Tylko Wi-Fi”, „Dotykowy”, „IP68” zgodnie z kartą.
- Liczniki innych marek: diff `category-filters.ts` od pierwszego wdrożenia skanerów Unitech zawiera trzy zmiany (opcja „Unitech”, nowy przedział „2,0–2,2 m”, dopisanie strony `skanery-unitech`), a dane produktów innych marek nie były zmieniane. Zmiana widoczna u innych marek: nowy przedział „2,0–2,2 m” z 6 kartami Datalogic PowerScan („2,0 m na beton”: PD9130, PD9531 DPM Evo na przewodowych, 4 na bezprzewodowych); Granit XP 1991i poza tym przedziałem.
- **Wykryta niespójność:** na `/skanery-datalogic` grupa „Odporność na upadki” miała teraz równocześnie „2,0–2,2 m” (6) i istniejące „2 m” (9), z tymi samymi 6 kartami. Poprawka w `category-filters.ts`: definicja strony Datalogic pomija nowy przedział (wraca stan sprzed wdrożenia: do 1,5 m 12, 1,8 m 8, 2,4–3 m 3, 2 m 9).

## 3. Poprawki wykonane (karta, było, jest, dowód)

Dowody: DS = karta katalogowa, UM = instrukcja, QSG = skrócona instrukcja, WWW = strona ute.com (`scratchpad/ute5a|ute5b`).

| Karta | Było | Jest | Dowód |
|---|---|---|---|
| MS852 Plus, MS852 Plus ESD, MS852B Plus, MS852B Plus ESD, `/skanery-unitech`, `llms.txt` | „High Density”/„HD”/„SR” w seoTitle, krótkim opisie, opisie, specyfikacji, nazwach wariantów, atrybucie „Optyka” z tooltipem, FAQ, tabeli modeli (ok. 30 miejsc) | Usunięte. Warianty V/Z (VUCB00/ZUCB00, VUBB0C/ZUBB0C) różnią się tylko PN, FAQ „Czym różnią się numery …” (konfigurację potwierdzamy przy zamówieniu). Tooltip i FAQ MS852B Plus z „Data Matrix 6,7 mil” usunięte (wartość z DS 1542, karty innego modelu) | `grep -i "high density"` w DS 131, 342, 536, 1542, UM 306/1159/2281/2287, QSG i `detail-*`: 0 trafień; „High Density” tylko u BarcodeFactory, ERS i Levata |
| MS851 ESD, MS852 DPM ESD (FAQ), `/skanery-unitech` | „długie kody liniowe” | „odczyt kodów 1D z dużej odległości” | DS 537: „capture long range 1D barcodes”, zasięg do 5 m |
| MS851 ESD, MS852 Plus ESD (FAQ), MS836 (FAQ), `/skanery-unitech`, `llms.txt` | „do 4,5 m” i „do 4,57 m” bez warunku | „do 4,57 m (Code 39 100 mil)” | DS 537, 1541: Code 39 100 mil 60,96–457,20 cm; UPC 13 mil do 63,5 cm |
| MS852 DPM ESD (FAQ 2) | „nie sprawiają problemu” | „czyta większość kodów 1D i 2D z etykiet oraz z ekranów” | DS 997: „Support most 1D / 2D barcode on mobile screens” |
| `/skanery-unitech` (porównanie DPM, FAQ DPM) | „kody czyta z odległości od 4 do 32 cm” | „głębia odczytu kodów drukowanych wynosi od 4 do 32 cm” | DS 997: tabela głębi dla Code 39, EAN-13, Data Matrix, QR (40–320 mm); dla znaków DPM brak zakresu |
| MS282e (FAQ 1, 3) | „Sense jest ustawieniem fabrycznym”; „w podstawce tryb prezentacyjny, po wyjęciu ze spustem” | „W trybie Sense …”; tryb prezentacyjny i ręczny wybierany kodem konfiguracyjnym | UM 3450 §2.6 „Sense Mode *”, QSG 3449 „Trigger mode*”; DS 1171: podstawka „optional”, bez przełączania |
| MS852 | „obudowa ma 147 g” | „skaner waży 147 g” | DS 3951 „Weight 147g without cable” |
| MS250 (FAQ 5, alt 1), `/skanery-unitech` | „Budżetowe skanery CCD”; „przyłożone do okna”; alt z „niebieskim spustem” | „Skanery 1D innych marek”; „od przyłożenia do okna do 90 mm”; alt bez niewidocznego na zdjęciu spustu | Broszura 121: „reading depth from contact to 90mm” |
| MS852 LR, MS851 ESD (alt zdjęć 3; 1 i 2) | „leżący na boku”, „z przodu pod kątem” | „widok z tyłu pod kątem na głowicę z napisem LR/ESD”, „widok z góry pod kątem” | obejrzane pliki PNG |
| MS836, MS838 | prawie identyczne zdanie o prefiksie i sufiksie | dwa różne sformułowania | DS 3482 „Prefix, Suffix, Code ID, Reformatting” |
| Podstawka 5200-900009G, uchwyt 5200-900011G, przewód 1550-905920G | „Żaden zestaw MS85x nie zawiera podstawki”; „wkręty płaskie”; „Nie jest podstawką hands-free”; „Obsługuje”; „wtyk w rękojeści skanera” dla wszystkich modeli; „strefy EPA” | „akcesorium opcjonalne”; „śruby z łbem płaskim i wkręty samogwintujące”; „Do pracy bez trzymania … przeznaczona jest podstawka”; „Pasuje do”; wtyk w rękojeści tylko w skanerach przewodowych; „także w wersjach ESD” | QSG 6119 „Flat-Head Screws/Self-Tapping Screws”, DS „Optional”; UM MS852B §1.1 (kabel łączy stację z komputerem) |
| MS852B | „Radzi sobie”, „rozróżnia Code 39 od 5 mil” (2×); FAQ o ładowaniu stacji z komputera | „Czyta”, „odczytuje”; „Zestaw z przewodem USB nie zawiera zasilacza …” | DS 4236 „Optical Resolution 5.0 mil”; UM 3878 §1.1 „(USB cable or RS232 cable + Power Adapter)” |
| MS838B, odbiornik 5500-900098G (opis) | parowanie przytrzymaniem przycisku 16 s jako domyślne; „przesyła je po powrocie”; „Wymienny akumulator” (MS838B, MS836B) | „wyjmuje się poprzedni odbiornik, skanuje kod 2.4G Receiver Pairing; 16 s działa po włączeniu funkcji (fabrycznie wyłączone)”; „Zapisane kody przesyła się kodem Upload all data”; „Wymienny” usunięte | UM 4015 §2.5 „Disable *”; §2.4.2 „Upload all data”; DS 3834 „upload … at your own convenience”; brak dowodu wymienności w DS/UM/WWW |
| MS836B (FAQ 4) | „Obudowa, radio i akcesoria są wspólne” | „Wymiary, radio i akcesoria są wspólne” | DS 3833/3834 (174 × 72 × 96 mm) |
| Podstawka 5200-900014G | „kody czyta się bez trzymania go w dłoni” | tryb prezentacyjny MS838, Auto Sense MS838B (fabrycznie wyłączony), MS836B ze spustem | UM 3488 (presentation), UM 4015 §2.4.1 „Auto Sense Mode Off *”, DS 3833 „Trigger Mode, Buffer Mode” |
| MS633 ładowarka 5100-900036G (opis, 2 wiersze) | „czerwona dioda ładowarki: zasilanie i ładowanie” | czerwona ładowarki: zasilanie; dioda gniazda: czerwona ładowanie, zielona naładowany | QSG 5717 s. 14 (sprawdzone na obrazie strony) |
| Bateria 1400-900055G; stacja 5000-900064G | „sześć wersji”; MS851B tylko w specyfikacji | „m.in.”; „a także MS851B” w opisie | arkusz akcesoriów MS851B, stacja |
| Bateria 1400-900076G | zasięg QR 18 m w krótkim opisie akumulatora | bez zasięgu | DS 5683: 12 m (nagłówek) i 18 m (tabela) |
| Podkładki i paski 5400-900043G, 5400-900044G (10 szt.) | „do uchwytów WD200 Plus” | „do uchwytu na nadgarstek 3210-900026G” | broszura 6269: „Replacement Pad/Strap for Wrist Holder” |
| MS633 (alt 2) | „widok z boku” | „widok z przodu pod kątem z drugiej strony, okno skanera” | obejrzane PNG |
| MS652 Plus | „Dwie podkładki”; „zasięg 100 m w linii widoczności”; pamięć 7,5 MB przypisana trybowi Auto (opis, FAQ); „moduł spustu” jako osobna pozycja zestawu; UM V1.5 w pobraniach | „Podkładka złożona z dwóch sklejanych części”; „w otwartej przestrzeni”; tryb Auto zapisuje w buforze, pamięć 7,5 MB osobno; „skaner z modułem spustu na dwa palce”; UM V1.5 usunięta z karty | UM 239 §1.4.3 „Paste two finger pads together”; DS 3974 „Open space”, „What comes in the box”; UM 239 s. 3–4: SE2707, 640 × 400, 10 m, 0–50°C (starsza wersja sprzętu, ute.com przypisuje PN MS652-AUDB00-SG do „UM V1.4”) |
| MS626 Plus | alt 1 i 4 „panel dotykowego spustu”; „kody od 3 mil”; „około 5 godzin” (opis, FAQ); „otwartej przestrzeni”; gwarancja 15 mies. | żółty panel z przyciskiem funkcyjnym i logo; „rozdzielczość optyczna 3 mil”; „do 5 godzin”; „w linii widoczności”; wiersz gwarancji usunięty | UM 6878 §1.2 (Function Button, NFC Area, Touch-Activated Trigger Button na boku); DS 6554 „up to 5 hours”, „66 ft / 20m (line of sight)”; WWW: pole „15 months”, zdanie „twelve months” |
| MS822B | gwarancja 36 mies. | wiersz usunięty (jak MS838, TS100, MS626 Plus) | WWW: „36 months” i „3-Year Warranty” obok „fifteen months” |
| `/skanery-unitech` (FAQ i „Co sprawdzić”) | MS626 Plus 15 mies., MS822B 36 mies. | oba w grupie „potwierdzamy przy zamówieniu” razem z MS838 i TS100 | jw. |
| MS912 Plus 2D, MS912 Plus | „otwartej przestrzeni” (20 m, 10 m); „najdrobniejsze kody 1D mają moduł 5 mil”; FAQ „w każdych warunkach oświetlenia” | „w linii widoczności”; „czyta kody 1D o module od 5 mil”; osobne zdanie o oświetleniu | DS 4697, 176 „line of sight” |
| WD200 Plus | „Aktualizacje oprogramowania dostarcza FOTA” | „Oprogramowanie układowe aktualizuje się przez FOTA, a aplikacje Unitech przez narzędzie Software Update” | DS 6052 s. 3 |
| Zasilacz 1010-900074G (krótki opis, seoDescription) | „szybkie ładowanie” łączone z WD200 Plus | szybkie ładowanie przypisane tylko do terminali EA i HT730 Plus | FAQ 6992: dla WD200 Plus zalecany zasilacz PD 3.0 |
| `/skanery-unitech` `contactText` | „Podaj rodzaj kodów …” | „W zapytaniu wystarczy rodzaj kodów …” | zasada bez drugiej osoby |
| `category-filters.ts` (strona Datalogic) | przedział „2,0–2,2 m” dublował „2 m” | przedział pominięty na `/skanery-datalogic` | sekcja 2a |

## 4. Miejsca o podwyższonym ryzyku — wynik

| Punkt | Wynik |
|---|---|
| Parowanie MS852P przez skan adresu MAC | Zgodne. UM 4709 §1.4.1: „Scan the MAC address on the dongle with MS852P”, odbiornik do USB, dźwięk niski-średni-wysoki; QSG 4692 to samo |
| Przyciski przewijania MS926 | Zgodne: 3 przyciski (Page Up, Page Down, Scan & Power); karta: dwa boczne przewijają, trzeci włącza i skanuje (DS 179, UM 5219) |
| Obracany zespół spustu MS633 | Zgodne: UM 5765 §1.4.1 „rotate the trigger assembly”, DS „One push rotate design” |
| Zasięg Bluetooth MS633 | Zgodne: „> 164.04ft./50m (without obstructions)” |
| DotCode w MS852 | Zgodne: DS 3951 (2D „DotCode”), UM 3941 „2026/6/18 Add Dot Code”, §3.15.20 (włączany kodem, fabrycznie wyłączony) |
| Podkładki 386268G / 386286G | Zgodne: dwie części jednej podkładki (grafika arkusza „386286G (Backing self adhesive)”, UM 239 §1.4.3); poprawiono kartę MS652 Plus („Dwie podkładki”). Zdjęcie karty 386286G pokazuje głównie 386268G (do decyzji) |
| Gwarancje | 60 mies.: MS852, Plus, LR, DPM ESD, Plus ESD, MS851 ESD, MS282e; 36: MS852B, B Plus, B LR, MS852P, B Plus ESD, MS851B ESD; 24: MS250; 15: MS836, MS838B, MS836B, MS633, MS652 Plus, MS912 Plus, MS912 Plus 2D, MS926 — zgodne z polem i zdaniem na ute.com. Brak wiersza (sprzeczne dane ute.com): MS838, TS100, MS626 Plus, MS822B |
| Zasięgi MS633 LR | DS 5683: nagłówek „Up to 12M (LR version)”, tabela: QR 200 mil 25–1800 cm, DM 200 mil 20–1440 cm, UPC 13 mil 6,4–180 cm; UM: ta sama tabela bez „12 m”. Karta podaje wartości z tabeli przy konkretnych kodach; zasięg usunięty z karty akumulatora. Do decyzji (sekcja 5) |
| „High Density” przy MS852 Plus i wersjach ESD | Brak w plikach Unitech, tylko dystrybutorzy: usunięte (sekcja 3) |
| Zestawy MS836-SUCBS0-SG, MS838-2UCB0S-SG, MS852B LR | MS836-SUCBS0-SG: UM 4311 skaner + QSG, podstawka i przewód opcjonalne; WWW „includes stand” — karta pisze „potwierdzamy przy zamówieniu” (bez zmian). MS838-2UCB0S-SG z podstawką: zgodne (UM 3488 „combo”), MS838-2RCB00-SG bez. MS852B LR: skaner z akumulatorem, stacja, przewód USB — zgodne (DS 1170, UM 2301 §1.1) |
| Złącze MS912-FUBB00-TG | Dokumenty niespójne: DS 176 i WWW „Mini USB”, zdjęcie 2 z gniazdem Mini USB; UM i QSG w pobraniach „for Type-C”. Tekst karty nie podaje typu złącza. Do decyzji |
| Nazwy silników skanujących | Żadna z 59 kart ani strona marki nie podaje nazwy silnika (SE4107, N6703, SE2707 tylko u dystrybutorów lub w starszej UM MS652) |
| Podstawka 5200-900014G a MS838, MS836B, MS838B | Zgodne: arkusze akcesoriów Unitech MS838, MS836B, MS838B; MS838B i MS836B mają w zestawie tylko skaner, odbiornik 2,4 GHz i przewód USB-C (UM 4015, 4017 §1.1) |
| Blok „Wymagane” WD200 Plus | PN zgodne: uchwyty 3210-900026G i 3210-900051G, zasilacz EU 1010-900074G (broszura 6269), stacja 5100-900030G z zasilaczem 5 V / 6 A i osobnym przewodem sieciowym (QSG 6218). Dokumenty Unitech nazywają uchwyty „Optional Accessories”; FAQ 6992 zaleca zasilacz PD 3.0, a 1010-900074G wg ERS to Quick Charge 3.0. Do decyzji |

## 5. Sprawy do decyzji właściciela

1. **„High Density” (V/Z).** Usunięte z kart, strony marki, `llms.txt` i filtra „Gęste kody (HD)”. Jeśli właściciel uzna zgodne wpisy ERS, Levata i BarcodeFactory za dowód, można przywrócić nazwę wariantu (bez parametrów optycznych: DS ma jedną tabelę zasięgów dla obu numerów).
2. **Gwarancje MS838, TS100, MS626 Plus, MS822B.** ute.com przeczy sobie (pole kontra zdanie), a Unitech pisze, że okresy zależą od regionu. Zalecane potwierdzenie z Unitech Europe i wpis do kart.
3. **Czas pracy „ponad” / „do”.** Tabele DS: „Over/>”, opisy cech i WWW: „up to”, DS 3833 w nagłówku „16 hours”. Karty (MS838B ponad 16 h, MS836B ponad 30 h, MS851B ESD ponad 30 h, MS822B ponad 40 h, MS852B Plus ponad 25 h) trzymają tabelę DS.
4. **MS852B LR:** DS i WWW 233 g, >12 h, 1,8 m (2,2 m w etui), UM 2301 253 g, >40 h, 2,1 m; karta = DS. Podobnie MS852 LR (UM 2,1 m), MS851 ESD (UM 2 m), MS838 (skos ±65°), MS250 (UM 75 mm) — karty = DS.
5. **MS633 LR:** 12 m (nagłówek DS) kontra 18 m (tabela); uchwyt na palec w zestawie wg DS i WWW, nie wg UM i QSG.
6. **MS652 Plus:** brak instrukcji V1.4 „for MS652-AXXXXX-XX” (przypisanej na ute.com do MS652-AUDB00-SG; pobranie wymaga zgody — nie wykonano). Do tego czasu karta ma tylko kartę katalogową. Czas pracy 9 h (DS Rev M) kontra 13/14 h (Rev J, nagłówek).
7. **MS912-FUBB00-TG:** typ złącza (Mini USB czy USB-C) i dopasowanie pobranych UM/QSG „Type-C”; QSG „Type-C” opisuje ten PN jako MS912M+ z trybem wsadowym 2 MB (karta tego nie podaje).
8. **WD200 Plus:** nagłówek „Wymagane” dla mocowania (dokumenty: opcja) i połączenie zasilacza 1010-900074G z czasem ładowania PD 3.0; PN 1550-602333G z „C13” potwierdza tylko ERS.
9. **Stacje bez przewodu:** ERS: 5000-900064G i 5000-900082G „without cable” — rozważyć blok „Wymagane” (przewód USB 1550-905920G albo RS-232 1550-905891G z zasilaczem 1010-900008G). Zasilanie stacji MS926 5100-900008G (Levata: „no PSU”) i MS652 5000-900044G (5 V / 3 A bez PN zasilacza).
10. **PN bez dwóch źródeł:** MS851-SUCB00-LG, MS852-AUBB0C-SG, MS852-OUBB0C-SG (jeden dystrybutor); MS852-VUBB0C-SG, MS851-SUBB0C-LG, MS626-PUBB00-SG (tylko API stanów, `found: true`). Nic im nie przeczy.
11. **Zestaw MS836-SUCBS0-SG** (UM: podstawka i przewód opcjonalne; WWW: w zestawie) oraz TS100 FAQ 1 (tryb żółty wg UM w nowszym oprogramowaniu na zamówienie), auto-przełączanie MS852/MS852 Plus (DS mówi o nim, UM dla PN SG nie): FAQ „Nie” bezpieczniejsze.
12. **JSON-LD „w dostawie”:** `OutOfStock` zgodnie z plakietką; można rozważyć `PreOrder`.
13. **Drobne:** plik „Instrukcja MS852B Plus ESD” to UM MS852B Plus v1.2 z 2020 r. (tak publikuje ute.com); karta MS851B ESD bez UM (Unitech ma 2289 V1.4); tekst komponentu „Wymagane” na stronie stacji 4-gniazdowej używa „potrzebujesz” (`required-accessory-copy.ts`, poza zakresem, dotyczy całego sklepu); uwaga o baterii 3500/5000 mAh na `/terminale-naramienne` dotyczy tylko Zebry.

## 6. Propozycje weryfikatorów niewdrożone

- „ponad” → „do” przy czasie pracy (sprzeczne dokumenty, patrz 5.3).
- Dopisanie trybu wsadowego i pamięci 2 MB do MS912 Plus, wzmianka o włączaniu DotCode w MS852 i przerobienie nagłówka bloku „Wymagane” WD200 Plus — uzupełnienia lub zmiany struktury, nie błędy.
- „od 7,6 cm do 21 m” dla MS852 LR i MS852B LR: zgodne z nagłówkiem DS 1170 („scanning range from 7.6cm near”).
- Zmiana nazwy pliku UM MS852B Plus ESD i dodanie UM do MS851B ESD (wymaga decyzji o plikach).

## 7. Załączniki: tabele per karta

Tabele (element, na stronie, dokument, ocena) sporządzili niezależni weryfikatorzy dla tekstów z produkcji 75697df1, czyli sprzed poprawek z sekcji 3. Ocena „niezgodne”, „brak” i propozycje są w tych tabelach w pierwotnym brzmieniu; decyzje koordynatora (co wdrożono, co do właściciela) opisują sekcje 3, 5 i 6. Skróty plików: `scratchpad/ute5a/oficjalne/`, `ute5b/oficjalne/`, `ute5a|b/web/`.

### Załącznik A: skanery przewodowe (11) i akcesoria MS85x / MS282e (5)

Źródło tekstów: `src/data/unitech-scanner-products.ts` i `src/data/unitech-scanner-accessories.ts` (worktree `wt-ute-v9`, commit 75697df1). Tooltipy atrybutów: per produkt (`variantAttributeTooltips` w karcie mają pierwszeństwo przed `variant-attribute-tooltips.ts`, VariantsTable.tsx:211).
Pliki do pobrania: wszystkie istnieją w `public/downloads/unitech/`; porównałem sumy MD5 z PDF-ami w `$SP/ute5a/oficjalne/` (każdy plik = oficjalny PDF Unitech) i rozmiary z `stat`.

#### Legenda dokumentów (pełne ścieżki: `$SP/ute5a/...`, `$SP` = `/private/tmp/claude-501/-Users-jakubtiuchty-takma/ac3db9fd-eaa6-4337-bc62-04cc01b87260/scratchpad`)

| skrót | plik |
|---|---|
| DS-852 | oficjalne/3951_MS852_RevD.pdf (05/26) |
| UM-852A | oficjalne/3941_MS852_UM_V1_4_for_MS852_AXXXXX_XX_20260618.pdf (MS852-AUCB00-SG / ARCB00-SG) |
| FAQ-852 | oficjalne/1856_FAQ-MS852_website.pdf |
| DS-852P | oficjalne/131_MS852_plus_RevE.pdf (08/23) |
| UM-852P | oficjalne/306_MS852Plus_UM_V1_6_20211126.pdf |
| FAQ-852P | oficjalne/678_FAQ-MS852_Plus_website.pdf |
| DS-LR / UM-LR / QSG-LR | oficjalne/1170_MS852LR_series_RevF(3).pdf / 1183_MS852LR_UM_V1_3_20230224.pdf / 1184_MS852LR-QSG-20200423.pdf |
| DS-DPM / UM-DPM | oficjalne/997_MS852DPM_RevB.pdf (04/25) / 6116_MS852_DPM_ESD_UM_V1_0_20250416.pdf (dla MS852-XUCB00-LG) |
| DS-PESD | oficjalne/536_MS852PLUS_ESD_RevC.pdf |
| DS-851 / UM-851 | oficjalne/537_MS851ESD_RevA.pdf / 2286_MS851_UM_20200513.pdf (V1.2) |
| DS-838 / UM-838 / QSG-838 / FAQ-838 | oficjalne/3482_MS838_RevG.pdf / 3488_MS838_UM_V2_1_20250408.pdf / 3487_MS838-QSG-20210225.pdf / 3945_FAQ-MS838_website_file.pdf |
| DS-282 / UM-282 / QSG-282 | oficjalne/1171_MS282e_RevC.pdf / 3450_MS282e_UM_20200824.pdf / 3449_MS282e-QSG-20200520.pdf |
| DS-836 / UM-836 / QSG-836 | oficjalne/3252_MS836_RevI.pdf / 4311_MS836_SW_UM_V2_4_20250408.pdf (SW decoder, „for P/N MS836-SUCBS0-SG”) / 4487_MS836_QSG_V2_0_20220822(1).pdf |
| DS-250 / UM-250 | oficjalne/121_MS250_Brochure_Rev_B_(1).pdf / 128_MS250_User_manual_20170803.pdf |
| DS-TS / UM-TS / FAQ-TS | oficjalne/4081_TS100_RevD.pdf / 4208_TS100__UM_V1_8_20241112.pdf / 4992_FAQ-TS100_website.pdf |
| QSG-STAND | oficjalne/6119_MS85x_Series_Hand_Free_Stand_QSG_V1_0_20240517.pdf |
| WWW-xxx | web/detail-xxx.txt (ute.com); dla bezprzewodowych `$SP/ute5b/web/detail-*.txt` |
| ACC-xxx | acc/acc-xxx.xlsx |
| dystr. | web/bf-* (BarcodeFactory), web/ers-* (ERS), web/lv-* (Levata) |

---

#### unitech-ms852 (MS852-AUCB00-SG)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS852”; „czytnik 2D USB do kasy” | DS-852: „2D Imager Scanner”, retail/POS | zgodne |
| shortDescription | do kas w handlu i hotelarstwie, ekrany telefonów, OCR, 147 g, IP42 | DS-852: „retail, hospitality and government”, „Support OCR, most 1D/2D barcode on mobile screens”, „147g without cable”, „IP42” | zgodne |
| seoDescription | 2D z OCR, ekrany, 147 g, IP42, upadki z 2,1 m; PN MS852-AUCB00-SG | DS-852 jw. + „2.1M onto concrete”; UM-852A s. tytułowa „MS852 (MS852-AUCB00-SG)” | zgodne |
| opis §1 | kasy: karty lojalnościowe, płatności mobilne, e-kupony; hotelarstwo, administracja; etykiety, ekrany, uszkodzone/blade, OCR | DS-852 wstęp i „Simple and Affordable” | zgodne |
| opis §2 | CMOS 1280 × 960 rolling shutter, zielony celownik LED 610 nm, 1 ciepła biała LED; DotCode, Han Xin, Mailmark, UPU FICS, UK Postal | DS-852 tabela; 2D: „QR Code, DotCode, Data Matrix…”; Postal: „UK Postal… UPU FICS Postal, Mailmark” | zgodne |
| opis §3 | UPC 100% 4,6–49,5 cm; QR 20 mil 3,8–29,2 cm; DM 10 mil 7,4–21,6 cm; ±60°/±60°, obrót dowolny | DS-852 DOF i „Skew ±60°, Pitch ±60°, Roll 0-360°” | zgodne |
| opis §4 | „Bez przewodu obudowa ma 147 g”; mocniejszy brzęczyk i jaśniejsze diody, ciemne miejsce; USB bez instalacji; 235 / 60 mA | DS-852: „147g without cable” (masa skanera, nie obudowy); „louder beeper… even in dark environment”; „no need to do any additional installation”; „Operating: 235mA Standby: 60mA” | zgodne (drobna nieścisłość „obudowa”) |
| opis §5 | w pudełku skaner i przewód; tryb prezentacyjny kodem; osobna podstawka | DS-852 „Package Contents Scanner + Cable”, „Standard Hands Free Stand (Optional)”; UM-852A 2.4 „Presentation (Blink)” | zgodne |
| spec: typ, matryca, celownik/oświetlenie | jw. | DS-852 | zgodne |
| spec: kody 1D, 2D, pocztowe + OCR | listy | DS-852 Symbologies (1D, 2D, Postal), „Support OCR” | zgodne |
| spec: rozdzielczość, kontrast | 5,0 mil C39, 6,6 mil PDF417; 20% | DS-852 | zgodne |
| spec: zasięg | UPC 4,6–49,5; C39 5 mil 6,1–24,1; QR 20 mil 3,8–29,2; DM 10 mil 7,4–21,6 cm | DS-852 DOF | zgodne |
| spec: kąty, interfejs | ±60/±60/0–360; USB | DS-852; UM-852A (AUCB = USB) | zgodne |
| spec: zasilanie | 5 V ±10%; 235 / 60 mA | DS-852 „DC 5V +/- 10%” | zgodne |
| spec: IP, upadki, ESD | IP42; 2,1 m beton (sam skaner); 8 kV / 15 kV | DS-852 „IP42”, „2.1M onto concrete (scanner only)”, „8K Contact and 15K Air” | zgodne |
| spec: temperatury, wilgotność | −10…+50; przechowywanie −20…+60; 95% | DS-852 i UM-852A s. 4: „-20°C to 60°C”; WWW-852: „-40°C to +70°C” | zgodne z DS (rozbieżność WWW — do decyzji) |
| spec: wymiary, masa, spust | 87,8 × 71,6 × 177,7 mm; 147 g; 10 mln | DS-852 | zgodne |
| spec: zestaw / poza zestawem | skaner, przewód USB / podstawka | DS-852; UM-852A 1.1 (skaner, kabel, QSG) | zgodne |
| spec: certyfikaty / gwarancja | CE, FCC, BSMI, VCCI / 60 miesięcy | DS-852; WWW-852 „Hardware Warranty 60 months” i „five years” | zgodne |
| applications | kasy (lojalność, płatności, e-kupony); hotelarstwo i gastronomia; administracja | DS-852 „retail, hospitality and government” | zgodne („gastronomia” = tłumaczenie hospitality) |
| variants | MS852-AUCB00-SG „MS852, USB” | UM-852A tytuł | zgodne |
| FAQ 1 | brak czujnika w podstawce; tryb prezentacyjny kodem; podstawka 5200-900009G | WWW-852: dokumenty auto-switching tylko dla „P/N: MS852-2UCB00-OG”; UM-852A (dla AUCB00) bez rozdziału o auto-switching, tryby 2.4; ACC-852 „Hand Free Stand PN#5200-900009G” | zgodne (uwaga: pobierana DS-852 mówi o „Auto switching… with its stand” — do decyzji) |
| FAQ 2 | OPOS od FW PAADLS00-002-R00 | FAQ-852: „Do MS852 support OPOS? Yes… FW version PAADLS00-002-R00 or later” | zgodne (FAQ z 05/2022 nie podaje PN) |
| FAQ 3 | celownik gaśnie po ok. 10 min w Presentation (Blink) i Auto Aim with Illumination; ochrona termiczna | FAQ-852: „Aimer will disappeared after 10 mins… engine's heat protection mechanism” | zgodne |
| FAQ 4 | drugi znak PN: U = USB, R = RS-232 | FAQ-852: „distinguish by second letter… "R"… RS-232… "U"… USB”; UM-852A: AUCB00 / ARCB00 | zgodne |
| FAQ 5 | alternatywy: MS852 Plus (ruch, Digimarc), MS838 (RS-232, IP52), MS282e (125 g) | DS-852P, DS-838, DS-282 | zgodne |
| DotCode | „Lista symboli obejmuje DotCode” | DS-852 2D „DotCode”; UM-852A change log „2026/6/18 Add Dot Code”, 3.15.20 „Dot Code… Enable” (fabrycznie wyłączony) | zgodne |
| imageDescriptions 1–4 | przód pod kątem z żółtym spustem; przód; tył głowicy; tył głowicy z logo | obejrzane pliki MS852-AUCB00-SG(-2,-3,-4).png | zgodne |
| downloads | DS 1,1 MB; UM 5,3 MB | = 3951_MS852_RevD.pdf (1 188 984 B); = UM-852A (5 568 918 B = 5,3 MiB) | zgodne |
| relatedAccessories | 5200-900009G, 5200-900011G, 386793G, 1550-905920G | ACC-852 i WWW-852 „Accessories” | zgodne |

Niezgodności i propozycje:
- opis §4: „Bez przewodu obudowa ma 147 g.” → „Bez przewodu skaner waży 147 g.” (DS-852 „Weight 147g without cable”).
- opcjonalnie (opis §2): „Lista symboli obejmuje DotCode…” → „Lista symboli obejmuje DotCode (włączany kodem konfiguracyjnym), Han Xin…” (UM-852A 3.15.20: DotCode włącza się kodem „Enable”, wyłącza przywróceniem ustawień fabrycznych).

Do decyzji właściciela:
- Temperatura przechowywania: DS-852 i UM-852A „-20°C to 60°C”, WWW-852 „-40°C to +70°C”. Karta podaje wartość z DS — zostawić.
- Pobierana karta katalogowa DS-852 (wspólna dla serii) opisuje „Auto switching function between trigger mode and presentation mode with its stand”, a FAQ karty mówi, że MS852-AUCB00-SG nie ma czujnika. FAQ jest zgodne z UM-852A i podziałem dokumentów na WWW-852, ale klient może to odebrać jako sprzeczność. Propozycja: zostawić FAQ; ewentualnie dodać: „Automatyczne przełączanie trybu mają tylko wersje MS852 z podstawką Auto Switching”.

#### unitech-ms852-plus (MS852-VUCB00-SG, MS852-ZUCB00-SG)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS852 Plus”; „global shutter, DotCode, Digimarc” | DS-852P: „1280 X 800 global shutter”, „Support OCR, Dot codes, and Digimarc barcodes” | zgodne |
| shortDescription | global shutter, ruch, DotCode, Digimarc, OCR; „wersje z optyką standardową i High Density” | DS-852P zgodne; „High Density” i „standardowa” — brak w DS-852P, UM-852P, FAQ-852P, WWW-MS852PLUS (WWW wymienia tylko „P/N: MS852-VUCB00-SG/MS852-ZUCB00-SG” razem) | brak (HD) |
| seoDescription | global shutter, ruch, DotCode, Digimarc, OCR, USB, IP42; PN V i Z | DS-852P; WWW-MS852PLUS (PN) | zgodne |
| opis §1 | 1280 × 800 global shutter toleruje ruch | DS-852P: „excellent motion tolerance design… read bar code while moving” | zgodne |
| opis §2 | OCR (paszport), DotCode (opony, paczki papierosów), Digimarc (opakowania); Grid Matrix, Han Xin; 3 mil; do 100 000 lx | DS-852P wstęp, 2D „Chinese Sensible (Han Xin), Grid Matrix, Dot Code”, „1D 3mil”, „100,000 Lux (Sunlight)” | zgodne |
| opis §3 | lotniska, kasy z kuponami, logistyka, produkcja; C39 20 mil do 80 cm | DS-852P wstęp i „retail, logistics, manufacturing…”; DOF „20 mil Code 39… 80 cm” | zgodne |
| opis §4 | 252 / 77 mA; IP42; 2,1 m; Australian Post, British Post, Postnet | DS-852P | zgodne |
| opis §5 | „Karta obejmuje dwie wersje optyki: standardową (V) i High Density (Z)”; przewód USB; 165 g; żadna wersja nie przełącza trybu w podstawce | „High Density”: brak w dokumentach Unitech (tylko dystr.: lv „MS852+, Adv. Imager/HD… no-auto switching MS852-ZUCB00-SG”; ERS „High Density 2D Imager” dla ZUCB00-OG; BarcodeFactory „High Density” dla ZUCB00-OG); brak przełączania: WWW-MS852PLUS „User's Manual V1.6 (for non Auto Switching only) P/N: MS852-VUCB00-SG/MS852-ZUCB00-SG”; 165 g, przewód: DS-852P | brak (HD); reszta zgodne |
| spec: typ | „wersje standardowa i High Density” | jw. | brak (HD) |
| spec: matryca | 1280 × 800, global shutter, tolerancja ruchu | DS-852P | zgodne |
| spec: celownik i oświetlenie | czerwony laser; białe LED | DS-852P „Red laser”, „White LED”; WWW-MS852PLUS „Red laser or 528 nm visible green LED”, „White or Red LED” | zgodne z DS (rozbieżność — do decyzji) |
| spec: kody 1D, 2D, pocztowe, OCR, Digimarc | listy | DS-852P Symbologies + Features | zgodne |
| spec: rozdzielczość, zasięg, światło, kąty | 3 mil, 20%; UPC 13 mil 3,4–57,3; C39 20 mil 3,5–80; C128 15 mil 3,4–65; DM 10 mil 7,2–29,7; QR 15 mil 3,3–39 cm; 100 000 lx; ±60/±60/360° | DS-852P | zgodne |
| spec: interfejs, zasilanie | USB; 4–5,5 V; 252 / 77 mA | DS-852P (USB/RS232; PN z U = USB wg FAQ-852P) | zgodne |
| spec: IP, upadki, ESD, temp., wilgotność | IP42; 2,1 m; 8/15 kV; −10…+50; −40…+70; 95% | DS-852P | zgodne |
| spec: wymiary, masa, spust, zestaw, certyfikaty | 87,8 × 71,6 × 177,7; 165 g; 10 mln; skaner + przewód; CE, FCC, BSMI, VCCI | DS-852P | zgodne |
| spec: gwarancja | 60 miesięcy | WWW-MS852PLUS „60 months”, „five years” | zgodne |
| applications | bilety mobilne na lotniskach; kasy i kupony; produkcja i logistyka; DotCode na oponach i papierosach | DS-852P | zgodne |
| variants: name / atrybut „Optyka” | V: „optyka standardowa”, „Standardowa”; Z: „MS852 Plus High Density”, „High Density (HD)” | brak w dokumentach Unitech (dystr. jw.) | brak |
| tooltip „Optyka” | Standardowa — typowe zadania; HD — „kody o bardzo małym module, drobne i gęsto drukowane” | brak w dokumentach Unitech | brak |
| FAQ 1 | MS852 Plus 1280 × 800 global shutter vs MS852 1280 × 960 rolling; tylko Plus czyta Digimarc; 165 vs 147 g | DS-852P, DS-852 (DS-852 bez Digimarc) | zgodne |
| FAQ 2 | HD do kodów o bardzo małym module; standard do typowych etykiet; „Zasięgi w specyfikacji nie są podane osobno dla wersji High Density.” | HD: brak; ostatnie zdanie to notatka o źródłach danych | brak + styl |
| FAQ 3 | DotCode: kod z punktów, opony i papierosy | DS-852P | zgodne |
| FAQ 4 | obie wersje USB; RS-232 = litera R zamiast U | FAQ-852P: „MS852+ (MS852-ZUCB00-SG) are all USB interface… second letter… "R"… RS-232” | zgodne |
| FAQ 5 | alternatywy: Plus ESD, LR (21 m), inne marki | DS-PESD, DS-LR | zgodne |
| imageDescriptions 1–4 | przód pod kątem; bok; góra pod kątem; zielony wskaźnik | obejrzane MS852-VUCB00-SG(-2..-4).png | zgodne |
| downloads | DS 868 KB; UM 9,1 MB; QSG 1,2 MB | = 131_MS852_plus_RevE.pdf (888 813 B); = 306 UM V1.6 (9 552 356 B); = 2282/305 QSG V1.1 (1 214 476 B) | zgodne (WWW podaje już QSG V1.2) |
| relatedAccessories | 4 akcesoria MS85x | ACC-MS852PLUS | zgodne |

Niezgodności i propozycje (brak dowodu Unitech dla „High Density”):
- shortDescription: „…Digimarc i OCR; wersje z optyką standardową i High Density.” → „…Digimarc i OCR; dwie wersje: MS852-VUCB00-SG i MS852-ZUCB00-SG.”
- opis §5: „Karta obejmuje dwie wersje optyki: standardową (MS852-VUCB00-SG) i High Density (MS852-ZUCB00-SG).” → „Dostępne są dwie wersje: MS852-VUCB00-SG i MS852-ZUCB00-SG.”
- spec „Typ skanera”: „…przewodowy; wersje standardowa i High Density” → „Ręczny skaner 2D (imager), przewodowy”.
- variants: Z „MS852 Plus High Density, USB” → „MS852 Plus, USB (MS852-ZUCB00-SG)”; atrybut „Optyka” i tooltip — usunąć albo zastąpić wartością potwierdzoną w dokumencie Unitech.
- FAQ 2 — usunąć w całości (oparte na HD i zawiera notatkę o źródłach: „Zasięgi w specyfikacji nie są podane osobno…”).

Do decyzji właściciela:
- „High Density” dla MS852-ZUCB00-xx potwierdzają trzech dystrybutorów (BarcodeFactory, ERS, Levata; lv: „Adv. Imager/HD”), ale żaden plik Unitech. Wg briefu bez dokumentu Unitech — usunąć. Jeśli właściciel uzna dystrybutorów za wystarczające, i tak trzeba usunąć opis „kody o bardzo małym module” lub podać źródło, bo zasięgi w DS-852P nie rozróżniają wersji.
- Celownik i oświetlenie: DS-852P „Red laser / White LED”, WWW-MS852PLUS „Red laser or 528 nm visible green LED / White or Red LED”. Karta = DS. Zostawić albo podać „czerwony laser lub zielona dioda 528 nm; białe lub czerwone LED”.
- Pobierana DS-852P opisuje „Auto switching… with its stand”, a karta mówi, że żadna wersja -SG nie przełącza trybu (zgodnie z WWW-MS852PLUS). Jak przy MS852.

#### unitech-ms852-lr (MS852-OUCB00-SG)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS852 LR”; „kody 2D do 21 m” | DS-LR: „scanning range up to 21m” | zgodne |
| shortDescription / seoDescription | 7,6 cm–21 m; przewód USB i Y w zestawie; od −20°C; USB; PN OUCB00-SG | DS-LR: „from 7.6cm near… to 21m far”; Package „USB Interface Cable, Y cable”; „-20°C to +50°C (MS852 LR)”; PN: WWW-MS852LR | zgodne |
| opis §1 | 7,6 cm–21 m; palety i półki; QR 100 mil do 20,9 m; C39 100 mil (papier) 17,8 m; C128 15 mil 2,5 m | DS-LR: „100 mil QR Code… 2085.0cm”, „100 mil Code 39 (paper)… 1778.0 cm”, „15 mil Code 128… 254.0 cm”, „pallets or shelf” | zgodne |
| opis §2 | 1280 × 800 global shutter, celownik 655 nm, Hyper Red 660 nm; OCR, DotCode, ekrany; tolerancja ruchu | DS-LR | zgodne |
| opis §3 | 1,8 m; z etui 386793G 2,2 m; −20…+50°C; 710 mA | DS-LR „1.8M onto concrete (2.2M with protection case)”; WWW-MS852LR „Protective Case (PN#386793G)”; „Operating: 710mA” | zgodne |
| opis §4 | w zestawie przewód USB i Y; Y zasila z dwóch portów USB 2.0 bez USB 3.0; w USB 3.0 zwykły przewód | UM-LR 1.1 i QSG-LR: „Y cable is designed for the PC… without USB 3.0 port… additional power supply from two USB 2.0 ports” | zgodne |
| opis §5 | 1D od 3 mil, kontrast 25%; 184 g | DS-LR „3.0 mil (Code 39)”, „25%”, „184g (MS852 LR)” | zgodne |
| spec: typ, matryca, celownik | jw. | DS-LR | zgodne |
| spec: kody 1D i 2D | lista + OCR, pocztowe | DS-LR Symbologies | zgodne |
| spec: rozdzielczość, zasięg | 3,0 / 5,0 mil, 25%; C39 10 mil 7,6–215,9; C128 15 mil 15,2–254; C39 100 mil 50,8–1778; QR 100 mil 40–2085; DM 10 12,7–114,3 cm | DS-LR DOF | zgodne |
| spec: światło, kąty, interfejs, zasilanie | 107 639 lx; ±60/±60/0–360; USB; 4–5,5 V, 710 / 79 mA | DS-LR | zgodne |
| spec: IP, upadki, etui | IP42; 1,8 m; 2,2 m w etui 386793G | DS-LR; WWW-MS852LR | zgodne z DS (UM-LR podaje 2,1 m — do decyzji) |
| spec: ESD, temp., wilgotność | 8/15 kV; −20…+50; −40…+70; 95% | DS-LR | zgodne |
| spec: wymiary, masa, spust | 87,8 × 71,6 × 177,7; 184 g; 10 mln | DS-LR | zgodne |
| spec: zestaw / poza zestawem | skaner, USB, Y / podstawka, etui | DS-LR Package; „Standard Hands Free Stand (Optional)” | zgodne |
| spec: certyfikaty / gwarancja | CE, FCC, BSMI, VCCI / 60 mies. | DS-LR „MS852LR : CE, FCC, BSMI, VCCI”; WWW-MS852LR „60 months”, „five years” | zgodne |
| applications | palety i regały; daleki odczyt w logistyce; produkcja | DS-LR; WWW-MS852LR tagi „Warehousing… Manufacturing” | zgodne |
| variants | OUCB00-SG „MS852 LR, USB, przewód Y” | DS-LR Package | zgodne |
| FAQ 1 | 21 m tylko ze spustem; w trybach automatycznych zasięg ograniczony | FAQ-852: „Does MS852LR keep long-range decoding in Automatic aiming mode? No… reading distance… is limited” | zgodne |
| FAQ 2 | przewód Y, 710 mA | UM-LR 1.1; DS-LR | zgodne |
| FAQ 3 | etui nie w zestawie; 1,8 / 2,2 m | DS-LR | zgodne |
| FAQ 4 | MS852 LR −20…+50; MS852B LR −10…+50 | DS-LR Operating Temperature | zgodne |
| FAQ 5 | alternatywy: MS852 Plus do 80 cm; Zebra, Honeywell | DS-852P | zgodne |
| imageDescriptions | 1: bok, żółty spust; 2: przód pod kątem; 3: „skaner leżący na boku, na głowicy napis LR i logo” | obejrzane MS852-OUCB00-SG(-2,-3).png; zdj. 3 to widok z tyłu na głowicę (skaner poziomo), nie „na boku” | 1–2 zgodne; 3 drobna nieścisłość |
| downloads | DS 1,3 MB; UM 8,0 MB; QSG 1,3 MB | = 1170 DS (1 357 917 B); = 1183 UM V1.3; = 1184 QSG | zgodne |
| relatedAccessories | 4 akcesoria MS85x | ACC-MS852LR (stand, desktop/wall, 386793G, 1550-905920G) | zgodne |

Niezgodności i propozycje:
- imageDescriptions[2]: „skaner leżący na boku, na głowicy napis LR i logo unitech” → „widok z tyłu na głowicę z napisem LR i logo unitech oraz rękojeść”.

Do decyzji właściciela:
- Upadek: DS-LR i WWW-MS852LR „1.8M onto concrete (2.2M with protection case)”, UM-LR 1.3 „Mechanical Shock 2.1M onto concrete”. Karta = DS (bezpieczniej) — zostawić.

#### unitech-ms852-dpm-esd (MS852-XUCB00-LG)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS852 DPM ESD”; „kody grawerowane 2D” | DS-DPM | zgodne |
| shortDescription | DPM w strefach ESD; grawer laserowy, mikroudar, atrament; krzyżowy celownik laserowy; 60 FPS | DS-DPM: „laser etched marking, dot peening and ink jet printing”, „Red cross laser aiming”, „60FPS” | zgodne |
| seoDescription | obudowa i przewód ESD-safe; USB HID i CDC; PN XUCB00-LG | DS-DPM „USB (HID; CDC)”; WWW: UM/QSG „for MS852-XUCB00-LG” | zgodne |
| opis §1 | DPM: grawer, nabijanie, atrament; identyfikacja przez cały cykl życia, np. na chipach | DS-DPM: „permanent identifier… full life-cycle”, „DPM on chips” | zgodne |
| opis §2 | dodatek antystatyczny; 10⁵–10⁹ Ω/sq; bez chloru; cleanroomy i strefy ESD | DS-DPM „105~109 ohms per square and no containing Chlorine” (wykładniki zgubione w tekście PDF) | zgodne |
| opis §3 | krzyżowy celownik; 1280 × 800; 60 FPS; DM 10 mil 40–140 mm; QR 20 mil 40–200 mm; USB HID/CDC | DS-DPM i UM-DPM 1.3 | zgodne |
| opis §4 | produkcja, motoryzacja, lotnictwo, elektronika, opieka zdrowotna; śledzenie części, kontrola jakości; w zestawie skaner, przewód USB, QSG; podstawka i etui osobno | DS-DPM wstęp; UM-DPM 1.1 „MS852 DPM ESD Scanner, USB Cable, Quick Start Guide… Optional Accessories: Standard Hands Free Stand, Protective Case” | zgodne |
| opis §5 | QR, Aztec, DM, PDF417, GS1 DataBar; ekrany; 165 g bez przewodu; 252 mA | DS-DPM | zgodne |
| spec: typ, matryca, celownik | jw. | DS-DPM | zgodne |
| spec: kody 1D, 2D (+ DPM) | listy | DS-DPM Symbologies | zgodne |
| spec: zasięg | C39 5 mil 50–140; C39 20 mil 160–320; EAN-13 13 mil 50–200; DM 10 mil 40–140; QR 20 mil 40–200 mm | DS-DPM DOF | zgodne |
| spec: kąty, interfejs, ESD-safe | ±60/±60/±360°; USB (HID, CDC); 10⁵–10⁹ Ω/sq, bez chloru | DS-DPM | zgodne |
| spec: zasilanie, IP, upadki, ESD-odporność | 4–5,5 V, 252/77 mA; IP42; 2,1 m; 8/15 kV | DS-DPM | zgodne |
| spec: temp., wilgotność, wymiary, masa, spust | −10…+50; −40…+70; 95%; 87,8 × 71,6 × 177,7; 165 g bez przewodu; 10 mln | DS-DPM | zgodne |
| spec: zestaw / poza zestawem / certyfikaty / gwarancja | skaner, USB, QSG / podstawka, etui / CE, FCC, BSMI, VCCI / 60 mies. | UM-DPM 1.1; DS-DPM; WWW-MS852_DPM_ESD „60 months” | zgodne |
| applications | DPM w produkcji; motoryzacja i lotnictwo; elektronika i kontrola jakości; opieka zdrowotna i medycyna | DS-DPM | zgodne |
| FAQ 1 | DPM: trzy techniki, trwały kod | DS-DPM „DPM technology” | zgodne |
| FAQ 2 | zwykłe etykiety i ekrany „nie sprawiają problemu”; brak OCR i kodów pocztowych | DS-DPM: „Support most 1D / 2D barcode on mobile screens” — „most”, nie „wszystkie”; listy bez OCR/pocztowych | nadinterpretacja + kolokwializm |
| FAQ 3 | DM 40–140 mm; QR 40–200; C39 20 mil 160–320 | DS-DPM | zgodne |
| FAQ 4 | klawiatura (domyślnie) lub wirtualny COM; COM wymaga sterownika | UM-DPM 2.4: „USB Keyboard*”, „USB Virtual COM Port mode requires driver installation” | zgodne |
| FAQ 5 | alternatywy: Plus ESD; „Długie kody liniowe czyta MS851 ESD”; Newland, Datalogic | DS-851: „capture long range 1D barcodes” = odczyt z dużej odległości, nie „długie kody” | niezgodne (błąd tłumaczenia) |
| imageDescriptions 1–4 | przód pod kątem; okno z soczewką; głowica z oznaczeniem ESD; góra pod kątem | obejrzane MS852-XUCB00-LG(-2..-4).png | zgodne |
| downloads | DS 853 KB; UM 2,6 MB; QSG 5,5 MB | = 997 DS RevB; = 6116 UM V1.0 (dla XUCB00-LG); = 6112 QSG V1.0 (dla XUCB00-LG) | zgodne |
| relatedAccessories | 4 akcesoria MS85x | ACC-MS852DPM_ESD | zgodne |

Niezgodności i propozycje:
- FAQ 2: „Tak. Etykiety z kodami liniowymi i dwuwymiarowymi oraz kody wyświetlane na ekranach urządzeń mobilnych nie sprawiają problemu.” → „Tak. Skaner czyta większość kodów 1D i 2D z etykiet i z ekranów urządzeń mobilnych.” (DS-DPM „Support most 1D / 2D barcode on mobile screens”).
- FAQ 5: „Długie kody liniowe czyta [Unitech MS851 ESD]…” → „Kody 1D z dużej odległości (Code 39 100 mil do 4,57 m) czyta [Unitech MS851 ESD]…” (DS-851).

#### unitech-ms852-plus-esd (MS852-ZUCB00-LG)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 | „Unitech MS852 Plus ESD” | DS-PESD „MS852+ ESD” | zgodne |
| seoTitle | „…— High Density, USB” | HD: brak w DS-PESD, WWW-MS852_plus_ESD, FAQ (4308); tylko dystr. ERS „MS852-PLUS HD ESD 2D High Density Imager” (ers-p10261, ers-acc-MS852-ZUCB00-LG), BarcodeFactory (bf-ms852 „High Density”) | brak (HD) |
| shortDescription | „ESD-safe i High Density”; EPA, cleanroomy; OCR, DotCode, Digimarc, USB | DS-PESD (poza HD) | brak (HD), reszta zgodne |
| seoDescription | „2D w wersji High Density”; ESD-safe obudowa i przewód; OCR, DotCode, Digimarc; ruch; USB; PN ZUCB00-LG | jw. | brak (HD), reszta zgodne |
| opis §1 | cleanroomy, strefy ESD; optyka MS852 Plus w obudowie i z przewodem antystatycznym | DS-PESD wstęp i „including its cable” | zgodne |
| opis §2 | „Wersja MS852-ZUCB00-LG ma optykę High Density do kodów o małym module”; 1280 × 800 global shutter; ruch; ekrany, OCR, DotCode, Digimarc; C39 20 mil 80 cm; UPC 13 mil 3,4–57,3; DM 10 mil 7,2–29,7; 252 mA | HD: brak; reszta DS-PESD | brak (HD); reszta zgodne |
| opis §3 | 10⁵–10⁹ Ω/sq; dodatek w masie tworzywa; link do /skanery-unitech | DS-PESD „internal mixed way with antistatic agent” | zgodne (strona `src/app/skanery-unitech` istnieje, FAQ o ESD) |
| opis §4 | USB; handel, logistyka, produkcja; 165 g; przewód USB w zestawie; podstawka osobno | DS-PESD „Host Interface supported USB”, „retail, logistics, manufacturing…”, „Scanner + Cable”, „Standard Hands Free Stand (Optional)” | zgodne |
| spec: typ | „Ręczny skaner 2D High Density…” | jw. | brak (HD) |
| spec: matryca, kody 1D/2D/pocztowe, OCR, Digimarc | jw. | DS-PESD | zgodne |
| spec: rozdzielczość, zasięg, światło, kąty | 3 mil, 20%; UPC 3,4–57,3; C39 20 mil 3,5–80; C128 15 mil 3,4–65; DM 7,2–29,7; QR 15 mil 3,3–39 cm; 100 000 lx; ±60/±60/360° | DS-PESD | zgodne z DS (patrz „Do decyzji”: czy dotyczą wersji Z) |
| spec: interfejs, ESD-safe, zasilanie | USB; 10⁵–10⁹ Ω/sq, bez chloru; 4–5,5 V, 252/77 mA | DS-PESD | zgodne |
| spec: IP, upadki, ESD, temp., wilg., wymiary, masa, spust | IP42; 2,1 m; 8/15 kV; −10…+50; −40…+70; 95%; 87,8 × 71,6 × 177,7; 165 g; 10 mln | DS-PESD | zgodne |
| spec: zestaw / poza / certyfikaty / gwarancja | skaner, przewód USB / podstawka / CE, FCC, BSMI, VCCI / 60 mies. | DS-PESD; WWW-MS852_plus_ESD „60 months”, „five years” | zgodne |
| applications | cleanroomy i EPA; produkcja chroniona przed ładunkami; „Magazyn i logistyka w strefach ESD” | DS-PESD; WWW tagi „Warehousing, Manufacturing” | zgodne |
| variants | „MS852 Plus High Density ESD, USB” | HD: brak | brak |
| FAQ 1 | ta sama optyka; obudowa i przewód antystatyczne; „wyłącznie interfejs USB”; „wariant High Density”; MS852 Plus „w wersjach standardowej i HD” | DS-PESD „Host Interface supported USB” (WWW-MS852_plus_ESD: spec „USB”, ale tag „RS232” i w pudełku „Interface cable (RS232 / USB cable)”); HD: brak | brak (HD); „wyłącznie” — do decyzji |
| FAQ 2 | Plus ESD: ekrany, OCR, DotCode, Digimarc do 80 cm; DPM ESD: DM 10 mil 4–14 cm | DS-PESD; DS-DPM | zgodne |
| FAQ 3 | przewód antystatyczny w zestawie; zapasowy 1550-905920G | DS-PESD „including its cable”; ACC-MS852_plus_ESD „USB cable with ESD enhanced PN#1550-905920G” | zgodne |
| FAQ 4 | dodatek w masie, uzupełnia warstwę przy przecieraniu | DS-PESD: „internal mixed antistatic agent can continue to add antistatic agent to the plastic surface” | zgodne |
| FAQ 5 | MS851 ESD do 4,5 m; MS852 Plus; Zebra, Newland | DS-851 (457,2 cm) | zgodne |
| imageDescriptions 1–2 | ESD-safe, góra i przód; przód pod kątem; „zdjęcie poglądowe” | obejrzane MS852-ZUCB00-LG(-2).png; zdj. 2 = ten sam plik co MS851-SUCB00-LG-3.png (zdjęcie MS851 ESD) — opisane jako poglądowe | zgodne |
| downloads | DS 404 KB; UM 4,2 MB; QSG 1,2 MB | = 536 DS RevC; = 2281 MS852Plus UM V1.5 (WWW: „MS852Plus ESD User Manual V1.5… 4.2MB”); = QSG V1.1 (WWW: „ESD Quick Start Guide V1.1 … 1.2MB”) | zgodne |
| relatedAccessories | 4 akcesoria MS85x | ACC-MS852_plus_ESD | zgodne |

Niezgodności i propozycje (HD bez dowodu Unitech):
- seoTitle: „Skaner 2D ESD Unitech MS852 Plus ESD — High Density, USB” → „Skaner 2D ESD Unitech MS852 Plus ESD — OCR, DotCode, USB”.
- shortDescription: „…w wersji ESD-safe i High Density do kodów drukowanych…” → „…w wersji ESD-safe do kodów drukowanych…”.
- seoDescription: „…skaner kodów kreskowych 2D w wersji High Density z obudową…” → „…skaner kodów kreskowych 2D z obudową…”.
- opis §2: usunąć zdanie „Wersja MS852-ZUCB00-LG ma optykę High Density do kodów o małym module.”
- spec „Typ skanera”: „Ręczny skaner 2D High Density (imager)…” → „Ręczny skaner 2D (imager), ESD-safe, przewodowy”.
- variants name: „MS852 Plus High Density ESD, USB” → „MS852 Plus ESD, USB”.
- FAQ 1: „…oraz wyłącznie interfejs USB. W ofercie jest jej wariant High Density (MS852-ZUCB00-LG), a MS852 Plus jest w wersjach standardowej i HD.” → „…oraz interfejs USB. Oferowana wersja to MS852-ZUCB00-LG.”

Do decyzji właściciela:
- HD: jak przy MS852 Plus (dystrybutorzy ERS i BarcodeFactory potwierdzają HD dla ZUCB00-LG, dokumenty Unitech nie). Jeśli wersja Z jest faktycznie HD, zasięgi z DS-PESD (np. C39 20 mil do 80 cm, w opisie, spec. i FAQ 2) mogą jej nie dotyczyć — DS-PESD nie rozróżnia wersji. Bezpieczniej: zapytać Unitech lub dystrybutora o zasięgi dla ZUCB00-LG.
- „wyłącznie interfejs USB”: DS-PESD i spec WWW „USB”, ale WWW-MS852_plus_ESD ma tag „RS232” i „Interface cable (RS232 / USB cable)”. Proponuję „interfejs USB” bez „wyłącznie”.

#### unitech-ms851-esd (MS851-SUCB00-LG)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS851 ESD”; „kody 1D do 4,5 m” | DS-851 „Code 39, 100 mils | 60.96 cm | 457.20 cm” | zgodne |
| shortDescription / seoDescription | laser 1D ESD-safe; 104 skany/s; do 4,5 m; 4 tryby; 147 g; USB; IP42; PN SUCB00-LG | DS-851; PN: dystr. bf-ms851 „MS851 ESD Scanner (SKU MS851-SUCB00-LG)” | zgodne |
| opis §1 | do 4,5 m; C39 100 mil 4,57 m; C39 20 mil 1,17 m; UPC 13 mil 63,5 cm | DS-851 DOF | zgodne |
| opis §2 | 650 nm; 104 (±12) skany/s dwukierunkowo; 4 mil (0,1 mm); pochylenie ±65°, skos ±40°; tryby spustu, impulsowy, migowy, ciągły | DS-851 „650 nm”, „104 (± 12) scans/sec (bidirectional)”, „Pitch ±65°”, „Skew ±40°”, „Trigger, Pulse, Flash, Continuous” | zgodne |
| opis §3 | 147 g bez przewodu; < 110 mA; antystatyczne do EPA; przewód wymienny; konfiguracja przez USB | DS-851 „147g without cable”, „<110mA”, „ESD protected area including its cable”, „configured via USB, and RS232 and offers replaceable cables” | zgodne |
| opis §4 | Code 39, 128, ITF, Codabar, UPC, EAN, GS1 DataBar | DS-851 Symbologies | zgodne |
| opis §5 | obieg dokumentów, handel, inwentaryzacja; „a także długie kody liniowe w strefach ESD”; skaner i przewód USB; podstawka osobno | DS-851: „document processing, retail and inventory”; „capture long range 1D barcodes” (odczyt z daleka, nie „długie kody”); Package „MS851 ESD Scanner, Interface cable” | niezgodne (tłumaczenie); reszta zgodne |
| spec: typ, źródło, szybkość, rozdzielczość, kontrast | laser 1D; 650 nm; 104 (±12); 4 mil; 20% | DS-851 | zgodne |
| spec: kody 1D | lista (Full ASCII, UPC A/E/E1, Bookland, ISBT 128, UCC Coupon, Bookland 128…) | DS-851 Symbologies | zgodne |
| spec: zasięg | C128 5 mil 3,6–17,8; C39 7,5 mil 3,0–41,9; UPC 13 mil 4,6–63,5; C39 20 mil 3,6–116,8; C39 55 mil 8,6–177,8; C39 100 mil 61–457 cm | DS-851 DOF (zaokrąglenia poprawne) | zgodne |
| spec: kąty, tryby, interfejs, ESD-safe | ±65° / ±40°; 4 tryby; USB; 10⁵–10⁹ Ω/sq, bez chloru | DS-851 | zgodne |
| spec: zasilanie, IP, upadki, ESD | 4–5,5 V; < 110 / < 20 mA; IP42; 2,1 m; 8/15 kV | DS-851 i WWW-MS851ESD | zgodne z DS (UM-851 „2M” — do decyzji) |
| spec: temp., wilg., wymiary, masa, spust | −10…+50; −40…+70; 95%; 87,8 × 71,6 × 177,7; 147 g; 10 mln | DS-851 | zgodne |
| spec: zestaw / poza / certyfikaty / gwarancja | skaner, USB / podstawka / CE, FCC, BSMI, VCCI / 60 mies. | DS-851; WWW-MS851ESD „60 months”, „five years” | zgodne |
| applications | obieg dokumentów; handel i inwentaryzacja; „Długie kody liniowe w strefach ESD” | jw. | 3. pozycja niezgodna |
| FAQ 1 | nie czyta 2D/QR; kieruje do Plus ESD i DPM ESD | DS-851 „Support most standard 1D barcodes” | zgodne |
| FAQ 2 | opis trybów spustu, impulsowego, ciągłego, migowego; w migowym mniejszy zasięg | UM-851 2.3: „Trigger Mode… until a trigger release, a valid decode, or the Laser On Timeout”; „Pulse… until a valid decode or… Timeout”; „Continuous… triggerless”; „Blink… Scanning range is reduced” | zgodne |
| FAQ 3 | 4,57 m dla C39 100 mil; UPC 13 mil 63,5 cm | DS-851 | zgodne |
| FAQ 4 | „Nie w tej wersji… wariantu RS-232 nie oferujemy” | DS-851 „Host Interface supported USB”; WWW „Interface cable ( USB / RS232)” | zgodne |
| FAQ 5 | MS836; Zebra LI2208, Datalogic GD4220 | — | zgodne |
| imageDescriptions | 1: „leżący na boku, napis ESD i logo”; 2: „widok z przodu pod kątem na rękojeść i głowicę”; 3: przód pod kątem na okno | obejrzane MS851-SUCB00-LG(-2,-3).png: zdj. 1 to widok z tyłu na głowicę (skaner poziomo); zdj. 2 to widok z góry z boku (okno nie jest widoczne) | 1–2 drobne nieścisłości; 3 zgodne |
| downloads | DS 1,3 MB; UM „MS851” 1,0 MB; QSG 186 KB | = 537 DS RevA; = 2286 UM V1.2 (WWW: „MS851 ESD User's Manual V1.2 1MB”); = 2285 QSG V1.0 (WWW: „186.4KB”) | zgodne |
| relatedAccessories | 4 akcesoria MS85x | ACC-MS851ESD | zgodne |

Niezgodności i propozycje:
- opis §5: „…a także długie kody liniowe w strefach ESD.” → „…a także odczyt kodów 1D z dużej odległości w strefach ESD.” (DS-851 „capture long range 1D barcodes”).
- applications[2]: „Długie kody liniowe w strefach ESD” → „Odczyt kodów 1D z dużej odległości w strefach ESD”.
- imageDescriptions[0]: „czarny skaner laserowy leżący na boku, na głowicy napis ESD i logo unitech” → „czarny skaner laserowy, widok z tyłu na głowicę z napisem ESD i logo unitech”.
- imageDescriptions[1]: „widok z przodu pod kątem na rękojeść i głowicę (…)” → „widok z góry pod kątem na głowicę i rękojeść (…)”.

Do decyzji właściciela:
- Upadek: DS-851 i WWW „2.1M onto concrete (scanner only)”, UM-851 1.3 „2M onto concrete (scanner only)”. Karta = DS — zostawić.

#### unitech-ms838 (MS838-2UCB0S-SG, MS838-2RCB00-SG)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS838”; „czytnik 2D USB lub RS-232” | DS-838 „Host Interface supported USB / RS232” | zgodne |
| shortDescription | kasy w sklepach i aptekach; IP52; 1D od 3 mil; USB z podstawką i RS-232 | DS-838 „retail stores, supermarket, pharmacy and hotel”, „IP52”, „3 mil”; zestawy: UM-838 1.1 „combo package… Hands free stand”; dystr.: ERS „MS838-2UCB0S-SG… USB Cable, Hands-Free Stand”, BarcodeFactory „MS838 2D, USB (With Stand)” / „MS838-2RCB00-SG… RS232 (Without Stand)”, Levata „with USB cable and hands free sta[nd]” / „with RS232 cable” | zgodne |
| seoDescription | USB/RS-232; IP52; upadki 1,5 m; 1D od 3 mil; tryb prezentacyjny; PN | DS-838 | zgodne |
| opis §1 | dwie wersje (USB + podstawka; RS-232 bez podstawki); 640 × 480, 60 kl./s; czerwony celownik LED, białe oświetlenie | dystr. jw.; DS-838 „640 X 480 CMOS”, „60fps”, „Red LED”, „White LED” | zgodne |
| opis §2 | 1D do 3 mil, uszkodzone i słabe; QR, DM, Aztec, PDF417; EAN-13 13 mil 60–310 mm | DS-838 „Optical Resolution (1D)≥3mil”, „60-310mm (13 mil EAN13 PCS=90%)” | zgodne |
| opis §3 | IP52; wielokrotne zrzuty z 1,5 m; 245 g; spust 1 mln; spust i tryb prezentacyjny z auto-wykrywaniem | DS-838 „can withstand multiple drops to concrete from 1.5 meters”, „245g”, „1 million times”, „presentation mode(auto-sensing mode)” | zgodne |
| opis §4 | OPOS i JPOS; prefiks, sufiks, Code ID; −10…+50°C; < 142 mA | FAQ-838 „Does MS838 support OPOS/JPOS yet? Yes.”; DS-838 Data Formatting, temp., prąd | zgodne |
| opis §5 | sklepy, supermarkety, apteki, hotele | DS-838 | zgodne |
| spec: typ, matryca, celownik | jw. | DS-838 | zgodne |
| spec: kody 1D, 2D | listy | DS-838 Symbologies | zgodne |
| spec: rozdzielczość, głębia, światło | ≥ 3 mil; EAN-13 60–310 mm; 0–100 000 lx | DS-838 | zgodne |
| spec: kąty | pochylenie ±60°, odchylenie ±60°, obrót 0–360° | DS-838 „Skew ±60°, Pitch ±60°”; UM-838 1.3 „Skew Angle ± 65°” | zgodne z DS (rozbieżność — do decyzji) |
| spec: tryby | spust; prezentacyjny (Auto Sense) | DS-838; UM-838 2.5 | zgodne |
| spec: interfejs, zasilanie | USB albo RS-232 zależnie od PN; < 142 / < 42 mA | DS-838 | zgodne |
| spec: IP, upadki, temp., wilg. | IP52; 1,5 m beton; −10…+50; −20…+60; 5–95% | DS-838 | zgodne |
| spec: wymiary, masa, spust | 174 × 72 × 96; 245 g; 1 mln | DS-838 | zgodne |
| spec: zestaw | skaner, przewód USB lub RS-232; podstawka tylko w 2UCB0S-SG | UM-838 1.1 (standard / combo); dystr. jw. | zgodne |
| spec: certyfikaty | CE, FCC, BSMI, VCCI | DS-838 | zgodne |
| spec: gwarancja | brak wiersza | WWW-MS838: „Hardware Warranty 15 months”, a „Statement”: „thirty-six months” — sprzeczność w jednym dokumencie | brak wiersza słuszny |
| applications | kasy w sklepach i supermarketach; apteki; hotele | DS-838 | zgodne |
| variants + atrybuty | 2UCB0S-SG: USB, Podstawka Tak; 2RCB00-SG: RS-232 | dystr. jw.; UM-838 „combo package” | zgodne |
| tooltipy „Interfejs”, „Podstawka” | USB / RS-232; podstawka w zestawie, praca w trybie prezentacyjnym | DS-838 | zgodne |
| FAQ 1 | USB + podstawka; RS-232 bez podstawki; 5200-900014G osobno | dystr. jw.; ACC-MS838 „Hands free stand PN#5200-900014G” | zgodne |
| FAQ 2 | OPOS i JPOS | FAQ-838 | zgodne |
| FAQ 3 | Auto Sense kodem; domyślnie wyłączony (spust) | UM-838 2.5.1 „Auto Sense Mode off… It's default mode… Off *”; QSG-838 „Trigger Mode *” | zgodne |
| FAQ 4 | EAN-13 60–310 mm; 3 mil | DS-838 | zgodne |
| FAQ 5 | MS282e 125 g; MS852 1280 × 960 i OCR; Zebra, Honeywell | DS-282, DS-852 | zgodne |
| imageDescriptions 1–4 | przód z pomarańczowym spustem; przód pod kątem; tył pokrywy z napisem; góra i przód | obejrzane MS838-2UCB0S-SG(-2..-4).png | zgodne |
| downloads | DS 922 KB; UM 2,3 MB; QSG 11,6 MB | = 3482 DS RevG (921,7 KiB); = 3488 UM V2.1; = 3487 QSG V1.1 | zgodne |
| relatedAccessories | unitech-ms83x-podstawka (5200-900014G) | ACC-MS838; WWW-MS838 „Hands-Free Stand (P/N: 5200-900014G)” | zgodne |

Niezgodności i propozycje:
- Unikalność: zdanie „Dane z kodu można uzupełnić prefiksem, sufiksem i identyfikatorem kodu.” jest prawie identyczne z MS836 („Dane można uzupełniać prefiksem, sufiksem i identyfikatorem kodu.”). Propozycja dla MS838: „Do danych można dodać prefiks, sufiks i identyfikator kodu, a także zmienić ich format.” (DS-838 „Prefix, Suffix, Code ID, Reformatting Date”).

Do decyzji właściciela:
- Kąt skosu: DS-838 „Skew Angle ±60°”, UM-838 „± 65°”. Karta = DS — zostawić.
- Gwarancja: WWW-MS838 15 miesięcy vs 36 miesięcy w tym samym bloku. Brak wiersza i brak wzmianki w opisie/FAQ — słuszne. Strona `/skanery-unitech` podaje „Okres gwarancji MS838 i TS100 potwierdzamy przy zamówieniu” — spójne.
- Opcjonalnie: UM-838 1.4 „MS838 has different SKUs, each supporting either USB cable or Y-cable. The Y-cable is available in RS232 (DB9) and USB-A versions.” Jeśli zestaw MS838-2RCB00-SG ma przewód Y (DB9 + USB-A do zasilania), warto to dopisać po potwierdzeniu u dostawcy.

#### unitech-ms282e (MS282-3UCB00-SG)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS282e”; „smukły czytnik kodów 125 g, USB” | DS-282 „125g”, „USB”; PN = MS282e: BarcodeFactory „Unitech MS282e 2D imager… SKU MS282-3UCB00-SG”, ERS „MS282-3UCB00-SG… Kit includes USB Cable” | zgodne |
| shortDescription / seoDescription | smukły, 125 g; kasy; karty lojalnościowe i kupony z ekranów; tryb ręczny i prezentacyjny; USB; IP42 | DS-282: „Compact and lightweight design”, „loyalty card and mobile coupons”, „Scan barcodes on the screens of mobile devices”, „supports both manual and presentation scanning”, „IP42” | zgodne |
| opis §1 | „smukłą, wygiętą obudowę” 179,7 × 47,5 × 51,3 mm, 125 g; kasy w handlu i hotelarstwie; karty, kupony, ekrany; uszkodzone kody | DS-282 wymiary, masa, wstęp | zgodne („wygięta” widoczne na zdjęciach) |
| opis §2 | 640 × 480; pole widzenia 42° × 31,5°; czerwony celownik LED 625 nm; 1D od 3 mil; 2D (PDF417, QR, Micro QR, DM) od 6,67 mil; EAN-13 60–350 mm; QR 15 mil 30–170 mm | DS-282 | zgodne |
| opis §3 | ręcznie ze spustem albo prezentacyjnie; tryby Sense, Pulse, Continuous, Batch; IP42; 1,5 m; 10 mln; < 110 mA; USB jako klawiatura HID, wirtualny COM, HID-POS | DS-282; UM-282 2.3 („USB HID Keyboard”, „USB CDC… in the way as a serial port does”, „USB HID-POS”) i 2.6 | zgodne |
| opis §4 | skaner i przewód USB; podstawka opcjonalna | DS-282 Package „MS282e Scanner, USB Cable”; „stand (optional)” | zgodne |
| spec: typ, matryca, celownik | jw. | DS-282 | zgodne |
| spec: kody 1D, 2D | listy | DS-282 Symbologies | zgodne |
| spec: rozdzielczość, głębia | ≥ 3 / ≥ 6,67 mil; 25%; EAN-13 60–350; C39 5 mil 40–150; PDF417 6,7 mil 50–125; DM 10 mil 45–120; QR 15 mil 30–170 mm | DS-282 | zgodne |
| spec: światło, kąty, tryby | 0–100 000 lx; ±60/±60/0–360; spust, Sense, Pulse, Continuous, Batch | DS-282; UM-282 2.6 | zgodne |
| spec: interfejs, zasilanie | USB (HID, COM, HID-POS); 5 V ±10%; < 110 / < 7 mA | DS-282 „Host Interface supported USB”; UM-282 2.3 | zgodne |
| spec: IP, upadki, ESD | IP42; 1,5 m; 8 kV / 12 kV | DS-282 | zgodne |
| spec: temp., wilg., wymiary, masa, spust | −10…+50; −20…+60; 95%; 179,7 × 47,5 × 51,3; 125 g; 10 mln | DS-282 | zgodne |
| spec: zestaw / poza / certyfikaty / gwarancja | skaner, USB / podstawka / CE, FCC, BSMI, VCCI / 60 mies. | DS-282; WWW-MS282e „60 months”, „five years” | zgodne |
| applications | kasy: karty i kupony; hotelarstwo i gastronomia | DS-282 | zgodne |
| FAQ 1 | „Sense jest ustawieniem fabrycznym”; opis Continuous, Pulse, Batch | UM-282 2.6 „Sense Mode *” i App. B „Scan Mode: Sense Mode”; QSG-282 (608671G V1.0, sprawdzone w PDF): „Trigger mode*” | opis trybów zgodny; „ustawienie fabryczne” — sprzeczne dokumenty |
| FAQ 2 | ekrany smartfonów; uszkodzone kody | DS-282 | zgodne |
| FAQ 3 | podstawka 5200-900013G z giętkim ramieniem; „osadzony w podstawce pracuje w trybie prezentacyjnym, a po wyjęciu nadal działa ze spustem” | ACC-MS282e „Stand 5200-900013G”; zdjęcie 5200-900013G (gęsia szyja); DS-282 i UM-282 nie opisują przełączania trybu po włożeniu lub wyjęciu z podstawki | brak (nadinterpretacja) |
| FAQ 4 | 3 tryby USB; wybór kodem | UM-282 2.3; QSG-282 „USB Device Type” | zgodne |
| FAQ 5 | MS838 IP52 i RS-232; MS852 OCR; Datalogic, Newland | DS-838, DS-852 | zgodne |
| imageDescriptions 1–4 | niebieskie podświetlenie; leżący z przewodem; bok z żółtym spustem; z podstawką na giętkim ramieniu | obejrzane MS282-3UCB00-SG(-2..-4).png | zgodne |
| downloads | DS 1,4 MB; UM 1,9 MB; QSG 8,4 MB | = 1171 DS RevC; = 3450 UM; = 3449 QSG V1.0 | zgodne |
| relatedAccessories | unitech-ms282e-podstawka | ACC-MS282e | zgodne |

Niezgodności i propozycje:
- FAQ 3: „Skaner osadzony w podstawce pracuje w trybie prezentacyjnym, a po wyjęciu nadal działa ze spustem.” → „W podstawce skaner czyta kody w trybie prezentacyjnym, bez naciskania spustu. Tryb pracy wybiera się kodem konfiguracyjnym z instrukcji.” (DS-282: „presentation mode… without pressing buttons… With the barcode scanner stand (optional)…”).
- FAQ 1 (bezpieczniej): „Sense jest ustawieniem fabrycznym: skaner rozpoczyna odczyt…” → „W trybie Sense skaner rozpoczyna odczyt…” (bez wskazania ustawienia fabrycznego).

Do decyzji właściciela:
- Ustawienie fabryczne trybu: UM-282 (2.6 i App. B) — Sense; QSG-282 V1.0 — Trigger mode. Do czasu potwierdzenia nie podawać, który tryb jest domyślny.

#### unitech-ms836 (MS836-SUCBS0-SG)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS836”; „czytnik kodów 1D z USB, IP52” | DS-836 „Handheld Laser Barcode Scanner”, „Interface USB”, „IP52” | zgodne |
| shortDescription / seoDescription | laser 1D; 3 tryby; szerokość 220 mm; dekodowanie 3,3 ms; IP52; USB; 100 skanów/s; do 4 mil | DS-836 „Scanning Width 220 mm”, „100 times/ second”, „Max. Resolution 4 mil”; UM-836 1.3 „Decode Speed 3.3ms” | zgodne |
| opis §1 | tryby spustu, prezentacyjny, auto-sensing; zmiana przez przytrzymanie spustu; auto-sensing wykrywa kod | DS-836: „supports trigger mode, presentation mode and auto-sensing mode”, „pressing the trigger button for 12 seconds”; UM-836 2.5.1 „Long press scanner key for 10 seconds to switch auto-sensing mode” | zgodne (bez liczby sekund — słusznie) |
| opis §2 | 650 nm; 100 skanów/s; 3,3 ms; 4 mil; 220 mm; EAN-13 13 mil 10–265 mm; kąt skanowania ±30°; tylko 1D | DS-836; UM-836 | zgodne |
| opis §3 | EAN-8, EAN-13, UPC-A/E, C39, C128, Codabar, GS1 DataBar; prefiks, sufiks, Code ID; 0–100 000 lx; ±60° | DS-836 Symbologies; UM-836 „Data Formatting Prefix, Suffix, Code ID”, „Ambient Light 0-100,000 Lux”; DS-836 „Skew ±60°, Pitch ±60°” | zgodne |
| opis §4 | IP52; 1,5 m; 245 g; < 85 mA; USB; handel i hotelarstwo; intensywne skanowanie, zadania przemysłowe | DS-836; WWW-MS836 tagi „Retail, Hospitality”, „equipped for heavy scanning” | zgodne |
| spec: typ, źródło, szybkość | laser 1D; 650 nm, pojedyncza linia; 100/s; 3,3 ms | DS-836 „Single Scan”; UM-836 | zgodne |
| spec: rozdzielczość / kontrast | 4 mil; 30% | DS-836 spec „4 mil”, „Print Contrast 30%” (ten sam DS w tekście: „up to 3 million resolution”, „print contrast reading up to 15%”) | zgodne z tabelą DS |
| spec: kody 1D | lista z Code 93, Code 32, China Post 25, Plessey, Code 11, ISBN, ISSN | UM-836 1.3 Symbologies (SW decoder) | zgodne |
| spec: głębia, światło, kąty, tryby, interfejs | 10–265 mm, 220 mm; 0–100 000 lx; ±30° / ±60° / ±60°; 3 tryby; USB | DS-836, UM-836 | zgodne |
| spec: zasilanie | 5 V DC; < 85 / < 36 mA | UM-836 (SW, PN karty) „Operation Voltage DC 5V”; DS-836 i WWW „DC 3V to 5V” | zgodne z UM (rozbieżność — do decyzji) |
| spec: IP, upadki, temp., wilg., wymiary, masa | IP52; 1,5 m; −10…+50; −20…+60; 5–95%; 174 × 72 × 96; 245 g | DS-836; UM-836 „1.5m onto concrete” | zgodne |
| spec: zestaw | skaner, QSG (podstawkę i przewód potwierdzamy przy zamówieniu) | UM-836 1.1 „package contents (without cradle): MS836 Scanner, Quick Start Guide; Optional Accessories: Hands-free stand, USB cable”; WWW-MS836 / eu-MS836: „includes stand”, tytuł „MS836 1D laser with hands-free stand”, „USB (USB cable 1.9 m straight)”; dystrybutorzy nie mają SUCBS0-SG (Levata: „MS836-SUCB00-SG… Usb-Cable, Hand-Free Stand” — to wersja HW decoder) | brak jednoznacznego dowodu; karta ostrożna — zgodne z zasadą |
| spec: certyfikaty / gwarancja | CE, FCC / 15 mies. | DS-836 „CE& FCC DOC compliance”; WWW-MS836 „15 months”, „fifteen months” | zgodne |
| applications | odczyt 1D w handlu; hotelarstwo | WWW-MS836 tagi | zgodne |
| variants | SUCBS0-SG „MS836, USB” | WWW-MS836: UM/QSG „for P/N: MS836-SUCBS0-SG” | zgodne |
| FAQ 1 | skaner i QSG; podstawka i przewód potwierdzane przy zamówieniu | jw. | zgodne (do decyzji, patrz niżej) |
| FAQ 2 | zmiana trybu przez dłuższe przytrzymanie spustu; auto-sensing i czułość kodami | DS-836; UM-836 2.5.1 „Auto-Sensing On / Off, Sensitive Setting (1-255)” | zgodne |
| FAQ 3 | tylko 1D; kieruje do MS838 | DS-836; DS-838 | zgodne |
| FAQ 4 | EAN-13 13 mil 10–265 mm; linia do 220 mm | DS-836 | zgodne |
| FAQ 5 | MS851 ESD (ESD, do 4,5 m); MS250 (kontaktowy CCD); Newland, Zebra | DS-851, DS-250 | zgodne |
| imageDescriptions 1–2 | niebieski spust, przód pod kątem; okno z czerwonym filtrem | obejrzane MS836-SUCBS0-SG(-2).png | zgodne |
| downloads | DS 1,2 MB; UM 3,1 MB; QSG 2,2 MB | = 3252 DS RevI; = 4311 SW UM V2.4 (PN karty); = 4487 SW QSG V2.0 (PN karty) | zgodne |
| related | brak akcesoriów | ACC-MS836 pusty | zgodne |

Niezgodności i propozycje:
- Unikalność: „Dane można uzupełniać prefiksem, sufiksem i identyfikatorem kodu.” ≈ zdanie w MS838 (patrz MS838). Jedno z dwóch przeredagować.

Do decyzji właściciela:
- Zawartość MS836-SUCBS0-SG: UM-836 (dla tego PN) — skaner i QSG, podstawka i przewód USB opcjonalne; WWW-MS836 — „includes stand”, przewód USB 1,9 m. Karta słusznie nie obiecuje podstawki. Potwierdzić u dostawcy i wpisać pewną zawartość.
- Napięcie: UM-836 „DC 5V”, DS-836 i WWW „DC 3V to 5V”. Karta = UM dla PN SUCBS0 — zostawić.
- Rozdzielczość i kontrast: DS-836 w tabeli „4 mil” i „30%”, w tekście „3 million resolution” i „up to 15%”. Karta = tabela — zostawić.

#### unitech-ms250 (MS250-CUCB00-DG)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS250”; „skaner kontaktowy CCD, kody 1D, USB” | DS-250 „Linear Scanner”, „Linear CCD Sensor” | zgodne |
| shortDescription / seoDescription | kontaktowy CCD; do 90 mm; 200 skanów/s; 3 mil; 83 g; USB; POS i dokumenty | DS-250 „reading depth from contact to 90mm”, „200 scans/sec”, „3mil/0.076mm”, „83g”; WWW-MS250 | zgodne |
| opis §1 | od zetknięcia do 90 mm (C39 20 mil); szerokość 80 mm; przyłożyć okno | DS-250 „Up to 90mm @ 20mil, PCS90%, Code39”, „Width of Field 80mm” | zgodne z DS (UM-250: 75 mm — do decyzji) |
| opis §2 | CCD z LED 635 nm; do 200 skanów/s; 3 mil (0,076 mm); zniszczone, słabe; GS1 DataBar; brak ruchomych części | DS-250; WWW-MS250 „CCD-based linear imager with no moving parts” | zgodne |
| opis §3 | ABS 163,3 × 79 × 62,5 mm; 83 g; duży spust 1 mln; 90 dBA; spust i migowy; do 20 000 lx; 0…+50°C; prefiks, sufiks, Code ID kodami | DS-250 („large trigger”, „extra loud beeper (90dBa)”, „Trigger Mode, Flash Mode”, „20,000 Lux Max”, „Configuration barcodes”) | zgodne |
| opis §4 | POS, dokumenty, identyfikacja danych osobowych, kontrola zapasów; USB, RS-232, Keyboard Wedge, USB COM; wersja CUCB00-DG z USB i przewodem | DS-250 wstęp i Communication; „What comes in the box: MS250 Scanner, Interface cable” | zgodne |
| spec: typ, czujnik, szybkość, rozdzielczość | CCD 635 nm; 200/s ±10%; 3 mil; kontrast 45% | DS-250 | zgodne |
| spec: pole odczytu, kody, światło, kąty | 80 mm / 90 mm; lista (Telepen, IATA…); 20 000 lx; przód/tył ±10°–30° (±5°), boki ±60° (±5°) | DS-250 | zgodne |
| spec: tryby, interfejs, zasilanie | spust, migowy; USB; 5 V; < 120 / < 20 mA | DS-250 | zgodne |
| spec: sygnał | co najmniej 90 dBA | UM-250 8.4 „Beeper 90 db/ minimum” | zgodne |
| spec: upadki, ESD, temp., wilg. | 1,5 m (sam skaner); 8/12 kV; 0…+50; −20…+70; 20–95% | DS-250 | zgodne |
| spec: wymiary, masa, spust, konfiguracja, zestaw, certyfikaty | 163,3 × 79 × 62,5; 83 g; ABS; 1 mln; kody konfiguracyjne; skaner + USB; CE, FCC, BSMI, VCCI | DS-250 | zgodne |
| spec: gwarancja | 24 miesiące | WWW-MS250 „24 months”, „two years” | zgodne |
| applications | POS i dokumenty; identyfikacja danych osobowych; kontrola zapasów | DS-250 | zgodne |
| FAQ 1 | od zetknięcia do 90 mm; pole 80 mm, „więc kod nie może być szerszy” | DS-250 (wniosek z „Width of Field 80mm”) | zgodne (wniosek) |
| FAQ 2 | nie czyta QR/DM | DS-250 | zgodne |
| FAQ 3 | USB, RS-232, Keyboard Wedge, USB COM; wersja USB z przewodem | DS-250 | zgodne |
| FAQ 4 | kody konfiguracyjne: tryb, prefiks, sufiks, Code ID | DS-250 | zgodne |
| FAQ 5 | MS836 (220 mm); „Budżetowe skanery CCD innych marek…” | DS-836 | zgodne; „budżetowe” — styl |
| imageDescriptions | 1: „z niebieskim spustem, widok z góry pod kątem na okno”; 2: przód na okno i rękojeść; 3: bok, niebieski spust; 4: od spodu na spust | obejrzane MS250-CUCB00-DG(-2..-4).png; na zdj. 1 spustu nie widać | 1 drobna nieścisłość; 2–4 zgodne |
| downloads | DS 769 KB; UM 1,2 MB | = 121 DS Rev B (768,6 KiB); = 128 UM (WWW „MS250 User Manual V2.1 1.2MB”) | zgodne |
| related | brak akcesoriów | ACC-MS250 pusty | zgodne |

Niezgodności i propozycje:
- FAQ 5: „Budżetowe skanery CCD innych marek to…” → „Skanery 1D innych marek to…” (styl: bez określeń cenowych).
- imageDescriptions[0]: „Unitech MS250 — ciemny skaner kontaktowy z niebieskim spustem, widok z góry pod kątem na okno odczytu” → „Unitech MS250 — ciemny skaner kontaktowy, widok z góry pod kątem na głowicę z oknem odczytu”.

Do decyzji właściciela:
- Odległość odczytu: DS-250 i WWW „Up to 90mm @ 20mil”, UM-250 (2017) „Up to 75mm @ 20mil”. Karta = DS — zostawić.

#### unitech-ts100 (TS100-SUCB00-SG)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech TS100”; „skaner prezentacyjny, czytnik 2D hands-free USB” | DS-TS „2D Presentation Scanner” | zgodne |
| shortDescription / seoDescription | okno 50° × 35°; auto-sensing 60 fps; podstawa kątowa; USB; 345 g; handel, hotelarstwo; PN | DS-TS; UM-TS 1.4 („Angle Stand”); FAQ-TS „TS100-SUCB00-SG… USB cable 2 meters” | zgodne |
| opis §1 | do blatu kasy; okno 50° poziomo, 35° pionowo; auto-sensing 60 kl./s; ręce wolne | DS-TS „large window (50° horizontal, 35° vertical)”, „hands-free scan rate of 60 fps on auto-sensing mode” | zgodne |
| opis §2 | drukowane i wyświetlane 1D/2D; karty członkowskie, płatności z ekranów; 4 / 6,7 mil; QR 20 mil 0–230 mm; UPC-A 13 mil 10–180 mm | DS-TS | zgodne |
| opis §3 | podstawa kątowa: poziomo albo pochylenie 15°; 105 × 146 × 70 mm; 345 g bez przewodu; wąskie blaty | UM-TS 1.4.1–1.4.2 „Install the Angle Stand upward / downward… Pitch forward 15 degree”; DS-TS „small enough for countertops with limited space” | zgodne |
| opis §4 | tryby spust, prezentacyjny, Buffer; zestaw: skaner, USB 2 m, QSG; handel, hotelarstwo, supermarkety | UM-TS 1.3 „Trigger Mode, Presentation Mode, Buffer Mode”; DS-TS „TS100 with USB Cable, QSG”; FAQ-TS „USB cable 2 meters”; DS-TS „Retail, Hospitality, and Supermarket” | zgodne |
| spec: typ, matryca, oświetlenie, okno | 2D; 1280 × 800, 60 kl./s; czerwona LED 650 nm; 50° / 35° | DS-TS | zgodne |
| spec: kody 1D, 2D | listy | DS-TS Symbologies | zgodne |
| spec: rozdzielczość, głębia | 4 / 6,7 mil, 25%; C39 3,13 mil 30–50; C39 5,13 mil 20–115; PDF 6,88 mil 0–160; UPC-A 13 mil 10–180; QR 20 mil 0–230 mm | DS-TS | zgodne |
| spec: światło, kąty, tryby | 0–100 000 lx; pochylenie ±65°, obrót 360°; spust, prezentacyjny, Buffer | DS-TS; UM-TS | zgodne |
| spec: interfejs | USB | DS-TS „USB, RS232”; UM-TS 2.2: RS-232 przez przewód RS-232 („Auto-Cable function… when connecting with 232 cable”); zestaw z przewodem USB | zgodne |
| spec: zasilanie, upadki, ESD | 5 V DC, 500 mA; 1,0 m; ±15 kV powietrze | DS-TS „5 VDC”, „500 mA”, „Mechanical Shock 1M”, „+/-15kv air discharge” | zgodne |
| spec: temp., wilg., wymiary, masa, zestaw, certyfikaty | 0…+50; −40…+70; 0–95%; 105 × 146 × 70; 345 g; skaner, USB 2 m, QSG; CE, FCC, BSMI | DS-TS; UM-TS 1.1 „RJ54 to USB Cable, TS100 Scanner, Quick Start Guide” | zgodne |
| spec: gwarancja | brak wiersza | WWW-TS100 i eu-TS100: „Hardware Warranty 15 months”, a „Statement”: „two years” — sprzeczność | brak wiersza słuszny |
| applications | kasy: karty członkowskie i płatności z telefonu; hotelarstwo; supermarkety | DS-TS | zgodne |
| FAQ 1 | przycisk: Normal Scan (niebieska), 1D Barcode Quick Scan (żółta, bez ekranów); w nowszym oprogramowaniu Normal Scan równie szybki | UM-TS 1.5.1 (tabela i Note); Note kończy się: „if you ever have a need to make… a "Yellow Light" mode, please ask Unitech for custom firmware” | zgodne, ale niepełne (do decyzji) |
| FAQ 2 | podstawa do góry — poziomo; do dołu — pochylenie 15° | UM-TS 1.4 | zgodne |
| FAQ 3 | Normal Scan czyta kody z ekranów; odczyt URL z QR włącza się kodem | UM-TS 1.5.1; FAQ-TS „chapter 3.22 "QR Code URL Link" to enable URL link reading” | zgodne |
| FAQ 4 | model obsługuje USB i RS-232; zestaw USB z 2 m przewodem; RS-232 nie oferujemy | DS-TS, UM-TS 2.2, FAQ-TS | zgodne |
| FAQ 5 | Zebra DS9308, DS9908, Datalogic 900i; MS282e w podstawce | DS-282 | zgodne |
| imageDescriptions 1–4 | przód pod kątem z niebieską ramką; przód; bok pod kątem; tył z etykietą i gniazdem | obejrzane TS100-SUCB00-SG(-2..-4).png | zgodne |
| downloads | DS 478 KB; UM 2,4 MB; QSG 7,9 MB | = 4081 DS RevD; = 4208 UM V1.8; = 4214 QSG V1.0 | zgodne |
| related | brak akcesoriów | ACC-TS100 pusty | zgodne |

Niezgodności i propozycje: brak twardych niezgodności.

Do decyzji właściciela:
- FAQ 1: UM-TS sugeruje, że w najnowszym oprogramowaniu tryb „Yellow Light” wymaga oprogramowania na zamówienie od Unitech. Propozycja: „Przycisk przełącza tryby Normal Scan (niebieska dioda) i 1D Barcode Quick Scan (żółta dioda). Tryb Normal Scan czyta kody drukowane i z ekranów. W nowszym oprogramowaniu jest równie szybki jak tryb 1D, a tryb żółty Unitech dostarcza w oprogramowaniu na zamówienie.”
- Gwarancja: brak wiersza słuszny; FAQ i opis nie podają gwarancji (sprawdzone).

---

#### unitech-ms85x-podstawka (5200-900009G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Podstawka hands-free Unitech MS85x (5200-900009G)”; „do skanerów MS852, MS851 i MS852 Plus” | WWW-MS852: „Standard Hands Free Stand (PN#5200-900009G)”; QSG-STAND „Hand Free Stand MS85x Series” | zgodne |
| shortDescription / seoDescription | podstawka hands-free MS85x; pasuje do MS852, MS852 Plus, MS852 LR, MS851 ESD i MS852B | ACC-MS852, ACC-MS852PLUS, ACC-MS852LR, ACC-MS851ESD; `$SP/ute5b/web/detail-MS852B.txt` „Standard Hands Free Stand (PN#5200-900009G)” | zgodne |
| opis §1 | utrzymuje skaner na blacie, skanowanie bez trzymania | DS-852 „Standard Hands Free Stand (Optional)” | zgodne |
| opis §2 | w pudełku uchwyt, przekładka, kolumna, dolna i górna płyta, wkręty; części 1–3 i 4–5 złożone fabrycznie; łączenie śrubokrętem krzyżakowym; przykręcenie do blatu wkrętami samogwintującymi | QSG-STAND: „1. Scanner Holder 2. Spacer 3. Mounting Pole 4. Lower Base Plate 5. Upper Base Plate 6. Flat-Head Screws ×2 7. Self-Tapping Screws ×2”; „items 1-3 and 4-5… pre-assembled into two separate units”; „A Phillips screwdriver is required”; „secure the base to a mounting surface” | zgodne |
| opis §3 | „Żaden zestaw skanera serii MS85x nie zawiera tej podstawki” | DS-852, DS-852P, DS-LR, DS-851, DS-PESD, DS-DPM: podstawka „(Optional)”; brak dokumentu o wszystkich zestawach serii (dla wersji Auto Switching jest osobna podstawka 5200-900010G, `307_MS852_UM_(Auto_Switching)…` 1.6) | brak (uogólnienie) |
| spec: PN, typ, zgodność | 5200-900009G; 12 modeli MS85x | ACC-* (6 przewodowych); ute5b/web/detail-MS852B, MS852BPlus, MS852BLR, MS852P, MS851BESD, MS852BPLUS_ESD — każda strona ma PN#5200-900009G | zgodne |
| spec: zawartość, montaż | „wkręty płaskie i samogwintujące”; śrubokręt krzyżakowy | QSG-STAND „Flat-Head Screws” (śruby z łbem płaskim), „Self-Tapping Screws” | zgodne (nieścisłe tłumaczenie „wkręty płaskie”) |
| applications | praca bez trzymania w dłoni | jw. | zgodne |
| imageDescriptions | czarna podstawka, zakrzywiona kolumna, uchwyt | obejrzany 5200-900009G.png (kolumna giętka, „gęsia szyja”) | zgodne |
| downloads | QSG 720 KB | = 6119 QSG V1.0 (737 255 B = 720 KiB) | zgodne |
| relatedAccessories / relatedProducts | 3 akcesoria MS85x / 12 skanerów MS85x | jw. | zgodne |

Niezgodności i propozycje:
- opis §3: „Żaden zestaw skanera serii MS85x nie zawiera tej podstawki, dlatego zamawia się ją osobno.” → „Podstawka jest akcesorium opcjonalnym i zamawia się ją osobno.” (DS: „Standard Hands Free Stand (Optional)”).
- spec „Zawartość pudełka”: „…wkręty płaskie i samogwintujące” → „…dwie śruby z łbem płaskim i dwa wkręty samogwintujące” (QSG-STAND ×2 / ×2).

#### unitech-ms85x-uchwyt-biurkowy (5200-900011G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Uchwyt biurkowy i ścienny Unitech MS85x (5200-900011G)” | WWW-MS852: „Desktop/ Wall Mount stand (PN#5200-900011G)” | zgodne |
| shortDescription / seoDescription | odkładanie na biurku lub montaż na ścianie; przezroczysty; „Obsługuje… MS852 Plus ESD, MS852 DPM ESD, MS852B LR i pozostałe” | ACC-MS852_plus_ESD, ACC-MS852DPM_ESD; ute5b/web/detail-MS852BLR „Desktop/ Wall Mount stand (PN#5200-900011G)”; przezroczystość — zdjęcia | zgodne („Obsługuje” — lepiej „Pasuje do”) |
| opis §1 | odkładanie skanera; biurko albo ściana | WWW „Desktop/ Wall Mount stand” | zgodne |
| opis §2 | przezroczysty, podtrzymuje za rękojeść; „Nie jest podstawką hands-free” | zdjęcia 5200-900011G(-2).png; dokumenty Unitech rozróżniają „Hand Free Stand” i „Desktop/ Wall mount stand”, ale nie piszą, że uchwyt nie nadaje się do pracy bez trzymania | zgodne / „nie jest” — brak (łagodne) |
| spec: PN, typ, zgodność | 12 modeli MS85x | ACC-* i strony ute5b (każda ma PN#5200-900011G) | zgodne |
| applications | biurko; ściana | WWW | zgodne |
| imageDescriptions | 1: uchwyt ścienny, skaner zawieszony za rękojeść; 2: uchwyt biurkowy, skaner oparty | obejrzane — zgodne z obrazem | zgodne |
| downloads / related | brak / 3 akcesoria, 12 skanerów | — | zgodne |

Niezgodności i propozycje:
- opis §2 (łagodnie): „Nie jest podstawką hands-free: do pracy bez trzymania skanera w dłoni służy podstawka 5200-900009G.” → „Do pracy bez trzymania skanera w dłoni przeznaczona jest podstawka hands-free 5200-900009G.”
- seoDescription: „Obsługuje Unitech MS852 Plus ESD…” → „Pasuje do Unitech MS852 Plus ESD…”.

#### unitech-ms85x-etui (386793G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Etui ochronne Unitech MS85x (386793G)” | WWW-MS852LR „Protective Case (PN#386793G)” | zgodne |
| shortDescription / seoDescription | osłona; MS852 LR 1,8 m → 2,2 m; żółte; także MS852B LR, MS851B ESD i inne MS85x | DS-LR „1.8M onto concrete (2.2M with protection case)”, „Dedicated design protective cover”; ute5b/web/detail-MS852BLR i MS851BESD „Protective Case (PN#386793G)”; kolor — zdjęcie | zgodne |
| opis §1 | chroni przed upadkiem; żółte z logo unitech | obejrzany 386793G.png (żółta ramka z napisem unitech) | zgodne |
| opis §2 | MS852 LR 1,8 / 2,2 m; zestawy go nie zawierają | DS-LR; pakiety DS (bez etui), UM-DPM „Optional Accessories… Protective Case” | zgodne |
| spec: PN, typ, zgodność, upadki | 386793G; 12 modeli; MS852 LR 2,2 m (bez etui 1,8 m) | ACC-* (6 przewodowych) i 6 stron ute5b; DS-LR | zgodne |
| applications / imageDescriptions | ochrona przy upadkach / żółta osłona z napisem | jw. | zgodne |
| downloads / related | brak / 3 akcesoria, 12 skanerów | — | zgodne |

Niezgodności i propozycje: brak.

#### unitech-ms85x-przewod-usb (1550-905920G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Przewód USB z ochroną ESD Unitech MS85x (1550-905920G)” | WWW-MS852 „USB cable with ESD enhanced (PN#1550-905920G)” | zgodne |
| shortDescription / seoDescription | zamienny/zapasowy; MS851 ESD, MS852 Plus ESD, MS852 DPM ESD i inne MS85x | ACC-MS851ESD, ACC-MS852_plus_ESD, ACC-MS852DPM_ESD (+ pozostałe ACC i strony ute5b) | zgodne |
| opis §1 | „łączy skaner serii MS85x z portem USB komputera”; ochrona ESD (ESD enhanced); zamienny lub zapasowy | WWW jw.; dla modeli Bluetooth przewód interfejsu łączy podstawkę ładującą z komputerem: `$SP/ute5b/oficjalne/3878_MS852B_UM_V1_7_20260618.pdf` 1.4 „connect the cradle and the PC via the interface cable” | zgodne dla przewodowych; dla bezprzewodowych nieścisłe |
| opis §2 | USB-A i wtyk modułowy „który wchodzi do złącza przewodu w rękojeści skanera”; przewód MS85x można odłączyć i wymienić | zdjęcie 1550-905920G.png (USB-A + wtyk modułowy z osłoną); UM-852A 1.2 „Cable Connector”; DS-851 „replaceable cables” | zgodne dla przewodowych; modele Bluetooth z „Zgodności” nie mają tego złącza w rękojeści (zestaw MS852B: przewód USB-C do ładowania albo podstawka z przewodem interfejsu) |
| spec: PN, typ, zgodność | ESD enhanced; 12 modeli | ACC-* i strony ute5b | zgodne |
| applications | wymiana przewodu; „Zapasowy przewód w strefach EPA” | „ESD enhanced” nie jest w dokumentach Unitech zdefiniowane jako tworzywo ESD-safe do stref EPA; ten sam przewód jest akcesorium zwykłego MS852 | nadinterpretacja |
| imageDescriptions | USB-A i wtyk modułowy z osłoną | obejrzany — zgodne | zgodne |
| downloads / related | brak / 3 akcesoria, 12 skanerów | — | zgodne |

Niezgodności i propozycje:
- opis §2: „…a z drugiej wtyk modułowy, który wchodzi do złącza przewodu w rękojeści skanera. Dzięki temu złączu przewód skanera MS85x można odłączyć i wymienić.” → „…a z drugiej wtyk modułowy. W skanerach przewodowych MS85x wtyk wchodzi do złącza w rękojeści, więc przewód można odłączyć i wymienić. W modelach bezprzewodowych przewód łączy z komputerem podstawkę ładującą.” (ostatnie zdanie — tylko po potwierdzeniu, że 1550-905920G pasuje do podstawek; dokumenty wymieniają go przy modelach bezprzewodowych, ale nie piszą, do czego się go podłącza; inaczej usunąć).
- applications[1]: „Zapasowy przewód w strefach EPA” → „Zapasowy przewód do skanerów MS85x, także w wersjach ESD”.

#### unitech-ms282e-podstawka (5200-900013G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Podstawka hands-free Unitech MS282e (5200-900013G)” | ACC-MS282e „Stand 5200-900013G”; DS-282 „Accessories: Hands Free Stand” | zgodne |
| shortDescription / seoDescription | stoi na blacie; tryb prezentacyjny | DS-282 „presentation mode…”, „barcode scanner stand (optional)” | zgodne |
| opis §1 | giętkie ramię nad blatem; w podstawce tryb prezentacyjny | zdjęcie 5200-900013G.png (gęsia szyja); DS-282 | zgodne |
| opis §2 | zestaw MS282-3UCB00-SG jej nie zawiera | DS-282 Package „MS282e Scanner, USB Cable” | zgodne |
| spec: PN, typ, zgodność | MS282e | ACC-MS282e | zgodne |
| applications / imageDescriptions | bez trzymania / dwie podstawki, pusta i z MS282e | obejrzany — zgodne | zgodne |
| downloads / related | brak / unitech-ms282e | — | zgodne |

Niezgodności i propozycje: brak.

---

#### Miejsca o podwyższonym ryzyku — wynik

| punkt | wynik |
|---|---|
| DotCode w MS852 | ZGODNE. DS-852 RevD (05/26) 2D: „QR Code, DotCode, …”; UM-852A V1.4 change log „2026/6/18 Add Dot Code”, 3.15.20 „Dot Code… Enable” (fabrycznie wyłączony). MS852 Plus: DS-852P „Dot Code”, WWW „Support OCR, DotCode, and Digimarc” — ZGODNE. Opcjonalnie dopisać, że DotCode w MS852 włącza się kodem. |
| Gwarancje 11 modeli | ZGODNE: 60 mies. MS852, MS852 Plus, MS852 LR, MS852 DPM ESD, MS852 Plus ESD, MS851 ESD, MS282e (WWW: „60 months” + „five years”); MS836 15 mies. („fifteen months”); MS250 24 mies. („two years”). MS838 (WWW „15 months” vs „thirty-six months”) i TS100 (WWW/EU „15 months” vs „two years”) — brak wiersza słuszny; opisy i FAQ tych kart nie podają gwarancji. |
| „High Density” przy MS852 Plus i MS852 Plus ESD (MS852-ZUCB00-SG/-LG) | BRAK DOWODU UNITECH. Żaden plik Unitech (DS-852P, DS-PESD, UM-852P, FAQ, WWW) nie używa „High Density/HD”. Potwierdzają tylko dystrybutorzy (BarcodeFactory, ERS, Levata). Do usunięcia z treści lub do decyzji właściciela (7 miejsc na karcie Plus ESD, 6 na karcie Plus, w tym tooltip „Optyka” i filtr „Gęste kody (HD)” zasilany polem „Typ skanera”). |
| Zestaw MS836-SUCBS0-SG (podstawka?) | NIEROZSTRZYGNIĘTE w dokumentach: UM-836 dla tego PN — skaner + QSG, podstawka i przewód opcjonalne; WWW — „includes stand”. Brak listingu u dystrybutorów. Karta poprawnie pisze „potwierdzamy przy zamówieniu” (spec. i FAQ 1). |
| Zestaw MS838-2UCB0S-SG (podstawka w zestawie) | ZGODNE: UM-838 1.1 „combo package… Hands free stand”; ERS „USB Cable, Hands-Free Stand”; BarcodeFactory „USB (With Stand)”; Levata „with USB cable and hands free sta[nd]”; RS-232 (2RCB00-SG) bez podstawki — BarcodeFactory i Levata. |
| Nazwy silników skanujących | ZGODNE: żadna karta z zakresu A nie podaje nazwy silnika (SE4107, N6703, SE2707, 7250 itp. nie występują w treści). |
| Wysokości upadków i IP | ZGODNE z DS: MS852, Plus, DPM ESD, Plus ESD, MS851 ESD — 2,1 m, IP42; MS852 LR — 1,8 m (2,2 m w etui), IP42; MS838 — 1,5 m, IP52; MS836 — 1,5 m, IP52; MS282e — 1,5 m, IP42; MS250 — 1,5 m, bez IP (DS nie podaje); TS100 — 1,0 m, bez IP (DS nie podaje). Rozbieżności UM (LR 2,1 m; MS851 2 m) — do decyzji, karty = DS. |
| Filtr upadków (pierwsza wysokość w wierszu) | ZGODNE: w polu „Odporność na upadki” pierwsza liczba to właściwa wysokość; MS852 LR ma 2,2 m w osobnym wierszu („Upadek w etui ochronnym”), więc filtr (`category-filters.ts`, wzorce dla „Odporność na upadki”) da „1,8 m”. TS100 „1,0 m” trafi do „do 1,5 m”. |
| Interfejsy TS100 | ZGODNE: DS-TS i UM-TS „USB, RS232” (RS-232 przez przewód RS-232, funkcja Auto-Cable); karta: spec „USB” dla PN, FAQ 4 „Model obsługuje USB i RS-232… wariantu RS-232 nie oferujemy”. |
| Interfejsy MS282e | ZGODNE: DS-282 „Host Interface supported USB”; UM-282 2.3 tryby USB HID Keyboard, USB CDC, USB HID-POS = karta „klawiatura HID, wirtualny port COM, HID-POS”. |
| Zgodność 5200-900014G z MS838 (`unitech-ms83x-podstawka`, w zakresie A tylko powiązanie z MS838) | ZGODNE: ACC-MS838 „Hands free stand PN#5200-900014G”, WWW-MS838 „Hands-Free Stand (P/N: 5200-900014G)”. MS836B/MS838B — poza zakresem A. |

#### Podsumowanie

- Kart sprawdzonych: 16 (11 skanerów przewodowych, 5 akcesoriów). Wszystkie 32 odnośniki do pobrania (31 plików; QSG MS852 Plus jest wspólna dla Plus i Plus ESD) prowadzą do istniejących plików, każdy jest identyczny (MD5) z oficjalnym PDF Unitech, rozmiary na kartach są poprawne.
- Niezgodności do poprawy: 14 grup (w nawiasie liczba miejsc w treści):
  1. „High Density” bez dowodu w dokumentach Unitech — unitech-ms852-plus (6) i unitech-ms852-plus-esd (7).
  2. MS851 ESD: „long range 1D barcodes” przetłumaczone jako „długie kody liniowe” — opis, applications, FAQ 5 w MS852 DPM ESD (3).
  3. MS282e FAQ 3: przełączanie trybu po włożeniu/wyjęciu z podstawki — brak w dokumentach (1).
  4. MS282e FAQ 1: „Sense jest ustawieniem fabrycznym” — UM mówi Sense, QSG mówi Trigger (1).
  5. Przewód 1550-905920G: opis złącza w rękojeści nie dotyczy modeli bezprzewodowych z listy zgodności; „strefy EPA” to nadinterpretacja „ESD enhanced” (2).
  6. MS852 Plus FAQ 2: notatka o źródłach danych („Zasięgi w specyfikacji nie są podane…”) (1).
  7. MS852 DPM ESD FAQ 2: „nie sprawiają problemu” zamiast „większość kodów” (1).
  8. Podstawka 5200-900009G: uogólnienie „Żaden zestaw…” i nieścisłe „wkręty płaskie” (2).
  9. Uchwyt 5200-900011G: „Nie jest podstawką hands-free” (brak w dokumentach) i „Obsługuje” (2).
  10. Opisy zdjęć: MS852 LR [2], MS851 ESD [0] i [1], MS250 [0] (4).
  11. MS852 opis: „obudowa ma 147 g” (1).
  12. MS250 FAQ 5: „Budżetowe” (1).
  13. Unikalność: zdanie o prefiksie i sufiksie w MS836 i MS838 (1).
  14. MS852 Plus ESD FAQ 1: „wyłącznie interfejs USB” przy sprzecznym WWW (1, do decyzji).
- Najważniejsze 5:
  1. Usunąć „High Density” z kart MS852 Plus i MS852 Plus ESD (opis, nazwy wariantów, atrybut „Optyka” z tooltipem, seoTitle, FAQ) albo uzyskać dokument Unitech. Przy okazji ustalić, czy zasięgi z DS dotyczą wersji Z.
  2. MS851 ESD i FAQ MS852 DPM ESD: „długie kody liniowe” → „kody 1D z dużej odległości”.
  3. MS282e FAQ 3 i FAQ 1: usunąć niepotwierdzone przełączanie trybu w podstawce i wskazanie trybu fabrycznego (UM vs QSG).
  4. Przewód 1550-905920G: zawęzić opis złącza do skanerów przewodowych; usunąć „strefy EPA”.
  5. Ustalić u dostawcy zawartość MS836-SUCBS0-SG (podstawka i przewód) — dokumenty Unitech są sprzeczne; karta na razie słusznie pisze „potwierdzamy przy zamówieniu”.

### Załącznik B1: skanery bezprzewodowe MS85x, MS82x, MS83x (9)

Źródło tekstu kart: `src/data/unitech-wireless-scanner-products.ts`, linie 1–804 (commit 75697df1).
Dowody wyłącznie z plików Unitech w `$SP/ute5b/oficjalne/`, `$SP/ute5a/oficjalne/` (FAQ MS852, arkusze `ute5a/acc/*.xlsx`) i stron `$SP/ute5b/web/detail-*.txt`. Dystrybutorzy (`bf-*`, `ers-*`, `levata-*`) podani tylko jako uzupełnienie.

Skróty dokumentów:
- **DS852B** `4236_MS852B_RevI(SE4107).pdf`; **UM852B** `3878_MS852B_UM_V1_7_20260618` (§1.1, §1.4, §1.5, §1.9); **QSG852B** `1161_MS852B-QSG-20200320`; **W852B** `web/detail-MS852B.txt`
- **DS+** `342_MS852B_PLUS_RevF.pdf`; **UM+** `1159_MS852B_Plus_UM_V1_7_20250221` (§1.1, §1.3, §1.5); **W+** `web/detail-MS852BPlus.txt`
- **DSLR** `1170_MS852LR_series_RevF(3).pdf`; **UMLR** `2301_MS852B_LR_UM_V1_4_20250221` (§1.1, §1.3); **WLR** `web/detail-MS852BLR.txt`; **FAQ852** `ute5a/oficjalne/1856_FAQ-MS852_website`
- **DSP** `4668_MS852P_RevB.pdf`; **UMP** `4709_MS852P_UM_V1_0_20221202` (§1.1, §1.3, §1.4.1, §1.5); **QSGP** `4692_MS852P_QSG_V1_0_20221107(1).pdf` (str. 1, obraz); **WP** `web/detail-MS852P.txt`
- **DSESD** `1542_MS852Bplus_ESD_RevC.pdf`; **WESD** `web/detail-MS852BPLUS_ESD.txt`
- **DS851** `1541_MS851B_ESD_RevB.pdf`; **W851** `web/detail-MS851BESD.txt`
- **DS822** `5033_MS822B_RevJ.pdf`; **UM822** `5152_MS822B_UM_V2_5_20261006` (§1.1–1.5); **W822** `web/detail-MS822B.txt`
- **DS838** `3834_MS838B_RevK.pdf`; **UM838** `4015_MS838B_UM_V3_4_20250408` (§1.1, §1.3, §1.4.1, §1.5, §2.4.2, §2.5 = PDF str. 31–32); **QSG838** `4016_MS838B_QSG_V2_3_20261020`; **W838** `web/detail-MS838B.txt`
- **DS836** `3833_MS836B_RevL.pdf`; **UM836** `4017_MS836B_UM_V2_6_20250408` (§1.1, §1.3, §2.5 str. 13–14); **W836** `web/detail-MS836B.txt`

Pliki do pobrania: wszystkie 22 pliki istnieją w `public/downloads/unitech/`; każdy jest bajt w bajt (md5) identyczny z oficjalnym PDF Unitech, a podane rozmiary zgadzają się z `stat` (szczegóły w sekcjach kart).

---

#### unitech-ms852b (MS852-AUBB0C-SG)

| element | na stronie (cytat/wartość) | dokument (plik, miejsce, cytat/wartość) | ocena |
|---|---|---|---|
| name / seoH1 | „Unitech MS852B” | DS852B nagłówek „MS852B Bluetooth® 2D Imager Scanner” | zgodne |
| seoTitle | „Skaner Bluetooth Unitech MS852B 2D ze stacją ładującą” | DS852B: Bluetooth, 2D, „Package Contents … Cradle” | zgodne |
| seoDescription | „Bluetooth do 100 m, stacją ładującą i akumulatorem 2850 mAh … PN: MS852-AUBB0C-SG” | DS852B „Wireless Coverage 100m (line of sight)”, „Battery Capacity 2850mAh”; PN: bf-ms852b.txt (1 dystrybutor) + FAQ852 („second letter … ‘U’ for USB”) | zgodne |
| shortDescription | „matryca 1280 × 960, odczyt OCR i kodów z ekranów telefonów, do 20 godzin pracy” | DS852B „CMOS sensor with 1280 x 960 pixels”, „Support OCR, most 1D / 2D barcode on mobile screens”, „Operating Time 20 hours” | zgodne |
| opis, zd. 1 | „do magazynu, produkcji, logistyki i ogólnego skanowania w handlu” | DS852B wstęp: „warehousing, manufacturing, logistics to general purpose retail scanning” | zgodne |
| opis, zd. 2 | „Radzi sobie z kodami 1D i 2D na wyświetlaczach telefonów, także z kodami zniszczonymi albo wydrukowanymi w słabej jakości.” | DS852B „even damaged or poorly printed barcodes” | zgodne merytorycznie; styl potoczny („Radzi sobie”) |
| opis, zd. 3 | „Rozpoznaje też znaki OCR.” | DS852B „it is available to read OCR” | zgodne |
| opis, zd. 4 | „Sensor 1280 × 960 … rolling shutter rozróżnia Code 39 od 5 mil i PDF417 od 6,6 mil.” | DS852B „Optical Resolution 5.0 mil (Code 39), 6.6 mil (PDF417)” | liczby zgodne; słowo „rozróżnia” błędne (to rozdzielczość odczytu) |
| opis, zd. 5 | „DotCode i kody pocztowe, np. Intelligent Mail, KIX i Planet” | DS852B 2D: „DotCode”; Postal: „Intelligent Mail Bar Code … KIX (Netherlands) Post … Planet Code” | zgodne |
| opis, zd. 6 | „Po odłożeniu do stacji ładującej skaner sam paruje się z nią przez Bluetooth.” | UM852B §1.4 pkt 2: „put the scanner on the cradle to start the BT pairing automatically” | zgodne |
| opis, zd. 7 | „Automatyczny tryb prezentacyjny włącza się kodem ustawień: w stacji … bez naciskania spustu, a po wyjęciu wraca do trybu ze spustem.” | UM852B §1.9 „To enable auto presentation mode: Scan the barcode below ‘enable’”, „switch to manual trigger mode when the scanner is removed”; domyślnie „Disable*” | zgodne |
| opis, zd. 8–9 | bufor 20 KB w trybie Auto, wysyłka po powrocie; tryb wsadowy 7 MB | DS852B „Memory Buffer 7MB for batch mode / 20KB for auto mode”; „transmit to the host when back to the wireless coverage” | zgodne |
| opis, zd. 10 | „Wymienny akumulator 2850 mAh daje do 20 godzin pracy, a pełne ładowanie trwa poniżej 6,5 godziny.” | DS852B „replaceable battery pack”, „2850mAh”, „<6.5 hours”, „20 hours”; W852B „Battery Charging time 7 hours”; UM852B §1.5 „approximately 5 hours” | zgodne z DS; rozbieżność dokumentów → do decyzji |
| opis, zd. 11 | „Obudowa IP42 znosi zrzuty na beton z wysokości 2,1 m.” | DS852B „IP42”, „2.1M onto concrete (scanner only)” | zgodne |
| opis, zd. 12 | „Stacja ładująca z przewodem USB należy do zestawu.” | DS852B Package: „Scanner with battery, Cradle, Interface cable”; UM852B §1.1 „Interface Cable (USB cable or RS232 cable + Power Adapter)”; FAQ852: litera „U” = USB | zgodne |
| spec: Typ, Matryca | 2D, Bluetooth, stacja; „CMOS 1280 × 960, migawka rolling shutter” | DS852B Sensor | zgodne |
| spec: Celownik i oświetlenie | „Celownik zielony LED 610 nm; jedna ciepła biała dioda” | DS852B „610nm, Green LED”, „1 warm white LED” | zgodne |
| spec: Rozdzielczość | „5,0 mil (Code 39), 6,6 mil (PDF417)” | DS852B | zgodne |
| spec: Głębia ostrości | UPC 100% 4,6–49,5 cm; QR 20 mil 3,8–29,2 cm; Code 39 5 mil 6,1–24,1 cm; DM 10 mil 7,4–21,6 cm | DS852B DOF: 1.8 in/4.6 cm–49.5 cm; 3.8–29.2 cm; 6.1–24.1 cm; 7.4–21.6 cm | zgodne |
| spec: Kody 2D | QR, DotCode, Data Matrix, Aztec, PDF417, Micro PDF417, MaxiCode, Codablock A i F, GS1 Composite, Han Xin; OCR | DS852B 2D (dodatkowo Macro PDF417) | zgodne |
| spec: Kody pocztowe | Australian, British, Canadian, InfoMail, Intelligent Mail, Japanese, KIX, Korea, Planet, Postnet | DS852B Postal | zgodne |
| spec: Interfejsy, Łączność BT | USB przez przewód stacji; HID i SPP; Dual mode LE 4.2 i 2.1+EDR, 100 m | DS852B „Serial Port and HID profiles”, „USB, RS232”, „Bluetooth® LE V4.2 / 2.1+EDR, Class1 Dual mode”, „100m (line of sight)” | zgodne |
| spec: Pamięć | 7 MB / 20 KB | DS852B | zgodne |
| spec: Akumulator | wymienny 2850 mAh; <6,5 h; do 20 h | DS852B (W852B 7 h, UM852B ~5 h) | zgodne z DS; do decyzji |
| spec: IP, upadek, ESD, temperatury | IP42; 2,1 m; 8 kV/15 kV; −10…+50°C; −40…+70°C | DS852B Environmental | zgodne |
| spec: Wymiary i masa | 87,8 × 71,6 × 177,7 mm, 213 g; stacja 120,6 × 88,7 × 86,0 mm | DS852B Mechanical | zgodne |
| spec: Zawartość zestawu | skaner z akumulatorem, stacja, przewód USB | DS852B Package; UM852B §1.1 | zgodne |
| spec: Gwarancja | 36 miesięcy | W852B „Hardware Warranty 36 months” (DS bez wiersza) | zgodne |
| applications | inwentaryzacja; ekrany telefonów; OCR i kody pocztowe | DS852B | zgodne |
| variants | MS852-AUBB0C-SG, Bluetooth, stacja, przewód USB | jak wyżej | zgodne |
| imageDescriptions (3) | przód pod kątem, żółty spust; bok w stacji; tył w stacji | obejrzane `MS852-AUBB0C-SG*.png` | zgodne |
| downloads | DS 1,2 MB; UM 4,5 MB; QSG 2,7 MB | md5 = 4236 (1 236 397 B), 3878 (4 677 654 B), 1161 (2 781 134 B) | zgodne |
| relatedAccessories | stacja 5000-900064G, akumulator 1400-900055G, podstawka 5200-900009G, uchwyt 5200-900011G, etui 386793G, przewód 1550-905920G, zasilacz 1010-900067G | W852B Accessories: wszystkie 7 PN na liście; `acc-MS852.xlsx` | zgodne |
| FAQ 1 (vs Plus) | „sensor 1280 × 960 … który rozróżnia Code 39 od 5 mil … 20 godzin”; Plus: 1280 × 800 global, od 3 mil, ponad 25 h, Digimarc | DS852B; DS+ „1280 X 800 global shutter”, „1D 3mil”, „>25 hours”, „Digimarc” | liczby zgodne; „rozróżnia” — styl |
| FAQ 2 | UPC 4,6–49,5 cm, QR 20 mil 3,8–29,2 cm; dalej MS852B LR | DS852B DOF | zgodne |
| FAQ 3 | tryb prezentacyjny po kodzie „enable”, po wyjęciu spust | UM852B §1.9 | zgodne |
| FAQ 4 | „W zestawie z przewodem USB stacja ładuje skaner po podłączeniu do komputera. Zasilacz jest dołączany do wersji z przewodem RS-232 …” | UM852B §1.1 „RS232 cable + Power Adapter” (zgodne); ładowanie stacji z portu USB komputera — dokumenty mówią tylko „connect the cradle and the PC via the interface cable” i „charge your scanner with the cradle” | 2. zdanie zgodne; 1. zdanie brak wprost (wniosek) |
| FAQ 5 | MS852P z odbiornikiem USB 2,4 GHz; MS852B Plus ESD | DSP „Unlicensed 2.4GHz”, „USB(via dongle)”; DSESD | zgodne |

Niezgodności i propozycje:
1. Styl, opis zd. 2: było „Radzi sobie z kodami 1D i 2D na wyświetlaczach telefonów, także z kodami zniszczonymi albo wydrukowanymi w słabej jakości.” → ma być „Odczytuje kody 1D i 2D z ekranów telefonów, także kody uszkodzone lub słabo wydrukowane.” (DS852B: „even damaged or poorly printed barcodes”).
2. Precyzja, opis zd. 4: było „… rolling shutter rozróżnia Code 39 od 5 mil i PDF417 od 6,6 mil.” → ma być „… rolling shutter odczytuje Code 39 od 5 mil i PDF417 od 6,6 mil.”; FAQ 1: było „który rozróżnia Code 39 od 5 mil” → „który odczytuje Code 39 od 5 mil” (DS852B „Optical Resolution 5.0 mil”).

Do decyzji właściciela:
- Czas ładowania: DS852B „<6.5 hours”, W852B „7 hours”, UM852B §1.5 „approximately 5 hours”. Karta podaje DS (<6,5 h) — wersja bezpieczna, można zostawić.
- FAQ 4, zdanie 1 (ładowanie w stacji zasilanej z komputera) nie ma wprost w dokumentach MS852B (wynika z braku zasilacza w zestawie USB). Bezpieczniej: „Zestaw z przewodem USB nie zawiera zasilacza. Stację łączy się z komputerem przewodem USB z zestawu. Zasilacz jest dołączany do wersji z przewodem RS-232, której nie ma w ofercie.”

---

#### unitech-ms852b-plus (MS852-VUBB0C-SG, MS852-ZUBB0C-SG)

| element | na stronie (cytat/wartość) | dokument (plik, miejsce, cytat/wartość) | ocena |
|---|---|---|---|
| name / seoH1 | „Unitech MS852B Plus” | DS+ „MS852B+ Bluetooth® High Performance 2D Imager Scanner”; W+ „MS852B Plus” | zgodne |
| seoTitle | „… 2D z migawką globalną” | DS+ „1280 X 800 global shutter” | zgodne |
| seoDescription | „imager 2D 1280 × 800 z migawką globalną, odczytem OCR, DotCode i Digimarc, **wersje SR i HD** … PN: MS852-VUBB0C-SG, MS852-ZUBB0C-SG” | DS+/W+/UM+: brak słów „SR”, „HD”, „High Density”; HD dla ZUBB0C-SG tylko u dystrybutorów (ERS „HD (high density)”, BarcodesInc „2D High Density, N6703”); dla VUBB0C-SG brak źródła konfiguracji | 1280 × 800, OCR, DotCode, Digimarc zgodne; „wersje SR i HD” — brak w dokumentach Unitech |
| shortDescription | „… migawką globalną, odczytem OCR, DotCode i Digimarc; wersje SR i HD.” | jw. | brak (SR/HD) |
| opis, akap. 1 | 1280 × 800 global; logistyka, produkcja, inwentaryzacja w magazynach handlowych; OCR z paszportu, DotCode na oponach i paczkach papierosów, Digimarc na opakowaniach | DS+ wstęp: „OCR on passport, Dot codes on tires or cigarette package, and Digimarc barcode on special retail packages”; W+ „logistics, inventory management in retail warehousing … manufacturing” | zgodne |
| opis, akap. 2, zd. 1 | „3 mil (0,075 mm) … do 100 000 luksów, czyli w pełnym słońcu” | DS+ „1D 3mil/ 0.075mm”, „100,000 Lux (Sunlight)” | zgodne |
| opis, akap. 2, zd. 2 | „Celownik jest laserowy czerwony, a oświetlenie białe.” | UM+ §1.3 „Aiming Element Red laser”, „White LED”; DS+/W+ „Red laser or 528 nm visible green LED”, „White or Red LED” | zgodne z UM; DS dopuszcza dwie opcje → do decyzji |
| opis, akap. 2, zd. 3 | „Wersja standardowa (SR) odczytuje kod UPC 13 mil z odległości do 57,3 cm, natomiast 20-milowy Code 39 z odległości do 80 cm.” | DS+ DOF „13 mil UPC … 57.3 cm”, „20 mil Code 39 … 80 cm” — tabela bez przypisania do wersji SR | liczby zgodne; przypisanie do „SR” — brak |
| opis, akap. 3 | ponad 25 h (odczyt co 5 s); <6,5 h; pamięć poza zasięgiem; 7 MB wsadowo; „Oferta obejmuje wersję standardową (SR) i wersję HD do drobnych kodów.” | UM+ §1.3 „>25 hours (Based on 1 scan/5 seconds)”, „<6.5 hours”; DS+ Auto Mode/batch, „7MB” | czas, ładowanie, pamięć zgodne; ostatnie zdanie — brak |
| spec: Part Number, Typ | „MS852-VUBB0C-SG (SR), MS852-ZUBB0C-SG (HD)”; „wersja SR (standardowa) i HD (gęste kody)” | jw. | brak (SR/HD) |
| spec: Matryca, Celownik, Rozdzielczość | 1280 × 800 global; laser czerwony, białe LED; 3 mil (0,075 mm) | DS+, UM+ | zgodne (celownik — do decyzji) |
| spec: Głębia ostrości (SR) | UPC 13 mil 3,4–57,3 cm; Code 39 20 mil 3,5–80 cm; Code 39 5 mil 7–30,1 cm; QR 15 mil 3,3–39 cm | DS+ DOF: 3.4–57.3; 3.5–80; 7–30.1; 3.3–39 | liczby zgodne; etykieta „(SR)” — brak |
| spec: Kody specjalne, pocztowe | OCR, DotCode, Digimarc; Australian … Netherlands Post, Planet, Postnet | DS+ Symbologies/Postal; W+ „Support OCR, DotCode, and Digimarc” | zgodne |
| spec: Odporność na światło | do 100 000 luksów | DS+ | zgodne |
| spec: Interfejsy, BT | USB przez stację; HID/SPP; LE 4.2 + 2.1+EDR; 100 m | DS+ Communication | zgodne |
| spec: Pamięć | 7 MB / 20 KB | DS+ | zgodne |
| spec: Akumulator | wymienny 2850 mAh; <6,5 h; ponad 25 h (1 odczyt co 5 s) | DS+ „replaceable”, „2850mAh”, „<6.5 hours”, „>25 hours”; UM+ „(Based on 1 scan/5 seconds)” | zgodne |
| spec: IP, upadek, temperatury, wymiary, masa | IP42; 2,1 m; −10…+50; −40…+70; 87,8 × 71,6 × 177,7 mm, 213 g; stacja 120,6 × 88,7 × 86,0 | DS+ | zgodne |
| spec: Zawartość zestawu | skaner z akumulatorem, stacja, przewód USB | DS+ Package; UM+ §1.1 „Interface Cable (USB cable or RS232 cable + Power Adapter)” | zgodne |
| spec: Gwarancja | 36 miesięcy | W+ „Hardware Warranty 36 months” | zgodne |
| applications | logistyka, DotCode na oponach, OCR dokumentów | DS+ | zgodne |
| variants + atrybut „Optyka” | „Standardowa (SR)” / „Gęste kody (HD)” | brak w dokumentach Unitech (jw.) | brak |
| tooltip „Optyka” | SR: UPC 13 mil do 57,3 cm, Code 39 20 mil do 80 cm; HD: „np. Data Matrix o module 6,7 mil” | DOF z DS+ bez wersji; „6,7 mil DM” występuje tylko w DSESD (MS852B+ ESD), nie w dokumentach MS852B Plus | brak (przeniesienie z innego modelu) |
| imageDescriptions (3) | bok w stacji; przód pod kątem, żółty spust; tył w stacji | obejrzane `MS852-VUBB0C-SG*.png` | zgodne |
| downloads | DS 499 KB; UM 5,8 MB; QSG 2,7 MB | md5 = 342 (510 534 B = 498,6 KiB), 1159 (6 094 550 B), 1162 (2 832 564 B) | zgodne |
| relatedAccessories | 5000-900064G, 1400-900055G, 5200-900009G, 5200-900011G, 386793G, 1550-905920G, 1010-900067G | W+ Accessories; `acc-MS852PLUS.xlsx` | zgodne |
| FAQ 1 | global shutter, od 3 mil (nie 5), 20 → ponad 25 h, Digimarc; MS852B rolling shutter | DS+, DS852B | zgodne |
| FAQ 2 „SR czy HD?” | SR UPC 13 mil do 57,3 cm; HD Data Matrix 6,7 mil | jw. | brak |
| FAQ 3 | 100 m to zasięg radia, nie odczytu | DS+ „Wireless Coverage 100m” vs DOF | zgodne |
| FAQ 4 | ponad 25 h przy odczycie co 5 s; 2850 mAh, wymienny, <6,5 h | UM+ §1.3 | zgodne |
| FAQ 5 | ESD; MS852B LR do 21 m | DSESD; DSLR „up to 21m” | zgodne |

Niezgodności i propozycje (brak dowodu w dokumentach Unitech dla wersji SR/HD):
1. seoDescription: było „…, wersje SR i HD.” → ma być „…, odczyt OCR, DotCode i Digimarc.” (bez SR/HD), PN na końcu bez zmian.
2. shortDescription: było „…; wersje SR i HD.” → ma być „… odczytem OCR, DotCode i Digimarc.”
3. Opis, akap. 2: było „Wersja standardowa (SR) odczytuje kod UPC 13 mil z odległości do 57,3 cm, natomiast 20-milowy Code 39 z odległości do 80 cm.” → ma być „Skaner odczytuje kod UPC 13 mil z odległości do 57,3 cm, a 20-milowy Code 39 z odległości do 80 cm.” (DS+ DOF).
4. Opis, akap. 3: było „Oferta obejmuje wersję standardową (SR) i wersję HD do drobnych kodów.” → usunąć albo „Oferta obejmuje dwa numery PN: MS852-VUBB0C-SG i MS852-ZUBB0C-SG.”
5. Spec „Typ skanera”: usunąć „; wersja SR (standardowa) i HD (gęste kody)”; „Głębia ostrości (SR)” → „Głębia ostrości”.
6. Tooltip „Optyka” i FAQ 2: wartość „Data Matrix 6,7 mil” pochodzi z karty MS852B+ ESD (DSESD), nie z dokumentów MS852B Plus — usunąć z tooltipu i FAQ niezależnie od decyzji w sprawie SR/HD.

Do decyzji właściciela:
- SR/HD: dokumenty Unitech (DS+, W+, UM+ 1159, UM 2287, QSG 1162) nie wymieniają wersji. Dwóch dystrybutorów nazywa MS852-ZUBB0C-SG wersją HD (`ute5b/web/dist/ers-acc-MS852-ZUBB0C-SG.txt` „HD (high density)”; `ute5a/web/bf-ms852-plus.txt` „2D High Density, N6703”). Dla MS852-VUBB0C-SG = SR nie ma żadnego źródła. Wg reguły briefu („tylko z dowodem w dokumencie Unitech”) wersje trzeba usunąć; wg reguły PN („dwóch zgodnych dystrybutorów”) HD dla ZUBB0C-SG ma podstawę, SR dla VUBB0C-SG — nie. Jeśli warianty zostają, atrybut „Optyka” powinien mieć tooltip bez liczb (tabela DOF w DS+ nie jest przypisana do wersji).
- Celownik/oświetlenie: DS+/W+ „Red laser or 528 nm visible green LED” / „White or Red LED”, UM+ §1.3 „Red laser” / „White LED”. Karta = UM. Możliwe, że opcje zależą od wersji silnika — bezpieczniej zostawić UM albo usunąć wiersz.

---

#### unitech-ms852b-lr (MS852-OUBB0C-SG)

| element | na stronie (cytat/wartość) | dokument (plik, miejsce, cytat/wartość) | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS852B LR”; „… 2D — odczyt do 21 m” | DSLR „MS852B LR (Wireless)”, „scanning range up to 21m away” | zgodne |
| seoDescription | „odczyt do 21 m, pamięć 590 000 kodów, stacja ładująca w zestawie … PN: MS852-OUBB0C-SG” | DSLR „can store 590,000 codes in memory”; Package „Cradle”; PN: bf-ms852b-lr.txt | zgodne |
| shortDescription | „odczyt do 21 m, tolerancja ruchu, pamięć do 590 000 kodów, stacja ładująca” | DSLR „excellent motion tolerance design” | zgodne |
| opis, akap. 1, zd. 1 | magazyny (regały, palety), place, produkcja, serwis w terenie | WLR „warehouse, yard, field service, and manufacturing facility” | zgodne |
| opis, akap. 1, zd. 2 | „Code 39 o module 100 mil … do 17,78 m, kody QR 100 mil do 20,85 m, a z bliska od 7,6 cm.” | DSLR DOF „100 mil Code 39 (paper) 50.8 cm–1778.0 cm”, „100 mil QR 40.0 cm–2085.0 cm”, „10 mil Code 39 7.6 cm–215.9 cm” | liczby zgodne; „a z bliska od 7,6 cm” sugeruje 7,6 cm dla kodów 100 mil (w DS: 50,8 cm i 40 cm) — nieprecyzyjne |
| opis, akap. 1, zd. 3–4 | Code 128 odblaskowy 100 mil do 17,78 m; 1280 × 800 global + tolerancja ruchu | DSLR „100 mil Code 128 (reflective) 76.2 cm–1778.0 cm”, „1280 X 800 global shutter”, „read barcode while moving” | zgodne |
| opis, akap. 2 | celownik 655 nm; czerwone 660 nm; głośniejszy sygnał i jaśniejsze diody w ciemnym miejscu; 590 000 kodów poza zasięgiem | DSLR „Aiming Element 655nm”, „Hyper Red 660nm”, „louder beeper and brighter LED … even in dark environment”, „When it is out of range … store 590,000 codes” | zgodne |
| opis, akap. 3 | bez etui IP42 1,8 m; etui 386793G → 2,2 m; 233 g; ponad 12 h; 2850 mAh; stacja z przewodem USB i akumulator w zestawie | DSLR „1.8M onto concrete (2.2M with protection case)”, „233g (MS852B LR without cradle)”, „>12 hours”, „2850mAh”; Package „Scanner with battery, Cradle, Interface cable”; WLR akcesoria „Protective Case (PN#386793G)” | zgodne z DS (UMLR inaczej → do decyzji) |
| spec: Typ, Matryca, Celownik | daleki zasięg; 1280 × 800 global; 655 nm / Hyper Red 660 nm | DSLR | zgodne |
| spec: Rozdzielczość | 3,0 mil (Code 39), 5,0 mil (PDF417) | DSLR | zgodne |
| spec: Głębia ostrości | Code 39 100 mil 50,8 cm–17,78 m; Code 128 refl. 76,2 cm–17,78 m; QR 100 mil 40 cm–20,85 m; Code 39 10 mil 7,6 cm–2,16 m | DSLR DOF | zgodne |
| spec: Odporność na światło | do 107 639 lx | DSLR „107,639 lux” | zgodne |
| spec: Pamięć | 590 000 kodów; 7 MB / 20 KB | DSLR | zgodne |
| spec: Interfejsy, BT | USB przez stację; HID/SPP; LE 4.2 + 2.1+EDR; 100 m | DSLR Communication (MS852B LR) | zgodne |
| spec: Akumulator | wymienny 2850 mAh; <6,5 h; ponad 12 h (do 50 000 odczytów) | DSLR „<6.5 hours”, „>12 hours”, „Up to 50,000 scans at 1 scan/per sec by reading EAN8 at 20cm”; „replaceable” — WLR, UMLR §1.3 | zgodne z DS (warunek 1 odczyt/s pominięty — dopuszczalne) |
| spec: IP, upadki | IP42; 1,8 m; 2,2 m w etui 386793G | DSLR | zgodne z DS; UMLR „2.1M” → do decyzji |
| spec: temperatury | −10…+50; −40…+70 | DSLR „(MS852B LR)” | zgodne |
| spec: Wymiary i masa | 87,8 × 71,6 × 177,7 mm, 233 g; stacja 120,6 × 88,7 × 86,0 | DSLR | zgodne z DS; UMLR „253g” → do decyzji |
| spec: Zawartość zestawu | skaner z akumulatorem, stacja, przewód USB | DSLR Package; UMLR §1.1 (wersja z cradle: „Interface Cable (USB cable or RS232 cable + Power Adapter)”, „Charging Cradle”); brak odbiornika i etui | zgodne |
| spec: Gwarancja | 36 miesięcy | WLR „Hardware Warranty 36 months” | zgodne |
| applications | regały i palety; place i serwis; skanowanie w ruchu | DSLR/WLR | zgodne |
| variants | daleki zasięg, stacja, przewód USB | jw. | zgodne |
| imageDescriptions (3) | żółte etui 386793G; bok w stacji; przód pod kątem; przód w stacji | obejrzane `MS852-OUBB0C-SG*.png` (żółte etui jak na okładce DSLR) | zgodne (etui nie wchodzi w skład zestawu — alt to mówi) |
| downloads | DS 1,3 MB; UM 5,2 MB; QSG 2,6 MB | md5 = 1170 (1 357 917 B), 2301 (5 478 952 B), 2302 (2 725 557 B) | zgodne |
| relatedAccessories | etui, 5000-900064G, 1400-900055G, 5200-900009G, 5200-900011G, 1550-905920G, 1010-900067G | WLR Accessories; `acc-MS852LR.xlsx` | zgodne |
| FAQ 1 | 7,6 cm–21 m; QR 100 mil 20,85 m; Code 39 100 mil 17,78 m; w trybach automatycznych odległość ograniczona | DSLR; FAQ852 „When in automatic trigger mode (Presentation, Auto Aim or Auto Aim with Lighting) the reading distance … is limited” | zgodne |
| FAQ 2 | etui: 2,2 m z etui, 1,8 m bez | DSLR | zgodne |
| FAQ 3 | 590 000 kodów, wysyłka po powrocie | DSLR „store 590,000 codes … upload to your devices at your own convenience”; WLR „transmit to the host when back to the wireless coverage” (Auto Mode) | zgodne |
| FAQ 4 | LR: QR 100 mil 20,85 m, ponad 12 h; Plus: ponad 25 h, Code 39 20 mil 80 cm | DSLR, DS+ | zgodne |
| FAQ 5 | MS852B: krótszy zasięg, do 20 h | DS852B | zgodne |

Niezgodności i propozycje:
1. Opis, akap. 1: było „… kody QR 100 mil do 20,85 m, a z bliska od 7,6 cm.” → ma być „… kody QR 100 mil do 20,85 m. Najmniejsza odległość odczytu to 7,6 cm (Code 39 10 mil).” (DSLR: 7,6 cm dotyczy Code 39 10 mil; dla kodów 100 mil minimum to 50,8 cm i 40 cm).

Do decyzji właściciela (sprzeczność DSLR/WLR z UMLR §1.3):
- Masa: DSLR/WLR „233g” vs UMLR „253g without cradle”.
- Czas pracy: DSLR/WLR „>12 hours … 50,000 scans at 1 scan/per sec” vs UMLR „>40 hours (Based on 1 scan/5 seconds)”.
- Upadek: DSLR/WLR „1.8M (2.2M with protection case)” vs UMLR „2.1M onto concrete”.
- Ładowanie: DSLR/UMLR „<6.5 hours” vs WLR „7 hours”.
Karta używa wartości z karty katalogowej (233 g, >12 h, 1,8/2,2 m, <6,5 h) — to wersja bezpieczniejsza; zostawić.

---

#### unitech-ms852p (MS852-AUPBGC-SG)

| element | na stronie (cytat/wartość) | dokument (plik, miejsce, cytat/wartość) | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS852P”; „… 2D z odbiornikiem USB 2,4 GHz” | DSP „MS852P Wireless 2D Imager Scanner”, „Unlicensed 2.4GHz”, „Plug-and-play with USB dongle” | zgodne |
| seoDescription | radio 2,4 GHz, odbiornik USB, stacja i zasilacz w zestawie, do 15 h; PN | DSP „up to 15 hours”; UMP §1.1 „Dongle, MS852P with battery, USB Cable for cradle, Cradle, Power Adaptor”; PN: bf-ms852p + levata-ms852 | zgodne |
| shortDescription | radio 2,4 GHz i odbiornik USB zamiast Bluetooth; OCR-A i OCR-B; stacja i zasilacz | DSP „Supported OCR Symbologies: OCR-A, OCR-B” | zgodne |
| opis, akap. 1, zd. 1 | radio 2,4 GHz, bez Bluetooth | DSP Radio „Unlicensed 2.4GHz” | zgodne |
| opis, akap. 1, zd. 2 (ryzyko) | „Skaner łączy się z odbiornikiem USB z zestawu po zeskanowaniu adresu MAC nadrukowanego na odbiorniku.” | UMP §1.4.1 pkt 2 „Scan the MAC address on the dongle with MS852P.”; QSGP str. 1 „1. Scan the MAC address on the dongle using MS852P.” (rysunek: etykieta z kodem na odbiorniku) | zgodne |
| opis, akap. 1, zd. 3–4 | 10 m; stanowiska z laptopem lub komputerem | DSP „up to 10m in the line of open sight”, „quick pairing with laptop or PCs” | zgodne |
| opis, akap. 2 | szpitale (probówki), magazyny, produkcja, administracja; 1280 × 800, celownik 655 nm; słaby nadruk/uszkodzenie; OCR-A/B (paszporty); Code 39 20 mil do 91,7 cm; UPC-A do 63,2 cm; prefiks, sufiks, Code ID; LED, brzęczyk, wibrator | DSP: „test tubes … hospital, warehousing, manufacturing and government”, „1280 x 800”, „655 nm Laser”, „poorly printed or damaged”, „reading ID numbers on passports”, DOF „Code 39: 20 mil / 4.1 cm to / 91.7 cm”, „UPCA (100%) / 4.1 cm to / 63.2 cm”, „Prefix, Suffix, Code ID”, „LED & Beeper & Vibrator” | zgodne |
| opis, akap. 3 | wymienny 2850 mAh ładowany w stacji; ok. 5 h; do 15 h; odbiornik, stacja, przewód, zasilacz; IP42, 2,1 m | DSP „replaceable lithium-ion battery which is charged via cradle”, „2850 mAh”, „15 hours”, „IP42”, „2.1m”; UMP §1.5 „approximately 5 hours”; WP „Battery Charging time 7 Hours” | zgodne z UM; rozbieżność → do decyzji |
| spec: Matryca, Celownik i oświetlenie | CMOS 1280 × 800; laser 655 nm; jedna dioda Hyper Red 660 nm | DSP „One (1) Hyper Red 660 nm LED” | zgodne |
| spec: Rozdzielczość | 3 mil (Code 39), 5 mil (Code 128 i PDF417) | DSP | zgodne |
| spec: Głębia ostrości | Code 39 3 mil 7,6–14,7; Code 39 20 mil 4,1–91,7; UPC-A 4,1–63,2; QR 20 mil 2,8–44,5 cm | DSP DOF | zgodne |
| spec: Kody OCR | OCR-A, OCR-B | DSP | zgodne |
| spec: Interfejsy, Zasięg | USB przez odbiornik; 2,4 GHz, SPP i HID; 10 m | DSP „Wireless, SPP & HID profiles”, „USB(via dongle)”, „10M” | zgodne |
| spec: Akumulator | wymienny 2850 mAh; w stacji ok. 5 h; do 15 h | DSP; UMP §1.5 | zgodne z UM (WP 7 h) |
| spec: IP, upadek, temperatury, wymiary | IP42; 2,1 m; −10…+50; −40…+70; 87,8 × 71,6 × 177,7, 213 g; stacja 120,6 × 88,7 × 86,0 | DSP | zgodne |
| spec: Zawartość zestawu | skaner z akumulatorem, odbiornik USB, stacja, przewód USB do stacji, zasilacz | UMP §1.1; WP „What comes in the box” | zgodne |
| spec: Gwarancja | 36 miesięcy | WP „Hardware Warranty 36 months” | zgodne |
| applications | probówki; stanowiska komputerowe; OCR | DSP | zgodne |
| variants | radio 2,4 GHz, odbiornik USB, stacja, zasilacz | jw. | zgodne |
| imageDescriptions (2) | przód w stacji, czerwony celownik w oknie; przód pod kątem w stacji | obejrzane `MS852-AUPBGC-SG*.png` | zgodne |
| downloads | DS 710 KB; UM 9,7 MB | md5 = 4668 (727 453 B), 4709 (10 122 387 B = 9,65 MiB) | zgodne |
| relatedAccessories | 1400-900055G, 386793G, 5200-900009G, 5200-900011G, 1550-905920G, 1010-900067G (bez stacji 5000-900064G) | WP Accessories: wszystkie 6 PN; stacja MS852P to 5000-900104G (nie podpięta) | zgodne |
| FAQ 1 (ryzyko) | bez Bluetooth; włączenie skanera → skan adresu MAC na odbiorniku → odbiornik do USB → sygnał niski-średni-wysoki | UMP §1.4.1 pkt 1–4: „turn on”, „Scan the MAC address on the dongle”, „Insert a dongle into a USB port”, „beep with low-medium-high sound” | zgodne |
| FAQ 2 | 10 m; MS852B 100 m | DSP; DS852B | zgodne |
| FAQ 3 | OCR-A i OCR-B, paszporty | DSP | zgodne |
| FAQ 4 | zestaw; ładowanie ok. 5 h | UMP §1.1, §1.5 | zgodne z UM |
| FAQ 5 | MS838B (odbiornik w kluczu USB), MS822B (odbiornik w stacji) | DS838 „comes with a USB dongle”; DS822 „Cradle integrated with 2.4G Dongle” | zgodne |

Niezgodności i propozycje: brak.

Do decyzji właściciela:
- Czas ładowania: UMP §1.5 „approximately 5 hours” vs WP „7 Hours”; DSP nie podaje. Karta = UM. Bezpieczniej: usunąć liczbę („Akumulator ładuje się w stacji.”) albo zostawić UM.
- DSP opisuje odbiornik jako „plug-and-play”, a UMP/QSGP wymagają zeskanowania adresu MAC. Karta opisuje procedurę z UM i QSG — poprawnie.

---

#### unitech-ms852b-plus-esd (MS852-ZUBB0C-LG)

| element | na stronie (cytat/wartość) | dokument (plik, miejsce, cytat/wartość) | ocena |
|---|---|---|---|
| name / seoH1 | „Unitech MS852B Plus ESD” | DSESD „MS852B+ ESD”; WESD „MS852B Plus ESD” | zgodne |
| seoTitle | „Skaner ESD … 2D Bluetooth do stref EPA” | DSESD „ESD protected area” | zgodne |
| seoDescription | „imager 2D **HD** z Bluetooth w obudowie antystatycznej do pomieszczeń czystych, z odczytem kodów DPM i stacją … PN: MS852-ZUBB0C-LG” | DSESD/WESD: „cleanrooms”, „Support DPM barcodes”, „Cradle”; brak „HD”/„High Density” w dokumentach Unitech (tylko ERS `ute5a/web/ers-p10261.txt` „MS852B+ HD ESD (2D High Density Imager …)” i Levata) | zgodne poza „HD” (brak) |
| shortDescription | „skaner 2D **HD** w obudowie antystatycznej …; DPM, Bluetooth, ponad 25 godzin” | DSESD „>25 hours” | zgodne poza „HD” |
| opis, akap. 1 | strefy chronione: pomieszczenia czyste, zakłady wrażliwe na ładunki; antystatyk wmieszany w tworzywo obudowy i przewodu, nie ściera się; 10⁵–10⁹ Ω na kwadrat; bez chloru | DSESD „cleanrooms and static-safe manufacturing”, „internal mixed way with antistatic agent … including its cable”, „105~109 ohms per square”, „no containing Chlorine”, „external … was wiped away” | zgodne |
| opis, akap. 2, zd. 1 | „Silnik w wersji **HD** czyta Code 39 3 mil 6,6–18,3 cm oraz Data Matrix 6,7 mil 7,2–18,0 cm.” | DSESD DOF „3 mil C39 6.6 cm 18.3 cm”, „6,7 mil DM 7.2 cm 18.0 cm” | liczby zgodne; „w wersji HD” — brak |
| opis, akap. 2, zd. 2–3 | DPM, OCR, DotCode, Digimarc; głośniejszy sygnał, jaśniejsze diody, ciemne pomieszczenie | DSESD „Support DPM barcodes”, „OCR, Dot codes, and Digimarc”, „louder beeper and brighter LED … even in dark environment” | zgodne |
| opis, akap. 3 | BT do 100 m; stacja → komputer przewodem USB; 2850 mAh; ponad 25 h i do 50 000 odczytów; IP42; 2,1 m | DSESD „100m”, „Host Interface supported USB”, „2850mAh”, „>25 hours”, „Up to 50,000 scans at 1 scan/5 second”, „IP42”, „2.1 M”; WESD „Up to 60,000 scans at 1 scan/per second” | zgodne z DS; rozbieżność DS/WWW → do decyzji |
| spec: Typ | „Ręczny skaner 2D **HD (High Density)** z odczytem kodów DPM …” | jw. | „HD (High Density)” — brak |
| spec: Obudowa ESD | antystatyk w tworzywie obudowy i przewodu; 10⁵–10⁹ Ω/sq; bez chloru | DSESD | zgodne |
| spec: Matryca, Rozdzielczość | 1280 × 800 global; 3 mil (0,075 mm) | DSESD | zgodne |
| spec: Głębia ostrości | Code 39 3 mil 6,6–18,3; DM 6,7 mil 7,2–18,0; QR 15 mil 2,7–30,8; UPC 13 mil 3,8–40,5 cm | DSESD DOF | zgodne |
| spec: Kody specjalne | DPM, OCR, DotCode, Digimarc | DSESD | zgodne |
| spec: Interfejsy, BT | USB przez stację; HID/SPP; LE 4.2 + 2.1+EDR; 100 m | DSESD (tabela: „Class 2 Dual mode”; cechy: „Class 1” — klasy karta nie podaje) | zgodne |
| spec: Tryby pracy, Pamięć | ze spustem, prezentacyjny, buforowy; 7 MB / 20 KB | DSESD „Trigger Mode, Presentation Mode, Buffer Mode”, „7MB … 20KB” | zgodne |
| spec: Akumulator | wymienny 2850 mAh; <6,5 h; ponad 25 h, do 50 000 odczytów (1 odczyt co 5 s) | DSESD „replaceable”, „<6.5 hours”, „>25 hours”, „Up to 50,000 scans at 1 scan/5 second” | zgodne z DS |
| spec: IP, upadek, temperatury | IP42; 2,1 m; −10…+50; −40…+70 | DSESD | zgodne |
| spec: Zawartość zestawu | skaner z akumulatorem, stacja, przewód USB | DSESD Package „Scanner with battery, Cradle, Interface cable”; host tylko USB | zgodne |
| spec: Gwarancja | 36 miesięcy | WESD „Hardware Warranty 36 months” | zgodne |
| applications | pomieszczenia czyste i EPA; produkcja; DPM | DSESD | zgodne |
| variants | ESD, HD, Bluetooth, stacja, przewód USB | „HD” — brak | brak („HD”) |
| imageDescriptions (2) | czarna stacja, przód pod kątem; bok i tył, czarna obudowa | obejrzane `MS852-ZUBB0C-LG*.png`; to samo ujęcie co w DSESD/DS851 | zgodne |
| downloads | DS 404 KB; UM 4,3 MB („Instrukcja obsługi … MS852B Plus ESD”); QSG 2,7 MB | md5 = 1542 (413 248 B); UM = 2287 (4 522 297 B) — w środku „MS852B Plus User’s Manual Version 1.2”, Unitech linkuje go na stronie ESD jako „MS852B Plus ESD User Manual V1.1”; QSG = 1162 | zgodne (uwaga informacyjna niżej) |
| relatedAccessories | stacja ESD 5000-900082G, 1400-900055G, 1550-905920G, 5200-900009G, 5200-900011G, 386793G, 1010-900067G | WESD Accessories: wszystkie 7 PN; `acc-MS852_plus_ESD.xlsx` | zgodne |
| FAQ 1 | tworzywo z antystatykiem; „Wersja ESD ma silnik **HD** i obsługuje kody DPM. Zwykły MS852B Plus … występuje w wersjach SR oraz HD.” | DSESD (DPM); SR/HD — brak | częściowo: HD/SR — brak |
| FAQ 2 | antystatyk dociera do powierzchni mimo przecierania | DSESD „continue to add antistatic agent to the plastic surface, to make up the surface due to wipe” | zgodne |
| FAQ 3 | stacja ESD 5000-900082G; zwykła 5000-900064G do MS852B, Plus, LR | WESD „1-slot charging ESD cradle (PN#5000-900082G)”; W852B/W+/WLR „5000-900064G” | zgodne |
| FAQ 4 | „Tak. Silnik **HD** obsługuje kody DPM …; OCR, DotCode, Digimarc” | DSESD „Support DPM barcodes” | „Silnik HD” — brak |
| FAQ 5 | MS851B ESD laser 1D; MS852B Plus bez ESD | DS851 | zgodne |

Niezgodności i propozycje („HD/High Density” bez dowodu w dokumentach Unitech):
1. seoDescription: było „imager 2D HD z Bluetooth …” → „imager 2D z Bluetooth …”.
2. shortDescription: było „bezprzewodowy skaner 2D HD w obudowie antystatycznej …” → „bezprzewodowy skaner 2D w obudowie antystatycznej …”.
3. Opis, akap. 2: było „Silnik w wersji HD czyta kody Code 39 o module 3 mil …” → „Skaner czyta kody Code 39 o module 3 mil z odległości 6,6–18,3 cm oraz kody Data Matrix 6,7 mil z 7,2–18,0 cm.”
4. Spec „Typ skanera”: było „Ręczny skaner 2D HD (High Density) z odczytem kodów DPM, …” → „Ręczny skaner 2D z odczytem kodów DPM, bezprzewodowy (Bluetooth), ESD, ze stacją ładującą”.
5. Wariant `name`: było „MS852-ZUBB0C-LG, ESD, HD, Bluetooth, stacja, przewód USB” → „MS852-ZUBB0C-LG, ESD, Bluetooth, stacja, przewód USB”.
6. FAQ 1: było „Wersja ESD ma silnik HD i obsługuje kody DPM. Zwykły MS852B Plus nie ma obudowy antystatycznej i występuje w wersjach SR oraz HD.” → „Wersja ESD obsługuje też kody DPM. Zwykły MS852B Plus nie ma obudowy antystatycznej.”
7. FAQ 4: było „Tak. Silnik HD obsługuje kody DPM, czyli wybijane lub grawerowane bezpośrednio na elementach.” → „Tak. Skaner obsługuje kody DPM, czyli kody wybijane lub grawerowane bezpośrednio na elementach.”

Do decyzji właściciela:
- „HD” dla MS852-ZUBB0C-LG potwierdzają dwaj dystrybutorzy (ERS, Levata), ale żaden dokument Unitech. Brief wymaga dokumentu Unitech — propozycja: usunąć (pkt 1–7).
- Liczba odczytów: DSESD „Up to 50,000 scans at 1 scan/5 second” vs WESD „Up to 60,000 scans at 1 scan/per second”. Karta = DS; zostawić.
- Plik instrukcji (informacyjnie): pod nazwą „Instrukcja obsługi Unitech MS852B Plus ESD (EN)” jest ogólna instrukcja MS852B Plus v1.2 z 2020 r. (tak publikuje ją Unitech). Można rozważyć nazwę „Instrukcja obsługi Unitech MS852B Plus (EN)” albo nowszy plik 1159 (V1.7) jak na karcie MS852B Plus.

---

#### unitech-ms851b-esd (MS851-SUBB0C-LG)

| element | na stronie (cytat/wartość) | dokument (plik, miejsce, cytat/wartość) | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS851B ESD”; „Skaner laserowy ESD … Bluetooth 1D” | DS851 „MS851B ESD Bluetooth® ESD-safe Laser Scanner” | zgodne |
| seoDescription / shortDescription | laser 1D, antystatyczny, do 104 skanów/s, ponad 30 h, stacja w zestawie; PN MS851-SUBB0C-LG | DS851 „up to 104 scans/sec”, „>30 hours”, Package „Cradle”; PN: brak w dokumentach i zrzutach dystrybutorów (bf-ms851b ma MS851-SUBB0C-SG = MS851B z kablem USB i stacją) | zgodne; konfiguracja PN „-LG” bez bezpośredniego potwierdzenia (niskie ryzyko) |
| opis, akap. 1 | laser 1D w obudowie antystatycznej; pomieszczenia czyste i strefy EPA; antystatyk w tworzywie obudowy i przewodu, bez chloru | DS851 „cleanrooms and static-safe manufacturing”, „ESD protected area including its cable”, „no containing Chlorine” | zgodne |
| opis, akap. 2 | 650 nm; 104 (± 12) skanów/s dwukierunkowo; 4 mil; UPC 13 mil do 63,5 cm; Code 39 20 mil do 116,8 cm; Code 39 100 mil do 4,57 m; pochylenie ±65°, odchylenie ±40°, obrót ±35°; 86 111 lx; ISBT 128, Code 32, GS1 DataBar; bez 2D | DS851 „650 nm visible laser diode”, „104 (± 12) scans/sec (bidirectional)”, „4mil (0.1mm)”, DOF „UPC, 13 mils … 63.50 cm”, „Code 39, 20 mils … 116.84 cm”, „Code 39, 100 mils … 457.20 cm”, „Pitch ±65°”, „Skew ±40°”, „Roll ± 35°”, „86,111 Lux”; 1D: „ISBT 128”, „Code32”, „GS1 databar”; Sensor „1D Laser” | zgodne |
| opis, akap. 3 | 2850 mAh, ponad 30 h, 50 000 odczytów co 5 s; stacja i przewód USB w zestawie; IP42; 2,1 m; spust/prezentacja/bufor | DS851 „>30 hours”, „Up to 50,000 scans at 1 scan/5 second”; Package; „IP42”, „2.1 M”; „Trigger Mode, Presentation Mode, Buffer Mode” | zgodne |
| spec: Typ, Obudowa ESD, Źródło światła, Rozdzielczość | jw. | DS851 | zgodne |
| spec: Głębia ostrości | Code 128 5 mil 3,6–17,8; UPC 13 mil 4,6–63,5; Code 39 20 mil 3,6–116,8; Code 39 100 mil 61–457 cm | DS851 3.55–17.78; 4.57–63.50; 3.56–116.84; 60.96–457.20 | zgodne (zaokrąglenia) |
| spec: Kąty, Światło | ±65° / ±40° / ±35°; 86 111 lx | DS851 | zgodne |
| spec: Interfejsy, BT | USB przez stację; HID/SPP; LE 4.2 + 2.1+EDR, 100 m | DS851 | zgodne |
| spec: Tryby, Pamięć | spust, prezentacyjny, buforowy; 7 MB / 20 KB | DS851 | zgodne |
| spec: Akumulator | wymienny 2850 mAh; <6,5 h; ponad 30 h, do 50 000 (1 co 5 s) | DS851 „replaceable”, „<6.5 hours” | zgodne |
| spec: IP, upadek, temperatury | IP42; 2,1 m; −10…+50; −40…+70 | DS851 | zgodne |
| spec: Zawartość zestawu | skaner z akumulatorem, stacja, przewód USB | DS851 Package; host tylko USB | zgodne |
| spec: Gwarancja | 36 miesięcy | W851 „Hardware Warranty 36 months” | zgodne |
| applications | pomieszczenia czyste/EPA; 1D do kilku metrów; uszkodzone i słabe kody 1D | DS851 „long-range 1D barcodes, even damaged or poorly printed” | zgodne |
| imageDescriptions (2) | laser w stacji, przód pod kątem; przód pod kątem, okno i spust | obejrzane `MS851-SUBB0C-LG*.png`; zdjęcie główne prawie identyczne z MS852-ZUBB0C-LG (RMSE 1,7%) — Unitech w DS851 i DSESD używa tego samego zdjęcia | zgodne |
| downloads | DS 365 KB; QSG 2,6 MB | md5 = 1541 (374 259 B), 2290 (2 766 141 B; na W851 „MS851B ESD Quick Start Guide V1.0 2.6MB”) | zgodne |
| relatedAccessories | 5000-900082G, 1400-900055G, 1550-905920G, 5200-900009G, 5200-900011G, 386793G, 1010-900067G | W851 Accessories; `acc-MS851ESD.xlsx` | zgodne |
| FAQ 1–5 | tylko 1D (Code 128, EAN, ISBT 128), 2D → MS852B Plus ESD; UPC 63,5 cm, Code 39 100 mil 4,57 m; stacja i przewód w zestawie, zapasowa 5000-900082G; ponad 30 h, <6,5 h, wymienny | DS851; W851 | zgodne |

Niezgodności i propozycje: brak.
Uwaga: na karcie nie ma instrukcji obsługi; Unitech publikuje „MS851B ESD User Manual V1.4” (`2289_MS851_UM_20211206_V1_4.pdf`, 5 MB) — można dodać.

---

#### unitech-ms822b (MS822-2UBU02-SG)

| element | na stronie (cytat/wartość) | dokument (plik, miejsce, cytat/wartość) | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS822B”; „2D — 2,4 GHz, Bluetooth i USB-C” | DS822 „2.4G Wireless 2D Imager Scanner”; W822 „Multi-Interface Flexibility with 2.4G, Bluetooth, and USB-C” | zgodne |
| seoDescription / shortDescription | stacja z odbiornikiem 2,4 GHz do 100 m, BT 4.2, USB-C, ponad 40 h, 4 MB; PN | DS822 „Cradle integrated with 2.4G Dongle”, „2.4G: 100M”, „Bluetooth V4.2”, „USB Type C”, „Over 40 hours”, „4 MB”; PN: bf-ms822b + levata | zgodne |
| opis, akap. 1 | odbiornik w stacji; 100 m; BT 4.2 10 m; USB-C; kasy, lojalność, kupony, dane osobowe, inwentaryzacja, serwis | DS822 wstęp „point-of-sale, loyalty, coupons checking, personal data identification, inventory control, and field service”; „Bluetooth: 10M”; UM822 §1.2 „USB Type-C Connector for communication and charging” | zgodne |
| opis, akap. 2 | wymienny 18650 2600 mAh; ponad 40 h; 6 h; 4 MB i wysyłka po powrocie; spust/prezentacja/bufor; brzęczyk i LED; prefiks, sufiks, Code ID | DS822 „2600 mAh removable battery”, „18650”, „Over 40 hours”, „Fully charged in 6 hours”, „transmitted to the host automatically when back to the wireless coverage”, „Trigger Mode, Buffer Mode, Presentation Mode”, „Buzzer LED light”, „Prefix, Suffix, Code ID” | zgodne |
| opis, akap. 3 | 1280 × 800, 60 kl./s; EAN-13 13 mil 50–510 mm; 180 g; IP52; 1,5 m; stacja z odbiornikiem i przewodem w zestawie | DS822 „1280 x 800”, „60fps/s”, „13 mil EAN13 Near 50 mm Far 510 mm”, „180g”, „IP52”, „1.5m”, Package | zgodne |
| spec: Celownik i oświetlenie | LED 625 nm; 6000–6500 K | DS822 „625 nm LED”, „Color temperature 6000-6500 k” | zgodne |
| spec: Rozdzielczość | 3 mil (Code 39 i EAN-13) | DS822/W822/UM822 tabela „3mil（code 39） 3mil（EAN13）” (cechy DS822: „up to 4 mil”) | zgodne z tabelą |
| spec: Kąty | ±65°, ±65°, 360° | DS822 | zgodne |
| spec: Kody 2D | PDF417, Micro PDF417, QR, Micro QR, Data Matrix, Aztec | DS822 | zgodne |
| spec: Interfejsy, Zasięg | 2,4 GHz przez stację (USB), BT 4.2 (HID, BLE, SPP), USB-C; 100 m / 10 m | DS822 Communication | zgodne |
| spec: Tryby, Pamięć, Akumulator | spust/prezentacja/bufor; 4 MB; wymienny 18650 2600 mAh, ok. 6 h, ponad 40 h | DS822 | zgodne |
| spec: IP, upadek, temperatury | IP52; 1,5 m; −10…+50; −20…+60 | DS822 | zgodne |
| spec: Wymiary i masa | 161 × 72 × 96,5 mm, 180 g; stacja 106 × 80,5 × 70 mm | DS822 | zgodne |
| spec: Zawartość zestawu | skaner, stacja z odbiornikiem 2,4 GHz i przewodem | DS822; UM822 §1.1 | zgodne |
| spec: Gwarancja | 36 miesięcy | W822: nagłówek „Hardware Warranty 36 months” i blok „3-Year Warranty”, ale „Statement”: „for a period of fifteen months” | sprzeczność na stronie Unitech → do decyzji |
| applications, variants | kasa i kupony; dane osobowe; inwentaryzacja i serwis | DS822 | zgodne |
| imageDescriptions (4) | w stacji, przód pod kątem; przód, pomarańczowy spust; bok; skaner obok stacji | obejrzane `MS822-2UBU02-SG*.png` | zgodne |
| downloads | DS 697 KB; UM 2,9 MB | md5 = 5033 (714 147 B), 5152 (3 063 927 B) | zgodne |
| relatedAccessories | brak | W822 bez sekcji akcesoriów | zgodne |
| FAQ 1–3 | odbiornik w stacji, 100 m; BT 4.2 HID/BLE/SPP 10 m + USB-C; 4 MB, wysyłka po powrocie | DS822; W822 „cradle featuring a built-in dongle, pre-paired”; „transmitted to the host automatically when back” | zgodne |
| FAQ 4 | MS822B: 1280 × 800, tryb prezentacyjny, IP52, odbiornik w stacji; MS838B: 640 × 480, klucz USB, IP42 | DS822; DS838 „640 x 480”, „Trigger Mode, Buffer Mode”, „IP42”, „USB dongle” | zgodne |
| FAQ 5 | MS838B z odbiornikiem USB; MS836B laser 1D | DS838, DS836 | zgodne |

Niezgodności i propozycje: brak.

Do decyzji właściciela:
- Gwarancja MS822B: W822 podaje „Hardware Warranty 36 months” i „3-Year Warranty”, ale w tym samym bloku „warranted … for a period of fifteen months”. DS822 i UM822 nie podają okresu. Karta: 36 miesięcy (2 z 3 miejsc na stronie). Bezpieczniej potwierdzić u dystrybutora/Unitech; do tego czasu można zostawić 36 miesięcy albo usunąć wiersz.

---

#### unitech-ms838b (MS838-2UBB0D-SG)

| element | na stronie (cytat/wartość) | dokument (plik, miejsce, cytat/wartość) | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS838B”; „2D z odbiornikiem USB 2,4 GHz” | DS838 „2.4G Wireless 2D Imager Scanner”, „comes with a USB dongle” | zgodne |
| seoDescription | odbiornik USB (2,4 GHz, 100 m), BT i USB-C, 40 000 kodów EAN; PN | DS838 „100m”, „Bluetooth V4.2”, „USB Type C”, „40,000 EAN codes”; PN: bf-ms838b + ERS `ers-p13534.txt` („2D imager … 2.4G wireless Bluetooth, USB”) | zgodne |
| shortDescription | kupony z telefonów, 40 000 EAN, ponad 16 h | DS838 „coupon displayed on the phone”, „Over 16 hours” | zgodne |
| opis, akap. 1 | odbiornik w kluczu USB; kasy i inwentaryzacja w supermarketach, sklepach, magazynach; bez konfiguracji po włożeniu do USB; 100 m; BT 4.2 10 m; USB-C | DS838 „supermarket, retail store and warehouse”, „Easy plug-and-play … without complicated set-up”; UM838 §1.4.1 „Plug the USB Receiver … The MS838B is now ready to use”; „Bluetooth: 10M”; W838 „USB Wired Communications” | zgodne |
| opis, akap. 2 | 640 × 480, 60 kl./s; 1D i 2D drukowane; kupony z telefonu; EAN-13 60–310 mm; od 3 mil; czerwona dioda celownika, białe oświetlenie | DS838 „640 x 480”, „60 fps/s”, „including printed and digital”, „13 mil EAN13 Near 60 mm Far 310 mm”, „≥ 3mil(code 39)”, „Red LED”, „White LED” | zgodne |
| opis, akap. 3, zd. 1 | „Poza zasięgiem skaner zapisuje w pamięci 2 MB do 40 000 kodów EAN **i przesyła je po powrocie**.” | DS838 „store 40,000 EAN codes in memory and upload them to your devices **at your own convenience**”; UM838 §2.4.2 „Scan the "Upload all data" code to complete the data transfer.” | 2 MB i 40 000 zgodne; automatyczna wysyłka po powrocie — nadinterpretacja |
| opis, akap. 3, zd. 2–4 | 18650 2600 mAh, ponad 16 h, ładowanie 5 h; 200 g; IP42; 1,5 m; odbiornik i przewód USB-C w zestawie | DS838 „2600mAh 18650”, „Over 16 hours”, „Fully charged in 5 hours”, „200g”, „IP42”, „1.5m”, Package „MS838B scanner, 2.4G Dongle, USB Type C Charging Cable”; UM838 §1.5 „approximately 6 hours” | zgodne z DS; ładowanie → do decyzji |
| spec: Typ, Matryca, Celownik | 2D, 2,4 GHz z odbiornikiem USB i BT 4.2; CMOS 640 × 480, 60 kl./s; czerwony LED, białe LED | DS838 | zgodne |
| spec: Rozdzielczość, Głębia | od 3 mil (Code 39); EAN-13 60–310 mm | DS838 | zgodne |
| spec: Kody 2D | PDF417, Micro PDF417, QR, Micro QR, Data Matrix, Aztec | DS838 | zgodne |
| spec: Interfejsy, Zasięg | 2,4 GHz przez odbiornik USB, BT 4.2 (HID, BLE, SPP), USB-C; 100 m / 10 m | DS838 | zgodne |
| spec: Tryby, Pamięć | ze spustem, buforowy; 2 MB, 40 000 EAN | DS838 „Trigger Mode, Buffer Mode”, „2MB” | zgodne |
| spec: Akumulator | „**Wymienny** 18650, 2600 mAh; ładowanie ok. 5 h; praca ponad 16 h” | DS838/W838/UM838: „Lithium-ion”, „2600mAh 18650 battery” — brak słowa „removable/replaceable” (DS822 dla MS822B mówi „removable”, DS838 nie) | „Wymienny” — brak; reszta zgodna |
| spec: IP, upadek, temperatury | IP42; 1,5 m; −10…+50; −20…+60 | DS838 | zgodne |
| spec: Wymiary i masa | 174 × 72 × 96 mm, 200 g | DS838 | zgodne |
| spec: Zawartość zestawu | skaner, odbiornik 2,4 GHz, przewód USB-C | DS838 Package; UM838 §1.1; W838 „What comes in the box” — **bez podstawki** | zgodne |
| spec: Gwarancja | 15 miesięcy | W838 „Hardware Warranty 15 months”, „fifteen months” | zgodne |
| applications | kasa; kupony z telefonów; inwentaryzacja półek i magazynu | DS838 | zgodne |
| imageDescriptions (4) | przód, pomarańczowy spust; bok; z góry pod kątem, logo; drugi bok | obejrzane `MS838-2UBB0D-SG*.png` (zdjęcia 2 i 4 to przeciwne boki) | zgodne |
| downloads | DS 659 KB; UM 2,9 MB; QSG 5,7 MB | md5 = 3834 (674 426 B), 4015 (3 036 993 B), 4016 (5 981 687 B) | zgodne |
| relatedAccessories | odbiornik 5500-900098G; podstawka 5200-900014G | W838 Accessories „2.4G Dongle (PN:5500-900098G)”, „Hans-Free Stand (PN:5200-900014G)” | zgodne |
| FAQ 1 | odbiornik sparowany fabrycznie, po włożeniu gotowy | UM838 §2.5 „One scanner pairing to one receiver is the factory default”; §1.4.1 | zgodne |
| FAQ 2 | QR z ekranu telefonu; EAN-13 60–310 mm | DS838 | zgodne |
| FAQ 3 | „Pamięć 2 MB mieści 40 000 kodów EAN. **Skaner wysyła je do komputera po powrocie w zasięg.**” | DS838 „upload … at your own convenience”; UM838 §2.4.2 „Upload all data” | 2. zdanie — nadinterpretacja |
| FAQ 4 (ryzyko) | podstawka 5200-900014G i odbiornik 5500-900098G; „Nowy odbiornik paruje się kodem „2.4G Receiver Pairing” z instrukcji **albo przytrzymaniem przycisku skanera przez około 16 sekund**”; te same akcesoria do MS836B | W838/W836 Accessories (oba PN); UM838 §2.5 (PDF str. 31–32): „A. Scan the "2.4G Receiver Pairing" barcode. B. Long press the button for about 16 seconds”, (1) „Remove the original receiver”; pod pkt B ustawienie „Long press 16 seconds to Enter 2.4G pairing Mode — Enable / **Disable \***” (fabrycznie wyłączone) | akcesoria zgodne; metoda 16 s bez warunku — niezgodne |
| FAQ 5 | MS822B: stacja z odbiornikiem, 1280 × 800; MS836B laser 1D | DS822, DS836 | zgodne |

Niezgodności i propozycje:
1. FAQ 4: było „Nowy odbiornik paruje się kodem „2.4G Receiver Pairing” z instrukcji albo przytrzymaniem przycisku skanera przez około 16 sekund.” → ma być „Przed parowaniem nowego odbiornika należy wyjąć poprzedni. Następnie skanuje się kod „2.4G Receiver Pairing” z instrukcji i wkłada nowy odbiornik do portu USB. Parowanie przytrzymaniem przycisku przez około 16 sekund działa po włączeniu tej funkcji kodem ustawień (fabrycznie jest wyłączona).” (UM838 §2.5, PDF str. 31–32: „Disable *”). To samo twierdzenie jest w opisie akcesorium `unitech-ms83x-odbiornik-2-4-ghz` (poza zakresem B1 — do poprawy razem).
2. Opis, akap. 3: było „Poza zasięgiem skaner zapisuje w pamięci 2 MB do 40 000 kodów EAN i przesyła je po powrocie.” → ma być „Poza zasięgiem skaner zapisuje w pamięci 2 MB do 40 000 kodów EAN. Zapisane kody przesyła się do komputera kodem „Upload all data”.” (DS838 „upload them … at your own convenience”; UM838 §2.4.2).
3. FAQ 3: było „Pamięć 2 MB mieści 40 000 kodów EAN. Skaner wysyła je do komputera po powrocie w zasięg.” → ma być „Pamięć 2 MB mieści 40 000 kodów EAN. Zapisane dane przesyła się do komputera po zeskanowaniu kodu „Upload all data” z instrukcji.”
4. Spec „Akumulator”: było „Wymienny 18650, 2600 mAh; …” → ma być „18650, 2600 mAh; ładowanie ok. 5 h; praca ponad 16 h” (brak w DS838/UM838/W838 informacji, że akumulator jest wymienny).

Do decyzji właściciela:
- Czas ładowania: DS838 i W838 „Fully charged in 5 hours” vs UM838 §1.5 „approximately 6 hours”. Karta = DS (5 h); zostawić.

---

#### unitech-ms836b (MS836-SUBB0D-SG)

| element | na stronie (cytat/wartość) | dokument (plik, miejsce, cytat/wartość) | ocena |
|---|---|---|---|
| name / seoH1 / seoTitle | „Unitech MS836B”; „Skaner laserowy bezprzewodowy … 1D z odbiornikiem USB” | DS836 „2.4G Wireless Laser Scanner”, „USB dongle” | zgodne |
| seoDescription / shortDescription | laser 1D, 100 skanów/s, odbiornik USB 2,4 GHz 100 m, 16 MB, ponad 30 h; PN | DS836 „100 times/ sec”, „100M”, „Memory 16MB”, „Over 30 hours”; PN: bf-ms836 + lv | zgodne |
| opis, akap. 1 | kasy, kontrola zapasów, magazyn w supermarketach i sklepach; 100 skanów/s; kody niskiej jakości, także na ekranie telefonu; EAN-13 13 mil 10–265 mm; od 4 mil; bez 2D | DS836 „point-of-sale, inventory control, and warehouse management”, „decode poor quality codes and achieve 100 times per second”, „coupon displayed on the phone”, „10mm-265mm(13 mil, EAN13, PCS=90%)”, „≥ 4mil”, „1D Laser Engine” | zgodne |
| opis, akap. 2 | odbiornik USB 2,4 GHz 100 m; BT 4.2 10 m; USB-C; 16 MB / 40 000 EAN; spust i bufor; brzęczyk i LED; prefiks, sufiks, Code ID; China Post 25, GS1 DataBar | DS836 Communication, „16MB”, „40,000 EAN codes”, „Trigger Mode, Buffer Mode”, „Buzzer LED light”, „Prefix, Suffix, Code ID”, 1D: „China post 25”, „GS1(RSS) RSS-14 …” | zgodne |
| opis, akap. 3 | 18650 2600 mAh, ponad 30 h, ładowanie 5 h; 216 g; IP42; 1,5 m; odbiornik i przewód USB-C w zestawie | DS836 „Over 30 hours”, „Fully charged in 5 hours”, „216g”, „IP42”, „1.5m”, Package „MS836B scanner, 2.4G Dongle, USB Type C Charging Cable”; UM836 §1.3 „Over 30 hours (continuous working)” | zgodne (nagłówek DS836: „16 hours operation time” → do decyzji) |
| spec: Typ, Szybkość, Rozdzielczość, Głębia | laser 1D, 2,4 GHz + BT 4.2; 100 skanów/s; od 4 mil; EAN-13 10–265 mm | DS836 | zgodne |
| spec: Odporność na światło | 0–100 000 lx | DS836 „0-100,000 Lux” | zgodne |
| spec: Interfejsy, Zasięg | 2,4 GHz przez odbiornik USB, BT 4.2 (HID, BLE, SPP), USB-C; 100 m / 10 m | DS836 | zgodne |
| spec: Tryby, Pamięć | spust, bufor; 16 MB, 40 000 EAN | DS836 | zgodne |
| spec: Akumulator | „**Wymienny** 18650, 2600 mAh; ok. 5 h; ponad 30 h” | DS836/UM836/W836: „Lithium-ion”, „2600mAh 18650 battery” — brak „removable/replaceable” | „Wymienny” — brak; reszta zgodna |
| spec: IP, upadek, temperatury | IP42; 1,5 m; −10…+50; −20…+60 | DS836 | zgodne |
| spec: Wymiary i masa | 174 × 72 × 96 mm, 216 g | DS836 | zgodne |
| spec: Zawartość zestawu | skaner, odbiornik 2,4 GHz, przewód USB-C | DS836; UM836 §1.1; W836 — **bez podstawki** | zgodne |
| spec: Gwarancja | 15 miesięcy | W836 „Hardware Warranty 15 months” | zgodne |
| applications | kasa; kontrola zapasów; magazyn | DS836 | zgodne |
| imageDescriptions (4) | przód z czerwonym światłem lasera, niebieski spust; bok; drugi bok; z góry, logo | obejrzane `MS836-SUBB0D-SG*.png` | zgodne |
| downloads | DS 855 KB; UM 3,7 MB | md5 = 3833 (875 667 B), 4017 (3 830 831 B) | zgodne |
| relatedAccessories | 5500-900098G; 5200-900014G | W836 Accessories (oba PN) | zgodne |
| FAQ 1–3 | bez QR, tylko 1D (EAN, UPC, Code 39, Code 128); kod liniowy z telefonu, także niskiej jakości; ponad 30 h, 2600 mAh, 5 h | DS836 | zgodne |
| FAQ 4 | MS836B: laser, 16 MB, ponad 30 h; MS838B: 2D, 2 MB, ponad 16 h; „Obudowa, radio i akcesoria są wspólne.” | DS836, DS838: te same wymiary 174 × 72 × 96 mm, to samo radio, W836/W838 te same akcesoria; „obudowa wspólna” nie jest wprost w dokumentach | zgodne; „obudowa” — wniosek z wymiarów |
| FAQ 5 | MS838B 2D; MS851B ESD laser ESD | DS838, DS851 | zgodne |

Niezgodności i propozycje:
1. Spec „Akumulator”: było „Wymienny 18650, 2600 mAh; ładowanie ok. 5 h; praca ponad 30 h” → ma być „18650, 2600 mAh; ładowanie ok. 5 h; praca ponad 30 h” (brak dowodu wymienności w DS836/UM836/W836).
2. FAQ 4 (precyzja, niskie ryzyko): było „Obudowa, radio i akcesoria są wspólne.” → ma być „Wymiary, radio i akcesoria są wspólne.” (DS836/DS838: 174 × 72 × 96 mm; W836/W838: te same PN akcesoriów).

Do decyzji właściciela:
- DS836 w nagłówku: „16 hours operation time”, a w tabeli „Over 30 hours” i w cechach „up to 30 hours”; W836 nagłówek „30 hours operation time”; UM836 „Over 30 hours (continuous working)”. Karta: ponad 30 h — zgodna z tabelą, cechami, stroną i UM; zostawić.

---

#### Miejsca o podwyższonym ryzyku — wynik

| punkt | wynik |
|---|---|
| Parowanie MS852P przez skan adresu MAC | ZGODNE. UMP §1.4.1: włączenie → „Scan the MAC address on the dongle” → odbiornik do USB → „beep with low-medium-high sound”; QSGP str. 1 to samo z rysunkiem etykiety na odbiorniku. Opis i FAQ 1 karty odpowiadają procedurze. |
| Gwarancje (9 modeli) | MS852B, MS852B Plus, MS852B LR, MS852P, MS852B Plus ESD, MS851B ESD: 36 mies. (strony W*, wiersz „Hardware Warranty 36 months”) — zgodne. MS838B i MS836B: 15 mies. (W838/W836) — zgodne. MS822B: 36 mies. na karcie; strona Unitech sprzeczna (36 mies. i „3-Year Warranty” vs „fifteen months”) — do decyzji. Żadna karta katalogowa (DS) nie ma wiersza gwarancji. |
| „High Density” przy MS852 Plus i wersjach ESD | BRAK w dokumentach Unitech. MS852B Plus: wersje SR/HD (opis, spec, warianty, tooltip, FAQ, SEO) — tylko dystrybutorzy (ERS, BarcodesInc) dla ZUBB0C-SG; SR dla VUBB0C-SG bez źródła. MS852B Plus ESD: „HD (High Density)” w 7 miejscach — tylko ERS i Levata. Propozycje usunięcia w sekcjach kart. MS851B ESD — karta nie używa HD (zgodne). |
| Zawartość zestawu MS852B LR | ZGODNE: skaner z akumulatorem, stacja, przewód USB (DSLR Package; UMLR §1.1; WLR). Bez odbiornika, bez etui, bez zasilacza (zasilacz tylko przy wersji RS-232). Zdjęcia pokazują skaner w etui 386793G — alt to opisuje. |
| Podstawka 5200-900014G (`unitech-ms83x-podstawka`) a MS838B i MS836B | ZGODNE: na W838 i W836 „Hans-Free Stand (PN:5200-900014G)” w sekcji akcesoriów; zestaw obu modeli to tylko skaner, odbiornik 2,4 GHz i przewód USB-C (DS838/DS836, UM838/UM836 §1.1). Karty MS838B/MS836B nie twierdzą, że podstawka jest w zestawie. |
| Czas pracy | Zgodny z DS: MS852B 20 h; Plus >25 h (1 odczyt/5 s wg UM+); LR >12 h; MS852P 15 h; Plus ESD >25 h; MS851B ESD >30 h; MS822B >40 h; MS838B >16 h; MS836B >30 h. Sprzeczności w dokumentach: LR (UMLR >40 h), MS836B (nagłówek DS836 16 h) — do decyzji, karty bez zmian. |
| Zasięg Bluetooth / radia | ZGODNE: MS852B, Plus, LR, Plus ESD, MS851B ESD — 100 m; MS852P — 10 m (2,4 GHz); MS822B/MS838B/MS836B — 2,4 GHz 100 m, Bluetooth 10 m. |
| Nazwy silników skanujących | ZGODNE: żadna z 9 kart nie podaje nazwy silnika (np. N6703, SE4107). |
| Upadki i IP | ZGODNE z DS: 2,1 m/IP42 (MS852B, Plus, P, Plus ESD, MS851B ESD); LR 1,8 m (2,2 m w etui)/IP42; MS822B 1,5 m/IP52; MS838B i MS836B 1,5 m/IP42. UMLR podaje 2,1 m — do decyzji. |
| Tryby łączności | ZGODNE: MS852x Bluetooth dual mode LE 4.2 + 2.1+EDR, HID i SPP; MS852P 2,4 GHz, SPP i HID; MS822B/838B/836B 2,4 GHz + BT 4.2 HID/BLE/SPP + USB-C. |
| Pojemność akumulatora | ZGODNE: 2850 mAh (MS852x, MS851B ESD); 2600 mAh 18650 (MS822B, MS838B, MS836B). „Wymienny” przy MS838B i MS836B — brak dowodu (propozycja usunięcia). |
| Czas ładowania | Karty zgodne z DS/UM; sprzeczności: MS852B (DS <6,5 h / WWW 7 h / UM ~5 h), LR (WWW 7 h), MS852P (UM ~5 h / WWW 7 h), MS838B (DS 5 h / UM ~6 h) — do decyzji. |
| Stacje ładujące | ZGODNE: 5000-900064G dla MS852B, Plus, LR (W852B/W+/WLR); 5000-900082G dla Plus ESD i MS851B ESD (WESD/W851); MS852P ma własną stację 5000-900104G (karta nie linkuje 5000-900064G — poprawnie); MS822B — stacja z wbudowanym odbiornikiem w zestawie. |
| DotCode w MS852 | ZGODNE: MS852B (DS852B 2D „DotCode”), Plus, LR, Plus ESD. MS852P nie deklaruje DotCode (zgodnie z DSP). |
| Odbiornik MS83x — parowanie 16 s | NIEZGODNE (dodatkowo wykryte): metoda 16 s działa tylko po włączeniu (fabrycznie „Disable *”, UM838 PDF str. 32; UM836 str. 13–14). Dotyczy FAQ MS838B i opisu akcesorium `unitech-ms83x-odbiornik-2-4-ghz`. |

#### Podsumowanie

- Kart sprawdzonych: 9 (MS852B, MS852B Plus, MS852B LR, MS852P, MS852B Plus ESD, MS851B ESD, MS822B, MS838B, MS836B). Pliki do pobrania: 22/22 istnieją, md5 zgodne z oficjalnymi PDF, rozmiary zgodne. Zdjęcia: 27 obejrzanych, opisy alt zgodne.
- Niezgodności (do poprawy): 22 zmiany tekstu w 6 kartach: MS852B Plus — 6 (SR/HD i DM 6,7 mil), MS852B Plus ESD — 7 („HD”), MS838B — 4, MS836B — 2, MS852B — 2 (styl), MS852B LR — 1. MS852P, MS851B ESD i MS822B bez niezgodności.
- Najważniejsze 5:
  1. MS852B Plus: wersje „SR/HD” (opis, spec, warianty, tooltip „Optyka”, FAQ, SEO) bez dowodu w dokumentach Unitech; tooltip i FAQ podają „Data Matrix 6,7 mil” z karty innego modelu (MS852B+ ESD).
  2. MS852B Plus ESD: „HD (High Density)” w 7 miejscach bez dowodu w dokumentach Unitech (tylko ERS i Levata).
  3. MS838B FAQ 4 (i akcesorium odbiornika): parowanie przytrzymaniem 16 s jest fabrycznie wyłączone (UM838 „Disable *”); brakuje też kroku „wyjąć poprzedni odbiornik”.
  4. MS838B: „przesyła je po powrocie” / „wysyła je … po powrocie w zasięg” — dokument mówi o wysyłce na żądanie („at your own convenience”, kod „Upload all data”).
  5. MS838B i MS836B: „Wymienny” akumulator 18650 — brak potwierdzenia w DS/UM/WWW.
- Do decyzji właściciela: SR/HD (dystrybutorzy vs brak w dokumentach Unitech); gwarancja MS822B (36 vs 15 mies. na tej samej stronie Unitech); MS852B LR — DS vs UM (233 g vs 253 g, >12 h vs >40 h, 1,8 m vs 2,1 m); czasy ładowania MS852B, LR, MS852P, MS838B; liczba odczytów MS852B Plus ESD (50 000 co 5 s wg DS vs 60 000 co 1 s wg WWW); celownik MS852B Plus (UM vs DS z dwiema opcjami); nagłówek DS836 „16 hours”; FAQ MS852B o ładowaniu stacji z komputera (wniosek, nie cytat).
- Unikalność (do sprawdzenia skryptem): powtarzalny wzór FAQ „Jakie są alternatywy dla …” na wszystkich kartach; podobne zdania „Czas pracy wynosi ponad 30 godzin…” w MS851B ESD i MS836B; wiersz „Obudowa ESD” identyczny w MS852B Plus ESD i MS851B ESD (wiersz specyfikacji — dopuszczalne).

### Załącznik B2: MS633, MS652 Plus, MS626 Plus, MS912 Plus 2D, MS912 Plus, MS926, WD200 Plus i dopiski w kartach zasilaczy i przewodów

Źródło tekstu kart: `src/data/unitech-wireless-scanner-products.ts` (l. 806–1420), dopiski w `src/data/unitech-rp902-products.ts` i `src/data/unitech-terminal-accessories.ts`.
Dowody: `$SP/ute5b/oficjalne/` (PDF + `pdftotext -layout`), strony `$SP/ute5b/web/detail-*.txt` i `web/eu/`; dystrybutorzy (`web/dist/`) tylko pomocniczo.
Oznaczenia: DS = karta katalogowa (broszura), UM = instrukcja, QSG = skrócona instrukcja, WWW = strona ute.com. Strony = numer drukowany w dokumencie.

Pliki do pobrania: wszystkie 22 pliki z kart B2 istnieją w `public/downloads/unitech/`, są bajt w bajt identyczne z oficjalnymi PDF (md5), a rozmiary na kartach zgadzają się z `ls -l` (jednostki 1024). Szczegóły w tabelach.

---

#### unitech-ms633 (MS633-DUBU00-SG, MS633-OUBU00-SG)

Dokumenty: DS `5683_MS633_RevE` (08/24), UM `5765_MS633_Series_UM_V1_5`, QSG `5717_MS633_QSG_V1_2`, WWW `detail-MS633.txt` i `eu/eu-MS633.txt`.

| element | na stronie (cytat/wartość) | dokument (plik, miejsce, cytat/wartość) | ocena |
|---|---|---|---|
| name, seoH1 | „Unitech MS633” | DS s.1 „MS633 Series … MS633 / MS633LR” | zgodne |
| seoTitle | „Skaner pierścieniowy … 2D Bluetooth — wersje MS633 i LR” | DS s.1 „Bluetooth 2D Ring Scanner” | zgodne |
| seoDescription: Bluetooth | „Bluetooth (ponad 50 m)” | DS s.2, UM s.6, WWW: „> 164.04ft./50m (without obstructions)” | zgodne |
| seoDescription: masa | „masa 56 g” | DS s.2 „MS633: 56g / MS633 LR: 67g” | zgodne (dot. MS633) |
| seoDescription: LR | „wersja LR czyta duże kody QR do 18 m” | DS s.2 DOF „200mil QR: 25cm~1800cm”; ten sam DS s.1 „12m Barcode Reading Distance”, „Up to 12M (LR version)” | do decyzji (sprzeczność wewnątrz DS, niżej) |
| seoDescription: PN | „MS633-DUBU00-SG, MS633-OUBU00-SG” | broszura akcesoriów WD200 `6269` s.4 „MS633 PN#MS633-DUBU00-SG”, „MS633 LR PN#MS633-OUBU00-SG”; WWW WD200 Plus | zgodne |
| shortDescription | „noszony na palcu (56 g)”, „LR … z odległości kilkunastu metrów”, „600 mAh do 9 godzin” | DS s.2: 56 g; 1440 cm / 1800 cm (DOF) i 12 m (nagłówek) — oba „kilkanaście”; 600mAh; „Operating Time 9hrs.” | zgodne |
| opis: obie ręce wolne, 56 g | „pozostawia obie ręce wolne. Masa wynosi 56 g.” | DS s.1 „keep both hands free”, „Weighing just 56 grams” | zgodne |
| opis: obracany zespół spustu | „Zespół spustu obraca się tak, aby przycisk był przy kciuku lewej albo prawej ręki.” | UM s.8 (1.4.1) „rotate the trigger assembly accordingly. Position the trigger next to the thumb”; QSG s.8; DS s.1 „One push rotate design” | zgodne |
| opis: zastosowania | „handlu, inwentaryzacji, magazynów i logistyki” | DS s.1 „retail, inventory, warehousing, and logistics” | zgodne |
| opis/spec: matryca, diody | MS633 1280 × 960, 1 ciepła biała dioda; LR 2688 × 1520, 2 diody | DS s.2, UM s.5, WWW (identyczne) | zgodne |
| opis/spec: DOF MS633 | UPC 4,6–49,5 cm; QR 20 mil 3,0–35,6 cm; Code 39 5 mil 6,1–24,1 cm | DS s.2 „100% UPCA: 4.6cm~49.5cm”, „20mil QR Code: 3.0cm~35.6cm”, „5mil Code39: 6.1cm~24.1cm” | zgodne |
| opis: LR cięższa o 11 g | „cięższa o 11 g” | DS s.2: 67 g − 56 g = 11 g | zgodne |
| opis/spec: DOF LR | UPC 13 mil do 1,8 m (6,4–180 cm); Code 128 15 mil 18,2–182,9 cm; DM 200 mil 20 cm–14,4 m; QR 200 mil 25 cm–18 m | DS s.2, UM s.5, WWW: „6.4cm~180cm”, „18.2cm~182.9cm”, „20cm~1440cm”, „25cm~1800cm” | zgodne z tabelą DOF (patrz „do decyzji”) |
| opis/spec: celownik | „Celownik w obu wersjach jest zielony, laserowy.” | DS s.2, UM s.5, WWW „Aiming Element Green Laser” (QSG s.15 i UM s.11 w technice skanowania piszą „red light”) | zgodne ze specyfikacją |
| opis/spec: interfejsy | „Bluetooth (HID, SPP i BLE 4.2) … albo przewodem USB-C”; spec „USB-C (USB HID, wirtualny port COM)” | DS s.2 „Bluetooth® HID Keyboard, SPP and BLE 4.2”; „USB Type-C (USB HID Keyboard, USB VCP)”; UM s.6 bez „4.2” | zgodne |
| opis/spec: zasięg BT | „ponad 50 m bez przeszkód” | DS s.2, UM s.6, WWW „> 164.04ft./50m (without obstructions)” | zgodne |
| opis/spec: akumulator | „Wymienny akumulator 600 mAh pracuje 9 godzin i ładuje się 2 godziny” | DS s.1 „Changeable and rechargeable battery pack”; s.2 „600mAh”, „2hrs.”, „9hrs.” | zgodne |
| opis/spec: sygnalizacja | „dioda, sygnał dźwiękowy i wibracja” | DS s.2 „LED, Buzzer, Vibration” | zgodne |
| opis/spec: oprogramowanie | „ScanBridge i Scanner SDK” | DS s.1 „ScanBridge Utility and Scanner SDK” | zgodne |
| opis/spec: zawartość zestawu | „akumulator, uchwyt na palec i przewód USB-C”; spec + „skrócona instrukcja” | DS s.2 box: „MS633 Scanner, 600mAh Battery, Finger Holder, USB Type-C cable, Quick Guide”; WWW box: skaner, 600mAh, Finger Holder, USB-C; UM s.1 box: „Scanner, 600 mAh Battery, USB-C Cable” (bez uchwytu); QSG s.7 „Finger Ring Strap” w „Optional Accessories” | do decyzji (sprzeczność DS/WWW vs UM/QSG) |
| spec: typ „wersja LR: daleki zasięg (long range)” | „daleki zasięg (long range)” | DS s.1 „Superior Middle Range Scanning Capability”; rozwinięcia „LR” brak w dokumentach Unitech | brak (drobne) |
| spec: upadki, ESD | „Wielokrotne upadki z 1,5 m na beton”; „4 kV … 8 kV” | DS s.2 „Multiple 4.9 ft./1.5 m drops to concrete”; „4K Contact and 8K Air” | zgodne |
| spec: temperatury | −10…+50 °C pracy i przechowywania | DS s.2, UM s.6, WWW „-10°C~50°C” (oba wiersze) | zgodne |
| spec: wymiary | 64,8 × 34,5 × 24,7 mm / 70,0 × 36,4 × 28,4 mm | DS s.2 | zgodne |
| spec: gwarancja | „15 miesięcy” | WWW i EU WWW „Hardware Warranty 15 months”; DS brak; UM s.xv „varied from each country” | zgodne (tylko WWW) |
| applications | magazyn z wolnymi rękami; handel i hotelarstwo; odczyt z odległości bez sięgania po towar (LR) | DS s.1 „reducing the need to physically handle items”; WWW tagi Retail, Hospitality, Logistics, Warehousing | zgodne |
| warianty, atrybut „Zasięg”, tooltip | Standardowy / Wydłużony (LR); tooltip: 1280 × 960, 1 dioda, 56 g; LR 2688 × 1520, 2 diody, QR 200 mil do 18 m, +11 g, osobny akumulator | DS s.2; WWW akcesoria „MS633 600mAh Battery 1400-900075G”, „MS633LR 600mAh Battery 1400-900076G” | zgodne (18 m — patrz „do decyzji”); tooltip produktowy ma pierwszeństwo przed globalnym „Zasięg” (VariantsTable.tsx l. 211) |
| FAQ 1 (MS633 vs LR) | 2688 × 1520, 2 diody, QR 200 mil do 18 m, UPC 13 mil do 1,8 m; MS633 UPC do 49,5 cm | DS s.2 | zgodne |
| FAQ 2 (zmiana ręki) | obrót zespołu spustu; „na palec wskazujący i zapina paskiem uchwytu” | UM s.8 „placed on the index finger … push the other end down until it snaps” | zgodne |
| FAQ 3 (akumulatory) | 1400-900075G / 1400-900076G; ładowarka 2-stanowiskowa dla obu | WWW „MS633 600mAh Battery (PN#1400-900075G)”, „MS633LR 600mAh Battery (PN#1400-900076G)”, „2 Bay Battery Charger (PN#5100-900036G)”; QSG serii MS633/MS633 LR s.12 (ładowarka) | zgodne |
| FAQ 4 (współpraca, WD200) | telefony, tablety, komputery; WD200 Plus; ScanBridge | UM s.12 parowanie z urządzeniami; broszura `6269` s.4 „Scanner Options for WD200 Plus: MS633”; DS s.1 ScanBridge | zgodne |
| FAQ 5 (alternatywy) | MS652 Plus na dwóch palcach z NFC; MS626 Plus 19,4 g, dotykowy spust | DS `3974` s.1 (2 fingers, NFC); DS `6554` s.1 (19.4 g, touch-activated trigger) | zgodne |
| imageDescriptions | 1: przód pod kątem, niebieski spust, okno; 2: „widok z boku, głowica skanera i uchwyt”; 3: tył, USB-C, pasek na rzep; 4: MS633 LR przód | obejrzane: 1 ok; 2 = przód pod kątem z drugiej strony (widać okno); 3 ok (USB-C, zatrzask baterii, pasek rzepowy); 4 = zdjęcie `MS633LR__2_.png` z WWW, ok | zgodne (2 — drobna nieścisłość) |
| downloads | DS 539 KB, UM 5,0 MB, QSG 3,2 MB | md5 = `5683`, `5765`, `5717`; 551 524 B = 539 KB, 5 256 405 B = 5,0 MB, 3 386 083 B = 3,2 MB | zgodne |
| relatedAccessories | 1400-900075G, 1400-900076G, 5100-900036G, 620224G, 1550-905919G | WWW lista akcesoriów MS633 (wszystkie 5 PN) | zgodne |
| styl | brak 2. osoby, źródeł, cen, „autoryzowany” | — | zgodne |

Niezgodności i propozycje:
- imageDescriptions[1]: było „Unitech MS633 — widok z boku, głowica skanera i uchwyt na palec” → ma być „Unitech MS633 — widok z przodu pod kątem z drugiej strony, okno skanera i uchwyt na palec” (zdjęcie `MS633-DUBU00-SG-2.png` pokazuje okno skanera).
- spec „Typ skanera”: było „…; wersja LR: daleki zasięg (long range)” → ma być „…; wersja LR: zwiększony zasięg odczytu” (Unitech nie rozwija skrótu LR, DS s.1 pisze „middle range scanning capability of up to 12 meters”).

Do decyzji właściciela:
- **Zasięg MS633 LR — wszystkie wartości.** DS `5683` s.1: „12m Barcode Reading Distance”, „Up to 12M (LR version)”, „middle range scanning capability of up to 12 meters”; DS s.2 DOF: 200 mil DM 20–1440 cm, 200 mil QR 25–1800 cm, 15 mil Code 128 18,2–182,9 cm, UPC 13 mil 6,4–180 cm. UM `5765` s.5: ta sama tabela DOF (1440 cm, 1800 cm), brak „12 m”. QSG `5717`: brak zasięgów. WWW: „12m Barcode Reading Distance”, „Up to 12M” (bez dopisku LR), DOF jak w DS (1800 cm). Karta używa 18 m (seoDescription, opis, FAQ 1, tooltip). Bezpieczniej: w seoDescription „wersja LR czyta duże kody 2D z odległości kilkunastu metrów”, a 14,4 m / 18 m zostawić tylko w wierszu specyfikacji z nazwą kodu (200 mil) — albo ujednolicić do „do 12 m” wg nagłówka DS.
- **Uchwyt na palec w zestawie.** DS s.2 i WWW: tak („Finger Holder”); UM s.1: nie (skaner, akumulator, przewód USB-C); QSG s.7: „Finger Ring Strap” jako akcesorium opcjonalne. Karta (opis, spec) podaje uchwyt w zestawie. Potwierdzić u dostawcy; przy braku potwierdzenia: „Pudełko zawiera akumulator i przewód USB-C.” + uchwyt jako akcesorium.

---

#### unitech-ms652-plus (MS652-AUDB00-SG)

Dokumenty: DS `3974_MS652plus_RevM_1` (05/22, „PN#MS652-AUDB00-SG & PN#MS652-AUDB00-1G”), DS `237_MS652plus_RevJ` (starsza wersja sprzętu), UM `239_MS652_Plus_UM_V1_5`, QSG `240_MS652Plus_QSG_V1_1`, WWW `detail-MS652PLUS.txt`.

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name, seoH1, seoTitle | „Unitech MS652 Plus”; „Skaner pierścieniowy … 2D z Bluetooth i NFC” | DS RevM s.1 „MS652+ Wearable 2D Ring Scanner”, NFC | zgodne |
| seoDescription | dwa palce; Bluetooth do 100 m; NFC; 590 000 kodów; PN MS652-AUDB00-SG | DS RevM s.1 „MS652-AUDB00-SG (2 fingers design)”, „Range 300ft/100M (Open space)”, „7.5Mbytes, store up to 590,000 of EAN13 codes” | zgodne |
| shortDescription | Bluetooth do 100 m, NFC z telefonem, 590 000 kodów, 800 mAh | DS RevM s.1–2 | zgodne |
| opis: moduł spustu na dwa palce, stabilność | „z modułem spustu na dwa palce. Takie mocowanie zwiększa stabilność” | DS RevM s.1 „(2 fingers design)”, „Mounted on two fingers or one finger to enhance the operation stability” | zgodne |
| opis/FAQ 3: obrót i zdejmowanie modułu | „Przycisk spustu można obrócić na drugą stronę…; moduł … przyciskiem zwalniającym i obrotem”; FAQ „naciskając przycisk zwalniający i obracając go w lewo” | UM s.2 „Trigger Key (can be rotated)”; UM s.6 „press down the release button and rotate it counterclockwise”; s.7 „two gaps … left click or right click” | zgodne |
| opis: dwie podkładki | „Dwie podkładki na palce pozwalają dopasować skaner do dłoni.” | UM s.8 (1.4.3) „There are two finger pads for users to choose…”, ale „Step 1: Paste two finger pads together” (zdjęcia: dwie części sklejane w jedną podkładkę); WWW „Finger Pad (PN# 386268G/ PN# 386286G)” | do decyzji |
| opis/spec: Bluetooth | „LE 4.2 i klasycznej 2.1 klasy 1, z zasięgiem 100 m w linii widoczności”; spec „do 100 m w otwartej przestrzeni” | DS RevM s.2 „Bluetooth LE® V4.2; Bluetooth® 2.1+EDR, Class 1; 300ft/100M (Open space)”; UM V1.5 s.3 „30ft/10M (line of sight)” (inna wersja sprzętu, niżej) | zgodne z DS; w opisie „w linii widoczności” zamiast „w otwartej przestrzeni” (drobne) |
| opis/FAQ 1: NFC tylko w HID | „gdy skaner pracuje w trybie Bluetooth HID”; FAQ: logo unitech, „MS652Plus-XXXX” | UM s.14 „(only applicable in BT HID Mode)”, „Touch near the unitech logo area”; s.15 „MS652Plus-XXXX”; QSG s.1 | zgodne |
| opis/FAQ 2: tryb Auto + 7,5 MB | „W trybie Auto dane … nie giną: pamięć 7,5 MB mieści do 590 000 kodów EAN-13 i wysyła je po powrocie” | DS RevM s.1 „auto mode that ensures no data is lost” (osobno: s.2 „Memory 7.5Mbytes”); QSG `240` s.1: poza zasięgiem dane trafiają do „buffer memory”, w Batch Mode do „internal memory”; UM s.110 „stored in the memory” (bez pojemności); UM s.112 „Keep Buffer Data When Power Off: Disable*” | niezgodne (nadinterpretacja: pojemność 7,5 MB przypisana do bufora trybu Auto) |
| opis/spec: matryca | 1280 × 960, rolling shutter, 30 kl./s; „1D, 2D i PDF417 z papieru oraz z ekranów” | DS RevM s.1–2 „CMOS sensor with 1280 x 960 pixels, rolling shutter”, „30 frame /sec”; „printed on paper labels or displayed on the screen” | zgodne |
| opis/spec: akumulator | 800 mAh / 3,7 V, 9 h przy odczycie co 5 s, ładowanie 4 h, „przewodem USB lub w stacji” | DS RevM s.2 „800mAH / 3.7V”, „Fully charged in 4 hours”, „9 hours at 1 scan / 5 secs”, „USB Cable or Battery Charging cradle” (DS s.1 „Up to 13 Hours”) | zgodne (karta wybrała wartość z tabeli) |
| opis/spec: IP42, 95 g | „Obudowa IP42 waży 95 g.” | DS RevM s.2 „IP42”, „95g” | zgodne |
| opis: WD200 Plus | „współpracuje z komputerem noszonym WD200 Plus” | broszura `6269` s.4 „MS652 Plus PN#MS652-AUDB00-SG”; WWW WD200 Plus | zgodne |
| spec: źródło światła | zielona dioda LED 610 nm | DS RevM s.2 „610nm, Green LED” | zgodne |
| spec: DOF | UPC 4,6–49,5; QR 20 mil 3,8–29,2; Code 39 5 mil 6,1–24,1; DM 10 mil 7,4–21,6 cm | DS RevM s.2 (wszystkie 4 wartości), WWW | zgodne |
| spec: światło otoczenia | do 107 639 lx | DS RevM s.2 „Max 107, 639 lux” | zgodne |
| spec: interfejsy | BLE HID, SPP i HID; micro USB | DS RevM s.2 „BLE HID, BT SPP & HID profiles”, „Micro USB” | zgodne |
| spec: tryby | ze spustem, prezentacyjny, Auto, wsadowy | WWW „Trigger mode, Presentation mode, Auto mode, Batch mode” | zgodne |
| spec: upadki, temperatury, wymiary | 1,5 m (sam skaner); −10…+50; −20…+60; 50 × 71 × 21 mm | DS RevM s.2 | zgodne |
| spec: zawartość zestawu | „Skaner, akumulator, przewód micro USB, podkładka na palec, moduł spustu” | DS RevM s.2 box: „Scanner, Battery, Micro USB cable, Finger rubber pad”; UM s.1 i WWW: to samo; „Trigger module” tylko w akcesoriach | niezgodne („moduł spustu” jako osobna pozycja zestawu — brak w dokumentach) |
| spec: gwarancja | 15 miesięcy | WWW „Hardware Warranty 15 months”, Statement „fifteen months” | zgodne |
| applications | handel i hotelarstwo; logistyka i serwis; stabilne mocowanie | DS RevM s.1 „retail, logistics, field service and hospitality” | zgodne |
| wariant | „skaner 2D na dwa palce, Bluetooth i NFC, micro USB” | DS RevM s.1–2 | zgodne |
| FAQ 4 (ładowanie) | przewód micro USB z zestawu; stacja z USB; akumulator; zasilacz 1010-900067G osobno | QSG `240` s.1 „plug the USB cable … into a USB port on the host computer”; WWW: „single slot cradle with USB cable (PN# 5000-900044G)”, „Battery (PN#1400-900050G)”, „Power Adaptor with universal plugs (PN#1010- 900067G)” | zgodne |
| FAQ 5 (alternatywy) | MS633 na jednym palcu; MS626 Plus 19,4 g | DS `5683`, DS `6554` | zgodne |
| imageDescriptions | 1: dwa skanery z niebieskimi wstawkami; 2: przód, okno, pasek; 3: bok, niebieski moduł spustu; 4: bok od strony paska na rzep | obejrzane — zgodne z obrazami | zgodne |
| downloads | DS 683 KB; UM 4,7 MB | md5 = `3974` (RevM, 698 917 B = 683 KB), `239` (UM V1.5, 4 939 844 B = 4,7 MB) | rozmiary zgodne; **UM — niewłaściwa wersja** (niżej) |
| relatedAccessories | 1400-900050G, 5000-900044G, 1550-905921G, 607448G, 386268G, 386286G, 386208G, 385892G, 1010-900067G | WWW lista akcesoriów MS652 Plus (wszystkie PN; mikro USB na WWW raz „1550-900921G”, raz „1550-905921G”) | zgodne (PN przewodu — rozbieżność na WWW, poza tekstem karty) |

Niezgodności i propozycje:
- **downloads: UM V1.5 opisuje inną wersję sprzętu.** UM `239` V1.5 s.3–4: „Scan Engine Zebra SE2707”, „640 x 400 pixel”, „1 Hyper Red 660nm LED”, „Range 30ft/10M (line of sight)”, „Operating Temperature 0°C to 50°C” — to dane starszej broszury RevJ (`237`, „Zebra SE2707”, 640 × 400). WWW przypisuje do PN#MS652-AUDB00-SG osobny dokument: „MS652 Plus UM V1.4 (for MS652-AXXXXX-XX) … for PN#MS652-AUDB00-SG, PN#MS652-AUDB00-1G”. Było: `MS652_UM` = V1.5 → ma być: instrukcja V1.4 „for MS652-AXXXXX-XX” (do pobrania przez koordynatora) albo usunięcie UM z karty do czasu jej pobrania.
- opis (akapit 2) i FAQ 2: było „W trybie Auto dane zeskanowane poza zasięgiem nie giną: pamięć 7,5 MB mieści do 590 000 kodów EAN-13 i wysyła je po powrocie w zasięg.” → ma być „W trybie Auto skaner zapisuje odczyty spoza zasięgu w buforze i wysyła je po powrocie w zasięg. Pamięć skanera ma 7,5 MB i mieści do 590 000 kodów EAN-13.” FAQ 2: było „Nie, jeśli skaner pracuje w trybie Auto. Pamięć 7,5 MB mieści do 590 000 kodów EAN-13, a skaner wysyła je po powrocie w zasięg.” → ma być „Nie, jeśli skaner pracuje w trybie Auto. Skaner zapisuje wtedy odczyty w buforze i wysyła je po powrocie w zasięg. Tryb wsadowy przechowuje dane w pamięci 7,5 MB (do 590 000 kodów EAN-13).”
- spec „Zawartość zestawu”: było „Skaner, akumulator, przewód micro USB, podkładka na palec, moduł spustu” → ma być „Skaner z modułem spustu na dwa palce, akumulator, przewód micro USB, podkładka na palec” (moduł jest częścią wersji „2 fingers design”, nie osobną pozycją zestawu; DS RevM s.2, UM s.1, WWW).
- opis (akapit 2): było „z zasięgiem 100 m w linii widoczności” → ma być „z zasięgiem do 100 m w otwartej przestrzeni” (DS RevM s.2 „Open space”).

Do decyzji właściciela:
- **Podkładki 386268G/386286G.** Karta MS652 Plus: „Dwie podkładki na palce pozwalają dopasować skaner do dłoni” (UM s.8 zdanie 1). Ta sama strona UM: „Paste two finger pads together”, zdjęcia pokazują sklejenie dwóch części w jedną podkładkę; karta akcesorium 386286G nazywa ją „Podkład samoprzylepny podkładki na palec”. Proponuję zdanie neutralne: „Podkładka na palec, przyklejana do modułu spustu, poprawia dopasowanie skanera do dłoni.” i ujednolicenie z kartami akcesoriów.
- Czas pracy: DS RevM s.1 „Up to 13 Hours”, s.2 „9 hours at 1 scan / 5 secs” — karta podaje 9 h (wartość z tabeli, bezpieczniejsza). Bez zmian.

---

#### unitech-ms626-plus (MS626-PUBB00-SG)

Dokumenty: DS `6554_MS626P_RevC` (07/26), UM `6878_MS626_Plus_UM_V1_1`, QSG `6556_MS626_Plus_QSG_V1_2`, WWW `detail-MS626Plus.txt` („MS626 Plus (2nd Gen)”).

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name, seoH1, seoTitle | „… MS626 Plus 2D Bluetooth 5.0 — 19,4 g” | DS s.1 „19.4g Lightweight design”, „Bluetooth 5.0 dual-mode” | zgodne |
| seoDescription / shortDescription | 19,4 g; 120 kl./s; BT 5.0; dotykowy spust w rękawicach; PN | DS s.1 „120 fps”, „Glove-friendly touch-activated trigger button” | zgodne (PN — niżej) |
| opis: masa, wymiary | 19,4 g; 27,6 × 46,2 × 26,8 mm | DS s.2 „W27.6 x L46.2 x H26.8 mm”, „19.4g” | zgodne |
| opis: zastosowania | handel, hotelarstwo, magazyny, serwis w terenie | DS s.1 „retail, hospitality, warehousing, and field service” | zgodne |
| opis/FAQ 1: spust w rękawicach | „Dotykowy przycisk spustu działa także w rękawicach” | DS s.1; QSG s.7 lista testowanych rękawic („recommended to operate with bare hand or thin glove”) | zgodne |
| opis/FAQ 4: lewa/prawa ręka | „można przestawić na lewą lub prawą rękę”; FAQ: „obsługuje pracę na lewej i prawej ręce … paskiem na rzep” | DS s.1 „Supports left- or right-hand operation”; QSG s.7 kody „Right Button Only [For Left-handed User]”, „Left Button Only”, „Both Buttons” | zgodne (FAQ nie odpowiada „jak”) |
| opis: 3 mil dla 1D i 2D | „rozpoznaje kody 1D i 2D od 3 mil” | DS s.1 „high-density barcode capture down to 3 mil”, s.2 „Optical Resolution 3mil”; QSG s.1 „Resolution 4mil/ 0.1mm (1D), 10mil/ 0.25mm (2D)” | niezgodne (nadinterpretacja dla 2D) + rozbieżność dokumentów |
| opis: ekrany | „wyświetlane na ekranach telefonów i monitorów LCD” | DS s.1 „digital codes on mobile or LCD screens” | zgodne |
| opis/spec: kody 2D | QR, Micro QR, PDF417, MicroPDF417, DM, Aztec, MaxiCode, Han Xin, DotCode | DS s.2 „QR Code. Micro QR Code, PDF417, MicroPDF417, Data Matrix, Aztec, MaxiCode, HanXin, Dotcode” | zgodne |
| opis/spec: szerokość, DOF | 75 mm; UPC 13 mil 65–315; Code 39 5 mil 50–150; QR 15 mil 35–175; PDF417 6,67 mil 55–120; DM 10 mil 50–120 mm | DS s.1 „scanning width of up to 75 mm”; s.2 DOF (wszystkie 5) | zgodne (DS s.2 i UM s.3 mają też omyłkowo wklejone wiersze MS633 LR — karta ich nie używa) |
| opis/spec: Bluetooth | „5.0 w trybie dual mode … do 20 m”; spec „(klasa 2), do 20 m w otwartej przestrzeni” | DS s.1 „up to 20 meters in line-of-sight”; s.2 „66 ft/ 20m (line of sight)” | zgodne; „w otwartej przestrzeni” → „w linii widoczności” (drobne) |
| opis/spec: USB-C | „USB HID lub wirtualny port COM” | DS s.2 „USB HID, USB VCP”; box „USB Type-C cable” | zgodne |
| spec: interfejsy BT | HID, SPP, BLE | DS s.2 „BT HID, BT SPP, BT BLE”; UM s.3 bez BLE | zgodne z DS |
| opis/FAQ 2/spec: akumulator | „240 mAh wystarcza na około 5 godzin”, „pełne ładowanie trwa 2,5 godziny”; spec „praca do 5 h”, „ładowanie ok. 2,5 h” | DS s.1 „up to 5 hours per charge”, s.2 „3.7V, 240mAh”; QSG s.1 „Charge Time 2.5 hours”, „Battery Life 4000 scans (1 scan/ 5 sec)” | ładowanie zgodne; „około 5 godzin” — nadinterpretacja („up to”) |
| FAQ 2 / spec: temperatura ładowania | 10–45 °C | DS s.2 „Charging Temperature 10°C ~ 45°C” | zgodne |
| opis/spec: IP42, 1,5 m | „Obudowa IP42 znosi upadki z 1,5 m” | DS s.2 „IP42”, „1.5M onto concrete” | zgodne |
| spec: matryca, celownik, oświetlenie | 640 × 480; 120 kl./s; czerwony LED; białe LED | DS s.2 | zgodne |
| spec: pamięć | 2 MB | DS s.2 „Memory 2MB” | zgodne |
| spec: temperatury | −10…+50; −20…+60 | DS s.2 | zgodne |
| spec: typ „(2. generacja)” | „Skaner pierścieniowy 2D (2. generacja)” | WWW „MS626 Plus (2nd Gen)” | zgodne |
| opis/spec: zestaw | „przewód USB-C oraz pasek na rzep” | DS s.2 box „MS626+ Scanner, USB Type-C cable, Velcro Strap”; UM s.1 dodatkowo „Spare Velcro Strap, Quick Start Guide, Hand Tag” | zgodne |
| spec: gwarancja | 15 miesięcy | WWW „Hardware Warranty 15 months”, ale Statement: „for a period of twelve months from the date of shipment” | do decyzji |
| FAQ 3 (ekrany) | „kody liniowe i dwuwymiarowe z ekranów telefonów i monitorów LCD” | DS s.1 | zgodne |
| FAQ 5 (alternatywy) | MS633 z wymiennym akumulatorem 600 mAh; MS652 Plus na dwa palce z NFC | DS `5683` s.1–2; DS `3974` | zgodne |
| applications | handel i hotelarstwo; magazyn i serwis; praca w rękawicach | DS s.1 | zgodne |
| wariant / PN | „MS626-PUBB00-SG, skaner 2D, Bluetooth 5.0, USB-C, pasek na rzep” | PN nie występuje w żadnym dokumencie Unitech ani w zapisanych plikach dystrybutorów w `$SP` (bf-ms626-plus.txt bez PN) | brak (do potwierdzenia) |
| imageDescriptions | 1: „z żółtym panelem dotykowego spustu, widok z przodu pod kątem”; 2: bok, pasek; 3: dwa skanery; 4: „widok z boku, żółty panel spustu i pasek na rzep” | UM s.2 (rysunek 1.2): żółty panel = „NFC Area (Logo Area)”, „LED Indicator”, srebrny „Function Button/Power Button”; „Touch-Activated Trigger Button” = czarne kwadratowe pole na boku | **1 i 4 niezgodne**; 2 i 3 zgodne |
| downloads | DS 732 KB; UM 4,0 MB; QSG 757 KB | md5 = `6554` (749 130 B), `6878` (4 196 426 B), `6556` (774 776 B) | zgodne |
| relatedAccessories | brak | — | — |

Niezgodności i propozycje:
- imageDescriptions[0]: było „Unitech MS626 Plus — skaner pierścieniowy z żółtym panelem dotykowego spustu, widok z przodu pod kątem” → ma być „Unitech MS626 Plus — skaner pierścieniowy z żółtym panelem górnym i przyciskiem funkcyjnym, widok z przodu pod kątem na okno skanera”.
- imageDescriptions[3]: było „Unitech MS626 Plus — widok z boku, żółty panel spustu i pasek na rzep” → ma być „Unitech MS626 Plus — widok z boku, dotykowy przycisk spustu i pasek na rzep” (UM s.2).
- opis (akapit 2): było „rozpoznaje kody 1D i 2D od 3 mil” → ma być „rozpoznaje kody 1D i 2D, a jego rozdzielczość optyczna wynosi 3 mil” (DS s.2). Bezpieczniej też w spec „Rozdzielczość: 3 mil (0,075 mm)” bez zmian.
- opis (akapit 3) i FAQ 2: było „wystarcza na około 5 godzin” → ma być „wystarcza na do 5 godzin pracy” (DS s.1 „up to 5 hours per charge”).
- spec „Łączność Bluetooth”: było „do 20 m w otwartej przestrzeni” → ma być „do 20 m w linii widoczności” (DS s.2 „line of sight”).
- FAQ 4 (propozycja uzupełnienia): „Ręce przestawia się kodem konfiguracyjnym, który włącza lewy albo prawy dotykowy przycisk spustu. Skaner mocuje się na palcu paskiem na rzep z zestawu.” (QSG s.7).

Do decyzji właściciela:
- **Gwarancja MS626 Plus:** WWW pole „Hardware Warranty 15 months”, a w tej samej sekcji „Statement … twelve months”. DS i UM bez okresu (UM: „varied from each country”). Do potwierdzenia u dostawcy; do tego czasu bezpieczniej usunąć wiersz gwarancji albo wpisać 12 miesięcy.
- **Rozdzielczość:** DS/UM/WWW 3 mil; QSG s.1 4 mil (1D) / 10 mil (2D). Karta: 3 mil (DS).
- **PN MS626-PUBB00-SG:** brak dowodu w plikach Unitech i w zapisanych stronach dystrybutorów; konfiguracja (2D, BT, USB-C, pasek) zgodna z zestawem z DS. Do potwierdzenia w dwóch źródłach.

---

#### unitech-ms912-plus-2d (MS912-2UBB00-SG)

Dokumenty: DS `4697_MS912_Plus_2D_RevB` (12/22), QSG `4693_…_V1_1`, UM `4744_MS912+_2D_UM_V1_1`, WWW `detail-MS912_plus_2D.txt`.

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name, seoH1, seoTitle | „… Bluetooth 5.0 — 30,7 g” | DS s.1 „Bluetooth® 5.0”, „30.7g” | zgodne |
| seoDescription / shortDescription | 30,7 g; BT 5.0 do 20 m; tryb pamięci 2 MB; iOS Hotkey; USB-C; PN | DS s.1–2; broszura `6269` s.4 „MS912 Plus 2D PN#MS912-2UBB00-SG” | zgodne |
| opis: masa, wymiary | 30,7 g; 72 × 30 × 20 mm | DS s.2 „W30 x L72 x H20 mm”, „30.7g” | zgodne |
| opis: smycz, szlufka, 1 przycisk | „Nosi się go na smyczy lub zawiesza na szlufce paska … jednego przycisku” | DS s.1 „hung on a lanyard or easily attached to a belt loop”, „single-button scanning design” | zgodne |
| opis/applications: zastosowania | hotelarstwo, serwis w terenie, ochrona zdrowia | WWW tagi „Hospitality, Field Service, Healthcare” | zgodne |
| opis/spec: matryca, rozdzielczość | 640 × 480; 1D od 5 mil, 2D od 10 mil; 30 kl./s | DS s.2 „Sensor 640 x 480”, „5mil … (1D) 10mil … (2D)”, „30 Frames/Sec” | zgodne |
| opis/spec: DOF | Code 39 5 mil 55–100; UPC/EAN 13 mil 55–270; QR 15 mil 40–190; PDF417 6,7 mil 45–120; DM 10 mil 40–90 mm | DS s.2 (wszystkie 5), UM s.3 | zgodne |
| opis/spec: Bluetooth | „5.0 (klasa 2) z profilami HID i SPP … do 20 m w otwartej przestrzeni” | DS s.2 „Bluetooth 5.0 (Class 2)”, „66 ft/ 20m (line of sight)” | zgodne; „w otwartej przestrzeni” → „w linii widoczności” (drobne) |
| opis/FAQ 1: iOS Hotkey | „przełącza klawiaturę ekranową”; FAQ „domyślnie włączona. Dwukrotne naciśnięcie przycisku …” | DS s.1 „toggle the iPhone/ iPad touch keyboard with iOS Hotkey”; QSG „iOS Hotkey(enabled by default) … double-click the trigger” | zgodne |
| opis/FAQ 2: tryb pamięci | „zapisuje odczyty zamiast wysyłać … eksportuje dane do komputera przez USB” | DS s.1 „store scans instead of wirelessly transmitting … export all the data to your host computer”; QSG (MEMORY MODE) „connect the scanner to the host with cable … „MiniScan”” | zgodne |
| opis/FAQ 4/spec: akumulator | 350 mAh; 5000 odczytów (1 / 5 s, BT); ładowanie 2 h przez USB-C | DS s.2 „3.7V, 350mAh”, „5000 scans (1 scan/ 5 secs, Bluetooth connected)”; WWW „Battery Charging time 2 hours”; QSG „Charge Time 2 hours” | zgodne |
| opis/spec: upadki | 1,5 m | DS s.1–2 | zgodne |
| opis/spec: zestaw | smycz na nadgarstek i przewód USB-C | WWW box „USB cable (Type C USB), Wrist Lanyard”; UM s.1 „USB Type-C Cable, Wrist Lanyard, Quick Start Guide, Quick Connection Card”; DS s.2 „Hand strap” | zgodne |
| spec: celownik | czerwona dioda LED 625 nm | DS s.2 „625nm visible red LED” | zgodne |
| spec: światło | do 70 000 lx | DS s.2 „70,000 Lux (Sunlight)” | zgodne |
| spec: interfejsy | BT HID, SPP; USB HID, USB VCP, tryb pamięci (USB-C) | DS s.2 „BT HID, BT SPP, USB HID, USB VCP, Memory”, „USB Type C” | zgodne |
| spec: pamięć, temperatury | 2 MB; −10…+50; −20…+60 | DS s.2 | zgodne |
| spec: gwarancja | 15 miesięcy | WWW „15 months”, Statement „fifteen months” | zgodne |
| FAQ 3 | „UPC/EAN 13 mil 55–270 mm, QR 15 mil 40–190 mm. Najdrobniejsze kody 1D mają moduł 5 mil.” | DS s.2 | zgodne; ostatnie zdanie niejasne (styl) |
| FAQ 5 (alternatywy) | MS912 Plus — kody liniowe; MS926 — 2D z OLED | DS `176`, DS `179` | zgodne |
| wariant | „MS912-2UBB00-SG, skaner 2D, Bluetooth 5.0, USB-C, smycz” | broszura `6269` s.4; DS s.2 | zgodne |
| imageDescriptions | 1: biała obudowa, czarna głowica; 2: bok, port USB-C; 3: przód, niebieski przycisk; 4: tył, pokrywa, otwór na smycz | obejrzane: 2 pokazuje gniazdo USB-C pod zaślepką; pozostałe zgodne | zgodne |
| downloads | DS 411 KB; UM 4,1 MB; QSG 430 KB | md5 = `4697`, `4744`, `4693`; 420 628 / 4 292 583 / 440 719 B | zgodne |
| relatedAccessories | 3210-900019G; 1010-900067G | WWW „Neck Lanyard PN# 3210-900019G”, „5V/2A Adapter with universal plugs PN#1010-900067G” | zgodne |

Niezgodności i propozycje:
- FAQ 3: było „Najdrobniejsze kody 1D mają moduł 5 mil.” → ma być „Skaner czyta kody 1D o module od 5 mil.”
- opis i spec „Łączność Bluetooth”: było „do 20 m w otwartej przestrzeni” → ma być „do 20 m w linii widoczności” (DS s.2).

Do decyzji właściciela: brak.

---

#### unitech-ms912-plus (MS912-FUBB00-TG)

Dokumenty: DS `176_MS912_Plus_RevE` (04/22), UM `4696_MS912+_TypeC_UM_V1_0`, QSG `4695_MS912+_Quick_Guide_TypeC_V1_8`, WWW `detail-MS912PLUS.txt`.

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name, seoH1 | „Unitech MS912 Plus” | DS s.1 „MS912+ Wireless Pocket CCD Scanner” | zgodne |
| seoTitle / seoDescription / shortDescription | 1D, liniowy CMOS, 650 skanów/s, 4 mil, BT do 10 m, 30,2 g; PN | DS s.1–2 „650 scans per second”, „4 mil resolution”, „Linear CMOS”, „33 ft/ 10m (line of sight)”, „30.2g”; broszura `6269` s.4 „MS912 Plus 1D PN#MS912-FUBB00-TG” | zgodne |
| opis: wersja Plus, LCD | „większą szybkość odczytu i rozdzielczość 4 mil … odczytu kodów 1D z wyświetlaczy LCD” | DS s.1 „boost the scan speed up to 650 … higher 4 mil resolution”, „read 1D barcodes displayed on the LCD screens of mobile devices” | zgodne |
| opis: ciemność–słońce | „w całkowitej ciemności i w bezpośrednim słońcu do 100 000 luksów” | DS s.1 „any lighting conditions from darkness to direct sunlight (100,000 lux)” | zgodne |
| opis/spec: szerokość | 140 mm (Code 39 13 mil) | DS s.2 „140mm (13Mil Code39)” | zgodne |
| opis/spec: obudowa | 30,2 g; 72 × 30 × 20 mm; kieszeń; smycz w pudełku | DS s.2 „H20*W30*L72mm”, „30.2g”, box „Wrist Lanyard” | zgodne |
| opis/spec/FAQ 3: Bluetooth | 2.1+EDR, HID i SPP, do 10 m; spec „w otwartej przestrzeni”; FAQ „w linii widoczności” | DS s.2 „Bluetooth® 2.1+EDR”, „33 ft/ 10m (line of sight)” | zgodne; spec „w otwartej przestrzeni” → „w linii widoczności” (drobne) |
| opis/FAQ 4: tryb Auto | „przechowuje dane zebrane poza zasięgiem i wysyła je po powrocie”; FAQ „dane czekają w buforze” | DS s.1 „auto mode that ensures no data is lost”; UM s.50 „memory buffer (2K RAM)” | zgodne (karta słusznie nie podaje 2 MB dla trybu Auto) |
| opis: iOS Hotkey | „włącza i wyłącza klawiaturę dotykową urządzeń iPhone i iPad” | DS s.1 | zgodne |
| opis/spec: akumulator | 350 mAh; 6000 odczytów (1 / 5 s); „ładowanie … przez standardowy port USB” | DS s.1 „charge … by utilizing a standard USB port”, s.2 „350mAh”, „6000 scans … (1 scan/ 5 secs, PAN connected)” | zgodne |
| opis/spec: temperatura pracy | 0…50 °C | DS s.2, UM s.4, WWW „0°C to 50°C”; QSG Type-C s.1 „-10 to 50˚C” | zgodne z DS (QSG odbiega) |
| opis/spec: DOF | Code 39 4 mil 40–65; 5 mil 35–90; 10 mil 35–195; UPC/EAN 13 mil 35–230 mm | DS s.2 | zgodne |
| spec: typ „(CCD, liniowy CMOS)” | — | DS s.1 „Pocket CCD Scanner”, „CCD module”; s.2 „Linear CMOS” | zgodne |
| spec: źródło światła, światło otoczenia | 625 nm; 100 000 lx | DS s.2 | zgodne |
| spec: interfejsy | „Bluetooth: HID i SPP; USB HID, USB VCP” | DS s.2 „BT HID, BT SPP, USB HID, USB VCP, Memory (MS912M+)” | zgodne (bez „Memory” — niżej) |
| spec: upadki, przechowywanie | 1,5 m; −20…+60 | DS s.2 | zgodne |
| spec/wariant: zestaw | „Skaner, przewód USB, smycz na nadgarstek” | DS s.2 „USB cable (Mini USB), Wrist Lanyard”; WWW box „USB cable (Mini USB)”; UM Type-C s.1 „USB Charging Cable, Wrist Lanyard, Quick Start Guide” | zgodne (karta nie podaje typu złącza — niżej) |
| spec: gwarancja | 15 miesięcy | WWW „15 months”, Statement „fifteen months” | zgodne |
| applications | hotelarstwo i serwis; ochrona zdrowia; kody 1D z ekranu | WWW tagi; DS s.1 „retail, healthcare and office automation” | zgodne |
| FAQ 1 | „Nie. … odczytuje kody 1D” | DS s.1 („1D barcode data”) | zgodne |
| FAQ 2 | „Tak, ale wyłącznie kod liniowy. Takie kody skaner odczytuje w każdych warunkach oświetlenia, od ciemności po bezpośrednie słońce do 100 000 luksów.” | DS s.1: odczyt z ekranu i odczyt „from darkness to direct sunlight” to dwie osobne cechy | niezgodne (nadinterpretacja: odczyt ekranu w pełnym słońcu nie jest deklarowany) |
| FAQ 5 | MS912 Plus 2D; MS926 z OLED | DS `4697`, `179` | zgodne |
| imageDescriptions | 1: przód na okno; 2: bok, „gniazdo USB pod zaślepką”; 3: na smyczy; 4: przód, niebieski przycisk | obejrzane: 2 pokazuje **gniazdo Mini USB**; reszta zgodna | zgodne (ważne dla złącza — niżej) |
| downloads | DS 448 KB; UM 4,7 MB; QSG 353 KB | md5 = `176` (DS: „Cable 1.5M (Mini USB Cable)”), `4696` (UM „for Type-C”), `4695` (QSG „for Type-C”); 458 509 / 4 975 381 / 361 233 B | rozmiary zgodne; wersje UM/QSG — do decyzji |
| relatedAccessories | 3210-900019G; 1010-900067G | WWW „Neck Lanyard PN# 3210-900019G”, „PN#1010-900067G” | zgodne |

Niezgodności i propozycje:
- FAQ 2: było „Tak, ale wyłącznie kod liniowy. Takie kody skaner odczytuje w każdych warunkach oświetlenia, od ciemności po bezpośrednie słońce do 100 000 luksów.” → ma być „Tak, ale wyłącznie kody liniowe (1D). Skaner czyta kody w oświetleniu od całkowitej ciemności do bezpośredniego słońca (100 000 luksów).”
- spec „Łączność Bluetooth”: było „do 10 m w otwartej przestrzeni” → ma być „do 10 m w linii widoczności”.
- Pominięta cecha PN (uzupełnienie): QSG `4695` s.22 „BATCH MODE For MS912M+ only … MS912M+ (P/N: MS912-FUBB00-SG/TG), which can be easily distinguished by an “M” mark”. DS s.2: „Memory 2MB (MS912+)”, „Memory (MS912M+)”. Propozycja: w spec „Interfejsy” dodać „tryb wsadowy (pamięć 2 MB, dane jako plik na dysku USB)” i jedno zdanie w opisie: „Wersja MS912-FUBB00-TG ma tryb wsadowy z pamięcią 2 MB; dane odczytuje się po podłączeniu przewodu jako plik na dysku USB.”

Do decyzji właściciela:
- **Złącze MS912-FUBB00-TG.** Karta (tekst): neutralnie „przewód USB”, „standardowy port USB”. Zdjęcie 2 karty: gniazdo Mini USB. DS `176` s.2 i WWW box: „USB cable (Mini USB)”. Dołączone UM `4696` i QSG `4695` to wersje „for Type-C” (UM s.2 „Type-C USB port”, s.5 ładowanie Type-C; ale UM s.4 „Host Interface supported: Mini USB”). WWW ma osobno „User’s Manual V1.7 (for mini USB)” i „Quick Start Guide V1.6 (for mini USB)” oraz akcesorium „Type C Cable PN#1550-905925G”. Jedyne powiązanie PN z dokumentem: QSG „for Type-C” wymienia „MS912-FUBB00-SG/TG” (wersja MS912M+), ale nie mówi, że ten PN ma złącze Type-C. Do potwierdzenia u BlueStar; do tego czasu zostawić tekst bez typu złącza, a zdjęcie 2 i pliki do pobrania ujednolicić z potwierdzoną wersją (albo dodać obie instrukcje z opisem „Mini USB” / „USB-C”).

---

#### unitech-ms926 (MS926-UUBU00-SG)

Dokumenty: DS `179_MS926_RevJ` (06/23), UM `5219_MS926_TypeC_UM_V1_0`, QSG `5218_MS926_TypeC_QSG_V1_0` (tylko grafika — sprawdzona jako obraz), WWW `detail-MS926.txt`.

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name, seoH1, seoTitle | „… 2D z wyświetlaczem OLED i NFC” | DS s.1 „1-inch OLED display”, „NFC-Bluetooth® automatic pairing” | zgodne |
| seoDescription / shortDescription | OLED 1 cal; NFC; tablica 10 000 kodów; 100 000 kodów; PN | DS s.1 „up to 10,000 pre-load barcodes”, „up to 100,000 barcodes storage in batch mode”; broszura `6269` s.4 „MS926 PN#MS926-UUBU00-SG” | zgodne |
| opis/spec: wyświetlacz, przyciski | „OLED 1 cal (128 × 64) i trzema przyciskami” | DS s.2 „1" OLED, 128 x 64”, „3 keys: Page up, Page down, Scan with power on/off feature” | zgodne |
| FAQ 1: liczba przycisków przewijania | „Dwa boczne przyciski przewijają listę w górę i w dół, a trzeci włącza skaner i uruchamia odczyt.” | UM s.2 „Page up / Page down keys (on the side of MS926) Move up / down through list of menu items”; „Scan & Power Button”; DS s.2; zdjęcie 3 karty: dwa przyciski na boku | zgodne |
| opis/applications | identyfikacja osób, bilety mobilne | DS s.1 „personal Identification and mobile ticketing application” | zgodne |
| opis/spec/FAQ 2: Smart Data Mapping | tablica do 10 000 kodów, podgląd i edycja, data i godzina | DS s.1 „Lookup Table and Data View/Edit Function with Date / Time stamp … up to 10,000 pre-load barcodes” | zgodne (FAQ „przed wysłaniem” — dopuszczalne uogólnienie „ensure data transmitted correctly”) |
| opis/spec/FAQ 4: pamięć | flash 2 MB, do 100 000 kodów (zależnie od długości); 64 KB SRAM | DS s.1–2 | zgodne |
| opis/spec/FAQ 3: NFC i Bluetooth | NFC przez zbliżenie; 2.1+EDR (HID, SPP) ok. 9 m (30 stóp) | DS s.2 „Bluetooth® 2.1+EDR”, „Wireless SPP & HID”, „Up to 30 Feet (Open space)”; UM s.5 to samo; QSG s.1 „Touch the back of the MS926 scanner to your host device”; DS s.1 tekst: „30 meters operating range” | zgodne z tabelą specyfikacji (patrz „do decyzji”) |
| opis/spec: matryca | 640 × 480, 30 kl./s; telefony i papier, dowolna orientacja | DS s.1 „LCD screens of mobile devices and paper in any orientation”; s.2 | zgodne |
| opis/spec: akumulator | 680 mAh, USB-C, 4 h, 5 h (1 / 5 s) | DS s.1 „standard USB Type-C port … fully charged within 4 hours”; s.2 „680mAh”, „5 hours at condition of 1 scan/5 sec” | zgodne |
| opis/spec: IP42, 1,5 m, 63 g | — | DS s.2 | zgodne |
| opis/spec: zestaw | przewód USB-C, smycz na nadgarstek | DS s.2 box „MS926 scanner, Interface cable, Wrist Lanyard”; UM s.1 „Quick Reference Guide, Type-C USB to USB Cable, Wrist Lanyard” | zgodne |
| spec: oświetlenie | białe LED 5000 K; 0–100 000 lx | DS s.2 „White LED with CCT 5000K”, „0–100,000 lux” | zgodne |
| spec: DOF | UPC 100% 55–280; Code 39 20 mil 60–380; QR 20 mil 50–230; DM 10 mil 60–130 mm | DS s.2 | zgodne |
| spec: tolerancja ruchu | do 10 cm/s (UPC 13 mil) | DS s.2 „Up to 10 cm/s (4 in/s)”; UM s.3 „Up to 100 cm/s (4 in/s)” (błąd w UM: 4 in/s ≈ 10 cm/s) | zgodne z DS |
| spec: tryby | ze spustem, prezentacyjny, Auto, wsadowy, wedge | DS s.2 | zgodne |
| spec: temperatury, wymiary | 0…50; −30…+70; 95,9 × 36,9 × 21,1 mm | DS s.2 | zgodne |
| spec: gwarancja | 15 miesięcy | WWW „15 months”, Statement „fifteen months” | zgodne |
| wariant | „… Bluetooth, NFC, USB-C” | DS, UM | zgodne |
| imageDescriptions | 1: góra pod kątem, okno; 2: przód, OLED, żółty pas; 3: bok, wyświetlacz i przyciski; 4: tył | obejrzane — zgodne | zgodne |
| downloads | DS 872 KB; UM 7,9 MB; QSG 2,9 MB | md5 = `179`, `5219`, `5218`; 892 931 / 8 265 065 / 3 048 352 B | zgodne |
| relatedAccessories | 5100-900008G; 5500-900007G; 3210-900019G | WWW „1-Slot Charging cradle (optional) (PN# 5100-900008G)”, „Wrist Lanyard (PN# 5500-900007G)”, „Neck Lanyard PN# 3210-900019G” | zgodne (nazwa karty 5500-900007G „Pasek na nadgarstek” — Unitech: „Wrist Lanyard”, ten sam element jest w zestawie) |

Niezgodności i propozycje: brak w tekście karty MS926. Uwaga do karty akcesorium (poza B2): 5500-900007G to wg WWW „Wrist Lanyard”, czyli smycz na nadgarstek z zestawu — nazwa „Pasek na nadgarstek” może sugerować inny produkt.

Do decyzji właściciela:
- **Zasięg MS926:** DS s.1 i WWW (tekst): „30 meters operating range”; DS s.2, UM s.5, WWW (specyfikacja): „Up to 30 Feet (Open space)”. Karta podaje 30 stóp ≈ 9 m — wariant ostrożniejszy, bez zmian.

---

#### unitech-wd200-plus (WD200-0F6FRM3G)

Dokumenty: DS `6052_WD200P_RevE` (04/26), UM `6216_WD200_Plus_UM_V1_0`, QSG `6056`, FAQ `6992_FAQ_WD200Plus` (21.04.2026), broszura akcesoriów `6269` (2025/9), QSG stacji `6218`, QSG uchwytu `6217`, QSG uchwytu dwupaskowego `7066`, WWW `detail-WD200Plus.txt` i `eu/eu-WD200Plus.txt`.

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name, seoH1, seoTitle | „Komputer noszony … z Androidem 13 — terminal na nadgarstek” | DS s.1 „Wearable Computer”, „Android 13 with GMS” | zgodne |
| seoDescription / shortDescription | Android 13, aparat 16 MP, HF/NFC, skanery MS633, MS652 Plus, MS912 Plus 2D, MS926; PN | DS s.1–2; broszura `6269` s.4; PN: dystrybutorzy ERS i Levata („WD200 Plus, Android 13, … 4G/64GB, WiFi, BT5.0, 16MP camera”) — w dokumentach Unitech PN nie występuje | zgodne (PN wg 2 dystrybutorów; ERS w tytule pisze „Android 14” — karta trzyma się DS/UM) |
| opis: system i zastosowania | Android 13 z GMS; intensywna kompletacja; magazyny, handel, logistyka, transport, place przeładunkowe | DS s.1 „intensive picking environments”, „warehouse, retail, logistics, transportation, and shipping yard” | zgodne |
| opis/spec/wariant/FAQ 1: brak silnika | „Nie ma wbudowanego silnika skanującego.” | DS s.2 i UM s.3–4: w specyfikacji tylko „Camera 16 MP Rear and Flash Light”, brak pozycji silnika; DS s.3 „USS Camera: Capture barcode data using the device camera” | zgodne (wniosek z pełnej specyfikacji; brak zdania wprost) |
| opis/FAQ 1: aparat i USS Camera, skaner BT | aparat 16 MP z lampą, USS Camera, sparowany skaner Bluetooth | DS s.2 „16 MP Rear and Flash Light”; DS s.3 USS Camera, „Unitech Scanner Utility … supported Unitech Bluetooth scanner” | zgodne |
| opis/FAQ 1: współpracujące skanery i RP902 | MS633, MS652 Plus, MS912 Plus, MS912 Plus 2D, MS926, RP902 | broszura `6269` s.4 „Scanner Options for WD200 Plus” (MS633, MS633 LR, MS652 Plus, MS622, MS926, MS916, MS912 Plus 2D, MS912 Plus 1D, RP902); WWW akcesoria | zgodne |
| opis/spec: HF/NFC | 13,56 MHz; ISO 14443A/B, ISO 15693 | DS s.2 | zgodne |
| opis/spec: audio | dwa mikrofony, głośnik 1 W, Smart PA, „czytelną rozmowę w hałasie” | DS s.1 „Dual MIC design, clear voice even in a noisy environment”; s.2 „One 1W speaker with Smart PA” | zgodne |
| opis/spec: zarządzanie | SOTI, 42Gears, MoboLink, VMware; StageGO, OEMConfig, Enterprise Launcher | DS s.2 „SOTI, 42Gears, MoboLink, VMWare”; s.3 StageGO, OEMConfig, Enterprise Launcher | zgodne |
| opis: FOTA | „Aktualizacje oprogramowania dostarcza FOTA.” | DS s.3 „System Update Center: Check and install firmware updates via FOTA”; aktualizacje aplikacji to osobne „Software Update … online” | niezgodne (drobne: FOTA = firmware) |
| opis/spec: procesor, pamięć, temperatura | 8 rdzeni 2 × A75 2,0 + 6 × A55 1,8 GHz; 4 GB / 64 GB; −20…50 °C | DS s.2 | zgodne |
| opis/spec/FAQ 2: zestaw | terminal, przewód USB-C, skrócona instrukcja | UM s.1 i QSG s.1 „WD200, USB-C Cable, Quick Start Guide”; DS s.2 i WWW: terminal + przewód USB-C | zgodne |
| opis/spec: poza zestawem | mocowanie, zasilacz albo stacja | DS s.2 „Optional Accessories: Wrist Holder, USB Type C Cable, 4-Slot Terminal Charging Cradle…”; UM s.6 „Plug the other end of the cable into an AC power adapter” | zgodne |
| blok „Wymagane”: mocowanie (jedno z) | 3210-900026G, 3210-900051G — „sprzedawane osobno” | broszura `6269` s.3 „Wrist Holder Kit PN#3210-900026G (Bracket,Strap,Pad)”; WWW „Two-strap Holder(PN#3210-900051G)”; QSG `7066` „WD200 Plus Two-Strap Holder”; DS/UM/QSG: „Optional Accessories … Wrist Holder”; WWW: „fits … in the palm of your hand and slips easily into your pocket” | „osobno” zgodne; „Wymagane” — do decyzji |
| blok „Wymagane”: ładowanie (jedno z) | 1010-900074G albo stacja 5100-900030G — „sprzedawane osobno” | broszura `6269` s.2 „Adapter(US/EU/UK) for Terminal PN#1010-900074G EU”, „4-Slot Terminal Charging Cradle PN#5100-900030G”; UM s.6 „AC power adapter … or a Unitech-designed charging cradle”; FAQ `6992` s.2 „We strongly recommend providing a PD 3.0 USB-C Power Adapter” | potrzeba zasilacza lub stacji zgodna; konkretny PN nie jest „wymagany” przez dokument — do decyzji (PD vs QC) |
| blok: połączenia | „Zasilacz łączy się z terminalem przewodem USB-C z zestawu. Stacja ma własny zasilacz 5 V / 6 A, do którego potrzebny jest przewód sieciowy.” | UM s.6 „connect the included USB-C cable … into an AC power adapter”; QSG `6218` „Power Supply (5V/ 6A) without power cord”, „Optional Accessories: Power Cord (US / EU / UK)” | zgodne |
| spec: wyświetlacz | 3,54″ TFT-LCD 960 × 640, 500 nitów; rękawice i mokro | DS s.1–2 | zgodne |
| spec: Wi-Fi | Wi-Fi 6 (2 × 2 MU-MIMO), 802.11 ax/a/b/g/n/ac/d/h/i/k/r/v; 802.11r, OKC | DS s.2 | zgodne |
| spec: łączność | Bluetooth 5; GPS, GLONASS, Galileo, BeiDou | DS s.2 | zgodne |
| spec: złącza | USB-C (USB 2.0, OTG); styki pogo do stacji | DS s.2 „USB Type-C/ Pogo Pin”, „USB 2.0 (Type-C) support USB OTG”; UM s.3 „POGO PIN Charging via Cradle” | zgodne |
| spec/FAQ 3: bateria | wbudowana 3,85 V, 2500 mAh Li-polymer, naprawialna serwisowo; USB PD; do 11 h; PD 3.0 ok. 2 h 15 min | DS s.2 „3.85V, 2500mAh Li-polymer battery (embedded, can be repaired)”, „Supports USB PD fast charging”; FAQ `6992` s.2 „up to 11 hours”, „approx. 2h 15m” (z zasilaczem i przewodem PD 3.0) | zgodne |
| spec: IP68 | „zanurzenie na głębokość ponad 1 m do 1 h” | DS s.1 „survival in over 1 meter of water for up to 1 hour” | zgodne |
| spec: upadki | 1,5 m na beton wg MIL-STD-810G; 1000 przewrotów z 0,5 m | DS s.2 | zgodne |
| spec: temperatury, wymiary, masa | −20…+50; −20…+70; 0…+45; 96,7 × 60,7 × 14,43 mm; 123 g | DS s.2 | zgodne |
| spec: gwarancja | 12 miesięcy | WWW i EU WWW „Hardware Warranty 12 months”, Statement „twelve months” | zgodne |
| FAQ 3: ładowanie | „przewodem USB-C z [zasilacza] albo w [stacji] przez styki POGO. Z zasilaczem i przewodem zgodnymi z USB PD 3.0 pełne ładowanie trwa około 2 h 15 min…” | FAQ `6992` s.2 (PD 3.0, 2 h 15 min); ERS: 1010-900074G = „Quick charging (3.0) USB Power Adapter EU, output: 5V/3A; 9V/2A; 12V/1.5A” (1 dystrybutor) | do decyzji (link do 1010-900074G tuż przed zdaniem o PD 3.0) |
| FAQ 4: RP902, TagAccess, HF/NFC | — | broszura `6269` s.4 RP902; DS s.3 „TagAccess … integrating with Unitech RFID Readers”; DS s.2 HF | zgodne |
| FAQ 5: alternatywy | Zebra WT5400, WT6400, ProGlove LANA | nie dotyczy dokumentów Unitech | — |
| applications | kompletacja; magazyn, handel, transport; place przeładunkowe | DS s.1 | zgodne |
| imageDescriptions | 1: przód, Android; 2: pod kątem, port USB-C i styki pogo; 3: w uchwycie na nadgarstek; 4: tył z tabliczką | obejrzane — zgodne (tabliczka na zdjęciu 4: „Model: WD200”, zasilanie 5V/9V/12V) | zgodne |
| downloads | DS 1,7 MB; UM 3,0 MB; QSG 681 KB; broszura 783 KB | md5 = `6052`, `6216`, `6056`, `6269`; 1 821 289 / 3 108 127 / 697 527 / 802 028 B | zgodne |
| relatedAccessories | 3210-900026G, 1010-900074G, 5100-900030G, 3210-900051G, 1550-905919G, 5400-900068G, 386215G, 609032G, 1010-900067G | WWW lista akcesoriów WD200 Plus (wszystkie 9 PN); broszura `6269` | zgodne |

Niezgodności i propozycje:
- opis (akapit 2): było „Aktualizacje oprogramowania dostarcza FOTA.” → ma być „Oprogramowanie układowe aktualizuje się przez FOTA, a aplikacje Unitech — przez narzędzie Software Update.” (DS s.3).

Do decyzji właściciela:
- **„Wymagane: mocowanie”.** Wszystkie dokumenty Unitech nazywają uchwyty „Optional Accessories” (DS s.2, UM s.1, QSG s.1), a WWW opisuje też noszenie w dłoni lub kieszeni. Fakty „nie ma w zestawie / kupuje się osobno” są zgodne. Propozycja nagłówka: było „Wymagane dla terminala: mocowanie (jedno z) — sprzedawane osobno” → „Do noszenia na nadgarstku: mocowanie (jedno z) — sprzedawane osobno”.
- **Zasilacz 1010-900074G a PD 3.0.** Broszura `6269` s.2 i WWW wskazują 1010-900074G jako zasilacz EU do WD200 Plus. FAQ Unitech `6992` s.2 zaleca zasilacz „PD 3.0 USB-C” i pisze, że inne standardy (np. QC 3.0) nie są optymalne; jedyny opis 1010-900074G (ERS) to „Quick charging (3.0)”. Czas 2 h 15 min dotyczy PD 3.0. Propozycja FAQ 3: oddzielić zdania — „Komputer ładuje się przewodem USB-C z zasilacza albo w stacji 4-gniazdowej przez styki pogo. Najkrótsze ładowanie, około 2 h 15 min, daje zasilacz i przewód USB PD 3.0. Jedno ładowanie wystarcza na do 11 godzin pracy.” — i nie przypisywać 1010-900074G szybkiego ładowania WD200 Plus, dopóki BlueStar/Unitech nie potwierdzi standardu.
- Informacyjnie: ERS opisuje PN jako „Android 14”, Levata jako „Android 13”; DS/UM/WWW: Android 13. Karta: Android 13 — bez zmian.

---

#### Dopiski w kartach akcesoriów (tylko zdania o skanerach Unitech i WD200 Plus)

### unitech-rp902-zasilacz (1010-900067G) — `unitech-rp902-products.ts`

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name, seoH1 | „Zasilacz Unitech RP902, HT330, skanerów MS i WD200 Plus — 5 V / 2 A” | WWW listy akcesoriów: „5V/2A Adapter with universal plugs (PN#1010-900067G)” | zgodne |
| seoTitle / seoDescription | MS852B, MS852P, MS652 Plus, MS912 Plus, WD200 Plus | WWW `detail-MS852B`, `detail-MS852P`, `detail-MS652PLUS`, `detail-MS912PLUS`, `detail-WD200Plus` (1010-900067G w akcesoriach) | zgodne |
| shortDescription | „skanerów bezprzewodowych Unitech i komputera WD200 Plus” | j.w. | zgodne |
| opis + spec „Zgodność” | MS852B, MS852B Plus, MS852B LR, MS852P, MS652 Plus, MS912 Plus, MS912 Plus 2D, MS852B Plus ESD, MS851B ESD, WD200 Plus | WWW: `detail-MS852B` l.322, `detail-MS852BPlus` l.331, `detail-MS852BLR` l.343, `detail-MS852P` l.317, `detail-MS652PLUS` l.305, `detail-MS912PLUS` l.293, `detail-MS912_plus_2D` l.310, `detail-MS852BPLUS_ESD` l.354, `detail-MS851BESD` l.345, `detail-WD200Plus` l.415 | zgodne (MS633, MS626 Plus i MS926 słusznie pominięte — na ich stronach brak 1010-900067G) |
| relatedProducts | ms852b, ms852b-plus, ms652-plus, ms912-plus-2d, wd200-plus | j.w. | zgodne |

### unitech-rp902-przewod-usb-c (1550-905919G) — `unitech-rp902-products.ts`

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name, seoH1, seoTitle, shortDescription | „… RP902, HT330, MS633 i WD200 Plus” | WWW MS633: „USB Type-C cable (PN#1550-905919G)”; WWW WD200 Plus: „USB 2.0 type-C Cable (PN#1550-905919G)”; broszura `6269` s.2 | zgodne |
| seoDescription | „część zamienna do … skanera Unitech MS633 i komputera noszonego WD200 Plus” | j.w. | zgodne |
| opis | „Tym samym przewodem ładuje się i podłącza do komputera skaner pierścieniowy MS633 oraz komputer noszony WD200 Plus; oba mają przewód USB-C w zestawie.” | MS633: UM s.10 ładowanie przewodem USB-C, DS s.2 „USB HID Keyboard, USB VCP”, box „USB Type-C cable”; WD200: DS s.2 „USB 2.0 (Type-C)”, box „USB Type C Cable”, UM s.6 | zgodne |
| spec „Zgodność”, relatedProducts | MS633, WD200 Plus | j.w. | zgodne |

### unitech-ea-zasilacz-usb-c-eu (1010-900074G) — `unitech-terminal-accessories.ts`

| element | na stronie | dokument | ocena |
|---|---|---|---|
| name, seoH1, seoDescription, spec „Zgodność” | WD200 Plus | broszura `6269` s.2 „Adapter(US/EU/UK) for Terminal … PN#1010-900074G EU”; WWW WD200 Plus „PN#1010-900074G(EU)” | zgodne |
| opis (akapit 3) | „Zasilacza nie ma też w pudełku … WD200 Plus. W wersji EU pasuje do niego ten sam zasilacz 1010-900074G, połączony z komputerem przewodem USB-C z zestawu WD200 Plus.” | DS `6052` s.2 box: terminal + przewód; UM s.6 „included USB-C cable … AC power adapter”; broszura s.2 | zgodne |
| spec „Połączenie z terminalem” | „WD200 Plus: przewód USB-C z zestawu terminala” | UM s.6 | zgodne |
| shortDescription | „… i komputera noszonego WD200 Plus: szybkie ładowanie przez przewód USB-C” | FAQ `6992` s.2: szybkie ładowanie WD200 Plus = USB PD 3.0; ERS: 1010-900074G = Quick Charge 3.0 | do decyzji (szybkie ładowanie WD200 z tym zasilaczem niepotwierdzone) |
| downloads | broszura WD200 783 KB | md5 = `6269`, 802 028 B | zgodne |

### unitech-przewod-zasilajacy-eu-3pin (1550-602333G) — `unitech-terminal-accessories.ts`

| element | na stronie | dokument | ocena |
|---|---|---|---|
| opis (zdanie o WD200) | „Przewód jest potrzebny także do stacji 4-gniazdowej komputera WD200 Plus, której zasilacz 5 V / 6 A też nie ma przewodu sieciowego.” | QSG `6218`: „Power Supply (5V/ 6A) without power cord”, „Optional Accessories: Power Cord (US / EU / UK)” (bez PN) | potrzeba przewodu zgodna |
| seoDescription, spec „Zgodność” | „przewód do stacji Unitech WD200 Plus”; „stacja WD200 Plus 5100-900030G” | PN 1550-602333G dla stacji WD200 tylko u jednego dystrybutora (ERS: „power cord is optional: 1550-602689G UK power cord / 1550-602333G EU power cord”); w dokumentach Unitech brak PN i typu złącza (C13) | brak (1 źródło) |

Do decyzji właściciela (dopiski):
- 1010-900074G: w shortDescription nie łączyć „szybkiego ładowania” z WD200 Plus (FAQ Unitech: PD 3.0; zasilacz wg ERS: QC 3.0).
- 1550-602333G dla stacji 5100-900030G: potwierdzić PN i złącze (C13) u drugiego źródła albo w BlueStar; Unitech podaje tylko „Power Cord (US / EU / UK)”.

---

#### Miejsca o podwyższonym ryzyku — wynik

| punkt (zakres B2) | wynik |
|---|---|
| Liczba przycisków przewijania MS926 | 2 przyciski przewijania (Page Up, Page Down, na boku) + 1 przycisk Scan/Power (DS `179` s.2 „3 keys: Page up, Page down, Scan with power on/off”; UM `5219` s.2 „on the side of MS926”). Karta: 3 przyciski, „dwa boczne przewijają” — zgodne. |
| Obracany zespół spustu MS633 | UM `5765` s.8 i QSG `5717` s.8: „rotate the trigger assembly accordingly … trigger next to the thumb … index finger”; DS „One push rotate design”. Karta — zgodne. |
| Zasięg Bluetooth MS633 | DS s.2, UM s.6, WWW: „> 164.04ft./50m (without obstructions)”. Karta „ponad 50 m bez przeszkód” — zgodne. |
| Zasięgi MS633 LR | DS: nagłówek/cechy „12 m”, „Up to 12M (LR version)”; DOF: QR 200 mil 25–1800 cm, DM 200 mil 20–1440 cm, Code 128 15 mil 18,2–182,9 cm, UPC 13 mil 6,4–180 cm, Code 39 5 mil 6,4–67,6 cm, 3 mil 6,9–41,1 cm, PDF417 5 mil 7,1–49,8 / 6,7 mil 6,6–65 cm, DM 10 mil 5,6–68,8 cm. UM: ta sama tabela DOF, bez „12 m”. QSG: brak. WWW: „12m”, „Up to 12M” + ta sama tabela DOF. Karta: 18 m / 14,4 m / 1,8 m (z DOF) — do decyzji (12 vs 18 m). |
| Złącze MS912-FUBB00-TG | Dokumenty: DS RevE i WWW box — Mini USB; UM/QSG „for Type-C” — port USB-C (UM s.4 jednocześnie „Mini USB”); QSG Type-C: „MS912M+ (P/N: MS912-FUBB00-SG/TG)” = wersja z trybem wsadowym. Karta: tekst bez typu złącza, zdjęcie 2 = Mini USB, pliki = Type-C. Do decyzji (potwierdzić u dostawcy). |
| Gwarancje | MS633 15 mies. (WWW + EU WWW) — zgodne; MS652 Plus 15 (WWW, Statement 15) — zgodne; MS626 Plus 15 na karcie, WWW: pole 15, Statement 12 — do decyzji; MS912 Plus 15 — zgodne; MS912 Plus 2D 15 — zgodne; MS926 15 — zgodne; WD200 Plus 12 — zgodne. DS bez gwarancji; UM: „varied from each country”. |
| Nazwy silników skanujących | Żadna z 7 kart B2 nie podaje nazwy silnika — zgodne. (DS MS652 Plus RevM: SE4107; UM V1.5: Zebra SE2707 — inna wersja sprzętu, por. błędny plik UM.) |
| Blok „Wymagane” WD200 Plus | Zasilacz 1010-900074G: dokument nie wymaga tego PN — UM wymaga „AC power adapter” lub stacji Unitech, broszura podaje 1010-900074G jako zasilacz EU, FAQ zaleca PD 3.0 (ERS: 074G = QC 3.0) — do decyzji. Mocowania 3210-900026G i 3210-900051G: wg broszury i WWW to osobne akcesoria (nie w zestawie) — zgodne; w DS/UM/QSG jako „Optional Accessories” — nagłówek „Wymagane” do decyzji. |
| Podkładki 386268G/386286G (odniesienia z karty MS652 Plus) | Karta: „Dwie podkładki na palce…” (UM s.8 zdanie 1), relatedAccessories obu PN (WWW „Finger Pad (PN# 386268G/ PN# 386286G)”). UM s.8 „Paste two finger pads together” — dwie części jednej podkładki; karta akcesorium 386286G = „podkład samoprzylepny”. Do decyzji (ujednolicić). |
| Pozostałe punkty listy (MS852P, DotCode MS852, High Density, MS838/TS100, zestawy MS836/MS838/MS852B LR, podstawka MS83x) | poza zakresem B2 |

---

#### Podsumowanie

- Karty: 7 (MS633 z LR, MS652 Plus, MS626 Plus, MS912 Plus 2D, MS912 Plus, MS926, WD200 Plus) + dopiski w 4 kartach akcesoriów (1010-900067G, 1550-905919G, 1010-900074G, 1550-602333G).
- Niezgodności do poprawy: 18 (MS633 — 2, MS652 Plus — 4, MS626 Plus — 6 z FAQ-uzupełnieniem, MS912 Plus 2D — 2, MS912 Plus — 3 z uzupełnieniem, MS926 — 0, WD200 Plus — 1, dopiski — 0 niezgodności, 2 sprawy do decyzji).
- Sprawy do decyzji: 13 (MS633: zasięg LR, uchwyt w zestawie; MS652 Plus: podkładki, 9 vs 13 h — bez zmian; MS626 Plus: gwarancja, rozdzielczość, PN; MS912 Plus: złącze; MS926: 30 m vs 30 stóp — bez zmian; WD200 Plus: „Wymagane” mocowanie, PD 3.0 vs 1010-900074G; dopiski: 1010-900074G szybkie ładowanie, 1550-602333G PN z 1 źródła).

Najważniejsze 5:
1. **MS652 Plus — zły plik instrukcji.** `unitech-ms652-plus-instrukcja-en.pdf` = UM V1.5 starszej wersji sprzętu (Zebra SE2707, 640 × 400, 10 m, 0–50 °C), sprzeczna z kartą; WWW przypisuje do MS652-AUDB00-SG „UM V1.4 (for MS652-AXXXXX-XX)”.
2. **MS626 Plus — opisy zdjęć 1 i 4** nazywają żółty panel „panelem dotykowego spustu”; wg UM s.2 dotykowy spust to czarne pole na boku, żółty panel to obszar NFC/logo z przyciskiem funkcyjnym.
3. **MS912 Plus (FUBB00-TG) — złącze i wersja:** zdjęcie i DS/WWW = Mini USB, pliki = Type-C; QSG Type-C wskazuje FUBB00-TG jako MS912M+ z trybem wsadowym 2 MB, którego karta nie opisuje.
4. **WD200 Plus — blok „Wymagane” i ładowanie:** uchwyty w dokumentach to „Optional Accessories”; FAQ Unitech zaleca zasilacz PD 3.0, a 1010-900074G wg ERS to Quick Charge 3.0 — FAQ karty łączy ten zasilacz z czasem 2 h 15 min.
5. **MS633 LR — 12 m czy 18 m** (sprzeczność wewnątrz DS) oraz uchwyt na palec w zestawie (DS/WWW tak, UM/QSG nie); dodatkowo MS652 Plus: pojemność 7,5 MB przypisana trybowi Auto (nadinterpretacja) i „moduł spustu” jako osobna pozycja zestawu.

### Załącznik C: akcesoria skanerów bezprzewodowych i WD200 Plus (27)

Źródło tekstów: `src/data/unitech-wireless-scanner-accessories.ts` (commit 75697df1), 27 kart. Karty nie mają `variants` ani `faq`, więc tooltipy atrybutów nie dotyczą zakresu. Wszystkie sprawdzone pliki `downloads` istnieją. Ich rozmiary zgadzają się z `ls -l` (zestawienie na końcu). Wszystkie slugi z `relatedAccessories`/`relatedProducts` i linki `/produkt/...` istnieją. Na kartach nie znalazłem notatek o źródłach, zwracania się na „Ty”, słowa „autoryzowany”, cen, emoji ani słowa „ciemność”.

#### Skróty dokumentów (wszystkie ścieżki względem `$SP`)
- **ARK-<model>** – oficjalny arkusz akcesoriów Unitech `ute5b/src/ute-accessories-<model>.xlsx`, odczytany z XML (numer wiersza arkusza). **ARK-MS838** to przewodowy MS838: `ute5a/acc/acc-MS838.xlsx`. **ARK-MS282e** to `ute5a/acc/acc-MS282e.xlsx`.
- **IMG-UTE** – zdjęcie akcesorium z hiperłącza „Link” w arkuszu ARK (kopie w `ute5b/s2work/acc-img/`, adresy URL w `ute5b/s2work/acc-urls.json`). To grafiki Unitech z ute.com i traktuję je jako uzupełnienie.
- **UM-852B** 3878_MS852B_UM_V1_7; **UM-852B+** 1159_MS852B_Plus_UM_V1_7; **UM-852B+2020** 2287 (plik karty „Plus ESD”); **UM-LR** 2301_MS852B_LR_UM_V1_4; **DS-852B** 4236; **DS-852B+** 342; **DS-ESD+** 1542_MS852Bplus_ESD_RevC; **DS-851ESD** 1541; **DS-852P** 4668; **UM-852P** 4709.
- **UM-652** 239_MS652_Plus_UM_V1_5; **DS-652J** 237 (Rev J); **DS-652M** 3974 (Rev M); **CR-652** 7642 (instrukcja stacji 1-gniazdowych MS652).
- **QSG-633** 5717_MS633_QSG_V1_2; **UM-633** 5765_MS633_Series_UM_V1_5; **DS-633** 5683_MS633_RevE.
- **DS-836B** 3833; **DS-838B** 3834; **UM-836B** 4017_MS836B_UM_V2_6; **UM-838B** 4015_MS838B_UM_V3_4; **QSG-838B** 4016. **UM-838** to `ute5a/oficjalne/3488_MS838_UM_V2_1`, a **WWW-838** to `ute5a/web/detail-MS838.txt`.
- **DS-926** 179_MS926_RevJ; **UM-926** 5219_MS926_TypeC_UM. **DS-912** 176; **UM-912** 4696; **DS-912-2D** 4697; **UM-912-2D** 4744.
- **QSG-WD-NAD** 6217 (Wrist Holder Kit); **QSG-WD-ST** 6218 (4S Charging Cradle); **QSG-WD-2P** 7066 (Two-Strap Holder); **BR-WD** 6269 (broszura akcesoriów); **DS-WD** 6052; **UM-WD** 6216; **QSG-WD** 6056; **FAQ-WD** 6992.
- **WWW-<model>** – `ute5b/web/detail-<model>.txt`.
- Dystrybutorzy (tylko jako uzupełnienie): **ERS** `ute5b/web/dist/ers-acc-*.txt`, **LEV** `ute5b/web/dist/levata_*.txt`, `levata-ms852*.txt`, **BF** `ute5a/web/bf-ms838.txt`, **LV838** `ute5a/web/lv-unitech-ms838-handheld-readers.txt`.

---

#### unitech-ms85x-stacja-ladujaca (5000-900064G)

| element | na stronie (cytat/wartość) | dokument (plik, miejsce, cytat/wartość) | ocena |
|---|---|---|---|
| PN, nazwa, H1, seoTitle | „Stacja ładująca 1-gniazdowa … MS852B, MS852B Plus i MS852B LR (5000-900064G)” | ARK-MS852B w.7, ARK-MS852BPlus w.7, ARK-MS852BLR w.5: „1 Slot Charging Cradle \| PN#5000-900064G” | zgodne |
| Zgodność (specyfikacja) | „MS852B, MS852B Plus, MS852B LR, MS851B” | jw. oraz ARK-MS851B w.7 (ta sama stacja). ARK-MS852P w.9 podaje dla MS852P inną stację, 5000-900104G | zgodne. MS851B jest tylko w specyfikacji: w nazwie, opisie i `relatedProducts` go nie ma (na stronie nie ma karty MS851B) |
| shortDescription, seoDescription, zdanie 1 opisu | automatyczne parowanie po odłożeniu skanera, ładowanie w gnieździe | UM-852B §1.4: „put the scanner on the cradle to start the BT pairing automatically”, §1.5 „Charging with the cradle” | zgodne |
| zdanie 2 | „przewodem USB lub RS232, zależnie od położenia przełącznika interfejsu” | UM-852B §1.4 p.1: „switch the interface switch to the left/right side” | zgodne. Przy RS232 potrzebny jest zasilacz (patrz „Do decyzji”) |
| zdanie 3 | przycisk: rozłączenie pary, ustawienia fabryczne, odszukanie skanera | UM-852B §1.4: „Long press 2 seconds to un-pair… 5 seconds to do reset default to the cradle… Press the button to find the paired scanner” | zgodne |
| zdanie 4 | dioda: zasilanie, połączenie z komputerem, Bluetooth | UM-852B §1.7, tabela „Cradle LED indicator” (czerwona, zielona, niebieska) | zgodne |
| zdanie 5 (ESD) | „Skanery w wersji ESD mają własną stację 5000-900082G” | ARK-MS851BESD w.2, ARK-MS852BPLUS_ESD w.2 | zgodne |
| Wymiary stacji | 120,6 × 86,0 × 88,7 mm (dł. × wys. × szer.) | UM-852B §1.3: „Cradle Dimension 120.6 mm x 86.0 mm x 88.7 mm (L x H X W)” (to samo w UM-852B+, UM-LR) | zgodne |
| Typ, Wersja ESD, zastosowanie | 1 skaner; 5000-900082G do MS852B Plus ESD i MS851B ESD | jw. | zgodne |
| Zdjęcie i alt | „czarna stacja z logo Unitech i wnęką na skaner, widok z przodu” | obraz `5000-900064G.png`: czarna stacja z logo, ujęcie z przodu i z boku; to IMG-UTE „5000-900064G -1.jpg” | zgodne |
| downloads | UM MS852B 4,5 MB; UM MS852B LR 5,2 MB | pliki = 3878 (4 677 654 B) i 2301 (5 478 952 B) | zgodne |
| relatedAccessories | stacja ESD, akumulator 1400-900055G, przewód USB 1550-905920G, podstawka 5200-900009G | ARK-MS852B w.5, 8, 11 | zgodne |
| relatedProducts | MS852B, MS852B Plus, MS852B LR | ARK jw. Odwrotnie: karta MS852P nie linkuje tej stacji | zgodne |

Niezgodności i propozycje:
- Drobna niespójność: w specyfikacji jest MS851B, a w nazwie i opisie nie. Propozycja do zdania 5 opisu: „Stacja obsługuje Unitech MS852B, MS852B Plus i MS852B LR, a także MS851B.” Druga możliwość: usunąć MS851B ze specyfikacji, ale to zawęża zgodność względem arkusza.

Do decyzji właściciela:
- **Przewód interfejsu nie jest w zestawie stacji.** UM-852B §1.1 wymienia w zestawie „with cradle” osobno „Interface Cable (USB cable or RS232 cable + Power Adapter)” i „Charging Cradle”. ERS (`ers-acc-MS852-ZUBB0C-SG.txt` w.104) podaje: „5000-900064G MS852B and MS852B+ BlueTooth cradle without cable”. Karta o tym nie informuje. Propozycja: blok „Wymagane — sprzedawane osobno” z [przewodem USB 1550-905920G](/produkt/unitech-ms85x-przewod-usb), wg ARK-MS852B w.5. Do opisu: „Do połączenia RS232 potrzebny jest przewód 1550-905891G i zasilacz 1010-900008G.” (ARK-MS852B w.6 i w.9). Dowód „bez przewodu” pochodzi od jednego dystrybutora.

#### unitech-ms85x-stacja-ladujaca-esd (5000-900082G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, H1, seoTitle, zgodność | stacja ESD do MS852B Plus ESD i MS851B ESD | ARK-MS851BESD w.2 i ARK-MS852BPLUS_ESD w.2: „1-slot charging ESD cradle \| PN#5000-900082G” | zgodne |
| shortDescription, zdanie 2 opisu | pomieszczenia czyste, produkcja wrażliwa na wyładowania | DS-ESD+ i DS-851ESD: „cleanrooms and static-safe manufacturing environments” | zgodne |
| zdanie 1 | obudowa i przewód skanera z tworzywa z antystatycznym dodatkiem mieszanym w masie | DS-ESD+: „made by internal mixed way with antistatic agent … including its cable” | zgodne (dotyczy skanera, nie stacji, i tak jest sformułowane) |
| zdanie 3 | „ładuje jeden skaner MS852B Plus ESD albo MS851B ESD” | ARK jw. | zgodne |
| zdanie 4 | samoczynne parowanie, przełączanie trybu ze spustem i trybu prezentacji | DS-ESD+ Features: „Auto Bluetooth pairing / auto switch between trigger & presentation mode with cradle”; DS-851ESD w.33 to samo | zgodne |
| Typ, Pozostałe skanery rodziny | „Stacja 5000-900064G, bez wersji ESD” | ARK-MS852B w.7 | zgodne |
| Zdjęcie i alt | to samo zdjęcie co 5000-900064G | IMG-UTE: pliki ute.com „5000-900064G -1.jpg” i „5000-900082G.jpg” mają identyczne md5. Unitech używa jednego zdjęcia | zgodne z materiałem Unitech |
| downloads | „Instrukcja obsługi Unitech MS852B Plus ESD (EN)”, 4,3 MB | plik = 2287 (4 522 297 B). Strona tytułowa: „MS852B Plus User's Manual Version 1.2”, bez słowa ESD. WWW-MS852BPLUS_ESD podpina ten plik jako „MS852B Plus ESD User Manual V1.1” (`ute5b/do-pobrania.md` w.58) | rozmiar zgodny; nazwa zgodna z etykietą ute.com, treść pliku nie dotyczy wersji ESD |
| related* | stacja zwykła, akumulator, przewód USB; MS852B Plus ESD, MS851B ESD | ARK jw. | zgodne |

Niezgodności i propozycje: brak.

Do decyzji właściciela:
- Pakiet ESD wymienia osobno „Cradle” i „Interface cable” (DS-ESD+, Package Contents). Nie wiadomo, czy osobno kupowana stacja 5000-900082G ma przewód. Rozważyć tę samą informację co przy 5000-900064G: przewód USB 1550-905920G z ARK-MS851BESD w.5. DS-ESD+ podaje „Host Interface supported: USB”, więc bez RS232.

#### unitech-ms652-stacja-usb (5000-900044G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, H1, seoTitle | stacja 1-gniazdowa z przewodem USB do MS652 Plus | ARK-MS652PLUS w.11: „MS652 single slot cradle with USB cable \| PN# 5000-900044G”; WWW-MS652PLUS: „(PN# 5000-900044G, Cable PN# 1550-905943G)” | zgodne |
| shortDescription, zgodność | „MS652 Plus lub MS652” | CR-652 s.1: „Support MS652 and MS652 Plus” | zgodne |
| zasilanie (opis, spec., SEO) | „przewodem USB z kompatybilnego źródła 5 V DC / 3 A” | CR-652 s.2: „compatible USB power source using the supplied USB cable”; „Power Input: 5 V DC, 3 A” | zgodne |
| dioda | czerwona w czasie ładowania, gaśnie po zakończeniu | CR-652 s.2: „Solid Red – Charging; Off – Fully charged” (sprawdzone na obrazie strony) | zgodne |
| temperatura pracy | 5–45°C | CR-652 s.2: „Operating Temperature: 5°C to 45°C” | zgodne |
| zdanie o micro USB | ładowanie bez stacji przez port micro USB pod klapką | UM-652 §1.2: „Micro USB port (with Protective Cover)”; §1.5 | zgodne |
| Zdjęcie i alt | czarna stacja z jednym gniazdem i przewodem z wtykiem USB | obraz zgodny (IMG-UTE 345 px powiększone do 800 px, lekko nieostre) | zgodne |
| downloads | instrukcja ładowania, 877 KB | plik = 7642 (898 249 B) | zgodne |
| related* | akumulator 1400-900050G, przewód 1550-905921G; MS652 Plus | ARK-MS652PLUS w.8, w.9 | zgodne |

Niezgodności i propozycje: brak.

Do decyzji właściciela:
- Źródła zasilania USB 5 V / 3 A nie ma w zestawie (CR-652: „compatible USB power source”). Unitech nie podaje PN zasilacza do tej wersji. Zasilacz 1010-900014G należy do 5000-900045G (WWW-MS652PLUS). Zasilacz 1010-900067G linkowany przy MS652 Plus daje 5 V / 2 A, mniej niż 3 A ze specyfikacji stacji. Nie wskazywać go jako zgodnego bez potwierdzenia. Można dopisać: „Zasilacz USB nie jest dołączony.”

#### unitech-ms633-ladowarka-baterii (5100-900036G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, H1, seoTitle | „Ładowarka 2 baterii … MS633 i MS633 LR” | ARK-MS633 w.5: „2 Bay Battery Charger \| PN#5100-900036G”; ERS `ers-acc-MS633-DUBU00-SG.txt` w.109: „2-slot battery charger for MS633 series” | zgodne |
| gniazda A i B | 2 gniazda, A i B | QSG-633 s.12: „Battery Slot A LED / Battery Slot B LED” | zgodne |
| „ładuje równocześnie dwa akumulatory 600 mAh” | — | 2 gniazda z osobnymi diodami (QSG-633 s.12–14); 600 mAh wg ARK-MS633 w.4 i w.6 | zgodne pośrednio („równocześnie” wynika z dwóch gniazd) |
| wkładanie i wyjmowanie | koniec w gnieździe, wysunąć zaczep, docisnąć; zaczepy przed wyjęciem | QSG-633 s.12: „Align the end… Pull out the retractor… Press the other end… pull out the retractors… before taking the battery out” | zgodne |
| **dioda ładowarki** | „Czerwona dioda ładowarki oznacza zasilanie i ładowanie.”; spec. „Czerwona dioda: zasilanie i ładowanie” | QSG-633 s.14, tabela (sprawdzona na obrazie PDF; pdftotext przesuwa wiersz): wiersz „Battery Charger LED” = „Red LED turns on: Battery Charger Power On”. Wiersz „Battery SLOT A/B LED” = „Red LED turns on: Charging / Green LED turns on: Fully Charged / Light Off: No Battery Charging” | **niezgodne** |
| dioda gniazda | zielona: naładowany; zgaszona: brak ładowania | jw. Brakuje stanu czerwonego (ładowanie) | **niepełne** |
| zgodność | akumulatory 1400-900075G i 1400-900076G | ARK-MS633 w.4–6; QSG-633 dotyczy serii MS633 i MS633 LR | zgodne |
| Zdjęcie i alt | widok z góry, gniazda A i B, niebieskie zaczepy po bokach | obraz zgodny | zgodne |
| downloads | QSG MS633 i MS633 LR, 3,2 MB | plik = 5717 (3 386 083 B); WWW-MS633: „Quick Start Guide V1.2 (including Battery Charger)” | zgodne |
| related* | akumulatory, uchwyt 620224G; MS633 | ARK-MS633 | zgodne |

Niezgodności i propozycje:
- Opis, akapit 2. Było: „Czerwona dioda ładowarki oznacza zasilanie i ładowanie. Zielona dioda przy gnieździe pokazuje pełne naładowanie akumulatora. Gdy dioda gaśnie, gniazdo nie ładuje żadnego akumulatora.” Ma być: „Czerwona dioda ładowarki oznacza włączone zasilanie. Dioda przy gnieździe świeci na czerwono w czasie ładowania i na zielono po pełnym naładowaniu akumulatora. Zgaszona dioda gniazda oznacza, że gniazdo nie ładuje akumulatora.” Dowód: QSG-633 s.14, tabela „Battery Charger LED Status”.
- Specyfikacja. Było: „Sygnalizacja ładowarki: Czerwona dioda: zasilanie i ładowanie” → ma być: „Czerwona dioda: zasilanie włączone”. Było: „Sygnalizacja gniazd: Zielona dioda: naładowany; brak światła: brak ładowania” → ma być: „Czerwona dioda: ładowanie; zielona dioda: naładowany; brak światła: brak ładowania”.

Do decyzji właściciela: dokumenty Unitech nie podają, czym zasilić ładowarkę (wejście, zasilacz). Karta tego nie twierdzi. Warto sprawdzić u dystrybutora, czy w pudełku jest zasilacz lub przewód.

#### unitech-ms926-stacja-ladujaca (5100-900008G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, H1, seoTitle, typ | stacja 1-gniazdowa, „wyposażenie opcjonalne” | ARK-MS926 w.4: „1-slot Charging cradle (optional) \| PN# 5100-900008G”; UM-926 §1.1 „Optional accessories: 1-Slot Charging cradle” | zgodne |
| zgodność | „Unitech MS926” | ARK-MS926 w.4. Tę samą stację podają też ARK-MS916 w.4 i ARK-MS926P w.4 | zgodne (niepełne; na stronie nie ma kart MS916 i MS926P) |
| „Skaner waży 63 g” | 63 g | DS-926: „Scanner Weight 63g”; UM-926 §1.3 | zgodne |
| OLED 1 cal | 1 cal | DS-926: „1" OLED, 128 x 64” | zgodne |
| akumulator | litowo-jonowy 680 mAh, ładowanie około 4 h | UM-926 §1.3: „Rechargeable Li-ion… 680 mAh… Fully charged in about 4 hours” | zgodne |
| pierwsze ładowanie | co najmniej 2 h | UM-926 §1.1 NOTE 2: „charge scanner for at least 2 hours prior to initial use” | zgodne |
| przewód z zestawu | „przewodem USB-C – USB z zestawu” | UM-926 §1.1: „Type-C USB to USB Cable” w zestawie; §1.5 | zgodne |
| seoDescription | „kieszonkowego skanera 2D z wyświetlaczem OLED” | DS-926 | zgodne |
| Zdjęcie i alt | „stacja w czarnej i srebrnej obudowie z logo Unitech” | obraz: czarna część środkowa, boki jasnoszare lub białe, srebrny pasek z logo. Źródło IMG-UTE ma 345 px i jest powiększone | zgodne z drobną uwagą („srebrnej” → „jasnoszarej”) |
| downloads | UM MS926, 7,9 MB | plik = 5219 (8 265 065 B) | zgodne |
| related* | pasek 5500-900007G, smycz 3210-900019G; MS926 | ARK-MS926 w.2–3 | zgodne |

Niezgodności i propozycje:
- Brak błędów faktów. Opis prawie w całości dotyczy skanera, nie stacji. Opcjonalnie alt: „…stacja z czarną częścią środkową i jasnoszarymi bokami, z logo Unitech i wnęką na skaner”.

Do decyzji właściciela:
- Zasilanie stacji. Dokumenty Unitech nie mówią, czym zasilać stację. LEV (`levata_com_unitech-ms926-handheld-readers.txt` w.1521) podaje „1-slot cradle, no PSU, for MS9…”. Rozważyć zdanie „Zasilacz nie jest dołączony do stacji”, a PN zasilacza dopisać po potwierdzeniu. Dowód pochodzi od jednego dystrybutora.

#### unitech-ms85x-bateria (1400-900055G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, H1, seoTitle | akumulator 2850 mAh do MS852B, MS852B Plus, MS852B LR, MS852P | ARK-MS852B w.8, ARK-MS852BPlus w.8, ARK-MS852BLR w.6, ARK-MS852P w.5: „Battery \| PN#1400-900055G” | zgodne |
| zgodność ESD (shortDescription, specyfikacja, opis) | MS851B ESD, MS852B Plus ESD | ARK-MS851BESD w.6, ARK-MS852BPLUS_ESD w.6 | zgodne |
| „obsługuje sześć wersji skanerów” | sześć wymienionych modeli | ARK-MS851B w.8 podaje ten sam akumulator także dla MS851B (bez ESD) | **niepełne**: modeli jest siedem |
| pojemność | 2850 mAh | UM-852B §1.3, DS-852B+, DS-ESD+, DS-851ESD, DS-852P: „2850mAh” / „2850 mAh” | zgodne |
| czas pracy | MS852B „do 20 godzin”, MS852B Plus „ponad 25 godzin” | UM-852B i DS-852B: „Operating Time 20 hours”; DS-852B+ i UM-852B+: „>25 hours” | zgodne |
| temperatura ładowania | 0–40°C, poza zakresem możliwe uszkodzenie | UM-852B „Battery charge notice”: „0°C to 40°C. Charging batteries outside… could damage” | zgodne |
| wymiana | co roku lub po 500 cyklach | UM-852B „Battery Notice” p.1: „replaced every year, or after 500 charging cycles” | zgodne |
| typ | „Akumulator wymienny” | „Rechargeable and replaceable battery pack” | zgodne |
| Zdjęcie i alt | czarny pakiet ze złotymi stykami na obu końcach | obraz zgodny | zgodne |
| downloads | UM MS852B 4,5 MB | 3878 | zgodne |
| related* | stacje, etui 386793G; 7 kart MS85x | ARK-MS852B w.2 (etui) | zgodne |

Niezgodności i propozycje:
- Opis. Było: „obsługuje sześć wersji skanerów Unitech: …” Ma być: „obsługuje skanery Unitech: … oraz MS851B.” Dowód: ARK-MS851B w.8. Druga możliwość: „obsługuje między innymi skanery …”. W specyfikacji „Zgodność” dopisać MS851B.

#### unitech-ms633-bateria (1400-900075G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, pojemność | 600 mAh, MS633 | ARK-MS633 w.4: „MS633 600mAh Battery \| PN#1400-900075G” | zgodne |
| akumulator wersji LR | osobny, 1400-900076G | ARK-MS633 w.6 | zgodne |
| ładowanie | około 2 h | UM-633 §1.3 i DS-633: „Battery Charging time 2hrs.” | zgodne |
| czas pracy | do 9 h | UM-633 i DS-633: „Operating Time 9hrs.”; DS-633: „Full Shift Battery Life: Up to 9 Hours” | zgodne |
| wymiana | zatrzask w lewo, chwycić z obu stron, wyciągnąć do góry; nowy włożyć i docisnąć | QSG-633 s.10–11; UM-633 §1.4.3–1.4.4 | zgodne |
| seoDescription | „pierścieniowego skanera 2D” | DS-633 „Bluetooth 2D Ring Scanner” | zgodne |
| Zdjęcie i alt | czarny pakiet z niebieską etykietą i logo, dwa ujęcia | obraz zgodny | zgodne |
| downloads | QSG 3,2 MB | 5717 | zgodne |
| related* | ładowarka, akumulator LR, uchwyt; MS633 | ARK-MS633 | zgodne |

Niezgodności i propozycje: brak.

#### unitech-ms633-lr-bateria (1400-900076G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, pojemność | 600 mAh, MS633 LR | ARK-MS633 w.6: „MS633LR 600mAh Battery \| PN#1400-900076G” | zgodne |
| **shortDescription** | „skanera MS633 LR, który czyta duże kody QR z odległości do 18 m” | UM-633 i DS-633, tabela DOF: „200mil QR: 25cm~1800cm”. Ale nagłówek DS-633: „12m Barcode Reading Distance” i cecha „Up to 12M (LR version)” | **rozbieżność w dokumentach Unitech** |
| matryca | 2688 × 1520 | UM-633 §1.3: „MS633 LR: CMOS Image (2688 x 1520 pixels)” | zgodne |
| „pasuje tylko do … MS633 LR” | — | osobne PN dla MS633 i MS633 LR (ARK-MS633 w.4 i w.6) | zgodne pośrednio |
| wygląd | żebrowana obudowa, niebieski wypust | widoczne na IMG-UTE „MS633LR 600mAh Battery-PN1400-900076G.png” | zgodne ze zdjęciem |
| ładowarka A i B | — | QSG-633 s.12 (seria MS633 i MS633 LR) | zgodne |
| Zdjęcie i alt | — | obraz zgodny | zgodne |
| downloads | QSG 3,2 MB | 5717 | zgodne |
| related* | ładowarka, akumulator MS633; `relatedProducts` MS633 (karta obejmuje MS633 i MS633 LR) | — | zgodne |

Niezgodności i propozycje: brak sprzeczności z dokumentem. Problemem jest wybór jednej z dwóch wartości, patrz niżej.

Do decyzji właściciela:
- Zasięg MS633 LR: DS-633 (nagłówek i cecha) podaje 12 m, a tabela DOF w DS-633 i UM-633 podaje 18 m dla kodu QR 200 mil. Na karcie akumulatora zasięg skanera nie jest potrzebny. Bezpieczniejsza wersja shortDescription: „Akumulator Unitech 1400-900076G, 600 mAh, do pierścieniowego skanera dalekiego zasięgu MS633 LR.”

#### unitech-ms652-bateria (1400-900050G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa | 800 mAh, MS652 Plus | ARK-MS652PLUS w.8: „MS652 Plus Battery 800mAh \| PN# 1400-900050G” | zgodne |
| 800 mAh / 3,7 V, litowo-jonowy | — | DS-652J i DS-652M: „800mAH / 3.7V”, „Rechargeable Lithium-ion”; WWW-MS652PLUS: „800mAH / 3.7V” | zgodne |
| wymiana | zatrzask kciukiem, akumulator wyskakuje; nowy wsunąć i docisnąć do kliknięcia | UM-652 §1.4.4 | zgodne |
| ładowanie | 4 h, micro USB lub stacja | DS-652M: „Fully charged in 4 hours”; „Charging Method: USB Cable or Battery Charging cradle” | zgodne |
| **czas pracy** | „Przy odczycie co 5 sekund … 9 godzin” | DS-652M (Rev M): „9 hours at 1 scan / 5 secs”. DS-652J (Rev J): „14 hours at 1 scan / 5 secs”. Obie wersje i WWW: „Full Shift Battery Life: Up to 13 Hours”. UM-652: pole puste | **rozbieżność w dokumentach Unitech**; karta podaje wartość z najnowszego DS |
| Zdjęcie i alt | czarna pokrywa akumulatora z szarym zatrzaskiem | obraz zgodny (źródło 345 px) | zgodne |
| downloads | UM MS652 Plus 4,7 MB | 239 (4 939 844 B) | zgodne |
| related* | stacja, przewód, podkładka; MS652 Plus | ARK-MS652PLUS | zgodne |

Do decyzji właściciela:
- Czas pracy MS652 Plus: 9 h (DS Rev M, nowsza) albo 14 h (DS Rev J) przy 1 odczycie co 5 s; nagłówek: „Up to 13 Hours”. Zalecam zostawić 9 h z DS Rev M (wartość ostrożna) albo usunąć zdanie z karty akumulatora.

#### unitech-ms83x-podstawka (5200-900014G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, H1, seoTitle, zgodność | MS838, MS836B, MS838B | ARK-MS836B w.2 i ARK-MS838B w.2: „Hands free stand \| PN#5200-900014G”; ARK-MS838 w.2: to samo; WWW-838: „Hands-Free Stand (P/N: 5200-900014G)”. Inne modele mają inne podstawki: MS85x 5200-900009G (ARK-MS852B w.11), MS282e 5200-900013G (ARK-MS282e w.2) | zgodne |
| **zdanie 1** | „utrzymuje skaner na blacie, więc kody czyta się bez trzymania go w dłoni” | MS838: tryb prezentacji (UM-838 „Trigger mode, Presentation mode”, §2.5.2 „Auto Sense Mode on”). MS838B: tryb „Auto Sense Mode”, domyślnie „Off *” (UM-838B §2.4.1). MS836B: DS-836B i UM-836B „Operation Mode: Trigger Mode, Buffer Mode”, ustawienie domyślne „Scan mode: Manual scan” (UM-836B A.3); trybu automatycznego brak | **nadinterpretacja dla MS836B** (i MS838B przy ustawieniach fabrycznych) |
| zdanie 2 | przewodowy MS838 oraz 2,4 GHz: laserowy MS836B i obrazowy MS838B | DS-836B: „2.4G Wireless Laser Scanner”; DS-838B: „2.4G Wireless 2D Imager Scanner” | zgodne |
| zestaw MS838-2UCB0S-SG | podstawka w zestawie | UM-838 §1.1: „The combo package contents: … Hands free stand”; ERS `ute5a/web/ers-acc-MS838-2UCB0S-SG.txt` w.33: „USB Cable, Hands-Free Stand”; BF: „USB (With Stand)”; LV838: „with USB cable and hands free sta[nd]” | zgodne |
| MS838-2RCB00-SG | RS-232, podstawka osobno | BF: „RS232 (Without Stand)”; LV838: „2D imager with RS232 cable” | zgodne (dwaj dystrybutorzy) |
| 100 m | „nawet o 100 m, jeśli nic nie zasłania drogi sygnału” | DS-836B i DS-838B: „2.4G: 100M (line of sight)” | zgodne |
| IP42 | „Obudowy obu skanerów bezprzewodowych mają klasę IP42” | DS-836B i DS-838B: „IP Rating IP42” | zgodne |
| Zdjęcie i alt | giętka kolumna na okrągłej podstawie, w uchwycie skaner z przewodem | obraz zgodny (IMG-UTE „5200-900014G.png”) | zgodne |
| downloads | UM MS838 2,3 MB; UM MS836B 3,7 MB; UM MS838B 2,9 MB | 3488 (2 437 178 B), 4017 (3 830 831 B), 4015 (3 036 993 B) | zgodne |
| related* | odbiornik; MS838, MS836B, MS838B | ARK-MS836B i ARK-MS838B w.3 | zgodne |

Niezgodności i propozycje:
- Opis, zdanie 1. Było: „Hands Free Stand 5200-900014G utrzymuje skaner na blacie, więc kody czyta się bez trzymania go w dłoni.” Ma być: „Hands Free Stand 5200-900014G utrzymuje skaner na blacie. Odczyt bez naciskania spustu umożliwia tryb automatyczny: w MS838 tryb prezentacji, w MS838B tryb Auto Sense (fabrycznie wyłączony). MS836B czyta kody po naciśnięciu spustu.” Dowód: UM-838 (Presentation mode), UM-838B §2.4.1 („Auto Sense Mode: Off *”), DS-836B i UM-836B („Trigger Mode, Buffer Mode”, „Manual scan”).

#### unitech-ms652-przewod-micro-usb (1550-905921G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa | 1550-905921G | ARK-MS652PLUS w.9: „Micro USB Cable \| PN# 1550-905921G”; WWW (sekcja arkusza): 1550-905921G. WWW (lista „Items”): „Micro USB cable (PN#1550-900921G)”; nazwa pliku IMG-UTE: „Micro USB calbe 1550-900105G.jpg” | zgodne z arkuszem; ute.com ma literówki lub inne PN |
| wtyki | USB-A po stronie komputera, micro USB po stronie skanera | UM-652 §1.5: „micro USB connector into the port on the scanner and USB A connector into a USB port on the host PC” | zgodne |
| port pod klapką; ładowanie do zgaśnięcia czerwonej diody | — | UM-652 §1.2 „(with Protective Cover)”, §1.5 p.1 i p.3: „until the red LED indicator turns off” | zgodne |
| dysk USB | dwukrotne naciśnięcie spustu przy podłączonym przewodzie | UM-652 §1.6 p.4: „Connect USB drive to host: Double click with USB cable connected” | zgodne |
| w zestawie skanera | jeden przewód | UM-652 §1.1: „Micro USB Cable” | zgodne |
| Zdjęcie i alt | czarny przewód w pętli, USB-A i micro USB | obraz zgodny | zgodne |
| downloads | UM 4,7 MB | 239 | zgodne |
| related* | stacja, akumulator; MS652 Plus | — | zgodne |

Do decyzji właściciela: ute.com podaje trzy numery przewodu micro USB (1550-905921G w arkuszu, 1550-900921G na liście „Items”, 1550-900105G w nazwie zdjęcia). Karta trzyma się arkusza, co jest poprawne. Przy zamówieniu warto potwierdzić PN u dostawcy.

#### unitech-ms83x-odbiornik-2-4-ghz (5500-900098G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, zgodność | odbiornik USB 2,4 GHz do MS836B i MS838B | ARK-MS836B i ARK-MS838B w.3: „Dongle \| PN# 5500-900098G” | zgodne |
| port USB | „po podłączeniu do wolnego portu USB komputera” | QSG-838B: „Plug the USB Dongle to a free USB port of a host computer” | zgodne |
| parowanie fabryczne | jeden skaner z jednym odbiornikiem | UM-836B §2.6 i UM-838B: „One scanner pairing to one receiver is the factory default” | zgodne |
| **nowy odbiornik** | „po wyjęciu poprzedniego i zeskanowaniu kodu parowania 2.4G albo po przytrzymaniu przycisku skanera przez około 16 sekund” | UM-836B s.13–14 (PDF s.30–31) i UM-838B: dwie metody, ale ustawienie „Long press 16 seconds to Enter 2.4G pairing Mode: Enable / Disable *”. Metoda 16 s jest fabrycznie wyłączona | **niepełne, wprowadza w błąd** |
| odbiornik w zestawie skanera | jeden | DS-836B i DS-838B, Package Contents: „2.4G Dongle” | zgodne |
| zasięg | do 100 m w linii widoczności | DS-836B i DS-838B | zgodne |
| Zdjęcie i alt | mały klucz USB w metalowo-czarnej obudowie | obraz zgodny | zgodne |
| downloads | UM MS836B, UM MS838B | 4017, 4015 | zgodne |
| related* | podstawka; MS836B, MS838B | — | zgodne |

Niezgodności i propozycje:
- Opis, zdanie 3. Było: „Nowy odbiornik parowany jest po wyjęciu poprzedniego i zeskanowaniu kodu parowania 2.4G albo po przytrzymaniu przycisku skanera przez około 16 sekund.” Ma być: „Nowy odbiornik paruje się po wyjęciu poprzedniego i zeskanowaniu kodu „2.4G Receiver Pairing”. Parowanie przez przytrzymanie przycisku przez około 16 sekund działa po włączeniu tej funkcji kodem ustawień, bo fabrycznie jest wyłączona.” Dowód: UM-836B s.14 („Disable *”).
- Poza zakresem C: to samo uproszczenie jest w FAQ karty MS838B (`unitech-wireless-scanner-products.ts` w.712: „…albo przytrzymaniem przycisku skanera przez około 16 sekund”).

#### unitech-ms652-uchwyt-na-dwa-palce (607448G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, H1 | uchwyt na dwa palce ze spustem | ARK-MS652PLUS w.3: „MS652 Plus Trigger module \| PN#607448G”; WWW: „Standard Finger Holder (PN#607448G)”; nazwa pliku IMG-UTE: „MS652 Two Fingers Trigger Module” | zgodne |
| zdejmowanie | przycisk zwalniający, obrót w lewo | UM-652 §1.4.1: „press down the release button and rotate it counterclockwise” | zgodne |
| zakładanie | cztery rowki, obrót w prawo do kliknięcia | UM-652 §1.4.2: „Align the four grooves… rotate it clockwise until you hear a clicking sound” | zgodne |
| prawa i lewa ręka | dla praworęcznych spust po lewej, dla leworęcznych po prawej | UM-652 §1.4.2: „Right handed users (trigger key is on the left)… Left handed users (… on the right)” | zgodne |
| zawartość | pasek na palce, podkład, miękka podkładka | IMG-UTE 607448G (napis na grafice Unitech): „Includes Finger Strap, Mount for Soft Finger Pad, Soft Finger Pad” | zgodne (na podstawie grafiki Unitech) |
| Zdjęcie i alt | czarny moduł, niebieski spust, okrągłe złącze, pasek; w kółku odchylona podkładka | obraz zgodny | zgodne |
| downloads | UM 4,7 MB | 239 | zgodne |
| related* | podkładki, pasek; MS652 Plus | ARK-MS652PLUS | zgodne |

Niezgodności i propozycje: brak.

#### unitech-ms633-uchwyt-na-palec (620224G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, zgodność | MS633 i MS633 LR | ARK-MS633 w.7: „Finger Holder \| PN#620224G”; WWW-MS633: „Finger Holder (PN#620224G)” | zgodne |
| zakładanie | na palec wskazujący, spust przy kciuku; obrót zespołu spustu do prawej lub lewej ręki; jeden koniec w gniazdo, drugi dociśnięty | QSG-633 s.8 i UM-633 §1.4.1: „rotate the trigger assembly accordingly. Position the trigger next to the thumb… push the other end down until it snaps” | zgodne |
| zdejmowanie | wcisnąć zatrzask, wyciągnąć pasek | QSG-633 s.8: „Press the finger ring strap latch inward and pull the entire strap outward” | zgodne |
| obracany zespół spustu (shortDescription, specyfikacja) | — | DS-633: „One push rotate design allows right and left hand operation switch” | zgodne |
| „mają w zestawie po jednym takim uchwycie” | — | DS-633 „What comes in the box”: „Finger Holder”; WWW-MS633: „Finger Holder”. Ale UM-633 §1.1 „The Package Contents”: skaner, akumulator 600 mAh, przewód USB-C; „Finger Holder” tylko w „Accessories” | zgodne z DS i WWW; UM się różni |
| Zdjęcie i alt | szara obudowa, niebieski spust, dwa styki, pętla na palec | obraz zgodny | zgodne |
| downloads, related* | QSG; ładowarka, akumulator; MS633 | — | zgodne |

Do decyzji właściciela: zawartość zestawu MS633. DS-633 i WWW wymieniają w pudełku „Finger Holder”, a UM-633 §1.1 nie. Zostawić zgodnie z DS i WWW (dwa dokumenty).

#### unitech-ms652-podkladka-386268g (386268G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa | podkładka na palec (Finger Pad) MS652 Plus | ARK-MS652PLUS w.10: „Finger pad \| PN#386268G PN#386286G”; WWW: „Standard Finger Pad (PN# 386268G/ PN# 386286G)” | zgodne |
| **podział na części** (shortDescription, opis, specyfikacja, seoDescription) | 386268G to miękka warstwa wierzchnia, 386286G to samoprzylepny podkład przyklejany do modułu | IMG-UTE „386268G-386286G20230912.png” (grafika z arkusza Unitech): strzałka „PN#386268G” wskazuje odchyloną miękką podkładkę, strzałka „PN#386286G (Backing self adhesive)” wskazuje podkład na module. IMG-UTE 607448G: „Mount for Soft Finger Pad, Soft Finger Pad” | zgodne (dowód tylko na grafice Unitech; teksty PDF nie przypisują PN do warstw) |
| montaż | obie części skleja się, zdejmuje papier, przykleja do modułu | UM-652 §1.4.3: „Step 1: Paste two finger pads together; Step 2: Remove the release paper… paste it on the trigger module” | zgodne |
| wygoda | „pozwala wygodnie ułożyć palce w uchwycie” | UM-652 §1.4.3: „to adjust fingers in a comfortable way” | zgodne |
| w zestawie skanera | podkładka na palec | UM-652 §1.1: „Finger pad”; WWW „What comes in the box”: „Finger Pad” | zgodne |
| Zdjęcie i alt | miękka podkładka, w kółku moduł z odchyloną 386268G nad 386286G | obraz = grafika Unitech z etykietami PN | zgodne |
| downloads, related* | UM; 386286G, 607448G, pasek; MS652 Plus | — | zgodne |

Niezgodności i propozycje: brak. Uwaga: UM-652 §1.4.3 zaczyna od zdania „There are two finger pads for users to choose”, które czytane osobno sugeruje dwie alternatywne podkładki. Kroki 1–2 i grafika Unitech pokazują jednak dwie warstwy jednej podkładki, tak jak na karcie.

#### unitech-ms652-podkladka-386286g (386286G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa | „Podkład samoprzylepny podkładki na palec … (386286G)” | ARK-MS652PLUS w.10; IMG-UTE: „PN#386286G (Backing self adhesive)” | zgodne |
| opis (3 zdania), specyfikacja | spodnia, samoprzylepna część; przyklejana do modułu; na niej miękka 386268G; łączenie warstw i zdjęcie papieru | IMG-UTE jw.; UM-652 §1.4.3 | zgodne |
| Zdjęcie | `386268G.png` (to samo co na karcie 386268G) | na zdjęciu głównym jest miękka podkładka 386268G, a 386286G widać tylko w kółku | alt zgodny z obrazem, ale zdjęcie główne pokazuje inny PN |
| downloads, related* | UM; 386268G, 607448G, pasek; MS652 Plus | — | zgodne |

Do decyzji właściciela: Unitech ma jedną grafikę dla obu PN. Na karcie 386286G głównym przedmiotem zdjęcia jest 386268G, co przy zakupie samego podkładu może mylić. Do rozważenia: kadr powiększający kółko z podkładem albo dopisek w alt i opisie „na zdjęciu podkładka 386268G na podkładzie 386286G”.

#### unitech-ms652-pasek (386208G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa | wymienny pasek na palec (Changeable Finger Strap) | ARK-MS652PLUS w.13: „Changeable Finger Strap \| PN# 386208G”; WWW: „Standard Finger Strap (PN# 386208G)” | zgodne |
| rzep; palec wskazujący i środkowy; dopasowanie obwodu | — | UM-652 §1.4.5: „Pull open the velcro band and insert your index finger and middle finger… Adjust and tighten the velcro band” | zgodne |
| pięść i kciuk | „dłoń zaciska się w pięść, a kciukiem naciska spust” | UM-652: „Clench your fist and use your thumb to tap the trigger key” | zgodne |
| Zdjęcie i alt | czarny pasek z rzepem | obraz zgodny (źródło 345 px) | zgodne |
| related* | uchwyt, podkładka, smycz 385892G (`unitech-ea660-smycz`); MS652 Plus | ARK-MS652PLUS w.14: „Wrist Lanyard \| PN# 385892G” | zgodne |

Niezgodności i propozycje: brak.

#### unitech-ms9xx-smycz-na-szyje (3210-900019G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, zgodność | MS912 Plus, MS912 Plus 2D, MS926 | ARK-MS912PLUS w.3, ARK-MS912_plus_2D w.3, ARK-MS926 w.2: „Neck Lanyard \| PN# 3210-900019G” | zgodne |
| masy | 30,2 g; 30,7 g; 63 g | DS-912 i UM-912: „30.2g”; DS-912-2D i UM-912-2D: „30.7g”; DS-926: „63g” | zgodne |
| smycz na nadgarstek w zestawie każdego skanera | — | UM-912 §1.1 „Wrist Lanyard”; UM-912-2D §1.1 „Wrist Lanyard” (DS-912-2D: „Hand strap”); UM-926 §1.1 „Wrist Lanyard” | zgodne |
| MS912 Plus 2D na smyczy lub przy szlufce | — | DS-912-2D: „can be hung on a lanyard or easily attached to a belt loop” | zgodne |
| Zdjęcie i alt | żółta płaska smycz, sznurek i zaczep | obraz zgodny | zgodne |
| downloads | UM MS912 Plus 2D, 4,1 MB | 4744 (4 292 583 B) | zgodne |
| related* | pasek MS926, stacja MS926; 3 skanery | ARK-MS926 | zgodne |

Niezgodności i propozycje: brak. Ta sama smycz pasuje też do MS916 i MS926P (ARK-MS916 w.2, ARK-MS926P w.2); na stronie nie ma ich kart.

#### unitech-ms926-pasek-na-nadgarstek (5500-900007G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, zgodność | pasek (smycz) na nadgarstek, MS926 | ARK-MS926 w.3: „Wrist Lanyard \| PN# 5500-900007G” (także ARK-MS916 i ARK-MS926P) | zgodne |
| otwór na smycz | przewleka się przez otwór w obudowie | UM-926 §1.2: „Wrist Lanyard Hole” | zgodne |
| w zestawie skanera | smycz na nadgarstek | UM-926 §1.1; WWW-MS926: „Wrist Lanyard” | zgodne |
| wymiary i masa | 95,9 mm, 63 g | DS-926 i UM-926: „L95.9mm”, „63g” | zgodne |
| Zdjęcie i alt | czarna smycz ze sznurkiem i pętlą | obraz zgodny (źródło 300 px) | zgodne |
| downloads, related* | UM MS926; smycz na szyję, stacja | — | zgodne |

Niezgodności i propozycje: brak.

#### unitech-wd200-uchwyt-na-nadgarstek (3210-900026G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, zawartość | podstawa (wspornik), pasek, podkładka | ARK-WD200Plus w.5: „WD200 Wrist Holder Kit(Bracket,Strap,Pad) \| PN#3210-900026G”; QSG-WD-NAD: „Wrist Bracket, Wrist Holder pad, Wrist Holder strap” | zgodne |
| montaż | dwa wgłębienia, kliknięcie; pasek przez szczelinę; podkładka na rzepy | QSG-WD-NAD p.3: „Slide the WD200 into the two recesses… A CLICK sound”; p.6 „Thread the strap through the slot”; p.8 „Attach the pad… Velcro side of the pad is facing downward” | zgodne |
| lewa i prawa ręka, aparat na zewnątrz | — | QSG-WD-NAD: „can be worn on either hand. Just make sure the camera is facing outward” | zgodne |
| Zdjęcie i alt | WD200 Plus na przedramieniu, czarny pasek z podkładką, „widok z boku” | obraz: urządzenie na nadgarstku, pasek ze strzałkami; ujęcie raczej z góry i z przodu niż z boku | zgodne z drobną uwagą |
| downloads | QSG uchwytu 825 KB; broszura 783 KB | 6217 (845 134 B), 6269 (802 028 B) | zgodne |
| related* | podkładka, pasek, uchwyt dwupaskowy, stacja; WD200 Plus | BR-WD | zgodne |

Niezgodności i propozycje: brak.

#### unitech-wd200-uchwyt-dwupaskowy (3210-900051G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa | Two-Strap Holder | ARK-WD200Plus w.27: „Two-strap Holder \| PN#3210-900051G” | zgodne |
| montaż fabryczny, dwa paski na rzep, zatrzask | — | QSG-WD-2P: „Two-Strap Holder (Pre-Assembled)”; „Release Latch”; „peel both Velcro straps upward” | zgodne |
| zakładanie | paski do góry, na nadgarstek, dopasować, wsunąć komputer do kliknięcia | QSG-WD-2P „How to Install” p.1–3 | zgodne |
| wyjmowanie | nacisnąć zatrzask, przesunąć w górę | QSG-WD-2P: „Press the Release Latch and slide the WD200 Plus upward” | zgodne |
| Zdjęcie i alt | WD200 Plus na przedramieniu, dwa paski ze strzałkami | obraz zgodny | zgodne |
| downloads | QSG 567 KB, broszura 783 KB | 7066 (580 602 B), 6269 | zgodne. Broszura 6269 (09.2025) nie wymienia uchwytu dwupaskowego |
| related* | uchwyt na nadgarstek, stacja; WD200 Plus | — | zgodne |

Niezgodności i propozycje: brak.

#### unitech-wd200-stacja-4-slot (5100-900030G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa | 4-gniazdowa do WD200 Plus | ARK-WD200Plus w.3: „4-Slot Terminal Charging Cradle \| PN#5100-900030G”; BR-WD | zgodne |
| zawartość | zasilacz 5 V / 6 A bez przewodu sieciowego | QSG-WD-ST: „Power Supply (5V/ 6A) without power cord”; „Optional Accessories: Power Cord (US / EU / UK)” | zgodne |
| ładowanie | wsunąć komputer, ładowanie rusza samo po wykryciu | QSG-WD-ST: „Charging will start automatically once detected” | zgodne |
| dioda | czerwona: zasilanie podłączone | QSG-WD-ST: „Red Light – Power supply is connected” | zgodne |
| DC-in; przewód do zasilacza i gniazdka | — | QSG-WD-ST „Power Connection” p.1–3 | zgodne |
| styki pogo | „Ładowanie komputera: Przez styki pogo” | UM-WD §1.3: „POGO PIN – Charging via Cradle” | zgodne |
| **blok „Wymagane”** | przewód EU 1550-602333G, „wtyk Schuko – złącze C13” | QSG-WD-ST: przewód (US/EU/UK) opcjonalny, bez PN. ERS (`ers-acc-WD200-0F6FRM3G.txt` w.165–167): „power cord is optional: 1550-602689G UK / 1550-602333G EU”. LEV (WD200): „3 Pins Power Cord UK Version 1550-602689G”. Unitech dla HT730 Plus (`ute2/web/detail-HT730Plus.txt` w.444–446) łączy 1550-602333G (EU) i 1550-602689G (UK) jako „3-Pin Power Cord” do zasilacza 5 V / 6 A | PN zgodny (ERS wprost, LEV i Unitech pośrednio). „C13” nie ma potwierdzenia w dokumentach z zakresu C |
| Zdjęcie i alt | 4 komputery w gniazdach, zasilacz z przewodem w prawym górnym rogu | obraz zgodny (IMG-UTE „4S_adapter_5100-900030G.jpg”) | zgodne |
| downloads | QSG 517 KB, broszura 783 KB | 6218 (529 720 B), 6269 | zgodne |
| related* | przewód 1550-602333G, uchwyty; WD200 Plus | — | zgodne |

Niezgodności i propozycje: brak w tekście karty.

Do decyzji właściciela:
- Typ złącza przewodu (C13) potwierdza karta przewodu, czyli inny zakres. W dokumentach C jest tylko „3 Pins Power Cord (EU)”.
- Komponent bloku wymaganych elementów pokazuje na tej karcie nagłówek „Aby korzystać ze stacji, potrzebujesz poniższych elementów.” (`required-accessory-copy.ts`, ostatni `return`). To forma na „Ty”, a zmiana dotyczy całej strony, nie tej karty. Propozycja: „Do korzystania ze stacji potrzebne są poniższe elementy.”

#### unitech-wd200-szklo-ochronne (5400-900068G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, 9H, 10 szt. (nazwa, H1, SEO, opis, specyfikacja) | — | ARK-WD200Plus w.24: „9H glass screen protector \| PN#5400-900068G 10pcs with Packing”; BR-WD: „Glass Screen Protector PN#5400-900068G (10pcs with packing)” | zgodne |
| ekran | 3,54 cala, 960 × 640 | DS-WD: „3.54” Color TFT-LCD (960 X 640)” | zgodne |
| rękawice | „panel dotykowy działa w rękawicach” | DS-WD: „supports use with gloves”; FAQ-WD: „Glove Mode” włącza się w Ustawieniach | zgodne (warunek: tryb rękawic) |
| IP68 | — | DS-WD: „Environmental sealing IP68” | zgodne |
| Zdjęcie i alt | szkło nad ekranem urządzenia z ekranem startowym Androida | obraz zgodny (IMG-UTE „PN-401744G WD200P-9H-2.png”) | zgodne |
| downloads | broszura | 6269 | zgodne |
| kategoria | `etui-kabury-uchwyty` | — | uwaga taksonomiczna: szkło nie jest etui ani uchwytem |

Niezgodności i propozycje: brak. Opcjonalnie: „…a panel dotykowy obsługuje pracę w rękawicach po włączeniu trybu rękawic.”

#### unitech-wd200-podkladka (386215G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa | podkładka zapasowa do uchwytu na nadgarstek | ARK-WD200Plus w.7: „WD200 Replacement Pad for Wrist Holder \| PN#386215G, 5400-900043G 10pcs with packing”; BR-WD | zgodne |
| 1 szt. | „W opakowaniu jest jedna sztuka” | dokumenty podają liczbę sztuk tylko dla 5400-900043G (10 szt.); 386215G to PN pojedynczej podkładki | zgodne pośrednio |
| mocowanie | rzep w dół, zgodnie z podstawą | QSG-WD-NAD p.8: „Velcro side of the pad is facing downward and aligns properly with the bracket” | zgodne |
| pełny zestaw | 3210-900026G | ARK-WD200Plus w.5 | zgodne |
| Zdjęcie i alt | czarna kwadratowa podkładka z pasem rzepu; w kółku nadgarstek | obraz zgodny (IMG-UTE „Wd200 replacement pad pack.png”) | zgodne |
| downloads, related* | QSG uchwytu, broszura | — | zgodne |

Niezgodności i propozycje: brak.

#### unitech-wd200-podkladka-10-szt (5400-900043G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, 10 szt. | — | ARK-WD200Plus w.7; BR-WD: „PN#5400-900043G 10pcs with packing” | zgodne |
| **shortDescription i opis, zdanie 2** | „zamiennych w uchwytach noszonych z komputerem WD200 Plus”; „Każda z nich pasuje do uchwytu, w którym nosi się Unitech WD200 Plus.” | BR-WD i ARK: „Replacement Pad for Wrist Holder”, czyli tylko zestaw 3210-900026G. Uchwyt dwupaskowy 3210-900051G nie ma podkładki (QSG-WD-2P) | **nieprecyzyjne**: sugeruje każdy uchwyt WD200 Plus |
| mocowanie | rzep w dół | QSG-WD-NAD p.8 | zgodne |
| Zdjęcie i alt | zdjęcie i alt 1 szt. (jak 386215G) | zdjęcie pokazuje jedną podkładkę | do rozważenia |

Niezgodności i propozycje:
- shortDescription. Było: „Dziesięć podkładek Unitech 5400-900043G zamiennych w uchwytach noszonych z komputerem WD200 Plus.” Ma być: „Dziesięć zapasowych podkładek Unitech 5400-900043G do uchwytu na nadgarstek 3210-900026G komputera WD200 Plus.”
- Opis, zdanie 2. Było: „Każda z nich pasuje do uchwytu, w którym nosi się Unitech WD200 Plus.” Ma być: „Każda z nich pasuje do [uchwytu na nadgarstek 3210-900026G](/produkt/unitech-wd200-uchwyt-na-nadgarstek) komputera Unitech WD200 Plus.” Dowód: BR-WD „Replacement Pad for Wrist Holder”.

#### unitech-wd200-pasek (609032G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, nazwa, 1 szt. | — | ARK-WD200Plus w.8: „WD200 Replacement Strap for Wrist Holder \| PN#609032G, 5400-900044G 10pcs with packing” | zgodne (1 szt. pośrednio) |
| zakładanie | strzałki w stronę podstawy, rzep w górę, przez szczelinę, zapięcie na rzep | QSG-WD-NAD p.4–6 i p.9–10 | zgodne |
| Zdjęcie i alt | długi czarny pasek z rzepem; w kółku nadgarstek | obraz zgodny (IMG-UTE „band.png”) | zgodne |
| downloads, related* | — | — | zgodne |

Niezgodności i propozycje: brak.

#### unitech-wd200-pasek-10-szt (5400-900044G)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| PN, 10 szt. | — | ARK-WD200Plus w.8; BR-WD: „(PN#5400-900044G 10pcs with packing)” | zgodne |
| zakładanie | strzałki na podstawę, rzep w górę | QSG-WD-NAD p.4–5 | zgodne |
| **shortDescription** | „dziesięć pasków zamiennych do uchwytów WD200 Plus noszonych na nadgarstku” | BR-WD: „Replacement Strap for Wrist Holder”, czyli tylko 3210-900026G. Uchwyt dwupaskowy też nosi się na nadgarstku, a ma własne, fabrycznie zmontowane paski (QSG-WD-2P) | **nieprecyzyjne** |
| zdanie 3 | „Pasuje do Unitech WD200 Plus.” | jw. | ogólnikowe |
| Zdjęcie i alt | zdjęcie 1 szt. | — | do rozważenia |

Niezgodności i propozycje:
- shortDescription. Było: „Unitech 5400-900044G: dziesięć pasków zamiennych do uchwytów WD200 Plus noszonych na nadgarstku.” Ma być: „Unitech 5400-900044G: dziesięć zapasowych pasków do uchwytu na nadgarstek 3210-900026G komputera WD200 Plus.”
- Opis, zdanie 3. Było: „Pasuje do Unitech WD200 Plus.” Ma być: „Pasuje do [uchwytu na nadgarstek 3210-900026G](/produkt/unitech-wd200-uchwyt-na-nadgarstek) komputera Unitech WD200 Plus.”

---

#### Unikalność (do skryptu koordynatora)
- Alt prawie identyczne (różni się tylko PN): 386215G i 5400-900043G; 609032G i 5400-900044G; 5000-900064G i 5000-900082G (różnica tylko „ESD”). Dla opakowań 10 szt. dopisać w alt „zdjęcie jednej sztuki z opakowania 10 szt.” albo zostawić.
- Opisy par 386215G i 5400-900043G, 609032G i 5400-900044G, 386268G i 386286G podają te same fakty innymi słowami. Nie są identyczne, ale skrypt 6-gramów warto puścić.

#### Pliki do pobrania – rozmiary
4,5 MB (4 677 654 B), 5,2 MB (5 478 952 B), 4,3 MB (4 522 297 B), 877 KB (898 249 B), 3,2 MB (3 386 083 B), 4,7 MB (4 939 844 B), 3,7 MB (3 830 831 B), 2,9 MB (3 036 993 B), 7,9 MB (8 265 065 B), 4,1 MB (4 292 583 B), 517 KB (529 720 B), 825 KB (845 134 B), 567 KB (580 602 B), 783 KB (802 028 B), 2,3 MB (2 437 178 B). Wszystkie się zgadzają. Pliki porównałem md5 z oficjalnymi PDF w `ute5b/oficjalne`, a przypadek 2287 opisałem przy stacji ESD.

#### Miejsca o podwyższonym ryzyku — wynik
| punkt | wynik |
|---|---|
| podkładki 386268G i 386286G jako dwie części jednej podkładki | Zgodne z grafiką Unitech z arkusza (etykiety „PN#386268G” i „PN#386286G (Backing self adhesive)”) i z UM-652 §1.4.3. Teksty PDF mówią tylko „Standard Finger Pad (386268G/386286G)”. Ryzyko: karta 386286G ma zdjęcie, na którym dominuje 386268G |
| zgodność podstawki 5200-900014G z MS838, MS836B, MS838B | Zgodne: ARK-MS836B, ARK-MS838B i ARK-MS838. Inne rodziny mają inne podstawki (MS85x 5200-900009G, MS282e 5200-900013G). Niezgodny jest za to opis działania bez trzymania w dłoni dla MS836B |
| zestawy MS838-2UCB0S-SG (podstawka w zestawie) i MS838-2RCB00-SG | Zgodne: UM-838 „combo package… Hands free stand” oraz ERS, BF i LV838 dla 2UCB0S. Dla 2RCB00: BF „Without Stand”, LV838 „with RS232 cable” |
| zgodność akumulatora MS85x z MS852P i wersjami ESD | Zgodne: ARK-MS852P w.5, ARK-MS851BESD w.6, ARK-MS852BPLUS_ESD w.6. Opis pomija MS851B (ARK-MS851B w.8). Stacja 5000-900064G słusznie nie obejmuje MS852P (ARK-MS852P w.9: 5000-900104G) |
| akumulator MS633 a MS633 LR | Zgodne: osobne PN 1400-900075G i 1400-900076G (ARK-MS633 w.4 i w.6). Karty nie mieszają PN |
| zasięgi MS633 LR | Karta 1400-900076G podaje 18 m. DS-633 nagłówek: 12 m, tabela DOF: 1800 cm. Do decyzji, zalecam usunąć zasięg z karty akumulatora |
| obracany zespół spustu MS633 | Zgodne (QSG-633 s.8, DS-633) |
| szkło i podkładki/paski WD200 (liczba sztuk) | 10 szt. zgodne (ARK-WD200Plus w.7, w.8, w.24, BR-WD). 1 szt. zgodne pośrednio. Opisy 10 szt. podkładek i pasków nieprecyzyjnie wskazują „uchwyty WD200 Plus” zamiast 3210-900026G |
| zasilacz i przewód przy stacji WD200 4-slot | Zgodne: zasilacz 5 V / 6 A w zestawie, przewód osobno (QSG-WD-ST). PN 1550-602333G wg ERS i par PN Unitech. „C13” niepotwierdzone w zakresie C |
| stacja MS926 | Fakty zgodne (ARK-MS926, UM-926, DS-926). Brak informacji o zasilaniu stacji (LEV: „no PSU”), do decyzji |
| blok „Wymagane” WD200 Plus (zasilacz 1010-900074G i mocowania) | Zgodne: w pudełku tylko terminal, przewód USB-C i QSG (QSG-WD, UM-WD §1.1, WWW). 1010-900074G = „Adapter … EU” (BR-WD, ARK-WD200Plus w.10). Mocowania 3210-900026G i 3210-900051G to oba uchwyty Unitech. Uwaga: BR-WD wymienia też „Professional armband strap” 5500-1000xxG; dokumenty nie mówią, czy mocuje on terminal |
| gwarancje | Karty z zakresu C nie podają gwarancji, nic do sprawdzenia |
| pozostałe punkty listy (MS852P/MAC, przyciski MS926, DotCode, High Density, MS836-SUCBS0-SG, MS852B LR, złącze MS912, silniki) | Nie dotyczą kart akcesoriów z zakresu C |

#### Podsumowanie
- Kart: 27. Pliki do pobrania istnieją i mają poprawne rozmiary. Linki i slugi działają. Naruszeń stylu TAKMA w tekstach kart nie ma; jedno jest w komponencie „Wymagane” (forma „potrzebujesz”).
- Niezgodności do poprawy: 6 (w tym 1 błąd faktu i 2 pominięte warunki):
  1. `unitech-ms633-ladowarka-baterii`: czerwona dioda ładowarki to tylko „Power On”; czerwona dioda gniazda oznacza ładowanie (QSG-633 s.14). Błąd w opisie i w 2 wierszach specyfikacji.
  2. `unitech-ms83x-odbiornik-2-4-ghz`: parowanie przytrzymaniem przycisku przez 16 s jest fabrycznie wyłączone („Disable *”, UM-836B s.14, UM-838B). To samo w FAQ MS838B (poza zakresem).
  3. `unitech-ms83x-podstawka`: „kody czyta się bez trzymania w dłoni”. MS836B nie ma trybu automatycznego (DS „Trigger Mode, Buffer Mode”), a w MS838B tryb Auto Sense jest fabrycznie wyłączony.
  4. `unitech-ms85x-bateria`: „sześć wersji”, a arkusz podaje też MS851B (ARK-MS851B w.8).
  5. `unitech-wd200-podkladka-10-szt` i `unitech-wd200-pasek-10-szt`: „do uchwytów WD200 Plus” zamiast „do uchwytu na nadgarstek 3210-900026G” (BR-WD).
  6. `unitech-ms85x-stacja-ladujaca`: MS851B jest w specyfikacji, a w nazwie i opisie nie (drobne).
- Do decyzji: zasięg MS633 LR (12 m czy 18 m), czas pracy MS652 Plus (9 h, 14 h, 13 h), brak przewodu w stacjach 5000-900064G i 5000-900082G (ERS: „without cable”), zasilanie stacji MS926 (LEV: „no PSU”) i MS652 (5 V / 3 A, bez PN), zdjęcie karty 386286G, rozbieżne PN przewodu micro USB na ute.com, zestaw MS633 (UM a DS i WWW), plik „UM MS852B Plus ESD” to UM MS852B Plus v1.2 (etykieta ute.com).

### Załącznik D: strona /skanery-unitech, WD200 Plus na /terminale-unitech i /terminale-naramienne, llms.txt

Kod: `$WT` = `wt-ute-v9` (commit 75697df1). Tylko odczyt. Dowody: `$SP/ute5a/oficjalne/`, `$SP/ute5b/oficjalne/` (PDF sprawdzane przez `pdftotext -layout`), strony ute.com `detail-*.txt`, strony eu.ute.com `eu-*.txt`, arkusze `ute5a/acc/*.xlsx`; dystrybutorzy (ERS, Levata, BarcodeFactory) tylko jako uzupełnienie. Cen nie sprawdzałem.

Skróty dokumentów (wszystkie w `$SP/ute5a|ute5b/oficjalne/`):
DS-852 = `3951_MS852_RevD.pdf`; DS-852P+ = `131_MS852_plus_RevE.pdf`; DS-LR = `1170_MS852LR_series_RevF(3).pdf`; DS-DPM = `997_MS852DPM_RevB.pdf`; DS-P+ESD = `536_MS852PLUS_ESD_RevC.pdf`; DS-851ESD = `537_MS851ESD_RevA.pdf`; DS-838 = `3482_MS838_RevG.pdf`; DS-282 = `1171_MS282e_RevC.pdf`; DS-836 = `3252_MS836_RevI.pdf`; BR-250 = `121_MS250_Brochure_Rev_B_(1).pdf`; DS-TS100 = `4081_TS100_RevD.pdf`; DS-852B = `4236_MS852B_RevI(SE4107).pdf`; DS-852B+ = `342_MS852B_PLUS_RevF.pdf`; DS-852PP = `4668_MS852P_RevB.pdf`; DS-B+ESD = `1542_MS852Bplus_ESD_RevC.pdf`; DS-851BESD = `1541_MS851B_ESD_RevB.pdf`; DS-822B = `5033_MS822B_RevJ.pdf`; DS-838B = `3834_MS838B_RevK.pdf`; DS-836B = `3833_MS836B_RevL.pdf`; DS-633 = `5683_MS633_RevE.pdf`; DS-652 = `3974_MS652plus_RevM_1.pdf`; DS-626 = `6554_MS626P_RevC.pdf`; DS-912 = `176_MS912_Plus_RevE.pdf`; DS-912-2D = `4697_MS912_Plus_2D_RevB.pdf`; DS-926 = `179_MS926_RevJ.pdf`; DS-WD = `6052_WD200P_RevE.pdf`; UM-WD = `6216_WD200_Plus_UM_V1_0_20250704.pdf`; ACC-WD = `6269_WD200P_Accessories_brochure_20250909.pdf`.

---

#### /skanery-unitech — metadane i wstęp (`products.ts` wpis `skanery-unitech` + `definition` w `unitech-scanner-category.ts`)

| element | na stronie (cytat/wartość) | dokument (plik, miejsce, cytat/wartość) | ocena |
|---|---|---|---|
| name | „Skanery kodów kreskowych Unitech” | — | zgodne |
| seoTitle | „1D, 2D, ESD i DPM, ceny od {cenaOd} zł” | 1D: DS-851ESD; 2D: DS-852; ESD: DS-P+ESD; DPM: DS-DPM. Cena dynamiczna (wzorzec stron marki, np. ProGlove) | zgodne (ceny poza zakresem) |
| seoDescription | „LR do 21 m, ESD i DPM, pierścieniowe, kieszonkowe i prezentacyjny TS100” | DS-LR: „scanning range up to 21m away”; DS-TS100: „2D Presentation Scanner” | zgodne |
| longDescription: interfejsy | „przewodowe z USB lub RS-232, bezprzewodowe z Bluetooth albo radiem 2,4 GHz” | DS-838: „Host Interface supported USB / RS232”; DS-852B: Bluetooth; DS-838B/836B/822B/852PP: „2.4G” | zgodne |
| longDescription: rodzina MS85x | „dalekiego zasięgu do 21 m, wersje ESD-safe … i wersja do kodów DPM” | DS-LR; DS-P+ESD/DS-851ESD; DS-DPM | zgodne |
| definition: imagery vs laser/CCD | „Imagery 2D czytają … QR i Data Matrix, a skanery laserowe i CCD tylko kody liniowe 1D” | DS-852/838/282/TS100 – listy 2D z QR i Data Matrix; DS-851ESD, DS-836, DS-836B, BR-250, DS-912 – tylko 1D | zgodne |
| definition: przewodowe | „łączą się przewodem USB, a jedna wersja MS838 przez RS-232” | DS-838 USB/RS232; pozostałe oferowane PN to wersje USB (np. web `detail-MS852PLUS.txt`: PN …UCB00-SG) | zgodne (dotyczy oferowanych PN; DS-852 i DS-852P+ też wymieniają RS232) |
| definition: masa kieszonkowych | „ważą od 30,2 do 63 g” | DS-912: „Weight 30.2g”; DS-912-2D: „30.7g”; DS-926: „Scanner Weight 63g” | zgodne |
| definition: ESD i DPM | „obudowę z tworzywa antystatycznego do stref EPA”, „wersja DPM czyta kody nanoszone bezpośrednio na części” | DS-P+ESD: „internal mixed way with antistatic agent”; DS-DPM: „mark a barcode directly on an item” | zgodne |
| definition: zestaw | „Wyposażenie zestawu … zależy od numeru PN” | np. MS838-2UCB0S-SG z podstawką (ERS `ers-acc-MS838-2UCB0S-SG.txt`, BarcodeFactory `bf-ms838.txt`) | zgodne |

Niezgodności i propozycje: brak.

---

#### /skanery-unitech — „Jak wybrać skaner Unitech?” (`buyingGuide`)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| Rodzaj kodów: imagery | „kody 2D, QR i kody z ekranów czytają imagery, np. MS852, MS838B i TS100” | DS-852: „1D / 2D barcodes on mobile screens”; DS-838B: „coupon displayed on the phone”; DS-TS100: „codes on smartphone or tablet screens” | zgodne |
| Rodzaj kodów: tylko 1D | „laserowe MS851 ESD, MS851B ESD, MS836 i MS836B, skaner CCD MS250 i kieszonkowy MS912 Plus” | DS-851ESD/851BESD/836/836B (laser 1D); BR-250 „Linear CCD”; DS-912 (1D) | zgodne |
| Łączność MS852B | „przez Bluetooth do 100 m w otwartej przestrzeni” | DS-852B: „up to 100m in the line of open sight” (to samo DS-852B+, DS-LR, DS-B+ESD, DS-851BESD) | zgodne |
| Łączność 2,4 GHz | „MS838B, MS836B i MS822B (do 100 m) oraz MS852P (10 m)” | DS-838B/836B/822B: „2.4G: 100M (line of sight)”; DS-852PP: „Wireless Coverage 10M” | zgodne (MS822B: odbiornik wbudowany w stację, DS-822B „Cradle integrated with 2.4G Dongle”) |
| Odległość | „do kilkudziesięciu centymetrów wystarcza MS852 lub MS852 Plus, a do 21 m … MS852 LR i MS852B LR. Skaner kontaktowy MS250 czyta do 90 mm” | DS-852 UPC do 49,5 cm; DS-852P+ Code 39 20 mil do 80 cm; DS-LR 21 m; BR-250 „Up to 90mm @ 20mil” | zgodne |
| Środowisko | „Kody DPM czytają MS852 DPM ESD i MS852B Plus ESD” | DS-DPM; DS-B+ESD: „Support DPM barcodes” | zgodne |
| Sposób pracy | „TS100 stoi na blacie … pierścieniowe MS633, MS652 Plus i MS626 Plus zostawiają obie ręce wolne” | DS-TS100 „countertops”; DS-633 „keep both hands free”; DS-652; DS-626 „hands-free wearable design” | zgodne |
| Interfejs | „wersje przewodowe w ofercie mają USB, a MS838 także RS-232 (MS838-2RCB00-SG)” | DS-838 USB/RS232; PN RS-232: BarcodeFactory i Levata (`bf-ms838.txt`, `lv-unitech-ms838-handheld-readers.txt`) | zgodne |

Niezgodności i propozycje: brak.

---

#### /skanery-unitech — tabela modeli (`modelTable`, 26 wierszy)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| MS852 | „Przewodowy 2D, IP42”; „1280 × 960, rolling shutter”; „OCR, kody z ekranów”; „147 g”; „Kasy w handlu, hotelarstwie i administracji” | DS-852: „1280 x 960 pixels, rolling shutter”, „IP42”, „147g without cable”, „retail, hospitality and government” | zgodne |
| MS852 Plus | „global shutter”; „1280 × 800”; „DotCode, Digimarc, OCR”; „Wersje: Standardowa i High Density”; „Bilety mobilne, kupony, logistyka i produkcja” | DS-852P+: „1280 X 800 global shutter”, „Support OCR, Dot codes, and Digimarc”, „mobile ticketing … mobile coupons … manufacturing”. „High Density”: brak w DS-852P+, UM `306_…`, `2281_…`, `detail-MS852PLUS.txt` (tam tylko „MS852-VUCB00-SG/MS852-ZUCB00-SG” bez rozróżnienia); HD tylko u dystrybutorów (Levata „Adv. Imager/HD” dla ZUCB00-SG; ERS i BarcodeFactory „High Density” dla ZUCB00-OG) | matryca/odczyt zgodne; **„High Density” – brak w dokumentach Unitech** |
| MS852 LR | „7,6 cm–21 m”; „od −20°C”; „Przewód USB i przewód Y”; „Etykiety na paletach i regałach” | DS-LR: „from 7.6cm … to 21m”, „-20°C to +50°C (MS852 LR)”, Package „USB Interface Cable / Y cable”, „barcodes on pallets or shelf” | zgodne |
| MS852 DPM ESD | „DPM: laser, mikroudar, atrament”; „Krzyżowy laser, 60 FPS”; „Obudowa i przewód ESD”; „produkcji, motoryzacji i elektronice” | DS-DPM: „laser etched marking, dot peening and ink jet printing”, „Red cross laser aiming”, „Scan Rate 60FPS”, „including its cable”, „manufacturing, automotive … electronic equipment” | zgodne |
| MS852 Plus ESD | rola „Przewodowy 2D, High Density, ESD-safe”; „Optyka: High Density, global shutter”; „OCR, DotCode, Digimarc”; „Obudowa i przewód ESD”; „Cleanroomy i strefy EPA” | DS-P+ESD: „1280 X 800 global shutter”, „Support OCR, Dot codes, and Digimarc”, „cleanrooms”. „High Density”: brak w DS-P+ESD i `detail-MS852_plus_ESD.txt`; HD tylko ERS (`ers-p10261.txt` „MS852+ HD ESD”) i Levata (`levata-ms852-esd.txt` „HD”) | **„High Density” – brak w dokumentach Unitech**; reszta zgodna |
| MS851 ESD | „104 skany/s”; „do 4,57 m”; „Spust, impulsowy, migowy, ciągły”; bestFor „Długie kody liniowe w strefach ESD” | DS-851ESD: „104 (± 12) scans/sec”, „Code 39, 100 mils … 457.20 cm”, „Trigger mode, Pulse mode, Flash mode, Continuous Mode”, „ability to capture long range 1D barcodes” | liczby zgodne; „do 4,57 m” bez warunku (tylko Code 39 100 mil) – nadinterpretacja; **„Długie kody” – błędne tłumaczenie „long range”** |
| MS838 | „Przewodowy 2D, IP52”; „USB albo RS-232”; „Spust i prezentacyjny”; „245 g”; „Sklepy, apteki i hotele; wersja z podstawką” | DS-838: „IP52”, „USB / RS232”, „Trigger Mode, Presentation Mode”, „Weight 245g”, „retail stores, supermarket, pharmacy and hotel”; podstawka w MS838-2UCB0S-SG: ERS „USB Cable, Hands-Free Stand”, BarcodeFactory „USB (With Stand)” | zgodne |
| MS282e | „smukła obudowa”; „125 g”; „Ręczny i prezentacyjny”; „USB”; „Kasy, karty lojalnościowe i kupony mobilne” | DS-282: „Weight 125g”, „supports both manual and presentation scanning”, „Host Interface supported USB”, „point-of-sale systems, loyalty card and mobile coupons” | zgodne |
| MS836 | „Przewodowy laser 1D, IP52”; „100 skanów/s”; „Spust, prezentacyjny, auto-sensing”; „szerokość 220 mm” | DS-836: „IP52”, „Scan Rate 100 times/ second”, „trigger mode, presentation mode and auto-sensing mode”, „Scanning Width 220 mm” | zgodne |
| MS250 | „kontaktowy CCD 1D”; „od zetknięcia do 90 mm”; „200 skanów/s”; „83 g”; „Kasy POS, dokumenty i kontrola zapasów” | BR-250: „contact to middle range CCD”, „from contact to 90mm”, „200 scans/ second ±10%”, „Scanner Weight 83g”, „point-of-sale, document processing … inventory control” | zgodne |
| TS100 | „Prezentacyjny 2D”; „Okno odczytu 50° × 35°”; „Auto-sensing, 60 fps”; „Poziomo lub pochylenie 15°”; „Blat kasy w handlu i hotelarstwie” | DS-TS100: „50° horizontal, 35° vertical”, „60 fps scan rate on auto-sensing mode”, „Retail, Hospitality, and Supermarket”; UM `4208_TS100__UM_V1_8` 1.4.1: „Place the Scanner Horizontally”, „Pitch forward 15 degree” | zgodne |
| MS852B | „Bluetooth, stacja”; „Bluetooth do 100 m”; „1280 × 960, rolling shutter”; „Inwentaryzacja w magazynie i produkcji, kody z ekranów” | DS-852B: „100m ( line of sight)”, „1280 x 960 pixels, rolling shutter”, Package „Cradle”, „inventory control … warehousing, manufacturing” | zgodne |
| MS852B Plus | „global shutter”; „Bluetooth do 100 m”; „OCR, DotCode, Digimarc”; „Logistyka i inwentaryzacja, DotCode na oponach” | DS-852B+: „1280 X 800 global shutter”, „up to 100 meters”, „Support OCR, Dot codes, and Digimarc”, „Dot codes on tires” | zgodne |
| MS852B LR | „do 21 m”; „Bluetooth do 100 m”; „Etykiety na regałach i paletach, place” | DS-LR: „up to 21m”, „up to 100 m … (MS852B LR)”; `detail-MS852BLR.txt`: „warehouse, yard, field service” | zgodne |
| MS852P | „2,4 GHz”; „Radio 2,4 GHz z odbiornikiem USB, 10 m”; „OCR-A i OCR-B”; „Szpital, magazyn i produkcja” | DS-852PP: „Unlicensed 2.4GHz”, „Wireless Coverage 10M”, „USB(via dongle)”, „OCR-A, OCR-B”, „hospital, warehousing, manufacturing” | zgodne |
| MS852B Plus ESD | rola „Bezprzewodowy 2D, High Density, ESD-safe”; „Bluetooth do 100 m”; „Drukowane i DPM”; „Obudowa i przewód ESD”; „Cleanroomy i strefy EPA” | DS-B+ESD: „up to 100m”, „Support DPM barcodes”, „including its cable”, „cleanrooms”. „High Density”: brak w DS-B+ESD i `detail-MS852BPLUS_ESD.txt` | **„High Density” – brak w dokumentach Unitech**; reszta zgodna |
| MS851B ESD | „Bluetooth do 100 m”; „kody do 4,57 m”; „Kody 1D w pomieszczeniach czystych i strefach EPA” | DS-851BESD: „up to 100m”, „Code 39, 100 mils … 457.20 cm”, „cleanrooms” | liczby zgodne; „kody do 4,57 m” bez warunku – nadinterpretacja |
| MS822B | „2,4 GHz, Bluetooth i USB-C”; „Stacja 2,4 GHz do 100 m, Bluetooth, USB-C”; „IP52”; „Kasa, inwentaryzacja i serwis w terenie” | DS-822B: „2.4G: 100M”, „Bluetooth V4.2”, „USB Type C”, „IP52”, „point-of-sale … inventory control, and field service” | zgodne |
| MS838B | „2,4 GHz i Bluetooth”; „Odbiornik 2,4 GHz do 100 m, Bluetooth, USB-C”; „Praca: ponad 16 h”; „Sklepy, supermarkety i magazyny” | DS-838B: „2.4G: 100M”, „Bluetooth V4.2”, „USB Type C”, „supermarket, retail store and warehouse”; czas: spec „Over 16 hours” (DS-838B, UM `4015_…` l.726), ale cechy DS „up to 16 hours” i `detail-MS838B.txt` „Up to16 hours” | łączność zgodna; **„ponad 16 h” – sprzeczność „Over”/„up to”** |
| MS836B | „laser 1D, 2,4 GHz i Bluetooth”; „Odbiornik 2,4 GHz do 100 m, Bluetooth, USB-C”; „Praca: ponad 30 h”; „Kasa i kontrola zapasów” | DS-836B: „2.4G: 100M”, „Bluetooth V4.2”, „USB Type C”, „point-of-sale, inventory control”; czas: spec „Over 30 hours”, cechy „up to 30 hours”, nagłówek DS „16 hours operation time”; `detail-MS836B.txt` „30 hours”, „Up to 30 hours” | łączność zgodna; **„ponad 30 h” – sprzeczność w DS** |
| MS633 | „Pierścieniowy 2D, Bluetooth”; „56 g (wersja LR 67 g)”; „Bluetooth, ponad 50 m bez przeszkód”; „magazyn, handel i hotelarstwo” | DS-633: „MS633: 56g / MS633 LR: 67g”, „> 164.04ft./50m(without obstructions)”; `detail-MS633.txt` tagi „Retail, Hospitality, Logistics, Warehousing” | zgodne |
| MS652 Plus | „Bluetooth i NFC”; „Bluetooth do 100 m, NFC”; „95 g”; „Handel, logistyka i serwis w terenie” | DS-652: „300ft/100M (Open space)”, „NFC technology”, „Scanner Weight 95g”, „retail, logistics, field service and hospitality” | zgodne |
| MS626 Plus | „Bluetooth 5.0”; „19,4 g”; „120 klatek/s”; „Handel, magazyn i serwis w terenie” | DS-626: „Bluetooth® 5.0”, „Weight 19.4g”, „Scan Rate 120fps”, „retail, hospitality, warehousing, and field service” | zgodne |
| MS912 Plus 2D | „Bluetooth 5.0”; „30,7 g”; „Bluetooth do 20 m”; „Hotelarstwo, serwis w terenie i ochrona zdrowia” | DS-912-2D: „Bluetooth 5.0”, „Weight 30.7g”, „66 ft/ 20m (line of sight)”; `detail-MS912_plus_2D.txt` tagi „Hospitality, Field Service, Healthcare” | zgodne |
| MS912 Plus | „Kieszonkowy 1D, Bluetooth”; „30,2 g”; „650 skanów/s” | DS-912: kolumna MS912+ „650 Scans/ sec”, „Weight 30.2g”, „Bluetooth® 2.1+EDR” | zgodne |
| MS926 | „OLED 1″, 3 przyciski”; „Bluetooth i NFC”; „Identyfikacja osób, bilety mobilne i obsługa klienta” | DS-926: „1" OLED, 128 x 64”, „3 keys: Page up, Page down, Scan with power”, „NFC-Bluetooth® automatic pairing”, „customer-facing … personal Identification and mobile ticketing” | zgodne |

Niezgodności i propozycje:
1. MS852 Plus, wiersz „Wersje”: było „Standardowa i High Density” → ma być „Optyka standardowa (VUCB00) i druga wersja optyki (ZUCB00)” albo usunąć wiersz i zostawić „Matryca: 1280 × 800, global shutter”. Dowód: żaden dokument Unitech (DS-852P+, UM 306/2281, `detail-MS852PLUS.txt`, FAQ `678_…`) nie używa nazwy „High Density”; FAQ `1856_FAQ-MS852_website` nazywa MS852-ZUCB00-SG po prostu „MS852+”.
2. MS852 Plus ESD: było rola „Przewodowy 2D, High Density, ESD-safe” i „Optyka: High Density, global shutter” → ma być „Przewodowy 2D, global shutter, ESD-safe” i „Matryca: 1280 × 800, global shutter”. Dowód: DS-P+ESD „Sensor 1280 X 800 global shutter”; brak „High Density”.
3. MS852B Plus ESD: było rola „Bezprzewodowy 2D, High Density, ESD-safe” → ma być „Bezprzewodowy 2D, global shutter, ESD-safe”. Dowód: DS-B+ESD „1280 X 800 global shutter”; brak „High Density”.
4. MS851 ESD, bestFor: było „Długie kody liniowe w strefach ESD.” → ma być „Kody liniowe 1D czytane z większej odległości w strefach ESD.” Dowód: DS-851ESD „ability to capture long range 1D barcodes” (zasięg, nie długość kodu).
5. MS851 ESD, „Zasięg”: było „do 4,57 m” → ma być „Code 39 100 mil: do 4,57 m”. MS851B ESD: było „kody do 4,57 m” → ma być „Code 39 100 mil: do 4,57 m”. Dowód: DS-851ESD/DS-851BESD tabela DOF „Code 39, 100 mils | 60.96 cm | 457.20 cm”; dla UPC 13 mil tylko 63,5 cm.
6. MS838B, „Praca”: było „ponad 16 h” → ma być „do 16 h”. MS836B: było „ponad 30 h” → ma być „do 30 h”. Dowód: DS-838B/DS-836B cechy „up to 16/30 hours”, strony ute.com „Up to … hours”; wartość „Over” tylko w tabeli spec. Wersja „do” nie obiecuje więcej, niż podają wszystkie dokumenty.

Do decyzji właściciela:
- „High Density” (pkt 1–3): dystrybutorzy zgodnie przypisują literze Z wersję HD (Levata: MS852-ZUCB00-SG „Adv. Imager/HD”; ERS: MS852-ZUCB00-OG „High Density 2D Imager”, MS852-ZUCB00-LG „HD ESD”; BarcodeFactory: MS852-ZUCB00-OG „High Density”, MS852-ZUBB0C-SG „2D High Density”). Unitech tego nie pisze. Jeśli HD ma zostać, tylko jako nazwa wariantu bez parametrów optycznych. Uwaga: DS-852P+ ma jedną tabelę głębi odczytu; Unitech nie podaje, czy „Code 39 20 mil: do 80 cm” dotyczy wersji Z.
- Czas pracy MS836B: DS-836B ma w nagłówku „16 hours operation time”, a w treści i spec 30 h. Strona ute.com: 30 h. Proponuję 30 h („do 30 h”).

---

#### /skanery-unitech — zastosowania (`useCases`)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| Kasa: MS852 | „czyta karty lojalnościowe i kupony z ekranów” | DS-852: „loyalty cards, mobile payments and electronic coupons” | zgodne |
| Kasa: MS282e | „smukłą obudowę o masie 125 g” | DS-282: „Weight 125g”, szer. 47,5 mm | zgodne |
| Kasa: TS100 | „stoi na blacie i czyta kody pokazywane przed oknem” | DS-TS100 „countertops”, „hands-free” | zgodne |
| Kasa: MS250 | „czyta kody liniowe przyłożone do okna” | BR-250: „reading depth from contact to 90mm” | nadinterpretacja (zawęża zakres do kontaktu) |
| Kasa: MS838B, MS836B | „Bez przewodu przy kasie … z odbiornikiem 2,4 GHz” | DS-838B/836B: „USB dongle”, „from the checkout counter” | zgodne |
| Magazyn: MS852 LR | „do 21 m, a przewód Y zasila go w komputerach bez portu USB 3.0” | DS-LR 21 m; QSG `1184_MS852LR-QSG`: „Y cable is designed for the PC or notebook without USB 3.0 port” | zgodne |
| Magazyn: MS852B LR | „Bez przewodu, przez Bluetooth” | DS-LR (MS852B LR Bluetooth) | zgodne |
| EPA: ESD | „obudowę i przewód z tworzywa antystatycznego” | DS-P+ESD: „antistatic agent … including its cable” | zgodne |
| EPA: modele | „MS852 Plus ESD czyta kody drukowane, a MS852 DPM ESD kody grawerowane i nabijane”; „Bezprzewodowe odpowiedniki to MS852B Plus ESD i MS851B ESD” | DS-P+ESD; DS-DPM; DS-B+ESD; DS-851BESD | zgodne |
| Wolne ręce | „MS633 i MS626 Plus zakłada się na palec, a MS652 Plus na dwa palce”; „przez Bluetooth do terminala, smartfona lub komputera”; „łączy się też … WD200 Plus” | DS-633 „Finger Holder”; DS-626 „Ring Scanner”, „Velcro Strap”; DS-652 „MS652-AUDB00-SG (2 fingers design)”; ACC-WD „Scanner Options for WD200 Plus” | zgodne |

Niezgodności i propozycje:
1. Było „[MS250](…) czyta kody liniowe przyłożone do okna.” → ma być „[MS250](…) czyta kody liniowe z bliska, od przyłożenia do okna do 90 mm.” Dowód: BR-250 „from contact to 90mm”.

---

#### /skanery-unitech — „Co sprawdzić przed zakupem” (`uniqueInsights`)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| Wspólna obudowa MS85x | „87,8 × 71,6 × 177,7 mm, spust na 10 mln naciśnięć i klasę IP42” (MS852, Plus, LR, DPM ESD, Plus ESD, MS851 ESD) | DS-852, DS-852P+, DS-LR, DS-DPM, DS-P+ESD, DS-851ESD: „87.8 L x 71.6 W x 177.7 H (mm)”, „10 million times”, „IP42” | zgodne |
| Wspólne akcesoria | podstawka 5200-900009G, uchwyt 5200-900011G, etui 386793G, przewód ESD 1550-905920G – dla 6 przewodowych i 6 bezprzewodowych | `detail-*.txt` wszystkich 12 modeli zawierają te 4 PN; dla MS852 DPM ESD uchwyt 5200-900011G jest w `acc/acc-MS852DPM_ESD.xlsx` i `detail-MS852DPM_ESD.txt` (brak w `detail-MS852_DPM_ESD.txt`) | zgodne |
| ESD vs odporność | „sprawne po wyładowaniu 8 kV kontaktowym i 15 kV w powietrzu” | DS-852/852P+/LR: „Functional after 8K Contact and 15K Air” | zgodne |
| Tworzywo ESD | „wymieszane w masie obudowy i przewodu … nie ściera się jak powłoka … bez chloru” | DS-P+ESD: „internal mixed way”, „external additional anti-static … was wiped away”, „no containing Chlorine material” | zgodne |
| MS852 vs MS852B | „te same wymiary”; „2850 mAh na do 20 godzin”; „Bluetooth do 100 m”; „stację … w zestawie”; „213 g”; MS852 „147 g” | DS-852B: „2850mAh”, „Operating Time 20 hours”, „100m”, Package „Cradle”, „213g (without cradle)”, „87.8 L x 71.6 W x 177.7 H”; DS-852 „147g” | zgodne |
| Gwarancja | „Przewodowe MS85x i MS282e … 60 miesięcy …; bezprzewodowe MS852B, MS852B Plus, MS852B LR, MS852P, wersje ESD z Bluetooth i MS822B 36 miesięcy, MS250 24 miesiące, a MS836, MS838B, MS836B oraz skanery pierścieniowe i kieszonkowe 15 miesięcy” | ute.com „Hardware Warranty”: 60 – `detail-MS852/MS852PLUS/MS852LR/MS852_DPM_ESD/MS852_plus_ESD/MS851ESD/MS282e`; 36 – `detail-MS852B/MS852BPlus/MS852BLR/MS852P/MS852BPLUS_ESD/MS851BESD/MS822B`; MS250 – `detail-MS250.txt` „2-year warranty”; 15 – MS836, MS838B, MS836B, MS633, MS652PLUS, MS912PLUS, MS912_plus_2D, MS926; **MS626 Plus: pole „15 months”, ale zdanie „period of twelve months”** (`detail-MS626Plus.txt` l.314–316) | zgodne poza MS626 Plus (sprzeczność w źródle) |

Niezgodności i propozycje:
1. Gwarancja, ostatni fragment: było „a MS836, MS838B, MS836B oraz skanery pierścieniowe i kieszonkowe 15 miesięcy.” → ma być „a MS836, MS838B, MS836B, MS633, MS652 Plus, MS912 Plus, MS912 Plus 2D i MS926 15 miesięcy. Okres gwarancji MS626 Plus, MS838 i TS100 potwierdzamy przy zamówieniu.” Dowód: `detail-MS626Plus.txt` „Hardware Warranty 15 months” vs „a period of twelve months”.

Do decyzji właściciela:
- Wszystkie okresy pochodzą ze strony ute.com (centrala). Unitech dopisuje: „Our different regions have varying warranty terms” (każda strona `detail-*`), a instrukcje (np. `3488_MS838_UM`, `5765_MS633_Series_UM`) „The warranty period is varied from each country”. Strony eu.ute.com potwierdzają tylko część (MS852 60, MS852B 36, MS836 15, MS633 15). Warto potwierdzić okresy u Unitech Europe lub dystrybutora PL.

---

#### /skanery-unitech — porównania (`comparisons`)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| Tabela: matryca | MS852 „1280 × 960, rolling shutter”; Plus i LR „1280 × 800, global shutter” | DS-852; DS-852P+; DS-LR | zgodne |
| Tabela: odczyt specjalny | MS852 „OCR, DotCode”; Plus „OCR, DotCode, Digimarc”; LR „OCR, DotCode” | DS-852 („available to read OCR”, 2D „DotCode”); DS-852P+; DS-LR („OCR and DotCodes”) | zgodne |
| Tabela: zasięg | „UPC 100%: 4,6–49,5 cm”; „Code 39 20 mil: do 80 cm”; „od 7,6 cm do 21 m” | DS-852 „100% UPC 4.6 cm 49.5 cm”; DS-852P+ „20 mil Code 39 … 80 cm”; DS-LR | zgodne |
| Tabela: upadki | „2,1 m | 2,1 m | 1,8 m; 2,2 m w etui” | DS-852/852P+ „2.1M”; DS-LR „1.8M … (2.2M with protection case)” | zgodne |
| Tabela: temperatura | „od −10°C | od −10°C | od −20°C” | DS-852/852P+ „-10°C to 50°C”; DS-LR „-20°C … (MS852 LR)” | zgodne |
| Tabela: masa | „147 g | 165 g | 184 g” | DS-852 147 g; DS-852P+ „Weight 165g”; DS-LR „184g (MS852 LR)” | zgodne (MS852 Plus: patrz „Do decyzji”) |
| Plus ESD vs DPM ESD | Plus ESD „kody drukowane i z ekranów, OCR, DotCode i Digimarc”; DPM ESD „grawerowane, nabijane i drukowane atramentem … z odległości od 4 do 32 cm … krzyżowy celownik”; „Plus ESD ma interfejs USB, a DPM ESD USB w trybach HID i CDC” | DS-P+ESD „Host Interface supported USB”; DS-DPM „USB (HID; CDC)”, DOF 40–320 mm dla Code39 5/20 mil, EAN-13, DM 10 mil, QR 20 mil | zgodne, ale „4–32 cm” to głębia dla kodów testowych, nie dla znaków DPM – nadinterpretacja |
| MS836 vs MS250 | MS836 „szerokością odczytu 220 mm i głębią do 265 mm, w obudowie IP52”; MS250 „od zetknięcia do 90 mm, na szerokości 80 mm, i waży 83 g” | DS-836 „Scanning Width 220 mm”, „10mm-265mm”, „IP52”; BR-250 „Width of Field 80mm”, „83g” | zgodne |

Niezgodności i propozycje:
1. Było „…czyta kody grawerowane, nabijane i drukowane atramentem na elementach, z odległości od 4 do 32 cm, i ma krzyżowy celownik laserowy.” → ma być „…czyta kody grawerowane, nabijane i drukowane atramentem na elementach i ma krzyżowy celownik laserowy. Głębia odczytu kodów drukowanych wynosi od 4 cm (Data Matrix 10 mil) do 32 cm (Code 39 20 mil).” Dowód: DS-DPM tabela „Depth of Field” obejmuje tylko symbole drukowane; zakresu dla znaków DPM Unitech nie podaje.

Do decyzji właściciela:
- Masa MS852 Plus: DS-852P+ i `detail-MS852PLUS.txt` podają 165 g, a instrukcje `306_MS852Plus_UM_V1_6` (l.652) i `2281_MS852Plus_UM` (l.633) 147 g. Strona używa 165 g (karta katalogowa i WWW). Zostawić.

---

#### /skanery-unitech — FAQ (`unitechScannerFaq`, 7 pytań)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| ESD-safe: rezystancja | „rezystancji powierzchniowej 10⁵–10⁹ Ω/sq” | DS-P+ESD/DS-851ESD/DS-DPM: „withstand ESD up to 10^5~10^9 ohms per square” | zgodne |
| ESD-safe: miejsca i modele | „cleanroomach … strefach EPA”; przewodowe MS852 Plus ESD, MS852 DPM ESD, MS851 ESD; Bluetooth MS852B Plus ESD, MS851B ESD | DS-P+ESD „cleanrooms and static-safe manufacturing”, „ESD protected area”; DS-B+ESD i DS-851BESD Bluetooth | zgodne |
| ESD-safe: standardowe | „sprawne po wyładowaniu 8 kV … 15 kV … ale nie są wersjami ESD-safe” | DS-852 „Functional after 8K Contact and 15K Air” | zgodne |
| DPM: technologie, celownik, matryca | „grawerowane laserem, nabijane mikroudarem i drukowane atramentem”; „krzyżowy celownik laserowy i matrycę 1280 × 800” | DS-DPM „laser etched marking, dot peening and ink jet printing”, „Red cross laser aiming”, „1280 X 800 resolution” | zgodne |
| DPM: odległość | „kody czyta z odległości od 4 do 32 cm, zależnie od rodzaju i wielkości kodu” | DS-DPM DOF 40–320 mm tylko dla kodów drukowanych | nadinterpretacja (jak w porównaniu) |
| DPM: MS852B Plus ESD; „Oba … ESD-safe” | — | DS-B+ESD „Support DPM barcodes”, „ESD-safe” | zgodne |
| Największa odległość | „MS852 LR i MS852B LR … do 21 m. Zasięg dotyczy odczytu ze spustem, a w trybach automatycznych jest ograniczony”; „Code 39, 100 mil … do 4,57 m … MS851 ESD i MS851B ESD” | DS-LR 21 m; FAQ `1856_FAQ-MS852_website`: „When in automatic trigger mode … the reading distance … is limited”; DS-851ESD/DS-851BESD 457,2 cm | zgodne |
| MS852 vs Plus | „1280 × 960 … rolling shutter … 147 g”; Plus „1280 × 800 … global shutter, która toleruje ruch … Digimarc, waży 165 g i jest w wersjach standardowej oraz High Density. Oba modele czytają OCR i DotCode” | DS-852; DS-852P+ „excellent motion tolerance design”, „Digimarc”, „165g”; DotCode i OCR w obu DS | zgodne poza **„High Density” – brak w dokumentach Unitech** |
| Podstawka: brak przełączania | „MS852-AUCB00-SG, MS852-VUCB00-SG i MS852-ZUCB00-SG nie przełączają trybu po włożeniu do podstawki” | `detail-MS852PLUS.txt`: „User's Manual V1.6 ( for non Auto Switching only ) P/N: MS852-VUCB00-SG/MS852-ZUCB00-SG”; UM `3941_MS852_UM_V1_4_for_MS852_AXXXXX_XX` (dla MS852-AUCB00-SG) bez funkcji Auto Switching; wersja z przełączaniem to osobny model i podstawka 5200-900010G (UM `307_MS852_UM_(Auto_Switching)` l.654) | zgodne (DS-852 i DS-852P+ w cechach piszą „Auto switching … with its stand” – patrz „Do decyzji”) |
| Podstawka: tryb kodem; 5200-900009G | „Tryb prezentacyjny włącza się kodem konfiguracyjnym …, a podstawka 5200-900009G utrzymuje skaner na blacie” | UM 3941 „Presentation (Blink)”; `6119_MS85x_Series_Hand_Free_Stand_QSG` (stojak bez elektroniki); `detail-MS852_plus_ESD.txt` „Standard Hands Free Stand (PN#5200-900009G)” | zgodne |
| MS852B w stacji | „po włączeniu kodem ustawień automatycznego trybu prezentacyjnego czyta w stacji bez naciskania spustu” | UM `3878_MS852B_UM_V1_7` 1.9: „performing this mode automatically when scanner is on the cradle”, domyślnie „Disable*” | zgodne |
| Podłączenie | „przewodem USB, a wersja MS838-2RCB00-SG przez RS-232”; MS852B „przez stację … albo bezpośrednio przez Bluetooth (profile HID i SPP)”; „MS852P, MS838B, MS836B i MS822B pracują z odbiornikiem radiowym 2,4 GHz”; „kodami konfiguracyjnymi z instrukcji obsługi” | DS-838; DS-852B „Serial Port and HID profiles”; DS-852PP „dongle”; DS-838B/836B „USB dongle”; DS-822B „Cradle integrated with 2.4G Dongle” | zgodne |
| Gwarancja | listy 60 / 36 / 24 / 15 miesięcy; „MS838 i TS100 potwierdzamy przy zamówieniu” | jak w „uniqueInsights”; MS838 (`detail-MS838.txt`: „15 months” vs „thirty-six months”) i TS100 („15 months” vs „two years”, też `eu-TS100.txt`) – strona ich nie obiecuje; **MS626 Plus: „15 months” vs „twelve months”** | zgodne poza MS626 Plus |

Niezgodności i propozycje:
1. FAQ DPM: było „…a kody czyta z odległości od 4 do 32 cm, zależnie od rodzaju i wielkości kodu.” → ma być „…a kody drukowane czyta z odległości od 4 do 32 cm, zależnie od rodzaju i wielkości kodu.” Dowód: DS-DPM „Depth of Field” – Code39, EAN-13, Data Matrix, QR (symbole drukowane).
2. FAQ MS852 vs Plus: było „…waży 165 g i jest w wersjach standardowej oraz High Density.” → ma być „…waży 165 g i jest w dwóch wersjach optyki: MS852-VUCB00-SG i MS852-ZUCB00-SG.” Dowód: brak „High Density” w dokumentach Unitech.
3. FAQ gwarancja: było „15 miesięcy mają MS836, MS838B, MS836B, MS633, MS652 Plus, MS626 Plus, MS912 Plus, MS912 Plus 2D i MS926. Okres gwarancji MS838 i TS100 potwierdzamy przy zamówieniu.” → ma być „15 miesięcy mają MS836, MS838B, MS836B, MS633, MS652 Plus, MS912 Plus, MS912 Plus 2D i MS926. Okres gwarancji MS626 Plus, MS838 i TS100 potwierdzamy przy zamówieniu.” Dowód: `detail-MS626Plus.txt` l.314–316.

Do decyzji właściciela:
- Auto-switching: DS-852 (RevD) i DS-852P+ (RevE) w cechach piszą „Auto switching function between trigger mode and presentation mode with its stand”, ale strona ute.com przypisuje PN …UCB00-SG do wersji „non Auto Switching”, a instrukcja dla MS852-AUCB00-SG nie ma tej funkcji. Odpowiedź FAQ („Nie”) jest bezpieczniejsza i zgodna z PN. Zostawić.

---

#### /skanery-unitech — pozostałe teksty (`contactText`, `expertAuthority`, `technicalDeepDive`, `sectionHeadings`)

| element | na stronie | dokument / zasada | ocena |
|---|---|---|---|
| contactText | „Podaj rodzaj kodów, odległość odczytu i środowisko pracy. Dobierzemy…” | zasada TAKMA: bez drugiej osoby i trybu rozkazującego do klienta | niezgodne ze stylem (wzorzec powtarza się na innych stronach marki: Bluebird, ProGlove, Unitech terminale/tablety) |
| expertAuthority | „Pomożemy dobrać… Sprawdzimy zgodność podstawek, stacji, baterii, przewodów i etui…” | 1. os. l. mn. – dozwolone | zgodne |
| technicalDeepDive | „Zestawienie obejmuje oferowane modele. Szczegóły wersji i numery PN są na kartach produktów.” | — | zgodne |
| słowa zakazane | brak „autoryzowany”, emoji, „według producenta”, „karta katalogowa podaje” (sprawdzone skryptem) | — | zgodne |

Niezgodności i propozycje:
1. contactText: było „Podaj rodzaj kodów, odległość odczytu i środowisko pracy. Dobierzemy skaner Unitech, interfejs, podstawkę i przewód.” → ma być „W zapytaniu wystarczy rodzaj kodów, odległość odczytu i środowisko pracy. Dobierzemy skaner Unitech, interfejs, podstawkę i przewód.” (wzór zdania już istnieje w innym `contactText` w `src/data`). Niski priorytet.

---

#### /terminale-unitech — wpisy WD200 Plus (`unitech-category.ts` l.4, 12, 20, 48)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| FAQ l.4 | „Komputer noszony WD200 Plus jest w kategorii terminale naramienne.” | — (nawigacja) | zgodne |
| definition l.20 | „Komputer noszony WD200 Plus z ekranem 3,54 cala…” | DS-WD: „3.54" Wearable Computer” | zgodne |
| tabela l.48: rola | „Komputer noszony na nadgarstku” | DS-WD „Wearable Computer”; akcesorium „Wrist Holder” | zgodne |
| tabela l.48: ekran | „3,54 cala, 500 nitów” | DS-WD: „3.54-inch … 500 nits brightness” | zgodne |
| tabela l.48: odczyt | „Aparat 16 MP lub skaner Bluetooth” | DS-WD: „16MP camera captures barcodes”; ACC-WD „Scanner Options for WD200 Plus” | zgodne |
| tabela l.48: sieć | „Wi-Fi 6” | DS-WD: „WiFi 6 (2x2 MIMO)” | zgodne |
| tabela l.48: bestFor | „Kompletacja z wolnymi rękami; Android 13, IP68.” | DS-WD: „intensive picking environments where hands-free operation is essential”, „Android 13 with GMS”, „IP68” | zgodne |
| FAQ l.12 gwarancja (dotyczy też WD200 Plus w tabeli) | „12 miesięcy” | `detail-WD200Plus.txt` i `eu-WD200Plus.txt`: „Hardware Warranty 12 months … twelve months” | zgodne |

Niezgodności i propozycje: brak.

---

#### /terminale-naramienne — wpisy WD200 Plus (`wearable-terminal-category.ts`)

| element | na stronie | dokument | ocena |
|---|---|---|---|
| seoTitle / seoDescription | „Unitech WD200 Plus do kompletacji” | DS-WD „intensive picking environments” | zgodne |
| tabela: rola | „Komputer noszony do kompletacji z wolnymi rękami.” | DS-WD (jw.) | zgodne |
| tabela: przeznaczenie | „Magazyn, handel, logistyka, transport, place przeładunkowe” | DS-WD: „warehouse, retail, logistics, transportation, and shipping yard” | zgodne |
| tabela: ekran | „Ekran dotykowy 3,54 cala” | DS-WD „3.54” Color TFT-LCD”, „capacitive touch screen” | zgodne |
| tabela: skanery | „Bluetooth: MS633, MS652 Plus, MS912 Plus, MS912 Plus 2D, MS926; aparat 16 MP odczytuje kody” | ACC-WD l.59–71 (PN MS633-DUBU00-SG, MS633-OUBU00-SG, MS652-AUDB00-SG, MS926-UUBU00-SG, MS912-2UBB00-SG, MS912-FUBB00-TG); `eu-WD200Plus.txt` l.387–393 | zgodne (lista Unitech zawiera też MS622 i MS916, których nie ma w ofercie) |
| tabela: złącza | „USB-C (USB 2.0), styki POGO do stacji” | DS-WD: „USB 2.0 (Type-C) support USB OTG”, „Interface USB Type-C/ Pogo Pin”; UM-WD „POGO PIN Charging via Cradle” | zgodne |
| tabela: aparat | „16 MP z lampą” | DS-WD: „16 MP Rear and Flash Light” | zgodne |
| tabela: temperatura | „−20 do 50 °C” | DS-WD: „Operating temperature -20°C to 50°C” | zgodne |
| definition | „ma ekran 3,54 cala i aparat 16 MP; nie ma wbudowanego skanera, więc kody czyta aparatem albo skanerem Unitech MS633, MS652 Plus, MS912 Plus, MS912 Plus 2D lub MS926” | DS-WD: w specyfikacji brak silnika skanującego (jest tylko „Camera 16 MP”); UM-WD 3.1 „Barcode Setting” wymienia tylko „USS Camera”; ACC-WD lista skanerów | zgodne (pośrednio – Unitech nie pisze wprost „bez silnika”) |
| FAQ l.104 | „nie ma silnika skanującego: kody czyta jego aparat 16 MP albo sparowany skaner Bluetooth Unitech” | jw. | zgodne (pośrednio) |
| FAQ l.105 | „W pudełku … są tylko komputer, przewód USB-C i skrócona instrukcja, więc uchwyt na nadgarstek oraz zasilacz albo stację zamawia się osobno” | UM-WD 1.1: „WD200 / USB-C Cable / Quick Start Guide”, „Optional Accessories: 4-slot Cradle, Ring Scanner, Wrist Holder”; DS-WD „Optional Accessories: Wrist Holder … 4-Slot Terminal Charging Cradle”; zasilacza brak w zestawie | zgodne |
| sekcje ogólne strony (buyingGuide „Bateria — wersja 3500 mAh … 5000 mAh”, „Skaner — skaner Bluetooth paruje się z terminalem przez NFC”, howToSteps „WT5400 lub WT6400”) | dotyczą tylko Zebra | DS-WD: „embedded 2500mAh battery”; FAQ `6992_FAQ_WD200Plus`: „up to 11 hours” | uwaga redakcyjna – nie są to zdania o WD200 Plus, ale przy czterech modelach na stronie mogą sugerować wymienną baterię |

Niezgodności i propozycje:
1. (niski priorytet) buyingGuide „Bateria”: było „Bateria — wersja 3500 mAh starcza na zmianę, wersja 5000 mAh wydłuża pracę, a w WT6400 umożliwia pracę w mroźni.” → ma być „Bateria — w Zebra WT5400 i WT6400 wersja 3500 mAh starcza na zmianę, a wersja 5000 mAh wydłuża pracę i w WT6400 umożliwia pracę w mroźni. Unitech WD200 Plus ma wbudowaną baterię 2500 mAh.” Dowód: DS-WD „Long-lasting embedded 2500mAh battery”.

Do decyzji właściciela:
- ERS opisuje WD200-0F6FRM3G jako „Android 14 – 4G and Wi-Fi” (`ers-acc-WD200-0F6FRM3G.txt` l.33), a DS-WD podaje Android 13 i tylko Wi-Fi; Levata: „Android 13 … WiFi”. Strony TAKMA trzymają się DS-WD – zostawić.

---

#### public/llms.txt — sekcje Unitech (l.19, 69, 74, 75, 399–428)

| element | w pliku | dokument | ocena |
|---|---|---|---|
| l.19, 69, 74, 75 | listy marek i modeli, URL `/skanery-unitech`, `/terminale-naramienne`, `/skanery-kodow-kreskowych/pierscieniowe` | — | zgodne |
| l.400 opis zbiorczy | USB, RS-232 w MS838, Bluetooth / 2,4 GHz, ESD, DPM, LR, prezentacyjny | jak wstęp strony | zgodne |
| l.401 MS852 (MS852-AUCB00-SG) | „1280 × 960 z OCR, kody z ekranów, 147 g, IP42, upadki z 2,1 m” | DS-852; PN w UM 3941 l.4 | zgodne |
| l.402 MS852 Plus (VUCB00-SG standard, ZUCB00-SG High Density) | „global shutter, odczyt w ruchu, DotCode, Digimarc i OCR, 165 g” | DS-852P+; PN w `detail-MS852PLUS.txt`; „High Density” – brak u Unitech | PN i fakty zgodne; **„High Density” – brak w dok. Unitech** |
| l.403 MS852 LR (MS852-OUCB00-SG) | „od 7,6 cm do 21 m, praca od −20°C, przewód USB i przewód Y” | DS-LR; PN: ERS, BarcodeFactory | zgodne |
| l.404 MS852 DPM ESD (MS852-XUCB00-LG) | „krzyżowy celownik laserowy, 60 FPS, USB HID i CDC” | DS-DPM; PN `detail-MS852_DPM_ESD.txt` „for MS852-XUCB00-LG” | zgodne |
| l.405 MS852 Plus ESD (MS852-ZUCB00-LG) | „skaner 2D High Density w wersji ESD-safe, OCR, DotCode i Digimarc, USB” | DS-P+ESD; PN: ERS, Levata | PN zgodny; **„High Density” – brak w dok. Unitech** |
| l.406 MS851 ESD (MS851-SUCB00-LG) | „104 skany na sekundę, odczyt do 4,57 m, 147 g” | DS-851ESD (4,57 m tylko Code 39 100 mil); PN tylko BarcodeFactory i API stanów | liczby zgodne; **„odczyt do 4,57 m” bez warunku** |
| l.407 MS838 (2UCB0S-SG z podstawką, 2RCB00-SG RS-232) | „IP52, upadki z 1,5 m, tryb prezentacyjny” | DS-838; PN: ERS, BarcodeFactory, Levata | zgodne |
| l.408 MS282e (MS282-3UCB00-SG) | „125 g, tryb ręczny i prezentacyjny, USB” | DS-282; PN: ERS, BarcodeFactory | zgodne |
| l.409 MS836 (MS836-SUCBS0-SG) | „trzy tryby pracy, szerokość odczytu 220 mm, IP52” | DS-836; PN `detail-MS836.txt`, `eu-MS836.txt` | zgodne |
| l.410 MS250 (MS250-CUCB00-DG) | „odczyt do 90 mm, 200 skanów na sekundę, 83 g” | BR-250; PN: ERS, BarcodeFactory | zgodne |
| l.411 TS100 (TS100-SUCB00-SG) | „okno odczytu 50° × 35°, auto-sensing 60 fps, podstawa kątowa, USB” | DS-TS100; UM TS100 „Angle Stand”; PN FAQ `4992_FAQ-TS100` | zgodne |
| l.412 MS852B (MS852-AUBB0C-SG) | „Bluetooth do 100 m …, stacja ładująca w zestawie, 2850 mAh na do 20 godzin, 213 g” | DS-852B; PN tylko BarcodeFactory i API stanów | zgodne |
| l.413 MS852B Plus (VUBB0C-SG standard, ZUBB0C-SG HD) | „global shutter, OCR, DotCode i Digimarc, stacja w zestawie” | DS-852B+ (Package „Cradle”); HD: ERS i BarcodeFactory dla ZUBB0C-SG, brak u Unitech; VUBB0C-SG tylko w API stanów | fakty zgodne; **„HD” – brak w dok. Unitech** |
| l.414 MS852B LR (MS852-OUBB0C-SG) | „odczyt do 21 m, stacja w zestawie” | DS-LR; `detail-MS852BLR.txt` „Cradle”; PN tylko BarcodeFactory i API stanów | zgodne |
| l.415 MS852P (MS852-AUPBGC-SG) | „2,4 GHz i odbiornikiem USB (10 m), OCR-A i OCR-B, stacja i zasilacz w zestawie” | DS-852PP; UM `4709_MS852P_UM` 1.1 „Cradle”, „Power Adaptor”; PN: Levata, BarcodeFactory | zgodne |
| l.416 MS852B Plus ESD (MS852-ZUBB0C-LG) | „High Density z Bluetooth … ESD-safe, kody DPM, stacja w zestawie” | DS-B+ESD; PN: ERS, Levata | fakty zgodne; **„High Density” – brak w dok. Unitech** |
| l.417 MS851B ESD (MS851-SUBB0C-LG) | „ponad 30 godzin pracy, stacja w zestawie” | DS-851BESD: spec „>30 hours”, cechy „up to 30 hours”; PN tylko API stanów | **„ponad” – sprzeczność „>”/„up to”** |
| l.418 MS822B (MS822-2UBU02-SG) | „stacją z odbiornikiem 2,4 GHz (100 m), Bluetooth 4.2 i USB-C, IP52, ponad 40 godzin” | DS-822B: spec „Over 40 hours”, cechy „Up to 40 hours”; PN: BarcodeFactory, Levata | **„ponad 40” – sprzeczność**; reszta zgodna |
| l.419 MS838B (MS838-2UBB0D-SG) | „odbiornikiem USB 2,4 GHz (100 m), Bluetooth i USB-C, pamięć na 40 000 kodów EAN, ponad 16 godzin” | DS-838B „40,000 EAN codes”; czas jw.; PN: ERS, BarcodeFactory, Levata | **„ponad 16” – sprzeczność**; reszta zgodna |
| l.420 MS836B (MS836-SUBB0D-SG) | „100 skanów na sekundę, …, ponad 30 godzin” | DS-836B; PN: BarcodeFactory, Levata | **„ponad 30” – sprzeczność** |
| l.421 MS633 (DUBU00-SG, OUBU00-SG LR) | „56 g (LR 67 g), wymienny akumulator 600 mAh” | DS-633 „Changeable and rechargeable battery pack”, „600mAh”; PN ACC-WD | zgodne |
| l.422 MS652 Plus (MS652-AUDB00-SG) | „dwóch palcach, Bluetooth do 100 m, parowanie NFC, 95 g” | DS-652 (PN w nagłówku) | zgodne |
| l.423 MS626 Plus (MS626-PUBB00-SG) | „Bluetooth 5.0, 19,4 g, 120 klatek na sekundę” | DS-626; PN tylko API stanów | zgodne |
| l.424 MS912 Plus 2D (MS912-2UBB00-SG) | „Bluetooth 5.0, 30,7 g” | DS-912-2D; PN ACC-WD | zgodne |
| l.425 MS912 Plus (MS912-FUBB00-TG) | „650 skanów na sekundę, 30,2 g” | DS-912; PN ACC-WD | zgodne |
| l.426 MS926 (MS926-UUBU00-SG) | „OLED 1″, Bluetooth i NFC, 63 g” | DS-926; PN `detail-MS926.txt` | zgodne |
| l.427 WD200 Plus (WD200-0F6FRM3G) | „Android 13 (GMS), 3,54″, Wi-Fi 6, HF/NFC, 16 MP, bez wbudowanego silnika skanującego (…Bluetooth), IP68. Mocowanie i zasilacz lub stacja sprzedawane osobno” | DS-WD „HF Support HF/NFC”; UM-WD 1.1; PN: ERS, Levata | zgodne |
| l.428 akcesoria | lista rodzajów akcesoriów | — (karty akcesoriów poza zakresem D) | bez oceny |

Niezgodności i propozycje:
1. l.402: było „(PN MS852-VUCB00-SG standard, MS852-ZUCB00-SG High Density)” → ma być „(PN MS852-VUCB00-SG, MS852-ZUCB00-SG – dwie wersje optyki)” – albo zgodnie z decyzją właściciela o HD.
2. l.405: było „skaner 2D High Density w wersji ESD-safe” → ma być „skaner 2D z migawką global shutter w wersji ESD-safe”.
3. l.413: było „(PN MS852-VUBB0C-SG standard, MS852-ZUBB0C-SG HD)” → ma być „(PN MS852-VUBB0C-SG, MS852-ZUBB0C-SG – dwie wersje optyki)”.
4. l.416: było „skaner 2D High Density z Bluetooth” → ma być „skaner 2D z Bluetooth i migawką global shutter”.
5. l.406: było „odczyt do 4,57 m” → ma być „odczyt kodu Code 39 100 mil do 4,57 m”. Dowód: DS-851ESD DOF.
6. l.417/418/419/420: było „ponad 30 / ponad 40 / ponad 16 / ponad 30 godzin pracy” → ma być „do 30 / do 40 / do 16 / do 30 godzin pracy”. Dowód: cechy w DS i strony ute.com „up to … hours”.

Do decyzji właściciela:
- PN bez dokumentu Unitech i bez dwóch stron dystrybutorów w zebranych plikach: MS851-SUCB00-LG, MS852-AUBB0C-SG, MS852-OUBB0C-SG (po jednym: BarcodeFactory), MS852-VUBB0C-SG, MS851-SUBB0C-LG, MS626-PUBB00-SG (żadnej strony; są tylko w API stanów TAKMA jako „found: true”). Nic im nie przeczy, ale nie spełniają reguły z briefu – do potwierdzenia przez koordynatora.

---

#### Miejsca o podwyższonym ryzyku — wynik

| punkt | wynik dla zakresu D |
|---|---|
| Gwarancje (wszystkie modele) | 60/36/24/15 miesięcy zgodne ze stroną ute.com, poza **MS626 Plus** (pole „15 months”, zdanie „twelve months”) – strona obiecuje 15 mies. Do przesunięcia do grupy „potwierdzamy przy zamówieniu”. |
| MS838 i TS100 bez okresu | Zgodne: FAQ nie obiecuje okresu („potwierdzamy przy zamówieniu”); sprzeczności WWW: MS838 „15 months”/„thirty-six months”, TS100 „15 months”/„two years” (też `eu-TS100.txt`). |
| Zasięgi MS633 LR | Na stronach zbiorczych i w llms.txt brak zasięgu odczytu LR (tylko masa 56/67 g i Bluetooth >50 m – zgodne). Informacyjnie: DS-633 „Up to 12M (LR version)” vs tabela DOF „200mil QR … 1800cm”. |
| „High Density” (MS852 Plus i wersje ESD) | **Brak w dokumentach Unitech** – 4 miejsca na /skanery-unitech i 4 w llms.txt; potwierdzają tylko dystrybutorzy (ERS, Levata, BarcodeFactory). |
| „ponad 16/30/40 h” | **Sprzeczność**: tabele spec „Over/>”, cechy w DS i strony ute.com „up to”; DS-836B ma w nagłówku „16 hours”. Brand page: MS838B, MS836B; llms: MS851B ESD, MS822B, MS838B, MS836B. Proponowane „do … h”. |
| DotCode w MS852 / MS852 Plus | Zgodne: DS-852 (2D „DotCode”), `detail-MS852.txt` l.267; DS-852P+ „Dot Code”. |
| DPM | MS852 DPM ESD i MS852B Plus ESD zgodne; **„4–32 cm” podane jako odległość odczytu kodów DPM** – w DS to głębia dla kodów drukowanych. |
| ESD 8/15 kV | Zgodne dla MS852, MS852 Plus, MS852 LR („Functional after 8K Contact and 15K Air”). |
| Komunikacja Bluetooth / 2,4 GHz | Zgodne (100 m Bluetooth w MS852B*, 100 m 2,4 GHz w MS838B/836B/822B, 10 m MS852P, >50 m MS633, 100 m MS652 Plus, 20 m MS912 Plus 2D). |
| Reguła PN („drugi znak oznacza interfejs”) | Na stronach zbiorczych i w llms.txt jej nie ma. Jest na karcie MS852 (poza zakresem D); FAQ Unitech `1856_FAQ-MS852_website` podaje ją tylko dla MS852/MS852+ („MS852-2"R"CB00-SG for RS-232”). Nie uogólniać na inne serie (np. WD200-0F6FRM3G). |
| WD200 Plus bez silnika, USB-C | Zgodne pośrednio: DS-WD bez silnika skanującego, tylko aparat 16 MP; USB-C (USB 2.0) + POGO; w pudełku komputer, przewód USB-C, QSG. |
| Nazwy silników | Na stronach zbiorczych i w llms.txt nie ma nazw silników – OK (nazwy typu „N6703” są tylko u dystrybutorów). |
| MS926 przyciski | Brand page „3 przyciski” – zgodne (DS-926 „3 keys: Page up, Page down, Scan with power”). |
| Zestaw MS852B LR / MS838-2UCB0S-SG | llms.txt: „stacja w zestawie” (MS852B LR) – zgodne z `detail-MS852BLR.txt`; „MS838-2UCB0S-SG USB z podstawką” – ERS i BarcodeFactory. |
| Parowanie MS852P (MAC), obrót spustu MS633, podkładki 386268G/386286G, MS836-SUCBS0-SG, złącze MS912-FUBB00-TG, podstawka 5200-900014G, blok „Wymagane” WD200 Plus | Poza zakresem D (brak takich twierdzeń na stronach zbiorczych i w llms.txt). |

#### Podsumowanie

- Sprawdzone strony/bloki: 4 (/skanery-unitech z metadanymi z `products.ts`; /terminale-unitech – wpisy WD200 Plus; /terminale-naramienne – wpisy WD200 Plus; `public/llms.txt` – sekcje Unitech). `brand-category-content.ts` i `subcategory-content.ts` nie mają własnych tekstów o Unitech (tylko mapowanie).
- Niezgodności do poprawy: 24 miejsca w 8 grupach (High Density ×8, „ponad X h” ×6, gwarancja MS626 Plus ×2, 4,57 m bez warunku ×3, DPM 4–32 cm ×2, „Długie kody” ×1, MS250 „przyłożone do okna” ×1, contactText „Podaj” ×1); plus 1 uwaga redakcyjna na /terminale-naramienne (bateria).
- Najważniejsze 5:
  1. „High Density” przy MS852 Plus, MS852 Plus ESD, MS852B Plus ESD (strona marki) i MS852B Plus (llms.txt) – brak w dokumentach Unitech.
  2. Gwarancja MS626 Plus 15 mies. – strona ute.com sama sobie przeczy (15 vs 12 miesięcy).
  3. „ponad 16 h / 30 h / 40 h” – dokumenty Unitech piszą też „up to”; DS-836B ma w nagłówku 16 h.
  4. MS851 ESD: „Długie kody liniowe” to błędne tłumaczenie „long range”; „do 4,57 m” bez warunku Code 39 100 mil (tabela, llms).
  5. DPM: „od 4 do 32 cm” podane jako odległość odczytu kodów DPM; w DS to głębia dla kodów drukowanych.

