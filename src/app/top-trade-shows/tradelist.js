'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Listing()
{
	const [tradeshowlist, setTradeshowlist] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);  // Track current page
  	const [totalPages, setTotalPages] = useState(1);  // Track total pages
	useEffect(() =>{
		fetch(`https://radonllcapi.mobel.us/public/api/tradeshowlist?page=${currentPage}`)
		.then((response) => {
			if(!response.ok){
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then((data) => {
			setTradeshowlist(data.data);
			setTotalPages(data.total_pages);
			setLoading(false);
		})
		.catch((error) => {
			console.error('Error:', error);
			setError(error.message);
			setLoading(false);
		})
	}, [currentPage]);


	if (loading) {
	    return (
	      <section className="loader-wrapper">
	        <div className="container text-center py-5">
	          <div className="spinner"></div>
	          <p>Loading blogs...</p>
	        </div>
	      </section>
	    );
	  }
	// Handle page change
	  
	const handlePageChange = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page); // Update the current page state
    }
  };

	// Render pagination links
	const renderPagination = () => {
    const pageLinks = [];
    pageLinks.push(
      <li key="prev" className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} aria-disabled={currentPage === 1}>
        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} aria-label="Previous">
          ‹
        </button>
      </li>
    );
    for (let i = 1; i <= totalPages; i++) {
      pageLinks.push(
        <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`} aria-current={i === currentPage ? 'page' : ''}>
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }

    // Next page button
    pageLinks.push(
      <li key="next" className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`} aria-disabled={currentPage === totalPages}>
        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} aria-label="Next">
          ›
        </button>
      </li>
    );

    return pageLinks;
  };


	return(
		<>
			<section>
				<div className="tradeviewbg">
					<div className="container">
						<div className="trade-table-content table-responsive" id="searchresult">
							<table className="table">
			                    <thead>
			                        <tr>
			                            <th>Rank</th>
			                            <th>Event Name</th>
			                            <th>Event Date</th>
			                            <th>Place</th>
			                            <th>Action</th>
			                        </tr>
			                    </thead>
			                </table>
			            </div>
		                <div className="tradeshowviewbg">
		        			<div className="row">
		        				{tradeshowlist.map((tradeshow, index) => 
		        				{
		        					const startDate = new Date(tradeshow.start_date);
								  	const endDate = new Date(tradeshow.end_date);
								  	const startDateDay = startDate.getDate();
								  	const endDateDay = endDate.getDate();
								  	const monthYear = endDate.toLocaleString('default', { month: 'short', year: 'numeric' });
		        				
		        				return (
		        					
		        				<div  key={tradeshow.id || index} className="col-md-12">
			    					<ul>
			    						<li><div className="nnumber">{index + 1}</div></li>
			    						<li>
			    							<div className="tradlogo"><Image src={`https://radonllcapi.mobel.us/public/uploads/tradeshow/${tradeshow.event_logo}`} /></div>
			    						</li>
		                                <li><strong>{tradeshow.event_name}  </strong></li>
			    						<li><span>{startDateDay}-{endDateDay} {monthYear}</span></li>
			    						<li>
			    							{tradeshow.city}, {tradeshow.country}<br/>
			    							
			    						</li>
			    						<li><div className="viewdetail"><a href={`/top-trade-shows/${tradeshow.slug}`}>View Details</a></div></li>
			    					</ul>
			    				</div>
			    				);
			    			})}
		        			</div>
		        		</div>
		        		<div>
							<nav>
								<ul className="pagination">{renderPagination()}</ul>
							</nav>
						</div>
					</div>
				</div>
			</section>
		</>
		);
}