'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const baseUrl = 'https://radonllcapi.mobel.us/public';

export default function Bloglist()
{
	const [blogdata, SetBlogdata] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		fetch(`${baseUrl}/api/bloglist?page=${currentPage}`)
		.then((response) => {
			if(!response.ok){
				throw new Error('Network not loaded');
			}
			return response.json();
		})
		.then((data) => {
			SetBlogdata(data.data);
			setTotalPages(data.total_pages);
			setLoading(false);
		})

		.catch((error) => {
			console.error('Error:', error);
			setError(error.message);
			setLoading(false);
		})
	},[currentPage]);

	//for loading spinner
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
  ////////////
	  const formatDate = (dateString) => {
	    const date = new Date(dateString);
	    const day = String(date.getDate()).padStart(2, '0'); // Adds leading zero if day < 10
	    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adds leading zero if month < 10
	    const year = date.getFullYear();

	    return `${day}-${month}-${year}`;
	  };
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
				<div className="portfoliobg">
					<div className="container">
						<div className="portfolioinner">
							<div className="row">
								{blogdata.map((blgdta, index) => (
									<div key={blgdta.id || index} className="col-lg-4 col-md-6 col-12">
									    <div className="blogbx">
			    							<Link href={`/blog/${blgdta.url}/`}>
			    								<div className="figure">
			    									<Image src={`https://radonllcapi.mobel.us/public/uploads/blog/${blgdta.blogimg}`} width="420" height="290" alt="Radon Blog" loading="lazy" />
			    								</div>
			    								<div className="caption">
			    									<div className="title">{blgdta.blogtitle}</div>
			    									<div className="gt-bottom">
														<ul>
															<li><svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> {formatDate(blgdta.created_at)}</li>
														</ul>
													</div>
			    								</div>
			    							</Link>
										</div>
									</div>
									)
								)}
							</div>
							<div>
								<nav>
									<ul className="pagination">{renderPagination()}</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
		);
}