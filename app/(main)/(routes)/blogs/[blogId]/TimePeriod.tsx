"use client"


import { calculateTimePeriod } from "@/lib/utils";
import { useEffect, useState } from "react";

function Timeperiod({createdAt}:Date ) {
    const [timePeriod, setTimePeriod] = useState('');
  
    useEffect(() => {
      const interval = setInterval(() => {
        const updatedTimePeriod = calculateTimePeriod(createdAt);
        setTimePeriod(updatedTimePeriod);
      }, 10000); // Update every 10 seconds
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [createdAt]);
  
    return (
      <>
        {/* Render your blog content here */}
        <p className="text-xs">published: {timePeriod} </p>
      </>
    );
  }
  
  export default Timeperiod;
  