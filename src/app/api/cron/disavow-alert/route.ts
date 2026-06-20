import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Alert mailowy o nowej fali spamowych backlinków — wołany przez cotygodniowy
 * cloud routine (takma-disavow-spam-watch) po wygenerowaniu nowego pliku disavow.
 * Autoryzacja dedykowanym tokenem DISAVOW_ALERT_TOKEN (osobny od CRON_SECRET,
 * żeby nie trzymać głównego sekretu w configu routine). Wysyłka przez Resend.
 */
export async function POST(req: NextRequest) {
  if (req.headers.get('authorization') !== `Bearer ${process.env.DISAVOW_ALERT_TOKEN}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = (await req.json().catch(() => ({}))) as {
    version?: string
    total?: number
    addedCount?: number
    added?: string[]
  }
  const added = Array.isArray(body.added) ? body.added : []
  if (!body.addedCount || added.length === 0) {
    return NextResponse.json({ ok: true, skipped: 'brak nowych domen — mail nie wysłany' })
  }

  const version = body.version || 'v?'
  const list = added.map((d) => `<li style="font-family:monospace;font-size:13px">${d}</li>`).join('')
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;color:#0f172a">
      <h2 style="margin:0 0 8px">🛡️ Nowa fala spamowych backlinków — takma.com.pl</h2>
      <p style="margin:0 0 16px;color:#475569">Cotygodniowy automat wykrył <strong>${added.length}</strong> nowych toksycznych domen i wygenerował zaktualizowany plik disavow <strong>${version}</strong> (łącznie ${body.total ?? '?'} domen).</p>
      <p style="margin:0 0 6px;font-weight:600">Nowe domeny:</p>
      <ul style="margin:0 0 18px">${list}</ul>
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px">
        <p style="margin:0 0 8px;font-weight:600">Jedyny krok ręczny (Google nie ma API do disavow):</p>
        <ol style="margin:0;padding-left:18px;color:#334155">
          <li>Wejdź na <a href="https://search.google.com/search-console/disavow-links">Google Disavow Tool</a></li>
          <li>Właściwość: <strong>takma.com.pl</strong></li>
          <li>Wgraj plik <strong>${version}</strong> (z repo — najnowszy <code>disavow-merged-final-${version}.txt</code>)</li>
        </ol>
      </div>
      <p style="margin:16px 0 0;font-size:12px;color:#94a3b8">Plik jest już zacommitowany do repo przez automat. Google zastępuje cały plik przy każdym wgraniu.</p>
    </div>`

  const r = await sendEmail({
    to: process.env.ADMIN_EMAIL || 'takma@takma.com.pl',
    subject: `🛡️ TAKMA: nowa fala spamu (+${added.length}) — wgraj disavow ${version}`,
    html,
  })
  return NextResponse.json({ ok: r.success, error: r.error, sent: added.length })
}
