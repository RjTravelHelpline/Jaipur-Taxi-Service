module.exports = {
  siteUrl: 'https://jaipur-taxi-service-01.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/api/*', '/admin/*'],
  additionalSitemaps: [
    'https://jaipur-taxi-service-01.vercel.app/sitemap.xml', // Your main sitemap
  ],
  transform: async (config, path) => {
    // Ensure the homepage is included
    if (path === '/') {
      return {
        loc: 'https://jaipur-taxi-service-01.vercel.app', // Full URL for the homepage
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 1.0,
      };
    }

    return {
      loc: `https://jaipur-taxi-service-01.vercel.app${path}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    };
  },
  generateIndexSitemap: false,

  // custom robots
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/*', '/admin/*'], // Exclude API and admin routes
      },
    ],
  },
};
