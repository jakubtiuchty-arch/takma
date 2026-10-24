# Zebra RS6100 — mocowania, owijki, paski, spusty i smycz (24.10.2026)

Dokument roboczy: źródła, PN, decyzje, rozbieżności źródeł, zdjęcia i samokontrola. Nie jest treścią dla klientów. Karta skanera, ładowanie, baterie i zasilanie są opisane w `audit.md` (osobna gałąź).

Dane: `src/data/zebra-rs6100-mounts.ts`, eksport `zebraRs6100Mounts` (26 kart). Slugi `zebra-rs6100-<pn małymi literami>`.

## 1. Źródła

Hierarchia: karta katalogowa → Product Reference Guide / QSG / przewodnik akcesoriów → dystrybutor.

- Karta katalogowa RS6100 EN (12.2022) i PL (01.2023) oraz ta sama karta na zebra.com — sekcje „Five Interchangeable Wearing Styles”, „Personal Trigger Assemblies”, „Triggers Built for Intensive Scanning”, „Maximum Replaceable Parts”, „Upgrade From the RS5100”. Polska terminologia: „zespół przycisku skanowania” (trigger assembly), „uchwyt” (mount). W kartach sklepu użyto „spust” i „mocowanie”, jak w kartach RS2100.
- RS5100/RS6100 Accessories Guide (EN, 01.2026), s. 11–13 — PN, opisy i zawartość zestawów.
- Product Reference Guide RS6100 (EN, 07.2026): tabela konfiguracji (s. 17), „Single and Double Trigger Assemblies” (s. 27–29), tabela akcesoriów (s. 33–34), rozdziały Lanyard Mount, Back of Hand Mount, Low Temperature Back of Hand Mount, Enterprise Hand Mount, Slim Mount (s. 49–73), konserwacja: czyszczenie paska i podkładki, wymiana podkładki, spustu i paska (s. 249–251).
- QSG RS6100 (EN, 2023): rysunki spustu pojedynczego i podwójnego, zakładanie na palec.
- Ceny i stany: `https://www.takma.com.pl/api/stock` (24.10.2026, wyniki zapisane w scratchpadzie sesji `rs6100/api/`). `priceFrom` to cena sprzedaży netto z API; karta pobiera cenę i stan na żywo.
- PTS Mobile (ptsmobile.com, 24.10.2026): tylko zdjęcia (tabela w p. 5).

## 2. Karty

| Karta | PN | Cena netto (API) | Stan (API 24.10) | `availability` |
|---|---|---|---|---|
| Enterprise Hand Mount (rama ze spustem) | SG-RS5X6-HNMT-02 | 320,53 zł | 0 | unavailable |
| Owijka prawa S | SG-WEAR-HNWPRS-02 | 157,39 zł | 225 EU + 15 | available |
| Owijka prawa M | SG-WEAR-HNWPRM-02 | 157,39 zł | 208 EU | available |
| Owijka prawa L | SG-WEAR-HNWPRL-02 | 157,39 zł | 1534 EU | available |
| Owijka lewa S | SG-WEAR-HNWPLS-02 | 157,39 zł | 21 EU + 58 | available |
| Owijka lewa M | SG-WEAR-HNWPLM-02 | 157,39 zł | 91 EU + 115 | available |
| Owijka lewa L | SG-WEAR-HNWPLL-02 | 157,39 zł | 334 EU + 97 | available |
| Mocowanie na grzbiet dłoni | SG-RS5X6-BHMT-01 | 511,83 zł | 0 + 102 w dostawie | on-order |
| Mocowanie na grzbiet dłoni do mroźni | SG-RS5X6-BHMTX-01 | 552,02 zł | 1 PL + 8 EU | available |
| Pasek zapasowy M | SG-RS51-BHSTP-01 | 64,21 zł | 0 + 66 w dostawie | on-order |
| Pasek zapasowy L | SG-RS51-BHSTLG-01 | 102,12 zł | 0 + 7 w dostawie | on-order |
| Pasek zapasowy do mroźni | SG-RS5X6-BHSTX-01 | 124,64 zł | 0 | unavailable |
| Paski na palec S (10 szt.) | SG-RS5X6-BHFSS-10 | 400,68 zł | 0 | unavailable |
| Paski na palec M (10 szt.) | SG-RS5X6-BHFSM-10 | 400,68 zł | 0 | unavailable |
| Paski na palec L (10 szt.) | SG-RS5X6-BHFSX-10 | 400,68 zł | 0 | unavailable |
| Slim Mount prawy, 1 szt. | SG-RS5X6-HMTRA-01 | 204,06 zł | 3 PL + 37 EU | available |
| Slim Mount prawy, 10 szt. | SG-RS5X6-HMTRA-10 | 2 001,00 zł | 8 EU + 7 | available |
| Slim Mount lewy, 1 szt. | SG-RS5X6-HMTLA-01 | 204,06 zł | 6 EU | available |
| Spust pojedynczy | SG-RS51-TRGSS-03 | 385,12 zł | 374 EU + 767 | available |
| Paski nylonowe (10 szt.) | SG-RS51-STRPN2-10 | 165,02 zł | 0 + 96 w dostawie | on-order |
| Podkładki komfortowe (5 szt.) | SG-RS51-CMPD-05 | 165,02 zł | 0 + 29 w dostawie | on-order |
| Spust podwójny | SG-RS51-TRGDS-01 | 385,12 zł | 0 + 204 w dostawie | on-order |
| Spust podwójny USB-C | SG-RS51-TRGDU-01 | 458,45 zł | 0 + 7 w dostawie | on-order |
| Spust podwójny z wibracją | SG-RS51-TRGDV-01 | 458,45 zł | 0 | unavailable |
| Spust na smycz | SG-RS5X6-LNYD-01 | 385,12 zł | 0 + 81 w dostawie | on-order |
| Zwijacz smyczy | SG-RS51-RLYD1-01 | 385,12 zł | 0 + 34 w dostawie | on-order |

