# Zebra KC401 — kiosk w /kioski-samoobslugowe

Data: 2026-10-22. Zakres: karta `zebra-kc401` (jeden PN, bez wariantów), 7 nowych kart akcesoriów w `/akcesoria-do-kioskow`, zgodność z KC401 dopisana do 2 istniejących kart, treść, filtry i meta kategorii `/kioski-samoobslugowe`, llms.txt. Polecenie właściciela (czat 22.10.2026): „Jak mamy kiosk Sunmi, to dodaj Zebra KC401 — https://www.zebra.com/pl/pl/products/interactive-kiosks/kc4-series/kc401.html … Pamiętaj o weryfikacji z datasheet + akcesoria.”

## Źródła

- Karta katalogowa KC401 (EN, 4 strony, stopka 08/26/2026): https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/kc401-spec-sheet-en-us.pdf → `public/datasheets/zebra-kc401.pdf` (225 405 B, bez kompresji). PDF nie jest podlinkowany na stronie HTML karty (przycisk „Download PDF Version” generuje wydruk); adres ustalony według wzorca zebra_dam. Polskiej wersji PDF brak (404).
- Strona Zebra PL: https://www.zebra.com/pl/pl/products/interactive-kiosks/kc4-series/kc401.html — 10,1", 1280 × 800, 300 nitów; Wi-Fi 7, BT 6.0, BLE, NFC; opcjonalny SR500 1D/2D; „Zastępuje CC600, CC6000”; zastosowania (sprawdzanie cen, rejestracja czasu i obecności, kasy samoobsługowe, kupony i programy lojalnościowe, zamówienia i zwroty); **„Zawartość opakowania: Kiosk”**; aktualizacje systemu i poprawki zabezpieczeń wymagają Zebra OneCare. Gwarancja na stronie PL to pusty szablon „[xx] miesięcy”.
- Strona wersji Androida (link z karty katalogowej): https://www.zebra.com/android-versions → KC401: obecnie A15, ostatni obsługiwany A18.
- Przewodnik akcesoriów KC401 (07/30/2026): https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/kc401-guide-accessory-zebra-en-us.pdf → `public/downloads/zebra-kc401-akcesoria.pdf` (401 164 B; plik identyczny bajt w bajt z kopią w scratchpadzie).
- Dystrybutorzy (tylko tutaj): delfi „KC4010B-00101CP0-A6: 10.1", 1280x800, 300cd, 5MP Camera, NFC, Wi-Fi 7, BT 6.0, Ethernet, USB-A/C, PoE, VESA, IP65”; vb.net „WIFI7 ANDROID GMS 6GB/64GB F CAM”. BarcodeFactory: rendery akcesoriów 2048 × 2048.

## PN, ceny i stany (/api/stock, 22.10.2026 ok. 22:00, sprawdzone ponownie przed wpisaniem)

| PN | Pozycja | Cena netto | Stan (API) | Na karcie |
|---|---|---:|---|---|
| KC4010B-00101CP0-A6 | KC401, Wi-Fi 7, GMS, 6/64 GB, kamera przednia | 5478,63 | available (DE 8) | `zebra-kc401` |
| KC401-SCNR-SR1 | SR500 +25° | 740,17 | available (DE 9) | nowa karta |
| KC401-SCNR-SR0 | SR500 0° | 740,17 | available (DE 18) | nowa karta |
| KC401-SCNR-SR2 | SR500 −25° | 740,17 | available (DE 20) | nowa karta |
| PWR-BGA12V36W0WW | zasilacz 12 V / 3 A / 36 W | 190,73 | on-order (0 + 36 w dostawie, ETA 18.11.2026; w briefie unavailable) | nowa karta |
| 450042 | przewód sieciowy C5 EU | 42,68 | available (DE 300 + 450) | istniejąca `zebra-et6x-450042` |
| KT-152097-03 | uchwyt ścienny z półką | 187,02 | available (DE 45 + 5) | nowa karta |
| KT-152097-04 | uchwyt ścienny, lepsza blokada | 211,00 | unavailable (0/0) | nowa karta |
| KT-152096-03 | uchwyt na słup z półką | 374,00 | unavailable (0/0) | nowa karta |
| BRKT-DPA-SK1-01 | uchwyt PrintKiosk | 871,10 | unavailable (0/0) | istniejąca `zebra-printkiosk-cc6000-zd621r` |
| KT-152098-03 | cienki uchwyt ścienny | — | brak w API | pominięty |
| MISC-KC401-PLUGCONV | przejściówka do zasilacza CC6000 | 76,89 | unavailable | pominięty (Zebra odradza) |

