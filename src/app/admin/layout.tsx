import { headers } from 'next/headers'
import { getSessionFromCookie } from '@/lib/auth'
import Sidebar from '@/components/admin/Sidebar'
import TopBar from '@/components/admin/TopBar'

export const metadata = {
  title: 'Admin — TAKMA',
  robots: 'noindex, nofollow',
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const pathname = headersList.get('x-next-pathname') || ''

  // Login page — render without sidebar/topbar
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  // Protected pages — middleware already handles redirect
  const session = await getSessionFromCookie()

  if (!session) {
    // Fallback — middleware should have caught this
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar adminName={session.name} />
        <div className="flex-1 p-6 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
