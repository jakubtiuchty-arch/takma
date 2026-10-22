# SUNMI D3 MINI 58 mm i 80 mm — komputery POS

Data: 2026-10-22. Zakres: karty `sunmi-d3-mini-58mm` i `sunmi-d3-mini-80mm` w `/komputery-pos`, aktualizacja treści, filtrów i metadanych kategorii, `llms.txt`, `sunmi-category.ts`, rendery w galerii. Polecenie właściciela: „https://www.sunmi.com/en/d3-mini/ — lecimy”. Materiały od właściciela: karta katalogowa D3 MINI i rendery wersji 58 mm i 80 mm („D3mini_58_标准角度”, „D3mini_80_标准角度”).

## Źródła

- Karta katalogowa SUNMI D3 MINI, wersje 58 mm (model T1720/T1721) i 80 mm (T1730/T1731), właściciel: `public/datasheets/sunmi-d3-mini.pdf` (1,4 MB, oryginał). Logo „Compatible with SUNMI DMP” i „Google Mobile Services” na pierwszej stronie.
  - Wspólne: SUNMI OS (Android 13); Qualcomm 6 rdzeni do 2,4 GHz; 3 GB RAM + 32 GB (UFS 2.2); microSD do 1 TB; czytnik kart typ A/B, MIFARE, FeliCa, ISO/IEC 14443, ISO 15693, odczyt 0–4 cm; skaner 1 Mpx 1D/2D; 2 × PSAM 3,0 V; 2 × SIM 1,8/3,0 V; 2G/3G/4G opcjonalnie; Wi-Fi 2,4 i 5 GHz 802.11 a/b/g/n/ac; Bluetooth 2.1/3.0/4.2/5.0 i BLE; głośnik 1 × 3 W; dioda niebieska; przycisk zasilania (blokada ekranu) i ukryty reset; porty 3 × USB 3.0 A, RJ11 (port szeregowy), RJ12 (szuflada), RJ45 LAN, audio, zasilanie, ukryty micro USB do debugowania; 0–40°C, przechowywanie -20–60°C; budowa modułowa; gumowe uszczelki drukarki; personalizacja logo i kolorem marki; ekran główny pochylony ergonomicznie, w wersji 80 mm pod innym kątem.
  - 58 mm: ekran 10,1" HD IPS 800 × 1280, 300 nitów, dotyk 10-punktowy; ekran klienta 2,4" siedmiosegmentowy; drukarka 58 mm do 100 mm/s, trwałość 50 km, rolka φ50 mm; bateria 2600 mAh, „Only the 58mm 4G version comes with a battery included in the package”, do 4 godzin pracy (SUNMI Lab); zasilacz 100–240 V / 1,5 A, wyjście 24 V / 1,5 A / 36 W; 250 × 213 × 91 mm; 1,1 kg.
  - 80 mm: ekran jak wyżej; ekran klienta 4" IPS WVGA 480 × 800, 300 nitów, dotykowy; drukarka 80 mm z automatyczną gilotyną, 250 mm/s, trwałość 150 km, rolka φ60 mm; bateria N/A; zasilacz 100–240 V / 1,7 A, wyjście 24 V / 1,5 A / 60 W; 250 × 231 × 108 mm; 1,4 kg.
- Strona SUNMI D3 MINI: https://www.sunmi.com/en/d3-mini/
- Jarltech D3 MINI: https://www.jarltech.com/en/sunmi-d3-mini — warianty PN, gwarancja 36 miesięcy, zestaw: zasilacz i przewód EU; przy P01260020 także krótka instrukcja (QSG).

## PN, ceny i stany (/api/stock, 22.10.2026, sprawdzone ponownie przed wpisaniem)

| PN | Wersja | Cena netto | Stan | Na karcie |
|---|---|---:|---|---|
| P01260026 | 58 mm, Wi-Fi, bez 4G, SUNMI OS, wtyczka EU | 1416,47 | available (DE 150) | 58 mm, wariant |
| P01260002 | 58 mm, 4G, bateria 2600 mAh w zestawie, SUNMI OS, EU | 1571,98 | available (DE 503) | 58 mm, wariant |
| P01260015 | 80 mm, Wi-Fi, bez 4G, SUNMI OS, EU | 1808,59 | available (DE 298 + 201 w dostawie) | 80 mm, wariant |
| P01260022 | 80 mm, 4G, SUNMI OS, EU | 1957,36 | available (DE 328 + 38 w dostawie) | 80 mm, wariant |
| P01260020 | 80 mm, GMS EDLA, bez 4G, EU, krótka instrukcja | 1957,36 | available (DE 297) | 80 mm, wariant |

Pominięte PN:
- P01260023, P01260008, P01260019, P01260017: wersje z wtyczką UK.
- P01260014: w API on-order (5 szt. w dostawie, 1957,36 zł), wersja nieznana.
- X09010479: bateria zapasowa, 0 / 0.
- Przedłużenia gwarancji.

## Decyzje i rozbieżności

