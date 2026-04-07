import { NextRequest, NextResponse } from 'next/server'
import { guides } from '@/data/guides'

export const maxDuration = 30

const PROMPT = (title: string, text: string) =>
  `Jesteś ekspertem AutoID (drukarki etykiet, terminale mobilne, skanery kodów kreskowych). Napisz zwięzłe podsumowanie poniższego artykułu po polsku w 3-5 zdaniach. Skup się na najważniejszych wnioskach, konkretnych danych (ceny, parametry, modele) i rekomendacjach. Pisz profesjonalnie, konkretnie, bez wstępów. Nie używaj markdown — pisz czysty tekst.

Tytuł: ${title}

${text}`

async function generateWithGemini(prompt: string, apiKey: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 500, temperature: 0.3 },
        }),
        signal: AbortSignal.timeout(25000),
      }
    )
    if (!res.ok) {
      console.error('[AI Summary] Gemini error:', res.status, await res.text())
      return null
    }
    const data = await res.json()
    return data.candidates?.[0]?.content?.parts?.[0]?.text || null
  } catch (err) {
    console.error('[AI Summary] Gemini fetch error:', err)
    return null
  }
}

async function generateWithClaude(prompt: string, apiKey: string): Promise<string | null> {
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        messages: [{ role: 'user', content: prompt }],
      }),
      signal: AbortSignal.timeout(25000),
    })
    if (!res.ok) {
      console.error('[AI Summary] Claude error:', res.status, await res.text())
      return null
    }
    const data = await res.json()
    return data.content?.[0]?.text || null
  } catch (err) {
    console.error('[AI Summary] Claude fetch error:', err)
    return null
  }
}

export async function POST(request: NextRequest) {
  const geminiKey = process.env.GEMINI_API_KEY
  const anthropicKey = process.env.ANTHROPIC_API_KEY

  if (!geminiKey && !anthropicKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
  }

  const { slug } = await request.json()
  const guide = guides.find(g => g.slug === slug)
  if (!guide) {
    return NextResponse.json({ error: 'Guide not found' }, { status: 404 })
  }

  const plainText = guide.sections
    .map(s => `## ${s.heading}\n${s.content.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/g, ' ')}`)
    .join('\n\n')
    .slice(0, 8000)

  const prompt = PROMPT(guide.title, plainText)

  // Try Gemini first, fallback to Claude
  let summary: string | null = null
  let provider = ''

  if (geminiKey) {
    summary = await generateWithGemini(prompt, geminiKey)
    if (summary) provider = 'Gemini'
  }

  if (!summary && anthropicKey) {
    summary = await generateWithClaude(prompt, anthropicKey)
    if (summary) provider = 'Claude'
  }

  if (!summary) {
    return NextResponse.json({ error: 'Failed to generate summary' }, { status: 502 })
  }

  // Strip markdown formatting if any
  summary = summary.replace(/^#+\s*/gm, '').replace(/\*\*/g, '').trim()

  return NextResponse.json({ summary, provider })
}
