import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title:
    "Erik industrial & Construction Rentals - Industrial & Construction Equipment Rentals & Tools",
  description:
    "Erik industrial & Construction Rentals provides 3300+ equipment and tool classes for industrial &amp; construction sites across the United States and Canada. Rent heavy equipment now.",
  metadataBase: new URL("https://erikindustrialrentals.com"),
  openGraph: {
    title: "Erik Industrial Rentals",
    description:
      "Affordable industrial and construction equipment rentals for businesses and contractors.",
    url: "https://erikindustrialrentals.com",
    siteName: "Erik Industrial Rentals",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erik Industrial Rentals",
    description: "Affordable industrial and construction equipment rentals",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
