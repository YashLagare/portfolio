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
  output: "export",
  basePath: "/yash-lagare-portfolio",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
