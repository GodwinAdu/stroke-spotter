import Breadcrumb from "@/components/common/Breadcrumbs";

const EmergencyPage = () => {
  return (
    <>
      <Breadcrumb 
        pageName="Emergency Response" 
        description="Learn how to respond quickly and effectively during a stroke emergency" 
      />
      
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              
              {/* Hero Section */}
              <div className="mb-12 text-center">
                <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-red-100 to-orange-100 px-6 py-2 text-sm font-medium text-red-800 dark:from-red-900/30 dark:to-orange-900/30 dark:text-red-400">
                  🚨 Emergency Protocol • Life-Saving Actions • Act Fast
                </div>
                <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl">
                  Emergency Response 🚑
                </h2>
                <p className="text-xl text-body-color">
                  When stroke strikes, you become the first responder. Your quick thinking 
                  and decisive action can save a life and prevent disability.
                </p>
              </div>

              {/* Emergency Alert */}
              <div className="mb-12 rounded-xl bg-gradient-to-r from-red-600 to-red-700 p-8 text-center text-white shadow-2xl animate-pulse">
                <div className="mb-4 text-6xl">🚨</div>
                <h3 className="mb-4 text-3xl font-bold">STROKE EMERGENCY</h3>
                <div className="mb-4 text-7xl font-bold animate-bounce">911</div>
                <p className="text-xl opacity-90">
                  Don't wait! Don't drive! Call emergency services NOW!
                </p>
                <div className="mt-4 text-sm opacity-75">
                  ⏰ Every minute = 2 million brain cells lost
                </div>
              </div>

              {/* Quick Action Steps */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  3-Step Emergency Protocol 🎯
                </h3>
                
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="group rounded-xl bg-gradient-to-br from-red-50 to-red-100 p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1 dark:from-red-900/20 dark:to-red-800/20">
                    <div className="mb-4 text-5xl">👁️</div>
                    <div className="mb-2 text-3xl font-bold text-red-600">1</div>
                    <h4 className="mb-3 text-xl font-bold text-red-700 dark:text-red-400">
                      Recognize Signs
                    </h4>
                    <p className="text-body-color">
                      Use F.A.S.T. method to quickly identify stroke symptoms
                    </p>
                    <div className="mt-3 text-sm font-medium text-red-600 dark:text-red-400">
                      Face • Arms • Speech • Time
                    </div>
                  </div>
                  
                  <div className="group rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1 dark:from-orange-900/20 dark:to-orange-800/20">
                    <div className="mb-4 text-5xl">📞</div>
                    <div className="mb-2 text-3xl font-bold text-orange-600">2</div>
                    <h4 className="mb-3 text-xl font-bold text-orange-700 dark:text-orange-400">
                      Call 911
                    </h4>
                    <p className="text-body-color">
                      Call immediately - don't wait, don't drive, don't delay
                    </p>
                    <div className="mt-3 text-sm font-medium text-orange-600 dark:text-orange-400">
                      Emergency services have stroke protocols
                    </div>
                  </div>
                  
                  <div className="group rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1 dark:from-green-900/20 dark:to-green-800/20">
                    <div className="mb-4 text-5xl">🤲</div>
                    <div className="mb-2 text-3xl font-bold text-green-600">3</div>
                    <h4 className="mb-3 text-xl font-bold text-green-700 dark:text-green-400">
                      Provide Care
                    </h4>
                    <p className="text-body-color">
                      Keep person calm, safe, and comfortable until help arrives
                    </p>
                    <div className="mt-3 text-sm font-medium text-green-600 dark:text-green-400">
                      Stay with them • Monitor breathing
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Emergency Protocol */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  Emergency Protocol
                </h3>
                
                <div className="space-y-8">
                  
                  {/* Step 1: Assessment */}
                  <div className="rounded-lg border-2 border-red-200 p-6 dark:border-red-800">
                    <h4 className="mb-4 text-2xl font-bold text-red-600 dark:text-red-400">
                      Step 1: Quick Assessment (F.A.S.T.)
                    </h4>
                    
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded bg-white p-4 shadow dark:bg-gray-800">
                        <div className="mb-2 text-2xl font-bold text-red-600">F</div>
                        <div className="font-semibold">Face</div>
                        <div className="text-sm text-body-color">Ask to smile - look for drooping</div>
                      </div>
                      <div className="rounded bg-white p-4 shadow dark:bg-gray-800">
                        <div className="mb-2 text-2xl font-bold text-red-600">A</div>
                        <div className="font-semibold">Arms</div>
                        <div className="text-sm text-body-color">Raise both arms - check for weakness</div>
                      </div>
                      <div className="rounded bg-white p-4 shadow dark:bg-gray-800">
                        <div className="mb-2 text-2xl font-bold text-red-600">S</div>
                        <div className="font-semibold">Speech</div>
                        <div className="text-sm text-body-color">Repeat phrase - listen for slurring</div>
                      </div>
                      <div className="rounded bg-white p-4 shadow dark:bg-gray-800">
                        <div className="mb-2 text-2xl font-bold text-red-600">T</div>
                        <div className="font-semibold">Time</div>
                        <div className="text-sm text-body-color">Note time and call 911 NOW</div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Call 911 */}
                  <div className="rounded-lg border-2 border-orange-200 p-6 dark:border-orange-800">
                    <h4 className="mb-4 text-2xl font-bold text-orange-600 dark:text-orange-400">
                      Step 2: Call 911 Immediately
                    </h4>
                    
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h5 className="mb-3 font-semibold text-black dark:text-white">What to Say:</h5>
                        <ul className="space-y-2 text-body-color">
                          <li>• "I think someone is having a stroke"</li>
                          <li>• Give exact location/address</li>
                          <li>• Describe symptoms observed</li>
                          <li>• State when symptoms started</li>
                          <li>• Mention if person is conscious</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="mb-3 font-semibold text-black dark:text-white">Important Information:</h5>
                        <ul className="space-y-2 text-body-color">
                          <li>• Person's age and medical history</li>
                          <li>• Current medications</li>
                          <li>• Any allergies</li>
                          <li>• Recent injuries or surgeries</li>
                          <li>• Stay on line for instructions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Immediate Care */}
                  <div className="rounded-lg border-2 border-blue-200 p-6 dark:border-blue-800">
                    <h4 className="mb-4 text-2xl font-bold text-blue-600 dark:text-blue-400">
                      Step 3: Provide Immediate Care
                    </h4>
                    
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h5 className="mb-3 font-semibold text-green-600">DO:</h5>
                        <ul className="space-y-2 text-body-color">
                          <li>• Keep person calm and comfortable</li>
                          <li>• Loosen tight clothing</li>
                          <li>• Position on side if vomiting</li>
                          <li>• Monitor breathing and pulse</li>
                          <li>• Note time symptoms started</li>
                          <li>• Gather medications to show paramedics</li>
                          <li>• Stay with person until help arrives</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="mb-3 font-semibold text-red-600">DON'T:</h5>
                        <ul className="space-y-2 text-body-color">
                          <li>• Give food, water, or medications</li>
                          <li>• Leave person alone</li>
                          <li>• Drive to hospital yourself</li>
                          <li>• Wait to see if symptoms improve</li>
                          <li>• Give aspirin (unless prescribed)</li>
                          <li>• Move person unnecessarily</li>
                          <li>• Assume it's not serious</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Situations */}
              <div className="mb-12 rounded-lg bg-yellow-50 p-8 dark:bg-yellow-900/20">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Special Situations
                </h3>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">If Person is Unconscious:</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Check for breathing and pulse</li>
                      <li>• Position on side (recovery position)</li>
                      <li>• Clear airway if needed</li>
                      <li>• Be prepared for CPR if trained</li>
                      <li>• Monitor continuously</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">If Person is Alone:</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Call 911 immediately</li>
                      <li>• Unlock door for paramedics</li>
                      <li>• Sit or lie down safely</li>
                      <li>• Stay on phone with dispatcher</li>
                      <li>• Don't try to drive</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">If Symptoms Improve:</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Still call 911 - could be TIA</li>
                      <li>• TIA increases stroke risk</li>
                      <li>• Medical evaluation still needed</li>
                      <li>• Don't cancel emergency call</li>
                      <li>• Continue monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Language Barriers:</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• 911 has translation services</li>
                      <li>• Use simple gestures</li>
                      <li>• Find someone who speaks their language</li>
                      <li>• Show F.A.S.T. tests visually</li>
                      <li>• Stay calm and reassuring</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Time is Critical */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  Why Time is Critical
                </h3>
                
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-lg bg-red-100 p-6 text-center dark:bg-red-900/30">
                    <div className="mb-3 text-3xl font-bold text-red-600">3 Hours</div>
                    <div className="font-semibold text-black dark:text-white">tPA Treatment Window</div>
                    <div className="text-sm text-body-color">Clot-busting medication most effective within 3 hours</div>
                  </div>
                  
                  <div className="rounded-lg bg-orange-100 p-6 text-center dark:bg-orange-900/30">
                    <div className="mb-3 text-3xl font-bold text-orange-600">4.5 Hours</div>
                    <div className="font-semibold text-black dark:text-white">Extended Window</div>
                    <div className="text-sm text-body-color">Some patients may benefit up to 4.5 hours</div>
                  </div>
                  
                  <div className="rounded-lg bg-yellow-100 p-6 text-center dark:bg-yellow-900/30">
                    <div className="mb-3 text-3xl font-bold text-yellow-600">24 Hours</div>
                    <div className="font-semibold text-black dark:text-white">Mechanical Removal</div>
                    <div className="text-sm text-body-color">Clot removal procedures possible up to 24 hours</div>
                  </div>
                </div>
                
                <div className="mt-6 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                  <p className="text-center text-lg font-medium text-body-color">
                    <strong className="text-red-600">Remember:</strong> Brain cells die every minute during a stroke. 
                    The sooner treatment begins, the better the chances of recovery.
                  </p>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="mb-12 rounded-lg bg-blue-50 p-8 dark:bg-blue-900/20">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Emergency Contacts & Resources
                </h3>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Emergency Numbers:</h4>
                    <ul className="space-y-2 text-body-color">
                      <li><strong>911</strong> - Emergency Services</li>
                      <li><strong>1-888-4-STROKE</strong> - National Stroke Association</li>
                      <li><strong>1-800-787-8537</strong> - American Stroke Association</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Prepare in Advance:</h4>
                    <ul className="space-y-2 text-body-color">
                      <li>• Know location of nearest stroke center</li>
                      <li>• Keep medical information accessible</li>
                      <li>• Learn F.A.S.T. method</li>
                      <li>• Share knowledge with family/friends</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="rounded-xl bg-gradient-to-br from-red-600 to-red-700 p-8 text-white shadow-2xl">
                  <div className="mb-4 text-5xl">🦸♂️</div>
                  <h3 className="mb-4 text-3xl font-bold">You Are Someone's Hero!</h3>
                  <p className="mb-6 text-lg opacity-90">
                    In a stroke emergency, YOU are the difference between hope and despair. 
                    Your knowledge and quick action can save a life and preserve a future.
                  </p>
                  <div className="mb-4 text-xl font-semibold">
                    🚑 Call 911 • ⏰ Act F.A.S.T. • 💖 Save Lives
                  </div>
                  <div className="text-sm opacity-75">
                    Every Second Counts • Every Action Matters • Every Life is Precious
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmergencyPage;