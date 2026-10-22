# SUNMI D3 PRO — komputer POS

Data: 2026-10-22. Zakres: karta `sunmi-d3-pro` w `/komputery-pos`, ekran klienta C02020005 w `/akcesoria-do-komputerow-pos`, zgodność zasilacza X09020039, aktualizacja treści, filtrów i metadanych kategorii, `llms.txt`, `sunmi-category.ts`. Polecenie właściciela: „https://www.sunmi.com/en/d3-pro/ — lecimy”. Materiały od właściciela: karta katalogowa D3 PRO, karta kamer (bez zmian), rendery D3 PRO w dwóch wariantach: sam komputer („single-display”) i komputer z ekranem klienta („dual-display”).

## Źródła

- Karta katalogowa SUNMI D3 PRO, model F3510 (właściciel): `public/datasheets/sunmi-d3-pro.pdf` (1,1 MB, bez zmian) — SUNMI OS 4.0 (Android 13); Qualcomm 6 rdzeni do 2,4 GHz; 4 GB RAM + 64 GB, microSD do 1 TB; ekran 15,6" FHD 1920 × 1080, dotyk 10-punktowy, cienka ramka; obudowa aluminiowa, ukryte przewody; LAN 1000M; Wi-Fi 2,4 i 5 GHz IEEE 802.11 a/b/g/n/ac; BT 5.0 z BLE; głośnik 1 × 3 W; przycisk zasilania (blokada ekranu, „Fingerprint recognition optional”); niebieska dioda zasilania; zasilacz wejście 100–240 V / 1,5 A, wyjście 24 V / 1,5 A / 36 W; porty: USB 3.0 A, 2 × USB 2.0 A, RJ11 (port szeregowy), RJ12 (szuflada), RJ45, audio, zasilanie, USB-C 2.0, micro USB do diagnostyki; masa D3 PRO 4,5 kg, ekran klienta 10,1" 0,88 kg; wymiary 380 × 195 × 310 mm (L × W × H); 0–40°C, przechowywanie -20–60°C; SUNMI One ID z logowaniem odciskiem palca, zdalne wdrożenie; ekran klienta 10" na przewód USB, „Plug-and-play, no assembly required”, „Option with NFC, Tap on Glass to support SoftPOS”; zastosowania: restauracje, sklepy odzieżowe.
- Strona SUNMI D3 PRO: https://www.sunmi.com/en/d3-pro/
- Jarltech D3 PRO: https://www.jarltech.com/en/sunmi-d3-pro — warianty; zestaw P01270002: zasilacz, przewód EU, QSG; gwarancja 36 miesięcy; C02020005 „fits for: D3 Pro”, 12 miesięcy; zasilacz X09020039 na liście akcesoriów.
- ERS P01270002, akcesoria: https://www.ers-online.co.uk/P01270002/accessories — C02020005 „Fits: D3 Pro”.

## PN, ceny i stany (/api/stock, 22.10.2026)

| PN | Wersja | Cena netto | Stan | Na karcie |
|---|---|---:|---|---|
| P01270001 | D3 PRO, SUNMI OS (Android 13), bez usług Google | 2045,25 | available (DE 521 + 30 w dostawie) | wariant |
| P01270002 | D3 PRO, GMS EDLA, czytnik linii papilarnych, zasilacz EU | 2160,20 | available (DE 864 + 120 w dostawie) | wariant |
| C02020005 | Ekran klienta 10,1" HD z NFC do D3 PRO | 659,20 | available (DE 1024) | karta akcesorium |
| X09020039 | Zasilacz 24 V / 2,5 A | 101,44 | available | karta istniała; dopisano D3 PRO |

Pominięte PN:
- P01270004: to samo co P01270002, ale z przewodem zasilającym UK.
- P01270007: według ERS wersja non-GMS z 4G; w API 0 / 0. Karta SUNMI nie wspomina o 4G.

## Decyzje i rozbieżności

