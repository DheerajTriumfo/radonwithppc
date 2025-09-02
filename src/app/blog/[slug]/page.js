import Style from '../../../styles/blog-detail.css';

const baseUrl = 'https://radonllcapi.mobel.us/public';

import GetblogDetail from './blogdetail.js';


export async function generateMetadata(context) {
  const { params } = await context; // ✅ await the context

  const slug = params.slug;

  try {
    const res = await fetch(`https://radonllcapi.mobel.us/public/api/blogdetail/${slug}/`);
    if (!res.ok) throw new Error("Failed to fetch metadata");

    const data = await res.json();
    const blogdata = data?.data;

    return {
      title: blogdata?.meta_title || 'Blog Detail',
      description: blogdata?.metadesc?.replace(/<[^>]*>/g, '').slice(0, 150) || 'Blog details',
      alternates: {
          canonical: `https://www.radonexhibition.com/blog/${slug}/`,
      },
    };
  } catch (error) {
    return {
      title: 'Blog Detail',
      description: 'Unable to load trade show data',
    };
  }
}


export default function GetBlogdetail({params})
{
	

	//for loading spinner
	
  ////////////
	return(
		<>
			<GetblogDetail/>
		</>
		);
}