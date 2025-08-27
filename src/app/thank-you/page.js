import styles from '../../styles/thanks.css';
import Image from "next/image";

export default function Thankyou()
{
	return(
		<>
			<section>
				<div className="bannerbg">
					<div className="container">
						<div className="widthsmall">
							<h1>Thank You for Connecting with Us! </h1>
							<p>Your message has been received, and our expert will reach out to you soon. You are one step closer to a smooth and successful exhibition experience. We look forward to assisting you!</p>
						</div>
					</div>
				</div>
			</section>
		    <section>
		        <div className="container">
		            <div className="thankyou">
		                <div className="icon"><img src="/images/like.webp" width="100" height="114" alt="" /></div>
		                <p>You are now one step closer to a successful and stress-free exhibition experience.</p>
		                <a href="/" className="backhomebtn">Back to Home</a>
		            </div>
		        </div>
			</section>
		</>
		);
}