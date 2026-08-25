"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

export default function FASTMethod() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const fastSteps = [
    {
      letter: "F",
      title: "Face Drooping",
      description: "Ask the person to smile. Does one side of the face droop or is it numb? Is the smile uneven or lopsided?",
      instruction: "Ask them to smile and look for facial asymmetry",
      color: "from-red-500 to-red-600"
    },
    {
      letter: "A", 
      title: "Arm Weakness",
      description: "Ask the person to raise both arms. Does one arm drift downward? Is there weakness or numbness in one arm?",
      instruction: "Have them raise both arms for 10 seconds",
      color: "from-orange-500 to-orange-600"
    },
    {
      letter: "S",
      title: "Speech Difficulty", 
      description: "Ask the person to repeat a simple phrase. Is their speech slurred or strange? Do they have trouble understanding?",
      instruction: "Listen for slurred or garbled speech",
      color: "from-blue-500 to-blue-600"
    },
    {
      letter: "T",
      title: "Time to Call 911",
      description: "If you observe any of these signs, call 911 immediately. Note the time symptoms first appeared.",
      instruction: "Call emergency services immediately",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      const interval = setInterval(() => {
        setActiveStep(prev => {
          const next = (prev + 1) % fastSteps.length;
          if (next === 0) {
            setIsPlaying(false);
            clearInterval(interval);
          }
          return next;
        });
      }, 3000);
    }
  };

  return (
    <section id="fast-method" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Learn the F.A.S.T. Method
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            F.A.S.T. is an easy way to remember and identify the most common symptoms of stroke.
          </p>
          
          <Button 
            onClick={handlePlayPause}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isPlaying ? "Pause Demo" : "Start Demo"}
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Steps */}
          <div className="space-y-6">
            {fastSteps.map((step, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeStep === index
                    ? 'bg-gradient-to-r ' + step.color + ' text-white shadow-2xl scale-105'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                    activeStep === index ? 'bg-white/20' : 'bg-white dark:bg-gray-800'
                  }`}>
                    <span className={activeStep === index ? 'text-white' : 'text-gray-900 dark:text-white'}>
                      {step.letter}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${
                      activeStep === index ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`mb-3 ${
                      activeStep === index ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      {step.description}
                    </p>
                    <div className={`text-sm font-medium ${
                      activeStep === index ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      💡 {step.instruction}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Demonstration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-8 text-center">
              <div className={`text-8xl font-bold mb-4 bg-gradient-to-r ${fastSteps[activeStep].color} bg-clip-text text-transparent animate-pulse`}>
                {fastSteps[activeStep].letter}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {fastSteps[activeStep].title}
              </h3>
              
              <div className="bg-white dark:bg-gray-600 rounded-2xl p-6 mb-6">
                <p className="text-gray-700 dark:text-gray-200">
                  {fastSteps[activeStep].instruction}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="flex justify-center space-x-2">
                {fastSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeStep ? 'bg-red-500 scale-125' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Call Section */}
        <div className="mt-16 bg-red-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">🚨 Remember: Call 911 Immediately</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            If you notice any F.A.S.T. symptoms, don't wait. Call emergency services right away. 
            Treatment is most effective when given within 3 hours of symptom onset.
          </p>
        </div>
      </div>
    </section>
  );
}