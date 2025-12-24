import '../../../styles/tradeshow-detail.css';
import Tradeshowdetaillist from './tradeshowdetail.js';

export async function generateMetadata({ params }) {
  params = await params;
  const slug = params.slug;

  try {
    const res = await fetch(`https://radonllcapi.mobel.us/public/api/tradeshowdetails/${slug}/`);
    if (!res.ok) throw new Error("Failed to fetch metadata");

    const data = await res.json();
    const tradeshow = data?.data?.[0];

    return {
      title: tradeshow?.meta_title || 'Trade Show Detail',
      description: tradeshow?.meta_desc?.replace(/<[^>]*>/g, '').slice(0, 150) || 'Trade show details',
      alternates: {
          canonical: `https://radonexhibition.com/top-trade-shows/${slug}/`,
      },
    };
  } catch (error) {
    return {
      title: 'Trade Show Detail',
      description: 'Unable to load trade show data',
    };
  }
}

export default async function TradeshowDetail({ params }) {
  params = await params;
  const slug =  params.slug;

  // Fetch trade show data for breadcrumb
  let tradeshowName = "Trade Show";
  try {
    const res = await fetch(`https://radonllcapi.mobel.us/public/api/tradeshowdetails/${slug}/`);
    if (res.ok) {
      const data = await res.json();
      const tradeshow = data?.data?.[0];
      if (tradeshow?.tradeshowname) {
        tradeshowName = tradeshow.tradeshowname;
      }
    }
  } catch (error) {
    // Use default name if fetch fails
  }

  // Breadcrumb Schema for trade show detail pages
  const tradeshowUrl = `https://radonexhibition.com/top-trade-shows/${slug}/`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://radonexhibition.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Top Trade Shows",
        "item": "https://radonexhibition.com/top-trade-shows/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": tradeshowName,
        "item": tradeshowUrl
      }
    ]
  };

  return(
  	<>
  		<script
  			type="application/ld+json"
  			dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
  		/>
  		<Tradeshowdetaillist slug={slug} />
  	</>
  	);
}