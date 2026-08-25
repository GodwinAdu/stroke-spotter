import Breadcrumb from "@/components/common/Breadcrumbs";
import Pagination from "@/components/common/Pagination";
import ManageBlogCard from "@/components/manage-card/ManageBlogCard";
import { fetchBlogsByUserId } from "@/lib/actions/blog.actions";

const ManageBlog = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const blogs = await fetchBlogsByUserId(1, 6);

  console.log("manageblogs:", blogs);

  return (
    <>
      <Breadcrumb pageName="Manage Blogs" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 mb-5">
        {blogs.serializeBlogs && blogs.serializeBlogs.length > 0 ? (
          blogs.serializeBlogs.map((blog) => (
            <ManageBlogCard
              key={blog._id}
              image={blog.image}
              title={blog.title}
              description={blog.shortDescription}
              id={blog._id}
              link={`/manage-blog/${blog._id}`}
            />
          ))
        ) : null}
      </div>

      <div className="flex justify-center items-center mb-5">
        {blogs.serializeBlogs && blogs.serializeBlogs.length === 0 && (
          <div className="text-center">
            <p className="font-bold text-lg md:text-2xl">
              Please, you have not created any blog yet to manage...
            </p>
            <button
              className="mt-4 bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
             
            >
              Send Me Home
            </button>
          </div>
        )}
      </div>

      <div className="mb-4">
      <Pagination
        path="/manage-blog"
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={blogs?.isNext}
      />
      </div>
    </>
  );
};

export default ManageBlog;
