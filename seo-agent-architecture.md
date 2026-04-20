# Agent SEO/AEO/GEO — Architektura systemu
## TAKMA Admin Panel — Automated Market Intelligence

**Wersja:** 1.0  
**Data:** 24.02.2026  
**Stack:** Next.js 16, TypeScript, Tailwind, shadcn/ui, Claude API

---

## 1. Przegląd systemu

```
┌─────────────────────────────────────────────────────────────┐
│                    CRON (2x / tydzień)                       │
│                  Pon 6:00 + Czw 6:00                        │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              PIPELINE — Zbieranie danych                     │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────┐  │
│  │   GSC    │  │   GA4    │  │  SERP    │  │ Competitor │  │
│  │Collector │  │Collector │  │ Tracker  │  │  Monitor   │  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └─────┬──────┘  │
│       │              │             │               │         │
│       └──────────────┴─────────────┴───────────────┘         │
│                          │                                   │
│                          ▼                                   │
│              ┌───────────────────┐                           │
│              │   Data Aggregator │                           │
│              │   (normalize +    │                           │
│              │    merge data)    │                           │
│              └─────────┬─────────┘                           │
│                        │                                     │
└────────────────────────┼─────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              ANALIZA — Claude API                            │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  System prompt: SEO/AEO/GEO Expert                   │   │
│  │  + Dane z pipeline (GSC, GA4, SERP, konkurencja)     │   │
│  │  + Poprzedni raport (delta / trendy)                 │   │
│  │  → Output: JSON z raportem + rekomendacjami          │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              STORAGE — Baza danych                           │
│                                                              │
│  seo_reports          seo_metrics_history                    │
│  seo_serp_positions   seo_competitor_snapshots               │
│  seo_alerts                                                  │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              DASHBOARD — Panel admina                        │
│                                                              │
│  /admin/seo-agent                                           │
│  ├── Przegląd (score, alerty, top rekomendacje)             │
│  ├── Pozycje SERP (tabela + wykresy trendów)                │
│  ├── Konkurencja (porównanie, zmiany)                       │
│  ├── Raporty (historia, pełne raporty Claude)               │
│  └── Ustawienia (frazy, częstotliwość, konkurenci)          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Moduły zbierania danych

### 2.1. GSC Collector

**Plik:** `lib/seo-agent/collectors/gsc.ts`

**Co zbiera (za ostatnie 7 dni vs poprzednie 7 dni):**

```typescript
interface GSCData {
  // Per strona produktowa
  pages: {
    url: string;               // /produkt/zebra-mc3400
    clicks: number;            // kliknięcia z Google
    impressions: number;       // wyświetlenia w SERP
    ctr: number;               // click-through rate
    avgPosition: number;       // średnia pozycja
    clicksDelta: number;       // zmiana vs poprzedni tydzień
    positionDelta: number;     // zmiana pozycji
  }[];

  // Per fraza kluczowa (top 50 per strona)
  queries: {
    query: string;             // "zebra mc3400 cena"
    page: string;              // URL strony, która rankuje
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
    positionDelta: number;     // zmiana vs poprzedni tydzień
    isNew: boolean;            // nowa fraza (nie było jej tydzień temu)
    isLost: boolean;           // utracona fraza
  }[];

  // Alerty
  alerts: {
    droppedPages: string[];    // strony, które spadły >5 pozycji
    newRankings: string[];     // nowe strony w top 20
    ctrDrops: string[];        // spadek CTR >20%
  };
}
```

**API:** Google Search Console API v3  
**Auth:** Service Account z dostępem do property `sc-domain:takma.com.pl`  
**Limit:** 25 000 wierszy / request (wystarczający)

**Wymagane scope:** `https://www.googleapis.com/auth/webmasters.readonly`

### 2.2. GA4 Collector

**Plik:** `lib/seo-agent/collectors/ga4.ts`

**Co zbiera (za ostatnie 7 dni vs poprzednie 7 dni):**

