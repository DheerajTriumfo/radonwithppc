
export default function Contactform()
{
	return(
		<>
			<div className="formbg">
				<div className="formtitle">ENQUIRE NOW!</div>
				<p>Looking for a brilliant partner for trade show booth design and construction? There is no need to look further, put your query here now!</p>
				

				<form  className="validate-form">

					<input type="hidden" name="pageurl"  />
					<input type="hidden" name="pageip"  />
				    <div style={{ display: 'none' }}>
				        <input type="text" name="honeypot"  />
				    </div>
				    <div className="row">
				        <div className="col-lg-12 mb-3">
				            <input type="text" name="name" className="form-control" placeholder="Your Name*" required />
				        </div>

				        <div className="col-lg-12 mb-3">
				            <input type="text" name="email" className="form-control" placeholder="Email ID*" required />
				        </div>

				        <div className="col-lg-6 mb-3">
				            <div className="phone-input-container">
				                <input type="text" name="phone" id="phone" className="form-control" placeholder="Phone Number*" required />
				            </div>
				        </div>

				        <div className="col-lg-6 mb-3">
				            <input type="text" name="city" className="form-control" placeholder="Your Country*" required />
				        </div>

				        <div className="col-lg-12 mb-3">
				            <textarea name="information" rows="3" className="form-control" placeholder="Additional Information"></textarea>
				        </div>

				        <div className="col-lg-12">
				            <input type="submit" name="submit" className="btn btn-primary" value="Send Message" />
				        </div>
				    </div>
				</form>

			</div>
		</>
		);
}