"use client";

import "@/assets/globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noFooterPaths = ["/", "/login", "/register"];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
          {!noFooterPaths.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
