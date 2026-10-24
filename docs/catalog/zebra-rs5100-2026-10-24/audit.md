# Zebra RS5100 — skaner, stacje 4- i 20-gniazdowe, zgodność akcesoriów (24.10.2026)

Dokument roboczy: źródła, PN, decyzje, rozbieżności między źródłami, zdjęcia i samokontrola z kartą katalogową. Nie jest treścią dla klientów. Wspólne akcesoria RS5100 / RS6100 opisano w `docs/catalog/zebra-rs6100-2026-10-24/`.

## 1. Źródła

| Źródło | Data | Do czego użyte |
|---|---|---|
| Karta katalogowa RS5100 EN (`rs5100-spec-sheet-en-us.pdf`) | 15.05.2026 | Specyfikacja, opis, zasięgi, akcesoria, gwarancja (źródło nadrzędne) |
| Karta katalogowa RS5100 PL (`rs5100-spec-sheet-pl-pl.pdf`) | 15.05.2026 (HTML) | Polska terminologia; skopiowana do `public/downloads/zebra-rs5100-karta-katalogowa-pl.pdf` |
| Product Reference Guide RS5100 EN (`rs5100-prg-en.pdf`, 414 s.) | 12.2024 | Zawartość opakowania, akcesoria (tabela 4), ładowanie (tabela 5), specyfikacje stacji (tabele 21 i 23), zasięgi (tabela 26), HID |
| Quick Start Guide RS5100 EN (MN-003559-06EN Rev. A) | 2026 | Parowanie NFC / Bluetooth Pairing Utility / adapter, ładowanie, czas ładowania |
| Release notes firmware CAAEXS00-000-R02 (`fw-R02.txt`) | 20.04.2023 | Lista konfiguracji („Device Compatibility”): silnik, spust, bateria |
| Przewodnik akcesoriów RS5100/RS6100 EN | 01.2026 | PN akcesoriów, elementy wymagane, zgodność RS5100/RS6100, rękawice, bateria do mroźni |
| Strona modelu PL (zebra.com/pl/.../rs5100.html) | 24.10.2026 | `sameAs` |
| `/api/stock` (wyniki z 24.10.2026) | 24.10.2026 | Ceny sprzedaży i dostępność |
| PTS Mobile (ptsmobile.com) | 24.10.2026 | Zdjęcie stacji 20-gniazdowej |

serwis-zebry.pl: `/instrukcje/zebra-rs5100/instrukcja-po-polsku` → 404 (24.10.2026), link pominięty.

Pliki do pobrania na karcie skanera: karta PL (401 KB), QSG EN (3,3 MB), przewodnik akcesoriów (istniejący plik RS6100, 5,0 MB), PRG EN (9,2 MB = 9 641 185 B; brief podawał 9,6 MB w jednostkach dziesiętnych).

## 2. Konfiguracje skanera (warianty karty `zebra-rs5100`)

Sprzęt RS51C0 = Bluetooth 5.2 (karta 05.2026). RS51B0 (Bluetooth 4.0) i pozostałe konfiguracje RS51C0 nie mają ceny w API — pominięte (brief).

| PN | Silnik | Mocowanie | Bateria | Opis w `fw-R02.txt` | Dostępność 24.10 |
|---|---|---|---|---|---|
| RS51C0-LBSNWR | SE4710 | Pojedynczy spust | Standardowa 480 mAh | 4710 Worldwide | available (20 szt. DE) |
| RS51C0-LESNWR | SE4710 | Pojedynczy spust | Rozszerzona 735 mAh | 4710 Extended battery, Single trigger | available (7 szt.) |
| RS51C0-TBSNWR | SE4770 | Pojedynczy spust | Standardowa 480 mAh | 4770 Worldwide | available (467 szt.) |
| RS51C0-TESNWR | SE4770 | Pojedynczy spust | Rozszerzona 735 mAh | 4770 Extended battery | on-order (0 na stanie, 469 w dostawie) |
| RS51C0-TBDNWR | SE4770 | Podwójny spust | Standardowa 480 mAh | 4770 Double trigger | available (127 szt.) |
| RS51C0-TEDNWR | SE4770 | Podwójny spust | Rozszerzona 735 mAh | 4770 Extended battery, Double trigger | on-order (0 na stanie, 997 w dostawie) |
| RS51C0-TBBHWR | SE4770 | Mocowanie na grzbiet dłoni | Standardowa 480 mAh | 4770 Back-of-Hand | available (4 szt.) |

