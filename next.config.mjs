import fs from 'fs';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const appDir = path.join(process.cwd(), 'app'); // Adjust this if your app directory is elsewhere

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
          routes.push(routePath === '/index' ? '/' : routePath); // Normalize root route
        }
      }

      return routes;
    }

    const appRoutes = getRoutes(appDir);

    return appRoutes.map((route) => ({
      source: `${route}.html`,
      destination: route,
      permanent: true,
    }));
  },
  // exporting
  output: 'export',
};

export default nextConfig;
