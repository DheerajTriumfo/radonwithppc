'use client';
import react, { useState, useEffect} from 'react';

export default function Tradeshowdetaillist({slug})
{
	const [tradedetail, setTradedetail] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	

	useEffect(() => {
    if (!slug) return; // Don't run until slug is available

    const fetchProductData = async () => {
      try {
        console.log(`Fetching: https://radonexhibition.com/api/tradeshowdetails/${slug}/`);
        const response = await fetch(`https://radonexhibition.com/api/tradeshowdetails/${slug}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }

        const data = await response.json();
        setTradedetail(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [slug]);


	const tradeshow = tradedetail?.data?.[0];
	const startDate = new Date(tradeshow?.start_date);
	const endDate = new Date(tradeshow?.end_date);
	const startDateDay = startDate.getDate();
	const endDateDay = endDate.getDate();
	const monthYear = endDate.toLocaleString('default', { month: 'short', year: 'numeric' });
	return(
		<>

		<p>{tradeshow?.event_name}</p>
<p>{tradeshow?.tradshow_title}</p>
		</>
		);
}