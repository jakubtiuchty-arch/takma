# Spam-defense — implementation kit dla `/admin/seo-agent`

**Data**: 7 czerwca 2026
**Cel**: zautomatyzowany skrypt monitorujący ataki spamerskie na takma.com.pl (i siostrzane domeny), klasyfikujący nowe refdomains, generujący delta do `disavow.txt` i wysyłający alerty
**Wzorzec architektoniczny**: analogicznie do istniejącego `src/lib/seo-agent/` — `collectors → pipeline → DB → UI → cron`
**Mechanizm decyzyjny**: automatyczna klasyfikacja → 90% pewności = auto-disavow, reszta = pending review w `/admin/seo-agent/spam-defense`

---

## Architektura — co dokładnie budujemy

```
src/lib/spam-defense/                          [NEW]
├── types.ts                  Typy TypeScript
├── ahrefs-fetcher.ts         Pobieranie refdomains z Ahrefs API
├── classifier.ts             Heurystyki klasyfikacji (SEOExpress, PBN, indyjski)
├── disavow-generator.ts      Tworzy disavow-vN.txt z bieżących detections
├── notifier.ts               Email/Slack alert (Resend już w stacku)
└── pipeline.ts               Orchestrator: fetch → classify → save → notify

src/app/api/admin/spam-defense/                [NEW]
├── run/route.ts              POST trigger (dual auth: admin OR CRON_SECRET)
├── approve/route.ts          POST [id] → zmień status na MANUALLY_DISAVOWED
├── ignore/route.ts           POST [id] → status IGNORED
├── whitelist/route.ts        POST { domain } → dodaj do permanent whitelist
├── generate-disavow/route.ts POST → generuje disavow-vN+1.txt z wszystkich AUTO + MANUALLY
└── state/route.ts            GET aktualny stan (counts, lista pending)

src/app/admin/seo-agent/spam-defense/          [NEW]
└── page.tsx                  UI: dashboard + lista pending + akcje

prisma/schema.prisma                           [PATCH]
+ model SpamDefenseRun
+ model SpamDefenseDetection
+ model SpamDefenseDisavowList
+ model SpamDefenseWhitelist
+ 3 nowe enumy

vercel.json                                    [PATCH]
+ cron 6:00 codziennie
```

**Dlaczego osobny moduł a nie rozszerzenie `seo-agent`**:
- Inny cykl uruchamiania (codziennie vs raz/tydz dla SEO)
- Inny rodzaj decyzji (klasyfikacja per domena vs scoring stron)
- Może obsługiwać też siostrzane domeny (serwis-zebry.pl, ezdrp24, microsites) — nie tylko takma.com.pl

**Czemu DODAJEMY do `/admin/seo-agent/spam-defense` (a nie `/admin/spam-defense`)**: konwencja TAKMA — wszystko związane z SEO pod jednym dachem. Możesz potem dodać taby w sidebarze.

---

## Krok 1 — Prisma schema (dodaj do `prisma/schema.prisma`)

