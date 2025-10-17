'use client';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/common.css";
import "../styles/menumaker.css";
//import "../styles/header-footer.css";
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
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        />
        <Script 
          src="https://code.jquery.com/jquery-3.6.0.min.js" 
          strategy="beforeInteractive"
          onLoad={() => console.log('jQuery loaded globally')}
        />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" 
          strategy="afterInteractive"
          onLoad={() => console.log('Owl Carousel loaded')}
        />
        {/* <Script src="../styles/menumaker.js" strategy="lazyOnload" /> */}
        
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

        <Script id="owl-carousel-init" strategy="afterInteractive">
          {`
            function initAllCarousels() {
             
              
              if (window.$ && window.$.fn.owlCarousel) {
                
                // Initialize client logos carousel
                if ($('#clientslider').length) {
                  try {
                    $('#clientslider').owlCarousel({
                      loop: true,
                      margin: 15,
                      autoplay: true,
                      autoplayTimeout: 2000,
                      autoplayHoverPause: true,
                      dots: true,
                      nav: false,
                      responsiveClass: true,
                      responsive: {
                        0: { items: 2, margin: 15 },
                        768: { items: 5 },
                        1024: { items: 7 }
                      }
                    });
                    console.log('clientslider carousel initialized successfully');
                  } catch (e) {
                    console.error('Error initializing clientslider:', e);
                  }
                } else {
                  console.log('clientslider element not found');
                }

                // Initialize rental booth carousel
                if ($('#rentalbooth').length) {
                  try {
                    $('#rentalbooth').owlCarousel({
                      loop: true,
                      margin: 15,
                      autoplay: true,
                      autoplayTimeout: 5000,
                      autoplayHoverPause: true,
                      dots: true,
                      nav: false,
                      responsiveClass: true,
                      responsive: {
                        0: { items: 1, margin: 0 },
                        768: { items: 2 },
                        1024: { items: 3 }
                      }
                    });
                    console.log('rentalbooth carousel initialized successfully');
                  } catch (e) {
                    console.error('Error initializing rentalbooth:', e);
                  }
                } else {
                  console.log('rentalbooth element not found');
                }

                // Initialize testimonial carousel
                if ($('#testimonial').length) {
                  console.log('Found testimonial element, initializing...');
                  try {
                    $('#testimonial').owlCarousel({
                      loop: true,
                      margin: 15,
                      autoplay: true,
                      autoplayTimeout: 5000,
                      autoplayHoverPause: true,
                      dots: true,
                      nav: false,
                      responsiveClass: true,
                      responsive: {
                        0: { items: 1, margin: 0 },
                        768: { items: 2 },
                        1024: { items: 3 }
                      }
                    });
                    console.log('testimonial carousel initialized successfully');
                  } catch (e) {
                    console.error('Error initializing testimonial:', e);
                  }
                } else {
                  console.log('testimonial element not found');
                }
              } else {
                console.log('jQuery or OwlCarousel not available');
              }
              console.log('=== CAROUSEL INITIALIZATION COMPLETE ===');
            }

            // Multiple initialization triggers
            $(document).ready(function() {
              console.log('Document ready, attempting carousel initialization...');
              setTimeout(initAllCarousels, 500);
            });

            $(window).on('load', function() {
              console.log('Window loaded, attempting carousel initialization...');
              setTimeout(initAllCarousels, 1000);
            });

            // Fallback initialization
            setTimeout(function() {
              console.log('Fallback carousel initialization...');
              initAllCarousels();
            }, 2000);

            // FAQ functionality
            $(document).ready(function () {
              $(".faqbg").each(function () {
                var $this = $(this);

                $this.find(".tab-button").click(function () {
                  $this.find(".tab-button").removeClass("on");
                  $this.find(".tab-caption").slideUp("normal");

                  if ($(this).next().is(":hidden") == true) {
                    $(this).addClass("on");
                    $(this).next().slideDown("normal");
                  }
                });

                $this.find(".tab-caption").hide();
                $this.find(".tab-caption:first").show();
                $this.find(".tab-button:first").addClass("on");
              });
            });

            // Debug function to manually initialize carousels
            window.initCarousels = function() {
              console.log('=== MANUAL CAROUSEL INITIALIZATION ===');
              
              // Destroy existing carousels first
              try {
                if ($('#clientslider').hasClass('owl-loaded')) {
                  $('#clientslider').trigger('destroy.owl.carousel');
                  console.log('Destroyed existing clientslider carousel');
                }
                if ($('#rentalbooth').hasClass('owl-loaded')) {
                  $('#rentalbooth').trigger('destroy.owl.carousel');
                  console.log('Destroyed existing rentalbooth carousel');
                }
                if ($('#testimonial').hasClass('owl-loaded')) {
                  $('#testimonial').trigger('destroy.owl.carousel');
                  console.log('Destroyed existing testimonial carousel');
                }
              } catch (e) {
                console.log('No existing carousels to destroy');
              }
              
              // Use the same initialization function
              initAllCarousels();
            };
          `}
        </Script>
      </body>
    </html>
  );
}
