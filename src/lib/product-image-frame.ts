import type { CSSProperties } from 'react'
import frames from '@/data/product-image-frames.json'
import uniformBounds from '@/data/product-image-uniform-bounds.json'

/** Center the physical product, rather than its transparent canvas, in square frames. */
export function getProductImageFrameStyle(src: string): CSSProperties | undefined {
  const bounds = (frames as Record<string, number[]>)[src]
  if (!bounds) return undefined

  const [left, top, right, bottom] = bounds
  const scale = (0.82 * 0.85 * 0.95) / Math.max(right - left, bottom - top)
  const x = (0.5 - (left + right) / 2) * 100
  const y = (0.5 - (top + bottom) / 2) * 100

  return {
    padding: 0,
    transform: `scale(${scale}) translate(${x}%, ${y}%)`,
    transformOrigin: 'center',
  }
}

/** Equal visible long side within an unchanged image field; enabled by the parent section. */
export function getUniformProductImageStyle(src: string, aspectRatio = 4 / 3): CSSProperties | undefined {
  const bounds = (uniformBounds as Record<string, number[]>)[src]
  if (!bounds) return getProductImageFrameStyle(src)

  const [sourceWidth, sourceHeight, left, top, right, bottom] = bounds
  const containScale = Math.min(aspectRatio / sourceWidth, 1 / sourceHeight)
  const scale = 0.82 / (Math.max(right - left, bottom - top) * containScale)
  const x = (sourceWidth / 2 - (left + right) / 2) * containScale / aspectRatio * 100
  const y = (sourceHeight / 2 - (top + bottom) / 2) * containScale * 100

  return {
    padding: 0,
    transform: `scale(${scale}) translate(${x}%, ${y}%)`,
    transformOrigin: 'center',
  }
}
