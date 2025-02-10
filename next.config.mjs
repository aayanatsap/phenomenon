/** @type {import('next').NextConfig} */
const nextConfig = {
    // // when testing through yarn dev, comment the whole thing till webpack
    // output: "export",
    // images: { unoptimized: true },
    // trailingSlash: true,
    // basePath: process.env.NODE_ENV === "production" ? "/phenomenon" : "",
  
    // // //uncomment this when not testing export
    // // assetPrefix:
    // //   process.env.NODE_ENV === "production"
    // //     ? "http://127.0.0.1:5500/phenomenon/"
    // //     : "http://127.0.0.1:5500/",
  
    // //uncomment this when exporting file for integro
    // assetPrefix:
    //   process.env.NODE_ENV === "production"
    //     ? "https://sjbhs.edu.in/phenomenon"
    //     : "https://sjbhs.edu.in/",
  
    // distDir: "export/phenomenon",
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;