- **TESNWR — typ spustu:** opis w release notes nie podaje spustu. Zdjęcie konfiguracji z biblioteki mediów Zebry `photography/product/0018/rs51c0-tesnwr-photography-product-accessories.jpg` pokazuje pojedynczy spust z nylonowym paskiem na palec (tak samo jak TBSNWR i LBSNWR). Kod „S” w PN zgodny z LESNWR („Single trigger”). Atrybut: pojedynczy spust.
- **LBSNWR / TBSNWR:** release notes podają tylko silnik („Worldwide”); pojedynczy spust potwierdzają zdjęcia `0018/rs51c0-lbsnwr-…` i `0018/rs51c0-tbsnwr-…`.
- Litera po `RS51C0-`: L = SE4710, T = SE4770 (release notes). Informacja w „Dobór i montaż”.
- Pominięte: RS51C0-TNNMWR (platforma bez spustu i baterii, 0 szt.), RS51C0-LBBHWR / -LBDNWR / -LBLNWR / -LEDNWR / -TBLNWR (brak w API), wszystkie RS51B0.
- `priceFrom` karty = 3200,65 zł (LBSNWR).

## 3. Karty

| Slug | PN | Podkategorie | Dostępność | Cena startowa |
|---|---|---|---|---|
| zebra-rs5100 | 7 wariantów (tabela wyżej) | skanery-pierscieniowe | available | 3200,65 |
| zebra-rs5100-crd-rs51-4schg-01 | CRD-RS51-4SCHG-01 | akcesoria-do-skanerow, stacje-ladowarki-skanerow | available (10 PL + 74 DE) | 1220,23 |
| zebra-rs5100-crd-rs51-20schg-01 | CRD-RS51-20SCHG-01 | jw. | on-order (0 na stanie, 146 w dostawie) | 5287,78 |

Plik: `src/data/zebra-rs5100-products.ts` (eksporty `zebraRs5100Products`, `zebraRs5100Accessories`), integracja w `products.ts` jak RS6100 (import, pętla podkategorii, `rawProductList`).

Nieoferowane: CRD-4WT6-4RS51-01 i CRD-4TC5-4RS51-01 (stacje 5-gniazdowe WT6000/TC5x + RS5100 — brak w API), SG-RS51-LNYD-01 i SG-RS51-TRGSS-02 (starsze PN, brak w API; w sklepie są SG-RS5X6-LNYD-01 i SG-RS51-TRGSS-03).

## 4. Decyzje

