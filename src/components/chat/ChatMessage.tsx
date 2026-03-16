'use client'

import type { UIMessage } from 'ai'

// Simple markdown-like rendering: **bold**, [link](url), newlines
function renderText(text: string) {
  const lines = text.split('\n')

  return (
    <div className="space-y-1.5">
      {lines.map((line, lineIdx) => {
        if (!line.trim()) return <br key={lineIdx} />

        // Bullet points
        const isBullet = /^[-*]\s/.test(line.trim())
        const lineContent = isBullet ? line.trim().slice(2) : line

        // Process inline formatting
        const elements: (string | JSX.Element)[] = []
        let remaining = lineContent
        let keyIdx = 0

        while (remaining.length > 0) {
          // Bold: **text**
          const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
          // Link: [text](url)
          const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/)

          const boldIdx = boldMatch?.index ?? Infinity
          const linkIdx = linkMatch?.index ?? Infinity

          if (boldIdx === Infinity && linkIdx === Infinity) {
            elements.push(remaining)
            break
          }

          if (boldIdx <= linkIdx && boldMatch) {
            if (boldIdx > 0) elements.push(remaining.slice(0, boldIdx))
            elements.push(
              <strong key={`b-${lineIdx}-${keyIdx++}`} className="font-semibold">
                {boldMatch[1]}
              </strong>
            )
            remaining = remaining.slice(boldIdx + boldMatch[0].length)
          } else if (linkMatch) {
            if (linkIdx! > 0) elements.push(remaining.slice(0, linkIdx))
            const href = linkMatch[2]
            const isInternal = href.startsWith('/')
            elements.push(
              <a
                key={`l-${lineIdx}-${keyIdx++}`}
                href={href}
                className="text-blue-600 hover:text-blue-800 underline"
                {...(!isInternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {linkMatch[1]}
              </a>
            )
            remaining = remaining.slice(linkIdx! + linkMatch[0].length)
          }
        }

        if (isBullet) {
          return (
            <div key={lineIdx} className="flex gap-2 pl-1">
              <span className="text-gray-400 select-none">&bull;</span>
              <span>{elements}</span>
            </div>
          )
        }

        return <p key={lineIdx}>{elements}</p>
      })}
    </div>
  )
}

// Extract text from UIMessage parts
function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((part): part is { type: 'text'; text: string } => part.type === 'text')
    .map(part => part.text)
    .join('')
}

interface ChatMessageProps {
  message: UIMessage
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'
  const text = getMessageText(message)

  if (!text) return null

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-md'
            : 'bg-gray-100 text-gray-900 rounded-bl-md'
        }`}
      >
        {renderText(text)}
      </div>
    </div>
  )
}
