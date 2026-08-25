import Breadcrumb from "@/components/common/Breadcrumbs";
import InterviewCard from "@/components/interviewCard/InterviewCard";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  const interviews = [
    // ... add more interviews
  ];
  return (
    <>
      <Breadcrumb pageName="Interviews" description="Frequently Asked Questions" />
      {interviews.length === 0 ? (
        <div className="flex h-screen">
          <div className="m-auto text-center">
            <h1 className="text-2xl text-gray-500 mb-4">No interview yet</h1>
            <p className="text-gray-400 pb-4">Check back later for updates.</p>
            <Button>Back Home</Button>
          </div>
        </div>
      ) : (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {interviews.map((interview, idx) => (
            <InterviewCard
              key={idx}
              imageSrc={interview.imageSrc}
              name={interview.name}
              snippet={interview.snippet}
            />
          ))}
        </div>
      )}
    </>
  );
};


export default page;
