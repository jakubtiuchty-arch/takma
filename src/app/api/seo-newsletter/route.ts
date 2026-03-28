import { NextRequest, NextResponse } from 'next/server'

const ADMIN_SECRET = process.env.ADMIN_JWT_SECRET || ''
const RESEND_API_KEY = process.env.RESEND_API_KEY || ''
const TO_EMAIL = 'jakub.tiuchty@takma.com.pl'
const FROM_EMAIL = 'seo-monitor@serwis-zebry.pl'

interface Article {
  title: string
  titlePl: string
  url: string
  date: string
  summary: string
  summaryPl: string
}

interface SourceArticles {
  source: string
  articles: Article[]
}

/**
 * POST /api/seo-newsletter?secret=ADMIN_JWT_SECRET
 *
 * Body: { sources: [{ source: "...", articles: [...] }] }
 *
 * Wysyła newsletter SEO na email. Wywoływany przez scheduled remote agent.
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  if (!secret || secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: 'RESEND_API_KEY not configured' }, { status: 500 })
  }

  try {
    const body = await request.json()
    const sources: SourceArticles[] = body.sources || []

    const totalArticles = sources.reduce((sum, s) => sum + s.articles.length, 0)

    if (totalArticles === 0) {
      return NextResponse.json({ message: 'No articles to send', sent: false })
    }

    const today = new Date().toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

    const html = buildEmailHtml(sources, today, totalArticles)

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `TAKMA SEO Monitor <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        subject: `SEO News — ${today} (${totalArticles} artykułów)`,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('[seo-newsletter] Resend error:', err)
      return NextResponse.json({ error: 'Failed to send email', details: err }, { status: 500 })
    }

    const result = await res.json()
    return NextResponse.json({ sent: true, emailId: result.id, totalArticles })
  } catch (error) {
    console.error('[seo-newsletter] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

function buildEmailHtml(sources: SourceArticles[], today: string, total: number): string {
  const sourceBlocks = sources
    .filter(s => s.articles.length > 0)
    .map(s => {
      const articleRows = s.articles
        .map(a => `
          <tr>
            <td style="padding: 16px 0; border-bottom: 1px solid #f0f0f0;">
              <a href="${escHtml(a.url)}" style="color: #1a56db; font-size: 15px; font-weight: 600; text-decoration: none; line-height: 1.4;">
                ${escHtml(a.titlePl)}
              </a>
              <div style="color: #888; font-size: 12px; margin-top: 2px;">
                ${escHtml(a.title)}
              </div>
              <div style="color: #555; font-size: 13px; margin-top: 8px; line-height: 1.5;">
                ${escHtml(a.summaryPl)}
              </div>
              <div style="color: #999; font-size: 11px; margin-top: 6px;">
                ${escHtml(a.date)}
              </div>
            </td>
          </tr>
        `)
        .join('')

      return `
        <div style="margin-bottom: 32px;">
          <h2 style="font-size: 16px; color: #111; border-bottom: 2px solid #1a56db; padding-bottom: 6px; margin-bottom: 0;">
            ${escHtml(s.source)} <span style="color: #999; font-weight: normal;">(${s.articles.length})</span>
          </h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${articleRows}
          </table>
        </div>
      `
    })
    .join('')

  return `
    <!DOCTYPE html>
    <html lang="pl">
    <head><meta charset="utf-8"></head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
      <div style="text-align: center; margin-bottom: 24px;">
        <h1 style="font-size: 22px; color: #111; margin-bottom: 4px;">SEO News</h1>
        <p style="color: #888; font-size: 13px; margin: 0;">${today} — ${total} nowych artykułów</p>
      </div>
      ${sourceBlocks}
      <div style="text-align: center; margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee;">
        <p style="color: #bbb; font-size: 11px;">Wygenerowano automatycznie przez TAKMA SEO Monitor</p>
      </div>
    </body>
    </html>
  `
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
