import Link from 'next/link'
import { prisma } from '@/lib/db'
import { setTenderStatus, retryTender, addTenderLink, toggleTenderSource } from './actions'
import { tenderWhere, VIEWS, type View } from '@/lib/tenders/filters'
import type { TenderAnalysis } from '@/lib/tenders/analysis'

export const dynamic = 'force-dynamic'
const LABELS: Record<View, string> = { trafienia: 'Trafienia', przeglad: 'Do przejrzenia', wszystkie: 'Wszystkie otwarte', slabsze: 'Niskie dopasowanie', archiwum: 'Archiwum' }
const STATUS: Record<string, string> = { new: 'Nowe', watched: 'Obserwowane', dismissed: 'Odrzucone' }
const ANALYSIS: Record<string, string> = { pending: 'Czeka na analizę', error: 'Błąd — analiza do ponowienia', review: 'Wymaga sprawdzenia', done: 'Analiza zakończona' }
const dateTime = (d: Date | null) => d ? d.toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw', dateStyle: 'short', timeStyle: 'short' }) : 'brak danych'
const cls = (active: boolean) => `px-3 py-1.5 rounded-lg border ${active ? 'bg-gray-900 text-white border-gray-900' : 'border-slate-200 text-gray-600 hover:bg-gray-50'}`
const safeHref = (s: string | null | undefined) => s && /^https:\/\//i.test(s) ? s : '#'

