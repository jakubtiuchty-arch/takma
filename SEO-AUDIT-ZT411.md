# SEO Audit: takma.com.pl/produkt/zebra-zt411

**Data audytu:** 2026-03-04
**URL:** https://www.takma.com.pl/produkt/zebra-zt411
**Typ biznesu:** B2B e-commerce (AutoID)

---

## Executive Summary

### SEO Health Score: 87/100

| Kategoria | Waga | Ocena | Ważona |
|-----------|------|-------|--------|
| Technical SEO | 25% | 93/100 | 23.25 |
| Content Quality | 25% | 87/100 | 21.75 |
| On-Page SEO | 20% | 85/100 | 17.00 |
| Schema / Structured Data | 10% | 92/100 | 9.20 |
| Performance (CWV) | 10% | 70/100 | 7.00 |
| Images | 5% | 95/100 | 4.75 |
| AI Search Readiness | 5% | 90/100 | 4.50 |
| **RAZEM** | **100%** | | **87.45** |

### Top 5 Critical Issues

1. **Sitemap lastmod bug** — NAPRAWIONY (był `createdAt: 2023-03-20` zamiast `updatedAt: 2026-02-12`)
2. **Schema weight unitCode** — NAPRAWIONY (było `GRM` zamiast `KGM` dla drukarek w kg)
3. **dateModified w schema** — NAPRAWIONY (było `new Date()` zmienne co build)
4. **Brak obecności w Ceneo.pl** — 0 ofert TAKMA na Ceneo (agbit.pl ma 13+)
5. **Brak Google Merchant Center** — feed istnieje, ale nie aktywowany

### Top 5 Quick Wins

1. ~~Naprawić sitemap lastmod~~ ✅ DONE
2. ~~Naprawić schema weight/dateModified~~ ✅ DONE
3. Dodać `contactPoint` do Organization schema
4. Ograniczyć `fetchPriority="high"` do 1-2 elementów (obecnie 4+)
5. Naprawić zduplikowany prefix w `og:description`

---

## 1. Technical SEO — 93/100

| Aspekt | Ocena | Status |
|--------|-------|--------|
| Crawlability | 10/10 | Robots.txt idealny — AI boty dozwolone, training boty zablokowane |
| Indexability | 10/10 | Canonical poprawny, redirect chains brak, 1-hop HTTP→HTTPS |
| Security | 9/10 | HSTS 2 lata, X-Frame, X-Content-Type, brak CSP |
| Sitemap | 10/10 | URL obecny, lastmod: 2026-02-12 (po fixie) |
| Core Web Vitals | 7/10 | Za dużo `fetchPriority="high"`, brak ISR cache |
| HTTP Headers | 9/10 | Brotli, HTTP/2, brak CSP, `x-powered-by` widoczne |
| Mobile Friendliness | 10/10 | Viewport OK, responsive, ARIA, skip-to-content |

### Kluczowe rekomendacje:
- [ ] Dodać `Content-Security-Policy` header
- [ ] Ograniczyć `fetchPriority="high"` do hero image + logo (usunąć z certyfikatów i bannera)
- [ ] Wyłączyć `x-powered-by: Next.js` w next.config.js
- [ ] Rozważyć ISR cache zamiast pełnego SSR (revalidate co 60s)

---

## 2. Content Quality — 87/100

### E-E-A-T

| Sygnał | Ocena | Komentarz |
|--------|-------|-----------|
| Experience | 8/10 | TCO data, porównania z benchmarkami, brak case study/wideo |
| Expertise | 9/10 | 24 specs, 12 FAQ technicznych, terminologia poprawna |
| Authoritativeness | 9/10 | 3 certyfikaty Zebra, sameAs zebra.com, serwis-zebry.pl |
| Trustworthiness | 8.5/10 | Ceny netto, NIP, adres, telefon, brak opinii klientów |

