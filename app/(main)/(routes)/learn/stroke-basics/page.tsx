import Breadcrumb from "@/components/common/Breadcrumbs";

const StrokeBasicsPage = () => {
  return (
    <>
      <Breadcrumb 
        pageName="Stroke Basics" 
        description="Understanding stroke: types, causes, and symptoms" 
      />
      
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              
              {/* Hero Section */}
              <div className="mb-12 text-center">
                <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-red-100 to-pink-100 px-6 py-2 text-sm font-medium text-red-800 dark:from-red-900/30 dark:to-pink-900/30 dark:text-red-400">
                  🧠 Essential Knowledge • Life-Saving Information
                </div>
                <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl">
                  Understanding Stroke
                </h2>
                <p className="text-xl text-body-color">
                  Knowledge is power. Understanding stroke can help you recognize symptoms, 
                  take preventive action, and potentially save lives.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="mb-12 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-gradient-to-br from-red-50 to-orange-50 p-6 text-center dark:from-red-900/20 dark:to-orange-900/20">
                  <div className="mb-2 text-3xl">⚡</div>
                  <div className="mb-2 text-2xl font-bold text-red-600 dark:text-red-400">Every 40 sec</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Someone has a stroke in the US</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center dark:from-blue-900/20 dark:to-cyan-900/20">
                  <div className="mb-2 text-3xl">🎯</div>
                  <div className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">80%</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Of strokes are preventable</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center dark:from-green-900/20 dark:to-emerald-900/20">
                  <div className="mb-2 text-3xl">🏥</div>
                  <div className="mb-2 text-2xl font-bold text-green-600 dark:text-green-400">#5</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Leading cause of death</div>
                </div>
              </div>

              {/* What is a Stroke */}
              <div className="mb-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <h3 className="mb-6 text-3xl font-bold">What is a Stroke? 🧠</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="mb-4 text-lg opacity-90">
                      A stroke occurs when blood flow to part of the brain is interrupted or reduced, 
                      preventing brain tissue from getting oxygen and nutrients.
                    </p>
                    <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                      <div className="mb-2 font-semibold">⏰ Time is Critical</div>
                      <div className="text-sm opacity-90">Brain cells begin dying within minutes</div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                    <div className="mb-4 text-center text-4xl">🚨</div>
                    <div className="text-center font-semibold">Medical Emergency</div>
                    <div className="text-center text-sm opacity-90">Requires immediate treatment</div>
                  </div>
                </div>
              </div>

              {/* Types of Stroke */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  Types of Stroke
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-6 transition-all hover:border-red-300 hover:shadow-lg dark:border-red-800 dark:from-red-900/20 dark:to-red-800/20">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-full bg-red-600 p-2 text-white text-xl">🚫</div>
                      <div>
                        <h4 className="text-xl font-bold text-red-700 dark:text-red-400">
                          Ischemic Stroke
                        </h4>
                        <div className="text-sm font-semibold text-red-600 dark:text-red-500">87% of all strokes</div>
                      </div>
                    </div>
                    <p className="mb-4 text-body-color">
                      Caused by a blockage (clot) in an artery that supplies blood to the brain.
                    </p>
                    <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/30">
                      <div className="text-sm font-medium text-red-800 dark:text-red-300">Most common • Treatable with clot-busting drugs</div>
                    </div>
                  </div>
                  
                  <div className="group rounded-xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-6 transition-all hover:border-orange-300 hover:shadow-lg dark:border-orange-800 dark:from-orange-900/20 dark:to-orange-800/20">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-full bg-orange-600 p-2 text-white text-xl">💥</div>
                      <div>
                        <h4 className="text-xl font-bold text-orange-700 dark:text-orange-400">
                          Hemorrhagic Stroke
                        </h4>
                        <div className="text-sm font-semibold text-orange-600 dark:text-orange-500">13% of all strokes</div>
                      </div>
                    </div>
                    <p className="mb-4 text-body-color">
                      Caused by bleeding in the brain when a blood vessel bursts or leaks.
                    </p>
                    <div className="rounded-lg bg-orange-100 p-3 dark:bg-orange-900/30">
                      <div className="text-sm font-medium text-orange-800 dark:text-orange-300">More severe • Requires immediate surgery</div>
                    </div>
                  </div>
                </div>
              </div>

                <h3 className="mb-6 text-2xl font-bold leading-tight text-black dark:text-white">
                  Common Risk Factors
                </h3>
                
                <div className="mb-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                        Controllable Risk Factors:
                      </h4>
                      <ul className="list-disc pl-6 text-body-color">
                        <li>High blood pressure</li>
                        <li>High cholesterol</li>
                        <li>Diabetes</li>
                        <li>Smoking</li>
                        <li>Obesity</li>
                        <li>Physical inactivity</li>
                        <li>Excessive alcohol consumption</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                        Non-controllable Risk Factors:
                      </h4>
                      <ul className="list-disc pl-6 text-body-color">
                        <li>Age (risk doubles every 10 years after 55)</li>
                        <li>Gender (men have higher risk)</li>
                        <li>Race (African Americans at higher risk)</li>
                        <li>Family history</li>
                        <li>Previous stroke or TIA</li>
                      </ul>
                    </div>
                  </div>
                </div>

              {/* F.A.S.T. Method */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  Recognize the Signs: F.A.S.T. 🚨
                </h3>
                
                <div className="mb-8 rounded-xl bg-gradient-to-r from-red-600 to-red-700 p-8 text-white">
                  <div className="mb-6 text-center">
                    <div className="mb-2 text-2xl font-bold">Act F.A.S.T. - Save Lives!</div>
                    <div className="text-red-100">Every second counts in stroke emergency</div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg bg-white/10 p-4 text-center backdrop-blur">
                      <div className="mb-3 text-4xl font-bold">F</div>
                      <div className="mb-1 font-semibold">FACE</div>
                      <div className="text-sm opacity-90">Drooping or uneven smile</div>
                    </div>
                    <div className="rounded-lg bg-white/10 p-4 text-center backdrop-blur">
                      <div className="mb-3 text-4xl font-bold">A</div>
                      <div className="mb-1 font-semibold">ARMS</div>
                      <div className="text-sm opacity-90">Weakness or numbness</div>
                    </div>
                    <div className="rounded-lg bg-white/10 p-4 text-center backdrop-blur">
                      <div className="mb-3 text-4xl font-bold">S</div>
                      <div className="mb-1 font-semibold">SPEECH</div>
                      <div className="text-sm opacity-90">Slurred or strange words</div>
                    </div>
                    <div className="rounded-lg bg-white/10 p-4 text-center backdrop-blur">
                      <div className="mb-3 text-4xl font-bold">T</div>
                      <div className="mb-1 font-semibold">TIME</div>
                      <div className="text-sm opacity-90">Call 911 immediately!</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 p-8 text-white shadow-2xl">
                  <div className="mb-4 text-4xl">🎯</div>
                  <h3 className="mb-4 text-2xl font-bold">Knowledge Saves Lives</h3>
                  <p className="mb-6 text-lg opacity-90">
                    Understanding stroke symptoms and acting F.A.S.T. can mean the difference 
                    between life and death, recovery and disability.
                  </p>
                  <div className="text-xl font-semibold">
                    Learn • Recognize • Act • Save Lives 🚑
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

export default StrokeBasicsPage;