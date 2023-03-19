/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    OPENAI_API_KEY: "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",
    MONGODB_URI:
      "mongodb+srv://chaudharyroshan3030:kgwXxl8QJ3XBraWc@cluster0.m7osc2j.mongodb.net/?retryWrites=true&w=majority",
    CLOUDINARY_CLOUD_NAME: "deydgwesp",
    CLOUDINARY_CLOUD_API_KEY: "594674888167739",
    CLOUDINARY_CLOUD_API_SECRET: "9OWlXLONByE0LdXrhDz318sxvc0",
  },
};

module.exports = nextConfig;
