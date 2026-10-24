# Skaner noszony Zebra RS2100 — dokumentacja robocza (24.10.2026)

Dokument roboczy: źródła, PN, decyzje, rozbieżności między źródłami, zdjęcia i samokontrola z kartą katalogową. Nie jest treścią dla klientów.

## 1. Źródła

Hierarchia: karta katalogowa → Product Reference Guide / QSG / przewodnik akcesoriów → dystrybutor.

- Karta katalogowa RS2100 EN (stopka 08/11/2025) i PL (stopka 08.11.2025, PDF z 09.2025) — `public/downloads/zebra-rs2100-karta-katalogowa-pl.pdf`. Strony specyfikacji zebra.com EN i PL (ta sama treść).
- Product Reference Guide RS2100 (EN, 09.2026, 282 s.) — `public/downloads/zebra-rs2100-przewodnik-en.pdf`. Użyte rozdziały: Getting Started (zawartość opakowania, tryby pracy, Ship Mode, montaż w Slim Mount), Radio Communications Host Types (HID z iOS/Android/Windows, adapter BT, STB3678), Accessories (tabela akcesoriów, ładowanie), Specifications (stacja 2- i 20-gniazdowa, adapter Bluetooth, zasięgi SE4770).
- Quick Start Guide RS2100 EN (MN-004872-01EN Rev B) i PL (MN-004872-01PL Rev A, 2026/07/06) — `public/downloads/zebra-rs2100-instrukcja-szybkiego-startu-pl.pdf`. Polska terminologia: „uchwyt wąski” (Slim Mount), „tryb wysyłki” (Ship Mode).
- RS2100 Accessories Guide (EN, 01.2026) — `public/downloads/zebra-rs2100-akcesoria.pdf`.
- Strona modelu: https://www.zebra.com/pl/pl/products/mobile-computers/wearable-computers/rs2100.html (zdjęcia 3600 × 2400, do 7 skanerów na hosta).
- Dystrybutor PTS Mobile (ptsmobile.com, 24.10.2026): zdjęcia akcesoriów 525–560 px oraz opis przewodu CBA-U46-S07ZAR. Dane dystrybutora nie trafiły do treści, poza zdjęciami.
- Ceny i stany: `https://www.takma.com.pl/api/stock` (24.10.2026 ok. 19:50, 3 wywołania: 1 PN, 2 PN, 8 PN). `priceFrom` w danych to wartość startowa (cena sprzedaży netto z API); karta pobiera cenę i stan na żywo.

## 2. Karty

| Karta | Slug | PN | Cena netto (API) | Stan (API 24.10) | `availability` |
|---|---|---|---|---|---|
| Zebra RS2100 | zebra-rs2100 | RS21C0-TS00ZWR | 1 765,59 zł | 16 szt. EU + 599 w dostawie | available |
| Stacja 2-gniazdowa | zebra-rs2100-crd-rs2x-2schg-01 | CRD-RS2X-2SCHG-01 | 266,76 zł | 10 szt. EU + 90 | available |
| Stacja 20-gniazdowa | zebra-rs2100-crd-rs2x-20schg-01 | CRD-RS2X-20SCHG-01 | 2 334,48 zł | 1 szt. EU + 13 | available |
| Mocowanie prawe, 1 szt. | zebra-rs2100-sg-rs2x-hmtra-01 | SG-RS2X-HMTRA-01 | 174,10 zł | 14 szt. EU | available |
| Mocowanie prawe, 10 szt. | zebra-rs2100-sg-rs2x-hmtra-10 | SG-RS2X-HMTRA-10 | 1 709,91 zł | 0 | unavailable |
| Mocowanie lewe, 1 szt. | zebra-rs2100-sg-rs2x-hmtla-01 | SG-RS2X-HMTLA-01 | 174,90 zł | 0 | unavailable |
| Mocowanie lewe, 10 szt. | zebra-rs2100-sg-rs2x-hmtla-10 | SG-RS2X-HMTLA-10 | 1 644,14 zł | 1 szt. PL | available |
| Adapter Bluetooth | zebra-rs2100-bt-rs5x6-dngl-01 | BT-RS5X6-DNGL-01 | 617,49 zł | 3 szt. EU + 22 | available |
| Zestaw adaptera z przewodem | zebra-rs2100-kt-rs5x6-btdcbl-01 | KT-RS5X6-BTDCBL-01 | 761,06 zł | 1 szt. EU + 61 | available |
| Przewód USB do adaptera | zebra-rs2100-cba-u46-s07zar | CBA-U46-S07ZAR | 112,95 zł | 22 szt. + 755 | available |

