import { fetchBlog } from "@/lib/actions/blog.actions";
import ModernPageHeader from "@/components/dashboard/modern/ModernPageHeader";
import ModernBlogCard from "@/components/dashboard/modern/ModernBlogCard";
import Pagination from "@/components/common/Pagination";

const BlogPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const params = await searchParams;
  const result = await fetchBlog(1, 6);

  return (
    <div className="space-y-6">
      <ModernPageHeader
        title="Blog Management"
        description="Create, edit, and manage your blog posts"
        createLink="/dashboard/blog/createBlog"
        createLabel="Create Blog"
        count={result?.serializeBlogs?.length || 0}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {result?.serializeBlogs?.map((blog) => (
          <ModernBlogCard
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
        path="/dashboard/blog"
        pageNumber={params?.page ? +params.page : 1}
        isNext={result?.isNext}
      />
    </div>
  );
};

export default BlogPage;
