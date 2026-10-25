# Weryfikacja V2 po wdrożeniu — karty produkcyjne a dokumenty producentów (25.10.2026)

Zakres V2: Honeywell Xenon Ultra 1960h / 1962h, Socket Mobile DuraScan D745 / D765, Datalogic Gryphon GD4690 / GD4620 / GBT4600 / GM4600 HC, Newland HR33 Marlin AI i HR23 Dorada AI White (przewodowe i Bluetooth), ProGlove LANA, zmieniona karta Honeywell Voyager XP 1472g oraz akcesoria HC z tych kart (Honeywell 46-00526, CCB-U00-H-KIT, CCB-ULTRA-HORIZ-HC; Datalogic WLC4690-HC-BT / -433, CC / PA / BA-WLC4690-HC, 90A052278, 90A052353, STD-G041-WH, HLD-G041-WH; Newland NLS-STD23-33-SA-W) i bateria Honeywell BAT-SCN11 (zmieniona w audycie Q). Razem 28 stron.
Sprawdzono stronę publiczną https://www.takma.com.pl (wdrożenie z Gita, commit 711a3dbf). `$SP` = katalog roboczy sesji (kopie dokumentów, zrzuty i surowe dane poza repozytorium).

## Metoda
- Playwright, 1440 px, `wait_until='load'` + 3 s; kliknięte „Pokaż niedostępne warianty”, „Pokaż wszystkie (N)” w specyfikacji i „Pokaż pozostałe” w akcesoriach, otwarte wszystkie `<details>` (FAQ); treść dymków atrybutów odczytana z DOM po najechaniu na „?”; zebrane JSON-LD, atrybuty `alt`, wymiary zdjęć, wszystkie odnośniki; przełączona każda miniatura galerii. Tekst stron: `$SP/hc3/weryfikacja/<slug>.txt`, dane: `<slug>.json`, zrzuty 1440 px (pełna strona): `<slug>.png`.
- Zgodność wdrożenia z repozytorium: każde zdanie opisu, każda pozycja specyfikacji, zastosowania, FAQ, nazwy plików, PN i atrybuty wariantów, dymki i opisy zdjęć z danych commitu 711a3dbf występują na stronie produkcyjnej bez zmian (shortDescription i nazwy wariantów strona pokazuje tylko w meta / JSON-LD — zgodnie z szablonem).
- Zdanie po zdaniu z dokumentami producenta (EN rozstrzyga). Źródła — w kolumnie „Dokument producenta”; pliki PDF z kart są tymi samymi plikami, co kopie producenta (porównanie bajtowe dla LANA; dla pozostałych rozmiar i rewizja).
- Ceny i dostępność: `/api/stock` (2 wywołania 25.10, 11:28; drugie rozstrzyga; `$SP/hc3/weryfikacja/api/`), 38 PN. Odnośniki i zdjęcia: 172 adresy (karty, kategorie, PDF, zdjęcia) — wszystkie HTTP 200 bez przekierowań; rozmiary 21 plików PDF zgodne z deklarowanymi.

## Wynik
- 28 stron: HTTP 200; treść na produkcji = commit 711a3dbf.
- Ceny i dostępność na stronie = API dla 38 PN (cena główna = najtańszy dostępny wariant, np. D745 pokazuje CX3861-2892; GM4600 HC — GM4600-HC-433-HP). NLS-HR3300-V2-S5-W ma w API `on-order` (0 szt. w magazynach, 18 w drodze): strona pokazuje „Niedostępny” i „W drodze: 18 szt.”, JSON-LD `OutOfStock` — to logika szablonu (`on-order` = „Niedostępny”), zgodna z API.
- JSON-LD Product: nazwa, marka, sku/mpn, ceny i dostępność ofert zgodne z treścią i API na wszystkich 28 stronach.
- Galerie: kolejność miniatur = kolejność zdjęć, każda miniatura przełącza zdjęcie główne; zdjęcia pokazują właściwe modele i kolory (arkusze kontrolne `$SP/hc3/weryfikacja/sheet-*.jpg`), opisy `alt` odpowiadają ujęciom.
- W pełni zgodnych: 22 strony (w tym 6 akcesoriów Datalogic, które nie mają zdjęcia). Poprawki: 6 kart (1960h, 1962h, GD4620 HC, GM4600 HC, HR23 Dorada AI Corded White, Voyager XP 1472g) i 1 zdanie w treściach marki Honeywell.

## Poprawki (gałąź `weryfikacja/skanery-hc-v2`)

| ID | Karta / plik | Pole | Było (na produkcji) | Jest | Źródło | Kategoria |
|---|---|---|---|---|---|---|
| V2-01 | honeywell-xenon-ultra-1960h | description | „Skaner ma tryby ograniczające hałas przy pacjencie: Patient Do-Not-Disturb, opcjonalną wibrację i Scan Lamp…” | „Skaner ma tryby pracy dbające o komfort pacjenta: …” | karta 1960h s. 1: „to ensure maximum patient comfort … Patient Do-Not Disturb, Vibration, and Scan Lamp”; Scan Lamp dotyczy światła, nie dźwięku | NIEPRECYZYJNE |
| V2-02 | honeywell-xenon-ultra-1962h | faq (bateria czy superkondensator) | „Ładuje się w niecałą minutę…” | „Z zasilaczem ładuje się w niecałą minutę (ze zwykłego portu USB do 4 min)…” | karta 1962h s. 1: „less than four minutes via the USB Port (under 60 seconds when using a powered USB port or external wall adapter)” | NIEPRECYZYJNE |
| V2-03 | datalogic-gryphon-gd4620-hc | description | „Datalogic przeznacza wersję HD do kodów zwartych i złożonych.” | „Wersja HD jest przeznaczona do kodów zwartych i złożonych.” | strona serii Gryphon 4600: „High Density (HD) for compact, complex codes”; notatka o źródle (AGENTS.md) | STYL |
| V2-04 | datalogic-gryphon-gm4600-hc | faq (GM4600 HC a GBT4600 HC) | „GM4600 HC zawsze wymaga bazy WLC4690-HC-433.” | „GM4600 HC przesyła dane wyłącznie przez bazę radiową STAR 433 MHz; w wersji HC jest to WLC4690-HC-433.” | karta Gryphon 4600 (STAR, „Max. Readers per Radio Receiver”), e-katalog (bazy 433 MHz w wersji White HC i Black) — wyłączność jednej bazy nie wynika z dokumentów | NIEPRECYZYJNE |
| V2-05 | newland-hr23-dorada-ai-white | description | „…przy kodach uszkodzonych, nieczytelnych, odblaskowych…” | „…przy kodach uszkodzonych, zniekształconych, odblaskowych…” | karta HR23 Dorada AI Corded White s. 1: „damaged or distorted … reflective or curved surfaces” | NIEPRECYZYJNE |
| V2-06 | honeywell-voyager-xp-1472g | description, specifications („Maks. skanerów na bazę”), faq („Ile skanerów obsługuje jedna baza CCB01?”) | „Baza CCB01 obsługuje do 7 skanerów”; spec „7” | „Do bazy CCB01 można przypisać do 3 skanerów”; spec „3 (tryb Multiple Scanner Operation)”; FAQ: czwarty skaner dopiero po odłączeniu jednego z trzech | User Guide Voyager XP 147x s. 59: „Multiple Scanner Operation Mode allows you to link up to 3 scanners to one base”; s. 54 („up to 3 scanners”) | SPRZECZNE |
| V2-07 | honeywell-voyager-xp-1472g | description, faq (zasięg Bluetooth) | „Tryb Automatic Batch Mode buforuje kody…”, „Skaner automatycznie buforuje kody…” | „Po włączeniu trybu Automatic Batch Mode…”; FAQ: „Fabrycznie tryb wsadowy jest wyłączony.” | User Guide 147x s. 54: „Default = Batch Mode Off” | NIEPRECYZYJNE |
| V2-08 | honeywell-voyager-xp-1472g | description | „Dokumentacja: automation.honeywell.com/voyager-xp-1472g.” | zdanie usunięte (karta katalogowa i instrukcja są w plikach do pobrania) | adres zwraca 404; notatka o źródle (AGENTS.md) | STYL |
| V2-09 | honeywell-voyager-xp-1472g | specifications | „OCR: Tak (OCR-A, OCR-B)” | pozycja usunięta | karta 1472g: „Reads standard 1D, PDF, 2D, and DotCode symbologies”; lista symbologii w rozdz. 7 instrukcji 147x bez OCR | SPOZA |
| V2-10 | honeywell-voyager-xp-1472g | faq (kody z ekranów) | „Idealny do odczytu kuponów mobilnych…” | „…np. kupony i bilety w telefonie, karty lojalnościowe w aplikacjach oraz e-recepty.” | karta 1472g (digital coupons, wallets on smartphones); zasada: bez superlatyw | STYL |
| V2-11 | honeywell-voyager-xp-1472g | faq (1472g a Zebra DS2278) | „większy zasięg BT (do 100 m; DS2278 — 10 m) … DS2278 więcej skanów (57 000 vs 50 000) … Voyager 1472g wygrywa…” | 1472g: BT 4.2 do 100 m; DS2278: BT 4.0 z BLE, min. 10 m, do 100 m z bazą CR2278; 30 upadków z 1,8 m vs wielokrotne z 1,5 m; 50 000 vs do 110 000 odczytów (60/min); oba 2400 mAh i IP52 | Zebra DS2200 Series spec (DS2278: „Class 2: Minimum 30 ft (10.0 m) and up to 300 ft (100.0 m) when paired with CR2278 cradle”, „110,000 scans at 60 Scans per Minute”, „5.0 ft./1.5 m”); karta 1472g | SPRZECZNE |
| V2-12 | honeywell-voyager-xp-1472g | faq (alternatywy) | „Zebra DS2278 (BT 4.0, zasięg 10 m)”, „Newland HR23 Dorada BT (… 137 g)” | „(BT 4.0, do 100 m z bazą CR2278)”, „[Newland HR23 Dorada BT](/produkt/newland-hr23-dorada-bt) (… 209 g)” | Zebra DS2200 Series spec; karta `newland-hr23-dorada-bt` (209 g z baterią; 137 g ma HR23 przewodowy) | SPRZECZNE |
| V2-13 | brand-category-content (`skanery-honeywell`, porównanie Honeywell vs Newland) | comparisons | „Voyager XP 1472g (…, BT 4.2, zasięg 30 m) — HR33 tańszy, dalszy BT, OCR w standardzie.” | „(…, BT 4.2, zasięg do 100 m) — HR33 tańszy, OCR w standardzie.” | karta 1472g: „Bluetooth v4.2, 100 m (300 ft) line of sight” — miejsce pominięte przy Q-26 | SPRZECZNE |

Razem: SPRZECZNE 4, NIEPRECYZYJNE 5, SPOZA 1, STYL 3. Nowe zdania sprawdzone na wspólne 6-gramy z pozostałymi plikami `src/data` — brak (poza powtórzeniem wewnątrz karty 1472g usuniętym przez przeredagowanie FAQ).

## Rozbieżności źródeł (bez zmiany treści)
- **Voyager XP 1472g, zasięg Bluetooth:** karta katalogowa Rev H i specyfikacja w instrukcji 147x — 100 m; ta sama instrukcja (s. 40) — baza CCB01-010BT-V1N klasy 2, 33 ft (10 m). Na karcie zostaje 100 m (karta katalogowa), a polska instrukcja na stronie (`/instrukcje/honeywell-voyager-xp-1472g`, plik `manual-content/honeywell-voyager-xp-1472g-pl.ts`) podaje ok. 10 m — klient widzi obie liczby.
- **Voyager XP 1472g, bateria:** karta katalogowa — do 50 000 odczytów, 14 h, ładowanie 4,5 h; specyfikacja w instrukcji 147x — do 100 000 odczytów (1/s), do 28 h, ładowanie 4 h z zasilaczem / 7 h z USB, przechowywanie z baterią −20–35 °C. Na karcie wartości z karty katalogowej.
- **1962HHD-5USB-WC-R:** tabela SKU Honeywell (ROW) nadal podaje „SR Focus”, PN i pozostałe źródła — HD (jak w audycie Q-04). Strona Honeywell GB pokazuje teraz także 1960HHD-5USB-R (wcześniej tylko -N) — potwierdza wariant na karcie 1960h.
- **HR33 / HR23 BT White:** karta „over 12 hours” w opisie i „≥ 15 h” w specyfikacji; zasięg „≥ 100 m (max.)” i „up to 100 meters” — na kartach wartości ze specyfikacji.

## Sprawy dla właściciela
1. **Zdjęcia:** 6 akcesoriów Datalogic (WLC4690-HC-BT, WLC4690-HC-433, CC-, PA-, BA-WLC4690-HC, 90A052353) nadal ma zastępczą grafikę; Datalogic nie publikuje ich zdjęć w e-katalogu. `1472G2D-2USB-5-R.png` (600 × 1200, szare, nieostre) — bez zmian.
2. **Voyager XP 1472g — zasięg 10 m czy 100 m** z bazą CCB01-010BT-V1N (zestawy -2USB-5-R i -6USB-5-R): potwierdzić u dostawcy i ujednolicić kartę z polską instrukcją.
3. **Szablon karty (wszystkie produkty, poza zakresem):** w JSON-LD FAQPage odpowiedzi zawierają składnię linków Markdown (`[tekst](/produkt/...)`); blok „Wymagane” pisze „Do GBT4600-HC-HP potrzebujesz tego elementu” (forma „Ty”).
4. **Inne karty Honeywell (poza zakresem):** `honeywell-voyager-xp-1470g` ma pozycję „OCR: Tak (OCR-A, OCR-B)” (jak V2-09); karty Granit Ultra kończą opis zdaniem „Dokumentacja: automation.honeywell.com/…” (jak V2-08).
5. Sprawy z audytu Q bez zmian: PN LA-001 do potwierdzenia u dostawcy, usunięte PN Honeywell -R, stacja LANA C008 bez karty, ceny w treściach marki Honeywell.

## Testy
- `npx tsc --noEmit` — 0 błędów; `npx next build` — sukces (4010 stron; błędy Prisma `/api/stock` i 2 × `featuredSlugs` takie same jak w buildach integracji i audytu Q).
- `npx next start -p 3297`: 6 zmienionych kart i `/skanery-honeywell` → 200, nowe zdania obecne, „Dokumentacja: automation…” zniknęło z 1472g. Serwer zatrzymany.

## Tabele per karta
Kolumna „Wynik”: zgodne / niezgodne (z ID poprawki) / brak w dokumencie. Treść skrócona do ok. 150 znaków; pełny tekst strony w `$SP/hc3/weryfikacja/<slug>.txt`. Skróty stron w kolumnie źródeł odnoszą się do sekcji dokumentu (s. = strona PDF).

### Legenda źródeł

| Skrót | Dokument |
|---|---|
| H60 | karta 1960h Rev E 04/26 (`/downloads/honeywell/honeywell-xenon-ultra-1960h-karta-katalogowa-en.pdf`) |
| H62 | karta 1962h Rev C 04/26 (`/downloads/honeywell/honeywell-xenon-ultra-1962h-karta-katalogowa-en.pdf`) |
| HAG | Accessories Guide 1960/1962 Rev B 01/26 (`/downloads/honeywell/honeywell-xenon-ultra-1960-1962-akcesoria-en.pdf`) |
| HUG | User Guide 196x (`/instrukcje/honeywell-xenon-ultra-1960-ug-en.pdf`) |
| HP60 | strona Honeywell GB 1960h (Overview, Application, tabela SKU) |
| HP62 | strona Honeywell GB 1962h (Overview, Application, tabela SKU) |
| SM5 | strona Socket Mobile D745 (Details, Specifications, Packaging, Product SKUs) |
| SM6 | strona Socket Mobile D765 (Details, Specifications, Packaging) |
| SMP | artykuł Socket Mobile „Medical-Grade Plastic” |
| DDS | karta Gryphon 4600 Series Rev A 20250528 (`/datasheets/datalogic-gryphon-4600-en.pdf`) |
| DQ | QRG Gryphon GD4600 (`/instrukcje/datalogic-gryphon-corded-en.pdf`) s. 33–35 |
| DEC | e-katalog Datalogic Gryphon 4600 (opisy PN) |
| DSE | strona serii Gryphon 4600 (Datalogic) |
| DPR | Datalogic PR HIMSS 2026 |
| N33C | karta HR33 Marlin AI Corded White (`/downloads/newland/HR33-Marlin-AI-Corded-White-Datasheet.pdf`) |
| N33B | karta HR33 Marlin AI Bluetooth White (`/downloads/newland/HR33-Marlin-AI-Bluetooth-White-Datasheet.pdf`) |
| N23C | karta HR23 Dorada AI Corded White (`/downloads/newland/HR23-Dorada-AI-Corded-White-Datasheet.pdf`) |
| N23B | karta HR23 Dorada AI Bluetooth White (`/downloads/newland/HR23-Dorada-AI-Bluetooth-White-Datasheet.pdf`) |
| NCG | Newland Cleaning & Disinfecting Guide EMEA 2026.3, s. 1–3 |
| NUG | instrukcja HR23/HR33 AI BT (`/downloads/newland/HR23-HR33-AI-BT-User-Guide.pdf`), rozdz. 4 |
| N32 | strony Newland HR32 Marlin Corded/BT HC (EOL 17.09.2026, „Recommendation of Alternative Product”) |
| NST | strona Newland NLS-STD23-33-SA-W (Warranty 3 Months, Available Versions) |
| LTS | ProGlove LANA Technical Specification 09.2025 (`/datasheets/proglove-lana.pdf`) |
| LURG | ProGlove LANA User & Regulatory Guide Rev A (`/datasheets/proglove-lana-instrukcja.pdf`) |
| LPG | strona ProGlove LANA |
| LFQ | docs.proglove.com — LANA FAQ |
| VDS | karta Voyager XP 1472g A4 Rev H 03/23 (`/downloads/honeywell/honeywell-voyager-xp-1472g-karta-katalogowa-en.pdf`) |
| VUG | User Guide Voyager XP 147x (`/instrukcje/honeywell-voyager-xp-147x-ug-en.pdf`) |
| JT | Jarltech (opisy PN 1472G2D-2USB-5-R, -6USB-5-R, BAT-SCN01A) |
| ZDS | Zebra DS2200 Series spec (DS2278) |

