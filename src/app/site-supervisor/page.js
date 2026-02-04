import styles from '../../styles/career-detail.css';
import Image from "next/image";
import Link from "next/link";
export const metadata = {
	title: 'Sales Coordinator | Radon LLC',
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
		    		<h1 className="maintitle">Production cum show site supervisor</h1>
		    	</div>
		    </div>
		    <section>
	         <div className="job-details-sec">
	            <div className="container">
	               <div className="row">
	                  <div className="col-lg-12">
	                     <div className="career-inner">
	                        <div className="container">
	                           <div className="gray-box">
	                              <div className="left">
	                                 <div className="postiontitle">Production cum show site supervisor</div>
	                                 <div className="locationnel">Las Vegas, United States</div>
	                                 <div className="fulltime">Full Time</div>
	                              </div>
	                              <div className="right">
	                                 <div className="applynow"><Link href="/apply-now/" className="openapply">Apply Now</Link></div>
	                              </div>
	                           </div>
	                           <div className="job-title">Key Responsibilities: </div>
	                           <ul>
	                              <li>To be able to pick and pack the BE MATRIX booth as per the design and drawings.</li>
	                              <li>To be able to do all jobs connected with creating the mockup of the booths in the warehouse. </li>
	                              <li>To Coordinate with designers, purchase, organize ordering of material purchases</li>
	                              <li>Travel to different show sites and cross-country travel when required.</li>
	                              <li>Supervise booth installation at the site and coordinate with all involved teams.</li>
	                              <li>Coordinate with clients, venue officials, vendors, and internal teams during setup.</li>
	                              <li>Manage last-minute changes, troubleshoot site challenges.</li>
	                              <li>I&D coordination: Oversee dismantling and material return to warehouse post event.</li>
	                              <li>Ensure the booth is completed on time and handed over to the client in good condition.</li>
	                           </ul>
	                           <p><strong>If interested please send your application to the address: <a href="https://web.archive.org/web/20250421081950/mailto:info@radonexhibition.com">info@radonexhibition.com</a></strong></p>
	                           <div className="applynow"><Link href="/apply-now/" className="openapply">Apply Now</Link></div>
	                        </div>
	                     </div>
	                  </div>
	               </div>
	            </div>
	         </div>
	      </section>
		</>
		);
}