```typescript
interface GA4Data {
  pages: {
    url: string;
    sessions: number;
    uniqueUsers: number;
    bounceRate: number;
    avgSessionDuration: number; // sekundy
    conversions: number;        // dodania do koszyka / zapytania
    conversionRate: number;
    sessionsDelta: number;      // zmiana vs poprzedni tydzień
    revenueDelta: number;
  }[];

  // Kanały ruchu per strona produktowa
  trafficSources: {
    url: string;
    organic: number;           // ruch z Google
    direct: number;
    referral: number;
    social: number;
  }[];

  // Top landing pages (organic only)
  topOrganicLandings: {
    url: string;
    sessions: number;
    bounceRate: number;
    conversions: number;
  }[];
}
```

**API:** Google Analytics Data API (GA4)  
**Auth:** Service Account z dostępem do property GA4  
**Wymagane scope:** `https://www.googleapis.com/auth/analytics.readonly`

### 2.3. SERP Tracker

**Plik:** `lib/seo-agent/collectors/serp.ts`

**Co robi:** Sprawdza pozycje TAKMA i 5 konkurentów dla listy fraz kluczowych.

**Podejście:** Google Custom Search API (100 zapytań/dzień za darmo, 10 000/$5)

```typescript
interface SERPData {
  // Per fraza kluczowa
  rankings: {
    keyword: string;           // "zebra mc3400"
    searchVolume?: number;     // szacowany (cache z GSC impressions)
    results: {
      position: number;        // 1-100
      url: string;
      domain: string;          // "takma.com.pl"
      title: string;
      snippet: string;
      hasRichSnippet: boolean; // cena, gwiazdki, FAQ
      richSnippetType?: string; // "Product", "FAQ", "Review"
    }[];
    takmaPosition: number | null;
    competitorPositions: {
      competitor: string;      // "bcmarket.pl"
      position: number | null;
    }[];
  }[];

  // Alerty
  alerts: {
    lostTop3: string[];        // frazy gdzie TAKMA wypadł z top 3
    newTop3: string[];         // frazy gdzie TAKMA wszedł do top 3
    competitorOvertook: {      // konkurent wyprzedził TAKMA
      keyword: string;
      competitor: string;
      oldGap: number;
      newGap: number;
    }[];
  };
}
```

**Lista fraz do monitoringu (początkowa — ~60 fraz):**

```typescript
const TRACKED_KEYWORDS = {
  // Brandowe MC3400
  brand: [
    "zebra mc3400",
    "zebra mc3400 cena",
    "zebra mc3400 kupić",
    "mc3400 specyfikacja",
    "mc3400 vs mc3300x",
    "mc3400 vs mc3450",
    "mc3400 vs tc53",
    "mc3400 skaner se58",
    "mc3400 instrukcja",
    "mc3401-0g1k42ss-a6",      // najpopularniejszy PN
    "mc3401-0g1j53ss-a6",
  ],

  // Generyczne terminale
  generic: [
    "terminal mobilny zebra",
    "terminal mobilny z klawiaturą",
    "terminal mobilny do magazynu",
    "kolektor danych zebra",
    "kolektor danych do magazynu",
    "kolektor danych ip67",
    "terminal mobilny android",
    "skaner kodów kreskowych magazyn",
    "terminal magazynowy z klawiaturą",
  ],

  // Porównawcze
  comparison: [
    "zebra mc3400 czy honeywell ck65",
    "zebra vs honeywell terminal",
    "jaki terminal do magazynu 2026",
    "najlepszy terminal mobilny 2026",
    "ranking terminali mobilnych",
    "terminal mobilny do wms",
  ],

  // Serwis / support
  service: [
    "serwis zebra mc3400",
    "zebra onecare cena",
    "naprawa terminala zebra",
    "autoryzowany partner zebra polska",
  ],

  // Inne produkty TAKMA (monitoring całego portfolio)
  portfolio: [
    "zebra mc3450",
    "zebra tc53",
    "zebra mc9400",
    "zebra zd421",
    "drukarka etykiet zebra",
    // ... rozszerzane dynamicznie z katalogu
  ],
};
```

