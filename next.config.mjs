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
        ],
      },
    ]
  },
  async redirects() {
    return [
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
      { source: '/produkt/zebra-ds3678:path*', destination: '/produkt/zebra-ds3608-xr', permanent: true },
      // LI3608-SR ma własną stronę → redirect usunięty
      { source: '/produkt/zebra-li3608-er:path*', destination: '/produkt/zebra-li3608-sr', permanent: true },
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
      { source: '/kategoria/tablety-przemyslowe/:path*', destination: '/terminale-mobilne', permanent: true },
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
      // ZEBRA TABLETY — brak na nowej stronie → kategoria
      // =====================================================
      { source: '/produkt/zebra-et40/:path*', destination: '/terminale-mobilne', permanent: true },
      { source: '/produkt/zebra-et45/:path*', destination: '/terminale-mobilne', permanent: true },
      { source: '/produkt/zebra-et60-2/:path*', destination: '/terminale-mobilne', permanent: true },
      { source: '/produkt/zebra-xslate-l10/:path*', destination: '/terminale-mobilne', permanent: true },

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
