# Tablety Getac w /tablety-przemyslowe — dokumentacja robocza (23.10.2026)

Dokument roboczy: źródła, potwierdzenia konfiguracji PN, pominięte PN, rozbieżności, akcesoria, zdjęcia i poprawki treści kategorii. Nie jest treścią dla klientów.

## 1. Źródła

- Karty katalogowe Getac (EN, „Generated date” 06.08–17.09.2026), hostowane lokalnie w `public/datasheets/`:
  - `getac-zx80.pdf` (Getac_ZX80_EN_Product.pdf), `getac-zx80w.pdf`, `getac-zx10-g2.pdf`, `getac-ux10-g5.pdf`, `getac-f110-g7.pdf`, `getac-f120.pdf`, `getac-k120-g3.pdf`, `getac-g140.pdf`.
  - Źródło: `https://www.getac.com/content/dam/getac/product-spec-data-pdf/en/Getac_<MODEL>_EN_Product.pdf`.
- Przewodniki akcesoriów Getac: `https://www.getac.com/content/dam/getac/product-accessory-data-pdf/en/Getac_<MODEL>_Accessory.pdf` (zgodność, dane techniczne, zdjęcia akcesoriów).
- Jarltech (opis PN, zawartość zestawu, gwarancja 36 miesięcy): strony modeli `https://www.jarltech.com/en/getac-<model>`.
- ERS (ers-online.co.uk) i Barcode Site — tylko do potwierdzenia PN wątpliwych (p. 3).
- Ceny i stany: `https://www.takma.com.pl/api/stock`, zapytania partiami po 3 PN, 23.10.2026 (lastSync ok. 04:55–05:26 UTC). Wynik: `scratchpad/getac-api2/api.json`. Wszystkie użyte PN: `found: true`.

## 2. Karty i PN (konfiguracja według opisu Jarltech, sprawdzona z kartą Getac)

| Karta | Slug | PN | Domyślny PN (stan) |
|---|---|---|---|
| Getac ZX80 | getac-zx80 | 12 | Z8A7LXDX17XC (20 szt.) |
| Getac ZX10 G2 | getac-zx10-g2 | 5 | Z8A1KXW85ABX (27 szt.) |
| Getac UX10 G5 | getac-ux10-g5 | 14 | UW1764VIXDXX (35 szt.) |
| Getac F110 G7 | getac-f110-g7 | 9 | FTA164JI1DXX (55 szt. + 108 w dostawie) |
| Getac F120 | getac-f120 | 12 | FW1764WI1DXX (85 szt.) |
| Getac K120 G3 | getac-k120-g3 | 6 | KTA164V8XKXX (1 szt. + 20 w dostawie) |
| Getac G140 | getac-g140 | 12 | GX2764WI1DXX (0 szt., karta `unavailable`) |
| Getac ZX80W | getac-zx80w | 4 | Z8A7WXWB1AXX (0 szt., karta `unavailable`) |

Dostępność według reguły: stan > 0 → `available`; 0 i dostawa → `on-order`; 0/0 → `unavailable`. `priceFrom` = najniższa cena netto z API.

## 3. Potwierdzenia PN wątpliwych z rozpoznania

| PN | Problem | Decyzja | Potwierdzenie |
|---|---|---|---|
| UW1764VIXDZX | Jarltech: „SSD 16 GB” | **dodany** (16 GB RAM, 256 GB, czytnik 1D/2D, Wi-Fi) | ERS: „UX10G5 … Wi-Fi Only – Ultra 5 – 2D”, 256 GB Flash |
| UW1766VIX1ZX | Jarltech: „SSD 16 GB” | **dodany** (16 GB RAM, 512 GB, 4G LTE, GPS, czytnik 1D/2D) | ERS i Barcode Site: 512 GB, 4G, 2D |
| FW37662I1BLX | Jarltech: „SSD 16 GB” | pominięty | Barcode Site powtarza „16 GB SSD”, brak innego źródła |
| FW47642I1MLX | pusty opis Jarltech | pominięty | Levata: tytuł Core Ultra 7 266V vPro, specyfikacja Core Ultra 5 226V — sprzeczne; WWAN nieznany |
| FT6164JI1MXX, FTB164JI1MXX | nazwa „F110” bez „G7” | pominięte | Barcode Site bez generacji; brak jednoznacznego potwierdzenia |
| FTA154JI1DMX (i FTA154…) | Jarltech 8 GB RAM, karta Getac 16 GB standardowo | **dodane z 8 GB** | ERS: „F110G7 … 8 GB” |
| KTA164W8X4XX, KTA164W8XQXX | różnica V8/W8 niejasna | **dodane jako wersje z digitizerem** | ERS („Digitiser”) i Barcode Site („digitizer”) |

