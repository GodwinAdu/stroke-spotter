import Breadcrumb from "@/components/common/Breadcrumbs";

const FastMethodPage = () => {
  return (
    <>
      <Breadcrumb 
        pageName="F.A.S.T. Method" 
        description="Learn the F.A.S.T. method to quickly identify stroke symptoms" 
      />
      
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              
              {/* Hero Section */}
              <div className="mb-12 text-center">
                <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-red-100 to-orange-100 px-6 py-2 text-sm font-medium text-red-800 dark:from-red-900/30 dark:to-orange-900/30 dark:text-red-400">
                  ⚡ Life-Saving Method • Act Fast • Save Lives
                </div>
                <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl">
                  F.A.S.T. Method 🚨
                </h2>
                <p className="text-xl text-body-color">
                  Every second counts during a stroke emergency. Master the F.A.S.T. method 
                  and become a stroke hero in your community.
                </p>
              </div>

              {/* Time Critical Banner */}
              <div className="mb-12 rounded-xl bg-gradient-to-r from-red-600 to-red-700 p-6 text-center text-white">
                <div className="mb-2 text-2xl font-bold">⏰ Time = Brain</div>
                <div className="text-red-100">2 million brain cells die every minute during a stroke</div>
              </div>

              {/* F.A.S.T. Cards */}
              <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                
                {/* Face */}
                <div className="group rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-6 text-center shadow-lg transition-all hover:border-red-300 hover:shadow-xl hover:-translate-y-1 dark:border-red-800 dark:from-red-900/20 dark:to-red-800/20">
                  <div className="mb-4 text-6xl">🙂</div>
                  <div className="mb-2 text-4xl font-bold text-red-600">F</div>
                  <h3 className="mb-3 text-xl font-bold text-red-700 dark:text-red-400">FACE</h3>
                  <p className="mb-4 font-medium text-body-color">Ask them to smile</p>
                  <div className="rounded-lg bg-red-100 p-3 text-sm dark:bg-red-900/30">
                    <strong className="text-red-700 dark:text-red-400">Watch for:</strong>
                    <ul className="mt-2 space-y-1 text-left text-body-color">
                      <li>• Drooping on one side</li>
                      <li>• Uneven or lopsided smile</li>
                      <li>• Facial numbness</li>
                    </ul>
                  </div>
                </div>

                {/* Arms */}
                <div className="group rounded-xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-6 text-center shadow-lg transition-all hover:border-orange-300 hover:shadow-xl hover:-translate-y-1 dark:border-orange-800 dark:from-orange-900/20 dark:to-orange-800/20">
                  <div className="mb-4 text-6xl">💪</div>
                  <div className="mb-2 text-4xl font-bold text-orange-600">A</div>
                  <h3 className="mb-3 text-xl font-bold text-orange-700 dark:text-orange-400">ARMS</h3>
                  <p className="mb-4 font-medium text-body-color">Raise both arms up</p>
                  <div className="rounded-lg bg-orange-100 p-3 text-sm dark:bg-orange-900/30">
                    <strong className="text-orange-700 dark:text-orange-400">Watch for:</strong>
                    <ul className="mt-2 space-y-1 text-left text-body-color">
                      <li>• One arm drifts down</li>
                      <li>• Weakness on one side</li>
                      <li>• Can't hold position</li>
                    </ul>
                  </div>
                </div>

                {/* Speech */}
                <div className="group rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center shadow-lg transition-all hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 dark:border-blue-800 dark:from-blue-900/20 dark:to-blue-800/20">
                  <div className="mb-4 text-6xl">🗣️</div>
                  <div className="mb-2 text-4xl font-bold text-blue-600">S</div>
                  <h3 className="mb-3 text-xl font-bold text-blue-700 dark:text-blue-400">SPEECH</h3>
                  <p className="mb-4 font-medium text-body-color">Repeat simple phrase</p>
                  <div className="rounded-lg bg-blue-100 p-3 text-sm dark:bg-blue-900/30">
                    <strong className="text-blue-700 dark:text-blue-400">Listen for:</strong>
                    <ul className="mt-2 space-y-1 text-left text-body-color">
                      <li>• Slurred speech</li>
                      <li>• Wrong or strange words</li>
                      <li>• Cannot speak clearly</li>
                    </ul>
                  </div>
                </div>

                {/* Time */}
                <div className="group rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-6 text-center shadow-lg transition-all hover:border-green-300 hover:shadow-xl hover:-translate-y-1 dark:border-green-800 dark:from-green-900/20 dark:to-green-800/20">
                  <div className="mb-4 text-6xl">🚑</div>
                  <div className="mb-2 text-4xl font-bold text-green-600">T</div>
                  <h3 className="mb-3 text-xl font-bold text-green-700 dark:text-green-400">TIME</h3>
                  <p className="mb-4 font-medium text-body-color">Call 911 NOW!</p>
                  <div className="rounded-lg bg-green-100 p-3 text-sm dark:bg-green-900/30">
                    <strong className="text-green-700 dark:text-green-400">Act Fast:</strong>
                    <ul className="mt-2 space-y-1 text-left text-body-color">
                      <li>• Note the time symptoms started</li>
                      <li>• Call emergency services</li>
                      <li>• Every minute matters!</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Detailed Instructions */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  Step-by-Step Instructions
                </h3>
                
                <div className="space-y-8">
                  <div className="rounded-lg border-l-4 border-red-500 bg-gray-50 p-6 dark:bg-gray-800">
                    <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                      1. Face Test
                    </h4>
                    <p className="mb-3 text-body-color">
                      Ask the person to smile or show their teeth. A normal smile is symmetrical.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <strong className="text-green-600">Normal:</strong>
                        <ul className="mt-1 text-body-color">
                          <li>• Both sides of face move equally</li>
                          <li>• Smile is even</li>
                          <li>• No drooping</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-red-600">Warning Signs:</strong>
                        <ul className="mt-1 text-body-color">
                          <li>• One side droops</li>
                          <li>• Uneven smile</li>
                          <li>• Numbness reported</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-red-500 bg-gray-50 p-6 dark:bg-gray-800">
                    <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                      2. Arm Test
                    </h4>
                    <p className="mb-3 text-body-color">
                      Ask the person to raise both arms above their head for 10 seconds.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <strong className="text-green-600">Normal:</strong>
                        <ul className="mt-1 text-body-color">
                          <li>• Both arms stay up</li>
                          <li>• Equal strength</li>
                          <li>• Steady position</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-red-600">Warning Signs:</strong>
                        <ul className="mt-1 text-body-color">
                          <li>• One arm drifts down</li>
                          <li>• Cannot lift one arm</li>
                          <li>• Weakness on one side</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-red-500 bg-gray-50 p-6 dark:bg-gray-800">
                    <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                      3. Speech Test
                    </h4>
                    <p className="mb-3 text-body-color">
                      Ask the person to repeat a simple phrase like "The sky is blue" or "The early bird catches the worm."
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <strong className="text-green-600">Normal:</strong>
                        <ul className="mt-1 text-body-color">
                          <li>• Clear speech</li>
                          <li>• Correct words</li>
                          <li>• Normal pace</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-red-600">Warning Signs:</strong>
                        <ul className="mt-1 text-body-color">
                          <li>• Slurred speech</li>
                          <li>• Wrong words</li>
                          <li>• Cannot speak</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-900/20">
                    <h4 className="mb-3 text-xl font-semibold text-red-600 dark:text-red-400">
                      4. Time - Call 911 NOW!
                    </h4>
                    <p className="mb-3 text-body-color">
                      If any of the above tests show abnormal results, call emergency services immediately.
                    </p>
                    <div className="text-body-color">
                      <strong>When calling 911:</strong>
                      <ul className="mt-2">
                        <li>• Say "I think someone is having a stroke"</li>
                        <li>• Note the time symptoms started</li>
                        <li>• Describe the symptoms you observed</li>
                        <li>• Follow dispatcher instructions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Signs */}
              <div className="mb-12 rounded-lg bg-yellow-50 p-8 dark:bg-yellow-900/20">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Other Stroke Warning Signs
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Sudden onset of:</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Severe headache with no known cause</li>
                      <li>• Confusion or trouble understanding</li>
                      <li>• Trouble seeing in one or both eyes</li>
                      <li>• Trouble walking or loss of balance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Also watch for:</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Dizziness or loss of coordination</li>
                      <li>• Numbness on one side of body</li>
                      <li>• Nausea or vomiting</li>
                      <li>• Sudden behavioral changes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="rounded-xl bg-gradient-to-br from-red-600 to-red-700 p-8 text-white shadow-2xl">
                  <div className="mb-4 text-5xl">🎆</div>
                  <h3 className="mb-4 text-3xl font-bold">You Can Be a Stroke Hero!</h3>
                  <p className="mb-6 text-lg opacity-90">
                    Learning F.A.S.T. makes you a potential lifesaver. Share this knowledge 
                    with family and friends - you never know when it might save a life.
                  </p>
                  <div className="mb-4 text-2xl font-bold">
                    🚑 Call 911 Immediately 🚑
                  </div>
                  <div className="text-sm opacity-75">
                    Time = Brain • Every Second Counts • Act F.A.S.T.
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

export default FastMethodPage;