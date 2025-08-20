'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Blogform from './blogform.js';
import Link from "next/link";
import Image from "next/image";

const baseUrl = 'https://radonllcapi.mobel.us/public';

export default function GetblogDetail() {
  const { slug } = useParams();
  const [blogdetaildata, setBlogdetaildata] = useState([]);
  const [sidebarData, setSidebarData] = useState([]);
  const [prevdata, setPrevdata] = useState(null);
  const [nextdata, setNextdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`https://radonllcapi.mobel.us/public/api/blogdetail/${slug}`);
        if (!response.ok) throw new Error('Failed to fetch blog data');

        const data = await response.json();
        setBlogdetaildata(data.data);
        setSidebarData(data.sidebardata);
        setPrevdata(data.prev);
        setNextdata(data.next);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [slug]);

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

  if (error) {
    return (
      <section className="error-wrapper">
        <div className="container text-center py-5">
          <p>Error: {error}</p>
        </div>
      </section>
    );
  }

  const { blogtitle, blogimg, alttag, blogdesc } = blogdetaildata;

  return (
    <>
      <section>
        <div className="bannerbg">
          <div className="container">
            <div className="widthsmall text-center">
              <h1>{blogtitle}</h1>
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
                  <div className="figure">
                    <Image
                      src={`${baseUrl}/uploads/blog/${blogimg}`}
                      width={1014}
                      height={650}
                      alt={alttag}
                    />
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: blogdesc }} />
                </div>
                <div className="postrailgrid">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="previouspost">
                        <Link href={prevdata?.url || '#'}>
                          <div className="icon">&#8249;</div>
                          <div className="caption">
                            <div className="rmark">Previous</div>
                            <div className="posttitle">
                              {prevdata ? prevdata.blogtitle : 'No previous post'}
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="nextpost">
                        <Link href={nextdata?.url || '#'}>
                          <div className="icon">&#8250;</div>
                          <div className="caption">
                            <div className="rmark">Next</div>
                            <div className="posttitle">
                              {nextdata ? nextdata.blogtitle : 'No next post'}
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <Blogform />
                <div className="forminfo">
                  <div className="title">Recent Posts</div>
                  {sidebarData.map((sidebarrow, index) => (
                    <div className="card" key={sidebarrow.id || index}>
                      <Link href={`/blog/${sidebarrow.url}/`}>
                        <div className="figure">
                          <Image
                            src={`${baseUrl}/uploads/blog/${sidebarrow.blogimg}`}
                            width={1014}
                            height={650}
                            alt={sidebarrow.alttag}
                            loading="lazy"
                          />
                        </div>
                        <div className="caption">{sidebarrow.blogtitle}</div>
                        <div className="cardfooter">
                          <div className="mediafig"></div>
                          <div className="mediabody">
                            <div className="tt_small">Posted By</div>
                            <div className="tt_medium">Radon LLC</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
