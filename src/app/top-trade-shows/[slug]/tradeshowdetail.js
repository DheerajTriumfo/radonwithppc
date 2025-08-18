'use client';
import react, { useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Tradeshowdetaillist({slug})
{
	const [tradedetail, setTradedetail] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });
	

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

	useEffect(() => {
		if (!tradeshow?.start_date) return;

	  const countDownDate = new Date(tradeshow.start_date).getTime();

	  const interval = setInterval(() => {
	    const now = new Date().getTime();
	    const distance = countDownDate - now;

	    if (distance > 0) {
	      setCountdown({
	        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
	        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
	        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
	        seconds: Math.floor((distance % (1000 * 60)) / 1000),
	        expired: false,
	      });
	    } else {
	      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
	      clearInterval(interval);
	    }
	  }, 1000);

	  return () => clearInterval(interval);
	}, [tradeshow?.start_date]);

	if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!tradeshow) return <p>No event found.</p>;

	const startDate = new Date(tradeshow.start_date);
	const endDate = new Date(tradeshow.end_date);
  const formattedDate = `${startDate.getDate()}–${endDate.getDate()} ${endDate.toLocaleString('default', { month: 'short', year: 'numeric' })}`;
	return(
		<>
			<section>
				<div className="bannerbg">
					<div className="container">
						<div className="tradelogo"><Image src={`https://radonexhibition.com/uploads/tradeshow/${tradeshow.event_logo}`} alt={`${tradeshow.alt_tag}`} width="225" height="225" /></div>
						<div className="calinfo">
							<div className="place">{tradeshow.city}, {tradeshow.country}</div>
							<div className="datbg">{formattedDate}</div>
						</div>
						<div className="counter-wrapper">
              <div className="counter-inner">
                  <div className="counter-box" id="counteventday">{countdown.days}</div>
                  <p>Days</p>
              </div>
              <div className="counter-inner">
                  <div className="counter-box" id="counteventhour">{countdown.hours}</div>
                  <p>Hours</p>
              </div>
              <div className="counter-inner">
                  <div className="counter-box" id="counteventminut">{countdown.minutes}</div>
                  <p>Minutes</p>
              </div>
              <div className="counter-inner">
                  <div className="counter-box" id="counteventsec">{countdown.seconds}</div>
                  <p>Second</p>
              </div>
          </div>
					</div>
				</div>
			</section>
			<section>
				<div className="sectiontop">
					<div className="container">
						<div className="widthsmall text-center">
							<h1 className="maintitle">{tradeshow.tradshow_title}</h1>
							<div className="shrtdesc"
  								dangerouslySetInnerHTML={{ __html: tradeshow.description }}
							/>
							<div className="btnprimary">
								<Link href="/">Request For Booth Quotation</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="boothsizebg">
					<div className="container">
						<div className="widthsmall text-center">
							<h2 className="maintitle">Customized Trade Show Booth <br/>Rental in All Sizes</h2>
							<div className="shrtdesc">
								<p>Discover tailor-made trade show booth rentals in all sizes. Stand out with personalized exhibits that fit your brand perfectly. Elevate your presence and engage your audience. Explore now!</p>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4 col-md-6 col-12">
								<div className="boothbg">
		    						<Link href="/10x10-trade-show-booth/">
		    							<div className="figure">
		    							    <Image src="/images/10x10n.webp" loading="lazy" width="350" height="300" alt="10x10 custom trade show booth design" />
		    							</div>
		    							<div className="caption">
		    								<div className="title">10 X 10</div>
		    								<div className="corner">Trade Show Booth Designs</div>
		    							</div>
		    						</Link>
		    					</div>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<div className="boothbg">
		    						<Link href="/10x20-trade-show-booth/">
		    							<div className="figure">
		    							    <Image src="/images/10x20n.webp" loading="lazy" width="350" height="300" alt="10x20 custom trade show booth design"/>
		    							</div>
		    							<div className="caption">
		    								<div className="title">10 X 20</div>
		    								<div className="corner">Trade Show Booth Designs</div>
		    							</div>
		    						</Link>
		    					</div>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<div className="boothbg">
		    						<Link href="/10x30-trade-show-booth/">
		    							<div className="figure">
		    							    <Image src="/images/10x30n.webp" loading="lazy" width="350" height="300" alt="10x30 custom trade show booth design"/>
		    							</div>
		    							<div className="caption">
		    								<div className="title">10 X 30</div>
		    								<div className="corner">Trade Show Booth Designs</div>
		    							</div>
		    						</Link>
		    					</div>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<div className="boothbg">
		    						<Link href="/20x20-trade-show-booth/">
		    							<div className="figure">
		    							    <Image src="/images/20x20n.webp" loading="lazy" width="350" height="300" alt="20x20 custom trade show booth design"/>
		    							</div>
		    							<div className="caption">
		    								<div className="title">20 X 20</div>
		    								<div className="corner">Trade Show Booth Designs</div>
		    							</div>
		    						</Link>
		    					</div>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<div className="boothbg">
		    						<Link href="/20x30-trade-show-booth/">
		    							<div className="figure">
		    							    <Image src="/images/20x30n.webp" loading="lazy" width="350" height="300" alt="20x30 custom trade show booth design"/>
		    							</div>
		    							<div className="caption">
		    								<div className="title">20 X 30</div>
		    								<div className="corner">Trade Show Booth Designs</div>
		    							</div>
		    						</Link>
		    					</div>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<div className="boothbg">
		    						<Link href="/20x40-trade-show-booth/">
		    							<div className="figure">
		    							    <Image src="/images/20x40n.webp" loading="lazy" width="350" height="300" alt="20x40 custom trade show booth design"/>
		    							</div>
		    							<div className="caption">
		    								<div className="title">20 X 40</div>
		    								<div className="corner">Trade Show Booth Designs</div>
		    							</div>
		    						</Link>
		    					</div>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<div className="boothbg">
		    						<Link href="/30x30-trade-show-booth/">
		    							<div className="figure">
		    							    <Image src="/images/30x30n.webp" loading="lazy" width="350" height="300" alt="30x30 custom trade show booth design"/>
		    							</div>
		    							<div className="caption">
		    								<div className="title">30 X 30</div>
		    								<div className="corner">Trade Show Booth Designs</div>
		    							</div>
		    						</Link>
		    					</div>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<div className="boothbg">
		    						<Link href="/30x40-trade-show-booth/">
		    							<div className="figure">
		    							    <Image src="/images/30x40n.webp" loading="lazy" width="350" height="300" alt="30x40 custom trade show booth design"/>
		    							</div>
		    							<div className="caption">
		    								<div className="title">30 X 40</div>
		    								<div className="corner">Trade Show Booth Designs</div>
		    							</div>
		    						</Link>
		    					</div>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<div className="boothbg">
		    						<Link href="/40x40-trade-show-booth/">
		    							<div className="figure">
		    							    <Image src="/images/40x40n.webp" loading="lazy" width="350" height="300" alt="40x40 custom trade show booth design"/>
		    							</div>
		    							<div className="caption">
		    								<div className="title">40 X 40</div>
		    								<div className="corner">Trade Show Booth Designs</div>
		    							</div>
		    						</Link>
		    					</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="seocontentbg">
					<div className="container">
						<div className="widthsmall text-center"><h2 className="maintitle">{tradeshow.bottom_title}</h2></div>
						<div className="shrtdesc text-center"
							dangerouslySetInnerHTML = {{ __html: tradeshow.bottom_desc }}
						/>
					</div>
				</div>
		</section>	
		</>
		);
}