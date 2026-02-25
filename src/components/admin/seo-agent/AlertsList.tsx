'use client'

interface Alert {
  id: string
  severity: 'CRITICAL' | 'WARNING' | 'INFO'
  category: string
  title: string
  description: string | null
  action: string | null
  createdAt: string
}

interface AlertsListProps {
  alerts: Alert[]
}

const severityConfig = {
  CRITICAL: { bg: 'bg-red-50', border: 'border-red-200', dot: 'bg-red-500', text: 'text-red-800' },
  WARNING: { bg: 'bg-yellow-50', border: 'border-yellow-200', dot: 'bg-yellow-500', text: 'text-yellow-800' },
  INFO: { bg: 'bg-blue-50', border: 'border-blue-200', dot: 'bg-blue-500', text: 'text-blue-800' },
}

export default function AlertsList({ alerts }: AlertsListProps) {
  if (alerts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Alerty</h3>
        <p className="text-sm text-gray-500">Brak nowych alertów.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">
        Alerty <span className="text-gray-400 font-normal">({alerts.length})</span>
      </h3>
      <div className="space-y-2">
        {alerts.map((alert) => {
          const config = severityConfig[alert.severity]
          return (
            <div
              key={alert.id}
              className={`${config.bg} ${config.border} border rounded-md px-4 py-3`}
            >
              <div className="flex items-start gap-2">
                <span className={`${config.dot} w-2 h-2 rounded-full mt-1.5 flex-shrink-0`} />
                <div className="min-w-0">
                  <p className={`text-sm font-medium ${config.text}`}>{alert.title}</p>
                  {alert.description && (
                    <p className="text-xs text-gray-600 mt-0.5">{alert.description}</p>
                  )}
                  {alert.action && (
                    <p className="text-xs text-gray-500 mt-1 italic">{alert.action}</p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
