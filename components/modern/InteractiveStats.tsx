"use client";

import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, Clock, AlertTriangle, Globe, Heart } from "lucide-react";

export default function InteractiveStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0, stat4: 0, stat5: 0, stat6: 0 });
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { 
      icon: Users, 
      number: 795000, 
      suffix: "", 
      label: "Strokes per year in US", 
      color: "text-red-500",
      bgGradient: "from-red-500 to-red-600",
      description: "Every 40 seconds, someone in the US has a stroke",
      trend: "+2.3%"
    },
    { 
      icon: Clock, 
      number: 4, 
      suffix: " min", 
      label: "Time before brain damage", 
      color: "text-orange-500",
      bgGradient: "from-orange-500 to-orange-600",
      description: "1.9 million brain cells die every minute during stroke",
      trend: "Critical"
    },
    { 
      icon: TrendingUp, 
      number: 80, 
      suffix: "%", 
      label: "Preventable strokes", 
      color: "text-green-500",
      bgGradient: "from-green-500 to-green-600",
      description: "Lifestyle changes can prevent most strokes",
      trend: "Preventable"
    },
    { 
      icon: AlertTriangle, 
      number: 137000, 
      suffix: "", 
      label: "Deaths annually", 
      color: "text-purple-500",
      bgGradient: "from-purple-500 to-purple-600",
      description: "Stroke is the 5th leading cause of death",
      trend: "-1.2%"
    },
    { 
      icon: Globe, 
      number: 15, 
      suffix: "M", 
      label: "Global strokes yearly", 
      color: "text-blue-500",
      bgGradient: "from-blue-500 to-blue-600",
      description: "Worldwide stroke impact continues to grow",
      trend: "+3.1%"
    },
    { 
      icon: Heart, 
      number: 7, 
      suffix: "M", 
      label: "Stroke survivors in US", 
      color: "text-pink-500",
      bgGradient: "from-pink-500 to-pink-600",
      description: "Living with stroke-related disabilities",
      trend: "Growing"
    }
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timers = stats.map((stat, index) => {
        const key = `stat${index + 1}` as keyof typeof counts;
        const duration = 2500;
        const steps = 80;
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-100 to-purple-100 dark:from-red-900/30 dark:to-purple-900/30 rounded-full text-red-600 dark:text-red-400 text-sm font-semibold mb-6">
            📊 Real-Time Impact
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-purple-600 bg-clip-text text-transparent">
            Stroke by the Numbers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Understanding the global impact of stroke helps us recognize the critical importance of 
            <span className="font-semibold text-red-600"> immediate recognition</span> and 
            <span className="font-semibold text-blue-600"> swift action</span>.
          </p>
        </div>

        {/* Interactive Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const key = `stat${index + 1}` as keyof typeof counts;
            const isActive = activeCard === index;
            
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer ${
                  isActive ? 'ring-4 ring-red-500/50 scale-105' : ''
                }`}
                onMouseEnter={() => setActiveCard(index)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.bgGradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10" />
                </div>
                
                {/* Main Number */}
                <div className="relative mb-4">
                  <div className={`text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r ${stat.bgGradient} bg-clip-text text-transparent`}>
                    {counts[key].toLocaleString()}{stat.suffix}
                  </div>
                  
                  {/* Trend Indicator */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                    stat.trend.includes('+') ? 'bg-red-100 text-red-600' :
                    stat.trend.includes('-') ? 'bg-green-100 text-green-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {stat.trend}
                  </div>
                </div>
                
                {/* Label */}
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-red-600 transition-colors">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.bgGradient} transition-all duration-2000 ease-out`}
                    style={{ width: isVisible ? '100%' : '0%' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call-to-Action */}
        <div className="relative">
          <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 via-purple-600/80 to-blue-600/80 animate-pulse" />
            
            <div className="relative z-10">
              <div className="text-6xl mb-6">🧠⚡</div>
              <h3 className="text-3xl md:text-4xl font-black mb-6">Time is Brain</h3>
              <p className="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto mb-8 leading-relaxed">
                Every minute during a stroke, <span className="font-bold">1.9 million brain cells die</span>. 
                That's why recognizing symptoms and acting F.A.S.T. is crucial for saving lives and preventing permanent disability.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-xl">
                  Learn F.A.S.T. Method
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-red-600 transform hover:-translate-y-1 transition-all duration-300">
                  Emergency Action Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}