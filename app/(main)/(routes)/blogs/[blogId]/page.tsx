import { fetchSingleBlog } from "@/lib/actions/blog.actions";
import Breadcrumb from "@/components/common/Breadcrumbs";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Share2, ThumbsUp } from "lucide-react";
import Timeperiod from "./TimePeriod";
import { Suspense } from "react";
import "react-quill/dist/quill.snow.css";

export const dynamic = "force-dynamic";

const BlogDetails = async ({ params }: { params: { blogId: string } }) => {
  const blog = await fetchSingleBlog(params.blogId);
  console.log(blog);

  return (
    <>
      <Breadcrumb pageName="Blog Details" />

      <div key={blog._id} className="bg-white rounded-lg shadow-md p-2 mb-8">
        <div className=" flex justify-center items-center  mb-2">
          <h2 className="font-bold text-indigo/50 text-xl md:text-3xl pb-3">
            {blog.title}
          </h2>
        </div>
        <div className="flex justify-center items-center pb-3">
          <Image
            src={blog.image}
            width="0"
            height="0"
            sizes="80vw"
            className="w-full lg:max-w-4xl h-auto"
            alt={blog.title}
          />
        </div>

        <div className="blog-details  w-[96%] max-w-4xl mx-auto">
          <div className="py-3">
            <h3 className="font-semibold text-xl ">{blog.shortDescription}</h3>
          </div>

          <div className="flex gap-3 items-center mb-4">
            <div className="">
              <Image
                src={blog?.postedBy?.image}
                alt={blog?.postedBy?.name}
                width={24}
                height={24}
                className=" rounded-full"
              />
            </div>
            <div className="w-[96%] max-w-4xl mx-auto">
              <p className="font-bold text-sm gap-3">
                By- <span className="text-xs">@{blog?.postedBy?.username}</span>
              </p>
              <div className="flex gap-2">
                <Suspense fallback={`please wait`}>
                  <Timeperiod createdAt={blog?.createdDate} />
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
            dangerouslySetInnerHTML={{ __html: blog.blocks }}
          />
          <div className="w-24">
            <p className="bg-black py-3 px-4 rounded-xl text-white">{blog.tags}</p>
          </div>
        </div>
      </div>

      <div className=""></div>
    </>
  );
};

export default BlogDetails;
