import Link from 'next/link'

/** Renders inline text with bold (**text**) support */
function BoldText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return (
    <>
      {parts.map((part, i) => {
        const boldMatch = part.match(/^\*\*([^*]+)\*\*$/)
        if (boldMatch) {
          return <strong key={i} className="font-semibold text-gray-900">{boldMatch[1]}</strong>
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

/** Renders text with markdown-style links [text](/url) and **bold** */
export default function LinkedText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/)
  return (
    <>
      {parts.map((part, i) => {
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (linkMatch) {
          const [, label, href] = linkMatch
          const isExternal = href.startsWith('http')
          if (isExternal) {
            return <a key={i} href={href} target="_blank" rel="noopener" className="text-primary-600 hover:text-primary-800 underline decoration-primary-300">{label}</a>
          }
          return <Link key={i} href={href} className="text-primary-600 hover:text-primary-800 underline decoration-primary-300">{label}</Link>
        }
        return <BoldText key={i} text={part} />
      })}
    </>
  )
}
