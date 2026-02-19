'use client'

import { logoutCustomer } from '@/actions/customer-auth'

interface TopBarProps {
  customerName: string
  companyName: string
}

export default function PanelTopBar({ customerName, companyName }: TopBarProps) {
  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
      {/* Left side — spacer for mobile hamburger */}
      <div className="lg:hidden w-10" />
      <div className="hidden lg:block" />

      {/* Right side — company info & logout */}
      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-gray-900 leading-tight">{companyName}</p>
          <p className="text-xs text-gray-500">{customerName}</p>
        </div>
        <div className="sm:hidden">
          <p className="text-sm text-gray-600">{customerName}</p>
        </div>
        <form action={logoutCustomer}>
          <button
            type="submit"
            className="text-sm text-gray-500 hover:text-red-600 transition-colors"
          >
            Wyloguj
          </button>
        </form>
      </div>
    </header>
  )
}
