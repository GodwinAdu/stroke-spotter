import { fetchNews } from "@/lib/actions/news.actions";
import ModernPageHeader from "@/components/dashboard/modern/ModernPageHeader";
import ModernNewsCard from "@/components/dashboard/modern/ModernNewsCard";
import Pagination from "@/components/common/Pagination";

const NewsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const result = await fetchNews(1, 6);

  return (
    <div className="space-y-6">
      <ModernPageHeader
        title="News Management"
        description="Create, edit, and manage news articles"
        createLink="/dashboard/news/createNews"
        createLabel="Create News"
        count={result?.serializeNews?.length || 0}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {result?.serializeNews?.map((news) => (
          <ModernNewsCard
            key={news._id}
            id={news._id}
            image={news.image}
            title={news.title}
            description={news.shortDescription}
            link={`/dashboard/news/${news._id}`}
            approved={news.approved}
          />
        ))}
      </div>

      <Pagination
        path="/dashboard/news"
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result?.isNext}
      />
    </div>
  );
};

export default NewsPage;