CBA-U46-S07ZAR nie istniał wcześniej w katalogu (sprawdzono PN w `src/data`). Karta opisuje tylko funkcję potwierdzoną przez Zebrę (przewód do adaptera, „Cable” w przewodniku akcesoriów). Długość 2,1 m (7 ft) i prosty przewód USB-A podaje tylko dystrybutor PTS; nie wpisano.

Mocowania: osobne karty dla każdego PN (jak ProGlove), liczba sztuk w nazwie i w specyfikacji („Liczba sztuk w opakowaniu”).

Podkategorie (pętla w `products.ts`, wzór ProGlove): skaner → `skanery-pierscieniowe`; stacje → `akcesoria-do-skanerow` + `stacje-ladowarki-skanerow`; mocowania → `akcesoria-do-skanerow` + `etui-kabury-skanerow`; adapter i zestaw → `akcesoria-do-skanerow`; przewód → `akcesoria-do-skanerow` + `kable-do-skanerow`.

## 3. Blok „Wymagane”

- RS2100: grupy „mocowanie (jedno z)” — 4 PN mocowań; „stacja ładująca (jedna z)” — 2 stacje. Po liście zdanie „Dokup tylko te elementy, których jeszcze nie masz.” (regex wymaga `\n\n`).
- Stacja 2-gniazdowa: CBL-TC5X-USBC2A-01 + PWR-WUA5V12W0EU.
- Stacja 20-gniazdowa: PWR-BGA12V108W0WW + CBL-DC-382A1-01 + 50-16000-220R.
- Adapter Bluetooth: CBA-U46-S07ZAR; zdanie po liście wskazuje zestaw KT.
- Adapter na karcie skanera tylko w akcesoriach i w tekście (opcjonalny).

## 4. Karty współdzielone (zmiany minimalne)

| Karta | Zmiana |
|---|---|
| zebra-tc201-cbl-tc5x-usbc2a-01 | Kompatybilność i FAQ: „Zebra RS2100 przez stację CRD-RS2X-2SCHG-01”; punkt w „Dobór i montaż”; aplikacja „Akcesoria do Zebra RS2100”. |
| zebra-tc22-tc27-pwr-wua5v12w0eu | Kompatybilność; punkt w „Dobór i montaż”; aplikacja. |
| zebra-psu-108w (zebra-zasilacz-108w) | Kompatybilność i FAQ; punkt w „Dobór i montaż” (stacja RS2100 wymaga przewodu CBL-DC-382A1-01, nie 381A1); aplikacja. |
| zebra-mc33-dc-cable-382 | Kompatybilność i FAQ; punkt w „Dobór i montaż”; aplikacja. |
| zebra-tc201-50-16000-220r | Kompatybilność; zdanie o zasilaczu 108 W rozszerzone o stację RS2100; aplikacja. |

Uwaga do karty zasilacza 108 W: jej blok „Wymagane” podaje jako wymagany przewód CBL-DC-381A1-01 bez warunku. Dla stacji RS2100 właściwy jest CBL-DC-382A1-01 (opisano w „Dobór i montaż”). Blok „Wymagane” zostawiono bez zmian — do decyzji, czy zmienić go na grupę wyboru.

## 5. Kategorie i strony

- `skanery-pierscieniowe`: description, seoTitle, seoDescription z marką Zebra / RS2100; wstęp (`longDescription`) bez zmian, bo nie wymienia modeli.
- `akcesoria-do-skanerow`, `stacje-ladowarki-skanerow`, `kable-do-skanerow`, `etui-kabury-skanerow`: opisy uzupełnione o akcesoria RS2100.
- `skanery-kodow-kreskowych-zebra`: jedno zdanie o RS2100 w `longDescription` (strona marki zbiera produkty Zebra automatycznie).
- Filtry: bez zmian w `category-filters.ts`; RS2100 trafia do „Producent: Zebra”, „Rodzaj: Pierścieniowy i noszony”, „1D i 2D”, „1,8 m”, „IP42–IP52”… według nazw specyfikacji.
- `public/llms.txt`: RS2100 w linii podkategorii i na liście produktów.
- `ProductCard.tsx`: logo Zebra jako zastępcze zdjęcie kafla dla akcesoriów `zebra-rs2100-*` bez zdjęcia.

## 6. Rozbieżności źródeł i decyzje

