'use client'

import { logoutAdmin } from '@/actions/auth'

interface TopBarProps {
  adminName: string
}

export default function TopBar({ adminName }: TopBarProps) {
  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
      <div />
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
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
