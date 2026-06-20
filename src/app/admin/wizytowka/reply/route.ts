import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { getSessionFromCookie } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 30

/** Generuje propozycję odpowiedzi na opinię (do skopiowania / w fazie 2 do auto-publikacji). */
export async function POST(req: NextRequest) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  if (!process.env.ANTHROPIC_API_KEY) return NextResponse.json({ error: 'Brak ANTHROPIC_API_KEY.' }, { status: 500 })

  const { author, rating, text } = (await req.json().catch(() => ({}))) as { author?: string; rating?: number; text?: string }

  const prompt = `Napisz profesjonalną, ciepłą i konkretną odpowiedź firmy TAKMA (B2B, urządzenia i serwis AutoID — Zebra) na poniższą opinię Google. Po polsku, 2-4 zdania, bez korpomowy i bez przesady. Podziękuj, odnieś się do treści, przy ocenie niskiej (1-3) zachowaj klasę, przeproś za niedogodność i zaproś do kontaktu (handlowy@takma.com.pl). Nie obiecuj rzeczy niepewnych. Zwróć SAM tekst odpowiedzi, bez cudzysłowów.

Opinia od: ${author || 'klient'}
Ocena: ${rating ?? '?'}/5
Treść: ${text || '(brak treści)'}`

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const msg = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 400,
    messages: [{ role: 'user', content: prompt }],
  })
  const reply = msg.content.filter((b) => b.type === 'text').map((b) => (b as { text: string }).text).join('').trim()
  return NextResponse.json({ reply })
}
