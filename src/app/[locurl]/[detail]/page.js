import { notFound } from 'next/navigation';
import styles from '../../../styles/boothdetail.css';
import Script from 'next/script';
import '../../../styles/owl.carousel.min.css';
import GetboothDetailform from './detailform.js';
import Image from 'next/image';
import Link from 'next/link';

const baseUrl = 'https://radonexhibition.com';

export default async function BoothDetail({ params }) {
  const { locurl, detail } = params;

  // Fetch booth details
  const result = await fetch(`${baseUrl}/api/viewboothdetail/${detail}/`, {
    cache: 'no-store',
  });

  if (!result.ok) return notFound();
  const data = await result.json();
  if (!data?.data) return notFound();

  const boothdetaildata = data.data;
  const boothimg = data.rentalimg;
  const boothrelated = data.relatedbooth;

  return (
    <>
      {boothdetaildata?.skucode ? (
        <section>
          <div className="boothdetailbg">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="figurebg">
                    <div className="owl-carousel owl-theme">
                      {boothimg && boothimg.length > 0 ? (
                        boothimg.map((btimg, index) => (
                          <div key={btimg.id || index} className="figure">
                            {/* Remove lazy load for the initial image */}
                            <img
                              className="carousel-image"
                              src={`${baseUrl}/uploads/multiexhibitrental/${btimg.rentalimg}`}
                              width={1024}
                              height={768}
                              alt={`Booth Image ${index + 1}`}
                              
                            />
                          </div>
                        ))
                      ) : (
                        <p>No additional details available.</p>
                      )}
                    </div>
                    <h2 className="rboothtitle">
                      <span>BOOTH CODE: </span> {boothdetaildata.skucode}
                    </h2>
                    <div className="btnbg">
                      <div className="row">
                        <div className="col-12">
                          <GetboothDetailform
                            skucode={boothdetaildata.skucode}
                            thumbnail={boothdetaildata.thumbnail}
                            boothsize={boothdetaildata.boothsize}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="boothcaptionbg">
                    <div className="featuresbg">
                      <div className="featuretitle">Package Includes :</div>
                      <ul>
                        <li>Booth properties shown in the design</li>
                        <li>New graphics as per client artwork</li>
                        <li>Lights (as shown)</li>
                        <li>Counter (as per stock availability)</li>
                        <li>Flooring – Single Color carpet/Vinyl</li>
                        <li>Furniture (as per stock availability)</li>
                        <li>Audio Visual (as per design)</li>
                        <li>Shipping to convention centre</li>
                        <li>Install and dismantle</li>
                        <li>Booth vacuuming during handover</li>
                        <li>Project Management</li>
                      </ul>
                    </div>
                    <div className="rentaltitle">Not Included:</div>
                    <p>Sales Tax, Material Handling (Drayage), Rigging Charges (If any), Booth Vacuuming during fair, Electrical Outlet, Labor to install electrical outlets. Electricity cost.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>SKUCODE not found</p>
      )}

      <section>
        <div className="boothsizebg">
          <div className="container">
            <div className="widthsmall text-center">
              <h2 className="maintitle">Related Booths</h2>
            </div>
            <div className="row">
              {boothrelated && boothrelated.length > 0 ? (
                boothrelated.map((related, index) => (
                  <div key={related.id || index} className="col-lg-4 col-md-6 col-12">
                    <div className="boothbg">
                      <div className="figure">
                        <Link href={`/${related.boothsize}-trade-show-booth/${related.url}`}>
                          <img
                            src={`${baseUrl}/uploads/rentalexhibition/${related.thumbnail}`}
                            width={350}
                            height={300}
                            alt={related.alttag || `Booth Image ${index + 1}`}
                            loading="lazy"
                          />
                        </Link>
                      </div>
                      <div className="caption">
                        <div className="title">
                          <span>BOOTH CODE: </span>{related.skucode}
                        </div>
                        <div className="btnsecondary">
                          <Link href="/free-design/">CONTACT US</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No additional details available.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Only initialize carousel after the page is ready */}
      <Script src="https://www.radonexhibition.eu/web/js/owl.carousel.js" strategy="afterInteractive" />
      <Script  strategy="afterInteractive">
        {`
          $(document).ready(function() {
            if (typeof $.fn.owlCarousel !== "undefined" && $('.owl-carousel').length > 0) {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 5,
                loop: true,
                margin: 30,
                autoplay: false,
                autoplayTimeout: 3000,
                smartSpeed: 1500,
                nav: true,
                dots: false,
                responsive: {
                  0: { items: 1 },
                  600: { items: 1 },
                  1000: { items: 1 }
                }
              });

              
            }
          });
        `}
      </Script>
    </>
  );
}
