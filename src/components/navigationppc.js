import Link from 'next/link';
import Image from 'next/image';

export default function Navigationppc(){
	return(
		<>
			<header>
				<div className="header">
					<div className="container">
						<div className="logo"><Link href="https://radonexhibition.com"><Image src="/images/logo-radon.webp" width="180" height="50" alt="Radon LLC" /></Link></div>
						<div className="contact-info">
		               <div className="infobg">
		                  <ul>
		                     <li><Link href=""><span><Image src="/images/mailicon.webp" width="36" height="17" alt="" /></span>info@radonexhibition.com</Link></li>
		                     <li><Link href=""><span><Image src="/images/phoneicon.webp" width="20" height="20" alt="" /></span>+1 917 463 3566</Link></li>
		                  </ul>
		               </div>
		            </div>
					</div>
				</div>
			</header>
		</>
		);
}