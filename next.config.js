/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['./src'],
        prependData: `@import "@/pages/styles/globals/variables.scss";`,
    },
    experimental: {
        optimizeFonts: true,
    },
}

module.exports = nextConfig
