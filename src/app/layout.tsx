import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import dynamic from 'next/dynamic'
import './globals.css'
import LayoutShell from '@/components/layout/LayoutShell'
import AttributionTracker from '@/components/AttributionTracker'
import PostHogProvider from '@/components/PostHogProvider'
import { AutoLinkTracking } from '@/components/tracking/AutoLinkTracking'
import GARouteTracker from '@/components/tracking/GARouteTracker'
import LiveBeacon from '@/components/LiveBeacon'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'

const ChatWidget = dynamic(() => import('@/components/chat/ChatWidget'), { ssr: false })
const MaterialsAdvisorGate = dynamic(() => import('@/components/chat/MaterialsAdvisorGate'), { ssr: false })

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover' as const,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.takma.com.pl'),
  title: {
    default: 'TAKMA — Drukarki etykiet, Terminale mobilne, Skanery | Sklep B2B AutoID',
    template: '%s | TAKMA',
  },
  description:
    'Sklep B2B z urządzeniami AutoID — drukarki etykiet, terminale mobilne, skanery kodów kreskowych. Zebra, Honeywell, Datalogic, TSC i inne. Ceny netto, dostawa 24h, 25 lat doświadczenia.',
  authors: [{ name: 'TAKMA' }],
  creator: 'TAKMA',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: 'TAKMA',
    title: 'TAKMA — Drukarki etykiet, Terminale mobilne, Skanery kodów',
    description: 'Drukarki etykiet od 800 zł netto, terminale mobilne, skanery. Zebra, Honeywell, Datalogic i inne marki. Doradztwo, sprzedaż i serwis dla firm B2B w całej Polsce.',
    images: [{ url: '/images/takma-og.png', width: 1200, height: 630, alt: 'TAKMA — Autoryzowany partner urządzeń AutoID' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'oT1IprPzV9vrr3WASlmKdso2Zfg7L88UBQ0b5PCjOV8',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TAKMA',
  url: 'https://www.takma.com.pl',
  logo: { '@type': 'ImageObject', url: 'https://www.takma.com.pl/images/takma_logo.png', width: 300, height: 60 },
  description: 'Profesjonalne rozwiązania AutoID — drukarki etykiet, skanery kodów kreskowych, terminale mobilne, systemy RFID. 25+ lat doświadczenia, autoryzowany partner Zebra Technologies.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Poświęcka 1a',
    postalCode: '51-128',
    addressLocality: 'Wrocław',
    addressCountry: 'PL',
  },
  taxID: '915-100-43-77',
  foundingDate: '2001',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
  knowsAbout: ['Drukarki etykiet', 'Skanery kodów kreskowych', 'Terminale mobilne', 'RFID', 'AutoID', 'Zebra Technologies'],
  sameAs: [
    'https://www.serwis-zebry.pl',
    'https://www.linkedin.com/company/takma',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Autoryzacja producenta',
      name: 'Zebra Premier Solution Partner',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Zebra Technologies',
        url: 'https://www.zebra.com',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Autoryzacja producenta',
      name: 'Zebra Premier Business Partner',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Zebra Technologies',
        url: 'https://www.zebra.com',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Certyfikat serwisowy',
      name: 'Zebra Printer Repair Specialist',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Zebra Technologies',
        url: 'https://www.zebra.com',
      },
    },
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TAKMA',
  url: 'https://www.takma.com.pl',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.takma.com.pl/katalog?szukaj={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const pathname = headersList.get('x-next-pathname') || headersList.get('x-invoke-path') || ''
  const isAdmin = pathname.startsWith('/admin')
  const isPanel = pathname.startsWith('/panel')
  // Boty datacenter z Singapuru zawyżały bazę GA4 o ~28% (213 sesji/tydz.,
  // desktop, source (not set), sesje 7 s) — nie ładujemy im analityki.
  const isBotGeo = headersList.get('x-vercel-ip-country') === 'SG' 

  return (
    <html lang="pl" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        {!isAdmin && !isPanel && !isBotGeo && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`(function(){
  var GA='${process.env.NEXT_PUBLIC_GA_ID}';
  try {
    var p=new URLSearchParams(location.search);
    if(p.get('ga-off')==='1'){ localStorage.setItem('ga_optout','1'); console.info('GA: wyłączone na tym urządzeniu (?ga-off)'); }
    if(p.get('ga-on')==='1'){ localStorage.removeItem('ga_optout'); console.info('GA: włączone na tym urządzeniu (?ga-on)'); }
    if(localStorage.getItem('ga_optout')==='1'){ window['ga-disable-'+GA]=true; }
    // Ruch deweloperski: wejścia z lokalnych serwerów (np. localhost:3002 przy
    // testach cross-linkingu) zaśmiecały statystyki jako osobne źródło referral.
    if(/^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:|\/)/.test(document.referrer||'')){
      window['ga-disable-'+GA]=true;
      try{ localStorage.setItem('ga_optout','1'); }catch(e){}
    }
  } catch(e){}
})();
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: true });`}
            </Script>
            {/* Microsoft Clarity — heatmapy, mapy scrolla, nagrania sesji */}
            <Script id="ms-clarity" strategy="afterInteractive">
              {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "xhkqfgz8yj");`}
            </Script>
          </>
        )}
        {!isAdmin && !isPanel && (
          <script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="XibdXHRREO4eDGxt8gbxAw"
            async
          />
        )}
        {!isAdmin && !isPanel && (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
            />
          </>
        )}
      </head>
      <PostHogProvider>
        <LayoutShell>{children}</LayoutShell>
      </PostHogProvider>
      {/* ChatWidget (ogólny doradca urządzeń) wyłączony tymczasowo — kalibracja w toku */}
      {/* {!isAdmin && !isPanel && <ChatWidget />} */}
      {/* Doradca materiałów — tylko na stronach etykiet i taśm (gate kliencki) */}
      {!isAdmin && !isPanel && <MaterialsAdvisorGate />}
      <Analytics />
      <SpeedInsights />
      {!isAdmin && !isPanel && <AutoLinkTracking />}
      {!isAdmin && !isPanel && !isBotGeo && process.env.NEXT_PUBLIC_GA_ID && (
        <Suspense fallback={null}>
          <GARouteTracker />
        </Suspense>
      )}
      {!isAdmin && !isPanel && <LiveBeacon />}
      {/* Atrybucja: gclid/UTM + ścieżka wizyty → ciasteczka (czytane przy leadach i zamówieniach) */}
      {!isAdmin && !isPanel && (
        <Suspense fallback={null}>
          <AttributionTracker />
        </Suspense>
      )}
      {!isAdmin && !isPanel && (
        <>
          <Script id="skapiec-dlapi-init" strategy="afterInteractive">
            {`dlApi = { cmd: [] };`}
          </Script>
          <Script
            src="https://lib.onet.pl/s.csr/build/dlApi/minit.boot.min.js"
            strategy="afterInteractive"
          />
        </>
      )}
    </html>
  )
}
