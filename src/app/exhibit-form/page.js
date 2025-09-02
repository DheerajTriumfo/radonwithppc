import '../../styles/exhibit-form.css';
export const metadata = {
	title: 'Contact Us | Radon LLC',
	description: '',
	alternates: {
	    canonical: 'https://www.radonexhibition.com/exhibit-form/',
	},
}
export default function ExhibitForm()
{
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
									<form  className="validate-form">
										
										<h2 className="formtitle">Event Details:</h2>
										<input type="hidden" name="pageurl" />
										<input type="hidden" name="pageip" />
										<input type="hidden" name="skucode" />
										<input type="hidden" name="imgcode" />
									    <input type="hidden" name="budget" />
									    <input type="hidden" name="boothsize" />
									     
										<div className="row">
											<div className="col-lg-6 col-md-12">
												<input type="text" name="eventname" placeholder="Event Name*" required />
											</div>
											<div className="col-lg-6 col-md-12">
												<input type="text" name="eventcity" placeholder="Event City*" required />
											</div>
										</div>
		                			    <hr/>
		                			    <h2 className="formtitle">Booth Details:</h2>
										<div className="row">
										    <div className="col-lg-6 col-6">
												<div className="form-groups">
													<input type="checkbox" id="rentalbooth" name="rental" value="Rental" />
													<label for="rentalbooth">Rental</label>	
												</div>
											</div>
											<div className="col-lg-6 col-6">
												<div className="form-groups">
													<input type="checkbox" id="purchasebooth" name="rental" value="Purchase" />
													<label for="purchasebooth">Purchase</label>	
												</div>
											</div>
											<div className="col-lg-6 col-md-12">
												<input type="text" name="boothsize" placeholder="Booth Size*" />
											</div>
											<div className="col-lg-6 col-md-12">
												<input type="text" name="budget" placeholder="Budget.." />
											</div>
										</div>
		                			    
										<hr/>
										<h2 className="formtitle">Contact Details:</h2>
										<div className="row">
											<div className="col-lg-6 col-md-12">
												<input type="text" name="name" placeholder="Full Name*"  required />
											</div>
											<div className="col-lg-6 col-md-12">
												<input type="text" name="email" placeholder="Email ID*" required />
											</div>
											<div className="col-lg-6 col-md-12">
												<div className="phone-input-container">
													<input type="text" name="phone" id="phone" placeholder="Phone Number*" required />
												</div>
											</div>
											<div className="col-lg-6 col-md-12">
												<input type="text" name="countryname" placeholder="Your Country*" required />
											</div>
											<div className="col-lg-12 col-md-12">
												<textarea name="information" rows="4" placeholder="Additional Information"></textarea>
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