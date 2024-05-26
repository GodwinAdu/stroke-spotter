


import SingleBlog from "@/components/blog/BlogCard";
import Breadcrumb from "@/components/common/Breadcrumbs";
import Pagination from "@/components/common/Pagination";
import { fetchApprovedBlog} from "@/lib/actions/blog.actions";


interface blogProps{
  serializeBlogs:any[];
  isNext:boolean;
}
const BlogPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {

  const blogs:blogProps = await fetchApprovedBlog(1,6) 

  console.log(blogs)

  return (
    <>
      <Breadcrumb
        pageName="Our Blogs"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
      
      <div className=" min-h-screen">
       
          <div className=" w-[95%] md:max-w-xl mx-auto mb-10">
            <input
              className="w-full px-4 py-2 rounded-lg shadow-sm border-2 border-indigo/50 focus:border-primary"
              placeholder="Search blog posts here ..."
            />
          </div>

         
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-10">
          {blogs?.serializeBlogs?.map((blog) =>(
            <SingleBlog
               key={blog._id}
               blog={blog}
             />
          ))}
        </div>
       
      </div>
      <Pagination
        path='/blogs'
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={blogs?.isNext}
      />
    </>
  );
};

export default BlogPage;
