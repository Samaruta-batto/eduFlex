'use client';

import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { ParallaxProvider } from 'react-scroll-parallax';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isLandingPage = pathname === '/';

  return (
    <html lang="en">
      <head>
        <title>EduFlex - Modern School Management</title>
        <meta name="description" content="A modern, flexible school management system designed to streamline administrative tasks and enhance communication between educators, students, and parents." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isLandingPage ? <ParallaxProvider>{children}</ParallaxProvider> : <Layout>{children}</Layout>}
      </body>
    </html>
  );
}
