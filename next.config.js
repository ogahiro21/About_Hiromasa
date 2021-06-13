module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'deny',
          },
        ],
      },
    ];
  },
  future: {
    webpack5: true,
  },
};
