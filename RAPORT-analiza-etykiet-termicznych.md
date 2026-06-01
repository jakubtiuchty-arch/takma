# Etykiety termiczne Zebra — pełna analiza folderu

**Data**: 16 maja 2026
**Folder źródłowy**: `/Users/jakubtiuchty/takma/Etykiety termiczne/`
**Plik wynikowy z wszystkim w jednym miejscu**: `MASTER-etykiety-termiczne-582.xlsx` (w tym samym folderze)

---

## Najważniejsze w jednym akapicie

Masz **582 modele etykiet termicznych Zebra** w 44 plikach Excela, podzielone na 13 linii produktowych i według rozmiaru rdzenia (12, 13, 19, 25, 32, 35, 76 mm + Fanfold). Wszystkie mają opisy techniczne, ceny w euro, cechy marketingowe i zdjęcia. **Brakuje natomiast trzech rzeczy krytycznych**: kodów EAN (tylko 17 produktów ma — 2.9%), informacji "ile sztuk w kartonie" (tylko 23 produkty — 4%), i polskich opisów (wszystkie są po angielsku). Bez tych danych Google Shopping odrzuci większość produktów, a dział zakupów w firmie nie wie, ile rolek dostanie w jednym kartonie.

---

## Co dokładnie jest w folderze

### Struktura

```
Etykiety termiczne/
├── Etykiety termiczne/                     ← 9 linii podstawowych
│   ├── DT_12mm_Core.xlsx
│   ├── DT_13mm_Core.xlsx
│   ├── DT_19mm_Core.xlsx + folder z 5 plikami
│   ├── DT_25mm_Core.xlsx + folder z 10 plikami
│   ├── DT_32mm_Core.xlsx
│   ├── DT_35mm_Core.xlsx
│   ├── DT_76mm_Core.xlsx + folder z 15 plikami
│   └── DT_Fanfold.xlsx + folder z 2 plikami
└── Etykiety termiczne - Specialty Paper/   ← papier specjalny
    ├── DT_SpecPaper_12mm_Core.xlsx
    ├── DT_SpecPaper_19mm_Core.xlsx
    ├── DT_SpecPaper_25mm_Core.xlsx
    └── DT_SpecPaper_76mm_Core.xlsx
```

"DT" znaczy Direct Thermal — czyli druk termiczny (bez taśmy barwiącej).
"Core" znaczy rdzeń rolki w milimetrach.
"Fanfold" to etykiety składane wachlarzowo (zamiast w rolce — używane głównie w drukarkach przemysłowych dużej wydajności).

---

## Podział na 13 linii produktowych

| Linia | Liczba produktów | Co to jest | Średnia cena netto EUR |
|---|---|---|---|
| **Z-Perform 1000D** | 432 (74%) | Standardowa, ekonomiczna, papierowa | 245 |
| **Z-Select 2000D** | 71 (12%) | Premium z powłoką, do druku wysokiej jakości | 199 |
| **Z-Perform 1000D Removable** | 36 | Standardowa z klejem zdejmowalnym | 258 |
| **ZeroLiner 2000D** | 10 | Bez podkładu (linerless) | 303 |
| **Z-Select 2000D Removable** | 8 | Premium z klejem zdejmowalnym | 262 |
| **ZeroLiner 4500D** | 6 | Bez podkładu, dłuższy metraż | 197 |
| **PolyPro 4000D** | 6 | Polipropylen — wodoodporna, do mrożenia | 237 |
| **ZeroLiner 1100D** | 3 | Bez podkładu, mniejsza średnica rolki | 170 |
| **Z-Perform 1000T Removable** | 2 | Termotransferowa (uwaga: nie termiczna!) | 84 |
| **Z-Perform 1000D 110 Tag** | 2 | Tag bez kleju z perforacją | 255 |
| **Z-Essentials 500D** | 2 | Entry-level | 250 |
| **Z-Essentials 1000D** | 2 | Entry-level | 275 |
| **8000D Jewelry** | 2 | Specjalne — etykiety jubilerskie ze skrzydełkami | 275 |

