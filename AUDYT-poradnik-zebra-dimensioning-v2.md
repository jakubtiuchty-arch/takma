# RE-AUDYT SEO / AEO / GEO — Poradnik Zebra Dimensioning (po poprawkach)

**URL:** `https://www.takma.com.pl/poradnik/zebra-dimensioning-mobilny-pomiar-paczek`
**Data re-audytu:** 2026-03-28
**Źródło:** `guides.ts` linie 10843–11224 (zaktualizowane)

---

## WYNIK OGÓLNY: 88/100 🏆

| Kategoria | Waga | Wynik | Max | Zmiana vs v1 |
|---|---|---|---|---|
| On-page SEO | 25% | 22 | 25 | +6 |
| Treść / E-E-A-T | 25% | 21 | 25 | +8 |
| Schema / Dane strukturalne | 15% | 13 | 15 | +3 |
| AEO (Answer Engine Optimization) | 15% | 14 | 15 | +2 |
| GEO (Generative Engine Optimization) | 10% | 8 | 10 | +1 |
| Keyword Coverage | 10% | 10 | 10 | 0 |

**Poprawa: 68 → 88 (+20 pkt)** 🚀

---

## Co zostało naprawione (vs audyt v1)

| Problem z v1 | Status | Szczegóły |
|---|---|---|
| 🔴 Treść 900 słów (thin content) | ✅ Naprawione | **2 092 słów, 16 033 zn., 10 sekcji** (było 900 / 7 159 / 6) |
| 🔴 Brak heroImage | ✅ Naprawione | Dodano `/images/guides/zebra-et401-przewodnik.webp` |
| 🔴 Brak polskich znaków w §4 | ✅ Naprawione | Diakrytyki poprawione, „zl" → „zł" |
| 🟡 seoTitle 69 znaków | ✅ Naprawione | **52 znaki** — idealna długość |
| 🟡 Article zamiast TechArticle | ✅ Naprawione | Tag `jak-wybrac` dodany → TechArticle |
| 🟡 Brak HowTo schema | ✅ Naprawione | Sekcja `wdrozenie` z 5 krokami Krok 1–5 |
| 🟡 Brak porównania z alternatywami | ✅ Naprawione | Nowa sekcja `alternatywy` z tabelą 7×3 |
| 🟡 Brak case study / ROI | ✅ Naprawione | Nowa sekcja `roi` z kalkulacją |
| 🟡 Brak sekcji o ograniczeniach | ✅ Naprawione | Nowa sekcja `ograniczenia` |
| 🟡 Duplikaty Organization/WebSite | ⚠️ Nie naprawione | Bug globalny — wymaga fix w layoucie |

---

## 1. On-page SEO (22/25)

### seoTitle ✅
```
Zebra Dimensioning — mobilny pomiar paczek terminalem
```
**52 znaki** — doskonale, w limicie, zawiera główne keyword.

### seoDescription ✅
```
Poznaj Zebra Dimensioning — technologię mobilnego pomiaru wymiarów paczek
na terminalach Zebra z kamerą ToF. Certified vs Mobile Parcel, kompatybilne modele.
```
**~160 znaków** — w limicie, merytoryczna, z frazami kluczowymi.

### heroImage ⚠️
```
/images/guides/zebra-et401-przewodnik.webp
```
Dodano — ale to **obraz z poradnika ET401**, nie z dimensioning. Lepsze niż brak, ale nie przedstawia procesu pomiaru dimensioning.

**Rekomendacja:** Docelowo zamienić na dedykowany obraz (terminal mierzący paczkę). Tymczasowo OK.

### og:type ✅ `article`

### Canonical ✅

### Duplikaty schema globalne ⚠️
Nadal 2× Organization + 2× WebSite — bug globalny.

**Utrata punktów:**
- heroImage z innego poradnika: -1
- Duplikaty schema: -2

---

## 2. Treść / E-E-A-T (21/25)

### Objętość — ogromna poprawa

| Metryka | v1 | v2 | Zmiana |
|---|---|---|---|
| Słowa | 900 | **2 092** | +132% |
| Znaki | 7 159 | **16 033** | +124% |
| Sekcje | 6 | **10** | +4 nowe |
| FAQ | 8 | **12** | +4 nowe |

### Nowe sekcje — przegląd

