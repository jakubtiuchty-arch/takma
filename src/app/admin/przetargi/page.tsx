import { prisma } from '@/lib/db'
import { setTenderStatus } from './actions'

export const dynamic = 'force-dynamic'

const STATUS_LABEL: Record<string, string> = { new: 'Nowy', watched: 'Obserwowany', dismissed: 'Odrzucony' }

function ScoreBadge({ score }: { score: number }) {
  const cls = score >= 70 ? 'bg-emerald-100 text-emerald-700' : score >= 40 ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'
  return <span className={`inline-block px-2 py-0.5 rounded-md text-sm font-bold ${cls}`}>{score}</span>
}

function daysLeft(date: Date | null): { label: string; urgent: boolean } {
  if (!date) return { label: '—', urgent: false }
  const d = Math.ceil((date.getTime() - Date.now()) / 86400_000)
  if (d < 0) return { label: 'po terminie', urgent: false }
  return { label: `${date.toLocaleDateString('pl-PL')} (${d} dni)`, urgent: d <= 7 }
}

export default async function PrzetargiPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams
  const filter = status && ['new', 'watched', 'dismissed'].includes(status) ? status : undefined

  const tenders = await prisma.tender.findMany({
    where: filter ? { status: filter } : { status: { not: 'dismissed' } },
    orderBy: [{ status: 'asc' }, { score: 'desc' }, { submittingOffersDate: 'asc' }],
    take: 200,
  })
  const counts = Object.fromEntries(
    (await prisma.tender.groupBy({ by: ['status'], _count: true })).map((g) => [g.status, g._count]),
  ) as Record<string, number>

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Przetargi AutoID</h1>
        <div className="text-sm text-gray-500">Źródła: BZP (e-Zamówienia) + TED (UE) · cron codziennie 6:15</div>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        Dopasowanie AI do profilu TAKMA (0–100). Digest maili: trafienia ≥ 40.
      </p>

      <div className="flex gap-2 mb-5 text-sm">
        {[
          { href: '/admin/przetargi', label: `Aktywne (${(counts.new || 0) + (counts.watched || 0)})`, active: !filter },
          { href: '/admin/przetargi?status=new', label: `Nowe (${counts.new || 0})`, active: filter === 'new' },
          { href: '/admin/przetargi?status=watched', label: `Obserwowane (${counts.watched || 0})`, active: filter === 'watched' },
          { href: '/admin/przetargi?status=dismissed', label: `Odrzucone (${counts.dismissed || 0})`, active: filter === 'dismissed' },
        ].map((t) => (
          <a key={t.href} href={t.href} className={`px-3 py-1.5 rounded-lg border ${t.active ? 'bg-gray-900 text-white border-gray-900' : 'border-slate-200 text-gray-600 hover:bg-gray-50'}`}>
            {t.label}
          </a>
        ))}
      </div>

      {tenders.length === 0 ? (
        <div className="border border-slate-200 rounded-xl p-10 text-center text-gray-500">
          Brak przetargów w tym widoku. Nowe pojawią się po porannym przebiegu crona.
        </div>
      ) : (
        <div className="space-y-3">
          {tenders.map((t) => {
            const deadline = daysLeft(t.submittingOffersDate)
            return (
              <div key={t.id} className="border border-slate-200 rounded-xl p-4 bg-white">
                <div className="flex items-start gap-3">
                  <ScoreBadge score={t.score} />
                  <div className="flex-1 min-w-0">
                    <a href={t.url || '#'} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-blue-600 leading-snug">
                      {t.orderObject}
                    </a>
                    {t.aiReason && <p className="text-sm text-gray-500 mt-1">{t.aiReason}</p>}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                      <span className={`px-1.5 py-0.5 rounded ${t.source === 'TED' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>{t.source === 'TED' ? 'TED · UE' : 'BZP'}</span>
                      <span>{t.organizationName}{t.organizationCity ? ` · ${t.organizationCity}` : ''}</span>
                      {t.cpvCodes && <span>CPV {t.cpvCodes}</span>}
                      <span>publikacja {t.publicationDate?.toLocaleDateString('pl-PL') || '—'}</span>
                      <span className={deadline.urgent ? 'text-red-600 font-semibold' : ''}>oferty do {deadline.label}</span>
                      <span className="text-gray-400">{STATUS_LABEL[t.status]}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {t.status !== 'watched' && (
                      <form action={setTenderStatus.bind(null, t.id, 'watched')}>
                        <button className="px-3 py-1.5 text-xs rounded-lg border border-slate-200 hover:bg-emerald-50 hover:border-emerald-300 text-gray-700">Obserwuj</button>
                      </form>
                    )}
                    {t.status !== 'dismissed' ? (
                      <form action={setTenderStatus.bind(null, t.id, 'dismissed')}>
                        <button className="px-3 py-1.5 text-xs rounded-lg border border-slate-200 hover:bg-red-50 hover:border-red-300 text-gray-700">Odrzuć</button>
                      </form>
                    ) : (
                      <form action={setTenderStatus.bind(null, t.id, 'new')}>
                        <button className="px-3 py-1.5 text-xs rounded-lg border border-slate-200 hover:bg-gray-50 text-gray-700">Przywróć</button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
