"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import lzString from "lz-string";
import { createBlogAdmin } from "@/lib/actions/blog.actions";

const CreateBlog = () => {
  const initialFormData = {
    image: "",
    title: "",
    shortDescription: "",
    tags: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [showEditor, setShowEditor] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const router = useRouter();
  const path = usePathname();

  // Function to handle changes in form fields
  const handleFormDataChange = (e: any) => {
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

  // Function to reset formData to its initial state
  const resetFormData = () => {
    setFormData(initialFormData);
  };

  // Function to handle image selection
  const handleImageSelect = (e: any) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();

      // Read the selected image file and convert it to a data URL
      reader.onload = (event) => {
        if (event && event.target && event.target.result) {
          // Ensure event.target.result is not null
          setFormData({
            ...formData,
            image: event.target.result.toString(), // Set the data URL as the selectedImage
          });
        }
      }
      reader.readAsDataURL(file); // Read the file as data URL
    }
  };

  const handleCreateBlog = async () => {
    setIsClicked(true);
  
    // Redirect to the next page or perform any other actions
  };

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Create Blog</h1>
      <div className=" mx-auto p-4">
        {!showEditor ? (
          <>
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
                <label className="block text-gray-600">
                  Short Description:
                </label>
                <textarea
                  minLength={10}
                  maxLength={50}
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleFormDataChange}
                  className="border border-gray-300 p-2 rounded w-full h-32"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Tags:</label>
                <select
                  name="tags"
                  value={formData.tags}
                  onChange={handleFormDataChange}
                  className="border border-gray-300 p-2 rounded w-full"
                >
                  <option value="">Choose a Tag for the blog</option>
                  <option value="Alternative Medicine">
                    Alternative Medicine
                  </option>
                  <option value="Diet">Diet</option>
                  <option value="Disease Prevention">Disease Prevention</option>
                  <option value="Elderly Care">Elderly Care</option>
                  <option value="Exercise">Exercise</option>
                  <option value="First Aid">First Aid</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Health">Health</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Health Promotion">Health Promotion</option>
                  <option value="Healthy Eating">Healthy Eating</option>
                  <option value="Healthy Living">Healthy Living</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Medical Advice">Medical Advice</option>
                  <option value="Men's Health">Men's Health</option>
                  <option value="Mental Health">Mental Health</option>
                  <option value="Natural Remedies">Natural Remedies</option>
                  <option value="Nutrition">Nutrition</option>
                  <option value="Self-Care">Self-Care</option>
                  <option value="Sleep">Sleep</option>
                  <option value="Stress Management">Stress Management</option>
                  <option value="Wellness">Wellness</option>
                  <option value="Weight Loss">Weight Loss</option>
                  <option value="Women's Health">Women's Health</option>
                  <option value="Others">Others</option>
                  {/* Add more options as needed */}
                </select>
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
          </>
        ) : (
          <>
            {/* <ReactQuill
              theme="snow"
              modules={modules}
              value={value}
              onChange={handleChange}
              className="border border-gray-300 rounded mb-4"
              style={{ height: "90%" }}
            /> */}
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
                disabled={isClicked}
                className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${isClicked ? "cursor-not-allowed" : ""
                  }`}
              >
                {isClicked ? "Creating..." : "Create Blog"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CreateBlog;
