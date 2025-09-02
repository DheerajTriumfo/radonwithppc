import Styles from '../../styles/blog.css';
import Bloglist from './bloglist.js';
import Link from 'next/link';

export const metadata = {
	title : 'Your Ultimate Exhibitors Guide | Tips & Tricks for Successful Tradeshows',
	description : 'Check out our blogs whether you need inspiration for a captivating tradeshow presence or want to know tips and tricks to generate promising ROI.',
	alternates: {
          canonical: `https://www.radonexhibition.com/blog/`,
    },
};

export default function Blog()
{
	return(
		<>
			<div className="clearvideo"></div>
			<section>
				<div className="bannerbg">
					<div className="container">
						<div className="widthsmall">
							<h1>Latest Blog</h1>
							<p>Save your preferred trade show booth rental with RADON Exhibition LLC</p>
						</div>
					</div>
				</div>
			</section>
			<Bloglist/>	
		</>
		);
}