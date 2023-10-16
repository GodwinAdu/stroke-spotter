import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import Pagination from "@/components/common/Pagination";


import SingleNewsletters from "@/components/newsletter/SingleNewsletters";
import { fetchNewsletter } from "@/lib/actions/newsletter.actions";

// unsave browser cache
export const dynamic = 'force-dynamic';

const NewsletterPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
const result = await fetchNewsletter(1,6);



  

  return (
    <>
      <Breadcrumb pageName="Our Newsletters" />
      <div className="flex justify-end items-center space-x-4 p-4">
        <Link
          href="/dashboard/newsletters/create-newsletters"
          className="text-sm px-8 py-3 rounded-xl font-medium shadow-xl bg-white hover:bg-indigo/50 hover:text-white text-blue-500 hover:bg-gray-100 transition duration-300"
        >
          Create newsletter
        </Link>
      </div>


     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {result?.serializeNewsletter?.map((news) =>(
            <SingleNewsletters
             key={news._id}
             id={news._id}
             image={news.image}
             title={news.title}
             description={news.shortDescription}
             link={`/dashboard/newsletters/${news._id}`}
             
             />
          ))}
      </div>
      

      
      <Pagination
        path='/dashboard/newsletters'
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result?.isNext}
      />
    </>
  );
};

export default NewsletterPage;