Pominięto SG-RS5X6-HMTLA-10 (API: brak danych z dystrybutora).

Podkategorie (jak mocowania RS2100 i ProGlove): `akcesoria-do-skanerow` + `etui-kabury-skanerow` dla wszystkich kart.

Powiązania: `relatedProducts` = skaner `zebra-rs6100` + sąsiednie wersje (inna ręka, rozmiar, opakowanie, typ spustu). `relatedAccessories`: rama → 6 owijek; BHMT → paski M/L; BHMTX → pasek do mroźni i 3 paski na palec; spust pojedynczy → paski i podkładki; smycz ↔ zwijacz. Opis BHMTX linkuje do baterii do mroźni `zebra-rs6100-btry-rs5x6-6ma-01` (karta z gałęzi skanera).

## 3. Blok „Wymagane”

- SG-RS5X6-HNMT-02: `**Wymagane dla mocowania: owijka na dłoń (jedna z) — sprzedawane osobno**` z 6 owijkami (grupa wyboru: „Owijka na dłoń (jedna z)”).
- Owijki (6 kart): `**Wymagane — sprzedawane osobno**` z ramą SG-RS5X6-HNMT-02 (owijka bez ramy nie trzyma skanera).
- SG-RS5X6-LNYD-01: wymagany zwijacz SG-RS51-RLYD1-01 (PRG: „Requires separate purchase of retractor”).
- SG-RS51-RLYD1-01: wymagany spust na smycz SG-RS5X6-LNYD-01 (przewodnik: „For Use with Lanyard Trigger”).
- Paski, podkładki i spusty zapasowe: bez bloku; zgodne mocowanie lub spust podano w tekście i w specyfikacji („Współpracuje z”).

## 4. Rozbieżności źródeł i decyzje

