import { headers } from 'next/headers'
import { getCustomerFromCookie } from '@/lib/customer-auth'
import PanelSidebar from '@/components/panel/Sidebar'
import PanelTopBar from '@/components/panel/TopBar'
import ScrollReset from '@/components/ui/ScrollReset'

export const metadata = {
  title: 'Panel klienta — TAKMA',
  robots: 'noindex, nofollow',
}

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const pathname = headersList.get('x-next-pathname') || ''

  // Login & registration pages — render without sidebar/topbar
  if (pathname === '/panel/login' || pathname === '/panel/rejestracja') {
    return <>{children}</>
  }

  // Protected pages — middleware already handles redirect
  const session = await getCustomerFromCookie()

  if (!session) {
    // Fallback — middleware should have caught this
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <PanelSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <PanelTopBar
          customerName={`${session.firstName}`}
          companyName={session.company}
        />
        <ScrollReset>
          {children}
        </ScrollReset>
      </div>
    </div>
  )
}
