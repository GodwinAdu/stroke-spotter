import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import FaqBlock from "@/components/dashboard/faq/FaqBock";
import ButtonComponent from "@/components/dashboard/faq/button";
import { fetchFaq } from "@/lib/actions/faq.actions";

interface FaqProps{
    _id: string; // Since ObjectId is usually represented as a string in TypeScript/JavaScript
    question: string;
    answer: string;
    createdAt: Date;
    __v: number;

}

export const dynamic = 'force-dynamic'

const FaqPage = async () => {
    const faqData: FaqProps[] = await fetchFaq() || []
     
  return (
    <>
      <Breadcrumb pageName="FAQ Edit" />

      <ButtonComponent />
      <div className="mt-10">
         <FaqBlock faqData={faqData} />
      </div>
    </>
  );
};

export default FaqPage;
