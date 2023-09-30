
import BlogCard from "@/components/blog/BlogCard";
import SingleBlog from "@/components/blog/SingleBlog";
import blogData from "@/components/blog/blogData";
import Breadcrumb from "@/components/common/Breadcrumbs";
import Pagination from "@/components/common/Pagination";
import { fetchBlog } from "@/lib/actions/blog.actions";
import { formatDate } from "@/lib/utils";

export const dynamic = 'force-dynamic'

interface blogProps{
  serializeBlogs:any[];
  isNext:boolean;
}
const BlogPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {

  const blogs:blogProps = await fetchBlog(1,6) || {}

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

         
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {blogs?.serializeBlogs?.map((blog) =>(
            <BlogCard
               key={blog._id}
               image={blog.image}
               CardTitle={blog.title}
               CardDescription={blog.shortDescription}
               date={formatDate(blog.createdDate)}
               link={`/blogs/${blog._id}`}
             />
          ))}
        </div>
       
      </div>
      <Pagination
        path='/blog'
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={blogs?.isNext}
      />
    </>
  );
};

export default BlogPage;
