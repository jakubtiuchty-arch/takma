import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const ADMIN_SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || 'takma-admin-secret-change-in-production-2026'
)

const CUSTOMER_SECRET = new TextEncoder().encode(
  process.env.CUSTOMER_JWT_SECRET || 'takma-customer-secret-2026'
)

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Set pathname header for root layout to detect admin/panel routes
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-next-pathname', pathname)

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
      'datalogic-memor-11', 'datalogic-memor-12', 'datalogic-memor-17',
      'datalogic-memor-30', 'datalogic-memor-35', 'datalogic-skorpio-x5', 'datalogic-memor-k',
      // Newland
      'newland-n7-cachalot-pro-ii', 'newland-mt93-megattera',
      'newland-cdn7-c', 'newland-pgn7-02', 'newland-cdn7-4b', 'newland-tpun7pg', 'newland-spn7-hybrid',
      // RFID — usunięte
      // Skanery
      'zebra-ds2208', 'zebra-ds4608', 'zebra-ds8208', 'zebra-ds8178', 'zebra-li2208',
      'zebra-ds3608-xr', 'zebra-ds3608-sr', 'zebra-ds3608-hd', 'zebra-ds3608-hp',
      'zebra-li3608-sr', 'zebra-li3608-er', 'zebra-ds3678-sr', 'zebra-ds3678-xr', 'zebra-ds3678-hd', 'zebra-ds3678-hp', 'zebra-ds2278', 'zebra-ds8288', 'zebra-ds4678', 'zebra-ds4678-dpe', 'zebra-ds9908', 'zebra-ds9308',
      // Tablety
      'zebra-et401', 'zebra-et40', 'zebra-et45', 'zebra-et60', 'zebra-et65', 'zebra-et60w', 'zebra-et65w',
      // Oprogramowanie
      'zebra-cardstudio',
    ])

    // Jeśli slug NIE istnieje na nowej stronie → redirect do strony przebudowy
    // Slugi zebra-* / datalogic-* to produkty lub akcesoria na nowej stronie
    // (stare WordPress URLe Zebra obsługiwane są redirectami w next.config.mjs PRZED middleware)
    if (!existingSlugs.has(slug)) {
      const isNewSiteProduct = slug.startsWith('zebra-') || slug.startsWith('datalogic-') || slug.startsWith('newland-')

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
