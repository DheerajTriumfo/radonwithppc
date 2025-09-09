"use client";
import { useEffect, useRef, useState } from "react";

export default function MyVideo() {
  const bannerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect once video becomes visible
        }
      },
      { threshold: 0.0 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect(); // Cleanup on component unmount
  }, []);

  return (
    <section>
      <div
        className="videobanner"
        ref={bannerRef}
        style={{ width: "100%", position: "relative" }}
      >
        {/* Placeholder image */}
        {!isVisible && (
          <img
            src="/images/newradonllc-placeholder.jpg"
            alt="Video Placeholder: Placeholder image for Radon LLC"
            width="1440"
            height="600"
            decoding="async"
            loading="lazy"  // Lazy load the placeholder image
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        )}

        {/* Video */}
        {isVisible && (
          <video
            width="1280"
            height="720"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"  // Load video metadata for better performance
            style={{ display: "block", width: "100%", height: "auto" }}
          >
            <source src="/video/newradonllc.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </section>
  );
}
