'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import RFQDrawer from '@/components/rfq/RFQDrawer'
import CookieConsent from '@/components/layout/CookieConsent'

/**
 * `after` renderuje się WEWNĄTRZ <body>, na jego końcu. To nie kosmetyka:
 * <body> powstaje tutaj, więc komponenty wypisane w layoucie obok <LayoutShell>
 * byłyby rodzeństwem body, a nie jego dziećmi. React zostawiał wtedy znaczniki
 * Suspense bezpośrednio w <html> i hydracja padała na każdej podstronie.
 */
export default function LayoutShell({
  children,
  after,
}: {
  children: React.ReactNode
  after?: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')
  const isPanel = pathname.startsWith('/panel')
  const showChrome = !isAdmin && !isPanel

  return (
    <body className={showChrome ? 'min-h-screen flex flex-col' : 'min-h-screen'}>
      {showChrome && (
        <>
          <a
            href="#main-content"
            className="absolute -top-full left-4 z-50 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium focus:top-4 transition-[top]"
          >
            Przejdź do treści
          </a>
          <Navbar />
        </>
      )}
      {showChrome ? (
        <main id="main-content" className="flex-1">{children}</main>
      ) : (
        children
      )}
      {showChrome && (
        <>
          <Footer />
          <RFQDrawer />
          <CookieConsent />
        </>
      )}
      {after}
    </body>
  )
}