```prisma
// ============================================================================
// Spam-defense — automatyczne wykrywanie ataków spamerskich
// ============================================================================

enum SpamDefenseRunStatus {
  RUNNING
  COMPLETED
  FAILED
}

enum SpamDefenseClass {
  SPAM_SEOEXPRESS      // wzorzec SEOExpress PBN
  SPAM_PBN             // generic PBN (.store/.shop fake DR + 0 traffic)
  SPAM_INDIAN          // .co.in z DR < 5 + 0 traffic
  SPAM_LOW_QUALITY     // DR < 5 + 0 traffic + dofollow
  AHREFS_FLAGGED       // is_spam: true od Ahrefs
  LEGIT                // realna strona — nie disavow
  UNCERTAIN            // wymaga ręcznej decyzji admina
}

enum SpamDefenseStatus {
  PENDING              // wymaga decyzji admina
  AUTO_DISAVOWED       // automatycznie wrzucone do listy disavow
  MANUALLY_DISAVOWED   // admin zatwierdził
  IGNORED              // admin oznaczył jako legit (ten konkretny run)
  WHITELISTED          // permanentnie zaufana — nigdy nie disavow
}

model SpamDefenseRun {
  id              String                @id @default(cuid())
  target          String                // np. "takma.com.pl" — można uruchamiać per domena
  startedAt       DateTime              @default(now())
  finishedAt      DateTime?
  status          SpamDefenseRunStatus  @default(RUNNING)

  // Statystyki
  totalRefdomains   Int  @default(0)    // łącznie w Ahrefs po runie
  newRefdomains     Int  @default(0)    // nowe od ostatniego runa
  flaggedSpam       Int  @default(0)    // klasyfikowane jako spam
  autoDisavowedNow  Int  @default(0)    // zdisavowowane automatycznie w tym runie
  uncertainCount    Int  @default(0)    // wymaga decyzji admina

  // Domain Rating (do trackingu)
  domainRatingNow   Float?
  domainRatingPrev  Float?

  errorMessage    String?
  detections      SpamDefenseDetection[]

  @@index([target, startedAt(sort: Desc)])
  @@index([status])
  @@map("spam_defense_runs")
}

model SpamDefenseDetection {
  id            String                  @id @default(cuid())
  run           SpamDefenseRun          @relation(fields: [runId], references: [id], onDelete: Cascade)
  runId         String

  // Dane z Ahrefs
  domain        String
  target        String                  // jakiej naszej domeny dotyczy (takma.com.pl etc.)
  domainRating  Float?
  trafficDomain Int?                    @default(0)
  firstSeen     DateTime?
  dofollowLinks Int                     @default(0)
  isSpamAhrefs  Boolean                 @default(false)

  // Klasyfikacja
  classification         SpamDefenseClass
  classificationReason   String          // human-readable powód
  matchedPattern         String?         // np. "seoexpress-store"
  classificationScore    Float           // 0-1 pewność (1 = 100%)

  // Stan / decyzja
  status        SpamDefenseStatus        @default(PENDING)
  resolvedAt    DateTime?
  resolvedBy    String?                  // adminUserId
  resolvedNote  String?

  createdAt     DateTime                 @default(now())

  @@unique([domain, target])
  @@index([status])
  @@index([classification])
  @@index([target, status])
  @@map("spam_defense_detections")
}

model SpamDefenseDisavowList {
  // Singleton per target — bieżąca wersja disavow file dla danej domeny
  target              String   @id     // klucz primary = "takma.com.pl"
  version             Int      @default(1)
  filePath            String              // np. "/disavow/takma-v4.txt"
  domainCount         Int

  lastGenerated       DateTime @default(now())
  uploadedToGscAt     DateTime?
  uploadedByAdmin     String?

  updatedAt           DateTime @updatedAt

  @@map("spam_defense_disavow_list")
}

model SpamDefenseWhitelist {
  // Permanentnie zaufane domeny — nigdy nie disavow
  id        String   @id @default(cuid())
  target    String   // jakiej naszej domeny dotyczy
  domain    String
  addedAt   DateTime @default(now())
  addedBy   String   // adminUserId
  reason    String?

  @@unique([target, domain])
  @@index([target])
  @@map("spam_defense_whitelist")
}
```

**Po dodaniu**: `npx prisma migrate dev --name add_spam_defense`

---

## Krok 2 — Klasyfikator (`src/lib/spam-defense/classifier.ts`)

To najważniejsza część — heurystyki podejmowania decyzji.

