import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";
import Faqtab from './home/faq.js';
import Homeportfolio from './home/portfolio.js';
import Link from "next/link";

import "../styles/home.css";
export const metadata = {
  title : "Trade Show Booth Rentals Las Vegas | Trade Show Booth Builders",
  description : "As leading trade show booth builders in Las Vegas, we provide tradeshow booth design, rental exhibits, and turnkey trade show solutions throughout the USA.",
};

export default function Home(){
  
  return(
    <>
      <section>
        <div className="vediobanner" id="demo">
            <video
              loop
              autoPlay
              muted
              playsInline
              width="1280"
              height="720"
              id="video"
            >
              <source src="/video/newradonllc.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
        </div>
      </section>
      <section>
         <div className="ban-blow">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="content-area">
                        <div className="title">Crafting Experiences That Drive Success</div>
                        <h1 className="heading">Custom Trade Show Booth Rentals & Exhibit Rental Solutions in Las Vegas and Across the USA</h1>
                        <p>RADON LLC is a trusted name among top Las Vegas trade show booth builders, offering high-impact custom trade show exhibits and full-service booth rental solutions across the USA. As one of the most experienced trade show exhibit builders in Las Vegas, we specialize in trade show booth rentals in Las Vegas, booth design, and exhibit rentals tailored to your brand.</p>
                        <p>Whether you need a trade show booth rental in Las Vegas, custom trade show display, or modular exhibit rental, our team delivers end-to-end solutions—design, fabrication, shipping, and installation. We are one of the leading exhibit companies in Las Vegas, trusted for our creative execution, quick turnaround, and reliable service.</p>
                        <p>At RADON, we specialize in custom trade show exhibit rentals and booth rentals in Las Vegas and across the USA.</p>
                        <p>With over 20 years of experience and in-house trade show booth design in Las Vegas, we stand out as a top-tier partner among exhibit companies Las Vegas and trade show companies Las Vegas.</p>
                        <p>From trade show displays in Las Vegas to exhibit rentals Las Vegas, we bring precision and creativity to every project. If you’re searching for Las Vegas trade show booth rental, trade show display rentals Las Vegas, or trade show booths Las Vegas, RADON LLC is your go-to exhibit partner.</p>
                        <p>Let us help your brand shine at the Las Vegas Convention Center, Mandalay Bay, or any event across the USA with our premium Las Vegas exhibit rentals and custom booth rental services.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <div className="design-box">
                        <ul>
                           <li>
                              <div className="figure">
                                 <Image src="/uploads/40x40-customize-trade-show-booth-rentals.webp" width="350" height="300" alt="40x40 customize trade show booth rentals for exhibitions"  loading="lazy" />
                              </div>
                              <h3>40 X 40 </h3>
                              <p> Trade Show Booth Rentals </p>
                              <div className="btnseeplan"><Link href="/40x40-trade-show-booth/">Explore Designs <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link> </div>
                           </li>
                           <li>
                              <div className="figure">
                                 <Image src="/uploads/30x40-customize-trade-show-booth-rentals.webp" width="350" height="300" alt="30x40 customize trade show booth rentals for events" loading="lazy" decoding="async"/>
                              </div>
                              <h3>30 X 40</h3>
                              <p>Trade Show Booth Rentals</p>
                              <div className="btnseeplan"> <Link href="/30x40-trade-show-booth/">Explore Designs <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </Link> </div>
                           </li>
                           <li>
                              <div className="figure">
                                 <Image src="/uploads/30x30-customize-trade-show-booth-rentals.webp" width="350" height="300" alt="30x30 customize trade show booth rentals for events" loading="lazy" decoding="async"/>
                              </div>
                              <h3>30 X 30</h3>
                              <p>Trade Show Booth Rentals</p>
                              <div className="btnseeplan"> <Link href="/30x30-trade-show-booth/">Explore Designs <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </Link> </div>
                           </li>
                           <li>
                            <div className="figure">
                               <Image src="/uploads/20x40-customize-trade-show-booth-rentals.webp" width="350" height="300" alt="20x40 customize trade show booth rentals" loading="lazy" decoding="async"/>
                            </div>
                            <h3>20 X 40</h3>
                            <p> Trade Show Booth Rentals </p>
                            <div className="btnseeplan"> <Link href="/20x40-trade-show-booth/">Explore Designs <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </Link> </div>
                         </li>
                         <li>
                            <div className="figure">
                               <Image src="/uploads/20x30-customize-trade-show-booth-rentals.webp" width="350" height="300" alt="20x30 customize trade show booth rentals" loading="lazy" decoding="async"/>
                            </div>
                            <h3>20 X 30</h3>
                            <p> Trade Show Booth Rentals </p>
                            <div className="btnseeplan"> <Link href="/20x30-trade-show-booth/">Explore Designs <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </Link> </div>
                         </li>
                         <li>
                            <div className="figure">
                               <Image src="/uploads/20x20-customize-trade-show-booth-rentals.webp" width="350" height="300" alt="20x20 customize trade show booth rentals" loading="lazy" decoding="async"/>
                            </div>
                            <h3>20 X 20</h3>
                            <p> Trade Show Booth Rentals </p>
                            <div className="btnseeplan"> <Link href="/20x20-trade-show-booth/">Explore Designs <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </Link> </div>
                         </li>
                         <li>
                            <div className="figure">
                               <Image src="/uploads/10x30-customize-trade-show-booth-rentals.webp" width="350" height="300" alt="10x30 customize trade show booth rentals with modular designs" loading="lazy" decoding="async"/>
                            </div>
                            <h3>10 X 30</h3>
                            <p> Trade Show Booth Rentals </p>
                            <div className="btnseeplan"> <Link href="/10x30-trade-show-booth/">Explore Designs <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </Link> </div>
                         </li>
                         <li>
                            <div className="figure">
                               <Image src="/uploads/10x20-customize-trade-show-booth-rentals.webp" width="350" height="300" alt="10x20 customize trade show booth rentals with innovative layouts" loading="lazy" decoding="async"/>
                            </div>
                            <h3>10 X 20</h3>
                            <p> Trade Show Booth Rentals </p>
                            <div className="btnseeplan"> <Link href="/10x20-trade-show-booth/">Explore Designs <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </Link> </div>
                         </li>
                         <li>
                            <div className="figure">
                               <Image src="/uploads/10x10-customize-trade-show-booth-rentals.webp" width="350" height="300" alt="10x10 customize trade show booth rentals for compact spaces" loading="lazy" decoding="async"/>
                            </div>
                            <h3>10 X 10</h3>
                            <p> Trade Show Booth Rentals </p>
                            <div className="btnseeplan"><Link href="/10x10-trade-show-booth/">Explore Designs <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
                         </li>
                      </ul>
                           <div className="col-lg-12 text-center mt-2">
                              <Link className="moreless-button" href="/free-design/">Contact For Free Design </Link>
                           </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <div className="homeboothonenew add-pa">
         <div className="row">
            <div className="col-lg-6 col-md-12">
               <div className="figure"><Image src="/images/custom-trade-show-booth-design-las-vegas.webp" loading="lazy" width="1043" height="750" alt="Custom trade show booth design services in Las Vegas for exhibitions"/></div>
            </div>
            <div className="col-lg-6 col-md-12">
               <div className="caption">
                  <h2 className="maintitle">Why Trust RADON LLC for Trade Show Booth Display Rentals?</h2>
                  <div className="shrtdesc">
                    <p><strong>Visually Appealing Displays: </strong></p>
                    <p>Every brand is unique. Our team ensures your identity shines through our custom trade show exhibits with impactful graphics and engaging visuals.</p>
                    <p><strong>Strategic Booth Features</strong></p>
                    <p>We integrate lighting, signage, and tech to match your industry trends, helping your trade show booth display rentals stand out from the crowd.</p>
                    <p><strong>Adaptable & Scalable Choices</strong></p>
                    <p>From compact setups to elaborate multi-zone designs, our trade show exhibit rentals are built to adapt to your space, branding, and objectives.</p>
                    <p><strong>End-to-End Support</strong></p>
                    <p>We handle everything - design, logistics, setup, dismantling, and storage—making us one of the most dependable trade show exhibit companies in the USA.</p>
                    <p><strong>Great Value for Investment</strong></p>
                    <p>Our goal is to help you maximize ROI with quality, customizable, and cost-effective trade show booth rentals and display rental services.</p>
                  </div>
                  <div className="getquotebtn"><Link href="/exhibit-form/" className="text-uppercase">Start Your Project</Link></div>
               </div>
            </div>
         </div>
      </div>
      <Homeportfolio/>
      <section>
         <div className="whychose-sec">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="content-area">
                        <h2 className="maintitle">Rent vs. Buy: Which Is Right for You?</h2>
                        <p>Still unsure about renting or purchasing your booth? We’re here to guide you through the decision-making process.</p>
                        <p><strong>Consider These Factors:</strong></p>
                        <ul>
                            <li><strong>Budget: </strong> Buying involves higher upfront costs. Renting from trade show display rental companies is more budget-friendly.</li>
                            <li><strong>Event Frequency: </strong> Exhibiting frequently? Ownership may be cost-efficient. Infrequent participation? Go for exhibit booth rentals.</li>
                            <li><strong>Flexibility:</strong> Rentals allow you to adapt for different events. Buying suits fixed formats.</li>
                            <li><strong>Logistics: </strong> Rentals remove the burden of storage, transport, and upkeep.</li>
                        </ul>
                        <p><strong>Buying a Booth – Pros & Cons:</strong></p>
                        <ul>
                            <li>✔ Long-term savings, full control over branding.</li>
                            <li>✘ Upkeep, storage, and updates are your responsibility.</li>
                        </ul>
                        <p><strong>Renting a Booth – Pros & Cons:</strong></p>
                        <ul>
                            <li>✔ Lower investment, scalable and flexible.</li>
                            <li>✘ Limited by existing rental inventory (though many can be customized).</li>
                            
                        </ul>
                        <h2 className="maintitle">Contact RADON LLC – Your Trade Show Exhibit Rental Experts</h2>
                        <p>Looking for trade show display rentals, custom exhibit booths, or reliable tradeshow display companies? Call RADON LLC at <Link href="tel:+1 917 463 3566">+1 917 463 3566</Link>, email <Link href="mailto:info@radonexhibition.com">info@radonexhibition.com</Link>, or submit your query through our website. We are here to deliver high-impact exhibit rentals that turn your vision into a memorable trade show presence.</p>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <p><strong>Our Trade Show Services</strong></p>
                                <ul>
                                    <li>Trade Show Booth Design</li>
                                    <li>In-House Booth Fabrication</li>
                                    <li>Trade Show Exhibit Graphics</li>
                                    <li>Shipping to Exhibition Venue</li>
                                    <li>Installation and Dismantling</li>
                                    <li>On-Site Booth Management</li>
                                    <li>Post-Show Assessment </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-12">
                                <p><strong>Our Booth Solutions</strong></p>
                                <ul>
                                    <li>Trade Show Booth Furniture</li>
                                    <li>Lighting Equipment</li>
                                    <li>AV Devices & Interactive Tech</li>
                                    <li>Tension Fabric Displays</li>
                                    <li>Custom Counters & Flooring</li>
                                    <li>Vinyl or Single-Color Carpets</li>
                                </ul>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <Faqtab/>
      <section>
         <div className="map-sec">
            <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="caption text-center">
                     <h2 className="maintitle">Address</h2>
                     <div className="shrtdesc">
                        <p><Link href="https://maps.app.goo.gl/iSgSPGfYz23ZLfn2A" target="_blank">5071 N Rainbow Blvd, Suite 170, Las Vegas, Nevada, 89130</Link></p>  
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-12">
                  <div className="figure"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.401537609646!2d-115.24525862372231!3d36.2540292982958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8eb03e40dfc1d%3A0xd4c68c2033fd65f7!2sParking%20lot%2C%205071%20N%20Rainbow%20Blvd%20STE%20170%2C%20Las%20Vegas%2C%20NV%2089130%2C%20USA!5e0!3m2!1sen!2sin!4v1742805407954!5m2!1sen!2sin" width="600" height="450" style={{ border:0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
               </div>
               <div className="col-lg-4 col-md-12">
                  <div className="caption text-center">
                     <h2 className="maintitle">Let’s start your project and take your brand to the next level</h2>
                     <div className="getquotebtn"><Link href="/exhibit-form/" className="text-uppercase">Start Your Project</Link></div>
                  </div>
               </div>
               
            </div>
         </div>
      </section>
    </>
    );
}
