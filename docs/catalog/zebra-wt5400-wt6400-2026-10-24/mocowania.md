# Zebra WT5400 / WT6400 — mocowania, paski, rękawy, folie i skaner RS5000x (24.10.2026)

Dokument roboczy: źródła, PN, decyzje, rozbieżności źródeł, zdjęcia i samokontrola. Nie jest treścią dla klientów. Terminale, kategoria „Terminale naramienne”, ładowanie, baterie i przewody są opisane w `audit.md` (osobna gałąź).

Dane: `src/data/zebra-wt-mounts.ts`, eksporty `zebraWtMounts` (23 karty akcesoriów) i `zebraRs5000xProducts` (karta skanera). Slugi akcesoriów `zebra-wt-<pn małymi literami>`, skaner `zebra-rs5000x`.

## 1. Źródła

Hierarchia: karta katalogowa → Product Reference Guide (PRG) / przewodnik akcesoriów → dystrybutor.

- Karty katalogowe WT5400 i WT6400 (EN 06.2026, PL 07.2026) — sekcja „Choose the wearing style…”: uniwersalne mocowanie przyjmuje wszystkie paski; terminal zwalnia jeden przycisk; własne mocowanie i pasek dla każdego pracownika (higiena); paski na rzep ekonomiczne; pasek z jednym pokrętłem z mikroregulacją bez punktów nacisku; pasek z dwoma pokrętłami — lepszy chwyt, w WT6400 zalecany do wersji z klawiaturą. Ekran obu modeli 4,7 cala. Wymiana baterii bez zdejmowania terminala z ręki. WT5400: skanery tylko Bluetooth (RS2100, RS5100, RS6100), jeden port USB-C; WT6400: także przewodowe RS4000 i RS5000 przez boczne złącza.
- WT5400 / WT6400 Accessories Guide (EN, 05.2026), s. 8–10 — PN, rozmiary, długości i kolory akcentów pasków, rękawy, folie, RS5000x.
- PRG WT6400/WT5400 online (docs.zebra.com, pobrane 24.10.2026): „Installing the Single and Double Dial Wrist Mounts”, „Installing the Velcro Wrist Mount”, „Unmounting the Wrist Mount”, „Hip Mount”, „Installing the Hip Mount”, „Routing an Extended Cable Scanner”, „Cleaning the Wrist Mount”, tabela „Device Accessories”, „Connecting the RS5000/RS5000x”, „Scanning with the RS5000/RS5000x”, „Unpacking the Device”, „Data Capture”.
- Karta katalogowa RS5000x (EN i PL, 07.2026): https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/rs5000x-spec-sheet-en-us.pdf oraz `/pl/spec-sheets/rs5000x-spec-sheet-pl-pl.pdf` (PL skopiowana do `public/downloads/zebra-rs5000x-karta-katalogowa-pl.pdf`).
- Ceny i stany: `https://www.takma.com.pl/api/stock` (24.10.2026, wyniki w scratchpadzie sesji `wt/api/`). `priceFrom` to cena sprzedaży netto z API; karta pobiera cenę i stan na żywo.
- PTS Mobile (ptsmobile.com, 24.10.2026): zdjęcia (p. 5) i liczba sztuk w kompletach pasków na rzep — „Replacement Velcro Wrist Straps (2)… Includes 2 Wrist Straps”.

## 2. Karty

