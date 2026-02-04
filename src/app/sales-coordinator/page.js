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
		    		<h1 className="maintitle">Sales Coordinator</h1>
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
	                                 <div className="postiontitle">Sales Coordinator</div>
	                                 <div className="locationnel">Las Vegas, United States</div>
	                                 <div className="fulltime">Full Time</div>
	                              </div>
	                              <div className="right">
	                                 <div className="applynow"><Link href="/apply-now/" className="openapply">Apply Now</Link></div>
	                              </div>
	                           </div>
	                           <div className="job-title">Role Overview: </div>
	                           <div className="careerdesc">
	                              <p>The Sales Coordinator will support the sales team and manage client-related communications and logistics for exhibition and tradeshow projects. This role requires strong organizational skills, a customer-focused mindset, and the ability to thrive in a fast-paced, deadline-driven environment.</p>
	                           </div>
	                           <div className="job-title">Key Responsibilities: </div>
	                           <ul>
	                              <li>Coordinate sales and client support activities for exhibitions and tradeshow booths</li>
	                              <li>Work closely with clients to understand their needs and relay accurate information to internal teams.</li>
	                              <li>Assist in the preparation of sales proposals, quotes, and production orders.</li>
	                              <li>Liaise between the sales team, production staff, and clients to ensure timely and quality project delivery.</li>
	                              <li>Maintain detailed and up-to-date client records and project documentation.</li>
	                              <li>Communicate effectively with internal departments (e.g., Customer Service, Production, Electricians) to ensure project success.</li>
	                              <li>Support onsite setup coordination as needed during installations and events.</li>
	                              <li>Handle logistics, scheduling, and administrative tasks related to sales and client servicing.</li>
	                              <li>Contribute to a clean, safe, and organized working environment.</li>
	                           </ul>
	                           <div className="job-title">Other Duties:</div>
	                           <ul>
	                              <li>May require occasional travel to offsite installations and exhibitions.</li>
	                              <li>Provide exceptional customer service to build lasting client relationships.</li>
	                              <li>Support the team during peak periods, including occasional weekends and overtime.</li>
	                           </ul>
	                           <div className="job-title">Qualifications:</div>
	                           <ul>
	                              <li>3–5 years of experience in a sales support or coordination role, preferably in the exhibitions, tradeshow, or events industry.</li>
	                              <li>Excellent communication and organizational skills.</li>
	                              <li>Ability to manage multiple projects and priorities under tight deadlines.</li>
	                              <li>Team-oriented with strong interpersonal skills.</li>
	                              <li>Proficiency in Microsoft Office and CRM tools is a plus.</li>
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