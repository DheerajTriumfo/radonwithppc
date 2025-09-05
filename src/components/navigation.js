'use client';
import { useEffect } from 'react';
import Link from "next/link";

export default function Navigation() {
  useEffect(() => {
  const interval = setInterval(() => {
    if (window.jQuery && window.jQuery.fn) {
      clearInterval(interval);

      const menuScript = document.createElement("script");
      menuScript.src = "https://radonexhibition.com/js/menumaker.js";
      menuScript.onload = () => {
        if (window.$ && window.$.fn.menumaker) {
          window.$("#cssmenu").menumaker({
            format: "multitoggle"
          });

          // ✅ Close menu when clicking a link
          window.$("#cssmenu ul li a").on("click", function () {
            const btn = window.$("#menu-button"); // FIXED selector
            if (btn.length && btn.hasClass("menu-opened")) {
              btn.trigger("click");
            }
          });
        } else {
          console.error("Menumaker plugin is not available.");
        }
      };
      document.body.appendChild(menuScript);
    }
  }, 100);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      <header>
        <div className="header">
          <div className="container">
            <div className="logo">
              <Link href="/">
                <img
                  src="/images/logo-radon.webp"
                  width="180"
                  height="50"
                  alt="Radon LLC"
                />
              </Link>
            </div>
            <div className="rfpbg">
              <Link href="/quote-form/">RFP</Link>
            </div>
            <div className="infobg">
              <ul>
                <li>
                  <Link href="mailto:info@radonexhibition.com">
                    info@radonexhibition.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+19174633566">+1 917 463 3566</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="navigationbg">
        <div className="container">
          <div className="navigation">
            <div id="cssmenu">
              <ul>
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link href="/exhibition-stand-builders/">ABOUT US</Link>
                </li>
                <li>
                  <Link href="/portfolio/">OUR WORK</Link>
                </li>
                <li>
                  <Link href="/locations/">LOCATIONS</Link>
                </li>
                <li>
                  <Link href="/contact-us/">CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
