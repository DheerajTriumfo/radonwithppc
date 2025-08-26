module.exports = {
  images: {
    domains: ['radonexhibition.com', 'radonllcapi.mobel.us'], // Add this line
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/(.*)', // apply to all routes
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};