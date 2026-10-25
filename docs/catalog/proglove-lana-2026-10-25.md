# ProGlove LANA — karta produktu (25.10.2026)

Karta: `/produkt/proglove-lana` (`src/data/proglove-products.ts`, tablica `progloveProducts`).
Kategoria `terminale-mobilne`, podkategoria `terminale-naramienne` (ProGlove oferuje do LANA mocowanie Arm Mount na przedramię).

## Źródła (pobrane 25.10.2026)

| Dokument | URL | Uwagi |
|---|---|---|
| Karta katalogowa „Technical Specification ProGlove LANA” | https://workaroundgmbh.sharepoint.com/sites/MarkFamily/Shared%20Documents/LANA/Technical%20Documents/260601_Tech_Specifcation_Product-LANA_8.pdf (link z docs.proglove.com, „Documents”) | PDF z 1.06.2026 (wersja 8); stopka „September 2025”. Plik identyczny bajt w bajt z https://www.identwerk.de/media/281761/identwerk-proglove-lana_en.pdf. Na stronie: `/datasheets/proglove-lana.pdf` (161 KB) |
| LANA — User & Regulatory Guide, Rev. A 03/26 | https://workaroundgmbh.sharepoint.com/sites/MarkFamily/Shared%20Documents/LANA/Technical%20Documents/User%26Regulatory%20Guide_LANA-Rev%20A.pdf | Na stronie: `/datasheets/proglove-lana-instrukcja.pdf` (912 KB) |
| EU Declaration of Conformity, LANA (11.05.2026) | https://workaroundgmbh.sharepoint.com/sites/MarkFamily/Shared%20Documents/LANA/Technical%20Documents/Declaration%20of%20Conformity%20-%20LANA%20EU.pdf | Aneks 1: C008 = „LANA 4-Slot Charger Body”, Z010-001 = „Power Cable – LANA 4 Slot Charger (EU)” |
| docs.proglove.com: LANA, Documents, FAQ | https://docs.proglove.com/en/lana.html, `documents-75689.html`, `faq-75691.html` | Glove Mode, ładowanie PD 3.0, praca wielozmianowa |
| Strona produktu | https://proglove.com/products/portable-android-computer/lana/ | Aparat 16 MP, ERP/WMS/QA, praca w pojazdach, IP65 (patrz rozbieżności) |
| Strona mocowań | https://proglove.com/products/wearable-mounts/#lana | Arm Mount: przedramię, dwa rozmiary, materiał do prania; bez PN |
| Spartan POS (US) | https://spartanpos.com/products/la-001 | „Proglove, Lana, Portable Android Computer — LA-001” |
| identWERK, RLS (DE) | https://www.identwerk.de/produkte/mobile-computer/proglove-lana, https://www.rls-gmbh.de/produkte/wearables/proglove-lana-portabler-android-computer/ | Opisy LANA bez PN; identWERK: IP68, RLS: IP68 w tabeli i IP65 w tekście |

Kopie robocze: katalog `lana/src/` w scratchpadzie sesji (poza repozytorium).

## PN, cena i dostępność

| PN | Co to jest | Źródło konfiguracji | API 25.10.2026 |
|---|---|---|---|
| **LA-001** | ProGlove LANA, przenośny komputer z Androidem | Spartan POS (nazwa przy PN); API (stan w magazynie DE dystrybutora); deklaracja zgodności i instrukcja: jeden model radiowy „LANA” dopuszczony w EOG, USA, Kanadzie i Wielkiej Brytanii | found, available, 11 szt. (DE) |

LA-001 nie ma regionalnej końcówki. Producent nie publikuje osobnych wersji LANA na regiony: jedno urządzenie ma oznakowanie CE, FCC i ISED. Regionalny jest tylko przewód zasilający stacji (Z010-001 = EU). Żaden europejski dystrybutor (Levata, ERS, globos.de, BlueStar bez logowania) nie pokazuje publicznie PN LA-001, więc wersji „EU” nie da się potwierdzić dwoma źródłami. Zakładam, że LA-001 to jedyny PN urządzenia.

## Mocowania i ładowanie

- **Arm Mount** (mocowanie na przedramię, dwa rozmiary): ProGlove nie publikuje PN. Nie ma go na stronie mocowań, w karcie „Wearables March 2026”, w docs ani u dystrybutorów. Sprawdzone w API PN zgadywane (G009–G015, G021–G031, G040, G041, warianty -S/-L) — wszystkie `found: false`. **Brak kart mocowań.**
- **Stacja 4-gniazdowa** (tylko do LANA; 155 × 58 × 20 mm, 630 g, IP20, ładowanie 5–40 °C):
  - C008 — korpus stacji (deklaracja zgodności), API: available, 4 szt.;
  - C008-EU — API: available, 3 szt. Konfiguracja nieopublikowana. Różnica cen C008-EU − C008 równa się cenie Z010-001 (przewód EU), więc to najpewniej korpus z przewodem EU. Brak drugiego źródła;
  - Z010-001 — przewód zasilający EU stacji (deklaracja zgodności), API: 0 szt. → unavailable.
  - **Brak karty stacji** (poza zakresem briefu; C008-EU bez potwierdzonej zawartości). FAQ na karcie: „Stację 4-gniazdową przygotujemy na zapytanie”.
