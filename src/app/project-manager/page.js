import styles from '../../styles/career-detail.css';
import Image from "next/image";
import Link from "next/link";
export const metadata = {
	title: 'Project Manager | Radon LLC',
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
		    		<h1 className="maintitle">Project Manager</h1>
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
	                                 <div className="postiontitle">Project Manager</div>
	                                 <div className="locationnel">Las Vegas, United States</div>
	                                 <div className="fulltime">Full Time</div>
	                              </div>
	                              <div className="right">
	                                 <div className="applynow"><Link href="/apply-now/" className="openapply">Apply Now</Link></div>
	                              </div>
	                           </div>
	                           
	                           <div className="job-title">Job Profile: Project Manager</div>
	                           <ul>
	                              <li>Supervise the quality and timely project delivery at Exhibitions and Tradeshow booth.</li>
	                              <li>Read and work from generated production order details, sketches, plans and specifications</li>
	                              <li>Experience in Exhibition/ Tradeshow booth building and manufacturing experience.</li>
	                              <li>Communicate and work effectively within a team</li>
	                              <li>Must provide professional instruction and communication for other coordinators (union workers, Customer Service department, electricians, etc)</li>
	                              <li>Traveling and working at offsite locations required</li>
	                              <li>Effectively works as part of a team while interfacing with all levels of staff and clientele</li>
	                              <li>Works well in a fast-pace, rapidly changing work environment</li>
	                              <li>Flexibility to work occasionally weekends and overtime during hectic, busy times with production deadlines looming Occasional travel to offsite installations.</li>
	                              <li>Travel to offsite installations.</li>
	                           </ul>
	                           <div className="job-title">Other Duties:</div>
	                           <ul>
	                              <li>Maintain a clean and safe environment at all times.</li>
	                              <li>Communicate with other Department personnel to ensure accurate client/booth information.</li>
	                           </ul>
	                           <div className="job-title">Qualifications:</div>
	                           <ul>
	                              <li>5 years+ proven experience in project management preferably in the Exhibitions and Tradeshow booth industry.</li>
	                           </ul>
	                           <p><strong>If you are interested, please submit your application to: <a href="mailto:hr@radonexhibition.com">hr@radonexhibition.com</a></strong></p>
	                           <p><strong>For further inquiries, you may also call: <a href="tel:+17025000284">+17025000284 </a></strong></p>
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