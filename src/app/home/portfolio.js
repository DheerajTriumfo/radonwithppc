'use client';
import { useEffect } from 'react';
import $ from 'jquery';

export default function Homeportfolio(){
	useEffect(() => {
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
	          <div className="container">
	            <div className="widthsmall text-center">
	              <h2 className="maintitle">Our Recent Trade Show Booth Projects</h2>
	              <div className="shrtdesc">
	                <p>As one of the premier trade show exhibit companies in Las Vegas, RADON LLC has successfully executed over 4650 projects across 1120+ trade shows. Our team specializes in creating immersive brand experiences that draw in visitors and generate meaningful engagement.</p>
	              </div>
	            </div>
	            <div className="portfolioinner">
	              <div className="row">
	                <div className="col-lg-4 col-md-6 col-12">
	                  <div className="figure">
	                    <a href="/portfolio/19.webp" data-fancybox="radonllc" aria-label="view image" rel="noopener nofollow" ><Image src="/images/booth-rental-las-vegas.webp" loading="lazy" width="330" height="228" alt="High-quality exhibit rentals in Las Vegas for trade shows and events"/></a>
	                  </div>
	                </div>
	                <div className="col-lg-4 col-md-6 col-12">
	                  <div className="figure">
	                    <a href="/portfolio/28.webp" data-fancybox="radonllc" aria-label="view image" rel="noopener nofollow" ><Image src="/images/custom-trade-show-booth-las-vegas.webp" loading="lazy" width="330" height="228" alt="Custom trade show display solutions in Las Vegas for branded exhibits"/></a>
	                  </div>
	                </div>
	                <div className="col-lg-4 col-md-6 col-12">
	                  <div className="figure">
	                    <a href="/portfolio/35.webp" data-fancybox="radonllc" aria-label="view image" rel="noopener nofollow" ><Image src="/images/exhibit-booth-las-vaga.webp" loading="lazy" width="330" height="228" alt="Expert trade show booth builder in Las Vegas for custom exhibit solutions"/></a>
	                  </div>
	                </div>
	                <div className="col-lg-4 col-md-6 col-12">
	                  <div className="figure">
	                    <a href="/portfolio/31.webp" data-fancybox="radonllc" aria-label="view image" rel="noopener nofollow" ><Image src="/images/bespoke-exhibition-stand-design-las-vegas.webp" loading="lazy" width="330" height="228" alt="Professional exhibition stand design services in Las Vegas"/></a>
	                  </div>
	                </div>
	                <div className="col-lg-4 col-md-6 col-12">
	                  <div className="figure">
	                    <a href="/portfolio/15.webp" data-fancybox="radonllc" aria-label="view image" rel="noopener nofollow" ><Image src="/images/trade-show-booth-construction-las-vegas.webp" loading="lazy" width="330" height="228" alt="Creative exhibition stall design in Las Vegas for impactful displays"/></a>
	                  </div>
	                </div>
	                <div className="col-lg-4 col-md-6 col-12">
	                  <div className="figure">
	                    <a href="/portfolio/13.webp" data-fancybox="radonllc" aria-label="view image" rel="noopener nofollow" ><img src="/images/trade-show-booth-design-las-vegas.webp" loading="lazy" width="330" height="228" alt="Leading trade show booth design company in Las Vegas"/></a>
	                  </div>
	                </div>
	                <div className="col-lg-4 col-md-6 col-12">
	                  <div className="figure">
	                    <a href="/portfolio/21.webp" data-fancybox="radonllc" aria-label="view image" rel="noopener nofollow" ><Image src="/images/trade-show-rental-booth-las-vegas.webp" loading="lazy" width="330" height="228" alt="Leading trade show booth design company in Las Vegas"/></a>
	                  </div>
	                </div>
	                <div className="col-lg-4 col-md-6 col-12">
	                  <div className="figure">
	                    <a href="/portfolio/6.webp" data-fancybox="radonllc" aria-label="view image" rel="noopener nofollow" ><Image src="/images/custom-exhibition-stand-las-vegas.webp" loading="lazy" width="330" height="228" alt="custom trade show booth builder Las Vegas"/></a>
	                  </div>
	                </div>
	                <div className="col-lg-4 col-md-6 col-12">
	                  <div className="figure">
	                    <a href="/portfolio/27.webp" data-fancybox="radonllc" aria-label="view image" rel="noopener nofollow" ><Image src="/images/custom-booth-design-rental-las-vegas.webp" loading="lazy" width="330" height="228" alt="Trade show booth contractor Las Vegas"/></a>
	                  </div>
	                </div>
	                
	              </div>
	              <div className="btnprimary text-center mrtnone"><a href="	/portfolio/" className="text-uppercase">View Portfolio</a></div>
	            </div>
	          </div>
	        </div>
	      </section>
		</>
		);
}