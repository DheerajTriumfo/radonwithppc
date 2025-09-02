import "../../styles/location.css";
import Locationlist from './locationlist.js';
import Link from 'next/link';

export const metadata = {
	title: 'Our Service Area | RADON LLC',
	description: 'RADON LLC has become a well-known name among exhibitors in many prime cities in the USA & Europe due to our excellent services. Explore the list of locations.',
	alternates: {
	    canonical: 'https://www.radonexhibition.com/locations/',
	},
}


export default function Location(){
	return(
		<>
			<section>
				<div className="bannerbg">
					<div className="container">
						<div className="widthsmall">
							<h1>OUR PRESENCE</h1>
							<p>We specialize in tailor-made exhibit design and fabrication spanning two continents: North America and Europe</p>
						</div>
					</div>
				</div>
			</section>
			<section>
			    <div  className="location-sec py-5">
					<div className="container">
						<div className="row justify-centent-center">
							<div className="col-lg-6 col-md-6 col-sm-12">
								<div className="part">
									<div className="head-image">
		                                <h2 className="main-head">AMERICA</h2>
		                                <div className="row justify-content-center">
		                                    <div className="col-11 content">
		                                        <p className="head">Radon LLC</p>
		                                        <p className="head-tagline">BOOTH DESIGN & CONSTRUCTION SERVICES <br/>ACROSS USA</p>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="loaction-points">
		                                <ul>
		                                    <Locationlist/>
		                                </ul>
		                            </div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<div className="part">
									<div className="head-image">
		                                <h2 className="main-head">EUROPE</h2>
		                                <div className="row justify-content-center">
		                                    <div className="col-11 content">
		                                        <p className="head">RADON SP. Z O.O.</p>
		                                        <p className="head-tagline">BOOTH DESIGN & CONSTRUCTION SERVICES <br/>ACROSS EUROPE</p>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="loaction-points">
		                                <ul>
		                                    <li><Link href="https://www.radonexhibition.eu/stand-builder-germany/" target="_blank">germany</Link></li>
		                                    <li><Link href="https://www.radonexhibition.eu/" target="_blank">Poland</Link></li>
		                                    <li><Link href="https://www.radonexhibition.eu/stand-builder-united-kingdom/" target="_blank">united kingdom</Link></li>
		                                    <li><Link href="https://www.radonexhibition.eu/stand-builder-spain/" target="_blank">spain</Link></li>
		                                    <li><Link href="https://www.radonexhibition.eu/stand-builder-netherlands/" target="_blank">netherlands</Link></li>
		                                    <li><Link href="https://www.radonexhibition.eu/stand-builder-italy/" target="_blank">italy</Link></li>
		                                    <li><Link href="https://www.radonexhibition.eu/stand-builder-sweden/" target="_blank">sweden</Link></li>
		                                    <li><Link href="https://www.radonexhibition.eu/stand-builder-france/" target="_blank">france</Link></li>
		                                    <li><Link href="https://www.radonexhibition.eu/stand-builder-switzerland/" target="_blank">switzerland</Link></li>
		                                    <li><Link href="https://www.radonexhibition.eu/stand-builder-belgium/" target="_blank">belgium</Link></li>
		                                    <li><Link href="https://www.radonexhibition.eu/stand-builder-austria/" target="_blank">austria</Link></li>
		                                    <li><Link href="https://www.radonexhibition.eu/stand-builder-croatia/" target="_blank">croatia</Link></li>
		                                </ul>  
		                            </div>
		                            <Link href="https://www.radonexhibition.eu/" target="_blank" className="pop-link">&#x2192;</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
		);
}