| Karta | PN | Cena netto (API) | Stan (API 24.10) | `availability` |
|---|---|---|---|---|
| Mocowanie, jedno pokrętło, S | SG-WT5X6-WMTSS-01 | 457,92 zł | 0 + 141 w dostawie | on-order |
| Mocowanie, jedno pokrętło, L | SG-WT5X6-WMTSL-01 | 457,92 zł | 426 EU | available |
| Mocowanie, jedno pokrętło, XL | SG-WT5X6-WMTSX-01 | 549,52 zł | 10 PL + 34 EU | available |
| Mocowanie, dwa pokrętła, S | SG-WT5X6-WMTDS-01 | 558,06 zł | 0 | unavailable |
| Mocowanie, dwa pokrętła, L | SG-WT5X6-WMTDL-01 | 558,06 zł | 1 EU + 15 | available |
| Mocowanie, dwa pokrętła, XL | SG-WT5X6-WMTDX-01 | 643,91 zł | 0 + 31 w dostawie | on-order |
| Mocowanie, rzepy, S | SG-WT5X6-WMTVS-01 | 271,88 zł | 34 EU + 39 | available |
| Mocowanie, rzepy, L | SG-WT5X6-WMTVL-01 | 271,88 zł | 31 EU + 48 | available |
| Mocowanie, rzepy, XL | SG-WT5X6-WMTVX-01 | 286,18 zł | 104 EU + 24 | available |
| Mocowanie na biodro | SG-WT5X6-HPMNT-01 | 274,74 zł | 0 | unavailable |
| Pasek, jedno pokrętło, S | SG-NGWT-WSTPST-01 | 275,12 zł | 9 EU + 220 | available |
| Pasek, jedno pokrętło, L | SG-NGWT-WSTPLN-01 | 275,12 zł | 1 EU + 986 | available |
| Pasek, jedno pokrętło, XL | SG-NGWT-WSTPXL-01 | 348,40 zł | 0 + 102 w dostawie | on-order |
| Pasek, dwa pokrętła, S | SG-WT5X6-WSTDS-01 | 386,32 zł | 0 | unavailable |
| Pasek, dwa pokrętła, L | SG-WT5X6-WSTDL-01 | 386,32 zł | 0 | unavailable |
| Pasek, dwa pokrętła, XL | SG-WT5X6-WSTDX-01 | 443,58 zł | 13 EU | available |
| Paski na rzep S (2 szt.) | SG-WT5X6-WSTVS-01 | 100,14 zł | 0 + 23 w dostawie | on-order |
| Paski na rzep L (2 szt.) | SG-WT5X6-WSTVL-01 | 100,14 zł | 0 | unavailable |
| Paski na rzep XL (2 szt.) | SG-WT5X6-WSTVX-01 | 114,49 zł | 0 + 32 w dostawie | on-order |
| X-strap M | SG-NGWT-WSTVLM-02 | 222,61 zł | 0 | unavailable |
| X-strap L | SG-NGWT-WSTVLL-02 | 225,56 zł | 0 | unavailable |
| Rękawy na przedramię (5 szt.) | SG-WT4027050-01R | 128,36 zł | 0 + 187 w dostawie | on-order |
| Folie ochronne ekranu (5 szt.) | MISC-WT5X6-SCRN-05 | 392,07 zł | 0 + 11 w dostawie | on-order |
| Skaner RS5000x, spust standardowy | RS5000X-TCFSSWR | 3 393,35 zł | 0 + 108 w dostawie | on-order (wariant) |
| Skaner RS5000x, spust do mroźni | RS5000X-TCFSXWR | 3 522,23 zł | 5 EU + 12 | available (wariant) |

Karta `zebra-rs5000x`: `availability: available`, `priceFrom` = cena tańszego wariantu.

Pominięto SG-NGWT-WSTVLS-02 (X-strap S, 132 mm) — API: brak danych z dystrybutora.

Podkategorie: akcesoria `akcesoria-do-terminali` + `etui-kabury-uchwyty` (jak paski i kabury terminali); skaner `skanery-kodow-kreskowych` / `skanery-pierscieniowe`.

Powiązania: `relatedProducts` akcesoriów = `zebra-wt5400`, `zebra-wt6400` (karty z gałęzi A) + sąsiednie rozmiary i typy. `relatedAccessories`: mocowanie → pasek zapasowy tego samego typu i rozmiaru, rękawy, folie; pasek → mocowanie z tym paskiem. Skaner: `relatedProducts` = `zebra-rs6100`, `zebra-rs5100`, `zebra-rs2100`.

## 3. Blok „Wymagane”

