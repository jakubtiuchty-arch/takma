import { prisma } from '@/lib/db'
import { gbpConfigured, businessApiConfigured, type GbpProfile } from '@/lib/gbp'
import { getCachedProfile } from '@/lib/gbp-snapshot'
import { Md } from '@/app/admin/analytics/_markdown'
import { AuditButton, Tasks, Reviews } from './WizytowkaUI'
import WizytowkaChat from './WizytowkaChat'

export const dynamic = 'force-dynamic'
export const revalidate = 0

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-2xl font-bold text-gray-900 mt-1">{value}</div>
      {hint && <div className="text-[11px] text-gray-400 mt-0.5">{hint}</div>}
    </div>
  )
}

function ConfigMissing() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl">
      <h2 className="text-lg font-semibold mb-2">Podłącz wizytówkę Google</h2>
      <p className="text-sm text-gray-600 mb-4">Panel czyta publiczne dane wizytówki z <b>Places API (New)</b>. Po dodaniu dwóch zmiennych do env (Vercel + lokalnie) panel zapali się automatycznie.</p>
      <ol className="text-sm text-gray-700 space-y-1.5 list-decimal list-inside mb-4">
        <li>Google Cloud Console → włącz <b>Places API (New)</b> (projekt z włączonym billingiem).</li>
        <li>Utwórz klucz API → ustaw <code className="text-xs bg-gray-100 px-1 rounded">GOOGLE_PLACES_API_KEY</code>.</li>
        <li>Znajdź <b>Place ID</b> wizytówki TAKMA (np. Place ID Finder Google) → ustaw <code className="text-xs bg-gray-100 px-1 rounded">GBP_PLACE_ID</code>.</li>
      </ol>
      <p className="text-xs text-gray-500">Faza 2 (odpowiedzi/posty/statystyki/ochrona) wymaga Business Profile API — instrukcja w <code className="text-xs bg-gray-100 px-1 rounded">INSTRUKCJA-wizytowka-google-setup.md</code>.</p>
    </div>
  )
}

export default async function WizytowkaPage() {
  if (!gbpConfigured()) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Wizytówka Google</h1>
        <ConfigMissing />
      </div>
    )
  }

  let profile: GbpProfile | null = null
  let error: string | null = null
  try { profile = await getCachedProfile() } catch (e) { error = (e as Error).message }

  const [audit, tasks] = await Promise.all([
    prisma.gbpAudit.findFirst({ orderBy: { createdAt: 'desc' } }),
    prisma.gbpTask.findMany({ orderBy: [{ done: 'asc' }, { createdAt: 'asc' }] }),
  ])

  const missing: string[] = []
  if (profile) {
    if (!profile.phone) missing.push('telefon')
    if (!profile.website) missing.push('strona WWW')
    if (!profile.summary) missing.push('opis (editorial)')
    if (!profile.hours.length) missing.push('godziny otwarcia')
    if (profile.photoCount < 3) missing.push('więcej zdjęć')
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <h1 className="text-2xl font-bold text-gray-900">Wizytówka Google</h1>
        {profile?.mapsUri && <a href={profile.mapsUri} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">otwórz w Mapach ↗</a>}
        <div className="ml-auto"><AuditButton hasAudit={Boolean(audit)} /></div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 mb-6">
          <b>Błąd Places API:</b> {error}
          <div className="text-xs text-red-500 mt-1">Sprawdź GOOGLE_PLACES_API_KEY (Places API New włączone + billing) i GBP_PLACE_ID.</div>
        </div>
      )}

      {profile && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <Stat label="Ocena" value={profile.rating != null ? profile.rating.toFixed(1) : '—'} hint={`${profile.reviewCount} opinii`} />
            <Stat label="Opinie" value={String(profile.reviewCount)} />
            <Stat label="Zdjęcia (API)" value={String(profile.photoCount)} />
            <Stat label="Status" value={profile.businessStatus === 'OPERATIONAL' ? 'Działa' : (profile.businessStatus || '—')} hint={profile.openNow == null ? undefined : profile.openNow ? 'otwarte teraz' : 'zamknięte teraz'} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h2 className="text-sm font-semibold text-gray-700 mb-3">Dane profilu</h2>
              <dl className="text-sm space-y-1.5">
                <div className="flex justify-between gap-3"><dt className="text-gray-500">Nazwa</dt><dd className="text-gray-900 text-right">{profile.name}</dd></div>
                <div className="flex justify-between gap-3"><dt className="text-gray-500">Kategoria</dt><dd className="text-gray-900 text-right">{profile.primaryType || '—'}</dd></div>
                <div className="flex justify-between gap-3"><dt className="text-gray-500">Telefon</dt><dd className={profile.phone ? 'text-gray-900' : 'text-red-500'}>{profile.phone || 'BRAK'}</dd></div>
                <div className="flex justify-between gap-3"><dt className="text-gray-500">WWW</dt><dd className={`text-right truncate max-w-[60%] ${profile.website ? 'text-gray-900' : 'text-red-500'}`}>{profile.website || 'BRAK'}</dd></div>
                <div className="flex justify-between gap-3"><dt className="text-gray-500">Opis</dt><dd className={profile.summary ? 'text-gray-900 text-right' : 'text-red-500'}>{profile.summary ? 'jest' : 'BRAK'}</dd></div>
                <div className="flex justify-between gap-3"><dt className="text-gray-500">Adres</dt><dd className="text-gray-900 text-right truncate max-w-[60%]">{profile.address || '—'}</dd></div>
              </dl>
              {missing.length > 0 && <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2 mt-3">Do uzupełnienia: {missing.join(', ')}</p>}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-semibold text-gray-700">Audyt AI</h2>
                {audit?.score != null && <span className="text-sm font-bold text-gray-900">{audit.score}/100</span>}
              </div>
              {audit ? <Md text={audit.summary} /> : <p className="text-sm text-gray-400">{'Brak audytu — kliknij „Uruchom audyt AI".'}</p>}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Inteligentne zadania</h2>
            <Tasks initial={tasks.map((t) => ({ id: t.id, title: t.title, detail: t.detail, proposal: t.proposal, where: t.where, priority: t.priority, category: t.category, done: t.done }))} />
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Opinie</h2>
            <p className="text-xs text-gray-400 mb-3">Places API udostępnia do 5 najnowszych opinii i <b>nie pokazuje Waszych odpowiedzi</b> (te będą widoczne w Fazie 2 — Business Profile API). {businessApiConfigured() ? 'Faza 2 aktywna — odpowiedzi można publikować automatycznie.' : 'Tu generujemy draft do skopiowania do GBP.'}</p>
            <Reviews reviews={profile.reviews} />
          </div>

          <WizytowkaChat />

          {!businessApiConfigured() && (
            <p className="text-xs text-gray-400 mt-6">Faza 2 (statystyki telefonów/tras, auto-odpowiedzi, posty, ochrona profilu) — wymaga Business Profile API. Instrukcja: <code>INSTRUKCJA-wizytowka-google-setup.md</code>.</p>
          )}
        </>
      )}
    </div>
  )
}