### 2.4. Competitor Monitor

**Plik:** `lib/seo-agent/collectors/competitors.ts`

**Co robi:** Fetchuje strony MC3400 u konkurencji i wykrywa zmiany.

```typescript
const COMPETITORS = {
  bcmarket: {
    name: "BCmarket",
    domain: "bcmarket.pl",
    mc3400Urls: [
      "https://bcmarket.pl/terminale-mobilne/17932-terminal-zebra-mc3400-mc3401-0g1r62ss-a6.html",
    ],
    monitoredPages: [] as string[], // auto-discover
  },
  aspekt: {
    name: "Aspekt",
    domain: "aspekt.net.pl",
    mc3400Urls: [
      "https://www.aspekt.net.pl/oferta/komputery-mobilne-zebra-mc3400-i-mc3450",
    ],
    monitoredPages: [],
  },
  netselekt: {
    name: "NETSelekt",
    domain: "netselekt.pl",
    mc3400Urls: [
      "https://netselekt.pl/pl/p/Terminal-Mobilny-Zebra-MC3400-MC3401-0G1J53SS-A6/66070",
    ],
    monitoredPages: [],
  },
  agbit: {
    name: "Agbit",
    domain: "agbit.pl",
    mc3400Urls: [
      "https://www.agbit.pl/zebra-mc3400_q_mc3401-0g1r63ss-a6_model_skaner-2d-se55-ext-range-2xcam-pamiec-6gb-128gb-klawiatura-numeryczna-38-przyciskow-funkcyjne-akumulator-7000-mah-software-gms-uchwyt-gun-gsm-1-nanosim.html",
    ],
    monitoredPages: [],
  },
  elmatech: {
    name: "Elmatech",
    domain: "sklep.elmatech.pl",
    mc3400Urls: [
      "https://sklep.elmatech.pl/p/1361/58499/zebra-mc3400-kolektory-danych-kolektory-danych-terminale-kolektory.html",
    ],
    monitoredPages: [],
  },
};

interface CompetitorSnapshot {
  competitor: string;
  url: string;
  fetchedAt: Date;
  title: string;
  metaDescription: string;
  h1: string;
  contentLength: number;       // ilość słów
  hasPrice: boolean;
  price?: string;
  hasFAQ: boolean;
  faqCount: number;
  hasSchema: boolean;
  schemaTypes: string[];       // ["Product", "FAQPage"]
  hasComparison: boolean;
  lastModified?: string;
  contentHash: string;         // MD5 — do wykrywania zmian

  // Zmiany vs poprzedni snapshot
  changes: {
    titleChanged: boolean;
    priceChanged: boolean;
    contentChanged: boolean;
    newFAQ: boolean;
    newSchema: boolean;
  };
}
```

---

## 3. Warstwa analizy — Claude API

**Plik:** `lib/seo-agent/analyzer.ts`

### 3.1. System prompt (stały)

```
Jesteś ekspertem SEO/AEO/GEO specjalizującym się w polskim rynku urządzeń AutoID
(terminale mobilne, drukarki etykiet, kolektory danych).

Analizujesz dane dla firmy TAKMA (takma.com.pl) — jednej z 4 firm w Polsce
z najwyższym statusem partnerskim Zebra Technologies, z certyfikatem
Zebra Public Sector Specialist i 25-letnim doświadczeniem.

Monitorowani konkurenci: BCmarket, Aspekt, NETSelekt, Agbit, Elmatech.

Twój raport musi zawierać:
1. SCORE — ogólna ocena widoczności (0-100) + zmiana vs poprzedni raport
2. ALERTY — krytyczne zmiany wymagające natychmiastowej reakcji
3. TRENDY — pozytywne i negatywne trendy z ostatnich 4 raportów
4. KONKURENCJA — co zmienili konkurenci, kto zyskuje/traci
5. REKOMENDACJE — max 5 konkretnych działań z priorytetem i uzasadnieniem
6. AEO/GEO — ocena cytowalności przez AI, potencjalne zagrożenia

Odpowiadaj WYŁĄCZNIE w formacie JSON zgodnym ze schematem SEOReport.
Nie dodawaj markdown, komentarzy ani tekstu poza JSON.
```

