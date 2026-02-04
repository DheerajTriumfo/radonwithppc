import '../../styles/contact.css';
import Image from 'next/image';
import Contactform from './contactform.js';

export const metadata = {
	title: 'Apply Now | Radon LLC',
	description: '',
	alternates: {
	    canonical: 'https://radonexhibition.com/apply-now/',
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
							<h1>Apply For The Job!</h1>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="contactbg">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8 col-md-12">
								<Contactform/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
		);
}