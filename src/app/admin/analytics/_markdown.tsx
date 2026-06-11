import { Fragment, type ReactNode } from 'react'

/**
 * Lekki renderer markdownu pod raporty AI w panelu (digest ga-digest).
 * Obsługuje podzbiór, który generuje prompt: nagłówki #/##/###, listy -/1.,
 * pogrubienie **x**, kod `x`, separator --- i proste tabele |a|b|.
 * Bez zewnętrznych zależności — treść jest nasza (Claude przez cron), nie user input.
 */

function inline(text: string, keyPrefix: string): ReactNode[] {
  // **bold** i `code`
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return <strong key={`${keyPrefix}-${i}`} className="font-semibold text-gray-900">{p.slice(2, -2)}</strong>
    }
    if (p.startsWith('`') && p.endsWith('`')) {
      return <code key={`${keyPrefix}-${i}`} className="px-1 py-0.5 bg-gray-100 rounded text-[0.85em] font-mono">{p.slice(1, -1)}</code>
    }
    return <Fragment key={`${keyPrefix}-${i}`}>{p}</Fragment>
  })
}

export function Md({ text }: { text: string }) {
  const lines = text.split('\n')
  const out: ReactNode[] = []
  let list: { ordered: boolean; items: string[] } | null = null
  let table: string[] | null = null

  const flushList = () => {
    if (!list) return
    const Tag = list.ordered ? 'ol' : 'ul'
    out.push(
      <Tag key={`l${out.length}`} className={`${list.ordered ? 'list-decimal' : 'list-disc'} pl-5 space-y-1 my-2`}>
        {list.items.map((it, i) => <li key={i}>{inline(it, `li${i}`)}</li>)}
      </Tag>
    )
    list = null
  }

  const flushTable = () => {
    if (!table) return
    const rows = table.map((r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()))
    const [head, ...body] = rows.filter((r) => !r.every((c) => /^:?-+:?$/.test(c)))
    out.push(
      <div key={`t${out.length}`} className="overflow-x-auto my-3">
        <table className="text-sm border border-slate-200 rounded-xl">
          <thead><tr>{head.map((c, i) => <th key={i} className="text-left font-semibold px-3 py-1.5 border-b border-slate-200 bg-gray-50">{inline(c, `th${i}`)}</th>)}</tr></thead>
          <tbody>
            {body.map((r, ri) => (
              <tr key={ri} className="border-b border-slate-100 last:border-0">
                {r.map((c, ci) => <td key={ci} className="px-3 py-1.5">{inline(c, `td${ri}-${ci}`)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
    table = null
  }

  for (const raw of lines) {
    const line = raw.trimEnd()
    const trimmed = line.trim()

    if (trimmed.startsWith('|') && trimmed.includes('|', 1)) {
      flushList()
      ;(table = table || []).push(trimmed)
      continue
    }
    flushTable()

    const bullet = trimmed.match(/^[-*]\s+(.*)/)
    const numbered = trimmed.match(/^\d+[.)]\s+(.*)/)
    if (bullet || numbered) {
      const ordered = Boolean(numbered)
      if (list && list.ordered !== ordered) flushList()
      ;(list = list || { ordered, items: [] }).items.push((bullet || numbered)![1])
      continue
    }
    flushList()

    if (!trimmed) continue
    if (/^-{3,}$/.test(trimmed)) {
      out.push(<hr key={`h${out.length}`} className="my-4 border-slate-200" />)
      continue
    }
    const heading = trimmed.match(/^(#{1,4})\s+(.*)/)
    if (heading) {
      const level = heading[1].length
      const cls = level <= 1
        ? 'text-base font-bold text-gray-900 mt-4 mb-2'
        : level === 2
          ? 'text-sm font-bold text-gray-900 mt-4 mb-1.5'
          : 'text-sm font-semibold text-gray-900 mt-3 mb-1'
      out.push(<div key={`hd${out.length}`} className={cls}>{inline(heading[2], `hd${out.length}`)}</div>)
      continue
    }
    out.push(<p key={`p${out.length}`} className="my-1.5 leading-relaxed">{inline(trimmed, `p${out.length}`)}</p>)
  }
  flushList()
  flushTable()

  return <div className="text-sm text-gray-700">{out}</div>
}