```typescript
/**
 * Spam Defense Classifier
 * Klasyfikuje domeny linkujące do TAKMA jako spam / legit / uncertain
 * Heurystyki na podstawie wzorców z 4 fal ataków SEOExpress (maj-czerwiec 2026)
 */

import type { SpamDefenseClass } from '@/generated/prisma/client'

export interface RefdomainData {
  domain: string
  domainRating: number | null
  trafficDomain: number
  firstSeen: string | null
  dofollowLinks: number
  isSpamAhrefs: boolean
}

export interface ClassificationResult {
  classification: SpamDefenseClass
  reason: string
  matchedPattern: string | null
  score: number // 0-1 pewność
}

// ---------------------------------------------------------------------------
// Wzorce SEOExpress PBN (zaobserwowane w 4 falach ataków)
// ---------------------------------------------------------------------------

const SEOEXPRESS_PATTERNS = [
  /seoexpress/i,
]

const PBN_KEYWORD_PATTERNS = [
  /\b(seo|backlink|pbn|tier-1|tier_1|dofollow|guest-post|authority|keyword-network|outreach|link-building|niche-edit)\b/i,
]

const SUSPICIOUS_TLDS = ['.store', '.shop', '.info', '.xyz']
const INDIAN_TLDS = ['.co.in', '.in']

// ---------------------------------------------------------------------------
// Klasyfikacja
// ---------------------------------------------------------------------------

export function classify(
  d: RefdomainData,
  whitelist: Set<string>
): ClassificationResult {
  // 1. Whitelist permanentna — wygrywa wszystko
  if (whitelist.has(d.domain)) {
    return {
      classification: 'LEGIT',
      reason: 'Domena na permanentnej whiteliście',
      matchedPattern: 'whitelist',
      score: 1.0,
    }
  }

  // 2. SEOExpress — najwyższe pewność
  const isSeoExpress = SEOEXPRESS_PATTERNS.some(p => p.test(d.domain))
  if (isSeoExpress) {
    return {
      classification: 'SPAM_SEOEXPRESS',
      reason: 'SEOExpress PBN — wzorzec znany z 4 fal ataków od marca 2026',
      matchedPattern: 'seoexpress',
      score: 1.0,
    }
  }

  // 3. Ahrefs flagged + dofollow → szybkie disavow
  if (d.isSpamAhrefs && d.dofollowLinks > 0) {
    return {
      classification: 'AHREFS_FLAGGED',
      reason: 'Ahrefs is_spam: true + dofollow links — wysokie ryzyko',
      matchedPattern: 'ahrefs-spam-dofollow',
      score: 0.95,
    }
  }

  // 4. PBN: suspicious TLD + fake DR (typowo 30-40) + 0 traffic
  const isSuspiciousTld = SUSPICIOUS_TLDS.some(tld => d.domain.endsWith(tld))
  const hasPbnKeyword = PBN_KEYWORD_PATTERNS.some(p => p.test(d.domain))
  const looksLikePBN =
    isSuspiciousTld &&
    d.trafficDomain === 0 &&
    d.domainRating !== null &&
    d.domainRating >= 25 &&
    d.domainRating <= 50

  if (looksLikePBN && hasPbnKeyword) {
    return {
      classification: 'SPAM_PBN',
      reason: `${isSuspiciousTld ? 'Suspicious TLD' : ''} + fake DR (${d.domainRating}) + 0 traffic + PBN keyword`,
      matchedPattern: 'pbn-store-shop',
      score: 0.92,
    }
  }

  // 5. Indyjski spam: .co.in/.in + DR < 5 + 0 traffic
  const isIndianTld = INDIAN_TLDS.some(tld => d.domain.endsWith(tld))
  if (isIndianTld && (d.domainRating ?? 0) < 5 && d.trafficDomain === 0) {
    return {
      classification: 'SPAM_INDIAN',
      reason: '.co.in/.in + DR<5 + 0 traffic — wzorzec indyjskich spam directories',
      matchedPattern: 'indian-spam',
      score: 0.90,
    }
  }

  // 6. Ogólny low-quality: DR < 5 + 0 traffic + dofollow
  if (
    (d.domainRating ?? 0) < 5 &&
    d.trafficDomain === 0 &&
    d.dofollowLinks > 0
  ) {
    return {
      classification: 'SPAM_LOW_QUALITY',
      reason: 'DR < 5 + 0 traffic + dofollow — niski jakościowo profil linku',
      matchedPattern: 'low-quality-dofollow',
      score: 0.80,
    }
  }

  // 7. PBN suspicious TLD bez PBN keyword (np. lixil-reformshop.shop)
  if (
    isSuspiciousTld &&
    d.trafficDomain === 0 &&
    d.domainRating !== null &&
    d.domainRating >= 25
  ) {
    return {
      classification: 'SPAM_PBN',
      reason: 'Suspicious TLD + fake DR + 0 traffic (bez PBN keyword)',
      matchedPattern: 'pbn-suspicious-tld',
      score: 0.75,
    }
  }

  // 8. Legit: ma realny traffic > 100 LUB DR > 15 (z polskim TLD prawdopodobnie organic mention)
  if (d.trafficDomain > 100 || (d.domainRating ?? 0) > 15) {
    return {
      classification: 'LEGIT',
      reason: `Realny traffic (${d.trafficDomain}) lub wysoki DR (${d.domainRating}) — prawdopodobnie organic mention`,
      matchedPattern: 'organic-traffic-or-dr',
      score: 0.85,
    }
  }

  // 9. Pozostałe — niepewne, wymaga ręcznej decyzji
  return {
    classification: 'UNCERTAIN',
    reason: `Niejednoznaczne: DR=${d.domainRating}, traffic=${d.trafficDomain}, dofollow=${d.dofollowLinks}`,
    matchedPattern: null,
    score: 0.5,
  }
}

// ---------------------------------------------------------------------------
// Próg pewności do auto-disavow
// ---------------------------------------------------------------------------

export const AUTO_DISAVOW_THRESHOLD = 0.85

export function shouldAutoDisavow(result: ClassificationResult): boolean {
  // Auto-disavow tylko jeśli score >= threshold I to nie jest LEGIT
  if (result.classification === 'LEGIT') return false
  if (result.classification === 'UNCERTAIN') return false
  return result.score >= AUTO_DISAVOW_THRESHOLD
}
```

---

## Krok 3 — Ahrefs Fetcher (`src/lib/spam-defense/ahrefs-fetcher.ts`)

