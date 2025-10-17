'use client';
import { useEffect } from 'react';

export default function NavigationClient() {
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
              const btn = window.$("#menu-button");
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

  return null; // This component doesn't render anything
}
