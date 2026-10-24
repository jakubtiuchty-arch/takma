# Zebra WT5400 i WT6400 — terminale, kategoria „Terminale naramienne”, ładowanie i zasilanie (24.10.2026)

Dokument roboczy: źródła, PN, decyzje, rozbieżności, zdjęcia i samokontrola z kartami katalogowymi. Nie jest treścią dla klientów. Mocowania, paski, rękawy, folie i skaner przewodowy RS5000x opisuje osobna gałąź (`src/data/zebra-wt-mounts.ts`, w tej gałęzi zaślepka z pustymi eksportami).

## 1. Źródła

| Źródło | Data | Do czego użyte |
|---|---|---|
| Karta katalogowa WT5400 EN / PL | 06.2026 / 07.2026 | Opis, specyfikacja, zastosowania, gwarancja; PL skopiowana do `public/downloads/zebra-wt5400-karta-katalogowa-pl.pdf` |
| Karta katalogowa WT6400 EN / PL | 06.2026 / 07.2026 | jw.; PL w `public/downloads/zebra-wt6400-karta-katalogowa-pl.pdf` |
| Przewodnik akcesoriów WT5400 / WT6400 EN | 05.2026 | PN, elementy sprzedawane osobno, temperatury baterii, przewody USB; `public/downloads/zebra-wt5400-wt6400-akcesoria-en.pdf` |
| Quick Start Guide WT5400 / WT6400 (MN-004955-02EN Rev. A) | 29.08.2024 | Zawartość opakowania, budowa, wymiana baterii, czasy i temperatura ładowania, tabela akcesoriów ładujących; `public/downloads/zebra-wt5400-wt6400-instrukcja-szybkiego-startu-en.pdf` |
| Product Reference Guide WT6400 / WT5400 (docs.zebra.com, tylko online) | stan z 24.10.2026 | Konfiguracje, zgodność skanerów, tabela akcesoriów, specyfikacje stacji i ładowarek, mocowanie na biodro, łączenie stacji Ethernet |
| PRG RS6100 (07.2026) | — | Adapter CBL-RS5X6-ADPTC-01 (TC21/TC26, TC53/TC58) |
| Przewodnik akcesoriów RS5100 / RS6100 (01.2026) | — | Adapter CBL-RS5X6-ADPWT-01 „for WT6x”, praca RS6100 w mroźni z adapterem |
| Strony modeli PL (zebra.com/pl) | 24.10.2026 | `sameAs` |
| `/api/stock` (drugie wywołanie) | 24.10.2026 | Ceny sprzedaży i dostępność |
| PTS Mobile (ptsmobile.com) | 24.10.2026 | Zdjęcia akcesoriów 500 px |

serwis-zebry.pl: `/instrukcje/zebra-wt5400/instrukcja-po-polsku` i `/instrukcje/zebra-wt6400/instrukcja-po-polsku` → 404 (24.10.2026), linki pominięte.

## 2. Karty terminali

| Slug | PN (warianty) | Atrybuty | Cena startowa | Dostępność 24.10 |
|---|---|---|---|---|
| zebra-wt5400 | WT0-WT54B-T6DAC1A6 | Bateria: standardowa 3500 mAh | 5448,44 | available (9 szt. DE) |
| | WT0-WT54B-T6DAE1A6 | Bateria: rozszerzona 5000 mAh | 5587,43 | available (19 szt. DE) |
| zebra-wt6400 | WT0-WT64B-T6DCC2A6 | Interfejs: ekran dotykowy; bateria standardowa | 11 740,12 | on-order (0 na stanie, 124 w dostawie) |
| | WT0-WT64B-T6DCE2A6 | ekran dotykowy; rozszerzona | 11 920,37 | on-order (11 w dostawie) |
| | WT0-WT64B-K6DCC2A6 | klawiatura i ekran dotykowy; standardowa | 13 199,91 | available (29 szt. DE) |
| | WT0-WT64B-K6DCE2A6 | klawiatura i ekran dotykowy; rozszerzona | 13 380,20 | on-order (56 w dostawie) |

Wersje NA (USA) nie mają ceny w API — pominięte. Terminale mają `categoryId: terminale-mobilne` i producenta Zebra, więc automatycznie trafiają na `/terminale-mobilne`, `/terminale-mobilne-zebra` i do mechanizmu cen terminali Zebra (`zebraTerminalPartNumbers`, oferty na żywo). Logiki cen nie zmieniano.

Uwaga: `isZebraTerminalSlug()` (wyświetlanie „Do potwierdzenia” zanim przyjdą ceny na żywo) nie obejmuje slugów `zebra-wt…` — regex dotyczy `zebra-(tc|mc|hc|em)`. Bez zmiany kodu tabela wariantów do czasu odpowiedzi `/api/stock` pokazuje `priceFrom` z danych. Decyzja o rozszerzeniu regexu należy do właściciela (to logika cen).

