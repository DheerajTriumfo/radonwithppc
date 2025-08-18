'use client';
import { useEffect } from 'react';
import $ from 'jquery';

export default function Portfolioimage(){
	useEffect(() =>  {
		$(function () {
		  function doFancyboxFunctions(event) {
		    var loadFancybox = function () {
		      if ($("#fancybox-css").length < 1) {
		        //load css
		        var head = document.getElementsByTagName("head")[0];
		        var link = document.createElement("link");
		        link.id = "fancybox-css";
		        link.rel = "stylesheet";
		        link.type = "text/css";
		        link.href = "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"; //"/assets/css/fancybox.css";
		        link.media = "all";
		        $(head).prepend(link);
		      }

		      if ($("#fancybox-js").length < 1) {
		        //load script
		        var resource = document.createElement("script");
		        resource.async = "true";
		        resource.src = "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"; //"/assets/js/fancybox.js";
		        resource.id = "fancybox-js";
		        var script = document.getElementsByTagName("script")[0];
		        script.parentNode.insertBefore(resource, script);
		      }
		    };

		    var setupFancybox = function () {
		      if (typeof $.fancybox === "function") {
				  $("[data-fancybox]").fancybox();
				}
		    };

		    var isFancyboxLoaded = function () {
		      return $("html").hasClass("fancybox-css-loaded") && $("html").hasClass("fancybox-js-loaded");
		    };

		    var startFancybox = function () {
		      $("html").addClass("fancybox-is-loaded");

		      //nepokracuj pokud css nebo js neni nacteny
		      setupFancybox();
		      if (event && event.type === "click") {
		        $(event.target).click();
		        $(window).resize();
		      }
		      return true;
		    };

		    if (event && event.type === "click" && isFancyboxLoaded() === false) event.preventDefault();

		    if (!isFancyboxLoaded()) {
		      loadFancybox();

		      $("#fancybox-css").on("load", function () {
		        $("html").addClass("fancybox-css-loaded");
		        if (isFancyboxLoaded()) startFancybox();
		      });

		      $("#fancybox-js").on("load", function () {
		        $("html").addClass("fancybox-js-loaded");
		        if (isFancyboxLoaded()) startFancybox();
		      });
		    }
		  }

		  $("[data-fancybox]").one("click mouseenter", function (event) {
		    doFancyboxFunctions(event);
		  });

		  //pokud existuje hash po nacteni stranky
		  if (window.location.hash) {
		    var hash = window.location.hash.substr(1);
		    var getFancyboxSelector = function () {
		      var selector = hash.split('-');
		      selector.pop();

		      return selector.join('-');
		    };
		    //najdi elementy, ktere by mohly odpovidat fancybox elementum
		    var fancyboxElementsWithCurrentHash = $('[data-fancybox^="' + getFancyboxSelector() + '"]');
		    //pokud takove elementy existuji nacti fancybox a otevri prislusny objekt
		    if (fancyboxElementsWithCurrentHash.length > 0) doFancyboxFunctions();
		  }
		});
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
										<a href="/portfolio/1.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/1.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/2.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/2.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/3.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/3.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/4.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/4.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/5.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/5.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/6.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/6.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/8.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/8.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/11.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/11.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/12.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/12.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/13.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/13.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/14.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/14.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/15.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/15.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/16.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/16.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/17.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/17.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/18.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/18.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/19.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/19.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/20.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/20.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/21.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/21.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>

							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/22.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/22.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/23.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/23.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/24.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/24.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/25.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/25.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/26.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/26.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/27.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/27.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/28.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/28.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/29.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/29.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/30.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/30.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/31.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/31.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/32.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/32.webp" width="1092" height="752" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/33.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/33.webp" width="1400" height="800" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/34.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/34.webp" width="850" height="595" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/35.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/35.webp" width="1067" height="800" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/36.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/36.webp" width="1366" height="911" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/37.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/37.webp" width="1366" height="911" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/38.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/38.webp" width="1366" height="909" alt="" loading="lazy"/></a>
									</div>
								</div>
							</li>
							<li>
								<div className="figure">
									<div className="gallery-img">
										<a href="/portfolio/39.webp" data-fancybox="radonllc" rel="noopener nofollow" ><img src="/portfolio/39.webp" width="1600" height="1194" alt="" loading="lazy"/></a>
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