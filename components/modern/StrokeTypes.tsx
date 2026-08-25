"use client";

import { useState } from "react";
import { Zap, Droplets, Brain } from "lucide-react";

export default function StrokeTypes() {
  const [selectedType, setSelectedType] = useState(0);

  const strokeTypes = [
    {
      icon: Droplets,
      name: "Ischemic Stroke",
      percentage: "87%",
      description: "Caused by a blocked artery in the brain",
      details: "Blood clots or fatty deposits block blood flow to brain tissue. Most common type of stroke.",
      symptoms: ["Sudden numbness", "Confusion", "Trouble speaking", "Severe headache"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Zap,
      name: "Hemorrhagic Stroke", 
      percentage: "13%",
      description: "Caused by bleeding in the brain",
      details: "A blood vessel in the brain bursts, causing bleeding and pressure on brain tissue.",
      symptoms: ["Sudden severe headache", "Nausea", "Vomiting", "Loss of consciousness"],
      color: "from-red-500 to-red-600", 
      bgColor: "bg-red-50 dark:bg-red-900/20"
    },
    {
      icon: Brain,
      name: "Mini-Stroke (TIA)",
      percentage: "15%",
      description: "Temporary blockage of blood flow",
      details: "Transient Ischemic Attack - symptoms last less than 24 hours but signal future stroke risk.",
      symptoms: ["Brief weakness", "Temporary speech problems", "Vision changes", "Dizziness"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Types of Stroke
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Understanding different types of strokes helps in recognition and treatment approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {strokeTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                  selectedType === index ? 'scale-105' : ''
                }`}
                onClick={() => setSelectedType(index)}
              >
                <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl ${
                  selectedType === index ? 'ring-4 ring-offset-2 ring-blue-500' : ''
                }`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${type.bgColor}`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-r ${type.color} bg-clip-text text-transparent`} />
                  </div>
                  
                  <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${type.color} bg-clip-text text-transparent`}>
                    {type.percentage}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {type.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {type.description}
                  </p>

                  <div className={`w-full h-2 rounded-full ${type.bgColor} mb-4`}>
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${type.color} transition-all duration-1000`}
                      style={{ width: selectedType === index ? type.percentage : '0%' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed View */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                {(() => {
                  const Icon = strokeTypes[selectedType].icon;
                  return <Icon className={`w-12 h-12 mr-4 bg-gradient-to-r ${strokeTypes[selectedType].color} bg-clip-text text-transparent`} />;
                })()}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {strokeTypes[selectedType].name}
                  </h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${strokeTypes[selectedType].color} bg-clip-text text-transparent`}>
                    {strokeTypes[selectedType].percentage} of all strokes
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {strokeTypes[selectedType].details}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Common Symptoms:</h4>
                {strokeTypes[selectedType].symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${strokeTypes[selectedType].color} mr-3`} />
                    <span className="text-gray-600 dark:text-gray-300">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${strokeTypes[selectedType].bgColor} rounded-2xl p-8 text-center`}>
              <div className={`text-6xl font-bold mb-4 bg-gradient-to-r ${strokeTypes[selectedType].color} bg-clip-text text-transparent animate-pulse`}>
                {strokeTypes[selectedType].percentage}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                of all strokes are {strokeTypes[selectedType].name.toLowerCase()}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Don't Wait to Identify the Type</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Regardless of stroke type, immediate medical attention is crucial. 
              Call 911 at the first sign of any stroke symptoms - every minute matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}