| Temat | Źródła | Decyzja |
|---|---|---|
| PN ramy i owijek | PRG 07.2026: SG-RS5X6-HNMT-01, SG-WEAR-HNWP**-01; przewodnik 01.2026 i API: -02 | -02 (przewodnik, API) |
| PN zwijacza | PRG: SG-RS5X6-RLYD1-01; przewodnik i API: SG-RS51-RLYD1-01 | SG-RS51-RLYD1-01 |
| Rozmiar BHFSX-10 | przewodnik: „Four-Finger, Large”; tabela PRG: „Extra Large … entire hand”; instrukcja PRG: „Large trigger strap: insert four fingers” | „L (4 palce)” |
| Paski BHMT | przewodnik: BHSTP-01 „Med”, BHSTLG-01 „Lg”; PRG: tylko BHSTP-01 bez rozmiaru | M i L wg przewodnika; nie podano, który rozmiar jest w zestawie z mocowaniem |
| Wibracja | karta: „vibration engine … integrated into the trigger assembly”; przewodnik/PRG: wibracja tylko w TRGDV-01 | wibracja tylko na karcie TRGDV-01; styki ładowania w spuście — na kartach spustów |
| Zgodność | karta: wspólne spusty pojedyncze i podwójne, nowe Enterprise/Back of Hand/Lanyard; przewodnik: wszystkie mocowania i spusty „RS5100/RS6100” | „Zebra RS6100, Zebra RS5100” na wszystkich kartach |
| Rękawice | przewodnik: pojedynczy „may be used with light gloves”, podwójny „not recommended with gloves”; karta: grzbiet dłoni „accommodates gloves”; PRG: BHMTX „fits over heavy freezer gloves” | podano dokładnie tak; dla Enterprise Hand Mount i Slim Mount brak danych — nie podano |
| Położenie spustu | PRG: spust pojedynczy/podwójny na palcu wskazującym, przycisk kciukiem; BHMT: spust na palec wskazujący, obrócony do kciuka; Enterprise: przycisk mocowany w zasięgu kciuka; Slim: „remote finger trigger”, pasek na palec wskazujący | Slim: tylko „spust zintegrowany, palcowy”, bez położenia przycisku |
| Temperatura BHMTX | PRG: mocowanie do −30 °C; przewodnik: bateria do mroźni −30 °C z RS6100, −20 °C z RS5100 | w opisie oba warunki |

## 5. Zdjęcia

Wszystkie PNG 800 × 800, przezroczyste tło (białe tło usunięte od krawędzi; w zdjęciach z pętlami i palcami usunięte też jasne enklawy > 0,15% obrazu). Produkt 62–70% dłuższego boku kadru; zdjęcia na dłoni 84% szerokości, przedramię przy prawej krawędzi (jak RS2100). Narzędzia: scratchpad sesji `rs6100/tools-b/proc.py`.

| Plik | Źródło | Uwagi |
|---|---|---|
| SG-RS5X6-HNMT-02.png | biblioteka mediów Zebry `photography/product/0022/g-rs5x6-hnmt-02-photography-product-accessory.jpg` (4921 px) | wycięta wstawka z samą ramą i spustem (ilustracja pokazuje owijkę i skaner półprzezroczyste) |
| SG-RS5X6-HNMT-02-2.png | `0021/sg-rs5x6-bhmt-01-std-battery-02-photography-product-accessories.jpg` (4480 px) | **plik Zebry ma błędną nazwę**: przedstawia Enterprise Hand Mount (owijka z przeszyciem, przycisk spustu), nie Back of Hand Mount |
| SG-RS5X6-BHMT-01.png | `0015/rs6100-hand-strap-photography-product-back-facing-no-shadow.png` (RGBA) | mocowanie z paskiem Y i spustem, bez skanera |
| SG-RS5X6-BHMT-01-2.png | `0021/sg-rs5x6-hnmt-02-rs6100-ext-battery-02-photography-product-accessories.jpg` (4480 px) | **plik Zebry ma błędną nazwę**: przedstawia Back of Hand Mount (pasek, spust-pierścień), nie Enterprise Hand Mount |
| SG-WEAR-HNWPLL-02.png | `0026/sg-wear-hnwpll-02-…-1x1-3600x3600.png` | lewa L (niebieskie przeszycie); na kartach S/M jako poglądowe |
| SG-WEAR-HNWPRL-02.png | lustro SG-WEAR-HNWPLL-02 | brak napisów na owijce; opis „zdjęcie poglądowe” |
| SG-WEAR-HNWPLM-02.png, SG-WEAR-HNWPRL-02-2.png | miniatury 320 px z biblioteki (`0023/…`), powiększone 1,65–1,7× | widok z zewnątrz |
| SG-RS5X6-HMTRA-01.png | `0026/sg-rs5x6-hmtla-10-…-1x1-3600x3600.png` | **plik Zebry ma błędną nazwę**: na kartonie napis „Right”, na zaczepie „R”, na etykiecie HMTRA — to mocowanie prawe; użyte dla HMTRA-01 i HMTRA-10 |
| SG-RS5X6-HMTLA-01.png | miniatura `0023/sg-rs5x6-hmtla-01-…png` (320 px, 1,7×) | napis „Left”, zaczep „L” |
| SG-RS5X6-BHMTX-01.png, SG-RS51-BHSTP-01.png, SG-RS5X6-BHFSS-10.png, SG-RS5X6-LNYD-01.png | miniatury 320 px z biblioteki, powiększone 1,55–1,78× | większych brak w bibliotece i u PTS (BHMTX u PTS 300 px; BHSTP u PTS — rysunek na dłoni) |
| SG-RS51-BHSTLG-01.png, SG-RS5X6-BHFSM-10.png, SG-RS5X6-BHFSX-10.png | `0026/…-1x1-3600x3600.png` | |
| SG-RS5X6-BHSTX-01.png | PTS Mobile 560 px | to samo ujęcie co miniatura Zebry |
| SG-RS51-TRGSS-03.png | `0015/rs6100-photography-product-single-trigger-facing-right-no-shadow.png` (RGBA) | sam spust |
| SG-RS51-TRGSS-03-2.png | `0015/rs6100-single-trigger-photography-product-front-right-side-facing-no-shadow.png` | skaner ze spustem (skaner sprzedawany osobno) |
| SG-RS51-TRGDS-01.png | `0015/rs6100-photography-product-double-trigger-only-facing-right-no-shadow.png` | bez gniazda USB-C i bez elementu z TRGDV — zgodny z miniaturą TRGDS |
| SG-RS51-TRGDU-01.png, SG-RS51-TRGDV-01.png, SG-RS51-CMPD-05.png, SG-RS51-RLYD1-01.png, SG-RS5X6-LNYD-01-2.png | PTS Mobile 560 px | CMPD-05 nie ma w bibliotece Zebry |
| SG-RS51-STRPN2-10.png | `0019/rs5000x-photography-product-sg-rs51-strpn2-10.jpg` (1920 px) | |

