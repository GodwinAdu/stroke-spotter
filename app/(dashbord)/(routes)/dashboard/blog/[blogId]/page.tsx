import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import {  fetchSingleBlog } from "@/lib/actions/blog.actions";
import Link from "next/link";
import * as cheerio from 'cheerio';
;


export const dynamic ='force-dynamic'

const BlogDetails = async ({ params }: { params: { blogId: string } }) => {

  const blog = await fetchSingleBlog(params.blogId);
 console.log(blog)
  
  return (
    <>
      <Breadcrumb pageName="Our Blogs" />
      
      <h1 className="text-3xl font-semibold text-center my-8">My Blog Page</h1>
      
        <div key={blog._id} className="bg-white rounded-lg shadow-md p-4 mb-8">
          
          <div className="blog-details p-4">
           
            <p className="text-gray-600 mb-4">Created Date: {new Date(blog.createdDate).toLocaleString()}</p>
            <div className="prose" dangerouslySetInnerHTML={{ __html: blog.blocks }} />
          </div>
        </div>

    </>
  );
};

export default BlogDetails;