### 3.2. User prompt (dynamiczny — per raport)

```typescript
const userPrompt = `
Oto dane z okresu ${dateRange}:

## Google Search Console
${JSON.stringify(gscData, null, 2)}

## Google Analytics 4
${JSON.stringify(ga4Data, null, 2)}

## Pozycje SERP
${JSON.stringify(serpData, null, 2)}

## Snapshoty konkurencji
${JSON.stringify(competitorData, null, 2)}

## Poprzedni raport (${previousReport.date})
Score: ${previousReport.score}
Kluczowe rekomendacje: ${previousReport.recommendations}

Wygeneruj raport SEO/AEO/GEO.
`;
```

### 3.3. Output schema

```typescript
interface SEOReport {
  id: string;
  generatedAt: string;         // ISO date
  periodStart: string;
  periodEnd: string;

  // Ogólna ocena
  score: {
    overall: number;           // 0-100
    seo: number;
    aeo: number;
    geo: number;
    delta: number;             // zmiana vs poprzedni raport
    trend: "up" | "down" | "stable";
  };

  // Alerty (wyświetlane na górze dashboardu)
  alerts: {
    severity: "critical" | "warning" | "info";
    category: "ranking" | "competitor" | "technical" | "content" | "aeo";
    title: string;             // "BCmarket dodał FAQ na stronie MC3400"
    description: string;       // szczegóły
    action: string;            // "Rozważ rozbudowę FAQ o pytania porównawcze"
    affectedPages?: string[];
  }[];

  // Trendy
  trends: {
    positive: {
      metric: string;
      description: string;
      value: string;           // "+15% kliknięć na MC3400"
    }[];
    negative: {
      metric: string;
      description: string;
      value: string;
    }[];
  };

  // Analiza konkurencji
  competition: {
    summary: string;           // 2-3 zdania podsumowania
    competitors: {
      name: string;
      threatLevel: "high" | "medium" | "low";
      changes: string[];       // co zmienili
      ourAdvantage: string;    // nasza przewaga
    }[];
  };

  // Rekomendacje (max 5)
  recommendations: {
    priority: 1 | 2 | 3 | 4 | 5;
    category: "seo" | "aeo" | "geo" | "content" | "technical";
    title: string;
    description: string;
    effort: "low" | "medium" | "high"; // nakład pracy
    impact: "low" | "medium" | "high"; // spodziewany efekt
    affectedPages?: string[];
  }[];

  // SERP overview
  serpOverview: {
    totalTrackedKeywords: number;
    inTop3: number;
    inTop10: number;
    inTop20: number;
    notRanking: number;
    avgPosition: number;
    avgPositionDelta: number;
  };

  // Top movers (frazy z największą zmianą)
  topMovers: {
    gainers: {
      keyword: string;
      oldPosition: number;
      newPosition: number;
      change: number;
    }[];
    losers: {
      keyword: string;
      oldPosition: number;
      newPosition: number;
      change: number;
    }[];
  };

  // Surowe dane (do wykresów)
  rawMetrics: {
    totalClicks: number;
    totalImpressions: number;
    avgCTR: number;
    totalSessions: number;
    totalConversions: number;
  };
}
```

---

## 4. Baza danych — schemat

**Jeśli używasz Prisma / Drizzle z PostgreSQL:**