- **Atrybuty wariantów:** „Silnik”, „Mocowanie”, „Bateria”, każdy z dymkiem pod RS5100 (SE4710: punkt LED, 42° × 28°; SE4770: krzyż laserowy, 48° × 30°; temperatury i czas pracy wg baterii).
- **Dymek SE4770 — zasięg:** brief proponował „dalszy zasięg”. Karta 05.2026 pokazuje SE4770 z większym zasięgiem tylko dla części kodów (Code 39 20 mil: 91,7 vs 76,2 cm; Code 128 5 mil, Data Matrix 10 mil), ale z mniejszym dla UPC-A 100% (63,2 vs 66,0 cm) i PDF417 5 mil (20,1 vs 21,3 cm). Karta porównuje SE4770 ze starszym RS507X, nie z SE4710. Dlatego dymek mówi „dla części kodów sięga dalej, np. Code 39 20 mil do 91,7 cm (SE4710: do 76,2 cm)”.
- **Blok „Wymagane dla skanera: ładowanie (jedno z)”:** stacja 2-gniazdowa, zestaw KT, stacja 4- i 20-gniazdowa RS5100. Stacje RS6100 (CRD-RS61-…) nie pasują do RS5100 — w FAQ RS5100 i w opisach nowych stacji; FAQ RS6100 już to mówi (dodany link do karty RS5100).
- **Stacja 20-gniazdowa — zasilanie:** PWR-BGA12V108W0WW + CBL-DC-382A1-01 + 50-16000-220R, opcjonalnie BRKT-SCRD-SMRK-01 (brief; zob. rozbieżność 1).
- **Stacja 20-gniazdowa — specyfikacja:** z PRG RS5100, tabela 23 (zatytułowana błędnie „20-Slot Battery Charger”; wymiary i masa odpowiadają stacji na skanery). Pominięto „Power Consumption 50 watts” (sprzeczne z zasilaczem 108 W) i „Charging Temperature 0–40 °C” (sprzeczne z ładowaniem baterii 5–40 °C) — tak jak przy RS6100. ESD wg PRG RS5100: ±15 kV / ±8 kV (PRG RS6100 dla stacji RS6100 podaje ±20 / ±10 kV).
- **Oświetlenie SE4770:** karta podaje „1 Hyper Red 660 nm LED or 1 Warm-White LED”. Białe oświetlenie mają tylko wersje na Indie i Koreę (WESNIK / WBSNIK w release notes), więc w specyfikacji jest jedna dioda Hyper Red 660 nm.
- **Bateria do mroźni BTRY-RS5X6-6MA-01:** z RS5100 −20–50 °C (przewodnik akcesoriów). Tylko fakt w FAQ, nie konfiguracja; nie ma jej w `relatedAccessories` RS5100 (lista z briefu).
- **Spust montowany na górze (top-mounted):** jest w karcie, ale nie ma go w ofercie — nie występuje na karcie.
- **`relatedAccessories`:** lista z briefu (ładowanie, baterie standardowa i rozszerzona, ładowarki 8/40, spusty TRGSS-03 / TRGDS / TRGDU / TRGDV, mocowania BHMT / HNMT-02 / HMTRA-01 / LNYD, adapter BT). Adapter przewodowy CBL-RS5X6-ADPWT-01 (przewodnik akcesoriów: „RS5100/RS6100 Corded Adapter for WT6x”) nie był na liście briefu i nie został dodany — do decyzji.
- **`relatedProducts` RS5100:** RS6100, M3 WR15, M3 WR10, RS2100.
- **Zdania o RS6100 w opisie:** opis RS5100 nie porównuje modeli; zgodność akcesoriów jest w FAQ.

## 5. Rozbieżności źródeł

1. Stacja 20-gniazdowa RS5100: PRG RS5100 (12.2024, tabela 4) — zasilacz PWR-BGA12V50W0WW i przewód CBL-DC-388A1-01 (błąd kopiowania wiersza stacji 4-gniazdowej); przewodnik akcesoriów (01.2026) — zasilacz PWR-BGA12V108W0WW i przewód CBL-DC-381A1-01; PRG RS6100 (07.2026) dla analogicznej stacji RS6100 — CBL-DC-382A1-01. Zastosowano 108 W + 382A1 (brief).
2. Karta PL podaje wymiary „6,78 × 2,79 × 2,11 cm” obok „61 × 28 × 21 mm”; karta EN i PRG — 61 × 28 × 21 mm. Zastosowano 61 × 28 × 21 mm.
3. Strona modelu PL: „waga nieco ponad 50 gramów”; karta EN/PL i PRG: 70 g. Zastosowano 70 g.
4. PRG (12.2024) podaje Bluetooth 4.0 i tylko temperaturę z baterią rozszerzoną (−20–50 °C); karta 05.2026 — Bluetooth 4.0 dla RS51B0 i 5.2 dla RS51C0, 0–50 °C z baterią standardową. Zastosowano kartę.
5. PRG nazywa silnik „SE4770”, karta „SE4770/SR560”. W specyfikacji „SE4770/SR560”, w atrybucie i tekstach „SE4770”.
6. PRG, tabela 26: dopisek „Field of view limited” przy Code 39 20 mil i UPC-A 100% w kolumnie SE4710 (bliska odległość). Na karcie: „dla UPC-A 100% i Code 39 20 mil najmniejszą odległość ogranicza pole widzenia” w wierszu SE4710.
7. PRG: stacja 2-gniazdowa wymaga PWR-WUA5V12W0US; przewodnik — zasilacz zależny od kraju. Bez zmian (karta stacji ma PWR-WUA5V12W0EU, decyzja z RS6100).
8. QSG w sekcji „Charging” podaje nagłówek „RS6100 (battery in device)” przy stacjach RS5100 — błąd redakcyjny QSG, bez wpływu na treść.

