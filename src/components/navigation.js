'use client';
import { useEffect } from 'react';

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
					<div className="logo"><a href="/"><img src="/images/logo-radon.webp" width="180" height="50" alt="Radon LLC" /></a></div>
					<div className="rfpbg"><a href="/quote-form/">RFP</a></div>
					<div className="infobg">
						<ul>
							<li><a href="mailto:info@radonexhibition.com">info@radonexhibition.com</a></li> 
							<li><a href="tel:+19174633566">+1 917 463 3566</a></li>
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
						  <li><a href="/">HOME</a></li>
							<li><a href="/exhibition-stand-builders/">ABOUT US</a></li>
							<li><a href="/portfolio/">OUR WORK</a></li>
							<li><a href="/locations/">LOCATIONS</a></li>
							<li><a href="/contact-us/">CONTACT US</a></li>
						</ul>
					</div>
				</div>
				
			</div>
		</div>
		</>
		);
}