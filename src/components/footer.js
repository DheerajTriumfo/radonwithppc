'use client';
import { useEffect } from 'react';
import $ from 'jquery';


export default function Footer(){
	


	return(
		<>
		<footer>
			<div className="footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-12">
							<div className="footerlogo"><img src="/images/logo-radon.webp" width="180" height="50" loading="lazy" alt="Radon Exhibition LLC" /></div>
						</div>
						<div className="col-lg-9 col-md-12">
							<div className="callnowbg">Email Us<br/><span>info@radonexhibition.com</span></div>
						</div>
					</div>
					<div className="innerfooter">
						<div className="row">
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="footertitle">RADON LLC</div>
								<div className="fmenu">
									<ul>
										<li><link href="/">Home</link></li>
										<li><link href="/exhibition-stand-builders/">About Us</link></li>
										<li><link href="/portfolio/">Portfolio</link></li>
										<li><link href="/contact-us/">Contact Us</link></li>
										<li><link href="/privacy-policy/">Privacy Policy</link></li>
									</ul>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="footertitle">Booth By Size</div>
								<div className="fmenu">
									<ul>
									    <li><link href="/10x10-trade-show-booth/">10 X 10</link></li>
										<li><link href="/10x20-trade-show-booth/">10 X 20</link></li>
										<li><link href="/10x30-trade-show-booth/">10 X 30</link></li>
										<li><link href="/20x20-trade-show-booth/">20 X 20</link></li>
										<li><link href="/20x30-trade-show-booth/">20 X 30</link></li>
									</ul>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="footertitle">&nbsp;</div>
								<div className="fmenu">
									<ul>
									    <li><link href="/20x40-trade-show-booth/">20 X 40</link></li>
										<li><link href="/30x30-trade-show-booth/">30 X 30</link></li>
										<li><link href="/30x40-trade-show-booth/">30 X 40</link></li>
										<li><link href="/40x40-trade-show-booth/">40 X 40</link></li>
										<li><link href="/40x50-trade-show-booth/">40 X 50</link></li>
									</ul>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="footertitle">Resources</div>
								<div className="fmenu">
									<ul>
										<li><link href="/quote-form/">Free Consultation</link></li>
										<li><link href="/free-design/">Free Design</link></li>
										<li><link href="/top-trade-shows/">Top Trade Shows</link></li>
									    <li><link href="/blog/">Blog</link></li>
									    <li><link href="/locations/">Where We Build</link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footerbottom">
					<div className="container">
						<div className="copyright text-center">Copyright ©2025 RADON LLC. All Rights Reserved </div>
						<div className="socialfoote">
							<ul>
								<li><link href="https://www.facebook.com/radonexhibitionllc"><img src="/images/facebook.webp" width="35" height="35" alt="Facebook Page" loading="lazy"/></link></li>
								<li><link href="https://twitter.com/ExhibitionLlc"><img src="/images/twitter.webp" width="35" height="35" alt="twitter" loading="lazy"/></link></li>
								<li><link href="https://www.linkedin.com/company/radon-exhibition-llc/"><img src="/images/linkdin.webp" width="35" height="35" alt="LinkedIn Page" loading="lazy" /></link></li>
								<li><link href="https://www.instagram.com/radonexhibitionllc/"><img src="/images/instagram.webp" width="35" height="35" alt="Instagram Page" loading="lazy"/></link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
		</>
		);
}