## 4. PN pominięte

- Wersje ATEX (-EX): 10 PN F110G7-EX (FT6A66TI1LHS, FT7Q64TI1LMX, FTAQ66TI1PXS, FTAQ66TI1PXX, FTBQ64TI1DHS, FTBQ64TI1DMX, FTBQ64TI1DXX, FTBQ66TI1PXS, FTBQ66TI1PXX, FTBQ66TI3DHA), UX10 G3-EX USC154WIXDXE.
- Laptopy V110 (VG21ZCK4BPBX) i V120 (5 PN).
- Stare generacje: ZX70 (ZD77Q1DH58AX, ZD77Q1DH5RAX), UX10 G2 (UM51S6VIXDXX).
- Nieznane API: FW47642I1MIX, Z8A7WXGI27XX.
- FTA154JI1XXX (bez Wi-Fi i Bluetooth).
- Niepotwierdzone: FW37662I1BLX, FW47642I1MLX, FT6164JI1MXX, FTB164JI1MXX (p. 3).

## 5. Rozbieżności źródeł (do karty wzięto dane z karty Getac, chyba że opisano inaczej)

| Model | Jarltech / inne | Karta Getac | Na karcie TAKMA |
|---|---|---|---|
| ZX10 G2 | Z8A1K…: 8/128 GB | tylko 256 GB UFS | 128 albo 256 GB „zależnie od PN” (opis PN + kod PN K/L) |
| ZX10 G2 | zestaw: zasilacz, „battery 4950 mAh, 2x”, rysik | standard: 1 bateria + zaślepka; zasilacz 65 W wśród opcji | „bateria wymienna, zasilacz, przewód (EU, UK), rysik” bez liczby baterii |
| ZX80 | „order separately: power cable, power supply unit” | zasilacz 65 W USB-C wśród akcesoriów | zasilacz GAT6E1 jako „Wymagane — sprzedawane osobno” |
| F110 G7 | FTA154…: 8 GB RAM; bateria 2640 mAh | 16 GB standard; 2680 mAh typowo (min. 2640) | 8 albo 16 GB „zależnie od PN”; 2680 mAh |
| F120 | 30,7 cm (12,1″), bateria 4060 mAh | 12,2″, 4070 mAh | 12,2″, 4070 mAh |
| F120 | FW1764WI1DXX i FW17641I1DXX — identyczne opisy | — | oba PN; drugi wariant ma w nazwie PN, różnica nieznana |
| K120 G3 | Wi-Fi 6, Bluetooth 5.2 | Wi-Fi 6E AX211, Bluetooth 5.3 | Wi-Fi 6E, BT 5.3 |
| ZX80W | Z8A7WXWB…: nazwa „Battery Bay Cover”, opis „battery 4950 mAh, removable” | zaślepka kieszeni domyślnie | atrybut „Kieszeń baterii”: Zaślepka (WB) / Bateria wymienna (GI) według nazwy PN |
| UX10 G5 | UW3764…: „Intel Core Ultra 7” bez modelu | opcje 256V, 258V, 266V vPro, 268V vPro | „Core Ultra 7” bez numeru modelu |
| UX10 G5 | brak informacji o baterii podtrzymującej w opisach PN | bridge battery opcjonalna | FAQ: wersje z tabeli bez baterii podtrzymującej, konfiguracja na zapytanie |

