import Breadcrumb from "@/components/common/Breadcrumbs";

const RecoveryPage = () => {
  return (
    <>
      <Breadcrumb 
        pageName="Recovery Guide" 
        description="Understanding stroke recovery and rehabilitation process" 
      />
      
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              
              {/* Hero Section */}
              <div className="mb-12 text-center">
                <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-green-100 to-blue-100 px-6 py-2 text-sm font-medium text-green-800 dark:from-green-900/30 dark:to-blue-900/30 dark:text-green-400">
                  🌟 Hope • Recovery • Independence
                </div>
                <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl">
                  Stroke Recovery Guide
                </h2>
                <p className="text-xl text-body-color">
                  Recovery is a journey of hope and determination. With the right support, rehabilitation, and mindset, 
                  stroke survivors can reclaim their independence and thrive.
                </p>
              </div>

              {/* Recovery Stats */}
              <div className="mb-12 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center dark:from-green-900/20 dark:to-emerald-900/20">
                  <div className="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">85%</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Show improvement with rehabilitation</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center dark:from-blue-900/20 dark:to-cyan-900/20">
                  <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">70%</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Regain functional independence</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 text-center dark:from-purple-900/20 dark:to-pink-900/20">
                  <div className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">2+ Years</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Recovery can continue improving</div>
                </div>
              </div>

              {/* Recovery Timeline */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  Your Recovery Journey
                </h3>
                
                <div className="relative">
                  <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-red-300 via-yellow-300 to-green-300"></div>
                  
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-sm font-bold text-white shadow-lg">
                        🏥
                      </div>
                      <div className="flex-1 rounded-xl bg-red-50 p-6 dark:bg-red-900/20">
                        <h4 className="mb-2 text-lg font-semibold text-red-700 dark:text-red-400">
                          Acute Phase (First 24-48 hours)
                        </h4>
                        <p className="mb-3 text-body-color">
                          Emergency treatment and stabilization. Medical team works to prevent further brain damage.
                        </p>
                        <div className="text-sm text-red-600 dark:text-red-400">
                          <strong>Focus:</strong> Life-saving interventions, clot removal, brain protection
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-sm font-bold text-white shadow-lg">
                        🔄
                      </div>
                      <div className="flex-1 rounded-xl bg-orange-50 p-6 dark:bg-orange-900/20">
                        <h4 className="mb-2 text-lg font-semibold text-orange-700 dark:text-orange-400">
                          Early Recovery (Week 1-2)
                        </h4>
                        <p className="mb-3 text-body-color">
                          Initial rehabilitation begins. Assessment of abilities and early mobility work.
                        </p>
                        <div className="text-sm text-orange-600 dark:text-orange-400">
                          <strong>Focus:</strong> Basic movement, swallowing safety, preventing complications
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 text-sm font-bold text-white shadow-lg">
                        💪
                      </div>
                      <div className="flex-1 rounded-xl bg-yellow-50 p-6 dark:bg-yellow-900/20">
                        <h4 className="mb-2 text-lg font-semibold text-yellow-700 dark:text-yellow-400">
                          Active Rehabilitation (Month 1-6)
                        </h4>
                        <p className="mb-3 text-body-color">
                          Intensive therapy period with rapid improvements. Most recovery happens here.
                        </p>
                        <div className="text-sm text-yellow-600 dark:text-yellow-400">
                          <strong>Focus:</strong> Regaining function, learning new strategies, building strength
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-sm font-bold text-white shadow-lg">
                        🌟
                      </div>
                      <div className="flex-1 rounded-xl bg-green-50 p-6 dark:bg-green-900/20">
                        <h4 className="mb-2 text-lg font-semibold text-green-700 dark:text-green-400">
                          Long-term Recovery (6+ Months)
                        </h4>
                        <p className="mb-3 text-body-color">
                          Continued improvement for years. Focus on independence and quality of life.
                        </p>
                        <div className="text-sm text-green-600 dark:text-green-400">
                          <strong>Focus:</strong> Maintaining gains, preventing future strokes, thriving
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Types of Rehabilitation */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  Your Recovery Team
                </h3>
                
                <div className="grid gap-6 md:grid-cols-2">
                  
                  {/* Physical Therapy */}
                  <div className="group rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-6 transition-all hover:border-blue-300 hover:shadow-lg dark:border-blue-800 dark:from-blue-900/20 dark:to-blue-800/20">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-full bg-blue-600 p-2 text-white">
                        🏃‍♂️
                      </div>
                      <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400">
                        Physical Therapy
                      </h4>
                    </div>
                    <p className="mb-4 text-body-color">
                      Rebuilding strength, balance, and mobility to help you move with confidence.
                    </p>
                    <div className="space-y-2">
                      <strong className="text-blue-700 dark:text-blue-400">You'll work on:</strong>
                      <ul className="space-y-1 text-body-color">
                        <li>🚶‍♂️ Walking and balance training</li>
                        <li>💪 Strengthening weak muscles</li>
                        <li>🎯 Coordination exercises</li>
                        <li>🛡️ Fall prevention strategies</li>
                        <li>🦽 Using mobility aids safely</li>
                      </ul>
                    </div>
                  </div>

                  {/* Occupational Therapy */}
                  <div className="group rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-6 transition-all hover:border-green-300 hover:shadow-lg dark:border-green-800 dark:from-green-900/20 dark:to-green-800/20">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-full bg-green-600 p-2 text-white">
                        🏠
                      </div>
                      <h4 className="text-xl font-bold text-green-700 dark:text-green-400">
                        Occupational Therapy
                      </h4>
                    </div>
                    <p className="mb-4 text-body-color">
                      Relearning daily activities and adapting your environment for independence.
                    </p>
                    <div className="space-y-2">
                      <strong className="text-green-700 dark:text-green-400">You'll master:</strong>
                      <ul className="space-y-1 text-body-color">
                        <li>👔 Dressing and grooming</li>
                        <li>🍽️ Eating and cooking</li>
                        <li>🏡 Home modifications</li>
                        <li>💼 Work-related skills</li>
                        <li>🔧 Adaptive equipment use</li>
                      </ul>
                    </div>
                  </div>

                  {/* Speech Therapy */}
                  <div className="group rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 p-6 transition-all hover:border-purple-300 hover:shadow-lg dark:border-purple-800 dark:from-purple-900/20 dark:to-purple-800/20">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-full bg-purple-600 p-2 text-white">
                        💬
                      </div>
                      <h4 className="text-xl font-bold text-purple-700 dark:text-purple-400">
                        Speech-Language Therapy
                      </h4>
                    </div>
                    <p className="mb-4 text-body-color">
                      Restoring communication abilities and ensuring safe swallowing.
                    </p>
                    <div className="space-y-2">
                      <strong className="text-purple-700 dark:text-purple-400">You'll improve:</strong>
                      <ul className="space-y-1 text-body-color">
                        <li>🗣️ Speech clarity and fluency</li>
                        <li>📖 Reading and writing skills</li>
                        <li>🥤 Safe swallowing techniques</li>
                        <li>📱 Alternative communication</li>
                        <li>🧠 Cognitive communication</li>
                      </ul>
                    </div>
                  </div>

                  {/* Psychological Support */}
                  <div className="group rounded-xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-6 transition-all hover:border-orange-300 hover:shadow-lg dark:border-orange-800 dark:from-orange-900/20 dark:to-orange-800/20">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-full bg-orange-600 p-2 text-white">
                        🧠
                      </div>
                      <h4 className="text-xl font-bold text-orange-700 dark:text-orange-400">
                        Mental Health Support
                      </h4>
                    </div>
                    <p className="mb-4 text-body-color">
                      Supporting your emotional well-being and mental health throughout recovery.
                    </p>
                    <div className="space-y-2">
                      <strong className="text-orange-700 dark:text-orange-400">You'll develop:</strong>
                      <ul className="space-y-1 text-body-color">
                        <li>😌 Coping strategies for emotions</li>
                        <li>🎯 Motivation and goal-setting</li>
                        <li>👨‍👩‍👧‍👦 Family communication skills</li>
                        <li>🧘‍♀️ Stress management techniques</li>
                        <li>🌈 Renewed sense of purpose</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Challenges */}
              <div className="mb-12 rounded-lg bg-yellow-50 p-8 dark:bg-yellow-900/20">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Common Recovery Challenges
                </h3>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Physical Effects</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Weakness or paralysis on one side</li>
                      <li>• Balance and coordination problems</li>
                      <li>• Fatigue and low energy</li>
                      <li>• Swallowing difficulties</li>
                      <li>• Vision problems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Cognitive Effects</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Memory problems</li>
                      <li>• Difficulty concentrating</li>
                      <li>• Problem-solving challenges</li>
                      <li>• Language and communication issues</li>
                      <li>• Emotional changes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Emotional Effects</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Depression and anxiety</li>
                      <li>• Frustration and anger</li>
                      <li>• Loss of confidence</li>
                      <li>• Grief over losses</li>
                      <li>• Social isolation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Daily Living</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Self-care activities</li>
                      <li>• Household tasks</li>
                      <li>• Driving and transportation</li>
                      <li>• Work and leisure activities</li>
                      <li>• Relationship changes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Recovery Tips */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  Tips for Successful Recovery
                </h3>
                
                <div className="space-y-6">
                  <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
                    <h4 className="mb-3 text-lg font-semibold text-blue-600 dark:text-blue-400">
                      Stay Motivated
                    </h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Set realistic, achievable goals</li>
                      <li>• Celebrate small victories</li>
                      <li>• Focus on progress, not perfection</li>
                      <li>• Stay connected with support network</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
                    <h4 className="mb-3 text-lg font-semibold text-green-600 dark:text-green-400">
                      Be Consistent
                    </h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Attend all therapy sessions</li>
                      <li>• Practice exercises at home</li>
                      <li>• Follow medication schedules</li>
                      <li>• Maintain healthy lifestyle habits</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-900/20">
                    <h4 className="mb-3 text-lg font-semibold text-purple-600 dark:text-purple-400">
                      Build Your Team
                    </h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Work closely with healthcare providers</li>
                      <li>• Involve family and friends</li>
                      <li>• Join support groups</li>
                      <li>• Consider peer mentorship</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-900/20">
                    <h4 className="mb-3 text-lg font-semibold text-orange-600 dark:text-orange-400">
                      Adapt and Overcome
                    </h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Learn new ways to do familiar tasks</li>
                      <li>• Use assistive devices when helpful</li>
                      <li>• Modify your environment for safety</li>
                      <li>• Be patient with the process</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="mb-12 rounded-lg bg-gray-50 p-8 dark:bg-gray-800">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Recovery Resources
                </h3>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Professional Support</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Rehabilitation hospitals</li>
                      <li>• Outpatient therapy centers</li>
                      <li>• Home health services</li>
                      <li>• Stroke support groups</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Technology Aids</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Communication apps</li>
                      <li>• Mobility devices</li>
                      <li>• Home safety equipment</li>
                      <li>• Exercise and therapy apps</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Community Resources</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Transportation services</li>
                      <li>• Meal delivery programs</li>
                      <li>• Recreational activities</li>
                      <li>• Volunteer opportunities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Financial Assistance</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Insurance coverage review</li>
                      <li>• Disability benefits</li>
                      <li>• Equipment assistance programs</li>
                      <li>• Charitable organizations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Success Stories Preview */}
              <div className="mb-12 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 p-8 text-white">
                <h3 className="mb-6 text-2xl font-bold text-center">Recovery Success Stories</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                    <div className="mb-2 text-lg font-semibold">"I'm walking again!"</div>
                    <div className="text-sm opacity-90">Sarah, 6 months post-stroke, regained mobility through dedicated physical therapy</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                    <div className="mb-2 text-lg font-semibold">"Back to work and loving life"</div>
                    <div className="text-sm opacity-90">Michael returned to his career as a teacher after comprehensive rehabilitation</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-white shadow-2xl">
                  <div className="mb-4 text-4xl">🌟</div>
                  <h3 className="mb-4 text-2xl font-bold">Your Recovery Journey Starts Today</h3>
                  <p className="mb-6 text-lg opacity-90">
                    Every stroke survivor's journey is unique, but with the right support, dedication, and hope, 
                    remarkable recovery is possible. You are stronger than you know.
                  </p>
                  <div className="mb-4 text-xl font-semibold">
                    Every step forward is a victory 🏆
                  </div>
                  <div className="text-sm opacity-75">
                    Remember: Recovery isn't just about getting back to where you were—it's about discovering new strengths.
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

export default RecoveryPage;