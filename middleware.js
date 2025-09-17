// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // 1. Force lowercase paths
  if (/[A-Z]/.test(pathname)) {
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 301); // permanent redirect
  }

  // 2. Existing addproduct redirect
  if (url.pathname === '/addproduct') {
    const id = url.searchParams.get('id');
    if (id) {
      url.pathname = '/';
      url.searchParams.set('id', id);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// ✅ Ensure middleware applies to all routes
export const config = {
  matcher: '/:path*',
};
