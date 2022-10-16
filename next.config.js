/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  
  images: {
    domains: ['api.elearning.alpha.logidots.com','e-learning-test.s3.ap-south-1.amazonaws.com','cdn4.vectorstock.com'],
    
  },
  
}