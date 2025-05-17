import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CustomQueryClientProviders from "./providers/query-client.provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Deko Studio",
	description: "Create your own decoration",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	metadataBase: new URL("https://deko.studio"),
	openGraph: {
		title: "Deko Studio",
		description: "Create your own decoration",
		url: "https://deko.studio",
		siteName: "Deko Studio",
		images: [
			{
				url: "https://deko.studio/og.png",
				width: 1200,
				height: 630,
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<CustomQueryClientProviders>
					<Header />
					{children}
				</CustomQueryClientProviders>
				<Toaster />
				<Footer />
			</body>
		</html>
	);
}
