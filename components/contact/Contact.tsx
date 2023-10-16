"use client";
import { useEffect, useState } from "react";
import NewsLetterBox from "./NewsLetter";
import SucessfulModal from "./Successful";
import { createContact } from "@/lib/actions/contact.actions";
interface Props {
  name: string;
  email: string;
  message: string;

}
const Contact = () => {
  const initialForm: Props = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialForm);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isValid, setIsValid] = useState(false)

  const handleFormData = (e: any) => {
    const { name, value } = e.target;

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

  // Function to reset formData to its initial state
  const resetFormData = () => {
    setFormData(initialForm);
  };


  // Function to handle successful post submission
  const handlePostSubmission = async (e: any) => {
    e.preventDefault();
    if (!isValid) return;
    try {
      setIsClicked(true)
      const post = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }
      await createContact({ post })
      setIsClicked(false);
      resetFormData();
      // Show the success modal
      setIsSuccessModalOpen(true);
    } catch (error: any) {
      console.log("unable to send contact data", error);
      setIsClicked(false)
      resetFormData();
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
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormData}
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleFormData}
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormData}
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      onClick={handlePostSubmission}
                      disabled={isClicked}
                      className={`rounded-md dark:bg-primary 
                      bg-indigo/50 py-4 px-9 text-base font-medium 
                      text-white transition duration-300 ease-in-out 
                      hover:bg-opacity-80 hover:shadow-signUp
                      ${isClicked ? "cursor-not-allowed" : ""
                        }`}
                    >
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLetterBox />
          </div>
        </div>
      </div>
      <SucessfulModal
        isOpen={isSuccessModalOpen}
        onClose={closeSuccessModal}
        body="Thank you for contacting Spot Stroke Fast Foundation. Your request has
        been submitted to our administration, and you will receive a response
        soon."
        status="Success!"
      />
    </section>
  );
};

export default Contact;
