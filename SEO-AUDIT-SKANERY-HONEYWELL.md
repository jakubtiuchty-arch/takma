# SEO Audit: takma.com.pl/skanery-honeywell

**Data:** 2026-03-04 | **URL:** https://www.takma.com.pl/skanery-honeywell

---

## SEO Health Score: 82/100

| Kategoria | Waga | Ocena | Ważona |
|-----------|------|-------|--------|
| Technical SEO | 25% | 86/100 | 21.50 |
| Content Quality | 25% | 88/100 | 22.00 |
| On-Page SEO | 20% | 85/100 | 17.00 |
| Schema | 10% | 70/100 | 7.00 |
| Performance | 10% | 70/100 | 7.00 |
| Images | 5% | 95/100 | 4.75 |
| AI Readiness | 5% | 94/100 | 4.70 |
| **RAZEM** | | | **83.95** |

---

## CRITICAL — do natychmiastowej naprawy

### 1. HowTo schema jest ZDEPRECJONOWANE (usunięte przez Google IX 2023)
Google nie generuje rich results z HowTo od września 2023. Schema jest martwym kodem.
→ **Usunąć JSON-LD HowTo z BrandCategoryPage.tsx**

### 2. Markdown linki w FAQ schema — nieprawidłowe!
Odpowiedzi FAQ zawierają `[Voyager XP 1470g](/produkt/...)` — surowy Markdown.
Google NIE parsuje Markdown w schema. Wyświetla się jako tekst `[text](url)`.
→ **Stripować Markdown z acceptedAnswer.text w JSON-LD**

### 3. Brak og:image, og:type, og:locale, og:site_name
Linki udostępnione na Facebook/LinkedIn/Slack nie mają miniaturki.
→ **Dodać OG tags w generateMetadata()**

### 4. Title tag za długi (86 znaków — Google ucina po ~60)
`Skanery kodów kreskowych Honeywell — Voyager, Xenon, Granit | od 358 zł netto | TAKMA`
→ Google widzi: `Skanery kodów kreskowych Honeywell — Voyager, Xenon, Grani...`

---

## Co jest świetne

- **~13 000 słów** — najobszerniejsze źródło o skanerach Honeywell w PL
- **16 FAQ z FAQPage schema** — monopol w SERPie
- **5 porównań cross-brand** (vs Zebra, vs Newland, XP vs Ultra)
- **6 scenariuszy zastosowań** z rekomendacjami modelowymi
- **7 schematów JSON-LD** (CollectionPage, FAQ, Breadcrumb, Speakable, Organization, WebSite, WebPage)
- **12 produktów z cenami** aktualizowanymi z Ingram/BlueStar
- **AEO/GEO: 9.4/10** — wzorcowa cytowalność przez AI

---

*Pełny raport z rekomendacjami w pliku.*
