'use client';
import '../../styles/ppcstyle.css';
import '../../styles/owl.carousel.min.css';
import Ppcheader from '../../components/navigationppc.js';
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import Carouselgetppc from './carouselppc.js';

export default function Tradeshobooth() {

	const [formData, setFormData] = useState({
	    name: '',
	    email: '',
	    phone: '',
	    boothsize: '',
	    countryname: '',
	    information: '',
	  });

	  const [errors, setErrors] = useState({});
	  
	  const [clientData, setClientData] = useState({
	    pageUrl: '',
	    ipAddress: '',
	  });
	  // Fetch page URL and IP Address on the client side
	  useEffect(() => {
	    if (typeof window !== 'undefined') {
	      setClientData({
	        pageUrl: window.location.href,
	        ipAddress: window.location.hostname, // Note: You can get actual client IP using a backend service
	      });
	    }
	  }, []);

	  const handleChange = (e) => {
	    const { name, value } = e.target;
	    setFormData({
	      ...formData,
	      [name]: value,
	    });
	  };

	const handleSubmit = async (e) => {
	  e.preventDefault();

	  // Basic form validation
	  const newErrors = {};
	  if (!formData.name) newErrors.name = 'Name is required';
	  if (!formData.email) newErrors.email = 'Email is required';
	  if (!formData.phone) newErrors.phone = 'Phone number is required';
	  if (!formData.boothsize) newErrors.boothsize = 'Booth size is required';
	  if (!formData.countryname) newErrors.countryname = 'Country name is required';

	  if (Object.keys(newErrors).length > 0) {
	    setErrors(newErrors);
	    return;
	  }

	  // Send form data to the backend API
	  const response = await fetch('https://radonllcapi.mobel.us/public/api/save-ppcform', { // Assuming this is your API endpoint
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json',
	    },
	    body: JSON.stringify({
	      name: formData.name,
	      email: formData.email,
	      phone: formData.phone,
	      boothsize: formData.boothsize,
	      countryname: formData.countryname,
	      information: formData.information,
	      pageurl: clientData.pageUrl,
	      ipaddress: clientData.ipAddress,
	    }),
	  });

	  const result = await response.json();
	  
	  if (response.ok) {
	    // Success - show a message or redirect the user
	    window.location.href = '/thank-you/';
	    //alert(result.message || 'Form submitted successfully');
	  } else {
	    // Handle errors from backend
	    alert(result.message || 'An error occurred while submitting the form.');
	  }
	};



  return (
    <>
    	<div className="bannerbg">
		    <div className="bg-shape"><Image src="/images/bg-shape-1.svg" width="1443" height="844" alt="" /></div>
		        <div className="container">
		         <div className="captioncontent">
		         	<span className="shrttitle">WELCOME TO RADON LLC</span>
		         	<h1 className="bannertitle">Boost Your Trade Show Presence with Professional Booths</h1>
		         	<p>Booth Rentals, Custom Designs & Complete Solutions Across the USA	</p>
		         	<div className="btn-view"><Link href="">View Portfolio</Link></div>
		         </div>
		         <div className="formbg" id="formbg">
		            <h2 className="title">Let’s start the productive work.</h2>
		            <p>Help us understand your booth needs by filling in the form.</p>
		            <form onSubmit={handleSubmit} className="validate-form">

		              <input type="hidden" name="pageurl" value={window.location.href} />
		              <input type="hidden" name="ipaddress" value={window.location.hostname} />
		              {/* Form Fields */}
		              <input type="text" name="name" placeholder="Your Name*" value={formData.name} onChange={handleChange} className={errors.name ? 'is-invalid' : ''} />
		              {errors.name && <div className="error">{errors.name}</div>}

		              <input
		                type="text"
		                name="email"
		                placeholder="Your Email ID*"
		                value={formData.email}
		                onChange={handleChange}
		                className={errors.email ? 'is-invalid' : ''}
		              />
		              {errors.email && <div className="error">{errors.email}</div>}

		              <input
		                type="text"
		                name="phone"
		                placeholder="Contact Number*"
		                value={formData.phone}
		                onChange={handleChange}
		                className={errors.phone ? 'is-invalid' : ''}
		              />
		              {errors.phone && <div className="error">{errors.phone}</div>}

		              <div className="row">
		                <div className="col-md-6 col-12">
		                  <input
		                    type="text"
		                    name="boothsize"
		                    placeholder="Booth Size*"
		                    value={formData.boothsize}
		                    onChange={handleChange}
		                    className={errors.boothsize ? 'is-invalid' : ''} style={{margin:'0'}}
		                  />
		                  {errors.boothsize && <div className="error">{errors.boothsize}</div>}
		                </div>
		                <div className="col-md-6 col-12">
		                  <input
		                    type="text"
		                    name="countryname"
		                    placeholder="Country Name*"
		                    value={formData.countryname}
		                    onChange={handleChange}
		                    className={errors.countryname ? 'is-invalid' : ''} style={{margin:'0'}}
		                  />
		                  {errors.countryname && <div className="error">{errors.countryname}</div>}
		                </div>
		              </div>

		              <textarea
		                name="information"
		                rows="3"
		                placeholder="Additional Information"
		                value={formData.information}
		                onChange={handleChange}
		              ></textarea>

		              <input type="submit" name="submit" value="Request Quote" />
		            </form>
		        </div>
		    </div>
		</div>
		<section>
		   	<div className="sectiontop">
		   		<div className="container">
		   			<div className="widthsmall text-center">
			   			<div className="maintitle">Radon LLC</div>
			   			<div className="divider"><span>WHO WE ARE</span></div>
			   			<p>Driven by passion and creativity, our team builds exhibition stands that truly shine on the show floor.</p>
			   		</div>
			   		<div className="row">
			   			<div className="col-lg-6 col-md-12 col-12">
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
			   			<div className="col-lg-6 col-md-12 col-12">
			   				<div className="captionbg">
									<div className="subtext">We are a global exhibition stand design and build company, specializing in creating flawless brand experiences.</div>
									<p>At Radon LLC, our powerful blend of expertise and advanced technology enables us to craft immersive, one-of-a-kind exhibition displays that captivate audiences, elevate your brand, and drive real results.</p>
								</div>
			   			</div>
			   		</div>
		   		</div>
		   	</div>
		   </section>
		   
		   <section>
		   	<div className="sectioncountless">
		   		<div className="container">
		   			<div className="row">
		   				<div className="col-md-6 col-12">
		   					<div className="columninners">
				   				<h2 className="titlerd">Trade Show Booth Rentals Across the USA</h2>
				   				<div className="shrtdesc">
				   					<p>Need a hassle-free booth rental for your next trade show? At Radon Exhibition, we offer customizable, ready-to-install exhibit booth rentals across major US cities. Whether its a 10x20 or a double-decker, we manage everything from booth design to on-site setup.</p>
				   					<p>Our trade show booth rental solutions include high-quality materials, fast delivery, and full support. Choose from pre-designed rental booths or request a custom layout.</p>
				   					<p><span>Serving: Las Vegas, Chicago, Orlando, New York, Anaheim & more</span></p>
				   				</div>
				   			</div>
		   				</div>
		   				<div className="col-md-6 col-12"><div className="figure"><Image src="/images/home4.webp" width="960" height="670" alt="ppc2" /></div></div>
		   			</div>
		   		</div>
		   	</div>
		   </section>
		   <section>
		   	<div className="sectioncountless">
		   		<div className="container">
		   			<div className="widthsmall" style={{marginBottom: '7rem' }}>
			   			<div className="divider"><span>&nbsp;</span></div>
			   		</div>
		   			<div className="row">
		   				<div className="col-md-6 col-12"><div className="figure"><Image src="/images/home7.webp" width="960" height="670" alt="ppc2" /></div></div>
		   				<div className="col-md-6 col-12">
		   					<div className="columninners">
				   				<h2 className="titlerd">Custom Booth Designs That Elevate Your Brand</h2>
				   				<div className="shrtdesc">
				   					<p>Make your brand stand out with our fully tailored custom trade show booth designs. Our in-house design team works with your marketing goals to craft eye-catching, engaging, and brand-focused exhibit booths that drive foot traffic and conversions.</p>
				   					<p>From 3D renderings to final execution, we handle everything—be it a modular exhibition stand, an interactive tech display, or an eco-friendly build.</p>
				   					<p>Ideal for exhibitors looking to leave a lasting impression at US-based trade shows.</p>
				   				</div>
				   			</div>
		   				</div>
		   			</div>
		   		</div>
		   	</div>
		   </section>
		   <section>
		   	<div className="sectioncountless">
		   		<div className="container">
		   			<div className="widthsmall" style={{marginBottom: '7rem' }}>
			   			<div className="divider"><span>&nbsp;</span></div>
			   		</div>
		   			<div className="row">
		   				<div className="col-md-6 col-12">
		   					<div className="columninners">
				   				<h2 className="titlerd">Experienced Booth Contractors You Can Trust</h2>
				   				<div className="shrtdesc">
				   					<p>Radon Exhibition is your trusted partner for booth construction, setup, and dismantling. As a top-rated exhibition stand contractor in the USA, we bring efficiency, quality, and precision to every project.</p>
				   					<p>We provide end-to-end booth services for trade shows, including fabrication, logistics, installation, and on-site support—ensuring stress-free exhibiting.</p>
				   					<p>From bespoke booths to modular builds, our experts deliver on time, every time.</p>
				   				</div>
				   			</div>
		   				</div>
		   				<div className="col-md-6 col-12"><div className="figure"><Image src="/images/home5.webp" width="960" height="670" alt="ppc4" /></div></div>
		   			</div>
		   		</div>
		   	</div>
		   </section>
		   <section>
		   	<div className="sectioncountless">
		   		<div className="container">
		   			<div className="widthsmall" style={{marginBottom: '7rem' }}>
			   			<div className="divider"><span>&nbsp;</span></div>
			   		</div>
		   			<div className="row">
		   				<div className="col-md-6 col-12"><div className="figure"><Image src="/images/home6.webp" width="960" height="670" alt="ppc5" /></div></div>
		   				<div className="col-md-6 col-12">
		   					<div className="columninners">
				   				<h2 className="titlerd">Full-Service Trade Show & Exhibition Company</h2>
				   				<div className="shrtdesc">
				   					<p>Looking for a reliable exhibition company that can manage everything from booth design to logistics? Radon Exhibition is a leading US-based trade show partner offering design, build, shipping, and management services under one roof.</p>
				   					<p>We work with global brands to create engaging exhibition experiences across all major US trade shows. With in-house teams and nationwide reach, we deliver consistent quality, no matter the city.</p>
				   				</div>
				   			</div>
		   				</div>
		   			</div>
		   			<div style={{width: '100%', height: '80px',clear: 'both'}}></div>
		   		</div>
		   	</div>
		</section>
		<section>
		   	<div className="sectiontop">
		   		<div className="container">
		   			<div className="widthsmall text-center" id="portfolio">
			   			<div className="maintitle">Showcase</div>
			   			<div className="divider"><span>Our Gallery</span></div>
			   			<p>Our work reflects excellence in booth design—crafted to attract, engage, and inspire..</p>
			   		</div>
			   		<div className="containershocase">
							<div className="row">
								<div className="col-lg-4 col-md-6 col-12">
									<div className="figure"><Image src="/images/portfolio1.webp" width="385" height="386" alt="ppc6" /></div>
								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<div className="figure"><Image src="/images/portfolio2.webp" width="385" height="386" alt="ppc7" /></div>
								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<div className="figure"><Image src="/images/portfolio3.webp" width="385" height="386" alt="ppc8" /></div>
								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<div className="figure"><Image src="/images/portfolio4.webp" width="385" height="386" alt="ppc9" /></div>
								</div>
								<div className="col-lg-8 col-md-12 col-12">
									<div className="figure"><Image src="/images/portfolio5.webp" width="783" height="386" alt="ppc10" /></div>
								</div>
							</div>
						</div>
		   		</div>
		   	</div>
		</section>
		<section>
		   	<div className="boothsizebg">
		   		<div className="container" style={{position:'relative'}}>
		   			<div className="widthsmall text-center">
			   			<div className="maintitle">Explore Trade Show Booth Designs by Size</div>
			   			<div className="shrtdesc">
			   				<p>Discover custom trade show booth rentals in every size—designed to reflect your brand, attract attention, and maximize engagement. Make a bold impression with tailored exhibits that fit your space and style. Start exploring now!</p>
			   			</div>
			   		</div>
			   		<Carouselgetppc/>
		   		</div>
		   	</div>
		   </section>
		   <section>
		        <div className="organisebg">
		            <div className="container">
		                <div className="organiseinner">
		                    <h2 className="maintitle">Request for a free consultancy now and make your next exhibition participation a truly rewarding experience. </h2>
		                    <Link href="javascript:void(0)" className="btn-custom gotoform">REQUEST&nbsp;FREE&nbsp;QUOTE</Link>
		                </div>
		            </div>
		        </div>
		    </section>
    </>
  );
}