## 3. Akcesoria (`zebraWtAccessories`)

| Slug | PN | Podkategorie | Cena | Dostępność |
|---|---|---|---|---|
| zebra-wt-crd-wt5x6-1s1bc-01 | CRD-WT5X6-1S1BC-01 | stacje-ladowarki-terminali, akcesoria-do-terminali | 1044,58 | available |
| zebra-wt-crd-wt5x6-5s5bc-01 | CRD-WT5X6-5S5BC-01 | jw. | 3571,61 | available |
| zebra-wt-crd-wt5x6-10sc-01 | CRD-WT5X6-10SC-01 | jw. | 3571,61 | available |
| zebra-wt-crd-wt64-5s5be-01 | CRD-WT64-5S5BE-01 | jw. | 5291,59 | unavailable (0 szt.) |
| zebra-wt-sac-wt5x6-4sc-01 | SAC-WT5X6-4SC-01 | jw. | 1290,71 | available |
| zebra-wt-sac-wt5x6-20sc-01 | SAC-WT5X6-20SC-01 | jw. | 5640,71 | on-order (4 w dostawie) |
| zebra-wt-btry-wt5x6-35ma-01 | BTRY-WT5X6-35MA-01 | baterie-do-terminali, akcesoria-do-terminali | 453,96 | on-order (97 w dostawie) |
| zebra-wt-btry-wt5x6-50ma-01 | BTRY-WT5X6-50MA-01 | jw. | 565,98 | available |
| zebra-wt-cbl-ngwt-usbchg-01 | CBL-NGWT-USBCHG-01 | kable-zasilacze-terminali, akcesoria-do-terminali | 472,22 | on-order (9 w dostawie) |
| zebra-wt-cbl-rs5x6-adptc-01 | CBL-RS5X6-ADPTC-01 | akcesoria-do-skanerow, kable-do-skanerow (jak ADPWT) | 534,97 | unavailable (0 szt.) |

Pominięte: CBL-NGWT-AUQDLG-02 (brak w API) — wspomniany w FAQ WT6400 jako „adapter audio na zapytanie”, bez PN i linku. HS2100: karta WT nie wymienia zestawu słuchawkowego z nazwy; wymienia go tylko tabela akcesoriów PRG przy adapterach audio. Karty HS2100-BTN-L nie zmieniano.

## 4. Decyzje i rozbieżności

1. **Przewód DC do stacji wielogniazdowych.** Przewodnik akcesoriów (05.2026) podaje CBL-DC-381A1-01 dla CRD-WT5X6-5S5BC-01, CRD-WT5X6-10SC-01, CRD-WT64-5S5BE-01 i SAC-WT5X6-20SC-01. PRG online w opisach tych czterech pozycji podaje CBL-DC-382A1-01, ale w tabeli zasilaczy tego samego PRG nadal stoi 381A1. Zgodnie z briefem zastosowano 382A1 (PRG, dokument aktualizowany online). Blok zasilacza 108 W: warunek 382A1 rozszerzony o stacje 5-/10-gniazdowe WT i ładowarkę 20 baterii WT; warunek 381A1 zawężony do „stacji wielogniazdowej terminali TC lub MC albo ich ładowarki baterii”, żeby stacje WT nie łapały się pod oba warunki. Do sprawdzenia przy pierwszym zamówieniu stacji.
2. **Zasilacz do przewodu USB.** PRG: PWR-WUA5V12W0US „for use with CBL-TC5X-USBC2A-01 and CBL-NGWT-USBCHG-01” — w Europie odpowiednik PWR-WUA5V12W0EU (tabela wariantów krajowych w przewodniku akcesoriów). Przewodnik akcesoriów: PWR-WUA5V45W1xx z przewodem CBL-EC5X-USBC3A-01 (tylko WT5400). Oba warianty opisane na karcie WT5400; na WT6400 — USBCHG + 12 W EU.
3. **Długość CBL-EC5X-USBC3A-01:** przewodnik akcesoriów i istniejąca karta — 1 m; PRG WT — 1,2 m. Karty współdzielonej nie zmieniano w tym zakresie.
4. **Wymiary ładowarki SAC-WT5X6-4SC-01:** PRG „Height 62.4 mm (3.5 in.)” — cale nie zgadzają się z milimetrami; na karcie podano 62,4 mm.
5. **Długość CBL-NGWT-USBCHG-01 (160,3 cm) i temperatury pracy przewodu** — z tabeli „USB and Charging Cable Technical Specifications” w PRG; tabela nie podaje PN, ale WT6400 ma tylko jeden przewód USB/ładujący.
6. **System:** karty katalogowe — „OS support through Android 17”; PRG — konfiguracje „GMS 13; upgradeable to 17”. Na kartach: Android 13 z GMS, aktualizacja do 17. LifeGuard: przy WT6400 karta podaje „w ramach umowy Zebra OneCare” (przypis 5); przypis przy WT5400 jest błędnie ponumerowany (1 = obszar ekranu), dlatego przy WT5400 podano tylko nazwę programu.
7. **Wi-Fi:** tabela PRG podaje „802.11 a/b/g/n”, karty katalogowe — 802.11 a/b/g/n/ac/ax, Wi-Fi 6E; przyjęto karty katalogowe.
8. **Ekran:** PRG „4.7" WVGA”, karty „720×1280” — przyjęto karty.
9. **Adapter CBL-RS5X6-ADPWT-01 i WT6400:** karta WT6400 i PRG WT mówią o zasilaniu RS5100/RS6100 „corded adapter” bez PN; przewodnik RS5100/RS6100 opisuje ADPWT jako „Corded Adapter for WT6x”. WT6400 ma złącza boczne jak WT6000/WT6300, więc na karcie adaptera dopisano WT6400 (nazwa, opis, specyfikacja, podobne produkty). Do WT5400 karta WT5400 wskazuje „USB-C corded adapter” = CBL-RS5X6-ADPTC-01.
10. **Mocowanie na biodro:** PRG wymaga przy nim skanera z długim przewodem RS4000/RS5000, przewodowego zestawu słuchawkowego albo RS6000 (Bluetooth). Na karcie WT6400 opisano to ogólnie; na WT5400 mocowanie jest w grupie „jedno z” bez komentarza (PRG i przewodnik wymieniają je dla obu modeli).
11. **Uchwyt BRKT-SCRD-SMRK-01:** przewodnik akcesoriów — do 10-gniazdowej stacji i ładowarki 20 baterii; PRG — do 5-gniazdowej stacji lub czterech ładowarek 4 baterii (flansza pod kątem 25°). Na kartach: opcja dla stacji 5- i 10-gniazdowych, stacji Ethernet, ładowarki 20 baterii i czterech ładowarek 4 baterii.
12. **Aparat WT6400 a skanowanie:** QSG — boczny aparat „provides scanning and capturing photos or videos”; w FAQ kategorii: „może też odczytywać kody”, bez listy symbologii.