- Mocowania na nadgarstek i biodro: bez bloku (działają same; terminal jest produktem głównym).
- Paski zapasowe (11 kart) i rękawy: `**Wymagane dla paska|pasków|rękawa: mocowanie na nadgarstek (jedno z) — sprzedawane osobno**` z 9 mocowaniami. Karta katalogowa: uniwersalne mocowanie przyjmuje wszystkie paski, więc pasuje każde z 9; na liście najpierw mocowania z paskiem tego samego typu.
- RS5000x: `**Wymagane — sprzedawane osobno**` z kartą `zebra-wt6400` (gałąź A) i zdaniem, że skaner działa tylko z WT6000/WT6300/WT6400 (przewodnik akcesoriów: „For use with WT6000, WT6300 and WT6400 wearable terminals only”).
- Mocowanie na biodro: wymaganie z PRG („An RS4000 or RS5000 scanner with an extended cable, a wired headset or the RS6000 … is required”) opisane w tekście, bo nie da się wskazać jednej grupy z katalogu; zaznaczono, że RS5000x w wersjach TCFS ma krótki przewód.

## 4. Decyzje i rozbieżności

- **Terminologia:** karta PL używa „uchwyt na nadgarstek”, „pasek z regulowanym pokrętłem”, „paski na rzepy”, „podwójny pasek z pokrętłem”. W kartach sklepu: „mocowanie na nadgarstek” (jak w briefie i kartach RS6100), „pasek z jednym pokrętłem / z dwoma pokrętłami”, „paski na rzep”.
- **Długości pasków w mocowaniach:** przewodnik podaje zakresy tylko dla pasków zapasowych. W kartach mocowań zakres jest przypisany do „paska zapasowego tego rozmiaru” z PN, nie do mocowania.
- **XL pasek z jednym pokrętłem:** przewodnik i API: SG-NGWT-WSTPXL-01; tabela akcesoriów w PRG: „SG-NGWT-WSTPLX-01” (literówka w PRG). Użyto PN z przewodnika i API.
- **X-strap S:** przewodnik podaje SG-NGWT-WSTVLS-02 (132 mm); biblioteka mediów ma tylko zdjęcie `sg-ngwt-wstvls-01`. Karty nie ma (brak w API).
- **X-strap:** źródła podają tylko nazwę, rozmiar i długość. Kształt litery X i zaczepy opisano ze zdjęć Zebry. Nie podano rodzaju zapięcia.
- **Paski na rzep:** przewodnik — „Replacement Velcro Wrist Straps” (l. mn.); liczba 2 szt. pochodzi z PTS Mobile i zgadza się z mocowaniem „With Two Velcro Straps” oraz zdjęciami Zebry (dwa paski). Dane od dystrybutora.
- **Rękawy:** źródła podają tylko „Optional Arm Sleeves For Wrist Mount (Pack Of 5)”. Zdanie „rękaw nosi się na ręce pod mocowaniem” to interpretacja nazwy; PTS nazywa produkt „WT6300 Arm Sleeve”.
- **Mocowanie na biodro:** PRG opisuje je dla WT6400 (zasilanie skanera z przedłużonym przewodem); przewodnik — dla WT5400 i WT6400. Karta podaje oba modele.
- **RS5000x — „laserowy mechanizm skanowania”:** polska karta tak tłumaczy „advanced scan engine”, ale SE4770 to imager (matryca 1280 × 800). W karcie sklepu: „imager”, celownik laserowy.
- **RS5000x — masa:** karta PL dopisuje „w tym kabel”, karta EN nie. W specyfikacji bez tego dopisku.
- **RS5000x — krótki przewód:** PN „Short Cable”; PRG: przy terminalu na biodrze potrzebna wersja z przedłużonym przewodem (tylko RS5000), przy terminalu na nadgarstku przewód podłącza się do złącza bliżej nadgarstka.
- **RS5000x — strona modelu:** `sameAs` = strona serii RS5000 (PL), bo osobnej strony RS5000x nie ma (404).
- **Przewodnik akcesoriów w downloads:** plik `public/downloads/zebra-wt5400-wt6400-akcesoria.pdf` (4,1 MB). Gałąź A może dodać ten sam przewodnik pod inną nazwą — integrator powinien zostawić jeden plik i ujednolicić linki.

