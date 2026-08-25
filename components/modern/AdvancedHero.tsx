"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Brain, Clock, Play, X } from "lucide-react";

export default function AdvancedHero() {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const stats = [
    { number: "795,000", text: "Americans have a stroke each year", icon: "👥" },
    { number: "4 minutes", text: "Brain cells die without oxygen", icon: "⏱️" },
    { number: "80%", text: "Of strokes are preventable", icon: "🛡️" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (isVideoModalOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isVideoModalOpen]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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
        
        {/* Interactive Mouse Trail */}
        <div 
          className="absolute w-32 h-32 bg-gradient-radial from-red-200/30 to-transparent rounded-full pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-full text-red-600 dark:text-red-400 text-sm font-medium animate-pulse-slow">
              <Heart className="w-5 h-5 mr-2 animate-heartbeat" />
              <span className="relative">
                Every Second Counts
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  Spot Stroke
                </span>
                <span className="block text-gray-900 dark:text-white transform hover:scale-105 transition-transform duration-300">
                  Save Lives
                </span>
              </h1>
              
              <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Master the <span className="font-bold text-red-600">F.A.S.T.</span> method. 
              <span className="block mt-2">Quick recognition saves lives and prevents disability.</span>
            </p>

            {/* Enhanced Animated Stats */}
            <div className="relative">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl mr-3">{stats[currentStat].icon}</span>
                  <div className="text-4xl md:text-5xl font-black text-red-600 transition-all duration-700 transform">
                    {stats[currentStat].number}
                  </div>
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium transition-all duration-700">
                  {stats[currentStat].text}
                </div>
                
                {/* Progress Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {stats.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index === currentStat ? 'w-8 bg-red-500' : 'w-2 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/login">
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                    Get Started Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Button>
              </Link>
              
              <Link href="#fast-method">
                <Button variant="outline" size="lg" className="border-2 border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 px-8 py-4 rounded-2xl font-semibold transform hover:-translate-y-1 transition-all duration-300">
                  Learn F.A.S.T. Method
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">500K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Lives Educated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Visual with Video */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Video Thumbnail */}
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl overflow-hidden shadow-2xl cursor-pointer group" onClick={openVideoModal}>
                <img
                  src="/overview/our-member.jpg"
                  alt="Play Video"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="bg-white/90 hover:bg-white text-red-600 p-6 rounded-full shadow-lg transform group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-400 to-pink-400 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-pulse opacity-60"></div>
              
              {/* Brain Icon */}
              <div className="absolute top-4 left-4 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              
              {/* Clock Icon */}
              <div className="absolute bottom-4 right-4 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg animate-pulse">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeVideoModal}>
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              autoPlay
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}