import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import { fetchBlog } from "@/lib/actions/blog.actions";
import Link from "next/link";
import Pagination from "@/components/common/Pagination";
import SingleBlog from "@/components/blog/SingleBlog";

// unsave browser cache
export const dynamic = 'force-dynamic';

const BlogPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
const result = await fetchBlog(1,6);


  console.log(result)

  

  return (
    <>
      <Breadcrumb pageName="Our Blogs" />
      <div className="flex justify-end items-center space-x-4 p-4">
        <Link
          href="/dashboard/blog/createBlog"
          className="px-8 py-3 rounded-xl font-medium shadow-xl bg-white hover:bg-indigo/50 hover:text-white text-blue-500 hover:bg-gray-100 transition duration-300"
        >
          Create Blog
        </Link>
      </div>


      <h1 className="text-3xl font-semibold text-center my-8">My Blog Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {result?.serializeBlogs?.map((blog) =>(
            <SingleBlog
             key={blog._id}
             id={blog._id}
             image={blog.image}
             title={blog.title}
             description={blog.shortDescription}
             link={`/dashboard/blog/${blog._id}`}
             approved={blog.approved}
             />
          ))}
      </div>
      

      
      <Pagination
        path='/dashboard/blog'
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result?.isNext}
      />
    </>
  );
};

export default BlogPage;
