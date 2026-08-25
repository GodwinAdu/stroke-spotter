"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Heart, Brain } from "lucide-react";
import Link from "next/link";

export default function ResponsiveNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 50);
        const progress = Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        setScrollProgress(progress);
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const quickActions = [
    { icon: Phone, label: "Emergency: 911", href: "tel:911", color: "bg-red-600" },
    { icon: Heart, label: "F.A.S.T. Test", href: "#fast-method", color: "bg-blue-600" },
    { icon: Brain, label: "Learn More", href: "/about", color: "bg-purple-600" }
  ];

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium">
        🚨 STROKE EMERGENCY? Call 911 immediately - Don't wait!
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={index}
              href={action.href}
              className={`${action.color} text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group`}
            >
              <Icon className="w-6 h-6 group-hover:animate-pulse" />
              <span className="sr-only">{action.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
}