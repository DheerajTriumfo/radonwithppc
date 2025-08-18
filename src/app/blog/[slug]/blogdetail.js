'use client';
import React, { useState, useEffect, use  } from 'react';
import { useParams } from 'next/navigation';
const baseUrl = 'https://radonexhibition.com';
import Blogform from './blogform.js';

export default function GetblogDetail({params})
{
	const { slug } = useParams();
	const [blogdetaildata, setBlogdetaildata] = useState([]);
	const [sidebarData, setSidebarData] = useState([]);
	const [prevdata, setPrevdata] = useState(null);
	const [nextdata, setNextdata] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null)
	useEffect(() => {
	fetch(`https://radonexhibition.com/api/blogdetail/${slug}/`)
		.then((response) => {
			if(!response.ok){
				throw new Error('Unable to fetch data');
			}
			return response.json();
		})
		.then((data) => {
			setBlogdetaildata(data.data);
			setSidebarData(data.sidebardata);
			setPrevdata(data.prev);
			setNextdata(data.next);
			setLoading(false);
		})
		.catch((error) => {
			setError(error.message);
			setLoading(false);
		});
	},[slug]);

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

	return(
		<>	<section>
				<div className="bannerbg">
					<div className="container">
						<div className="widthsmall text-center">
							<h1>{blogdetaildata.blogtitle}</h1>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="blogdetailbg">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-12 col-sm-12">
								<div className="contentpart">
									<div className="figure"><img src={`${baseUrl}/uploads/blog/${blogdetaildata.blogimg}`} width="1014" height="650" loading="lazy" alt={ blogdetaildata.alttag } /></div>
									<div dangerouslySetInnerHTML={{ __html : blogdetaildata.blogdesc}} />
								</div>
								<div className="postrailgrid">
									<div className="row">
										<div className="col-md-6 col-sm-12">
											<div className="previouspost">
												<link href={prevdata ? prevdata.url : '#'}>
													<div className="icon">&#8249;</div>
													<div className="caption">
														<div className="rmark">Previous</div>
														<div className="posttitle">{prevdata ? prevdata.blogtitle : 'No previous post'}</div>
													</div>
												</link>
											</div>
										</div>
										<div className="col-md-6 col-sm-12">
											<div className="nextpost">
												<link href={nextdata ? nextdata.url : '#'}>
													<div className="icon">&#8250;</div>
													<div className="caption">
														<div className="rmark">Next</div>
														<div className="posttitle">{nextdata ? nextdata.blogtitle : 'No next post'}</div>
													</div>
												</link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-12 col-sm-12">
								<Blogform/>
								<div className="forminfo">
									<div className="title">Recent Posts</div>
									{sidebarData.map((sidebarrow, index) =>(
									<div className="card" key={sidebarrow.id || index}>
									    <link href={`/blog/${sidebarrow.url}/`}>
											<div className="figure"><img src={`${baseUrl}/uploads/blog/${sidebarrow.blogimg}`} width="1014" height="650" alt={ sidebarrow.alttag } loading="lazy"  /></div>
											<div className="caption">{sidebarrow.blogtitle}</div>
											<div className="cardfooter">
												<div className="mediafig"></div>
												<div className="mediabody">
													<div className="tt_small">Posted By</div>
													<div className="tt_medium">Radon LLC</div>
												</div>
											</div>
										</link>
									</div>
									)
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
		);
}