## 5. Zdjęcia

PNG 800 × 800, przezroczyste tło, dłuższy bok produktu ok. 70% kadru (rękaw 62%, skaner z przewodem 80%, terminal na ręce 94%). Narzędzia: `proc.py` (usuwanie białego tła od krawędzi i jasnych enklaw > 0,15% obrazu), `compose.py` dla zdjęć z kanałem alfa.

| Plik | Źródło |
|---|---|
| SG-WT5X6-WMTSX-01, SG-WT5X6-WMTVS-01, SG-WT5X6-WSTDS-01, SG-WT5X6-WSTDX-01, SG-WT5X6-WSTVX-01, SG-NGWT-WSTVLL-02 | biblioteka mediów Zebry, `P/0026/<pn>-photography-product-accessories-1x1-3600x3600.png` |
| SG-NGWT-WSTVLM-02 | `P/0026/sg-ngwt-wmvlm-02-…-3600x3600.png` (mocowanie z X-strap M), wykadrowany sam pasek z zaczepami |
| SG-NGWT-WSTPST-01, SG-NGWT-WSTPLN-01 | `P/0019/<pn>-photography-product.png` (ok. 614 × 1150 px) |
| SG-WT5X6-WMTSS/WMTSL/WMTDS/WMTDL/WMTDX/WMTVL/WMTVX-01, SG-WT5X6-HPMNT-01, SG-WT5X6-WSTDL-01 | PTS Mobile, 475–500 px (Zebra ma tylko miniatury 320 px) |
| SG-NGWT-WSTPXL-01 | PTS Mobile, 350 px (Zebra: 138 × 358 px) |
| SG-WT5X6-WSTVS-01, SG-WT5X6-WSTVL-01 | PTS Mobile, 400 px; na zdjęciu jeden pasek z kompletu dwóch (opis zdjęcia to mówi) |
| SG-WT4027050-01R | Zebra `P/0019/sg-wt4027050-01r-photography-product.png` (236 × 312 px), powiększone |
| MISC-WT5X6-SCRN-05 | PTS Mobile 434 px — zdjęcie na szarym tle; folie wycięte ręcznie wielokątem, przez przezroczyste folie widać tło zdjęcia. Do wymiany, gdy pojawi się lepsze zdjęcie |
| `<mocowanie z jednym pokrętłem>-2`, `<mocowanie na rzep>-2` | Zebra `P/0020/wt6400-photography-product-right-arm-{single-dial,velcro}-wrist-strap.png` (terminal sprzedawany osobno) |
| RS5000X-TCFSSWR, RS5000X-TCFSXWR | Zebra `P/0019/rs5000x-photography-product-{std,frzr}-trgr-with-cable-left-facing.jpg` (5168 px) |
| RS5000X-TCFSSWR-2, -3 | Zebra `P/0019/rs5000x-photography-product-std-trgr-{front,back}-facing.jpg` (1920 px) |

Bez logo zastępczego. Bez lustrzanych odbić.

## 6. Samokontrola

- Wspólne 6-gramy w opisach (`porownaj-opisy.py`): pozostały tylko nazwy typów i listy modeli („terminali Zebra WT5400 i Zebra WT6400”, „z paskiem z dwoma pokrętłami w rozmiarze”). Krótkie opisy i meta mają powtórzenia parametrów (rozmiar, zakres mm, kolor akcentów). Zero wspólnych 6-gramów z kartami RS2100, RS5100, RS6100 i ProGlove.
- Zdanie po zdaniu z kartami katalogowymi, przewodnikiem akcesoriów i PRG: patrz p. 4 (wszystkie wyjątki od źródeł Zebry są tam wymienione).
