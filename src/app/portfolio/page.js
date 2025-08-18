	import '../../styles/portfolio.css';
import Portfolioimage from './portfolioimg.js';
export const metadata = {
	title : 'Our Portfolio | Trade Show Booth Designs | RADON LLC ',
	description : 'RADON LLC is known for trendy and innovative trade show booth display ideas. Check out our portfolio to explore our stunning trade show booth designs.',
};
export default function Portfolio(){
	return(
		<>
			<section>
				<div className="bannerbg">
					<div className="container">
						<div className="widthsmall">
							<h1>OUR WORK AT A GLANCE</h1>
							<p>RADON LLC has created designs that are trendy and innovative. Designs that define your company. Please take a look at the range of stand designs that we have made so far</p>
							<div className="boothsizequotebtn"><a href="https://radonexhibition.com/quote-form/">Get Free Quote in 24 Hours</a></div>
						</div>
					</div>
				</div>
			</section>
			<Portfolioimage/>
		</>
		);
}