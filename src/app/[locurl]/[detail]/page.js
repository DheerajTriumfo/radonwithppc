import { notFound } from "next/navigation";
import "../../../styles/owl.carousel.min.css";
import styles from "../../../styles/boothdetail.css";
import Detailcarousel from "./Carouseldetail.js";
import SidebarQuoteForm from "./SidebarQuoteForm.js";
import GetboothDetailform from "./detailform.js";
import Image from "next/image";
import Link from "next/link";

const baseUrl = "https://radonllcapi.mobel.us/public";

const stripHtml = (value) =>
  typeof value === "string"
    ? value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
    : "";

async function fetchBoothDetail(identifier) {
  if (!identifier) return null;
  try {
    const response = await fetch(`${baseUrl}/api/viewboothdetail/${identifier}`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json().catch(() => null);
    return data?.data || null;
  } catch {
    return null;
  }
}

async function resolveBoothDetail(detail) {
  const raw = typeof detail === "string" ? detail : detail?.toString() || "";
  const candidates = Array.from(
    new Set(
      [raw.toUpperCase(), raw.toLowerCase(), raw]
        .map((value) => value.trim())
        .filter(Boolean)
    )
  );

  for (const candidate of candidates) {
    const booth = await fetchBoothDetail(candidate);
    if (booth) {
      return { booth, identifier: candidate };
    }
  }

  return { booth: null, identifier: candidates.at(0) || "" };
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { locurl, detail } = params;
  const detailSlug = detail?.toString().toLowerCase() || "";
  const canonicalUrl = detailSlug
    ? `https://radonexhibition.com/${locurl}/${detailSlug}/`
    : `https://radonexhibition.com/${locurl}/`;

  const { booth } = await resolveBoothDetail(detail);

  if (!booth) {
    return {
      title: "Trade Show Booth Rental Designs | RADON",
      description: "Discover customizable trade show booth designs crafted by RADON.",
      alternates: { canonical: canonicalUrl },
    };
  }

  // Try all possible database field variations for meta title
  const rawTitle =
    booth.meta_title ||
    booth.metatitle ||
    booth.metaTitle ||
    booth.title ||
    booth.boothtitle ||
    booth.booth_title ||
    "";

  // Use dynamic title from database, or create fallback based on booth size
  const title =
    (typeof rawTitle === "string" && rawTitle.trim()) ||
    (booth.boothsize && booth.skucode
      ? `${String(booth.boothsize).toUpperCase()} Trade Show Booth Rental ${booth.skucode} | RADON`
      : booth.boothsize
      ? `${String(booth.boothsize).toUpperCase()} Trade Show Booth Rental | RADON`
      : "Trade Show Booth Rental Designs | RADON");

  // Try all possible database field variations for meta description
  const rawDescription =
    booth.meta_desc ||
    booth.metadesc ||
    booth.meta_description ||
    booth.metadescription ||
    booth.description ||
    booth.shortdesc ||
    booth.short_description ||
    booth.desc ||
    "";

  // Use dynamic description from database, or create fallback
  const description =
    stripHtml(rawDescription) ||
    (booth.boothsize && booth.skucode
      ? `Explore our ${String(booth.boothsize).toUpperCase()} trade show booth rental design ${booth.skucode}. Customizable exhibits crafted by RADON for your brand presence.`
      : booth.boothsize
      ? `Discover our range of ${String(booth.boothsize).toUpperCase()} trade show booth rentals. Customizable exhibits crafted by RADON.`
      : "Discover customizable trade show booth designs crafted by RADON.");

  const ogImages = [];
  if (booth.thumbnail) {
    ogImages.push(`${baseUrl}/uploads/rentalexhibition/${booth.thumbnail}`);
  } else if (booth.meta_image) {
    ogImages.push(`${baseUrl}/uploads/meta/${booth.meta_image}`);
  }

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: ogImages.map((url) => ({ url })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages,
    },
  };
}

export default async function BoothDetail(props) {
  const params = await props.params;
  const { locurl, detail } = params;
  const detailLower = detail.toLowerCase();
  const detailUpper = detail.toUpperCase();

  let result = await fetch(`${baseUrl}/api/viewboothdetail/${detailLower}`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!result.ok) {
    result = await fetch(`${baseUrl}/api/viewboothdetail/${detailUpper}`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });
  }

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
                          <Link href={`/${related.boothsize}-trade-show-booth/${related.url}/`}>CONTACT US</Link>
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
