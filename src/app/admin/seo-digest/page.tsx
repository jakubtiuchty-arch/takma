import { prisma } from '@/lib/db'
import Link from 'next/link'
import clsx from 'clsx'
import SeoDigestActions from './SeoDigestActions'

const sourceColors: Record<string, string> = {
  searchengineland: 'bg-blue-100 text-blue-700',
  semrush: 'bg-orange-100 text-orange-700',
  moz: 'bg-indigo-100 text-indigo-700',
  ahrefs: 'bg-sky-100 text-sky-700',
  sej: 'bg-green-100 text-green-700',
  yoast: 'bg-purple-100 text-purple-700',
}

interface PageProps {
  searchParams: Promise<{ source?: string; unread?: string; page?: string }>
}

export default async function SeoDigestPage({ searchParams }: PageProps) {
  const params = await searchParams
  const source = params.source
  const unreadOnly = params.unread === '1'
  const page = parseInt(params.page || '1')
  const perPage = 20

  const where = {
    ...(source ? { source } : {}),
    ...(unreadOnly ? { isRead: false } : {}),
  }

  const [articles, total, unreadCount] = await Promise.all([
    prisma.seoDigestArticle.findMany({
      where,
      orderBy: { publishedAt: { sort: 'desc', nulls: 'last' } },
      skip: (page - 1) * perPage,
      take: perPage,
    }),
    prisma.seoDigestArticle.count({ where }),
    prisma.seoDigestArticle.count({ where: { isRead: false } }),
  ])

  const totalPages = Math.ceil(total / perPage)

  // Get unique sources for filter
  const sources = await prisma.seoDigestArticle.groupBy({
    by: ['source', 'sourceName'],
    _count: true,
  })

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">SEO Digest</h1>
          <p className="text-sm text-gray-500 mt-0.5">{unreadCount} nieprzeczytanych</p>
        </div>
        <SeoDigestActions />
      </div>

      {/* Filters — horizontal scroll on mobile */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        <Link
          href="/admin/seo-digest"
          className={clsx(
            'px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors flex-shrink-0',
            !source && !unreadOnly ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          )}
        >
          Wszystkie ({total})
        </Link>
        <Link
          href="/admin/seo-digest?unread=1"
          className={clsx(
            'px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors flex-shrink-0',
            unreadOnly ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
          )}
        >
          Nieprzeczytane ({unreadCount})
        </Link>
        {sources.map(s => (
          <Link
            key={s.source}
            href={`/admin/seo-digest?source=${s.source}`}
            className={clsx(
              'px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors flex-shrink-0',
              source === s.source ? 'bg-gray-900 text-white' : clsx(sourceColors[s.source] || 'bg-gray-100 text-gray-600', 'hover:opacity-80')
            )}
          >
            {s.sourceName} ({s._count})
          </Link>
        ))}
      </div>

      {/* Articles — card list, mobile first */}
      <div className="space-y-3">
        {articles.map(article => (
          <article
            key={article.id}
            className={clsx(
              'block rounded-xl border p-4 transition-colors',
              article.isRead ? 'bg-white border-gray-100' : 'bg-blue-50/30 border-blue-200'
            )}
          >
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                {/* Source badge + date */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={clsx('px-2 py-0.5 rounded text-[10px] font-semibold', sourceColors[article.source] || 'bg-gray-100 text-gray-600')}>
                    {article.sourceName}
                  </span>
                  {article.publishedAt && (
                    <time className="text-[11px] text-gray-400">
                      {article.publishedAt.toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' })}
                    </time>
                  )}
                  {!article.isRead && (
                    <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  )}
                  {article.isStarred && (
                    <span className="text-yellow-500 text-xs">★</span>
                  )}
                </div>

                {/* Title (PL or original) — opens in admin */}
                <Link
                  href={`/admin/seo-digest/${article.id}`}
                  className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors leading-snug block"
                >
                  {article.titlePl || article.originalTitle}
                </Link>

                {/* Original title if translated */}
                {article.titlePl && (
                  <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{article.originalTitle}</p>
                )}

                {/* Summary */}
                {article.summaryPl && (
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">{article.summaryPl}</p>
                )}

                {article.author && (
                  <p className="text-[10px] text-gray-400 mt-1">✍ {article.author}</p>
                )}
              </div>
            </div>
          </article>
        ))}

        {articles.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg mb-1">Brak artykułów</p>
            <p className="text-sm">Uruchom digest aby pobrać najnowsze wpisy</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {page > 1 && (
            <Link
              href={`/admin/seo-digest?${source ? `source=${source}&` : ''}${unreadOnly ? 'unread=1&' : ''}page=${page - 1}`}
              className="px-3 py-2 text-sm bg-white border rounded-lg hover:bg-gray-50"
            >
              ←
            </Link>
          )}
          <span className="text-sm text-gray-500">{page} / {totalPages}</span>
          {page < totalPages && (
            <Link
              href={`/admin/seo-digest?${source ? `source=${source}&` : ''}${unreadOnly ? 'unread=1&' : ''}page=${page + 1}`}
              className="px-3 py-2 text-sm bg-white border rounded-lg hover:bg-gray-50"
            >
              →
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
