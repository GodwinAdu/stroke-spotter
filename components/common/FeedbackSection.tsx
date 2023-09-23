"use client"
import React, { useState } from 'react';

const FeedbackSection = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () => {
        // Handle the submission logic here (e.g., send to an API endpoint)
        alert('Thank you for your feedback!');
        setFeedback(''); // Clear the feedback after submission
    };

    return (
        <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white py-20">
            <div className="max-w-3xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-8">Your Insights Matter</h2>
                <p className="text-lg mb-10">
                    Help us shape the future of our platform. Your feedback will be the beacon lighting our path forward.
                </p>

                <div className="bg-white p-6 rounded-xl shadow-lg m">
                    <textarea 
                        rows={5}
                        className="w-full p-4 mb-4 border rounded-md"
                        placeholder="Describe your experience or suggest improvements..."
                        value={feedback}
                        onChange={e => setFeedback(e.target.value)}
                    ></textarea>

                    <button 
                        className="bg-indigo/50 hover:bg-indigo text-white px-8 py-2 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
                        onClick={handleSubmit}
                    >
                        Share Feedback
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FeedbackSection;
