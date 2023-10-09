"use client";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useReactQuill } from "@/hooks/useReactQuill"; // Replace with the correct path
import { usePathname, useRouter } from "next/navigation";
import lzString from "lz-string";

import Breadcrumb from "@/components/common/Breadcrumbs";
import { createTrainPost } from "@/lib/actions/training.actions";


const CreateTrainign = () => {
  const initialFormData = {
    image: "",
    title: "",
    shortDescription: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const { value, handleChange, modules } = useReactQuill();
  const [showEditor, setShowEditor] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isValid, setIsValid] = useState(false);

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

  // Validation function to check if all fields are filled out
  const validateForm = () => {
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setIsValid(isFormValid);
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  

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
      };

      reader.readAsDataURL(file); // Read the file as data URL
    }
  };

  const handleCreateBlog = async () => {
    if(!value) return;
    setIsClicked(true)
    const compressedTrainingContent = lzString.compressToEncodedURIComponent(value);

    const trainingContent = {
      ...formData,
      content: compressedTrainingContent,
    };

    await createTrainPost(trainingContent, path);

    // reset all datas in formData
    resetFormData();
    
    // Redirect to the next page or perform any other actions
    router.back();
    setIsClicked(false);

  };

  return (
    <>
      <Breadcrumb pageName="Create Training Post" />

      <div className="container mx-auto p-4">
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
              {isValid && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Next
                </button>
              )}
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
                disabled={isClicked}
                className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
                  isClicked ? "cursor-not-allowed" : ""
                }`}
              >
                {isClicked ? "Creating..." : "Create post"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CreateTrainign;