```sql
-- Raporty SEO (główna tabela)
CREATE TABLE seo_reports (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  generated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  period_start  DATE NOT NULL,
  period_end    DATE NOT NULL,
  score_overall INTEGER NOT NULL,
  score_seo     INTEGER NOT NULL,
  score_aeo     INTEGER NOT NULL,
  score_geo     INTEGER NOT NULL,
  score_delta   INTEGER NOT NULL DEFAULT 0,
  alerts_count  INTEGER NOT NULL DEFAULT 0,
  report_json   JSONB NOT NULL,          -- pełny SEOReport
  status        TEXT NOT NULL DEFAULT 'completed', -- running | completed | failed
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Historia metryk (do wykresów trendów)
CREATE TABLE seo_metrics_history (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id     UUID REFERENCES seo_reports(id),
  date          DATE NOT NULL,
  total_clicks  INTEGER,
  total_impressions INTEGER,
  avg_ctr       DECIMAL(5,4),
  avg_position  DECIMAL(5,2),
  total_sessions INTEGER,
  total_conversions INTEGER,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Pozycje SERP (per fraza, per raport)
CREATE TABLE seo_serp_positions (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id     UUID REFERENCES seo_reports(id),
  keyword       TEXT NOT NULL,
  keyword_group TEXT,                    -- "brand", "generic", "comparison"
  takma_position INTEGER,               -- null = nie rankuje
  competitor_positions JSONB,            -- {"bcmarket": 5, "aspekt": null, ...}
  has_rich_snippet BOOLEAN DEFAULT FALSE,
  search_volume INTEGER,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Snapshoty konkurencji
CREATE TABLE seo_competitor_snapshots (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id     UUID REFERENCES seo_reports(id),
  competitor    TEXT NOT NULL,            -- "bcmarket"
  url           TEXT NOT NULL,
  title         TEXT,
  meta_description TEXT,
  content_length INTEGER,
  has_price     BOOLEAN,
  price         TEXT,
  has_faq       BOOLEAN,
  faq_count     INTEGER DEFAULT 0,
  has_schema    BOOLEAN,
  schema_types  TEXT[],
  content_hash  TEXT,                    -- MD5 do wykrywania zmian
  content_changed BOOLEAN DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Alerty (do filtrowania i statusów)
CREATE TABLE seo_alerts (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id     UUID REFERENCES seo_reports(id),
  severity      TEXT NOT NULL,            -- critical | warning | info
  category      TEXT NOT NULL,
  title         TEXT NOT NULL,
  description   TEXT,
  action        TEXT,
  is_read       BOOLEAN DEFAULT FALSE,
  is_resolved   BOOLEAN DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indeksy
CREATE INDEX idx_reports_date ON seo_reports(generated_at DESC);
CREATE INDEX idx_serp_keyword ON seo_serp_positions(keyword, created_at DESC);
CREATE INDEX idx_alerts_unread ON seo_alerts(is_read, severity);
CREATE INDEX idx_competitors_hash ON seo_competitor_snapshots(competitor, content_hash);
```

---

## 5. Dashboard — struktura stron

### 5.1. Routing

```
/admin/seo-agent/                    → Przegląd (główna)
/admin/seo-agent/serp                → Pozycje SERP
/admin/seo-agent/competitors         → Monitoring konkurencji
/admin/seo-agent/reports             → Historia raportów
/admin/seo-agent/reports/[id]        → Szczegóły raportu
/admin/seo-agent/settings            → Ustawienia (frazy, konkurenci)
```

### 5.2. Przegląd (/admin/seo-agent/)

