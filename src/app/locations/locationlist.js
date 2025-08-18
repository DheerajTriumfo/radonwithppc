'use client';
import React, { useState, useEffect } from 'react';




export default function Locationlist()
{
	const [ listing, setLocationlisting ] = useState(null);
	useEffect(() => {
		fetch('https://radonexhibition.com/api/locationlist/')
		.then((res) => res.json() )
		.then((data) => setLocationlisting(data.data))
		.catch((error) => console.error("Error fetching data:", error));
	},[]);
	
	return(
		<>
			{listing ? (
				listing.map((citylistdata, index) => (
					<li key={index}>
						<a href={`/${citylistdata.pageurl}/`}>{citylistdata.cityname}</a>
					</li>
				))
			):(
					<p>Loading...</p>
				)
			}
		</>
		);
}