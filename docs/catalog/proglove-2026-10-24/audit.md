# Skanery noszone ProGlove — dokumentacja robocza (24.10.2026)

Dokument roboczy: źródła, PN, pominięte pozycje, sprzeczności między źródłami, zdjęcia, blok „Wymagane (jedno z)” i samokontrola z kartami. Nie jest treścią dla klientów.

## 1. Źródła

- Karty techniczne ProGlove (EN), hostowane lokalnie w `public/datasheets/`:
  - `proglove-leo.pdf` (LEO, 10.2022), `proglove-mark-basic.pdf` (MARK Basic, 01.2024), `proglove-mark-2.pdf` (MARK 2, 10.2022), `proglove-mark-3.pdf` (MARK 3, 10.2022), `proglove-mark-display.pdf` (MARK Display, 10.2022), `proglove-mai.pdf` (MAI, 10.2026);
  - `proglove-mocowania.pdf` (Index Trigger, Hand Strap, Reel, 03.2026), `proglove-mai-akcesoria.pdf` (Hand Strap Gen 2 i stacja Gen 2, 03.2026), `proglove-stacja-2.pdf` (Charging Station S, 06.2022), `proglove-stacja-10.pdf` (10-Slot, 06.2022), `proglove-gateway.pdf` (04.2022), `proglove-gateway-plus.pdf` (06.2024, stopka 10.2023);
  - instrukcje szybkiego startu: `proglove-mark-quickstart.pdf`, `proglove-mai-quickstart.pdf`.
- Strony modeli proglove.com (zastosowania, zakresy robocze, wyróżniki), strona mocowań, Knowledge Center docs.proglove.com (FAQ mocowań, Gateway, Gateway Plus, stacja Gen 2, tabela rozmiarów Index Trigger).
- Dystrybutorzy (tylko zawartość zestawów i opisy PN): ERS (C006-EU, C006-INT, C007-INT, X001-A007), Levata (C021-INT, M012).
- Ceny i stany: `https://www.takma.com.pl/api/stock`, partie po 3 PN, 2 wywołania, 24.10.2026 ok. 10:57–11:07 (`proglove/api/api-final.json` w scratchpadzie sesji). `priceFrom` w danych to wartość startowa; karta pobiera cenę na żywo.
- Blok „For AI assistants and agents” na proglove.com potraktowano jako dane; nie korzystano z podanego tam serwera.

## 2. Karty skanerów

| Karta | Slug | PN (kolejność w tabeli) | Domyślny PN | Cena netto | Stan (API 24.10) |
|---|---|---|---|---|---|
| ProGlove LEO | proglove-leo | M009 | M009 | 1 827,52 zł | 57 szt. + 115 w dostawie |
| ProGlove MARK Basic | proglove-mark-basic | M011 (Multi Range), M007 (Standard Range) | M011 | 3 251,85 zł | 351 / 38 szt. |
| ProGlove MARK 2 | proglove-mark-2 | M004-EU (Standard Range), M003-EU (Mid Range) | M004-EU | 4 472,71 zł | 97 szt. / 0 + 325 w dostawie (on-order) |
| ProGlove MARK 3 | proglove-mark-3 | M010 | M010 | 4 472,71 zł | 5 szt. + 440 w dostawie |
| ProGlove MARK Display | proglove-mark-display | M008 (Standard Range), M006 (Mid Range) | M008 | 5 286,61 zł | 20 szt. / 0 + 189 w dostawie (on-order) |
| ProGlove MAI | proglove-mai | M020-EU | M020-EU | 6 590,36 zł | 35 szt. |

Pominięte: MARK Pro (brak PN, tylko z ProGlove Services), M012 MARK 3 Freezer (Levata: „must be purchased with MARK 3 ProGlove Care (H056-B) as a bundle”; brak karty technicznej), M005 (stary MARK Basic Mid Range, API nie zna), wersje US/UK, LANA (komputer, nie skaner), ProGlove Care, INSIGHT, pakiety B0xx, Access Point A006-EU (tylko MARK 2, przewody nieznane API).

## 3. Akcesoria (29 kart)

