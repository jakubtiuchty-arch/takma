# Laptopy Getac w /laptopy-przemyslowe — dokumentacja robocza (23.10.2026)

Dokument roboczy: źródła, konfiguracje PN, pominięte PN, rozbieżności, akcesoria, zdjęcia i zmiany treści. Nie jest treścią dla klientów.

## 1. Źródła

- Karty katalogowe Getac (EN, „Generated date” 06.08–19.08.2026), hostowane lokalnie w `public/datasheets/`:
  - `getac-b360.pdf` (Getac_B360_G3_EN_Product.pdf, 1,1 MB), `getac-v120.pdf` (Getac_V120_EN_Product.pdf, 965 KB), `getac-s410-g5.pdf` (Getac_S410_G5_EN_Product.pdf, 821 KB), `getac-s510.pdf` (Getac_S510_EN_Product.pdf, 1,5 MB), `getac-s510ad.pdf` (Getac_S510AD_EN_Product.pdf, 685 KB).
  - Źródło: `https://www.getac.com/content/dam/getac/product-spec-data-pdf/en/<plik>`.
- Przewodniki akcesoriów Getac: `https://www.getac.com/content/dam/getac/product-accessory-data-pdf/en/Getac_<MODEL>_Accessory.pdf` (B360, V120, S410, S510, S510AD): zgodność, dane techniczne, region przewodu w SKU, MOQ, zdjęcia akcesoriów.
- Jarltech (opisy PN, zawartość zestawu, gwarancja 36 miesięcy): `https://www.jarltech.com/en/getac-b360`, `…/getac-v120`, `…/getac-s410`, `…/getac-s510`, `…/getac-s510ad`.
- Strony modeli getac.com (`https://www.getac.com/en/products/laptops/<model>/`) — galerie zdjęć 550 px.
- Ceny i stany: `https://www.takma.com.pl/api/stock`, zapytania partiami po 3 PN (2 wywołania na partię), 23.10.2026. Wszystkie 67 PN (31 laptopów, 36 akcesoriów): `found: true`.

## 2. Karty i PN (konfiguracja według opisu Jarltech, sprawdzona z kartą Getac)

Klucz układu klawiatury: 8. znak PN (`S` US, `3` UK, `4` DE).

| Karta | Slug | PN | Domyślny PN | Cena od (netto) | Karta |
|---|---|---|---|---|---|
| Getac S510AD | getac-s510ad | 1 | SX176A34SDXX (6 szt. + 5 w dostawie) | 9 798,83 zł | available |
| Getac S410 G5 | getac-s410-g5 | 6 | ST2D6AQ4JDXX (2 szt.) | 9 186,15 zł | available |
| Getac S510 | getac-s510 | 14 | SU1N6CQSSDXX (US, 0 szt.) | 10 407,43 zł | unavailable |
| Getac B360 (G3) | getac-b360 | 7 | BV1164BSBDGX (US, 0 szt.) | 15 680,58 zł | unavailable |
| Getac V120 | getac-v120 | 3 | VV116YESBDBA (US, 0 szt.) | 16 587,35 zł | unavailable |

Dostępność według reguły: stan > 0 → `available`; 0 i dostawa → `on-order`; 0/0 → `unavailable`. `priceFrom` = najniższa cena netto z API spośród PN karty.

### Konfiguracje PN

