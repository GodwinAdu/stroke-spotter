"use client";
import { useReactQuill } from "@/hooks/useReactQuill";
import { useState } from "react";
import ReactQuill from "react-quill";

export default function MyComponent() {
  const { value, handleChange, CreateBlogLink, modules } = useReactQuill( handleSubmit as (blogContent: string) => void );
  const [isSubmitting, setIsSubmitting] = useState(false);

   // Define your custom handleSubmit function
   function handleSubmit(blogContent:str) {
    // Perform the logic to save the blog content to your database or take any other action
    console.log('Blog content:', blogContent);
    // Replace the above console.log with your actual logic
  }

  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={handleChange}
      />
      <div>
        <CreateBlogLink />
      </div>
    </>
  );
}
