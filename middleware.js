import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Ignore Next.js internals
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname === '/favicon.ico') {
    return NextResponse.next();
  }

  // If path has uppercase, redirect to lowercase
  if (pathname !== pathname.toLowerCase()) {
    const lowercaseUrl = url.clone();
    lowercaseUrl.pathname = pathname.toLowerCase();
    return NextResponse.redirect(lowercaseUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};
