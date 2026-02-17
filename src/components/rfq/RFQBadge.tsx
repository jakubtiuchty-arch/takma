'use client'

import { useEffect, useState } from 'react'
import { ShoppingCartIcon } from '@/components/ui/Icons'
import { useCartStore } from '@/store/cartStore'
import clsx from 'clsx'

export default function RFQBadge() {
  const { toggleDrawer, getItemCount } = useCartStore()
  const [mounted, setMounted] = useState(false)
  const [animate, setAnimate] = useState(false)

  // Hydration fix - Zustand z persist
  useEffect(() => {
    setMounted(true)
  }, [])

  const count = mounted ? getItemCount() : 0

  // Animacja przy zmianie count
  useEffect(() => {
    if (count > 0) {
      setAnimate(true)
      const timer = setTimeout(() => setAnimate(false), 300)
      return () => clearTimeout(timer)
    }
  }, [count])

  return (
    <button
      onClick={toggleDrawer}
      className={clsx(
        'relative p-2 rounded-lg transition-all duration-200',
        'text-gray-600 hover:text-primary-600 hover:bg-primary-50',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
      )}
      aria-label={`Koszyk (${count} ${count === 1 ? 'produkt' : 'produktów'})`}
    >
      <ShoppingCartIcon size={24} />

      {count > 0 && (
        <span
          className={clsx(
            'absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5',
            'flex items-center justify-center',
            'bg-primary-600 text-white text-xs font-bold rounded-full',
            'transition-transform duration-300',
            animate && 'scale-125'
          )}
        >
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  )
}
