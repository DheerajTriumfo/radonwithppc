'use client';
import '../../styles/owl.carousel.min.css';
import Script from 'next/script';
import { useEffect } from 'react';
import Image from 'next/image';
import $ from 'jquery';

export default function Carouselgetppc() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window.$ && !window.carouselInitialized) {
        window.carouselInitialized = true;

        window.$('.owl-carousel').owlCarousel({
          items: 1,
          lazyLoad: true,
          loop: true,
          margin: 30,
          autoplay: true,
          autoplayTimeout: 2000,
          smartSpeed: 1000,
          dots: true,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 3 },
          },
        });

        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script src="https://www.radonexhibition.eu/web/js/owl.carousel.js" strategy="afterInteractive" />

      {/* Carousel */}
      <div className="owl-carousel owl-theme">
            <div className="boothbg">
              <div className="figure">
                <Image src="/images/10x20n.webp" width="350" height="300" alt="" />
                <div className="overlaybooth">
                  
                </div>
              </div>
              <div className="caption">
                <div className="title">10 X 20</div>
                <div className="corner">Trade Show Booth Rental</div>
              </div>
            </div>
            <div className="boothbg">
              <div className="figure">
                <Image src="/images/10x30n.webp" width="350" height="300" alt=""/>
                <div className="overlaybooth">
                  
                </div>
              </div>
              <div className="caption">
                <div className="title">10 X 30</div>
                <div className="corner">Trade Show Booth Rental</div>
              </div>
            </div>
            <div className="boothbg">
              <div className="figure">
                <Image src="/images/20x20n.webp" width="350" height="300" alt="" />
                <div className="overlaybooth">
                  
                </div>
              </div>
              <div className="caption">
                <div className="title">20 X 20</div>
                <div className="corner">Trade Show Booth Rental</div>
              </div>
            </div>
            <div className="boothbg">
              <div className="figure">
                <Image src="/images/20x30n.webp" width="350" height="300" alt="" />
                <div className="overlaybooth">
                  
                </div>
              </div>
              <div className="caption">
                <div className="title">20 X 30</div>
                <div className="corner">Trade Show Booth Rental</div>
              </div>
            </div>
            <div className="boothbg">
              <div className="figure">
                <Image src="/images/20x40n.webp" width="350" height="300" alt="" />
                <div className="overlaybooth">
                  
                </div>
              </div>
              <div className="caption">
                <div className="title">20 X 40</div>
                <div className="corner">Trade Show Booth Rental</div>
              </div>
            </div>
            <div className="boothbg">
              <div className="figure">
                <Image src="/images/30x30n.webp" width="350" height="300" alt="" />
                <div className="overlaybooth">
                  
                </div>
              </div>
              <div className="caption">
                <div className="title">30 X 30</div>
                <div className="corner">Trade Show Booth Rental</div>
              </div>
            </div>
            <div className="boothbg">
              <div className="figure">
                <Image src="/images/30x40n.webp" width="350" height="300" alt="" />
                <div className="overlaybooth">
                  
                </div>
              </div>
              <div className="caption">
                <div className="title">30 X 40</div>
                <div className="corner">Trade Show Booth Rental</div>
              </div>
            </div>
            <div className="boothbg">
              <div className="figure">
                <Image src="/images/40x40n.webp" width="350" height="300" alt="" />
                <div className="overlaybooth">
                  
                </div>
              </div>
              <div className="caption">
                <div className="title">40 X 40</div>
                <div className="corner">Trade Show Booth Rental</div>
              </div>
            </div>
        </div>
    </>
  );
}
