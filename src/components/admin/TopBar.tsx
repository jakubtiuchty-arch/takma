'use client'

import { logoutAdmin } from '@/actions/auth'

interface TopBarProps {
  adminName: string
  onMenuClick?: () => void
}

export default function TopBar({ adminName, onMenuClick }: TopBarProps) {
  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 flex-shrink-0 sticky top-0 z-30">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Menu"
        className="lg:hidden -ml-1 p-2 rounded-lg text-gray-600 hover:bg-gray-100 active:scale-95 transition"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div className="hidden lg:block" />
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="text-sm text-gray-600 truncate max-w-[40vw] sm:max-w-none">
          {adminName}
        </span>
        <form action={logoutAdmin}>
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
