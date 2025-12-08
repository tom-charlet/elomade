import { NextResponse } from 'next/server'
import crypto from 'crypto'

export function proxy(request) {
    // Exculsion de routes
    const path = request.nextUrl.pathname
    if (
        path.startsWith('/api') ||
        path.startsWith('/_next/static') ||
        path.startsWith('/_next/image') ||
        path === '/favicon.ico'
    ) {
        return NextResponse.next()
    }

    // Génération du nonce
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

    // Content Security Policy
    const cspHeader = `
    default-src 'self' *.typekit.net www.youtube.com fonts.googleapis.com vercel.live;
    script-src 'self' 'nonce-${nonce}' *.gstatic.com https://vercel.live;
    style-src 'self' 'unsafe-inline' *.typekit.net fonts.googleapis.com;
    img-src 'self' blob: data: purecatamphetamine.github.io;
    connect-src 'self' fonts.googleapis.com googletagmanager.com;
    font-src 'self' *.typekit.net data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    `

    const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim()

    // Ajout des headers à la requête
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-nonce', nonce)
    requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)

    // Création de la réponse
    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })
    response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)

    // Retourner la réponse (uniquement en production ou toujours si besoin)
    if (process.env.NODE_ENV === 'production') {
        return response
    }

    return NextResponse.next()
}