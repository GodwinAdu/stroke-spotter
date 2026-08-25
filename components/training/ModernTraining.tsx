"use client";

import { useState } from "react";
import { GraduationCap, Clock, Users, Star, Play, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModernTraining() {
  const [activeTab, setActiveTab] = useState("courses");

  const courses = [
    {
      id: 1,
      title: "F.A.S.T. Method Certification",
      description: "Master the gold standard for stroke recognition and response.",
      duration: "2 hours",
      level: "Beginner",
      students: 1250,
      rating: 4.9,
      price: "Free",
      category: "certification"
    },
    {
      id: 2,
      title: "Advanced Stroke Assessment",
      description: "In-depth training for healthcare professionals on comprehensive stroke evaluation.",
      duration: "6 hours",
      level: "Advanced",
      students: 340,
      rating: 4.8,
      price: "$99",
      category: "professional"
    },
    {
      id: 3,
      title: "Community Response Training",
      description: "Train your community to recognize and respond to stroke emergencies.",
      duration: "3 hours",
      level: "Intermediate",
      students: 890,
      rating: 4.7,
      price: "$49",
      category: "community"
    },
    {
      id: 4,
      title: "Pediatric Stroke Recognition",
      description: "Specialized training for identifying stroke symptoms in children.",
      duration: "4 hours",
      level: "Advanced",
      students: 156,
      rating: 4.9,
      price: "$79",
      category: "professional"
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Stroke First Aid Certified",
      description: "Basic certification for stroke recognition and immediate response.",
      requirements: ["Complete F.A.S.T. Method course", "Pass final assessment"],
      validity: "2 years"
    },
    {
      id: 2,
      title: "Stroke Care Professional",
      description: "Advanced certification for healthcare workers and first responders.",
      requirements: ["Complete 3 advanced courses", "Clinical experience", "Peer evaluation"],
      validity: "3 years"
    },
    {
      id: 3,
      title: "Community Stroke Educator",
      description: "Certification to train others in stroke awareness and prevention.",
      requirements: ["Complete educator training", "Conduct 5 training sessions", "Mentor review"],
      validity: "2 years"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <GraduationCap className="w-5 h-5 mr-2" />
            Professional Training
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-red-600 bg-clip-text text-transparent">
              Stroke Training
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive training programs to build expertise in stroke recognition, response, and care.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 text-center">
            <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Training Courses</div>
          </div>
          
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">5K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Students Trained</div>
          </div>
          
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 text-center">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">3</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Certification Levels</div>
          </div>
          
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 text-center">
            <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">4.8</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-2 shadow-xl border border-white/20">
            <button
              onClick={() => setActiveTab("courses")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "courses"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              }`}
            >
              Training Courses
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "certifications"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              }`}
            >
              Certifications
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "courses" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 flex items-center justify-center">
                  <GraduationCap className="w-16 h-16 text-blue-600/50" />
                  
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {course.level}
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.price}
                  </div>

                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 text-blue-600 p-4 rounded-full">
                      <Play className="w-8 h-8 fill-current" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students} students
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                      {course.rating}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                    Enroll Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "certifications" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {cert.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Requirements:</h4>
                  {cert.requirements.map((req, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{req}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Valid for <span className="font-semibold text-blue-600">{cert.validity}</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                  Start Certification
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Save Lives?</h2>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of professionals who have enhanced their stroke care skills through our training programs.
            </p>
            <Button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
              Browse All Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}