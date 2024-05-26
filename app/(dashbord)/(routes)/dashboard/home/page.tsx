"use client";

import { useState } from "react";


export default function MyComponent() {

  const [isSubmitting, setIsSubmitting] = useState(false);

   // Define your custom handleSubmit function
   function handleSubmit(blogContent:any) {
    // Perform the logic to save the blog content to your database or take any other action
    console.log('Blog content:', blogContent);
    // Replace the above console.log with your actual logic
  }

  return (
    <>
      {/* <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={handleChange}
      /> */}
      {/* <div>
        <CreateBlogLink />
      </div> */}
    </>
  );
}