export default async function PrzetargiPage({ searchParams }: { searchParams: Promise<{ status?: string; widok?: string; q?: string; zrodlo?: string; strona?: string; komunikat?: string }> }) {
  const p = await searchParams
  const view: View = VIEWS.includes(p.widok as View) ? p.widok as View : 'trafienia'
  const status = p.status && Object.keys(STATUS).includes(p.status) ? p.status : ''
  const q = (p.q || '').trim().slice(0, 200), source = (p.zrodlo || '').slice(0, 200)
  const now = new Date()
  const base = tenderWhere(view, now, q, source)
  const where = { AND: [base, status ? { status } : { status: { not: 'dismissed' } }] }
  const [total, groups, sources, sourceNames, counts] = await Promise.all([
    prisma.tender.count({ where }),
    prisma.tender.groupBy({ by: ['status'], where: base, _count: true }),
    prisma.tenderSource.findMany({ where: { id: { notIn: ['_lock', '_digest'] } }, orderBy: { name: 'asc' } }),
    prisma.tender.findMany({ distinct: ['source'], select: { source: true } }),
    Promise.all(VIEWS.map(v => prisma.tender.count({ where: { AND: [tenderWhere(v, now, q, source), status ? { status } : { status: { not: 'dismissed' } }] } }))),
  ])
  const pages = Math.max(1, Math.ceil(total / 40))
  const page = Math.min(pages, Math.max(1, Math.floor(Number(p.strona) || 1)))
  const tenders = await prisma.tender.findMany({ where, orderBy: [{ score: 'desc' }, { publicationDate: 'desc' }, { id: 'asc' }], skip: (page - 1) * 40, take: 40 })
  const url = (updates: Record<string, string>) => {
    const values = { widok: view, status, q, zrodlo: source, ...updates }
    return '/admin/przetargi?' + new URLSearchParams(Object.entries(values).filter(([, v]) => !!v)).toString()
  }
  const byStatus = Object.fromEntries(groups.map(g => [g.status, g._count]))
  return <div className="max-w-6xl">
    <h1 className="text-2xl font-bold text-gray-900 mb-2">Przetargi AutoID</h1>
    {p.komunikat === 'added' && <p role="status" className="mb-4 text-sm text-emerald-700">Link został dodany do kolejki. Wynik pojawi się po kolejnym przebiegu analizy.</p>}
    {p.komunikat === 'invalid-url' && <p role="alert" className="mb-4 text-sm text-red-700">Nie można dodać tego adresu. Podaj dostępny publicznie adres HTTPS.</p>}
    <p className="text-sm text-gray-500 mb-5">BZP, TED, Baza Konkurencyjności i PlatformaZakupowa.pl. Pobieranie i kolejka analiz co 30 minut. Ocena obejmuje części i dostępne załączniki. Niepełna dokumentacja wymaga sprawdzenia.</p>
    <details className="border border-slate-200 rounded-xl p-4 mb-5 bg-white" open={sources.some(s => !!s.error) || !sources.length}>
      <summary className="font-semibold cursor-pointer">Źródła i stan pobierania {sources.some(s => !!s.error) ? '— wykryto błędy' : ''}</summary>
      <p className="text-xs text-gray-500 my-3">To monitoring wskazanych źródeł, a nie wszystkich stron zamawiających. Trwające pobieranie historyczne i błędy są widoczne poniżej. Link do postępowania możesz dodać samodzielnie.</p>
      {!sources.length && <p className="text-amber-700 text-sm">Źródła zostaną uruchomione przy najbliższym pobraniu.</p>}
      <div className="space-y-3">{sources.map(s => {
        const stats = s.stats as { complete?: boolean; saved?: number; from?: string; to?: string; scope?: string } | null
        return <div key={s.id} className="border-t border-slate-100 pt-3 text-sm">
          <div className="flex flex-wrap justify-between gap-2"><strong>{s.name}{!s.enabled && ' — wstrzymane'}</strong><span>Ostatnia próba: {dateTime(s.lastAttemptAt)}</span></div>
          <p className="text-gray-500">Zakończone okno / odczyt listy: {dateTime(s.lastSuccessAt)}{stats?.from && ` · okno ${stats.from} – ${stats.to}`}{stats && ` · kandydaci w ostatnim przebiegu: ${stats.saved || 0}`}</p>
          {stats?.complete === false && !s.error && <p className="text-amber-700">Pobieranie w toku. Następny przebieg wznowi pracę od zapisanej strony.</p>}
          {s.error && <p className="text-red-700">Błąd: {s.error}. Nie uznajemy tego źródła za kompletne.</p>}
          {s.lastSuccessAt && +now - +s.lastSuccessAt > 48 * 3600000 && <p className="text-amber-700">Brak zakończonego odczytu z ostatnich 48 godzin.</p>}
          {s.url && <><a href={safeHref(s.url)} target="_blank" rel="noopener noreferrer" className="text-blue-600 break-all">{s.url}</a><p className="text-xs text-gray-500">Zakres: pozycje widoczne na tej liście HTML/RSS. Listy wymagające JavaScript mogą nie być odczytane.</p><form action={toggleTenderSource}><input type="hidden" name="id" value={s.id}/><input type="hidden" name="enabled" value={String(!s.enabled)}/><button className="text-xs underline mt-1">{s.enabled ? 'Wstrzymaj źródło' : 'Wznów źródło'}</button></form></>}
        </div>
      })}</div>
    </details>
    <details className="border border-slate-200 rounded-xl p-4 mb-5 bg-white">
      <summary className="font-semibold cursor-pointer">Dodaj link do przetargu lub listę do monitorowania</summary>
      <form action={addTenderLink} className="mt-3 flex flex-wrap gap-2">
        <label className="w-full text-sm">Adres HTTPS<input type="url" name="url" required placeholder="https://…" className="block border border-slate-200 rounded-lg p-2 w-full mt-1"/></label>
        <label className="text-sm flex-1">Nazwa (opcjonalnie)<input name="title" maxLength={1000} className="block border border-slate-200 rounded-lg p-2 w-full mt-1"/></label>
        <label className="text-sm">Rodzaj<select name="mode" className="block border border-slate-200 rounded-lg p-2 mt-1"><option value="notice">Pojedynczy przetarg</option><option value="source">Publiczna lista HTML / RSS</option></select></label>
        <button className="self-end px-4 py-2 rounded-lg bg-gray-900 text-white">Dodaj do kolejki</button>
      </form>
      <p className="text-xs text-gray-500 mt-2">Obsługujemy dostępne publicznie dokumenty PDF, DOCX, XLSX i ZIP. Skany PDF, logowanie i blokady dostępu są oznaczane do ręcznej kontroli.</p>
    </details>
    <form method="get" className="flex flex-wrap items-end gap-3 mb-4">
      <input type="hidden" name="widok" value={view}/><input type="hidden" name="status" value={status}/>
      <label className="text-sm flex-1">Szukaj<input name="q" defaultValue={q} placeholder="Przedmiot, zamawiający, numer lub CPV" className="block w-full p-2 border border-slate-200 rounded-lg mt-1"/></label>
      <label className="text-sm">Źródło<select name="zrodlo" defaultValue={source} className="block p-2 border border-slate-200 rounded-lg mt-1"><option value="">Wszystkie źródła</option>{sourceNames.map(s => <option key={s.source} value={s.source}>{s.source}</option>)}</select></label>
      <button className="px-4 py-2 rounded-lg bg-gray-900 text-white">Szukaj</button>
    </form>
    <div className="flex flex-wrap gap-2 mb-3 text-sm">{VIEWS.map((v, i) => <Link key={v} href={url({ widok: v })} className={cls(view === v)}>{LABELS[v]} ({counts[i]})</Link>)}</div>
    <div className="flex flex-wrap gap-2 mb-5 text-sm">
      <Link href={url({ status: '' })} className={cls(!status)}>Wszystkie poza odrzuconymi ({(byStatus.new || 0) + (byStatus.watched || 0)})</Link>
      {Object.entries(STATUS).map(([s, label]) => <Link key={s} href={url({ status: s })} className={cls(status === s)}>{label} ({byStatus[s] || 0})</Link>)}
    </div>
    <p className="text-sm text-gray-500 mb-3">Wyniki: {total}. Strona {page} z {pages}. Niskie oceny i błędy nie usuwają ogłoszeń z bazy.</p>
    {!tenders.length && <div className="border border-slate-200 rounded-xl p-10 text-center text-gray-500">Brak wyników dla tych filtrów. Sprawdź „Wszystkie otwarte”, „Do przejrzenia” i stan źródeł.</div>}
    <div className="space-y-3">{tenders.map(t => {
      const a = t.analysis as TenderAnalysis | null
      const stale = t.analysisStatus === 'pending' || t.analysisStatus === 'error'
      return <div key={t.id} className="border border-slate-200 rounded-xl p-4 bg-white">
        <div className="flex items-start gap-3">
          <span className={`px-2 py-0.5 rounded-md text-sm font-bold ${stale ? 'bg-gray-100 text-gray-500' : t.score >= 70 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{stale ? '…' : t.score}</span>
          <div className="flex-1 min-w-0">
            <a href={safeHref(t.url)} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-blue-600">{t.orderObject}</a>
            <p className="text-xs text-gray-500 mt-1">{t.source} · {t.organizationName} · {t.noticeNumber}</p>
            <p className="text-sm text-gray-600 mt-2">{ANALYSIS[t.analysisStatus]}{t.analyzedAt && ` · ${dateTime(t.analyzedAt)}`}{stale && t.analyzedAt && ' · poprzednia ocena może być nieaktualna'}</p>
            {t.aiReason && !stale && <p className="text-sm text-gray-500 mt-1">{t.aiReason}</p>}
            {t.analysisError && <p className="text-sm text-red-700 mt-1">{t.analysisError}</p>}
            <p className="text-xs text-gray-500 mt-2">Oferty do: <strong className={t.submittingOffersDate && +t.submittingOffersDate - +now < 7 * 86400000 ? 'text-red-600' : ''}>{dateTime(t.submittingOffersDate)}</strong>{!t.submittingOffersDate && ' — sprawdź termin w dokumentacji'} · {STATUS[t.status]}{t.source === 'TED' && ' · termin zbiorczy nie zastępuje terminu wybranej części'}</p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0 max-w-40">
            {t.status !== 'watched' && <form action={setTenderStatus.bind(null, t.id, 'watched')}><button className="px-3 py-1.5 text-xs rounded-lg border border-slate-200 hover:bg-emerald-50">Obserwuj</button></form>}
            <form action={setTenderStatus.bind(null, t.id, t.status === 'dismissed' ? 'new' : 'dismissed')}><button className="px-3 py-1.5 text-xs rounded-lg border border-slate-200 hover:bg-gray-50">{t.status === 'dismissed' ? 'Przywróć' : 'Odrzuć'}</button></form>
            <form action={retryTender}><input type="hidden" name="id" value={t.id}/><button className="px-3 py-1.5 text-xs rounded-lg border border-slate-200 hover:bg-gray-50">Ponów analizę</button></form>
          </div>
        </div>
        {a && <details className="mt-3 border-t border-slate-100 pt-3 text-sm">
          <summary className="cursor-pointer font-medium">Części i załączniki ({a.parts?.length || 0} części){a.incomplete && ' — dokumentacja niepełna'}</summary>
          <div className="mt-3 space-y-3">{a.parts?.map((part, i) => <div key={`${part.id}-${i}`} className="rounded-lg border border-slate-200 p-3">
            <strong>{part.id}: {part.title}</strong><p className="text-xs text-gray-500 mt-1">Dopasowanie: {part.fit === 'yes' ? 'tak' : part.fit === 'no' ? 'nie' : 'do sprawdzenia'} · Osobna oferta: {part.separateOffer === 'yes' ? 'potwierdzona w analizie' : part.separateOffer === 'no' ? 'nie' : 'brak potwierdzenia'}</p>
            <p className="text-xs mt-2">Termin części: {part.deadline || 'brak potwierdzonego terminu — sprawdź dokumentację'}</p><p className="mt-2 whitespace-pre-wrap">{part.scope}</p><p className="text-gray-600 mt-1 whitespace-pre-wrap">{part.conditions}</p>
            {part.evidence && <blockquote className="border-l-2 border-slate-300 pl-3 text-gray-500 mt-2">{part.evidence}</blockquote>}
            <a href={safeHref(part.sourceUrl)} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs">Źródło ustaleń</a>
          </div>)}</div>
          {a.warnings?.map((w, i) => <p key={i} className="text-amber-700 mt-2">{w}</p>)}
          <h3 className="font-medium mt-4 mb-2">Odczyt dokumentów</h3>
          <ul className="space-y-2">{a.documents?.map((d, i) => <li key={i}><a href={safeHref(d.url)} className="text-blue-600" target="_blank" rel="noopener noreferrer">{d.name}</a> — {d.status === 'read' ? 'odczytany' : d.status === 'error' ? 'nie odczytano' : 'odczyt niepełny'}{d.detail && <p className="text-xs text-amber-700">{d.detail}</p>}</li>)}</ul>
        </details>}
      </div>
    })}</div>
    <nav aria-label="Strony przetargów" className="flex items-center justify-between my-5 text-sm">
      {page > 1 ? <Link className={cls(false)} href={url({ strona: String(page - 1) })}>Poprzednia</Link> : <span/>}
      <span>Strona {page} / {pages}</span>
      {page < pages ? <Link className={cls(false)} href={url({ strona: String(page + 1) })}>Następna</Link> : <span/>}
    </nav>
  </div>
}
