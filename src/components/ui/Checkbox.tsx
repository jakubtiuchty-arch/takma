'use client'

import { forwardRef, InputHTMLAttributes } from 'react'
import clsx from 'clsx'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode
  error?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`

    return (
      <div className="w-full">
        <label
          htmlFor={checkboxId}
          className={clsx(
            'flex items-start gap-3 cursor-pointer group',
            props.disabled && 'cursor-not-allowed opacity-50'
          )}
        >
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              className={clsx(
                'peer h-5 w-5 rounded border-2 appearance-none cursor-pointer',
                'transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
                'checked:bg-primary-600 checked:border-primary-600',
                error
                  ? 'border-red-300'
                  : 'border-gray-300 hover:border-gray-400',
                props.disabled && 'cursor-not-allowed',
                className
              )}
              aria-invalid={error ? 'true' : 'false'}
              {...props}
            />
            <svg
              className="absolute h-3 w-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="2 6 5 9 10 3" />
            </svg>
          </div>
          {label && (
            <span className="text-sm text-gray-700 select-none">
              {label}
            </span>
          )}
        </label>
        {error && (
          <p className="mt-1.5 text-sm text-red-600 ml-8" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
