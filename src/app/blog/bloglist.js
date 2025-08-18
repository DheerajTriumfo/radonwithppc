'use client';
import React, {useState, useEffect} from 'react';

const baseUrl = 'https://radonexhibition.com';

export default function Bloglist()
{
	const [blogdata, SetBlogdata] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		fetch(`${baseUrl}/api/bloglist/?page=${currentPage}`)
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
			    							<link href={`/blog/${blgdta.url}/`}>
			    								<div className="figure">
			    									<img src={`https://radonexhibition.com/uploads/blog/${blgdta.blogimg}`} width="420" height="290" alt="" loading="lazy" />
			    								</div>
			    								<div className="caption">
			    									<div className="title">{blgdta.blogtitle}</div>
			    									
			    								</div>
			    							</link>
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