# AUDYT SEO / AEO / GEO — Poradnik Zebra Dimensioning

**URL:** `https://www.takma.com.pl/poradnik/zebra-dimensioning-mobilny-pomiar-paczek`
**Data audytu:** 2026-03-28
**Źródło:** `guides.ts` linie 10843–11064 + `GuidePage.tsx` (schema template)

---

## WYNIK OGÓLNY: 68/100 ⚠️

| Kategoria | Waga | Wynik | Max |
|---|---|---|---|
| On-page SEO | 25% | 16 | 25 |
| Treść / E-E-A-T | 25% | 13 | 25 |
| Schema / Dane strukturalne | 15% | 10 | 15 |
| AEO (Answer Engine Optimization) | 15% | 12 | 15 |
| GEO (Generative Engine Optimization) | 10% | 7 | 10 |
| Keyword Coverage | 10% | 10 | 10 |

---

## 1. On-page SEO (16/25)

### seoTitle
```
Zebra Dimensioning — mobilny pomiar wymiarów paczek | Poradnik 2026
```
**69 znaków** — ⚠️ za długo (max ~60). Google obetnie na SERP. Sufiks „| Poradnik 2026" nie wnosi wartości SEO, a zabiera miejsce.

**Rekomendacja:**
```
Zebra Dimensioning — mobilny pomiar paczek terminalem (58 zn.)
```

### seoDescription
```
Poznaj Zebra Dimensioning — technologię mobilnego pomiaru wymiarów paczek na terminalach Zebra z kamerą ToF. Certified vs Mobile Parcel, kompatybilne modele.
```
**160 znaków** — ✅ OK, mieści się w limicie. Treść merytoryczna, zawiera główne frazy.

### H1 (title)
```
Zebra Dimensioning — mobilny pomiar wymiarów paczek terminalem
```
✅ Poprawny, zawiera główne keyword, nie ma buga konkatenacji (bo to guide, nie product page).

### og:type
✅ `article` — poprawnie (template page.tsx linia 26).

### Canonical
✅ Poprawnie ustawiony na `https://www.takma.com.pl/poradnik/zebra-dimensioning-mobilny-pomiar-paczek`

### heroImage
❌ **Brak** — pole `heroImage` nie jest zdefiniowane. Oznacza:
- Brak `og:image` → słabe udostępnianie na social media
- Brak `image` w JSON-LD Article → Google nie wyświetli miniaturki w rich results
- Brak wizualnej atrakcyjności na stronie

**Rekomendacja:** Dodać hero image (terminal Zebra mierzący paczkę, można użyć zdjęcia z fact sheet PDF).

### Duplikaty schema globalne
⚠️ Znany bug — podwójne Organization (2×) i WebSite (2×) z globalnego layoutu.

**Utrata punktów:**
- seoTitle za długi: -3
- Brak heroImage: -4
- Duplikaty schema: -2

---

## 2. Treść / E-E-A-T (13/25)

### Objętość treści
```
Treść czysta (bez HTML): 7 159 znaków, ~900 słów
Sekcji: 6
```

❌ **GŁÓWNY PROBLEM: Treść jest zbyt krótka.** Dla porównania:
- Poradnik ET401: ~5 000 słów → 92/100 🏆
- Poradnik Dimensioning: ~900 słów → daleko poniżej standardu

Wpis wygląda jak rozbudowana karta informacyjna, nie jak ekspercki poradnik. Przy 900 słowach:
- Google postrzega to jako thin content
- AI crawlery (GPT, Perplexity) mają za mało materiału do cytowania
- Brak głębokości eksperckiej wymaganej przez E-E-A-T

**Rekomendowany docelowy rozmiar:** 2500–3500 słów (12 000–18 000 znaków).

### Brakujące elementy treściowe

