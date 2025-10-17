import '../../styles/contact.css';
import Image from 'next/image';
import Contactform from './contactform.js';

export const metadata = {
	title: 'Contact Us | Radon LLC',
	description: '',
	alternates: {
	    canonical: 'https://radonexhibition.com/contact-us/',
	},
}
export default function Contactus()
{
	return(
		<>
			<div className="clearvideo"></div>
			<section>
				<div className="bannerbg">
					<div className="container">
						<div className="widthsmall text-center">
							<h1>Contact Us!</h1>
							<p>RADON LLC offers a complete range of trade fair stand design and build services. We can take care of all your trade show booth needs for you. Get in touch with us now!</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="contactbg">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-12">
								<div className="infocontent">
									<ul>
										<li>
											<div className="icon"><Image src="/images/whatsapp.webp" width="60" height="60" alt="" loading="lazy" /></div>
											<div className="caption">
												<div className="infotitle">Whatsapp Number</div>
												<p><a href={`https://api.whatsapp.com/send/?phone=17754018969&text&type=phone_number&app_absent=0`}>+1(775)401-8969</a></p>
											</div>
										</li>
										<li>
											<div className="icon"><Image src="/images/landline.webp" width="60" height="60" alt="" loading="lazy" /></div>
											<div className="caption">
												<div className="infotitle">Phone Number</div>
												<p><a href="">+1 917 463 3566</a></p>
											</div>
										</li>
										<li>
											<div className="icon"><Image src="/images/email.webp" width="60" height="60" alt="" loading="lazy"/></div>
											<div className="caption">
												<div className="infotitle">Email Address</div>
												<p>info@radonexhibition.com</p>
											</div>
										</li>
										<li>
											<div className="icon"><Image src="/images/location.webp" width="60" height="60" alt="" loading="lazy" /></div>
											<div className="caption">
												<div className="infotitle">United States</div>
												<p>Radon LLC<br />6355 E Tropical Parkway Suite 100, Las Vegas, NV 89115</p>
											</div>
										</li>
										<li>
											<div className="icon"><Image src="/images/location.webp" width="60" height="60" alt="" loading="lazy" /></div>
											<div className="caption">
												<div className="infotitle">Europe</div>
												<p>RADON SP. Z O.O.<br />ul. Gorzowska 2B. 65-127 Zielona Góra, Poland</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-8 col-md-12">
								<Contactform/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="widthsmall text-center mrbt">
						<h2 className="maintitle">Locate Us on the Map!</h2>
						<div className="shrtdesc">
							<p>Want to meet us? You are welcome at RADON LLCs head office. Refer to the map given below to find our location.  </p>
						</div>
					</div>
					<div className="mapbg"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.81165906899!2d-115.03780991182201!3d36.26835122635602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8e76fb6d9d17d%3A0xaab04e62fb3792e0!2s6355%20E%20Tropical%20Pkwy%2C%20Las%20Vegas%2C%20NV%2089115%2C%20USA!5e0!3m2!1sen!2sin!4v1760699558002!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
				</div>
			</section>
		</>
		);
}