### Honeywell Xenon Ultra 1960h (`/produkt/honeywell-xenon-ultra-1960h`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Honeywell Xenon Ultra 1960h | H60 s.2 | zgodne |
| Meta title / description | Honeywell Xenon Ultra 1960h — przewodowy skaner dla służby zdrowia /… / Skaner kodów kreskowych do szpitala Honeywell Xenon Ultra 1960h: przewodowy ima… | H60 s.2 | zgodne |
| Opis, akapit 1 | Honeywell Xenon Ultra 1960h to przewodowy skaner ręczny 1D/2D, odmiana serii Xenon Ultra przeznaczona dla służby zdrowia. Honeywell rozwija w nim swoje wcześni… | H60 s.1; HP60 | zgodne |
| Opis, akapit 2 | Każda wersja dla służby zdrowia ma obudowę w kolorze białym, antymikrobową i przygotowaną do dezynfekcji. Obudowę można regularnie czyścić wieloma środkami bez… | H60 s.1 (DRH, nooks or crannies) | zgodne |
| Opis, akapit 3 | Skaner ma tryby ograniczające hałas przy pacjencie: Patient Do-Not-Disturb, opcjonalną wibrację i Scan Lamp, czyli oświetlenie włączane tylko w razie potrzeby.… | H60 s.1; HP60 (Ultra Performance) | **niezgodne → poprawione (V2-01)** |
| Opis, akapit 4 | Zestaw 1960HHD-5USB-R z ogniskowaniem HD zawiera prosty przewód USB o długości 3 m. Skaner przyjmuje przewody z instalacji Xenon XP 1950h. Producent udziela 5… | HAG s.6 (kabel w zestawach 1960); H60 (gwarancja) | zgodne |
| Specyfikacja: Typ urządzenia | Przewodowy skaner ręczny 1D/2D (imager) w wersji dla służby zdrowia | H60 s.2 | zgodne |
| Specyfikacja: Obudowa | Biała, antymikrobowa, przygotowana do dezynfekcji | H60 s.2 | zgodne |
| Specyfikacja: Tryby pracy przy pacjencie | Patient Do-Not-Disturb, wibracja (opcja), Scan Lamp; tryby ciche: Silent Mode z miganiem LED lub długim świec… | H60 s.2; H60/H62 s.1; HUG rozdz. 5 | zgodne |
| Specyfikacja: Matryca | 1280 × 1080 pikseli | H60 s.2 | zgodne |
| Specyfikacja: Celownik | LED z zieloną kropką, 525 nm | H60 s.2 | zgodne |
| Specyfikacja: Oświetlenie | Białe, 2700 K | H60 s.2 | zgodne |
| Specyfikacja: Pole widzenia | 42° w poziomie, 36° w pionie | H60 s.2 | zgodne |
| Specyfikacja: Tolerancja ruchu (13 mil UPC) | SR i HD: do 4 m/s | H60 s.2 | zgodne |
| Specyfikacja: Kontrast druku | Od 15% | H60 s.2 | zgodne |
| Specyfikacja: Najmniejszy element | SR: 2,5 mil (1D), 5 mil (2D); HD: 2 mil (1D), 4 mil (2D) | H60 s.2 | zgodne |
| Specyfikacja: Obrót, pochylenie, skos | ±360°, ±65°, ±65° | H60 s.2 | zgodne |
| Specyfikacja: Odczytywane kody | Standardowe kody 1D, PDF, 2D, kody pocztowe, Digimarc, DotCode, OCR (zależnie od konfiguracji) | H60 s.2 | zgodne |
| Specyfikacja: Zasięg 13 mil UPC | SR: 0–654 mm; HD: 0–502 mm | H60 s.2 | zgodne |
| Specyfikacja: Zasięg 20 mil Code 39 | SR: 4–1115 mm; HD: 4–814 mm | H60 s.2 | zgodne |
| Specyfikacja: Zasięg 5 mil Code 39 | SR: 23–311 mm; HD: 7–295 mm | H60 s.2 | zgodne |
| Specyfikacja: Zasięg 10 mil Data Matrix | SR: 12–273 mm; HD: 2–249 mm | H60 s.2 | zgodne |
| Specyfikacja: Zasięg 5 mil Data Matrix | Tylko HD: 35–113 mm | H60 s.2 | zgodne |
| Specyfikacja: Jakość obrazu | 109 PPI na dokumencie A4 | H60 s.2 | zgodne |
| Specyfikacja: Interfejsy | USB, Keyboard Wedge, RS-232 | H60 s.2 | zgodne |
| Specyfikacja: Wykrywanie obiektu w podstawce | 7,6 cm (domyślnie), 15,2 cm po zmianie konfiguracji | H60 s.2 | zgodne |
| Specyfikacja: Sygnalizacja | Diody dobrego odczytu, tylne diody, brzęczyk z regulacją tonu i głośności, wibracja (opcja) | H60 s.2 | zgodne |
| Specyfikacja: Napięcie wejściowe | 4,4–5,5 V DC | H60 s.2 | zgodne |
| Specyfikacja: Zarządzanie | Honeywell Scanner Management Utility (SMU) | H60 s.2 | zgodne |
| Specyfikacja: Wymiary | 108,2 × 70,4 × 160,2 mm | H60 s.2 | zgodne |
| Specyfikacja: Masa | 147,2 g | H60 s.2 | zgodne |
| Specyfikacja: Temperatura pracy | 0–50°C | H60 s.2 | zgodne |
| Specyfikacja: Temperatura przechowywania | −40–70°C | H60 s.2 | zgodne |
| Specyfikacja: Wilgotność | 0–95% (bez kondensacji) | H60 s.2 | zgodne |
| Specyfikacja: Odporność na upadki | Wielokrotne upadki z 1,8 m na beton w zakresie temperatur pracy; Mil Spec Drop: 3,0 m | H60 s.2 | zgodne |
| Specyfikacja: Test przewracania | 2000 przewrotów z 0,5 m | H60 s.2 | zgodne |
| Specyfikacja: Szczelność | IP52 | H60 s.2 | zgodne |
| Specyfikacja: Odporność ESD | ±8 kV pośrednio, ±15 kV przez powietrze | H60 s.2 | zgodne |
| Specyfikacja: Oświetlenie otoczenia | 0–100 000 lx | H60 s.2 | zgodne |
| Specyfikacja: Zgodność z normami | EMC: EN 55032, EN 55035, EN 61000-3-2, EN 61000-3-3; bezpieczeństwo: EN 62368-1, IEC 62368-1, IEC 62471, IEC… | H60 s.2 | zgodne |
| Specyfikacja: Przewody | Zgodne z przewodami skanera Xenon XP 1950h | H60 s.1 | zgodne |
| Specyfikacja: W zestawie | Skaner, przewód USB typu A (prosty, 3 m, CBL-500-300-S00) | HAG s.6 (kabel w zestawach 1960); HP60 (SKU) | zgodne |
| Specyfikacja: Gwarancja | 5 lat | H60 s.2 | zgodne |
| Zastosowania | Przyjęcie pacjenta; Odczyt kodów przy łóżku pacjenta; Pobieranie próbek; Apteka szpitalna; Ewidencja zapasów i elementów | HP60 (Application) | zgodne |
| Wariant 1960HHD-5USB-R | Xenon Ultra 1960h HD — zestaw z przewodem USB | H60 s.2 | zgodne |
| FAQ: Czym Honeywell Xenon Ultra 1960h różni się od Xenon Ultra 1960g? | Model 1960h ma białą obudowę antymikrobową przygotowaną do dezynfekcji. Obsługuje ustawienia z rozdziału „Healthcare Settings” instrukcji, które dzia… | HUG rozdz. 5 s.117–119, s.79 (Default Low dla 196xh); HP60 (SKU SR/HD) | zgodne |
| FAQ: Jak czyścić i dezynfekować obudowę Xenon Ultra 1960h? | Obudowa 1960h jest przygotowana do regularnej dezynfekcji wieloma środkami bez uszkodzenia skanera. Wykaz środków dopuszczonych przez Honeywell zawie… | HP60 (Healthcare Disinfectant-Ready Housing Cleaning Guide); HUG s.293 | zgodne |
| FAQ: Jak wyciszyć skaner 1960h na sali chorych? | Rozdział 5 instrukcji Xenon Ultra 196x zawiera kody programujące. Silent Mode with Flashing LED wycisza skaner, a dobry odczyt potwierdza pięciokrotn… | HUG s.117–124 | zgodne |
| FAQ: Jakie przewody i zasilacz pasują do Xenon Ultra 1960h? | Zestaw zawiera prosty przewód USB 3 m, dostępny też osobno jako CBL-500-300-S00. Do portu szeregowego służy przewód RS-232 CBL-020-300-C00, zasilany… | HAG s.5–6 | zgodne |
| FAQ: Czy Xenon Ultra 1960h może pracować w podstawce, bez trzymania w ręce? | Tak. W podstawce skaner wykrywa obiekt w odległości 7,6 cm, a po zmianie konfiguracji 15,2 cm. Honeywell oferuje do Xenon Ultra 1960 szary stojak STN… | H60 s.2; HAG s.7 | zgodne |
| FAQ: Jakie są alternatywy dla Honeywell Xenon Ultra 1960h? | Inne przewodowe skanery 2D dla placówek medycznych to Zebra DS2208-HC, Zebra DS4608-HC, Zebra DS8208-HC, Datalogic Gryphon GD4690-HC i Newland HR33 M… | —(linki do kart) | zgodne |
| Zdjęcie `1960HHD-5USB-R.png` (alt) | Honeywell Xenon Ultra 1960h — biały skaner ręczny dla służby zdrowia, widok pod kątem z góry, zielone diody i turkusowe… | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `1960HHD-5USB-R-2.png` (alt) | Honeywell Xenon Ultra 1960h — widok z przodu: okno skanera w turkusowej ramce i spust | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa Honeywell Xenon Ultra 1960h (EN) | /downloads/honeywell/honeywell-xenon-ultra-1960h-karta-katalogowa-en.pdf (563 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Instrukcja szybkiego uruchomienia Xenon Ultra 1960 (EN) | /instrukcje/honeywell-xenon-ultra-1960-qs-en.pdf (308 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Instrukcja obsługi Xenon Ultra 196x (EN) | /instrukcje/honeywell-xenon-ultra-1960-ug-en.pdf (6,1 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Przewodnik akcesoriów Xenon Ultra 1960 i 1962 (EN) | /downloads/honeywell/honeywell-xenon-ultra-1960-1962-akcesoria-en.pdf (1,6 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność 1960HHD-5USB-R | strona = API: 1348,88 zł netto, available (171 szt.; PL 0, EU 171, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Honeywell Xenon Ultra 1960h; brand Honeywell; sku 1960HHD-5USB-R; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (19: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Honeywell Xenon Ultra 1962h (`/produkt/honeywell-xenon-ultra-1962h`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Honeywell Xenon Ultra 1962h | H62 s.2 | zgodne |
| Meta title / description | Honeywell Xenon Ultra 1962h — bezprzewodowy skaner dla szpitali / TAK… / Bezprzewodowy skaner medyczny Honeywell Xenon Ultra 1962h: Bluetooth do 100 m,… | H62 s.2 | zgodne |
| Opis, akapit 1 | Honeywell Xenon Ultra 1962h to bezprzewodowy skaner ręczny 1D/2D z łącznością Bluetooth, zaprojektowany dla placówek ochrony zdrowia. Swoboda ruchu jest ważna… | H62 s.1 | zgodne |
| Opis, akapit 2 | Wszystkie modele 1962h mają białą obudowę antymikrobową, przygotowaną do dezynfekcji. Konstrukcja ma niewiele zakamarków, w których mogłyby się gromadzić zaraz… | H62 s.1; HP62 (WHT) | zgodne |
| Opis, akapit 3 | Ten sam skaner przyjmuje baterię litowo-jonową albo superkondensator. Superkondensator ładuje się w niecałą minutę z zasilacza lub zasilanego portu USB i wysta… | H62 s.1 | zgodne |
| Opis, akapit 4 | Tryby Patient Do-Not-Disturb, wibracja i Scan Lamp ograniczają dźwięk i światło przy pacjencie. Każdy zestaw zawiera bazę prezentacyjną i przewód USB 2,7 m. Gw… | H62 s.1–2; HAG s.6 (50177360-002, 2,7 m); HP62 (SKU) | zgodne |
| Specyfikacja: Typ urządzenia | Bezprzewodowy skaner ręczny 1D/2D (imager) w wersji dla służby zdrowia | H62 s.2 | zgodne |
| Specyfikacja: Obudowa | Biała, antymikrobowa, przygotowana do dezynfekcji (Disinfectant Ready Housing we wszystkich modelach 1962h) | H62 s.2 | zgodne |
| Specyfikacja: Tryby pracy przy pacjencie | Patient Do-Not-Disturb, wibracja, Scan Lamp; tryby ciche skanera i bazy, tryb nocny | H62 s.2; H60/H62 s.1; HUG rozdz. 5 | zgodne |
| Specyfikacja: Matryca | 1280 × 1080 pikseli | H62 s.2 | zgodne |
| Specyfikacja: Celownik | LED z zieloną kropką, 525 nm | H62 s.2 | zgodne |
| Specyfikacja: Oświetlenie | Białe, 2700 K | H62 s.2 | zgodne |
| Specyfikacja: Pole widzenia | 42° w poziomie, 36° w pionie | H62 s.2 | zgodne |
| Specyfikacja: Tolerancja ruchu | SR i HD: do 4 m/s | H62 s.2 | zgodne |
| Specyfikacja: Kontrast druku | Od 15% | H62 s.2 | zgodne |
| Specyfikacja: Obrót, pochylenie, skos | ±360°, ±65°, ±65° | H62 s.2 | zgodne |
| Specyfikacja: Odczytywane kody | Standardowe kody 1D, PDF, 2D, kody pocztowe, Digimarc, DotCode, OCR (zależnie od konfiguracji) | H62 s.2 | zgodne |
| Specyfikacja: Zasięg 13 mil UPC | SR: 0–654 mm; HD: 0–502 mm | H62 s.2 | zgodne |
| Specyfikacja: Zasięg 20 mil Code 39 | SR: 4–1115 mm; HD: 4–814 mm | H62 s.2 | zgodne |
| Specyfikacja: Zasięg 10 mil QR | SR: 11–262 mm; HD: 1–230 mm | H62 s.2 | zgodne |
| Specyfikacja: Zasięg 5 mil Data Matrix | Tylko HD: 35–113 mm | H62 s.2 | zgodne |
| Specyfikacja: Jakość obrazu | 109 PPI na dokumencie A4 | H62 s.2 | zgodne |
| Specyfikacja: Łączność | Bluetooth 4.2, 2,4 GHz, Adaptive Frequency Hopping; dostępny BLE | H62 s.2 | zgodne |
| Specyfikacja: Zasięg radiowy | Klasa 1: 100 m w linii wzroku (domyślnie); po zmianie ustawień klasa 2: 10 m | H62 s.2 | zgodne |
| Specyfikacja: Interfejsy hosta (baza) | USB, Keyboard Wedge, RS-232 | H62 s.2 | zgodne |
| Specyfikacja: Bateria Li-ion | Co najmniej 3300 mAh; do 80 000 odczytów (1 odczyt/s) i ok. 22 h pracy na jednym ładowaniu; ładowanie ok. 4,5… | H62 s.2 | zgodne |
| Specyfikacja: Superkondensator | Pełne ładowanie poniżej 60 s z zasilacza lub zasilanego portu USB, poniżej 4 min z portu USB; 450 odczytów na… | H62 s.2 | zgodne |
| Specyfikacja: Zasilanie bazy | 2,5 W (500 mA, 5 V DC) ze standardowego portu USB; 10 W (2 A, 5 V DC) z zasilaczem; 0,75 W bez ładowania | H62 s.2 | zgodne |
| Specyfikacja: Wykrywanie obiektu | Konfigurowane: 7,6 lub 15,2 cm | H62 s.2 | zgodne |
| Specyfikacja: Sygnalizacja | Diody dobrego odczytu, tylne diody, brzęczyk z regulacją tonu i głośności, diody stanu ładowania, dioda bater… | H62 s.2 | zgodne |
| Specyfikacja: Wymiary skanera | 108,2 × 70,4 × 160,2 mm | H62 s.2 | zgodne |
| Specyfikacja: Wymiary bazy prezentacyjnej | 82,9 × 90,4 × 121,6 mm | H62 s.2 | zgodne |
| Specyfikacja: Masa skanera | Z baterią Li-ion: 247 g (bezstykowy: 255 g); z superkondensatorem: 218 g (bezstykowy: 227 g) | H62 s.2 | zgodne |
| Specyfikacja: Masa bazy prezentacyjnej | 214 g (bezstykowa: 220 g) | H62 s.2 | zgodne |
| Specyfikacja: Temperatura pracy | Skaner: 0–50°C; baza: ładowanie 5–35°C, bez ładowania 0–50°C | H62 s.2 | zgodne |
| Specyfikacja: Temperatura przechowywania | −40–70°C | H62 s.2 | zgodne |
| Specyfikacja: Wilgotność | 0–95% (bez kondensacji) | H62 s.2 | zgodne |
| Specyfikacja: Odporność na upadki | 50 upadków z 1,8 m na beton w zakresie temperatur pracy; Mil Spec Drop: 2,4 m (8 ft) | H62 s.2 | zgodne |
| Specyfikacja: Test przewracania | 2000 przewrotów z 0,5 m | H62 s.2 | zgodne |
| Specyfikacja: Szczelność | Skaner: IP52; baza: IP41 | H62 s.2 | zgodne |
| Specyfikacja: Odporność ESD | ±8 kV pośrednio, ±15 kV przez powietrze | H62 s.2 | zgodne |
| Specyfikacja: Oświetlenie otoczenia | 0–100 000 lx | H62 s.2 | zgodne |
| Specyfikacja: Zgodność z normami | EMC: EN 55032, EN 55035, EN 61000-3-2, EN 61000-3-3; bezpieczeństwo: EN 62368-1, IEC 62368-1, IEC 62471, IEC… | H62 s.2 | zgodne |
| Specyfikacja: W zestawie | Skaner, baza prezentacyjna CCB-U00-H z kubkiem stykowym 1962H-BAT-CUP lub bezstykowym 1962H-WC-CUP (zależnie… | HAG s.4, s.6 (50177360-002); HP62 (SKU) | zgodne |
| Specyfikacja: Gwarancja | Skaner: 3 lata; superkondensator: 5 lat; bateria Li-ion: 1 rok | H62 s.2 | zgodne |
| Zastosowania | Podawanie leków przy łóżku pacjenta; Pobieranie próbek; Przyjęcie pacjenta; Apteka szpitalna; Ewidencja zapasów i elementów | HP62 (Application) | zgodne |
| Wariant 1962HHD-5USB-5-R | Zasilanie: Li-ion, Ładowanie: Stykowe | H62 s.2 | zgodne |
| Wariant 1962HHD-5USB-BF-R | Zasilanie: Superkondensator, Ładowanie: Stykowe | H62 s.2 | zgodne |
| Wariant 1962HHD-5USB-WC-R | Zasilanie: Li-ion, Ładowanie: Bezstykowe | H62 s.2 | zgodne |
| Dymek „Zasilanie” | Źródło energii skanera 1962h. Li-ion — bateria litowo-jonowa; do 80 000 odczytów i ok. 22 h pracy; ładowanie ok. 4,5 h. Superkondensator — ładuje się… | H62 s.2 | zgodne |
| Dymek „Ładowanie” | Sposób ładowania skanera w bazie. Stykowe — przez metalowe styki na końcu rękojeści. Bezstykowe — bez odsłoniętych styków, co ogranicza awarie spowod… | H62 s.2 | zgodne |
| FAQ: Czym Honeywell Xenon Ultra 1962h różni się od Xenon Ultra 1962? | Wszystkie modele 1962h mają białą, antymikrobową obudowę przygotowaną do dezynfekcji. Wersja dla służby zdrowia obsługuje ustawienia „Healthcare Sett… | HUG rozdz. 5; HAG s.4 | zgodne |
| FAQ: Bateria czy superkondensator — który wariant 1962h wybrać? | Superkondensator przydaje się tam, gdzie skaner często wraca do bazy, np. przy podawaniu leków i pobieraniu próbek. Ładuje się w niecałą minutę, a na… | H62 s.1–2 | **niezgodne → poprawione (V2-02)** |
| FAQ: Jak dezynfekować Xenon Ultra 1962h i bazę? | Obudowy skanera i bazy Healthcare są antymikrobowe i przygotowane do częstego czyszczenia. Środki dopuszczone przez Honeywell wymienia „Healthcare Di… | HUG s.293; HP62 (contactless charging) | zgodne |
| FAQ: Jaki zasięg ma Bluetooth i ile skanerów obsługuje jedna baza? | Skaner pracuje domyślnie w klasie 1, z zasięgiem do 100 m w linii wzroku. Ustawienie klasy 2 ogranicza zasięg do 10 m. Do bazy prezentacyjnej Healthc… | H62 s.2; HAG s.4; HUG (Out-of-Range Alarm, Find My) | zgodne |
| FAQ: Czy do zestawu Xenon Ultra 1962h potrzebny jest zasilacz? | Zestaw zawiera skaner, bazę prezentacyjną i przewód USB 2,7 m. Baza zasilana z portu USB komputera pobiera 2,5 W. Z zasilaczem 46-00536-6 (wtyczka EU… | H62 s.2; HAG s.5 | zgodne |
| FAQ: Jakie bazy i części zapasowe pasują do 1962h? | Drugie stanowisko można wyposażyć w pionową bazę prezentacyjną CCB-U00-H-KIT albo poziomą bazę biurkową i ścienną CCB-ULTRA-HORIZ-HC. Do wersji z bat… | HAG s.3–4 | zgodne |
| FAQ: Jakie są alternatywy dla Honeywell Xenon Ultra 1962h? | Podobne bezprzewodowe skanery 2D dla ochrony zdrowia to Zebra DS2278-HC, Zebra DS8288-HC, Datalogic Gryphon GBT4600-HC, Newland HR33 Marlin AI BT Whi… | —(linki do kart) | zgodne |
| Zdjęcie `1962HHD-5USB-5-R.png` (alt) | Honeywell Xenon Ultra 1962h w białej bazie prezentacyjnej, widok pod kątem z przodu | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `1962HHD-5USB-5-R-2.png` (alt) | Honeywell Xenon Ultra 1962h w wersji z ładowaniem stykowym — widok pod kątem, styki na końcu rękojeści | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `1962HHD-5USB-5-R-3.png` (alt) | Honeywell Xenon Ultra 1962h — widok z przodu: okno skanera w turkusowej ramce | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `1962HHD-5USB-5-R-4.png` (alt) | Honeywell Xenon Ultra 1962h w wersji z ładowaniem bezstykowym — widok pod kątem, rękojeść bez styków | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `1962HHD-5USB-5-R-5.png` (alt) | Honeywell Xenon Ultra 1962h w poziomej bazie biurkowej i ściennej (baza pozioma sprzedawana osobno) | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa Honeywell Xenon Ultra 1962h (EN) | /downloads/honeywell/honeywell-xenon-ultra-1962h-karta-katalogowa-en.pdf (591 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Instrukcja szybkiego uruchomienia Xenon Ultra 1962 (EN) | /instrukcje/honeywell-xenon-ultra-1962-qs-en.pdf (310 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Instrukcja obsługi Xenon Ultra 196x (EN) | /instrukcje/honeywell-xenon-ultra-1962-ug-en.pdf (6,1 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Przewodnik akcesoriów Xenon Ultra 1960 i 1962 (EN) | /downloads/honeywell/honeywell-xenon-ultra-1960-1962-akcesoria-en.pdf (1,6 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność 1962HHD-5USB-5-R | strona = API: 3157,31 zł netto, available (91 szt.; PL 0, EU 91, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| Cena i dostępność 1962HHD-5USB-BF-R | strona = API: 3172,09 zł netto, available (6 szt.; PL 0, EU 6, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| Cena i dostępność 1962HHD-5USB-WC-R | strona = API: 3473,49 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Honeywell Xenon Ultra 1962h; brand Honeywell; sku 1962HHD-5USB-5-R; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (20: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Socket Mobile DuraScan D745 (`/produkt/socket-mobile-durascan-d745`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Socket Mobile DuraScan D745 | SM5 (Specifications); SMP (lista środków) | zgodne |
| Meta title / description | Socket Mobile DuraScan D745 — skaner Bluetooth dla służby zdrowia / T… / Kompaktowy skaner medyczny Socket Mobile DuraScan D745: kody 1D i 2D z etykiet… | SM5 (Specifications); SMP (lista środków) | zgodne |
| Opis, akapit 1 | Socket Mobile DuraScan D745 to kompaktowy czytnik Bluetooth do kodów 1D i 2D, przeznaczony dla placówek ochrony zdrowia. Odczytuje kody wydrukowane i wyświetla… | SM5 | zgodne |
| Opis, akapit 2 | Obudowę wykonano z tworzywa klasy medycznej, które spełnia normy ISO 10993 i EN 60529. Tworzywo znosi codzienne czyszczenie agresywnymi środkami dezynfekcyjnym… | SMP | zgodne |
| Opis, akapit 3 | Socket Mobile przeznacza D745 do przyjęcia pacjentów, opieki przy łóżku i pracy w aptece. Typowe zadania to identyfikacja leków i pacjentów, zarządzanie lekami… | SM5 | zgodne |
| Opis, akapit 4 | Wymienna bateria wystarcza na 12-godzinną zmianę, a przycisk skanowania wytrzymuje ponad 5 mln naciśnięć. W trybie automatycznym skaner postawiony w kołysce cz… | SM5 | zgodne |
| Specyfikacja: Typ urządzenia | Kompaktowy bezprzewodowy skaner kodów 1D/2D dla służby zdrowia | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Obudowa | Tworzywo klasy medycznej spełniające normy ISO 10993 i EN 60529; szczelność IP54 | SMP; SM5/SM6 | zgodne |
| Specyfikacja: Środki czyszczące dopuszczone przez pro… | Sani-Cloth HB, Sani-Cloth Plus, Super Sani-Cloth (roztwór czwartorzędowego chlorku amoniowego); Hepacide Quat… | SMP | zgodne |
| Specyfikacja: Odczyt | Kody 1D i 2D z papieru i ekranów, także przez tworzywo lub szkło; odczyt wielokierunkowy | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Matryca | 1280 × 960 pikseli | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Kąt odczytu | 44,5° w poziomie, 33,5° w pionie | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Kontrast druku | Od 20–25% | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Odległość odczytu | 3,0–49,5 cm (zależnie od wielkości kodu, symboliki i nośnika) | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Zasięg wybranych kodów | UPC-A 100%: 4,6–49,5 cm; QR 20 mil: 3,0–35,6 cm; Data Matrix 10 mil: 7,4–21,6 cm; Code 39 5 mil: 6,1–24,1 cm | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Kody domyślne 1D | Bookland EAN, Codabar, Code 128, Code 39, Code 93, EAN/JAN-13, EAN/JAN-8, GS1-128, GS1 DataBar, Interleaved 2… | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Kody domyślne 2D | Aztec, Composite, Data Matrix, GS1 Data Matrix, GS1 QR, Han Xin, MaxiCode, MicroPDF417, Micro QR, PDF417, QR | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Kody obsługiwane po włączeniu | Code 11, Matrix 2 of 5, MSI, kody pocztowe, OCR-A, OCR-B, MICR E13B | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Oświetlenie otoczenia | 0–100 000 lx | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Łączność | Bluetooth 2.1 + EDR, klasa 2, szyfrowanie 56-bit; zasięg do 10 m (zależnie od otoczenia i urządzenia hosta) | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Profile Bluetooth | HID (tryb Basic), SPP (tryb Application), tryb iOS Application (domyślny) | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Systemy | Apple iOS (iPhone, iPad), Android, Windows 11 | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Integracja z aplikacjami | CaptureSDK w wersji 2.0.29 lub nowszej | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Tryb automatyczny | Odczyt bez naciskania przycisku po umieszczeniu w kołysce lub podstawce (Auto/Presentation Mode) | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Przycisk skanowania | Ponad 5 mln naciśnięć | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Bateria | Wymienna, litowo-polimerowa, 1400 mAh, 3,7 V, 5,55 Wh, 35 g; 500 cykli ładowania | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Czas pracy | Ponad 20 h w trybie oszczędnym; 85 000 odczytów w 9 h (2 odczyty/s); 7000 odczytów w 19 h (1 odczyt co 4 s) | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Sygnalizacja | Diody LED odczytu i ładowania, sygnały dźwiękowe | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Temperatura pracy | 0–45°C; ładowanie powyżej 40°C może sprawiać problemy | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Temperatura przechowywania | −40–70°C | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Wilgotność | 95% przy 60°C (bez kondensacji) | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Test przewracania | 2500 cykli z 1 m na metalową płytę (IEC 60068-2-32) | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Zgodność z normami | Bezpieczeństwo: IEC 60950-1, UL 60950-1, CAN/CSA C22.2; LED: IEC 62471, EN 62471 (grupa wolna); RoHS EN 50581… | SM5 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: W zestawie CX3859-2890 | Skaner, pasek na nadgarstek, przewód ładujący z wtykiem baryłkowym i wtykiem USB-A, instrukcja Get Started | SM5 (Packaging, Product SKUs) | zgodne |
| Specyfikacja: W zestawie CX3861-2892 | Skaner, pasek na nadgarstek, kołyska ładująca, przewód z wtykiem baryłkowym i wtykiem USB-A, instrukcja Get S… | SM5 (Packaging, Product SKUs) | zgodne |
| Specyfikacja: Gwarancja | 1 rok | SM5 (Specifications); SMP (lista środków) | zgodne |
| Zastosowania | Identyfikacja pacjentów; Identyfikacja leków i zarządzanie lekami; Pobieranie próbek; Bezpieczeństwo przetoczeń krwi; Przyjęcie pacjenta i… | SM5 | zgodne |
| Wariant CX3861-2892 | Ładowanie: Kołyska ładująca | SM5 (Specifications); SMP (lista środków) | zgodne |
| Wariant CX3859-2890 | Ładowanie: Przewód USB | SM5 (Specifications); SMP (lista środków) | zgodne |
| Dymek „Ładowanie” | Sposób ładowania skanera D745. Kołyska ładująca — w wersji dla służby zdrowia; można ją codziennie czyścić środkami dezynfekcyjnymi. W trybie automat… | SM5 (Specifications); SMP (lista środków) | zgodne |
| FAQ: Jakimi środkami można czyścić Socket Mobile DuraScan D745? | Socket Mobile dopuszcza m.in. chusteczki Sani-Cloth, chusteczki z alkoholem izopropylowym 70%, Virex 256, Clorox Bleach i ocet; pełną listę zawiera s… | SMP | zgodne |
| FAQ: Z jakimi urządzeniami i aplikacjami współpracuje D745? | D745 łączy się przez Bluetooth z iPhone, iPad, urządzeniami z Androidem i komputerami z Windows 11. Ma certyfikat Apple i może być w pełni sterowany… | SM5 (Features, Bluetooth Profiles) | zgodne |
| FAQ: Jak długo działa bateria skanera D745? | Bateria litowo-polimerowa 1400 mAh wystarcza na 12-godzinną zmianę. Przy dwóch odczytach na sekundę daje 85 000 odczytów w 9 h, a przy jednym odczyci… | SM5 (Battery Information) | zgodne |
| FAQ: Czym DuraScan D745 różni się od D765? | Socket Mobile DuraScan D765 odczytuje dodatkowo strefę MRZ dokumentów, DotCode i kody od 3 mm, a fonty OCR-A i OCR-B ma włączone domyślnie (w D745 tr… | SM5; SM6 | zgodne |
| FAQ: Co zawierają zestawy CX3861-2892 i CX3859-2890? | Oba zestawy zawierają skaner, pasek na nadgarstek, przewód z wtykiem baryłkowym i USB-A oraz instrukcję Get Started. CX3861-2892 ma dodatkowo kołyskę… | SM5 (Packaging, Product SKUs) | zgodne |
| FAQ: Jakie są alternatywy dla Socket Mobile DuraScan D745? | Kompaktowym skanerem dla ochrony zdrowia jest też Zebra CS60-HC. Skanery pistoletowe Bluetooth w wersjach medycznych to Zebra DS2278-HC, Honeywell Xe… | —(linki do kart) | zgodne |
| Zdjęcie `CX3861-2892.png` (alt) | Socket Mobile DuraScan D745 — biały skaner z szarozielonymi elementami, widok pod kątem z góry, przycisk skanowania i w… | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `CX3861-2892-2.png` (alt) | Socket Mobile DuraScan D745 w kołysce ładującej w wersji dla służby zdrowia (kołyska w zestawie CX3861-2892) | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `CX3861-2892-3.png` (alt) | Socket Mobile DuraScan D745 — widok z boku pod kątem | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `CX3861-2892-4.png` (alt) | Socket Mobile DuraScan D745 — widok od spodu, okno skanera na górnym końcu | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `CX3861-2892-5.png` (alt) | Kołyska ładująca Socket Mobile w wersji dla służby zdrowia, bez skanera (w zestawie CX3861-2892) | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Cena i dostępność CX3861-2892 | strona = API: 1867,37 zł netto, available (3 szt.; PL 0, EU 3, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| Cena i dostępność CX3859-2890 | strona = API: 1787,76 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Socket Mobile DuraScan D745; brand Socket Mobile; sku CX3861-2892; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (7: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Socket Mobile DuraScan D765 (`/produkt/socket-mobile-durascan-d765`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Socket Mobile DuraScan D765 | SM6 (Specifications); SMP (lista środków) | zgodne |
| Meta title / description | Socket Mobile DuraScan D765 — skaner 2D i MRZ dla służby zdrowia / TA… / Skaner medyczny Socket Mobile DuraScan D765: kody 2D od 3 mm na fiolkach i strz… | SM6 (Specifications); SMP (lista środków) | zgodne |
| Opis, akapit 1 | Socket Mobile DuraScan D765 to skaner Bluetooth do kodów 1D/2D dla ochrony zdrowia, który czyta także strefę MRZ dokumentów. Przy rejestracji lub przyjęciu pac… | SM6 | zgodne |
| Opis, akapit 2 | Skaner odczytuje wielokierunkowo kody o wielkości od 3 mm, dlatego nadaje się do oznaczeń na fiolkach i strzykawkach. Czyta kody na powierzchniach zakrzywionyc… | SM6 | zgodne |
| Opis, akapit 3 | Obudowę z tworzywa klasy medycznej, zgodnego z ISO 10993 i EN 60529, można często czyścić agresywnymi środkami dezynfekcyjnymi. Skaner ma szczelność IP54 i wyt… | SM6; SMP | zgodne |
| Opis, akapit 4 | D765 współpracuje przez Bluetooth z iOS, Androidem i Windows 11, a aplikacje z CaptureSDK obsługują go od razu. Zestaw CX4374-3507 ma kołyskę ładującą, a CX437… | SM6 (Features, Packaging) | zgodne |
| Specyfikacja: Typ urządzenia | Bezprzewodowy skaner kodów 1D/2D i MRZ dla służby zdrowia | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Obudowa | Tworzywo klasy medycznej spełniające normy ISO 10993 i EN 60529; szczelność IP54 | SMP; SM5/SM6 | zgodne |
| Specyfikacja: Środki czyszczące dopuszczone przez pro… | Sani-Cloth HB, Sani-Cloth Plus, Super Sani-Cloth (roztwór czwartorzędowego chlorku amoniowego); Hepacide Quat… | SMP | zgodne |
| Specyfikacja: Celownik | LED (bez lasera) | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Odczyt | Kody 1D, 2D, PDF417, DotCode, fonty OCR i MRZ; kody od 3 mm; odczyt wielokierunkowy, z ekranów, z powierzchni… | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Matryca | 1280 × 960 pikseli | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Kąt odczytu | 44,5° w poziomie, 33,5° w pionie | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Kontrast druku | Od 20–25% | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Odległość odczytu | 4,1–91,7 cm (zależnie od wielkości kodu, symboliki i nośnika) | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Zasięg wybranych kodów | Code 39 3 mil: 5,8–14,7 cm; UPC-A 100%: 4,1–63,2 cm; Code 128 15 mil: 6,1–70,6 cm; Code 39 20 mil: 4,1–91,7 c… | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Kody domyślne 1D | Bookland EAN, Codabar, Code 128, Code 39, Code 93, EAN/JAN-13, EAN/JAN-8, GS1-128, GS1 DataBar, Interleaved 2… | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Kody domyślne 2D | Aztec, Composite, Data Matrix, DotCode, GS1 Data Matrix, GS1 QR, Han Xin, MaxiCode, MicroPDF417, Micro QR, PD… | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Oświetlenie otoczenia | 0–100 000 lx | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Łączność | Bluetooth 2.1 + EDR, klasa 2, szyfrowanie 56-bit; zasięg do 10 m (zależnie od otoczenia i urządzenia hosta) | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Profile Bluetooth | HID (tryb Basic), SPP (tryb Application), tryb iOS Application (domyślny) | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Systemy | Apple iOS (iPhone, iPad), Android, Windows 11 | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Integracja z aplikacjami | CaptureSDK w wersji 2.0.29 lub nowszej | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Tryb automatyczny | Odczyt bez naciskania przycisku po umieszczeniu w kołysce lub podstawce (Auto/Presentation Mode) | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Bateria | Wymienna, litowo-polimerowa, 1400 mAh, 3,7 V, 5,55 Wh, 35 g; 500 cykli ładowania | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Czas pracy | Ponad 20 h w trybie oszczędnym; 85 000 odczytów w 9 h (2 odczyty/s); 7000 odczytów w 19 h (1 odczyt co 4 s) | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Sygnalizacja | Diody LED odczytu i ładowania, sygnały dźwiękowe | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Odporność na upadki | 6 upadków z 2 m na beton, po jednym na każdą ścianę | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Test przewracania | 2500 cykli z 1 m na metalową płytę (IEC 60068-2-32) | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Temperatura pracy | 0–45°C; ładowanie powyżej 40°C może sprawiać problemy | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Temperatura przechowywania | −40–70°C | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Wilgotność | 95% przy 60°C (bez kondensacji) | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: Zgodność z normami | Bezpieczeństwo: IEC 60950-1, UL 60950-1, CAN/CSA C22.2; LED: IEC 62471, EN 62471 (grupa wolna); RoHS EN 50581… | SM6 (Specifications); SMP (lista środków) | zgodne |
| Specyfikacja: W zestawie CX4373-3506 | Skaner, pasek na nadgarstek, przewód ładujący z wtykiem baryłkowym i wtykiem USB-A, instrukcja Get Started | SM6 (Packaging) | zgodne |
| Specyfikacja: W zestawie CX4374-3507 | Skaner, pasek na nadgarstek, kołyska ładująca, przewód z wtykiem baryłkowym i wtykiem USB-A, instrukcja Get S… | SM6 (Packaging) | zgodne |
| Specyfikacja: Gwarancja | 1 rok | SM6 (Specifications); SMP (lista środków) | zgodne |
| Zastosowania | Przyjęcie pacjenta z odczytem dokumentu tożsamości; Odczyt kodów na fiolkach i strzykawkach; Opieka przy łóżku pacjenta; Banki krwi i aptek… | SM6 | zgodne |
| Wariant CX4374-3507 | Ładowanie: Kołyska ładująca | SM6 (Specifications); SMP (lista środków) | zgodne |
| Wariant CX4373-3506 | Ładowanie: Przewód USB | SM6 (Specifications); SMP (lista środków) | zgodne |
| Dymek „Ładowanie” | Co służy do ładowania skanera D765. Kołyska ładująca — znosi codzienną dezynfekcję; po włączeniu trybu automatycznego D765 czyta w niej kody bez przy… | SM6 (Specifications); SMP (lista środków) | zgodne |
| FAQ: Jakie dokumenty i kody odczytuje Socket Mobile DuraScan D765? | D765 czyta kody 1D i 2D, PDF417, DotCode, fonty OCR oraz strefę MRZ dokumentów. Przy przyjęciu pacjenta odczytuje dane z paszportu lub prawa jazdy. R… | SM6 | zgodne |
| FAQ: Jak dezynfekować skaner D765? | Obudowę D765 przeciera się chusteczką dezynfekcyjną, np. Sani-Cloth, lub ściereczką nasączoną środkiem z listy producenta podanej w specyfikacji. Pły… | SMP | zgodne |
| FAQ: Czy D765 współpracuje z tabletem iPad lub telefonem z Androidem? | Tak. Skaner łączy się przez Bluetooth klasy 2 z urządzeniami Apple, z Androidem i z Windows 11, na odległość do ok. 10 m. Domyślnie działa w trybie i… | SM6 (Bluetooth Information) | zgodne |
| FAQ: Ile odczytów wykona D765 na jednej baterii? | Bateria ma 1400 mAh i daje się wymienić w miejscu pracy. W trybie oszczędnym skaner czuwa ponad 20 h. Przy intensywnej pracy, dwóch odczytach na seku… | SM6 (Battery Information) | zgodne |
| FAQ: Kiedy wybrać D765 zamiast DuraScan D745? | D765 jest lepszym wyborem, gdy trzeba czytać dokumenty z MRZ, bardzo małe kody na fiolkach lub kody z większej odległości, do 91,7 cm. Socket Mobile… | SM6; SM5 | zgodne |
| FAQ: Jakie są alternatywy dla Socket Mobile DuraScan D765? | Podobnej wielkości skanerem dla ochrony zdrowia jest Zebra CS60-HC. Większe bezprzewodowe skanery w wersjach medycznych to Honeywell Xenon Ultra 1962… | —(linki do kart) | zgodne |
| Zdjęcie `CX4374-3507.png` (alt) | Socket Mobile DuraScan D765 — biały skaner z szarozielonymi elementami, widok z góry pod kątem | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `CX4374-3507-2.png` (alt) | Socket Mobile DuraScan D765 w kołysce ładującej dla służby zdrowia (kołyska w zestawie CX4374-3507) | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `CX4374-3507-3.png` (alt) | Socket Mobile DuraScan D765 — widok z boku, okno skanera z przodu | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `CX4374-3507-4.png` (alt) | Socket Mobile DuraScan D765 — widok od spodu | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `CX4374-3507-5.png` (alt) | Kołyska ładująca Socket Mobile dla służby zdrowia, bez skanera (w zestawie CX4374-3507) | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Cena i dostępność CX4374-3507 | strona = API: 2584,08 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| Cena i dostępność CX4373-3506 | strona = API: 2504,43 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Socket Mobile DuraScan D765; brand Socket Mobile; sku CX4374-3507; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (7: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Datalogic Gryphon GD4690 HC (`/produkt/datalogic-gryphon-gd4690-hc`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Datalogic Gryphon GD4690 HC | DDS s.2 | zgodne |
| Meta title / description | Datalogic Gryphon GD4690 HC / TAKMA / Skaner kodów Datalogic Gryphon GD4690 HC do szpitali, laboratoriów i aptek: obu… | DDS s.2 | zgodne |
| Opis, akapit 1 | Datalogic Gryphon GD4690 HC to przewodowy skaner 2D w białej wersji dla ochrony zdrowia. Jest przeznaczony dla laboratoriów, aptek i opieki przy łóżku pacjenta… | DDS (Healthcare); DPR | zgodne |
| Opis, akapit 2 | Obudowę przygotowano do dezynfekcji. Tworzywo zawiera dodatki antymikrobowe zgodne z ISO 22196 i jest przeznaczone do codziennego czyszczenia silnymi środkami… | DDS (White/Healthcare models); DQ s.33 | zgodne |
| Opis, akapit 3 | Optyka HP łączy sensor 1,5 MP z sensorem VGA. Taki układ odczytuje kody zarówno z bliska, jak i z większej odległości, także małe kody o wysokiej gęstości. Dwu… | DDS (AI Barcode Neural Decoding, Green Spot, 3GL) | zgodne |
| Opis, akapit 4 | Zestaw GD4690-HCK1-HP zawiera skaner i biały przewód USB-A 90A052278. Skaner komunikuje się przez USB-C, USB lub RS-232 i pracuje przy napięciu 4,5–14 V DC. Pr… | DEC (GD4690-HCK1-HP); DDS (Interfaces, Input Voltage, Warranty) | zgodne |
| Specyfikacja: Typ skanera | Ręczny skaner 2D (imager), przewodowy | DDS s.2 | zgodne |
| Specyfikacja: Wersja | Healthcare (HC), kolor biały | DDS s.2 | zgodne |
| Specyfikacja: Obudowa | Przygotowana do dezynfekcji; tworzywo z dodatkami antymikrobowymi zgodne z ISO 22196 | DDS s.2 | zgodne |
| Specyfikacja: Optyka | HP (High Performance), dwie matryce: 1,5 MP (1360 × 1120) i VGA (640 × 600) | DDS s.2 | zgodne |
| Specyfikacja: Dekodowanie | Dwurdzeniowy procesor, algorytmy AI z dekodowaniem neuronowym | DDS s.2 | zgodne |
| Specyfikacja: Kody 1D i 2D | Kody liniowe, w tym GS1 DataBar; Aztec, Data Matrix, MaxiCode, QR, Micro QR, Dot Code, Han Xin, GS1 Digital L… | DDS s.2 | zgodne |
| Specyfikacja: Inne funkcje odczytu | Kody Digimarc; OCR-A, OCR-B, MICR; zapis obrazu BMP, JPEG, TIFF | DDS s.2 | zgodne |
| Specyfikacja: Rozdzielczość maks. | 1D i PDF417: 0,077 mm (3 mil); Data Matrix: 0,102 mm (4 mil) | DDS s.2 | zgodne |
| Specyfikacja: Zasięg (przykłady) | EAN/UPC 13 mil: do 100 cm; Data Matrix 10 mil: 0,5–29,5 cm; QR 10 mil: 0,5–25 cm | DDS s.2 | zgodne |
| Specyfikacja: Celownik i oświetlenie | Zielony krzyż LED; oświetlenie ciepłe białe lub czerwone, wybierane przez użytkownika | DDS s.2 | zgodne |
| Specyfikacja: Potwierdzenie odczytu | Green Spot na kodzie, dioda odczytu, sygnał dźwiękowy z regulacją tonu | DDS s.2 | zgodne |
| Specyfikacja: Tolerancja ruchu | 70 IPS | DDS s.2 | zgodne |
| Specyfikacja: Kąty odczytu | Pochylenie ±65°, obrót 360°, odchylenie ±65° | DDS s.2 | zgodne |
| Specyfikacja: Interfejsy | USB-C, USB, RS-232 | DDS s.2 | zgodne |
| Specyfikacja: Zasilanie | 4,5–14 V DC ±5% | DDS s.2 | zgodne |
| Specyfikacja: Pobór prądu | Praca: < 300 mA przy 5 V, < 150 mA przy 12 V; czuwanie: < 70 mA przy 5 V | DDS s.2 | zgodne |
| Specyfikacja: Klasa ochrony | IP52 | DDS s.2 | zgodne |
| Specyfikacja: Odporność | Wielokrotne upadki z 1,8 m na beton; 2000 przewrotów z 0,5 m; spust na 10 mln naciśnięć; ESD 16 kV | DDS s.2 | zgodne |
| Specyfikacja: Temperatura | Praca: 0–50 °C; przechowywanie: −40–70 °C | DDS s.2 | zgodne |
| Specyfikacja: Wilgotność | 0–95% bez kondensacji | DDS s.2 | zgodne |
| Specyfikacja: Wymiary i masa | 18 × 6,5 × 7,9 cm; 144 g | DDS s.2 | zgodne |
| Specyfikacja: W zestawie GD4690-HCK1-HP | Skaner GD4690 HC, biały przewód USB-A 90A052278 (2 m) | DEC | zgodne |
| Specyfikacja: Oprogramowanie | Datalogic Aladdin (konfiguracja), Datalogic Connect (zarządzanie zdalne), OPOS, JavaPOS, SDK dla Androida | DDS s.2 | zgodne |
| Specyfikacja: Gwarancja producenta | 5 lat | DDS s.2 | zgodne |
| Zastosowania | Identyfikacja pacjenta; Weryfikacja leków; Oznaczanie próbek w laboratorium; Apteka szpitalna | DDS (Healthcare); DPR | zgodne |
| Wariant GD4690-HCK1-HP | Zestaw: skaner HC i biały przewód USB-A | DDS s.2 | zgodne |
| FAQ: Czym Gryphon GD4690 HC różni się od czarnego GD4690? | Wersja HC ma białą obudowę przygotowaną do dezynfekcji, z dodatkami antymikrobowymi zgodnymi z ISO 22196. W zestawie jest biały przewód 90A052278. Op… | DDS; DEC | zgodne |
| FAQ: Jakie środki dezynfekcyjne Datalogic dopuszcza dla GD4690 HC? | Dla białych modeli GD4600 HC Datalogic zaleca: Sani-Cloth HB, Sani-Cloth Plus i Super Sani-Cloth (czwartorzędowe chlorki amoniowe), Hepacide Quat II,… | DQ s.33–35 | zgodne |
| FAQ: Czy GD4690 HC odczytuje kody z ekranów telefonów i tabletów? | Tak. Seria Gryphon 4600 odczytuje kody 1D i 2D z ekranów urządzeń mobilnych, także kody GS1 Digital Link. | DDS (reading from mobile devices) | zgodne |
| FAQ: Którą wersję wybrać: GD4690 HC czy GD4620 HC? | GD4690 HC ma optykę HP z dwiema matrycami, interfejs RS-232 oraz zasilanie 4,5–14 V DC. Kod EAN/UPC 13 mil odczytuje z odległości do 100 cm. Gryphon… | DDS s.2 (HP/HD, Interfaces, Input Voltage, Reading Ranges) | zgodne |
| FAQ: Jak ustawić GD4690 HC na stanowisku? | Do pracy na blacie służy biała podstawka z ramieniem STD-G041-WH. Uchwyt HLD-G041-WH montuje się na biurku albo na ścianie. | DEC (STD-G041-WH, HLD-G041-WH) | zgodne |
| FAQ: Jakie inne przewodowe skanery dla służby zdrowia są w ofercie? | Porównywalne przewodowe modele dla ochrony zdrowia to m.in. Zebra DS2208-HC, Zebra DS4608-HC, Honeywell Xenon Ultra 1960h i Newland HR33 Marlin AI Co… | —(linki do kart) | zgodne |
| Zdjęcie `GD4690-HCK1-HP.png` (alt) | Datalogic Gryphon GD4690 HC — biały skaner w wersji dla ochrony zdrowia, widok z przodu pod kątem na okno odczytu i spu… | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `GD4690-HCK1-HP-2.png` (alt) | Datalogic Gryphon GD4690 HC — widok z góry na rękojeść i jasny przewód | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `GD4690-HCK1-HP-3.png` (alt) | Datalogic Gryphon GD4690 HC — widok z boku, rękojeść z przewodem | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `GD4690-HCK1-HP-4.png` (alt) | Datalogic Gryphon GD4690 HC z białym przewodem USB | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa Gryphon 4600 (EN) | /datasheets/datalogic-gryphon-4600-en.pdf (676 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Skrócona instrukcja Gryphon GD4600 z listą środków dla modeli HC (EN) | /instrukcje/datalogic-gryphon-corded-en.pdf (3,4 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność GD4690-HCK1-HP | strona = API: 990,19 zł netto, available (169 szt.; PL 0, EU 86, w drodze 83) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Datalogic Gryphon GD4690 HC; brand Datalogic; sku GD4690-HCK1-HP; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (19: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Datalogic Gryphon GD4620 HC (`/produkt/datalogic-gryphon-gd4620-hc`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Datalogic Gryphon GD4620 HC | DDS s.2 | zgodne |
| Meta title / description | Datalogic Gryphon GD4620 HC / TAKMA / Datalogic Gryphon GD4620 HC: biały skaner kodów 2D z optyką HD i samym USB, obu… | DDS s.2 | zgodne |
| Opis, akapit 1 | Datalogic Gryphon GD4620 HC to biały skaner 2D z przewodem USB, przeznaczony dla placówek ochrony zdrowia. Ma jedną matrycę 1,5 MP w optyce HD (High Density).… | DDS s.2; DSE („High Density (HD) for compact, complex codes”) | **niezgodne → poprawione (V2-03)** |
| Opis, akapit 2 | GD4620 HC wymaga zasilania 5 V DC. Model nie ma interfejsu RS-232, dlatego pasuje do stanowisk, na których wszystkie urządzenia łączą się przez USB lub USB-C.… | DDS (Interfaces, Input Voltage); DEC (GD4620-HCK1-HD) | zgodne |
| Opis, akapit 3 | Obudowa w kolorze White HC znosi codzienne przecieranie silnymi środkami dezynfekcyjnymi. Tworzywo z dodatkami antymikrobowymi spełnia normę ISO 22196. Wykaz p… | DDS (White/Healthcare models); DQ s.33 | zgodne |
| Opis, akapit 4 | Dekodowanie wspierają algorytmy AI. Ułatwiają odczyt kodów zniszczonych, zniekształconych oraz kodów na lśniących lub wypukłych opakowaniach. Kod wskazuje ziel… | DDS (AI decoding, LED aimer, illumination, Warranty) | zgodne |
| Specyfikacja: Typ skanera | Ręczny skaner 2D (imager), przewodowy, USB | DDS s.2 | zgodne |
| Specyfikacja: Wersja | Healthcare (HC), kolor White HC | DDS s.2 | zgodne |
| Specyfikacja: Obudowa | Przygotowana do dezynfekcji, z dodatkami antymikrobowymi zgodnymi z ISO 22196 | DDS s.2 | zgodne |
| Specyfikacja: Optyka | HD (High Density), jedna matryca 1,5 MP (1360 × 1120) | DDS s.2 | zgodne |
| Specyfikacja: Dekodowanie | Dwurdzeniowy procesor i algorytmy AI | DDS s.2 | zgodne |
| Specyfikacja: Kody 1D i 2D | Kody liniowe i GS1 DataBar; Data Matrix, QR, Micro QR, Aztec, MaxiCode, Dot Code, Han Xin, GS1 Digital Link;… | DDS s.2 | zgodne |
| Specyfikacja: Inne funkcje odczytu | Digimarc; OCR-A, OCR-B, MICR; przechwytywanie obrazu (BMP, JPEG, TIFF) | DDS s.2 | zgodne |
| Specyfikacja: Rozdzielczość maks. | 0,077 mm (3 mil) dla 1D i PDF417; 0,102 mm (4 mil) dla Data Matrix | DDS s.2 | zgodne |
| Specyfikacja: Zasięg (przykłady) | EAN/UPC 13 mil: do 50 cm; Code 39 3 mil: 2,5–15 cm; Data Matrix 10 mil: 0,5–20 cm; QR 10 mil: 0,5–20 cm | DDS s.2 | zgodne |
| Specyfikacja: Celownik i oświetlenie | Zielony krzyż LED; dwukolorowe LED: ciepłe białe i czerwone | DDS s.2 | zgodne |
| Specyfikacja: Sygnalizacja odczytu | Green Spot, dioda odczytu, brzęczyk z regulowanym tonem | DDS s.2 | zgodne |
| Specyfikacja: Interfejsy | USB-C, USB (bez RS-232) | DDS s.2 | zgodne |
| Specyfikacja: Zasilanie | 5 V DC ±5% | DDS s.2 | zgodne |
| Specyfikacja: Klasa ochrony | IP52 | DDS s.2 | zgodne |
| Specyfikacja: Odporność | Upadki z 1,8 m na beton; 2000 przewrotów z 0,5 m; spust 10 mln naciśnięć | DDS s.2 | zgodne |
| Specyfikacja: Temperatura pracy | 0–50 °C | DDS s.2 | zgodne |
| Specyfikacja: Wymiary i masa | 18 × 6,5 × 7,9 cm; 144 g | DDS s.2 | zgodne |
| Specyfikacja: W zestawie GD4620-HCK1-HD | Skaner GD4620 HC i biały przewód USB-A 90A052278 | DEC | zgodne |
| Specyfikacja: Gwarancja producenta | 5 lat | DDS s.2 | zgodne |
| Zastosowania | Rejestracja i przyjęcie pacjenta; Oznaczanie próbek; Laboratorium; Apteka | DDS (Healthcare); DPR | zgodne |
| Wariant GD4620-HCK1-HD | Zestaw: skaner HD i biały przewód USB-A | DDS s.2 | zgodne |
| FAQ: Czy GD4620 HC można podłączyć do portu RS-232? | Nie. GD4620 HC obsługuje wyłącznie USB i USB-C oraz wymaga zasilania 5 V. Do stanowisk z RS-232 przeznaczony jest Gryphon GD4690 HC. | DDS (Interfaces, Input Voltage) | zgodne |
| FAQ: Czym czyścić i dezynfekować GD4620 HC? | Lista Datalogic dla białych skanerów GD4600 HC obejmuje: alkohol izopropylowy 70% w chusteczkach, nadtlenek wodoru 3%, chusteczki Sani-Cloth HB, Sani… | DQ s.33–35 | zgodne |
| FAQ: Co oznacza optyka HD w GD4620 HC? | HD (High Density) to wersja z jedną matrycą 1,5 MP. Odczytuje kody 1D o szerokości modułu 3 mil i Data Matrix 4 mil. Zasięg jest krótszy niż w optyce… | DDS s.2 (Imager Sensor HD, Reading Ranges) | zgodne |
| FAQ: Jaki przewód zamówić do komputera z gniazdem USB-C? | Do portu USB-C służy biały przewód USB-C 90A052353 o długości 2 m. Zestaw GD4620-HCK1-HD zawiera przewód USB-A 90A052278. | DEC (90A052353, 90A052278) | zgodne |
| FAQ: Jaka jest gwarancja na GD4620 HC? | Datalogic udziela 5 lat gwarancji fabrycznej na przewodowe modele Gryphon 4600. Programy serwisowe EASEOFCARE rozszerzają zakres ochrony. | DDS (Warranty, EASEOFCARE) | zgodne |
| FAQ: Jakie skanery są alternatywą dla GD4620 HC? | Alternatywą dla GD4620 HC mogą być: Honeywell Xenon Ultra 1960h, Newland HR23 Dorada AI Corded White albo Zebra DS2208-HC. | —(linki do kart) | zgodne |
| Zdjęcie `GD4620-HCK1-HD.png` (alt) | Datalogic Gryphon GD4620 HC — biała obudowa dla ochrony zdrowia, widok z przodu pod kątem (zdjęcie poglądowe: obudowa w… | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `GD4620-HCK1-HD-2.png` (alt) | Datalogic Gryphon GD4620 HC — biała obudowa z jasnym przewodem, ujęcie z góry (obudowa wspólna dla przewodowych Gryphon… | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa Gryphon 4600 (EN) | /datasheets/datalogic-gryphon-4600-en.pdf (676 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Skrócona instrukcja Gryphon GD4600 z listą środków dla modeli HC (EN) | /instrukcje/datalogic-gryphon-corded-en.pdf (3,4 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność GD4620-HCK1-HD | strona = API: 891,64 zł netto, available (291 szt.; PL 0, EU 291, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Datalogic Gryphon GD4620 HC; brand Datalogic; sku GD4620-HCK1-HD; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (16: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Datalogic Gryphon GBT4600 HC (`/produkt/datalogic-gryphon-gbt4600-hc`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Datalogic Gryphon GBT4600 HC | DDS s.2 | zgodne |
| Meta title / description | Datalogic Gryphon GBT4600 HC / TAKMA / Bezprzewodowy skaner Datalogic Gryphon GBT4600 HC dla służby zdrowia: Bluetooth… | DDS s.2 | zgodne |
| Opis, akapit 1 | Datalogic Gryphon GBT4600 HC to biały skaner kodów 2D bez przewodu, wyposażony w Bluetooth 5.2 i przeznaczony dla ochrony zdrowia. Bez przewodu łatwiej skanowa… | DDS (Healthcare) | zgodne |
| Opis, akapit 2 | Skaner ładuje się indukcyjnie w bazie WLC4690. Baza nie ma styków, więc nie trzeba ich czyścić ani konserwować. Obudowa jest przygotowana do dezynfekcji, a two… | DDS (Wireless charging, White/Healthcare models) | zgodne |
| Opis, akapit 3 | Poza sygnałem dźwiękowym i zielonym punktem Green Spot model bezprzewodowy potwierdza odczyt wibracją. Optyka HP z matrycami 1,5 MP i VGA odczytuje kody 1D i 2… | DDS s.2 (Gryphon GBT4600, Battery, Reading Indicators) | zgodne |
| Opis, akapit 4 | Zestaw GBT4600-HC-BTK1-HP zawiera skaner, bazę WLC4690-HC-BT i biały przewód USB-A 90A052278. GBT4600-HC-HP to sam skaner do posiadanej bazy. Dane trafiają do… | DEC (GBT4600-HC-BTK1-HP, GBT4600-HC-HP); DDS (profiles, Warranty) | zgodne |
| Opis, akapit 5 | Baza ładuje akumulator skanera. Przewód łączy bazę z komputerem. | DEC (zawartość zestawu) | zgodne |
| Specyfikacja: Typ skanera | Ręczny skaner 2D (imager), bezprzewodowy, Bluetooth | DDS s.2 | zgodne |
| Specyfikacja: Wersja | Healthcare (HC), kolor White HC | DDS s.2 | zgodne |
| Specyfikacja: Obudowa | Przygotowana do dezynfekcji; dodatki antymikrobowe zgodne z ISO 22196 | DDS s.2 | zgodne |
| Specyfikacja: Optyka | HP: 1,5 MP (1360 × 1120) + VGA (640 × 600) | DDS s.2 | zgodne |
| Specyfikacja: Odczyt | Kody 1D i 2D, GS1 Digital Link, Digimarc, OCR-A, OCR-B, MICR; odczyt z ekranów urządzeń mobilnych | DDS s.2 | zgodne |
| Specyfikacja: Zasięg (przykłady) | EAN/UPC 13 mil: do 100 cm; PDF417 10 mil: 0,5–38,5 cm; Data Matrix 10 mil: 0,5–29,5 cm | DDS s.2 | zgodne |
| Specyfikacja: Potwierdzenie odczytu | Green Spot, 3GL, sygnał dźwiękowy, wibracja | DDS s.2 | zgodne |
| Specyfikacja: Bluetooth | 5.2 Classic i Low Energy; klasa mocy 1, 2 lub 3 do wyboru; 2,4 GHz | DDS s.2 | zgodne |
| Specyfikacja: Zasięg radiowy | Do 100 m w otwartej przestrzeni (klasa 1, połączenie z bazą) | DDS s.2 | zgodne |
| Specyfikacja: Profile | SPP, HID, HOGP | DDS s.2 | zgodne |
| Specyfikacja: Skanery na jedną bazę | Do 7 | DDS s.2 | zgodne |
| Specyfikacja: Bezpieczeństwo transmisji | Szyfrowanie danych, uwierzytelnianie skanera | DDS s.2 | zgodne |
| Specyfikacja: Akumulator | Li-Ion 3250 mAh; ponad 80 000 odczytów na ładowaniu; ładowanie do pełna 3,5 h, 10–80% w 2 h (przy 12 V DC) | DDS s.2 | zgodne |
| Specyfikacja: Ładowanie | Indukcyjne w bazie WLC4690 (zasilanie bazy 4,5–14 V DC) | DDS s.2 | zgodne |
| Specyfikacja: Interfejsy bazy | USB-C, USB, RS-232 | DDS s.2 | zgodne |
| Specyfikacja: Klasa ochrony | IP52 | DDS s.2 | zgodne |
| Specyfikacja: Odporność | Upadki z 1,8 m na beton; 2000 przewrotów z 0,5 m | DDS s.2 | zgodne |
| Specyfikacja: Temperatura pracy | 0–50 °C | DDS s.2 | zgodne |
| Specyfikacja: Wymiary i masa | 18 × 6,5 × 7,9 cm; 218 g z akumulatorem | DDS s.2 | zgodne |
| Specyfikacja: Gwarancja producenta | 3 lata | DDS s.2 | zgodne |
| Zastosowania | Identyfikacja pacjenta przy łóżku; Weryfikacja leków; Laboratorium; Apteka | DDS (Healthcare); DPR | zgodne |
| Wariant GBT4600-HC-BTK1-HP | Zawartość: Skaner, baza i przewód | DDS s.2 | zgodne |
| Wariant GBT4600-HC-HP | Zawartość: Sam skaner | DDS s.2 | zgodne |
| Dymek „Zawartość” | Zawartość pozycji. Skaner, baza i przewód — skaner HC z akumulatorem, biała baza Bluetooth z ładowaniem indukcyjnym i biały przewód USB-A. Sam skaner… | DDS s.2 | zgodne |
| FAQ: Czym GBT4600 HC różni się od zwykłego GBT4600? | Różni się kolorem White HC i tworzywem obudowy: jest ono przygotowane do dezynfekcji i zawiera dodatki antymikrobowe (ISO 22196). Do ładowania służy… | DDS; DEC | zgodne |
| FAQ: Czy GBT4600 HC połączy się z tabletem bez bazy? | Tak. Przez Bluetooth skaner paruje się wprost z komputerem lub tabletem w profilu HID, SPP albo HOGP. Akumulator w skanerze ładuje się indukcyjnie w… | DDS (Standard profiles) | zgodne |
| FAQ: Czy GBT4600 HC potwierdza odczyt bez dźwięku? | Tak. Modele bezprzewodowe Gryphon 4600 sygnalizują odczyt wibracją. Zielony punkt Green Spot pojawia się bezpośrednio na odczytanym kodzie. Ton sygna… | DDS (Reading Indicators) | zgodne |
| FAQ: Jak dezynfekować GBT4600 HC? | Obudowa wersji HC jest przeznaczona do codziennego czyszczenia silnymi środkami dezynfekcyjnymi. Przed wyborem preparatu warto potwierdzić go w TAKMA… | DDS (White/Healthcare models) | zgodne |
| FAQ: Jak zamocować bazę WLC4690-HC-BT na wózku medycznym? | Do mocowania bazy na wózku służy biały klips CC-WLC4690-HC. Adaptery PA-WLC4690-HC i BA-WLC4690-HC pozwalają użyć systemów mocowania WLC4090 i WLC419… | DEC (CC/PA/BA-WLC4690-HC) | zgodne |
| FAQ: Jakie bezprzewodowe skanery dla służby zdrowia są alternatywą? | Do porównania w klasie skanerów Bluetooth: Newland HR33 Marlin AI Bluetooth White, Zebra DS2278-HC oraz Honeywell Xenon Ultra 1962h. Wersja z radiem… | —(linki do kart) | zgodne |
| Zdjęcie `GBT4600-HC-BTK1-HP.png` (alt) | Datalogic Gryphon GBT4600 HC — biały skaner bezprzewodowy w wersji dla ochrony zdrowia, widok z góry na rękojeść bez pr… | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa Gryphon 4600 (EN) | /datasheets/datalogic-gryphon-4600-en.pdf (676 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Skrócona instrukcja Gryphon GBT4600 / GM4600 i baz WLC4690 (EN) | /instrukcje/datalogic-gryphon-cordless-en.pdf (3,0 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność GBT4600-HC-BTK1-HP | strona = API: 2388,96 zł netto, available (16 szt.; PL 0, EU 16, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| Cena i dostępność GBT4600-HC-HP | strona = API: 1634,28 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Datalogic Gryphon GBT4600 HC; brand Datalogic; sku GBT4600-HC-BTK1-HP; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (19: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Datalogic Gryphon GM4600 HC (`/produkt/datalogic-gryphon-gm4600-hc`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Datalogic Gryphon GM4600 HC | DDS s.2 | zgodne |
| Meta title / description | Datalogic Gryphon GM4600 HC / TAKMA / Datalogic Gryphon GM4600 HC: bezprzewodowy skaner 2D z systemem STAR 433 MHz dl… | DDS s.2 | zgodne |
| Opis, akapit 1 | Datalogic Gryphon GM4600 HC przesyła dane przez system radiowy STAR Cordless w paśmie 433,92 MHz. To biała wersja skanera Gryphon 4600 dla ochrony zdrowia. Kom… | DDS s.2 (Gryphon GM4600 STAR) | zgodne |
| Opis, akapit 2 | Do jednego odbiornika można przypisać do 16 skanerów w trybie punkt–wielopunkt. Na otwartej przestrzeni łączność sięga co najmniej 50 m. | DDS s.2 | zgodne |
| Opis, akapit 3 | Tworzywo obudowy zawiera dodatek antymikrobowy (zgodność z ISO 22196), a samą obudowę przygotowano do codziennej dezynfekcji. Baza WLC4690-HC-433 jest jednocze… | DDS (White/Healthcare models, Battery); DEC (WLC4690-HC-433) | zgodne |
| Opis, akapit 4 | GM4600-HC-433K1-HP zawiera skaner, bazę WLC4690-HC-433 i biały przewód USB-A 90A052278. GM4600-HC-433-HP obejmuje tylko skaner. Model bezprzewodowy ma 3 lata g… | DEC (GM4600-HC-433K1-HP, -433-HP); DDS (Warranty) | zgodne |
| Opis, akapit 5 | Skaner przesyła dane wyłącznie przez bazę STAR, która łączy się z komputerem przewodem. | DEC | zgodne |
| Specyfikacja: Typ skanera | Ręczny skaner 2D (imager), bezprzewodowy, radio STAR | DDS s.2 | zgodne |
| Specyfikacja: Wersja | Healthcare (HC), biała | DDS s.2 | zgodne |
| Specyfikacja: Obudowa | Disinfectant-ready (przygotowana do dezynfekcji), tworzywo z dodatkami antymikrobowymi wg ISO 22196 | DDS s.2 | zgodne |
| Specyfikacja: Optyka | HP, dwie matryce 1,5 MP + VGA | DDS s.2 | zgodne |
| Specyfikacja: Odczyt | 1D, 2D, GS1 Digital Link, Digimarc, OCR; kody z ekranów | DDS s.2 | zgodne |
| Specyfikacja: Zasięg (przykłady) | EAN/UPC 13 mil: do 100 cm; Code 128 5 mil: 1,5–30 cm; QR 10 mil: 0,5–25 cm | DDS s.2 | zgodne |
| Specyfikacja: Sygnalizacja | Wibracja, Green Spot, 3GL, dźwięk | DDS s.2 | zgodne |
| Specyfikacja: Radio | Datalogic STAR Cordless System, 433,92 MHz (pasmo ISM), moc wypromieniowana < 10 dBm | DDS s.2 | zgodne |
| Specyfikacja: Konfiguracje radiowe | Punkt–punkt i punkt–wielopunkt; komunikacja dwukierunkowa | DDS s.2 | zgodne |
| Specyfikacja: Skanery na jeden odbiornik | Do 16 | DDS s.2 | zgodne |
| Specyfikacja: Zasięg radiowy | Minimum 50 m w otwartej przestrzeni | DDS s.2 | zgodne |
| Specyfikacja: Akumulator | Li-Ion 3250 mAh; ponad 80 000 odczytów; 10–80% w 2 h, do pełna 3,5 h przy 12 V DC | DDS s.2 | zgodne |
| Specyfikacja: Baza | WLC4690-HC-433: ładowanie indukcyjne, USB-C / USB / RS-232, zasilanie 4,5–14 V DC | DDS s.2 | zgodne |
| Specyfikacja: Klasa ochrony | IP52 | DDS s.2 | zgodne |
| Specyfikacja: Odporność na upadki | Wielokrotne, z 1,8 m na beton | DDS s.2 | zgodne |
| Specyfikacja: Temperatura pracy | 0–50 °C | DDS s.2 | zgodne |
| Specyfikacja: Masa | 218 g z akumulatorem | DDS s.2 | zgodne |
| Specyfikacja: Gwarancja producenta | 3 lata | DDS s.2 | zgodne |
| Zastosowania | Oddział z wieloma skanerami na jednym odbiorniku; Weryfikacja leków na oddziale; Oznaczanie próbek; Apteka szpitalna | DDS; DPR | zgodne |
| Wariant GM4600-HC-433K1-HP | Zawartość: Skaner, baza i przewód | DDS s.2 | zgodne |
| Wariant GM4600-HC-433-HP | Zawartość: Sam skaner | DDS s.2 | zgodne |
| Dymek „Zawartość” | Zakres dostawy GM4600 HC. Skaner, baza i przewód — skaner, biały odbiornik radiowy STAR 433 MHz z ładowaniem indukcyjnym i biały przewód USB-A. Sam s… | DDS s.2 | zgodne |
| FAQ: Kiedy wybrać GM4600 HC zamiast GBT4600 HC? | GM4600 HC przesyła dane w paśmie 433 MHz przez system STAR i obsługuje do 16 skanerów na jednym odbiorniku. GBT4600 HC korzysta z Bluetooth 5.2, łącz… | DDS s.2; DEC | **niezgodne → poprawione (V2-04)** |
| FAQ: Czym GM4600 HC różni się od GM4600 w kolorze czarnym? | Model HC ma białą obudowę z tworzywa z dodatkiem antymikrobowym wg ISO 22196, przystosowaną do dezynfekcji. Współpracuje z bazą WLC4690-HC-433. Radio… | DDS; DEC | zgodne |
| FAQ: Jakich środków użyć do dezynfekcji GM4600 HC? | Obudowy HC Datalogic są przeznaczone do częstej dezynfekcji silnymi preparatami. Preparat warto uzgodnić z TAKMA lub z Datalogic przed wdrożeniem. Ba… | DDS (White/Healthcare models) | zgodne |
| FAQ: Ile trwa ładowanie akumulatora GM4600 HC? | Od 10 do 80% w 2 h, a od zera do pełna w 3,5 h przy zasilaniu bazy 12 V DC. Pełne naładowanie wystarcza na ponad 80 000 odczytów. Baza może być zasil… | DDS (Battery, Input Voltage Cradle); DEC (8-0935) | zgodne |
| FAQ: Jakie skanery bezprzewodowe dla służby zdrowia są alternatywą? | Podobną klasę reprezentują m.in. Zebra DS8288-HC, Honeywell Xenon Ultra 1962h oraz Newland HR23 Dorada AI Bluetooth White. | —(linki do kart) | zgodne |
| Zdjęcie `GM4600-HC-433K1-HP.png` (alt) | Datalogic Gryphon GM4600 HC — biały skaner radiowy 433 MHz, widok z góry (obudowa wspólna z GBT4600 HC) | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa Gryphon 4600 (EN) | /datasheets/datalogic-gryphon-4600-en.pdf (676 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Skrócona instrukcja Gryphon GBT4600 / GM4600 i baz WLC4690 (EN) | /instrukcje/datalogic-gryphon-cordless-en.pdf (3,0 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność GM4600-HC-433K1-HP | strona = API: 2388,96 zł netto, available (173 szt.; PL 0, EU 117, w drodze 56) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| Cena i dostępność GM4600-HC-433-HP | strona = API: 1634,28 zł netto, available (9 szt.; PL 0, EU 3, w drodze 6) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Datalogic Gryphon GM4600 HC; brand Datalogic; sku GM4600-HC-433K1-HP; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (19: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Newland HR33 Marlin AI Corded White (`/produkt/newland-hr33-marlin-ai-white`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Newland HR33 Marlin AI Corded White | N33C s.2–3 | zgodne |
| Meta title / description | Newland HR33 Marlin AI Corded White — skaner dla szpitali / TAKMA / Przewodowy skaner Newland HR33 Marlin AI Corded White dla służby zdrowia: powło… | N33C s.2–3 | zgodne |
| Opis, akapit 1 | Newland HR33 Marlin AI Corded White to przewodowy skaner 2D, który Newland projektuje dla zastosowań w ochronie zdrowia. Obudowa ma powłokę antymikrobową i bia… | N33C s.1; strona produktu („designed for healthcare applications”); N32 | zgodne |
| Opis, akapit 2 | Matryca 1280 × 800 i technologia UIMG z wykrywaniem kodów przez AI odczytują kody 1D i 2D, także uszkodzone, zniekształcone, odblaskowe lub umieszczone na zakr… | N33C s.1 | zgodne |
| Opis, akapit 3 | Skaner wspiera skrypty w języku Lua (Advanced Scripting). Pozwalają one zmienić sposób przetwarzania danych z kodu przed wysłaniem do systemu. Prostsze ustawie… | N33C s.1 (Advanced Scripting) | zgodne |
| Opis, akapit 4 | Wersja NLS-HR3300-V2-S5-W ma biały przewód USB 2 m. NLS-HR3300-V2-SA-W dodaje białą podstawkę NLS-STD23-33-SA-W, którą można ustawić pionowo lub płasko oraz za… | N33C s.3 (What’s in the box); N33C s.1 (stand, IP52, 1,8 m, 5 lat) | zgodne |
| Specyfikacja: Typ skanera | Ręczny skaner 2D, przewodowy | N33C s.2–3 | zgodne |
| Specyfikacja: Obudowa | Biała, z powłoką antymikrobową | N33C s.2–3 | zgodne |
| Specyfikacja: Matryca | CMOS 1280 × 800 | N33C s.2–3 | zgodne |
| Specyfikacja: Dekodowanie | UIMG, wykrywanie kodów przez AI | N33C s.2–3 | zgodne |
| Specyfikacja: Kody 1D | Code 128, GS1-128, ISBT 128, Code 39, Code 93, Codabar, UPC-A/E, EAN-13/8, ISBN, ISSN, ITF-14, 2 z 5, MSI-Ple… | N33C s.2–3 | zgodne |
| Specyfikacja: Kody 2D | PDF417, Micro PDF417, QR, Micro QR, Data Matrix, Aztec, MaxiCode, Dotcode, Code One, TLC-39, Han Xin (Chinese… | N33C s.2–3 | zgodne |
| Specyfikacja: OCR | Standardowo: paszporty i wybrane dokumenty; opcjonalnie: daty i znaki alfanumeryczne | N33C s.2–3 | zgodne |
| Specyfikacja: Rozdzielczość | ≥ 3 mil | N33C s.2–3 | zgodne |
| Specyfikacja: Głębia ostrości | EAN-13 13 mil: 35–535 mm; Data Matrix 10 mil: 20–245 mm; Code 39 5 mil: 30–270 mm; PDF417 6,7 mil: 35–215 mm | N33C s.2–3 | zgodne |
| Specyfikacja: Pole widzenia | 48° w poziomie, 30° w pionie | N33C s.2–3 | zgodne |
| Specyfikacja: Kąty odczytu | Pochylenie ±60°, obrót 360°, odchylenie ±60° | N33C s.2–3 | zgodne |
| Specyfikacja: Minimalny kontrast | 15% | N33C s.2–3 | zgodne |
| Specyfikacja: Celownik i oświetlenie | Celownik LED, oświetlenie białe LED | N33C s.2–3 | zgodne |
| Specyfikacja: Sygnalizacja | Dźwięk, dioda LED, wibracja | N33C s.2–3 | zgodne |
| Specyfikacja: Interfejsy | USB, USB-KBW, USB-CDC, HID-POS, RS-232 | N33C s.2–3 | zgodne |
| Specyfikacja: Zasilanie | 5 V DC ±5%; maks. 260 mA w pracy, 100 mA w czuwaniu | N33C s.2–3 | zgodne |
| Specyfikacja: Klasa ochrony | IP52 | N33C s.2–3 | zgodne |
| Specyfikacja: Odporność na upadki | 1,8 m na beton | N33C s.2–3 | zgodne |
| Specyfikacja: ESD | ±8 kV kontaktowo, ±15 kV przez powietrze | N33C s.2–3 | zgodne |
| Specyfikacja: Temperatura | Praca: −20–50 °C; przechowywanie: −40–70 °C | N33C s.2–3 | zgodne |
| Specyfikacja: Wilgotność | 5–95% bez kondensacji | N33C s.2–3 | zgodne |
| Specyfikacja: Wymiary i masa | 117,5 × 67,5 × 144 mm; 140 g | N33C s.2–3 | zgodne |
| Specyfikacja: Konfiguracja | EasySet; Advanced Scripting (Lua) | N33C s.2–3 | zgodne |
| Specyfikacja: Gwarancja producenta | 5 lat; kontrakty serwisowe na 3 lub 5 lat | N33C s.2–3 | zgodne |
| Zastosowania | Skanowanie w ochronie zdrowia z dużą liczbą odczytów; Odczyt kodów uszkodzonych i na zakrzywionych powierzchniach; Stanowisko z podstawką w… | N33C s.1 | zgodne |
| Wariant NLS-HR3300-V2-S5-W | Przewód: USB, biały, 2 m | N33C s.2–3 | zgodne |
| Wariant NLS-HR3300-V2-SA-W | Przewód: USB, biały, 2 m, Podstawka: Tak | N33C s.2–3 | zgodne |
| Wariant NLS-HR3300-V2-S8-W | Przewód: RS-232, 2 m, adapter Multiplug | N33C s.2–3 | zgodne |
| Dymek „Przewód” | Przewód dołączony do HR33 Marlin AI Corded White. USB — biały prosty przewód 2 m; skaner pracuje jako klawiatura (USB-KBW), port szeregowy (USB-CDC)… | N33C s.2–3 | zgodne |
| Dymek „Podstawka” | Biała regulowana podstawka Newland w zestawie. Ustawienie od pionowego do płaskiego; montaż na biurku albo na ścianie. | N33C s.2–3 | zgodne |
| FAQ: Czym HR33 Marlin AI Corded White różni się od HR33 Marlin w kolorze c… | Wersja White ma białą obudowę z powłoką antymikrobową i jest przeznaczona dla ochrony zdrowia. Należy do generacji AI, która wykrywa kody przy użyciu… | N33C; strona produktu | zgodne |
| FAQ: Czy HR33 AI Corded White zastępuje HR32 Marlin Corded HC? | Tak. Newland wycofał HR32 Marlin Corded HC i jako alternatywę wskazuje HR33 Marlin AI Corded White. | N32 | zgodne |
| FAQ: Jak czyścić HR33 Marlin AI Corded White? | Przed czyszczeniem skaner należy odłączyć i wyłączyć. Przewodnik czyszczenia Newland dla skanerów ręcznych dopuszcza chusteczki dezynfekcyjne lub pre… | NCG s.1–2 | zgodne |
| FAQ: Którą konfigurację HR33 AI Corded White wybrać? | NLS-HR3300-V2-S5-W to skaner z białym przewodem USB. NLS-HR3300-V2-SA-W zawiera dodatkowo białą podstawkę regulowaną. NLS-HR3300-V2-S8-W ma przewód R… | N33C s.3 | zgodne |
| FAQ: Czy HR33 AI Corded White sygnalizuje odczyt wibracją? | Tak. Poza sygnałem dźwiękowym i diodą LED skaner potwierdza odczyt wibracją. | N33C s.2 (Notifications) | zgodne |
| FAQ: Jakie skanery są alternatywą dla HR33 Marlin AI Corded White? | Tańszy model tej serii to Newland HR23 Dorada AI Corded White. Inne przewodowe skanery dla ochrony zdrowia to m.in. Datalogic Gryphon GD4690 HC i Zeb… | —(linki do kart) | zgodne |
| Zdjęcie `NLS-HR3300-V2-S5-W.png` (alt) | Newland HR33 Marlin AI Corded White — widok z przodu pod kątem, okno skanera i spust | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR3300-V2-S5-W-2.png` (alt) | Newland HR33 Marlin AI Corded White — widok z przodu na okno skanera i rękojeść | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR3300-V2-S5-W-3.png` (alt) | Newland HR33 Marlin AI Corded White — widok z boku, rękojeść i przewód | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR3300-V2-S5-W-4.png` (alt) | Newland HR33 Marlin AI Corded White — skaner położony na boku | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR3300-V2-S5-W-5.png` (alt) | Newland HR33 Marlin AI Corded White — widok z góry na głowicę z logo Newland | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR3300-V2-S5-W-6.png` (alt) | Newland HR33 Marlin AI Corded White — widok z tyłu na głowicę i rękojeść | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa HR33 Marlin AI Corded White (EN) | /downloads/newland/HR33-Marlin-AI-Corded-White-Datasheet.pdf (947 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Instrukcja HR23 / HR33 AI, wersje przewodowe (EN) | /downloads/newland/HR23-HR33-AI-Corded-User-Guide.pdf (5,6 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: EasySet — oprogramowanie konfiguracyjne (strona producenta) | https://www.newland-id.com/en/software/easyset (Online) | HTTP zewn.; rozmiar zgodny | zgodne |
| Cena i dostępność NLS-HR3300-V2-S5-W | strona = API: 460,46 zł netto, on-order (18 szt.; PL 0, EU 0, w drodze 18) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| Cena i dostępność NLS-HR3300-V2-SA-W | strona = API: 768,69 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| Cena i dostępność NLS-HR3300-V2-S8-W | strona = API: 808,87 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Newland HR33 Marlin AI Corded White; brand Newland; sku NLS-HR3300-V2-S5-W; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (15: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Newland HR33 Marlin AI Bluetooth White (`/produkt/newland-hr33-marlin-ai-bt-white`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Newland HR33 Marlin AI Bluetooth White | N33B s.2–3 | zgodne |
| Meta title / description | Newland HR33 Marlin AI Bluetooth White — skaner do szpitala / TAKMA / Bezprzewodowy skaner Newland HR33 Marlin AI Bluetooth White dla szpitali: powło… | N33B s.2–3 | zgodne |
| Opis, akapit 1 | Newland HR33 Marlin AI Bluetooth White to bezprzewodowy skaner 2D w białej obudowie z powłoką antymikrobową. Newland przeznacza go do zastosowań w ochronie zdr… | N33B s.1; N32 | zgodne |
| Opis, akapit 2 | Dane trafiają przez Bluetooth 5.0 do stacji komunikacyjno-ładującej, do klucza sprzętowego (dongle) albo bezpośrednio do urządzenia z Bluetooth. W otwartej prz… | N33B s.1–2 (High Connectivity, Memory Flash) | zgodne |
| Opis, akapit 3 | Akumulator litowo-jonowy 2600 mAh wyjmuje się po zwolnieniu zatrzasku komory. Dwukolorowy wskaźnik informuje o niskim poziomie naładowania. Stacja ładuje skane… | N33B s.1 (Easily replaceable battery), s.3 (Accessories) | zgodne |
| Opis, akapit 4 | Matryca 1280 × 800 z wykrywaniem kodów przez AI odczytuje kody uszkodzone i odblaskowe, a także kody Digimarc i znaki OCR. Zakres temperatury pracy wynosi −20–… | N33B s.1–3 | zgodne |
| Specyfikacja: Typ skanera | Ręczny skaner 2D, bezprzewodowy, Bluetooth | N33B s.2–3 | zgodne |
| Specyfikacja: Obudowa | Biała, z powłoką antymikrobową | N33B s.2–3 | zgodne |
| Specyfikacja: Matryca | CMOS 1280 × 800 | N33B s.2–3 | zgodne |
| Specyfikacja: Dekodowanie | UIMG, wykrywanie kodów przez AI | N33B s.2–3 | zgodne |
| Specyfikacja: Kody 2D | PDF417, Micro PDF417, QR, Micro QR, Data Matrix, Aztec, MaxiCode, Dotcode, Code One, Han Xin (Chinese Sensibl… | N33B s.2–3 | zgodne |
| Specyfikacja: Kody 1D | Code 128, GS1-128, ISBT 128, Code 39, Codabar, UPC/EAN, ITF-14, GS1 DataBar, Code 49, Code 16K i inne | N33B s.2–3 | zgodne |
| Specyfikacja: Głębia ostrości | EAN-13 13 mil: 35–535 mm; Data Matrix 10 mil: 20–245 mm | N33B s.2–3 | zgodne |
| Specyfikacja: Sygnalizacja | Dźwięk, wibracja, dioda LED | N33B s.2–3 | zgodne |
| Specyfikacja: Bluetooth | 5.0; zasięg ≥ 100 m w otwartej przestrzeni | N33B s.2–3 | zgodne |
| Specyfikacja: Tryby komunikacji | Synchroniczny, asynchroniczny, wsadowy (batch) | N33B s.2–3 | zgodne |
| Specyfikacja: Pamięć | ≥ 16 384 kody (powyżej 60 bajtów) | N33B s.2–3 | zgodne |
| Specyfikacja: Interfejsy stacji | USB-A, USB-KBW, USB-CDC, HID-POS | N33B s.2–3 | zgodne |
| Specyfikacja: Akumulator | Li-Ion 2600 mAh, wymienny; ≥ 15 h pracy ciągłej przy odczycie co 6 s; ładowanie ≤ 6 h | N33B s.2–3 | zgodne |
| Specyfikacja: Temperatura ładowania | 0–45 °C | N33B s.2–3 | zgodne |
| Specyfikacja: Klasa ochrony | IP52 | N33B s.2–3 | zgodne |
| Specyfikacja: Odporność na upadki | 1,8 m na beton | N33B s.2–3 | zgodne |
| Specyfikacja: Temperatura pracy | −20–50 °C | N33B s.2–3 | zgodne |
| Specyfikacja: Wymiary | Skaner: 117,5 × 67,5 × 144 mm; stacja: 140 × 90 × 144,5 mm | N33B s.2–3 | zgodne |
| Specyfikacja: Masa | Skaner: 210 g; stacja: 340,5 g | N33B s.2–3 | zgodne |
| Specyfikacja: Certyfikaty | CE RED, FCC ID, RoHS 2.0, IEC 62471, IEC 60825 | N33B s.2–3 | zgodne |
| Specyfikacja: W zestawie | Skaner, stacja komunikacyjno-ładująca, przewód USB | N33B s.3 | zgodne |
| Specyfikacja: Gwarancja producenta | 5 lat | N33B s.2–3 | zgodne |
| Zastosowania | Odczyt kodów przy łóżku pacjenta bez przewodu; Inwentaryzacja z zapisem kodów w pamięci; Zamiennik wycofanego HR32 Marlin Bluetooth HC | N33B; N32 | zgodne |
| Wariant NLS-HR3300-BT-V2-W | Skaner Bluetooth ze stacją dokującą i przewodem USB | N33B s.2–3 | zgodne |
| FAQ: Czy HR33 Marlin AI Bluetooth White działa bez stacji? | Tak. Bluetooth pozwala połączyć skaner wprost z urządzeniem, bez stacji. Stacja z zestawu ładuje skaner i może przekazywać dane do komputera. | NUG (Bluetooth HID); N33B | zgodne |
| FAQ: Co, jeśli skaner wyjdzie poza zasięg Bluetooth? | W trybie wsadowym skaner zapisuje kody w pamięci i wysyła je po ponownym połączeniu. Pamięć mieści ponad 16 000 kodów. | NUG s.71 (Automatic Batch Mode); N33B | zgodne |
| FAQ: Jak długo działa akumulator HR33 AI Bluetooth White? | Przy jednym odczycie co 6 s akumulator wystarcza na co najmniej 15 h pracy ciągłej. Ładowanie trwa do 6 h. Akumulator 2600 mAh jest wymienny. | N33B s.2 | zgodne |
| FAQ: Jak dezynfekować HR33 Marlin AI Bluetooth White? | Obudowa ma powłokę antymikrobową. Newland zaleca do skanerów ręcznych środki z nadtlenkiem wodoru, chlorkiem amonu, alkoholem izopropylowym (min. 70%… | NCG s.1–3 | zgodne |
| FAQ: Czy HR33 AI Bluetooth White zastępuje HR32 Marlin Bluetooth HC? | Tak. Newland wycofał HR32 Marlin Bluetooth HC i wskazuje HR33 Marlin AI Bluetooth White jako zamiennik. | N32 | zgodne |
| FAQ: Jakie bezprzewodowe skanery dla ochrony zdrowia są alternatywą? | Prostszą wersją z tej serii jest Newland HR23 Dorada AI Bluetooth White. Inne skanery Bluetooth dla ochrony zdrowia: Datalogic Gryphon GBT4600 HC i Z… | —(linki do kart) | zgodne |
| Zdjęcie `NLS-HR3300-BT-V2-W.png` (alt) | Newland HR33 Marlin AI Bluetooth White — biały skaner bez przewodu, widok z przodu pod kątem | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR3300-BT-V2-W-2.png` (alt) | Newland HR33 Marlin AI Bluetooth White w stacji dokującej — widok z przodu | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR3300-BT-V2-W-3.png` (alt) | Newland HR33 Marlin AI Bluetooth White w stacji dokującej — widok z boku | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR3300-BT-V2-W-4.png` (alt) | Newland HR33 Marlin AI Bluetooth White — widok z boku na rękojeść z akumulatorem | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR3300-BT-V2-W-5.png` (alt) | Newland HR33 Marlin AI Bluetooth White — skaner położony na boku | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR3300-BT-V2-W-6.png` (alt) | Newland HR33 Marlin AI Bluetooth White — widok z góry na głowicę z logo Newland | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa HR33 Marlin AI Bluetooth White (EN) | /downloads/newland/HR33-Marlin-AI-Bluetooth-White-Datasheet.pdf (1,0 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Instrukcja HR23 / HR33 AI BT (EN) | /downloads/newland/HR23-HR33-AI-BT-User-Guide.pdf (6,1 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: EasySet — oprogramowanie konfiguracyjne (strona producenta) | https://www.newland-id.com/en/software/easyset (Online) | HTTP zewn.; rozmiar zgodny | zgodne |
| Cena i dostępność NLS-HR3300-BT-V2-W | strona = API: 1005,83 zł netto, available (40 szt.; PL 0, EU 40, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Newland HR33 Marlin AI Bluetooth White; brand Newland; sku NLS-HR3300-BT-V2-W; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (16: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Newland HR23 Dorada AI Corded White (`/produkt/newland-hr23-dorada-ai-white`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Newland HR23 Dorada AI Corded White | N23C s.2–3 | zgodne |
| Meta title / description | Newland HR23 Dorada AI Corded White — skaner kodów szpitalny / TAKMA / Newland HR23 Dorada AI Corded White: przewodowy skaner kodów 1D i 2D do placówe… | N23C s.2–3 | zgodne |
| Opis, akapit 1 | Newland HR23 Dorada AI Corded White to podstawowy przewodowy skaner 2D z białej serii Newland dla ochrony zdrowia. Biała obudowa ma powłokę antymikrobową. Biał… | N23C s.1 (Designed for Healthcare) | zgodne |
| Opis, akapit 2 | HR23 korzysta z matrycy 800 × 640. Kod EAN-13 13 mil odczytuje z odległości 50–280 mm. Klasa szczelności obudowy to IP52. Odczytuje kody liniowe oraz PDF417, M… | N23C s.2 | **niezgodne → poprawione (V2-05)** |
| Opis, akapit 3 | Skaner jest lekki: waży 137 g. Pracuje w temperaturze od −20 do 60 °C. Odczyt sygnalizuje dźwiękiem, diodą i wibracją. Działanie skanera można dostosować skryp… | N23C s.1–2 | zgodne |
| Opis, akapit 4 | Dostępne są trzy konfiguracje: NLS-HR2300-V2-S5-W z przewodem USB 2 m, NLS-HR2300-V2-SA-W z przewodem USB i białą podstawką NLS-STD23-33-SA-W oraz NLS-HR2300-V… | N23C s.3 (What’s in the box, Warranty) | zgodne |
| Specyfikacja: Typ skanera | Ręczny skaner 2D, przewodowy | N23C s.2–3 | zgodne |
| Specyfikacja: Obudowa | Biała, powłoka antymikrobowa | N23C s.2–3 | zgodne |
| Specyfikacja: Matryca | CMOS 800 × 640 | N23C s.2–3 | zgodne |
| Specyfikacja: Dekodowanie | Wykrywanie kodów przez AI | N23C s.2–3 | zgodne |
| Specyfikacja: Kody 2D | PDF417, QR, Aztec, Data Matrix, Micro PDF417, Micro QR | N23C s.2–3 | zgodne |
| Specyfikacja: Kody 1D | Code 128, GS1-128, ISBT 128, Code 39, Code 93, Codabar, UPC/EAN, ITF-14, 2 z 5, MSI-Plessey, GS1 DataBar i in… | N23C s.2–3 | zgodne |
| Specyfikacja: OCR | Standardowo: paszporty i wybrane dokumenty; opcjonalnie: daty i znaki alfanumeryczne | N23C s.2–3 | zgodne |
| Specyfikacja: Głębia ostrości | EAN-13 13 mil: 50–280 mm; Data Matrix 10 mil: 30–125 mm; Code 39 5 mil: 50–120 mm; PDF417 6,7 mil: 40–120 mm | N23C s.2–3 | zgodne |
| Specyfikacja: Pole widzenia | 45° w poziomie, 34° w pionie | N23C s.2–3 | zgodne |
| Specyfikacja: Rozdzielczość / kontrast | ≥ 3 mil; minimalny kontrast 20% | N23C s.2–3 | zgodne |
| Specyfikacja: Celownik i oświetlenie | Celownik LED, oświetlenie białe LED | N23C s.2–3 | zgodne |
| Specyfikacja: Sygnalizacja | Dźwięk, LED, wibracja | N23C s.2–3 | zgodne |
| Specyfikacja: Interfejsy | USB, USB-KBW, USB-CDC, HID-POS, RS-232 | N23C s.2–3 | zgodne |
| Specyfikacja: Zasilanie | 5 V DC ±5%; 190 mA typowo, 200 mA maks.; czuwanie 35 mA | N23C s.2–3 | zgodne |
| Specyfikacja: Klasa ochrony | IP52 | N23C s.2–3 | zgodne |
| Specyfikacja: Odporność na upadki | 1,8 m na beton | N23C s.2–3 | zgodne |
| Specyfikacja: Temperatura | Praca: −20–60 °C; przechowywanie: −40–70 °C | N23C s.2–3 | zgodne |
| Specyfikacja: Wymiary i masa | 95 × 68 × 161 mm; 137 g | N23C s.2–3 | zgodne |
| Specyfikacja: Konfiguracja | EasySet; Advanced Scripting (Lua) | N23C s.2–3 | zgodne |
| Specyfikacja: Gwarancja producenta | 5 lat | N23C s.2–3 | zgodne |
| Zastosowania | Rejestracja pacjentów; Stanowisko z podstawką w gabinecie; Odczyt kodów 1D i 2D w placówce medycznej | N23C s.1 | zgodne |
| Wariant NLS-HR2300-V2-S5-W | Przewód: USB, 2 m | N23C s.2–3 | zgodne |
| Wariant NLS-HR2300-V2-SA-W | Przewód: USB, 2 m, Podstawka: Tak | N23C s.2–3 | zgodne |
| Wariant NLS-HR2300-V2-S8-W | Przewód: RS-232, 2 m, adapter Multiplug | N23C s.2–3 | zgodne |
| Dymek „Przewód” | Sposób podłączenia HR23 Dorada AI Corded White do komputera. USB — przewód 2 m; tryby USB-KBW, USB-CDC lub HID-POS. RS-232 — prosty przewód 2 m i ada… | N23C s.2–3 | zgodne |
| Dymek „Podstawka” | Zestaw z białą regulowaną podstawką Newland. Podstawkę można pochylić od pozycji pionowej do płaskiej i zamocować na ścianie. | N23C s.2–3 | zgodne |
| FAQ: HR23 Dorada AI White czy HR33 Marlin AI White? | HR23 ma matrycę 800 × 640 i krótszy zasięg: kod EAN-13 13 mil odczytuje z 50–280 mm. HR33 Marlin AI Corded White ma matrycę 1280 × 800, czyta ten kod… | N23C; N33C | zgodne |
| FAQ: Jakie środki można stosować do HR23 AI Corded White? | Dopuszczalne są preparaty na bazie łagodnego płynu do naczyń, podchlorynu sodu (roztwór 8,25%), alkoholu izopropylowego (min. 70%), chlorku amonu lub… | NCG s.1 | zgodne |
| FAQ: Czy do HR23 AI Corded White można dokupić podstawkę? | Tak. Biała podstawka NLS-STD23-33-SA-W pasuje do HR23 i HR33 White. Jest też częścią zestawu NLS-HR2300-V2-SA-W. | N23C s.3; NST | zgodne |
| FAQ: Jakie skanery są alternatywą dla HR23 Dorada AI Corded White? | W klasie przewodowych skanerów dla ochrony zdrowia są m.in. Datalogic Gryphon GD4620 HC, Zebra DS2208-HC i Honeywell Xenon Ultra 1960h. Bezprzewodowa… | —(linki do kart) | zgodne |
| Zdjęcie `NLS-HR2300-V2-S5-W.png` (alt) | Newland HR23 Dorada AI Corded White — biały skaner przewodowy, widok z przodu pod kątem | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR2300-V2-S5-W-2.png` (alt) | Newland HR23 Dorada AI Corded White — okno skanera i rękojeść, widok z przodu | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR2300-V2-S5-W-3.png` (alt) | Newland HR23 Dorada AI Corded White — profil skanera z przewodem | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR2300-V2-S5-W-4.png` (alt) | Newland HR23 Dorada AI Corded White — skaner leżący na boku | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR2300-V2-S5-W-5.png` (alt) | Newland HR23 Dorada AI Corded White — widok z góry, logo Newland na głowicy | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR2300-V2-S5-W-6.png` (alt) | Newland HR23 Dorada AI Corded White w białej podstawce NLS-STD23-33-SA-W (podstawka w zestawie SA-W lub sprzedawana oso… | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa HR23 Dorada AI Corded White (EN) | /downloads/newland/HR23-Dorada-AI-Corded-White-Datasheet.pdf (885 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Instrukcja HR23 / HR33 AI, wersje przewodowe (EN) | /downloads/newland/HR23-HR33-AI-Corded-User-Guide.pdf (5,6 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: EasySet — oprogramowanie konfiguracyjne (strona producenta) | https://www.newland-id.com/en/software/easyset (Online) | HTTP zewn.; rozmiar zgodny | zgodne |
| Cena i dostępność NLS-HR2300-V2-S5-W | strona = API: 336,36 zł netto, available (20 szt.; PL 0, EU 20, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| Cena i dostępność NLS-HR2300-V2-SA-W | strona = API: 587,82 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| Cena i dostępność NLS-HR2300-V2-S8-W | strona = API: 617,97 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Newland HR23 Dorada AI Corded White; brand Newland; sku NLS-HR2300-V2-S5-W; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (14: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Newland HR23 Dorada AI Bluetooth White (`/produkt/newland-hr23-dorada-ai-bt-white`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Newland HR23 Dorada AI Bluetooth White | N23B s.2–3 | zgodne |
| Meta title / description | Newland HR23 Dorada AI Bluetooth White — skaner Bluetooth HC / TAKMA / Newland HR23 Dorada AI Bluetooth White: bezprzewodowy skaner kodów 2D dla ochro… | N23B s.2–3 | zgodne |
| Opis, akapit 1 | Newland HR23 Dorada AI Bluetooth White to skaner 2D bez przewodu z białej serii przeznaczonej dla ochrony zdrowia. Ma obudowę z powłoką antymikrobową. W oferci… | N23B s.1 | zgodne |
| Opis, akapit 2 | Skaner komunikuje się przez Bluetooth 5.0. Łączy się ze stacją komunikacyjno-ładującą, bezpośrednio z urządzeniem albo przez klucz sprzętowy. Zasięg w otwartej… | N23B s.1–2 | zgodne |
| Opis, akapit 3 | Matryca 800 × 640 współpracuje z wykrywaniem kodów opartym na AI. Skaner czyta kody liniowe i 2D, w tym QR, Data Matrix i PDF417, również zniszczone lub na bły… | N23B s.1–2 | zgodne |
| Opis, akapit 4 | Akumulator 2600 mAh zapewnia co najmniej 15 h pracy ciągłej. Po zwolnieniu zatrzasku wymienia się go w trakcie zmiany na zapasowy NLS-BTY2333. Stacja łączy się… | N23B s.1–3 | zgodne |
| Specyfikacja: Typ skanera | Ręczny skaner 2D, bezprzewodowy, Bluetooth | N23B s.2–3 | zgodne |
| Specyfikacja: Obudowa | Biała, z powłoką antymikrobową | N23B s.2–3 | zgodne |
| Specyfikacja: Matryca | CMOS 800 × 640 | N23B s.2–3 | zgodne |
| Specyfikacja: Kody 2D | PDF417, QR, Aztec, Data Matrix, Micro PDF417, Micro QR, Han Xin (Chinese Sensible) | N23B s.2–3 | zgodne |
| Specyfikacja: Kody 1D | Code 128, GS1-128, ISBT 128, Code 39, Codabar, UPC/EAN, ITF-14, GS1 DataBar i inne | N23B s.2–3 | zgodne |
| Specyfikacja: Głębia ostrości | EAN-13 13 mil: 50–280 mm; Data Matrix 10 mil: 30–125 mm | N23B s.2–3 | zgodne |
| Specyfikacja: Sygnalizacja | Dźwięk, LED, wibracja | N23B s.2–3 | zgodne |
| Specyfikacja: Bluetooth | 5.0; zasięg ≥ 100 m w otwartej przestrzeni | N23B s.2–3 | zgodne |
| Specyfikacja: Tryby komunikacji | Synchroniczny, asynchroniczny, wsadowy | N23B s.2–3 | zgodne |
| Specyfikacja: Pamięć | ≥ 8000 kodów | N23B s.2–3 | zgodne |
| Specyfikacja: Interfejsy stacji | USB-A, USB-KBW, USB-CDC, HID-POS | N23B s.2–3 | zgodne |
| Specyfikacja: Akumulator | Li-Ion 2600 mAh, wymienny; ≥ 15 h pracy ciągłej; ładowanie ≤ 6 h | N23B s.2–3 | zgodne |
| Specyfikacja: Klasa ochrony | IP52 | N23B s.2–3 | zgodne |
| Specyfikacja: Odporność na upadki | 1,8 m na beton | N23B s.2–3 | zgodne |
| Specyfikacja: Temperatura pracy | −10–50 °C | N23B s.2–3 | zgodne |
| Specyfikacja: Wymiary | Skaner: 117,5 × 67,5 × 144 mm; stacja: 140 × 90 × 144,5 mm | N23B s.2–3 | zgodne |
| Specyfikacja: Masa | Skaner: 209 g; stacja: 340,5 g | N23B s.2–3 | zgodne |
| Specyfikacja: W zestawie | Skaner, przewód USB, stacja dokująca | N23B s.3 | zgodne |
| Specyfikacja: Gwarancja producenta | 5 lat | N23B s.2–3 | zgodne |
| Zastosowania | Skanowanie bez przewodu w gabinecie i na oddziale; Zbieranie kodów w pamięci poza zasięgiem | N23B s.1 | zgodne |
| Wariant NLS-HR2300-BT-V2-W | Skaner Bluetooth, stacja dokująca i przewód USB | N23B s.2–3 | zgodne |
| FAQ: Czym HR23 AI Bluetooth White różni się od HR33 AI Bluetooth White? | Model HR23 korzysta z matrycy 800 × 640 i zapisuje co najmniej 8000 kodów. HR33 Marlin AI Bluetooth White ma matrycę 1280 × 800, pamięć na ponad 16 0… | N23B; N33B | zgodne |
| FAQ: Czy zapasowy akumulator można ładować poza skanerem? | Tak. Akumulatory NLS-BTY2333 ładuje 4-gniazdowa ładowarka NLS-CD3233-4C, przeznaczona do serii HR23 i HR33. | N23B s.3 (Accessories) | zgodne |
| FAQ: Jak czyścić HR23 Dorada AI Bluetooth White? | Skaner wyłącza się i przeciera gotową chusteczką dezynfekcyjną albo miękką ściereczką z preparatem zawierającym nadtlenek wodoru, alkohol izopropylow… | NCG s.1–3 | zgodne |
| FAQ: Co zawiera NLS-HR2300-BT-V2-W? | Skaner HR23 Dorada AI Bluetooth White, stację dokującą, która ładuje skaner i przekazuje dane, oraz przewód USB. | N23B s.3 | zgodne |
| FAQ: Jakie skanery bezprzewodowe dla służby zdrowia są alternatywą? | Do porównania warto wziąć m.in. Datalogic Gryphon GM4600 HC, Honeywell Xenon Ultra 1962h i Socket Mobile DuraScan D745. | —(linki do kart) | zgodne |
| Zdjęcie `NLS-HR2300-BT-V2-W.png` (alt) | Newland HR23 Dorada AI Bluetooth White — biały skaner bezprzewodowy, ujęcie z przodu pod kątem | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR2300-BT-V2-W-2.png` (alt) | Newland HR23 Dorada AI Bluetooth White — przód z oknem skanera | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR2300-BT-V2-W-3.png` (alt) | Newland HR23 Dorada AI Bluetooth White — widok z boku | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR2300-BT-V2-W-4.png` (alt) | Newland HR23 Dorada AI Bluetooth White — ujęcie z góry na głowicę z logo Newland | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR2300-BT-V2-W-5.png` (alt) | Newland HR23 Dorada AI Bluetooth White w stacji dokującej z zestawu — ujęcie z przodu | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `NLS-HR2300-BT-V2-W-6.png` (alt) | Newland HR23 Dorada AI Bluetooth White w stacji dokującej — ujęcie z boku | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa HR23 Dorada AI Bluetooth White (EN) | /downloads/newland/HR23-Dorada-AI-Bluetooth-White-Datasheet.pdf (1,0 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Instrukcja HR23 / HR33 AI BT (EN) | /downloads/newland/HR23-HR33-AI-BT-User-Guide.pdf (6,1 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: EasySet — oprogramowanie konfiguracyjne (strona producenta) | https://www.newland-id.com/en/software/easyset (Online) | HTTP zewn.; rozmiar zgodny | zgodne |
| Cena i dostępność NLS-HR2300-BT-V2-W | strona = API: 587,82 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Newland HR23 Dorada AI Bluetooth White; brand Newland; sku NLS-HR2300-BT-V2-W; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (16: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### ProGlove LANA (`/produkt/proglove-lana`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | ProGlove LANA | LTS; LURG (NFC, GNSS, 3,85 V, mikrofon, stacja 5–40 °C); LPG (aparat 16 MP) | zgodne |
| Meta title / description | ProGlove LANA — przenośny komputer z Androidem do skanerów ProGlove /… / Przenośny komputer z Androidem ProGlove LANA: ekran dotykowy 3,54″, Wi-Fi 6, ap… | LTS; LURG (NFC, GNSS, 3,85 V, mikrofon, stacja 5–40 °C); LPG (aparat 16 MP) | zgodne |
| Opis, akapit 1 | ProGlove LANA to przenośny komputer z Androidem 13 (certyfikacja GMS, aktualizacja do Androida 15 i 17), który uzupełnia skanery noszone ProGlove o większy ekr… | LTS (OS); LPG; LURG (Intended Use) | zgodne |
| Opis, akapit 2 | Aplikacja INSIGHT Mobile jest zainstalowana fabrycznie. Skaner ProGlove, np. MAI, paruje się z LANA bez bramki Gateway, a kody trafiają do aplikacji firmy prze… | LTS (Interfaces, WLAN, Bluetooth); LPG | zgodne |
| Opis, akapit 3 | Kolorowy ekran 3,54″ ma rozdzielczość 960 × 640 pikseli i jasność 500 nitów; w trybie Glove Mode obsługuje się go w rękawicach ochronnych. Aparat 16 MP z lampą… | LTS (Display, Battery, Operating Time, IP); LPG (16 MP); LURG | zgodne |
| Specyfikacja: Typ urządzenia | Przenośny komputer z Androidem do pracy ze skanerami noszonymi ProGlove | LTS; LPG; LURG | zgodne |
| Specyfikacja: System operacyjny | Android 13 z certyfikacją GMS; możliwa aktualizacja do Androida 15 i 17 | LTS | zgodne |
| Specyfikacja: Wyświetlacz | 3,54 cala, kolorowy TFT-LCD, 960 × 640 pikseli, 500 nitów; odświeżanie < 50 ms | LTS | zgodne |
| Specyfikacja: Panel dotykowy | Pojemnościowy, obsługa w rękawicach (tryb Glove Mode); praca przy wilgotnym ekranie z założoną folią ochronną… | LTS | zgodne |
| Specyfikacja: Aparat | 16 MP z lampą błyskową LED | LPG; LURG | zgodne |
| Specyfikacja: Przyciski | Przycisk zasilania i przycisk programowalny (spust aparatu) | LURG; LPG | zgodne |
| Specyfikacja: Powiadomienia | Dioda LED RGB, głośnik 1 W, wibracje | LTS | zgodne |
| Specyfikacja: Audio | Głośnik 1 W, mikrofon | LURG; LPG | zgodne |
| Specyfikacja: Czujniki | Żyroskop, akcelerometr, e-kompas, czujnik światła | LTS | zgodne |
| Specyfikacja: Wi-Fi | Wi-Fi 6, IEEE 802.11 a/b/g/n/ac/ax/d/h/i/k/r/v; 2,4 i 5 GHz (DFS); 2×2 MU-MIMO; WEP, WPA/WPA2 PSK, WPA3 (SAE)… | LTS | zgodne |
| Specyfikacja: Bluetooth | Bluetooth 5 (BLE); profile HID i SPP (zależnie od konfiguracji) | LTS | zgodne |
| Specyfikacja: NFC | 13,56 MHz | LURG; LPG | zgodne |
| Specyfikacja: Nawigacja satelitarna | GPS, Galileo, GLONASS, BeiDou (odbiór) | LURG; LPG | zgodne |
| Specyfikacja: Skanowanie | Skanery noszone ProGlove, np. MAI, parowane w aplikacji INSIGHT Mobile, bez bramki Gateway | LTS; LPG; LURG | zgodne |
| Specyfikacja: Integracja | INSIGHT Mobile (Android), zainstalowana fabrycznie: SDK, Intent, MQTT, WebSocket, tryb klawiatury; konfigurac… | LTS; LPG; LURG | zgodne |
| Specyfikacja: Złącza | USB-C; styki ładowania do stacji 4-gniazdowej | LURG; LPG | zgodne |
| Specyfikacja: Bateria | Wbudowana Li-Po 3,85 V, 2500 mAh; do 11 h pracy (zależnie od aplikacji i warunków) | LTS; LURG | zgodne |
| Specyfikacja: Ładowanie | Przewodem USB-C ok. 150 min; w stacji 4-gniazdowej ProGlove ok. 180 min (temperatura pokojowa); temperatura ł… | LTS; LURG | zgodne |
| Specyfikacja: Temperatura pracy | −20 °C do 50 °C | LTS | zgodne |
| Specyfikacja: Temperatura przechowywania | −20 °C do 70 °C | LTS | zgodne |
| Specyfikacja: Wilgotność | 5–95% bez kondensacji | LTS | zgodne |
| Specyfikacja: Odporność na upadki | 1,5 m (MIL-STD-810G) | LTS | zgodne |
| Specyfikacja: Odporność na przewroty | 1000 przewrotów z 0,5 m (MIL-STD-810G) | LTS | zgodne |
| Specyfikacja: Klasa szczelności | IP68 (pyłoszczelna, odporna na ciągłe zanurzenie w wodzie głębiej niż 1 m) | LTS | zgodne |
| Specyfikacja: Wymiary | 96,7 × 60,7 × 14,43 mm | LTS | zgodne |
| Specyfikacja: Masa | 123 g | LTS | zgodne |
| Specyfikacja: Sposób noszenia | W kieszeni, na przedramieniu w mocowaniu ProGlove Arm Mount (dwa rozmiary) albo zamocowany, np. w pojeździe | LURG; LPG | zgodne |
| Specyfikacja: Zgodność | Dyrektywa radiowa RED 2014/53/UE; EN 62368-1; RoHS, REACH, WEEE; transport baterii UN 38.3 | LTS | zgodne |
| Specyfikacja: Elementy sprzedawane osobno | Skaner ProGlove, mocowanie Arm Mount, stacja ładująca 4-gniazdowa | LTS | zgodne |
| Specyfikacja: Gwarancja | 12 miesięcy; kontrakty serwisowe ProGlove Care na 36 albo 60 miesięcy na zapytanie | LTS | zgodne |
| Zastosowania | Obsługa wyjątków w procesach logistycznych; Praca prowadzona krok po kroku na ekranie; Aplikacje ERP, WMS i kontroli jakości; Zdjęcia dokum… | LURG; LPG | zgodne |
| Wariant LA-001 | LA-001 | LTS; LURG (NFC, GNSS, 3,85 V, mikrofon, stacja 5–40 °C); LPG (aparat 16 MP) | zgodne |
| FAQ: Czy ProGlove LANA ma wbudowany czytnik kodów kreskowych? | Nie. Kody odczytuje skaner noszony ProGlove, np. MAI, połączony z LANA przez Bluetooth. Aparat 16 MP służy do zdjęć, np. uszkodzonego towaru. | LPG; LURG | zgodne |
| FAQ: Jak połączyć skaner ProGlove z LANA? | Po włączeniu urządzenia i wstępnej konfiguracji Androida (sieć Wi-Fi można dodać później) należy otworzyć aplikację INSIGHT Mobile i połączyć w niej… | LFQ; LURG | zgodne |
| FAQ: Jak ładuje się LANA? | Przez gniazdo USB-C w ok. 150 minut albo w 4-gniazdowej stacji ProGlove, przeznaczonej tylko do LANA, w ok. 180 minut. Do ładowania przez USB-C zalec… | LTS; LFQ (PD 3.0) | zgodne |
| FAQ: Czy LANA wystarczy na kilka zmian? | Bateria 2500 mAh pozwala na pracę do 11 godzin, zależnie od aplikacji. Jest wbudowana, dlatego przy pracy na trzy zmiany zalecane jest doładowywanie… | LTS; LURG | zgodne |
| FAQ: Czy ekran LANA można obsługiwać w rękawicach? | Tak. Tryb Glove Mode włącza się w menu Ustawienia > Ułatwienia dostępu. Z założoną folią ochronną ekran reaguje także wtedy, gdy jest wilgotny. | LFQ (Settings > Accessibility > Glove Mode); LTS | zgodne |
| FAQ: Gdzie nie należy używać LANA? | LANA nie jest przeznaczona do stref zagrożonych wybuchem, do zastosowań medycznych ani jako środek ochrony indywidualnej. Jest przeznaczona dla przes… | LURG (Intended Use) | zgodne |
| FAQ: Jaka jest gwarancja na LANA? | Gwarancja fabryczna wynosi 12 miesięcy. Serwis ProGlove Care z kontraktem na 3 lub 5 lat jest dostępny na zapytanie. Licencja oprogramowania kupiona… | LTS (Warranty, ProGlove Care, licencja 90 dni) | zgodne |
| Zdjęcie `proglove-la-001.png` (alt) | ProGlove LANA — pomarańczowa obudowa, ekran parowania skanera Scan2Pair w aplikacji INSIGHT Mobile | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `proglove-la-001-2.png` (alt) | ProGlove LANA w pionie — aplikacja INSIGHT Mobile z połączonym skanerem MAI (skaner sprzedawany osobno) | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `proglove-la-001-3.png` (alt) | ProGlove LANA — krawędź z przyciskiem programowalnym, aparatem, lampą błyskową i przyciskiem zasilania | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Zdjęcie `proglove-la-001-4.png` (alt) | ProGlove LANA — dolna krawędź z gniazdem USB-C i stykami do stacji ładującej | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa ProGlove LANA (EN) | /datasheets/proglove-lana.pdf (161 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Instrukcja użytkownika i informacje prawne ProGlove LANA (EN) | /datasheets/proglove-lana-instrukcja.pdf (912 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność LA-001 | strona = API: 3014,46 zł netto, available (11 szt.; PL 0, EU 11, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | ProGlove LANA; brand ProGlove; sku LA-001; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (7: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Honeywell Voyager XP 1472g (`/produkt/honeywell-voyager-xp-1472g`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Honeywell Voyager XP 1472g | VDS s.2; VUG (celownik 624 nm, kody) | zgodne |
| Meta title / description | Honeywell Voyager XP 1472g — skaner 2D bezprzewodowy Bluetooth / TAKMA / Honeywell Voyager XP 1472g — bezprzewodowy skaner kodów 2D Bluetooth 4.2, zasię… | VDS s.2; VUG (celownik 624 nm, kody) | zgodne |
| Opis, akapit 1 | Dla kogo? Honeywell Voyager XP 1472g to bezprzewodowa wersja Bluetooth popularnego skanera Voyager XP 1470g — do sklepów, magazynów, aptek, biur i punktów obsł… | VDS; VUG (1470g: 1040 × 720, 624 nm) | zgodne |
| Opis, akapit 2 | Bluetooth 4.2 o zasięgu do 100 m przy braku przeszkód — swoboda ruchu po stanowisku kasowym, wśród regałów, przy przyjęciu towaru. Tryb Automatic Batch Mode bu… | VDS (Bluetooth); VUG s.54 (Batch Mode, Default Off), s.59 (Multiple Scanner Operation: do 3 skanerów) | **niezgodne → poprawione (V2-06)** |
| Opis, akapit 3 | Bateria Li-Ion 2 400 mAh (BAT-SCN01A) — do 14 godzin pracy i ok. 50 000 skanów na jednym ładowaniu. Baterię wymienia się po odkręceniu śruby zaślepki rękojeści… | VDS (Power Options); VUG s.42 (BAT-SCN01); JT (6USB = obudowa do dezynfekcji) | **niezgodne → poprawione (V2-08)** |
| Specyfikacja: Typ skanera | Area imager 2D, bezprzewodowy (Bluetooth) | VDS s.2 | zgodne |
| Specyfikacja: Sensor | 1 040 × 720 px | VDS s.2 | zgodne |
| Specyfikacja: Celownik | Czerwony LED 624 nm | VUG (Aiming: red dot, 624 nm) | zgodne |
| Specyfikacja: Pole widzenia | 39,2° (poziomo) × 27,4° (pionowo) | VDS s.2 | zgodne |
| Specyfikacja: Bluetooth | v4.2, do 100 m w linii wzroku (zasięg zależy od otoczenia) | VDS s.2 | zgodne |
| Specyfikacja: Maks. skanerów na bazę | 7 | VUG s.59 | **niezgodne → poprawione (V2-06)** |
| Specyfikacja: Bateria | Li-Ion 2 400 mAh (BAT-SCN01A) | VDS; JT | zgodne |
| Specyfikacja: Czas pracy | Do 14 godzin | VDS s.2 | zgodne |
| Specyfikacja: Skanów na ładowaniu | Do 50 000 | VDS s.2 | zgodne |
| Specyfikacja: Czas ładowania | 4,5 godziny | VDS s.2 | zgodne |
| Specyfikacja: Zasięg (5 mil Code 39) | 20–205 mm | VDS s.2 | zgodne |
| Specyfikacja: Zasięg (13 mil UPC) | 18–400 mm | VDS s.2 | zgodne |
| Specyfikacja: Zasięg (20 mil QR Code) | 5–325 mm | VDS s.2 | zgodne |
| Specyfikacja: Zasięg (10 mil DataMatrix) | 10–165 mm | VDS s.2 | zgodne |
| Specyfikacja: Zasięg (6,7 mil PDF417) | 15–185 mm | VDS s.2 | zgodne |
| Specyfikacja: Tolerancja ruchu | 70 cm/s (13 mil UPC) | VDS s.2 | zgodne |
| Specyfikacja: Skanowane kody 1D | Code 39, Code 128, Code 93, EAN/UPC, Codabar, Interleaved 2 of 5, GS1 DataBar, China Post | VDS; VUG rozdz. 7 | zgodne |
| Specyfikacja: Skanowane kody 2D | QR Code, Data Matrix, PDF417, Aztec, MaxiCode, Han Xin, DotCode, Digimarc | VDS; VUG rozdz. 7 | zgodne |
| Specyfikacja: OCR | Tak (OCR-A, OCR-B) | VDS (1D, PDF, 2D, DotCode); VUG rozdz. 7 — brak OCR | **niezgodne → poprawione (V2-09)** |
| Specyfikacja: Odczyt z ekranów | Tak — smartfony, tablety, monitory | VDS s.2 | zgodne |
| Specyfikacja: Interfejsy (baza) | USB HID/COM, RS-232, Keyboard Wedge, RS-485 (IBM 46XX) | VDS s.2 | zgodne |
| Specyfikacja: Klasa szczelności | IP52 | VDS s.2 | zgodne |
| Specyfikacja: Odporność na upadki | 1,8 m na beton (30×) | VDS s.2 | zgodne |
| Specyfikacja: Tumble test | 1 000 obrotów (0,5 m) | VDS s.2 | zgodne |
| Specyfikacja: ESD | ±15 kV (powietrze), ±8 kV (kontakt) | VDS s.2 | zgodne |
| Specyfikacja: Temperatura pracy (ładowanie) | 5°C do +40°C | VDS s.2 | zgodne |
| Specyfikacja: Temperatura pracy (bez ładowania) | 0°C do +50°C | VDS s.2 | zgodne |
| Specyfikacja: Temperatura przechowywania | -40°C do +60°C | VDS s.2 | zgodne |
| Specyfikacja: Wilgotność | 0–95% RH, bez kondensacji | VDS s.2 | zgodne |
| Specyfikacja: Wymiary skanera (S × D × W) | 62 × 173 × 82 mm | VDS s.2 | zgodne |
| Specyfikacja: Waga skanera | 210 g | VDS s.2 | zgodne |
| Specyfikacja: Wymiary bazy (S × D × W) | 132 × 102 × 81 mm | VDS s.2 | zgodne |
| Specyfikacja: Waga bazy | 179 g | VDS s.2 | zgodne |
| Specyfikacja: Gwarancja | 36 miesięcy (3 lata) | VDS s.2 | zgodne |
| Zastosowania | Sklepy i retail — skanowanie przy kasach POS, inwentaryzacja, self-checkout z mobilnością; Magazyn i logistyka — przyjęcie towaru, kompleta… | VDS | zgodne |
| Wariant 1472G2D-2USB-5-R | Voyager XP 1472g 2D — zestaw USB (skaner + baza + kabel) | VDS s.2; VUG (celownik 624 nm, kody) | zgodne |
| Wariant 1472G2D-6USB-5-R | Obudowa do dezynfekcji: Tak | VDS s.2; VUG (celownik 624 nm, kody) | zgodne |
| Dymek „Obudowa do dezynfekcji” | Obudowa przygotowana do dezynfekcji (Disinfectant Ready). Można ją regularnie czyścić wieloma środkami czyszczącymi bez uszkodzenia; kolor czarny. | VDS s.2; VUG (celownik 624 nm, kody) | zgodne |
| FAQ: Czym różni się Honeywell Voyager XP 1472g od przewodowego 1470g? | Voyager XP 1472g to bezprzewodowa wersja Bluetooth skanera Voyager XP 1470g — identyczna optyka (area imager 1 040 × 720 px) i parametry skanowania.… | VDS; VUG (1470g: 130 g); karta 1470g (5 lat) | zgodne |
| FAQ: Jakie zestawy Honeywell Voyager XP 1472g są dostępne? | Zestaw 1472G2D-2USB-5-R zawiera skaner, bazę ładująco-komunikacyjną i prosty kabel USB 3 m. Zestaw 1472G2D-6USB-5-R to skaner z czarną obudową przygo… | JT | zgodne |
| FAQ: Jaki jest zasięg Bluetooth skanera Voyager XP 1472g? | Voyager XP 1472g łączy się z bazą przez Bluetooth 4.2 na odległość do 100 m, gdy między skanerem a bazą nie ma przeszkód. Ściany, regały i maszyny sk… | VDS; VUG s.54 | **niezgodne → poprawione (V2-07)** |
| FAQ: Jak długo działa bateria Voyager XP 1472g? | Bateria Li-Ion 2 400 mAh (BAT-SCN01A) zapewnia do 14 godzin pracy i ok. 50 000 skanów na jednym ładowaniu. Czas pełnego ładowania 4,5 godziny w bazie… | VDS; VUG s.42; JT (BAT-SCN01A) | zgodne |
| FAQ: Czy Voyager XP 1472g skanuje kody z ekranów smartfonów? | Tak — skaner odczytuje kody 1D, 2D (QR Code, DataMatrix, PDF417) z ekranów smartfonów, tabletów i monitorów. Idealny do odczytu kuponów mobilnych, bi… | VDS (digital coupons, smartphones) | **niezgodne → poprawione (V2-10)** |
| FAQ: Jaka jest wytrzymałość skanera Voyager XP 1472g? | IP52 (ochrona przed kurzem i kroplami), upadki z 1,8 m na beton (30 razy), tumble 1 000 obrotów (0,5 m). ESD ±15 kV. Klasa general-purpose — do POS,… | VDS | zgodne |
| FAQ: Czym jest obudowa przygotowana do dezynfekcji (Disinfectant Ready) w… | Honeywell oferuje wybrane modele Voyager XP 1472g z obudową przygotowaną do dezynfekcji. Taką obudowę można regularnie czyścić wieloma środkami czysz… | VDS (Disinfectant-ready housings) | zgodne |
| FAQ: Czym różni się Honeywell Voyager XP 1472g od Zebra DS2278? | Voyager 1472g: większy zasięg BT (do 100 m; DS2278 — 10 m), lepsze upadki (1,8 m vs 1,5 m), zestaw z obudową przygotowaną do dezynfekcji. DS2278: eko… | VDS; ZDS | **niezgodne → poprawione (V2-11)** |
| FAQ: Ile skanerów obsługuje jedna baza CCB01? | Baza CCB01-010BT-V1N obsługuje do 7 skanerów jednocześnie (sparowanych przez Bluetooth). Ładuje jeden skaner w danym momencie (kontaktowo, drop-in).… | VUG s.59; VDS (Host System Interfaces) | **niezgodne → poprawione (V2-06)** |
| FAQ: Jakie są alternatywy dla Honeywell Voyager XP 1472g? | Tańsza alternatywa: Zebra DS2278 (BT 4.0, zasięg 10 m). Przewodowy odpowiednik: Voyager XP 1470g (identyczna optyka). Premium bezprzewodowy: Xenon Ul… | ZDS; VUG; karta newland-hr23-dorada-bt | **niezgodne → poprawione (V2-12)** |
| Zdjęcie `1472G2D-2USB-5-R.png` (alt) | Honeywell Voyager XP 1472g — bezprzewodowy skaner 2D Bluetooth z bazą ładująco-komunikacyjną CCB01 | obejrzane zdjęcie (arkusz kontrolny), 600 × 1200 PNG, szare i nieostre | zgodne |
| Plik: Karta katalogowa Honeywell Voyager XP 1472g (EN) | /downloads/honeywell/honeywell-voyager-xp-1472g-karta-katalogowa-en.pdf (73 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Instrukcja obsługi Voyager XP 1470g / 1472g (EN) | /instrukcje/honeywell-voyager-xp-147x-ug-en.pdf (4,4 MB) | HTTP zewn.; rozmiar zgodny | zgodne |
| Cena i dostępność 1472G2D-2USB-5-R | strona = API: 733,81 zł netto, available (232 szt.; PL 0, EU 232, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| Cena i dostępność 1472G2D-6USB-5-R | strona = API: 1630,71 zł netto, available (279 szt.; PL 0, EU 233, w drodze 46) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Honeywell Voyager XP 1472g; brand Honeywell; sku 1472G2D-2USB-5-R; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (12: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Honeywell 46-00526 — zasilacz EU 5,2 V do skanera Xenon Ultra 1960 (`/produkt/honeywell-46-00526`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Honeywell 46-00526 — zasilacz EU 5,2 V do skanera Xenon Ultra 1960 | HAG s.5 („For Xenon Ultra 1960 Corded Scanner ONLY”, 5,2 V 1 A, 90–255 V); HUG (1960li) | zgodne |
| Meta title / description | Honeywell 46-00526 — zasilacz EU do Xenon Ultra 1960 / 1960h / TAKMA / Zasilacz Honeywell 46-00526 z wtyczką EU, 5,2 V DC, 1,0 A, do skanerów Xenon Ul… | HAG s.5 („For Xenon Ultra 1960 Corded Scanner ONLY”, 5,2 V 1 A, 90–255 V); HUG (1960li) | zgodne |
| Opis, akapit 1 | Honeywell 46-00526 to zasilacz sieciowy z wtyczką EU do przewodowych skanerów Xenon Ultra 1960, w tym do wersji 1960h dla służby zdrowia. Daje 1,0 A przy 5,2 V… | HAG s.5 („For Xenon Ultra 1960 Corded Scanner ONLY”, 5,2 V 1 A, 90–255 V); HUG (1960li) | zgodne |
| Opis, akapit 2 | Zasilacz jest potrzebny przy połączeniach przewodowych, w których port hosta nie zasila skanera, np. przy przewodzie RS-232 CBL-020-300-C00. Przy połączeniu US… | HAG s.5 („For Xenon Ultra 1960 Corded Scanner ONLY”, 5,2 V 1 A, 90–255 V); HUG (1960li) | zgodne |
| Specyfikacja: Part Number | 46-00526 | HAG s.5 („For Xenon Ultra 1960 Corded Scanner ONLY”, 5,2 V 1 A, 90–255 V); HUG (1960li) | zgodne |
| Specyfikacja: Typ | Zasilacz sieciowy do połączeń przewodowych | HAG s.5 („For Xenon Ultra 1960 Corded Scanner ONLY”, 5,2 V 1 A, 90–255 V); HUG (1960li) | zgodne |
| Specyfikacja: Wtyczka | EU | HAG s.5 („For Xenon Ultra 1960 Corded Scanner ONLY”, 5,2 V 1 A, 90–255 V); HUG (1960li) | zgodne |
| Specyfikacja: Wyjście | 5,2 V DC, 1,0 A | HAG s.5 („For Xenon Ultra 1960 Corded Scanner ONLY”, 5,2 V 1 A, 90–255 V); HUG (1960li) | zgodne |
| Specyfikacja: Wejście | 90–255 V AC, 50–60 Hz | HAG s.5 („For Xenon Ultra 1960 Corded Scanner ONLY”, 5,2 V 1 A, 90–255 V); HUG (1960li) | zgodne |
| Specyfikacja: Kompatybilność | Honeywell Xenon Ultra 1960 (1960g, 1960h, 1960li); nie do baz Xenon Ultra 1962 | HAG s.5 („For Xenon Ultra 1960 Corded Scanner ONLY”, 5,2 V 1 A, 90–255 V); HUG (1960li) | zgodne |
| Zastosowania | Zasilanie skanera przy połączeniu RS-232 | HAG s.5 („For Xenon Ultra 1960 Corded Scanner ONLY”, 5,2 V 1 A, 90–255 V); HUG (1960li) | zgodne |
| Zdjęcie `46-00526.png` (alt) | Honeywell 46-00526 — zasilacz sieciowy z wtyczką EU i przewodem zakończonym wtykiem kątowym | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Przewodnik akcesoriów Xenon Ultra 1960 i 1962 (EN) | /downloads/honeywell/honeywell-xenon-ultra-1960-1962-akcesoria-en.pdf (1,6 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność 46-00526 | strona = API: 117,54 zł netto, available (373 szt.; PL 0, EU 223, w drodze 150) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Honeywell 46-00526 — zasilacz EU 5,2 V do skanera Xenon Ult…; brand Honeywell; sku 46-00526; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (4: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Honeywell CCB-U00-H-KIT — baza prezentacyjna Healthcare do Xenon Ultra 1962h (`/produkt/honeywell-ccb-u00-h-kit`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Honeywell CCB-U00-H-KIT — baza prezentacyjna Healthcare do Xenon Ultra 1962h | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Meta title / description | Honeywell CCB-U00-H-KIT — baza Healthcare do Xenon Ultra 1962h / TAKMA / Baza prezentacyjna Honeywell CCB-U00-H-KIT do skanera Xenon Ultra 1962h: ładowa… | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Opis, akapit 1 | Honeywell CCB-U00-H-KIT to pionowa baza ładująco-komunikacyjna w wersji Healthcare do skanera Xenon Ultra 1962h. Skaner stoi w niej w pozycji prezentacyjnej, ł… | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Opis, akapit 2 | Obudowa bazy jest biała i antymikrobowa, a jej tworzywo przygotowano do dezynfekcji. Baza komunikuje się przez Bluetooth w klasie 1 (100 m) lub klasie 2 (10 m)… | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Opis, akapit 3 | Zestaw CCB-U00-H-KIT jest przeznaczony do skanerów ładowanych stykowo. Wersja do ładowania bezstykowego ma numer CCB-U00-H-WCKIT. | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Specyfikacja: Part Number | CCB-U00-H-KIT | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Specyfikacja: Typ | Pionowa baza ładująco-komunikacyjna (prezentacyjna), wersja Healthcare | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Specyfikacja: Obudowa | Biała, antymikrobowa, przygotowana do dezynfekcji | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Specyfikacja: Bluetooth | Klasa 1: 100 m; klasa 2: 10 m | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Specyfikacja: Liczba skanerów | Do 7 | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Specyfikacja: Interfejsy hosta | USB, RS-232, Keyboard Wedge (przewody sprzedawane osobno) | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Specyfikacja: Tryb samego ładowania | Kod programujący BASLNK0 | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Specyfikacja: Zasilanie | 2,5 W z portu USB; 10 W z zasilaczem 46-00536-6 | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Specyfikacja: Wymiary | 82,9 × 90,4 × 121,6 mm | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Specyfikacja: Masa | 214 g | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Specyfikacja: Szczelność | IP41 | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Specyfikacja: Temperatura ładowania | 5–35°C | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Specyfikacja: Kompatybilność | Honeywell Xenon Ultra 1962h z ładowaniem stykowym | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Zastosowania | Dodatkowe stanowisko ładowania skanera 1962h; Odczyt kodów w pozycji prezentacyjnej | HAG s.4 (CCB-U00-H-KIT, WCKIT, BASLNK0); H62 s.2 (wymiary, masa, IP41, zasilanie, temperatury) | zgodne |
| Zdjęcie `CCB-U00-H-KIT.png` (alt) | Honeywell CCB-U00-H-KIT — biała baza prezentacyjna Healthcare ze skanerem Xenon Ultra 1962h (zdjęcie poglądowe, skaner… | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Przewodnik akcesoriów Xenon Ultra 1960 i 1962 (EN) | /downloads/honeywell/honeywell-xenon-ultra-1960-1962-akcesoria-en.pdf (1,6 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność CCB-U00-H-KIT | strona = API: 947,57 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Honeywell CCB-U00-H-KIT — baza prezentacyjna Healthcare do…; brand Honeywell; sku CCB-U00-H-KIT; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (4: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Honeywell CCB-ULTRA-HORIZ-HC — pozioma baza Healthcare do Xenon Ultra 1962h (`/produkt/honeywell-ccb-ultra-horiz-hc`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Honeywell CCB-ULTRA-HORIZ-HC — pozioma baza Healthcare do Xenon Ultra 1962h | HAG s.4 (CCB-ULTRA-HORIZ-HC, HCWC); H62 s.2 (wymiary, masa) | zgodne |
| Meta title / description | Honeywell CCB-ULTRA-HORIZ-HC — pozioma baza do Xenon Ultra 1962h / TA… / Pozioma baza ładująco-komunikacyjna Honeywell CCB-ULTRA-HORIZ-HC na biurko lub… | HAG s.4 (CCB-ULTRA-HORIZ-HC, HCWC); H62 s.2 (wymiary, masa) | zgodne |
| Opis, akapit 1 | Pozioma baza Honeywell CCB-ULTRA-HORIZ-HC ładuje skaner Xenon Ultra 1962h i odbiera z niego dane. Należy do akcesoriów Healthcare; stawia się ją na biurku albo… | HAG s.4 (CCB-ULTRA-HORIZ-HC, HCWC); H62 s.2 (wymiary, masa) | zgodne |
| Opis, akapit 2 | Obudowa bazy jest biała, antymikrobowa i przygotowana do dezynfekcji. Łączność radiowa działa w klasie 1 na 100 m albo w klasie 2 na 10 m. Wersja do skanerów z… | HAG s.4 (CCB-ULTRA-HORIZ-HC, HCWC); H62 s.2 (wymiary, masa) | zgodne |
| Specyfikacja: Part Number | CCB-ULTRA-HORIZ-HC | HAG s.4 (CCB-ULTRA-HORIZ-HC, HCWC); H62 s.2 (wymiary, masa) | zgodne |
| Specyfikacja: Typ | Pozioma baza ładująco-komunikacyjna na biurko lub ścianę, wersja Healthcare | HAG s.4 (CCB-ULTRA-HORIZ-HC, HCWC); H62 s.2 (wymiary, masa) | zgodne |
| Specyfikacja: Obudowa | Biała, antymikrobowa, przygotowana do dezynfekcji | HAG s.4 (CCB-ULTRA-HORIZ-HC, HCWC); H62 s.2 (wymiary, masa) | zgodne |
| Specyfikacja: Bluetooth | Klasa 1: 100 m; klasa 2: 10 m | HAG s.4 (CCB-ULTRA-HORIZ-HC, HCWC); H62 s.2 (wymiary, masa) | zgodne |
| Specyfikacja: Wymiary | 211,3 × 74,2 × 77,7 mm | HAG s.4 (CCB-ULTRA-HORIZ-HC, HCWC); H62 s.2 (wymiary, masa) | zgodne |
| Specyfikacja: Masa | 223 g | HAG s.4 (CCB-ULTRA-HORIZ-HC, HCWC); H62 s.2 (wymiary, masa) | zgodne |
| Specyfikacja: Temperatura ładowania | 5–35°C | HAG s.4 (CCB-ULTRA-HORIZ-HC, HCWC); H62 s.2 (wymiary, masa) | zgodne |
| Specyfikacja: Kompatybilność | Honeywell Xenon Ultra 1962h z ładowaniem stykowym | HAG s.4 (CCB-ULTRA-HORIZ-HC, HCWC); H62 s.2 (wymiary, masa) | zgodne |
| Zastosowania | Stanowisko ładowania na biurku lub na ścianie; Dodatkowa baza skanera 1962h | HAG s.4 (CCB-ULTRA-HORIZ-HC, HCWC); H62 s.2 (wymiary, masa) | zgodne |
| Zdjęcie `CCB-ULTRA-HORIZ-HC.png` (alt) | Honeywell CCB-ULTRA-HORIZ-HC — biała pozioma baza Healthcare ze skanerem Xenon Ultra 1962h (zdjęcie poglądowe, skaner s… | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Przewodnik akcesoriów Xenon Ultra 1960 i 1962 (EN) | /downloads/honeywell/honeywell-xenon-ultra-1960-1962-akcesoria-en.pdf (1,6 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność CCB-ULTRA-HORIZ-HC | strona = API: 947,57 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Honeywell CCB-ULTRA-HORIZ-HC — pozioma baza Healthcare do X…; brand Honeywell; sku CCB-ULTRA-HORIZ-HC; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (3: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Baza Bluetooth Datalogic WLC4690-HC-BT do Gryphon GBT4600 HC (`/produkt/datalogic-gryphon-wlc4690-hc-bt`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Baza Bluetooth Datalogic WLC4690-HC-BT do Gryphon GBT4600 HC | DEC („Wireless Charging Base Station, BT, USB/RS-232 Multi-Interface, White HC”); DDS s.2 (7 skanerów, 4,5–14 V, < 6 W, diody) | zgodne |
| Meta title / description | Baza Datalogic WLC4690-HC-BT do Gryphon GBT4600 HC / TAKMA / Baza Datalogic WLC4690-HC-BT White HC: Bluetooth, indukcyjne ładowanie skanera… | DEC („Wireless Charging Base Station, BT, USB/RS-232 Multi-Interface, White HC”); DDS s.2 (7 skanerów, 4,5–14 V, < 6 W, diody) | zgodne |
| Opis, akapit 1 | WLC4690-HC-BT to biała baza Bluetooth do skanera Gryphon GBT4600 HC. Odbiera dane ze skanera i ładuje jego akumulator indukcyjnie, bez styków. Do jednej bazy m… | DEC („Wireless Charging Base Station, BT, USB/RS-232 Multi-Interface, White HC”); DDS s.2 (7 skanerów, 4,5–14 V, < 6 W, diody) | zgodne |
| Opis, akapit 2 | Do komputera bazę podłącza się złączem USB-C, USB lub RS-232 (do wyboru). Napięcie zasilania bazy wynosi 4,5–14 V DC. Przewód do komputera i zasilacz są sprzed… | DEC („Wireless Charging Base Station, BT, USB/RS-232 Multi-Interface, White HC”); DDS s.2 (7 skanerów, 4,5–14 V, < 6 W, diody) | zgodne |
| Specyfikacja: Part Number | WLC4690-HC-BT | DEC („Wireless Charging Base Station, BT, USB/RS-232 Multi-Interface, White HC”); DDS s.2 (7 skanerów, 4,5–14 V, < 6 W, diody) | zgodne |
| Specyfikacja: Typ | Baza komunikacyjna Bluetooth z ładowaniem indukcyjnym | DEC („Wireless Charging Base Station, BT, USB/RS-232 Multi-Interface, White HC”); DDS s.2 (7 skanerów, 4,5–14 V, < 6 W, diody) | zgodne |
| Specyfikacja: Kolor | White HC | DEC („Wireless Charging Base Station, BT, USB/RS-232 Multi-Interface, White HC”); DDS s.2 (7 skanerów, 4,5–14 V, < 6 W, diody) | zgodne |
| Specyfikacja: Interfejsy | USB-C, USB, RS-232 | DEC („Wireless Charging Base Station, BT, USB/RS-232 Multi-Interface, White HC”); DDS s.2 (7 skanerów, 4,5–14 V, < 6 W, diody) | zgodne |
| Specyfikacja: Zasilanie | 4,5–14 V DC ±5%; ładowanie typowo < 6 W | DEC („Wireless Charging Base Station, BT, USB/RS-232 Multi-Interface, White HC”); DDS s.2 (7 skanerów, 4,5–14 V, < 6 W, diody) | zgodne |
| Specyfikacja: Diody | Ładowanie (pulsuje na pomarańczowo), naładowany (świeci na zielono) | DEC („Wireless Charging Base Station, BT, USB/RS-232 Multi-Interface, White HC”); DDS s.2 (7 skanerów, 4,5–14 V, < 6 W, diody) | zgodne |
| Specyfikacja: Kompatybilność | Datalogic Gryphon GBT4600 HC | DEC („Wireless Charging Base Station, BT, USB/RS-232 Multi-Interface, White HC”); DDS s.2 (7 skanerów, 4,5–14 V, < 6 W, diody) | zgodne |
| Zastosowania | Ładowanie i komunikacja GBT4600 HC; Baza zapasowa na drugim stanowisku | DEC („Wireless Charging Base Station, BT, USB/RS-232 Multi-Interface, White HC”); DDS s.2 (7 skanerów, 4,5–14 V, < 6 W, diody) | zgodne |
| Zdjęcie `placeholder.svg` (alt) | Baza Bluetooth Datalogic WLC4690-HC-BT w kolorze White HC do Gryphon GBT4600 HC | obejrzane zdjęcie (arkusz kontrolny), SVG | brak zdjęcia (zastępcze logo) — sprawa dla właściciela |
| Plik: Karta katalogowa Gryphon 4600 (EN) | /datasheets/datalogic-gryphon-4600-en.pdf (676 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Skrócona instrukcja Gryphon GBT4600 / GM4600 i baz WLC4690 (EN) | /instrukcje/datalogic-gryphon-cordless-en.pdf (3,0 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność WLC4690-HC-BT | strona = API: 718,6 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Baza Bluetooth Datalogic WLC4690-HC-BT do Gryphon GBT4600 HC; brand Datalogic; sku WLC4690-HC-BT; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (9: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Baza STAR 433 MHz Datalogic WLC4690-HC-433 do Gryphon GM4600 HC (`/produkt/datalogic-gryphon-wlc4690-hc-433`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Baza STAR 433 MHz Datalogic WLC4690-HC-433 do Gryphon GM4600 HC | DEC (433MHz, White HC); DDS s.2 (16 skanerów, 4,5–14 V) | zgodne |
| Meta title / description | Baza Datalogic WLC4690-HC-433 do Gryphon GM4600 HC / TAKMA / Baza radiowa Datalogic WLC4690-HC-433 w kolorze White HC do Gryphon GM4600 HC:… | DEC (433MHz, White HC); DDS s.2 (16 skanerów, 4,5–14 V) | zgodne |
| Opis, akapit 1 | Baza Datalogic WLC4690-HC-433 pracuje ze skanerem Gryphon GM4600 HC. Jest odbiornikiem systemu STAR w paśmie 433 MHz i jednocześnie ładowarką indukcyjną. Może… | DEC (433MHz, White HC); DDS s.2 (16 skanerów, 4,5–14 V) | zgodne |
| Opis, akapit 2 | Komputer podłącza się do bazy złączem USB-C, USB lub RS-232. Wymaga zasilania 4,5–14 V DC z przewodu lub zasilacza, które są sprzedawane osobno. Ta sama baza w… | DEC (433MHz, White HC); DDS s.2 (16 skanerów, 4,5–14 V) | zgodne |
| Specyfikacja: Part Number | WLC4690-HC-433 | DEC (433MHz, White HC); DDS s.2 (16 skanerów, 4,5–14 V) | zgodne |
| Specyfikacja: Typ | Odbiornik radiowy STAR 433 MHz z ładowaniem indukcyjnym | DEC (433MHz, White HC); DDS s.2 (16 skanerów, 4,5–14 V) | zgodne |
| Specyfikacja: Kolor | White HC | DEC (433MHz, White HC); DDS s.2 (16 skanerów, 4,5–14 V) | zgodne |
| Specyfikacja: Interfejsy | USB-C, USB, RS-232 | DEC (433MHz, White HC); DDS s.2 (16 skanerów, 4,5–14 V) | zgodne |
| Specyfikacja: Zasilanie | 4,5–14 V DC ±5% | DEC (433MHz, White HC); DDS s.2 (16 skanerów, 4,5–14 V) | zgodne |
| Specyfikacja: Skanery na odbiornik | Do 16 | DEC (433MHz, White HC); DDS s.2 (16 skanerów, 4,5–14 V) | zgodne |
| Specyfikacja: Kompatybilność | Datalogic Gryphon GM4600 HC (433 MHz) | DEC (433MHz, White HC); DDS s.2 (16 skanerów, 4,5–14 V) | zgodne |
| Zastosowania | Odbiór danych z kilku skanerów GM4600 HC; Ładowanie skanera na stanowisku | DEC (433MHz, White HC); DDS s.2 (16 skanerów, 4,5–14 V) | zgodne |
| Zdjęcie `placeholder.svg` (alt) | Baza STAR 433 MHz Datalogic WLC4690-HC-433 w kolorze White HC do Gryphon GM4600 HC | obejrzane zdjęcie (arkusz kontrolny), SVG | brak zdjęcia (zastępcze logo) — sprawa dla właściciela |
| Plik: Karta katalogowa Gryphon 4600 (EN) | /datasheets/datalogic-gryphon-4600-en.pdf (676 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Plik: Skrócona instrukcja Gryphon GBT4600 / GM4600 i baz WLC4690 (EN) | /instrukcje/datalogic-gryphon-cordless-en.pdf (3,0 MB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność WLC4690-HC-433 | strona = API: 718,6 zł netto, available (2 szt.; PL 0, EU 2, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Baza STAR 433 MHz Datalogic WLC4690-HC-433 do Gryphon GM460…; brand Datalogic; sku WLC4690-HC-433; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (9: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Klips na wózek Datalogic CC-WLC4690-HC do bazy WLC4690-HC (`/produkt/datalogic-gryphon-cc-wlc4690-hc`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Klips na wózek Datalogic CC-WLC4690-HC do bazy WLC4690-HC | DEC („Cart Clip, White HC (for use with WLC4690-HC…)”) | zgodne |
| Meta title / description | Klips na wózek Datalogic CC-WLC4690-HC White HC / TAKMA / Klips Datalogic CC-WLC4690-HC (Cart Clip, White HC) do mocowania bazy WLC4690-H… | DEC („Cart Clip, White HC (for use with WLC4690-HC…)”) | zgodne |
| Opis, akapit 1 | CC-WLC4690-HC to klips w kolorze White HC do mocowania bazy WLC4690-HC na wózku. Pasuje do bazy Bluetooth WLC4690-HC-BT i bazy radiowej WLC4690-HC-433. Baza ze… | DEC („Cart Clip, White HC (for use with WLC4690-HC…)”) | zgodne |
| Opis, akapit 2 | Pozycja obejmuje sam klips. Baza i skaner są sprzedawane osobno. | DEC („Cart Clip, White HC (for use with WLC4690-HC…)”) | zgodne |
| Specyfikacja: Part Number | CC-WLC4690-HC | DEC („Cart Clip, White HC (for use with WLC4690-HC…)”) | zgodne |
| Specyfikacja: Typ | Klips do montażu bazy na wózku (Cart Clip) | DEC („Cart Clip, White HC (for use with WLC4690-HC…)”) | zgodne |
| Specyfikacja: Kolor | White HC | DEC („Cart Clip, White HC (for use with WLC4690-HC…)”) | zgodne |
| Specyfikacja: Kompatybilność | Bazy WLC4690-HC-BT i WLC4690-HC-433 | DEC („Cart Clip, White HC (for use with WLC4690-HC…)”) | zgodne |
| Zastosowania | Baza skanera na wózku | DEC („Cart Clip, White HC (for use with WLC4690-HC…)”) | zgodne |
| Zdjęcie `placeholder.svg` (alt) | Klips na wózek Datalogic CC-WLC4690-HC w kolorze White HC do bazy WLC4690-HC | obejrzane zdjęcie (arkusz kontrolny), SVG | brak zdjęcia (zastępcze logo) — sprawa dla właściciela |
| Plik: Karta katalogowa Gryphon 4600 (EN) | /datasheets/datalogic-gryphon-4600-en.pdf (676 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność CC-WLC4690-HC | strona = API: 73,1 zł netto, available (49 szt.; PL 0, EU 49, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Klips na wózek Datalogic CC-WLC4690-HC do bazy WLC4690-HC; brand Datalogic; sku CC-WLC4690-HC; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (5: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Adapter prezentacyjny Datalogic PA-WLC4690-HC do bazy WLC4690-HC (`/produkt/datalogic-gryphon-pa-wlc4690-hc`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Adapter prezentacyjny Datalogic PA-WLC4690-HC do bazy WLC4690-HC | DEC („Presentation Mode Enabler and Bracket Adapter Compatible with WLC4090 Mounting System, White HC”) | zgodne |
| Meta title / description | Adapter Datalogic PA-WLC4690-HC do bazy WLC4690-HC / TAKMA / Datalogic PA-WLC4690-HC White HC: adapter trybu prezentacyjnego i uchwytu zgodn… | DEC („Presentation Mode Enabler and Bracket Adapter Compatible with WLC4090 Mounting System, White HC”) | zgodne |
| Opis, akapit 1 | PA-WLC4690-HC to biały adapter do bazy WLC4690-HC. Włącza tryb prezentacyjny i pozwala zamocować bazę w systemie mocowania WLC4090. Dotyczy baz WLC4690-HC-BT i… | DEC („Presentation Mode Enabler and Bracket Adapter Compatible with WLC4090 Mounting System, White HC”) | zgodne |
| Opis, akapit 2 | Adapter jest sprzedawany bez bazy i bez skanera. Do czarnej bazy WLC4690-BK przeznaczona jest wersja PA-WLC4690-BK. | DEC („Presentation Mode Enabler and Bracket Adapter Compatible with WLC4090 Mounting System, White HC”) | zgodne |
| Specyfikacja: Part Number | PA-WLC4690-HC | DEC („Presentation Mode Enabler and Bracket Adapter Compatible with WLC4090 Mounting System, White HC”) | zgodne |
| Specyfikacja: Typ | Adapter trybu prezentacyjnego i mocowania zgodnego z WLC4090 | DEC („Presentation Mode Enabler and Bracket Adapter Compatible with WLC4090 Mounting System, White HC”) | zgodne |
| Specyfikacja: Kolor | White HC | DEC („Presentation Mode Enabler and Bracket Adapter Compatible with WLC4090 Mounting System, White HC”) | zgodne |
| Specyfikacja: Kompatybilność | Bazy WLC4690-HC-BT i WLC4690-HC-433 | DEC („Presentation Mode Enabler and Bracket Adapter Compatible with WLC4090 Mounting System, White HC”) | zgodne |
| Zastosowania | Praca w trybie prezentacyjnym na stanowisku; Montaż bazy w uchwycie WLC4090 | DEC („Presentation Mode Enabler and Bracket Adapter Compatible with WLC4090 Mounting System, White HC”) | zgodne |
| Zdjęcie `placeholder.svg` (alt) | Adapter prezentacyjny Datalogic PA-WLC4690-HC w kolorze White HC do bazy WLC4690-HC | obejrzane zdjęcie (arkusz kontrolny), SVG | brak zdjęcia (zastępcze logo) — sprawa dla właściciela |
| Plik: Karta katalogowa Gryphon 4600 (EN) | /datasheets/datalogic-gryphon-4600-en.pdf (676 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność PA-WLC4690-HC | strona = API: 87,68 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Adapter prezentacyjny Datalogic PA-WLC4690-HC do bazy WLC46…; brand Datalogic; sku PA-WLC4690-HC; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (5: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Adapter montażowy Datalogic BA-WLC4690-HC do bazy WLC4690-HC (`/produkt/datalogic-gryphon-ba-wlc4690-hc`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Adapter montażowy Datalogic BA-WLC4690-HC do bazy WLC4690-HC | DEC („Bracket Adapter Compatible with WLC4190 Mounting System (for use with WLC4690-HC)”) | zgodne |
| Meta title / description | Adapter montażowy Datalogic BA-WLC4690-HC (WLC4190) / TAKMA / Adapter Datalogic BA-WLC4690-HC (Bracket Adapter) do zamocowania bazy WLC4690-H… | DEC („Bracket Adapter Compatible with WLC4190 Mounting System (for use with WLC4690-HC)”) | zgodne |
| Opis, akapit 1 | BA-WLC4690-HC to adapter montażowy dla bazy WLC4690-HC. Pozwala osadzić bazę WLC4690-HC-BT lub WLC4690-HC-433 w systemie mocowania WLC4190. Dzięki temu bazę sk… | DEC („Bracket Adapter Compatible with WLC4190 Mounting System (for use with WLC4690-HC)”) | zgodne |
| Opis, akapit 2 | W pozycji jest wyłącznie adapter. Wersja BA-WLC4690-BK pasuje do czarnej bazy WLC4690-BK. | DEC („Bracket Adapter Compatible with WLC4190 Mounting System (for use with WLC4690-HC)”) | zgodne |
| Specyfikacja: Part Number | BA-WLC4690-HC | DEC („Bracket Adapter Compatible with WLC4190 Mounting System (for use with WLC4690-HC)”) | zgodne |
| Specyfikacja: Typ | Adapter montażowy (Bracket Adapter) zgodny z systemem mocowania WLC4190 | DEC („Bracket Adapter Compatible with WLC4190 Mounting System (for use with WLC4690-HC)”) | zgodne |
| Specyfikacja: Kompatybilność | Bazy WLC4690-HC-BT i WLC4690-HC-433 | DEC („Bracket Adapter Compatible with WLC4190 Mounting System (for use with WLC4690-HC)”) | zgodne |
| Zastosowania | Montaż nowej bazy w istniejącym uchwycie WLC4190 | DEC („Bracket Adapter Compatible with WLC4190 Mounting System (for use with WLC4690-HC)”) | zgodne |
| Zdjęcie `placeholder.svg` (alt) | Adapter montażowy Datalogic BA-WLC4690-HC do bazy WLC4690-HC i systemu mocowania WLC4190 | obejrzane zdjęcie (arkusz kontrolny), SVG | brak zdjęcia (zastępcze logo) — sprawa dla właściciela |
| Plik: Karta katalogowa Gryphon 4600 (EN) | /datasheets/datalogic-gryphon-4600-en.pdf (676 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność BA-WLC4690-HC | strona = API: 73,1 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Adapter montażowy Datalogic BA-WLC4690-HC do bazy WLC4690-HC; brand Datalogic; sku BA-WLC4690-HC; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (5: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Przewód USB-A Datalogic 90A052278, biały, 2 m (`/produkt/datalogic-usb-90a052278`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Przewód USB-A Datalogic 90A052278, biały, 2 m | DEC („Cable, USB, Type A, PVCW, Straight, 2M, White”; zestawy HC z 90A052278; czarny 90A052258) | zgodne |
| Meta title / description | Przewód USB-A Datalogic 90A052278 biały do Gryphon 4600 HC / TAKMA / Biały przewód USB-A Datalogic 90A052278 (PVC, prosty, 2 m) do skanerów Gryphon… | DEC („Cable, USB, Type A, PVCW, Straight, 2M, White”; zestawy HC z 90A052278; czarny 90A052258) | zgodne |
| Opis, akapit 1 | Datalogic 90A052278 to przewód USB-A w białej izolacji, prosty, długość 2 m. Datalogic dołącza go do wszystkich zestawów Gryphon 4600 HC: GD4690 HC, GD4620 HC,… | DEC („Cable, USB, Type A, PVCW, Straight, 2M, White”; zestawy HC z 90A052278; czarny 90A052258) | zgodne |
| Opis, akapit 2 | W modelach przewodowych łączy skaner z komputerem. W modelach bezprzewodowych łączy z komputerem bazę WLC4690-HC. Osobny przewód przydaje się przy zakupie same… | DEC („Cable, USB, Type A, PVCW, Straight, 2M, White”; zestawy HC z 90A052278; czarny 90A052258) | zgodne |
| Specyfikacja: Part Number | 90A052278 | DEC („Cable, USB, Type A, PVCW, Straight, 2M, White”; zestawy HC z 90A052278; czarny 90A052258) | zgodne |
| Specyfikacja: Typ | Przewód USB typu A, prosty | DEC („Cable, USB, Type A, PVCW, Straight, 2M, White”; zestawy HC z 90A052278; czarny 90A052258) | zgodne |
| Specyfikacja: Izolacja | PVC | DEC („Cable, USB, Type A, PVCW, Straight, 2M, White”; zestawy HC z 90A052278; czarny 90A052258) | zgodne |
| Specyfikacja: Długość | 2 m | DEC („Cable, USB, Type A, PVCW, Straight, 2M, White”; zestawy HC z 90A052278; czarny 90A052258) | zgodne |
| Specyfikacja: Kolor | Biały | DEC („Cable, USB, Type A, PVCW, Straight, 2M, White”; zestawy HC z 90A052278; czarny 90A052258) | zgodne |
| Specyfikacja: Kompatybilność | Gryphon GD4690 HC, GD4620 HC; bazy WLC4690-HC-BT i WLC4690-HC-433 | DEC („Cable, USB, Type A, PVCW, Straight, 2M, White”; zestawy HC z 90A052278; czarny 90A052258) | zgodne |
| Zastosowania | Podłączenie skanera HC do komputera; Przewód zapasowy | DEC („Cable, USB, Type A, PVCW, Straight, 2M, White”; zestawy HC z 90A052278; czarny 90A052258) | zgodne |
| Zdjęcie `90A052278.png` (alt) | Przewód USB-A Datalogic 90A052278 — biały zwinięty przewód 2 m z wtykiem USB-A i złączem do skanera | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa Gryphon 4600 (EN) | /datasheets/datalogic-gryphon-4600-en.pdf (676 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność 90A052278 | strona = API: 67,24 zł netto, available (77 szt.; PL 0, EU 77, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Przewód USB-A Datalogic 90A052278, biały, 2 m; brand Datalogic; sku 90A052278; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (6: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Przewód USB-C Datalogic 90A052353, biały, 2 m (`/produkt/datalogic-usb-c-90a052353`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Przewód USB-C Datalogic 90A052353, biały, 2 m | DEC („Cable, USB, Type C, PVCW, Straight, 2M, White”; czarny 90A052352); DDS (Interfaces GD4620/GD4690) | zgodne |
| Meta title / description | Przewód USB-C Datalogic 90A052353 biały, 2 m / TAKMA / Biały przewód USB-C Datalogic 90A052353 (PVC, prosty, 2 m) do podłączenia skane… | DEC („Cable, USB, Type C, PVCW, Straight, 2M, White”; czarny 90A052352); DDS (Interfaces GD4620/GD4690) | zgodne |
| Opis, akapit 1 | Przewód Datalogic 90A052353 ma wtyk USB typu C, długość 2 m i białą izolację z PVC. Łączy z komputerem z portem USB-C przewodowy skaner GD4690 HC albo GD4620 H… | DEC („Cable, USB, Type C, PVCW, Straight, 2M, White”; czarny 90A052352); DDS (Interfaces GD4620/GD4690) | zgodne |
| Opis, akapit 2 | Zestawy Gryphon 4600 HC zawierają przewód USB-A 90A052278. Wersję USB-C zamawia się osobno. Datalogic oferuje ją także w kolorze czarnym (90A052352). | DEC („Cable, USB, Type C, PVCW, Straight, 2M, White”; czarny 90A052352); DDS (Interfaces GD4620/GD4690) | zgodne |
| Specyfikacja: Part Number | 90A052353 | DEC („Cable, USB, Type C, PVCW, Straight, 2M, White”; czarny 90A052352); DDS (Interfaces GD4620/GD4690) | zgodne |
| Specyfikacja: Typ | Przewód USB typu C, prosty | DEC („Cable, USB, Type C, PVCW, Straight, 2M, White”; czarny 90A052352); DDS (Interfaces GD4620/GD4690) | zgodne |
| Specyfikacja: Izolacja | PVC | DEC („Cable, USB, Type C, PVCW, Straight, 2M, White”; czarny 90A052352); DDS (Interfaces GD4620/GD4690) | zgodne |
| Specyfikacja: Długość | 2 m | DEC („Cable, USB, Type C, PVCW, Straight, 2M, White”; czarny 90A052352); DDS (Interfaces GD4620/GD4690) | zgodne |
| Specyfikacja: Kolor | Biały | DEC („Cable, USB, Type C, PVCW, Straight, 2M, White”; czarny 90A052352); DDS (Interfaces GD4620/GD4690) | zgodne |
| Specyfikacja: Kompatybilność | Gryphon GD4690 HC, GD4620 HC | DEC („Cable, USB, Type C, PVCW, Straight, 2M, White”; czarny 90A052352); DDS (Interfaces GD4620/GD4690) | zgodne |
| Zastosowania | Komputer lub terminal z portem USB-C | DEC („Cable, USB, Type C, PVCW, Straight, 2M, White”; czarny 90A052352); DDS (Interfaces GD4620/GD4690) | zgodne |
| Zdjęcie `placeholder.svg` (alt) | Przewód USB-C Datalogic 90A052353, biały, 2 m, do skanerów Gryphon 4600 HC | obejrzane zdjęcie (arkusz kontrolny), SVG | brak zdjęcia (zastępcze logo) — sprawa dla właściciela |
| Plik: Karta katalogowa Gryphon 4600 (EN) | /datasheets/datalogic-gryphon-4600-en.pdf (676 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność 90A052353 | strona = API: 73,1 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Przewód USB-C Datalogic 90A052353, biały, 2 m; brand Datalogic; sku 90A052353; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (4: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Podstawka Datalogic STD-G041-WH, biała, do Gryphon GD4690 HC i GD4620 HC (`/produkt/datalogic-gryphon-std-g041-wh`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Podstawka Datalogic STD-G041-WH, biała, do Gryphon GD4690 HC i GD4620 HC | DEC („Stand, Auto, G041, White”); DQ (Stand Mode/Object Detection); DDS (Accessories) | zgodne |
| Meta title / description | Podstawka Datalogic STD-G041-WH biała do Gryphon 4600 HC / TAKMA / Biała podstawka Datalogic STD-G041-WH (Stand, Auto) z elastycznym ramieniem dla… | DEC („Stand, Auto, G041, White”); DQ (Stand Mode/Object Detection); DDS (Accessories) | zgodne |
| Opis, akapit 1 | STD-G041-WH to biała podstawka z ramieniem z serii akcesoriów Gryphon 4600. Utrzymuje przewodowy skaner Gryphon GD4690 HC lub GD4620 HC nad blatem. Po włożeniu… | DEC („Stand, Auto, G041, White”); DQ (Stand Mode/Object Detection); DDS (Accessories) | zgodne |
| Opis, akapit 2 | Podstawka nie ładuje skanera i nie przesyła danych. Nie zastępuje baz WLC4690-HC do modeli bezprzewodowych. Skaner i przewód są sprzedawane osobno. | DEC („Stand, Auto, G041, White”); DQ (Stand Mode/Object Detection); DDS (Accessories) | zgodne |
| Specyfikacja: Part Number | STD-G041-WH | DEC („Stand, Auto, G041, White”); DQ (Stand Mode/Object Detection); DDS (Accessories) | zgodne |
| Specyfikacja: Typ | Podstawka z ramieniem, tryb automatyczny (Stand, Auto) | DEC („Stand, Auto, G041, White”); DQ (Stand Mode/Object Detection); DDS (Accessories) | zgodne |
| Specyfikacja: Kolor | Biały | DEC („Stand, Auto, G041, White”); DQ (Stand Mode/Object Detection); DDS (Accessories) | zgodne |
| Specyfikacja: Kompatybilność | Przewodowe Gryphon GD4690 HC i GD4620 HC | DEC („Stand, Auto, G041, White”); DQ (Stand Mode/Object Detection); DDS (Accessories) | zgodne |
| Zastosowania | Odczyt bez trzymania skanera na stanowisku; Rejestracja i apteka | DEC („Stand, Auto, G041, White”); DQ (Stand Mode/Object Detection); DDS (Accessories) | zgodne |
| Zdjęcie `STD-G041-WH.png` (alt) | Podstawka Datalogic STD-G041-WH — biała podstawka z giętkim ramieniem i uchwytem na skaner, bez skanera | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa Gryphon 4600 (EN) | /datasheets/datalogic-gryphon-4600-en.pdf (676 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność STD-G041-WH | strona = API: 125,7 zł netto, available (136 szt.; PL 0, EU 136, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Podstawka Datalogic STD-G041-WH, biała, do Gryphon GD4690 H…; brand Datalogic; sku STD-G041-WH; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (3: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Uchwyt biurkowy i ścienny Datalogic HLD-G041-WH, biały, do Gryphon 4600 HC (`/produkt/datalogic-gryphon-hld-g041-wh`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Uchwyt biurkowy i ścienny Datalogic HLD-G041-WH, biały, do Gryphon 4600 HC | DEC („Holder, Desk/Wall Mount, G041, White”); DDS (Accessories, seria) | zgodne |
| Meta title / description | Uchwyt Datalogic HLD-G041-WH biały do Gryphon 4600 HC / TAKMA / Biały uchwyt Datalogic HLD-G041-WH (Holder, Desk/Wall Mount) do skanerów Datalo… | DEC („Holder, Desk/Wall Mount, G041, White”); DDS (Accessories, seria) | zgodne |
| Opis, akapit 1 | HLD-G041-WH to biały uchwyt do odkładania skanera Gryphon 4600. Można go postawić na biurku albo przykręcić do ściany. W uchwycie mieści się skaner przewodowy… | DEC („Holder, Desk/Wall Mount, G041, White”); DDS (Accessories, seria) | zgodne |
| Opis, akapit 2 | Uchwyt nie ładuje skanera bezprzewodowego. Do ładowania służą bazy WLC4690-HC. | DEC („Holder, Desk/Wall Mount, G041, White”); DDS (Accessories, seria) | zgodne |
| Specyfikacja: Part Number | HLD-G041-WH | DEC („Holder, Desk/Wall Mount, G041, White”); DDS (Accessories, seria) | zgodne |
| Specyfikacja: Typ | Uchwyt biurkowy lub ścienny (Holder, Desk/Wall Mount) | DEC („Holder, Desk/Wall Mount, G041, White”); DDS (Accessories, seria) | zgodne |
| Specyfikacja: Kolor | Biały | DEC („Holder, Desk/Wall Mount, G041, White”); DDS (Accessories, seria) | zgodne |
| Specyfikacja: Kompatybilność | Gryphon GD4690 HC, GD4620 HC, GBT4600 HC, GM4600 HC | DEC („Holder, Desk/Wall Mount, G041, White”); DDS (Accessories, seria) | zgodne |
| Zastosowania | Miejsce na skaner przy stanowisku; Montaż na ścianie w gabinecie | DEC („Holder, Desk/Wall Mount, G041, White”); DDS (Accessories, seria) | zgodne |
| Zdjęcie `HLD-G041-WH.png` (alt) | Uchwyt Datalogic HLD-G041-WH — biały uchwyt na biurko lub ścianę, bez skanera | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Plik: Karta katalogowa Gryphon 4600 (EN) | /datasheets/datalogic-gryphon-4600-en.pdf (676 KB) | HTTP 200; rozmiar zgodny | zgodne |
| Cena i dostępność HLD-G041-WH | strona = API: 55,55 zł netto, available (71 szt.; PL 0, EU 71, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Uchwyt biurkowy i ścienny Datalogic HLD-G041-WH, biały, do…; brand Datalogic; sku HLD-G041-WH; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (5: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Podstawka Newland NLS-STD23-33-SA-W, biała, do HR23 i HR33 AI White (`/produkt/newland-std23-33-sa-w`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Podstawka Newland NLS-STD23-33-SA-W, biała, do HR23 i HR33 AI White | NST; N33C s.1/N23C s.1 (stand upright–flat, desktop/wall) | zgodne |
| Meta title / description | Podstawka Newland NLS-STD23-33-SA-W do HR23 i HR33 White / TAKMA / Biała podstawka Newland NLS-STD23-33-SA-W (White Smart Adjustable Stand) do ska… | NST; N33C s.1/N23C s.1 (stand upright–flat, desktop/wall) | zgodne |
| Opis, akapit 1 | NLS-STD23-33-SA-W to biała regulowana podstawka do przewodowych skanerów Newland HR33 Marlin AI Corded White i HR23 Dorada AI Corded White. Kąt ustawienia zmie… | NST; N33C s.1/N23C s.1 (stand upright–flat, desktop/wall) | zgodne |
| Opis, akapit 2 | Biały kolor pasuje do skanerów serii White przeznaczonych dla ochrony zdrowia. Ta sama podstawka jest częścią zestawów NLS-HR3300-V2-SA-W i NLS-HR2300-V2-SA-W.… | NST; N33C s.1/N23C s.1 (stand upright–flat, desktop/wall) | zgodne |
| Specyfikacja: Part Number | NLS-STD23-33-SA-W | NST; N33C s.1/N23C s.1 (stand upright–flat, desktop/wall) | zgodne |
| Specyfikacja: Typ | Regulowana podstawka (White Smart Adjustable Stand) | NST; N33C s.1/N23C s.1 (stand upright–flat, desktop/wall) | zgodne |
| Specyfikacja: Kolor | Biały | NST; N33C s.1/N23C s.1 (stand upright–flat, desktop/wall) | zgodne |
| Specyfikacja: Montaż | Na biurku lub na ścianie; ustawienie od pionowego do płaskiego | NST; N33C s.1/N23C s.1 (stand upright–flat, desktop/wall) | zgodne |
| Specyfikacja: Kompatybilność | Newland HR33 Marlin AI Corded White, HR23 Dorada AI Corded White | NST; N33C s.1/N23C s.1 (stand upright–flat, desktop/wall) | zgodne |
| Specyfikacja: Gwarancja producenta | 3 miesiące | NST; N33C s.1/N23C s.1 (stand upright–flat, desktop/wall) | zgodne |
| Zastosowania | Stanowisko rejestracji z odczytem bez trzymania skanera; Montaż skanera na ścianie gabinetu | NST; N33C s.1/N23C s.1 (stand upright–flat, desktop/wall) | zgodne |
| Zdjęcie `NLS-STD23-33-SA-W.png` (alt) | Podstawka Newland NLS-STD23-33-SA-W — biała regulowana podstawka do HR23 i HR33 White, bez skanera | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Cena i dostępność NLS-STD23-33-SA-W | strona = API: 55,52 zł netto, unavailable (0 szt.; PL 0, EU 0, w drodze 0) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Podstawka Newland NLS-STD23-33-SA-W, biała, do HR23 i HR33…; brand Newland; sku NLS-STD23-33-SA-W; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (2: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |

### Honeywell BAT-SCN11 — bateria Li-ion 3 300 mAh (`/produkt/honeywell-bat-scn11`)

| Element strony | Treść na stronie | Dokument producenta | Wynik |
|---|---|---|---|
| Nazwa / H1 | Honeywell BAT-SCN11 — bateria Li-ion 3 300 mAh | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Meta title / description | Honeywell BAT-SCN11 — bateria 3 300 mAh do skanerów Granit Ultra 2105… / Bateria Honeywell BAT-SCN11 Li-ion 3 300 mAh (12 Wh) do bezprzewodowych skaneró… | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Opis, akapit 1 | Bateria zapasowa Honeywell BAT-SCN11 Li-ion 3 300 mAh (3,7 V / 12 Wh) do bezprzewodowych skanerów Honeywell nowej generacji. W Granit Ultra 2105i wystarcza na… | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Opis, akapit 2 | Kompatybilna z: Honeywell Granit Ultra 2105i (bezprzewodowy) oraz bezprzewodowymi skanerami Xenon Ultra 1962 i 1962h z ładowaniem stykowym. Wersje z ładowaniem… | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Opis, akapit 3 | UWAGA: bateria BAT-SCN11 NIE jest kompatybilna ze starszymi skanerami Granit XP 1990i, Voyager 1202g, Xenon 1902 — te używają baterii BAT-SCN01A. | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Specyfikacja: Part Number | BAT-SCN11 | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Specyfikacja: Typ | Bateria Li-ion (akumulator zapasowy) | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Specyfikacja: Pojemność | 3 300 mAh | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Specyfikacja: Napięcie | 3,7 V (nominalne) / 4,2 V (maks.) | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Specyfikacja: Energia | 12 Wh | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Specyfikacja: Wymiary | 94,7 × 22,2 × 27,1 mm | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Specyfikacja: Waga | ~137 g | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Specyfikacja: Odczytów na ładowaniu | Granit Ultra 2105i: do 100 000 (2 odczyty/s, 14 h); Xenon Ultra 1962 / 1962h: do 80 000 (1 odczyt/s, ok. 22 h) | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Specyfikacja: Gwarancja | 12 miesięcy | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Zastosowania | Bateria zamienna na drugą zmianę w magazynie; Zapas baterii do floty skanerów Granit Ultra 2105i | HAG s.3 (BAT-SCN11 do 1962 Bluetooth); H62 (3300 mAh, 80 000, 22 h); karta Granit Ultra 2105i | zgodne |
| Zdjęcie `BAT-SCN11.png` (alt) | Honeywell BAT-SCN11 — bateria Li-ion 3 300 mAh do skanerów Granit Ultra 2105i i Xenon Ultra | obejrzane zdjęcie (arkusz kontrolny), 800 × 800 PNG | zgodne |
| Cena i dostępność BAT-SCN11 | strona = API: 236,67 zł netto, available (165 szt.; PL 0, EU 55, w drodze 110) | `/api/stock` (2 wywołania 25.10, drugie rozstrzyga) | zgodne |
| JSON-LD Product | Honeywell BAT-SCN11 — bateria Li-ion 3 300 mAh; brand Honeywell; sku BAT-SCN11; oferty = API | treść karty, `/api/stock` | zgodne |
| Linki (0: karty, kategorie, PDF) | wszystkie HTTP 200 bez przekierowań | — | zgodne |
