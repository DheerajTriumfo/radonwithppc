import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname, searchParams } = new URL(req.url);

  // Check if the path is '/addproduct'
  if (pathname === '/addproduct') {
    const id = searchParams.get('id');  // Get the 'id' query param

    // If the 'id' parameter exists, redirect to the homepage with the same 'id' parameter
    if (id) {
      return NextResponse.redirect(`${req.nextUrl.origin}/?id=${id}`, 301);
    }
  }

  // Otherwise, just continue with the normal request
  return NextResponse.next();
}
