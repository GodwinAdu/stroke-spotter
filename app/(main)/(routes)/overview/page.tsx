import Breadcrumb from "@/components/common/Breadcrumbs";

const OverviewPage = () => {
  return (
    <>
      <Breadcrumb 
        pageName="About SSFF" 
        description="Learn about our mission to prevent stroke and save lives" 
      />
      
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              
              {/* President's Welcome */}
              <div className="mb-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <div className="mb-6 text-center">
                  <div className="mb-4 text-5xl">👋</div>
                  <h2 className="mb-4 text-3xl font-bold">President's Welcome Message</h2>
                </div>
                <div className="space-y-4 text-lg opacity-90">
                  <p>
                    Welcome to the Spot Stroke Fast Foundation (SSFF). Since our founding in 2018, SSFF has been dedicated to leading efforts in stroke prevention, control, management, and rehabilitation. Our foundation aims to educate communities, raise awareness, and provide support to those affected by stroke.
                  </p>
                  <p>
                    As a proud active member of the World Stroke Organization (WSO) since 2023, SSFF connects local initiatives with global best practices to reduce the impact of stroke and promote healthier communities.
                  </p>
                  <p>
                    Whether you are a supporter, volunteer, partner, or someone seeking information, we welcome you. Together, we can empower individuals, educate communities, and save lives through knowledge, action, and compassionate support.
                  </p>
                  <div className="mt-6 text-right">
                    <div className="font-semibold">— President, SSFF</div>
                  </div>
                </div>
              </div>

              {/* Foundation Stats */}
              <div className="mb-12 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center dark:from-green-900/20 dark:to-emerald-900/20">
                  <div className="mb-2 text-3xl">📅</div>
                  <div className="mb-2 text-2xl font-bold text-green-600 dark:text-green-400">2018</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Founded</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center dark:from-blue-900/20 dark:to-cyan-900/20">
                  <div className="mb-2 text-3xl">🌍</div>
                  <div className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">WSO</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Member since 2023</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 text-center dark:from-purple-900/20 dark:to-pink-900/20">
                  <div className="mb-2 text-3xl">❤️</div>
                  <div className="mb-2 text-2xl font-bold text-purple-600 dark:text-purple-400">Lives</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Saved Daily</div>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="mb-12 grid gap-8 md:grid-cols-2">
                <div className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 dark:border-blue-800 dark:from-blue-900/20 dark:to-blue-800/20">
                  <div className="mb-4 text-4xl">🎯</div>
                  <h3 className="mb-4 text-2xl font-bold text-blue-700 dark:text-blue-400">Mission</h3>
                  <p className="text-body-color">
                    To be the lead organization on matters pertaining to stroke prevention, control, management, and rehabilitation.
                  </p>
                </div>
                <div className="rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 p-8 dark:border-purple-800 dark:from-purple-900/20 dark:to-purple-800/20">
                  <div className="mb-4 text-4xl">👁️</div>
                  <h3 className="mb-4 text-2xl font-bold text-purple-700 dark:text-purple-400">Vision</h3>
                  <p className="text-body-color">
                    To ensure the youth and aged are well-educated on the prevention, control, and management of stroke and to provide support to people who have developed stroke.
                  </p>
                </div>
              </div>

              {/* About the Foundation */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  About the Foundation 🏛️
                </h3>
                <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 dark:from-gray-800 dark:to-gray-900">
                  <p className="mb-6 text-lg text-body-color">
                    Spot Stroke Fast Foundation (SSFF) is a nonprofit organization focused on stroke awareness, prevention, and community education. Established in 2018, SSFF works with individuals, schools, health institutions, and community groups to provide essential knowledge and support relating to stroke prevention and rehabilitation.
                  </p>
                  <p className="text-lg text-body-color">
                    We aim to reduce the burden of stroke by equipping the public with the information and tools needed to recognize signs early, respond appropriately, and support survivors through recovery.
                  </p>
                </div>
              </div>

              {/* What We Do */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  What We Do 🚀
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 dark:from-green-900/20 dark:to-green-800/20">
                    <div className="mb-3 text-3xl">🏘️</div>
                    <h4 className="mb-3 font-semibold text-green-700 dark:text-green-400">Community Outreach</h4>
                    <p className="text-sm text-body-color">Conduct community outreach programs</p>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 dark:from-blue-900/20 dark:to-blue-800/20">
                    <div className="mb-3 text-3xl">📚</div>
                    <h4 className="mb-3 font-semibold text-blue-700 dark:text-blue-400">Health Education</h4>
                    <p className="text-sm text-body-color">Offer health education on stroke risk factors and early recognition</p>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 dark:from-purple-900/20 dark:to-purple-800/20">
                    <div className="mb-3 text-3xl">🤝</div>
                    <h4 className="mb-3 font-semibold text-purple-700 dark:text-purple-400">Partnerships</h4>
                    <p className="text-sm text-body-color">Partner with health professionals and institutions</p>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 dark:from-orange-900/20 dark:to-orange-800/20">
                    <div className="mb-3 text-3xl">🎉</div>
                    <h4 className="mb-3 font-semibold text-orange-700 dark:text-orange-400">Events & Campaigns</h4>
                    <p className="text-sm text-body-color">Host events, screenings, and awareness campaigns</p>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-red-50 to-red-100 p-6 dark:from-red-900/20 dark:to-red-800/20">
                    <div className="mb-3 text-3xl">💪</div>
                    <h4 className="mb-3 font-semibold text-red-700 dark:text-red-400">Survivor Support</h4>
                    <p className="text-sm text-body-color">Provide support resources to stroke survivors and their families</p>
                  </div>
                </div>
              </div>

              {/* Call for Volunteers */}
              <div className="text-center">
                <div className="rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 p-8 text-white shadow-2xl">
                  <div className="mb-4 text-5xl">🙋‍♀️</div>
                  <h3 className="mb-4 text-3xl font-bold">Join Our Mission</h3>
                  <p className="mb-6 text-lg opacity-90">
                    We welcome individuals, groups, and organizations who share our passion for community health. Together, we can make a lasting impact and save lives.
                  </p>
                  <div className="mb-6">
                    <h4 className="mb-4 text-xl font-semibold">You can support us by:</h4>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-lg bg-white/10 p-3 backdrop-blur">
                        <div className="font-medium">🤲 Volunteering at our programs</div>
                      </div>
                      <div className="rounded-lg bg-white/10 p-3 backdrop-blur">
                        <div className="font-medium">📢 Assisting with outreach</div>
                      </div>
                      <div className="rounded-lg bg-white/10 p-3 backdrop-blur">
                        <div className="font-medium">🤝 Partnering with us</div>
                      </div>
                      <div className="rounded-lg bg-white/10 p-3 backdrop-blur">
                        <div className="font-medium">📱 Helping spread awareness</div>
                      </div>
                    </div>
                  </div>
                  <button className="rounded-lg bg-white/20 px-8 py-3 font-semibold backdrop-blur transition-all hover:bg-white/30">
                    Get Involved Today 🚀
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverviewPage;
