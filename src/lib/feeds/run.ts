import { prisma } from '@/lib/db'
import { sendEmail } from '@/lib/email'
import { validateFeed, type FeedValidationResult, type FeedKind } from './validate'

const FEED_LABEL: Record<FeedKind, string> = {
  ceneo: 'Ceneo',
  merchant: 'Google Merchant',
}

function alertEmail(): string {
  return process.env.FEED_ALERT_EMAIL || process.env.ALLEGRO_NOTIFY_EMAIL || 'handlowy@takma.com.pl'
}

const PUBLIC_ORIGIN = 'https://www.takma.com.pl'

/**
 * Waliduje oba feedy (Ceneo + Google Merchant), zapisuje wynik do bazy
 * i — gdy notify=true — wysyła mail alertowy, jeśli któryś ma błędy.
 * `origin` to baza URL bieżącego deploya (np. https://www.takma.com.pl).
 *
 * Cron Vercela woła deployment po adresie *.vercel.app, który jest za
 * Deployment Protection (401) — wtedy podmieniamy na publiczną domenę,
 * bo tylko ona jest osiągalna bez logowania (i to ją widzą Ceneo/Google).
 */
export async function runFeedValidations(
  origin: string,
  opts: { notify?: boolean } = {},
): Promise<FeedValidationResult[]> {
  if (/\.vercel\.app$/i.test(new URL(origin).hostname)) origin = PUBLIC_ORIGIN
  const feeds: [FeedKind, string][] = [
    ['ceneo', `${origin}/api/ceneo-feed`],
    ['merchant', `${origin}/api/merchant-feed`],
  ]

  const results: FeedValidationResult[] = []
  for (const [feed, url] of feeds) {
    const prev = await prisma.feedValidationRun.findFirst({
      where: { feed },
      orderBy: { startedAt: 'desc' },
      select: { totalOffers: true },
    })
    const r = await validateFeed(feed, url, prev?.totalOffers ?? null)
    await prisma.feedValidationRun.create({
      data: {
        feed,
        ok: r.ok,
        httpStatus: r.httpStatus,
        totalOffers: r.totalOffers,
        withEan: r.withEan,
        prevTotal: prev?.totalOffers ?? null,
        minPrice: r.minPrice,
        maxPrice: r.maxPrice,
        errors: JSON.stringify(r.errors),
        warnings: JSON.stringify(r.warnings),
        durationMs: r.durationMs,
      },
    })
    results.push(r)
  }

  if (opts.notify) {
    const failing = results.filter((r) => !r.ok)
    if (failing.length) await sendFeedAlert(results)
  }

  return results
}

async function sendFeedAlert(results: FeedValidationResult[]): Promise<void> {
  const failing = results.filter((r) => !r.ok)
  const sections = results
    .map((r) => {
      const status = r.ok ? '✅ OK' : '❌ BŁĄD'
      const errs = r.errors.length ? `<ul>${r.errors.map((e) => `<li style="color:#b91c1c">${e}</li>`).join('')}</ul>` : ''
      const warns = r.warnings.length ? `<ul>${r.warnings.map((w) => `<li style="color:#a16207">${w}</li>`).join('')}</ul>` : ''
      return `
        <h3>${FEED_LABEL[r.feed]} — ${status}</h3>
        <p>Ofert: <strong>${r.totalOffers}</strong> · z EAN: ${r.withEan} · cena min/max: ${r.minPrice ?? '–'}/${r.maxPrice ?? '–'} zł · HTTP ${r.httpStatus}</p>
        ${errs}${warns}`
    })
    .join('')

  await sendEmail({
    to: alertEmail(),
    subject: `⚠️ Feedy porównywarek — ${failing.length} z problemem (${failing.map((f) => FEED_LABEL[f.feed]).join(', ')})`,
    html: `
      <h2>Walidacja feedów TAKMA</h2>
      <p>Wykryto problemy w feedach porównywarek. Szczegóły poniżej.</p>
      ${sections}
      <p style="margin-top:16px"><a href="https://www.takma.com.pl/admin/ceneo">Otwórz panel feedów</a></p>`,
  })
}