Zawartość zestawu: ZX80, ZX10 G2, ZX80W — według Jarltech; UX10 G5, F110 G7, F120, K120 G3, G140 — według listy akcesoriów standardowych karty Getac uzupełnionej o przewód zasilający z Jarltech. Gwarancja: karta Getac („Standard: 3 years Bumper-to-Bumper”, przypadkowe uszkodzenia w standardzie) i Jarltech (36 miesięcy).

## 6. Akcesoria (40 kart, wersje EU, klawiatury US)

Zgodność według przewodników akcesoriów Getac. Ceny i stany z API.

| PN | Karta | Zgodne tablety |
|---|---|---|
| GAT6E1 | getac-zasilacz-usb-c-gat6e1 | ZX80 (wymagany), ZX80W, ZX10 G2, UX10 G5, F120, K120 G3, G140 |
| GBM1XA, GBM2XA | getac-bateria-… | ZX80, ZX80W |
| GCMCEM | getac-ladowarka-2-gniazdowa-gcmcem | ZX80, ZX80W, ZX10 G2 |
| GDODXC | getac-stacja-biurkowa-gdodxc (wymaga GAT6E1) | ZX80, ZX80W |
| GMPDX7 | getac-rysik-digitizer-gmpdx7 | ZX80, ZX80W, ZX10 G2 (wersje z digitizerem) |
| GMHRXL, GMBCX3 | pasek, torba | ZX80, ZX80W |
| GBM1X2, GBM2X3, GDODE8, GDKBUR | baterie, stacja, klawiatura ze stacją | ZX10 G2 |
| GMHRXM | pasek | ZX10 G2, F110 G7 |
| GMBCX2 | torba | ZX10 G2, UX10 G5, F110 G7, F120 |
| GBM6XA, GBM9X5, GCECER, GDOD2A, GDKBUP, GMHRXK, GMBCXA | baterie, ładowarka 8-gn., stacja, klawiatura odpinana, pasek, etui | UX10 G5 |
| GAD2X4 | zasilacz samochodowy 120 W | UX10 G5, F110 G7, F120, G140 |
| GDDSE2 | stacja USB-C DS100 | UX10 G5, F110 G7, F120, K120 G3, G140 |
| GMPDX6 | pióro digitizer | UX10 G5, F110 G7, F120, K120 G3, G140 |
| GBM3X7, GBM6X7, GCMCEL, GDODE7 | baterie, ładowarka, stacja | F110 G7 |
| GBM2X4, GBM3X8, GCMCET, GMHRXQ | baterie, ładowarka, pasek | F120, G140 |
| GDKBUS | klawiatura ze stacją | F120 |
| GBM3X4, GBM4X4, GCMCEF, GDODE5, GDKBUM, GDKBUN | baterie, ładowarka, stacja, klawiatury | K120 G3 |
| GMBCX7 | torba | K120 G3, G140 |

Pominięte: wersje UK/DE/FR/nordyckie, akcesoria starszych generacji, usługi i licencje, stacje pojazdowe Havis/Gamber-Johnson (inny producent, brak PN Getac w przewodnikach), GDKBUL, GMVKX1, GSSEXE (nieznane API), GCECEP (8-gn. ZX80/ZX10), GAD2X8, GAD6X1/X3, GMS2X2/X8, GMS4X4/X5, folie i rysiki pojemnościowe (limit ok. 8 na rodzinę).

## 7. Zdjęcia

Płótno 1200×800, białe tło. Pomiar bbox produktu (piksele różne od bieli > 12):

