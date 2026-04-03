import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const maxDuration = 300

const RSS_FEEDS = [
  { url: 'https://searchengineland.com/feed', source: 'searchengineland', name: 'Search Engine Land' },
  { url: 'https://www.semrush.com/blog/feed/', source: 'semrush', name: 'Semrush Blog' },
  { url: 'https://moz.com/blog/feed', source: 'moz', name: 'Moz Blog' },
  { url: 'https://ahrefs.com/blog/feed/', source: 'ahrefs', name: 'Ahrefs Blog' },
  { url: 'https://www.searchenginejournal.com/feed/', source: 'sej', name: 'Search Engine Journal' },
  { url: 'https://yoast.com/seo-blog/feed/', source: 'yoast', name: 'Yoast SEO Blog' },
]

interface RssItem {
  title: string
  link: string
  guid: string
  pubDate?: string
  author?: string
  contentEncoded?: string
  description?: string
}

function parseRssItems(xml: string): RssItem[] {
  const items: RssItem[] = []
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi
  let match
  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1]
    const get = (tag: string) => {
      const m = block.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`))
      return m ? (m[1] || m[2] || '').trim() : ''
    }
    const title = get('title')
    const link = get('link')
    const guid = get('guid') || link
    const pubDate = get('pubDate')
    const author = get('dc:creator') || get('author')
    const contentEncoded = get('content:encoded')
    const description = get('description')
    if (title && link) {
      items.push({ title, link, guid, pubDate: pubDate || undefined, author: author || undefined, contentEncoded: contentEncoded || undefined, description: description || undefined })
    }
  }
  return items
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<header[\s\S]*?<\/header>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<[^>]*>/g, '\n')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+/g, ' ')
    .trim()
}

async function fetchArticleContent(url: string): Promise<string | null> {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(15000),
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TAKMA SEO Digest Bot/1.0)' },
    })
    if (!response.ok) return null
    const html = await response.text()

    // Try to extract article content from common selectors
    const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)
      || html.match(/<div[^>]*class="[^"]*(?:post-content|entry-content|article-content|blog-content|single-content|post-body|article-body)[^"]*"[^>]*>([\s\S]*?)<\/div>/i)
      || html.match(/<div[^>]*class="[^"]*content[^"]*"[^>]*>([\s\S]*?)<\/div>/i)

    const rawContent = articleMatch ? articleMatch[1] : html
    const text = stripHtml(rawContent)

    // Limit to ~4000 words to fit in Claude context
    const words = text.split(/\s+/)
    return words.slice(0, 4000).join(' ')
  } catch {
    return null
  }
}

async function translateWithClaude(title: string, content: string): Promise<{ titlePl: string; summaryPl: string; contentPl: string } | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return null

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 8000,
        messages: [{
          role: 'user',
          content: `Przetłumacz poniższy artykuł SEO na język polski. Zachowaj formatowanie — użyj akapitów, nagłówków (## dla H2, ### dla H3), list (- dla punktów). Zachowaj merytorykę i terminologię SEO.

TYTUŁ: ${title}

TREŚĆ:
${content.slice(0, 12000)}

Odpowiedz w formacie:
TYTUŁ_PL: [przetłumaczony tytuł]
STRESZCZENIE_PL: [2-3 zdania streszczenia po polsku]
TREŚĆ_PL:
[pełne tłumaczenie artykułu po polsku z formatowaniem Markdown]`
        }]
      }),
      signal: AbortSignal.timeout(60000),
    })

    if (!response.ok) {
      console.warn(`[SEO Digest] Claude API error: ${response.status}`)
      return null
    }
    const data = await response.json()
    const text = data.content?.[0]?.text || ''
    const titleMatch = text.match(/TYTUŁ_PL:\s*(.+)/i)
    const summaryMatch = text.match(/STRESZCZENIE_PL:\s*([\s\S]*?)(?=TREŚĆ_PL:)/i)
    const contentMatch = text.match(/TREŚĆ_PL:\s*([\s\S]+)/i)

    if (titleMatch && contentMatch) {
      return {
        titlePl: titleMatch[1].trim(),
        summaryPl: summaryMatch ? summaryMatch[1].trim() : '',
        contentPl: contentMatch[1].trim(),
      }
    }
    return null
  } catch (err) {
    console.warn('[SEO Digest] Claude translation error:', err)
    return null
  }
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let totalNew = 0
  let totalTranslated = 0
  const errors: string[] = []

  for (const feed of RSS_FEEDS) {
    try {
      const response = await fetch(feed.url, {
        signal: AbortSignal.timeout(10000),
        headers: { 'User-Agent': 'TAKMA SEO Digest Bot/1.0' }
      })
      if (!response.ok) {
        errors.push(`${feed.source}: HTTP ${response.status}`)
        continue
      }
      const xml = await response.text()
      const items = parseRssItems(xml).slice(0, 3) // max 3 per feed (full content = heavier)

      for (const item of items) {
        const exists = await prisma.seoDigestArticle.findUnique({ where: { guid: item.guid } })
        if (exists) continue

        // Fetch full article content
        const fullContent = await fetchArticleContent(item.link)
        // Fallback to RSS content:encoded or description
        const contentForTranslation = fullContent
          || (item.contentEncoded ? stripHtml(item.contentEncoded) : null)
          || (item.description ? stripHtml(item.description) : '')

        // Translate full article
        const translation = contentForTranslation
          ? await translateWithClaude(item.title, contentForTranslation)
          : null
        if (translation) totalTranslated++

        await prisma.seoDigestArticle.create({
          data: {
            guid: item.guid,
            source: feed.source,
            sourceName: feed.name,
            originalTitle: item.title,
            originalUrl: item.link,
            titlePl: translation?.titlePl || null,
            summaryPl: translation?.summaryPl || null,
            contentPl: translation?.contentPl || null,
            author: item.author || null,
            publishedAt: item.pubDate ? new Date(item.pubDate) : null,
          }
        })
        totalNew++

        // Delay between articles (translation is heavy)
        await new Promise(r => setTimeout(r, 2000))
      }

      await new Promise(r => setTimeout(r, 1000))
    } catch (err) {
      errors.push(`${feed.source}: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
  }

  if (totalNew > 0) {
    try {
      const { sendSeoDigestNotification } = await import('@/lib/email')
      await sendSeoDigestNotification(totalNew, totalTranslated)
    } catch (err) {
      console.error('[SEO Digest] Email error:', err)
    }
  }

  console.log(`[SEO Digest] Done: ${totalNew} new, ${totalTranslated} translated, ${errors.length} errors`)

  return NextResponse.json({
    success: true,
    newArticles: totalNew,
    translated: totalTranslated,
    errors,
    timestamp: new Date().toISOString(),
  })
}
