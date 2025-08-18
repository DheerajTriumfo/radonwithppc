'use client';
import '../../styles/location-detail.css';
import styles from '../../styles/boothsize.module.css';
import '../../styles/owl.carousel.min.css';
import Script from 'next/script';
import { notFound } from 'next/navigation';
const baseUrl = 'https://radonexhibition.com';





export async function generateMetadata({ params }) {
  const baseUrl = 'https://radonexhibition.com';

  const res = await fetch(`${baseUrl}/api/viewlocationdetail/${params.locurl}/`, {
    cache: 'no-store',
  });

  const data = await res.json();

  return {
    title: data?.data?.metatitle || 'Default Title',
    description: data?.data?.metadescription || 'Default Description',
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
								<div className={styles.boothsizequotebtn}><a href="/exhibit-form/">REQUEST FOR FREE DESIGN</a></div>
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
										<div className={styles.figure}><a href={`${baseUrl}/${row.p_slug}/${row.url.toLowerCase()}/`}><img src={`${baseUrl}/uploads/rentalexhibition/${row.thumbnail}`} /></a></div>
										<div className={styles.caption}>
											<div className={styles.title}><span>BOOTH CODE: </span>{row.skucode}</div>
											<form onSubmit={(e) => {
												e.preventDefault();
												const quotedta = {
													skucode: row.skucode,
												    imagecode: row.thumbnail,
												    boothsize: row.boothsize,
												};
												localStorage.setItem('quotedata', json.stringify(quotedta));
												window.location.href = '/exhibit-form';
											}}>
											    <input type="hidden" name="skucode" value={row.skucode} />
											    <input type="hidden" name="imagecode" value={row.thumbnail} />
											    <input type="hidden" name="boothsize" value={row.boothsize} />
											    <input type="submit" name="submit" value="GET QUOTE" />
											</form>
										</div>
									</div>
								</div>
								)
								)}
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
	else{
	console.log(`Fetching: https://radonexhibition.com/api/viewlocationdetail/${locurl}/`);
	const res = await fetch(`https://radonexhibition.com/api/viewlocationdetail/${locurl}/`, {
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
				<div className="coreservicebg">
					<div className="container">
						<div className="row">
							<div className="col-lg-10 col-md-12 col-centered text-center">
								<p>{locdata.requirement}</p>
							</div>
						</div>
						<div className="ourservicebtn">
							<a href="">Work With Us »</a>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="maingoalbg">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-12 nopadding">
								<div className="figure"><img src={`https://radonexhibition.com/uploads/servicearea/${locdata.city_img}`} width="584" height="424" loading="lazy" alt={`${locdata.alt_tag}`}/></div>
							</div>
							<div className="col-md-6 col-sm-12 bgwhite">
								<div className="caption">
									<h2 className="title">{locdata.toptitle}</h2>
									<div dangerouslySetInnerHTML={{ __html: locdata.topdesc }} />
									<div className="btnprimary"><a href="/" className="text-uppercase">CONTACT US</a></div>
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
						<div className="owl-carousel owl-theme">
							<div className="boothbg">
								<a href="/10x10-trade-show-booth/">
									<div className="figure">
										<img src="/images/10x10n.webp" width="350" height="300" alt="" loading="lazy"/>
										<div className="overlaybooth">
											
										</div>
									</div>
									<div className="caption">
										<div className="title">10 X 10</div>
										<div className="corner">Trade Show Booth Rental</div>
									</div>
								</a>
							</div>
							<div className="boothbg">
								<a href="/10x20-trade-show-booth/">
									<div className="figure">
										<img src="/images/10x20n.webp" width="350" height="300" alt="" loading="lazy"/>
										<div className="overlaybooth">
											
										</div>
									</div>
									<div className="caption">
										<div className="title">10 X 20</div>
										<div className="corner">Trade Show Booth Rental</div>
									</div>
								</a>
							</div>
							<div className="boothbg">
								<a href="/10x30-trade-show-booth/">
									<div className="figure">
										<img src="/images/10x30n.webp" width="350" height="300" alt="" loading="lazy"/>
										<div className="overlaybooth">
											
										</div>
									</div>
									<div className="caption">
										<div className="title">10 X 30</div>
										<div className="corner">Trade Show Booth Rental</div>
									</div>
								</a>
							</div>
							<div className="boothbg">
								<a href="/20x20-trade-show-booth/">
									<div className="figure">
										<img src="/images/20x20n.webp" width="350" height="300" alt="" loading="lazy"/>
										<div className="overlaybooth">
											
										</div>
									</div>
									<div className="caption">
										<div className="title">20 X 20</div>
										<div className="corner">Trade Show Booth Rental</div>
									</div>
								</a>
							</div>
							<div className="boothbg">
								<a href="/20x30-trade-show-booth/">
									<div className="figure">
										<img src="/images/20x30n.webp" width="350" height="300" alt="" loading="lazy"/>
										<div className="overlaybooth">
											
										</div>
									</div>
									<div className="caption">
										<div className="title">20 X 30</div>
										<div className="corner">Trade Show Booth Rental</div>
									</div>
								</a>
							</div>
							<div className="boothbg">
								<a href="/20x40-trade-show-booth/">
									<div className="figure">
										<img src="/images/20x40n.webp" width="350" height="300" alt="" loading="lazy"/>
										<div className="overlaybooth">
											
										</div>
									</div>
									<div className="caption">
										<div className="title">20 X 40</div>
										<div className="corner">Trade Show Booth Rental</div>
									</div>
								</a>
							</div>
							<div className="boothbg">
								<a href="/30x30-trade-show-booth/">
									<div className="figure">
										<img src="/images/30x30n.webp" width="350" height="300" alt="" loading="lazy"/>
										<div className="overlaybooth">
											
										</div>
									</div>
									<div className="caption">
										<div className="title">30 X 30</div>
										<div className="corner">Trade Show Booth Rental</div>
									</div>
								</a>
							</div>
							<div className="boothbg">
								<a href="/30x40-trade-show-booth/">
									<div className="figure">
										<img src="/images/30x40n.webp" width="350" height="300" alt="" loading="lazy"/>
										<div className="overlaybooth">
											
										</div>
									</div>
									<div className="caption">
										<div className="title">30 X 40</div>
										<div className="corner">Trade Show Booth Rental</div>
									</div>
								</a>
							</div>
							<div className="boothbg">
								<a href="/40x40-trade-show-booth/">
									<div className="figure">
										<img src="/images/40x40n.webp" width="350" height="300" alt="" loading="lazy"/>
										<div className="overlaybooth">
											
										</div>
									</div>
									<div className="caption">
										<div className="title">40 X 40</div>
										<div className="corner">Trade Show Booth Rental</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="cstopcalltoaction">
					<div className="container">
						<div className="csinner">
							<div className="actiontext">WE WOULD LOVE TO WORK WITH YOU</div>
							<div className="actionbtn"><a href="/contact-us/">CONTACT US <i className="fa fa-long-arrow-right"></i></a></div>
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

			<Script
			  src="https://www.radonexhibition.eu/web/js/owl.carousel.js"
			  strategy="afterInteractive"
			/>
			<Script id="init-owl-carousel" strategy="afterInteractive">
			  {`
			    $(function () {
			      if (typeof $.fn.owlCarousel !== "undefined" && $('.owl-carousel').length > 0) {
			        $('.owl-carousel').owlCarousel({
			          items: 3,
			          lazyLoad: true,
			          loop: true,
			          margin: 30,
			          autoplay: true,
			          autoplayTimeout: 2000,
			          smartSpeed: 1000,
			          dots: true,
			          autoplayHoverPause: true,
			          responsive: {
			            0: { items: 1 },
			            600: { items: 2 },
			            1000: { items: 3 }
			          }
			        });
			      }
			    });
			  `}
			</Script>


		</>
	);
}
}