| Grupa | PN | Cena netto | Stan |
|---|---|---|---|
| Hand Strap | G011-MIX-3, G011-L-10, G011-R-10 | 444,63 / 1 341,44 / 1 341,44 zł | available, available, on-order |
| Index Trigger | G006-{SL,SR,ML,MR,LL,LR}-3 i -10 (12 PN) | 568,98 zł (3 szt.), 1 789,83 zł (10 szt.) | wszystkie available, G006-LR-10 on-order |
| Reel | G008-2, G008-LY-2 | 810,14 zł | available |
| Stacje Gen 1 | C006-EU, C006-INT, C007-INT | 772,45 / 772,45 / 3 251,85 zł | available |
| Gateway | X001-A007 | 1 055,07 zł | available |
| Gateway Plus | A009-EU | 1 462,01 zł | on-order (0 + 5) |
| Przewody Gateway Plus | Z001-001 (USB), Z009-000 (Ethernet PoE) | 82,90 zł | available |
| MAI Gen 2 | G020-MIX-3, G020-L-10, G020-R-10, C021-EU, C021-INT | 444,63 / 1 341,44 / 1 341,44 / 772,45 / 772,45 zł | available |

Pominięte akcesoria: C005-EU (sam korpus stacji, wymaga Z003-000 + Z003-003), C007 i A007 (korpusy, 0 szt.), C021 (korpus Gen 2), Z009-001 i Z009-002 (RS-232 do Gateway Plus, 0 szt.; karta Gateway Plus raz nazywa Z009-001 przewodem RS-232, a raz przewodem zasilającym), Z003-000/Z003-002/Z003-003/Z007-xxx (zasilacze i przewody zapasowe), Z008-000 (smycz zapasowa), G001/G007 (stare, API nie zna), wersja ESD Index Trigger (PN nieznany).

Podkategorie: mocowania → `akcesoria-do-skanerow` + `etui-kabury-skanerow`; stacje → `stacje-ladowarki-skanerow`; Gateway i Gateway Plus → `akcesoria-do-skanerow`; przewody → `kable-do-skanerow`. `productIds` i `productCount` uzupełnia pętla w `products.ts` (wzór Bluebird).

## 4. Blok „Wymagane — jedno z”

- Składnia w opisie: `**Wymagane dla skanera: mocowanie (jedno z) — sprzedawane osobno**`. Dotychczasowe wyrażenia regularne (`getRequiredAccessories`, `removeRequiredAccessoryBlocks`, `accessory-navigation`) czytają ją bez zmian, bo warunek mieści się w części „dla …”.
- `src/lib/required-accessory-copy.ts`: `getRequiredChoiceGroup()` rozpoznaje końcówkę „(jedno z)/(jedna z)/(jeden z)” i zwraca nagłówek grupy („Mocowanie (jedno z):”, „Stacja ładująca (jedna z):”, „Przewód (jeden z):”); nowa gałąź nagłówka bloku dla samych grup wyboru; zdanie warunku dla nawigacji akcesoriów.
- `RequiredAccessoryList.tsx`: wiersz z nagłówkiem grupy przed pierwszą pozycją grupy, bez zdania warunku przy pozycjach; reszta wiersza (zdjęcie, link, PN, stan, cena, „Do koszyka”) bez zmian. `RequiredAccessories.tsx`: zdanie „wymagany przy każdym sposobie użycia” tylko dla zwykłych warunków.
- Kontrola: wszystkie 303 karty z blokiem „Wymagane” w katalogu (Bluebird, Getac, Zebra, Newland, Citizen, BIXOLON) wyrenderowane przed i po zmianie (`renderToStaticMarkup`) — HTML identyczny.
- Karty: każdy skaner MARK/LEO ma grupy „Mocowanie” (G011-MIX-3, G006-MR-3, G008-LY-2) i „Stacja ładująca” (C006-EU, C007-INT); MAI — G020-MIX-3, G020-R-10, G020-L-10 oraz C021-EU, C021-INT; Gateway Plus — „Przewód” (Z001-001, Z009-000). Gateway opisany tylko w tekście (potrzebny przy USB do komputera).

## 5. Sprzeczności między źródłami i decyzje

