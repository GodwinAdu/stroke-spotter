import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import Pagination from "@/components/common/Pagination";
import { fetchSpeech } from "@/lib/actions/speech.actions";
import TrainingCard from "@/components/training/TrainingCard";
import { fetchTrainPost } from "@/lib/actions/training.actions";


// unsave browser cache
export const dynamic = 'force-dynamic';

const TraineePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
const result = await fetchTrainPost(1,6);


  console.log(result)

  

  return (
    <>
      <Breadcrumb pageName="Trainee Posts" />
      <div className="flex justify-end items-center space-x-4 p-4">
        <Link
          href="/dashboard/training/create-trainee"
          className="px-8 py-3 rounded-xl font-medium shadow-xl bg-white hover:bg-indigo/50 hover:text-white text-blue-500 hover:bg-gray-100 transition duration-300"
        >
          Create Post
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {result?.serializeTrainings?.map((training) =>(
            <TrainingCard
             key={training._id}
             id={training._id}
             image={training.image}
             title={training.title}
             description={training.shortDescription}
             link={`/dashboard/training/${training._id}`}
             
             />
          ))}
      </div>
      

      
      <Pagination
        path='/dashboard/training'
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result?.isNext}
      />
    </>
  );
};

export default TraineePage;
