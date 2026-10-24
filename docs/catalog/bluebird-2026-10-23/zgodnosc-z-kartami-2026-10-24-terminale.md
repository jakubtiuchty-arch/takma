# Terminale Bluebird — zgodność opisów z kartami katalogowymi (24.10.2026)

Dokument roboczy, nie jest treścią dla klientów. Poprawki według audytów T1 (S20, S50, S70, S70 Explosion Protection, S10) i T2 (S10 RFID, EF551, EK430, SF650, RFR901, RFR900, `/terminale-bluebird`, `llms.txt`, `manufacturers.ts`) z 24.10.2026, wykonanych na commicie 6daa476c.

Zakres zmian: tablica `bluebirdProducts` w `src/data/bluebird-products.ts`, `src/data/bluebird-category.ts`, linie terminali Bluebird w `public/llms.txt`, plik `public/datasheets/bluebird-s10-rfid.pdf`. Tablica `bluebirdAccessories`, tablety i ProGlove bez zmian (inne zakresy).

## 1. Wprowadzone poprawki

### Audyt T1

| ID | Karta | Pola | Zmiana |
|---|---|---|---|
| T1-01 | S20 | `seoTitle`, `seoDescription` | „5G” → „Wi-Fi 6E i opcja 5G” (2 z 4 PN bez modemu). |
| T1-02 | S20 | FAQ o skanerze | „Nie.” → „W ofercie nie.” (producent ma konfiguracje z SE4100, SE4720, SE4770, SE55). |
| T1-03 | S20 | FAQ o RFID | Dopisane stacje S20 z Ethernetem (204010079, 204020029, oznaczenie RFR90#) jako stacje przyjmujące terminal z czytnikiem. |
| T1-04 | S20, S10 | FAQ o RFID | Szybkość odczytu według kart czytników: RFR900 ponad 900 tagów/s, RFR901 ponad 1300 tagów/s. |
| T1-05 | S20, S10 | FAQ o RFID | Dopisane: oferowane RFR901 i RFR900 nie mają mocowania do S20/S10, RFR901 łączy się z terminalem przez Bluetooth. Bez obietnicy innej wersji (decyzja głównej sesji). |
| T1-06 | S50 | `seoTitle`, `seoDescription`, `shortDescription` | „terminal 5G” → Wi-Fi 6E w każdej wersji i opcja 5G. |
| T1-07 | S50 | opis, akapit 1 | Każda wersja ma Wi-Fi 6E, wersje 5G mają też modem; 8/128 GB tylko z SE55. |
| T1-08 | S50 | dymek „Skaner” | Usunięty „celownik laserowy” przy SE4770 (brak w źródłach) → „kody 1D i 2D”. |
| T1-09 | S50 | opis, FAQ S50/S70, specyfikacja „Odporność na upadki” | Dopisane, że osłona ochronna nie wchodzi w zestaw. |
| T1-10 | S70 | `seoTitle`, `seoDescription`, `shortDescription` | „5G” → Wi-Fi 6E i opcja 5G. |
| T1-11 | S70 | opis, akapity 1 i 4 | Wi-Fi 6E w każdej z 9 wersji, modem 5G w pięciu. |
| T1-12 | S10 | FAQ „Czy Bluebird S10 ma 5G?” | Usunięte fałszywe „jedyny terminal serii S bez 5G” (S10 RFID też nie ma 5G). |
| T1-13 | S10 | `seoTitle`, `seoDescription`, `shortDescription`, linia S10 w `llms.txt` | „Wi-Fi albo 4G” → „Wi-Fi, opcja 4G LTE”. |
| T1-14 | S20, S50, S70, S70 EP | `tags` | „magazyn” usunięty. S20, S50, S70: `retail`, `logistyka`, `outdoor` (handel, kurierzy, serwis terenowy, służby publiczne). S70 EP: `produkcja`, `outdoor` (przemysł, energetyka, ropa i gaz). Tagi wybrane ze słownika już używanego w katalogu. |
| S-1 | S20, S10 | dymki „Pamięć” (S20), „Łączność” (S10) | Napisane inaczej, bez zdań wspólnych z S50 i S20. |
| S-2 | S70 | `seoTitle` | Inny szablon niż S50: „Wzmocniony terminal mobilny Bluebird S70 6″: Wi-Fi 6E, opcja 5G, Android 12”. |

### Audyt T2

| ID | Karta | Pola | Zmiana |
|---|---|---|---|
| T2-01 | S10 RFID | specyfikacja „Moc wyjściowa RFID”, opis akapit 2 | 5–33 dBm → 7,29–32,29 dBm (ERP, EU 865–868 MHz), według karty S10 RFID_EN_260701. |
| T2-02 | S10 RFID | specyfikacja „Odporność na upadki”, opis akapit 5 | Wielokrotne upadki z 1,5 m na płytki na betonie w temperaturze pokojowej. |
| T2-03 | S10 RFID | specyfikacja „Zawartość zestawu”, zdanie pod blokiem „Wymagane”, FAQ o zestawie | W zestawie tylko urządzenie z baterią 7000 mAh; pasek na nadgarstek, zasilacz i kabel poza zestawem. |
| T2-04 | S10 RFID | specyfikacja „System operacyjny”, opis akapit 5 | Android 14, zapowiedziana obsługa Androida 16 i 18. |
| T2-05 | S10 RFID | `downloads`, plik PDF | `public/datasheets/bluebird-s10-rfid.pdf` zastąpiony kartą S10 RFID_EN_260701 (CreationDate 2026-07-01, 276 247 B); rozmiar 382 KB → 270 KB. Nazwa pozycji bez daty, bez zmian. |
| T2-06 | EF551 | `seoDescription` | „skaner SE55” → „opcja skanera SE55”. |
| T2-07 | EF551 | `seoTitle`, opis akapit 4 | „i 5G” → „i opcją 5G”; wersje „z Wi-Fi 6E albo z Wi-Fi 6E i 5G”. |
| T2-08 | EF551 | specyfikacja „Wymiary” | Dodane wymiary Rugged SKU 2 (166,35 × 83,5 × 22,8 mm); typu obudowy oferowanych PN EF551R nie da się ustalić. |
| T2-09 | EF551 | FAQ o RFID | Wersje RFR900/RFR901 z mocowaniem do EF551 istnieją, oferowane PN mają inne mocowanie; wersję do EF551 dobieramy na zapytanie (decyzja głównej sesji). |
| T2-10 | EF551 | FAQ EF551 a EF551R, dymek „Obudowa” | Upadki z 1,5 m z warunkiem temperatury −10…+50°C. |
| T2-11 | EK430 | `seoDescription`, opis akapit 4 | „Wi-Fi lub 4G” → Wi-Fi 5 w każdej wersji, opcja 4G LTE. |
| T2-12 | RFR901 | opis akapit 4 | Upadki z 1,5 m z warunkiem „w temperaturze pokojowej”. |
| T2-13 | RFR901 | FAQ „Czym ładuje się RFR901?” | Usunięty przykład stacji S20 (nie przyjmie oferowanych PN); dopisane stacje 1- i 4-gniazdowe i ładowarka baterii do wersji Universal i Stand Alone, dostępność na zapytanie. |
| T2-14 | `/terminale-bluebird` | `modelTable` S50/S70/EF551 `bestFor`, `useCases[0]` | Zastosowania według sekcji „Industry & Applications” kart (handel, doręczenia, serwis terenowy, służby publiczne, ochrona zdrowia); magazyn tylko przy S10 i EK430. |
| T2-15 | `/terminale-bluebird`, `llms.txt` | tabela S70 „Upadki”, `useCases[2]`, EF551 `bestFor`, linia S70 w `llms.txt` | Dopisany warunek „w temperaturze pokojowej” przy 3,05 m (S70) i 2,4 m (EF551R). |
| T2-16 | `/terminale-bluebird` | `comparisons[0]` | Masy S50 i S70 „z baterią standardową”. |
| STYL | EF551, EK430, S50, RFR901 | dymki „Pamięć” i „Skaner” (EF551, S50), „Skaner” i „Łączność” (EK430), FAQ RFR901 o RFR900 | Usunięte zdania identyczne między kartami: „Pamięć operacyjna i pamięć na aplikacje i dane.”, „Silnik skanujący odczytuje kody 1D i 2D.”, „Sposób połączenia z siecią. Każda wersja…”, „Oferowane PN mają mocowanie do EF40X albo HF550X.” (zostało tylko w `shortDescription` RFR900). |

Dodatkowo `updatedAt` = 2026-10-24 w zmienionych kartach i na stronie marki. Zmienione zdania przepisano tak, żeby skrypt `porownaj-opisy.py` (6-gramy, urządzenia) nie znajdował wspólnych fraz między kartami.

## 2. Ustalenia celowo pominięte

- **T1-05, część „wersję z mocowaniem do S20 dobierzemy na zapytanie”** — decyzja głównej sesji: przy S20 i S10 bez obietnicy innej wersji czytnika.
- **T1-09, „nie ma jej w ofercie”** — decyzja głównej sesji: tylko „nie wchodzi w zestaw”.
- **T2-03, karta paska `621020002`** — poza zakresem (akcesoria). Do potwierdzenia u Jarltech, czy `S10-ANLJRW` ma pasek w kartonie; nowa karta S10 RFID_EN_260701 wymienia pasek jako akcesorium dodatkowe.
- **STYL T2, `contactText` strony marki („Podaj rodzaj kodów…”)** — tryb rozkazujący w tekstach kontaktowych to wzorzec wszystkich stron marek (zasada 3 briefu).
- **STYL T2, blok „Wymagane — sprzedawane osobno” i zdanie „Zasilacz, wtyczka i kabel nie są dołączone do terminala.”** — wspólny komponent z decyzji (`audit.md` §7, §14).
- **S-3 (krótkie wspólne frazy techniczne, np. „IP68 i IP65 z założoną baterią”)** — raport nie wymaga zmiany; to wartości z kart.
- **Uwaga T2: brak linii RFR901 i RFR900 w `llms.txt`** — to nie błąd treści; nowych linii nie dodawano.
- **`manufacturers.ts` (Bluebird)** — bez ustaleń, bez zmian.
- **SF650, RFR900, S70 Explosion Protection (poza tagami)** — bez ustaleń.

## 3. Sprzeczności źródeł

- **S10 RFID — dwie wersje karty katalogowej.** Karta z 13.04.2026 (Jarltech, `S10RFID_EN`) a karta S10 RFID_EN_260701 ze strony producenta: moc EU 5–33 dBm a 7,29–32,29 dBm (ERP); upadek „across operating temperature” (MIL-STD 810G) a „at room temperature”; zestaw „Battery, Wrist Strap” a „Battery”; „Transmit Power of up to 30dBm” a „up to 34dBm”; Android bez wersji a Android 14 (support for 16, 18). Obowiązuje nowsza.
- **S10 RFID — bateria.** Strona modelu: „Extended: 7,000mAh (Default)”; karta: „Standard”.
- **RFR901 — szybkość odczytu.** Karty terminali S20 i S10: „RFR901 can read 1200 tags per second”; karta czytnika RFR901 SA-Universal: „1,300+ Tags/sec”. Na kartach terminali podano wartość z karty czytnika.
- **RFR901 — mocowania.** Strona RFR901 Universal: mocowanie do wybrania dla każdego terminala Bluebird (także S20, S50, S70); oferowane PN mają tylko Universal i Stand Alone Mount (RFR901) oraz EF40X i HF550X (RFR900).
- **EK430 — upadki.** „Key Features” karty: 1,5 m; tabela karty i strona modelu: 1,8 m. Na karcie produktu 1,8 m z tabeli.
- **EF551 — Android.** Wstęp strony modelu: „upgraded to version 15”; tabela strony i karta: 16. Na karcie produktu 16.
- **EF551 — zasilacz.** Przewodnik akcesoriów (2022): 5 V / 2 A do ładowania bezpośredniego; blok „Wymagane”: 5 V / 3 A (`602010041`, wymieniany przez Jarltech przy EF551). Bez sprzeczności funkcjonalnej.

## 4. Do sprawdzenia przy kolejnej zmianie

- **S70 Explosion Protection — ładowanie i wymiana baterii w strefie Ex.** Strona modelu ma „[Quick Guide] S70_EP_EN_v4.pdf”, którego nie ma lokalnie. Karta katalogowa nie podaje warunków ładowania przez USB-C ani wymiany baterii w strefie Ex; FAQ o ładowaniu tego nie rozstrzyga.

## 5. Weryfikacja

- `porownaj-opisy.py src/data/bluebird-products.ts --prefiks=bluebird- --kategoria=urzadzenia` dla `description`, `shortDescription`, `seoDescription`, `faq`: 0 par. Dodatkowa kontrola 6-gramów w `variantAttributeTooltips` urządzeń: 0 par.
- `npx tsc --noEmit`, `npx next build`, `next start -p 3161`: wyniki w raporcie z sesji.
- Blok „Wymagane” porównany przed zmianą i po niej (te same pozycje i nagłówki) na kartach S20, S10 RFID, EF551, RFR901, SF650 i na karcie ProGlove MARK 2.