### Word Count & Quality
- **~4,500+ słów** (2x więcej niż najlepszy konkurent agbit.pl)
- **12 FAQ** — jedyny sklep z FAQPage schema w polskim SERPie
- **16 wariantów z cenami** — pełna transparentność
- **Porównanie ZT231 vs ZT411 vs ZT421** — unikalne w Polsce
- **TCO data** (koszt głowic, ribbonów) — nikt inny tego nie ma
- **Treść 100% oryginalna** (nie tłumaczenie z zebra.com)

### Luki:
- [ ] Brak case study / wdrożeń u klientów
- [ ] Brak wideo demonstracyjnego (pole `videoUrl` puste)
- [ ] Brak logotypów klientów / referencji
- [ ] FAQ #12 (alternatywy) za krótkie — 1 zdanie
- [ ] Brak linków wewnętrznych w opisie do poradników i powiązanych produktów

---

## 3. On-Page SEO — 85/100

| Element | Wartość | Ocena |
|---------|---------|-------|
| Title | `Zebra ZT411 — przemysłowa drukarka etykiet \| TAKMA` | 9/10 — krótki, z marką |
| Meta Description | `Zebra ZT411 — przemysłowa 4" RFID UHF...` (130 zn.) | 8/10 — brak CTA |
| H1 | `Zebra ZT411` + `<span>Przemysłowe drukarki etykiet</span>` | 7/10 — dwa elementy |
| Heading Hierarchy | H1 → 11× H2 → 12× H3 | 9/10 — doskonała |
| Internal Links | ~45+ wewnętrznych, 58 referencji w codebase | 7.5/10 — brak linków w opisie |
| Canonical | Self-referencing, poprawny | 10/10 |

### og:description — zduplikowany prefix
```
"Zebra ZT411 — Zebra ZT411 — przemysłowa drukarka etykiet 4"..."
```
"Zebra ZT411" pojawia się dwukrotnie (nazwa produktu + shortDescription).

### Rekomendacje:
- [ ] Dodać CTA do meta description ("Sprawdź 16 wariantów" / "Zamów z dostawą")
- [ ] Naprawić zduplikowany prefix w og:description
- [ ] Dodać linki w opisie do `/poradnik/jak-wybrac-drukarke-etykiet` i `/poradnik/drukarki-etykiet-zebra-przewodnik`
- [ ] W FAQ dodać linki do wspomnianych produktów (ZT231, ZT421, ZD421)
- [ ] Rozbudować FAQ #12 (alternatywy) — dodać argumenty za/przeciw

---

## 4. Schema / Structured Data — 92/100

### 6 bloków JSON-LD wykrytych:

| Schema | Kompletność | Ocena |
|--------|-------------|-------|
| Organization | 85% | Bardzo dobry — brak `contactPoint` |
| WebSite + SearchAction | 100% | Idealny |
| Product + AggregateOffer | 92% | Bardzo dobry — brak GTIN |
| BreadcrumbList | 100% | Idealny — 5 poziomów |
| WebPage + SpeakableSpecification | 80% | Dobry |
| FAQPage | 100% | Idealny — 12 pytań |

### Problemy:
- [ ] Brak `contactPoint` w Organization (telefon + email)
- [ ] Brak `gtin13` w Product (kody EAN drukarek Zebra)
- [ ] `product:price:amount` (5131.84) ≠ schema `lowPrice` (5078.41)
- [ ] Rozważyć `ImageObject` zamiast prostych URL obrazów (z `imageDescriptions`)

---

## 5. Performance (CWV) — 70/100

| Metryka | Szacunek | Status |
|---------|----------|--------|
| TTFB | ~384ms | ✅ Doskonały |
| LCP | ~1.5-2.5s | ⚠️ Za dużo fetchPriority="high" |
| INP | ~100-200ms | ⚠️ 12 async JS chunks |
| CLS | ~0.01-0.05 | ✅ Next Image z width/height |

### Problemy:
- 4× `fetchPriority="high"` — za dużo (logo, produkt, certyfikaty, baner)
- 7 preload hints — potencjalny preload overload
- `x-vercel-cache: MISS` — każdy request to full SSR render
- 12 async JS chunks

