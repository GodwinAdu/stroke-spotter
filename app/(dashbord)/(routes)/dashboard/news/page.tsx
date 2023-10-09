import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import Pagination from "@/components/common/Pagination";

import { fetchNews } from "@/lib/actions/news.actions";
import SingleNews from "@/components/news/SingleNews";

// unsave browser cache
export const dynamic = 'force-dynamic';

const NewsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
const result = await fetchNews(1,6);



  

  return (
    <>
      <Breadcrumb pageName="Our News" />
      <div className="flex justify-end items-center space-x-4 p-4">
        <Link
          href="/dashboard/news/createNews"
          className="px-8 py-3 rounded-xl font-medium shadow-xl bg-white hover:bg-indigo/50 hover:text-white text-blue-500 hover:bg-gray-100 transition duration-300"
        >
          Create news
        </Link>
      </div>


     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {result?.serializeNews?.map((news) =>(
            <SingleNews
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
        path='/dashboard/new'
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result?.isNext}
      />
    </>
  );
};

export default NewsPage;
