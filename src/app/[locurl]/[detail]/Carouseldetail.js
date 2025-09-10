'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

const baseUrl = 'https://radonllcapi.mobel.us/public';

export default function Detailcarousel({ boothimg }) {
  const [boothImg, setBoothImg] = useState(boothimg || []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        typeof window !== 'undefined' &&
        window.$ &&
        window.$.fn.owlCarousel
      ) {
        clearInterval(interval);
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
            1000: { items: 1 },
          },
        });
      }
    }, 200);

    return () => clearInterval(interval);
  }, [boothImg]);

  if (!boothImg || boothImg.length === 0) {
    return <p>No booth images available</p>;
  }

  return (
    <>
      {/* jQuery must load before OwlCarousel */}
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        strategy="afterInteractive"
      />

      <div className="owl-carousel owl-theme">
        {boothImg.map((btimg, index) => (
          <div key={btimg.id || index} className="figure">
            <img
              className="carousel-image"
              src={`${baseUrl}/uploads/multiexhibitrental/${btimg.rentalimg}`}
              width={1024}
              height={768}
              alt={`Booth Image ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
}
