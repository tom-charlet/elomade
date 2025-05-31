import { NextResponse } from 'next/server'

export function middleware(request) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
    const cspHeader = `
    default-src 'self' *.typekit.net www.youtube.com fonts.googleapis.com;
    script-src 'self' 'nonce-${nonce}' *.gstatic.com;
    style-src 'self' 'nonce-${nonce}' 'unsafe-hashes' *.typekit.net fonts.googleapis.com;
    img-src 'self' blob: data: purecatamphetamine.github.io;
    connect-src 'self' fonts.googleapis.com googletagmanager.com;
    font-src 'self' *.typekit.net;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`
    // Replace newline characters and spaces
    const contentSecurityPolicyHeaderValue = cspHeader
        .replace(/\s{2,}/g, ' ')
        .trim()

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-nonce', nonce)
    requestHeaders.set(
        'Content-Security-Policy',
        contentSecurityPolicyHeaderValue
    )

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })
    response.headers.set(
        'Content-Security-Policy',
        contentSecurityPolicyHeaderValue
    )

    if (process.env.NODE_ENV === "production")
        return response
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
    ],
}