```typescript
/**
 * Pobranie nowych refdomains z Ahrefs API dla wskazanej domeny
 * Używa REST API Ahrefs (https://api.ahrefs.com) — bezpośrednio z fetch
 * Wymagane env: AHREFS_API_KEY
 */

import type { RefdomainData } from './classifier'

const AHREFS_API_BASE = 'https://api.ahrefs.com/v3'

export async function fetchNewRefdomains(
  target: string,
  sinceDate: Date
): Promise<RefdomainData[]> {
  const apiKey = process.env.AHREFS_API_KEY
  if (!apiKey) throw new Error('AHREFS_API_KEY env not set')

  const url = new URL(`${AHREFS_API_BASE}/site-explorer/referring-domains`)
  url.searchParams.set('target', target)
  url.searchParams.set('mode', 'subdomains')
  url.searchParams.set('select', 'domain,domain_rating,traffic_domain,first_seen,dofollow_links,is_spam')
  url.searchParams.set('where', JSON.stringify({
    field: 'first_seen',
    is: ['gte', sinceDate.toISOString().split('T')[0]],
  }))
  url.searchParams.set('order_by', 'first_seen:desc')
  url.searchParams.set('limit', '200')

  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Ahrefs API error ${response.status}: ${await response.text()}`)
  }

  const json = await response.json() as { refdomains: any[] }

  return json.refdomains.map(d => ({
    domain: d.domain,
    domainRating: d.domain_rating ?? null,
    trafficDomain: d.traffic_domain ?? 0,
    firstSeen: d.first_seen ?? null,
    dofollowLinks: d.dofollow_links ?? 0,
    isSpamAhrefs: d.is_spam === true,
  }))
}

export async function fetchDomainRating(target: string): Promise<number | null> {
  const apiKey = process.env.AHREFS_API_KEY
  if (!apiKey) throw new Error('AHREFS_API_KEY env not set')

  const url = new URL(`${AHREFS_API_BASE}/site-explorer/domain-rating`)
  url.searchParams.set('target', target)
  url.searchParams.set('date', new Date().toISOString().split('T')[0])

  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/json',
    },
  })

  if (!response.ok) return null

  const json = await response.json() as { domain_rating?: { domain_rating: number } }
  return json.domain_rating?.domain_rating ?? null
}
```

---

## Krok 4 — Pipeline (`src/lib/spam-defense/pipeline.ts`)

```typescript
/**
 * Spam Defense Pipeline
 * Orchestrator: pobierz nowe refdomains → klasyfikuj → zapisz do DB → notify
 */

import { prisma } from '@/lib/db'
import { fetchNewRefdomains, fetchDomainRating } from './ahrefs-fetcher'
import { classify, shouldAutoDisavow } from './classifier'
import { notifySpamFound } from './notifier'

export interface SpamDefenseRunResult {
  runId: string
  target: string
  newRefdomains: number
  flaggedSpam: number
  autoDisavowed: number
  uncertain: number
  domainRating: number | null
}

export async function runSpamDefensePipeline(
  target: string
): Promise<SpamDefenseRunResult> {
  // 1. Utwórz nowy run
  const previousRun = await prisma.spamDefenseRun.findFirst({
    where: { target, status: 'COMPLETED' },
    orderBy: { startedAt: 'desc' },
  })

  const run = await prisma.spamDefenseRun.create({
    data: { target, status: 'RUNNING' },
  })

  try {
    // 2. Pobierz aktualny DR (do trackingu)
    const currentDR = await fetchDomainRating(target)

    // 3. Pobierz nowe refdomains od ostatniego runa (lub od 30 dni jeśli pierwszy)
    const sinceDate = previousRun?.startedAt ?? new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    const refdomains = await fetchNewRefdomains(target, sinceDate)

    // 4. Pobierz whitelist
    const whitelistRows = await prisma.spamDefenseWhitelist.findMany({
      where: { target },
      select: { domain: true },
    })
    const whitelist = new Set(whitelistRows.map(r => r.domain))

    // 5. Pobierz już znane (już sklasyfikowane) domeny — by nie duplikować
    const existingDetections = await prisma.spamDefenseDetection.findMany({
      where: { target, domain: { in: refdomains.map(d => d.domain) } },
      select: { domain: true },
    })
    const existingSet = new Set(existingDetections.map(r => r.domain))

    // 6. Klasyfikuj tylko nowe
    let flaggedSpam = 0
    let autoDisavowed = 0
    let uncertain = 0

    for (const refdomain of refdomains) {
      if (existingSet.has(refdomain.domain)) continue

      const classification = classify(refdomain, whitelist)
      const shouldAuto = shouldAutoDisavow(classification)

      const status = shouldAuto ? 'AUTO_DISAVOWED' : 'PENDING'

      await prisma.spamDefenseDetection.create({
        data: {
          runId: run.id,
          target,
          domain: refdomain.domain,
          domainRating: refdomain.domainRating,
          trafficDomain: refdomain.trafficDomain,
          firstSeen: refdomain.firstSeen ? new Date(refdomain.firstSeen) : null,
          dofollowLinks: refdomain.dofollowLinks,
          isSpamAhrefs: refdomain.isSpamAhrefs,
          classification: classification.classification,
          classificationReason: classification.reason,
          matchedPattern: classification.matchedPattern,
          classificationScore: classification.score,
          status,
          resolvedAt: shouldAuto ? new Date() : null,
        },
      })

      if (classification.classification !== 'LEGIT') flaggedSpam++
      if (shouldAuto) autoDisavowed++
      if (classification.classification === 'UNCERTAIN') uncertain++
    }

    // 7. Aktualizuj run
    await prisma.spamDefenseRun.update({
      where: { id: run.id },
      data: {
        status: 'COMPLETED',
        finishedAt: new Date(),
        totalRefdomains: refdomains.length,
        newRefdomains: refdomains.length - existingSet.size,
        flaggedSpam,
        autoDisavowedNow: autoDisavowed,
        uncertainCount: uncertain,
        domainRatingNow: currentDR,
        domainRatingPrev: previousRun?.domainRatingNow,
      },
    })

    // 8. Notify jeśli przekroczono próg (5+ nowych spamów lub spadek DR)
    const shouldNotify =
      flaggedSpam >= 5 ||
      uncertain >= 3 ||
      (previousRun?.domainRatingNow && currentDR && currentDR < previousRun.domainRatingNow - 2)

    if (shouldNotify) {
      await notifySpamFound({
        target,
        runId: run.id,
        flaggedSpam,
        autoDisavowed,
        uncertain,
        domainRatingNow: currentDR,
        domainRatingPrev: previousRun?.domainRatingNow ?? null,
      })
    }

    return {
      runId: run.id,
      target,
      newRefdomains: refdomains.length - existingSet.size,
      flaggedSpam,
      autoDisavowed,
      uncertain,
      domainRating: currentDR,
    }
  } catch (error) {
    await prisma.spamDefenseRun.update({
      where: { id: run.id },
      data: {
        status: 'FAILED',
        finishedAt: new Date(),
        errorMessage: error instanceof Error ? error.message : String(error),
      },
    })
    throw error
  }
}
```

---

## Krok 5 — Disavow Generator (`src/lib/spam-defense/disavow-generator.ts`)

```typescript
/**
 * Generuje plik disavow.txt z aktualnych detections o statusie AUTO_DISAVOWED + MANUALLY_DISAVOWED
 * Output: tekst gotowy do uploadu w GSC + zapisany do public/disavow/{target}-v{N}.txt
 */