### Rekomendacje:
- [ ] Usunąć `fetchPriority="high"` z certyfikatów i bannera serwis-zebry
- [ ] Rozważyć ISR (Incremental Static Regeneration) z `revalidate: 60`

---

## 6. Images — 95/100

- **18 obrazów** na stronie, **14/18 (78%) z Next.js Image** (WebP/AVIF)
- **3/3 opisowe alt texty** dla produktu ✅ (po dzisiejszym fixie)
- **Lazy loading** dla obrazów below-fold ✅
- **Responsive srcset** z `(max-width: 768px) 100vw, 50vw` ✅
- **fetchPriority="high"** na hero image ✅

### Drobne luki:
- 4 obrazy (certyfikaty + baner) bez Next.js Image — nie korzystają z WebP/AVIF

---

## 7. AI Search Readiness — 90/100

| Aspekt | Ocena |
|--------|-------|
| FAQ ekstrakcja (12 Q&A) | 10/10 |
| Passage-level citability | 9/10 |
| SpeakableSpecification | 10/10 |
| AI bot access (robots.txt) | 10/10 |
| llms.txt | 10/10 |
| Brand mention frequency | 9/10 |
| Authoritative claims | 8/10 |

### Cytowalne fragmenty:
- "ZT411 drukuje z prędkością do 356 mm/s (14 ips) — 40% szybciej niż ZT231 (304 mm/s)"
- "203 dpi — 90% zastosowań przemysłowych. 300 dpi — drobne kody 2D. 600 dpi — mikro-etykiety"
- "Głowica 203 dpi — ok. 1 843 zł netto. Żywotność: 50–150 km druku"

---

## Visual Analysis

### Desktop Above-the-Fold: 10/10
Wszystkie krytyczne elementy widoczne: nazwa, cena, CTA, zdjęcie, dostępność, stany magazynowe.

### Mobile Above-the-Fold: 9/10
Sticky bottom bar z ceną i CTA — użytkownik zawsze widzi cenę. Drobne problemy:
- Touch targets nawigacji: 40×40px (potrzeba 48×48px)
- Ikona "i" tooltip: 28×28px (za mała)
- Breadcrumbs obcięte ("Pr...")

### Screenshots zapisane w: `/Users/jakubtiuchty/takma/screenshots/`

---

## Priority Action Plan

### P0 — DONE ✅
1. ~~Sitemap lastmod: updatedAt zamiast createdAt~~ ✅
2. ~~Schema weight: KGM zamiast GRM dla drukarek~~ ✅
3. ~~dateModified: product.updatedAt zamiast new Date()~~ ✅
4. ~~seoTitle: skrócony do SERP-friendly~~ ✅
5. ~~imageDescriptions: 3/3 opisowe~~ ✅

### P1 — HIGH (zrobić w tym tygodniu)
1. Dodać produkty na **Ceneo.pl** — backlink DA ~80 + merchant trust signal
2. Aktywować **Google Merchant Center** — feed `/api/merchant-feed` gotowy
3. Naprawić **og:description** zduplikowany prefix
4. Dodać **contactPoint** do Organization schema (telefon + email)
5. Ograniczyć **fetchPriority="high"** do 2 elementów

### P2 — MEDIUM (zrobić w ciągu miesiąca)
1. Dodać **linki wewnętrzne w opisie** do poradników i produktów
2. Rozbudować **FAQ #12** (alternatywy) — więcej argumentów
3. Dodać **GTIN/EAN** do Product schema
4. Ujednolicić **OG price vs schema lowPrice**
5. Dodać **Content-Security-Policy** header

### P3 — LOW (backlog)
1. Case study / referencje klientów
2. Wideo demonstracyjne produktu
3. Osobne strony per wariant (long-tail coverage)
4. ISR cache zamiast SSR
5. Touch targets nawigacji mobile (40→48px)

---

*Wygenerowano przez Claude Opus 4.6 — 2026-03-04*
