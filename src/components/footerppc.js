import Image from 'next/image';
import Link from 'next/link';




export default function Footerppc(){
	return(
		<>
			<footer>
			   	<div className="footer">
			   		<div className="container">
			   		    <div className="row">
							<div className="col-lg-4 col-md-12 col-12">
								<div className="footerlogo" style={{marginTop :'80px'}} ><Image src="/images/logo-radon.webp" width="180" height="50" alt="" /></div>
							</div>
							<div className="col-lg-8 col-md-12 col-12">
								<div className="row">
									
									<div className="col-lg-6 col-12">
										<div className="footercol">
											<h3 className="footertitle">Lets Connect</h3>
											<p><Link href="tel:+1 917 463 3566">+1 917 463 3566</Link></p>
											<p><Link href="mailto:info@radonexhibition.com">info@radonexhibition.com</Link></p>
											<div className="clear30"></div>
											<p>5071 N Rainbow Blvd, Suite 170, Las Vegas, Nevada, 89130</p>
										</div>
									</div>
									<div className="col-lg-6 col-12">
									<div className="topsocail">
									    <h3 className="footertitle"></h3>
										<ul>
											<li><Link href="javascript:void(0)"><i className="fa fa-facebook"></i></Link></li>
											<li><Link href="javascript:void(0)"><i className="fa fa-twitter"></i></Link></li>
											<li><Link href="javascript:void(0)"><i className="fa fa-youtube"></i></Link></li>
											<li><Link href="javascript:void(0)"><i className="fa fa-linkedin"></i></Link></li>
											<li><Link href="javascript:void(0)"><i className="fa fa-pinterest"></i></Link></li>
											<li><Link href="javascript:void(0)"><i className="fa fa-instagram"></i></Link></li>
										</ul>
									</div>
								</div>
								</div>
							</div>
						</div>
			   			<div className="copyright text-center">Copyright © 2025 Radon LLC</div>
			   		</div>
			   	</div>
			   </footer>
			   <div id="scrollToTopBtn"><i className="fa fa-angle-up"></i></div>
		</>
		);
}