| Temat | Źródła | Decyzja w treści |
|---|---|---|
| MARK Basic — skany na ładowaniu | karta 01.2024 i strona: 8000; FAQ docs: 7000 | 8000 (karta) |
| MARK Display — skany | karta: 7500; tabela na stronie: 7000 | 7500 (karta) |
| MARK Display — temperatura pracy | karta: 0–45°C; strona: 0–50°C | 0–45°C (karta) |
| Upadki | karty: „resists several drops from 2 m”; strona: 100 / 50 / 30 upadków | „kilka upadków z 2 m” bez liczby; MAI: „wielokrotne” (karta: „multiple drops”) |
| LEO — zasięg | strona: 10–70 cm; karta: do 66 cm (Code 39 20 mil) | do 66 cm (karta); 70 cm pominięte |
| Reel — długość linki | karta 03.2026: „120 mm (0,4 ft)”; FAQ docs: 120 cm (starsze 70 cm); ERS: 70 cm | długość pominięta; podany materiał linki (aramid, docs) |
| Gateway — IP i temperatura | karta 04.2022: IP42, −20…+50°C; User & Regulatory Guide: IP40, 0…+50°C | pominięte |
| Gateway Plus — Bluetooth | karta: 5.2; User & Regulatory Guide: 5.4 | wersja pominięta („Bluetooth Low Energy”) |
| MAI — masa | strona: 65 g; karta 10.2026: 68 g | 68 g (karta) |
| MAI — czas ładowania | karta MAI: ~120 min; karta stacji Gen 2: 130 min | MAI: „ok. 2 godzin”; stacja C021: „ok. 130 minut” (każda karta według swojej karty technicznej) |
| Hand Strap Gen 2 — temperatura | karta 03.2026: −20…+50°C; FAQ docs: −30…+50°C | −20°C (karta) |
| Reel — temperatura | karta: −20…+50°C; FAQ docs: Reel i Hand Strap do −30°C | Reel −20°C (karta), Hand Strap −30°C (karta) |
| MARK Display — HID | karta: tylko INSIGHT Mobile, iOS SDK, Gateway; User Manual: BLE HID „YES” | HID nieobiecywany; FAQ każe potwierdzić sposób połączenia |
| G011-MIX-3 — skład | karta: „3 pieces package”; Levata: „Right - 3 pieces”; FAQ docs: 2 × prawa + 1 × lewa | 2 × prawa + 1 × lewa (FAQ producenta) |
| MAI — asystent głosowy AI | strona: „AI Voice Assistant”; karta 10.2026: brak mikrofonu i funkcji głosowych | pominięte |

## 6. Dane spoza karty technicznej (oznaczone)

- Zawartość zestawów stacji: C006-EU (stacja, zasilacz z wtyczką EU, przewód USB) i C006-INT, C007-INT (wtyki EU, UK, US, AU) — ERS; C021-INT (wtyki UK, US, AU) — Levata; C021-EU (zasilacz EU) — z nazwy PN i karty Gen 2 (Z003-000).
- X001-A007 = Gateway z przewodem USB — ERS/Levata. A009-EU = sam korpus Gateway Plus — wniosek z nazw PN zestawów (X002/X008/X014-A009) i rozpoznania.
- Zakresy robocze 10–250 cm (MARK Basic Multi), 10–90 cm (Standard Range), 30–150 cm (Mid Range), 10 cm–6 m (MARK 3) — strony modeli i tabela porównania; w specyfikacji obok podane przykłady z kart technicznych.
- Zastosowania i branże — strony modeli (LEO, MARK Basic, MARK 2, MARK 3, MARK Display, MAI) i strona mocowań.
- Ceny, stany, gwarancja 12 miesięcy — API i karty (gwarancja fabryczna na kartach).

## 7. Zdjęcia

- Płótno 800 × 800, przezroczyste tło; produkt ok. 64–66% dłuższego boku (skanery), 58–72% (akcesoria). Wzorzec: `m3-wr15-1.png` 800 × 800, 58 × 56%; `m3-wr10-1.png` 70 × 67%; dla porównania Zebra `zebra-ds3678-sr.png` 87 × 65%.
- Źródła: proglove.com (MARK Basic, MARK 2, MARK 3 na Hand Strap, MARK Display SR+MR, Hand Strap 1.4, Hand Strap Gen 2, Index Trigger, Reel), Levata (LEO, MARK Display MR, MAI, Gateway, stacja 2-gniazdowa — tło białe wycięte maską, sprawdzone na szarym tle), Quickstart MARK/MAI (stacja 10-gniazdowa, Gateway Plus, stacja Gen 2, MAI, Hand Strap Gen 2 L).
- Skalowanie w górę: Hand Strap Gen 2 L 1,16×, Reel 1,02×, Index Trigger 0,99×; reszta pomniejszana.
- Bez zdjęcia (logo zastępcze w kafelku): G011-L-10 (dostępne zdjęcie pokazuje wersję prawą z napisem RIGHT), Z001-001, Z009-000.
- Index Trigger: jedno zdjęcie poglądowe dla 12 PN (brak zdjęć według rozmiaru i strony); opis zdjęcia to zaznacza.
- Stacja Gen 2: zdjęcie z dwoma MAI w gniazdach; opis zdjęcia zaznacza, że urządzenia są sprzedawane osobno.
- Zgoda ProGlove/Levata na użycie zdjęć — do potwierdzenia (rozpoznanie p. 11).
- `product-image-dims.json`: 20 wpisów dopisanych ręcznie (`generate-image-dims.mjs` nieuruchamiany). Bez wpisów w `frames` i `uniform-bounds` (jak M3).

