# TAKMA — Fix SEO: dlaczego `/drukarki-etykiet` rankuje słabo na query „drukarki etykiet"

## TL;DR

`/drukarki-etykiet` (parent) — 46 impr / poz. 22.7
`/przemyslowe-drukarki-etykiet` (subpage) — 332 impr / TOP 10
**Po audycie kodu**: on-page SEO i schema są OK na obu stronach. Problem leży w **dystrybucji linków wewnętrznych**, która faworyzuje subpages kosztem parent.

---

## Co już jest dobrze (eliminacje)

| Sygnał | Parent `/drukarki-etykiet` | Subpage `/przemyslowe-drukarki-etykiet` |
|---|---|---|
| `seoTitle` | `Drukarki etykiet i kodów kreskowych \| Biurkowe, przemysłowe, mobilne` | `Przemysłowe drukarki etykiet \| Druk 24/7 do magazynu i produkcji` |
| `seoDescription` | brand-agnostic, 4 typy + 3 marki | brand-agnostic, qualifier first |
| Canonical | ✅ self-ref www | ✅ self-ref www |
| BreadcrumbList JSON-LD | ✅ | ✅ |
| CollectionPage JSON-LD | ✅ (39 produktów) | ✅ (32 produkty) |
| FAQPage JSON-LD | ✅ (8 Q&A) | ✅ (6 Q&A) |
| HowTo JSON-LD | ✅ (5 kroków) | ✅ (5 kroków) |
| Speakable WebPage JSON-LD | ✅ | ✅ |
| Visual content sections | ✅ — Definition + Buying guide + Authority + Tech deep dive + 6 use cases + 10 insights + Comparisons + HowTo + FAQ | ✅ — pełny set |

301 z non-www → www: **prawidłowy** (301 permanent, GSC potwierdza canonical = www).

Wniosek: ani title, ani schema, ani content, ani redirect nie są problemem.

---

## Smoking gun: dystrybucja linków wewnętrznych

### Industry pages — 0 linków do parent

Plik `src/data/industry-content.ts` zawiera 6 industry landing pages:
- `drukarki-etykiet-produkcja`
- `drukarki-etykiet-e-commerce`
- `drukarki-etykiet-gastronomia`
- `drukarki-etykiet-magazyn`
- `drukarki-etykiet-logistyka`
- `drukarki-etykiet-apteka`

Każda z nich ma sekcję `relatedArticles` z linkami do subcategorii. Liczba linków:
- `/biurkowe-drukarki-etykiet`: **5×**
- `/przemyslowe-drukarki-etykiet`: **4×**
- `/termiczne-drukarki-etykiet`: **1×**
- `/drukarki-etykiet` (parent): **0×** ← **PROBLEM**

Każda industry page ma własny temat „drukarki etykiet do X" i powinna linkować do parent jako hub kategorii. Obecnie każda przepompowuje PageRank wyłącznie na subcategorie.

### Guides.ts — przewaga subpages w relatedArticles

W `src/data/guides.ts`:
- Inline `<a href="/drukarki-etykiet">` w treści: 2
- Inline `<a href="/przemyslowe-drukarki-etykiet">` w treści: 2
- relatedArticles → parent: 3
- relatedArticles → subpage przemyslowe: 6
- relatedArticles → subpage biurkowe: 7

Subpage przemyslowe ma **2× więcej** wpisów `relatedArticles` niż parent.

### Łączna pozycja

| Lokalizacja | Parent | przemyslowe | biurkowe |
|---|---|---|---|
| Navbar (main + dropdown) | 2 | 1 | 1 |
| Footer | 1 | 0 | 0 |
| Inline content links (guides body) | 2 | 2 | ? |
| Industry pages relatedArticles | **0** | 4 | 5 |
| Guide relatedArticles | 3 | 6 | 7 |
| Breadcrumbs (z product pages) | równe | równe | równe |
| Post-order page | 1 | 0 | 0 |

Parent dominuje tylko w nawigacji top-level. Subpages dominują w **wszystkich kontekstualnych** miejscach (industry pages, guide articles, related links) — czyli dokładnie tam, gdzie Google najmocniej waży topical relevance.

---

## Fix — 3 zmiany w kodzie, każda < 30 min

### Fix #1: Dodać parent do `relatedArticles` na 6 industry pages

Plik: `src/data/industry-content.ts`

W każdej z 6 sekcji `relatedArticles` dodać na pierwszej pozycji link do parent jako "main category". Konkretnie linijki, które aktualnie wyglądają tak:

**Linia 236** (drukarki-etykiet-produkcja):
```ts
relatedArticles: [
  { title: 'Drukarki przemysłowe — pełny katalog', href: '/przemyslowe-drukarki-etykiet' },
  // ...
]
```

→ zmienić na:
```ts
relatedArticles: [
  { title: 'Drukarki etykiet — wszystkie typy', href: '/drukarki-etykiet' },
  { title: 'Drukarki przemysłowe — pełny katalog', href: '/przemyslowe-drukarki-etykiet' },
  // ...
]
```

To samo w liniach: **599, 949, 1242, 1467, 1703** (dodać `{ title: 'Drukarki etykiet — wszystkie typy', href: '/drukarki-etykiet' }` na początku tablicy).

