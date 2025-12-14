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
  title: "South Korea Travel Deals & Trip Ideas | The Select",
  description:
    "Discover the best South Korea travel deals and unique itinerary ideas. From Seoul city tours to Jeju Island getaways, plan your perfect Korean vacation today.",
    openGraph: {
    title: 'South Korea Travel Deals & Itinerary Ideas',
    description: 'Discover the best South Korea travel deals and unique itinerary ideas. From Seoul city tours to Jeju Island getaways, plan your perfect Korean vacation today.',
    type: 'website',
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

        className={`${libreBaskerville.variable} ${sourceSans3.variable} antialiased flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
