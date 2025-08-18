import '../../styles/freedesignform.css';

export default function GreedesignForm()
{
	return(
		<>
			<section>
				<div className="bannerbg">
					<div className="container">
						<div className="widthsmall text-center">
							<h1>GET FREE DESIGN</h1>
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
										<div style={{display: 'none'}}>
											<input type="text" name="honeypot"  />
										</div>   
										<h2 className="formtitle">Event Detail</h2>
										<input type="hidden" name="pageurl" />
										<input type="hidden" name="pageip" />
										<div className="row">
											<div className="col-lg-6 col-md-12">
												<input type="text" name="eventname" placeholder="Event Name*" required />
											</div>
											<div className="col-lg-6 col-md-12">
												<input type="text" name="eventcity" placeholder="Event City*" required />
											</div>
										</div>
										<hr/>
										<h2 className="formtitle">Booth Detail</h2>
										<div className="row">
											<div className="col-lg-6 col-md-12">
												<input type="text" name="boothsize" placeholder="Booth Size*" required />
											</div>
											<div className="col-lg-6 col-md-12">
												<input type="text" name="budget" placeholder="Budget (If Decided)" />
											</div>
										</div>
										<hr/>
										<h2 className="formtitle">Contact Detail</h2>
										<div className="row">
											<div className="col-lg-6 col-md-12">
												<input type="text" name="name" placeholder="Your Name*" required />
											</div>
											<div className="col-lg-6 col-md-12">
												<input type="text" name="email" placeholder="Email ID*" required />
											</div>
											<div className="col-lg-6 col-md-12">
												<div className="phone-input-container">
													<input type="text" name="phone" id="phone" placeholder="Mobile Number*" required />
												</div>
											</div>
											<div className="col-lg-6 col-md-12">
												<input type="text" name="countryname" placeholder="Your Country*" required />
											</div>
											<div className="col-lg-12 col-md-12">
												<textarea name="information" rows="4" placeholder="Additional Information"></textarea>
											</div>
											<div className="col-lg-12 col-md-12">
												<input type="submit" name="submmit" value="Send Requierements" />
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