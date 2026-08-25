"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  Heart, 
  Brain, 
  Shield, 
  CheckCircle, 
  Crown, 
  Award, 
  Globe,
  Phone,
  Mail,
  UserPlus
} from "lucide-react";

export default function ModernMembership() {
  const [selectedPlan, setSelectedPlan] = useState("advocate");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    country: "",
    motivation: ""
  });

  const membershipTiers = [
    {
      id: "supporter",
      name: "Supporter",
      price: "Free",
      icon: Heart,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      popular: false,
      description: "Perfect for individuals wanting to learn stroke recognition",
      features: [
        "Basic F.A.S.T. training materials",
        "Monthly newsletter updates",
        "Access to online resources",
        "Community forum participation",
        "Emergency contact list"
      ]
    },
    {
      id: "advocate",
      name: "Advocate",
      price: "$25/year",
      icon: Users,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      popular: true,
      description: "For active community members and educators",
      features: [
        "All Supporter benefits",
        "Advanced training certification",
        "Monthly expert webinars",
        "Training material downloads",
        "Priority email support",
        "Community event invitations",
        "Advocacy toolkit access"
      ]
    },
    {
      id: "champion",
      name: "Champion",
      price: "$100/year",
      icon: Crown,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      popular: false,
      description: "For healthcare professionals and organization leaders",
      features: [
        "All Advocate benefits",
        "Professional certification",
        "Direct expert consultation",
        "Custom training programs",
        "Research participation",
        "Speaking opportunities",
        "Leadership network access",
        "Annual conference invitation"
      ]
    }
  ];

  const whyJoinReasons = [
    {
      icon: Brain,
      title: "Save Lives",
      description: "Learn to recognize stroke symptoms and help save lives in your community"
    },
    {
      icon: Shield,
      title: "Expert Training",
      description: "Access world-class stroke education from medical professionals"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with stroke advocates and survivors worldwide"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn recognized credentials in stroke recognition and response"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Membership application:", { ...formData, plan: selectedPlan });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-100 to-purple-100 dark:from-red-900/30 dark:to-purple-900/30 rounded-full text-red-600 dark:text-red-400 text-sm font-semibold mb-6">
              🤝 Join Our Mission
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Become a Stroke Life Saver
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Join thousands of advocates worldwide making a difference in stroke prevention. 
              Together, we can save lives and build stronger communities.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-black text-red-600 mb-2">500K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Members Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-600 mb-2">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-green-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Why Join Our Community?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="text-center bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Choose Your Impact Level
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {membershipTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.id}
                  className={`relative ${tier.bgColor} rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                    selectedPlan === tier.id ? 'ring-4 ring-red-500 scale-105' : ''
                  } ${tier.popular ? 'shadow-2xl' : 'shadow-xl hover:shadow-2xl'}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {tier.name}
                    </h3>
                    
                    <div className="text-4xl font-black text-gray-900 dark:text-white mb-4">
                      {tier.price}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => setSelectedPlan(tier.id)}
                    className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                      selectedPlan === tier.id
                        ? `bg-gradient-to-r ${tier.color} text-white shadow-xl`
                        : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 hover:border-red-500'
                    }`}
                  >
                    {selectedPlan === tier.id ? 'Selected' : 'Select Plan'}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900 dark:text-white">
                Complete Your Application
              </h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Selected Plan: {membershipTiers.find(t => t.id === selectedPlan)?.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {membershipTiers.find(t => t.id === selectedPlan)?.price}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-red-500 dark:focus:border-red-400 h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-red-500 dark:focus:border-red-400 h-12"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-red-500 dark:focus:border-red-400 h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Country *
                    </label>
                    <Input
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="Enter your country"
                      className="rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-red-500 dark:focus:border-red-400 h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Profession/Occupation
                  </label>
                  <Input
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    placeholder="e.g., Healthcare Worker, Teacher, Student"
                    className="rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-red-500 dark:focus:border-red-400 h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Why do you want to join our mission? *
                  </label>
                  <Textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="Tell us about your motivation to join our stroke prevention community..."
                    rows={4}
                    className="rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-red-500 dark:focus:border-red-400 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Complete Membership Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Need Help with Your Application?
            </h2>
            <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto">
              Our support team is here to help you through the membership process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
              </Link>
              
              <Link href="tel:+233240428125">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 rounded-2xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}