| PN | Procesor | RAM / SSD | Łączność | Wyposażenie (atrybut) | Klawiatura | Cena netto | Stan |
|---|---|---|---|---|---|---|---|
| SX176A34SDXX | Ryzen AI 5 340 | 16 / 256 GB | Wi-Fi 7 | — (bez dotyku, kamera Windows Hello w standardzie) | DE | 9 798,83 | 6 + 5 w dostawie |
| ST2D6AQ4JDXX | Core i5 | 16 / 256 GB | Wi-Fi | — | DE | 10 407,43 | 2 |
| ST2D6A34JRXX | Core i5 | 16 / 256 GB | 5G, GPS | — | DE (filtr Jarltech) | 12 776,46 | 0 |
| ST2D6AC3JDXX | Core i5 | 16 / 256 GB | Wi-Fi | — | UK | 9 186,15 | 0 |
| ST2D6CC3JDXX | Core i5 | 16 / 512 GB | Wi-Fi | — | UK | 10 207,28 | 0 |
| ST2D6AQ3JDXI | Core i5 | 16 / 256 GB | Wi-Fi | RS-232 i VGA | UK | 11 261,10 | 0 |
| ST4N6CQ3JJXI | Core i7 | 16 / 512 GB | 4G LTE, GPS | RS-232 i VGA, złącza anten | UK | 14 859,58 | 0 |
| SU1N6CQSSDXX | Core Ultra 5 | 16 / 512 GB | Wi-Fi | dotyk z rysikiem, kamera 5 MP | US | 11 600,11 | 0 |
| SU1N6CQ3SDXX | Core Ultra 5 | 16 / 512 GB | Wi-Fi | dotyk z rysikiem, kamera | UK | 11 600,11 | 0 |
| SU1N6CQ3SFXX | Core Ultra 5 | 16 / 512 GB | 4G LTE, GPS | dotyk z rysikiem, kamera | UK | 12 948,02 | 0 |
| SU1D6CQ3SFXX | Core Ultra 5 | 16 / 512 GB | 4G LTE, GPS | dotyk z rysikiem | UK | 12 613,08 | 0 |
| SU676A33SDX5 | Core Ultra 7 165U vPro | 16 / 256 GB | Wi-Fi | kamera, RS-232, VGA i drugi LAN | UK | 12 809,14 | 0 |
| SU1D6A34SDX5 | Core Ultra 5 | 16 / 256 GB | Wi-Fi | RS-232, VGA i drugi LAN | DE | 10 407,43 | 0 |
| SU1N6CQ4SDXX | Core Ultra 5 | 16 / 512 GB | Wi-Fi | dotyk z rysikiem, kamera | DE | 11 600,11 | 0 |
| SU1N7CQ4SDCX | Core Ultra 5 | 32 / 512 GB | Wi-Fi | dotyk z rysikiem, kamera, druga bateria | DE | 14 169,30 | 0 |
| SU1D6CQ4SFXX | Core Ultra 5 | 16 / 512 GB | 4G LTE, GPS | dotyk z rysikiem | DE | 12 613,08 | 0 |
| SU1N6CQ4SFXX | Core Ultra 5 | 16 / 512 GB | 4G LTE, GPS | dotyk z rysikiem, kamera | DE | 12 948,02 | 0 |
| SU1N6CQ4SPXX | Core Ultra 5 | 16 / 512 GB | 5G, GPS | dotyk z rysikiem, kamera | DE | 14 210,14 | 0 |
| SU676A34SDX5 | Core Ultra 7 165U vPro | 16 / 256 GB | Wi-Fi | kamera, RS-232, VGA i drugi LAN | DE | 12 809,14 | 0 |
| SU4N6CQ4SJX5 | Core Ultra 7 | 16 / 512 GB | 4G LTE, GPS | dotyk z rysikiem, kamera, RS-232, VGA i drugi LAN, złącza anten | DE | 14 655,36 | 0 |
| SU4N6CQ4SQXX | Core Ultra 7 | 16 / 512 GB | 5G, GPS | dotyk z rysikiem, kamera, złącza anten | DE | 15 472,27 | 0 |
| BV1164BSBDGX | Core Ultra 5 | 16 / 256 GB | Wi-Fi | — | US | 15 680,58 | 0 |
| BV1164B3BDGX | Core Ultra 5 | 16 / 256 GB | Wi-Fi | — | UK | 15 680,58 | 0 |
| BV1164B4BDGX | Core Ultra 5 | 16 / 256 GB | Wi-Fi | — | DE | 15 680,58 | 0 |
| BV1164B4BRGX | Core Ultra 5 | 16 / 256 GB | 4G LTE, GPS | — | DE | 17 028,48 | 0 |
| BV3164B4BDGX | Core Ultra 7 | 16 / 256 GB | Wi-Fi | — (pass-through pominięty, p. 4) | DE | 16 697,63 | 0 |
| BV3166B4BDGX | Core Ultra 7 | 16 / 512 GB | Wi-Fi | — | DE | 17 718,77 | 0 |
| BV3166B4BJGX | Core Ultra 7 | 16 / 512 GB | 4G LTE, GPS | złącza anten | DE | 19 148,36 | 0 |
| VV116YESBDBA | Core Ultra 5 | 16 / 512 GB | Wi-Fi | — | US | 16 587,35 | 0 |
| VV116YE3BDBA | Core Ultra 5 | 16 / 512 GB | Wi-Fi | — | UK | 16 587,35 | 0 |
| VV116YE4BDBA | Core Ultra 5 | 16 / 512 GB | Wi-Fi | — | DE | 16 587,35 | 0 |