## 5. Kategoria „Terminale naramienne”

- `src/data/wearable-terminal-category.ts`: podkategoria (`parentCategoryId: terminale-mobilne`) i treść (tabela porównawcza, definicja, poradnik, FAQ, kroki).
- Strona `src/app/terminale-naramienne/page.tsx` (kopia wzoru `/terminale-rfid`), wpis w menu „Terminale” (`Navbar.tsx`), filtry (`category-filters.ts`: Złącza, Klawiatura, Praca w mroźni), ceny na żywo w siatce (`SubcategoryPage.tsx`), treść w `subcategory-content.ts`. Sitemap bierze podkategorie automatycznie.
- `public/llms.txt`: kategoria i dwie karty.
- `brand-category-content.ts` (`/terminale-mobilne-zebra`): punkt poradnika o terminalach naramiennych.
- `accessory-navigation.ts`: WT5400 i WT6400 dodane do modeli nawigacji akcesoriów (jak WS501-R).

## 6. Zmiany na kartach współdzielonych

| Karta | Zmiana |
|---|---|
| Zasilacz 50 W | sekcja o stacji 1-gniazdowej i ładowarce 4 baterii WT, kompatybilność, FAQ o przewodzie DC, zastosowania |
| Zasilacz 108 W | warunki przewodów DC (pkt 4.1), punkt doboru, kompatybilność, FAQ, zastosowania |
| Przewód DC 388A1 | zdanie o stacji 1-gn. i ładowarce 4 baterii WT, kompatybilność, zastosowania |
| Przewód DC 382A1 | punkt o stacjach WT i ładowarce 20 baterii, kompatybilność, FAQ, zastosowania |
| Przewód sieciowy 50-16000-220R | zdanie o WT, kompatybilność, zastosowania |
| Uchwyt BRKT-SCRD-SMRK-01 | punkt o stacjach i ładowarkach WT, kompatybilność, FAQ, zastosowania |
| Zasilacz USB-C 45 W | WT5400 na liście zgodnych urządzeń, kompatybilność, FAQ, zastosowania |
| Przewód USB-C / USB-C (CBL-EC5X-USBC3A-01) | zdanie o WT5400, kompatybilność, zastosowania |
| Przewód USB-A / USB-C (CBL-TC5X-USBC2A-01) | punkt o WT5400, kompatybilność, FAQ, zastosowania |
| Zasilacz USB-A 12 W EU | punkty o WT5400 i WT6400, kompatybilność, zastosowania |
| Adapter CBL-RS5X6-ADPWT-01 | WT6400 w nazwie, opisie, specyfikacji, zastosowaniach i podobnych produktach; link do ADPTC |
| RS6100 | WT6400 przy adapterze, WT5400/WT6400 w FAQ o NFC i pracy bez baterii, ADPTC w akcesoriach |
| RS5100 | WT5400/WT6400 w FAQ o NFC, ADPTC w akcesoriach |
| RS2100 | zdanie o parowaniu z WT5400/WT6400 w FAQ |
| Podkategorie stacji, baterii, kabli terminali i kabli do skanerów | WT5400/WT6400 w opisach SEO |

