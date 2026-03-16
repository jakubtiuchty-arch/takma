import { streamText, stepCountIs } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
import { chatTools } from '@/lib/ai/tools'
import { systemPrompt } from '@/lib/ai/system-prompt'
import { checkChatRateLimit, getClientIp } from '@/lib/spam-protection'

export const runtime = 'nodejs'
export const maxDuration = 30

const MAX_MESSAGE_LENGTH = 2000
const MAX_MESSAGES = 20

// Extract text content from UIMessage parts
function extractText(parts: Array<{ type: string; text?: string }>): string {
  return parts
    .filter(p => p.type === 'text' && p.text)
    .map(p => p.text!)
    .join('')
}

export async function POST(request: Request) {
  // Rate limit: 30 messages / 10 min per IP
  const ip = getClientIp(request.headers)
  const rateCheck = checkChatRateLimit(ip)
  if (rateCheck.blocked) {
    return new Response(
      JSON.stringify({ error: 'Zbyt wiele wiadomości. Spróbuj ponownie za kilka minut.' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    )
  }

  try {
    const body = await request.json()
    const { messages } = body

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Brak wiadomości.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Convert UIMessage[] → simple {role, content}[] for streamText
    const modelMessages = messages
      .slice(-MAX_MESSAGES)
      .map((msg: { role: string; parts?: Array<{ type: string; text?: string }>; content?: string }) => {
        const role = msg.role as 'user' | 'assistant'
        // Support both UIMessage (parts) and legacy (content) formats
        let content = ''
        if (Array.isArray(msg.parts)) {
          content = extractText(msg.parts)
        } else if (typeof msg.content === 'string') {
          content = msg.content
        }
        return { role, content: content.slice(0, MAX_MESSAGE_LENGTH) }
      })
      .filter(msg =>
        (msg.role === 'user' || msg.role === 'assistant') && msg.content.length > 0
      )

    if (modelMessages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Brak wiadomości.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const result = streamText({
      model: anthropic('claude-sonnet-4-20250514'),
      system: systemPrompt,
      messages: modelMessages,
      tools: chatTools,
      stopWhen: stepCountIs(5),
    })

    return result.toUIMessageStreamResponse()
  } catch (err) {
    console.error('Chat API error:', err)
    return new Response(
      JSON.stringify({ error: 'Wystąpił błąd. Spróbuj ponownie.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
