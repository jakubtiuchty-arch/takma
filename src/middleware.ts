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
