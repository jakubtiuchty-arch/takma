# Tablety Bluebird — poprawki zgodności z kartami producenta (24.10.2026)

Dokument roboczy, nie jest treścią dla klientów. Zakres: `src/data/bluebird-tablet-products.ts` (T30, T10, T40 Ultra i 14 akcesoriów), wpis `tablety-bluebird` w `src/data/brand-category-content.ts`, `longDescription` marki w `brandCategories` (`src/data/products.ts`) i linie o tabletach Bluebird w `public/llms.txt`. Podstawa: audyt TB z 24.10.2026 na stanie 6daa476c (`scratchpad/audyt-opisy/raport-TB-bluebird-tablety.md`).

## 1. Korekta decyzji o ładowaniu Qi w T40 Ultra

W `audit.md` (tabela sprzeczności, wiersz „T40 Ultra — Qi”, oraz p. 11 „meta … w wersjach WWAN”) zapisano, że ładowanie bezprzewodowe Qi mają tylko wersje WWAN. To był błąd odczytu tabeli karty T40 Ultra (T40 Ultra_EN_260722, s. 3, „Physical Characteristics”):

- wiersz „Wireless Charging”: „Support 15W Wireless Charging (Qi) / Wireless charging on the center rear of device”, bez warunku;
- dopisek „(only on WWAN SKUs)” należy do następnego, cieniowanego wiersza „SIM / SAM” („1 Nano SIM / e-SIM / Dual SIM/Dual Standby”);
- dowód: render strony 3 i współrzędne z `pdftotext -bbox-layout`. Blok „Wireless Charging” kończy się na y = 485,6 pt, a „(only on WWAN SKUs)” (y = 491,9–500,3) leży w jednym bloku z liniami SIM; etykieta „SIM / SAM” jest wyśrodkowana na tym bloku;
- karta, s. 2, też nie ogranicza Qi do WWAN: „By adopting high-efficiency wireless charging, the T40 Ultra removes the need for physical cables…”.

Decyzja obowiązująca od 24.10.2026: **ładowanie Qi 15 W ma każda wersja T40 Ultra.** „Qi tylko w wersjach WWAN” usunięto z karty (SEO, opis, specyfikacja „Ładowanie”, FAQ), ze strony marki (`technicalDeepDive`) i z `llms.txt`. Źródłem błędu był wpis w `scratchpad/bluebird-tablety/rozpoznanie.md` (l. 113).

## 2. Wprowadzone poprawki

| ID | Miejsce | Zmiana |
|---|---|---|
| TB-01 | `bluebird-t40-ultra`: `seoDescription`, `description` ak. 2, spec „Ładowanie”, FAQ „Dlaczego … nie ma portu USB?” | Qi 15 W bez warunku WWAN (patrz §1). |
| TB-02 | `/tablety-bluebird`, `technicalDeepDive` (T40 Ultra) | „ładowanie bezprzewodowe Qi 15 W” bez „w wersjach WWAN”. |
| TB-03 | `llms.txt`, linia T40 Ultra | Qi bez warunku WWAN (razem z TB-05). |
| TB-04 | `bluebird-t40-ultra`, `description` ak. 2 | Złącze POGO w wersji podstawowej, USB-C 2.0 jako opcja (jak w krótkim opisie i FAQ). |
| TB-05 | `/tablety-bluebird` `useCases[3]`; `llms.txt` | POGO w miejscu odsłoniętego portu USB w wersji podstawowej; w `llms.txt` „(USB-C 2.0 jako opcja)”. |
| TB-06 | `bluebird-t30`: spec „Odporność na upadki”, FAQ „Jaką odporność…”, `description` ak. 4; strona marki `buyingGuide[0]` | Upadki z 1,0 m „w temperaturze pokojowej”; 1,6 m według MIL-STD-810H i 300 przewrotów z 0,5 m opisane jako osobne parametry w osłonie. |
| TB-07 | `bluebird-351120036`, `description` | 1,6 m według MIL-STD-810H w osłonie i 1,0 m bez osłony jako dwa różne testy. Bez sformułowania „producent deklaruje” z propozycji raportu (zasada bez przypisań do producenta). |
| TB-08 | `/tablety-bluebird` `definition.content`; `brandCategories` `tablety-przemyslowe-bluebird` `longDescription` | „Bluebird … produkuje tablety dla firm. W ofercie TAKMA są trzy modele z Androidem.”; „Tablety Bluebird w ofercie TAKMA to tablety z Androidem dla firm…” (Bluebird ma też tablety z Windows i RT080). |
| TB-09 | `bluebird-204020040`, `description` | „nie ma portów komunikacyjnych” zamiast „nie ma złączy sieciowych”. |
| TB-10 | `bluebird-624010038`, `description` | Bez ochrony przed zarysowaniami; „częściowo chroni wyświetlacz przed skutkami drobnych uderzeń i upadków”. |
| S-03 | `bluebird-t10`, FAQ „Czy … jest tabletem wzmocnionym (rugged)?” | „Dla T10 nie jest deklarowana klasa szczelności IP ani odporność na upadki.” Brzmienie inne niż w raporcie („Producent nie deklaruje dla niego…”), bo propozycja z raportu dawała wspólny 6-gram z FAQ karty T30. |

## 3. Ustalenia celowo bez zmian

- **S-01** (`howToSteps`, tryb rozkazujący) i **S-02** (`contactText` „Opisz miejsce pracy…”): zgodnie z briefem tryb rozkazujący w krokach i tekstach kontaktowych stron marek zostaje. To wzorzec wszystkich stron marek.
- „Producent zapowiada …” w FAQ T30 i T10 oraz na stronie marki: audyt TB tego nie zgłosił; zdania opisują zapowiedź aktualizacji, a nie źródło informacji.
- `351120036` `applications` „Ochrona tabletu T30 przy pracy w terenie i w magazynie”: audyt TB nie zgłosił.

## 4. Sprzeczności źródeł

- **Qi w T40 Ultra**: patrz §1 (błąd odczytu, nie sprzeczność dokumentów).
- **Zestaw T10**: karta T10 podaje „In-box 5V/3A charger & Plug, USB Cable”, bez typu kabla. Na kartach wspólnych akcesoriów (`602020024`, `603010005`) wpisano „kabel”, nie „kabel USB-C”.

## 5. Samokontrola

- `python3 -I porownaj-opisy.py src/data/bluebird-tablet-products.ts --prefiks=bluebird-` dla `--kategoria=urzadzenia` i `--kategoria=akcesoria`, pola `description`, `shortDescription`, `seoDescription`, `faq`: 0 par przed zmianą i po niej.
- Wyszukiwanie „WWAN” po zmianie: zostają tylko wiersze specyfikacji T40 Ultra o modemie i GNSS („Opcja (wersje WWAN)”).
- Blok „Wymagane” na kartach akcesoriów tabletów: te same pozycje przed zmianą i po niej (parsowanie regexem z `getRequiredAccessories`).
- `next start -p 3162`: karty T30, T10, T40 Ultra, `351120036`, `204020040`, `624010038`, strona `/tablety-bluebird` i `/llms.txt` zwracają 200; w HTML są nowe sformułowania, „Qi … WWAN” już nie występuje.
