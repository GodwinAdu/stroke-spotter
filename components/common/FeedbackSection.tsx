"use client";
import React, { useEffect, useState } from "react";
import SucessfulModal from "../contact/Successful";
import { createFeedback } from "@/lib/actions/feedback.actions";

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle successful post submission
  const handlePostSubmission = async (e: any) => {
    e.preventDefault();
    if (!feedback) return;
    try {
      setIsClicked(true);

      await createFeedback({ feedback });
      setFeedback("");

      setIsClicked(false);
      setIsSuccessModalOpen(true);
    } catch (error: any) {
      console.log("unable to send feedback", error)
      setIsClicked(false)
      setFeedback("");
    }
  };

  // Function to close the success modal
  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  useEffect(() => {
    // Automatically close the success modal after 20 seconds (20000 milliseconds)
    if (isSuccessModalOpen) {
      const timeoutId = setTimeout(() => {
        closeSuccessModal();
      }, 10000);

      // Clear the timeout when the component unmounts or when the modal is closed manually
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isSuccessModalOpen]);

  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white py-20">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8">Your Insights Matter</h2>
        <p className="text-lg mb-10">
          Help us shape the future of our platform. Your feedback will be the
          beacon lighting our path forward.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-lg m">
          <textarea
            rows={5}
            className="w-full p-4 mb-4 border rounded-md"
            placeholder="Describe your experience or suggest improvements..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>

          <button
            className={`bg-indigo/50 hover:bg-indigo text-white px-8 py-2 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 ${isClicked ? "cursor-not-allowed" : ""
              }`}
            onClick={handlePostSubmission}
          >
            Share Feedback
          </button>
        </div>
      </div>
      <SucessfulModal
        isOpen={isSuccessModalOpen}
        onClose={closeSuccessModal}
        body="Thank you for sharing your opinion to improve our website. We love you!!!."
        status="Feedback Sent!"
      />
    </section>
  );
};

export default FeedbackSection;
