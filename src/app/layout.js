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
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WTBJPRN');
            `,
          }}
        />
        <link
          rel="preload"
          href="/styles/menumaker.css"
          as="style"
          onLoad={(e) => { e.target.rel = "stylesheet"; }}
        />
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="lazyOnload" />
        
      </head>
      <body className={poppins.className}>
        <noscript>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-WTBJPRN`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        </noscript>
        {!hideHeaderFooter && <Navigation />}
        {children}
        <SpeedInsights url="https://radonexhibition.com/" />
         {!hideHeaderFooter && <Footer />}
         <Script id="load-gtm" strategy="afterInteractive">
          {`
            function loadGTM() {
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WTBJPRN');
            }
            window.addEventListener('scroll', loadGTM, { once: true });
            setTimeout(loadGTM, 3000);
          `}
        </Script>

        <Script id="delayed-ga" strategy="afterInteractive">
          {`
            function loadGA(){
              var gtagScript = document.createElement('script');
              gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-MS6SBPYH3X";
              gtagScript.async = true;
              document.head.appendChild(gtagScript);

              gtagScript.onload = function() {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-MS6SBPYH3X');
              }
            }
            window.addEventListener('scroll', loadGA, { once: true });
            setTimeout(loadGA, 4000);
          `}
        </Script>
      </body>
    </html>
  );
}