| Model | Zdjęcie główne (źródło) | Wypełnienie szer. × wys. | Pozostałe ujęcia |
|---|---|---|---|
| ZX80 | getac.com ZX80-slider01 (500 px, ×2,14) | 81,8% × 80,0% | Jarltech GE_ZX80_Display_black_right (1600 px), getac.com slider02, 05, 04 |
| ZX10 G2 | Jarltech GE_ZX10-G2_front_shop_0 (1600 px) | 76,3% × 80,0% | getac.com ZX10G2_02, 03, 05, 04 |
| UX10 G5 | Jarltech GE_UX10G5_front_shop (1600 px) | 79,0% × 80,0% | getac.com UX10G5_02, 03, 04, 06 (usunięty napis „UX10”) |
| F110 G7 | getac.com F110G7_01 (550 px, ×1,99) | 80,8% × 80,0% | getac.com F110G7_02, 03, 05, 04 (Jarltech ma G6 — nieużyty) |
| F120 | Jarltech GE_F120_front_shop (1600 px) | 76,2% × 80,0% | getac.com F120_02, 03, 05 |
| K120 G3 | getac.com K120G3_01 (550 px, ×2,05) | 76,2% × 83,0% | getac.com K120G3_02–05 (Jarltech ma G2-R — nieużyty) |
| G140 | getac.com G140_01 (550 px, ×1,99) | 76,2% × 81,5% | Jarltech GE_G140_front_left (1600 px), getac.com G140_03, 05 |
| ZX80W | Jarltech Getac_ZX80W (2500 px) | 81,9% × 80,0% | getac.com ZX80W_02, 03, 04, 05 |

Wzorce: Honeywell RT10A 76,8% × 83,5%, Zebra ET45 82,2% × 79,9%, Brady RT710 82,4% × 80,8%.

Akcesoria: zdjęcia wyciągnięte z przewodników Getac (800×500, przezroczyste tło), płótno 800×800, produkt do 84%. 30 kart ze zdjęciem. Bez zdjęcia (logo Getac): GBM6XA, GBM9X5, GDOD2A, GDODE8, GDODE5, GBM3X4, GBM4X4, GCMCEF (za mały kadr w przewodniku), GDKBUM i GDKBUN (to samo zdjęcie w przewodniku dla obu klawiatur).

## 8. Treść kategorii i marki — zdania przed i po

