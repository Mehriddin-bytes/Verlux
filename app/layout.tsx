import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FirstVisitLoader from "@/components/PageLoader";
import ImageProtection from "@/components/ImageProtection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verlux - Building Your Dreams, One Brick at a Time",
  description: "Expert construction services with unmatched quality and dedication. Balcony restoration, masonry restoration, roofing, painting, and more.",
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
        <ImageProtection />
        <FirstVisitLoader>
          <Navbar />
          {children}
          <Footer />
        </FirstVisitLoader>
      </body>
    </html>
  );
}
