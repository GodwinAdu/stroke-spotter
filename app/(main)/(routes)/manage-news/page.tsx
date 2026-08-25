import Breadcrumb from "@/components/common/Breadcrumbs";
import Pagination from "@/components/common/Pagination";
import ManageNewsCard from "@/components/manage-card/ManageBlogCard";
import { fetchManageNews } from "@/lib/actions/news.actions";

const ManageNews = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const news = await fetchManageNews(1, 6);

  console.log("managenews:", news);

  return (
    <>
      <Breadcrumb pageName="Manage Blogs" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 mb-5">
        {news.serializeNews && news.serializeNews.length > 0 ? (
          news.serializeNews.map((blog) => (
            <ManageNewsCard
              key={blog._id}
              image={blog.image}
              title={blog.title}
              description={blog.shortDescription}
              id={blog._id}
              link={`/manage-news/${blog._id}`}
            />
          ))
        ) : null}
      </div>

      <div className="flex justify-center items-center mb-5">
        {news.serializeNews && news.serializeNews.length === 0 && (
          <div className="text-center">
            <p className="font-bold text-lg md:text-2xl">
              Please, you have not created any News yet to manage...
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
        isNext={news?.isNext}
      />
      </div>
    </>
  );
};

export default ManageNews;