Cechy wspólne wszystkich PN karty trafiły do specyfikacji, nie do atrybutów: B360 — dotyk, rysik, czytnik kart chipowych, RS-232 i VGA; V120 — dotyk, rysik, uchwyt twardy, USB-A + RS-232 w gnieździe rozszerzeń; S410 G5 — dotyk i rysik (rysik w akcesoriach standardowych karty Getac).

Kamera S510: w PN `SU1…` 4. znak `N` = z kamerą, `D` = bez kamery (pary PN o identycznym opisie). `SU676…` i `SU4N…` mają w opisie Jarltech „Camera”. Karta Getac: kamera 5 MP albo kamera Windows Hello 5 MP, wykluczają się — w atrybucie „kamera 5 MP” bez rozróżnienia.

Nazwy wariantów bez modelu na początku („Core Ultra 5, 16 GB / 512 GB, Wi-Fi, …, klawiatura US”): feed i koszyk składają tytuł jako „{nazwa produktu} — {nazwa wariantu}”, więc prefiks modelu dawałby „Getac S510 — S510 — …”.

## 3. PN pominięte

- Układy FR, ES, IT, nordycki (FDNS) i arabski: BV1164BDBDGX, BV1164BMBDGX, BV1164BNBDGX, BV1164BNBRGX, SU1D6CQNSFXX, SU1N6CQNSFXX, SU4N6CQYSQXX, SU1N6CQDSDXX, VV116YEDBDBA, VV416YEMBDBX.
- BV1164B4BDAJ — DVD i 2 × 6900 mAh to cechy B360 Pro, nie B360.
- Starsza generacja B360 (Core i5, 8 GB, Windows 10 Pro): BM21Z4B4BDFX, BM21Z4BEBDGX.
- X600 (XR7X66C4EDCA), V110 G4 (VG21ZCK4BPBX), B360 Pro, B360X, B360X Pro, X600 Pro, X600 Server — poza zakresem decyzji właściciela.

## 4. Rozbieżności źródeł (do karty TAKMA wzięto dane z karty Getac, chyba że opisano inaczej)

