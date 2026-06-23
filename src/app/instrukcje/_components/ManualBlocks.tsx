import type { ManualBlock } from '@/data/manuals'

/** Inline **pogrubienie** → <strong>. */
export function renderInline(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part, i) =>
      part.startsWith('**') && part.endsWith('**')
        ? <strong key={i} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>
        : <span key={i}>{part}</span>,
    )
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
