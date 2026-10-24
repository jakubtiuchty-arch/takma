# Zebra RS6100 — skaner, ładowanie, baterie, zasilanie (24.10.2026)

Dokument roboczy: źródła, PN, decyzje, rozbieżności między źródłami, zdjęcia i samokontrola z kartą katalogową. Nie jest treścią dla klientów. Mocowania, spusty i paski opisuje osobna gałąź (plik `src/data/zebra-rs6100-mounts.ts`).

## 1. Źródła

| Źródło | Data | Do czego użyte |
|---|---|---|
| Karta katalogowa RS6100 EN (`rs6100-spec-sheet-en-us.pdf`) | 12.08.2022 | Specyfikacja, opis, zasięgi, gwarancja |
| Karta katalogowa RS6100 PL (`rs6100-spec-sheet-pl-pl.pdf`) | 2023 (stopka 12/08/2022 HTML) | Polska terminologia; skopiowana do `public/downloads/zebra-rs6100-karta-katalogowa-pl.pdf` |
| Product Reference Guide RS6100 EN (`rs6100-prg-en.pdf`, 329 s.) | 07.2026 | Konfiguracje (tabela 1), zawartość opakowania, baterie, ładowanie, specyfikacje stacji i ładowarek, adapter przewodowy, HID |
| Quick Start Guide RS6100 EN (MN-004625-02EN Rev A) | 08.11.2023 | Parowanie NFC / Bluetooth Pairing Utility / adapter, ładowanie |
| Przewodnik akcesoriów RS5100/RS6100 EN | 01.2026 | PN akcesoriów, elementy wymagane, temperatury baterii, adapter przewodowy, rękawice |
| Strona modelu PL (zebra.com/pl/.../rs6100.html) | 24.10.2026 | `sameAs` |
| `/api/stock` (wyniki z 24.10.2026, drugie wywołanie) | 24.10.2026 | Ceny sprzedaży i dostępność |
| Levata (levata.com), PTS Mobile (ptsmobile.com) | 24.10.2026 | Zdjęcia akcesoriów; Levata — zawartość zestawu KT (tylko w audycie) |

serwis-zebry.pl: `/instrukcje/zebra-rs6100/instrukcja-po-polsku` → 404 (24.10.2026), link pominięty.

PRG ma 17,9 MB. W repozytorium są już PDF-y tej wielkości (np. `datasheet-cl-s703iii-pl.pdf`, 17,6 MB), więc PRG dołączono do plików do pobrania.

## 2. Konfiguracje skanera (warianty karty `zebra-rs6100`)

Wszystkie z imagerem SE55 (PRG, tabela 1, przypis).

| PN | Mocowanie (atrybut) | Bateria | Dostępność 24.10 |
|---|---|---|---|
| RS61B0-KBSSZWR | Pojedynczy spust | Standardowa 480 mAh | available |
| RS61B0-KESSXWR | Pojedynczy spust | Rozszerzona 735 mAh | available |
| RS61B0-KBDSZWR | Podwójny spust | Standardowa 480 mAh | available |
| RS61B0-KEDSXWR | Podwójny spust | Rozszerzona 735 mAh | unavailable (0 szt.) |
| RS61B0-KBBHZWR | Mocowanie na grzbiet dłoni | Standardowa 480 mAh | available |
| RS61B0-KBENZWR | Enterprise Hand Mount | Standardowa 480 mAh | available |
| RS61B0-KEENXWR | Enterprise Hand Mount | Rozszerzona 735 mAh | on-order (0 na stanie, 4 w dostawie) |
| RS61B0-KFSSYWR | — (nie podano) | Do mroźni 660 mAh | unavailable (0 szt.) |

- RS61B0-KFSSYWR: tabela PRG nie zaznacza typu spustu, a dystrybutorzy (PTS, Levata) nie mają tej karty (404). Kod „SS” w PN sugeruje pojedynczy spust, ale to wniosek, nie fakt ze źródła — atrybut „Mocowanie” pominięty.
- RS61B0-KNNTZWR pominięty (brak w dokumentacji Zebry), zgodnie z briefem.
- Enterprise Hand Mount w konfiguracji = rama ze spustem; owijkę kupuje się osobno (PRG, przypis do tabeli 1; przewodnik akcesoriów).
- `priceFrom` karty = 3661,99 zł (KBSSZWR i KBDSZWR).

## 3. Karty akcesoriów (`zebraRs6100Accessories`)

