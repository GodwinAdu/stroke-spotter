"use client";

import { useState } from "react";
import { Heart, Users, Award, Mail, Linkedin, Twitter } from "lucide-react";

export default function ModernTeam() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    { id: 1, name: "Dr. Sarah Johnson", role: "Chief Medical Officer", image: "/team/team1.jpg", expertise: "Neurology & Stroke Care" },
    { id: 2, name: "Dr. Michael Chen", role: "Research Director", image: "/team/team2.jpg", expertise: "Clinical Research" },
    { id: 3, name: "Emily Rodriguez", role: "Program Manager", image: "/team/team3.jpg", expertise: "Community Outreach" },
    { id: 4, name: "Dr. James Wilson", role: "Emergency Medicine", image: "/team/team4.jpg", expertise: "Emergency Response" },
    { id: 6, name: "Lisa Thompson", role: "Education Coordinator", image: "/team/team6.jpg", expertise: "Training Programs" },
    { id: 7, name: "Dr. Amanda Davis", role: "Rehabilitation Specialist", image: "/team/team7.jpg", expertise: "Stroke Recovery" },
    { id: 8, name: "Robert Martinez", role: "Technology Lead", image: "/team/team8.jpg", expertise: "Digital Health" },
    { id: 9, name: "Dr. Jennifer Lee", role: "Prevention Specialist", image: "/team/team9.jpg", expertise: "Risk Assessment" },
    { id: 10, name: "Mark Anderson", role: "Operations Manager", image: "/team/team10.jpg", expertise: "Healthcare Operations" },
    { id: 11, name: "Dr. Patricia Brown", role: "Pediatric Neurologist", image: "/team/team11.jpg", expertise: "Pediatric Stroke" },
    { id: 12, name: "David Kim", role: "Data Analyst", image: "/team/team12.jpg", expertise: "Healthcare Analytics" },
    { id: 13, name: "Dr. Rachel Green", role: "Telemedicine Director", image: "/team/team13.jpg", expertise: "Remote Care" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-300/20 rounded-full animate-float"
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
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-full text-red-600 dark:text-red-400 text-sm font-medium mb-6">
            <Users className="w-5 h-5 mr-2" />
            Meet Our Expert Team
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Dedicated Professionals
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our multidisciplinary team of healthcare professionals, researchers, and advocates work tirelessly to advance stroke care and save lives through education and innovation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 text-center">
            <Heart className="w-12 h-12 text-red-600 mx-auto mb-4 animate-heartbeat" />
            <div className="text-3xl font-black text-red-600 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Healthcare Experts</div>
          </div>
          
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 text-center">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-black text-blue-600 mb-2">25+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Combined Experience</div>
          </div>
          
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 text-center">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-black text-purple-600 mb-2">100K+</div>
            <div className="text-gray-600 dark:text-gray-300">Lives Impacted</div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                        <Twitter className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-red-600 dark:text-red-400 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {member.expertise}
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-6 opacity-90">
              Ready to make a difference in stroke care? We're always looking for passionate professionals.
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}