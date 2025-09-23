'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from "next/link";
import Image from "next/image";
const baseUrl = 'https://radonllcapi.mobel.us/public';

export default function Detailcarousel({ boothimg }) {
  console.log(boothimg);
  const [boothImg, setBoothImg] = useState(boothimg || []);

  useEffect(() => {
    console.log('BoothImg data:', boothImg);
    
    // Wait for both jQuery and OwlCarousel to be available
    const initCarousel = () => {
      if (
        typeof window !== 'undefined' &&
        window.$ &&
        window.$.fn.owlCarousel &&
        boothImg.length > 0
      ) {
        console.log('Initializing OwlCarousel...');
        
        // Destroy existing carousel if it exists
        const $carousel = window.$('.owl-carousel');
        if ($carousel.hasClass('owl-loaded')) {
          $carousel.trigger('destroy.owl.carousel');
          $carousel.removeClass('owl-loaded');
        }
        
        // Initialize new carousel
        $carousel.owlCarousel({
          items: 1,
          lazyLoad: true,
          loop: true,
          margin: 30,
          autoplay: true,
          autoplayTimeout: 2000,
          smartSpeed: 1000,
          dots: true,
         // nav: true,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 },
          },
        });
        
        console.log('OwlCarousel initialized');
        return true;
      }
      return false;
    };

    // Try to initialize immediately
    if (initCarousel()) {
      return;
    }

    // If not ready, poll until ready
    const interval = setInterval(() => {
      if (initCarousel()) {
        clearInterval(interval);
      }
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(interval);
      // Cleanup carousel on unmount
      if (typeof window !== 'undefined' && window.$ && window.$('.owl-carousel').length) {
        window.$('.owl-carousel').trigger('destroy.owl.carousel');
      }
    };
  }, [boothImg]);

  if (!boothImg || boothImg.length === 0) {
    return <p>No booth images available</p>;
  }

  return (
    <>
      {/* jQuery is already loaded in layout.js */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('OwlCarousel script loaded');
        }}
      />

      <div className="owl-carousel owl-theme">
        {boothImg.map((btimg, index) => (
          <div key={btimg.id || index} className="figure">
            <Image
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