| Slug | PN | Podkategorie | Dostępność |
|---|---|---|---|
| zebra-rs6100-crd-rs5x6-2schg-01 | CRD-RS5X6-2SCHG-01 | akcesoria-do-skanerow, stacje-ladowarki-skanerow | available |
| zebra-rs6100-kt-rs5x6-2scpwr-01 | KT-RS5X6-2SCPWR-01 | jw. | available |
| zebra-rs6100-crd-rs61-4schg-01 | CRD-RS61-4SCHG-01 | jw. | available |
| zebra-rs6100-crd-rs61-20schg-01 | CRD-RS61-20SCHG-01 | jw. | available |
| zebra-rs6100-sac-rs51-8schg-01 | SAC-RS51-8SCHG-01 | jw. | available |
| zebra-rs6100-sac-rs51-40schg-01 | SAC-RS51-40SCHG-01 | jw. | available |
| zebra-rs6100-btry-rs51-4ma-01 | BTRY-RS51-4MA-01 | akcesoria-do-skanerow, baterie-do-skanerow | available |
| zebra-rs6100-btry-rs51-7ma-01 | BTRY-RS51-7MA-01 | jw. | on-order (0 na stanie, 965 w dostawie) |
| zebra-rs6100-btry-rs5x6-6ma-01 | BTRY-RS5X6-6MA-01 | jw. | available |
| zebra-rs6100-cbl-rs5x6-adpwt-01 | CBL-RS5X6-ADPWT-01 | akcesoria-do-skanerow, kable-do-skanerow | available |

Pominięte (brief): SHIM-CRD-RS5X62B-01 i SG-RS5X6-HMTLA-10 (brak w API), BTRY-RS51-7MA-02 (Indie/Korea), akcesoria tylko do RS5100. Podkładka SHIM nie jest wymieniana jako element do kupienia.

## 4. Decyzje

- **Temperatury pracy (rozstrzygnięcie briefu):** standardowa 0–50 °C; rozszerzona −20–50 °C (przewodnik akcesoriów 2026, PRG 2026); do mroźni −30–50 °C z RS6100; adapter przewodowy do WT6x — praca w mroźni (−20 °C i −30 °C).
- **Blok „Wymagane” skanera:** jedna grupa „ładowanie (jedno z)”: stacja 2-gniazdowa, zestaw KT, stacja 4- i 20-gniazdowa. Bateria i spust są w zestawie skanera. Owijki Enterprise Hand Mount — w „Dobór i montaż” (dotyczą 2 wariantów), z linkami do kart gałęzi mocowań.
- **20-gniazdowa stacja i ładowarka 40 baterii:** przewód DC CBL-DC-381A1-01 (przewodnik akcesoriów 01.2026, brief). Zob. rozbieżność nr 1.
- **Zasilacz 108 W:** nagłówek grupy zmieniony na „Wymagane dla stacji wielogniazdowej lub ładowarki baterii Zebra (terminale, RS6100)”; tekst warunku renderuje się jako „Jeśli używasz stacji wielogniazdowej lub ładowarki baterii Zebra (terminale, RS6100), potrzebujesz tego elementu.” (reguła `^stacji` w `required-accessory-copy.ts`).
- **Temperatura ładowania stacji 20- i ładowarki 40-gniazdowej:** w PRG 0–40 °C, sprzeczne z 5–40 °C dla baterii i z rozwiązywaniem problemów stacji (5–40 °C). Wiersz pominięty w specyfikacji tych dwóch kart.
- **Moc stacji 20-gniazdowej:** PRG podaje „50 watts” przy zasilaczu 108 W — pominięte.
- **Wymiary stacji 20- i ładowarki 40-gniazdowej:** podane bez oznaczeń osi (PRG opisuje 523 mm jako „Height”, co nie zgadza się ze zdjęciem).
- **Zestaw KT-RS5X6-2SCPWR-01:** przewodnik akcesoriów podaje „Country-specific Power Supply”. Levata wymienia PWR-WUA5V12W0US (wtyczka USA). Wersji EU nie potwierdzono — karta mówi tylko „zasilacz” bez kraju. **Do sprawdzenia u dostawcy przed sprzedażą.**
- **Adapter Bluetooth, zestaw i przewód CBA** (karty RS2100): nazwa adaptera neutralna, zgodność rozszerzona o RS5100 i RS6100 (przewodnik akcesoriów RS5100/RS6100: „Connects up to seven Bluetooth scanners”); slugi bez zmian.
- **REACH:** karta podaje „REACH SVHC 1907/2007” (błąd numeru rozporządzenia 1907/2006) — na karcie samo „REACH SVHC”.

## 5. Rozbieżności źródeł

