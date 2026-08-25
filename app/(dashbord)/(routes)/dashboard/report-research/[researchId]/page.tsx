import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import {  fetchSingleBlog } from "@/lib/actions/blog.actions";

const ResearchDetails = async ({ params }: { params: { researchId: string } }) => {

  const blog = await fetchSingleBlog(params.researchId);
 console.log(blog)
  
  return (
    <>
      <Breadcrumb pageName="Our Blogs" />
      
      <h1 className="text-3xl font-semibold text-center my-8">Research Page</h1>
      
        <div key={blog._id} className="bg-white rounded-lg shadow-md p-4 mb-8">
          
          <div className="blog-details p-4">
           
            <p className="text-gray-600 mb-4">Created Date: {new Date(blog.createdDate).toLocaleString()}</p>
            <div className="prose" dangerouslySetInnerHTML={{ __html: blog.blocks }} />
          </div>
        </div>

    </>
  );
};

export default ResearchDetails;
