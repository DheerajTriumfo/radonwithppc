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
										<input type="hidden" name="pageurl" value={clientData.pageUrl} />
                    					<input type="hidden" name="ipaddress" value={clientData.ipAddress} />
										<div className="row">
											<div className="col-lg-6 col-md-12">
												<input
						                          type="text"
						                          name="eventname"
						                          placeholder="Event Name*"
						                          value={formData.eventname}
						                          onChange={handleChange}
						                          className={errors.eventname ? 'is-invalid' : ''}
						                        />
						                        {errors.eventname && <div className="error">{errors.eventname}</div>}
											</div>
											<div className="col-lg-6 col-md-12">
												<input
						                          type="text"
						                          name="eventcity"
						                          placeholder="Event City*"
						                          value={formData.eventcity}
						                          onChange={handleChange}
						                          className={errors.eventcity ? 'is-invalid' : ''}
						                        />
						                        {errors.eventcity && <div className="error">{errors.eventcity}</div>}
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