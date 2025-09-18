import { NextResponse } from 'next/server';

export function middleware(req) { 
  return false;
  const url = req.nextUrl.clone();
  const pathname = url.pathname;
  console.log(pathname);

  if (/[A-Z]/.test(pathname)) {
    url.pathname = pathname.toLowerCase();
    console.log(url.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
