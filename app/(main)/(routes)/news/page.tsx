

import NewsCard from "@/components/blog/NewsCard";
import Breadcrumb from "@/components/common/Breadcrumbs";
import Pagination from "@/components/common/Pagination";
import { fetchApprovedNews } from "@/lib/actions/news.actions";

import { formatDate } from "@/lib/utils";

export const dynamic = 'force-dynamic'

interface newsProps{
  serializeNews:any[];
  isNext:boolean;
}
const NewsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {

  const news:newsProps = await fetchApprovedNews(1,6) 

  console.log(news)

  return (
    <>
      <Breadcrumb
        pageName="Great News"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
      
      <div className=" min-h-screen">
         
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {news?.serializeNews?.map((blog) =>(
            <NewsCard
               key={blog._id}
               image={blog.image}
               CardTitle={blog.title}
               CardDescription={blog.shortDescription}
               date={formatDate(blog.createdDate)}
               link={`/news/${blog._id}`}
             />
          ))}
        </div>
       
      </div>
      <Pagination
        path='/news'
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={news?.isNext}
      />
    </>
  );
};

export default NewsPage;
