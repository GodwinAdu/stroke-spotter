import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import * as cheerio from 'cheerio';
import { fetchSingleNews } from "@/lib/actions/news.actions";
;


export const dynamic ='force-dynamic'

const NewsDetails = async ({ params }: { params: { newsId: string } }) => {

  const news = await fetchSingleNews(params.newsId);
 console.log(news)
  
  return (
    <>
      <Breadcrumb pageName="Our Blogs" />
      
      <h1 className="text-3xl font-semibold text-center my-8">My Blog Page</h1>
      
        <div key={news._id} className="bg-white rounded-lg shadow-md p-4 mb-8">
          
          <div className="news-details p-4">
           
            <p className="text-gray-600 mb-4">Created Date: {new Date(news.createdDate).toLocaleString()}</p>
            <div className="prose" dangerouslySetInnerHTML={{ __html: news.blocks }} />
          </div>
        </div>

    </>
  );
};

export default NewsDetails;
