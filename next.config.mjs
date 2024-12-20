/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const htmlPages = [
      'index',
      'about-us',
      'why-choose-us',
      'contact-us',
      'dos-&-donts',
      'disclaimer',
      'guest-feedback',
      'privacy-policy',
      'terms-and-conditions',
      'rajasthan-tour-packages',
    ];

    return htmlPages.map((page) => ({
      source: `/${page}.html`,
      destination: page === 'index' ? '/' : `/${page}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