| Model | Jarltech | Karta Getac | Na karcie TAKMA |
|---|---|---|---|
| S510 | wszystkie PN: Wi-Fi 6E, Bluetooth 5.3 | Wi-Fi 7 BE200, Bluetooth 5.4 | „Wi-Fi 6E albo Wi-Fi 7, zależnie od konfiguracji”, „5.3 albo 5.4” |
| B360 G3 | BV1164B4BRGX, BV3164B4BDGX, BV3166B4BDGX, BV3166B4BJGX: „4800 mAh, 2x, removable battery” | 2 × 4060 mAh | 2 × 4060 mAh; 4800 mAh pominięte |
| B360 G3 | BV3164B4BDGX: „pass Through” bez WWAN i GPS | pass-through dla GPS, WWAN, WLAN | atrybut pominięty (niepewny); złącza anten tylko w BV3166B4BJGX |
| B360 G3 | BV1164B4BRGX: 4G + GPS, bez „pass Through” | — | atrybut bez złączy anten |
| B360 G3 | opis bez MIL-STD-461G | 461G z zasilaczem MIL-STD-461 90 W sprzedawanym osobno | warunek w opisie, specyfikacji i FAQ; karta GAAGE5 |
| V120 | 30,5 cm (12″) | 12,2″ WUXGA | 12,2″ |
| V120 | opis bez Thunderbolt 4 i HDMI | 2 × TB4 i HDMI 2.0 w standardzie | według karty Getac |
| V120 | „USB (type A), RS232” | opcja „USB 3.2 Gen 2 Type-A + Serial port” w gnieździe rozszerzeń (wyklucza czytnik kodów i microSD) | port RS-232 i trzeci USB-A w gnieździe rozszerzeń |
| V120 | — | karta nie używa słów „convertible” ani „tryb tabletu” | słowa pominięte w tekście; opis zdjęcia `_04` opisuje widok („ekran obrócony i złożony na klawiaturze”) |
| S410 G5 | opis rodziny: 8 GB RAM | 16 GB standard, wszystkie PN 16 GB | 16 GB |
| S410 G5 | 1366 × 768 w 5 PN; ST2D6A34JRXX bez rozdzielczości | HD albo FHD, z dotykiem albo bez | „14″ HD 1366 × 768 … (w wersji z 5G: HD albo FHD, zależnie od konfiguracji)” |
| S410 G5 | rysik tylko w opisach ST2D6AQ3JDXI i ST4N6CQ3JJXI | „Capacitive stylus with tether” w akcesoriach standardowych | rysik w zawartości zestawu |
| S410 G5 | procesor „i5 4.6GHz” / „i7 5GHz” | i5-1340P 4,6 GHz, i7-1360P 5,0 GHz | i5-1340P / i7-1360P (wniosek z taktowania) |
| S510AD | opis PN bez ekranu dotykowego | dotyk LumiBond jako opcja | „Wersja w ofercie bez ekranu dotykowego” |
| S510AD | — | przypis VII: „Only available in the US, UK, EU, Australia, and New Zealand, the operating temperature is -15°C to 63°C” | −29…+63°C z tabeli głównej; przypis wygląda na sklejenie przypisu o 5G z innym przypisem — do potwierdzenia u Getac |
| S510 | SU676A3…: Core Ultra 7 165U vPro | przypis I: vPro Enterprise tylko z 2 × Thunderbolt 4 | warunek w specyfikacji i dymku |

Zawartość zestawu: według Jarltech (zasilacz, przewód EU, w większości PN także UK, rysik, uchwyt twardy w V120), sprawdzona z akcesoriami standardowymi kart Getac (B360: bateria, zasilacz 90 W, rysik; V120: baterie, zasilacz 65 W; S410: bateria, zasilacz 90 W, rysik; S510 i S510AD: bateria, zasilacz 65 W). Gwarancja: karta Getac (B360, V120: „3 years Bumper-to-Bumper”; S410, S510, S510AD: „3 years limited warranty”) i Jarltech (36 miesięcy).

Wnioski spoza dosłownej treści kart (oznaczone): „zasilacz z zestawu nie ma certyfikatu MIL-STD-461” (karta: „MIL-STD-461 90W AC adapter sold separately”); złącza anten łączy się z antenami pojazdu przez stację pojazdową (stacje Gamber-Johnson/Havis mają 3 złącza RF).

## 5. Akcesoria (wersje EU)

### Nowe karty (`categoryId: akcesoria`, znacznik `akcesoria-do-laptopow`)