| Temat | Źródła | Decyzja |
|---|---|---|
| Zasięg Code 128 15 mil (near) | karta: 6,1 cm; PRG: 7,1 cm | 6,1 cm (karta) |
| Zasięg Code 39 20 mil (near) | karta: 4,1 cm; PRG: 6,6 cm | 4,1 cm (karta) |
| Zasięg Data Matrix 10 mil (far), PDF417 6,67 mil (near) | karta: 27,8 / 6,3 cm; PRG: 27,9 / 6,4 cm | wartości z karty |
| Zasilacz stacji 2-gniazdowej | PRG: PWR-WUA5V12W0US; przewodnik akcesoriów: zasilacz krajowy (EU: PWR-WUA5V12W0EU) | PWR-WUA5V12W0EU (przewodnik, Polska) |
| Czas pracy na baterii | dystrybutorzy: „18 h / 17 000 skanów”; karta i PRG: brak | nie podano |
| „Najmniejszy na rynku” | karta (marketing) | nie użyto; podano 31 g i 14,6 mm |
| Spust | PRG: spust na rysunku mocowania (Slim Mount), brak na rysunku samego skanera | „Spust w mocowaniu” |
| Rękawice | PRG: „bare hands or light gloves only” | „gołą dłonią lub w cienkich rękawiczkach” |
| Napięcie adaptera | PRG: „5 V DV, 200 mA” (literówka) | 5 V DC, 200 mA |
| Typ QSG | okładka QSG: „Ring Scanner” | w treści „skaner noszony” (karta katalogowa: wearable scanner) |

Instrukcja RS2100 po polsku na serwis-zebry.pl nie istnieje (adres w formacie `/instrukcje/zebra-rs2100/instrukcja-po-polsku` zwraca 404 według briefu). Link nie został dodany; w plikach do pobrania jest QSG PL od Zebry.

## 7. Zdjęcia

Wszystkie PNG 800 × 800, przezroczyste tło (białe tło usunięte flood fillem od krawędzi, miękka krawędź; w zdjęciach przewodów usunięto też białe tło wewnątrz pętli).

| Plik | Źródło | Udział w kadrze |
|---|---|---|
| RS21C0-TS00ZWR.png | zebra.com, front-facing-no-shadow (3600 px) | 70% szer. (kafel: dłuższy bok 47% pola wobec 57% MARK 2 i 50% M3 WR15; przy 62% było 41%) |
| RS21C0-TS00ZWR-2.png | zebra.com, left-side-hand-facing-down | 80% szer., przedramię przy prawej krawędzi |
| RS21C0-TS00ZWR-3.png | zebra.com, right-side-hand-cropped | 85% szer., przedramię przy lewej krawędzi |
| RS21C0-TS00ZWR-4.png | zebra.com, top-hand-facing-cropped | 84% wys., nadgarstek przy dolnej krawędzi |
| RS21C0-TS00ZWR-5.png | zebra.com, hand-left-side-view-cropped | 84% wys., dół kadru |
| SG-RS2X-HMTRA-01.png | biblioteka mediów Zebry, sg-rs2x-hmtra-10-photography-product-accessories-1x1 (3600 px) | 66% szer. |
| SG-RS2X-HMTLA-01.png | lustrzane odbicie SG-RS2X-HMTRA-01.png z wyretuszowaną naklejką | 66% szer. |
| SG-RS2X-HMTRA-01-2.png | zebra.com, hand-palm-facing (prawa dłoń) | 84% wys., dół kadru |
| CRD-RS2X-2SCHG-01.png | PTS Mobile (560 px, render ze skanerami w gniazdach) | 68% szer. |
| BT-RS5X6-DNGL-01.png | PTS Mobile (525 px, zdjęcie) | 62% wys. |
| KT-RS5X6-BTDCBL-01.png | PTS Mobile (560 px) | 68% |
| CBA-U46-S07ZAR.png | biblioteka mediów Zebry, CBA-U46-S07ZAR-photography-product-accessory-connector-cable (2000 px), cień usunięty | 66% szer. |
| CRD-RS2X-20SCHG-01.png | biblioteka mediów Zebry, crd-rs2x-20schg-01-photography-product-accessories (320 px, powiększone 1,7×) | 68% szer. |

