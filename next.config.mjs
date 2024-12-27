import fs from 'fs';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    
    const appDir = path.join(process.cwd(), 'app');

    // Ensure the directory exists
    if (!fs.existsSync(appDir)) {
      console.warn(`The app directory (${appDir}) does not exist.`);
      return [];
    }

    // Function to recursively read all routes
    function getRoutes(dir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      let routes = [];

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          // Recursively process directories
          routes = routes.concat(getRoutes(fullPath));
        } else if (entry.isFile() && entry.name === 'layout.js') {
          // Get the relative path from the app directory
          const relativePath = path.relative(appDir, fullPath);
          const routePath = `/${path
            .dirname(relativePath)
            .replace(/\\/g, '/')}`;
          routes.push(routePath === '/index' ? '/' : routePath);
        }
      }
      return routes;
    }

    // Additional static redirects that contain traffic in old app
    const staticRedirects = [
      {
        source: '/car-rental-jaipur',
        destination: '/jaipur-cab-rental',
        permanent: true,
      },
      {
        source: '/private-day-tours-from-jaipur/:path*',
        destination: '/day-trips-from-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/citywise-taxi-fares/:path*',
        destination: '/rajasthan-taxi-service/:path*',
        permanent: true,
      },
      {
        source: '/citywise-taxi-fares/salasar-taxi-service',
        destination: '/rajasthan-taxi-service/salasar',
        permanent: true,
      },
      {
        source: '/taxi-service-rajasthan',
        destination: '/rajasthan-taxi-service',
        permanent: true,
      },
      {
        source: '/rajasthan-tours-by-car/:path*',
        destination: '/rajasthan-tour-by-cab/:path*',
        permanent: true,
      },
      {
        source: '/rajasthan-tour-by-car/:path*',
        destination: '/rajasthan-tour-by-cab/:path*',
        permanent: true,
      },
      {
        source: '/suv-car-rental-jaipur/:path*',
        destination: '/suv-cab-rental-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/suv-taxi-service/:path*',
        destination: '/suv-cab-rental-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/sedan-car-rental-jaipur/:path*',
        destination: '/sedan-cab-rental-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/sedan-taxi-service/:path*',
        destination: '/sedan-cab-rental-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/cheapest-car-rental-jaipur/:path*',
        destination: '/cheapest-cab-rental-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/hatchback-taxi-service/:path*',
        destination: '/cheapest-cab-rental-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/luxury-car-rental-jaipur/:path*',
        destination: '/luxury-cab-rental-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/luxury-taxi-service/:path*',
        destination: '/luxury-cab-rental-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/jaipur-outstation-use/:path*',
        destination: '/outstation-cab-from-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/bus-rental-service-in-jaipur/:path*',
        destination: '/bus-rental-service-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/bus-rental-service-in-jaipur/:path*',
        destination: '/bus-rental-service-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/one-way-car-rental-jaipur/:path*',
        destination: '/one-way-cab-rental-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/one-way-taxi/:path*',
        destination: '/one-way-cab-rental-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/jaipur-local-use/:path*',
        destination: '/jaipur-local-taxi-fare/:path*',
        permanent: true,
      },
      {
        source: '/tempo-traveller-rental-in-jaipur/:path*',
        destination: '/tempo-traveller-rental-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/luxury-bus-hire-service-in-jaipur/:path*',
        destination: '/luxury-bus-rental-jaipur/:path*',
        permanent: true,
      },
      {
        source: '/super-luxury-bus-rental-service/:path*',
        destination: '/luxury-bus-rental-jaipur/:path*',
        permanent: true,
      },
    ];

    // Get all routes from the app directory and build dynamic redirects for them.
    const appRoutes = getRoutes(appDir);
    // Dynamic redirects based on app routes that are built with .html
    const dynamicRedirects = appRoutes.map((route) => ({
      source: `${route}.html`,
      destination: route,
      permanent: true,
    }));

    // Combine dynamic and static redirects
    return [...dynamicRedirects, ...staticRedirects];
  },
};

export default nextConfig;
