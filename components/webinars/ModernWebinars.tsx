"use client";

import { useState } from "react";
import { Calendar, Clock, Users, Play, Video, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModernWebinars() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const webinars = [
    {
      id: 1,
      title: "F.A.S.T. Method: Quick Stroke Recognition",
      description: "Learn the essential F.A.S.T. method for rapid stroke identification and response.",
      date: "2024-02-15",
      time: "2:00 PM EST",
      duration: "45 min",
      attendees: 245,
      category: "education",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Advanced Stroke Prevention Strategies",
      description: "Comprehensive guide to preventing strokes through lifestyle and medical interventions.",
      date: "2024-02-20",
      time: "3:00 PM EST",
      duration: "60 min",
      attendees: 189,
      category: "prevention",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Emergency Response in Stroke Care",
      description: "Critical protocols for healthcare professionals in stroke emergency situations.",
      date: "2024-01-30",
      time: "1:00 PM EST",
      duration: "50 min",
      attendees: 312,
      category: "emergency",
      status: "completed"
    },
    {
      id: 4,
      title: "Rehabilitation After Stroke",
      description: "Evidence-based approaches to stroke recovery and rehabilitation programs.",
      date: "2024-02-25",
      time: "4:00 PM EST",
      duration: "55 min",
      attendees: 156,
      category: "recovery",
      status: "upcoming"
    }
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "upcoming", label: "Upcoming" },
    { id: "completed", label: "Completed" }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesFilter = activeFilter === "all" || webinar.status === activeFilter;
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
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
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Video className="w-5 h-5 mr-2" />
            Educational Webinars
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              Stroke Education
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our expert-led webinars to enhance your knowledge of stroke prevention, recognition, and care.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search webinars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-800 transition-colors"
            />
          </div>

          <div className="flex justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWebinars.map((webinar) => (
            <div
              key={webinar.id}
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                  <Video className="w-16 h-16 text-blue-600/50" />
                </div>
                
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  webinar.status === "upcoming" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-gray-100 text-gray-700"
                }`}>
                  {webinar.status === "upcoming" ? "Upcoming" : "Completed"}
                </div>

                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 text-blue-600 p-4 rounded-full">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {webinar.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {webinar.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(webinar.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {webinar.time} • {webinar.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    {webinar.attendees} registered
                  </div>
                </div>

                <Button 
                  className={`w-full ${
                    webinar.status === "upcoming"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800"
                  } text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300`}
                >
                  {webinar.status === "upcoming" ? "Register Now" : "Watch Recording"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Host a Webinar</h2>
            <p className="text-xl mb-6 opacity-90">
              Share your expertise with our community of stroke care professionals.
            </p>
            <Button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
              Become a Speaker
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}