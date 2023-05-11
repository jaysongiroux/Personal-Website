/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"google.com",
			"s.yimg.com",
			"github.com",
			"images.unsplash.com",
			"raw.githubusercontent.com",
			"assets.website-files.com",
		],
	},
};

module.exports = nextConfig;
