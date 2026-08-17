// import type { Metadata } from "next";
// import { Montserrat } from 'next/font/google'
// import Script from "next/script";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/layout/footer";
// import WhatsappSticky from "./components/WhatsappSticky";
// import Chatbot from "./components/Chatbot";

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-montserrat',
//   display: 'swap',
// })

// const isDev = process.env.SITE_TYPE === "dev";

// export const metadata: Metadata = {
//   title: "Digital Marketing Agency in Delhi - HustlersTech",
//   description: "Boost your brand with HustlersTech, a leading digital marketing agency in Delhi. Expert SEO, social media, and PPC services to grow your business online fast.",
//   robots: {
//     index: !isDev,
//     follow: !isDev,
//   },
//   // Google Search Console verification
//   verification: !isDev ? {
//     google: "1f51yhU4sYzOwNcVGRYV3k2laGl9_5Rtipj2whHp5LQ",
//   } : undefined,
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google Analytics & Tag Manager Script */}
//         {!isDev && (
//           <>
//             <Script
//               src="https://www.googletagmanager.com/gtag/js?id=G-VVT9JX6LJB"
//               strategy="afterInteractive"
//             />
//             <Script id="google-analytics" strategy="afterInteractive">
//               {`
//                 window.dataLayer = window.dataLayer || [];
//                 function gtag(){dataLayer.push(arguments);}
//                 gtag('js', new Date());
//                 gtag('config', 'G-VVT9JX6LJB');
//               `}
//             </Script>
//           </>
//         )}
//       </head>
//       <body className={`${montserrat.variable} antialiased bg-[#0b0f14] text-white`}>
//         {/* <WhatsappSticky/> */}
//         <Chatbot/>
//         <Navbar/>
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import Script from "next/script";
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

const isDev = process.env.SITE_TYPE === "dev";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Delhi - HustlersTech",
  description: "Boost your brand with HustlersTech, a leading digital marketing agency in Delhi. Expert SEO, social media, and PPC services to grow your business online fast.",
  robots: {
    index: !isDev,
    follow: !isDev,
  },
  // Google Search Console verification
  verification: !isDev ? {
    google: "1f51yhU4sYzOwNcVGRYV3k2laGl9_5Rtipj2whHp5LQ",
  } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager & Analytics */}
        {!isDev && (
          <>
            {/* Google Tag Manager Script */}
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WKZQVN83');
              `}
            </Script>

            {/* Google Analytics Script */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-VVT9JX6LJB"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-VVT9JX6LJB');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${montserrat.variable} antialiased bg-[#0b0f14] text-white`}>
        {/* Google Tag Manager (noscript) */}
        {!isDev && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WKZQVN83"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {/* <WhatsappSticky/> */}
        <Chatbot/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}