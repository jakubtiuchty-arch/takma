import { streamText, stepCountIs } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
import { materialsTools } from '@/lib/ai/materials-tools'
import { materialsSystemPrompt } from '@/lib/ai/materials-system-prompt'
import { checkChatRateLimit, getClientIp } from '@/lib/spam-protection'
import { prisma } from '@/lib/db'

// Fire-and-forget log do DoradcaLog — nie blokuje odpowiedzi, błędy ignorowane.
function logDoradca(row: { sessionId: string; role: string; content: string; ip?: string }) {
  if (!row.content.trim()) return
  prisma.doradcaLog
    .create({ data: { sessionId: row.sessionId, role: row.role, content: row.content.slice(0, 8000), ip: row.ip } })
    .catch(() => { /* logowanie nie może wywrócić czatu */ })
}

export const runtime = 'nodejs'
export const maxDuration = 30

const MAX_MESSAGE_LENGTH = 2000
const MAX_MESSAGES = 20
// Domyślnie Sonnet 4.6 — trzyma reguły jak Opus (czyste słownictwo dostępności, właściwe
// użycie narzędzi), ~5× taniej niż Opus. Można zmienić w env (DORADCA_MODEL):
// claude-haiku-4-5-20251001 (taniej, luźniej) lub claude-opus-4-8 (max jakość).
const MODEL = process.env.DORADCA_MODEL || 'claude-sonnet-4-6'

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
    const sessionId: string = typeof body.sessionId === 'string' && body.sessionId ? body.sessionId : `ip:${ip}`
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

    // Log pytania klienta (ostatnia wiadomość użytkownika).
    const lastUser = [...modelMessages].reverse().find(m => m.role === 'user')
    if (lastUser) logDoradca({ sessionId, role: 'user', content: lastUser.content, ip })

    const result = streamText({
      model: anthropic(MODEL),
      onFinish: ({ text }) => { if (text) logDoradca({ sessionId, role: 'assistant', content: text, ip }) },
      // System jako PIERWSZA wiadomość z cacheControl na bloku — tak Anthropic faktycznie
      // cache'uje stały prefiks (persona + indeks katalogu). Kolejne kroki tej samej rozmowy
      // czytają go ~10× taniej zamiast płacić pełną stawkę za każdym razem.
      messages: [
        {
          role: 'system' as const,
          content: materialsSystemPrompt(),
          providerOptions: { anthropic: { cacheControl: { type: 'ephemeral' as const } } },
        },
        ...modelMessages,
      ],
      tools: materialsTools,
      // Limit kroków — balans między kompletnością odpowiedzi (Haiku robi krok/narzędzie)
      // a kosztem (każdy krok przetwarza kontekst od nowa).
      stopWhen: stepCountIs(4),
    })

    return result.toUIMessageStreamResponse()
  } catch (err) {
    console.error('Doradca API error:', err)
    return new Response(JSON.stringify({ error: 'Wystąpił błąd. Spróbuj ponownie.' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    })
  }
}
