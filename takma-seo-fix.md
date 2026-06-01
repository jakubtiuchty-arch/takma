# TAKMA — Fix SEO: kanibalizacja `/terminale-mobilne` ↔ `/terminale-mobilne-zebra`

## TL;DR

Dla zapytania **„Terminale mobilne Zebra"** Google rankuje na pozycji 4 stronę `/terminale-mobilne` (generyczna, multi-brand) zamiast dedykowanej `/terminale-mobilne-zebra`. Przyczyna: **wszystkie sygnały SEO na `/terminale-mobilne` są Zebra-heavy** (title, meta description, OG/Twitter, schema, lead). Google traktuje stronę-rodzica jako „bardziej Zebra" niż samą stronę Zebry.

Rozwiązanie: **odzebrować `/terminale-mobilne`** — zmienić title/meta/schema/lead na brand-agnostic (multi-brand). Strona-córka `/terminale-mobilne-zebra` zostaje bez zmian (jest OK).

---

## Diagnoza

### Co rankuje teraz (źle)
- Query: `Terminale mobilne Zebra`
- Pozycja 4: `https://www.takma.com.pl/terminale-mobilne` ← **strona generyczna**
- Pozycja 8–15: `https://www.takma.com.pl/terminale-mobilne-zebra` ← strona dedykowana, którą *chcemy* widzieć w TOP 5

### Dlaczego — sygnały Zebra-heavy na `/terminale-mobilne`

```html
<title>Terminale mobilne Zebra — kolektory danych Android do magazynu i logistyki | TAKMA</title>

<meta name="description" content="Terminale mobilne Zebra z Androidem: TC501, TC701, TC22, TC27, TC53, TC58, MC3400, MC3450, MC9400, MC9450, EM45. Wytrzymałe komputery mobilne IP68 do magazynu, logistyki, produkcji i retail. Ceny netto od 2 180 zł, doradztwo, serwis Zebra." />

<meta property="og:title" content="Terminale mobilne Zebra — kolektory danych Android do magazynu i logistyki" />
<meta name="twitter:title" content="Terminale mobilne Zebra — kolektory danych Android do magazynu i logistyki" />
```

Schema `CollectionPage.description` zaczyna się: `"Terminale mobilne Zebra z Androidem: TC501, TC701..."`

Lead pod H1 „Terminale mobilne" startuje: *„Profesjonalne terminale mobilne (kolektory danych) **Zebra** klasy enterprise z systemem Android. NOWOŚĆ: TC501..."*

H1 jest generyczny (`Terminale mobilne`), ale **wszystko wokół krzyczy „Zebra"**. Google słusznie wyciąga wniosek, że ta strona = strona Zebry.

### Co to robi
Klasyczna **kanibalizacja**: dwie strony walczą o ten sam keyword, Google wybiera silniejszą (więcej linków wewnętrznych, więcej historii w indeksie) i ignoruje drugą. Tu wygrywa rodzic.

---

## Fix-y do wdrożenia

Wszystkie zmiany dotyczą strony **`/terminale-mobilne`** (najpewniej `app/terminale-mobilne/page.tsx` w Next.js, metadata API + komponent React z lead paragraph i `<script type="application/ld+json">`).

### 1) Title

**Było:**
```
Terminale mobilne Zebra — kolektory danych Android do magazynu i logistyki | TAKMA
```

**Ma być:**
```
Terminale mobilne — Zebra, Honeywell, Datalogic, M3, Newland | porównanie 41 modeli | TAKMA
```

