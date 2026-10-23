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

## 10. Poprawki po audytach (23.10.2026)

### Tablety
| Karta | Przed | Po |
|---|---|---|
| ZX10 G2, UX10 G5, G140 | Pióro digitizer (GMPDX7/GMPDX6) w akcesoriach; ekran „opcja: tryb podwójny z digitizerem” | Pióra usunięte z akcesoriów (oferowane PN nie mają digitizera); rysiki pojemnościowe GMPSXU, GMPSXN, GMPSXW; „tryb podwójny z digitizerem tylko w konfiguracjach na zamówienie” |
| ZX10 G2 | Zestaw: „bateria wymienna, zasilacz…”; FAQ: wymiana na drugiej baterii | Zestaw według karty Getac: bateria 4990 mAh i zaślepka drugiej kieszeni; FAQ: do wymiany bez wyłączania potrzebna druga bateria GBM1X2 albo 2 baterie GBM2X3 |
| ZX80 | short: „baterią wymienianą bez wyłączania”; opisy zdjęć 2 i 3 odwrócone | „kieszeń na baterię wymienianą bez wyłączania (bateria GBM1XA lub GBM2XA sprzedawana osobno)”; zdjęcie 2: lewa strona ze złączami, zdjęcie 3: prawa strona z przyciskami (sprawdzone na obrazach) |
| ZX80W | Zestaw wspólny; brak „Audio”; FAQ „dla akcesoriów z tej karty” | Zestaw per wersja (GI: bateria w kieszeni, przewód EU/UK; WB: zaślepka, przewód EU, rysik); Audio z karty Getac; FAQ z listą akcesoriów wspólnych i GAT6E1 |
| ZX80, ZX80W, ZX10 G2 | „Wi-Fi 6E, 4G LTE albo 5G” | „Każda wersja ma Wi-Fi 6E; wybrane wersje mają też 4G LTE (ZX80 także 5G)” |
| ZX80, ZX80W, G140 | Dymek anteny bez warunku stacji | Złącza RF pass-through podłączane przez stację pojazdową ze złączami RF (ZX80: Gamber-Johnson, 3 złącza; G140: 3 dla 4G, 4 dla 5G) |
| ZX80, ZX10 G2, ZX80W, G140 | Opis zdjęcia dolnej krawędzi: „złącza na dolnej krawędzi” | „złącze dokujące i złącza anten zewnętrznych (w wersjach ze złączami RF)” |
| UX10 G5, F110 G7, F120, K120 G3, G140 | „certyfikaty MIL-STD-810H i MIL-STD-461G” | MIL-STD-461G z zasilaczem MIL-STD-461 90 W sprzedawanym osobno (K120 G3: także wersja z gniazdem DC) — przypisy kart Getac |
| F120 | 12 wariantów, w tym FW17641I1DXX; FW17641I1BXX z digitizerem i paskiem | FW17641I1DXX usunięty (identyczny z FW1764WI1DXX); FW17641I1BXX tylko 5G i GPS (ERS nie potwierdza digitizera, paska ani pass-through). Piątego ujęcia F120 na getac.com nie ma (tylko 01–03, 05 i grafika marketingowa) |
| G140 | Dymek pamięci ogólny; brak GPS w specyfikacji | RAM 16/32 GB, SSD 256 GB / 512 GB / 1 TB; „GPS: w modułach 4G/5G; opcja: dedykowany GPS L1/L5” (karta Getac) |
| UX10 G5 | FAQ: wymiary z klawiaturą ze stacją przy klawiaturze GDKBUP | W ofercie klawiatura odpinana GDKBUP (82 klawisze, IP65, 900 g); wymiary 299 × 265 × 48,7 mm dotyczą klawiatury ze stacją |
| F110 G7 | Zestaw: „rysik pojemnościowy z linką” | „rysik pojemnościowy z linką albo pióro digitizer (wersje z digitizerem)” |
| K120 G3 | Zestaw: „zasilacz 65 W” | „zasilacz USB-C 65 W (wersje z gniazdem DC: zasilacz 65 W z wtykiem DC)” |
| wszystkie | „w tej karcie”, „z tej karty”; „1065 KB” | „w ofercie”; „1,0 MB” |

