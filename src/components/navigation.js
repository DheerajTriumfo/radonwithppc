'use client';
import { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Navigation()
{
	useEffect(() => {
    // Ensure jQuery is loaded first, then load Menumaker script
    const loadMenumaker = () => {
      if (window.jQuery) {
        // Check if jQuery is available
        const script = document.createElement('script');
        script.src = "https://radonexhibition.com/webview/js/menumaker.js";
        script.onload = () => {
          // Initialize Menumaker after it has loaded
          if (window.jQuery && $.fn.menumaker) {
            $("#cssmenu").menumaker({
              format: "multitoggle"
            });
          } else {
            console.error("Menumaker plugin is not available.");
          }
        };
        document.body.appendChild(script);
      } else {
        console.error("jQuery is not loaded yet!");
      }
    };

    // Load Menumaker script after jQuery is available
    loadMenumaker();

    // Cleanup function to remove the script if the component unmounts
    return () => {
      const script = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/menumaker@1.0.1/menumaker.min.js"]');
      if (script) script.remove();
    };
  }, []);

	return(
		<>
		<header>
			<div className="header">
				<div className="container">
					<div className="logo"><Link  href="/"><img src="/images/logo-radon.webp" width="180" height="50" alt="Radon LLC" /></Link ></div>
					<div className="rfpbg"><Link  href="/quote-form/">RFP</Link ></div>
					<div className="infobg">
						<ul>
							<li><Link  href="mailto:info@radonexhibition.com">info@radonexhibition.com</Link ></li> 
							<li><Link  href="tel:+19174633566">+1 917 463 3566</Link ></li>
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
						  <li><Link  href="/">HOME</Link></li>
							<li><Link  href="/exhibition-stand-builders/">ABOUT US</Link ></li>
							<li><Link  href="/portfolio/">OUR WORK</Link ></li>
							<li><Link  href="/locations/">LOCATIONS</Link ></li>
							<li><Link  href="/contact-us/">CONTACT US</Link ></li>
						</ul>
					</div>
				</div>
				
			</div>
		</div>
		</>
		);
}