Dlaczego: brand-agnostic, z keywordem głównym („Terminale mobilne") na początku, sygnał że to porównywarka multi-brand. Pozwala to stronie rankować na zapytania ogólne (gdzie powinna być pierwsza), a stronie Zebry — na zapytania brand-specific.

### 2) Meta description

**Było:**
```
Terminale mobilne Zebra z Androidem: TC501, TC701, TC22, TC27, TC53, TC58, MC3400, MC3450, MC9400, MC9450, EM45. Wytrzymałe komputery mobilne IP68 do magazynu, logistyki, produkcji i retail. Ceny netto od 2 180 zł, doradztwo, serwis Zebra.
```

**Ma być:**
```
Terminale mobilne enterprise od 5 producentów: Zebra (TC22, TC53, MC9400), Honeywell (CT70, CK67), Datalogic (Memor 30/35, Skorpio X5), M3 Mobile (SM30, UL30), Newland. 41 modeli IP65/IP67/IP68 do magazynu, logistyki i retail. Ceny netto od 2 207 zł.
```

Dlaczego: każdy producent dostaje równe miejsce, keyword „Terminale mobilne" zostaje, znikają wyłącznie-Zebra modele.

### 3) Lead paragraph (pod H1)

**Było:**
> Profesjonalne terminale mobilne (kolektory danych) **Zebra** klasy enterprise z systemem Android. NOWOŚĆ: TC501... [dalej tylko Zebra]

**Ma być:**
> Profesjonalne terminale mobilne (kolektory danych) klasy enterprise z systemem Android — porównanie **41 modeli od 5 producentów**: [Zebra](/terminale-mobilne-zebra) (TC22, TC27, TC53, TC58, MC3400, MC9400, EM45), [Honeywell](/terminale-mobilne-honeywell) (CT70, CT32, CK67), [Datalogic](/terminale-mobilne-datalogic) (Memor 30/35, Skorpio X5), [M3 Mobile](/terminale-mobilne-m3) (SM30, UL30, US30), [Newland](/terminale-mobilne-newland) (N7, MT93). Wytrzymałe (IP65–IP68), z czytnikiem 1D/2D, do magazynu, logistyki, produkcji i retail. Ceny netto od **2 207 zł**.

Dlaczego: równa waga dla każdego brandu **+ linki wewnętrzne do podstron brandowych** (przekazanie PageRank tam, gdzie powinien iść). To jednocześnie fix kanibalizacji **i** wzmocnienie podstron brandowych.

### 4) Schema CollectionPage `description`

**Było:**
```json
"description": "Terminale mobilne Zebra z Androidem: TC501, TC701..."
```

**Ma być:**
```json
"description": "Porównanie terminali mobilnych enterprise od 5 producentów: Zebra, Honeywell, Datalogic, M3 Mobile, Newland. 41 modeli z systemem Android, IP65–IP68, do magazynu, logistyki i retail."
```

### 5) OG / Twitter (konsekwencja zmiany #1)

Zsynchronizować `og:title` i `twitter:title` z nowym `<title>` — albo skrócona wersja:
```
Terminale mobilne — porównanie 41 modeli (Zebra, Honeywell, Datalogic, M3, Newland)
```

---

## Co dodatkowo sprawdzić (drugorzędne, ale wzmacniające)

### A) Linkowanie wewnętrzne — bilans podstron brandowych
W sidebarze nawigacji liczniki produktów (np. `(23)` przy linku do `/terminale-mobilne`) i częstotliwość linków do `/terminale-mobilne` vs. `/terminale-mobilne-zebra` na całej stronie. Cel: **strona Zebry powinna mieć co najmniej tyle samo linków wewnętrznych, co strona-rodzic** (dziś prawdopodobnie ma znacznie mniej).

Audyt: Screaming Frog / Ahrefs Site Audit → raport „Internal Inlinks" → porównać.

### B) Breadcrumbs na kartach produktów Zebry
Sprawdzić, czy `/produkt/zebra-tc22` ma breadcrumbs:
```
Strona główna › Terminale mobilne › Terminale mobilne Zebra › TC22
```
Jeśli przeskakuje od razu do `/terminale-mobilne` z pominięciem `/terminale-mobilne-zebra` — to kolejne osłabianie strony Zebry. Każdy produkt Zebra **musi** linkować do `/terminale-mobilne-zebra` przez breadcrumbs.

Schema BreadcrumbList: pozycja 3 = `/terminale-mobilne-zebra`, pozycja 4 = produkt.

### C) Backlinki — Ahrefs
Porównać:
- `https://ahrefs.com/site-explorer/overview/v2/exact/recent` dla `takma.com.pl/terminale-mobilne`
- to samo dla `takma.com.pl/terminale-mobilne-zebra`

Jeśli zewnętrzne linki idą głównie do rodzica, dla zapytań Zebra warto rozważyć przekierowanie kilku z nich (gdzie kontekst pasuje) na podstronę brandową — albo budowanie backlinków na `/terminale-mobilne-zebra`.

### D) GSC — Request Indexing po deployu
Po deployu zmian:
1. GSC → URL Inspection → `/terminale-mobilne` → **Request Indexing**
2. To samo dla `/terminale-mobilne-zebra` (przyspieszy reindeksację z nowym kontekstem rodzica)

---

## Oczekiwany efekt

**Po 1–3 tygodniach od deployu + reindeksacji:**

| Query | Strona przed | Pozycja przed | Strona po | Pozycja po |
|---|---|---|---|---|
| Terminale mobilne Zebra | `/terminale-mobilne` | 4 | `/terminale-mobilne-zebra` | 3–5 |
| Terminale mobilne | `/terminale-mobilne` | (sprawdzić) | `/terminale-mobilne` | bez zmian lub ↑ (silniejszy lead) |
| Terminale mobilne Honeywell / Datalogic / M3 | różnie | różnie | podstrony brandowe | ↑ (zyskają z nowego linkowania w lead) |

**Dlaczego to zadziała:** Google przestaje widzieć `/terminale-mobilne` jako „stronę Zebry", zaczyna ją interpretować zgodnie z tym, czym faktycznie jest (multi-brand hub). Naturalny wybór dla query „Terminale mobilne Zebra" przesuwa się na stronę dedykowaną.

---

## Ryzyka i monitoring

**Ryzyko:** krótka turbulencja w SERP po deployu (Google reindeksuje, sygnały się stabilizują 1–3 tyg.). Możliwy chwilowy spadek dla query ogólnego „terminale mobilne", zanim nowy title się zafiksuje.

**Monitoring (3 tygodnie po deployu):**
- GSC Performance → filtry per query: `terminale mobilne`, `terminale mobilne zebra`, `kolektor danych zebra`
- GSC Coverage → czy obie strony są w indeksie z aktualnymi metadanymi (URL Inspection → Last Crawl)
- Ahrefs Rank Tracker → te same 5–10 keywordów codziennie

Jeśli po 3 tygodniach `/terminale-mobilne-zebra` nie wskakuje do TOP 10 → kolejny krok to audyt linkowania wewnętrznego (punkt A).