| # | Sekcja | Słowa | Ocena |
|---|---|---|---|
| §3 | **Jak zmierzyć paczkę krok po kroku** (`wdrozenie`) | 371 | ✅ Doskonała — 5 szczegółowych kroków, wskazówki praktyczne |
| §5 | **Ograniczenia pomiaru** (`ograniczenia`) | 275 | ✅ Bardzo dobra — czarne powierzchnie, przezroczyste, taśmociągi, zakres |
| §7 | **Dimensioning mobilny vs stacjonarny vs ręczny** (`alternatywy`) | 282 | ✅ Doskonała — tabela 7 parametrów × 3 metody + analiza |
| §9 | **Koszty i zwrot z inwestycji** (`roi`) | 264 | ✅ Bardzo dobra — konkretne liczby, kalkulacja |

### Jakość treści
✅ Polskie diakrytyki poprawione w sekcji rekomendacji
✅ Autor E-E-A-T: Jakub Tiuchty, Specjalista AutoID
✅ Kalkulacja ROI z konkretnymi liczbami (200 paczek/dzień, 73 min oszczędności, 945 zł/mies.)
✅ Porównanie z Cubiscan i ręcznym pomiarem
✅ Ograniczenia technologii — buduje wiarygodność (Experience + Expertise)

### Pozostałe braki
- Brak zdjęć/screenshotów w treści (tylko heroImage) → wizualnie ubogi
- Brak linku do dokumentacji Zebra / źródeł statystyk (3-7%, 20%)

**Utrata punktów:**
- Brak zdjęć w treści: -2
- Brak źródeł statystyk: -1
- heroImage z innego poradnika: -1

---

## 3. Schema / Dane strukturalne (13/15)

### Generowane schema:

| Schema | v1 | v2 | Uwagi |
|---|---|---|---|
| BreadcrumbList | ✅ | ✅ | Bez zmian |
| **TechArticle** | ❌ Article | ✅ **TechArticle** | Tag `jak-wybrac` wyzwala TechArticle |
| FAQPage | ✅ 8 FAQ | ✅ **12 FAQ** | +4 nowe pytania |
| **HowTo** | ❌ Brak | ✅ **5 kroków** | Sekcja `wdrozenie` z Krok 1–5 |
| speakable | ✅ | ✅ | h1, pierwszy paragraf, #faq |
| Organization (×2) | ⚠️ | ⚠️ | Globalny bug |
| WebSite (×2) | ⚠️ | ⚠️ | Globalny bug |

### TechArticle ✅
```json
{
  "@type": "TechArticle",
  "headline": "Zebra Dimensioning — mobilny pomiar wymiarów paczek terminalem",
  "wordCount": 2092,
  "author": { "@type": "Person", "name": "Jakub Tiuchty", "jobTitle": "Specjalista AutoID" },
  "image": "/images/guides/zebra-et401-przewodnik.webp"
}
```

### HowTo ✅ (NOWE)
Sekcja `wdrozenie` z 5 krokami w formacie `<h3>Krok N: ...</h3><p>...</p>`:
1. Uruchom aplikację Mobile Dimensioning Client
2. Przygotuj paczkę na płaskiej powierzchni
3. Celuj kamerą ToF z odpowiedniej odległości
4. Naciśnij przycisk pomiaru
5. Odczytaj i potwierdź wymiary

→ GuidePage.tsx (linie 118–136) poprawnie matchuje ten format i generuje HowTo schema.

### Nowe FAQ w schema
Dodano 4 nowe pytania:
- Ile kosztuje licencja Zebra Dimensioning?
- Jak zintegrować dimensioning z WMS?
- Czy dimensioning działa na taśmociągu?
- Jakie są ograniczenia pomiaru Zebra Dimensioning?

**Utrata punktów:**
- Duplikaty Organization/WebSite: -1
- Brak ItemList (nie jest ranking — OK): 0

---

## 4. AEO — Answer Engine Optimization (14/15)

### FAQ: 12 pytań ✅