```
┌─────────────────────────────────────────────────────────────┐
│  SEO Agent — Przegląd                    [Uruchom ręcznie]  │
│  Ostatni raport: 24.02.2026, 06:15                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐            │
│  │ SCORE  │  │  SEO   │  │  AEO   │  │  GEO   │            │
│  │  87    │  │  91    │  │  85    │  │  82    │            │
│  │  ▲ +3  │  │  ▲ +2  │  │  ▲ +5  │  │  = 0   │            │
│  └────────┘  └────────┘  └────────┘  └────────┘            │
│                                                              │
│  ┌─ ALERTY ──────────────────────────────────────────────┐  │
│  │ 🔴 BCmarket dodał Product Schema na stronie MC3400     │  │
│  │ 🟡 Spadek pozycji "kolektor danych zebra" z #5 na #9  │  │
│  │ 🟢 Nowa fraza w top 10: "terminal mobilny ip67"       │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌─ TOP 5 REKOMENDACJI ─────────────────────────────────┐   │
│  │ 1. 🔴 Dodaj "kolektor danych" do title MC3400         │   │
│  │ 2. 🟡 Napisz artykuł "MC3400 vs Honeywell CK65"      │   │
│  │ 3. 🟡 Zaktualizuj datę na stronie MC3400              │   │
│  │ 4. 🟢 Rozbuduj FAQ o pytanie dot. leśnictwa           │   │
│  │ 5. 🟢 Dodaj cross-link z poradnika do MC3400          │   │
│  └───────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─ TREND (ostatnie 8 raportów) ────────────────────────┐   │
│  │  Score: ▁▂▃▃▄▅▅▆                                     │   │
│  │  Kliknięcia: [line chart - 8 punktów]                 │   │
│  │  Śr. pozycja: [line chart - 8 punktów]                │   │
│  └───────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─ SERP SNAPSHOT ──────────────────────────────────────┐   │
│  │  Frazy w top 3:   12 (▲2)                             │   │
│  │  Frazy w top 10:  28 (▲1)                             │   │
│  │  Frazy w top 20:  41 (=)                              │   │
│  │  Nie rankuje:     19 (▼1)                             │   │
│  └───────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 5.3. Pozycje SERP (/admin/seo-agent/serp)

```
┌─────────────────────────────────────────────────────────────┐
│  Pozycje SERP                                               │
│  [Filtr: Wszystkie ▾] [Grupa: Brand ▾] [Okres: 30 dni ▾]   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Fraza                    │ TAKMA │ BCm │ Asp │ NET │ Trend │
│  ─────────────────────────┼───────┼─────┼─────┼─────┼───────│
│  zebra mc3400             │  #2   │ #4  │ #8  │ #11 │ ▲ +1  │
│  zebra mc3400 cena        │  #1   │ #3  │  —  │ #7  │ = 0   │
│  kolektor danych zebra    │  #9   │  —  │ #6  │ #12 │ ▼ -4  │
│  terminal mobilny magazyn │  #5   │ #8  │ #3  │  —  │ ▲ +2  │
│  mc3400 vs mc3300x        │  #1   │  —  │  —  │  —  │ = 0   │
│  ...                                                         │
│                                                              │
│  [Wykres: pozycja TAKMA vs konkurencja w czasie]             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 5.4. Monitoring konkurencji (/admin/seo-agent/competitors)