| Plik | Przed | Po |
|---|---|---|
| `src/data/products.ts` | Tablety Zebra ET40/ET45/ET60/ET65, Getac F110/T800, Honeywell RT10A | Tablety Zebra ET40/ET45/ET60/ET65, Getac ZX80/F110, Honeywell RT10A |
| `src/data/products.ts` | Getac (F110, T800, UX10, ZX80), Honeywell (RT10A, EDA10A) | Getac (ZX80, ZX80W, ZX10 G2, UX10 G5, F110 G7, F120, K120 G3, G140), Honeywell (RT10A, EDA10A) |
| `src/data/products.ts` | Ekrany od 8 do 12,2 cala z jasnością 500–1000 nit do pracy na słońcu | Ekrany od 8 do 14 cali z jasnością 500–1200 nit do pracy na słońcu |
| `src/data/products.ts` | Alternatywy z Windows: Getac F110 (11,6", IP66, Intel Core) | Alternatywy z Windows: [Getac F110 G7](/produkt/getac-f110-g7) (11,6", IP66, Intel Core) |
| `src/data/products.ts` | Do mroźni: Getac F110 G7 — Windows 11, 11,6″, IP66, -29°C, ale 2,5× droższy (od ~15 000 zł) i bez Androida. | Do mroźni: [Getac F110 G7](/produkt/getac-f110-g7) — Windows 11, 11,6″, IP66, -29°C, ale droższy (od 10 983 zł) i bez Androida. |
| `src/data/products.ts` | Getac F110 G7: tylko Windows, 11,6″, IP66, -29°C, 1200 nit, opcjonalny skaner, dual battery hot-swap, 5G + GPS, od ~15 000 zł. | Getac F110 G7: tylko Windows, 11,6″, IP66, -29°C, 1200 nit, opcjonalny skaner, dual battery hot-swap, wersja z 5G + GPS od 14 856 zł. |
| `src/data/products.ts` | Getac F110 G7 5G — Windows, IP66, -29°C, od ~15 000 zł (2× droższy). | [Getac F110 G7](/produkt/getac-f110-g7) 5G — Windows, IP66, -29°C, od 14 856 zł (2× droższy). |
| `src/data/products.ts` | answer: 'Getac F110 G7 — Windows 11, 11,6″, IP66, -29°C, od ~15 000 zł (droższy, większy). | answer: '[Getac F110 G7](/produkt/getac-f110-g7) — Windows 11, 11,6″, IP66, -29°C, od 10 983 zł (większy ekran, 2 baterie wymieniane bez wyłączania). |
| `src/data/products.ts` | answer: 'Getac F110 G7 z 4G LTE — Windows, 11,6″, IP66, −29°C, od ~16 000 zł (droższy, bez 5G i bez AI Boost). | answer: '[Getac F110 G7](/produkt/getac-f110-g7) z 4G LTE — Windows, 11,6″, IP66, −29°C, od 12 209 zł (bez AI Boost; wersja z 5G od 14 856 zł). |
| `src/data/products.ts` | Główne alternatywy: Getac (F110, T800 — fully rugged, Windows, popularne w wojsku i służbach) | Główne alternatywy: Getac (fully rugged, popularne w wojsku i służbach: ZX80 i ZX10 G2 z Androidem, UX10 G5, F110 G7, F120 i K120 G3 z Windows) |
| `src/data/subcategory-content.ts` | Modele do chłodni: -20°C do -30°C z podgrzewanym ekranem (Zebra ET60/ET65, Getac F110). | Modele do chłodni: -20°C do -30°C z podgrzewanym ekranem (Zebra ET60/ET65). Tablety Getac (np. F110 G7) pracują od -29°C do +63°C. |
| `src/data/subcategory-content.ts` | expertAuthority: 'TAKMA jest autoryzowanym partnerem i integratorem tabletów przemysłowych Zebra Technologies, Getac i Honeywell | expertAuthority: 'TAKMA jest partnerem i integratorem tabletów przemysłowych Zebra Technologies, Getac i Honeywell |
| `src/data/subcategory-content.ts` | Hot Swap (wymiana baterii bez wyłączania urządzenia) — dostępny w Zebra ET, brak w większości modeli Getac i Panasonic. | Hot Swap (wymiana baterii bez wyłączania urządzenia) — dostępny w Zebra ET i w tabletach Getac: ZX80, ZX80W i ZX10 G2 mają kieszeń na baterię wymienną, F110, F120, K120 i G140 pracują na 2 bateriach wymienianych bez wyłączania (LifeSupport), a UX10 G5 ma tę funkcję z opcjonalną baterią podtrzymującą. |
| `src/data/subcategory-content.ts` | description: 'Tablet z podgrzewanym ekranem (Zebra ET60/ET65, Getac F110) pracuje nieprzerwanie w mroźni. | description: 'Tablet z podgrzewanym ekranem (Zebra ET60/ET65) pracuje nieprzerwanie w mroźni. Getac F110 G7 pracuje od -29°C i ma ekran 1200 nit. |
| `src/data/subcategory-content.ts` | Getac i Panasonic w większości modeli wymagają wyłączenia tabletu (restart 30–90 sekund, utrata sesji). | Tablety bez Hot Swap wymagają wyłączenia przy wymianie baterii (restart 30–90 sekund, utrata sesji). Tablety Getac w ofercie TAKMA też wymieniają baterię bez wyłączania (UX10 G5 z opcjonalną baterią podtrzymującą). |
| `src/data/subcategory-content.ts` | Getac: fully rugged z tradycją military-grade (MIL-STD-461G EMC), ekrany LumiBond | Getac: fully rugged z tradycją military-grade (MIL-STD-810H; MIL-STD-461G EMC w modelach z Windows), ekrany LumiBond |
| `src/data/subcategory-content.ts` | Getac F110 (Windows 11,6″) od ~9 500 zł, Getac T800 (Android 8″) od ~6 500 zł. | [Getac F110 G7](/produkt/getac-f110-g7) (Windows 11,6″) od ~10 980 zł, [Getac ZX80](/produkt/getac-zx80) (Android 8″) od ~5 180 zł. |
| `src/data/subcategory-content.ts` | Do chłodni jedynym certyfikowanym rozwiązaniem są: Zebra ET60/ET65 (Android, 10″, -30°C, 1000 nit, podgrzewany ekran, od ~7 920 zł) i Getac F110 (Windows, 11,6″, -29°C, 1000 nit, LumiBond, od ~9 500 zł). | Do chłodni nadają się m.in.: Zebra ET60/ET65 (Android, 10″, -30°C, 1000 nit, podgrzewany ekran, od ~7 920 zł) i [Getac F110 G7](/produkt/getac-f110-g7) (Windows, 11,6″, -29°C, 1200 nit, LumiBond, od ~10 980 zł). Od -29°C pracują też pozostałe tablety Getac w ofercie. |
| `src/data/subcategory-content.ts` | Getac: fully rugged z certyfikatami wojskowymi (MIL-STD-461G EMC), ekrany LumiBond | Getac: fully rugged z certyfikatami wojskowymi (MIL-STD-810H; MIL-STD-461G EMC w modelach z Windows), ekrany LumiBond |
| `src/data/subcategory-content.ts` | title: 'Zebra ET40 vs Getac T800 — Android 10″ vs Android 8″', | title: 'Zebra ET40 vs Getac ZX80 — Android 10″ vs Android 8″', |
| `src/data/subcategory-content.ts` | Getac T800 8″: Qualcomm SDM660, Wi-Fi 6, opcjonalny skaner, IP67, LumiBond ekran, bez Hot Swap, Android do A13, od ~6 500 zł. ET40 wygrywa ceną, ekosystemem i wsparciem. T800 wygrywa IP67 i kompaktowością 8″. | [Getac ZX80](/produkt/getac-zx80) 8″: Qualcomm QCS6490, Android 15, Wi-Fi 6E, opcjonalny czytnik 1D/2D, IP67, ekran LumiBond 1000 nit, bateria wymieniana bez wyłączania, upadki z 1,8 m, od ~5 180 zł. ET40 wygrywa ceną i ekosystemem. ZX80 wygrywa IP67, odpornością na upadki i kompaktowością 8″. |
| `src/data/subcategory-content.ts` | title: 'Zebra ET60 vs Getac F110 — tablet do chłodni i outdoor', | title: 'Zebra ET60 vs Getac F110 G7 — tablet do chłodni i outdoor', |
| `src/data/subcategory-content.ts` | Getac F110: Windows 11, 11,6″, IP66, -29°C, 1000 nit, opcjonalny skaner, LumiBond, od ~9 500 zł. | [Getac F110 G7](/produkt/getac-f110-g7): Windows 11, 11,6″, IP66, -29°C, 1200 nit, opcjonalny skaner, 2 baterie wymieniane bez wyłączania, LumiBond, od ~10 980 zł. |
| `src/data/brand-category-content.ts` | title: 'Honeywell RT10A vs Getac F110 / Panasonic FZ-G2 — cross-brand', | title: 'Honeywell RT10A vs Getac F110 G7 / Panasonic FZ-G2 — cross-brand', |
| `src/data/brand-category-content.ts` | \| Parametr \| [RT10A](/produkt/honeywell-rt10a) \| Getac F110 G7 \| Panasonic FZ-G2 \| | \| Parametr \| [RT10A](/produkt/honeywell-rt10a) \| [Getac F110 G7](/produkt/getac-f110-g7) \| Panasonic FZ-G2 \| |
| `src/data/brand-category-content.ts` | \| Skaner \| **FlexRange 10,7 m** \| Brak \| Brak \| | \| Skaner \| **FlexRange 10,7 m** \| Opcja 1D/2D \| Brak \| |
| `src/data/brand-category-content.ts` | \| Cena od \| 11 229 zł \| ~10 300 zł \| ~12 100 zł \| | \| Cena od \| 11 229 zł \| 10 983 zł \| ~12 100 zł \| |
| `src/data/brand-category-content.ts` | RT10A wygrywa: **wbudowany FlexRange** (Getac/Panasonic wymagają zewnętrznego skanera BT za 2–5 tys. zł) | RT10A wygrywa: **wbudowany FlexRange** (Getac F110 G7 ma czytnik 1D/2D tylko w wybranych wersjach, Panasonic wymaga zewnętrznego skanera BT za 2–5 tys. zł) |
| `src/data/brand-category-content.ts` | Getac F110 G7 (11,6", i5/i7, 1200 nit, IP66 — bez skanera). | [Getac F110 G7](/produkt/getac-f110-g7) (11,6", i5/i7, 1200 nit, IP66, opcjonalny czytnik 1D/2D). |
| `src/data/brand-category-content.ts` | które u konkurencji (Getac, Honeywell, Panasonic) wymagają osobnych licencji o wartości 300–800 zł/urządzenie/rok. | które u konkurencji (Honeywell, Panasonic) wymagają osobnych licencji o wartości 300–800 zł/urządzenie/rok; Getac dostarcza Getac Monitoring i Getac Management w wersji próbnej lub jako opcję. |
| `src/data/brand-category-content.ts` | U Getac/Honeywell/Panasonic porównywalny zestaw = dodatkowe 300–800 zł/rok/urządzenie. | U Honeywell/Panasonic porównywalny zestaw = dodatkowe 300–800 zł/rok/urządzenie; Getac dostarcza Getac Monitoring i Getac Management w wersji próbnej lub jako opcję. |
| `src/data/brand-category-content.ts` | text: 'Getac i Panasonic w większości modeli nie mają bridge battery — wymiana baterii wymaga wyłączenia tabletu (30–90 sekund restart + utrata sesji). | text: 'Tablet bez wymiany baterii w czasie pracy trzeba wyłączyć (30–90 sekund restart + utrata sesji). Tablety Getac też wymieniają baterię bez wyłączania: ZX80 i ZX10 G2 przez kieszeń na baterię wymienną, F110, F120, K120 i G140 dzięki 2 bateriom, a UX10 G5 z opcjonalną baterią podtrzymującą. |