- Wszystkie zdjęcia z dłonią na zebra.com przedstawiają prawą dłoń. Zdjęcie lewego mocowania u PTS to lustrzane odbicie prawego z odwróconym napisem ZEBRA — nie użyto.
- Lewe mocowania (SG-RS2X-HMTLA-01 i -10): `SG-RS2X-HMTLA-01.png` to lustrzane odbicie zdjęcia prawego mocowania z usuniętą (zretuszowaną) naklejką w gnieździe skanera (napisy ZEBRA, RS2100 MOUNT, strzałki). Opis zdjęcia: „(zdjęcie poglądowe)”, jak przy lewych mocowaniach ProGlove.
- Biblioteka mediów Zebry (partner, 24.10.2026): stacje 2- i 20-gniazdowa mają tylko wersje 320 px; adaptera BT-RS5X6-DNGL-01 i zestawu KT nie ma. Oficjalne zdjęcie lewego mocowania (sg-rs2x-hmtla-10) to także lustrzane odbicie z odwróconym napisem ZEBRA, więc zostaje wersja z retuszem. Zasoby z biblioteki są dostępne pod tą samą ścieżką `/content/dam/zebra_dam/...` na www.zebra.com.
- Stacja 20-gniazdowa: jedyne zdjęcie ma 320 px; powiększone 1,7× jest miękkie, ale czytelne. Wymiana, gdy Zebra opublikuje większe.
- Zdjęcia PTS (stacja 2-gniazdowa, adapter, zestaw) mają 525–560 px; większych nie ma w bibliotece mediów Zebry.
- Mapę `product-image-dims.json` uzupełniono ręcznie.
- Zrzuty 1440 i 390 px (RS2100, ProGlove MARK 2, M3 WR15, podkategoria, stacje, adapter, mocowanie, ProGlove C006): scratchpad sesji `rs2100/shots/`, pomiary w `pomiar.json`.

## 8. Samokontrola z kartą katalogową

Sprawdzono zdanie po zdaniu: title, meta, shortDescription, opis, specyfikację, FAQ i opisy zdjęć skanera oraz opisy 9 akcesoriów (karta katalogowa, PRG, QSG, przewodnik akcesoriów).

- SPRZECZNE: brak po poprawkach.
- SPOZA KARTY (z PRG/QSG): Ship Mode, Bluetooth Pairing Utility, STB3678, HID z iOS/Windows, czas ładowania 0–90% < 2,5 h, specyfikacje stacji i adaptera, sposób zakładania mocowania.
- NIEPRECYZYJNE (świadome uproszczenia): „Grubych rękawic roboczych nie przewidziano” (z „light gloves only”); „dioda zasilania pokazuje, że stacja jest pod napięciem” (rysunek PRG: „Power LED”).
- POMINIĘTE: wibracje i ESD są w specyfikacji, nie w opisie; Device Tracker tylko w specyfikacji.
- Wspólne 6-gramy (`porownaj-opisy.py`): akcesoria RS2100 — 0 par w description, shortDescription, seoDescription, faq; RS2100 vs ProGlove i M3 — 0 par.

## 9. Druga kontrola z kartą katalogową i poprawki (24.10.2026, wieczór)

Ponowne porównanie zdanie po zdaniu z kartą katalogową (EN/PL), PRG i QSG. Poprawione:

| Miejsce | Było | Jest | Źródło |
|---|---|---|---|
| Opis RS2100, zasięg | zasięg UPC-A i QR bez warunku | „typowy zasięg… zależy od jakości wydruku, kontrastu i oświetlenia” | karta, przypis 2 do „Decode Ranges (Typical Working Ranges)” |
| Opis RS2100, NFC | „Do parowania wystarczy zbliżenie NFC” | NFC tylko z obsługiwanymi urządzeniami, inaczej Scan-to-Connect | karta („supported NFC-enabled devices”), QSG („Not all Zebra devices support NFC”) |
| Opis RS2100, upadki | 1,8 m bez warunku | „w całym zakresie temperatur pracy” | karta, Drop Specification |
| FAQ, DataWedge | „ustawienia skanera i format danych określa DataWedge” | DataWedge przekazuje kody do aplikacji bez programowania | strona modelu (Mobility DNA) |
| FAQ, HID | HID bez warunku | najpierw ustawienia fabryczne i kod HID z PRG | PRG, „HID Setup” |
| FAQ, rękawice | „chwyt towaru nie zmienia się” | brak paska w poprzek dłoni → pewniejszy chwyt | karta („bare palm gripping”) |
| Mocowania, spust | „obsługiwany palcem wskazującym”, „pod palcem” | spust na pasku palca wskazującego, od strony kciuka | QSG, rys. 2 (Slim Mount Mounted Side View) |
| Stacja 20-gn. | „Służy tylko do ładowania” / „Funkcja: Tylko ładowanie” | usunięte | „no communication” PRG podaje tylko dla stacji 2-gniazdowej |

- Zasilacz 108 W (`zebra-psu-108w`): blok „Wymagane” dzieli przewód DC według stacji — CBL-DC-381A1-01 dla stacji wielogniazdowych terminali i ładowarek baterii, CBL-DC-382A1-01 dla stacji 20-gniazdowej RS2100. Przewód sieciowy 50-16000-220R wymagany zawsze.

