'use client';
import '../../styles/exhibit-form.css';
import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

export default function ExhibitForm() {
  const [formData, setFormData] = useState({
    eventname: '',
    eventcity: '',
    name: '',
    email: '',
    phone: '',
    boothsize: '',
    budget: '',
    countryname: '',
    information: '',
  });

  const [errors, setErrors] = useState({});
  const [clientData, setClientData] = useState({ pageUrl: '', ipAddress: '' });
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    rental: false,
    purchase: false,
  });

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

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedOption({
      ...selectedOption,
      [name]: checked,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("✅ Form submitted...");

    // Basic validation
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.eventname) newErrors.eventname = 'Event Name is required';
    if (!formData.eventcity) newErrors.eventcity = 'Event City is required';
    if (!formData.boothsize) newErrors.boothsize = 'Booth size is required';
    if (!formData.countryname) newErrors.countryname = 'Country name is required';

    console.log("🟡 Validation errors:", newErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log("❌ Stopped: Validation failed");
      return;
    }

    setLoading(true);
    console.log("📦 Preparing FormData...");

    const fd = new FormData();
    fd.append("eventname", formData.eventname);
    fd.append("eventcity", formData.eventcity);
    fd.append("boothsize", formData.boothsize);
    fd.append("name", formData.name);
    fd.append("email", formData.email);
    fd.append("phone", formData.phone);
    fd.append("countryname", formData.countryname);
    fd.append("information", formData.information);
    fd.append("pageurl", clientData.pageUrl);
    fd.append("pageip", clientData.ipAddress);

    try {
      console.log("🚀 Sending data to API...");
      const response = await fetch("https://radonllcapi.mobel.us/public/api/save-exhibitformnew", {
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

  return (
    <>
    	{loading && (
		  <div className="loader-overlay">
		    <div className="spinner"></div>
		    <p>Submitting, please wait...</p>
		  </div>
		)}
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
                  <form className="validate-form" onSubmit={handleSubmit}>
                    <h2 className="formtitle">Event Details:</h2>
                    <input type="hidden" name="pageurl" value={clientData.pageUrl} />
                    <input type="hidden" name="ipaddress" value={clientData.ipAddress} />
                    <input type="hidden" name="skucode" />
                    <input type="hidden" name="imgcode" />
                    <input type="hidden" name="budget" />
                    <input type="hidden" name="boothsize" />

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
                    <hr />
                    <h2 className="formtitle">Booth Details:</h2>
                    <div className="row">
                      <div className="col-lg-6 col-6">
                        <div className="form-groups">
                          <input
                            type="checkbox"
                            id="rentalbooth"
                            name="rental"
                            value="Rental"
                            checked={selectedOption.rental}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="rentalbooth">Rental</label>
                        </div>
                      </div>
                      <div className="col-lg-6 col-6">
                        <div className="form-groups">
                          <input
                            type="checkbox"
                            id="purchasebooth"
                            name="purchase"
                            value="Purchase"
                            checked={selectedOption.purchase}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="purchasebooth">Purchase</label>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <input
                          type="text"
                          name="boothsize"
                          placeholder="Booth Size*"
                          value={formData.boothsize}
                          onChange={handleChange}
                          className={errors.boothsize ? 'is-invalid' : ''}
                        />
                        {errors.boothsize && <div className="error">{errors.boothsize}</div>}
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <input type="text" name="budget" placeholder="Budget.." />
                      </div>
                    </div>
                    <hr />
                    <h2 className="formtitle">Contact Details:</h2>
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name*"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? 'is-invalid' : ''}
                        />
                        {errors.name && <div className="error">{errors.name}</div>}
                      </div>
                      <div className="col-lg-6 col-md-12">
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
                      <div className="col-lg-6 col-md-12">
                        <div className="phone-input-container">
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
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <input
                          type="text"
                          name="countryname"
                          placeholder="Your Country*"
                          value={formData.countryname}
                          onChange={handleChange}
                          className={errors.countryname ? 'is-invalid' : ''}
                        />
                        {errors.countryname && <div className="error">{errors.countryname}</div>}
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <textarea
                          name="information"
                          rows="4"
                          placeholder="Additional Information"
                          value={formData.information}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <button type="submit" disabled={loading}>
                          {loading ? <span className="spinner"></span> : "Request Quote"}
                        </button>
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