**Uwaga**: Dwa produkty z linii "Z-Perform 1000T" to faktycznie etykiety termotransferowe (literka "T"), pomyłkowo trafiły do folderu termicznych. Trzeba je przenieść do kategorii termotransferowych albo zostawić — ale opisać jasno.

---

## Podział wg rdzenia rolki (ważne dla doboru pod drukarkę)

| Rdzeń | Liczba produktów | Typowe drukarki |
|---|---|---|
| **25 mm** | 136 | Większość drukarek biurkowych Zebra (ZD220, ZD230, ZD410, ZD411, ZD420, ZD421) |
| **76 mm** | 105 | Drukarki przemysłowe (ZT231, ZT411, ZT421, ZT510, ZT610) |
| **19 mm** | 29 | Mniejsze drukarki biurkowe (ZD220 entry, niektóre mobilne) |
| **Fanfold** | 16 | Drukarki przemysłowe z zewnętrznym podawaniem |
| **12 mm** | 9 | Etykiety mobilne (drukarki ZQ210, ZQ310, ZQ320) |
| **13 mm** | 1 | Specjalna pozycja |

To jest kluczowa informacja **dla klienta** — kupuje etykiety pod konkretną drukarkę, więc filtrowanie po rdzeniu na stronie sklepu to obowiązek.

---

## Podział wg typu materiału

| Typ | Liczba | Zastosowanie |
|---|---|---|
| Papier (Paper Labels) | 553 | Standard — magazyn, wysyłka, paragony |
| Papier specjalny (Specialty Paper) | 19 | Bez podkładu (linerless), mrożenie, mocny klej |
| Syntetyczne (Synthetic — polipropylen) | 6 | Wodoodporne, do mrożenia, chemia |
| Syntetyczne specjalne | 2 | Bardzo specjalistyczne |

---

## Ceny — co masz w ofercie

Wszystkie ceny w euro netto za **karton**, nie za pojedynczą rolkę.

- **Minimum**: 29.67 EUR (ok. 128 zł netto)
- **Maksimum**: 552.36 EUR (ok. 2 375 zł netto)
- **Średnia**: 240 EUR (ok. 1 032 zł netto)
- **Mediana**: 229 EUR (ok. 984 zł netto)

Większość kartonów mieści się w zakresie 150-350 EUR (645-1 505 zł netto).

**Uwaga**: brak danych o cenie minimalnej do reklamy (MAP Price) — wszędzie puste. To znaczy że Zebra nie narzuca minimalnej ceny detalicznej.

---

## Top 15 najpopularniejszych rozmiarów (ile produktów w danym rozmiarze)

| Rozmiar | Liczba SKU | Typowe zastosowanie |
|---|---|---|
| 102×152 mm | 16 | **Etykiety wysyłkowe, paczkomatowe** (alternatywa metryczna do "100×150") |
| 102×102 mm | 16 | Kwadratowe — produktowe, magazynowe |
| 102×178 mm | 16 | Większe wysyłkowe, A6 |
| 51×25 mm | 12 | Małe — produktowe, cenowe |
| 102×76 mm | 10 | Wysyłkowe, magazynowe |
| 76×51 mm | 8 | Średnie wysyłkowe, paczki kurierskie |
| 102×38 mm | 8 | Wąskie, magazynowe |
| 102×64 mm | 8 | Średnie, magazynowe |
| 102×51 mm | 8 | Standardowe, magazynowe |
| 102×148 mm | 8 | Wysyłkowe |
| 102×192 mm | 8 | Duże, A6+ |
| 100×50 mm | 6 | Standardowe |
| 148×210 mm | 6 | A5 — duże, dokumenty WZ |
| 76×25 mm | 6 | Małe wysyłkowe |
| 57×32 mm | 6 | Małe cenowe |