- Bateria: w zestawie tylko wersja 58 mm 4G (P01260002). Na karcie 58 mm: atrybut wariantu „Bateria w zestawie”, wiersz „Bateria” z PN wersji 4G, zawartość zestawu i FAQ „Czy SUNMI D3 MINI 58 mm ma baterię?”. Wersja Wi-Fi P01260026 ma gniazdo baterii bez baterii w zestawie; w FAQ prośba o kontakt w sprawie baterii. Wersja 80 mm nie ma baterii („bez baterii” w wierszu „Zasilanie”).
- Zasilacz 80 mm przepisany dosłownie z karty: 24 V / 1,5 A / 60 W. Iloczyn 24 V × 1,5 A daje 36 W; do wyjaśnienia z SUNMI, jeśli klient zapyta.
- Model T1720/T1721 i T1730/T1731: karta nie podaje, który numer to wersja Wi-Fi, a który 4G. Na kartach oba numery razem.
- 4G: karta podaje „2G&3G&4G (optional)” i 2 gniazda SIM w tabeli wspólnej. Wiersz „Łączność komórkowa” wskazuje PN wersji 4G (P01260002, P01260022).
- Wi-Fi 802.11ac zapisane jako Wi-Fi 5, jak w D3 PRO. Prędkości LAN karta nie podaje, dlatego „LAN (RJ45)” bez Gb/s.
- Usługi Google: w 58 mm tylko SUNMI OS bez usług Google; w 80 mm wersja GMS EDLA P01260020 (bez 4G). Nazwy wariantów 80 mm z systemem jak w T3 PRO po audycie; w 58 mm system nie rozróżnia wariantów, więc nazwy bez systemu.
- „Akcesoria opcjonalne”: karta ich nie podaje, wiersz pominięty. `relatedAccessories` puste: ekrany klienta T3, T3 PRO i D3 PRO nie pasują, brak kart akcesoriów D3 MINI.
- Szuflada: tylko port RJ12. Szuflady MAX nie powiązano (brak źródła zgodności). FAQ z prośbą o kontakt, jak w D3.
- Personalizacja logo i kolorem marki: zapis jak w T3 PRO, „Warunki personalizacji podajemy na zapytanie”.
- „Najniższa cena” w poradniku kategorii: najtańszy jest teraz D3 MINI 58 mm (1416,47 zł); D3 PRO (2045,25 zł) opisany jako najtańszy wśród modeli z ekranem 15,6".
- Filtr „Łączność 4G” nie powstał: reguły filtrów kategorii (`DerivedRule`) czytają specyfikację, nazwę, slug, podkategorię, producenta i cenę karty, a nie atrybuty wariantów. Możliwy zamiennik: reguła `slugs` lub wzorzec na wierszu „Łączność komórkowa” (wtedy wartość typu „Dostępna wersja 4G”, jak w CipherLab).
- Filtr „Ekran klienta: W zestawie” obejmuje wiersz „Ekran klienta” zaczynający się od „W zestawie” (D3) lub „Wbudowany” (D3 MINI).
- Filtr „Z drukarką 58 mm” ma wzorzec `^Termiczna 58 mm`, aby nie objąć T3 80 mm (papier 58 mm z prowadnicą).
- Wstęp kategorii (`longDescription`) bez zmian.

## Zdjęcia

- Rendery SUNMI z przezroczystym tłem. Te same ujęcia w obu kartach (58 mm: P01260026.png … -8.png; 80 mm: P01260015.png … -8.png): 7 (prawy przód z góry, główne), 1u (przód z ekranem systemu), 5u (góra z ekranem systemu i ekranem klienta), 9 (prawy tył, strona klienta), 2u (tył z wyświetlaczem lub ekranem klienta), 3 (bok), 6 (spód), 10 (lewy tył).
- Obróbka: `scripts/obrob-zdjecia.py --plotno=1200x1200 --jak=P01280007.png --bez-ciena`, białe tło RGB, produkt 82,8% dłuższego boku (jak T3, D3 i D3 PRO). Mapy dims/frames/uniform-bounds dopisane ręcznie, bez `generate-image-dims.mjs`.
- Pomiar na `next start -p 3136` (1440 × 1000, Playwright, licznik zdjęć ukryty): galeria 584 px — dłuższy bok produktu 492 px (84,2%) w D3 MINI 58 mm, D3 MINI 80 mm, D3 i T3 80 mm, 491 px w D3 PRO. Kafel `/komputery-pos` ok. 300 × 224 px — dłuższy bok produktu 162 px w D3 MINI 58 mm, D3 MINI 80 mm, D3, T3 80 mm i T3.

## Weryfikacja (22.10.2026)

- `npm run build` przechodzi; `node scripts/check-product-images.mjs` przechodzi (1192 ścieżki); wszystkie 16 zdjęć i PDF z kart D3 MINI istnieją. `npx tsc --noEmit`: 215 błędów w plikach spoza zmiany (np. `unified-stock.ts`), ta sama liczba przed zmianą.
- `next start -p 3136`: `/komputery-pos` 200, 8 modeli, tytuł „Komputery POS SUNMI T3, D3 i D3 MINI — terminal POS”. Liczniki filtrów: Z drukarką 80 mm 3, Z drukarką 58 mm 1, Bez drukarki 4; 10,1" 2, 15,6" 6; Ekran klienta w zestawie 3, do dokupienia 5; 3 GB 3, 4 GB 3, 6 GB 2; Z usługami Google 7, SUNMI OS bez usług Google 5; do 3 500 zł 6, 3 500–6 000 zł 1, powyżej 6 000 zł 1.
- `/produkt/sunmi-d3-mini-58mm` i `/produkt/sunmi-d3-mini-80mm` 200 bez przekierowania; JSON-LD `ProductGroup` z 2 i 3 wariantami; tabela wariantów z dymkami „4G”, „Bateria w zestawie” i „Usługi Google (GMS)”; link do PDF; `/datasheets/sunmi-d3-mini.pdf` 200 (1 420 242 B).
- Lokalnie `/api/stock` zwraca błąd bazy (Prisma), dlatego na kartach brak `offers` w JSON-LD i plakietka „Niedostępny”; tak samo dla istniejących kart (T3 PRO). Produkcyjne `/api/stock` zwraca 5 PN jako available.
- Feed `/api/merchant-feed`: P01260026, P01260002, P01260015, P01260022, P01260020, ceny brutto 1742,26 / 1933,54 / 2224,57 / 2407,55 / 2407,55 zł, in_stock.
