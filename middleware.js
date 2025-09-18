import { NextResponse } from 'next/server';

console.log("Middleware file loaded");

export function middleware(request) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  console.log(`Middleware processing: ${pathname}`);

  // Skip Next.js internals and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    //console.log(`Skipping: ${pathname}`);
    return NextResponse.next();
  }

  // Force lowercase for the last slug only
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  //console.log(`Path segments: ${JSON.stringify(pathSegments)}`);
  
  if (pathSegments.length > 0) {
    const lastSegment = pathSegments[pathSegments.length - 1];
    //console.log(`Last segment: ${lastSegment}`);
    
    // Check if the last segment contains uppercase letters
    if (/[A-Z]/.test(lastSegment)) {
      const newLastSegment = lastSegment.toLowerCase();
      //console.log(`Converting ${lastSegment} to ${newLastSegment}`);
      
      // Convert only the last segment to lowercase
      pathSegments[pathSegments.length - 1] = newLastSegment;
      
      // Reconstruct the pathname with trailing slash if original had one
      const hasTrailingSlash = pathname.endsWith('/');
      url.pathname = '/' + pathSegments.join('/') + (hasTrailingSlash ? '/' : '');
      
      //console.log(`Redirecting from: ${pathname} to: ${url.pathname}`);
      return NextResponse.redirect(url, 301);
    }

  }

  //console.log(`No redirect needed for: ${pathname}`);
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',

};
