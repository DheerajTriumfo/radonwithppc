// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  // --- Rule 1: Force lowercase URLs ---
  const lowerPath = url.pathname.toLowerCase();
  if (url.pathname !== lowerPath) {
    url.pathname = lowerPath;
    return NextResponse.redirect(url, 301);
  }

  // --- Rule 2: /addproduct redirect with query ---
  if (url.pathname === '/addproduct') {
    const id = url.searchParams.get('id');

    if (id) {
      url.pathname = '/';  // Redirect to homepage
      url.searchParams.set('id', id);  // Keep ?id= param
      return NextResponse.redirect(url, 301);
    }
  }

  return NextResponse.next();
}
