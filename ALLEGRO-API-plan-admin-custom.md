# Allegro REST API — plan integracji w panelu /admin (custom)

**Data**: 3 czerwca 2026
**Decyzja**: pełna integracja w istniejącym repo TAKMA, panel `/admin/allegro`, brak zewnętrznych SaaS-ów (Base.com odrzucone)
**Stan obecny repo TAKMA**:
- Next.js 14 App Router + TypeScript
- Prisma + PostgreSQL (17 modeli już istnieje)
- Custom auth: JWT przez `jose` + PBKDF2 hash w Web Crypto, JWT secret z env
- Istniejący panel `/admin` z podstronami: `oferty`, `zamowienia`, `faktury`, `klienci`, `seo-agent`, `seo-digest`, `doradca`, `login`
- API routes `/api/admin/*` z gotowymi endpointami: `parse-pdf`, `invoices`, `orders`, `nip`, `seo-agent`, `health`
- Już istnieje **`StockCache`** i **`JarltechStockCache`** — mamy mechanizm cache'owania stanów magazynowych od hurtownika

To znaczy że budujemy **na bazie istniejącej infrastruktury** — żadnego greenfield, żadnych nowych zależności (poza klientem HTTP do Allegro, ale `fetch` w Node 18+ wystarczy).

---

## 1. Architektura — co buduje się w repo

