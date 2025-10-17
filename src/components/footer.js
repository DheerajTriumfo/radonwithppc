'use client';
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footertop">
            <div className="logo">
              <Link href="/">
                <Image 
                  src="/images/logo.webp" 
                  width={180} 
                  height={50} 
                  alt="Radon LLC Logo" 
                />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <h3 className="footertitle">RADON LLC</h3>
              <div className="footermenu">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/exhibition-stand-builders/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/portfolio/">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/contact-us/">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy/">Privacy Policy</Link>
                  </li>
                  {/* <li>
                    <Link href="/terms-of-service/">Terms of Service</Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <h3 className="footertitle">Rent Booth By Size</h3>
              <div className="footermenu">
			  <ul>
                  {/* <li>
                    <Link href="/10x10-trade-show-booth/">10x10 Booth</Link>
                  </li>
                  <li>
                    <Link href="/10x20-trade-show-booth/">10x20 Booth</Link>
                  </li> */}
                  <li>
                    <Link href="/10x30-trade-show-booth/">10x30 Booth</Link>
                  </li>
                  <li>
                    <Link href="/20x20-trade-show-booth/">20x20 Booth</Link>
                  </li>
                  <li>
                    <Link href="/20x30-trade-show-booth/">20x30 Booth</Link>
                  </li>
                  <li>
                    <Link href="/20x40-trade-show-booth/">20x40 Booth</Link>
                  </li>
                  <li>
                    <Link href="/30x30-trade-show-booth/">30x30 Booth</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <h3 className="footertitle">TOP CITIES</h3>
              <div className="footermenu">
                <ul>
                  <li>
                    <Link href="https://radonexhibition.com/trade-show-display-rentals-dallas/">Dallas </Link>
                  </li>
                  <li>
                    <Link href="https://radonexhibition.com/trade-show-display-rentals-chicago/">Chicago </Link>
                  </li>
                  <li>
                    <Link href="https://radonexhibition.com/trade-show-display-rentals-orlando/">Orlando </Link>
                  </li>
                  <li>
                    <Link href="https://radonexhibition.com/trade-show-display-rentals-anaheim/">Anaheim </Link>
                  </li>
                  <li>
                    <Link href="https://radonexhibition.com/trade-show-display-rentals-new-york/">New York </Link>
                  </li>
                  {/* <li>
                    <Link href="/trade-show-display-rentals-washington-dc/">Washington DC</Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <h3 className="footertitle">Resources</h3>
              <div className="footermenu">
                <ul>
                  <li>
                    <Link href="/contact-us/">Free Consultation</Link>
                  </li>
                  <li>
                    <Link href="/portfolio/">Free Design</Link>
                  </li>
                  <li>
                    <Link href="/top-trade-shows/">Top Trade Shows</Link>
                  </li>
                  <li>
                    <Link href="/blog/">Blog</Link>
                  </li>
                  <li>
                    <Link href="/where-we-build/">Where We Build</Link>
                  </li>
           
                </ul>
              </div>
            </div>
          </div>
          <div className="footerbottom">
            <p className="text-orange">Las Vegas - Nevada</p>
            <p className="text-sm">5071 N Rainbow Blvd, Suite 170</p>
            <p className="text-sm">Las Vegas, Nevada, 89130 +1 917 463 3566</p>
            <p className="text-sm">
              <a href="mailto:info@radonexhibition.com">info@radonexhibition.com</a>
            </p>
          </div>
          <div className="copyright">
            <div>© 2025 Radon LLC. All Rights Reserved.</div>
            <div className="socialbg">
              <span>Follow us on:</span>
              <div className="social">
                <a href="https://www.facebook.com/radonexhibitionllc" aria-label="Facebook">
                  <i className="fa fa-facebook-f" />
                </a>
                <a href="https://www.instagram.com/radonexhibitionllc/" aria-label="Instagram">
                  <i className="fa fa-instagram" />
                </a>
                <a href="https://x.com/ExhibitionLlc" aria-label="Twitter">
                  <i className="fa fa-twitter" />
                </a>
                {/* <a href="pinterest.com/radonexhibition" aria-label="Pinterest">
                  <i className="fa fa-pinterest-p" />
                </a> */}
                <a href="https://www.linkedin.com/company/radon-exhibition-llc/" aria-label="LinkedIn">
                  <i className="fa fa-linkedin" />
                </a>
                {/* <a href="youtube.com/radonexhibition" aria-label="YouTube">
                  <i className="fa fa-youtube" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}