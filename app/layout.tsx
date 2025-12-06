import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheSelect.com - Curated Affiliate Deals",
  description:
    "Curated deals from Amazon, LEGO, and top retailers. Fast comparison grid and one-click affiliate links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

        className={`${libreBaskerville.variable} ${sourceSans3.variable} antialiased flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