Wspólne pliki: owijki lewe (3 karty) używają `SG-WEAR-HNWPLL-02.png` + `SG-WEAR-HNWPLM-02.png`, prawe — `SG-WEAR-HNWPRL-02.png` + `SG-WEAR-HNWPRL-02-2.png`; HMTRA-10 używa `SG-RS5X6-HMTRA-01.png`. Logo zastępcze nie było potrzebne.

Wymiary zdjęć do `product-image-dims.json` (wszystkie 800 × 800) są w scratchpadzie sesji `rs6100/dims-b.json`; integrator dopisuje je ręcznie.

## 6. Samokontrola z kartą katalogową i dokumentacją

Sprawdzono zdanie po zdaniu: nazwa, title, meta, shortDescription, opis, specyfikacja i opisy zdjęć 26 kart (karta katalogowa EN/PL, przewodnik akcesoriów, PRG, QSG).

- SPRZECZNE: brak po poprawkach. Poprawione w trakcie: „pasek ramy” → „pasek mocujący ramę” (w PRG to pasek owijki); BHSTLG „pasek M dostarczany z mocowaniem” — usunięte (źródła nie mówią, jaki pasek jest w zestawie); BHSTP „oba końce z zatrzaskami” → „dwa ramiona paska” (pasek Y ma trzy końce).
- SPOZA KARTY (z PRG/przewodnika): sposób zakładania i zdejmowania skanera, prowadzenie pasków przez gniazda, czyszczenie owijki i podkładki, wymiana paska nylonowego i podkładki, ponowne uruchomienie po zmianie typu spustu, port USB-C do ładowania i 123Scan, konfiguracje zawierające mocowania (tabela 1 PRG).
- NIEPRECYZYJNE (świadome uproszczenia): „zabezpieczenie typu breakaway” (PRG: „safety breakaway”); „Skaner jest wtedy pod ręką i nie przeszkadza w pracy” (karta: „keeps the scanner handy, yet out of the way”).
- POMINIĘTE: „five interchangeable wearing styles” i „all mounting accessories are interchangeable” (treść dla karty skanera); ochrona przed zarazkami podana tylko na spuście pojedynczym (jedyna część dotykająca skóry).
- Wspólne 6-gramy (`porownaj-opisy.py`, karty RS6100 + RS2100 + ProGlove, kategoria akcesoria): 0 par z udziałem kart RS6100 w description, shortDescription i seoDescription. Dodatkowo porównanie z wszystkimi opisami w `products.ts`: 0 wspólnych 6-gramów.
