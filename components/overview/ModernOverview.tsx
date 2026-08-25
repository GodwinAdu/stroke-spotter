"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Users, 
  Target, 
  Award, 
  Globe, 
  ArrowRight, 
  Play,
  CheckCircle,
  Clock,
  Shield,
  Zap
} from "lucide-react";

export default function ModernOverview() {
  const [activeTab, setActiveTab] = useState(0);

  const heroStats = [
    { number: "500K+", label: "Lives Educated", icon: Users },
    { number: "98%", label: "Success Rate", icon: Target },
    { number: "24/7", label: "Emergency Support", icon: Clock },
    { number: "50+", label: "Countries Reached", icon: Globe }
  ];

  const missionTabs = [
    {
      title: "Our Mission",
      icon: Heart,
      content: {
        heading: "Saving Lives Through Education",
        description: "We empower communities worldwide with life-saving stroke recognition skills using the F.A.S.T. method. Every second counts when it comes to stroke - our mission is to ensure everyone knows how to spot the signs and act quickly.",
        points: [
          "Educate communities about stroke symptoms",
          "Promote the F.A.S.T. recognition method",
          "Reduce stroke-related disabilities and deaths",
          "Build a global network of stroke awareness advocates"
        ],
        image: "/overview/our-member.jpg"
      }
    },
    {
      title: "Our Vision",
      icon: Brain,
      content: {
        heading: "A World Where No Stroke Goes Unrecognized",
        description: "We envision a future where every person can immediately recognize stroke symptoms and take swift action. Through education, technology, and community engagement, we're building a world where stroke response is as instinctive as calling for help.",
        points: [
          "Universal stroke recognition knowledge",
          "Instant emergency response capabilities",
          "Zero preventable stroke disabilities",
          "Global stroke awareness network"
        ],
        image: "/overview/why-join-us.jpg"
      }
    },
    {
      title: "Our Impact",
      icon: Award,
      content: {
        heading: "Transforming Communities Worldwide",
        description: "Since our founding, we've trained hundreds of thousands of people in stroke recognition. Our programs have directly contributed to faster emergency responses and better patient outcomes across the globe.",
        points: [
          "Reduced average response time by 40%",
          "Trained 500,000+ community members",
          "Partnered with 200+ healthcare facilities",
          "Available in 15+ languages"
        ],
        image: "/overview/membership.jpg"
      }
    }
  ];

  const keyPrograms = [
    {
      title: "F.A.S.T. Training",
      description: "Comprehensive stroke recognition training for individuals and communities",
      icon: Zap,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      link: "/training",
      features: ["Interactive simulations", "Certification programs", "Mobile training units"]
    },
    {
      title: "Community Outreach",
      description: "Grassroots education programs reaching underserved communities",
      icon: Users,
      color: "from-blue-500 to-blue-600", 
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      link: "/join-us",
      features: ["Local workshops", "School programs", "Healthcare partnerships"]
    },
    {
      title: "Research & Development",
      description: "Advancing stroke prevention and recognition through research",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20", 
      link: "/research",
      features: ["Clinical studies", "Technology innovation", "Best practices development"]
    },
    {
      title: "Emergency Response",
      description: "24/7 support and guidance for stroke emergencies",
      icon: Shield,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      link: "/emergency",
      features: ["Hotline support", "Emergency protocols", "First responder training"]
    }
  ];

  const membershipBenefits = [
    "Access to exclusive training materials",
    "Certification in stroke recognition",
    "Monthly webinars with medical experts", 
    "Community support network",
    "Priority emergency consultation",
    "Research participation opportunities"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-purple-600/10 to-blue-600/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-100 to-purple-100 dark:from-red-900/30 dark:to-purple-900/30 rounded-full text-red-600 dark:text-red-400 text-sm font-semibold mb-6">
              🏥 About StrokeSpotter Foundation
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Saving Lives Through
              <span className="block">Stroke Education</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              We're a global foundation dedicated to reducing stroke-related deaths and disabilities 
              through education, awareness, and community empowerment. Every second counts - we make sure everyone knows how to act F.A.S.T.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/join-us">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <Users className="w-5 h-5 mr-2" />
                  Join Our Mission
                </Button>
              </Link>
              
              <Link href="#programs">
                <Button variant="outline" size="lg" className="border-2 border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 px-8 py-4 rounded-2xl font-semibold">
                  <Play className="w-5 h-5 mr-2" />
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {heroStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Impact Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built on the belief that education saves lives and every person deserves to know how to recognize a stroke.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {missionTabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-xl scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.title}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {missionTabs[activeTab].content.heading}
                </h3>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {missionTabs[activeTab].content.description}
                </p>

                <ul className="space-y-4">
                  {missionTabs[activeTab].content.points.map((point, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <Image
                  src={missionTabs[activeTab].content.image}
                  alt={missionTabs[activeTab].title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section id="programs" className="py-20 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Our Key Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive initiatives designed to educate, empower, and save lives through stroke awareness and prevention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className={`${program.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={program.link}>
                    <Button className={`bg-gradient-to-r ${program.color} text-white hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Join Our Community
            </h2>
            <p className="text-xl opacity-95 mb-12 max-w-3xl mx-auto">
              Become part of a global network dedicated to stroke prevention and education. 
              Together, we can save more lives and build stronger communities.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {membershipBenefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-green-300 mx-auto mb-3" />
                  <p className="text-white/90">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/ssf-membership">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <Users className="w-5 h-5 mr-2" />
                  Become a Member
                </Button>
              </Link>
              
              <Link href="/why-join-us">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 rounded-2xl">
                  Why Join Us?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}