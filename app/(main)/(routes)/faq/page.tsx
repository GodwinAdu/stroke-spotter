
import Breadcrumb from "@/components/common/Breadcrumbs";
import FaqBlock from "@/components/faq/FaqBlock";
import { fetchFaq } from "@/lib/actions/faq.actions";
interface FaqProps{
  _id: string; // Since ObjectId is usually represented as a string in TypeScript/JavaScript
  question: string;
  answer: string;
  createdAt: Date;
  __v: number;

}

export const dynamic = 'force-dynamic'
const FAQPage = async () => {
  const faqData:FaqProps[] = await fetchFaq() || [];
 console.log("main", faqData)
  return (
    <>
      <Breadcrumb pageName="FAQ" description="Frequently Asked Questions" />
      <FaqBlock faqData={faqData} />
    </>
  );
};

export default FAQPage;
