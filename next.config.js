module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['radonexhibition.com', 'radonllcapi.mobel.us'], // external images allowed
  },
  trailingSlash: true, // force URLs with trailing slash

  async headers() {
    return [
      // ✅ Cache static assets aggressively (1 year, immutable)
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|ico|css|js|woff2|ttf|eot|otf)', 
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // ✅ Security headers (apply to all routes/pages)
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      // ✅ Update MIME types for font files (simplified)
      {
        source: '/:all*(woff|woff2|ttf|eot|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/trade-show-booth-rental/',       // The old URL path
        destination: '/',  // The new URL path
        permanent: true,           // This makes it a 301 redirect
      },
      {
        source: '/10x10-trade-show-booth-designs/',
        destination: '/10x10-trade-show-booth/',
        permanent: true,
      },
      {
        source: '/10x20-trade-show-booth-designs/',
        destination: '/10x20-trade-show-booth/',
        permanent: true,
      },
      {
        source: '/10x30-trade-show-booth-designs/',
        destination: '/10x30-trade-show-booth/',
        permanent: true,
      },
      {
        source: '/20x20-trade-show-booth-designs/',
        destination: '/20x20-trade-show-booth/',
        permanent: true,
      },
      {
        source: '/20x40-trade-show-booth-designs/',
        destination: '/20x20-trade-show-booth/',
        permanent: true,
      },
      {
        source: '/30x40-trade-show-booth-designs/',
        destination: '/30x40-trade-show-booth/',
        permanent: true,
      },
      {
        source: '/40x40-trade-show-booth-designs/',
        destination: '/40x40-trade-show-booth/',
        permanent: true,
      },
      {
        source: '/trade-show-display-rentals-las-vegas/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/custom-trade-show-displays/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/top-trade-shows/aim-expo/',
        destination: '/top-trade-shows/aimexpo/',
        permanent: true,
      },
      {
        source: '/top-trade-shows/washington-dc-travel-and-adventure-ahow/',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
