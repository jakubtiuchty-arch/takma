import Link from 'next/link'
import type { ManualBlock } from '@/data/manuals'

/**
 * Inline: **pogrubienie** → <strong>, [tekst](/sciezka) → <Link>.
 * Linki wewnętrzne w instrukcjach prowadzą do kart produktów, kategorii i kontaktu;
 * adres musi zaczynać się od „/”, zewnętrzne adresy zostają zwykłym tekstem.
 */
const INLINE_RE = /(\*\*[^*]+\*\*|\[[^\]]+\]\(\/[^)\s]*\))/g

export function renderInline(text: string) {
  return text
    .split(INLINE_RE)
    .filter(Boolean)
    .map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>
      }
      const link = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/)
      if (link) {
        return <Link key={i} href={link[2]} className="text-blue-600 hover:underline">{link[1]}</Link>
      }
      return <span key={i}>{part}</span>
    })
}

export function ManualBlocks({ blocks }: { blocks: ManualBlock[] }) {
  return (
    <>
      {blocks.map((b, i) =>
        b.type === 'p' ? (
          <p key={i} className="text-slate-700 leading-relaxed mb-3">{renderInline(b.text)}</p>
        ) : b.ordered ? (
          <ol key={i} className="list-decimal pl-5 space-y-1.5 mb-3 text-slate-700">
            {b.items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
          </ol>
        ) : (
          <ul key={i} className="list-disc pl-5 space-y-1.5 mb-3 text-slate-700">
            {b.items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
          </ul>
        ),
      )}
    </>
  )
}
