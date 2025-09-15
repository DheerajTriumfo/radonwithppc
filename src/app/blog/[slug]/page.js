import Image from "next/image";
import Link from "next/link";
import Blogform from "./blogform";
import Style from '../../../styles/blog-detail.css';

const baseUrl = "https://radonllcapi.mobel.us/public";

export async function generateMetadata({ params }) {
  const res = await fetch(`${baseUrl}/api/blogdetail/${params.slug}`, { cache: "no-store" });
  if (!res.ok) return { title: "Blog Detail", description: "Unable to load blog data" };

  const data = await res.json();
  const blog = data.data;

  return {
    title: blog?.meta_title || blog?.blogtitle || "Blog Detail",
    description: blog?.metadesc?.replace(/<[^>]*>/g, "").slice(0, 150) || "Blog details",
    alternates: { canonical: `https://radonexhibition.com/blog/${params.slug}/` },
  };
}

export default async function BlogDetailPage({ params }) {
  const res = await fetch(`${baseUrl}/api/blogdetail/${params.slug}`, { cache: "no-store" });
  if (!res.ok) return <p>Blog not found</p>;
  const data = await res.json();
  const blog = data.data;
  const sidebar = data.sidebardata || [];
  const prev = data.prev;
  const next = data.next;

  return (
    <section>
      <div className="bannerbg">
        <div className="container">
          <div className="widthsmall text-center">
            <h1>{blog.blogtitle}</h1>
          </div>
        </div>
      </div>
      <div className="blogdetailbg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="contentpart">
                <div className="figure">
                  <Image
                    src={`${baseUrl}/uploads/blog/${blog.blogimg}`}
                    width={1014}
                    height={650}
                    alt={blog.alttag}
                  />
                </div>
                <div dangerouslySetInnerHTML={{ __html: blog.blogdesc }} />
              </div>
              <div className="postrailgrid">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="previouspost">
                      <Link href={prev ? `/blog/${prev.url}/` : '#'}>
                        <div className="icon">&#8249;</div>
                        <div className="caption">
                          <div className="rmark">Previous</div>
                          <div className="posttitle">
                            {prev ? prev.blogtitle : 'No previous post'}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="nextpost">
                      <Link href={next ? `/blog/${next.url}/` : '#'}>
                        <div className="icon">&#8250;</div>
                        <div className="caption">
                          <div className="rmark">Next</div>
                          <div className="posttitle">
                            {next ? next.blogtitle : 'No next post'}
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
                {sidebar.map((sidebarrow, index) => (
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
  );
}