## 6. Karty współdzielone i kategorie

- Zasilacz 50 W (`zebra-psu-50w`): sekcja „Zasilacz 50 W do akcesoriów skanerów RS5100 i RS6100”, zgodność, zastosowania, FAQ — stacja 4-gniazdowa RS5100.
- Przewód DC 388A1 (`zebra-cable-dc-388`): opis, zgodność, zastosowania — stacja 4-gniazdowa RS5100.
- Zasilacz 108 W (`zebra-psu-108w`): nagłówek grupy przewodu 382A1 „Wymagane dla stacji 20-gniazdowej RS2100, RS5100 lub RS6100 albo ładowarki 40 baterii” (render: „Jeśli używasz stacji 20-gniazdowej RS2100, RS5100 lub RS6100 albo ładowarki 40 baterii, potrzebujesz tego elementu.”), „Dobór i montaż”, zgodność, zastosowania, FAQ.
- Przewód DC 382A1 (`zebra-mc33-dc-cable-382`): opis, zgodność, zastosowania, FAQ — stacja 20-gniazdowa RS5100.
- Przewód 220R, uchwyt BRKT-SCRD-SMRK-01: opisy, zgodność, FAQ.
- Przewód 381A1: bez zmian (RS5100 nie używa 381A1).
- Karty z `zebra-rs6100-products.ts` (stacja 2-gn., zestaw KT, ładowarki 8/40, trzy baterie, adapter przewodowy) i wszystkie 26 kart z `zebra-rs6100-mounts.ts`: `relatedProducts` + `zebra-rs5100`; pierwsze wystąpienie „RS5100” w opisie poza istniejącym linkiem → link do `/produkt/zebra-rs5100`. Baterie standardowa i rozszerzona: wiersz „Temperatura pracy z RS5100” (0–50 °C, −20–50 °C; karta 05.2026).
- Karta RS6100: link do RS5100 w FAQ o akcesoriach RS5100, `relatedProducts` + RS5100. Karta RS2100 oraz adapter BT, zestaw KT i przewód CBA: `relatedProducts` + RS5100 (opisy już wymieniały RS5100).
- Podkategorie: skanery pierścieniowe (seoDescription), stacje i ładowarki (opis, seoDescription, longDescription); strona skanerów Zebra (longDescription); `public/llms.txt`.

## 7. Zdjęcia

PNG 800 × 800, przezroczyste tło. Skaner: produkt 66% dłuższego boku (jak RS6100: 528 px).

| Plik | Źródło | Uwagi |
|---|---|---|
| RS51C0-LBSNWR.png (kafel) | Biblioteka Zebry `photography/product/0005/rs5100-photography-product-render-single-trigger-front-facing-left.png` (4500 × 2531, przezroczystość) | pojedynczy spust, widok z przodu |
| RS51C0-LBSNWR-2.png | `0005/rs5100-…-render-single-trigger-back-facing-right.png` | widok z tyłu, diody RGB, pasek z klamrą |
| RS51C0-LBSNWR-3.png | `0005/rs5100-…-render-double-trigger-front-facing-right.png` | podwójny spust |
| RS51C0-LBSNWR-4.png | `0018/rs51c0-tbsnwr-photography-product-accessories.jpg` (4144 px, białe tło usunięte) | zdjęcie wersji TBSNWR |
| CRD-RS51-4SCHG-01.png | `0005/rs5100-…-render-single-bay-4-slot-ring-charger-facing-left.png` (4500 × 2531; półprzezroczysty cień usunięty) | stacja na skanery (3 skanery w gniazdach), nie ładowarka baterii |
| CRD-RS51-20SCHG-01.png | PTS Mobile `wearables/hardware/zebra/rs5100/crd-rs51-20schg-01-lg.jpg` (560 px, bez powiększania) | biblioteka Zebry ma tylko 332 × 203 px |

