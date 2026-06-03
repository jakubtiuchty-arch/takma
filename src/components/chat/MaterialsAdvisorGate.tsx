'use client'

import { usePathname } from 'next/navigation'
import MaterialsAdvisorWidget from './MaterialsAdvisorWidget'

/** Montuje Doradcę materiałów TYLKO na stronach etykiet i taśm (reaguje na nawigację klienta). */
export default function MaterialsAdvisorGate() {
  const pathname = usePathname()
  const onMaterials = !!pathname && (pathname.startsWith('/etykiety-') || pathname.startsWith('/tasmy-'))
  if (!onMaterials) return null
  return <MaterialsAdvisorWidget />
}