```
src/
├── app/
│   ├── admin/
│   │   └── allegro/                           [NEW]
│   │       ├── page.tsx                       Dashboard — stan połączenia, statystyki
│   │       ├── oferty/
│   │       │   ├── page.tsx                   Lista wszystkich ofert (aktywne/wstrzymane/zakończone)
│   │       │   ├── [id]/page.tsx              Szczegóły jednej oferty
│   │       │   ├── [id]/edytuj/page.tsx       Edycja oferty
│   │       │   └── wystaw/page.tsx            Lista SKU do wystawienia + przycisk "wystaw"
│   │       ├── zamowienia/
│   │       │   ├── page.tsx                   Zamówienia z Allegro (pobrane przez webhook/polling)
│   │       │   └── [id]/page.tsx              Szczegóły zamówienia + akcje (oznacz wysłane, faktura)
│   │       ├── konfiguracja/
│   │       │   ├── page.tsx                   Połączenie OAuth, mapowanie kategorii, marże domyślne
│   │       │   └── kategorie/page.tsx         Mapowanie kategorii TAKMA → kategorie Allegro
│   │       └── logi/page.tsx                  Historia synchronizacji + błędy
│   └── api/
│       └── admin/
│           └── allegro/                       [NEW]
│               ├── auth/
│               │   ├── initiate/route.ts      Inicjacja OAuth flow → przekierowanie na allegro.pl/auth
│               │   ├── callback/route.ts      OAuth callback (zapisuje token w DB)
│               │   └── refresh/route.ts       Refresh access token (cron + on-demand)
│               ├── offers/
│               │   ├── route.ts               GET (lista) + POST (wystawienie)
│               │   ├── [id]/route.ts          GET (szczegóły) + PATCH (aktualizacja) + DELETE (zakończenie)
│               │   ├── publish/route.ts       Batch wystawianie z `src/data/*.ts`
│               │   └── sync/route.ts          Aktualizacja stanów + cen (cron co 15 min)
│               ├── orders/
│               │   ├── route.ts               GET lista zamówień
│               │   └── poll/route.ts          Endpoint cron — pobiera nowe zamówienia z Allegro
│               └── categories/
│                   ├── route.ts               GET cache kategorii Allegro
│                   └── match/route.ts         POST { name } → GET /sale/matching-categories
├── lib/
│   └── allegro/                              [NEW]
│       ├── client.ts                          Klient HTTP do Allegro REST API (fetch + auth)
│       ├── auth.ts                            OAuth flow: getAuthUrl, exchangeCode, refreshToken
│       ├── mapper.ts                          TAKMA Product → Allegro Offer payload
│       ├── publisher.ts                       Logika wystawiania (POST /sale/product-offers)
│       ├── updater.ts                         Logika aktualizacji (PATCH stan + cena)
│       ├── orders.ts                          Pobieranie zamówień (GET /order/checkout-forms)
│       ├── categories.ts                      Cache + matching kategorii
│       └── types.ts                           Typy TypeScript dla payloadów Allegro
└── data/
    └── allegro-config.ts                     [NEW] Stałe konfiguracyjne (Client ID, scopes, kategorie mapowane)

prisma/
└── schema.prisma                              Rozszerzenie o 4 nowe modele

scripts/
├── allegro-bulk-publish.ts                   [NEW] CLI do wstępnego wystawienia wszystkich SKU
└── allegro-sync-all.ts                       [NEW] CLI do ręcznej synchronizacji wszystkich ofert
```

**Brak nowych ciężkich zależności** — tylko opcjonalnie:
- `p-queue` (lub własny ratelimiter) dla obsługi 9 000 zapytań/min limit Allegro
- `ulid` lub `crypto.randomUUID()` (już w Node 18+) dla `commandId` w Allegro

---

## 2. Modele Prisma — rozszerzenie schema.prisma

Dodaj 4 nowe modele do `prisma/schema.prisma`:

```prisma
model AllegroToken {
  id           String   @id @default(cuid())
  accessToken  String   @db.Text
  refreshToken String   @db.Text
  expiresAt    DateTime
  scope        String
  // metadata
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  createdBy    String   // adminUserId

  @@map("allegro_tokens")
}

model AllegroOffer {
  id              String              @id @default(cuid())

  // mapowanie
  sku             String              // SKU TAKMA (np. "Z-Perform 1000D 100x150")
  allegroOfferId  String?             @unique // ID oferty Allegro (po publikacji)
  productId       String?             // ID produktu w katalogu Allegro (jeśli powiązano)
  categoryId      String              // ID kategorii Allegro

  // pola oferty (cache lokalny)
  title           String              @db.VarChar(75) // Allegro: max 75 znaków
  price           Decimal             @db.Decimal(10, 2)
  margin          Decimal?            @db.Decimal(5, 2) // % marży powyżej priceFrom
  stockAvailable  Int                 @default(0)
  status          AllegroOfferStatus  @default(DRAFT)

  // synchronizacja
  lastSyncedAt    DateTime?
  lastError       String?             @db.Text
  syncFailureCount Int                @default(0)

  // dane źródłowe
  sourceType      String              // "thermal-label" | "transfer-label" | "transfer-ribbon"
  sourceSlug      String              // np. "z-perform-1000d"
  sourceVariant   String?             // konkretny wariant rozmiarowy (np. "100x150-25mm-1000szt")

  createdAt       DateTime            @default(now())
  updatedAt       DateTime            @updatedAt

  events          AllegroEventLog[]

  @@index([status])
  @@index([sourceSlug])
  @@map("allegro_offers")
}

enum AllegroOfferStatus {
  DRAFT          // przygotowane lokalnie, nie wystawione
  PUBLISHING     // POST do Allegro w toku (async commandId)
  ACTIVE         // aktywna na Allegro
  INACTIVE       // wstrzymana / zakończona
  ERROR          // błąd publikacji (sprawdź lastError)
  ENDED          // zakończona przez Allegro (czas wygasł)
}

model AllegroOrder {
  id                String              @id @default(cuid())
  allegroCheckoutId String              @unique // ID checkout-form z Allegro
  allegroOrderId    String?             // ID zamówienia (powiązane z naszym Order po utworzeniu)

  status            String              // status Allegro: NEW, PROCESSING, READY_FOR_PROCESSING, SENT, etc.
  buyerEmail        String?
  buyerLogin        String?
  totalAmount       Decimal             @db.Decimal(10, 2)
  items             Json                // tablica { offerId, sku, quantity, price }

  // mapowanie do naszego systemu
  internalOrderId   String?             // FK do Order (jeśli utworzono)

  // metadata
  receivedAt        DateTime            @default(now())
  updatedAt         DateTime            @updatedAt

  @@index([status])
  @@map("allegro_orders")
}

model AllegroEventLog {
  id          String          @id @default(cuid())
  offerId     String?
  offer       AllegroOffer?   @relation(fields: [offerId], references: [id])

  eventType   String          // PUBLISH_ATTEMPT, SYNC_OK, SYNC_ERROR, PRICE_CHANGE, etc.
  payload     Json?           // szczegóły (np. before/after)
  errorMsg    String?         @db.Text

  createdAt   DateTime        @default(now())

  @@index([offerId])
  @@index([eventType])
  @@index([createdAt])
  @@map("allegro_event_logs")
}
```

**Po dodaniu**: `npx prisma migrate dev --name add_allegro_integration`

---

## 3. OAuth 2.0 flow — `/api/admin/allegro/auth/*`

Allegro używa **Authorization Code Grant** dla aplikacji "kliencko-serwerowych" (czyli nas). Flow:

1. Admin klika "Połącz z Allegro" w `/admin/allegro/konfiguracja`
2. Przekierowanie na `https://allegro.pl/auth/oauth/authorize?response_type=code&client_id={ID}&redirect_uri=https://takma.com.pl/api/admin/allegro/auth/callback&state={random}`
3. Admin loguje się na Allegro, akceptuje uprawnienia (scope: `allegro:api:sale:offers:read allegro:api:sale:offers:write allegro:api:orders:read`)
4. Allegro przekierowuje na `/api/admin/allegro/auth/callback?code={code}&state={random}`
5. Nasz callback wymienia `code` na `accessToken` + `refreshToken` przez `POST https://allegro.pl/auth/oauth/token`
6. Zapisujemy tokeny w `AllegroToken` (Prisma)
7. `accessToken` ma TTL ~12h, `refreshToken` żyje 365 dni — odświeżamy `accessToken` cronem co 11h

**Bezpieczeństwo**:
- `state` weryfikujemy w callbacku (CSRF protection)
- `Client Secret` w env (`.env.local`: `ALLEGRO_CLIENT_ID`, `ALLEGRO_CLIENT_SECRET`)
- Tokeny w bazie — encrypted at rest jeśli Postgres ma TDE; alternatywnie szyfrujemy w `AllegroToken.accessToken` za pomocą `crypto.subtle` (jak w istniejącym `lib/auth.ts`)
- Tylko zalogowany admin (przez `verifySession`) ma dostęp do endpointów `/api/admin/allegro/*`

---

## 4. Mapowanie produkt TAKMA → oferta Allegro

To **najtrudniejsza część** — mapowanie struktury z `src/data/*.ts` do payload Allegro POST `/sale/product-offers`.

### 4.1 Generowanie tytułu oferty (max 75 znaków na Allegro)

```typescript
// lib/allegro/mapper.ts
function buildOfferTitle(series: ThermalLabelSeries, variant: SeriesVariant): string {
  // Wzór: "Etykiety termiczne Zebra Z-Perform 1000D 100x150 mm rolka 1000szt"
  const productClass = series.category === 'dt' ? 'Etykiety termiczne' : 'Etykiety termotransferowe'
  const brand = 'Zebra'
  const seriesName = series.title // "Z-Perform 1000D"
  const dims = `${variant.width}x${variant.height} mm`
  const packaging = variant.quantity ? `rolka ${variant.quantity}szt` : ''

  const title = [productClass, brand, seriesName, dims, packaging]
    .filter(Boolean)
    .join(' ')

  // Allegro: max 75 znaków
  return title.length > 75 ? title.substring(0, 72) + '...' : title
}
```

### 4.2 Generowanie opisu — z `heroIntro` + `keyHighlights` + `sections`

Allegro oczekuje **strukturalnego opisu** (HTML w formie sekcji):

```typescript
function buildOfferDescription(series: ThermalLabelSeries): AllegroDescription {
  return {
    sections: [
      // Sekcja 1: nagłówek + opis
      {
        items: [
          { type: 'TEXT', content: `<h1>${series.h1}</h1><p>${series.heroIntro}</p>` },
        ],
      },
      // Sekcja 2: kluczowe cechy (lista)
      {
        items: [
          { type: 'TEXT', content: `<h2>Najważniejsze cechy</h2><ul>${series.keyHighlights.map(h => `<li>${h}</li>`).join('')}</ul>` },
        ],
      },
      // Sekcja 3: zastosowania
      {
        items: [
          { type: 'TEXT', content: `<h2>Zastosowania</h2><ul>${series.applications.map(a => `<li>${a}</li>`).join('')}</ul>` },
        ],
      },
      // Sekcja 4: atesty
      {
        items: [
          { type: 'TEXT', content: `<h2>Atesty i certyfikaty</h2><ul>${series.certifications.map(c => `<li><strong>${c.name}:</strong> ${c.description}</li>`).join('')}</ul>` },
        ],
      },
      // Sekcja 5: parametry techniczne (tabela)
      {
        items: [
          { type: 'TEXT', content: `<h2>Parametry techniczne</h2><table>${series.techSpecs.map(s => `<tr><td>${s.label}</td><td>${s.value}</td></tr>`).join('')}</table>` },
        ],
      },
    ],
  }
}
```

### 4.3 Mapowanie atestów na parametry Allegro

Allegro w kategorii "Etykiety samoprzylepne" ma parametry: Marka, Materiał, Klej, Rozmiar, Pakowanie, Atest, Zakres temperatury — które trzeba dopasować do parametrów Allegro.

```typescript
function buildOfferParameters(series, categoryParams: AllegroCategoryParameter[]): AllegroParameter[] {
  const params: AllegroParameter[] = []

  // Marka — zawsze "Zebra"
  const brandParam = categoryParams.find(p => p.name === 'Marka')
  if (brandParam) {
    params.push({ id: brandParam.id, valuesIds: [findValueId(brandParam, 'Zebra')] })
  }

  // Materiał (z series.material — "papier-niepowlekany", "polipropylen-syntetyczny" itp.)
  const materialMap = {
    'papier-niepowlekany': 'papier',
    'papier-powlekany': 'papier powlekany',
    'polipropylen-syntetyczny': 'folia polipropylenowa',
    'papier-linerless': 'papier (bez podkładu)',
  }
  const materialParam = categoryParams.find(p => p.name === 'Materiał')
  if (materialParam) {
    const mappedValue = materialMap[series.material]
    params.push({ id: materialParam.id, valuesIds: [findValueId(materialParam, mappedValue)] })
  }

  // ... analogicznie dla innych parametrów
  return params
}
```

### 4.4 Zdjęcia

Allegro przyjmuje URL-e zdjęć (musi być publicznie dostępne na HTTPS). Repo TAKMA ma zdjęcia w `/public/images/` — Vercel serwuje je publicznie.

```typescript
const images = [
  `https://www.takma.com.pl${series.heroImage}`, // np. "/images/z-perform-1000d-hero.webp"
]
```

### 4.5 Cena — z `priceFrom` + marża per kategoria

```typescript
function buildOfferPrice(series, variant, defaultMargin: number = 1.05): AllegroPrice {
  // priceFrom to cena netto za rolkę
  const basePrice = variant.priceNet || series.priceFrom
  const finalPriceNet = Math.round(basePrice * defaultMargin * 100) / 100

  // Allegro przyjmuje cenę brutto (z VAT 23%)
  const finalPriceGross = Math.round(finalPriceNet * 1.23 * 100) / 100

  return {
    amount: finalPriceGross.toString(),
    currency: 'PLN',
  }
}
```

---

## 5. UI panelu `/admin/allegro`

### 5.1 Dashboard (`/admin/allegro/page.tsx`)

Karty z:
- **Połączenie z Allegro**: status (połączone / wymaga ponownej autoryzacji) + przycisk "Połącz / Rozłącz"
- **Statystyki**: 234 ofert aktywne / 12 wstrzymane / 5 błędów / 0 oczekujące
- **Ostatnia synchronizacja**: 3 min temu, 0 błędów
- **Zamówienia dziś z Allegro**: 8 (wartość 1 247 zł)
- **Top 5 ofert (sprzedaż 7 dni)**: lista z linkiem do podstrony

### 5.2 Lista ofert (`/admin/allegro/oferty/page.tsx`)

Tabela z filtrami:
- Filtr: status (DRAFT, ACTIVE, INACTIVE, ERROR, ENDED)
- Filtr: kategoria (DT / TT / taśmy)
- Filtr: ostatnia synchronizacja (>24h temu)
- Wyszukiwanie po SKU / tytule

Kolumny: SKU | Tytuł | Cena | Stan magaz. | Status | Ostatnia sync | Akcje (View / Edit / Sync / End)

### 5.3 Wystaw oferty (`/admin/allegro/oferty/wystaw/page.tsx`)

Lista produktów z `src/data/*.ts` **które jeszcze nie zostały wystawione**:
- Po lewej: drzewo (Etykiety termiczne → Z-Perform 1000D → 216 wariantów rozmiarowych)
- Po prawej: lista wariantów do wystawienia + checkbox
- Przycisk "Wystaw wybrane" → asynchroniczne POST do Allegro przez `commandId`

Dla każdej oferty przed wystawieniem:
- Pokazuje preview (tytuł, opis, cena, parametry)
- Walidacja (czy mamy kategorię, atesty, zdjęcie?)
- Estymacja prowizji Allegro (np. 6% × cena brutto = X zł)

### 5.4 Edycja oferty (`/admin/allegro/oferty/[id]/edytuj/page.tsx`)

Formularz Allegro-friendly:
- Tytuł (75 znaków, licznik)
- Cena (netto + brutto + opcjonalnie marża)
- Stan magazynowy (auto z `StockCache` / `JarltechStockCache`)
- Opis (rich text editor)
- Parametry Allegro (dropdowny z wartościami pobranymi z `GET /sale/categories/{id}/parameters`)
- Zdjęcia (pre-filled z `heroImage`)
- Wysyłka (dropdown: cennik dostawy)
- Czas wysyłki (handling time: PT24H, PT48H, P3D)
- Przycisk "Aktualizuj na Allegro" → PATCH `/sale/product-offers/{id}`

### 5.5 Zamówienia z Allegro (`/admin/allegro/zamowienia/page.tsx`)

Lista zamówień pobranych z Allegro (przez cron co 5 min), pokazujemy te których jeszcze nie skonwertowaliśmy na nasze `Order`. Przycisk "Utwórz zamówienie wewnętrzne" tworzy rekord w `Order` (istniejący model Prisma) + powiązanie w `AllegroOrder.internalOrderId`.

Dalej zamówienie obsługujesz przez istniejący panel `/admin/zamowienia` — tak samo jak zamówienia z takma.com.pl.

### 5.6 Konfiguracja (`/admin/allegro/konfiguracja/page.tsx`)

- OAuth status + przycisk autoryzacji
- Mapowanie kategorii TAKMA → Allegro (jednorazowa konfiguracja)
- Marże domyślne per kategoria (np. DT etykiety = +10%, taśmy = +15%, drukarki = +20%)
- Czas wysyłki domyślny (PT24H = w 24h)
- Cennik dostawy (dropdown z gotowych w Allegro)
- Powrót / faktura: ustawienia zwrotów i faktury VAT

### 5.7 Logi (`/admin/allegro/logi/page.tsx`)

Lista wszystkich zdarzeń z `AllegroEventLog`:
- Filtry: typ zdarzenia, oferta, data
- Możliwość retry dla błędów (przycisk "Spróbuj ponownie")

---

## 6. Cron i automatyzacja

Vercel Cron (lub własny serwer cron):

| Cron | Częstość | Endpoint | Co robi |
|---|---|---|---|
| Token refresh | Co 11h | `/api/admin/allegro/auth/refresh` | Odświeża access token (TTL 12h) |
| Sync stanów + cen | Co 15 min | `/api/admin/allegro/offers/sync` | Aktualizuje wszystkie aktywne oferty (PATCH stan + cena) |
| Poll zamówień | Co 5 min | `/api/admin/allegro/orders/poll` | Pobiera nowe zamówienia (GET `/order/checkout-forms?status=NEW`) |
| Stock cache od dystrybutora | Co 60 min | (istniejący) | Aktualizuje `JarltechStockCache` |

W `vercel.json`:

```json
{
  "crons": [
    { "path": "/api/admin/allegro/auth/refresh", "schedule": "0 */11 * * *" },
    { "path": "/api/admin/allegro/offers/sync", "schedule": "*/15 * * * *" },
    { "path": "/api/admin/allegro/orders/poll", "schedule": "*/5 * * * *" }
  ]
}
```

Każdy endpoint sprawdza `Authorization: Bearer ${CRON_SECRET}` z env — żeby tylko Vercel mógł je wywołać (bez wymagania JWT admin sesji).

---

## 7. Roadmapa wdrożenia — 4 fazy, 5-7 tygodni

### Faza 1 — fundament (tydz. 1-2)

| # | Zadanie | Czas |
|---|---|---|
| 1 | Założenie konta deweloperskiego Allegro + rejestracja aplikacji (sandbox + produkcja) | 30 min |
| 2 | Dodanie env: `ALLEGRO_CLIENT_ID`, `ALLEGRO_CLIENT_SECRET`, `ALLEGRO_REDIRECT_URI`, `ALLEGRO_ENV` (sandbox/prod) | 15 min |
| 3 | Prisma migration: 4 modele (`AllegroToken`, `AllegroOffer`, `AllegroOrder`, `AllegroEventLog`) | 2-3h |
| 4 | `lib/allegro/client.ts` — klient HTTP z auto-refresh tokena | 1 dzień |
| 5 | `lib/allegro/auth.ts` + API routes `/api/admin/allegro/auth/*` (OAuth flow) | 2 dni |
| 6 | UI `/admin/allegro/konfiguracja` — przycisk autoryzacji + status połączenia | 1 dzień |
| 7 | Test: pełen flow OAuth w sandboxie | 1 dzień |

**Deliverable fazy 1**: Połączenie z Allegro sandbox działa, tokeny są w bazie, auto-refresh działa.

**Czas**: 1-2 tyg.
**Koszt**: ~5 000-6 000 zł netto (5-6 dni pracy seniora)

### Faza 2 — wystawianie ofert (tydz. 3-4)

| # | Zadanie | Czas |
|---|---|---|
| 1 | `lib/allegro/categories.ts` — pobranie i cache kategorii Allegro + matching kategorii TAKMA | 1 dzień |
| 2 | `lib/allegro/mapper.ts` — pełen mapowanie 1 produktu (np. Z-Perform 1000D) z parametrami | 2-3 dni |
| 3 | `lib/allegro/publisher.ts` — POST `/sale/product-offers` + obsługa `commandId` (async) | 2 dni |
| 4 | `/api/admin/allegro/offers/publish` — batch wystawianie | 1 dzień |
| 5 | UI `/admin/allegro/oferty/wystaw` — drzewo SKU + checkbox + preview | 2-3 dni |
| 6 | Test: wystawienie 10 wariantów w sandboxie, walidacja w panelu Allegro | 1 dzień |

**Deliverable fazy 2**: Można wystawić oferty z UI, oferty pojawiają się w sandboxie Allegro z prawidłowymi tytułami, opisami, cenami, parametrami.

**Czas**: 2-3 tyg.
**Koszt**: ~8 000-10 000 zł netto

### Faza 3 — synchronizacja + zarządzanie (tydz. 5-6)

| # | Zadanie | Czas |
|---|---|---|
| 1 | `lib/allegro/updater.ts` — PATCH stanów magazynowych + cen | 1 dzień |
| 2 | `/api/admin/allegro/offers/sync` — cron job synchronizacji | 1 dzień |
| 3 | Integracja z `StockCache`/`JarltechStockCache` — pobranie stanów + auto-PATCH na Allegro | 1 dzień |
| 4 | UI `/admin/allegro/oferty` — lista, filtry, akcje (sync, end, edit) | 2-3 dni |
| 5 | UI `/admin/allegro/oferty/[id]/edytuj` — edytor ofert | 2 dni |
| 6 | UI `/admin/allegro/logi` — historia zdarzeń | 1 dzień |
| 7 | Test: zmiana ceny w `src/data/*.ts` → cron syncuje → oferta na Allegro odzwierciedla | 1 dzień |

**Deliverable fazy 3**: Pełen lifecycle oferty zarządzany z `/admin/allegro`.

**Czas**: 1-2 tyg.
**Koszt**: ~5 000-6 000 zł netto

### Faza 4 — zamówienia + uruchomienie produkcyjne (tydz. 7-8)

| # | Zadanie | Czas |
|---|---|---|
| 1 | `lib/allegro/orders.ts` — pobranie zamówień (`GET /order/checkout-forms`) | 1 dzień |
| 2 | `/api/admin/allegro/orders/poll` — cron pobierający nowe zamówienia | 1 dzień |
| 3 | Konwersja `AllegroOrder` → istniejący model `Order` (przez akcję admin lub auto) | 1 dzień |
| 4 | UI `/admin/allegro/zamowienia` — lista + akcje | 1 dzień |
| 5 | Integracja z istniejącym `/admin/zamowienia` — pokazuje też zamówienia z Allegro | 1 dzień |
| 6 | Konfiguracja produkcyjna: zmiana aplikacji z sandbox na prod, test 5 ofert live | 1 dzień |
| 7 | Batch wystawienie pierwszej partii (50-100 SKU bestsellerów) | 1 dzień |
| 8 | Monitoring 7 dni → ewentualne fixy | tydz. 8 |

**Deliverable fazy 4**: Pełna produkcja. Zamówienia z Allegro spływają do panelu, obsługiwane standardowo.

**Czas**: 1-2 tyg.
**Koszt**: ~5 000-6 000 zł netto

---

## 8. Łączny koszt i czas

| Faza | Koszt netto | Czas |
|---|---|---|
| Faza 1 (fundament + OAuth) | 5 000-6 000 zł | 1-2 tyg |
| Faza 2 (wystawianie) | 8 000-10 000 zł | 2-3 tyg |
| Faza 3 (synchronizacja) | 5 000-6 000 zł | 1-2 tyg |
| Faza 4 (zamówienia + prod) | 5 000-6 000 zł | 1-2 tyg |
| **Razem** | **23 000-28 000 zł netto** | **5-9 tyg** |

**Koszt operacyjny po wdrożeniu**:
- Vercel cron jobs: w cenie planu (Vercel Pro 20 USD/mies, którego TAKMA już zapewne używa)
- Brak abonamentów zewnętrznych (Base.com, IAI, etc.)
- Tylko prowizje Allegro od sprzedaży (5-8% w kategorii etykiet)

Po wdrożeniu utrzymanie:
- ~2-4h pracy/mies. na monitoring i drobne fixy (zmiany API Allegro 2× rocznie)
- Roczna refleksja nad konfiguracją (kategorie, marże, parametry Allegro)

---

## 9. Pułapki specyficzne dla custom integracji

### 9.1 OAuth refresh w środowisku serverless (Vercel)

Vercel ma timeout dla funkcji (10s na Hobby, 60s na Pro). Refresh token wykonujemy w jednym requeście — bez problemów. Ale ostrożnie z **batch publish 1 820 ofert** — limit 9 000 RPM Allegro to 150 req/sec, plus każda oferta wymaga 1-2 requestów (POST + sprawdzenie `commandId`). Czyli **wystawienie 1 820 ofert zajmie ~30-60 minut** — nie zmieści się w jednym requeście Vercel.

**Rozwiązanie**: batch publish w `/api/admin/allegro/offers/publish` zwraca natychmiast (po enqueue), a faktyczne wystawianie idzie przez **Vercel Queue** (`@vercel/queue`) albo lokalny queue z dnia 1 (Inngest, Trigger.dev) lub **prostym cronem** który co minutę publikuje 50 ofert z bazy gdzie `status: DRAFT`.

### 9.2 Konflikty z Vercel timeout dla synchronizacji

`/api/admin/allegro/offers/sync` musi zaktualizować np. 234 aktywnych ofert. Przy ~2 ofertach/sec to ~2 minuty — nie zmieści się w Vercel timeout.

**Rozwiązanie**: cron co 15 min synchronizuje 100 ofert (najstarsze last-sync), nie wszystkie. Każda oferta sync co ~30 min (przy 200 ofertach: 200/100 = 2 partie × 15 min = 30 min cycle).

### 9.3 GTIN — większość produktów Zebra nie ma EAN

Z poprzednich analiz: w repo TAKMA nie ma pól `gtin`. Allegro pozwala wystawić ofertę bez katalogu Allegro (czyli bez GTIN), ale wtedy oferta ma mniejszą widoczność.

**Strategia**: pierwsza partia wystawiamy **bez katalogu Allegro**. Równolegle zbieramy GTIN-y od Zebry (kontakt z dystrybutorem). Po zebraniu GTIN-ów drugi krok: dodajemy `product.id` + `product.idType: 'GTIN'` przez PATCH istniejących ofert (lub re-publikujemy z katalogiem).

### 9.4 Mapowanie kategorii Allegro

Allegro ma drzewo ~30 000 kategorii. Dla każdej z naszych 3 podkategorii (DT/TT/taśmy) musimy znaleźć **odpowiednią kategorię liść**.

**Najprawdopodobniej**:
- Etykiety termiczne → `Drukarki i etykiety` → `Etykiety samoprzylepne` → liść (sprawdzić ID)
- Taśmy termotransferowe → `Drukarki i etykiety` → `Taśmy do drukarek etykiet` → liść (sprawdzić)

Najlepiej: użyj `GET /sale/matching-categories?name=Zebra+Z-Perform+1000D` aby Allegro samo zasugerowało kategorię. To **jednorazowa robota** — robimy raz w fazie 1, zapisujemy w `data/allegro-config.ts`.

### 9.5 Parametry Allegro per kategoria

Każda kategoria Allegro ma swój zestaw obowiązkowych parametrów (np. Marka, Materiał, Rozmiar). Mapowanie SI nie da się zautomatyzować — trzeba ręcznie raz przygotować mapę dla 3 kategorii (3 godziny pracy).

**Format**: `data/allegro-config.ts`:

```typescript
export const ALLEGRO_CATEGORY_MAPPING = {
  'thermal-label': {
    categoryId: '253033', // przykładowe ID — sprawdzić w GET /sale/matching-categories
    requiredParameters: [
      { allegroId: '12345', name: 'Marka', valueMapping: { default: 'Zebra' } },
      { allegroId: '67890', name: 'Materiał', valueMapping: { 'papier-niepowlekany': 'papier' } },
      // ...
    ],
  },
  // analogicznie dla transfer-label i transfer-ribbon
}
```

---

## 10. Czego nie buduje się w fazie 1 (deferred)

Świadomie pomijamy dla skupienia na MVP:
- Aukcje (tylko "Kup Teraz" / `BUY_NOW`)
- Allegro Smart! Free shipping (do dodania w fazie 5 jeśli marża pozwoli)
- Wielowariantowość (Z-Perform 1000D ma 216 wariantów — w fazie 1 wystawiamy każdy wariant jako osobną ofertę; wariantowość w fazie 5)
- Allegro Promowanie / Lighting / Wyróżnienia (płatne dodatki)
- Allegro Zwroty automatyczne (RMA przez API — w fazie 5)
- Allegro CZ/SK/HU (eksport międzynarodowy)
- Allegro Lokalnie / Allegro Charytatywni / inne nisze

Każda z tych funkcji można dorzucić później jako iterację (po 2-3 dni pracy każda).

---

## 11. Krytyczne pytania do TAKMA przed rozpoczęciem

**1. Czy TAKMA ma już konto Allegro firmowe?**
Jeśli nie — założenie zajmuje 1-2 dni (Allegro Standard Firma, NIP + KRS + weryfikacja).

**2. Kto będzie obsługiwał zamówienia z Allegro?**
Jeśli inna osoba niż przez `/admin/zamowienia` — trzeba ustawić powiadomienia (email/SMS przy nowym zamówieniu).

**3. Czy ceny na Allegro mogą być różne niż na takma.com.pl?**
Zwykle: Allegro +5-10% (pokrycie prowizji). W modelu danych przewidziałem `AllegroOffer.margin` osobno od ceny w sklepie.

**4. Czy stany magazynowe są synchronizowane z hurtownią (Jarltech)?**
Z `JarltechStockCache` widzę że tak. Trzeba dodać logikę: gdy stan u dystrybutora spada do 0, zamykamy ofertę na Allegro (status: INACTIVE).

**5. Czy TAKMA ma już GTIN-y dla wszystkich SKU?**
Jeśli nie — pierwsza partia bez katalogu Allegro. Kontakt do Zebra Polska / dystrybutora o EAN-y.

**6. Czy logo/branding TAKMA na Allegro?**
Można skonfigurować w panelu Allegro (logo sprzedawcy, custom info). To 30 min ręcznej konfiguracji.

---

## 12. Następny krok — co zrobić teraz

**Krok 1** (15 minut): Załóż konto deweloperskie Allegro
- `https://apps.developer.allegro.pl` (produkcja)
- `https://apps.developer.allegro.pl.allegrosandbox.pl` (sandbox)
- Zarejestruj **2 aplikacje** — sandbox + produkcję (różne Client ID)
- Skonfiguruj User-Agent (np. `TAKMA-Sync/1.0.0 (+https://takma.com.pl/o-firmie)`)

**Krok 2** (30 minut): Przygotuj env i pierwszy migration
- Dodaj do `.env.local`:
  ```
  ALLEGRO_CLIENT_ID=<sandbox_id>
  ALLEGRO_CLIENT_SECRET=<sandbox_secret>
  ALLEGRO_REDIRECT_URI=http://localhost:3000/api/admin/allegro/auth/callback
  ALLEGRO_ENV=sandbox
  ALLEGRO_USER_AGENT=TAKMA-Sync/1.0.0 (+https://takma.com.pl/o-firmie)
  ALLEGRO_API_BASE=https://api.allegro.pl.allegrosandbox.pl
  ALLEGRO_AUTH_BASE=https://allegro.pl.allegrosandbox.pl/auth/oauth
  CRON_SECRET=<random_string>
  ```
- Stwórz migration: `prisma migrate dev --name add_allegro_integration` (z 4 modelami z sekcji 2)

**Krok 3** (decyzja): Czy ruszamy z wdrożeniem od razu?
- Jeśli **TAK** → przygotuję konkretne pliki TypeScript (`lib/allegro/client.ts`, `auth.ts`, mapper) jako kolejny krok. To realnie 4-6h pracy klikającej do podstawienia w repo.
- Jeśli **NIE** (np. najpierw audyt biznesowy: prowizje Allegro, ceny konkurencji, czy w ogóle warto) → najpierw zbadajmy konkretną kategorię Allegro pod kątem konkurencji + marżowości.

Co wolisz?