- `0005/rs5100-…-render-strap-front-facing.png` przedstawia sam pasek na palec, nie mocowanie na grzbiet dłoni — nie użyto. Zdjęcia RS5100 w mocowaniu na grzbiet dłoni (`0018/rs51c0-tbbhwr-…`, `-lbbhwr-…`) zwracają 404; miniatura `0014/SG-RS51-BHMT-01` (320 px) pokazuje samo mocowanie bez skanera — w galerii brak zdjęcia wersji TBBHWR.
- Rendery Zebry mają spust pomarańczowy, zdjęcie produktu — żółty (kolor wydruku/renderu, ten sam element).
- `product-image-dims.json`: 6 wpisów po `CBL-RS5X6-ADPWT-01.png`, edycja ręczna.

## 8. Samokontrola z kartą katalogową (05.2026) i PRG

Sprawdzono zdanie po zdaniu: tytuł, meta, krótki opis, opis, specyfikację, dymki, FAQ, opisy zdjęć, karty stacji i zmienione karty współdzielone.

| Miejsce | Wynik | Uwagi |
|---|---|---|
| 61 × 28 × 21 mm, 70 g, niski profil i ciasne miejsca | zgodne | karta |
| Bluetooth 5.2 (RS51C0), klasa 1 i 2, BLE, SPP / HID / SDAP | zgodne | karta |
| SE4710: czerwone oświetlenie, pomarańczowy punkt LED 610 nm, 42° × 28° | zgodne | karta, QSG |
| SE4770: migawka globalna, krzyż laserowy 655 nm, 48° × 30° | zgodne | karta |
| Odczyt kodów uszkodzonych, brudnych, słabo wydrukowanych (PRZM) | zgodne | karta |
| Tabele zasięgów SE4710 i SE4770 | zgodne | karta; dopisek o polu widzenia z PRG |
| Bateria standardowa: ponad pełna zmiana, 12 h, 14 400 skanów | zgodne | karta |
| Bateria rozszerzona: dłuższe zmiany, chłód, −20–50 °C | zgodne | karta |
| Standardowa 0–50 °C; przechowywanie −40–60 / −40–70 °C | zgodne | karta |
| Spust na miliony naciśnięć, styki ładowania w zespole spustu, wymiana na miejscu | zgodne | karta |
| IP65, upadki 1,8 m na beton, 1000 przewrotów 0,5 m, drgania, ESD | zgodne | karta |
| NFC z WT6300 / TC52, Bluetooth Pairing Utility, adapter BT do 7 skanerów | zgodne | karta, QSG, przewodnik akcesoriów |
| HID: Clean Boot, kod HID z PRG, ponowne włożenie baterii, nazwa RS5100 z nr seryjnym | zgodne | PRG |
| Ładowanie 0–90% < 2,5 h, 5–10 °C < 5 h, ładowanie 5–40 °C | zgodne | QSG |
| Stacje tylko do ładowania, bez komunikacji | zgodne | QSG, PRG tabela 5 |
| Rękawice: pojedynczy — lekkie; podwójny — niezalecany; grzbiet dłoni — regulacja | zgodne | przewodnik akcesoriów, karta |
| Zawartość opakowania (skaner, bateria, Regulatory Guide, śruba spustu) | zgodne | PRG „Unpacking” |
| Zastosowania (magazyn, logistyka, produkcja, handel, serwis terenowy) | zgodne | karta „Markets and Applications” |
| Gwarancja 12 miesięcy, OneCare Essential i Select | zgodne | karta |
| Stacja 4-gn.: 433 g, 12 V DC 50 W, 5–40 °C, ładowanie 10–40 °C, ESD, upadek 75 cm | zgodne | PRG tabela 21 |
| Stacja 20-gn.: 523 × 221 × 131 mm, 2660 g, 0–50 °C, 100 skanerów = 5 stacji | zgodne | PRG tabela 23, karta |
| Typ spustu TESNWR | zgodne | zdjęcie konfiguracji Zebry (pkt 2) |
| Spust montowany na górze | POMINIĘTE | nie ma w ofercie |
| Zasilacz 108 W i przewód 382A1 dla stacji 20-gn. | SPOZA KARTY | brief (rozbieżność 1) |

Kontrola unikalności (`porownaj-opisy.py`, 6-gramy; pola description, shortDescription, seoDescription, faq): karty RS5100 kontra RS6100 (skaner, akcesoria, mocowania), RS2100, ProGlove i M3 WR10 / WR15 — 0 par z udziałem kart RS5100.
