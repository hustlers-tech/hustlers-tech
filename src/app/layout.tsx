import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/layout/footer";
import WhatsappSticky from "./components/WhatsappSticky";
import Chatbot from "./components/Chatbot";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Delhi - HustlersTech",
  description: "Boost your brand with HustlersTech, a leading digital marketing agency in Delhi. Expert SEO, social media, and PPC services to grow your business online fast.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-[#0b0f14] text-white`}>
        {/* <WhatsappSticky/> */}
        <Chatbot/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
