# TAKMA — audyt GSC (ostatnie 90 dni)

Źródło: Ahrefs MCP → Google Search Console
Dane: 2026-02-07 do 2026-05-07 (90 dni)
Status: GSC zlinkowane z Ahrefs project, $0 cost

---

## TL;DR — całość

| Device | Clicks | Impressions | CTR | Avg position |
|---|---|---|---|---|
| Desktop | 858 | **67 942** | 1.26% | 14.48 |
| Mobile | 289 | 29 070 | 0.99% | 8.04 |
| Tablet | 4 | 338 | 1.18% | 9.14 |
| **TOTAL** | **1 151** | **97 350** | **1.18%** | — |

**Kluczowy wniosek:** TAKMA dostaje **97 350 impressions w 90 dni** (~32 500/miesiąc). To jest faktyczny popyt — nie problem widoczności. **Problem: CTR 1.18% to katastrofa** (norma e-commerce to 4-7%). Google pokazuje stronę w SERP, ludzie nie klikają.

To zmienia strategię:
- Disavow/backlinki — wzmacniają ranking (więcej impressions na lepszych pozycjach)
- **Title/meta optimization — natychmiastowy wpływ na CTR** (więcej clicks z istniejących impressions)

---

## 🚨 Strony z 1000+ impressions ale CTR < 0.5% — pilny fix title/meta

### #1 — `/poradnik/drukarka-termiczna-vs-termotransferowa` (3 484 impressions, CTR 0.11%)

- 300 keywords (!) rankuje na tej stronie
- Avg position: 10.74
- 4 clicks z 3 484 impressions
- Top keywords: „papier termiczny a4" (poz 2.13), „papier termiczny" (poz 2.35), „termotransferowa" (poz 11), „drukarki termiczne opinie" (poz 1.83)

**Problem**: title/meta tej strony pewnie nie zachęca do kliku. Sprawdź obecny title — najprawdopodobniej coś typu „Drukarka termiczna vs termotransferowa | TAKMA". Trzeba przeprojektować.

**Sugerowany title**:
```
Drukarka termiczna czy termotransferowa? Porównanie 2026 (różnice, koszty)
```

**Sugerowana meta**:
```
DT vs TT — kiedy warto każdą? Trwałość 3-12 mies vs 10 lat, koszty od 0,005 zł/etykietę. Kompletne porównanie z przykładami i cenami.
```

**Oczekiwany efekt**: CTR z 0.11% → 4-6% = **140-200 clicks** zamiast 4 (z tych samych 3 484 impressions).

### #2 — `/termotransferowe-drukarki-etykiet` (4 495 impressions, CTR 0.04%)

- **NAJWIĘCEJ impressions** ze wszystkich stron na takma
- 113 keywords
- Avg position: 13.11
- **Tylko 2 clicks** (CTR 0.04%!)
- Top keyword: „drukarka termotransferowa przemysłowa" (poz 21.5)
- Też: „potocznie drukarka z taśmą barwiąca" (573 imp, poz 2.5)

**Problem**: Title kategorii nie matchuje dokładnie tych długich query.

**Sugerowany title**:
```
Drukarki termotransferowe (TT) — z taśmą barwiącą | Sklep TAKMA
```

