# Powiązanie etykiet RFID z drukarkami — 15.10.2026

## Zakres i warunki

Zamknięta macierz `src/data/rfid-label-compatibility.ts` jest wspólnym źródłem przypisań w obie strony: etykieta → drukarki i drukarka → materiały. Obejmuje 17 kart / 20 PN, 7 modeli i 43 relacje między kartami. Dobór dokumentacyjny; nie wykonano fizycznego testu każdej kombinacji.

| Drukarka | Karty / PN zwykłych etykiet | Warunek |
| --- | --- | --- |
| ZD611R | 2 / 2 | BT781 44 × 19 i BT793 54 × 35; zgodny adapter gilzy 76 mm; rolka do 127 mm |
| ZD621R | 5 / 6 | Tylko rolki biurkowe do 127 mm; zgodny adapter gilzy 76 mm |
| ZT231 RFID, ZT610 RFID, ZT411 RFID | po 7 / 9 | Rolki przemysłowe 76 mm / do 200 mm; bez BT713 |
| ZT421 RFID, ZT620 RFID | po 5 / 7 | Bez wąskich BT781 44 mm i BT713 25 mm; minimum szerokości mediów 51 mm |
| ZT411 RFID T5 On-Metal | dodatkowo 5 / 5 | Silverline Micro II, Slim II, Blade II, Blade II+, Classic II. Wyłącznie T5; osobny nagłówek i dokładne PN drukarki |

Do druku TT potrzebna zgodna taśma; DT jej nie wymaga. W każdym przypadku potrzebna kalibracja materiału i kodowania RFID. Parametry nadruku muszą mieścić się w limicie konkretnej rozdzielczości. Dwa materiały ZD611R mieszczą się także w limicie 54 mm wersji 300 dpi. Nie dodawano rolek przemysłowych do drukarek biurkowych ani materiałów RFID do modeli bez kodera.

## Wstrzymane przypisania

- ZIPRT3016014: BT713 25 × 15 mm. Nie dodano automatycznych rekomendacji bez rysunku podkładu i skoku wkładek. ZT411 wymaga mediów co najmniej 25,4 mm, a sama wysokość etykiety nie określa skoku RFID.
- ZIPRM3017413, ZIPRM3017414: mobilne ZBR2100 102 mm. Gilza 19 mm i czarny znacznik są potwierdzone. Katalog podaje limity średnicy modeli, ale nie rozstrzyga średnicy gotowej rolki tych konkretnych PN. Bez automatycznych przypisań do ZQ521 / ZQ630 Plus; ZQ511 wyklucza także szerokość.
- ZIPRT3019300, ZIPRT3019299: Metal Skin Delta/Titanium. Nie przenoszono zgodności Silverline na inną konstrukcję. Wymagają potwierdzenia konfiguracji, grubości i minimalnego skoku; nie polecamy automatycznie samej wersji T5.

Usunięto wcześniejsze zbyt szerokie linki tych czterech kart do drukarek oraz jednoznaczną sugestię T5 dla Metal Skin. Karty produktów pozostają dostępne do indywidualnego doboru.

## Źródła

- [Zebra EMEA RFID Supplies Catalogue, January 2026](https://www.zebra.com/content/dam/zebra_dam/en_gb/brochure/portfolio/rfid-supplies-zipship-catalogue-en-gb.pdf): strony 1–7; rozmiary, klasy nawoju, gilzy, materiały i PN. Silverline ma osobne wskazanie ZT410/ZT411 On-Metal; Metal Skin nie jest automatycznie tą samą konstrukcją.
- [ZD621R / ZD611R spec sheet](https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zd600-rfid-series-spec-sheet-en-us.pdf): strona 3; szerokości druku i mediów, 127 mm OD, adaptery do 76,2 mm, minimum skoku 16 mm.
- [ZT411 On-Metal](https://www.zebra.com/ap/en/products/printers/industrial/on-metal-rfid-label-solution.html): dedykowana obsługa grubszych Silverline; brak równoważności ze standardową drukarką RFID.
- [Specyfikacja mediów ZT411/ZT421](https://docs.zebra.com/us/en/printers/industrial/zt411-zt421-industrial-printer-user-guide/c-zt4x1-specs/r-zt4x1-media-specifications.html) i wcześniejsze audyty modeli w `docs/audits/`: minimalne szerokości i formaty rolek.
- Opisy konkretnych PN z Solutions Pathway i rozbieżności: `wdrozenie-2026-10-15.md` oraz zestawienie badawcze etykiet z 15.10.2026. Danych katalogowych nie traktowano jako fizycznego testu zgodności.

## Wygląd i kontrola lokalna

Użyto istniejącego `PrinterMaterialVariants`, z tym samym polem zdjęcia, siatką, cenami live, stanem i koszykiem. W trybie RFID link prowadzi do rodzica z `?pn=`, ponieważ RFID nie ma ścieżek wariantów DT/TT. Pierwsze 4 kafelki, następnie „Pokaż pozostałe” / „Zwiń”. Pozostałe tryby komponentu zachowano.

Dwie karty wzorcowe: ZD421t i zwykła ZT411. W obu kafelek ma szerokość 288,25 px, pole zdjęcia 288,25 × 216,19 px i `object-contain p-3`. RFID używa tego samego pola i paddingu. Udział produktu w poprzednio zweryfikowanych źródłach wzorcowych: 40,3% i 67,1%. Schematy wkładek mają zajętość całej grafiki około 85–86%, ale to wynik podpisów i linii wymiarowych; sama antena zajmuje około 56–62% szerokości. Po obejrzeniu źródeł i kafelków nie było potrzeby edycji w Imagen. Nie zmieniono obrazów ani układu kafelków.

Test lokalny: ZT411 zwykłe 4 → 9 → 4, Silverline 4 → 5 → 4. Wszystkie linki zawierają dokładny PN. Koszyk dla ZIPRT3019419 zachował PN, jedną rolkę i cenę 925,23 zł netto z API podczas kontroli. Po teście pozycję usunięto. Lokalne połączenie z produkcyjną bazą i dystrybutorami wyłączono; odczyt cen w przeglądarce przekierowano na publiczne API sklepu. Lokalny test nie zapisuje cache ofert ani danych magazynu.

Dodatkowo sprawdzono ZD611R: dokładnie 2 kafelki, 44 i 54 mm, widoczny warunek adaptera, pole obrazu 288,25 × 216,19 px i brak przewijania poziomego. Link „Więcej” z ZBR2200 102 × 51 mm otworzył `?pn=ZIPRT3019419`. Test `scripts/test-rfid-labels.cjs` i TypeScript przeszły; lint zmienionych plików ma wyłącznie wcześniejsze ostrzeżenie `<img>` w nagłówku marki. Produkcyjny build lokalny zakończył się poprawnie. Przegląd React: hooki przed returnami, brak nowej biblioteki i dodatkowych żądań serwera, wspólny odczyt stock API, stan rozwijania i atrybuty aria.
