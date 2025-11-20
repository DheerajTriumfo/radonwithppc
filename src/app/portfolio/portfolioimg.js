'use client';
import { useEffect } from 'react';
import $ from 'jquery';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolioimage(){
	useEffect(() => {
    // Dynamically load Fancybox CSS
    const cssId = "fancybox-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css";
      document.head.appendChild(link);
    }

    // Dynamically load Fancybox JS
    const jsId = "fancybox-js";
    if (!document.getElementById(jsId)) {
      const script = document.createElement("script");
      script.id = jsId;
      script.src =
        "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js";
      script.onload = () => {
        if (typeof $.fancybox === "function") {
          $("[data-fancybox]").fancybox();
        }
      };
      document.body.appendChild(script);
    } else {
      if (typeof $.fancybox === "function") {
        $("[data-fancybox]").fancybox();
      }
    }
  }, []);
	return(
		<>
			<section>
				<div className="portfoliobg">
					<div className="container-fluid">
						<ul>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/1.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/1.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/2.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/2.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/3.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/3.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							{/* <li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/4.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/4.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li> */}
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/5.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/5.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/6.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/6.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/8.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/8.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/11.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/11.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/12.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/12.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/13.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/13.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/14.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/14.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/15.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/15.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/16.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/16.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/17.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/17.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/18.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/18.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/19.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/19.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/20.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/20.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/21.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/21.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>

							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/22.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/22.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/23.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/23.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/24.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/24.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/25.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/25.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/26.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/26.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/27.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/27.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/28.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/28.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/29.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/29.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/30.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/30.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/31.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/31.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/32.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/32.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/33.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/33.webp" width="1400" height="800" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/34.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/34.webp" width="850" height="595" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/35.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/35.webp" width="1067" height="800" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/36.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/36.webp" width="1366" height="911" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/37.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/37.webp" width="1366" height="911" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/38.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/38.webp" width="1366" height="909" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/39.webp" data-fancybox="radonllc" rel="noopener nofollow" ><Image src="/portfolio/39.webp" width="1600" height="1194" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
		);
}