| PN | Slug | Zgodność | Cena netto | Stan |
|---|---|---|---|---|
| GAA6E5 | getac-zasilacz-65w-gaa6e5 | S510, S510AD, V120 | 322,68 | available |
| GAA9E6 | getac-zasilacz-90w-gaa9e6 | S410 G5, S510, S510AD | 404,37 | available |
| GAA9E7 | getac-zasilacz-90w-gaa9e7 | B360 | 404,37 | unavailable |
| GAA3E2 | getac-zasilacz-120w-gaa3e2 | B360, S410 G5 | 461,55 | unavailable |
| GAAGE5 | getac-zasilacz-mil-std-461-gaage5 | B360, V120 | 1 454,10 | unavailable |
| GAT1E1 | getac-zasilacz-usb-c-100w-gat1e1 | B360, S410 G5, V120 | 322,68 | unavailable |
| GAD2X8 | getac-zasilacz-samochodowy-gad2x8 | B360, V120, S410 G5, S510, S510AD | 404,37 | available |
| GBM6X9 | getac-bateria-gbm6x9 | S510, S510AD | 526,91 | on-order |
| GBM4X5 | getac-bateria-gbm4x5 | B360 | 322,68 | unavailable |
| GBM6X6 | getac-bateria-gbm6x6 | S410 G5 | 526,91 | available |
| GBS6X1 | getac-bateria-gbs6x1 | S410 G5 | 486,06 | available |
| GCMCEP | getac-ladowarka-2-gniazdowa-gcmcep | S510, S510AD | 1 548,04 | available |
| GCMCER | getac-ladowarka-2-gniazdowa-gcmcer | B360 | 1 548,04 | unavailable |
| GCMCEJ | getac-ladowarka-2-gniazdowa-gcmcej | S410 G5 (2 baterie główne) | 1 548,04 | unavailable |
| GCECEQ | getac-ladowarka-8-gniazdowa-gceceq | S510, S510AD | 4 893,29 | unavailable |
| GCECES | getac-ladowarka-8-gniazdowa-gceces | B360 | 4 897,37 | unavailable |
| GCECET | getac-ladowarka-8-gniazdowa-gcecet | V120 | 4 893,29 | unavailable |
| GCECEM | getac-ladowarka-8-gniazdowa-gcecem | S410 G5 | 4 893,29 | unavailable |
| GDODEB | getac-stacja-biurkowa-gdodeb | B360 | 1 343,82 | unavailable |
| GDODE4 | getac-stacja-biurkowa-gdode4 | S410 G5 | 1 180,43 | unavailable |
| GSROXC | getac-naped-dvd-gsroxc | S510 | 388,03 | available |
| GMPFXP | getac-folia-ochronna-gmpfxp | B360 | 138,87 | available |
| GMPFXN | getac-folia-ochronna-gmpfxn | S410 G5 | 138,87 | unavailable |
| GMPSXE | getac-rysik-pojemnosciowy-gmpsxe | S410 G5 (przewodnik bez MOQ) | 110,28 | available |
| GMS2X8 | getac-pasek-na-ramie-gms2x8 | V120 | 114,37 | available |
| GMHDX7 | getac-uchwyt-gmhdx7 | V120 | 93,94 | unavailable |
| GMHDXD | getac-uchwyt-twardy-gmhdxd | V120 (część zapasowa; w zestawie V120) | 175,64 | unavailable |

Ładowarka 2-gniazdowa S410: przewodnik ma dwie wersje — GCMCEK (bateria główna + bateria kieszeni multimedialnej) i GCMCEJ (2 baterie główne). Wybrano GCMCEJ, bo pasuje do zapasowych baterii głównych GBM6X6.

Zasilacz 90 W do B360: przewodnik B360 podaje GAA9E7 (Jarltech: GAA9E5) — użyto GAA9E7. Stacja biurkowa B360: przewodnik B360 G3 podaje GDODEB (Jarltech: GDODE1) — API zna GDODEB, użyto GDODEB.

### Rozszerzone karty z `getac-tablet-products.ts`

Zgodność zmieniona w trzech miejscach (wiersz „Zgodność”, `relatedProducts` akcesorium, `relatedAccessories` laptopa), nazwa i opis z laptopami, znacznik `akcesoria-do-laptopow` obok `akcesoria-do-tabletow`.

| PN | Dochodzą laptopy |
|---|---|
| GDDSE2 (DS100) | V120, S410 G5, S510, S510AD (bez B360 — przewodnik B360 G3 nie wymienia DS100) |
| GAD2X4 | B360, V120, S410 G5, S510, S510AD (opis odsyła do GAD2X8) |
| GMBCX7 | B360, S410 G5, S510, S510AD |
| GMBCX2, GAT6E1, GBM2X4, GBM3X8, GCMCET | V120 |

### Pominięte

- MOQ > 1 szt. według przewodników: GMPSXW (rysik V120, S510, S510AD; 10 szt.), GMPFXW (folia S510/S510AD; 10 szt.), GMPFXY (folia V120; 10 szt.), GMPSXN (rysik B360; 5 szt.).
- Dyski SSD (GSSEX3, GSSFX3, GSSEXB, GSSFXC, GSSGXD i inne), usługi GE-SV…, wersje UK (…K…), akcesoria starszych generacji (GCMCEB, GCMCKB).
- GMPFXS i GMHSX9 (Jarltech przy V120; przewodnik V120 podaje GMPFXY i GMHSXG), GMPDX6 przy V120 (PN V120 w ofercie bez digitizera).
- Nieznane API: GMHSXG (pasek na rękę V120), GMCAX1 (kabel USB-C S510AD).
- Stacje pojazdowe Gamber-Johnson, Havis, PMT — bez PN Getac w przewodnikach.

