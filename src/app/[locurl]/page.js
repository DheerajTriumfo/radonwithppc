import '../../styles/location-detail.css';
import styles from '../../styles/boothsize.module.css';
import '../../styles/owl.carousel.min.css';
//import Script from 'next/script';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import QuoteForm from './includeform.js';
import CarouselSection from './CarouselSection.jsx';





const baseUrl = 'https://radonllcapi.mobel.us/public';


async function getPageData(locurl) {
    if (locurl.endsWith('-trade-show-booth')) {
        const boothSize = locurl.replace('-trade-show-booth', '');
        const res = await fetch(`${baseUrl}/api/viewboothbysize/${boothSize}/`, {
            cache: 'no-store',
        });
        if (!res.ok) return null;
        const data = await res.json();
        if (!data?.data?.length) return null;

        return { type: 'booth', boothSize, ...data };
    }

    // Location page
    const res = await fetch(`${baseUrl}/api/viewlocationdetail/${locurl}/`, {
        cache: 'no-store',
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data?.data?.length) return null;

    return { type: 'location', ...data };
}
export async function generateMetadata({ params }) {
    const pageData = await getPageData(params.locurl);
    if (!pageData) return notFound();

    if (pageData.type === 'booth') {
        const pageMeta = pageData.pagedata?.[0] || {};
        return {
            title: pageMeta?.meta_title || `Explore ${pageData.boothSize} Trade Show Booth Designs`,
            description: pageMeta?.meta_description || `Discover our range of ${pageData.boothSize} trade show booth rentals.`,
            openGraph: {
                title: pageMeta?.meta_title || `Explore ${pageData.boothSize} Booths`,
                description: pageMeta?.meta_description || '',
                images: pageMeta?.meta_image
                    ? [`${baseUrl}/uploads/meta/${pageMeta.meta_image}`]
                    : [],
            },
            alternates: {
		          canonical: `https://www.radonexhibition.com/${params.locurl}/`,
		    },
        };
    }

    // Location meta
    const locdata = pageData.data[0];
    return {
        title: locdata.metatitle || `Trade Show Booth Rentals in ${locdata.cityname}`,
        description: locdata.metadesc || locdata.design,
        openGraph: {
            title: locdata.metatitle || `Trade Show Booth Rentals in ${locdata.cityname}`,
            description: locdata.metadesc || locdata.design,
            images: locdata.meta_image
                ? [`${baseUrl}/uploads/meta/${locdata.meta_image}`]
                : [],
        },
        alternates: {
	          canonical: `https://www.radonexhibition.com/${params.locurl}/`,
		},
    };
}

export default async function LocationDetail({ params })
{
	const { locurl } = params;
	if (locurl.endsWith('-trade-show-booth')) {
		const boothSize = locurl.replace('-trade-show-booth', '');
		const res = await fetch(`${baseUrl}/api/viewboothbysize/${boothSize}/`, {
			cache: 'no-store',
		});
		if (!res.ok) return notFound();
		const data = await res.json();
		if (!data?.data?.length) return notFound();
		const boothdata = data.data;
		const pagendata = data.pagedata;
		const booth = data.data[0];
		return (
			<>
				<section>
					<div className="bannerbg">
						<div className="container">
							<div className="widthsmall">
								<h1>EXPLORE <span>{boothSize}</span> TRADE SHOW BOOTH RENTAL DESIGNS</h1>
								{boothSize === '10x10' ? (
									<p>Check out our wide range of 10X10 trade show booth rentals to elevate your brand presence. All are customizable choices and we offer expert guidance to create a bespoke exhibit for you. Make an impactful presence at exhibitions with us.</p>
								) : boothSize === '10x20' ? (
									<p>Browse our impressive range of 10X20 trade show booth rentals to find the suitable one for your exhibition needs. These booths can be customized as per your needs. Our experts assist you in creating an outstanding exhibition experience with them.</p>
								) : boothSize === '10x30' ? (
									<p>Take a look at our vast range of 10X30 trade show booth rentals for an impactful brand presence. All of them are customizable and we offer expert guidance to create a standout exhibit. Make a lasting impression at your next trade show.</p>
								) : boothSize === '20x20' ? (
									<p>Discover our premium range of 20x20 trade show booth rentals, thoughtfully designed to showcase your brand with impact. Fully customizable and backed by expert guidance, our booths help you create a powerful, lasting impression at your next event. Let us bring your vision to life.</p>
								) : boothSize === '20x30' ? (
									<p>Check out our extensive range of 20X30 trade show booth rentals for an exceptional brand presence. These are completely customizable and our experts assist you in creating a brilliant booth incorporating your brand essence and vision.</p>
								) : boothSize === '20x40' ? (
									<p>Discover an impressive range of 20X40 trade show booth rentals for a captivating brand presence. All of them can customized according to specific needs and our experts help you create a stunning booth that sets you apart from the crowd.</p>
								) : boothSize === '30x30' ? (
									<p>Take a look at our outstanding range of 30X30 trade show booth rentals to transform your brand presence. These are customizable choices, and our experts offer assistance in building a bespoke booth that exceeds your expectations.</p>
								) : boothSize === '30x40' ? (
									<p>Discover our vast array of 30X40 trade show booth rentals for impactful brand presence. These are customizable options and we help you incorporate your brand essence in it with perfection. Make an unforgettable impression at your next event.</p>
								) : boothSize === '40x40' ? (
									<p>Take a peek at our huge collection of 40X40 trade show booth rentals for a distinguished presence. All of them are customizable and our experts guide you in creating a unique and captivating booth that perfectly carries your brand essence.</p>
								) : boothSize === '40x50' ? (
									<p>RADON LLC offers a wide range of engaging 40x50 trade show booth rentals that can be tailored to your needs at minimal costs. Explore the most appropriate booth design to meet your brand and exhibition needs.</p>
								) : null}
								<div className={styles.boothsizequotebtn}><Link href="/exhibit-form/">REQUEST FOR FREE DESIGN</Link></div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className={styles.boothsizebg}>
						<div className="container">
							<div className="row" id="ajax_result">
								
							</div>
							<div className="row" id="hiddenaftersearch">
								{boothdata.map((row, index) => (
								<div key={row.id || index} className="col-lg-4 col-md-6 col-12">
									<div className={styles.boothbg}>
										<div className={styles.figure}><Link href={`/${row.p_slug}/${row.url.toLowerCase()}/`}><img src={`https://radonllcapi.mobel.us/public/uploads/rentalexhibition/${row.thumbnail}`} width={1024} height={768} alt="" /></Link></div>
										<div className={styles.caption}>
											<div className={styles.title}><span>BOOTH CODE: </span>{row.skucode}</div>
											<QuoteForm/>
										</div>
									</div>
								</div>
								))}
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className={styles.citylistingbg}>
						<div className={styles.container}>
							<div className={styles.widthsmall}>
								<h2 className={styles.maintitle}>DIDNT FIND THE PERFECT DESIGN?</h2>
							</div>
							<h2 className={styles.maintitle} style={{ color: '#f9742f' }}>GET A FREE CUSTOM DESIGN CREATED TO MATCH YOUR EXACT REQUIREMENTS!</h2>
							<div className={styles.widthsmall}>
								<div className={styles.shrtdesc}>
									<p>Simply provide us with your booth requirements, and our exhibit design team will create custom booth designs tailored to your budget and marketing goals. Receive detailed quotations along with the designs.</p>
								</div>
								<div className="btnprimary text-center mrtnone"><Link href="/exhibit-form/">REQUEST FREE DESIGN</Link></div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="seocontentbg">
						<div className="container">
								{pagendata && pagendata.length > 0 ? (
									pagendata.map((page, index) => (
											<div key={page.id || index} className="shrtdesc" dangerouslySetInnerHTML={{ __html: page.p_description }} />
											
									))

								) : (
									<p>No additional details available.</p>
									)}
								
						</div>
					</div>
				</section>

			</>
		);
	}
	else{
	console.log(`Fetching: https://radonllcapi.mobel.us/public/api/viewlocationdetail/${locurl}/`);
	const res = await fetch(`https://radonllcapi.mobel.us/public/api/viewlocationdetail/${locurl}/`, {
	    cache: 'no-store',
	});

	if (!res.ok) return notFound();

	const data = await res.json();
	
	if (!data?.data || data.data.length === 0) {
		return notFound();
	}
	const locdata = data.data[0];

	

	return(
		<>
			<section>
				<div className="bannerbg">
					<div className="container">
						<div className="widthsmall">
							<h1>TRADE SHOW BOOTH RENTAL<br/><span>{locdata.cityname}</span></h1>
							<p>{locdata.design}</p>
						</div>
						<div className="boothsearchbg">
							<div className="forminner">
							    <form action="" method="post" encType={`multipart/form-data`}>
									<div className="row">
										<div className="col-md-5 col-xs-12">
											<select name="cityselection" id="cityselection">
					                            <option value="Las Vegas">Las Vegas</option>
					                            <option value="Other City">Other City</option>
					                        </select>
										</div>
										<div className="col-md-5 col-xs-12">
											<select name="boothsizeselection" id="boothsizeselection" required="">
												<option value="10x10">10x10</option>
												<option value="10x20">10x20</option>
												<option value="10x30">10x30</option>
												<option value="20x20">20x20</option>
												<option value="20x30">20x30</option>
												<option value="20x40">20x40</option>
												<option value="30x30">30x30</option>
												<option value="30x40">30x40</option>
												<option value="40x40">40x40</option>
											</select>
										</div>
										<div className="col-md-2 col-xs-12">
											<input type="submit" name="submit" id="search_boothsize" value="Search"/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="boothsearchsizebg">
					<div className="container">
						<div className="row" id="ajax_result"></div>
					</div>
				</div>
			</section>
			<section>
				<div className="coreservicebg">
					<div className="container">
						<div className="row">
							<div className="col-lg-10 col-md-12 col-centered text-center">
								<p>{locdata.requirement}</p>
							</div>
						</div>
						<div className="ourservicebtn">
							<Link href="/exhibit-form/">Work With Us »</Link>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="maingoalbg">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-12 nopadding">
								<div className="figure"><Image src={`https://radonllcapi.mobel.us/public/uploads/servicearea/${locdata.city_img}`} width="584" height="424" loading="lazy" alt={`${locdata.alt_tag}`}/></div>
							</div>
							<div className="col-md-6 col-sm-12 bgwhite">
								<div className="caption">
									<h2 className="title">{locdata.toptitle}</h2>
									<div dangerouslySetInnerHTML={{ __html: locdata.topdesc }} />
									<div className="btnprimary"><Link href="/contact-us/" className="text-uppercase">CONTACT US</Link></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="boothsizebg">
					<div className="container">
						<div className="widthsmall text-center">
							{ 
								(!locdata.exploretittle && !locdata.exploredesc) ? (
								<>
									<h2 className="maintitle">EXPLORE TRADE SHOW BOOTH DESIGNS BY BOOTH SIZES</h2>
									<div className="shrtdesc">
										<p>Discover tailor-made trade show booth rentals in all sizes. Stand out with personalized exhibits that fit your brand perfectly. Elevate your presence and engage your audience. Explore now!</p>
									</div>
								</>
								) : (
								<>
									<h2 className="maintitle">{locdata.exploretittle}</h2>
									<div className="shrtdesc" dangerouslySetInnerHTML={{ __html: locdata.exploredesc }} />
								</>
								)
							}
						</div>
						<CarouselSection/>
					</div>
				</div>
			</section>
			<section>
				<div className="cstopcalltoaction">
					<div className="container">
						<div className="csinner">
							<div className="actiontext">WE WOULD LOVE TO WORK WITH YOU</div>
							<div className="actionbtn"><Link href="/contact-us/">CONTACT US <i className="fa fa-long-arrow-right"></i></Link></div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="seocontentbg">
					<div className="container">
						<div className="widthsmall text-center"><h2 className="maintitle">{locdata.bottomtitle}</h2></div>
						<div className="shrtdesc text-center" dangerouslySetInnerHTML={{ __html: locdata.bottomdesc }} />
					</div>
				</div>
			</section>

			
			


		</>
	);
}
}