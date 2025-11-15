'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import '../../../styles/exhibit-form.css';

const baseUrl = 'https://radonllcapi.mobel.us/public';

const INITIAL_FORM = {
  eventname: '',
  eventcity: '',
  name: '',
  email: '',
  phone: '',
  information: '',
  honeypot: '',
};

export default function SidebarQuoteForm({ skucode, thumbnail, boothsize }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [clientData, setClientData] = useState({ pageUrl: '', ipAddress: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const imageSrc = thumbnail
    ? `${baseUrl}/uploads/rentalexhibition/${thumbnail}`
    : null;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setClientData({
        pageUrl: window.location.href,
        ipAddress: window.location.hostname,
      });
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.honeypot) return;

    setIsSubmitting(true);

    const payload = new FormData();
    payload.append('eventname', formData.eventname);
    payload.append('eventcity', formData.eventcity);
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('information', formData.information);
    payload.append('pageurl', clientData.pageUrl);
    payload.append('pageip', clientData.ipAddress);

    if (skucode) payload.append('skucode', skucode);
    if (boothsize) payload.append('boothsize', boothsize);
    if (imageSrc) payload.append('imgcode', imageSrc);

    try {
      const response = await fetch(
        'https://radonllcapi.mobel.us/public/api/save-exhibitformnew',
        {
          method: 'POST',
          body: payload,
        }
      );

      let result = {};
      try {
        result = await response.json();
      } catch (error) {
        console.warn('Unable to parse response JSON', error);
      }

      if (!response.ok) {
        throw new Error(result?.message || 'An error occurred while submitting the form.');
      }

      resetForm();
      window.location.href = '/thank-you/';
    } catch (error) {
      console.error('SidebarQuoteForm submission failed:', error);
      alert(error.message || 'Something went wrong while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="formbg">
      <form onSubmit={handleSubmit}>
        {/* {imageSrc ? (
          <div className="searchndata">
            <div className="searchnimg">
              <Image
                src={imageSrc}
                width={320}
                height={240}
                alt={`${boothsize || 'Trade show'} booth preview`}
                loading="lazy"
              />
            </div>
            <div className="searchncart">
              <div className="carttext">
                {skucode ? <span className="skucode">{skucode}</span> : null}
                {boothsize ? (
                  <>
                    <span className="rentalname">
                      {boothsize} TRADE SHOW BOOTH
                    </span>
                    <span className="boothsize">Booth Size : {boothsize}</span>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        ) : null} */}

        <input
          type="hidden"
          name="pageurl"
          value={clientData.pageUrl}
          readOnly
        />
        <input
          type="hidden"
          name="pageip"
          value={clientData.ipAddress}
          readOnly
        />
        {skucode ? (
          <input type="hidden" name="skucode" value={skucode} readOnly />
        ) : null}
        {imageSrc ? (
          <input type="hidden" name="imgcode" value={imageSrc} readOnly />
        ) : null}
        {boothsize ? (
          <input type="hidden" name="boothsize" value={boothsize} readOnly />
        ) : null}

        <div style={{ display: 'none' }} aria-hidden="true">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <input
              type="text"
              name="eventname"
              placeholder="Event Name*"
              value={formData.eventname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-12 col-md-12">
            <input
              type="text"
              name="eventcity"
              placeholder="Event City*"
              value={formData.eventcity}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-12 col-md-12">
            <input
              type="text"
              name="email"
              placeholder="Email ID*"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="phone-input-container">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input type="hidden" name="country_code" id="country_code" />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <textarea
              name="information"
              rows="1"
              placeholder="Additional Information"
              value={formData.information}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="g-recaptcha" data-sitekey=""></div>
          </div>
          <div className="col-lg-12 col-md-12">
            <input
              type="submit"
              name="submit"
              value="Contact Us"
              disabled={isSubmitting}
            />
          </div>
        </div>
      </form>
    </div>
  );
}