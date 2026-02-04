import styles from '../../styles/career.css';
import Image from "next/image";
import Link from "next/link";
export const metadata = {
	title: 'Career | Radon LLC',
	description: '',
	alternates: {
	    canonical: 'https://radonexhibition.com/career/',
	},
}
export default function Thankyou()
{
	return(
		<>
			<div className="careerbg">
		    	<div className="container mx-auto">
		    		<h1 className="maintitle">We are Hiring</h1>
		    	</div>
		    </div>
		    <div className="careercontainer">
		    	<div className="container mx-auto px-4">
		    		<div className="row justify-content-center">
		    			<div className="col-lg-8 col-sm-12">
		    				<div className="careerrow">
		    					<div className="figurebg">
		    						<div className="figure"><Image src="/images/companylogo.png" width={150} height={150} alt="comapnylogo" /></div>
		    						<div className="caption">
		    							<h3>Sales Coordinator</h3>
		    							<div className="location">
		    								<p><span><i className="fa fa-map-marker" aria-hidden="true"></i> Las Vegas, United States</span></p>
		    							</div>
		    						</div>
		    					</div>
		    					<div class="viewdetail"><a href="/sales-coordinator/">VIEW DETAILS</a></div>
		    				</div>
		    				<div className="careerrow">
		    					<div className="figurebg">
		    						<div className="figure"><Image src="/images/companylogo.png" width={150} height={150} alt="comapnylogo" /></div>
		    						<div className="caption">
		    							<h3>Production cum show site supervisor</h3>
		    							<div className="location">
		    								<p><span><i className="fa fa-map-marker" aria-hidden="true"></i> Las Vegas, United States</span></p>
		    							</div>
		    						</div>
		    					</div>
		    					<div class="viewdetail"><a href="/site-supervisor/">VIEW DETAILS</a></div>
		    				</div>
		    				<div className="careerrow">
		    					<div className="figurebg">
		    						<div className="figure"><Image src="/images/companylogo.png" width={150} height={150} alt="comapnylogo" /></div>
		    						<div className="caption">
		    							<h3>Project Manager</h3>
		    							<div className="location">
		    								<p><span><i className="fa fa-map-marker" aria-hidden="true"></i> Las Vegas, United States</span></p>
		    							</div>
		    						</div>
		    					</div>
		    					<div class="viewdetail"><a href="/project-manager/">VIEW DETAILS</a></div>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    </div>
		</>
		);
}