1. Przewód DC do CRD-RS61-20SCHG-01 i SAC-RS51-40SCHG-01: przewodnik akcesoriów (01.2026) — CBL-DC-381A1-01; PRG (07.2026, tabela 5) — CBL-DC-382A1-01. Zastosowano 381A1 zgodnie z briefem. Oba przewody łączą zasilacz 108 W ze stacjami wielogniazdowymi; 382A1 ma uchwyt zwalniający.
2. Temperatura pracy z baterią rozszerzoną: karta (2022) −30 °C; PRG i przewodnik (2026) −20 °C. Zastosowano −20 °C.
3. PRG tabela 1 podaje −20…50 °C dla wszystkich konfiguracji z baterią standardową; PRG rozdz. „Batteries” mówi o pracy z baterią standardową powyżej 0 °C. Zastosowano 0–50 °C (karta, brief).
4. PRG rozdz. „Batteries”: bateria do mroźni „must be used” poniżej 0 °C — sprzeczne z −20 °C dla baterii rozszerzonej. Nie użyto.
5. PRG tabela 5 podaje SG-RS5X6-HNMT-01 i owijki SG-WEAR-HNWP**-01; przewodnik akcesoriów i API — wersje -02. Zastosowano -02.
6. PRG: stacja 2-gniazdowa wymaga PWR-WUA5V12W0US; przewodnik — zasilacz zależny od kraju. Na karcie PWR-WUA5V12W0EU.
7. Masa ładowarki 40 baterii: „3200 g (7.15 oz)” — przeliczenie w PRG błędne; podano 3200 g.
8. Zasięg 20 mil Code 39 w karcie bez wartości minimalnej (przypis 2); PRG: minimum ograniczone szerokością kodu w polu widzenia. Na karcie „do 276,9 cm” i zdanie o ograniczeniu pola widzenia.
9. Zdjęcie BTRY-RS5X6-6MA-01 z biblioteki Zebry ma na etykiecie drobny napis „PROTO SAMPLE NOT FOR SALE”; przy 800 px jest nieczytelny.

## 6. Karty współdzielone i kategorie

- Zasilacz 50 W, przewód DC 388A1: stacja 4-gniazdowa RS6100 i ładowarka 8 baterii (opis, zgodność, zastosowania, FAQ zasilacza).
- Zasilacz 108 W, przewód DC 381A1: stacja 20-gniazdowa RS6100 i ładowarka 40 baterii (nagłówek „Wymagane”, „Dobór i montaż”, zgodność, FAQ).
- Przewód 220R: oba zasilacze z akcesoriami RS6100.
- Uchwyt BRKT-SCRD-SMRK-01: stacja 20-gniazdowa i ładowarka 40 baterii.
- Zasilacz 12 W EU, przewód USB-C: stacja 2-gniazdowa RS5100 / RS6100.
- Karta RS2100: `relatedProducts` + `zebra-rs6100`.
- Podkategorie: skanery pierścieniowe, akcesoria do skanerów, baterie, stacje i ładowarki, kable, etui i kabury; strona skanerów Zebra; `public/llms.txt`.

## 7. Zdjęcia

PNG 800 × 800, przezroczyste tło. Skaner: produkt ok. 66% dłuższego boku (RS2100: 70%, ProGlove MARK 2: 64%); zdjęcia na dłoni 84% wysokości, jak RS2100.

| Plik | Źródło |
|---|---|
| RS61B0-KBSSZWR.png, -2, -3, -4, -6, -7 | Biblioteka mediów Zebry, `photography/product/0015/rs6100-*` (PNG z przezroczystością, ok. 2000 px) |
| RS61B0-KBSSZWR-5.png | Biblioteka Zebry, `0021/sg-rs5x6-hnmt-02-rs6100-std-battery-02` (4480 px, białe tło usunięte) |
| CRD-RS61-20SCHG-01.png | Biblioteka Zebry, `0026/crd-rs61-20schg-01-…-1x1-3600x3600.png` |
| BTRY-RS5X6-6MA-01.png | Biblioteka Zebry, `0018/btry-rs5x6-6ma-01` (3692 px) |
| CRD-RS61-4SCHG-01.png | Biblioteka Zebry, miniatura 320 px, powiększona 1,55× (PTS i Levata mają 300–338 px) |
| SAC-RS51-8SCHG-01.png | Biblioteka Zebry, miniatura 320 px, powiększona 1,56× (zdjęcie PTS 560 px ma szare tło z cieniem, którego nie dało się czysto usunąć) |
| SAC-RS51-40SCHG-01.png | PTS Mobile 560 px |
| BTRY-RS51-4MA-01.png | PTS Mobile 560 px |
| BTRY-RS51-7MA-01.png | Levata 742 px |
| CBL-RS5X6-ADPWT-01.png | PTS Mobile 560 px (białe tło usunięte także wewnątrz pętli przewodu) |
| CRD-RS5X6-2SCHG-01.png | Levata 1000 px (stacja bez skanerów, ze skanerami i z boku); ten sam plik na karcie zestawu KT |

