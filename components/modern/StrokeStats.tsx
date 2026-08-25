"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Users, Clock, AlertTriangle } from "lucide-react";

export default function StrokeStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0, stat4: 0 });

  const stats = [
    { icon: Users, number: 795000, suffix: "", label: "Strokes per year in US", color: "text-red-500" },
    { icon: Clock, number: 4, suffix: " min", label: "Time before brain damage", color: "text-orange-500" },
    { icon: TrendingUp, number: 80, suffix: "%", label: "Preventable strokes", color: "text-green-500" },
    { icon: AlertTriangle, number: 137000, suffix: "", label: "Deaths annually", color: "text-purple-500" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stroke-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timers = stats.map((stat, index) => {
        const key = `stat${index + 1}` as keyof typeof counts;
        const duration = 2000;
        const steps = 60;
        const increment = stat.number / steps;
        let current = 0;

        return setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timers[index]);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, duration / steps);
      });

      return () => timers.forEach(timer => clearInterval(timer));
    }
  }, [isVisible]);

  return (
    <section id="stroke-stats" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Stroke by the Numbers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Understanding the impact of stroke helps us recognize the urgency of prevention and quick response.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const key = `stat${index + 1}` as keyof typeof counts;
            
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-6 ${stat.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <div className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                  {counts[key].toLocaleString()}{stat.suffix}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Time is Brain</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Every minute during a stroke, 1.9 million brain cells die. 
            That's why recognizing symptoms and acting F.A.S.T. is crucial for saving lives and preventing disability.
          </p>
        </div>
      </div>
    </section>
  );
}