- Wi-Fi: Jarltech w opisie podaje „Wi-Fi 6”, ale karta SUNMI i parametry Jarltech podają 802.11ac. Na karcie, w tabeli kategorii i w `llms.txt`: Wi-Fi 5 (802.11 a/b/g/n/ac, 2,4 i 5 GHz).
- Czytnik linii papilarnych: Jarltech podaje go tylko przy wariancie GMS (P01270002); karta SUNMI: „optional”. Na karcie jest atrybutem wariantu P01270002 i wpisem specyfikacji „w wersji z usługami Google (P01270002)”. Przy P01270001 brak informacji o czytniku.
- NFC i SoftPOS dotyczą ekranu klienta C02020005, nie samego komputera. Karta SUNMI nie podaje NFC w komputerze. Treść: ekran klienta z NFC pozwala przyjmować płatności zbliżeniowe przez aplikację SoftPOS, jeśli program sprzedaży i operator płatności ją obsługują. W kategorii punkt „NFC to nie terminal płatniczy” zmieniono na „NFC a płatności kartą”, bo C02020005 obsługuje SoftPOS.
- Zasilacz X09020039 ma 24 V / 2,5 A, a zasilacz z zestawu D3 PRO 24 V / 1,5 A. Zgodność według listy akcesoriów Jarltech przy D3 Pro; na karcie zasilacza nie dopisano, że ma te same parametry co zasilacz D3 PRO.
- Porównanie z D3 (opis, FAQ karty i kategorii): D3 jest nowszy, ma Androida 14, procesor 8-rdzeniowy, Wi-Fi 6, BT 5.4 i ekran klienta w zestawie. D3 PRO bez ekranu klienta jest tańszy (2045,25 zł wobec 2619,93 zł); z ekranem C02020005 zestaw kosztuje więcej niż D3, dlatego w treści „D3 PRO bez ekranu klienta jest tańszy” i „sam komputer jest tańszy”. Kwot nie podano.
- „Najtańszy komputer POS w zestawieniu”: najniższa cena netto w kategorii (T3 2788,97, D3 2619,93, D3 PRO 2045,25).
- Zawartość zestawu: Jarltech dla P01270002 — zasilacz, przewód EU, QSG. Wpisano dla karty: komputer, zasilacz, przewód zasilający, krótka instrukcja.
- Ekrany klienta C02020007/08 (T3) i C02020003/04 (T3 PRO) nie pasują do D3 PRO. Na ich kartach dopisano zdanie, że do D3 PRO pasuje C02020005.
- Szuflada kasowa: niepowiązana, brak źródła zgodności. FAQ: port RJ12, przed zakupem szuflady prosimy o kontakt (jak przy D3).
- Pominięte akcesoria: CPad C14004118–C14004121, C02020012/13.
- Wstęp kategorii (`longDescription`) bez zmian: bez nazw modeli.

## Karta katalogowa

- Oryginał 1,1 MB (1 129 210 B), bez kompresji.

## Zdjęcia

- Rendery SUNMI 3000 × 3000, przezroczyste tło. Karta D3 PRO (P01270001.png … -7.png): „single-display” 7 (prawy przód, główne), „D3 PRO with UI” (przód z ekranem), 3 (bok), 2 (tył), 6 (spód podstawy), 9 (prawy tył), „dual-display” 9 (z ekranem klienta od strony klienta; alt: ekran klienta kupuje się osobno).
- C02020005: „dual-display” 10 (lewy tył) jako główne, „dual-display” 2 (tył) jako drugie; alt: komputer D3 PRO kupuje się osobno.
- Obróbka: `scripts/obrob-zdjecia.py --plotno=1200x1200 --jak=P01280007.png --bez-ciena`, białe tło RGB, produkt 82,8% dłuższego boku (jak T3, T3 PRO i D3). Mapy dims/frames/uniform-bounds dopisane ręcznie, bez `generate-image-dims.mjs`.
- Pomiar na `next start` (1440 × 900, Playwright): galeria 584 px — dłuższy bok produktu 477 px (81,7%) w D3 PRO, D3 i T3; C02020005 387 px (66,3%) jak C02020003, C02020008 i C06004004. Kafel `/komputery-pos` 299 × 224 px — wysokość produktu 162 px w D3 PRO, D3, T3 i T3 PRO. Kafel `/akcesoria-do-komputerow-pos` — 140 px w C02020005 i C02020008, 138 px w C02020003.

## Weryfikacja (22.10.2026)

- `npm run build` przechodzi; `node scripts/check-product-images.mjs` przechodzi; wszystkie ścieżki zdjęć i PDF z `sunmi-products.ts` istnieją.
- `next start -p 3134`: `/komputery-pos` 200, 6 modeli, liczniki filtrów: Bez drukarki 4, Do dokupienia 5, 4 GB 4, Z usługami Google 6, SUNMI OS bez usług Google 3, do 3 500 zł 4. `/produkt/sunmi-d3-pro` 200 bez przekierowania, 2 warianty w JSON-LD `ProductGroup`, PDF 200. `/produkt/sunmi-c02020005` 200. `/akcesoria-do-komputerow-pos` 8 pozycji. Feed: P01270001, P01270002, C02020005.
