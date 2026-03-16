import { streamText, stepCountIs } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
import { chatTools } from '@/lib/ai/tools'
import { systemPrompt } from '@/lib/ai/system-prompt'
import { checkChatRateLimit, getClientIp } from '@/lib/spam-protection'

export const runtime = 'nodejs'
export const maxDuration = 30

const MAX_MESSAGE_LENGTH = 2000
const MAX_MESSAGES = 20

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

    // Sanitize: trim messages, limit length
    const sanitizedMessages = messages
      .slice(-MAX_MESSAGES)
      .map((msg: { role: string; content: string }) => ({
        role: msg.role as 'user' | 'assistant',
        content: typeof msg.content === 'string'
          ? msg.content.slice(0, MAX_MESSAGE_LENGTH)
          : '',
      }))
      .filter((msg: { role: string; content: string }) =>
        (msg.role === 'user' || msg.role === 'assistant') && msg.content.length > 0
      )

    const result = streamText({
      model: anthropic('claude-sonnet-4-20250514'),
      system: systemPrompt,
      messages: sanitizedMessages,
      tools: chatTools,
      stopWhen: stepCountIs(5),
    })

    return result.toUIMessageStreamResponse()
  } catch {
    return new Response(
      JSON.stringify({ error: 'Wystąpił błąd. Spróbuj ponownie.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
