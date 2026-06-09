import { prisma } from '@/lib/db'
import { STAGES, stageOf, isProblem } from '@/lib/shipment-tracking'

function fmt(d?: string | Date | null): string {
  if (!d) return ''
  const date = typeof d === 'string' ? new Date(d) : d
  if (isNaN(date.getTime())) return ''
  return date.toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
}

/**
 * Oś czasu przesyłki Furgonetki (budowana cronem). Renderuje się tylko gdy jest paczka.
 * `packageId` → konkretna przesyłka (wiele per zamówienie); `orderRef` → najnowsza (legacy).
 */
export default async function ShipmentTimeline({ orderRef, packageId }: { orderRef?: string; packageId?: string }) {
  const tr = packageId
    ? await prisma.shipmentTracking.findUnique({
        where: { packageId },
        include: { events: { orderBy: { recordedAt: 'asc' } } },
      })
    : orderRef
      ? await prisma.shipmentTracking.findFirst({
          where: { orderRef },
          orderBy: { createdAt: 'desc' },
          include: { events: { orderBy: { recordedAt: 'asc' } } },
        })
      : null
  if (!tr) return null

  const problem = isProblem(tr.currentState || '', tr.currentDesc)
  const stage = problem ? -1 : stageOf(tr.currentState || '', tr.currentDesc)

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 className="font-semibold text-gray-900 text-sm">Status przesyłki</h2>
        {tr.trackingUrl && (
          <a href={tr.trackingUrl} target="_blank" className="text-xs font-medium text-blue-600 hover:underline">
            Śledź u kuriera →
          </a>
        )}
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-1 mb-3">
        {STAGES.map((label, i) => {
          const done = !problem && i <= stage
          const current = !problem && i === stage
          return (
            <div key={label} className="flex-1 flex flex-col items-center">
              <div
                className={`h-2 w-full rounded-full ${
                  problem ? 'bg-red-200' : done ? 'bg-emerald-500' : 'bg-gray-200'
                }`}
              />
              <span className={`mt-1 text-[10px] text-center ${current ? 'font-semibold text-emerald-700' : 'text-gray-400'}`}>
                {label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Bieżący status */}
      <div className={`text-sm ${problem ? 'text-red-700' : 'text-gray-800'}`}>
        {tr.currentDesc || 'Oczekuję na pierwszą aktualizację statusu…'}
        {tr.currentStation && <span className="text-gray-500"> · {tr.currentStation}</span>}
      </div>
      {tr.lastPolledAt && (
        <div className="text-xs text-gray-400 mt-0.5">Sprawdzono: {fmt(tr.lastPolledAt)}</div>
      )}

      {/* Oś czasu zdarzeń */}
      {tr.events.length > 0 && (
        <ol className="mt-3 space-y-2 border-l-2 border-gray-100 pl-3">
          {tr.events.map((e) => (
            <li key={e.id} className="relative">
              <span className="absolute -left-[17px] top-1 h-2.5 w-2.5 rounded-full bg-gray-300" />
              <div className="text-xs text-gray-400">{fmt(e.datetimeStatus || e.recordedAt)}</div>
              <div className="text-sm text-gray-700">
                {e.description || e.state}
                {e.station && <span className="text-gray-500"> · {e.station}</span>}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
