'use client'
import { usePathname } from "next/navigation";
import { useState } from "react";


interface FaqProps {
    _id: string;
    question: string;
    answer: string;
    createdAt: Date;
    __v: number;
  }
  
  interface ComponentProps {
    faqData: FaqProps[];
  }
  
const FaqBlock: React.FC<ComponentProps> = ({faqData}) => {
  const [questions, setQuestions] = useState(faqData);
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);

 
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {questions?.length === 0 ? (
          <div className="text-center py-6 text-gray-600">
            No questions available at the moment.
          </div>
        ) : (
          questions?.map(({ _id, question, answer }) => (
            <div key={_id} className="mb-6 relative">
              <button
                className="w-full text-left p-4 rounded-lg bg-white shadow-md font-semibold"
                onClick={() =>
                  setActiveQuestionId(_id === activeQuestionId ? null : _id)
                }
              >
                {question}
              </button>
              {activeQuestionId === _id && (
                <div className="mt-2 p-4 bg-gray-200 rounded-lg">
                  {answer}
                </div>
              )}
             
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FaqBlock;
