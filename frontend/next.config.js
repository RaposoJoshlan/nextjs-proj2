/** @type {import('next').NextConfig} */
export const reactStrictMode = true;
export const env = {
	API_URL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337"
};
export const images = {
	domains: ["res.cloudinary", "res.cloudinary.com"]
};
