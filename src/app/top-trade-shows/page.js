import '../../styles/tradeshow-list.css';
import Listing from './tradelist.js';


export const metadata = {
	title : 'Top Trade Shows In USA | Upcoming Trade Shows in USA',
	description: 'Top Trade Shows In USA | Upcoming Trade Shows in USA - All Exhibitions in USA 2025-2026 | Full and accurate description of events for various business sectors.',
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
						<p>RADON LLC delivers booth design and build services for numerous trade fairs and exhibitions across the USA. Here is the list of such Upcoming Trade Shows in USA where we are the most preferred partners for exhibit booth rentals.</p>
					</div>
				</div>
			</div>
		</section>
		<Listing/>
		</>
		);
}