import { prisma } from '@/lib/db'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function generateDisavowFile(target: string): Promise<{
  content: string
  domainCount: number
  version: number
  filePath: string
}> {
  // 1. Pobierz wszystkie zdisavowowane domeny dla tego target
  const detections = await prisma.spamDefenseDetection.findMany({
    where: {
      target,
      status: { in: ['AUTO_DISAVOWED', 'MANUALLY_DISAVOWED'] },
    },
    select: { domain: true },
    orderBy: { domain: 'asc' },
  })

  const domains = Array.from(new Set(detections.map(d => d.domain))).sort()

  // 2. Następna wersja
  const existing = await prisma.spamDefenseDisavowList.findUnique({ where: { target } })
  const nextVersion = (existing?.version ?? 0) + 1

  // 3. Generuj plik
  const header = [
    `# Disavow file for ${target} — v${nextVersion}`,
    `# Created: ${new Date().toISOString().split('T')[0]}`,
    `# Total: ${domains.length} unikalnych domen`,
    `# Generated by spam-defense automatic system`,
    '',
  ].join('\n')

  const body = domains.map(d => `domain:${d}`).join('\n')
  const content = header + body + '\n'

  // 4. Zapisz plik (Vercel: tylko /tmp jest writeable w runtime, więc tylko zwracamy content + DB log)
  const filePath = `disavow/${target.replace(/\./g, '-')}-v${nextVersion}.txt`

  // 5. Zapisz metadane do DB
  await prisma.spamDefenseDisavowList.upsert({
    where: { target },
    create: {
      target,
      version: nextVersion,
      filePath,
      domainCount: domains.length,
    },
    update: {
      version: nextVersion,
      filePath,
      domainCount: domains.length,
    },
  })

  return {
    content,
    domainCount: domains.length,
    version: nextVersion,
    filePath,
  }
}
```

---

## Krok 6 — Notifier (`src/lib/spam-defense/notifier.ts`)

```typescript
/**
 * Wysyła email alert do admina TAKMA o wykrytym ataku
 * Używa Resend (już w stacku)
 */

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface SpamFoundParams {
  target: string
  runId: string
  flaggedSpam: number
  autoDisavowed: number
  uncertain: number
  domainRatingNow: number | null
  domainRatingPrev: number | null
}

