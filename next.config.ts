import type { NextConfig } from "next";

module.exports = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};
const nextConfig: NextConfig = {
	/* config options here */
	ignoreDuringBuilds: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/sightek/**",
				search: "",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/dzzxgsrbl/**",
				search: "",
			},
		],
	},
};

export default nextConfig;