### Akcesoria
- GAT6E1: zdjęcie bez przewodu z wtyczką US (wycięty przewód; wersji EU nie ma w przewodnikach); opis bez „pierwszego uruchomienia” i „zapasowego”.
- GMPDX7: tylko ZX80 i ZX80W. GMPDX6: tylko F110 G7, F120, K120 G3; zdanie o Smart Touch w F120 i G140.
- Nowe karty: rysiki pojemnościowe GMPSXU (ZX10 G2, 98,03 zł, niedostępny), GMPSXW (F120, G140, 98,03 zł, 6 szt.), GMPSXN (UX10 G5, F110 G7, K120 G3, 98,03 zł, 50 szt.). Przewodniki podają minimalne zamówienie 5 lub 10 szt.
- Baterie: zamiast „według producenta… do 2 razy”: GBM2XA, GBM2X3 „2 razy większa pojemność”; GBM9X5 „ponad 2 razy” (9240/4070 mAh); GBM6X7 „4200 mAh zamiast 2680 mAh” (nie 2×); GBM4X4 „14,4 V i 3450 mAh zamiast 11,1 V i 2100 mAh”; GBM3X8 „ok. 47 Wh zamiast ok. 31,5 Wh” (11,61 V × 4,07 Ah i 7,74 V × 4,07 Ah).
- GAD2X4: zdjęcie tylko wersji z wtykiem zapalniczki (oddzielony drugi zasilacz), opis „W zestawie jest wersja z wtykiem zapalniczki”.
- GDODE8: zdjęcie z przewodnika ZX10 (500×350, powiększenie 1,6×). Opisy zdjęć GDKBUR, GDKBUP, GMBCX2; GMBCX3 (komory na zamek, kieszenie wewnątrz); GDODXC (wejście zasilania USB-C, Power Delivery).

