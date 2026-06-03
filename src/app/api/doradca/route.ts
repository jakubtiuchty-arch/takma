import { streamText, stepCountIs } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
import { materialsTools } from '@/lib/ai/materials-tools'
import { materialsSystemPrompt } from '@/lib/ai/materials-system-prompt'
import { checkChatRateLimit, getClientIp } from '@/lib/spam-protection'

export const runtime = 'nodejs'
export const maxDuration = 30

const MAX_MESSAGE_LENGTH = 2000
const MAX_MESSAGES = 20
// Domyślnie Opus 4.8 (najwyższa jakość doradztwa). Można zmienić w env, gdyby koszt
// wymagał downgrade'u (np. claude-sonnet-4-6 / claude-haiku-4-5).
const MODEL = process.env.DORADCA_MODEL || 'claude-opus-4-8'

function extractText(parts: Array<{ type: string; text?: string }>): string {
  return parts.filter(p => p.type === 'text' && p.text).map(p => p.text!).join('')
}

export async function POST(request: Request) {
  const ip = getClientIp(request.headers)
  const rateCheck = checkChatRateLimit(ip)
  if (rateCheck.blocked) {
    return new Response(
      JSON.stringify({ error: 'Zbyt wiele wiadomości. Spróbuj ponownie za kilka minut.' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } },
    )
  }

  try {
    const body = await request.json()
    const { messages } = body
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Brak wiadomości.' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      })
    }

    const modelMessages = messages
      .slice(-MAX_MESSAGES)
      .map((msg: { role: string; parts?: Array<{ type: string; text?: string }>; content?: string }) => {
        const role = msg.role as 'user' | 'assistant'
        let content = ''
        if (Array.isArray(msg.parts)) content = extractText(msg.parts)
        else if (typeof msg.content === 'string') content = msg.content
        return { role, content: content.slice(0, MAX_MESSAGE_LENGTH) }
      })
      .filter(m => (m.role === 'user' || m.role === 'assistant') && m.content.length > 0)

    if (modelMessages.length === 0) {
      return new Response(JSON.stringify({ error: 'Brak wiadomości.' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      })
    }

    const result = streamText({
      model: anthropic(MODEL),
      system: materialsSystemPrompt(),
      messages: modelMessages,
      tools: materialsTools,
      stopWhen: stepCountIs(5),
      // Cache statycznego prefiksu (persona + cały katalog) — duża oszczędność na Opus.
      providerOptions: { anthropic: { cacheControl: { type: 'ephemeral' } } },
    })

    return result.toUIMessageStreamResponse()
  } catch (err) {
    console.error('Doradca API error:', err)
    return new Response(JSON.stringify({ error: 'Wystąpił błąd. Spróbuj ponownie.' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    })
  }
}
