
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
    title:string;
    image:string;
    tags:string;
    shortDescription:string;
    _id:string;
}

const SingleBlog = ({ blog }: { blog:BlogProps }) => {
  const { title, image,tags,shortDescription ,_id} = blog;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link href={`/blogs/${_id}`} className="relative block h-[220px] w-full">
          <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
            {tags}
          </span>
          <Image src={image} alt="image" fill className="object-cover" />
        </Link> 
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href={`/blogs/${_id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {shortDescription}
          </p>
          <div className="flex items-center">
            
            <div className="inline-block">
              <Link href={`/blogs/${_id}`} className="mb-1 text-md font-medium text-dark dark:text-white">
                Read More
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
