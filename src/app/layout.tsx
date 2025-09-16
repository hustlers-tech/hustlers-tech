import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ['latin'],      // required
  weight: ['400', '700'],  // pick the weights you want
  variable: '--font-montserrat', // optional, for Tailwind
  display: 'swap',         // better rendering
})

export const metadata: Metadata = {
  title: "Hustlers Tech",
  description: "We Hustle, You Settle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
