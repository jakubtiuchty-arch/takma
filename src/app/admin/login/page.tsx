'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { loginAdmin } from '@/actions/auth'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {pending ? 'Logowanie...' : 'Zaloguj się'}
    </button>
  )
}

export default function AdminLoginPage() {
  const [state, formAction] = useFormState(loginAdmin, null)

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">TAKMA Admin</h1>
          <p className="text-slate-400 mt-1">Panel administracyjny</p>
        </div>

        <form action={formAction} className="bg-white rounded-xl shadow-xl p-6 space-y-4">
          {state?.error && (
            <div className="bg-red-50 text-red-700 px-4 py-2.5 rounded-lg text-sm font-medium">
              {state.error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
              placeholder="takma@takma.com.pl"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Hasło
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
            />
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  )
}