### Treść kategorii, marki i llms.txt
| Plik | Przed | Po |
|---|---|---|
| `src/data/products.ts` | IP65-IP68, ekrany 8-12″, do magazynu | IP65-IP68, ekrany 8-14″, do magazynu |
| `src/data/products.ts` | klawiatury odpinane. TAKMA jako autoryzowany partner oferuje doradztwo, konfigurację MDM | klawiatury odpinane. TAKMA jako partner oferuje doradztwo, konfigurację MDM |
| `src/data/manufacturers.ts` | Tablety przemysłowe Getac z Androidem i Windows 11 Pro: | Tablety przemysłowe Getac z Androidem 15 i Windows 11: |
| `src/data/subcategory-content.ts` | oferują ekrany o jasności 500–1000 nit czytelne w pełnym słońcu | oferują ekrany o jasności 500–1200 nit czytelne w pełnym słońcu |
| `src/data/subcategory-content.ts` | TAKMA jako autoryzowany partner oferuje tablety wszystkich trzech producentów z doradztwem technicznym | TAKMA jako partner oferuje tablety czterech producentów: Zebra, Getac, Honeywell i Brady, z doradztwem technicznym |
| `src/data/subcategory-content.ts` | Serwis gwarancyjny i pogwarancyjny zapewnia serwis-zebry.pl — autoryzowany serwis Zebra działający od 2001 roku. | Serwis gwarancyjny i pogwarancyjny tabletów Zebra zapewnia serwis-zebry.pl — autoryzowany serwis Zebra działający od 2001 roku. |
| `src/data/subcategory-content.ts` | Baterie i zasilanie: typowa pojemność 4 680–12 920 mAh (8–16 godzin pracy). Hot Swap (wymiana baterii bez wyłączania urządzenia) — dostępny w Zebra ET i w tabletach Getac: ZX80, ZX80W i ZX10 G2 mają kieszeń na baterię wymienną, F110, F120, K120 i G140 pracują na 2 bateriach wymienianych bez wyłączania (LifeSupport), a UX10 G5 ma tę funkcję z opcjonalną baterią podtrzymującą. Stacje ładowania: 1-gniazdowe (biurkowe) i 5-gniazdowe (flotowe). | Baterie i zasilanie: pojemność baterii i czas pracy zależą od modelu oraz liczby baterii. Hot Swap (wymiana baterii bez wyłączania urządzenia) jest dostępny w Zebra ET. W tabletach Getac F110 G7, F120, K120 G3 i G140, które pracują na 2 bateriach, jedną baterię wymienia się bez wyłączania. ZX80, ZX80W i ZX10 G2 mają tę funkcję po włożeniu baterii do kieszeni wymiennej. UX10 G5 ma ją tylko w konfiguracji z baterią podtrzymującą, na zamówienie. Ładowarki i stacje: biurkowe 1-gniazdowe i wielostanowiskowe (u Zebra 5-gniazdowe, u Getac 2- i 8-gniazdowe). |
| `src/data/subcategory-content.ts` | W operacjach 24/7 z 3 zmianami to setki mikroprzestojów rocznie na flotę. Tablety Getac w ofercie TAKMA też wymieniają baterię bez wyłączania (UX10 G5 z opcjonalną baterią podtrzymującą). | W operacjach 24/7 z 3 zmianami to setki mikroprzestojów rocznie na flotę. W tabletach Getac F110 G7, F120, K120 G3 i G140, które pracują na 2 bateriach, jedną baterię wymienia się bez wyłączania. ZX80, ZX80W i ZX10 G2 mają tę funkcję po włożeniu baterii do kieszeni wymiennej. UX10 G5 ma ją tylko w konfiguracji z baterią podtrzymującą, na zamówienie. |
| `src/data/subcategory-content.ts` | Getac: fully rugged z tradycją military-grade (MIL-STD-810H; MIL-STD-461G EMC w modelach z Windows) | Getac: fully rugged z tradycją military-grade (MIL-STD-810H; MIL-STD-461G w UX10 G5, F110 G7, F120, K120 G3 i G140, z zasilaczem 90 W sprzedawanym osobno) |
| `src/data/subcategory-content.ts` | Getac: fully rugged z certyfikatami wojskowymi (MIL-STD-810H; MIL-STD-461G EMC w modelach z Windows) | Getac: fully rugged z certyfikatami wojskowymi (MIL-STD-810H; MIL-STD-461G w UX10 G5, F110 G7, F120, K120 G3 i G140, z zasilaczem 90 W sprzedawanym osobno) |
| `src/data/subcategory-content.ts` | ekran 500–1000 nit do pracy na słońcu, tryb dotykowy w rękawicach | ekran 500–1200 nit do pracy na słońcu, tryb dotykowy w rękawicach |
| `src/data/subcategory-content.ts` | Od -29°C pracują też pozostałe tablety Getac w ofercie. | Od -29°C pracują też pozostałe tablety Getac w ofercie. Wyjątek: ZX10 G2 na samej baterii pracuje od -15°C z 1 baterią standardową, od -21°C z 2 standardowymi i od -29°C z 2 bateriami o dużej pojemności; przy zasilaniu sieciowym od -29°C. |
| `src/data/subcategory-content.ts` | answer: 'Standardowa gwarancja: 1–2 lata w zależności od producenta. | answer: 'Standardowa gwarancja: 1–3 lata zależnie od producenta; tablety Getac mają w standardzie 3 lata Bumper-to-Bumper z przypadkowymi uszkodzeniami. |
| `src/data/subcategory-content.ts` | IP67, ekran LumiBond 1000 nit, bateria wymieniana bez wyłączania, upadki z 1,8 m, od ~5 180 zł. | IP67, ekran LumiBond 1000 nit, kieszeń na baterię wymienianą bez wyłączania (bateria sprzedawana osobno), upadki z 1,8 m, od ~5 180 zł. |
| `src/data/brand-category-content.ts` | Getac dostarcza Getac Monitoring i Getac Management w wersji próbnej lub jako opcję. | w tabletach Getac z Androidem Getac Monitoring i Getac Management są w wersji próbnej, a w modelach z Windows Getac Monitoring jest opcją. |
| `src/data/brand-category-content.ts` | Tablety Getac też wymieniają baterię bez wyłączania: ZX80 i ZX10 G2 przez kieszeń na baterię wymienną, F110, F120, K120 i G140 dzięki 2 bateriom, a UX10 G5 z opcjonalną baterią podtrzymującą. | W tabletach Getac F110 G7, F120, K120 G3 i G140, które pracują na 2 bateriach, jedną baterię wymienia się bez wyłączania. ZX80, ZX80W i ZX10 G2 mają tę funkcję po włożeniu baterii do kieszeni wymiennej. UX10 G5 ma ją tylko w konfiguracji z baterią podtrzymującą, na zamówienie. |
| `src/data/brand-category-content.ts` | , ekosystem doków z RS-232/Ethernet, Mobility Edge. | , Mobility Edge. |
| `public/llms.txt` | # TAKMA — Autoryzowany dystrybutor urządzeń AutoID | # TAKMA — partner producentów urządzeń AutoID |
| `public/llms.txt` | TAKMA jako autoryzowany partner Zebra oferuje sprzedaż i obsługę kontraktów serwisowych Zebra OneCare: | TAKMA jako partner Zebra oferuje sprzedaż i obsługę kontraktów serwisowych Zebra OneCare: |
| `public/llms.txt` | gwarancja 3 lata Bumper-to-Bumper (z przypadkowymi uszkodzeniami), praca od −29°C do +63°C. | gwarancja 3 lata Bumper-to-Bumper (z przypadkowymi uszkodzeniami), praca od −29°C do +63°C (ZX10 G2 na samej baterii od −15°C, −21°C albo −29°C, zależnie od baterii). |
| `public/llms.txt` | 12/256 GB, bateria wymieniana bez wyłączania, zasilacz GAT6E1 sprzedawany osobno; | 12/256 GB, kieszeń na baterię wymienianą bez wyłączania (bateria i zasilacz GAT6E1 sprzedawane osobno); |
| `public/llms.txt` | IP66, 2 kieszenie na baterie, GPS. | IP66, 2 kieszenie na baterie (w zestawie 1 bateria), GPS. |
| `public/llms.txt` | [Getac F110 G7](https://www.takma.com.pl/produkt/getac-f110-g7) 11,6″, 1200 nit, 2 baterie wymieniane bez wyłączania; | [Getac F110 G7](https://www.takma.com.pl/produkt/getac-f110-g7) 11,6″, 1200 nit, 2 baterie (jedną wymienia się bez wyłączania); |
| `public/llms.txt` | pióra digitizer, paski na rękę, torby i etui. | pióra digitizer, rysiki pojemnościowe, paski na rękę, torby i etui. MIL-STD-461G w UX10 G5, F110 G7, F120, K120 G3 i G140 wymaga zasilacza 90 W sprzedawanego osobno. |

Bez zmian (C.7): pozostałe wystąpienia „autoryzowany” poza kategorią tabletów i llms.txt; „TAKMA jako autoryzowany serwis Zebra” w FAQ gwarancji tabletów (klasyfikacja audytu nie liczy go jako „partner/dystrybutor”).

### Decyzja: rysiki pojemnościowe usunięte (23.10.2026)
Karty GMPSXU, GMPSXW i GMPSXN usunięto razem z powiązaniami w tabletach (ZX10 G2, UX10 G5, F110 G7, K120 G3, G140, F120), wpisami w mapie wymiarów zdjęć, plikami zdjęć i wzmianką w llms.txt. Powód: przewodniki Getac podają minimalne zamówienie 5 lub 10 szt., a koszyk sprzedaje pojedyncze sztuki; rysik jest w zestawie tabletów. Pióra digitizer zostają tylko przy modelach z wersjami z digitizerem (GMPDX7: ZX80, ZX80W; GMPDX6: F110 G7, F120, K120 G3).
