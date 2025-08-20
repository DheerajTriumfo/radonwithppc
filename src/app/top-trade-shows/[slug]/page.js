import '../../../styles/tradeshow-detail.css';
import Tradeshowdetaillist from './tradeshowdetail.js';

export async function generateMetadata({ params }) {
  const slug = params.slug;

  try {
    const res = await fetch(`https://radonllcapi.mobel.us/public/api/tradeshowdetails/${slug}/`);
    if (!res.ok) throw new Error("Failed to fetch metadata");

    const data = await res.json();
    const tradeshow = data?.data?.[0];

    return {
      title: tradeshow?.meta_title || 'Trade Show Detail',
      description: tradeshow?.meta_desc?.replace(/<[^>]*>/g, '').slice(0, 150) || 'Trade show details',
    };
  } catch (error) {
    return {
      title: 'Trade Show Detail',
      description: 'Unable to load trade show data',
    };
  }
}

export default  function TradeshowDetail({ params }) {
  const slug =  params.slug;

  return(
  	<>
  		<Tradeshowdetaillist slug={slug} />
  	</>
  	);
}