## 7. Zdjęcia

| Plik | Źródło |
|---|---|
| WT0-WT54B-T6DAC1A6.png, -2 … -6 | biblioteka mediów Zebry: `P/0017/wt5400-…-{front-facing,left-facing,back-facing}-no-shadow.png`, `P/0020/wt5400-…-single-dial-wrist-strap-right-facing-no-shadow.png`, `…-velcro-wrist-strap-left-facing-no-shadow.png`, `…-right-arm-single-dial-wrist-strap.png` |
| WT0-WT64B-T6DCC2A6.png, -2 … -8 | `P/0017/wt6400-…-front-facing-no-shadow.png`, `…-front-facing-with-keypad…`, `…-left-facing…`, `…-right-facing-up-with-keypad…`, `…-back-facing-with-keypad…`, `P/0020/wt6400-…-single-dial-wrist-strap-right-facing…`, `…-right-arm-single-dial…`, `…-with-keypad-right-arm-single-dial…` |
| CRD-WT5X6-5S5BC-01, SAC-WT5X6-20SC-01 | biblioteka Zebry, `P/0026/…-1x1-3600x3600.png` (białe tło usunięte) |
| CRD-WT5X6-1S1BC-01, CRD-WT5X6-10SC-01, CRD-WT64-5S5BE-01, SAC-WT5X6-4SC-01, BTRY-WT5X6-35MA-01, CBL-NGWT-USBCHG-01 | PTS Mobile, 500 px (USBCHG 350 px), białe tło usunięte, powiększone |
| BTRY-WT5X6-50MA-01, CBL-RS5X6-ADPTC-01 | biblioteka Zebry, miniatury 320 px (`P/0023`), powiększone |

Kafle terminali: produkt 80% szerokości kadru 800 × 800 (ok. 53% wysokości) — proporcje urządzenia poziome; RS6100 66%, WS501-R 81% szerokości. Zdjęcie `wt6400-…-back-facing-no-shadow.png` (bez klawiatury) pominięte — wygląda jak tył WT5400, bez zielonych elementów obudowy WT6400.

## 8. Samokontrola z kartą katalogową

Porównano zdanie po zdaniu: tytuły, meta, krótkie opisy, opisy, specyfikacje, dymki, FAQ, opisy zdjęć i treść kategorii.

- SPRZECZNE: brak po poprawkach.
- SPOZA KARTY (z PRG / QSG / przewodnika akcesoriów): Android 13 na starcie, czasy i temperatura ładowania, wymiana baterii krok po kroku, zawartość opakowania, kompatybilność stacji Ethernet tylko z WT6400, skanery RS4000/RS5000x tylko z WT6400, adapter audio, mocowanie na biodro, dane stacji i ładowarek, długość przewodu USBCHG.
- POMINIĘTE celowo: kanały Wi-Fi, pełna lista metod EAP, Zebra DNA, Device Guardian, VisibilityIQ (treść marketingowa lub usługowa).
- NIEPRECYZYJNE poprawione w trakcie: „ciasne miejsca regału” → „ciasne miejsca”; usunięte dopowiedzenia „na stanowisku kierownika zmiany” (USBCHG), „przesyłanie oprogramowania” (stacja Ethernet), „dwa rzędy po pięć gniazd” (10-gniazdowa).

Unikalność (`porownaj-opisy.py`, 6-gramy): WT5400 ↔ WT6400 — 0 w opisach, krótkich opisach, meta i FAQ; WT vs pozostałe karty Zebra (terminale, RS, akcesoria) — 0; między akcesoriami WT — tylko listy linków do ładowarek na kartach baterii.

## 9. Zależności od gałęzi B

Karty terminali linkują do slugów B (`zebra-wt-sg-wt5x6-…`, `zebra-wt-sg-ngwt-…`, `zebra-wt-misc-wt5x6-scrn-05`, `zebra-wt-sg-wt4027050-01r`, `zebra-rs5000x`). Bez plików B bloki „Wymagane — mocowanie” pokazują pozycje bez zdjęcia i ceny (jako niedostępne), a nieistniejące identyfikatory w `relatedAccessories` są pomijane. Build przechodzi.
