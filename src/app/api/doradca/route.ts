import { streamText, stepCountIs } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
import { openai } from '@ai-sdk/openai'
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
// Model rozumujący odpowiada w 13–20 s (sprawdzone), a przy dłuższej rozmowie i kilku
// wywołaniach narzędzi potrafi dobić do pół minuty. Obniżenie wysiłku rozumowania
// skracało czas, ale psuło jakość: model przestawał dobierać rozmiar i zaczynał dopytywać.
export const maxDuration = 60

const MAX_MESSAGE_LENGTH = 2000
const MAX_MESSAGES = 20
// Model wybiera zmienna DORADCA_MODEL — dostawca rozpoznawany po nazwie, więc powrót
// do poprzedniego to zmiana jednej wartości w env, bez wdrożenia.
//   gpt-5.6-sol / gpt-5.5 ...  → OpenAI (przez API Responses; w /v1/chat/completions
//                                ten model odmawia obsługi narzędzi)
//   claude-sonnet-4-6 ...      → Anthropic (cache promptu systemowego)
const MODEL = process.env.DORADCA_MODEL || 'gpt-5.6-sol'
const CZY_OPENAI = /^(gpt|o[34])/.test(MODEL)

/** Prompt systemowy: przy Anthropic cache'owany, u OpenAI zwykły blok. */
function wiadomoscSystemowa() {
  const base = { role: 'system' as const, content: materialsSystemPrompt() }
  return CZY_OPENAI
    ? base
    : { ...base, providerOptions: { anthropic: { cacheControl: { type: 'ephemeral' as const } } } }
}

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
      model: CZY_OPENAI ? openai.responses(MODEL) : anthropic(MODEL),
      onFinish: ({ text }) => { if (text) logDoradca({ sessionId, role: 'assistant', content: text, ip }) },
      // System jako PIERWSZA wiadomość z cacheControl na bloku — tak Anthropic faktycznie
      // cache'uje stały prefiks (persona + indeks katalogu). Kolejne kroki tej samej rozmowy
      // czytają go ~10× taniej zamiast płacić pełną stawkę za każdym razem.
      messages: [wiadomoscSystemowa(), ...modelMessages],
      tools: materialsTools,
      // Limit kroków. Cztery to było za mało: przy pytaniu „cena i dostępność rozmiaru X"
      // model robi getPrinterMaterials → findClosestSize → checkMaterialStock dla kilku
      // serii i wyczerpuje limit ZANIM napisze odpowiedź. W logach widać to jako pytania
      // klientów bez żadnej odpowiedzi.
      stopWhen: stepCountIs(8),
    })

    return result.toUIMessageStreamResponse()
  } catch (err) {
    console.error('Doradca API error:', err)
    return new Response(JSON.stringify({ error: 'Wystąpił błąd. Spróbuj ponownie.' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    })
  }
}
