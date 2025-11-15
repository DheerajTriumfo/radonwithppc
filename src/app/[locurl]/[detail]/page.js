import { notFound } from 'next/navigation';
import styles from '../../../styles/boothdetail.css';
import Script from 'next/script';
import '../../../styles/owl.carousel.min.css';
import GetboothDetailform from './detailform.js';
import Detailcarousel from './Carouseldetail.js';
import SidebarQuoteForm from './SidebarQuoteForm.js';
import Image from 'next/image';
import Link from 'next/link';

const baseUrl = 'https://radonllcapi.mobel.us/public';

export async function generateMetadata({ params }) {
  const { detail } = await params;

  const detailLower = detail.toLowerCase();
  const detailUpper = detail.toUpperCase();

  const result = await fetch(`${baseUrl}/api/viewboothdetail/${detailUpper}`, {
    cache: 'no-store',
  });

  if (!result.ok) return {};
  const data = await result.json().catch(() => null);
  if (!data?.data) return {};

  const booth = data.data;

  return {
    title: booth.metatitle || '',
    description: booth.metadescription || '',
    alternates: {
      canonical: `https://radonexhibition.com/${booth.boothsize}-trade-show-booth/${detailLower}/`,
    },
  };
}


export default async function BoothDetail({ params }) {
  const { locurl, detail } = await params;
const detailLower = detail.toLowerCase();


  const result = await fetch(`${baseUrl}/api/viewboothdetail/${detailLower}`, {
    cache: 'no-store',
  });

  if (!result.ok) {
    console.error("API Error:", result.status, result.statusText);
    return notFound();
  }

  let data;
  try {
    const text = await result.text();
    data = JSON.parse(text);
  } catch (err) {
    console.error("Response is not JSON");
    return notFound();
  }


  if (!data?.data) return notFound();


  const boothdetaildata = data.data;
  const boothimg = data.rentalimg || [];
  const boothrelated = data.relatedbooth || [];

  return (
    <>
      {boothdetaildata?.skucode ? (
        <section>
          <div className="boothdetailbg">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="figurebg">
                    <Detailcarousel
                      locurl={locurl}
                      detail={detail}
                      boothimg={boothimg}
                    />
                    <h2 className="rboothtitle">
                      <span>BOOTH CODE: </span> {boothdetaildata.skucode}
                    </h2>
                    {/* <div className="btnbg">
                      <div className="row">
                        <div className="col-12">
                          <GetboothDetailform
                            skucode={boothdetaildata.skucode}
                            thumbnail={boothdetaildata.thumbnail}
                            boothsize={boothdetaildata.boothsize}
                          />
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="boothcaptionbg">
                    <SidebarQuoteForm
                      skucode={boothdetaildata.skucode}
                      thumbnail={boothdetaildata.thumbnail}
                      boothsize={boothdetaildata.boothsize}
                    />
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
              {boothrelated.length > 0 ? (
                boothrelated.map((related, index) => (
                  <div
                    key={related.id || index}
                    className="col-lg-4 col-md-6 col-12"
                  >
                    <div className="boothbg">
                      <div className="figure">
                        <Link
                          href={`/${related.boothsize}-trade-show-booth/${related.url}`}
                        >
                          <Image
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
                          <span>BOOTH CODE: </span>
                          {related.skucode}
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
    </>
  );
}
