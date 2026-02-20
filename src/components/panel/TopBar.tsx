'use client'

import { logoutCustomer } from '@/actions/customer-auth'

interface TopBarProps {
  customerName: string
  companyName: string
}

export default function PanelTopBar({ customerName, companyName }: TopBarProps) {
  return (
    <header className="h-11 bg-white border-b border-gray-200 flex items-center justify-between px-5 flex-shrink-0">
      {/* Left side — spacer for mobile hamburger */}
      <div className="lg:hidden w-10" />
      <div className="hidden lg:block" />

      {/* Right side — logout only */}
      <div className="flex items-center">
        <form action={logoutCustomer}>
          <button
            type="submit"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            Wyloguj
          </button>
        </form>
      </div>
    </header>
  )
}