## 8. Samokontrola z kartami (24.10.2026)

Porównanie zdanie po zdaniu: tytuł, meta, krótki opis, opis, specyfikacja, FAQ, dymki, opisy zdjęć.

- SPRZECZNE (poprawione przed zapisem): LEO FAQ — „SDK dla iOS daje pełną integrację” (karta: „basic integration”) → „integracja podstawowa”.
- SPOZA KARTY (usunięte): MARK Basic „wystarcza do pracy w typowym magazynie”; MARK 3 FAQ „lasery tej klasy stosuje się w skanerach ręcznych”; Hand Strap „spust z boku” (tylko Levata); Hand Strap MIX-3 i Index Trigger M-10 — porównania cen; MARK 2 „model średniej klasy” → „producent nazywa go oryginałem rodziny MARK” („The Original”).
- POMINIĘTE celowo: MARK 3 Freezer (pakiet z Care), Access Point, długość linki Reel, IP/temperatura Gateway, wersja Bluetooth Gateway Plus, liczby upadków ze strony, AI Voice Assistant MAI, ESD Index Trigger (tylko na zamówienie, bez PN).
- NIEPRECYZYJNE: brak po poprawkach. Zakres Mid Range MARK 2 (30–150 cm) pochodzi z tabeli porównania, nie z karty MARK 2; karta podaje odległości dla konkretnych kodów (np. Code 39 100 mil 28–437 cm), podane w specyfikacji.

## 9. Kontrola treści

- `porownaj-opisy.py` (6-gramy): skanery — 0 par w `description`, `shortDescription`, `seoDescription`, `faq`. Akcesoria — 0 par w `shortDescription`, `seoDescription`, `faq`; w `description` wspólne są wyłącznie listy zgodności („MARK Basic, MARK 2, MARK 3, MARK Display i LEO. Nie pasuje do MAI.”).
- `applications`: 53 hasła, bez powtórzeń.
- Opisy skanerów: 165–185 słów (bez bloku „Wymagane”). SEO description: 126–146 znaków.

## 10. Kod marki

- `manufacturers.ts` (ProGlove, logo `public/images/manufacturers/proglove.svg` — oficjalne logo 2026, `#FF5F00`, płótno 800 × 300 jak inne logotypy), `proglove-products.ts` + import i spread w `products.ts`, `brandCategories` `skanery-proglove` (cena „od” z `wstawCeneOd`), `src/app/skanery-proglove/page.tsx`, `proglove-category.ts` w `brand-category-content.ts`, Navbar („Skanery ProGlove”; „Skanery pierścieniowe i noszone”), filtr Producent i pętla stron skanerów w `category-filters.ts` (wartość „Pierścieniowy i noszony”), middleware (`proglove-`), `ProductCard` (logo zastępcze akcesoriów ProGlove), `llms.txt`.
- Specyfikacja: wiersz IP nazwany „Klasa szczelności” (czyta go filtr). W M3 WR15 „Ochrona IP” → „Klasa szczelności”.
- Dymek „Zasięg” w karcie (MARK Basic, MARK 2, MARK Display) opisuje zakresy ProGlove, nie globalny tekst Zebra/Datalogic.
- Merchant feed: marka z `manufacturers.ts` (ProGlove), tytuł z prefiksem „Skaner kodów kreskowych”; skanery nie mają kategorii Google — jak pozostałe skanery.
- Ingram: PN ProGlove dostają domyślny prefiks `ZB` (bez zmian w `ingram.ts`); ceny idą z innych źródeł API.
