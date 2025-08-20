'use client';
import Script from 'next/script';
import { useEffect } from 'react';

export default function CarouselSection() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
        clearInterval(interval); // stop checking
        window.$('.owl-carousel').owlCarousel({
          items: 3,
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
            600: { items: 2 },
            1000: { items: 3 },
          },
        });
      }
    }, 100); // check every 100ms

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <>
      <Script
        src="https://radonllcapi.mobel.us/public/web/js/owl.carousel.js"
        strategy="afterInteractive"
      />
      <div className="owl-carousel owl-theme">
        <div className="boothbg">
          <a href="/10x10-trade-show-booth/">
            <div className="figure">
              <img src="/images/10x10n.webp" width="350" height="300" alt="" loading="lazy"/>
              <div className="overlaybooth">
                
              </div>
            </div>
            <div className="caption">
              <div className="title">10 X 10</div>
              <div className="corner">Trade Show Booth Rental</div>
            </div>
          </a>
        </div>
        <div className="boothbg">
          <a href="/10x20-trade-show-booth/">
            <div className="figure">
              <img src="/images/10x20n.webp" width="350" height="300" alt="" loading="lazy"/>
              <div className="overlaybooth">
                
              </div>
            </div>
            <div className="caption">
              <div className="title">10 X 20</div>
              <div className="corner">Trade Show Booth Rental</div>
            </div>
          </a>
        </div>
        <div className="boothbg">
          <a href="/10x30-trade-show-booth/">
            <div className="figure">
              <img src="/images/10x30n.webp" width="350" height="300" alt="" loading="lazy"/>
              <div className="overlaybooth">
                
              </div>
            </div>
            <div className="caption">
              <div className="title">10 X 30</div>
              <div className="corner">Trade Show Booth Rental</div>
            </div>
          </a>
        </div>
        <div className="boothbg">
          <a href="/20x20-trade-show-booth/">
            <div className="figure">
              <img src="/images/20x20n.webp" width="350" height="300" alt="" loading="lazy"/>
              <div className="overlaybooth">
                
              </div>
            </div>
            <div className="caption">
              <div className="title">20 X 20</div>
              <div className="corner">Trade Show Booth Rental</div>
            </div>
          </a>
        </div>
        <div className="boothbg">
          <a href="/20x30-trade-show-booth/">
            <div className="figure">
              <img src="/images/20x30n.webp" width="350" height="300" alt="" loading="lazy"/>
              <div className="overlaybooth">
                
              </div>
            </div>
            <div className="caption">
              <div className="title">20 X 30</div>
              <div className="corner">Trade Show Booth Rental</div>
            </div>
          </a>
        </div>
        <div className="boothbg">
          <a href="/20x40-trade-show-booth/">
            <div className="figure">
              <img src="/images/20x40n.webp" width="350" height="300" alt="" loading="lazy"/>
              <div className="overlaybooth">
                
              </div>
            </div>
            <div className="caption">
              <div className="title">20 X 40</div>
              <div className="corner">Trade Show Booth Rental</div>
            </div>
          </a>
        </div>
        <div className="boothbg">
          <a href="/30x30-trade-show-booth/">
            <div className="figure">
              <img src="/images/30x30n.webp" width="350" height="300" alt="" loading="lazy"/>
              <div className="overlaybooth">
                
              </div>
            </div>
            <div className="caption">
              <div className="title">30 X 30</div>
              <div className="corner">Trade Show Booth Rental</div>
            </div>
          </a>
        </div>
        <div className="boothbg">
          <a href="/30x40-trade-show-booth/">
            <div className="figure">
              <img src="/images/30x40n.webp" width="350" height="300" alt="" loading="lazy"/>
              <div className="overlaybooth">
                
              </div>
            </div>
            <div className="caption">
              <div className="title">30 X 40</div>
              <div className="corner">Trade Show Booth Rental</div>
            </div>
          </a>
        </div>
        <div className="boothbg">
          <a href="/40x40-trade-show-booth/">
            <div className="figure">
              <img src="/images/40x40n.webp" width="350" height="300" alt="" loading="lazy"/>
              <div className="overlaybooth">
                
              </div>
            </div>
            <div className="caption">
              <div className="title">40 X 40</div>
              <div className="corner">Trade Show Booth Rental</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
