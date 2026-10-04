import type { CSSProperties } from 'react'
import frames from '@/data/product-image-frames.json'

/** Center the physical product, rather than its transparent canvas, in square frames. */
export function getProductImageFrameStyle(src: string): CSSProperties | undefined {
  const bounds = (frames as Record<string, number[]>)[src]
  if (!bounds) return undefined

  const [left, top, right, bottom] = bounds
  const scale = 0.82 / Math.max(right - left, bottom - top)
  const x = (0.5 - (left + right) / 2) * 100
  const y = (0.5 - (top + bottom) / 2) * 100

  return {
    padding: 0,
    transform: `scale(${scale}) translate(${x}%, ${y}%)`,
    transformOrigin: 'center',
  }
}
