import '../../styles/tradeshow-list.css';
import Listing from './tradelist.js';


export const metadata = {
	title : 'Explore Best Trade Shows In USA',
	description: 'Explore the list of upcoming trade shows and exhibitions of various industries and find the most appropriate ones where you can represent your business.',
	alternates: {
	    canonical: 'https://radonexhibition.com/top-trade-shows/',
	},
};
export default function Tradeshowlist(){
	return(
		<>
		<div className="clearvideo"></div>
		<section>
			<div className="bannerbg">
				<div className="container">
					<div className="widthsmall">
						<h1>Upcoming Trade Shows</h1>
						<p>RADON LLC delivers booth design and build services for numerous trade fairs and exhibitions across the USA. Here is the list of such trade shows where we are the most preferred partners for exhibit displays.</p>
					</div>
				</div>
			</div>
		</section>
		<Listing/>
		</>
		);
}