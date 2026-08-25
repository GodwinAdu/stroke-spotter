"use client";

import { useState } from "react";
import { Heart, Activity, Apple, Cigarette, Scale, Stethoscope } from "lucide-react";

export default function PreventionTips() {
  const [activeCategory, setActiveCategory] = useState(0);

  const preventionCategories = [
    {
      icon: Heart,
      title: "Heart Health",
      color: "from-red-500 to-pink-500",
      tips: [
        { title: "Monitor Blood Pressure", description: "Keep it below 120/80 mmHg", impact: "Reduces risk by 40%" },
        { title: "Control Cholesterol", description: "LDL should be under 100 mg/dL", impact: "Lowers risk by 25%" },
        { title: "Manage Diabetes", description: "Keep HbA1c below 7%", impact: "Cuts risk by 35%" }
      ]
    },
    {
      icon: Activity,
      title: "Physical Activity", 
      color: "from-blue-500 to-cyan-500",
      tips: [
        { title: "Regular Exercise", description: "150 minutes moderate activity weekly", impact: "Reduces risk by 30%" },
        { title: "Strength Training", description: "2-3 sessions per week", impact: "Improves circulation" },
        { title: "Daily Movement", description: "Take breaks from sitting every hour", impact: "Prevents blood clots" }
      ]
    },
    {
      icon: Apple,
      title: "Nutrition",
      color: "from-green-500 to-emerald-500", 
      tips: [
        { title: "Mediterranean Diet", description: "Rich in fruits, vegetables, whole grains", impact: "Reduces risk by 20%" },
        { title: "Limit Sodium", description: "Less than 2,300mg per day", impact: "Lowers blood pressure" },
        { title: "Omega-3 Fatty Acids", description: "Fish twice weekly", impact: "Improves brain health" }
      ]
    },
    {
      icon: Cigarette,
      title: "Lifestyle Changes",
      color: "from-purple-500 to-violet-500",
      tips: [
        { title: "Quit Smoking", description: "Eliminate all tobacco products", impact: "Halves risk within 2 years" },
        { title: "Limit Alcohol", description: "No more than 1-2 drinks daily", impact: "Prevents high blood pressure" },
        { title: "Manage Stress", description: "Practice meditation or yoga", impact: "Reduces inflammation" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Stroke Prevention
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Up to 80% of strokes are preventable through lifestyle modifications and proper medical care.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {preventionCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8">
          <div className="text-center mb-8">
            {(() => {
              const Icon = preventionCategories[activeCategory].icon;
              return (
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${preventionCategories[activeCategory].color} text-white mb-4`}>
                  <Icon className="w-10 h-10" />
                </div>
              );
            })()}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {preventionCategories[activeCategory].title}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {preventionCategories[activeCategory].tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${preventionCategories[activeCategory].color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {index + 1}
                </div>
                
                <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  {tip.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {tip.description}
                </p>
                
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${preventionCategories[activeCategory].color} text-white`}>
                  {tip.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Know Your Risk Factors
            </h3>
            <div className="space-y-4">
              {[
                "Age (55+ years)",
                "Family history of stroke", 
                "High blood pressure",
                "Diabetes",
                "Heart disease",
                "Previous stroke or TIA"
              ].map((factor, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">{factor}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Regular Health Checkups
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Blood Pressure</span>
                <span className="text-sm font-medium text-blue-600">Monthly</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Cholesterol</span>
                <span className="text-sm font-medium text-green-600">Annually</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Blood Sugar</span>
                <span className="text-sm font-medium text-purple-600">Every 3 years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}