export async function notifySpamFound(params: SpamFoundParams): Promise<void> {
  const adminEmail = process.env.SPAM_DEFENSE_ALERT_EMAIL || 'jakub.tiuchty@takma.com.pl'

  const drChange =
    params.domainRatingPrev && params.domainRatingNow
      ? params.domainRatingNow - params.domainRatingPrev
      : null

  const subject = `Spam-defense alert: ${params.target} — ${params.flaggedSpam} nowych spamów`

  const html = `
    <h2>Wykryto atak spamerski na ${params.target}</h2>
    <ul>
      <li><strong>Nowych spamów:</strong> ${params.flaggedSpam}</li>
      <li><strong>Auto-zdisavowowanych:</strong> ${params.autoDisavowed}</li>
      <li><strong>Wymagają decyzji:</strong> ${params.uncertain}</li>
      <li><strong>Domain Rating teraz:</strong> ${params.domainRatingNow ?? 'brak danych'}</li>
      <li><strong>Domain Rating poprzedni:</strong> ${params.domainRatingPrev ?? 'brak danych'}</li>
      ${drChange !== null ? `<li><strong>Zmiana DR:</strong> ${drChange > 0 ? '+' : ''}${drChange}</li>` : ''}
    </ul>
    <p>
      <a href="https://www.takma.com.pl/admin/seo-agent/spam-defense?runId=${params.runId}">
        Przejdź do panelu spam-defense
      </a>
    </p>
    <p>Jeśli auto-disavow zadziałał poprawnie (klasa SEOExpress, PBN, indyjski spam) — nie wymaga akcji.</p>
    <p>Jeśli pojawiły się UNCERTAIN — wymagana ręczna decyzja w panelu.</p>
  `

  await resend.emails.send({
    from: 'spam-defense@takma.com.pl',
    to: adminEmail,
    subject,
    html,
  })
}
```

---

## Krok 7 — API route run (`src/app/api/admin/spam-defense/run/route.ts`)

```typescript
/**
 * POST /api/admin/spam-defense/run
 * Trigger spam-defense pipeline.
 * Dual auth: admin JWT cookie OR Authorization: Bearer CRON_SECRET
 * Query param: ?target=takma.com.pl (domyślnie wszystkie ze konfiguracji)
 */

import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth'
import { runSpamDefensePipeline } from '@/lib/spam-defense/pipeline'

export const dynamic = 'force-dynamic'
export const maxDuration = 120

// Konfiguracja celów monitorowania
const MONITORED_TARGETS = [
  'takma.com.pl',
  'serwis-zebry.pl',
  'ezdrp24.com.pl',
  'tc22.pl',
  'zebrazt411.pl',
  'et401.pl',
]

export async function POST(request: NextRequest) {
  // Auth: admin session cookie OR CRON_SECRET
  const sessionCookie = request.cookies.get('admin-session')?.value
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET

  const isAdmin = sessionCookie && (await verifySession(sessionCookie))
  const isCron = cronSecret && authHeader === `Bearer ${cronSecret}`

  if (!isAdmin && !isCron) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Query param: konkretny target lub wszystkie
  const targetParam = request.nextUrl.searchParams.get('target')
  const targets = targetParam ? [targetParam] : MONITORED_TARGETS

  // Uruchom pipeline per target (sekwencyjnie żeby nie przekroczyć Ahrefs rate limit)
  const results = []
  for (const target of targets) {
    try {
      const result = await runSpamDefensePipeline(target)
      results.push(result)
    } catch (error) {
      results.push({
        target,
        error: error instanceof Error ? error.message : String(error),
      })
    }
  }

  return NextResponse.json({ results })
}
```

---

## Krok 8 — API routes akcji decyzyjnych

### `src/app/api/admin/spam-defense/approve/[id]/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await verifySession(request.cookies.get('admin-session')?.value ?? '')
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { note } = await request.json().catch(() => ({ note: undefined }))

  const updated = await prisma.spamDefenseDetection.update({
    where: { id: params.id },
    data: {
      status: 'MANUALLY_DISAVOWED',
      resolvedAt: new Date(),
      resolvedBy: session.userId,
      resolvedNote: note,
    },
  })

  return NextResponse.json({ ok: true, detection: updated })
}
```

### `src/app/api/admin/spam-defense/ignore/[id]/route.ts`

Identyczna struktura, status: `IGNORED`.

### `src/app/api/admin/spam-defense/whitelist/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  const session = await verifySession(request.cookies.get('admin-session')?.value ?? '')
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { target, domain, reason } = await request.json()

  await prisma.spamDefenseWhitelist.create({
    data: {
      target,
      domain,
      addedBy: session.userId,
      reason,
    },
  })

  // Aktualizuj istniejące detections (przejdź na WHITELISTED)
  await prisma.spamDefenseDetection.updateMany({
    where: { target, domain },
    data: { status: 'WHITELISTED', resolvedAt: new Date(), resolvedBy: session.userId },
  })

  return NextResponse.json({ ok: true })
}
```

### `src/app/api/admin/spam-defense/generate-disavow/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth'
import { generateDisavowFile } from '@/lib/spam-defense/disavow-generator'

export async function POST(request: NextRequest) {
  const session = await verifySession(request.cookies.get('admin-session')?.value ?? '')
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { target } = await request.json()
  const result = await generateDisavowFile(target)

  // Zwróć plik bezpośrednio jako attachment
  return new NextResponse(result.content, {
    headers: {
      'Content-Type': 'text/plain',
      'Content-Disposition': `attachment; filename="disavow-${target.replace(/\./g, '-')}-v${result.version}.txt"`,
    },
  })
}
```

---

## Krok 9 — UI `/admin/seo-agent/spam-defense/page.tsx`

```tsx
'use client'