| Element | Status | Wpływ |
|---|---|---|
| **Case study / przykład z liczbami** | ❌ Brak | Brak dowodu E-E-A-T Experience |
| **Porównanie z konkurencją** | ❌ Brak | Dimensioning vs stacjonarne systemy pomiarowe (np. Cubiscan), vs ręczny pomiar |
| **Koszty / ROI** | ❌ Brak | Brak kalkulacji TCO/ROI — kluczowe dla B2B decision-maker |
| **Proces wdrożenia** | ❌ Brak | Jak zacząć? Licencja, konfiguracja, integracja z WMS/TMS |
| **Ograniczenia** | ❌ Brak | Czego NIE mierzy (czarne obiekty, <10cm, >120cm, taśmociągi) — informacja jest w User Guide |
| **Integracja z systemami** | ❌ Brak | MD API, integracja z WMS/TMS/ERP |
| **Zdjęcia / grafiki** | ❌ Brak | Żadne obrazy, zero wizualizacji procesu |

### Problemy jakościowe treści

**Brak polskich znaków w sekcji §4 (kompatybilne-terminale):**
```
najlepszy stosunek ceny do funkcjonalnosci   → powinno: funkcjonalności
w przystepnej cenie                           → powinno: przystępnej
srodowisk ekstremalnych                       → powinno: środowisk
z wiekszych wysokosci                         → powinno: większych wysokości
sprawdza sie w firmach                        → powinno: sprawdzają się
juz maja flote                                → powinno: już mają flotę
zl                                            → powinno: zł (×6 w tabeli)
```
⚠️ Cała sekcja rekomendacji (linia 10991–10993) jest bez polskich diakrytyków — wygląda jak tekst z konsoli bez UTF-8.

### Autor / E-E-A-T
✅ Jakub Tiuchty, Specjalista AutoID — poprawny Person z jobTitle i worksFor.

**Utrata punktów:**
- Zbyt krótka treść (900 vs 2500+ słów): -5
- Brak case study / przykładów z doświadczenia: -2
- Brak porównania z alternatywami: -2
- Brak zdjęć/grafik: -1
- Bug z polskimi znakami: -2

---

## 3. Schema / Dane strukturalne (10/15)

### Generowane schema:

| Schema | Status | Uwagi |
|---|---|---|
| BreadcrumbList | ✅ | 3 poziomy: Strona główna → Poradniki → Dimensioning |
| Article | ⚠️ | Powinno być TechArticle (patrz niżej) |
| FAQPage | ✅ | 8 pytań — poprawnie |
| HowTo | ❌ N/A | Brak sekcji 'wdrozenie' ani 'krok-*' |
| ItemList | ❌ N/A | Brak tagu 'ranking' |
| Organization (×2) | ⚠️ | Globalny bug — duplikat |
| WebSite (×2) | ⚠️ | Globalny bug — duplikat |

### Article zamiast TechArticle
Logika w GuidePage.tsx (linia 61):
```js
const isTechnical = guide.tags.includes('jak-wybrac') || guide.tags.includes('tco')
  || guide.tags.includes('rfid') || guide.tags.includes('ranking') || guide.tags.includes('porownanie')
```
Tagi tego poradnika: `['dimensioning', 'zebra', 'pomiar-paczek', 'tof', 'logistyka', 'kep']` — **żaden nie matchuje** → schema = Article zamiast TechArticle.

**Fix:** Dodać tag `'jak-wybrac'` do tagów LUB rozszerzyć logikę `isTechnical` o tag `'tof'` / `'dimensioning'`.

### Brak HowTo schema
Wpis opisuje procedurę pomiaru (point-and-shoot), ale nie ma sekcji z id `wdrozenie` ani `krok-*`. Straconana szansa na rich snippet HowTo w Google.

**Fix:** Dodać sekcję „Jak zmierzyć paczkę krok po kroku" z id `wdrozenie` i krokami w `<h3>Krok N: ...</h3>`.

### Dodatkowe atrybuty Article
✅ `wordCount`: dynamicznie obliczany (900)
✅ `speakable`: cssSelector na h1, pierwszą sekcję, #faq
✅ `datePublished` / `dateModified`: 2026-03-28
❌ `image`: undefined (brak heroImage)

