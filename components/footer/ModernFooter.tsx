"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  Brain, 
  Clock,
  ArrowRight,
  Send
} from "lucide-react";

export default function ModernFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerSections = [
    {
      title: "Learn F.A.S.T.",
      icon: Brain,
      links: [
        { title: "Face Drooping", path: "#fast-method" },
        { title: "Arm Weakness", path: "#fast-method" },
        { title: "Speech Difficulty", path: "#fast-method" },
        { title: "Time to Call 911", path: "#fast-method" }
      ]
    },
    {
      title: "Resources",
      icon: Heart,
      links: [
        { title: "Stroke Prevention", path: "/prevention" },
        { title: "Emergency Action", path: "/emergency" },
        { title: "Research & Studies", path: "/research" },
        { title: "Training Programs", path: "/training" }
      ]
    },
    {
      title: "Community",
      icon: Clock,
      links: [
        { title: "Join Our Mission", path: "/join-us" },
        { title: "Volunteer", path: "/volunteer" },
        { title: "Donate", path: "/donate" },
        { title: "Success Stories", path: "/testimonials" }
      ]
    },
    {
      title: "Support",
      links: [
        { title: "Contact Us", path: "/contact-us" },
        { title: "FAQ", path: "/faq" },
        { title: "Help Center", path: "/help" },
        { title: "Privacy Policy", path: "/privacy" }
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://web.facebook.com/Spotstrokefast?mibextid=ZbWKwL&_rdc=1&_rdr", 
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/spot_stroke/status/1586751572586930178?t=SUgLJpU7vmr5s8Dcal1lSQ&s=19", 
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/@spotstrokefast", 
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-50 dark:hover:bg-pink-900/20"
    },
    { 
      icon: Youtube, 
      href: "https://youtube.com/@spotstrokefast2023", 
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-900/20"
    },
    { 
      icon: Linkedin, 
      href: "#", 
      color: "hover:text-blue-700",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      {/* Emergency CTA Section */}
      <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🚨</div>
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Remember: Every Second Counts
            </h3>
            <p className="text-xl opacity-95 mb-8">
              If you notice any F.A.S.T. symptoms, don't wait. Call 911 immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:911">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 911 Now
                </Button>
              </Link>
              <Link href="#fast-method">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 rounded-2xl">
                  Learn F.A.S.T. Method
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Spot Stroke Fast"
                  width={60}
                  height={60}
                  className="rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h2 className="text-2xl font-black bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                  StrokeSpotter Hub
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Saving Lives Through Education</p>
              </div>
            </Link>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
              Empowering communities with life-saving stroke recognition skills. 
              Learn F.A.S.T., act quickly, and help save lives from stroke-related disabilities.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="font-semibold">Emergency: 911</p>
                  <p className="text-sm">24/7 Stroke Emergency</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">info@strokespotter.org</p>
                  <p className="text-sm">General Information</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 ${social.color} ${social.bgColor} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center space-x-2">
                {section.icon && (
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <section.icon className="w-4 h-4 text-white" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.path}
                      className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-900/10 dark:to-purple-900/10 rounded-3xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Informed, Save Lives
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get the latest stroke prevention tips, emergency updates, and life-saving information delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-red-500 dark:focus:border-red-400"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
            
            {isSubscribed && (
              <p className="mt-4 text-green-600 dark:text-green-400 font-semibold animate-fade-in">
                ✅ Thank you for subscribing! You're helping save lives.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Spot Stroke Fast Foundation. All rights reserved. 
              <span className="block md:inline md:ml-2">
                Saving lives through stroke education and awareness.
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center">
              Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> by{" "}
              <a
                href="https://jutechhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-red-600 hover:text-purple-600 transition-colors"
              >
                JuTech Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}