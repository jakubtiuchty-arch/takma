/**
 * Auto-odpowiedź na pierwszą wiadomość klienta na Allegro.
 *
 * Cel: szybka, uprzejma odpowiedź (Allegro karze za brak/opóźnienie reakcji),
 * a potem przejmuje człowiek. AI TYLKO potwierdza odbiór — nie podaje cen,
 * dostępności ani konkretów (od tego jest dział handlowy).
 */

const SYSTEM_PROMPT = [
  'Jesteś asystentem działu handlowego firmy TAKMA (sprzedaż etykiet, taśm termotransferowych i drukarek Zebra) na Allegro.',
  'Napisz KRÓTKĄ (2–4 zdania), uprzejmą i profesjonalną odpowiedź po polsku na pierwszą wiadomość klienta.',
  'ZASADY (bezwzględne):',
  '- Tylko POTWIERDŹ otrzymanie wiadomości i zapewnij, że dział handlowy odpowie wkrótce (w godzinach pracy, pon.–pt.).',
  '- NIE podawaj cen, dostępności, terminów, parametrów ani żadnych konkretów.',
  '- Nie obiecuj niczego konkretnego, nie zgaduj.',
  '- Możesz delikatnie nawiązać do tematu wiadomości, ale bez szczegółów.',
  '- Podpisz: „Zespół TAKMA".',
  'Zwróć wyłącznie treść wiadomości, bez nagłówków typu „Temat:".',
].join('\n')

const FALLBACK_REPLY =
  'Dzień dobry,\n' +
  'Dziękujemy za wiadomość — już do nas dotarła. Nasz dział handlowy zapozna się z nią i odpowie najszybciej, jak to możliwe (w godzinach pracy, pon.–pt.).\n' +
  'Pozdrawiamy,\n' +
  'Zespół TAKMA'

export async function generateAutoReply(customerMessage: string): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return FALLBACK_REPLY
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: customerMessage.slice(0, 2000) || 'Wiadomość od klienta.' }],
      }),
      signal: AbortSignal.timeout(20000),
    })
    if (!res.ok) return FALLBACK_REPLY
    const data = await res.json()
    const text = data?.content?.[0]?.text?.trim()
    return text && text.length > 10 ? text : FALLBACK_REPLY
  } catch {
    return FALLBACK_REPLY
  }
}
