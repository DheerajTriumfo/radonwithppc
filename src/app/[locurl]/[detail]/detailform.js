'use client';
import { useState } from 'react';


export default function GetboothDetailform({ skucode, thumbnail, boothsize }) {

	console.log("Form is rendered with skucode:", skucode);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    

    const quotedta = {
      skucode,
      imagecode: thumbnail,
      boothsize,
    };
    localStorage.setItem('quotedata', JSON.stringify(quotedta));

    console.log("Data stored:", quotedta); // Check the data being stored
    window.location.href = '/getrentalquote/';
  };

  return (
  	<form  onSubmit={handleSubmit}>
	    <input type="hidden" name="skucode" value={skucode} readOnly />
	    <input type="hidden" name="imagecode" value={thumbnail} readOnly />
	    <input type="hidden" name="boothsize" value={boothsize} readOnly />
	    <button type="submit">CONTACT US</button>
	</form>
  );
}