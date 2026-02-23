import Link from 'next/link'
import { HeroService } from './_components/HeroService'
import { ZebraAuthorizedBanner } from './_components/ZebraAuthorizedBanner'
import { SupportedBrandsGrid } from './_components/SupportedBrandsGrid'
import { DeviceCategoriesAEO } from './_components/DeviceCategoriesAEO'
import { PricingTable } from './_components/PricingTable'
import { CommonIssues } from './_components/CommonIssues'
import { RmaProcessSteps } from './_components/RmaProcessSteps'
import { FaqAEO } from './_components/FaqAEO'
import { ServiceManagerContact } from './_components/ServiceManagerContact'
import { ServiceContactForm } from './_components/ServiceContactForm'

export default function SerwisPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-900 transition-colors">Strona główna</Link></li>
            <li><span className="mx-1">/</span></li>
            <li className="font-medium text-gray-900">Serwis</li>
          </ol>
        </div>
      </nav>

      <HeroService />
      <SupportedBrandsGrid />
      <DeviceCategoriesAEO />
      <PricingTable />
      <CommonIssues />
      <RmaProcessSteps />
      <ZebraAuthorizedBanner />
      <ServiceManagerContact />
      <FaqAEO />
      <ServiceContactForm />
    </main>
  )
}
