import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";
import Faqtab from './home/faq.js';
import Homeportfolio from './home/portfolio.js';
import Myvideo from './home/video.js';
import Link from "next/link";

import "../styles/home.css";
export const metadata = {
  title : "Las Vegas Trade Show Booth Rentals | 750+Trade Booth Design",
   description : "Radon Exhibition LLC — Your Trusted Las Vegas Trade Show Booth Builder, offering custom booth designs and rental solutions in Las Vegas and across the USA.",
   alternates: {
       canonical: `https://radonexhibition.com/`,
   },
};

export default function Home(){
  
  return(
    <>
<>
  <div className="bannerbg">
    <div className="banneroverlay"></div>
    <div className="container">
      <div className="innerbanner">
        <h1 className="title">Beyond Booths <br />Build Trust</h1>
        <div className="smalltext">Rent or buy custom exhibition booths anywhere in the USA — with complete design, fabrication, and installation handled by experts.</div>
        <div className="bannerbtn"><a href="https://radonexhibition.com/free-design/">Contact Us For Free Design</a></div>
        <div className="trustreviewbg">
          <div className="trustreview">
            <span>Our Reviews</span>
            <img src="https://www.trustpilot.com/favicon.ico" alt="Trustpilot" className="h-8 mr-1" />
            <span>Trustpilot</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div className="ourclientbg">
      <div className="container">
        <div className="max-w-4xl text-center">
          <h2 className="maintitle mb-3">Trusted by Global Brands</h2>
          <div className="shrtdesc">
            <p>
              See how leading brands are making an impact with custom trade show exhibits and booths. Each project is proof that smart design leads to real trade show success — don&apos;t let your brand miss out.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div className="owl-carousel owl-theme" id="clientslider">
            <div className="item">
              <img src="images/cl11.webp" width="" height="" alt="" />
            </div>
            <div className="item">
              <img src="images/cl14.webp" width="" height="" alt="" />
            </div>
            <div className="item">
              <img src="images/cl22.webp" width="" height="" alt="" />
            </div>
            <div className="item">
              <img src="images/cl28.webp" width="" height="" alt="" />
            </div>
            <div className="item">
              <img src="images/cl34.webp" width="" height="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="portfoliobg">
      <div className="container">
        <div className="max-w-4xl text-center">
          <h2 className="maintitle mb-3">Our Portfolio</h2>
          <div className="shrtdesc">
            <p>
              Radon LLC - Trusted Las Vegas trade show booth builders you can count on. Tell us what your brand stands for, and we&apos;ll turn it into a booth that commands attention. Receive 3 free custom exhibit design options from Radon&apos;s expert design team — made exclusively around your brand message and show requirements
            </p>
          </div>
        </div>
      </div>
      <div className="portfolioinner">
        <div className="row no-gutters">
          <div className="col-6 col-lg-4 p-1">
            <img src="images/pt1.webp" className="img-fluid" alt="" />
          </div>
          <div className="col-6 col-lg-4 p-1">
            <img src="images/pt2.webp" className="img-fluid" alt="" />
          </div>
          <div className="col-6 col-lg-4 p-1">
            <img src="images/pt3.webp" className="img-fluid" alt="" />
          </div>
          <div className="col-6 col-lg-4 p-1">
            <img src="images/pt4.webp" className="img-fluid" alt="" />
          </div>
          <div className="col-6 col-lg-4 p-1">
            <img src="images/pt5.webp" className="img-fluid" alt="" />
          </div>
          <div className="col-6 col-lg-4 p-1">
            <img src="images/pt6.webp" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div className="bannerbtn">
        <a href="https://radonexhibition.com/portfolio/">Browse Full Work Gallery</a>
      </div>
    </div>
  </section>
  <section>
    <div className="rentalboothbg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="innner">
              <h2 className="maintitle mb-2">Exhibit Booth Designs</h2>
              <div className="shrtdesc">
                <p>
                Innovative, eye-catching, and built to impress — our exhibit custom booth rental designs turn every event into a brand experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="posrel">
        <div className="carousel-wrapper">
          <div className="owl-carousel owl-theme" id="rentalbooth">
            <div className="item">
              <div className="figure">
                <img src="images/rt1.webp" width="356" height="384" alt="" />
              </div>
              <div className="caption">
                <h4 className="title">10x20</h4>
                <h5 className="smalltitle">Booth Rental</h5>
                <div className="bannerbtn"><a href="https://radonexhibition.com/10x20-trade-show-booth/">Explore Design <i className="fa fa-angle-right"></i></a></div>
              </div>
            </div>
            <div className="item">
              <div className="figure">
                <img src="images/rt1.webp" width="356" height="384" alt="" />
              </div>
              <div className="caption">
                <h4 className="title">10x30</h4>
                <h5 className="smalltitle">Booth Rental</h5>
                <div className="bannerbtn"><a href="https://radonexhibition.com/10x30-trade-show-booth/">Explore Design <i className="fa fa-angle-right"></i></a></div>
              </div>
            </div>
            <div className="item">
              <div className="figure">
                <img src="images/rt1.webp" width="356" height="384" alt="" />
              </div>
              <div className="caption">
                <h4 className="title">20x20</h4>
                <h5 className="smalltitle">Booth Rental</h5>
                <div className="bannerbtn"><a href="https://radonexhibition.com/20x20-trade-show-booth/">Explore Design <i className="fa fa-angle-right"></i></a></div>
              </div>
            </div>
            <div className="item">
              <div className="figure">
                <img src="images/rt1.webp" width="356" height="384" alt="" />
              </div>
              <div className="caption">
                <h4 className="title">20x30</h4>
                <h5 className="smalltitle">Booth Rental</h5>
                <div className="bannerbtn"><a href="https://radonexhibition.com/20x30-trade-show-booth/">Explore Design <i className="fa fa-angle-right"></i></a></div>
              </div>
            </div>
            <div className="item">
              <div className="figure">
                <img src="images/rt1.webp" width="356" height="384" alt="" />
              </div>
              <div className="caption">
                <h4 className="title">20x40</h4>
                <h5 className="smalltitle">Booth Rental</h5>
                <div className="bannerbtn"><a href="https://radonexhibition.com/20x40-trade-show-booth/">Explore Design <i className="fa fa-angle-right"></i></a></div>
              </div>
            </div>
            <div className="item">
              <div className="figure">
                <img src="images/rt1.webp" width="356" height="384" alt="" />
              </div>
              <div className="caption">
                <h4 className="title">30x30</h4>
                <h5 className="smalltitle">Booth Rental</h5>
                <div className="bannerbtn"><a href="https://radonexhibition.com/30x30-trade-show-booth/">Explore Design <i className="fa fa-angle-right"></i></a></div>
              </div>
            </div>
            <div className="item">
              <div className="figure">
                <img src="images/rt1.webp" width="356" height="384" alt="" />
              </div>
              <div className="caption">
                <h4 className="title">30x40</h4>
                <h5 className="smalltitle">Booth Rental</h5>
                <div className="bannerbtn"><a href="https://radonexhibition.com/30x40-trade-show-booth/">Explore Design <i className="fa fa-angle-right"></i></a></div>
              </div>
            </div>
            <div className="item">
              <div className="figure">
                <img src="images/rt1.webp" width="356" height="384" alt="" />
              </div>
              <div className="caption">
                <h4 className="title">40x40</h4>
                <h5 className="smalltitle">Booth Rental</h5>
                <div className="bannerbtn"><a href="https://radonexhibition.com/40x40-trade-show-booth/">Explore Design <i className="fa fa-angle-right"></i></a></div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="rentalssbg">
      <div className="container text-center position-relative zindex-sticky">
        {/* Top Badge */}
        <div className="rentalshot">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-lucide="sparkles"
            className="lucide lucide-sparkles w-4 h-4"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
            <path d="M20 2v4" />
            <path d="M22 4h-4" />
            <circle cx={4} cy={20} r={2} />
          </svg>
          Rent It. Love It. No Stress.
        </div>
        {/* Heading */}
        <h2 className="renttitle">Rent custom booths  <span>with zero Hassle</span></h2>
        <div className="buttongetstarted"><a href="https://radonexhibition.com/exhibit-form/">Get Started <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></div>
        {/* Features */}
        <div className="row justify-content-center mt-4">
          <div className="col-auto mb-2">
            <div className="d-flex align-items-center bg-white px-3 py-2 rounded-pill shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#CE713A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check-circle"
                className="lucide lucide-check-circle w-6 h-6 text-[#D56E35] flex-shrink-0"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <span className="fontsweight">Nationwide delivery</span>
            </div>
          </div>
          <div className="col-auto mb-2">
            <div className="d-flex align-items-center bg-white px-3 py-2 rounded-pill shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#CE713A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check-circle"
                className="lucide lucide-check-circle w-6 h-6 text-[#D56E35] flex-shrink-0"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <span className="fontsweight">Flexible Pricing</span>
            </div>
          </div>
          <div className="col-auto mb-2">
            <div className="d-flex align-items-center bg-white px-3 py-2 rounded-pill shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#CE713A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check-circle"
                className="lucide lucide-check-circle w-6 h-6 text-[#D56E35] flex-shrink-0"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <span className="fontsweight">Full-service support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="excellencbg">
      <div className="container">
        <div className="max-w-3xl text-center">
          <span className="exclnttext">
            A successful event starts with Radon LLC
          </span>
          <h2 className="maintitle mb-3">A Decade of Excellence</h2>
          <div className="shrtdesc">
            <p>
              Building on the established legacy of Radon LLC in servicing the
              USA exhibition industry, Radon Exhibitions delivers
              state-of-the-art exhibition display stand solutions tailored to
              your needs.
            </p>
          </div>
        </div>
        <div className="max-w-4xl">
          <div className="row" style={{ margin: "3rem 0 2rem" }}>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="excoulmn">
                <h4 className="exlttl">1000+</h4>
                <p className="fontbarw">Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="excoulmn">
                <h4 className="exlttl">500+</h4>
                <p className="fontbarw">Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="excoulmn">
                <h4 className="exlttl">50+</h4>
                <p className="fontbarw">Cities Nationwide</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="excoulmn">
                <h4 className="exlttl">24/7</h4>
                <p className="fontbarw">Support</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bannerbtn">
          <a href="https://radonexhibition.com/exhibition-stand-builders/">Read More</a>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="clientreviewbg">
      <div className="container">
        <div className="max-w-3xl text-center mb-3">
          <h2 className="maintitle mb-2">Positive Reviews from Our Clients</h2>
          <div className="shrtdesc">
            <p>
              Our clients love the results we deliver — their words inspire us
              to keep raising the bar every day.
            </p>
          </div>
        </div>
        <div className="owl-carousel owl-theme" id="testimonial">
          <div className="item">
            <div className="colreview">
              <div className="starbg">★★★★★</div>
              <p className="textsm">
                &ldquo;Our booth was the busiest in the hall. The team handled
                everything perfectly.&rdquo;
              </p>
              <div className="clientinfo">
                <div className="clientlogo"><img src="images/ct1.webp" width="50" height="50" alt="" /></div>
                <div>
                  <div className="clientname">Alex R.</div>
                  <span className="clientpositon">Marketing Director</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="colreview">
              <div className="starbg">★★★★★</div>
              <p className="textsm">
                &ldquo;Our booth was the busiest in the hall. The team handled
                everything perfectly.&rdquo;
              </p>
              <div className="clientinfo">
                <div className="clientlogo"><img src="images/ct1.webp" width="50" height="50" alt="" /></div>
                <div>
                  <div className="clientname">Alex R.</div>
                  <span className="clientpositon">Marketing Director</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="colreview">
              <div className="starbg">★★★★★</div>
              <p className="textsm">
                &ldquo;Our booth was the busiest in the hall. The team handled
                everything perfectly.&rdquo;
              </p>
              <div className="clientinfo">
                <div className="clientlogo"><img src="images/ct1.webp" width="50" height="50" alt="" /></div>
                <div>
                  <div className="clientname">Alex R.</div>
                  <span className="clientpositon">Marketing Director</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="colreview">
              <div className="starbg">★★★★★</div>
              <p className="textsm">
                &ldquo;Our booth was the busiest in the hall. The team handled
                everything perfectly.&rdquo;
              </p>
              <div className="clientinfo">
                <div className="clientlogo"><img src="images/ct1.webp" width="50" height="50" alt="" /></div>
                <div>
                  <div className="clientname">Alex R.</div>
                  <span className="clientpositon">Marketing Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="seocontentbg">
      <div className="container">
        <div className="max-w-4xl text-center mb-3">
          <h2 className="maintitle mb-3">
            Turning Visions into Reality – Rent, Buy, or Go Turnkey
          </h2>
          <div className="shrtdesc mb-3">
            <p className="mb-3">
              RADON LLC – As a most trusted Las Vegas exhibitions stand
              builders, we combine creativity, craftsmanship, and technology to
              deliver world-class booths tailored to your brand which includes
              Custom Trade show booth rentals, booth construction and display
              rental services.
            </p>
            <p className="mb-3 seoitalic">
              &ldquo;Every booth is built with innovation to ensure your brand stands
              out on the show floor.&rdquo;
            </p>
            <p className="mb-3">
              RADON LLC is recognized among the top trade show display rental
              companies for delivering turnkey trade show exhibit rentals in Las
              Vegas along with across the USA. Our professional trade show booth
              design team located in Las Vegas creates engaging spaces that
              attract visitors and generate leads.
            </p>
            <p className="mb-3">
              From design to delivery, we handle every detail — making us your
              trusted Trade Show Exhibit Rental Experts.
            </p>
            <h2 className="maintitle mb-3 textred">
              Turning Visions into Reality – Rent, Buy, or Go Turnkey
            </h2>
            <p>
              Choose RADON Exhibition LLC — Your trusted partner for trade show
              booth rentals, custom trade show exhibits, and exhibit solutions
              in Las Vegas and across the USA that inspire and engage.
            </p>
          </div>
          <div className="bannerbtn">
            <a href="https://radonexhibition.com/quote-form/">Get a Quote</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="faqbg">
      <div className="container">
        <div className="bor-bg">
          <div className="tab-button"><i className="fa fa-check"></i> Do you provide mockups before booth fabrication?</div>
          <div className="tab-caption">
            <p>Yes, we offer detailed 3D mockups of your trade show exhibit rentals before moving to production.</p>
          </div>
        </div>
        <div className="bor-bg">
          <div className="tab-button"><i className="fa fa-check"></i> How customizable are your trade show display rentals?</div>
          <div className="tab-caption">
            <p>Our trade show booth display rentals are highly customizable to align with your brand&apos;s goals and show-specific requirements.</p>
          </div>
        </div>
        <div className="bor-bg">
          <div className="tab-button"><i className="fa fa-check"></i> Do you manage installation and logistics?</div>
          <div className="tab-caption">
            <p>Absolutely. We handle shipping, installation, dismantling, and even post-show storage.</p>
          </div>
        </div>
        <div className="bor-bg">
          <div className="tab-button"><i className="fa fa-check"></i> Is on-site supervision included?</div>
          <div className="tab-caption">
            <p>Yes. For every exhibit booth rental, we assign a project manager to oversee operations and ensure a smooth experience.</p>
          </div>
        </div>
        <div className="bor-bg">
          <div className="tab-button"><i className="fa fa-check"></i> Can you store booth materials between shows?</div>
          <div className="tab-caption">
            <p>Yes, we offer secure warehouse storage for your booth components between events.</p>
          </div>
        </div>
        <div className="bor-bg">
          <div className="tab-button"><i className="fa fa-check"></i> How do you help our booth stand out?</div>
          <div className="tab-caption">
            <p>As a seasoned trade show booth rental provider, we ensure your design incorporates the latest tech, interactivity, and industry-specific trends to draw maximum attention.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </>
    );
}