- **Blok „Wymagane”: nie.** LANA działa bez mocowania (kieszeń) i ładuje się przez USB-C (ok. 150 min). Producent zaleca zasilacz USB-C PD 3.0; zawartość opakowania (przewód, zasilacz) nie jest opublikowana.

## Powiązania

- MAI (`proglove-mai`): `relatedProducts` + zdanie w FAQ „Czy MAI działa bez telefonu lub terminala?”. MAI jest jedynym skanerem wymienionym z nazwy w dokumentacji LANA (instrukcja: „Connect wearable scanner i.e. MAI”). Pozostałe karty skanerów bez zmian: dokumentacja mówi tylko o „supported ProGlove scanners”, bez listy modeli.
- `/skanery-proglove` (`proglove-category.ts`): punkt „Komputer ProGlove LANA” w sekcji „Co sprawdzić przed zakupem?”.
- `/terminale-naramienne` (`wearable-terminal-category.ts`): `productIds` + `proglove-lana`, `productCount: 3`; definicja: „dwa terminale Zebra i komputer ProGlove LANA” oraz jedno zdanie o LANA. Tytuł SEO, opis SEO i tabela porównawcza kategorii nadal wymieniają tylko Zebra WT5400 / WT6400 — do decyzji.
- Filtr „Producent” w `/terminale-mobilne` (`category-filters.ts`): dodany ProGlove.
- `relatedProducts` LANA: `proglove-mai`, `zebra-wt5400`, `zebra-wt6400` (komputery z Androidem noszone na przedramieniu).

## Zdjęcia (800 × 800 PNG, przezroczyste tło)

| Plik | Źródło | Obróbka |
|---|---|---|
| `proglove-la-001.png` | proglove.com `/wp-content/uploads/2026/01/lana-section-three-image.png` (939 × 634, przezroczyste) | kadr do produktu, 74% szerokości kadru |
| `proglove-la-001-2.png` | identWERK `/media/281755/proglove-produkt-lana-display-vorderansicht-horizontal.png` (render producenta, 1920 × 960, białe tło) | odcięty znak wodny identWERK (róg), usunięte tło, 70% wysokości |
| `proglove-la-001-3.png` | identWERK `/media/281758/proglove-produkt-lana-seitenansicht-rechts.png` | jw., 74% szerokości |
| `proglove-la-001-4.png` | identWERK `/media/281759/proglove-produkt-lana-unten.png` | jw., 74% szerokości |

Wymiary dla mapy og:image: `lana/dims.json` w scratchpadzie (mapa `product-image-dims.json` nieedytowana).

## Rozbieżności źródeł

| Parametr | Źródło A | Źródło B | Decyzja |
|---|---|---|---|
| Szczelność | karta katalogowa 06.2026 i instrukcja Rev. A 03/26: **IP68** | strona produktu proglove.com: „IP65-rated rugged design”; RLS (tekst), barcodeblog.de: IP65 | **IP68** (najnowsza karta katalogowa i instrukcja) |
| Czas ładowania przez USB-C | karta: ok. 150 min | FAQ docs: ok. 2 h 15 min z zasilaczem PD 3.0 | na karcie 150 min + zalecenie PD 3.0 |
| Temperatura ładowania | karta (urządzenie): 0–45 °C | instrukcja (stacja 4-gniazdowa): 5–40 °C | w specyfikacji LANA 0–45 °C (dotyczy urządzenia) |
| Aparat | strona produktu: 16 MP | karta katalogowa: brak pola „aparat”; instrukcja: aparat i lampa LED bez rozdzielczości | 16 MP ze strony producenta (SPOZA KARTY) |
| Bluetooth | karta: Bluetooth 5 (BLE) | instrukcja: BT/BLE 2402–2480 MHz | Bluetooth 5 |

## Samokontrola (zdanie po zdaniu, karta katalogowa + instrukcja)

- Opis (≈170 słów), shortDescription, seoTitle, seoDescription, FAQ, specyfikacja, opisy zdjęć: zgodne z kartą/instrukcją; spoza karty, ale od producenta: aparat 16 MP, ERP/WMS/QA, praca w pojazdach, Glove Mode, PD 3.0 i praca wielozmianowa (docs FAQ), Arm Mount (strona mocowań).
- Wyprowadzone: „brak wbudowanego czytnika kodów” (karta i instrukcja nie wymieniają silnika skanującego; przeznaczenie: współpraca ze skanerami ProGlove).
- `porownaj-opisy.py` (description, shortDescription, seoDescription, faq): 0 wspólnych 6-gramów LANA z kartami ProGlove, terminali i całym katalogiem.
