"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, CheckCircle, AlertCircle } from "lucide-react";

export default function SmartFASTDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);
  const [showResults, setShowResults] = useState(false);

  const fastSteps = [
    {
      letter: "F",
      title: "Face Drooping",
      description: "Ask the person to smile. Does one side of the face droop or is it numb?",
      instruction: "Look for facial asymmetry when they smile",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      question: "Does one side of the face droop when smiling?",
      visual: "😊➡️😔"
    },
    {
      letter: "A", 
      title: "Arm Weakness",
      description: "Ask the person to raise both arms. Does one arm drift downward?",
      instruction: "Have them raise both arms for 10 seconds",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      question: "Does one arm drift down when both are raised?",
      visual: "🙌➡️🤚"
    },
    {
      letter: "S",
      title: "Speech Difficulty", 
      description: "Ask them to repeat a simple phrase. Is their speech slurred?",
      instruction: "Listen for slurred or garbled speech",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      question: "Is their speech slurred or hard to understand?",
      visual: "🗣️➡️😵‍💫"
    },
    {
      letter: "T",
      title: "Time to Call 911",
      description: "If you observe any signs, call 911 immediately and note the time.",
      instruction: "Call emergency services right away",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      question: "Did you observe any of the above symptoms?",
      visual: "📞🚨"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            const nextStep = (activeStep + 1) % fastSteps.length;
            setActiveStep(nextStep);
            if (nextStep === 0) {
              setIsPlaying(false);
              return 0;
            }
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeStep]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setProgress(0);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setActiveStep(0);
    setProgress(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...userAnswers];
    newAnswers[activeStep] = answer;
    setUserAnswers(newAnswers);
    
    if (activeStep < fastSteps.length - 1) {
      setActiveStep(activeStep + 1);
      setProgress(0);
    } else {
      setShowResults(true);
    }
  };

  const getScenarioResult = () => {
    const positiveSymptoms = userAnswers.slice(0, 3).filter(Boolean).length;
    if (positiveSymptoms >= 1) {
      return {
        action: "CALL 911 IMMEDIATELY",
        severity: "HIGH PRIORITY",
        color: "text-red-600",
        bgColor: "bg-red-100 dark:bg-red-900/30"
      };
    }
    return {
      action: "Continue monitoring, seek medical advice",
      severity: "LOW PRIORITY", 
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    };
  };

  return (
    <section id="fast-method" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
            🎯 Interactive Learning
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
            Master F.A.S.T. Method
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Interactive simulation to help you recognize stroke symptoms quickly and confidently.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              onClick={handlePlayPause}
              className={`px-8 py-4 rounded-2xl font-semibold transform hover:-translate-y-1 transition-all duration-300 ${
                isPlaying ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
              } text-white shadow-xl`}
            >
              {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
              {isPlaying ? "Pause Demo" : "Start Interactive Demo"}
            </Button>
            
            <Button 
              onClick={handleReset}
              variant="outline"
              className="px-8 py-4 rounded-2xl font-semibold border-2 transform hover:-translate-y-1 transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Reset
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                Step {activeStep + 1} of {fastSteps.length}
              </span>
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                {Math.round((activeStep / fastSteps.length) * 100)}% Complete
              </span>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
                style={{ width: `${((activeStep + progress/100) / fastSteps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Main Demo Area */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Steps */}
            <div className="space-y-6">
              {fastSteps.map((step, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-3xl cursor-pointer transition-all duration-500 transform ${
                    activeStep === index
                      ? `bg-gradient-to-r ${step.color} text-white shadow-2xl scale-105`
                      : `${step.bgColor} hover:shadow-lg hover:scale-102`
                  }`}
                  onClick={() => !isPlaying && setActiveStep(index)}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg ${
                      activeStep === index ? 'bg-white/20 text-white' : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                    }`}>
                      {step.letter}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-3 ${
                        activeStep === index ? 'text-white' : 'text-gray-900 dark:text-white'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`mb-4 text-lg ${
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

                    {/* Answer Indicator */}
                    {userAnswers[index] !== undefined && (
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        userAnswers[index] ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                      }`}>
                        {userAnswers[index] ? <AlertCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Demo & Interaction */}
            <div className="relative">
              <div className={`${fastSteps[activeStep].bgColor} rounded-3xl p-12 text-center shadow-2xl`}>
                <div className={`text-8xl font-black mb-6 bg-gradient-to-r ${fastSteps[activeStep].color} bg-clip-text text-transparent animate-pulse`}>
                  {fastSteps[activeStep].letter}
                </div>
                
                <div className="text-6xl mb-6">
                  {fastSteps[activeStep].visual}
                </div>
                
                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  {fastSteps[activeStep].title}
                </h3>
                
                {!showResults && activeStep < fastSteps.length && (
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                      {fastSteps[activeStep].question}
                    </p>
                    
                    <div className="flex gap-4 justify-center">
                      <Button
                        onClick={() => handleAnswer(true)}
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold transform hover:-translate-y-1 transition-all duration-300"
                      >
                        Yes - Symptom Present
                      </Button>
                      <Button
                        onClick={() => handleAnswer(false)}
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold transform hover:-translate-y-1 transition-all duration-300"
                      >
                        No - Normal
                      </Button>
                    </div>
                  </div>
                )}

                {showResults && (
                  <div className={`${getScenarioResult().bgColor} rounded-2xl p-8 mt-6`}>
                    <h4 className={`text-2xl font-bold mb-4 ${getScenarioResult().color}`}>
                      Assessment Result
                    </h4>
                    <p className={`text-xl font-semibold mb-2 ${getScenarioResult().color}`}>
                      {getScenarioResult().action}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Priority Level: {getScenarioResult().severity}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Reminder */}
        <div className="mt-16 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 animate-pulse" />
          <div className="relative z-10">
            <div className="text-6xl mb-6">🚨</div>
            <h3 className="text-3xl md:text-4xl font-black mb-6">Remember: Every Second Counts</h3>
            <p className="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto">
              If you observe ANY F.A.S.T. symptoms, don't hesitate. Call 911 immediately. 
              Treatment is most effective within the first 3 hours of symptom onset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}