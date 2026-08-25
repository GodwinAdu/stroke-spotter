import Image from "next/image";
import React from "react";

interface Props {
    imageSrc: string;
    name: string;
    snippet: string;
  }
  
  const InterviewCard: React.FC<Props> = ({ imageSrc, name, snippet }) => {
    return (
      <div className="border rounded p-4 my-4 flex">
        <Image width={100} height={100} src={imageSrc} alt={name} className="w-24 h-24 rounded-full mr-4" />
        <div>
          <h2 className="text-xl mb-2">{name}</h2>
          <p className="text-gray-600">{snippet}</p>
          <button className="mt-2 dark:bg-blue-600 bg-indigo/50 text-white p-2 rounded hover:bg-blue-700">
            Read More
          </button>
        </div>
      </div>
    );
  };
  
  export default InterviewCard;