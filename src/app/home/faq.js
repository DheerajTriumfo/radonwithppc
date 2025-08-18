'use client';
import { useEffect } from 'react';
import $ from 'jquery';

export default function Faqtab(){
	useEffect(() =>{
		$(".faqbg").each(function () {
           var $this = $(this);

           $this.find(".tab-button").click(function () {
           $this.find(".tab-button").removeClass("on");
           $this.find(".tab-caption").slideUp("normal");

           if ($(this).next().is(":hidden") == true) {
             $(this).addClass("on");
             $(this).next().slideDown("normal");
           }
           });

           $this.find(".tab-caption").hide();
           $this.find(".tab-caption:first").show();
           $this.find(".tab-button:first").addClass("on");
        });
	}, []);

	return(
		<>
		<section>
	          <div className="faqbg">
	              <div className="container">
	                <div className="widthsmall text-center">
	                  <h2 className="titlecity">FAQs – Trade Show Exhibit Rentals</h2>
	                </div>
	                <div className="widthmedium">
	                  <div className="bor-bg"> 
	                    <h3 className="tab-button">Do you provide mockups before booth fabrication?</h3>
	                    <div className="tab-caption"> 
	                      <p>Yes, we offer detailed 3D mockups of your trade show exhibit rentals before moving to production.</p>
	                    </div>
	                  </div>
	                  <div className="bor-bg"> 
	                    <h3 className="tab-button">How customizable are your trade show display rentals?</h3>
	                    <div className="tab-caption"> 
	                      <p>Our trade show booth display rentals are highly customizable to align with your brand’s goals and show-specific requirements.</p>
	                    </div>
	                  </div>
	                  <div className="bor-bg"> 
	                    <h3 className="tab-button">Do you manage installation and logistics?</h3>
	                    <div className="tab-caption"> 
	                      <p>Absolutely. We handle shipping, installation, dismantling, and even post-show storage.</p>
	                    </div>
	                  </div>
	                  <div className="bor-bg"> 
	                    <h3 className="tab-button">Is on-site supervision included?</h3>
	                    <div className="tab-caption"> 
	                      <p>Yes. For every exhibit booth rental, we assign a project manager to oversee operations and ensure a smooth experience.</p>
	                    </div>
	                  </div>
	                  <div className="bor-bg"> 
	                    <h3 className="tab-button">Can you store booth materials between shows?</h3>
	                    <div className="tab-caption"> 
	                      <p>Yes, we offer secure warehouse storage for your booth components between events.</p>
	                    </div>
	                  </div>
	                  <div className="bor-bg"> 
	                    <h3 className="tab-button">How do you help our booth stand out?</h3>
	                    <div className="tab-caption"> 
	                      <p>As a seasoned trade show booth rental provider, we ensure your design incorporates the latest tech, interactivity, and industry-specific trends to draw maximum attention.</p>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	      </section>
		</>
		);
}