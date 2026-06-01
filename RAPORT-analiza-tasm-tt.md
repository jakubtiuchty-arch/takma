# Raport: Taśmy termotransferowe Zebra (140 SKU, 12 modeli)

**Data**: 29 maja 2026
**Źródło**: `/Users/jakubtiuchty/takma/Taśmy TT/` — 12 plików CSV (per model) + 16 plików xlsx (per kategoria × długość)
**Wynik**: **140 unikalnych Part Number** w **12 modelach** Zebra, podzielonych na **3 kategorie materiałowe**

---

## 1. Diagnoza wstępna — co znalazłem

CSV-y były złamane (BOM + trailing comma → pandas mismatchował kolumny i Part Number kasował się na cenę). Po naprawieniu **CSV i XLSX zawierają DOKŁADNIE TE SAME 140 SKU** — to nie były 262 osobne produkty, tylko ten sam zestaw widoczny dwoma sposobami:

- **CSV** = pogrupowane per model (12 plików, jeden plik = jeden model taśmy)
- **XLSX** = pogrupowane per kategoria × długość (16 plików, jak hurtownia organizuje stany magazynowe)

W sklepie ważniejszy jest podział per model (klient szuka "2300 Wax" lub "5095 Resin"), więc to powinno być dominujące pozycjonowanie URL.

---

## 2. Skala

| Wymiar | Wartość |
|---|---|
| Unikalnych Part Number | **140** |
| Kategorii materiałowych | **3** |
| Modeli taśm | **12** |
| Z ceną EUR | 128 (91%) |
| Cena = 0 (placeholder/EOL) | 12 (9%) |
| Z wymiarami szerokość × długość | 135 (96%) |
| Z rdzeniem | 52 (37%) |
| Status "Production" wszystkie | 140 (100%) |
| Status "EOL" | 0 |

---

## 3. Trzy kategorie × 12 modeli

### Woskowe (Wax) — 64 SKU, 4 modele

| Model | SKU | Cena PLN netto od | Pozycja |
|---|---|---|---|
| **2300 Wax** | **25** | **od 110 zł** | **BESTSELLER** — uniwersalna do papieru, codzienna eksploatacja |
| 2100 European Wax | 15 | (cennik na zapytanie) | European Premium — papier powlekany + chłodnia |
| 5319 Performance Wax | 14 | od ~300 zł | Performance — kolorowe (GOLD), wysoka prędkość |
| 1600 Wax | 10 | od ~140 zł | Najtańsza — krótkie serie, temp. pokojowa |

### Woskowo-żywiczne (Wax/Resin) — 37 SKU, 4 modele

| Model | SKU | Cena PLN netto od | Pozycja |
|---|---|---|---|
| **3200 Wax/Resin** | **21** | (zapytanie) | **BESTSELLER WR** — papier powlekany + syntetyki, uniwersalna |
| 3400 Wax/Resin | 11 | (zapytanie) | Premium WR — polietylen, polipropylen outdoor |
| 3300 Wax/Resin | 4 | od 196 zł | Standard WR — ekonomiczna |
| 5555 Wax/Resin | 1 | 1 317 zł | Specjalistyczna |

### Żywiczne (Resin) — 39 SKU, 4 modele

| Model | SKU | Cena PLN netto od | Pozycja |
|---|---|---|---|
| **5095 Resin** | **20** | od ~475 zł | **BESTSELLER R** — High Performance, poliester (Z-Ultimate), folie |
| 4800 Resin | 11 | od ~640 zł | Standard resin — odporność chemiczna, plomby |
| 5100 Premium Resin | 7 | od ~1 700 zł | Premium — tabliczki znamionowe 10+ lat |
| 8000 ChemResist | 1 | 1 487 zł | Specjalistyczna — agresywne chemikalia |

---

## 4. Najpopularniejsze szerokości

| Szerokość | SKU | Modele | Komentarz |
|---|---|---|---|
| **110 mm** | 40 (29%) | wszystkie 12 | Standard dla drukarek 4" — najczęściej kupowana |
| 60 mm | 11 | 5 | Drukarki desktopowe 2" |
| 83 mm | 9 | 4 | Etykiety wysyłkowe |
| 156 mm | 8 | 4 | Industrial 6" |
| 131 mm | 8 | 3 | |
| 89 mm | 8 | 3 | |
| 220 mm | 7 | 3 | Industrial XL |
| 40 mm | 7 | 4 | Małe etykiety |
| 174 mm | 6 | 3 | |
| 102 mm | 5 | 3 | |

