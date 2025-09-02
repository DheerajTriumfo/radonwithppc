'use client';
import React, { useState, useEffect } from 'react';
export default function Contactform()
{
	const [formData, setFormData] = useState({
	    name: '',
	    email: '',
	    phone: '',
	    city: '',
	    information: '',
	  });

	  const [errors, setErrors] = useState({});
	  const [clientData, setClientData] = useState({ pageUrl: '', ipAddress: '' });
	  const [loading, setLoading] = useState(false);

	  // Fetch page URL and IP Address
	  useEffect(() => {
	    if (typeof window !== 'undefined') {
	      setClientData({
	        pageUrl: window.location.href,
	        ipAddress: window.location.hostname, // real client IP needs backend
	      });
	    }
	  }, []);

	  // Handle input changes
	  const handleChange = (e) => {
	    const { name, value } = e.target;
	    setFormData({
	      ...formData,
	      [name]: value,
	    });
	  };

	  //const [loading, setLoading] = useState(false);
	  // Submit form
	  const handleSubmit = async (e) => {
	  e.preventDefault();
	  console.log("✅ Form submitted...");

	  // Basic validation
	  const newErrors = {};
	  if (!formData.name) newErrors.name = 'Name is required';
	  if (!formData.email) newErrors.email = 'Email is required';
	  if (!formData.phone) newErrors.phone = 'Phone number is required';
	  if (!formData.city) newErrors.city = 'City is required';

	  console.log("🟡 Validation errors:", newErrors);

	  if (Object.keys(newErrors).length > 0) {
	    setErrors(newErrors);
	    console.log("❌ Stopped: Validation failed");
	    return;
	  }

	  setLoading(true);
	  console.log("📦 Preparing FormData...");

	  const fd = new FormData();
	  fd.append("name", formData.name);
	  fd.append("email", formData.email);
	  fd.append("phone", formData.phone);
	  fd.append("city", formData.city);
	  fd.append("information", formData.information);
	  fd.append("pageurl", clientData.pageUrl);
	  fd.append("pageip", clientData.ipAddress);
	  try {
	    console.log("🚀 Sending data to API...");
	    const response = await fetch("https://radonllcapi.mobel.us/public/api/save-contactformnew", {
	      method: "POST",
	      body: fd,
	    });

	    console.log("🔵 Response status:", response.status);

	    let result = {};
	    try {
	      result = await response.json();
	      console.log("🟢 Response JSON:", result);
	    } catch (err) {
	      console.error("❌ Failed to parse JSON:", err);
	    }

	    if (response.ok) {
	      console.log("✅ Success! Redirecting...");
	      window.location.href = "/thank-you/";
	    } else {
	      alert(result.message || "An error occurred while submitting the form.");
	    }
	  } catch (err) {
	    console.error("🔥 Network error:", err);
	    alert("Something went wrong: " + err.message);
	  } finally {
	    setLoading(false);
	  }
	};
	return(
		<>
			{loading && (
	          <div className="loader-overlay">
	            <div className="spinner"></div>
	            <p>Submitting, please wait...</p>
	          </div>
	        )}
			<div className="formbg">
				<div className="formtitle">ENQUIRE NOW!</div>
				<p>Looking for a brilliant partner for trade show booth design and construction? There is no need to look further, put your query here now!</p>
				

				<form onSubmit={handleSubmit} className="validate-form">

					<input type="hidden" name="pageurl" value={clientData.pageUrl} />
                    <input type="hidden" name="ipaddress" value={clientData.ipAddress} />
				    <div style={{ display: 'none' }}>
				        <input type="text" name="honeypot"  />
				    </div>
				    <div className="row">
				        <div className="col-lg-12 mb-3">
				        	<input
	                          type="text"
	                          name="name"
	                          placeholder="Your Name*"
	                          value={formData.name}
	                          onChange={handleChange}
	                          className={errors.name ? 'is-invalid' : ''}
	                        />
	                        {errors.name && <div className="error">{errors.name}</div>}
				        </div>

				        <div className="col-lg-12 mb-3">
				           <input
	                          type="text"
	                          name="email"
	                          placeholder="Email ID*"
	                          value={formData.email}
	                          onChange={handleChange}
	                          className={errors.email ? 'is-invalid' : ''}
	                        />
	                        {errors.email && <div className="error">{errors.email}</div>}
				        </div>

				        <div className="col-lg-6 mb-3">
				            <input
	                            type="text"
	                            name="phone"
	                            placeholder="Phone Number*"
	                            value={formData.phone}
	                            onChange={handleChange}
	                            className={errors.phone ? 'is-invalid' : ''}
	                          />
	                          {errors.phone && <div className="error">{errors.phone}</div>}
				        </div>

				        <div className="col-lg-6 mb-3">
				            <input
	                          type="text"
	                          name="city"
	                          placeholder="Your City*"
	                          value={formData.city}
	                          onChange={handleChange}
	                          className={errors.city ? 'is-invalid' : ''}
	                        />
	                        {errors.city && <div className="error">{errors.city}</div>}
				        </div>

				        <div className="col-lg-12 mb-3">
				            <textarea
	                          name="information"
	                          rows="4"
	                          placeholder="Additional Information"
	                          value={formData.information}
	                          onChange={handleChange}
	                        ></textarea>
				        </div>

				        <div className="col-lg-12">
				        	<button type="submit" disabled={loading}>
	                          {loading ? <span className="spinner"></span> : "Request Quote"}
	                        </button>
				        </div>
				    </div>
				</form>

			</div>
		</>
		);
}