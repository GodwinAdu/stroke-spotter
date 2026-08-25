"use client";

import { useState, useEffect } from "react";
import { Phone, Clock, MapPin, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmergencyAction() {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerActive) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const emergencySteps = [
    {
      icon: Phone,
      title: "Call 911 Immediately",
      description: "Don't drive to the hospital. Paramedics can start treatment en route.",
      time: "0-2 minutes",
      color: "bg-red-500"
    },
    {
      icon: Clock,
      title: "Note the Time",
      description: "Record when symptoms first appeared. This helps determine treatment options.",
      time: "2-3 minutes", 
      color: "bg-orange-500"
    },
    {
      icon: MapPin,
      title: "Stay Calm & Still",
      description: "Keep the person comfortable and lying down. Don't give food or water.",
      time: "3-10 minutes",
      color: "bg-blue-500"
    },
    {
      icon: AlertTriangle,
      title: "Monitor Symptoms",
      description: "Watch for changes and be ready to provide CPR if needed.",
      time: "Until help arrives",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Emergency Action Plan
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            When stroke symptoms appear, every second counts. Follow these steps immediately.
          </p>
        </div>

        {/* Emergency Timer Simulation */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 mb-12 text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Stroke Emergency Timer
          </h3>
          
          <div className="text-6xl font-bold mb-6 text-red-600 font-mono">
            {formatTime(timeElapsed)}
          </div>
          
          <div className="flex justify-center gap-4 mb-6">
            <Button
              onClick={() => {
                setIsTimerActive(true);
                setTimeElapsed(0);
              }}
              className="bg-red-600 hover:bg-red-700 text-white"
              disabled={isTimerActive}
            >
              Start Emergency Response
            </Button>
            <Button
              onClick={() => {
                setIsTimerActive(false);
                setTimeElapsed(0);
              }}
              variant="outline"
            >
              Reset
            </Button>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300">
            {isTimerActive 
              ? "Emergency response in progress..." 
              : "Click to simulate emergency response timing"
            }
          </p>
        </div>

        {/* Emergency Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {emergencySteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = isTimerActive && timeElapsed >= index * 30;
            
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-500 ${
                  isActive ? 'ring-4 ring-red-500 scale-105' : ''
                }`}
              >
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white mb-4 ${
                  isActive ? 'animate-pulse' : ''
                }`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Step {index + 1} • {step.time}
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Critical Information Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-red-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Phone className="w-8 h-8 mr-3" />
              What to Tell 911
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                "I think someone is having a stroke"
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                Your exact location and address
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                When symptoms started
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                Current symptoms you observe
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                Person's age and medical conditions
              </li>
            </ul>
          </div>

          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-3" />
              Do NOT Do This
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                Give food, water, or medication
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                Drive to the hospital yourself
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                Wait to see if symptoms improve
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                Leave the person alone
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                Assume it's just fatigue or stress
              </li>
            </ul>
          </div>
        </div>

        {/* Golden Hour Information */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">⏰ The Golden Hour</h3>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Treatment within the first hour of stroke onset can dramatically improve outcomes. 
            Clot-busting drugs are most effective within 3 hours, and some treatments work up to 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}