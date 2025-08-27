'use client';
import { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Navigationppc(){
	return(
		<>
			<header>
				<div className="header">
					<div className="container">
						<div className="logo"><Link href="/" passHref><Image src="/images/logo-radon.webp" width="180" height="50" alt="Radon LLC" /></Link></div>
						<div className="contact-info">
		               <div className="infobg">
		                  <ul>
		                     <li><Link href="">info@radonexhibition.com</Link></li>
		                     <li><Link href="">+1 917 463 3566</Link></li>
		                  </ul>
		               </div>
		            </div>
					</div>
				</div>
			</header>
		</>
		);
}