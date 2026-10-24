# Tablety Bluebird w /tablety-przemyslowe i /tablety-bluebird — dokumentacja robocza (24.10.2026)

Dokument roboczy: źródła, PN, pominięte modele, sprzeczności, akcesoria, zdjęcia, zmiana kodu `comingSoon` i samokontrola z kartami katalogowymi. Nie jest treścią dla klientów.

## 1. Źródła

- Karty katalogowe Bluebird (EN) ze stron modeli bluebirdcorp.com, hostowane lokalnie w `public/datasheets/`:
  - `bluebird-t30.pdf` — T30_EN_261006 (4 s., 278 KB), strona `…/Enterprise-Tablets/Rugged-Tablets/T30` (ten sam model jest też w `Managed-Tablets`);
  - `bluebird-t10.pdf` — T10_EN_260708 (4 s., 262 KB), strona `…/Managed-Tablets/T10`;
  - `bluebird-t40-ultra.pdf` — T40 Ultra_EN_260722 (5 s., 197 KB), strona `…/Rugged-Tablets/T40-Ultra` (status COMING SOON).
- Przewodniki akcesoriów (z numerami „Part #” / „Sap Code”), pobrane z Jarltech (identyczne z plikami TSC EMEA): `bluebird-t30-akcesoria.pdf` (19.05.2025, 4,7 MB), `bluebird-t10-akcesoria.pdf` (28.07.2025, 4,5 MB).
- Pomocniczo (nie do treści): Quick Guide T30 (T30_QG_EN_20251028) i T10 (T10_QG_EN_20250409), starsza karta T30 z Jarltech (27.02.2025), przewodnik X40/HF550X (nazwy części `STRP-SHDR-1600MM`, `TETHR-87MM-SHDR`).
- Jarltech (opisy PN, „order separately”, RRP): `https://www.jarltech.com/en/bluebird-t30`, `…/bluebird-t10`; ERS (UK) i Levata — drugie źródło PN `T10-ANLC`.
- Ceny i stany: `/api/stock`, partie po 3 PN, każda partia 2 razy, 24.10.2026 ok. 08:54 (rozpoznanie `scratchpad/bluebird-tablety/api/api-final.json`). Ceny = RRP Jarltech × 3,62 (tablety) i × 3,04 (akcesoria); logiki cen nie zmieniano.

## 2. Karty i PN

| Karta | Slug | PN | Cena netto (API) | Stan DE | availability |
|---|---|---|---|---|---|
| Bluebird T30 | `bluebird-t30` | `T30-ANLB` (Wi-Fi 6E, 6/64 GB) | 1 965,92 zł | 10 | available |
| | | `T30-A5LAW` (5G, GPS, eSIM, 6/64 GB) | 2 363,12 zł | 30 | available |
| Bluebird T10 | `bluebird-t10` | `T10-ANLC` (Wi-Fi 5, 4/64 GB) | 1 459,16 zł | 0 | unavailable |
| | | `T10-A4LFW` (4G LTE, GPS, eSIM, 6/128 GB) | 1 513,03 zł | 0 | unavailable |
| Bluebird T40 Ultra | `bluebird-t40-ultra` | brak (zapowiedź) | brak | — | unavailable + `quoteOnly` + `comingSoon` |

- `priceFrom`: T30 1 965,92 zł, T10 1 459,16 zł (najtańszy PN, także niedostępny — jak w całym sklepie). T40 Ultra bez `priceFrom`.
- Warianty: T30 — kolumna „Łączność”; T10 — „Łączność” i „RAM / Flash”. Dymki we własnym `variantAttributeTooltips` karty, bez PN.
- `relatedProducts` tylko Android i ten sam rozmiar: T30 ↔ T10, Getac ZX10 G2, Honeywell EDA10A i RT10A, Zebra ET40 i ET45, Brady RT710; T40 Ultra (8″) ↔ Getac ZX80, Zebra ET40, ET45 (wersje 8″).
- Zdjęcia nazwane według PN domyślnego: `T30-ANLB*.png`, `T10-ANLC*.png`; T40 Ultra bez PN: `bluebird-t40-ultra*.png`.

### Pominięte

| Model / PN | Powód |
|---|---|
| RT104, ST102, RT080 | brak PN u Jarltech, ERS, Levata, w wyszukiwarce; Windows 10 IoT (2019–2021) i Android 7 (decyzja głównej sesji) |
| `T10-ANLHK` (T10 Kiosk) | inna kategoria (kioski), osobna decyzja |
| T30 6/128 GB | tylko w starej karcie i TSC, brak PN |
| BluebirdCare T30 (12 PN `BESA-…`, `BVPA-…`) | decyzja: poza zakresem |
| Mobilis (`001054` rysiki — opakowanie 10 szt., ładowarki, kabel) | inna marka; `001054` MOQ 10 |

## 3. Sprzeczności między źródłami i decyzje

| Gdzie | Źródło A | Źródło B | Decyzja w treści |
|---|---|---|---|
| T30 — zestaw | QG Bluebird: tablet, kabel USB-C, zasilacz | Jarltech (oba PN): „order separately: power supply unit, charging cable” | blok „Wymagane — sprzedawane osobno”: `602010041` + `602020024` + `603010005` (jak terminale) |
| T10 — zestaw | karta: „In-box: 5V/3A charger & Plug, USB Cable”; QG: tablet, kabel USB-C, zasilacz | Jarltech `T10-A4LFW`: „incl.: battery, 8000 mAh, QSG”, bez „order separately” | bez bloku „Wymagane”; „Zawartość zestawu” według karty Bluebird. **Do potwierdzenia przy pierwszym zamówieniu** |
| T30 — bateria | karta, specyfikacja: 8000 mAh / 30,34 Wh | karta, Key Features i strona: 8 020 mAh / 31,20 Wh | 8000 mAh tylko w specyfikacji, akcesorium baterii i FAQ marki; w krótkim opisie i opisie T30 bez liczby |
| T30 — hot swap | karta: wymiana „on-site” | TSC EMEA: „hot-swappable” | bez hot swap; „wymiana na miejscu, bez wysyłki do serwisu” |
| T30 — masa | karta 650 g | QG, stara karta, TSC 690 g; strona Rugged 749 g z etui | 650 g |
| T30 — Ethernet | karta: „w/Ethernet Cradle 1 Gbps” | przewodnik akcesoriów: brak stacji z Ethernetem | pominięte |
| T30 — „TC78 WWAN models only — EAP-SIM, EAP-AKA” | karta T30 | kopia z karty Zebry | pominięte |
| T30 — GMS | karta: brak informacji | Jarltech: „GMS” w nazwach obu PN | „Android 13 z usługami Google (GMS)” — dane dystrybutora |
| T10 — pamięć | karta „6GB RAM/12GB UFS 2.2” (literówka) | strona Bluebird: 4/64 i 6/128 UFS 2.2; PN: `ANLC` 4/64, `A4LFW` 6/128 | 4/64 albo 6/128 GB zależnie od wersji |
| T10 — USB | karta: USB-C 3.0 | QG: USB-C 2.0 | „USB-C OTG” bez wersji |
| T10 — masa | karta 492 g | QG, TSC 473 g | 492 g |
| T10 — SIM | karta: nano-SIM + eSIM + microSD | QG: slot hybrydowy | „nano-SIM i eSIM” (wersja 4G) |
| T10 — temp. przechowywania | karta: „-30°F to 70°F / -22°C to 158°C” (zamienione jednostki) | stara karta i QG: −30…+70 °C | od −30°C do +70°C |
| T10 — IP, upadki, Wi-Fi 6, 5G | karta: brak IP i testu upadku, 802.11ac, tylko 4G | TSC: IP65, MIL-STD-810H, Wi-Fi 6; Jarltech: Wi-Fi 6, opcja 5G; ERS: „Rugged” | tylko dane z karty; opis: „producent nie deklaruje klasy szczelności ani odporności na upadki” |
| T10 — przekątna | karta 10,95″ | Jarltech 11″ (27,94 cm) | 10,95″; filtr przekątnej poprawiony (grupa 10″) |
| T10 — GMS | karta: „GMS / Non-GMS” na stronie | Jarltech: GMS tylko dla `A4LFW`; `ANLC` brak danych | GMS pominięte |
| T40 Ultra — Android | wstęp: „guaranteed upgradability to Android 20” | przypis: aktualizacja wymaga programu gwarancyjnego; „Qualcomm’s roadmap” przy procesorze MediaTek | specyfikacja: Android 16; FAQ: zapowiedź 18 i 20 w ramach płatnego programu gwarancyjnego |
| T40 Ultra — Qi | „Support 15W Wireless Charging (Qi)” | „only on WWAN SKUs” | Qi tylko w wersjach WWAN |
| T40 Ultra — „Imager Window: Tempered 2mm Glass” | karta | tablet bez skanera | „szkło hartowane 2 mm” na ekranie |
| Stacja 4-gn. T30 `204020040` — zasilacz | przewodnik T30: „Requires Power Adapter 12V/10A” | ten sam przewodnik: PN `602010013` o nazwie `PWR-ADPT-9V10A`; Jarltech `204020040`: „order separately: Power Supply and Power Cord” (bez PN); Jarltech/ERS `602010013`: 9 V / 10 A | zasilacz **poza** blokiem „Wymagane”; opis: „Stację zasila zasilacz 10 A z przewodem sieciowym EU. Model zasilacza dobierzemy przy zamówieniu.” W „Wymagane”: przewód `14948`; podkładka dla tabletu bez osłony. Karta `602010013` **bez** dopisanej zgodności z T30 (świadomie, mimo listy w briefie) |
| `621040003` (pasek z hakiem) | Jarltech i ERS — przy T30 | przewodnik T30: inny pasek `621040007` (API nie zna) | nie dopisano do T30 |
| Przewodnik T10 | „Sap Code: 6626010004”, „24010038”; linki do rysika „Requires Rugged Boot” | to `626010004` i `624010038`; T10 nie ma rugged boot | linki do rysika tylko przy T30; szkło `624010038` wspólne T30/T10 (nazwa części `SCRNPT-GLSAF-T3#&T1#/K`) |
| `355040121` | przewodnik T30: „Forklift Mount” | prefiks 355 zwykle dla baterii | uchwyt do wózka (cena 393,71 zł pasuje do uchwytu) |
| Stany T30 | API 10 / 30 | strona Jarltech 20 / 20; ERS 30 / 50 | sklep pokazuje stan z API |

## 4. Akcesoria

Ceny i stany z API 24.10.2026. MOQ > 1 brak. `categoryId: 'akcesoria'`, `subcategoryIds: ['akcesoria-do-tabletow']` (znacznik jak u Getac).

### Nowe karty (`bluebirdTabletAccessories`, 14)

| PN | Karta | Cena netto | Stan | Zdjęcie | „Wymagane” |
|---|---|---|---|---|---|
| `204020040` | Stacja ładująca 4-gniazdowa Bluebird T30 | 939,37 zł | available (30) | przewodnik T30 s. 4 | przewód `14948`; podkładka `501260136` dla tabletu bez osłony |
| `204010093` | Stacja ładująca 1-gniazdowa Bluebird T30 | 414,44 zł | unavailable | przewodnik T30 s. 4 | zasilacz `602010025` + przewód `14948`; podkładka dla tabletu bez osłony |
| `501260136` | Podkładka do stacji Bluebird T30 | 11,07 zł | available (30) | przewodnik T30 s. 4 | — |
| `351120036` | Osłona rugged boot Bluebird T30 | 110,53 zł | available (30) | przewodnik T30 s. 12 | — |
| `355040109` | Bateria standardowa 8000 mAh Bluebird T30 | 234,83 zł | on-order (30 w dostawie) | brak (logo) | — |
| `357010004` | Pasek na dłoń Bluebird T30 | 78,74 zł | available (31) | przewodnik T30 s. 10 | — |
| `624010038` | Szkło ochronne Bluebird T30 i T10 | 65,79 zł | unavailable | przewodnik T30 s. 12 | — |
| `355040121` | Uchwyt do wózka widłowego Bluebird T30 | 393,71 zł | unavailable | przewodnik T30 s. 12 | — |
| `626010004` | Linka prosta 350 mm do rysika Bluebird | 7,88 zł | available (15) | przewodnik T30 s. 11 | osłona `351120036` |
| `19346` | Linka spiralna 170 mm do rysika Bluebird | 13,82 zł | unavailable | przewodnik T30 s. 11 | osłona `351120036` |
| `638010002` | Klawiatura 2 w 1 Bluebird T10 (US QWERTY) | 374,97 zł | unavailable | przewodnik T10 s. 9 | — |
| `351120041` | Etui ochronne Bluebird T10 | 39,47 zł | available (1) | przewodnik T10 s. 9 | — |
| `621040006` | Pasek na ramię 1600 mm Bluebird T10 | 16,57 zł | unavailable | brak (w przewodniku zdjęcie z osobą) | łącznik `621060003` + etui `351120041` |
| `621060003` | Łącznik paska na ramię Bluebird T10 | 2,75 zł | unavailable | brak (w przewodniku zdjęcie z innym urządzeniem) | etui `351120041` |

### Wspólne z terminalami — dopisana zgodność (bez duplikatów)

`602010041` (T30, T10), `602020024` (T30, T10), `603010005` (T30, T10), `14948` (T30), `602010025` (T30; stacja `204010093` w „Pasuje do” i opisie), `626010007` (T30, T10). W każdej: „Kompatybilność”, `relatedProducts`, znacznik `akcesoria-do-tabletow`. `602010013` bez zmian (p. 3). Nie dodano: `621040007`, `19992`, `24010038` (API nie zna), `621040003`, `622020004`, wtyczki i przewody spoza EU, Mobilis.

## 5. Zdjęcia

- Tablety: płótno 1200 × 800, białe tło RGB, produkt w polu 984 × 640 (82 % × 80 %), wyśrodkowany — ta sama reguła co tablety Getac (zmierzone: ZX80 81,8 × 80,0 %, ZX10 G2 76,3 × 80,0 %, UX10 G5 79,0 × 80,0 %).

| Plik | Źródło | Produkt na płótnie | Skala |
|---|---|---|---|
| `T30-ANLB.png` | grafika z karty T30 (wersja Jarltech, JPEG + `smask`) 3840 × 2790 | 984 × 633 (82,0 × 79,1 %) | 0,33 |
| `T30-ANLB-2.png` | TSC EMEA, przód pod kątem | 723 × 640 | 0,37 |
| `T30-ANLB-3.png` | bluebirdcorp.com, tył prosto 900 × 900 | 984 × 633 | 1,26 |
| `T30-ANLB-4.png` | bluebirdcorp.com, tył pod kątem 900 × 900 | 723 × 640 | 1,28 |
| `T10-ANLC.png` | Jarltech `BLU_T10_web.png` | 984 × 619 (82,0 × 77,4 %) | 0,70 |
| `T10-ANLC-2.png` | TSC EMEA, przód pod kątem, ekran wygaszony | 984 × 550 | 0,19 |
| `T10-ANLC-3.png` | karta T10, przód i tył (z `smask`) | 742 × 640 | 1,24 |
| `bluebird-t40-ultra.png` | bluebirdcorp.com, przód pionowo 3000 × 1688 | 389 × 640 (32,4 × 80,0 %) | 0,52 |
| `bluebird-t40-ultra-2.png` | bluebirdcorp.com, tył (wersja nieprzezroczysta) | 389 × 640 | 0,52 |
| `bluebird-t40-ultra-3.png` | bluebirdcorp.com, przód pod kątem i przezroczysty tył | 955 × 640 | 0,57 |

- T40 Ultra pionowo: ta sama wysokość produktu co inne tablety (80 %), więc w kaflu nie jest większy od nich.
- Akcesoria: wycinki z przewodników (render strony 300 dpi, kadr według „Part #”), białe tło połączone z krawędzią → przezroczyste; w linkach do rysika i uchwycie do wózka także zamknięte prześwity tła; krawędź odjęta od bieli (bez białej obwódki). Płótno 500 × 500, dłuższy bok 400 px (80 %), pngquant 85–98 — jak akcesoria terminali Bluebird. Sprawdzone na szarym tle: bez białych plam tła. Białe elementy, które należą do produktu: naklejki pomocnicze przy szkle `624010038`, jasna tapeta na ekranie tabletu przy klawiaturze `638010002`, jasny rant etui `351120041`.
- Mapy zdjęć edytowane ręcznie (dopisane wpisy na końcu plików): `product-image-dims.json` (10 tabletów `[1200,800]`, 11 akcesoriów `[500,500]`), `product-image-frames.json` i `product-image-uniform-bounds.json` (11 akcesoriów; tablety bez wpisów, jak Getac). `generate-image-dims.mjs` nieuruchamiany.

## 6. Zmiana kodu `comingSoon` i pułapki

| Plik | Zmiana |
|---|---|
| `src/data/products.ts` | pole `comingSoon?: boolean` w typie `Product` (obok `quoteOnly`); import i spread `bluebird-tablet-products.ts` |
| `src/components/product/ProductCard.tsx` | plakietka „Zapowiedź” (wariant `info`, jak „Na zapytanie”); brak „Powiadom”; przycisk „Zapytaj o produkt”; `standardMobileImage` pomija `categoryId === 'tablety-przemyslowe'` |
| `src/app/produkt/[slug]/page.tsx` | plakietka „Zapowiedź” w boksie ceny; bez `AddToRFQButton`; `hasValidPrice = false` dla `comingSoon` (JSON-LD bez `offers`); `mpn` pominięty jak przy `quoteOnly` bez PN |
| `src/components/product/ProductGrid.tsx`, `src/components/brand-category/BrandCategoryPage.tsx` | przekazanie `comingSoon` do kafla |
| `src/app/api/merchant-feed/route.ts`, `src/app/api/ceneo-feed/route.ts` | `if (product.comingSoon) continue` — twarde wykluczenie z obu feedów (feed Ceneo bierze też produkty z ceną z cache) |
| `src/data/category-filters.ts` | Producent „Bluebird”; przekątna `^10([,.][0-9]{1,2})?` (10,95″ w grupie 10″); upadki „1,2–1,3 m” tylko `1[,.][23]` (1,0 m już nie trafia); strona `tablety-bluebird` w pętli stron marek |

T40 Ultra: `quoteOnly: true` i `comingSoon: true` — cały układ karty bez ceny i koszyka pochodzi z istniejącej obsługi `quoteOnly`. Karta w sitemapie (bez zmian w `sitemap.ts`), slug `bluebird-` przechodzi przez middleware.

Tablety w osobnym pliku `bluebird-tablet-products.ts` (poza `bluebirdProducts`, więc poza `LIVE_OFFER_SLUGS`). Filtr upadków: T30 („1,0 m …; 1,6 m … w osłonie rugged boot”) trafia do „1,5 m i więcej” według wartości z osłoną; T10 bez danych — poza grupami; T40 Ultra (2,0 m) — „1,5 m i więcej”.

## 7. Strona marki `/tablety-bluebird`

- `brandCategories`: `tablety-przemyslowe-bluebird`, nazwa „Tablety przemysłowe Bluebird”, wstęp (`longDescription`) bez modeli: czym są tablety Bluebird, gdzie się ich używa, z czym współpracują (BOS, EMM, stacje), ograniczenie (płatne aktualizacje Bluebird Care), link do kategorii.
- `brand-category-content.ts` → `'tablety-bluebird'`: definicja (3 modele, T40 Ultra jako zapowiedź), 5 kryteriów wyboru, zestawienie techniczne bez cen (ceny pokazuje siatka; nie trzeba ich ręcznie odświeżać), 4 zastosowania z kart, 4 uwagi przed zakupem, tabela T30 / T10 / T40 Ultra, 6 pytań FAQ, 4 kroki wdrożenia, własny `contactText`.
- Menu „Tablety” → „Tablety Bluebird” po „Tablety Getac”; filtry tabletów na stronie marki; `llms.txt` (sekcja „Tablety Bluebird”); `manufacturers.ts` i tytuł `/katalog?producent=bluebird` z tabletami.

## 8. Samokontrola z kartami katalogowymi

Sprawdzone zdanie po zdaniu: title, meta, shortDescription, opis, specyfikacja, FAQ, dymki, opisy zdjęć, akcesoria.

| Karta | SPRZECZNE | SPOZA KARTY | POMINIĘTE | NIEPRECYZYJNE |
|---|---|---|---|---|
| T30 | brak | GMS (nazwy PN u Jarltech); zestaw bez zasilacza i kabla (Jarltech; QG Bluebird podaje kabel i zasilacz w zestawie); 12 miesięcy gwarancji (Jarltech, zgodne z „1 year” karty) | Ethernet przez stację (brak stacji w przewodniku); pasma 5G/4G; czujniki; wibracje, szok termiczny, ESD; BOS VoIP/PTT; EAP-SIM/AKA („TC78”) | bateria: karta podaje 8000 mAh / 30,34 Wh i 8 020 mAh / 31,20 Wh — w opisie i krótkim opisie bez liczby, w specyfikacji wartość z tabeli specyfikacji |
| T10 | brak | pamięć 4/64 i 6/128 GB według PN (strona Bluebird, dystrybutorzy; karta ma literówkę „6GB/12GB”) | „64% wyższa wydajność” (marketing); czujniki; Bluebird Care TSC i SecureCare; szok termiczny, ESD | USB-C bez numeru wersji (karta 3.0, QG 2.0); temp. przechowywania −30…+70 °C zamiast zamienionych jednostek w karcie |
| T40 Ultra | brak | — | AnTuTu ok. 670 tys.; BluebirdCare TSC i SecureCare; akcesoria „<Planning>”; pasma 5G/4G; ESD i szok termiczny | Android: specyfikacja „Android 16”, FAQ: zapowiedź 18 i 20 z zastrzeżeniem płatnego programu (zamiast „guaranteed upgradability to Android 20”) |
| Akcesoria | brak | długości paska 1600 mm i łącznika 87 mm z nazw części w przewodniku X40/HF550X | ładowanie baterii w stacji 4-gn. (tylko Jarltech: „4x Batteries”, przewodnik T30 i zdjęcie tego nie pokazują) | stacja 4-gn.: zasilacz „10 A, model dobieramy przy zamówieniu” (p. 3) |

Poprawione w trakcie: „karta nie podaje klasy IP” (notatka o źródle) → „producent nie deklaruje”; usunięte dopowiedzenia (przezroczysty tył „pozwala sprawdzić wnętrze”, „w celi”, „obrońca”, „na biurku lub ladzie”, ładowanie baterii w tablecie); Zebra ET45 jako „wyższa szczelność” (ET45 ma IP65) → Brady RT710.

Porównanie opisów (`porownaj-opisy.py`, 6-gramy): urządzenia — description, shortDescription, seoDescription, faq: 0 par; akcesoria — description, shortDescription, seoDescription: 0 par. Krzyżowo z `bluebird-products.ts`, `getac-tablet-products.ts`, `brady-rt710-products.ts` (własny skrypt, opisy, krótkie opisy, meta, FAQ): po poprawkach zostały tylko nazwy części i parametry (np. „zasilacz 12 V / 5 A”, nazwa stacji `204010093` w liście „Pasuje do”), bez wspólnych zdań.

## 9. Weryfikacja na buildzie (`next start -p 3158`, 24.10.2026)

- `npm run build` — OK; `npx tsc --noEmit` — 218 błędów jak przed zmianą (wszystkie w plikach spoza zakresu: Prisma, `unified-stock.ts`, panel admina), 0 w zmienionych plikach; `node scripts/check-product-images.mjs` — wszystkie pliki na miejscu.
- HTTP 200: `/produkt/bluebird-t30`, `/produkt/bluebird-t10`, `/produkt/bluebird-t40-ultra`, `/tablety-bluebird`, `/tablety-przemyslowe`, karty akcesoriów.
- T40 Ultra: plakietka „Zapowiedź” (kafel i karta), „Cena na zapytanie”, „Zapytaj o produkt”, brak przycisku koszyka; JSON-LD `Product` bez `offers` i bez `mpn`; w sitemapie (jak T30, T10 i `/tablety-bluebird`).
- `/api/merchant-feed`: `T30-ANLB` i `T30-A5LAW` są, T40 Ultra brak, T10 brak (0 szt.); `/api/ceneo-feed`: T40 Ultra brak.
- Kafle w `/tablety-przemyslowe` (1440 px): pole zdjęcia T30, T10, T40 Ultra 299 × 224 (4:3), `object-fit: contain`, bez transformacji — identycznie jak Getac ZX80, ZX10 G2, UX10 G5. Galeria karty: 584 × 584 dla T30, T10, ZX10 G2 i UX10 G5.
- Tabela wariantów `#warianty .overflow-x-auto`, `scrollWidth = clientWidth`: T30 i T10 — 1216 px przy 1440, 1201 px przy 1280, 945 px przy 1024.
- Akcesoria na karcie T30: pierwszy rząd 4 kafle (blok „Wymagane”: zasilacz, wtyczka, kabel, potem osłona), „Pokaż pozostałe (12)”.
- Filtry na `/tablety-bluebird`: przekątna 8″ (1) i 10″ (2 — T10 z 10,95″ złapany), upadki „1,5 m i więcej” (2: T30 z osłoną, T40 Ultra), IP65 (1), IP68 (1).

## 10. Otwarte kwestie

1. Zawartość zestawu T10 (karta Bluebird: zasilacz i kabel w zestawie; Jarltech tego nie potwierdza) — sprawdzić przy pierwszym zamówieniu.
2. Zasilacz stacji 4-gniazdowej T30 (9 V czy 12 V / 10 A) — pytanie do Jarltech/Bluebird; po odpowiedzi dopisać PN do bloku „Wymagane” i zgodność w karcie zasilacza.
3. T30 w filtrze „1,5 m i więcej” według wartości z osłoną rugged boot (sama obudowa: 1,0 m) — filtr nie ma grupy „do 1 m”.
4. Brak zdjęć: bateria `355040109`, pasek `621040006`, łącznik `621060003` (logo producenta jak przy terminalach).
5. Ceny i stany tylko z Jarltech (Ingram: prefiks `ZB`, `501260136` → `ON`); T10 bez stanu.
