import type { Metadata } from 'next'
import BrandBanner from '@/components/home/BrandBanner'

export const metadata: Metadata = { title: 'Podgląd banerów ProGlove i SUNMI', robots: { index: false, follow: false } }

export default function BrandBannerPreview() {
  return <main style={{background:'#e6e8e9',paddingBottom:48}}>
    <div className="container-main py-6"><h1 className="text-xl font-semibold text-gray-900">Banery na stronę główną</h1><p className="text-sm text-gray-600 mt-2">ProGlove — praca z towarem. SUNMI — różne stanowiska obsługi.</p></div>
    <BrandBanner brand="proglove" />
    <div className="container-main py-4 text-xs text-gray-500">02 / SUNMI</div>
    <BrandBanner brand="sunmi" />
  </main>
}