Uwaga: w `brand-category-content.ts` (blok o bridge battery) i `subcategory-content.ts` (blok „Zebra ET ma Hot Swap…”) zdanie o Getac przeniesiono na koniec akapitu, aby nie zmieniać sensu zdania o mikroprzestojach.

Pozostawione bez zmian (poza zakresem faktów Getac): „TAKMA jako autoryzowany partner” w `longDescription` kategorii i we wstępie `subcategory-content.ts`, kwoty licencji Honeywell/Panasonic, wzmianki o Zebra ET80 i Getac S410.

Inne zmiany: `manufacturers.ts` (Getac: „partner” zamiast „autoryzowany partner”, bez laptopów i „IP65+”), logo `public/images/manufacturers/getac.svg`, filtry tabletów (producent Getac, ekrany 11–12,5″ i 14″, IP67, grupa „Bez skanera” dla modeli z czytnikiem jako opcją), `public/llms.txt`.

## 9. Samokontrola z kartami katalogowymi

Każdą kartę porównano zdanie po zdaniu z kartą Getac (title, meta, short, opis, specyfikacja, FAQ, dymki, opisy zdjęć). Poprawione w trakcie:
- usunięte zdania spoza karty: odczyt kodów aparatem (ZX80 FAQ), „zdalne zarządzanie” w dymku vPro, „logowanie i podpis kartą” w dymku czytnika kart, „pasek z uchwytem na rysik” w F120 (Jarltech podaje tylko „hand-strap”);
- usunięte notatki o źródłach w FAQ (F110 „karta katalogowa nie wymienia…”, UX10 „nie mają w opisie konfiguracji”);
- ZX10 G2: wymiana baterii bez wyłączania tylko gdy obie kieszenie mają baterie (karta: bateria + zaślepka w standardzie);
- UX10 G5: LAN może być z boku obudowy, więc nie wyklucza czytnika kodów (poprawione FAQ).
Dane spoza karty Getac (oznaczone): PN i konfiguracje (Jarltech/ERS), zawartość zestawu ZX80/ZX10/ZX80W (Jarltech), ceny i dostępność (API).