- Zdjęcie Zebry `0018/rs6100-dc` przedstawia skaner ze spustem, nie adapter przewodowy — nie użyto.
- Stacja 2-gniazdowa ma limonkową obudowę na wszystkich zdjęciach (Zebra 320 px, Levata 1000 px).
- Bez logo zastępczego: wszystkie karty mają zdjęcie.
- `product-image-dims.json` edytowany ręcznie (16 wpisów po CRD-RS2X-20SCHG-01).

## 8. Samokontrola z kartą katalogową i PRG

Sprawdzono zdanie po zdaniu: tytuł, meta, krótki opis, opis, specyfikację, dymki, FAQ, opisy zdjęć i karty akcesoriów.

| Miejsce | Wynik | Uwagi |
|---|---|---|
| Zasięg 5,08 cm – 12,2 m, odczyt z górnej półki regału | zgodne | karta |
| Pięć sposobów noszenia, osobny zespół spustu dotykający skóry | zgodne | karta |
| Baterie: standardowa na pełną zmianę, rozszerzona na dłuższe zmiany | zgodne | karta |
| Bateria do mroźni −30 °C, niebieska etykieta | zgodne | przewodnik akcesoriów |
| Adapter WT6000 / WT6300, dane przez Bluetooth | zgodne | przewodnik, PRG |
| Diody RGB prowadzą do kolejnej pozycji kompletacji | zgodne | karta PL |
| Parowanie NFC z urządzeniami Zebra z NFC (np. WT6300) | zgodne | QSG |
| HID z iOS i Androidem po zeskanowaniu kodu z PRG | zgodne | PRG |
| Rękawice: pojedynczy — cienkie; podwójny — niezalecany; grzbiet dłoni — mieści rękawicę | zgodne | przewodnik akcesoriów, karta |
| Zgodność akcesoriów RS5100 | zgodne | karta, przewodnik |
| Tryb niskiego poboru energii, czas sesji odczytu w mrozie | zgodne | PRG |
| Zestaw KT — kraj zasilacza | POMINIĘTE | niepotwierdzone (pkt 4) |
| Typ spustu KFSSYWR | POMINIĘTE | niepotwierdzone |

Kontrola unikalności (`porownaj-opisy.py`, 6-gramy, pola description, shortDescription, seoDescription, faq): RS6100 i jego akcesoria kontra RS2100, ProGlove i M3 WR10 / WR15 — 0 par.

## Integracja (główna sesja, 24.10.2026)

- **Przewód DC do CRD-RS61-20SCHG-01 i SAC-RS51-40SCHG-01: CBL-DC-382A1-01.** Przewodnik produktu RS6100 (07.2026, tabela 5 „Accessories”) wymaga 382A1; przewodnik akcesoriów (01.2026) podaje 381A1. Obowiązuje nowszy dokument modelu. Zasilacz 108 W: warunek przewodu 382A1 obejmuje stacje 20-gniazdowe RS2100 i RS6100 oraz ładowarkę 40 baterii; karta przewodu 381A1 bez RS6100, karta 382A1 z RS6100.
- **Zdjęcie 5 karty skanera.** Plik biblioteki `0021/sg-rs5x6-hnmt-02-rs6100-std-battery-02` pokazuje mocowanie na grzbiet dłoni, nie Enterprise Hand Mount (nazwy plików 0021 `hnmt`/`bhmt` są w bibliotece zamienione — ustalenie agenta mocowań). Zastąpione zdjęciem Enterprise Hand Mount z owijką (`SG-RS5X6-HNMT-02-2.png`).
- Karty mocowań, owijek, pasków, spustów i smyczy: `src/data/zebra-rs6100-mounts.ts`, dokumentacja `mocowania.md`.
- Bateria rozszerzona: konfiguracje KESSXWR/KEDSXWR/KEENXWR mają w tabeli konfiguracji PRG i w opisach dystrybutora zakres −20–50 °C, przewodnik akcesoriów podaje pracę do −20 °C; rozdział PRG o baterii mówi, że poniżej 0 °C należy używać baterii do mroźni. Na karcie zostaje −20 °C dla baterii rozszerzonej (opis konfiguracji SKU); sprzeczność do potwierdzenia u Zebry.
