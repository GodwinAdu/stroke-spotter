import Breadcrumb from "@/components/common/Breadcrumbs";

const ResearchPage = () => {
  const researchData = [
    {
      id: 1,
      title: "Advanced Stroke Detection Using AI Technology",
      authors: "Dr. Sarah Johnson, Dr. Michael Chen",
      date: "2024",
      category: "Technology",
      summary: "Revolutionary AI-powered stroke detection system that can identify stroke symptoms 40% faster than traditional methods.",
      tags: ["AI", "Detection", "Technology"],
      status: "Published"
    },
    {
      id: 2,
      title: "Impact of F.A.S.T. Training on Community Response Times",
      authors: "Dr. Emily Rodriguez, Dr. James Wilson",
      date: "2023",
      category: "Community Health",
      summary: "Comprehensive study showing 60% improvement in emergency response times after community F.A.S.T. training programs.",
      tags: ["F.A.S.T.", "Training", "Community"],
      status: "Published"
    },
    {
      id: 3,
      title: "Telemedicine in Rural Stroke Care: Breaking Barriers",
      authors: "Dr. Lisa Thompson, Dr. Robert Kim",
      date: "2024",
      category: "Telemedicine",
      summary: "Analysis of telemedicine effectiveness in providing stroke care to underserved rural communities.",
      tags: ["Telemedicine", "Rural Care", "Access"],
      status: "In Progress"
    },
    {
      id: 4,
      title: "Rehabilitation Robotics: The Future of Stroke Recovery",
      authors: "Dr. David Park, Dr. Maria Santos",
      date: "2023",
      category: "Rehabilitation",
      summary: "Innovative robotic therapy systems showing 75% improvement in motor function recovery rates.",
      tags: ["Robotics", "Rehabilitation", "Recovery"],
      status: "Published"
    }
  ];

  const categories = ["All", "Technology", "Community Health", "Telemedicine", "Rehabilitation"];

  return (
    <>
      <Breadcrumb 
        pageName="Research" 
        description="Advancing stroke care through cutting-edge research and innovation" 
      />
      
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              
              {/* Hero Section */}
              <div className="mb-12 text-center">
                <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-2 text-sm font-medium text-purple-800 dark:from-purple-900/30 dark:to-blue-900/30 dark:text-purple-400">
                  🔬 Innovation • Research • Progress
                </div>
                <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl">
                  Stroke Research Hub 🧪
                </h2>
                <p className="text-xl text-body-color">
                  Pioneering research that transforms stroke prevention, detection, and recovery. 
                  Discover the latest breakthroughs shaping the future of stroke care.
                </p>
              </div>

              {/* Research Stats */}
              <div className="mb-12 grid gap-6 md:grid-cols-4">
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center dark:from-blue-900/20 dark:to-cyan-900/20">
                  <div className="mb-2 text-3xl">📊</div>
                  <div className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Active Studies</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center dark:from-green-900/20 dark:to-emerald-900/20">
                  <div className="mb-2 text-3xl">👥</div>
                  <div className="mb-2 text-2xl font-bold text-green-600 dark:text-green-400">25</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Research Partners</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 text-center dark:from-purple-900/20 dark:to-pink-900/20">
                  <div className="mb-2 text-3xl">📚</div>
                  <div className="mb-2 text-2xl font-bold text-purple-600 dark:text-purple-400">100+</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Publications</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-orange-50 to-red-50 p-6 text-center dark:from-orange-900/20 dark:to-red-900/20">
                  <div className="mb-2 text-3xl">🏆</div>
                  <div className="mb-2 text-2xl font-bold text-orange-600 dark:text-orange-400">15</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Awards Won</div>
                </div>
              </div>

              {/* Research Categories */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  Research Categories 🎯
                </h3>
                
                <div className="mb-8 flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="rounded-full bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-2 text-sm font-medium text-gray-700 transition-all hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 dark:hover:text-blue-400"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Research Grid */}
              <div className="mb-12">
                <h3 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  Latest Research 📋
                </h3>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {researchData.map((research) => (
                    <div
                      key={research.id}
                      className="group rounded-xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition-all hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900"
                    >
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                            research.status === 'Published' 
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                          }`}>
                            {research.status}
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                            {research.category}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{research.date}</div>
                      </div>
                      
                      <h4 className="mb-3 text-xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {research.title}
                      </h4>
                      
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        By {research.authors}
                      </p>
                      
                      <p className="mb-4 text-body-color">
                        {research.summary}
                      </p>
                      
                      <div className="mb-4 flex flex-wrap gap-2">
                        {research.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-2 text-sm font-medium text-white transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-lg">
                        Read Full Study 📖
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Focus Areas */}
              <div className="mb-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <h3 className="mb-6 text-3xl font-bold">Our Research Focus 🎯</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 text-xl font-semibold">🤖 AI & Technology</h4>
                    <p className="mb-4 opacity-90">
                      Developing cutting-edge AI systems for faster stroke detection and diagnosis.
                    </p>
                    <ul className="space-y-1 text-sm opacity-80">
                      <li>• Machine learning algorithms</li>
                      <li>• Wearable monitoring devices</li>
                      <li>• Predictive analytics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-xl font-semibold">🏥 Treatment Innovation</h4>
                    <p className="mb-4 opacity-90">
                      Advancing treatment methods and rehabilitation technologies.
                    </p>
                    <ul className="space-y-1 text-sm opacity-80">
                      <li>• Minimally invasive procedures</li>
                      <li>• Robotic rehabilitation</li>
                      <li>• Personalized therapy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-xl font-semibold">🌍 Global Health</h4>
                    <p className="mb-4 opacity-90">
                      Improving stroke care accessibility worldwide.
                    </p>
                    <ul className="space-y-1 text-sm opacity-80">
                      <li>• Telemedicine solutions</li>
                      <li>• Community health programs</li>
                      <li>• Healthcare equity</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-xl font-semibold">🧬 Prevention Science</h4>
                    <p className="mb-4 opacity-90">
                      Understanding risk factors and prevention strategies.
                    </p>
                    <ul className="space-y-1 text-sm opacity-80">
                      <li>• Genetic research</li>
                      <li>• Lifestyle interventions</li>
                      <li>• Population studies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Collaboration Section */}
              <div className="mb-12 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 dark:from-green-900/20 dark:to-emerald-900/20">
                <h3 className="mb-6 text-2xl font-bold text-green-700 dark:text-green-400">
                  Research Partnerships 🤝
                </h3>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mb-3 text-3xl">🏛️</div>
                    <div className="font-semibold text-green-700 dark:text-green-400">Universities</div>
                    <div className="text-sm text-body-color">Leading academic institutions</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-3 text-3xl">🏥</div>
                    <div className="font-semibold text-green-700 dark:text-green-400">Hospitals</div>
                    <div className="text-sm text-body-color">Major medical centers</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-3 text-3xl">🔬</div>
                    <div className="font-semibold text-green-700 dark:text-green-400">Labs</div>
                    <div className="text-sm text-body-color">Research laboratories</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 p-8 text-white shadow-2xl">
                  <div className="mb-4 text-5xl">🚀</div>
                  <h3 className="mb-4 text-3xl font-bold">Join Our Research Mission</h3>
                  <p className="mb-6 text-lg opacity-90">
                    Be part of groundbreaking research that's changing lives. Whether you're a researcher, 
                    clinician, or passionate advocate, there's a place for you in our mission.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button className="rounded-lg bg-white/20 px-6 py-3 font-medium backdrop-blur transition-all hover:bg-white/30">
                      📧 Collaborate With Us
                    </button>
                    <button className="rounded-lg bg-white/20 px-6 py-3 font-medium backdrop-blur transition-all hover:bg-white/30">
                      📋 Submit Research
                    </button>
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

export default ResearchPage;