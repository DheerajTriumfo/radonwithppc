// src/app/[locurl]/[detail]/Carouseldetail.js

'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

const baseUrl = 'https://radonllcapi.mobel.us/public';

export default function Detailcarousel({ locurl, detail, boothimg }) {
  // State to store the fetched data
  const [boothImg, setBoothImg] = useState(boothimg || []); // Use boothimg passed from parent

  // Initialize Owl Carousel once the component is mounted
  useEffect(() => {
    const loadOwlCarousel = () => {
      $('.owl-carousel').owlCarousel({
          items: 1,
          loop: false,
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
    };
    loadOwlCarousel();
    // if (boothImg.length > 0) {
    //   loadOwlCarousel(); // Initialize Owl Carousel once images are available
    // }
  }, [boothImg]); // Runs when boothImg data is available

  // Render fallback while fetching data
  if (!boothImg || boothImg.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Only load the script after interactive */}
      <Script src="https://www.radonexhibition.eu/web/js/owl.carousel.js" strategy="afterInteractive" />

      <div className="owl-carousel owl-theme">
        {boothImg && boothImg.length > 0 ? (
          boothImg.map((btimg, index) => (
            <div key={btimg.id || index} className="figure">
              <img
                className="carousel-image"
                src={`${baseUrl}/uploads/multiexhibitrental/${btimg.rentalimg}`}
                width={1024}
                height={768}
                alt={`Booth Image ${index + 1}`}
              />
            </div>
          ))
        ) : (
          <p>No additional details available.</p>
        )}
      </div>
    </>
  );
}
