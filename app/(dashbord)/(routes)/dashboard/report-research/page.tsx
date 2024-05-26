import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import { fetchBlog } from "@/lib/actions/blog.actions";
import Link from "next/link";
import Pagination from "@/components/common/Pagination";

import { fetchResearch } from "@/lib/actions/research.actions";
import ResearchCard from "@/components/research/ResearchCard";


const ResearchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
const result = await fetchResearch(1,6);


  console.log(result)

  

  return (
    <>
      <Breadcrumb pageName="Report and Research" />
      <div className="flex justify-end items-center space-x-4 p-4">
        <Link
          href="/dashboard/report-research/createResearch"
          className="px-8 py-3 rounded-xl font-medium shadow-xl bg-white hover:bg-indigo/50 hover:text-white text-blue-500 hover:bg-gray-100 transition duration-300"
        >
          Create Research
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {result?.serializeResearchs?.map((research) =>(
            <ResearchCard
             key={research._id}
             id={research._id}
             image={research.image}
             title={research.title}
             description={research.shortDescription}
             link={`/dashboard/report-research/${research._id}`}
             
             />
          ))}
      </div>
      

      
      <Pagination
        path='/dashboard/report-research'
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result?.isNext}
      />
    </>
  );
};

export default ResearchPage;
