import { HeroService } from './_components/HeroService'
import { TrustBar } from './_components/TrustBar'
import { ZebraAuthorizedBanner } from './_components/ZebraAuthorizedBanner'
import { SupportedBrandsGrid } from './_components/SupportedBrandsGrid'
import { DeviceCategoriesAEO } from './_components/DeviceCategoriesAEO'
import { PricingTable } from './_components/PricingTable'
import { CommonIssues } from './_components/CommonIssues'
import { RmaProcessSteps } from './_components/RmaProcessSteps'
import { FaqAEO } from './_components/FaqAEO'
import { ServiceContactForm } from './_components/ServiceContactForm'

export default function SerwisPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroService />
      <TrustBar />
      <DeviceCategoriesAEO />
      <SupportedBrandsGrid />
      <PricingTable />
      <CommonIssues />
      <RmaProcessSteps />
      <ZebraAuthorizedBanner />
      <FaqAEO />
      <ServiceContactForm />
    </main>
  )
}
