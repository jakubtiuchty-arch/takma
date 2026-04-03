import { prisma } from '@/lib/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

const sourceColors: Record<string, string> = {
  searchengineland: 'bg-blue-100 text-blue-700',
  semrush: 'bg-orange-100 text-orange-700',
  moz: 'bg-indigo-100 text-indigo-700',
  ahrefs: 'bg-sky-100 text-sky-700',
  sej: 'bg-green-100 text-green-700',
  yoast: 'bg-purple-100 text-purple-700',
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function SeoDigestArticlePage({ params }: PageProps) {
  const { id } = await params

  const article = await prisma.seoDigestArticle.findUnique({ where: { id } })
  if (!article) notFound()

  // Mark as read
  if (!article.isRead) {
    await prisma.seoDigestArticle.update({ where: { id }, data: { isRead: true } })
  }

  const title = article.titlePl || article.originalTitle
  const content = article.contentPl

  return (
    <div className="max-w-2xl mx-auto">
      {/* Back + source */}
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/admin/seo-digest"
          className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <span className={clsx('px-2.5 py-1 rounded-full text-xs font-semibold', sourceColors[article.source] || 'bg-gray-100 text-gray-600')}>
          {article.sourceName}
        </span>
        {article.publishedAt && (
          <time className="text-sm text-gray-400">
            {article.publishedAt.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
        )}
      </div>

      {/* Title */}
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-3">
        {title}
      </h1>

      {/* Author + original link */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
        {article.author && <span>Autor: {article.author}</span>}
        <a
          href={article.originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-xs"
        >
          Oryginał →
        </a>
      </div>

      {/* Summary */}
      {article.summaryPl && (
        <div className="bg-blue-50 rounded-xl p-4 mb-8 text-sm text-blue-900 leading-relaxed">
          <p className="font-semibold text-xs text-blue-600 uppercase tracking-wider mb-1">Streszczenie</p>
          {article.summaryPl}
        </div>
      )}

      {/* Full content */}
      {content ? (
        <article className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-a:text-blue-600 text-[15px] sm:text-base">
          {content.split('\n').map((line, i) => {
            const trimmed = line.trim()
            if (!trimmed) return <br key={i} />
            if (trimmed.startsWith('### ')) return <h3 key={i} className="text-lg font-bold text-gray-900 mt-6 mb-2">{trimmed.slice(4)}</h3>
            if (trimmed.startsWith('## ')) return <h2 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">{trimmed.slice(3)}</h2>
            if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) return <li key={i} className="ml-4 text-gray-700 mb-1">{trimmed.slice(2)}</li>
            return <p key={i} className="text-gray-700 mb-4 leading-relaxed">{trimmed}</p>
          })}
        </article>
      ) : (
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg mb-2">Brak przetłumaczonej treści</p>
          <p className="text-sm mb-4">Artykuł nie został jeszcze przetłumaczony. Dodaj ANTHROPIC_API_KEY do zmiennych środowiskowych.</p>
          <a
            href={article.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Czytaj oryginał →
          </a>
        </div>
      )}

      {/* Bottom nav */}
      <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
        <Link href="/admin/seo-digest" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
          ← Wróć do listy
        </Link>
        <a
          href={article.originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          Oryginał →
        </a>
      </div>
    </div>
  )
}