**Utrata punktów:**
- Article zamiast TechArticle: -2
- Brak HowTo schema: -2
- Duplikaty Organization/WebSite: -1

---

## 4. AEO — Answer Engine Optimization (12/15)

### FAQ
✅ **8 pytań** — dobra ilość, zróżnicowane intencje:

| # | Pytanie | Typ | Jakość |
|---|---|---|---|
| 1 | Czym jest Zebra Dimensioning? | Definicja | ✅ Dobra |
| 2 | Jaka jest różnica między Certified a Mobile? | Porównanie | ✅ Dobra |
| 3 | Jakie terminale obsługują dimensioning? | Lista | ✅ Dobra, z SKU |
| 4 | Czy mierzy nieregularne kształty? | Tak/Nie | ✅ Dobra |
| 5 | Jaki jest zakres pomiarowy? | Specyfikacja | ✅ Dobra |
| 6 | Czy pomiar działa na zewnątrz? | Tak/Nie | ✅ Dobra |
| 7 | Czy mogę naliczać opłaty? | Praktyka | ✅ Dobra |
| 8 | Jak zmierzyć paczkę terminalem Zebra? | HowTo | ✅ Dobra |

### Brakujące FAQ (do rozbudowy):
- Ile kosztuje licencja Zebra Dimensioning?
- Jak zintegrować dimensioning z WMS?
- Czy dimensioning działa na taśmociągu / w ruchu?
- Jakie są ograniczenia pomiaru? (czarne obiekty, przezroczyste)

### Tabele porównawcze
✅ Tabela Certified vs Mobile Parcel — 5 parametrów
✅ Tabela kompatybilnych terminali — 6 modeli × 5 kolumn
⚠️ Brak tabeli porównawczej z alternatywami (dimensioning vs Cubiscan vs ręczny pomiar)

**Utrata punktów:**
- Brak porównania z alternatywami w tabeli: -2
- Brakujące FAQ o kosztach/wdrożeniu: -1

---

## 5. GEO — Generative Engine Optimization (7/10)

### Cytowalne fragmenty
✅ „3-7% przychodów firm kurierskich ucieka przez niedokładne wymiarowanie" — dobry, z danymi
✅ „nawet 20% przestrzeni magazynowej jest niewykorzystane" — dobry
⚠️ Brak źródeł/atrybutów tych danych — AI engine nie wie skąd pochodzą

### Unikalne treści
⚠️ Wpis jest w dużej mierze parafrazą fact sheet Zebra — brak oryginalnych insightów, brak doświadczeń z wdrożeń, brak polskiego kontekstu rynkowego.

### Linkowanie wewnętrzne
✅ 6 relatedLinks do produktów i kontaktu
✅ Link do `/terminale-mobilne` w treści
✅ 4 linki do kart produktów w tabeli

**Utrata punktów:**
- Brak źródeł przy danych liczbowych: -1
- Brak unikalnych insightów (zbyt blisko fact sheet): -2

---

## 6. Keyword Coverage (10/10)

### Pokrycie fraz kluczowych

| Fraza | Obecność | Lokalizacja |
|---|---|---|
| zebra dimensioning | ✅ | Title, H1, §1, §6, FAQ |
| pomiar wymiarów paczek | ✅ | Title, §1, FAQ |
| kamera ToF / Time-of-Flight | ✅ | §1, §2, FAQ |
| certified mobile parcel | ✅ | §1, §3, FAQ |
| mobile parcel | ✅ | §3, FAQ |
| terminal mobilny zebra | ✅ | §1, §4 |
| pomiar paczek w magazynie | ✅ | §5 |
| dimensioning logistyka | ✅ | §5, tagi |
| point-and-shoot | ✅ | §2, FAQ |
| MBB / Minimum Bounding Box | ✅ | §2 |
| legal-for-trade | ✅ | §3, FAQ |
| TC501 / TC701 z ToF | ✅ | §4, FAQ |

✅ Pełne pokrycie kluczowych fraz — to jedyny obszar bez strat.

---

## PODSUMOWANIE PROBLEMÓW