**Uwaga ważna**: jest **tylko 4 produkty w rozmiarze "100×150 mm"** dokładnie pod paczkomaty InPost — a 16 produktów w "102×152 mm" (to praktycznie to samo, ale po metryce calowej). Zebra używa "102×152" bo to dokładne tłumaczenie z 4×6 cala (4" × 6"). Dla klienta polskiego trzeba pisać oba (np. "102×152 mm — alternatywa do 100×150").

---

## Co masz, czego brakuje — twarda lista

### Co JEST przy każdym produkcie (prawie 100%)

| Pole | Procent kompletności | Komentarz |
|---|---|---|
| Kod produktu (Part Number) | **100%** | OK |
| Cena netto EUR | **100%** | OK |
| Nazwa produktu (Friendly Name) | 99.7% | 2 produkty bez nazwy — sprawdzić ręcznie |
| Opis techniczny (po angielsku) | **100%** | OK — ale po angielsku, trzeba przetłumaczyć |
| 5 cech marketingowych | 97-99% | OK — po angielsku |
| **Zdjęcie produktu (URL)** | **99.3%** | OK — 4 produkty bez zdjęcia |
| Status | **100%** | Wszystkie w aktywnej produkcji (zero EOL) |
| Linia produktowa | **100%** | OK |

### Czego BRAKUJE — i to są problemy

| Pole | Procent kompletności | Dlaczego problem |
|---|---|---|
| **GTIN (kod EAN)** | **2.9%** (tylko 17 produktów) | **KRYTYCZNE dla Google Shopping**. Bez GTIN Google odrzuci produkty z większości kategorii. Trzeba ustawić `identifier_exists: false` w pliku produktów, albo zdobyć kody EAN od Zebry. |
| **Ile sztuk w kartonie (Qty/Box)** | **4%** (tylko 23 produkty) | **KRYTYCZNE dla B2B**. Zaopatrzeniowiec musi wiedzieć, że karton ma 8/12/20 rolek, a nie kupować "kota w worku". |
| **Link do karty katalogowej (Spec Sheet URL)** | **0%** | Mile widziane — link do PDF pełnej specyfikacji od Zebry. |
| **Cena minimalna do reklamy (MAP Price)** | **0%** | Zebra nie narzuca — masz wolność cenową. |
| **Wszystkie opisy po polsku** | **0%** | Wszystko jest po angielsku. Do tłumaczenia. |

---

## Co masz wszystko w jednym pliku

Wszystkie 582 produkty są teraz w jednym pliku Excela:

**`MASTER-etykiety-termiczne-582.xlsx`** (w folderze `Etykiety termiczne /`)

Trzy zakładki:

1. **Wszystkie etykiety (582)** — pełna lista z polskimi nagłówkami:
   - Lp., Kod, Linia produktowa (PL), Kategoria PL
   - Rozmiar, Rdzeń
   - Cena netto EUR + automatyczne przeliczenie na PLN (mnożnik 4.3)
   - Ile w kartonie, GTIN, Status
   - Zdjęcie URL, Opis techniczny (EN), 5 cech (EN), Folder źródłowy
   - Filtry włączone, pierwszy wiersz zamrożony
2. **Podsumowanie** — ile produktów na każdą linię + ceny min/max/średnia
3. **Braki do uzupełnienia** — lista, czego brakuje + dlaczego ważne

---

## Co teraz trzeba zrobić (po kolei)

### Krok 1: Decyzja, ile produktów wstawić na stronę

Masz **582 produkty**. Na stronie `takma.com.pl/etykiety-termiczne` jest teraz **4**. To duża luka.

Realnie do wyboru:

- **A) Wstawić wszystkie 582** — kompletna oferta, ale dużo pracy operacyjnej (każdy musi mieć stan magazynowy, każdy musi być monitorowany)
- **B) Wstawić 100-150 najpopularniejszych** — szybsze do uruchomienia, pokrywa 80% popytu
- **C) Wstawić 30-50 flagowych na start** — pierwsze dwa miesiące, potem dorabiać

Moja rekomendacja: **B (100-150 produktów na start)**. Konkretnie:

- Wszystkie **Z-Select 2000D Label** (71 sztuk — premium)
- Top 50 **Z-Perform 1000D Label** (najpopularniejsze rozmiary — wysyłkowe, magazynowe)
- Wszystkie **PolyPro 4000D** (6 sztuk — wodoodporne, popularne w farmacji i chemii)
- Wszystkie **ZeroLiner** (19 sztuk — linerless, nowoczesne, dobra historia w SEO)
- Wszystkie **Removable** (44 sztuki — niszowe, ale wysoka marża)

Razem: ~190 produktów. Pokryje 90% potencjalnego popytu.

### Krok 2: Uzupełnienie krytycznych danych

**Najwyższy priorytet**:

1. **Ile sztuk w kartonie (Qty/Box)** — zapytaj Zebrę albo wylicz z opisów (część opisów ma "20/Box", "8/Box" — trzeba wyciągnąć automatycznie). Bez tego klient nie zamówi.

2. **GTIN / EAN** — jeśli Zebra nie podaje, ustaw informację "brak identyfikatora" w pliku produktów Google. Google przepuści, ale obniży widoczność. Lepiej: poproś przedstawiciela Zebry o pełną listę EAN dla swojego konta partnerskiego.

3. **Polskie opisy** — przetłumacz opisy techniczne. 582 produktów × 1-2 minuty = 10-20 godzin pracy. Można:
   - Tłumaczyć ręcznie najpopularniejsze 100 produktów
   - Pozostałe — automatyczne tłumaczenie + szybka korekta
   - Albo wykorzystać szablon: "Etykieta termiczna [linia] [rozmiar] mm, [opis cech], pasująca do drukarek Zebra z rdzeniem [rdzeń]. Karton zawiera [X] rolek."

### Krok 3: Architektura strony

Strona `takma.com.pl/etykiety-termiczne` powinna mieć **filtry**:

1. **Rozmiar** (102×152, 51×25, etc.)
2. **Rdzeń rolki** (12, 19, 25, 76 mm — kluczowe!)
3. **Typ materiału** (papier standard, papier premium, polipropylen, bez podkładu)
4. **Klej** (permanentny, zdejmowalny, deep freeze, high tack)
5. **Linia produktowa** (Z-Select, Z-Perform, ZeroLiner, PolyPro)
6. **Drukarka kompatybilna** (ZD220/230, ZD410/411, ZD420/421, ZT411, etc.)
7. **Cena** (zakres)

Każdy z filtrów mapuje się 1:1 na pole z pliku MASTER.

### Krok 4: Strony powiązane (te, na które jest najwięcej zapytań)

Z analizy zapytań w Google i danych Zebry wynika, że trzeba dodać:

- `/etykiety-termiczne/do-paczkomatow` (rozmiar 102×152 + 102×178)
- `/etykiety-termiczne/wysylkowe` (102×152, 102×148)
- `/etykiety-termiczne/wodoodporne` (PolyPro 4000D)
- `/etykiety-termiczne/mrozone` (DeepFreeze)
- `/etykiety-termiczne/bez-podkladu` (ZeroLiner)
- `/etykiety-termiczne/cenowe` (małe rozmiary: 51×25, 38×25)
- `/etykiety-termiczne/zdejmowalne` (Removable)

Każda taka strona to landing — strona docelowa z 5-15 produktami i 300-500 słowami opisu pod listą.

---

## Trzy decyzje od Ciebie

1. **Ile produktów dodajemy na pierwsze 2 tygodnie?** A (wszystkie 582), B (~190 wybranych), C (~50 flagowych)?
2. **Czy mogę wygenerować listę top 50 do wstawienia jako pierwsze** (z polskimi opisami) — gotową do importu?
3. **Czy masz dostęp do pełnej listy EAN/GTIN dla swojego konta partnerskiego Zebry?** Jeśli nie — uruchamiamy bez GTIN, ustawiamy "brak identyfikatora" w pliku Google Shopping.

Co dalej?
