'use client';
import React, { useState, useEffect } from 'react';

export default function Blogform() {
	const [formData, setFormData
		] = useState({
		honeypot: '',
		pageurl: '',
		pageip: '',
		name: '',
		email: '',
		phone: '',
		country_code: '',
		boothsize: '',
		yourcountry: '',
		information: '',
		uploadfile: []
	});

	//const [recaptchaToken, setRecaptchaToken] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState('');

	// Auto-fill page URL and IP
	useEffect(() => {
		setFormData((prev) => ({
			...prev,
			pageurl: window.location.href,
		}));

		// Optional: Fetch IP address
		fetch('https://api64.ipify.org?format=json')
			.then(res => res.json())
			.then(data => {
				setFormData(prev => ({
					...prev,
					pageip: data.ip
				}));
			})
			.catch(err => console.error('Failed to get IP:', err));
	}, []);

	// Handle input change
	const handleChange = (e) => {
		const { name, value, type, files } = e.target;

		if (type === 'file') {
			setFormData({ ...formData, [name]: files });
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	// Handle form submit
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.honeypot) return; // bot detected

		const submitData = new FormData();
		for (let key in formData) {
			if (key === 'uploadfile') {
				for (let i = 0; i < formData.uploadfile.length; i++) {
					submitData.append('uploadfile[]', formData.uploadfile[i]);
				}
			} else {
				submitData.append(key, formData[key]);
			}
		}
		//submitData.append('g-recaptcha-response', recaptchaToken);

		setIsSubmitting(true);
		setMessage('');

		try {
			const response = await fetch('https://radonexhibition.com/api/save-blogform/', {
				method: 'POST',
				body: submitData,
			});

			const result = await response.json();

			if (response.ok) {
				// setMessage('Form submitted successfully!');
				// setFormData({
				// 	honeypot: '',
				// 	pageurl: window.location.href,
				// 	pageip: '',
				// 	name: '',
				// 	email: '',
				// 	phone: '',
				// 	country_code: '',
				// 	boothsize: '',
				// 	yourcountry: '',
				// 	information: '',
				// 	uploadfile: []
				// });
				window.location.href = '/thank-you/';
			} else {
				setMessage(result.message || 'Something went wrong.');
			}
		} catch (error) {
			console.error('Submit error:', error);
			setMessage('Failed to submit form.');
		} finally {
			setIsSubmitting(false);
		}
	};

	// Optional: Add reCAPTCHA script dynamically (or use react-google-recaptcha)
	useEffect(() => {
		if (!document.getElementById('recaptcha-script')) {
			const script = document.createElement('script');
			script.src = 'https://www.google.com/recaptcha/api.js';
			script.async = true;
			script.defer = true;
			script.id = 'recaptcha-script';
			document.body.appendChild(script);
		}
		window.onRecaptchaSuccess = function (token) {
			setRecaptchaToken(token);
		};
	}, []);

	return (
		<div className="forminfo">
			<div className="title text-center">Get Booth Quotation</div>

			{message && <p className="text-center">{message}</p>}

			<form onSubmit={handleSubmit} className="validate-form">
				<div style={{ display: 'none' }}>
					<input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} />
				</div>

				<input type="hidden" name="pageurl" value={formData.pageurl} />
				<input type="hidden" name="pageip" value={formData.pageip} />

				<input type="text" name="name" placeholder="Your Name*" required value={formData.name} onChange={handleChange} />
				<input type="text" name="email" placeholder="Email ID*" required value={formData.email} onChange={handleChange} />

				<div className="phone-input-container">
					<input type="text" name="phone" id="phone" placeholder="Phone Number*" required value={formData.phone} onChange={handleChange} />
					<input type="hidden" name="country_code" id="country_code" value={formData.country_code} />
				</div>

				<input type="text" name="boothsize" placeholder="Booth Size*" required value={formData.boothsize} onChange={handleChange} />
				<input type="file" name="uploadfile" multiple onChange={handleChange} />
				<input type="text" name="yourcountry" placeholder="Your Country" required value={formData.yourcountry} onChange={handleChange} />
				<textarea name="information" rows="3" placeholder="Additional Information" value={formData.information} onChange={handleChange}></textarea>

				<div className="text-center">
					<input type="submit" value={isSubmitting ? 'Submitting...' : 'Submit Enquiry'} disabled={isSubmitting} />
				</div>
			</form>
		</div>
	);
}
