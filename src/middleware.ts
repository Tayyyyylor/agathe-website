import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const isProduction = process.env.NODE_ENV === 'production'
    const maintenanceMode = process.env.MAINTENANCE_MODE === 'true'

    const url = req.nextUrl.clone()

    if (
        isProduction &&
        maintenanceMode &&
        !url.pathname.startsWith('/maintenance') &&
        !url.pathname.startsWith('/_next') &&
        !url.pathname.startsWith('/_vercel') &&
        !/.*\..*$/.test(url.pathname)
    ) {
        url.pathname = '/maintenance'
        return NextResponse.redirect(url)
    }
}

export const config = {
    matcher: ['/((?!maintenance|_next|_vercel|.*\\..*).*)'],
}
