import Link from "next/link";
import Image from "next/image";
import '../../styles/about.css';

export const metadata = {
	title : "About Us | RADON LLC - Exhibition Stand Builders Las Vegas",
	description: "RADON LLC - Exhibition Stand Builders Las Vegas. Your trade show booth design & display rental company in USA to enhance your brand presence.",
	alternates: {
	    canonical: 'https://radonexhibition.com/exhibition-stand-builders/',
	},
}
export default function About(){
	return(
		<>
			<section>
				<div className="bannerbg">
					<div className="container">
						<div className="widthsmall">
							<p>RADON LLC</p>
							<h1>Crafting Success with Skill, Innovation & Expertise</h1>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="sectiontop">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6 col-12">
								<div className="topbx">
									<div className="figure"><Image src="/images/about-design.webp" width="500" height="500" alt="" loading="lazy"/></div>
									<div className="overlay">
										<div className="caption">
											<div className="title">Who We Are</div>
											<p>RADON LLC is a trusted name for brands and businesses wishing to have an impactful presence on the exhibition floor. We empower them with our exceptional exhibition stand design and build services. </p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<div className="topbx">
									<div className="figure"><Image src="/images/about-build.webp" width="500" height="500" alt="" loading="lazy"/></div>
									<div className="overlay">
										<div className="caption">
											<div className="title">Our Story</div>
											<p>We started our journey in Poland and captured the entire European market with our great services. With time, we expanded our business to the US and now RADON LLC has become a reputed stand builder worldwide.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<div className="topbx">
									<div className="figure"><Image src="/images/about-deliver.webp" width="500" height="500" alt="" loading="lazy"/></div>
									<div className="overlay">
										<div className="caption">
											<div className="title">OUR PRESENCE</div>
											<p>Our presence spans extensive design and manufacturing facilities in both <span>America</span> and <span>Europe</span>. With this dual presence, we are adept at managing exhibition stand projects across both continents, ensuring excellent control over quality and cost.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="workportbg">
					<div className="container">
						<div className="row">
							<div className="col-lg-7 col-md-12">
								<div className="workcaption">
									<div className="row">
										<div className="col-lg-6 col-12">
											<div className="workbox">
												<div className="icon">20</div>
												<div className="caption">
													<div className="title">Year in Industry</div>
													<p>We have a flawless presence of 20+ years in this industry.</p>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-12">
											<div className="workbox">
												<div className="icon">4650</div>
												<div className="caption">
													<div className="title">Projects Worldwide</div>
													<p>Our huge portfolio consists of projects from various industries.</p>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-12">
											<div className="workbox">
												<div className="icon">1000</div>
												<div className="caption">
													<div className="title">Happy Clients</div>
													<p>We have met or exceeded the expectations of every client.</p>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-12">
											<div className="workbox">
												<div className="icon">1121</div>
												<div className="caption">
													<div className="title">Trade Shows</div>
													<p>We have served  globally an impressive range of events.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-5 col-md-12">
								<div className="basicadvancebg">
									<div className="basicadvancinner">
										<div className="countrytitle">OUR PRODUCTION HOUSE</div>
										<p>Address</p>
										<hr/>
										<div className="clearpackage"></div>
										<div className="packggebx">
											<div className="title">USA</div>
											<p>302 E. Carson Ave, Suite1011, Las Vegas, Nevada 89101, USA</p>
											<div className="btnprimary"><Link href="/exhibit-form/">Enquire Now</Link></div>
										</div>
										<div className="packggebx">
											<div className="title">EUROPE</div>
											<p>RADON SP. Z O.O.ul. Gorzowska 2B. 65 -127 Zielona Góra, Poland</p>
											<div className="btnsecondary"><Link href={`https://www.radonexhibition.eu/`} target="_blank">Visit Website</Link></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="stripebg">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-12">
								<div className="stripebx">
									<div className="title">On-Time Delivery</div>
									<p>Our perfect blend of talented professionals and advanced manufacturing systems ensures on-time delivery.</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-12">
								<div className="stripebx">
									<div className="title">Consistent Quality</div>
									<p>We follow a streamlined approach to attain the desired quality standards for each of our projects.</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-12">
								<div className="stripebx">
									<div className="title">Value for Money</div>
									<p>We do not outsource or rely on third parties, allowing us to deliver cost-effective services.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="portfoliobg">
					<div className="container">
						<div className="widthsmall text-center">
							<h2 className="maintitle">Our Projects</h2>
							<div className="shrtdesc">
								<p>Take a glimpse of a few brilliant top-notch exhibition booth design projects delivered by us. Explore the snapshots given below.</p>
							</div>
						</div>
						<div className="portfolioinner">
							<div className="row">
								<div className="col-lg-4 col-md-6 col-12">
									<div className="figure">
										<Image src="/images/blog10.webp" width="767" height="530" alt="" loading="lazy"/>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<div className="figure">
										<Image src="/images/blog2.webp" width="767" height="530" alt="" loading="lazy"/>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<div className="figure">
										<Image src="/images/blog3.webp" width="767" height="530" alt="" loading="lazy"/>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<div className="figure">
										<Image src="/images/blog11.webp" width="767" height="530" alt="" loading="lazy"/>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<div className="figure">
										<Image src="/images/blog5.webp" width="767" height="530" alt="" loading="lazy"/> 
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<div className="figure">
										<Image src="/images/blog12.webp" width="767" height="530" alt="" loading="lazy"/>
									</div>
								</div>
							</div>
							<div className="btnprimary text-center"><Link href="/portfolio/">View Portfolio</Link></div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="homeboothonenew">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<div className="figure"><Image src="/images/radonhomebooth5.webp" width="1280" height="913" alt=""/></div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="caption">
								<h2 className="maintitle">ABOUT RADON LLC</h2>
								<p>RADON LLC provides complete exhibition stand services, including designing, fabrication, logistics, installation, on-site booth management, dismantling, and storage options. We offer an impressive range of customizable trade show booth rentals in different shapes and sizes.</p>
								<p>With 20+ years of industry expertise, Radon has established a strong presence across the USA and Europe, delivering remarkable booth experiences at major venues such as the Las Vegas Convention Center, San Diego Convention Center, and Colorado Convention Center.</p>
								<p>Our clientele includes many premium brands of the world such as Geven, Airtech, Optimedia, Botany weaving, etc. We have gained brilliance in designing exhibition booths that meet your business objectives and help your brand stand out on the show floor.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
		);
}