Pominięte także przewody innych krajów (450040, 450041, 450047, ACC-L10LINECORD-JP/-IN). Inne konfiguracje KC401 (`-NA`, `CN0`, `00100`) — brak w API.

PN KC4010B-00101CP0-A6: karta katalogowa podaje jedną pamięć (6/64 GB) i kamerę przednią; „GMS” tylko od dystrybutora (vb.net) i z opisu w briefie; „-A6” = konfiguracja na rynki poza Ameryką Północną (wg briefu). Przewodnika zamówień Zebra z rozpisaniem kodu nie znaleziono publicznie.

## Decyzje

- Plik `src/data/zebra-kc401-products.ts` (wzorem `sunmi-products.ts`), oferty na żywo jak przy SUNMI (`LIVE_OFFER_SLUGS`). Slugi z prefiksem `zebra-`, więc middleware ich nie blokuje.
- Zawartość zestawu: tylko kiosk (strona Zebra PL). Zasilacz i przewód osobno (przewodnik). Napisane w specyfikacji, opisie i FAQ „Czym zasilić Zebra KC401?”.
- Gwarancja 12 miesięcy: karta katalogowa („1 (one) year from the date of shipment”).
- Bez linku do instrukcji serwis-zebry.pl (adres zwraca 404).
- `relatedProducts` puste: jedyny inny kiosk (SUNMI FLEX 3) ma inną wielkość ekranu; link do FLEX 3 jest w ostatnim zdaniu opisu.
- Przewód 450042: karta `zebra-et6x-450042` nie ma podkategorii, więc trafia do `/akcesoria-do-kioskow` wprost przez pętlę w `products.ts` (okruszki karty bez zmian). Uchwyt PrintKiosk dostał `akcesoria-do-kioskow` jako drugą podkategorię (okruszki zostają „Akcesoria do drukarek etykiet”), nową nazwę „Uchwyt Zebra PrintKiosk z KC401 lub CC6000 — BRKT-DPA-SK1-01” (slug bez zmian) i dane z przewodnika.
- Nazewnictwo: „przewód sieciowy C5” = przewód zasilający (jak nazwa karty 450042); w treści kategorii, gdzie „przewód sieciowy” oznacza już Ethernet (SUNMI PoE), napisano „przewód zasilający C5”.
- Filtr akcesoriów: „Moduł” wyklucza „Moduł skanera”; nowe rodzaje „Moduł skanera”, „Uchwyt” (bez „Uchwyt POS”), „Zasilanie”; nowy filtr „Zgodny kiosk” czyta wiersze „Zgodność” i „Kompatybilność” (karta zd621r).
- Filtr ceny kategorii: progi bez zmian (do 2 500 zł — FLEX 3 od 2281,87; powyżej 2 500 zł — KC401).

## Zdjęcia

- KC401 (decyzja głównej sesji, krok 5): publiczne rendery Zebra 3600 × 2400 na białym tle ze strony produktu zebra.com/pl, `https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/web009/`. Bez logowania. Tło czysto białe (255,255,255), więc bez wycinania: przycięcie (fuzz 3%), dłuższy bok 994 px (82,8%, tak jak SUNMI FLEX 3 P11050020 i D3 MINI P01260026 — oba 994 px), płótno 1200 × 1200.
  - `KC4010B-00101CP0-A6.png` — przód, pionowo (`kc401-portrait-…-front`), zdjęcie główne;
  - `-2` przód, poziomo (`kc401-landscape-…-front`); `-3` ze skanerem, poziomo, przód z lewej (`kc401-scanner-landscape-…-front-left`); `-4` ze skanerem, poziomo, przód z prawej (`…-front-right`); `-5` ze skanerem, pionowo, przód (`kc401-scanner-portrait-…-front`); `-6` tył z prawej, poziomo (`kc401-photography-website-back-right-landscape`); `-7` tył z prawej, pionowo (`…-back-right`); `-8` ze skanerem, tył z lewej, pionowo (`…-back-left-scanner`).
  - Pominięty 9. render (`kc401-scanner-landscape-…-back-left`) — prawie ten sam kadr co `-6`.
  - Mapy dims/frames/uniform-bounds: 8 wpisów ręcznie.