| # | Pytanie | Nowe? |
|---|---|---|
| 1 | Czym jest Zebra Dimensioning? | — |
| 2 | Jaka jest różnica między Certified a Mobile? | — |
| 3 | Jakie terminale obsługują dimensioning? | — |
| 4 | Czy mierzy nieregularne kształty? | — |
| 5 | Jaki jest zakres pomiarowy? | — |
| 6 | Czy pomiar działa na zewnątrz? | — |
| 7 | Czy mogę naliczać opłaty? | — |
| 8 | Jak zmierzyć paczkę terminalem Zebra? | — |
| 9 | **Ile kosztuje licencja?** | ✅ NOWE |
| 10 | **Jak zintegrować z WMS?** | ✅ NOWE |
| 11 | **Czy działa na taśmociągu?** | ✅ NOWE |
| 12 | **Jakie są ograniczenia?** | ✅ NOWE |

### Tabele porównawcze: 3 ✅
1. Certified vs Mobile Parcel (5 parametrów)
2. Kompatybilne terminale (6 modeli × 5 kolumn)
3. **NOWA:** Dimensioning mobilny vs stacjonarny vs ręczny (7 parametrów × 3 metody)

### HowTo: 5 kroków ✅
Odpowiada na zapytanie „jak zmierzyć paczkę terminalem" — rich snippet w Google.

**Utrata punktów:**
- FAQ mogłoby mieć pytanie o polski rynek KEP: -1

---

## 5. GEO — Generative Engine Optimization (8/10)

### Cytowalne fragmenty z danymi ✅
- „3-7% przychodów firm kurierskich ucieka przez niedokładne wymiarowanie"
- „nawet 20% przestrzeni magazynowej marnuje się"
- „200 paczek/dzień × 25 sekund = 83 minuty dziennie" (NOWE)
- „27 godzin miesięcznie oszczędności" (NOWE)
- „zwrot z inwestycji: ok. 5 miesięcy" (NOWE)
- „Cubiscan: 30 000–100 000 zł" (NOWE — kontekst cenowy)

### Unikalna treść
✅ Sekcja ograniczeń — nie ma tego na żadnej innej polskiej stronie o dimensioning
✅ Kalkulacja ROI z polskimi cenami (4 734 zł, 35 zł/h)
✅ Porównanie 3 metod z tabelą — unikalny format

### Brak źródeł
⚠️ Statystyki (3-7%, 20%) nadal bez atrybutów źródłowych — AI engine nie wie skąd pochodzą.

**Utrata punktów:**
- Brak źródeł przy statystykach: -1
- Brak linków zewnętrznych (np. do Zebra support): -1

---

## 6. Keyword Coverage (10/10) ✅

Pełne pokrycie + nowe frazy z dodanych sekcji:

| Fraza | Nowa? |
|---|---|
| jak zmierzyć paczkę terminalem | ✅ NOWE (§3 wdrozenie) |
| ograniczenia dimensioning | ✅ NOWE (§5) |
| cubiscan vs zebra dimensioning | ✅ NOWE (§7 alternatywy) |
| roi dimensioning / zwrot z inwestycji | ✅ NOWE (§9) |
| MD API integracja WMS | ✅ NOWE (§9, FAQ) |
| licencja mobility DNA | ✅ NOWE (FAQ) |

---

## POZOSTAŁE REKOMENDACJE (do osiągnięcia 92+)

| # | Rekomendacja | Wpływ | Trudność |
|---|---|---|---|
| 1 | Dedykowany heroImage (terminal mierzący paczkę) | +1 | Średnia |
| 2 | Dodać 2–3 zdjęcia w treści (screenshoty MD Client, pomiar w magazynie) | +2 | Średnia |
| 3 | Atrybuty źródłowe przy statystykach (np. „wg raportu Zebra 2024") | +1 | Niska |
| 4 | Link zewnętrzny do dokumentacji Zebra Dimensioning | +1 | Niska |
| 5 | Naprawić globalne duplikaty Organization/WebSite w layoucie | +1 | Niska |

---

## RANKING PORADNIKÓW TAKMA (zaktualizowany)

| # | Poradnik | Słowa | FAQ | Schema | Wynik |
|---|---|---|---|---|---|
| 🥇 | Zebra ET401 (guide) | ~5 000 | 10 | TechArticle ✅ | 92/100 |
| 🥈 | **Zebra Dimensioning v2** | **~2 100** | **12** | **TechArticle + HowTo ✅** | **88/100** |
| — | Zebra Dimensioning v1 | ~900 | 8 | Article ❌ | 68/100 |
