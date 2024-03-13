import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClient from "./components/layoutClient/LayoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Juzt Drom",
	description: "Test application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<LayoutClient>{children}</LayoutClient>
			</body>
		</html>
	);
}