- Akcesoria — kolejność źródeł: (1) przewodnik: obrazy 108–246 px → za małe; (2) zebra.com `photography/product/0023/{pn}-photography-product-accessories.png`: tylko KT-152096-03 i KT-152097-03, 320 × 320 px → za małe; (3) BarcodeFactory `images/product/large/{pn}.png`: rendery Zebra 2048 × 2048.
  - Użyte (BarcodeFactory): KC401-SCNR-SR0, -SR1, -SR2 (moduł + widok z boku z polem skanowania), KT-152097-03 (z rysunkiem montażu zasilacza), KT-152097-04 (ze śrubami). Obróbka: `magick` — spłaszczenie na białe tło, przycięcie (fuzz 2%), dłuższy bok 996 px (83%), płótno 1200 × 1200 jak akcesoria SUNMI w tej podkategorii (C14004105: 84%). Mapy dims/frames/uniform-bounds dopisane ręcznie (5 wpisów), bez `generate-image-dims.mjs`.
  - Zdjęcie zastępcze: PWR-BGA12V36W0WW (BarcodeFactory 404, brak w DAM Zebra), KT-152096-03 (tylko 320 px).
  - BRKT-DPA-SK1-01: istniejące zdjęcie 2048 × 2048 bez zmian.
  - Przypisanie kąta do zdjęcia modułu (opisy zdjęć „+25°/0°/−25°”) według nazwy pliku u dystrybutora; na renderach kąty różnią się, ale nie są opisane.

## Weryfikacja z kartą katalogową i przewodnikiem (22.10.2026)

Sprawdzone zdanie po zdaniu: title, meta, shortDescription, opis (161 słów), specyfikacja (31 wierszy), FAQ (5) i opis zdjęcia karty KC401; opisy, specyfikacje, meta i opisy zdjęć 7 nowych kart akcesoriów i 2 zmienionych; meta, opis i filtry `/akcesoria-do-kioskow`; tabela, definicja, „Jak wybrać i zbudować kiosk”, parametry, zestawy, wskazówki, FAQ (8) kategorii; dymki filtrów; llms.txt.

- SPRZECZNE: brak.
- NIEPRECYZYJNE (poprawione w commicie weryfikacji):
  - meta KC401: „KC401 Zebra ze skanerem SR500” → „z opcjonalnym skanerem SR500” (skaner nie jest w zestawie);
  - shortDescription KC401 i FAQ kategorii: „moduł … ma trzy kąty skanowania” → „jest dostępny w trzech kątach skanowania” (trzy osobne PN);
  - specyfikacja „Montaż”: „uchwyty Zebra do KC401: VESA 100 × 100” → rozdzielone na uchwyty ścienne/na słup (100 × 100) i PrintKiosk (75 × 75 lub 100 × 100);
  - FAQ „Jak zamontować”: elementy montażowe i śruba zabezpieczająca przypisane tylko uchwytom ściennym i na słup (przewodnik nie podaje ich przy PrintKiosk), dopisane VESA 75/100 przy PrintKiosk;
  - dymek filtra „Producent”: „KC401 … z modułem skanera i uchwytami VESA” → „moduł skanera i uchwyty VESA są akcesoriami”.
- SPOZA KARTY (zostawione, oznaczone tutaj):
  - PN, ceny, stany (`/api/stock`); „GMS” w PN (vb.net, brief); „Android 15 / do 18” (strona Zebra „android-versions”, do której odsyła karta);
  - „Zastępuje CC600 i CC6000”, zastosowania, „W zestawie tylko kiosk”, aktualizacje w OneCare (strona Zebra PL);
  - wszystko o akcesoriach (przewodnik KC401): kąty i przykłady użycia modułów, „+25° jak w CC6 devices”, 2 śruby krzyżowe, zasilacz 12 V / 3 A / 36 W, wtyk 5,5/2,1, poziom VI, przewód C5 osobno, VESA 100 × 100, masy uchwytów (przeliczone z lb), KT-152097-04 zastępuje -01, PrintKiosk VESA 75/100 i podstawa 26 × 26 × 5 cm, 6,2 lb ≈ 2,8 kg; przejściówka do zasilacza CC6000 „sub optimal power delivery”;
  - „przy wymianie CC6000 na KC401 uchwyt zostaje na ścianie/słupie” — wniosek ze zgodności uchwytów z KC401 i CC6000 oraz z karty („existing … mounting hardware”);
  - „Duży ekran FLEX 3 mieści menu i listę towarów” i podział „mały kiosk do cen i obsługi pracowników / duży do zamówień i kas” — teza z briefu; KC401 według Zebry obsługuje też kasy samoobsługowe, co zostaje w opisie i tabeli;
  - zestaw „Rejestracja czasu pracy” z Zebra Workcloud Timekeeping (karta: „Turn your KC401 into a timeclock”, osobny program Zebra).
