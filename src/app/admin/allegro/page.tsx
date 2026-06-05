import Link from 'next/link'
import { getConnection, allegroConfigured, ALLEGRO_ENV } from '@/lib/allegro/auth'

export const dynamic = 'force-dynamic'

export default async function AllegroDashboardPage() {
  const configured = allegroConfigured()
  const conn = configured ? await getConnection() : null

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Allegro</h1>
      <p className="text-sm text-gray-500 mb-6">Integracja katalogu TAKMA z Allegro (środowisko: {ALLEGRO_ENV}).</p>

      <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
        <Link href="/admin/allegro/konfiguracja" className="rounded-xl border border-gray-200 bg-white p-5 hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-2 mb-1">
            <span className={`inline-block w-2.5 h-2.5 rounded-full ${conn?.connected ? 'bg-emerald-500' : 'bg-gray-300'}`} />
            <span className="font-semibold text-gray-900">Połączenie</span>
          </div>
          <p className="text-sm text-gray-500">
            {!configured ? 'Brak konfiguracji (env)' : conn?.connected ? `Połączono${conn.allegroLogin ? ` jako ${conn.allegroLogin}` : ''}` : 'Niepołączono — kliknij, aby połączyć'}
          </p>
        </Link>

        <div className="rounded-xl border border-gray-200 bg-white p-5 opacity-60">
          <div className="font-semibold text-gray-900 mb-1">Oferty</div>
          <p className="text-sm text-gray-500">Wkrótce — wystawianie i synchronizacja ofert.</p>
        </div>
      </div>
    </div>
  )
}
