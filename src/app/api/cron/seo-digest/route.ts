import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const maxDuration = 60

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
    const description = get('description')
    if (title && link) {
      items.push({ title, link, guid, pubDate: pubDate || undefined, author: author || undefined, description: description || undefined })
    }
  }
  return items
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/\s+/g, ' ').trim()
}

async function translateWithClaude(title: string, description: string): Promise<{ titlePl: string; summaryPl: string } | null> {
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
        max_tokens: 500,
        messages: [{
          role: 'user',
          content: `Przetłumacz na polski tytuł artykułu SEO i napisz 2-zdaniowe streszczenie po polsku.

Tytuł: ${title}
Opis: ${description.slice(0, 500)}

Odpowiedz DOKŁADNIE w formacie:
TYTUŁ: [tłumaczenie tytułu]
STRESZCZENIE: [2 zdania po polsku]`
        }]
      }),
      signal: AbortSignal.timeout(15000),
    })

    if (!response.ok) return null
    const data = await response.json()
    const text = data.content?.[0]?.text || ''
    const titleMatch = text.match(/TYTUŁ:\s*(.+)/i)
    const summaryMatch = text.match(/STRESZCZENIE:\s*([\s\S]+)/i)
    if (titleMatch && summaryMatch) {
      return { titlePl: titleMatch[1].trim(), summaryPl: summaryMatch[1].trim() }
    }
    return null
  } catch {
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
      const items = parseRssItems(xml).slice(0, 5) // max 5 per feed

      for (const item of items) {
        // Check if already exists
        const exists = await prisma.seoDigestArticle.findUnique({ where: { guid: item.guid } })
        if (exists) continue

        // Translate
        const cleanDesc = item.description ? stripHtml(item.description).slice(0, 800) : ''
        const translation = await translateWithClaude(item.title, cleanDesc)
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
            author: item.author || null,
            publishedAt: item.pubDate ? new Date(item.pubDate) : null,
          }
        })
        totalNew++
      }

      // Small delay between feeds
      await new Promise(r => setTimeout(r, 1000))
    } catch (err) {
      errors.push(`${feed.source}: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
  }

  // Send email notification if new articles found
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