- POMINIĘTE: Workcloud Sync (wezwanie pomocy), Zebra DNA Core/Core+/Advanced, protokoły szyfrowania Wi-Fi i certyfikaty Wi-Fi Alliance, kanały i przepustowości Wi-Fi (do 5764 Mb/s), 802.11 az/mc/d/h/i/r/k/u/v/w, MLO, Apple ECP 1.0/2.0 i VAS SDK, rynki z kolumny „Markets and Applications” (np. Guardian Cabinets, Personal Shopper), zgodność RoHS/REACH, VisibilityIQ Foresight.
- Uwagi do źródeł: przewodnik przy przewodach C5 dla EU, AU, JP i IN powtarza „AC Line cord US Power Adapter” (błąd kopiowania w PDF; PN i kraj są jednoznaczne). Karta katalogowa podaje wymiary bez skanera tylko jako 262,9 × 163,7 × 36,2 mm (poziomo) i ten sam wymiar obrócony (pionowo); ze skanerem pionowo 163,6 mm zamiast 163,7 mm — przepisane jak w karcie.

## Kafle w siatce

Po pierwszym buildzie kafle Zebra w `/akcesoria-do-kioskow` miały pole kwadratowe 238 × 238 (wpis w `product-image-frames.json`), a kafle SUNMI pole 4:3 220 × 165 (`standardMobileImage` dla SUNMI). `ProductCard.tsx`: produkty z kategorii `kioski-samoobslugowe` i z podkategorią `akcesoria-do-kioskow` dostają ten sam kafel 4:3 co SUNMI (ułamek 0,72 urządzenie, 0,62 akcesorium). Po zmianie wszystkie 21 kafli mają pole 299 × 224; skala SR500/uchwytów 0,747, SUNMI C14004105 0,737, C20000079 0,734. BRKT-DPA-SK1-01 i 450042 bez wpisów w mapach — bez zmian (4:3, `object-contain`). Kafel KC401 w `/kioski-samoobslugowe` będzie 4:3 jak FLEX 3 także po dodaniu zdjęć.

## Wyniki (22.10.2026)

