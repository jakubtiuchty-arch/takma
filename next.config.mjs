/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['pdf-parse'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://lib.onet.pl https://*.posthog.com https://va.vercel-scripts.com https://challenges.cloudflare.com https://www.googletagmanager.com https://analytics.ahrefs.com; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://*.supabase.co https://*.posthog.com https://challenges.cloudflare.com https://va.vercel-scripts.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://analytics.ahrefs.com; frame-src https://challenges.cloudflare.com https://play.vidyard.com https://www.google.com; object-src 'none'; base-uri 'self'" },
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // =====================================================
      // INSTRUKCJE — stare PDF-y instrukcji (/downloads) → kanoniczny dom /instrukcje
      // PL PDF → strona po polsku; EN PDF → hub modelu
      // =====================================================
      { source: '/downloads/honeywell/hon-ia-pss-ct70-a-pl-qs.pdf', destination: '/instrukcje/honeywell-ct70/instrukcja-po-polsku', permanent: true },
      { source: '/downloads/honeywell/hon-ia-pss-ct70-a-en-qs.pdf', destination: '/instrukcje/honeywell-ct70', permanent: true },
      { source: '/downloads/honeywell/hon-ia-pss-ct32-a-en-qs.pdf', destination: '/instrukcje/honeywell-ct32', permanent: true },
      { source: '/downloads/honeywell/sps-ppr-ck62-a-pl-qs.pdf', destination: '/instrukcje/honeywell-ck62/instrukcja-po-polsku', permanent: true },
      { source: '/downloads/hon-ia-pss-ck67-a-pl-qs.pdf', destination: '/instrukcje/honeywell-ck67/instrukcja-po-polsku', permanent: true },
      { source: '/downloads/skorpiox5_um.pdf', destination: '/instrukcje/honeywell-ck67', permanent: true },
      { source: '/downloads/sps-ppr-px940-quick-start-guide.pdf', destination: '/instrukcje/honeywell-px940', permanent: true },
      { source: '/downloads/4250wb_4230b_pol_ug_01.pdf', destination: '/instrukcje/honeywell-rp4f/instrukcja-po-polsku', permanent: true },
      { source: '/downloads/instrukcja-cmp-25l-en.pdf', destination: '/instrukcje/honeywell-rp2f', permanent: true },

      // =====================================================
      // TRAILING SLASH: stara strona WordPress miała /
      // =====================================================

      // =====================================================
      // ZEBRA TERMINALE — tylko zmiany slugów (stary → nowy model)
      // Produkty z identycznym slugiem nie potrzebują redirectu
      // =====================================================
      { source: '/produkt/zebra-mc9300/:path*', destination: '/produkt/zebra-mc9400', permanent: true },
      { source: '/produkt/zebra-mc2207/:path*', destination: '/produkt/zebra-mc2700', permanent: true },
      { source: '/produkt/zebra-tc21/:path*', destination: '/produkt/zebra-tc22', permanent: true },
      { source: '/produkt/zebra-tc26/:path*', destination: '/produkt/zebra-tc27', permanent: true },
      { source: '/produkt/zebra-tc57/:path*', destination: '/produkt/zebra-tc58', permanent: true },
      { source: '/produkt/zebra-tc57x/:path*', destination: '/produkt/zebra-tc58', permanent: true },
      { source: '/produkt/zebra-tc77/:path*', destination: '/produkt/zebra-tc78', permanent: true },

      // =====================================================
      // ZEBRA DRUKARKI BIURKOWE — split d/t (stary slug → domyślny wariant)
      // =====================================================
      { source: '/produkt/zebra-zd220/:path*', destination: '/produkt/zebra-zd220d', permanent: true },
      { source: '/produkt/zebra-zd230/:path*', destination: '/produkt/zebra-zd230d', permanent: true },
      { source: '/produkt/zebra-zd420/:path*', destination: '/produkt/zebra-zd421t', permanent: true },
      { source: '/produkt/zebra-zd420d/:path*', destination: '/produkt/zebra-zd230d', permanent: true },
      { source: '/produkt/zebra-zd421/:path*', destination: '/produkt/zebra-zd421t', permanent: true },
      { source: '/produkt/zebra-zd510/:path*', destination: '/produkt/zebra-zd510-hc', permanent: true },
      { source: '/produkt/zebra-zd621/:path*', destination: '/produkt/zebra-zd621t', permanent: true },

      // =====================================================
      // ZEBRA DRUKARKI PRZEMYSŁOWE — tylko zmiany slugów
      // =====================================================
      { source: '/produkt/zebra-zt411-rfid/:path*', destination: '/produkt/zebra-zt411', permanent: true },
      { source: '/produkt/zebra-zt620-2/:path*', destination: '/produkt/zebra-zt620', permanent: true },
      { source: '/produkt/zebra-zt220/:path*', destination: '/produkt/zebra-zt231', permanent: true },
      { source: '/produkt/zebra-zt230/:path*', destination: '/produkt/zebra-zt231', permanent: true },

      // =====================================================
      // ZEBRA DRUKARKI MOBILNE — tylko zmiany slugów (model → Plus)
      // =====================================================
      { source: '/produkt/zebra-zq220/:path*', destination: '/produkt/zebra-zq220-plus', permanent: true },
      { source: '/produkt/zebra-zq312-plus/:path*', destination: '/produkt/zebra-zq310-plus', permanent: true },
      { source: '/produkt/zebra-zq610/:path*', destination: '/produkt/zebra-zq610-plus', permanent: true },
      { source: '/produkt/zebra-zq620/:path*', destination: '/produkt/zebra-zq620-plus', permanent: true },
      { source: '/produkt/zebra-zq630/:path*', destination: '/produkt/zebra-zq630-plus', permanent: true },

      // =====================================================
      // ZEBRA SKANERY — warianty → strona główna skanera (tylko zmiana slugu)
      // =====================================================
      { source: '/produkt/zebra-ds2208-hc/:path*', destination: '/produkt/zebra-ds2208', permanent: true },
      // DS3608 legacy slugi → XR (aktualny model)
      { source: '/produkt/zebra-ds3608', destination: '/produkt/zebra-ds3608-xr', permanent: true },
      { source: '/produkt/zebra-ds3608-er/:path*', destination: '/produkt/zebra-ds3608-xr', permanent: true },
      // DS3608-SR ma własną stronę → redirect usunięty
      // DS3608-HD ma własną stronę → redirect usunięty
      // DS3608-HP ma własną stronę → redirect usunięty
      { source: '/produkt/zebra-ds3608-dp/:path*', destination: '/produkt/zebra-ds3608-xr', permanent: true },
      // DS3678-SR ma własną stronę → redirect zebra-ds3678 usunięty
      // LI3608-SR i LI3608-ER mają własne strony → redirecty usunięte
      { source: '/produkt/zebra-li3678:path*', destination: '/produkt/zebra-ds3608-xr', permanent: true },
      // DS8108/DS8178 family
      { source: '/produkt/zebra-ds8108/:path*', destination: '/produkt/zebra-ds8178', permanent: true },
      { source: '/produkt/czytnik-kodow-kreskowych-zebra-ds8108-hc/:path*', destination: '/produkt/zebra-ds8178', permanent: true },
      { source: '/produkt/czytnik-kodow-kreskowych-zebra-ds8178/:path*', destination: '/produkt/zebra-ds8178', permanent: true },
      { source: '/produkt/czytnik-kodow-kreskowych-zebra-ds8178-hc/:path*', destination: '/produkt/zebra-ds8178', permanent: true },
      // Legacy 1D laser → LI2208 (imager successor)
      { source: '/produkt/zebra-ls2208/:path*', destination: '/produkt/zebra-li2208', permanent: true },

      // =====================================================
      // DATALOGIC — tylko zmiany slugów
      // =====================================================
      { source: '/produkt/datalogic-memor-1/:path*', destination: '/produkt/datalogic-memor-11', permanent: true },
      { source: '/produkt/datalogic-memor-20/:path*', destination: '/produkt/datalogic-memor-30', permanent: true },

      // =====================================================
      // KATEGORIE — stara → nowa struktura
      // =====================================================
      { source: '/kategoria/drukarki-etykiet/:path*', destination: '/drukarki-etykiet', permanent: true },
      { source: '/kategoria/drukarki-etykiet/biurkowe/:path*', destination: '/biurkowe-drukarki-etykiet', permanent: true },
      { source: '/kategoria/drukarki-etykiet/przem/:path*', destination: '/przemyslowe-drukarki-etykiet', permanent: true },
      { source: '/kategoria/drukarki-etykiet/drukarki-termiczne/:path*', destination: '/termiczne-drukarki-etykiet', permanent: true },
      { source: '/kategoria/drukarki-etykiet/mobilne/:path*', destination: '/mobilne-drukarki-etykiet', permanent: true },
      { source: '/kategoria/drukarki-etykiet/opasek/:path*', destination: '/drukarki-opasek', permanent: true },
      { source: '/kategoria/terminale-mobilne/:path*', destination: '/terminale-mobilne', permanent: true },
      { source: '/kategoria/materialy-eksploatacyjne/:path*', destination: '/materialy-eksploatacyjne', permanent: true },
      { source: '/kategoria/akcesoria/:path*', destination: '/katalog', permanent: true },
      { source: '/kategoria/skanery-kodow-kreskowych/:path*', destination: '/skanery-kodow-kreskowych', permanent: true },

      // Stare flat URLe podkategorii skanerów → nowe zagnieżdżone
      { source: '/skanery-przewodowe', destination: '/skanery-kodow-kreskowych/przewodowe', permanent: true },
      { source: '/skanery-bezprzewodowe', destination: '/skanery-kodow-kreskowych/bezprzewodowe', permanent: true },
      { source: '/skanery-prezentacyjne', destination: '/skanery-kodow-kreskowych/prezentacyjne', permanent: true },
      { source: '/kategoria/tablety-przemyslowe/:path*', destination: '/tablety-przemyslowe', permanent: true },
      { source: '/kategoria/oprogramowanie/:path*', destination: '/oprogramowanie', permanent: true },
      { source: '/kategoria/urzadzenia-fiskalne/:path*', destination: '/katalog', permanent: true },
      { source: '/kategoria/bez-kategorii/:path*', destination: '/katalog', permanent: true },

      // =====================================================
      // STRONY STATYCZNE — stara → nowa
      // =====================================================
      { source: '/sklep/:path*', destination: '/katalog', permanent: true },
      { source: '/blog', destination: '/poradnik', permanent: true },
      { source: '/koszyk/:path*', destination: '/zamowienie', permanent: true },
      { source: '/moje-konto/:path*', destination: '/kontakt', permanent: true },
      { source: '/polityka-prywatnosci-2/:path*', destination: '/polityka-prywatnosci', permanent: true },
      { source: '/platnosci-i-dostawa/:path*', destination: '/regulamin', permanent: true },
      { source: '/porownaj-produkty/:path*', destination: '/katalog', permanent: true },

      // =====================================================
      // PORADNIKI — zmiana slugów
      // =====================================================
      { source: '/poradnik/tasmy-termotransferowe-woskowe-woskowo-zywiczne-zywiczne', destination: '/poradnik/jak-dobrac-tasme-termotransferowa', permanent: true },
      { source: '/poradnik/zebra-onecare-kontrakt-serwisowy-co-daje-czy-warto', destination: '/poradnik/zebra-onecare-kontrakt-serwisowy', permanent: true },

      // =====================================================
      // BLOG → poradnik lub produkt
      // =====================================================
      { source: '/blog/nowosc-zebra-tc22-oraz-tc27/:path*', destination: '/produkt/zebra-tc22', permanent: true },
      { source: '/blog/zebra-mc9400/:path*', destination: '/produkt/zebra-mc9400', permanent: true },
      { source: '/blog/plany-serwisowe-zebra-onecare/:path*', destination: '/serwis', permanent: true },
      { source: '/blog/:path*', destination: '/poradnik', permanent: true },

      // =====================================================
      // BRANŻE — stara → nowa
      // =====================================================
      { source: '/branze/ecommerce/:path*', destination: '/drukarki-etykiet-e-commerce', permanent: true },
      { source: '/branze/produkcja/:path*', destination: '/drukarki-etykiet-produkcja', permanent: true },
      { source: '/branze/handel-kurierzy/:path*', destination: '/drukarki-etykiet-logistyka', permanent: true },
      { source: '/branze/sluzba-zdrowia/:path*', destination: '/drukarki-etykiet-apteka', permanent: true },
      { source: '/branze/:path*', destination: '/katalog', permanent: true },

      // =====================================================
      // CITIZEN — stare WordPress slugi → nowe
      // =====================================================
      { source: '/produkt/citizen-cl-e720-dt/:path*', destination: '/produkt/citizen-cl-e720dt', permanent: true },

      // =====================================================
      // ZEBRA TABLETY — stare WordPress URLe → nowe strony
      // (ET40/ET45 mają własne strony — nie potrzebują redirectu)
      // =====================================================
      { source: '/produkt/zebra-et60-2/:path*', destination: '/tablety-przemyslowe', permanent: true },
      { source: '/produkt/zebra-xslate-l10/:path*', destination: '/tablety-przemyslowe', permanent: true },

      // =====================================================
      // AHREFS AUDIT 01.04.2026 — 404 redirecty
      // =====================================================

      // Strony kategorii/producenta → istniejące odpowiedniki
      { source: '/m3-mobile', destination: '/terminale-mobilne', permanent: true },
      { source: '/datalogic', destination: '/terminale-datalogic', permanent: true },
      { source: '/citizen', destination: '/drukarki-etykiet-citizen', permanent: true },
      { source: '/brother', destination: '/drukarki-etykiet-brother', permanent: true },
      { source: '/etui-kabury-skanerow', destination: '/etui-kabury-uchwyty', permanent: true },
      { source: '/skanery-kodow', destination: '/skanery-kodow-kreskowych', permanent: true },
      { source: '/skanery-kodow-zebra', destination: '/skanery-kodow-kreskowych-zebra', permanent: true },
      { source: '/tasmy-wax', destination: '/tasmy-termotransferowe', permanent: true },
      { source: '/tasmy-wax-resin', destination: '/tasmy-termotransferowe', permanent: true },
      { source: '/tasmy-resin', destination: '/tasmy-termotransferowe', permanent: true },

      // =====================================================
      // ETYKIETY TERMOTRANSFEROWE — nowa struktura kategorii (2026-05)
      // Kanoniczny URL: /etykiety-termotransferowe-zebra (sprzedajemy tylko Zebra).
      // Stary URL /etykiety-termotransferowe + wszystkie podścieżki → -zebra.
      // Stare flat stuby /etykiety-termotransferowe-{papierowe,foliowe} → nowe zagnieżdżone.
      // Stare per-SKU produkty (zebra-tt-*, zebra-labels-*) → middleware.ts (OLD_TT_SLUG_REDIRECTS)
      // =====================================================
      { source: '/etykiety-termotransferowe', destination: '/etykiety-termotransferowe-zebra', permanent: true },
      { source: '/etykiety-termotransferowe/:path*', destination: '/etykiety-termotransferowe-zebra/:path*', permanent: true },
      { source: '/etykiety-termotransferowe-papierowe', destination: '/etykiety-termotransferowe-zebra/papierowe', permanent: true },
      { source: '/etykiety-termotransferowe-foliowe', destination: '/etykiety-termotransferowe-zebra/foliowe', permanent: true },

      // ETYKIETY TERMICZNE — ujednolicenie z -zebra (2026-06). Kanoniczny: /etykiety-termiczne-zebra.
      // Stary /etykiety-termiczne + podścieżki (/serie/[slug]) → -zebra.
      { source: '/etykiety-termiczne', destination: '/etykiety-termiczne-zebra', permanent: true },
      { source: '/etykiety-termiczne/:path*', destination: '/etykiety-termiczne-zebra/:path*', permanent: true },

      // Produkty 404 → konkretne następcy
      { source: '/produkt/zebra-ds8178', destination: '/produkt/zebra-ds8288', permanent: true },
      { source: '/produkt/zebra-zc350', destination: '/drukarki-kart', permanent: true },
      { source: '/produkt/zebra-module-wifi-zd421', destination: '/produkt/zebra-zd421t', permanent: true },
      { source: '/produkt/zebra-module-ethernet-zd421', destination: '/produkt/zebra-zd421t', permanent: true },
      { source: '/produkt/honeywell-xenon-ultra-1960g', destination: '/skanery-kodow-kreskowych', permanent: true },
      { source: '/produkt/zebra-futer%C3%A1l-zq610', destination: '/produkt-przeniesiony', permanent: true },
      { source: '/produkt/zebra-futera%C5%82-zq610', destination: '/produkt-przeniesiony', permanent: true },

      // Pliki PDF — redirect na poprawne nazwy
      { source: '/downloads/m3-sm24-specification.pdf', destination: '/downloads/m3-mobile-sm24-specification.pdf', permanent: true },

      // =====================================================
      // ETYKIETY TERMICZNE — stare per-rozmiar slugi → nowa seria z ?pn=
      // (refaktor 2026-05: 4 stare pojedyncze produkty → 292-wariantowa seria Z-Select 2000D)
      // =====================================================
      { source: '/produkt/zebra-etykiety-termiczne-z-select-2000d-32x25', destination: '/produkt/zebra-z-select-2000d?pn=800261-105', permanent: true },
      { source: '/produkt/zebra-etykiety-termiczne-z-select-2000d-57x32', destination: '/produkt/zebra-z-select-2000d?pn=800262-125', permanent: true },
      { source: '/produkt/zebra-etykiety-termiczne-z-select-2000d-76x51', destination: '/produkt/zebra-z-select-2000d?pn=800263-205', permanent: true },
      { source: '/produkt/zebra-etykiety-termiczne-z-select-2000d-102x38', destination: '/produkt/zebra-z-select-2000d?pn=800264-155', permanent: true },

      // =====================================================
      // CATCH-ALL: pozostałe stare produkty → strona przebudowa
      // Honeywell, Citizen, Brother, TSC, Unitech, M3, Custom,
      // Elo, Newland, Sewoo, Novimag + wszystkie akcesoria
      // =====================================================
      // (obsługiwane przez middleware — patrz src/middleware.ts)
    ]
  },
}

export default nextConfig
