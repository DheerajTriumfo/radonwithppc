  import Image from 'next/image';
import Link from 'next/link';
import NavigationClient from './NavigationClient';

export default function Navigation() {
  return (
    <div className="topheader">
      <div className="container">
        <div className="innerheader">
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
                  <a href="javascript:void(0)">
                    EXHIBIT RENTAL <i className="fa fa-angle-down" />
                  </a>
                  <ul>
                    {/* <li>
                      <Link href="/10x10-trade-show-booth/">10x10 Booth Rental</Link>
                    </li> */}
                    <li>
                      <Link href="/10x20-trade-show-booth/">10x20 Booth Rental</Link>
                    </li>
                    <li>
                      <Link href="/10x30-trade-show-booth/">10x30 Booth Rental</Link>
                    </li>
                    <li>
                      <Link href="/20x20-trade-show-booth/">20x20 Booth Rental</Link>
                    </li>
                    <li>
                      <Link href="/20x30-trade-show-booth/">20x30 Booth Rental</Link>
                    </li>
                    <li>
                      <Link href="/20x40-trade-show-booth/">20x40 Booth Rental</Link>
                    </li>
                    <li>
                      <Link href="/30x30-trade-show-booth/">30x30 Booth Rental</Link>
                    </li>
                    <li>
                      <Link href="/30x40-trade-show-booth/">30x40 Booth Rental</Link>
                    </li>
                    <li>
                      <Link href="/40x40-trade-show-booth/">40x40 Booth Rental</Link>
                    </li>
                    <li>
                      <Link href="/40x50-trade-show-booth/">40x50 Booth Rental</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/career/">CAREER</Link>
                </li>
                <li>
                  <Link href="/contact-us/">CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <NavigationClient />
    </div>
  );
}