## 6. Zdjęcia

### Laptopy
Płótno 1200 × 800, białe tło (jak tablety Getac), `scripts/obrob-zdjecia.py --kategoria=laptopy-przemyslowe --jak=FW1764WI1DXX.png --bez-ciena` (wypełnienie 0,80 z karty F120), potem spłaszczenie na białe tło. Pomiar bbox produktu (piksele różne od bieli > 12).

| Model | Zdjęcie główne (źródło) | Wypełnienie szer. × wys. | Pozostałe ujęcia |
|---|---|---|---|
| S510AD | getac.com S510AD_01-2 (550 px, ×1,72) | 67,9% × 79,8% | Jarltech GE_S510A-d_black_front_left_shop (1600 px), getac.com 02-2, 03-2, 04 |
| S510 | Jarltech GE_S510_black_front_shop (1600 px) | 68,2% × 80,0% | getac.com S510_02, 03, 04 |
| B360 (G3) | Jarltech GE_B360_black_front_shop (1600 px) | 66,1% × 80,0% | getac.com B360G3_02, 03 (galeria G3 ma tylko 3 ujęcia, bez zamkniętego) |
| V120 | getac.com V120_01 (550 px, ×1,96) | 77,7% × 80,0% | Jarltech GE_V120_Front_Right_Shop (1600 px), getac.com 02, 03, 04 |
| S410 G5 | Jarltech GE_S410_G5_front_shop (1600 px) | 71,5% × 80,0% | getac.com S410G5_01, 02 |

Porównanie z kartami tabletów Getac: F120 76,2% × 80,0%, UX10 G5 79,0% × 80,0%, G140 76,2% × 81,5%. Laptopy mają tę samą wysokość produktu (80%), a szerokość wynika z proporcji otwartego laptopa (66–78%). Napisów na zdjęciach wybranych modeli nie ma.

### Akcesoria
Zdjęcia wyciągnięte z przewodników Getac (800 × 500, maska przezroczystości), płótno 800 × 800, produkt do 84% (jak akcesoria tabletów Getac: GDDSE2 84,0% × 50,4%, GMBCX7 83,9% × 69,2%). 26 kart ze zdjęciem; GCMCEJ bez zdjęcia (logo Getac): kadr w przewodniku S410 ma tylko 248 × 212 px.

Obróbka: GAA6E5 i GAAGE5 — usunięty przewód zasilający z wtyczką US (osobna składowa obrazu); GAA9E6 i GAA9E7 (to samo zdjęcie w przewodnikach) — usunięty przewód z wtyczką US nad zasilaczem; GAD2X8 — wycięta wersja na przewody ze zdjęcia obu wersji; GMS2X8 — wycięty pasek bez sylwetki człowieka i tabletu. Folie (GMPFXP, GMPFXN) i uchwyty (GMHDX7, GMHDXD) pokazują laptop; opis informuje, że laptop nie wchodzi w skład zestawu.

## 7. Treść kategorii i zmiany w istniejących treściach

### Kategoria `/laptopy-przemyslowe`
- H1: „Laptopy przemysłowe rugged”.
- `seoTitle`: „Laptopy przemysłowe — rugged Getac z Windows 11” (+ „ | TAKMA” z szablonu).
- `seoDescription`: „Laptop przemysłowy Getac B360, V120, S410, S510 i S510AD. Laptop rugged, laptop wzmocniony z Windows 11 Pro, IP53 lub IP66, MIL-STD-810H. Ceny netto.”
- Wstęp (90 słów), treść (`laptop-category-content.ts`): tabela porównawcza 5 modeli, poradnik wyboru, FAQ (7 pytań), porównania.

### Zdania przed i po