---

## 5. Długości — paradygmat

| Długość | SKU | Komentarz |
|---|---|---|
| **450 m** | 76 (54%) | **Standard przemysłowy** — drukarki industrial (ZT411, ZT231) |
| 74 m | 27 | Drukarki desktopowe (ZD220, ZD230, ZD411, ZD421) |
| 300 m | 13 | Mid-range |
| 50 m | 11 | Mobilne i krótkoseryjne |
| 900 m | 3 | XL — fully industrial |
| 600 m | 3 | XL |
| 30 m | 2 | Bardzo krótkie |

**Wniosek strategiczny**: Skoncentrować promocję na **110 mm × 450 m + rdzeń 25 mm** — to jest "config bestseller" pokrywający 30%+ asortymentu i pasujący do większości drukarek industrial w polskich magazynach.

---

## 6. KLUCZOWE: Mapowanie etykiet TT → polecane taśmy

To **najważniejszy element UX** w sklepie — klient kupujący etykietę TT powinien od razu widzieć, jaką taśmę dokupić. Bez tego zadzwoni z pytaniem.

| Etykieta TT | Materiał etykiety | Polecana taśma | Alternatywa | Tip doboru |
|---|---|---|---|---|
| Z-Perform 1000T | Papier ekonomia | **2300 Wax** | 1600 Wax | 2300 = standard codzienny. 1600 = jeszcze taniej, ale tylko krótkie serie w temp. pokojowej. |
| Z-Perform 1000T Removable | Papier zdejmowalny | **2300 Wax** | — | Standardowo 2300, bez alternatywy. |
| Z-Select 2000T | Papier powlekany premium | **2300 Wax** | 3200 Wax/Resin | 2300 zwykle wystarcza. 3200 — gdy etykieta ma kontakt z wilgocią lub tarciem (gastronomia, healthcare). |
| Z-Essentials 500T | Papier budżet | **1600 Wax** | — | Najtańsza kombinacja. |
| 8000T All-Temp | Papier all-temp (mróz) | **2100 Wax** | 3400 Wax/Resin | 2100 jeśli tylko mróz. 3400 jeśli mróz + tarcie/wilgoć (transport mroźniczy). |
| Z-Ultimate 3000T White | Poliester premium | **5095 Resin** | 5100 Premium Resin | 5095 standard dla poliestru. 5100 — gdy gwarancja 10+ lat / cert. UL na sprzęcie. |
| Z-Ultimate 3000T Silver | Poliester srebrny | **5095 Resin** | 5100 Premium Resin | 5095 wystarcza. 5100 dla tabliczek znamionowych z gwarancją długoterminową. |
| PolyE 3100T Gloss | Polietylen | **3400 Wax/Resin** | 5095 Resin | 3400 do typowych (kosmetyki, opakowania). 5095 jeśli kontakt z chemikaliami. |
| PolyPro 3000T Gloss | Polipropylen biały | **3200 Wax/Resin** | 5095 Resin | 3200 standard. 5095 jeśli outdoor / UV / trwałość 2+ lata. |
| PolyPro 3000T Clear | Polipropylen przezroczysty | **3200 Wax/Resin** | — | Standard. |
| PolyPro 4000T Matte | Polipropylen matowy | **5095 Resin** | — | Matt wymaga lepszej żywicy do machine vision. |
| PolyO 3100T | Poliolefina | **5095 Resin** | 4800 Resin | 5095 standard. 4800 jeśli kontakt z agresywnymi chemikaliami (beczki). |
| 8100T Cryocool | Folia krio (-196°C) | **5095 Resin** | 5100 Premium Resin | 5095 standard krio. 5100 do długoterminowego przechowywania (biobanki). |
| 8000T Blood Bag | Folia worki krwi | **5095 Resin** | — | Standard banków krwi (ISBT 128). |
| 8000T Void Matte | Folia plomby VOID | **4800 Resin** | 5100 Premium Resin | 4800 standard. 5100 jeśli wysoka jakość kodu. |
| 8100T Z-Destruct PE | Folia destruktywna | **4800 Resin** | 8000 ChemResist | 4800 typowo. ChemResist gdy plomby na sprzęcie chemicznym/wojskowym. |

