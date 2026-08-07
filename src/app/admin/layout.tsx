import { headers } from 'next/headers'
import { getSessionFromCookie } from '@/lib/auth'
import AdminShell from '@/components/admin/AdminShell'
import ScrollReset from '@/components/ui/ScrollReset'

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
    <AdminShell adminName={session.name}>
      <ScrollReset>
        {children}
      </ScrollReset>
    </AdminShell>
  )
}
