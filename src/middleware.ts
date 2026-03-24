import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const ADMIN_SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || ''
)

const CUSTOMER_SECRET = new TextEncoder().encode(
  process.env.CUSTOMER_JWT_SECRET || ''
)

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Set pathname header for root layout to detect admin/panel routes
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-next-pathname', pathname)

  // -------------------------------------------------------------------------
  // 301 Redirects — zmienione URLe
  // -------------------------------------------------------------------------
  const redirects: Record<string, string> = {
    '/poradnik/m3-mobile-sm24-sm25-porownanie': '/poradnik/m3-sm24-sm25-porownanie',
    '/produkt/m3-mobile-sm24': '/produkt/m3-sm24',
    '/produkt/m3-mobile-sm25': '/produkt/m3-sm25',
  }
  if (redirects[pathname]) {
    return NextResponse.redirect(new URL(redirects[pathname], request.url), 301)
  }

  // -------------------------------------------------------------------------
  // CATCH-ALL: Stare URLe WordPress → /produkt-przeniesiony
  // Produkty bez odpowiednika na nowej stronie (Honeywell, Citizen, Brother,
  // TSC, Unitech, M3, Custom, Elo, Newland, Sewoo, akcesoria itp.)
  // Redirecty 1:1 dla Zebra/Datalogic są w next.config.mjs
  // -------------------------------------------------------------------------
  if (pathname.startsWith('/produkt/')) {
    const slug = pathname.replace('/produkt/', '').replace(/\/$/, '')

    // Lista slugów istniejących na nowej stronie (nie przekierowuj ich!)
    const existingSlugs = new Set([
      // Drukarki biurkowe
      'zebra-zd220d', 'zebra-zd220t', 'zebra-zd230d', 'zebra-zd230t',
      'zebra-zd411d', 'zebra-zd411t', 'zebra-zd421d', 'zebra-zd421t',
      'zebra-zd510-hc', 'zebra-zd621d', 'zebra-zd621t',
      // Drukarki przemysłowe
      'zebra-zt111', 'zebra-zt231', 'zebra-zt411', 'zebra-zt421',
      'zebra-zt510', 'zebra-zt610', 'zebra-zt620',
      // Drukarki mobilne
      'zebra-zq210', 'zebra-zq220-plus', 'zebra-zq310-plus', 'zebra-zq320-plus',
      'zebra-zq511', 'zebra-zq521', 'zebra-zq610-plus', 'zebra-zq620-plus', 'zebra-zq630-plus',
      // Drukarki kart
      'zebra-zc100', 'zebra-zc300', 'zebra-zc350',
      // Terminale
      'zebra-mc2200', 'zebra-mc2700', 'zebra-mc3300x', 'zebra-mc3400', 'zebra-mc3450',
      'zebra-mc9400', 'zebra-mc9450', 'zebra-em45',
      'zebra-tc22', 'zebra-tc27', 'zebra-tc53', 'zebra-tc53e', 'zebra-tc58', 'zebra-tc58e',
      'zebra-tc501', 'zebra-tc701', 'zebra-tc73', 'zebra-tc78',
      'datalogic-memor-12', 'datalogic-memor-17', 'datalogic-memor-30', 'datalogic-memor-35',
      'datalogic-smartdock-memor-30', 'datalogic-charger-4slot-memor-30', 'datalogic-battery-memor-30',
      'datalogic-boot-memor-30', 'datalogic-pistolgrip-memor-30', 'datalogic-handstrap-memor-30', 'datalogic-screenprotector-memor-30',
      // Newland
      'newland-n7-cachalot-pro-ii', 'newland-mt93-megattera', 'newland-mt93-megattera-standard-plus',
      'newland-mt95-kambur-pro-ii',
      'newland-mcd95-1c', 'newland-mcd95-4b', 'newland-mpg95-01', 'newland-rb95-01',
      'newland-cdn7-c', 'newland-pgn7-02', 'newland-cdn7-4b', 'newland-tpun7pg', 'newland-spn7-hybrid',
      'newland-mcd9350-01', 'newland-mcd9350-4b', 'newland-pg93-01', 'newland-mrb9350',
      // Skanery Newland
      'newland-hr23-dorada', 'newland-hr33-marlin', 'newland-hr11-aringa', 'newland-hr15-wahoo',
      'newland-std23-33-sa', 'newland-std30i', 'newland-std20i', 'newland-nvh300', 'newland-std300',
      'newland-hr23-dorada-bt', 'newland-hr33-marlin-bt', 'newland-bty2333', 'newland-cd3233-4c',
      // Honeywell
      'honeywell-ct32',
      'honeywell-ct32-bateria-4500mah', 'honeywell-ct32-bateria-rozszerzona',
      'honeywell-ct32-stacja-dokujaca', 'honeywell-ct32-stacja-dokujaca-booted',
      'honeywell-ct32-ladowarka-4-gniazdowa', 'honeywell-ct32-ladowarka-4-gniazdowa-booted',
      'honeywell-ct32-obudowa-ochronna', 'honeywell-ct32-uchwyt-pistoletowy',
      'honeywell-ct32-folia-ochronna', 'honeywell-ct32-pasek-na-reke',
      'honeywell-ct32-pasek-na-nadgarstek', 'honeywell-ct32-ladowarka-baterii',
      'honeywell-ct47',
      'honeywell-ct47-obudowa-ochronna', 'honeywell-ct47-obudowa-ochronna-hivis',
      'honeywell-ct47-pasek-na-reke', 'honeywell-ct47-folia-ochronna',
      'honeywell-ct70',
      'honeywell-ct70-bateria-4775mah', 'honeywell-ct70-bateria-7692mah',
      'honeywell-ct70-stacja-dokujaca-display', 'honeywell-ct70-ladowarka-4-baterie',
      'honeywell-ct70-uchwyt-pistoletowy-booted', 'honeywell-ct70-uchwyt-pistoletowy',
      'honeywell-ck67', 'honeywell-ck62',
      'honeywell-ck67-bateria-7000mah', 'honeywell-ck67-obudowa-ochronna',
      'honeywell-ck67-uchwyt-pistoletowy', 'honeywell-ck67-stacja-ladowania-non-booted',
      'honeywell-ck67-stacja-ladowania-booted', 'honeywell-ck67-ladowarka-4-baterii',
      'honeywell-ck67-folia-ochronna', 'honeywell-ck67-kabura',
      'honeywell-ck67-charging-cup-booted', 'honeywell-ck67-charging-cup-nonbooted',
      'honeywell-ck67-bateria-cold-storage', 'honeywell-ck67-stacja-ladowania-4-gniazdowa',
      // CK62 + akcesoria
      'honeywell-ck62-uchwyt-pistoletowy', 'honeywell-ck62-stacja-ladowania-1-gniazdowa',
      'honeywell-ck62-stacja-ladowania-4-gniazdowa', 'honeywell-ck62-stacja-ladowania-5-z-bateriami',
      'honeywell-ck62-pasek-na-reke', 'honeywell-ck62-folia-ochronna',
      'honeywell-ck6x-ladowarka-4-baterii', 'honeywell-ck6x-ladowarka-16-baterii',
      // M3 Mobile
      'm3-sm24', 'm3-sm25', 'm3-sm30',
      'm3-sm30-stacja-dokujaca-1', 'm3-sm30-stacja-dokujaca-2',
      'm3-sm30-stacja-dokujaca-4', 'm3-sm30-stacja-dokujaca-8',
      'm3-sm30-ladowarka-4-baterii', 'm3-sm30-boot-ochronny',
      'm3-sm30-bateria-5000mah', 'm3-sm30-bateria-7000mah',
      'm3-sm30-uchwyt-pistoletowy', 'm3-sm30-folia-ochronna',
      'm3-sm30-zasilacz-usb-c', 'm3-sm30-zasilacz-2slot',
      'm3-sm30-zasilacz-4slot', 'm3-sm30-zasilacz-8slot',
      'm3-sm30-pasek-na-reke',
      'm3-sl20k',
      'm3-sl20k-stacja-dokujaca-1', 'm3-sl20k-stacja-dokujaca-2-usb',
      'm3-sl20k-stacja-dokujaca-2-ethernet',
      'm3-sl20k-stacja-dokujaca-8', 'm3-sl20k-stacja-dokujaca-8-ethernet',
      'm3-sl20k-boot-ochronny', 'm3-sl20k-bateria-5200mah',
      'm3-sl20k-uchwyt-pistoletowy', 'm3-sl20k-folia-ochronna',
      'm3-sl20k-zasilacz-usb-c', 'm3-sl20k-zasilacz-2slot',
      'm3-sl20k-pasek-na-reke',
      'm3-sl20',
      'm3-sl20-stacja-dokujaca-1', 'm3-sl20-stacja-dokujaca-2-usb',
      'm3-sl20-stacja-dokujaca-2-ethernet',
      'm3-sl20-stacja-dokujaca-8', 'm3-sl20-stacja-dokujaca-8-ethernet',
      'm3-sl20-boot-ochronny', 'm3-sl20-bateria-5000mah',
      'm3-sl20-uchwyt-pistoletowy', 'm3-sl20-folia-ochronna',
      'm3-sl20-zasilacz-usb-c', 'm3-sl20-zasilacz-2slot',
      'm3-sl20-zasilacz-8slot', 'm3-sl20-pasek-na-reke',
      'm3-sl20-speed-care-3-lata', 'm3-sl20-speed-care-5-lat',
      // RFID — usunięte
      // Drukarki Honeywell + akcesoria
      'honeywell-pc45d', 'honeywell-pc45t',
      'honeywell-glowica-203dpi-pc45', 'honeywell-glowica-300dpi-pc45',
      'honeywell-walek-dociskowy-pc45d', 'honeywell-odklejak-pc45d', 'honeywell-gilotyna-pc45d',
      'honeywell-walek-dociskowy-pc45t', 'honeywell-odklejak-pc45t', 'honeywell-gilotyna-pc45t',
      'honeywell-pc42e-t',
      // TSC
      'tsc-ml241p',
      'tsc-glowica-ml241p-203dpi', 'tsc-glowica-ml341p-300dpi',
      'tsc-gilotyna-ml241p', 'tsc-odklejak-ml241p', 'tsc-modul-wifi-bluetooth',
      // Brother
      'brother-td-4d', 'brother-td-2020a', 'brother-td-4t',
      'brother-td4d-cutter', 'brother-td4d-peeler',
      'brother-td4d-printhead-203', 'brother-td4d-printhead-300',
      'brother-td4d-platen-203', 'brother-td4d-platen-300',
      'brother-td4t-obcinarka', 'brother-td4t-odklejak',
      'honeywell-glowica-203dpi-pc42e-t', 'honeywell-glowica-300dpi-pc42e-t',
      'honeywell-walek-dociskowy-pc42e-t', 'honeywell-odklejak-pc42e-t', 'honeywell-gilotyna-pc42e-t',
      'honeywell-pd45', 'honeywell-pd45s', 'honeywell-pm45',
      'honeywell-pm45-glowica-203dpi', 'honeywell-pm45-glowica-300dpi',
      'honeywell-pm45-glowica-406dpi', 'honeywell-pm45-glowica-600dpi',
      'honeywell-pm45-walek-dociskowy', 'honeywell-pm45-odklejak', 'honeywell-pm45-nawijak',
      'honeywell-pm45-gilotyna', 'honeywell-pm45-modul-rfid',
      'honeywell-pm45-prowadnica-mediow', 'honeywell-pm45-skladany-rdzen',
      'honeywell-pm45-adapter-rdzeni', 'honeywell-pm45-modul-wifi-bt',
      'honeywell-pm45-interfejs-aplikatora', 'honeywell-pm45-interfejs-przemyslowy',
      'honeywell-pm45c-odklejak-kit', 'honeywell-pm45c-mega-door-kit',
      'honeywell-pm65',
      'honeywell-pm65-glowica-203dpi', 'honeywell-pm65-glowica-300dpi',
      'honeywell-pm65-walek-dociskowy', 'honeywell-pm65-skladany-rdzen',
      'honeywell-pm65-gilotyna', 'honeywell-pm65-odklejak',
      'honeywell-pm65-nawijak', 'honeywell-pm65-modul-wifi',
      'honeywell-px45', 'honeywell-px65', 'honeywell-px940',
      'honeywell-px940-glowica-203dpi', 'honeywell-px940-glowica-300dpi',
      'honeywell-px940-walek-dociskowy', 'honeywell-px940-karta-kalibracyjna',
      'honeywell-px940-interfejs-rownolegl', 'honeywell-px940-interfejs-przemyslowy',
      'honeywell-px940-interfejs-aplikatora', 'honeywell-px940-modul-wifi',
      // Drukarki mobilne Honeywell + akcesoria
      'honeywell-rp2f', 'honeywell-rp4f', 'honeywell-lnx3',
      'honeywell-rpf-bateria-2500mah', 'honeywell-rpf-etui-ochronne',
      'honeywell-rpf-battery-eliminator', 'honeywell-rpf-zasilacz-ac-eu',
      'honeywell-rpf-klips-do-paska', 'honeywell-rpf-kabel-zapalniczka',
      'honeywell-rp4f-bateria-4900mah', 'honeywell-rp4f-etui-ochronne', 'honeywell-rp4f-battery-eliminator',
      // Skanery
      'zebra-ds2208', 'zebra-ds4608', 'zebra-ds8208', 'zebra-ds8178', 'zebra-li2208',
      'zebra-ds3608-xr', 'zebra-ds3608-sr', 'zebra-ds3608-hd', 'zebra-ds3608-hp',
      'zebra-li3608-sr', 'zebra-li3608-er', 'zebra-ds3678-sr', 'zebra-ds3678-xr', 'zebra-ds3678-hd', 'zebra-ds3678-hp', 'zebra-ds2278', 'zebra-ds8288', 'zebra-ds4678', 'zebra-ds4678-dpe', 'zebra-ds9908', 'zebra-ds9308',
      // Tablety
      'zebra-et401', 'zebra-et40', 'zebra-et45', 'zebra-et60', 'zebra-et65', 'zebra-et60w', 'zebra-et65w',
      'honeywell-eda10a',
      'honeywell-eda10a-bateria', 'honeywell-eda10a-etui', 'honeywell-eda10a-pasek-na-reke',
      'honeywell-eda10a-stacja-ladujaca', 'honeywell-eda10a-ladowarka-baterii', 'honeywell-eda10a-folia-ochronna',
      'honeywell-rt10a',
      'honeywell-rt10a-bateria-standardowa', 'honeywell-rt10a-bateria-rozszerzona',
      'honeywell-rt10a-ladowarka-baterii', 'honeywell-rt10a-hand-strap', 'honeywell-rt10a-folia-ochronna', 'honeywell-rt10a-zasilacz',
      'honeywell-rt10w',
      // Oprogramowanie
      'zebra-cardstudio',
    ])

    // Jeśli slug NIE istnieje na nowej stronie → redirect do strony przebudowy
    // Slugi zebra-* / datalogic-* to produkty lub akcesoria na nowej stronie
    // (stare WordPress URLe Zebra obsługiwane są redirectami w next.config.mjs PRZED middleware)
    if (!existingSlugs.has(slug)) {
      const isNewSiteProduct = slug.startsWith('zebra-') || slug.startsWith('datalogic-') || slug.startsWith('newland-') || slug.startsWith('honeywell-') || slug.startsWith('brother-') || slug.startsWith('tsc-') || slug.startsWith('citizen-')

      if (!isNewSiteProduct) {
        return NextResponse.redirect(new URL('/produkt-przeniesiony', request.url), 301)
      }
    }
  }

  // Stare WordPress kategorie catch-all (te bez dopasowania w next.config.mjs)
  if (pathname.startsWith('/kategoria/') && !pathname.startsWith('/kategoria/drukarki-etykiet') &&
      !pathname.startsWith('/kategoria/terminale-mobilne') && !pathname.startsWith('/kategoria/materialy') &&
      !pathname.startsWith('/kategoria/akcesoria') && !pathname.startsWith('/kategoria/skanery') &&
      !pathname.startsWith('/kategoria/tablety') && !pathname.startsWith('/kategoria/oprogramowanie') &&
      !pathname.startsWith('/kategoria/urzadzenia') && !pathname.startsWith('/kategoria/bez-kategorii')) {
    return NextResponse.redirect(new URL('/produkt-przeniesiony', request.url), 301)
  }

  // -------------------------------------------------------------------------
  // Customer panel routes (/panel/*)
  // -------------------------------------------------------------------------
  if (pathname.startsWith('/panel')) {
    // Public pages — login & registration
    if (pathname === '/panel/login' || pathname === '/panel/rejestracja') {
      // If already logged in, redirect to dashboard
      const customerToken = request.cookies.get('customer-session')?.value
      if (customerToken) {
        try {
          await jwtVerify(customerToken, CUSTOMER_SECRET)
          return NextResponse.redirect(new URL('/panel', request.url))
        } catch {
          // Invalid token — let them access login/register, clean up cookie
          const response = NextResponse.next({ request: { headers: requestHeaders } })
          response.cookies.delete('customer-session')
          return response
        }
      }
      return NextResponse.next({ request: { headers: requestHeaders } })
    }

    // Protected panel routes — check customer JWT
    const customerToken = request.cookies.get('customer-session')?.value

    if (!customerToken) {
      return NextResponse.redirect(new URL('/panel/login', request.url))
    }

    try {
      await jwtVerify(customerToken, CUSTOMER_SECRET)
      return NextResponse.next({ request: { headers: requestHeaders } })
    } catch {
      const response = NextResponse.redirect(new URL('/panel/login', request.url))
      response.cookies.delete('customer-session')
      return response
    }
  }

  // -------------------------------------------------------------------------
  // Admin routes (/admin/*) — existing logic preserved
  // -------------------------------------------------------------------------
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  // Admin login page — no auth required
  if (pathname === '/admin/login') {
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  // Protected admin routes — check JWT
  const token = request.cookies.get('admin-session')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  try {
    await jwtVerify(token, ADMIN_SECRET)
    return NextResponse.next({ request: { headers: requestHeaders } })
  } catch {
    const response = NextResponse.redirect(new URL('/admin/login', request.url))
    response.cookies.delete('admin-session')
    return response
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon|images|api/).*)'],
}
