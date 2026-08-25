"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Stroke Survivor",
      image: "/team/team1.jpg",
      story: "Thanks to my family knowing F.A.S.T., they recognized my stroke symptoms immediately. I received treatment within 45 minutes and made a full recovery.",
      outcome: "Full Recovery",
      timeToTreatment: "45 minutes",
      rating: 5
    },
    {
      name: "Michael Chen", 
      role: "Caregiver",
      image: "/team/team2.jpg",
      story: "My wife had a mini-stroke, but we didn't ignore it. The education here helped us understand that even TIAs need immediate attention.",
      outcome: "Prevented Major Stroke",
      timeToTreatment: "30 minutes",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Emergency Physician",
      image: "/team/team3.jpg", 
      story: "Patient education about stroke symptoms saves lives daily in our ER. When families know F.A.S.T., patients arrive faster and outcomes improve dramatically.",
      outcome: "Better Patient Outcomes",
      timeToTreatment: "Average 20 min faster",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Stroke Survivor",
      image: "/team/team4.jpg",
      story: "I was only 42 when I had my stroke. The quick thinking of my colleague who recognized the signs saved my life and my ability to walk and talk normally.",
      outcome: "Minimal Disability", 
      timeToTreatment: "1 hour",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Real Stories, Real Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from stroke survivors and healthcare professionals about the importance of quick recognition and action.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <Quote className="w-12 h-12 text-purple-500 opacity-50" />
            </div>

            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {testimonials[currentTestimonial].name}
              </h3>
              
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                {testimonials[currentTestimonial].role}
              </p>

              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].story}"
            </blockquote>

            {/* Outcome Stats */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {testimonials[currentTestimonial].outcome}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  Final Outcome
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {testimonials[currentTestimonial].timeToTreatment}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  Time to Treatment
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-purple-500 scale-125' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Your Story Could Save Lives</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
              Share your stroke experience to help educate others about the importance of recognizing symptoms and acting fast.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}