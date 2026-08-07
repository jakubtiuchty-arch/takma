'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

/**
 * Powłoka panelu admina — trzyma stan bocznej szuflady.
 * Mobile: sidebar jako off-canvas drawer otwierany hamburgerem z TopBara.
 * Desktop (lg+): sidebar statyczny w layoucie, hamburger ukryty.
 */
export default function AdminShell({
  adminName,
  children,
}: {
  adminName: string
  children: React.ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar adminName={adminName} onMenuClick={() => setMenuOpen((v) => !v)} />
        {children}
      </div>
    </div>
  )
}
