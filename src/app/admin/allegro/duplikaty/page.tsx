import Link from 'next/link'
import { allegroConfigured } from '@/lib/allegro/auth'
import { furgonetkaConfigured } from '@/lib/furgonetka-rest'
import { findDuplicateGroups } from '@/lib/furgonetka-duplicates'
import FurgCancelButton from '@/components/admin/FurgCancelButton'

export const dynamic = 'force-dynamic'

function fmt(d?: string | null): string {
  if (!d) return ''
  const date = new Date(d)
  return isNaN(date.getTime()) ? '' : date.toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
}

export default async function DuplikatyPage() {
  const ready = allegroConfigured() && furgonetkaConfigured()
  const groups = ready ? await findDuplicateGroups() : []

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between gap-4 mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Duplikaty przesyłek (Furgonetka)</h1>
        <Link href="/admin/allegro" className="text-sm text-blue-600 hover:underline">← Allegro</Link>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        Zamówienia z więcej niż jedną aktywną przesyłką w Furgonetce (efekt starego buga — ponowny klik tworzył
        kolejnego kuriera). Pierwsza w grupie to ta z numerem listu i ruchem — ją zostaw; resztę anuluj.
      </p>

      {!ready ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Brak konfiguracji Allegro/Furgonetki.
        </div>
      ) : groups.length === 0 ? (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Brak duplikatów. 🎉
        </div>
      ) : (
        <div className="space-y-4">
          {groups.map((g) => (
            <div key={g.ref} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-xs text-gray-400 mb-2">Zamówienie: <span className="font-mono">{g.ref}</span> · {g.packages.length} przesyłki</div>
              <div className="divide-y divide-gray-100">
                {g.packages.map((p, i) => (
                  <div key={p.id} className="flex items-center justify-between gap-3 py-2">
                    <div className="text-sm">
                      <span className={`inline-block mr-2 rounded px-1.5 py-0.5 text-[10px] font-semibold ${i === 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        {i === 0 ? 'zostaw' : 'duplikat'}
                      </span>
                      <span className="font-mono text-gray-700">{p.tracking || `paczka ${p.id}`}</span>
                      <span className="text-gray-500"> · {p.stateDescription || p.state}</span>
                      {p.datetimeAdd && <span className="text-gray-400"> · {fmt(p.datetimeAdd)}</span>}
                    </div>
                    {i > 0 && (
                      p.cancelAvailable ? (
                        <FurgCancelButton packageId={p.id} />
                      ) : p.editUrl ? (
                        <a href={p.editUrl} target="_blank" className="text-xs font-medium text-blue-600 hover:underline whitespace-nowrap">
                          Anuluj w Furgonetce →
                        </a>
                      ) : (
                        <span className="text-xs text-gray-400">brak opcji anulowania</span>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
