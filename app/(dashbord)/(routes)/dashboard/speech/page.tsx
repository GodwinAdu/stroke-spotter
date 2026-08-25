import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import Pagination from "@/components/common/Pagination";
import { fetchSpeech } from "@/lib/actions/speech.actions";
import SpeechCard from "@/components/speech/SpeechCard";



const SpeechPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
const result = await fetchSpeech(1,6);


  console.log(result)

  

  return (
    <>
      <Breadcrumb pageName="Speech Posts" />
      <div className="flex justify-end items-center space-x-4 p-4">
        <Link
          href="/dashboard/speech/create-speech"
          className="px-8 py-3 rounded-xl font-medium shadow-xl bg-white hover:bg-indigo/50 hover:text-white text-blue-500 hover:bg-gray-100 transition duration-300"
        >
          Create Speech
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {result?.serializeSpeeches?.map((speech) =>(
            <SpeechCard
             key={speech._id}
             id={speech._id}
             image={speech.image}
             title={speech.title}
             description={speech.shortDescription}
             link={`/dashboard/speech/${speech._id}`}
             
             />
          ))}
      </div>
      

      
      <Pagination
        path='/dashboard/speech'
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result?.isNext}
      />
    </>
  );
};

export default SpeechPage;
