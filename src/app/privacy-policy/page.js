import '../../styles/privacypolicy.css';
import Link from 'next/link';
export const metadata = {
	title : 'Privacy Policy',
	description: '',
	alternates: {
	    canonical: 'https://radonexhibition.com/privacy-policy/',
	},
}
export default function Privacypolicy()
{
	return(
		<>
			<section>
				<div className="bannerbg">
					<div className="container">
						<div className="widthsmall text-center">
							<h1>Privacy Policy</h1>
							<p>At Radon LLC, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="seocontentbg">
					<div className="container">
						<h2 className="subtitle">Information We Collect</h2>
						<h2 className="smalltitle">When you visit our website or use our services, we may collect certain information about you, including:</h2>
						<p>Personal Information: such as your name, email address, phone number, and mailing address, which you provide voluntarily when contacting us or using our services. Usage Data: including information about your device, browser type, IP address, and browsing behavior on our website.</p>
						<p>Cookies and Tracking Technologies: We may use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze trends, and track your interactions with our website. How We Use Your Information</p>
						<h2 className="smalltitle">We may use the information we collect for various purposes, including:</h2>
						<p>Providing Services: to fulfill your requests, process transactions, and deliver the services you have requested from us.</p>
						<p>Improving Our Services: to analyze usage trends, optimize our website, and develop new products and services. </p>
						<p>Communications: to communicate with you about our services, promotions, and updates.</p>
						<p>Legal Compliance: to comply with legal obligations, resolve disputes, and enforce our agreements.</p>
						<p>Data Security</p>
						<p>We take the security of your information seriously and implement appropriate technical and organizational measures to protect it from unauthorized access, disclosure, alteration, or destruction.</p>
						<h2 className="smalltitle">Third-Party Disclosure</h2>
						<p>We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you. We require these third parties to maintain the confidentiality of your information and use it only for the purposes for which we disclose it to them.</p>
						<h2 className="smalltitle">Your Choices</h2>
						<p>You have the right to opt-out of certain data collection and processing activities, such as cookies and promotional communications. You can manage your cookie preferences through your browser settings or opt-out of promotional emails by following the instructions provided in the email.</p>
						<h2 className="smalltitle">Changes to This Privacy Policy</h2>
						<p>We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the updated policy on our website with the effective date of the revision.</p>
						<h2 className="smalltitle">Contact Us</h2>
						<p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <Link href="mailto:info@radonexhibition.com">info@radonexhibition.com</Link></p>
						<p>By using our website or services, you consent to the collection and use of your information as outlined in this Privacy Policy.</p>
					</div>
				</div>
			</section>
		</>
		);
}