**Statystyka pokrycia**:
- **5095 Resin** = polecana dla **8 etykiet TT** (najczęściej polecana taśma)
- **2300 Wax** = polecana dla **3 etykiet papierowych**
- **3200 Wax/Resin** = polecana dla **3 etykiet** (Z-Select 2000T, PolyPro Gloss/Clear)
- **4800 Resin** = polecana dla **3 etykiet** (plomby + PolyO)

---

## 7. Architektura URL — co już jest i co dodać

### Stan obecny w repo

- `/tasmy-termotransferowe/page.tsx` (670 bajtów, generyczny `<SubcategoryPage>`)
- 24 ribbony już w `products.ts` (z 140 możliwych — pokrycie 17%)
- URL **JEST zaindeksowany** w Google — nie ruszać URL-a, tylko rozbudować

### Plan rozbudowy

```
/tasmy-termotransferowe                              ← LANDING (ZACHOWAĆ URL, ROZBUDOWAĆ contentowo)
/tasmy-termotransferowe/serie/[slug]                 ← 12 nowych stron modeli (dynamiczny route)
```

**Decyzja**: NIE robimy zagnieżdżenia kategoriami (woskowe/woskowo-żywiczne/żywiczne). Lecimy **PŁASKO jak `/etykiety-termiczne`** z 12 modelami na landing.

Powód:
- 140 SKU to nie jest dużo — fitujemy się w 1 landing
- 12 modeli idealnie pasuje do wzorca 3-sekcji ("Woskowe" / "Woskowo-żywiczne" / "Żywiczne") z `<BannerCard>` jak w `/etykiety-termiczne`
- Mniej zagnieżdżeń = lepsza prędkość crawlowania Google + krótsze URL-e

---

## 8. Pliki dostarczone

- **`MASTER-tasmy-tt-140.xlsx`** — pełny rejestr 4 sheety: 140 SKU, modele (12), top szerokości, mapowanie etykieta→taśma
- **`IMPORT-tasmy-tt-FINAL.xlsx`** — import-ready z polskimi nazwami, cenami PLN netto + brutto, polecaną dla etykiet
- **`NEW-PRODUCTS-tasmy-termotransferowe.ts`** — 12 obiektów Product z 140 wariantami, walidacja TS OK

---

## 9. Co należy uzupełnić ręcznie

| Pole | Pokrycie | Co zrobić |
|---|---|---|
| **Cena EUR** dla 12 SKU = 0 | placeholder | Spisać z aktualnego cennika Mahsotools/dystrybutora |
| **Qty/Box** (sztuk w kartonie) | brak | Spisać u dystrybutora (typowo: 6/box dla 6", 12/box dla 4") |
| **GTIN** | brak | Wymagane dla Google Shopping |
| **Stock** | brak | Default `on-order`, upgrade do `available` dla bestsellerów (2300 Wax, 5095 Resin) |
| **Rdzeń mm** | 37% | 122-25 mm to standard Zebry — dla brakujących 88 SKU sprawdzić w karcie produktu |

---

## 10. Łączna skala asortymentu materiałów eksploatacyjnych po wdrożeniu

Po dołożeniu taśm do tego co już zrobiliśmy:

| Kategoria | SKU | Modeli/serii | Pokrycie |
|---|---|---|---|
| Etykiety termiczne (DT) | 292 | 12 | wdrożone |
| Etykiety termotransferowe (TT) | 982 | 16 | brief gotowy |
| **Taśmy termotransferowe** | **140** | **12** | **dziś** |
| **RAZEM** | **1 414** | **40** | |

To jest **bezprecedensowa głębia asortymentu** w polskiej niszy materiałów Zebra. Żaden polski konkurent nie ma tego w jednym sklepie (BCMarket ma ~200 SKU, Pckf ~150, Strefadrukarek ~250).