### Krytyczne (wpływ > 5 pkt)

| # | Problem | Wpływ | Fix |
|---|---|---|---|
| 🔴 1 | **Treść zbyt krótka (900 słów)** | -5 | Rozbudować do 2500–3500 słów |
| 🔴 2 | **Brak heroImage** | -4 | Dodać zdjęcie terminala z dimensioning |
| 🔴 3 | **Brak polskich znaków w §4** | -2 | Poprawić diakrytyki w rekomendacji |

### Ważne (wpływ 2–4 pkt)

| # | Problem | Wpływ | Fix |
|---|---|---|---|
| 🟡 4 | seoTitle za długi (69 zn.) | -3 | Skrócić do ≤60 zn. |
| 🟡 5 | Article zamiast TechArticle | -2 | Dodać tag 'jak-wybrac' lub rozszerzyć logikę |
| 🟡 6 | Brak HowTo schema | -2 | Dodać sekcję wdrożeniową z id 'wdrozenie' |
| 🟡 7 | Brak porównania z alternatywami | -2 | Tabela: dimensioning vs Cubiscan vs ręczny |
| 🟡 8 | Brak case study / ROI | -2 | Dodać kalkulację oszczędności |
| 🟡 9 | Brak sekcji o ograniczeniach | -2 | Dodać na podstawie User Guide |
| 🟡 10 | Duplikaty Organization/WebSite | -1 | Bug globalny |

---

## PLAN ROZBUDOWY (900 → 3000+ słów)

Aby podnieść wynik z **68 → ~88+**, rekomendowane dodatkowe sekcje:

### Nowe sekcje do dodania:

**§2a. Jak zmierzyć paczkę krok po kroku** (id: `wdrozenie`)
- 4–5 kroków: uruchom MD Client → celuj z 60cm → naciśnij przycisk → odczytaj wymiary → potwierdź/powtórz
- Generuje HowTo schema → rich snippet w Google
- ~500 słów

**§3a. Dimensioning vs alternatywy — porównanie**
- Tabela: Zebra Dimensioning vs stacjonarne systemy (Cubiscan) vs ręczny pomiar (taśma)
- Parametry: koszt, mobilność, dokładność, czas pomiaru, integracja
- ~400 słów

**§3b. Ograniczenia pomiaru**
- Czarne/nierefleksyjne powierzchnie — nie działają
- Obiekty przezroczyste — nie działają
- Taśmociągi — nie obsługiwane
- Paczki <10cm i >120cm — poza zakresem
- Waga — nie mierzona (osobna waga potrzebna)
- ~300 słów (dane z User Guide PDF)

**§5a. Koszty i ROI**
- Kalkulacja: ile czasu oszczędza dimensioning vs ręczny pomiar
- Przykład: 200 paczek/dzień × 25 sek. oszczędności = 83 min/dzień = ~1,5 FTE/miesiąc
- Koszt wdrożenia: terminal z ToF + licencja vs zwrot w X miesięcy
- ~400 słów

**§5b. Wdrożenie i integracja**
- Licencja Zebra Dimensioning (Mobility DNA)
- Preinstalowany MD Client
- Integracja przez MD API z WMS/TMS/ERP
- ~300 słów

### Po rozbudowie:
- ~3000 słów (z obecnych 900)
- 10 sekcji (z obecnych 6)
- HowTo schema + TechArticle
- 3 tabele porównawcze (z obecnych 2)
- 10–12 FAQ (z obecnych 8)
- Prognozowany wynik: **86–90/100**

---

## PORÓWNANIE Z INNYMI PORADNIKAMI TAKMA

| Poradnik | Słowa | FAQ | Schema | Wynik |
|---|---|---|---|---|
| Zebra ET401 (guide) | ~5000 | 10 | TechArticle ✅ | 92/100 🏆 |
| **Zebra Dimensioning** | **~900** | **8** | **Article ⚠️** | **68/100 ⚠️** |

Wpis Dimensioning ma 5,5× mniej treści niż ET401. To główna przyczyna niskiego wyniku.