**Efekt**: +6 contextual linków do parent z tematycznie powiązanych stron — to są wartościowe linki bo industry pages mają wysoki topical relevance.

### Fix #2: Wyrównać `relatedArticles` w guides.ts

Plik: `src/data/guides.ts`

W każdym guide article gdzie obecnie jest tylko subpage w relatedArticles, dodać też parent. Konkretnie w guides z tematyką ogólną (typu „Jak wybrać drukarkę etykiet" czy „Drukarka etykiet — kompletny przewodnik") parent powinien być pierwszy, nie ostatni.

Przykład — `src/data/guides.ts:8575`, gdzie obecnie:
```ts
{ title: 'Drukarki przemysłowe — katalog', href: '/przemyslowe-drukarki-etykiet' },
```

Dodać przed tą linijką:
```ts
{ title: 'Drukarki etykiet — pełny katalog wszystkich typów', href: '/drukarki-etykiet' },
{ title: 'Drukarki przemysłowe — katalog', href: '/przemyslowe-drukarki-etykiet' },
```

Audyt do zrobienia ręcznie: przejść przez wszystkie ~6 wystąpień w guides.ts gdzie tylko subpage jest w relatedArticles bez parent (linie 581, 1649, 6297, 7515, 8575, 8948 — niektóre z nich już mają inny variant).

### Fix #3: Inline content link w lead paragraph subpage'a

Plik: `src/data/products.ts`, linia 264 (longDescription dla `przemyslowe-drukarki-etykiet`):

**Obecnie:**
```
Drukarki przemysłowe (industrial) przeznaczone są do pracy ciągłej 24/7 w wymagających środowiskach produkcyjnych...
```

**Zmienić na:**
```
Drukarki przemysłowe (industrial) — jeden z czterech typów [drukarek etykiet](/drukarki-etykiet) — przeznaczone są do pracy ciągłej 24/7 w wymagających środowiskach produkcyjnych...
```

To samo zrobić na pozostałych 4 subpages (biurkowe, termiczne, termotransferowe, mobilne) — każda ma swój `longDescription` w products.ts. Dodać upstream link do parent w pierwszym zdaniu.

**Efekt**: 4 nowe inline contextual linki z subpages do parent, z anchor text „drukarek etykiet" — perfekcyjny semantic signal.

---

## Co dodatkowo (drugorzędne)

### A) Tekst lead paragraph na parent — wzmocnić unique value

Plik: `src/data/products.ts:147` (longDescription parenta)

Obecny tekst dobry, ale można dodać explicit comparison sentence która wyciągnie semantic signal:

> „Oferujemy pełną gamę drukarek etykiet czołowych producentów: Zebra Technologies, Honeywell, Brother, TSC i innych. **Porównujemy 4 typy drukarek etykiet — biurkowe, przemysłowe, termiczne i termotransferowe — w jednym miejscu, z dedykowanymi sekcjami dla każdego typu**. Drukarki biurkowe do biura..."

### B) Po deployu: Request Indexing

GSC → URL Inspection → `https://www.takma.com.pl/drukarki-etykiet` → **POPROŚ O ZINDEKSOWANIE**

Zarządać reindeksacji najmocniej zmienionych guide articles (te z fix #2) i wszystkich 6 industry pages (fix #1).

### C) Monitoring (3 tygodnie po deployu)

GSC Performance → filtr query: `drukarki etykiet`
- Cel: parent przesuwa się z poz. 22.7 do TOP 15 w ciągu 3-4 tygodni
- Subpage `/przemyslowe-drukarki-etykiet` może lekko spaść (ale to OK — będzie dalej rankować na „przemysłowe drukarki etykiet" gdzie jest właściwa)

Jeśli po 4 tygodniach parent dalej < poz. 15:
- audyt backlinków w Ahrefs (porównać Referring Domains parent vs subpage)
- rozważyć link building na parent z zewnętrznych źródeł (artykuły gościnne, partnerzy)

---

## Hipotezy odrzucone (dla porządku)

| Hipoteza | Status | Dlaczego odrzucona |
|---|---|---|
| H1: Title cannibalization (parent miał Zebra-heavy signals jak na terminalach) | ❌ | Title parenta jest brand-agnostic z kwalifikatorami typów |
| H2: Broken 301 / canonical | ❌ | 301 non-www→www działa, GSC potwierdza canonical |
| H5: Topical specificity (Google preferuje subpage bo bogatsza) | ⚠️ częściowo | Subpage jest bogatsza, ALE parent też ma pełny content + schema. Główny driver to linkowanie, nie content gap. |

---

## Plik zmieniany — checklist

- [ ] `src/data/industry-content.ts` — dodać `{ title: 'Drukarki etykiet — wszystkie typy', href: '/drukarki-etykiet' }` w 6 miejscach (linie ~236, 599, 949, 1242, 1467, 1703)
- [ ] `src/data/guides.ts` — wyrównać relatedArticles w ~6 miejscach (linie 581, 1649, 6297, 7515, 8575, 8948)
- [ ] `src/data/products.ts` — dodać inline link do parent w longDescription 4 subpages (przemyslowe-, biurkowe-, termiczne-, termotransferowe-, mobilne-drukarki-etykiet, linie ~258-310)
- [ ] Deploy
- [ ] GSC: Request Indexing dla `/drukarki-etykiet`
- [ ] Monitoring 3-4 tyg.
