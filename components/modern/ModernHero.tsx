"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Brain, Clock } from "lucide-react";

export default function ModernHero() {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { number: "795,000", text: "Americans have a stroke each year" },
    { number: "4 minutes", text: "Brain cells die without oxygen" },
    { number: "80%", text: "Of strokes are preventable" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-purple-200/30 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-green-200/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400 text-sm font-medium mb-6 animate-fade-in">
              <Heart className="w-4 h-4 mr-2 animate-pulse" />
              Every Second Counts
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">
              Spot Stroke
              <span className="block">Save Lives</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl animate-fade-in-up delay-200">
              Learn to recognize stroke symptoms using the F.A.S.T. method. 
              Quick action can prevent disability and save lives.
            </p>

            {/* Animated Stats */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 mb-8 animate-fade-in-up delay-300">
              <div className="text-3xl font-bold text-red-600 mb-2 transition-all duration-500">
                {stats[currentStat].number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 transition-all duration-500">
                {stats[currentStat].text}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <Link href="/login">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white group">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#fast-method">
                <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50">
                  Learn F.A.S.T.
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Brain Illustration */}
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl p-8 animate-float">
                <Brain className="w-32 h-32 mx-auto text-blue-600 animate-pulse" />
                
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-full animate-bounce">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full animate-bounce delay-1000">
                  <Heart className="w-6 h-6" />
                </div>
              </div>
              
              {/* Pulse Rings */}
              <div className="absolute inset-0 rounded-3xl border-4 border-red-300 animate-ping opacity-20"></div>
              <div className="absolute inset-4 rounded-3xl border-4 border-blue-300 animate-ping opacity-30 delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}