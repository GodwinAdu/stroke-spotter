import Breadcrumb from "@/components/common/Breadcrumbs";

const PreventionPage = () => {
  return (
    <>
      <Breadcrumb 
        pageName="Stroke Prevention" 
        description="Learn how to reduce your risk of stroke through lifestyle changes" 
      />
      
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              
              {/* Hero Section */}
              <div className="mb-12 text-center">
                <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-2 text-sm font-medium text-green-800 dark:from-green-900/30 dark:to-emerald-900/30 dark:text-green-400">
                  🛡️ Prevention is Power • Take Control • Stay Healthy
                </div>
                <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl">
                  Stroke Prevention 🎯
                </h2>
                <p className="text-xl text-body-color">
                  Prevention is the best medicine. Take charge of your health and dramatically 
                  reduce your stroke risk with these life-changing strategies.
                </p>
              </div>

              {/* Key Statistics */}
              <div className="mb-12 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center dark:from-green-900/20 dark:to-emerald-900/20">
                  <div className="mb-2 text-4xl">🛡️</div>
                  <div className="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">80%</div>
                  <div className="font-medium text-gray-700 dark:text-gray-300">of strokes are preventable</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center dark:from-blue-900/20 dark:to-cyan-900/20">
                  <div className="mb-2 text-4xl">📈</div>
                  <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">50%</div>
                  <div className="font-medium text-gray-700 dark:text-gray-300">risk reduction possible</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 text-center dark:from-purple-900/20 dark:to-pink-900/20">
                  <div className="mb-2 text-4xl">🎯</div>
                  <div className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">7</div>
                  <div className="font-medium text-gray-700 dark:text-gray-300">key prevention strategies</div>
                </div>
              </div>

              {/* Prevention Strategies */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  7 Key Prevention Strategies
                </h3>
                
                <div className="space-y-8">
                  
                  {/* Blood Pressure */}
                  <div className="group rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-6 transition-all hover:border-red-300 hover:shadow-lg dark:border-red-800 dark:from-red-900/20 dark:to-red-800/20">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white shadow-lg">
                        🩸
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-3 text-xl font-bold text-red-700 dark:text-red-400">
                          Control Blood Pressure
                        </h4>
                        <p className="mb-4 text-body-color">
                          The #1 controllable risk factor. Keeping BP under control can cut stroke risk in half!
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/30">
                            <strong className="text-red-700 dark:text-red-400">Daily Actions:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>📊 Monitor at home regularly</li>
                              <li>💊 Take meds as prescribed</li>
                              <li>🧂 Limit sodium intake</li>
                              <li>🏃♂️ Stay physically active</li>
                            </ul>
                          </div>
                          <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/30">
                            <strong className="text-red-700 dark:text-red-400">Target Goals:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>🎯 Normal: Less than 120/80</li>
                              <li>📅 Check monthly if elevated</li>
                              <li>👩‍⚕️ Partner with your doctor</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cholesterol */}
                  <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl font-bold text-orange-600 dark:bg-orange-900/30">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                          Manage Cholesterol
                        </h4>
                        <p className="mb-4 text-body-color">
                          High cholesterol can lead to blocked arteries. Keep total cholesterol below 200 mg/dL.
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <strong className="text-black dark:text-white">Dietary Changes:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>• Eat more fiber-rich foods</li>
                              <li>• Choose lean proteins</li>
                              <li>• Limit saturated fats</li>
                              <li>• Include omega-3 fatty acids</li>
                            </ul>
                          </div>
                          <div>
                            <strong className="text-black dark:text-white">Lifestyle:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>• Exercise 30 min/day</li>
                              <li>• Maintain healthy weight</li>
                              <li>• Don't smoke</li>
                              <li>• Take statins if prescribed</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Diabetes */}
                  <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600 dark:bg-green-900/30">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                          Control Diabetes
                        </h4>
                        <p className="mb-4 text-body-color">
                          Diabetes doubles stroke risk. Keep blood sugar levels in target range.
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <strong className="text-black dark:text-white">Blood Sugar Goals:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>• A1C: Less than 7%</li>
                              <li>• Fasting: 80-130 mg/dL</li>
                              <li>• After meals: Less than 180 mg/dL</li>
                            </ul>
                          </div>
                          <div>
                            <strong className="text-black dark:text-white">Management:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>• Monitor blood sugar regularly</li>
                              <li>• Take medications as prescribed</li>
                              <li>• Follow diabetic diet</li>
                              <li>• Exercise regularly</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Smoking */}
                  <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-xl font-bold text-purple-600 dark:bg-purple-900/30">
                        4
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                          Quit Smoking
                        </h4>
                        <p className="mb-4 text-body-color">
                          Smoking doubles stroke risk. Quitting reduces risk immediately and continues to improve over time.
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <strong className="text-black dark:text-white">Quit Benefits:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>• 24 hours: Risk starts dropping</li>
                              <li>• 1 year: Risk cut in half</li>
                              <li>• 5 years: Risk like non-smoker</li>
                            </ul>
                          </div>
                          <div>
                            <strong className="text-black dark:text-white">Get Help:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>• Call 1-800-QUIT-NOW</li>
                              <li>• Use nicotine replacement</li>
                              <li>• Join support groups</li>
                              <li>• Ask doctor about medications</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Exercise */}
                  <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600 dark:bg-blue-900/30">
                        5
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                          Exercise Regularly
                        </h4>
                        <p className="mb-4 text-body-color">
                          Regular physical activity reduces stroke risk by 25-30%. Aim for 150 minutes per week.
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <strong className="text-black dark:text-white">Recommended Activities:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>• Brisk walking</li>
                              <li>• Swimming</li>
                              <li>• Cycling</li>
                              <li>• Dancing</li>
                            </ul>
                          </div>
                          <div>
                            <strong className="text-black dark:text-white">Weekly Goals:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>• 150 min moderate activity</li>
                              <li>• OR 75 min vigorous activity</li>
                              <li>• 2 days strength training</li>
                              <li>• Start slowly, build up</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Diet */}
                  <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-xl font-bold text-yellow-600 dark:bg-yellow-900/30">
                        6
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                          Eat a Healthy Diet
                        </h4>
                        <p className="mb-4 text-body-color">
                          A heart-healthy diet reduces stroke risk. Focus on fruits, vegetables, and whole grains.
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <strong className="text-green-600">Eat More:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>• Fruits and vegetables (5+ servings)</li>
                              <li>• Whole grains</li>
                              <li>• Lean proteins (fish, poultry)</li>
                              <li>• Nuts and legumes</li>
                            </ul>
                          </div>
                          <div>
                            <strong className="text-red-600">Eat Less:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>• Sodium (less than 2,300mg/day)</li>
                              <li>• Saturated fats</li>
                              <li>• Processed foods</li>
                              <li>• Added sugars</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alcohol */}
                  <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600 dark:bg-indigo-900/30">
                        7
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                          Limit Alcohol
                        </h4>
                        <p className="mb-4 text-body-color">
                          Excessive alcohol increases stroke risk. Moderate consumption may have some benefits.
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <strong className="text-black dark:text-white">Moderate Drinking:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>• Women: 1 drink per day</li>
                              <li>• Men: 2 drinks per day</li>
                              <li>• 1 drink = 12oz beer, 5oz wine</li>
                            </ul>
                          </div>
                          <div>
                            <strong className="text-black dark:text-white">Warning Signs:</strong>
                            <ul className="mt-2 space-y-1 text-body-color">
                              <li>• Binge drinking increases risk</li>
                              <li>• Heavy drinking damages arteries</li>
                              <li>• Consider abstaining if at high risk</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Risk Factors */}
              <div className="mb-12 rounded-lg bg-gray-50 p-8 dark:bg-gray-800">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Other Important Factors
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Sleep Quality</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Get 7-9 hours per night</li>
                      <li>• Treat sleep apnea</li>
                      <li>• Maintain regular sleep schedule</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Stress Management</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Practice relaxation techniques</li>
                      <li>• Exercise regularly</li>
                      <li>• Seek support when needed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Regular Check-ups</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Annual physical exams</li>
                      <li>• Monitor blood pressure</li>
                      <li>• Check cholesterol levels</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Medications</h4>
                    <ul className="space-y-1 text-body-color">
                      <li>• Take as prescribed</li>
                      <li>• Don't skip doses</li>
                      <li>• Discuss with doctor regularly</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 p-8 text-white shadow-2xl">
                  <div className="mb-4 text-5xl">🌱</div>
                  <h3 className="mb-4 text-3xl font-bold">Your Prevention Journey Starts Now!</h3>
                  <p className="mb-6 text-lg opacity-90">
                    Every healthy choice you make today is an investment in your future. 
                    Start with one small change and build momentum.
                  </p>
                  <div className="mb-4 text-xl font-semibold">
                    🛡️ Prevention is the Ultimate Superpower 💪
                  </div>
                  <div className="text-sm opacity-75">
                    Small Steps • Big Impact • Healthier Tomorrow
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

export default PreventionPage;