```
┌─────────────────────────────────────────────────────────────┐
│  Monitoring konkurencji                                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─ BCmarket ─────────────────────────── Zagrożenie: 🟡 ─┐ │
│  │  Ostatnia zmiana: 20.02.2026                            │ │
│  │  • Zmienili title tag (dodano "od 4890 zł")            │ │
│  │  • Opis bez zmian (200 słów, generyczny)               │ │
│  │  • Nadal brak FAQ i Schema                              │ │
│  │  • Cena: 4890 zł vs TAKMA 4561 zł ✅                   │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌─ Aspekt ──────────────────────────── Zagrożenie: 🟡 ──┐ │
│  │  Ostatnia zmiana: 18.02.2026                            │ │
│  │  • Nowy artykuł na blogu o MC3400                       │ │
│  │  • Strona produktu bez zmian                            │ │
│  │  • Nadal brak cen i FAQ                                 │ │
│  └─────────────────────────────────────────────────────────┘ │
│  ...                                                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. API Routes

```
POST /api/admin/seo-agent/run          → Uruchom pipeline ręcznie
GET  /api/admin/seo-agent/reports      → Lista raportów (paginated)
GET  /api/admin/seo-agent/reports/[id] → Szczegóły raportu
GET  /api/admin/seo-agent/serp         → Aktualne pozycje SERP
GET  /api/admin/seo-agent/competitors  → Snapshoty konkurencji
GET  /api/admin/seo-agent/alerts       → Alerty (filtrowane)
PATCH /api/admin/seo-agent/alerts/[id] → Oznacz alert jako przeczytany
GET  /api/admin/seo-agent/trends       → Dane do wykresów (metrics_history)
PUT  /api/admin/seo-agent/settings     → Zmień frazy / konkurentów
```

---

## 7. Cron / Scheduler

**Plik:** `lib/seo-agent/scheduler.ts`

**Opcje:**

| Rozwiązanie | Koszt | Opis |
|-------------|-------|------|
| **Vercel Cron** | Free (2/dzień na Hobby) | `vercel.json` → wywołuje API route |
| **Upstash QStash** | Free tier 500 msg/mies. | HTTP-based cron, idealne dla serverless |
| **GitHub Actions** | Free | Workflow z cron schedule, wywołuje API |
| **Node-cron (self-hosted)** | $0 | Jeśli masz własny serwer |

**Rekomendacja:** Vercel Cron (jeśli hosting na Vercel) lub Upstash QStash.

```json
// vercel.json
{
  "crons": [
    {
      "path": "/api/admin/seo-agent/run",
      "schedule": "0 6 * * 1,4"
    }
  ]
}
```
(Pon + Czw o 6:00 UTC)

---

## 8. Szacunkowe koszty

| Pozycja | Koszt/miesiąc |
|---------|--------------|
| Claude API (Sonnet 4, ~8 raportów) | ~$2-4 |
| Google Search Console API | $0 (darmowe) |
| Google Analytics 4 API | $0 (darmowe) |
| Google Custom Search API (SERP) | $0-5 (100 free/dzień, potem $5/1000) |
| Vercel Cron | $0 (free tier) |
| **RAZEM** | **~$2-9/miesiąc** |

---

## 9. Plan implementacji (fazy)

### Faza 1 — Fundament (tydzień 1-2)
- [ ] Schemat bazy danych (migracje)
- [ ] GSC Collector — autoryzacja + zbieranie danych
- [ ] GA4 Collector — autoryzacja + zbieranie danych
- [ ] Podstawowy pipeline (GSC + GA4 → JSON)
- [ ] API route: POST /api/admin/seo-agent/run

### Faza 2 — SERP + Konkurencja (tydzień 3)
- [ ] SERP Tracker — Google Custom Search API
- [ ] Competitor Monitor — fetch + parse + hash
- [ ] Data Aggregator — merge wszystkich źródeł

### Faza 3 — Analiza Claude (tydzień 4)
- [ ] System prompt + user prompt
- [ ] Claude API integration (Sonnet 4)
- [ ] Output parsing + walidacja JSON
- [ ] Zapis do bazy danych

### Faza 4 — Dashboard (tydzień 5-6)
- [ ] Strona przeglądu (/admin/seo-agent/)
- [ ] Tabela SERP z filtrami
- [ ] Monitoring konkurencji
- [ ] Historia raportów
- [ ] Wykresy trendów (recharts)

### Faza 5 — Automatyzacja + polish (tydzień 7)
- [ ] Cron schedule (Vercel / QStash)
- [ ] Alerty z oznaczaniem read/resolved
- [ ] Ustawienia (edycja fraz, konkurentów)
- [ ] Testy e2e pipeline

---

## 10. Pytania otwarte przed implementacją

1. **Baza danych** — co używasz? PostgreSQL (Supabase/Neon)? MySQL? Prisma? Drizzle?
2. **Hosting** — Vercel? VPS? (determinuje scheduler)
3. **Auth w admin panelu** — jakie masz teraz uwierzytelnianie?
4. **Google APIs** — masz już Service Account z dostępem do GSC i GA4, czy trzeba skonfigurować?
5. **Claude API** — masz klucz API Anthropic?

---

*Architektura gotowa do implementacji. Po Twoich odpowiedziach na pytania z sekcji 10 zaczynamy budować Fazę 1.*
