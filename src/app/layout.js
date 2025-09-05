'use client';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/common.css";
import "../styles/menumaker.css";
import { Poppins, Roboto_Condensed } from "next/font/google"; 
import Script from "next/script";
import Navigation from '../components/navigation.js';
import Footer from '../components/footer.js';
import { usePathname } from "next/navigation";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});
const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const noHeaderFooterRoutes = ["/trade-show-booth-rentals-quotation/"];
  const hideHeaderFooter = noHeaderFooterRoutes.includes(pathname);
  
  return (
    <html lang="en">
      <head>
        {}
        
        <link rel="preload" href="/styles/menumaker.css" as="style" onload="this.rel='stylesheet'" />
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        
      </head>
      <body className={poppins.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-WTBJPRN`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {!hideHeaderFooter && <Navigation />}
        {children}
        <SpeedInsights url="https://radonexhibition.com/" />
         {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