- `npx tsc --noEmit`: 0 błędów (po `prisma generate`; przed buildem 215 błędów wyłącznie z braku `src/generated/prisma` w katalogu roboczym).
- `npm run build` przechodzi (3× w trakcie pracy; lokalnie `/api/stock` zwraca błąd bazy, jak przy poprzednich kartach).
- `node scripts/check-product-images.mjs` przechodzi (sprawdza tylko `products.ts`); osobno: wszystkie ścieżki zdjęć i PDF z `zebra-kc401-products.ts` i `zd621r-accessories.ts` istnieją.
- `next start -p 3139`:
  - `/kioski-samoobslugowe` 200, title i meta z KC401, „2 produkty”, filtry: Producent (SUNMI 1, Zebra 1), Przekątna (10,1" 1, 15,6"/18,5"/21,5" (22")/27" po 1), Pamięć (4/64, 6/64, 6/128 po 1), Cena (do 2 500 zł 1, powyżej 2 500 zł 1);
  - `/akcesoria-do-kioskow` 200, 21 produktów (12 SUNMI + 9 Zebra), Rodzaj: stojak podłogowy 2, na ladę 4, moduł 4, moduł skanera 3, kamera 1, uchwyt POS 1, uchwyt 4, zasilanie 2; Zgodny kiosk: SUNMI FLEX 3 12, Zebra KC401 9; Zgodny rozmiar bez zmian (9/12/9);
  - `/produkt/zebra-kc401` 200 bez przekierowania, canonical na siebie, JSON-LD `Product` (model „KC401”, kategoria „Kioski samoobsługowe”, MPN/SKU KC4010B-00101CP0-A6, marka Zebra), `BreadcrumbList`, `WebPage`, `FAQPage`; `offers` brak lokalnie (błąd bazy stanów, jak przy FLEX 3); akcesoria: 4 w pierwszym rzędzie i „Pokaż pozostałe (5)”; PDF karty katalogowej 200 (225 405 B) i przewodnika 200 (401 164 B);
  - 7 nowych kart akcesoriów, 450042 i BRKT-DPA-SK1-01: 200; galeria SR1 584 × 584, produkt ok. 387 px — jak C14004105 (386 px);
  - telefon 390 px: bez poziomego przewijania na karcie KC401, karcie SR1, kategorii i podkategorii;
  - sitemap: 8 nowych adresów; feed: KC401-SCNR-SR0/1/2 i KT-152097-03 z kategorią i zdjęciem; KC401 po dodaniu zdjęć — wynik w sekcji „Krok 5”.

## Krok 5 — zdjęcia KC401, wynik (22.10.2026)

- `npm run build` przechodzi, `npx tsc --noEmit` 0 błędów, `check-product-images` przechodzi.
- `next start -p 3139`: `/produkt/zebra-kc401` 200 bez przekierowania, JSON-LD `image` z 8 adresami; 8 plików `KC4010B-00101CP0-A6*.png` 200; feed: `KC4010B-00101CP0-A6`, „Kiosk samoobsługowy Zebra KC401”, kategoria 543648, in_stock; 450042 w feedzie (in_stock); poradnik KC401 ma 1 link do karty.
- Galeria 584 × 584: KC401 skala 1,014, SUNMI FLEX 3 P11050020 skala 1,015 — ten sam rozmiar produktu. Kafel w `/kioski-samoobslugowe`: oba 299 × 224, skala 0,869 (KC401) i 0,870 (FLEX 3).

## Poradnik KC401 — poprawki zgodności z kartą katalogową (22.10.2026, decyzja głównej sesji)

Minimalne zmiany w `src/data/guides.ts` (`zebra-kc401-kiosk-samoobslugowy`), reszta treści bez zmian:
- tabela „Ekran”: „350 nitów” → „300 nitów” (jedyne wystąpienie);
- tabela „Audio”: „3 mikrofony” → „2 mikrofony”;
- tabela „Sygnalizacja”: „(dowolny kolor)” → „(czerwony, niebieski, zielony i ich kombinacje)”; akapit „Sygnalizacja świetlna…”: „świecą dowolnym kolorem” → „świecą na czerwono, niebiesko, zielono lub w kombinacji tych kolorów” (karta: „red/blue/green combination”);
- tabela „Skanowanie”: „trzy kąty montażu skanera (0°, −25°, +25°)” → „moduł skanera … w trzech wersjach kąta: +25°, 0° lub −25°”; akapit „Skanowanie bez trzymania w ręku”: „Skaner montuje się pod jednym z trzech kątów” → „Moduł skanera jest dostępny w trzech wersjach kąta: +25°, 0° i −25°” (bez linków — w tym miejscu poradnik nie ma linków);
- FAQ „Czy KC401 obsługuje płatności zbliżeniowe?”: usunięte „Obsługa płatności wymaga odpowiedniej umowy serwisowej Zebra.”; dopisane: SoftPOS w kiosku bez obsługi personelu nieobsługiwany, sposób płatności kartą (np. terminal płatniczy) zależy od programu kiosku i operatora płatności, OneCare dotyczy aktualizacji systemu i poprawek zabezpieczeń (LifeGuard).

## Otwarte

- Rozpisanie PN KC4010B-00101CP0-A6 (GMS, region) potwierdzić u dystrybutora; inne konfiguracje KC401 niedostępne w API.
- Zdjęcia PWR-BGA12V36W0WW i KT-152096-03 w rozdzielczości ≥ 1000 px (zastępcze na kartach).
- KT-152098-03 (cienki uchwyt ścienny) dodać, gdy pojawi się w `/api/stock`.
- Poradnik `/poradnik/zebra-kc401-kiosk-samoobslugowy`: dodany jeden link do karty (pierwsze „Zebra KC401” w podsumowaniu). Wypisane niżej rozbieżności poprawiono — patrz sekcja „Poradnik KC401 — poprawki”:
  - SPRZECZNE: jasność „350 nitów” (karta: 300); „3 mikrofony” (karta: two microphones); FAQ „Obsługa płatności wymaga odpowiedniej umowy serwisowej Zebra” (karta: umowa OneCare dotyczy LifeGuard; przy płatnościach przypis „Unattended SoftPOS not supported”).
  - NIEPRECYZYJNE: paski LED „dowolnym kolorem” (karta: kombinacja czerwony/niebieski/zielony); „skaner montuje się pod jednym z trzech kątów” (to trzy osobne moduły SR0/SR1/SR2); brak informacji, że SoftPOS bez obsługi personelu nie jest obsługiwany.
- Karta 450042: `availability` ustawione na `available` (`/api/stock` 22.10.2026: DE 300). Statyczne `priceFrom` 43,16 zł zostaje (API: 42,68 zł); logiki cen nie zmieniano.
