import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevDotCom - Coming Soon',
  description: 'Join the DevDotCom - A platform for developers to learn, grow, and connect. Coming soon!',
  keywords: ['developer community', 'coding', 'programming', 'tech community', 'DevDotCom', 'DevDot Community', 'DDC'],
  authors: [{ name: 'DevDotCom' }],
  creator: 'DevDotCom',
  publisher: 'DevDotCom',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devdotcom.in',
    siteName: 'DevDotCom',
    title: 'DevDotCom - Coming Soon',
    description: 'Join the DevDotCom - A platform for developers to learn, grow, and connect. Coming soon!',
    images: [
      {
        url: '/og-image.jpeg', 
        width: 1200,
        height: 630,
        alt: 'DevDotCom',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevDotCom - Coming Soon',
    description: 'Join the DevDotCom - A platform for developers to learn, grow, and connect. Coming soon!',
    creator: '@DevDotCommunity',
    images: ['/og-image-1.jpeg'],
  },
  manifest: '/site.webmanifest',
}


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


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
        {children}
      </body>
    </html>
  );
}
