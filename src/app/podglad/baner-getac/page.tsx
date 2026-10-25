import type { Metadata } from 'next'
import GetacTabletBanner from '@/components/home/GetacTabletBanner'

export const metadata: Metadata = { title: 'Podgląd banera tabletów Getac', robots: { index: false, follow: false } }

export default function GetacBannerPreview() {
  return <main style={{background:'#e6e8e9',paddingBottom:48}}>
    <div className="container-main py-6"><h1 className="text-xl font-semibold text-gray-900">Baner tabletów Getac</h1><p className="text-sm text-gray-600 mt-2">Praca w terenie · Windows i Android · Oryginalny Getac F120</p></div>
    <GetacTabletBanner />
  </main>
}
