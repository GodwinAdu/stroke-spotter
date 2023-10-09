
import Breadcrumb from "@/components/common/Breadcrumbs";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Share2, ThumbsUp } from "lucide-react";
import { Suspense } from "react";
import "react-quill/dist/quill.snow.css";
import TagButton from "@/components/blog/TagButton";
import SharePost from "@/components/blog/SharePost";
import { fetchSingleNews } from "@/lib/actions/news.actions";
import Timeperiod from "../../blogs/[blogId]/TimePeriod";

export const dynamic = "force-dynamic";

const NewsDetails = async ({ params }: { params: { newsId: string } }) => {
  const news = await fetchSingleNews(params.newsId);

  return (
    <>
      <Breadcrumb pageName="News Details" />

      <div key={news._id} className="bg-white dark:bg-dark rounded-lg shadow-md p-2 mb-8">
        <div className=" flex justify-center items-center  mb-2">
          <h2 className="font-bold text-indigo/50 text-xl md:text-3xl pb-3">
            {news.title}
          </h2>
        </div>
        <div className="flex justify-center items-center pb-3">
          <Image
            src={news.image}
            width="0"
            height="0"
            sizes="80vw"
            className="w-full lg:max-w-4xl h-auto"
            alt={news.title}
          />
        </div>

        <div className="news-details  w-[96%] max-w-4xl mx-auto">
          <div className="py-3">
            <h3 className="font-semibold text-xl ">{news.shortDescription}</h3>
          </div>

          <div className="flex gap-3 items-center mb-4">
            <div className="">
              <Image
                src={news?.postedBy?.image}
                alt={news?.postedBy?.name}
                width={24}
                height={24}
                className=" rounded-full"
              />
            </div>
            <div className="w-[96%] max-w-4xl mx-auto">
              <p className="font-bold text-sm gap-3">
                By- <span className="text-xs">@{news?.postedBy?.username}</span>
              </p>
              <div className="flex gap-2">
                <Suspense fallback={<p>wait ...</p>}>
                  <Timeperiod createdAt={news?.createdDate} />
                </Suspense>
                <p className="text-xs">| 3 mins read time</p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex gap-5 justify-around items-center py-4 w-[96%] max-w-4xl mx-auto">
            <button className="flex gap-1">
              <ThumbsUp size={16} strokeWidth={1.5} />
            </button>
            {/* <p><ThumbsDown size={16} strokeWidth={1.5} /></p> */}
            <button className="flex gap-1">
              <MessageSquare size={16} strokeWidth={1.5} />
            </button>
            <button className="flex gap-1">
              <Share2 size={16} strokeWidth={1.5} />
            </button>
          </div>
          <Separator />
          <div
            className="prose mt-3 w-[100%] max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{ __html: news.blocks }}
          />
         

          
          <div className="items-center justify-between sm:flex">
            <div className="mb-5">
              <h5 className="mb-3 text-sm font-medium text-body-color">
                Popular Tags :
              </h5>
              <div className="flex items-center">
                <TagButton text={news.tags } />
                <TagButton text="Development" />
                <TagButton text="Info" />
              </div>
            </div>
            <div className="mb-5">
              <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                Share this post :
              </h5>
              <div className="flex items-center sm:justify-end">
                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=""></div>
    </>
  );
};

export default NewsDetails;
