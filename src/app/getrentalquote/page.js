'use client';
import React, { useState, useEffect } from 'react';
import  '../../styles/exhibit-form.css';



const baseUrl = 'https://radonexhibition.com';

export default function RentalQuote()
{
	const [quoteData, setQuoteData] = useState(null);
	useEffect(() => {
	    // Retrieve the data from localStorage
	    const storedQuoteData = localStorage.getItem('quotedata');

	    // If data exists, parse it and set the state
	    if (storedQuoteData) {
	      setQuoteData(JSON.parse(storedQuoteData));
	    } else {
	      // Handle case where no data is found
	      console.log('No quote data found');
	    }
	}, []);

	if (!quoteData) {
	    return <div>Loading...</div>; // Or any loading indicator
	 }


	return(
		<>
			<section>
				<div className="bannerbg">
					<div className="container">
						<div className="widthsmall text-center">
							<h1>FILL OUT THE FORM BELOW TO SPEAK WITH OUR TEAM</h1>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="formsection">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-9 col-12">
								<div className="formbg">
									<form>
										<div className="searchndata">
										    <div className="searchnimg"><img src={`${baseUrl}/uploads/rentalexhibition/${quoteData.imagecode}` } width="" height="" alt="" loading="lazy" /></div>
										    <div className="searchncart">
										        <div className="carttext">
		        									<span className="skucode">{quoteData.skucode}</span>
		        									<span className="rentalname">{quoteData.boothsize} TRADE SHOW BOOTH</span>
		        									<span className="boothsize">Booth Size : {quoteData.boothsize}</span>
		        								</div>
										    </div>
										</div>
									
										<h2 className="formtitle">Event Details:</h2>
										<input type="hidden" name="pageurl" value={typeof window !== "undefined" ? window.location.href : ""} readOnly />
										<input type="hidden" name="pageip" value="" readOnly />
										<input type="hidden" name="skucode" value={quoteData.skucode} readOnly />
										<input type="hidden" name="imgcode" value={`${baseUrl}/uploads/rentalexhibition/${quoteData.imagecode}`}  readOnly />
									    <input type="hidden" name="boothsize" value={quoteData.boothsize} readOnly />
									    <div>
											<input type="text" name="honeypot" value="" readOnly />
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-12">
												<input type="text" name="eventname" placeholder="Event Name*" required />
											</div>
											<div className="col-lg-6 col-md-12">
												<input type="text" name="eventcity" placeholder="Event City*" required />
											</div>
										</div>
										<hr/>
										<h2 className="formtitle">Contact Details:</h2>
										<div className="row">
											<div className="col-lg-6 col-md-12">
												<input type="text" name="name" placeholder="Full Name*" required />
											</div>
											<div className="col-lg-6 col-md-12">
												<input type="text" name="email" placeholder="Email ID*" />
											</div>
											<div className="col-lg-6 col-md-12">
												<div className="phone-input-container">
													<input type="text" name="phone" id="phone" placeholder="Phone Number*" />
													<input type="hidden" name="country_code" id="country_code" />
												</div>
											</div>
											<div className="col-lg-6 col-md-12">
												<input type="text" name="countryname" placeholder="Your Country*" required />
											</div>
											<div className="col-lg-12 col-md-12">
												<textarea name="information" rows="4" placeholder="Additional Information"></textarea>
											</div>
											<div className="col-lg-12 col-md-12">
												<div className="g-recaptcha" data-sitekey=""></div>
											</div>
											<div className="col-lg-12 col-md-12">
												<input type="submit" name="submmit" value="Submit" />
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
		);
}