(zawiera „termotransferowe" + synonim „z taśmą barwiącą" który Google jest blisko match'ować z „potocznie drukarka z taśmą barwiąca")

### #3 — `/drukarki-etykiet-zebra` (1 917 impressions, CTR 0.10%)

- 87 keywords
- Avg position: 23.46
- 2 clicks
- Top keywords: „zebra kurier" (poz 10.5), „drukarka zebra" (poz 17), „drukarki etykiet zebra" (poz 21)

**Sugerowany title**:
```
Drukarki etykiet Zebra — kup od 639 zł netto | TAKMA Premier Partner
```

(już dobry — problem w pozycji 23, nie title; tu pomoże link building, nie title)

### #4 — `/skanery-kodow-kreskowych-zebra` (1 504 impressions, CTR 0.13%)

- 104 keywords
- Avg position: 17.93
- 2 clicks
- Top keyword: „skaner zebra" (1 025 imp! poz 8.29)

**WAŻNE**: „skaner zebra" ma **1 025 impressions** i jest na pos 8.29. To jest **JEDNO query gdzie kilka pozycji w górę = duży traffic gain**. Vol „skaner zebra" w Ahrefs = 800/mies.

**Sugerowany title**:
```
Skanery kodów kreskowych Zebra — przewodowe i bezprzewodowe | TAKMA
```

(target: get into TOP 5 dla „skaner zebra"; trzeba też wzmocnić internal linking do tej strony — patrz audyt struktury)

### #5 — `/serwis` (1 391 impressions, CTR 0.22%)

- 69 keywords ranking
- Avg position: 15.94
- 3 clicks z 1 391 imp

**Problem**: Strona /serwis ma znaczną topical relevance ale title nie zachęca. Sprawdź czy nie nakłada się z serwis-zebry.pl (kanibalizacja własna z affiliate?).

### #6 — `/tablety-przemyslowe` (774 impressions, CTR 0.13%)

- 68 keywords
- Avg position: **28.01** (poza TOP 20!)
- 1 click
- Top keyword: „tablety zebra" (poz 9.4 dla podobnej strony /tablety-przemyslowe-zebra)

---

## 🎯 Striking distance — keywords na pozycjach 11-30 z high impressions

To są keywords gdzie **1 push w górę = duży gain w trafficu**. Dla każdego rekomenduje konkretną akcję.

| Keyword | Impressions | Position | URL | Akcja |
|---|---|---|---|---|
| `zebra tc22` | **389** | 10.77 | /produkt/zebra-tc22 | Wzmocnić internal linking + 1-2 backlinks → TOP 10 |
| `skaner zebra` | **1 025** | 8.29 | /skanery-kodow-kreskowych-zebra | Backlink building na kategorię (UR=0!) |
| `terminal mobilny` | **277** | 32.05 | /poradnik/jak-wybrac-terminal-mobilny | Wymień target URL na `/terminale-mobilne` (kategoria) |
| `skanery zebra` | 334 | 14.69 | /skanery-kodow-kreskowych-zebra | Title + UR (jak wyżej) |
| `drukarki etykiet zebra` | 233 | 21.06 | /drukarki-etykiet-zebra | UR boost + cross-product links |
| `skaner zebra cena` | 250 | 8.4 | /produkt/zebra-mc3300x | **Strona-pułapka** — Google wybrał MC3300x dla generic „skaner zebra cena" — niepoprawne. Trzeba przekierować Google na `/skanery-kodow-kreskowych-zebra` |
| `telefon zebra` | 220 | 5.93 | /produkt/zebra-tc26 | **Game-changer**: Google szuka „telefon Zebra". Powinniśmy promować EM45 (smartfon biznesowy)! Zmienić docelowy URL na `/produkt/zebra-em45` |
| `zebra zq521` | 262 | 8.55 | /produkt/zebra-zq521 | Już blisko TOP — backlink + cross-product link |
| `zebra zd421` | 86 | 14.42 | /produkt/zebra-zd421/ | URL ma trailing slash — to inna URL niż canonical. Sprawdź czy nie kanibalizacja |
| `zebra mc3400` | 54 | 17.69 | /produkt/zebra-mc3400/ | Trailing slash issue + cały link building plan z naszego audytu terminali |
| `kolektor zebra` | 127 | 16.87 | /produkt/zebra-tc21/ | **Strona-pułapka 2**: Google daje stary TC21 zamiast `/terminale-mobilne-zebra`. TC21 jest legacy. Przekierować |
| `m3 sl20` | 52 | 11.02 | /produkt/m3-sl20 | Cross-product link, blisko TOP 10 |
| `zebra et401` | 134 | 9.77 | /poradnik/zebra-et401-... | Już blisko, drobny push wystarczy |
| `tablety zebra` | 32 | 9.38 | /tablety-przemyslowe-zebra | Blisko, internal linking |
| `drukarki zebra wrocław` | 55 | 19.45 | / (homepage) | Dodać sekcję local SEO: „Sprzedajemy drukarki Zebra we Wrocławiu" |

---

## 🔧 Strony-pułapki — Google wybrał złą stronę

Kilka query-URL mappings jest źle. To są łatwe wins jeśli skierujemy Google na właściwą stronę.

### Problem 1: „skaner zebra cena" → /produkt/zebra-mc3300x

Google wybrał stronę **konkretnego produktu** (MC3300x) dla **generic query** o cenie skanerów. To nieoptymalne.

**Powód**: prawdopodobnie MC3300x ma w treści/title „cena Zebra" + jest zaindeksowany dłużej niż kategoria.

**Fix**: 
1. W title kategorii `/skanery-kodow-kreskowych-zebra` dodać „cena" lub „od X zł"
2. Wewnętrznie linkować do kategorii z anchor „skanery Zebra cena", nie do MC3300x
3. Sitemap priority: kategoria > produkt

### Problem 2: „kolektor zebra" → /produkt/zebra-tc21/ (LEGACY)

Google wybrał **TC21** (stary, EOL) jako top URL dla „kolektor zebra" (vol 200, poz 1 dla bcmarket).

TC21 jest discontinued. Powinien tu wskazywać `/terminale-mobilne-zebra` lub aktualny TC22.

**Fix**:
1. Sprawdź czy TC21 ma 301 redirect do TC22 lub do `/terminale-mobilne-zebra`
2. Jeśli nie ma — dodaj redirect (TC21 jest EOL, traffic powinien iść dalej)
3. Strona TC21 może mieć być canonical do TC22 jeśli ich content jest podobny

### Problem 3: „telefon zebra" → /produkt/zebra-tc26 (LEGACY też)

Tu jest **prawdziwa goldmine**. Google ma 220 impressions/90 dni dla „telefon zebra" — ludzie szukają **Zebra w formie smartfona**. To dokładnie EM45 use case!

TC26 jest legacy (poprzednik TC27). Powinien przekierować na coś nowego.

**Fix priorytetowy**:
1. Strona EM45 (`/produkt/zebra-em45`) NIE rankuje na „telefon zebra" — to strata
2. Dodać do tytułu/H1/meta EM45: „Zebra EM45 — smartfon enterprise (telefon Zebra)" 
3. W treści EM45 dodać sekcję „Czemu nazywany telefonem Zebra"
4. Dodać 301 z TC26 (jeśli legacy) na EM45 z notatką „nowsza wersja"

EM45 Vol w Ahrefs nie był wysoki, ale **GSC widzi 220 impressions na „telefon zebra" + 28 imp na „zebra em45"**. Total: ~250 impressions miesięcznie czeka na bramkę.

### Problem 4: Trailing slash + non-trailing variants

Widzę w danych że ten sam produkt rankuje na 2 różnych URL-ach:
- `https://takma.com.pl/produkt/zebra-zd421/` (z slashem)
- `https://www.takma.com.pl/produkt/zebra-zd421` (bez slasha, z www)

To może być kanibalizacja własna. Każdy produkt powinien mieć **JEDEN** canonical URL i 301 redirect z innych wariantów.

**Fix**:
1. W Next.js: ustal w `next.config.js` `trailingSlash: false` lub `true` i trzymaj się tego
2. Server config (Vercel): permanent redirect non-canonical → canonical
3. W kodzie: `alternates.canonical` zawsze pokazuje canonical wariant

---

## 📊 Top 10 stron z faktycznym ruchem (clicks)

| # | URL | Clicks | Impr | CTR | Avg pos |
|---|---|---|---|---|---|
| 1 | / (homepage www) | 93 | 586 | 15.87% | 7.9 |
| 2 | / (homepage non-www) | 40 | 175 | 22.86% | 6.6 |
| 3 | /kontakt | 20+12=32 | 350 | ~9% | ~4.7 |
| 4 | /produkt/zebra-tc501 | 10 | 324 | 3.09% | 7.35 |
| 5 | /produkt/zebra-tc22 | 7 | 694 | 1.01% | 11.28 |
| 6 | / (http www) | 7 | 380 | 1.84% | 10.6 |
| 7 | /sklep | 5 | 140 | 3.57% | 2.1 |
| 8 | /poradnik/dt-vs-tt | 4 | 3484 | 0.11% | 10.7 |
| 9 | /drukarki-etykiet-e-commerce | 4 | 247 | 1.62% | 13.4 |
| 10 | /produkt/zebra-zd421/ | 4 | 111 | 3.6% | 14.5 |

**Obserwacja**: 4 z top 10 to **homepage warianty** (www, non-www, http, https). To znaczy że homepage jest indexowana w 3-4 wariantach. **Trzeba skonsolidować przez 301**.

Z `kontakt` widać 2 warianty (z slash i bez) — to samo.

---

## 🎯 Quick wins — co zrobić w tym tygodniu (priorytety)

### Priorytet A — Title/meta optimization (1-2 dni)

Plik: `src/app/poradnik/drukarka-termiczna-vs-termotransferowa/page.tsx`

```tsx
export const metadata: Metadata = {
  title: 'Drukarka termiczna czy termotransferowa? Porównanie 2026 (różnice, koszty)',
  description: 'DT vs TT — kiedy warto każdą? Trwałość 3-12 mies vs 10 lat, koszty od 0,005 zł/etykietę. Porównanie z przykładami, cenami i polecanymi modelami Zebra.',
  alternates: { canonical: 'https://www.takma.com.pl/poradnik/drukarka-termiczna-vs-termotransferowa' },
}
```

Powtórzyć dla:
- `/termotransferowe-drukarki-etykiet` 
- `/skanery-kodow-kreskowych-zebra`
- `/serwis`
- `/tablety-przemyslowe`

**Oczekiwany efekt**: 4× więcej clicks z istniejących impressions w 4-6 tygodni (Google reprocesuje title/meta).

### Priorytet B — Strony-pułapki (1 dzień)

1. **EM45** — dodać „telefon Zebra" do title, H1, lead
2. **TC21 + TC26 (legacy)** — sprawdzić czy są EOL, dodać 301 redirect na nowe modele albo na brand category
3. **Skanery Zebra** — dodać „cena" do title kategorii
4. **Trailing slash** — zdecydować slash policy + wymusić 301

### Priorytet C — Konsolidacja homepage variants (1 godzina)

Sprawdzić w `next.config.js` lub Vercel redirects:
- `http://takma.com.pl` → `https://www.takma.com.pl` (301)
- `http://www.takma.com.pl` → `https://www.takma.com.pl` (301)
- `https://takma.com.pl` → `https://www.takma.com.pl` (301)

Wszystkie 4 strony homepage muszą zlać się w 1.

### Priorytet D — Sitemap audit (1 godzina)

Sprawdź `/sitemap.ts`:
- Czy include kategorie z wysokim potencjałem (`/skanery-kodow-kreskowych-zebra` etc.)
- Czy include LATEST products (TC501, EM45, MC3400 itd.)
- Priority `1.0` na homepage, `0.9` na brand categories, `0.8` na products

---

## 📈 Forecast po wdrożeniu Priorytet A+B+C

Konserwatywnie:

| Strona | Obecny CTR | Cel CTR | Obecne clicks/90d | Po fix clicks/90d |
|---|---|---|---|---|
| /poradnik/dt-vs-tt | 0.11% | 4% | 4 | **~140** |
| /termotransferowe-drukarki-etykiet | 0.04% | 2% | 2 | **~90** |
| /skanery-kodow-kreskowych-zebra | 0.13% | 3% | 2 | **~45** |
| /drukarki-etykiet-zebra | 0.10% | 3% | 2 | **~58** |
| /tablety-przemyslowe | 0.13% | 2% | 1 | **~15** |
| EM45 dla „telefon zebra" | 0% | 2% | 0 | **~5** |

**Total prognozowany boost**: ~350 clicks/90 dni (z 1 151 do ~1 500). To **+30% organic** tylko z optymalizacji title/meta.

Plus efekty disavow + linki w 4-6 tyg. = **+50-100% kumulatywnie**.

---

## Co dalej

**Decyzja:**
1. **Robimy Priorytet A teraz?** Mogę wygenerować dokładne diff'y dla 5 plików `.tsx` (title + meta + canonical) gotowe do commitu.
2. **Albo Priorytet B (legacy redirects + EM45 fix)?** — szybsze (1 dzień), bardzo konkretne dane do działania.
3. **Albo wracamy do Fala 3 (blog post serwis-zebry.pl)?** — to nadal jest najmocniejszy ruch dla brand category, ale teraz mamy dodatkowo dane GSC.

Moja rekomendacja: **Priorytet A → Priorytet B → Fala 3**. W tej kolejności bo title/meta to najszybszy wpływ (Google reprocesuje w dni-tygodnie, nie miesiące). Disavow już startuje, blog post może czekać kolejny tydzień.
