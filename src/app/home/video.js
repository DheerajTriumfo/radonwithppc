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
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div
        className="videobanner"
        ref={bannerRef}
        style={{ width: "100%",  position: "relative" }}
      >
        {!isVisible && (
          <img
            src="/images/newradonllc-placeholder.jpg"
            alt="Video Placeholder"
            width="1280"
            height="720"
            decoding="async"
            loading="eager"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        )}
        {isVisible && (
          <video
            width="1280"
            height="720"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{ display: "block", width: "100%", height: "auto" }}
          >
            <source src="/video/newradonllc.webm" type="video/webm" />
            <source src="/video/newradonllc.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </section>
  );
}
