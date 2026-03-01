// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
//     env: {
//         TEMPLATE_ID : process.env.TEMPLATE_ID,
//         SERVICE_ID : process.env.SERVICE_ID,
//         PUBLIC_KEY : process.env.PUBLIC_KEY,
//     },
// }

// module.exports = nextConfig



/** @type {import('next').NextConfig} */
const nextConfig = {
  // remove static export and basePath when deploying to Vercel
  reactStrictMode: true,
  images: {
    // You can configure remotePatterns or other options as needed
  },
  env: {
    // expose only the variables your app actually needs
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    SERVICE_ID: process.env.SERVICE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
  },
};

module.exports = nextConfig;