| Plik | Przed | Po |
|---|---|---|
| `src/data/manufacturers.ts` | seoTitle: Tablety przemysłowe Getac \| TAKMA | seoTitle: Tablety i laptopy przemysłowe Getac \| TAKMA |
| `src/data/manufacturers.ts` | Tablety przemysłowe Getac z Androidem 15 i Windows 11: fully rugged, MIL-STD-810H, IP66 lub IP67, ekrany LumiBond do pracy na słońcu. TAKMA — partner Getac. | Tablety i laptopy przemysłowe Getac z Windows 11 i Androidem 15: fully rugged i rugged, MIL-STD-810H, IP53–IP67, ekrany do pracy na słońcu. TAKMA — partner Getac. |
| `src/data/subcategory-content.ts` (FAQ tabletów) | Laptop rugged (Getac S410, Dell Latitude Rugged) — pełna klawiatura i większy ekran 14″. | [Laptop przemysłowy](/laptopy-przemyslowe) (Getac B360, V120, S410 G5, S510, S510AD) — wbudowana klawiatura i ekran 12,2–15,6″. |
| `src/data/brand-category-content.ts` (K120 G3 „Tablet i laptop w jednym”) | … Klawiatury sprzedaje się osobno. Każda wersja ma port LAN. | … Każda wersja ma port LAN. Laptopy rugged Getac z wbudowaną klawiaturą są w kategorii [laptopy przemysłowe](/laptopy-przemyslowe). |
| `public/llms.txt` | — | nowa sekcja „Laptopy przemysłowe Getac” po sekcji tabletów Getac |
| `getac-tablet-products.ts` (8 kart akcesoriów) | zgodność tylko z tabletami | zgodność i opisy z laptopami (p. 5) |

## 8. Samokontrola z kartami katalogowymi

Każdą kartę laptopa i akcesorium porównano zdanie po zdaniu z kartą Getac i przewodnikiem akcesoriów (title, meta, short, opis, specyfikacja, FAQ, dymki, opisy zdjęć). Poprawione w trakcie:
- B360: dymek „Procesor” bez „grafiki Intel Arc” (karta: Arc tylko przy 16 GB w trybie dwukanałowym — NIEPRECYZYJNE);
- S410 G5: dymek „RAM / SSD” bez PN;
- akcesoria: usunięte wzmianki o ładowarce GCMCEK spoza oferty; GCMCEJ — „nie obsługuje baterii GBS6X1” (przewodnik: „Two Main Batteries”).

Dane spoza karty Getac (oznaczone): PN i konfiguracje, zawartość zestawu, przewody EU/UK (Jarltech); ceny i dostępność (API); opisy zdjęć (widok na zdjęciu).

## 9. Tabele wariantów (build produkcyjny, `next start -p 3148`)

`#warianty .overflow-x-auto`: nadmiar = `scrollWidth − clientWidth` (0 = bez przewijania).

| Karta | Klucze | 1440 px | 1280 px | 1024 px (zwinięta) | 1024 px (rozwinięte niedostępne) |
|---|---|---|---|---|---|
| S510AD | — (1 PN) | 0 | 0 | 0 | — |
| S410 G5 | Procesor, RAM / SSD, Łączność, Klawiatura, Wyposażenie | 0 | 0 | 33 | 79 |
| S510 | Procesor, RAM / SSD, Łączność, Wyposażenie, Klawiatura | 0 | 0 | 0 | 79 |
| B360 | Procesor, RAM / SSD, Łączność, Klawiatura, Wyposażenie | 0 | 0 | 0 | 79 |
| V120 | Klawiatura | 0 | 0 | 0 | 0 |
| wzór: UX10 G5 | — | 0 | 0 | 0 | 23 |

Przy 1024 px szerokość wyznaczają nagłówki z ikoną dymka i stałe kolumny (PN, cena, magazyn, status, przycisk); skrócenie wartości („złącza anten” zamiast „złącza anten zewnętrznych”, układ bez „(QWERTY)”) zmniejsza nadmiar tylko o 4 px. Kolejność kolumn ustala komponent według pierwszego wystąpienia klucza: w S410 G5 i B360 domyślny (pierwszy) PN nie ma „Wyposażenia”, więc kolumna „Klawiatura” stoi przed nią.
