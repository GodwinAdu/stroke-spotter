"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useReactQuill } from "@/hooks/useReactQuill"; // Replace with the correct path
import { usePathname, useRouter } from "next/navigation";
import lzString from "lz-string";
import { createNewsAdmin } from "@/lib/actions/news.actions";



const CreateNews = () => {
  const [formData, setFormData] = useState({
    image: "", // Initialize image as an empty string
    title: "",
    shortDescription: "",
  });

  const { value, handleChange, modules } = useReactQuill();
  const [showEditor, setShowEditor] = useState(false);

  const router = useRouter();
  const path = usePathname();

  // Function to handle changes in form fields
  const handleFormDataChange = (e:any) => {
    const { name, value } = e.target;

    // Update the formData object based on the form field name
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    setShowEditor(true);
  };

  const handleBack = () => {
    setShowEditor(false);
  };

  // Function to handle image selection
  const handleImageSelect = (e:any) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();

      // Read the selected image file and convert it to a data URL
      reader.onload = (event) => {
        setFormData({
          ...formData,
          image: event?.target?.result, // Set the data URL as the selectedImage
        });
      };

      reader.readAsDataURL(file); // Read the file as data URL
    }
  };

  const handleCreateBlog = async () => {
    const compressedBlogContent = lzString.compressToEncodedURIComponent(value);

    const newsContent = {
      ...formData,
      content: compressedBlogContent,
    };

    await createNewsAdmin(newsContent, path);
    // You can now access all form data without selectedImage
    router.back();
    console.log("Form Data to Send:", newsContent);

    // Redirect to the next page or perform any other actions
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Create News</h1>
      {!showEditor ? (
        <form>
          <div className="mb-4">
            {formData.image === "" ? (
              <input
                type="file"
                accept="image/*" // Allow only image files
                onChange={handleImageSelect} // Call the function when an image is selected
              />
            ) : (
              <div>
                <h3>Selected Image:</h3>
                <img src={formData.image} alt="Selected" width="300" />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleFormDataChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Short Description:</label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleFormDataChange}
              className="border border-gray-300 p-2 rounded w-full h-32"
            />
          </div>
         
          <div className="mb-4">
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </form>
      ) : (
        <>
          <ReactQuill
            theme="snow"
            modules={modules}
            value={value}
            onChange={handleChange}
            className="border border-gray-300 rounded mb-4"
            style={{ height: "90%" }}
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleCreateBlog}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Create Blog
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateNews;
