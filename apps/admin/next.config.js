module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui-components", "yup", "react-hook-form", "resolvers"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });

    return config;
  },
  images: {
    domains: [
      "qr-menu-public.s3.eu-central-1.amazonaws.com",
      "static.cdn-upm.com",
    ],
  },
};
