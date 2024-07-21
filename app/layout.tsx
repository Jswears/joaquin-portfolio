import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',

})

export const metadata: Metadata = {
  title: "Joaquin Swears",
  description: "AWS Solutions Architect Associate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} font-ibmPlexMono`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