import { useEffect, useState } from 'react'

interface Detection {
  id: string
  target: string
  domain: string
  domainRating: number | null
  trafficDomain: number
  dofollowLinks: number
  classification: string
  classificationReason: string
  classificationScore: number
  status: string
  createdAt: string
}

interface RunStats {
  target: string
  lastRunAt: string | null
  domainRatingNow: number | null
  pending: number
  autoDisavowed: number
  uncertain: number
  totalDisavowed: number
}

export default function SpamDefensePage() {
  const [stats, setStats] = useState<RunStats[]>([])
  const [pending, setPending] = useState<Detection[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/spam-defense/state')
      .then(r => r.json())
      .then(data => {
        setStats(data.stats)
        setPending(data.pending)
        setLoading(false)
      })
  }, [])

  async function runNow(target: string) {
    setLoading(true)
    await fetch(`/api/admin/spam-defense/run?target=${target}`, { method: 'POST' })
    location.reload()
  }

  async function approve(id: string) {
    await fetch(`/api/admin/spam-defense/approve/${id}`, { method: 'POST' })
    setPending(p => p.filter(d => d.id !== id))
  }

  async function ignore(id: string) {
    await fetch(`/api/admin/spam-defense/ignore/${id}`, { method: 'POST' })
    setPending(p => p.filter(d => d.id !== id))
  }

  async function downloadDisavow(target: string) {
    const res = await fetch('/api/admin/spam-defense/generate-disavow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ target }),
    })
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `disavow-${target.replace(/\./g, '-')}.txt`
    a.click()
  }

  if (loading) return <div>Ładowanie...</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Spam Defense — monitoring ataków</h1>

      {/* Dashboard per target */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {stats.map(s => (
          <div key={s.target} className="border rounded p-4">
            <h2 className="font-semibold text-lg mb-2">{s.target}</h2>
            <div className="text-sm space-y-1">
              <div>Domain Rating: <strong>{s.domainRatingNow ?? '?'}</strong></div>
              <div>Łącznie zdisavowowanych: <strong>{s.totalDisavowed}</strong></div>
              <div>Auto-disavow w ostatnim runie: <strong>{s.autoDisavowed}</strong></div>
              <div className={s.pending > 0 ? 'text-orange-600 font-semibold' : ''}>
                Wymaga decyzji: <strong>{s.pending}</strong>
              </div>
              <div className="text-gray-500">Ostatni run: {s.lastRunAt ? new Date(s.lastRunAt).toLocaleString('pl-PL') : 'nigdy'}</div>
            </div>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => runNow(s.target)}
                className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
              >
                Uruchom teraz
              </button>
              <button
                onClick={() => downloadDisavow(s.target)}
                className="px-3 py-1 bg-gray-700 text-white rounded text-sm"
              >
                Pobierz disavow.txt
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pending decisions */}
      <h2 className="text-xl font-semibold mb-4">Wymaga decyzji ({pending.length})</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2">Domena</th>
            <th className="text-left p-2">Target</th>
            <th className="text-left p-2">DR</th>
            <th className="text-left p-2">Traffic</th>
            <th className="text-left p-2">Klasyfikacja</th>
            <th className="text-left p-2">Score</th>
            <th className="text-left p-2">Powód</th>
            <th className="text-left p-2">Akcje</th>
          </tr>
        </thead>
        <tbody>
          {pending.map(d => (
            <tr key={d.id} className="border-t">
              <td className="p-2 font-mono text-sm">{d.domain}</td>
              <td className="p-2 text-sm">{d.target}</td>
              <td className="p-2">{d.domainRating ?? '?'}</td>
              <td className="p-2">{d.trafficDomain}</td>
              <td className="p-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  d.classification.startsWith('SPAM') ? 'bg-red-100 text-red-800' :
                  d.classification === 'LEGIT' ? 'bg-green-100 text-green-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {d.classification}
                </span>
              </td>
              <td className="p-2">{(d.classificationScore * 100).toFixed(0)}%</td>
              <td className="p-2 text-sm">{d.classificationReason}</td>
              <td className="p-2">
                <div className="flex gap-1">
                  <button
                    onClick={() => approve(d.id)}
                    className="px-2 py-1 bg-red-600 text-white rounded text-xs"
                  >
                    Disavow
                  </button>
                  <button
                    onClick={() => ignore(d.id)}
                    className="px-2 py-1 bg-gray-500 text-white rounded text-xs"
                  >
                    Ignoruj
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

Plus endpoint dla state:

### `src/app/api/admin/spam-defense/state/route.ts`

```typescript
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  const targets = ['takma.com.pl', 'serwis-zebry.pl', 'ezdrp24.com.pl', 'tc22.pl', 'zebrazt411.pl', 'et401.pl']

  const stats = await Promise.all(
    targets.map(async target => {
      const lastRun = await prisma.spamDefenseRun.findFirst({
        where: { target, status: 'COMPLETED' },
        orderBy: { startedAt: 'desc' },
      })

      const counts = await prisma.spamDefenseDetection.groupBy({
        by: ['status'],
        where: { target },
        _count: true,
      })

      const pending = counts.find(c => c.status === 'PENDING')?._count ?? 0
      const totalDisavowed = (counts.find(c => c.status === 'AUTO_DISAVOWED')?._count ?? 0) +
                              (counts.find(c => c.status === 'MANUALLY_DISAVOWED')?._count ?? 0)

      return {
        target,
        lastRunAt: lastRun?.startedAt.toISOString() ?? null,
        domainRatingNow: lastRun?.domainRatingNow,
        pending,
        autoDisavowed: lastRun?.autoDisavowedNow ?? 0,
        uncertain: lastRun?.uncertainCount ?? 0,
        totalDisavowed,
      }
    })
  )

  const pending = await prisma.spamDefenseDetection.findMany({
    where: { status: 'PENDING' },
    orderBy: { createdAt: 'desc' },
    take: 100,
  })

  return NextResponse.json({ stats, pending })
}
```

---

## Krok 10 — `vercel.json` (cron codzienny)

```json
{
  "crons": [
    {
      "path": "/api/admin/spam-defense/run",
      "schedule": "0 6 * * *"
    }
  ]
}
```

Cron uruchomi pipeline codziennie o 6:00 dla **wszystkich 6 domen** (takma.com.pl + 5 siostrzanych).

---

## Krok 11 — `.env.local` (dodaj zmienne)

```env
# Ahrefs API (już może być z istniejącego MCP setupu)
AHREFS_API_KEY=...

# Spam-defense
SPAM_DEFENSE_ALERT_EMAIL=jakub.tiuchty@takma.com.pl

# CRON_SECRET — już istnieje z seo-agent
```

---

## Roadmapa wdrożenia (4 etapy, ~2 tyg.)

### Etap 1 — fundament + klasyfikator (2-3 dni)

1. Dodaj 4 modele Prisma + 3 enumy do `schema.prisma`
2. `npx prisma migrate dev --name add_spam_defense`
3. Stwórz `src/lib/spam-defense/types.ts`, `classifier.ts`
4. **Test jednostkowy klasyfikatora** — wrzuć 13 nowych domen z czwartej fali jako test cases, sprawdź czy wszystkie wracają z poprawną klasą

### Etap 2 — Ahrefs fetcher + pipeline (2 dni)

1. `ahrefs-fetcher.ts` (lub jeśli Ahrefs MCP nie da się użyć z server-side w Next.js, użyj bezpośrednio fetch z API key)
2. `pipeline.ts`
3. Test ręcznie: `curl -X POST .../api/admin/spam-defense/run?target=takma.com.pl`

### Etap 3 — UI + akcje (3-4 dni)

1. API routes: `state`, `approve`, `ignore`, `whitelist`, `generate-disavow`
2. UI `/admin/seo-agent/spam-defense/page.tsx`
3. Disavow generator + endpoint pobierający plik

### Etap 4 — Notifier + cron (1 dzień)

1. `notifier.ts` z Resend
2. `vercel.json` cron
3. Test alertu emailem

**Łącznie**: 8-10 dni pracy = **~10-15 tys. zł netto** dla seniora Next.js + TypeScript.

---

## Dlaczego ten konkretny szkielet zadziała dla TAKMA

1. **Wykorzystuje istniejącą infrastrukturę** — Prisma, auth (JWT/CRON_SECRET), Resend, konwencje seo-agent
2. **Klasyfikator nauczony na 4 falach SEOExpress** — 90% pewności dla `SPAM_SEOEXPRESS` (matched pattern + 100% score)
3. **Decyzyjny próg AUTO_DISAVOW = 0.85** — wszystko poniżej idzie do PENDING dla ręcznego review
4. **Whitelist permanentna** — przykład cityon.pl (DR 28, traffic 2 881) **nie zostanie zdisavowowany** automatycznie
5. **6 domen monitorowanych jednocześnie** — takma.com.pl + serwis-zebry.pl + ezdrp24.com.pl + tc22.pl + zebrazt411.pl + et401.pl
6. **Codzienny cron + email alert** gdy 5+ spamów / spadek DR > 2

---

## Co dalej

Mogę:

**A) Sprawdzić siostrzane domeny TERAZ** — zobaczyć czy serwis-zebry.pl i microsites też dostają SEOExpress, czy to tylko takma.com.pl. To 10 min researchu Ahrefs.

**B) Zacząć wdrożenie etapu 1** — przekleić Prisma modele do `schema.prisma` i napisać unit test klasyfikatora dla 13 domen z czwartej fali (sprawdzić czy wszystkie dostają poprawną klasę przed wdrożeniem reszty).

**C) Najpierw audyt wykonalności** — sprawdzić czy Ahrefs API key TAKMA pozwala na 6 domen × dziennie (limit zapytań, koszty).

Co wolisz?
