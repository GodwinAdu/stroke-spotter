"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ModeToggler } from "@/components/themes/ModeToggler";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Heart, User, LogIn, UserPlus, ChevronDown } from "lucide-react";
import DropdownUser from "../dashboard/Header/DropdownUser";

interface NavbarProps {
  user?: {
    _id: string;
    admin: boolean;
    bio: string;
    country: string;
    duesPay: boolean;
    image: string;
    memberId: string;
    memberType: string;
    name: string;
    onboarded: boolean;
    profession: string;
    researchWriter: boolean;
    speechWriter: boolean;
    trainee: boolean;
    username: string;
    writer: boolean;
    email: string;
  };
}

const ModernNavbar = ({ user }: NavbarProps) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const menuItems = [
    { title: "Home", path: "/" },
    { 
      title: "Learn", 
      submenu: [
        { title: "Stroke Basics", path: "/learn/stroke-basics" },
        { title: "F.A.S.T. Method", path: "/learn/fast-method" },
        { title: "Prevention Tips", path: "/learn/prevention" },
        { title: "Recovery Guide", path: "/learn/recovery" },
        { title: "Emergency Response", path: "/learn/emergency" }
      ]
    },
    { 
      title: "Resources", 
      submenu: [
        { title: "Research", path: "/research" },
        { title: "Training", path: "/training-service" },
        { title: "Webinars", path: "/webinars" },
        { title: "Blog", path: "/blogs" }
      ]
    },
    { title: "Team", path: "/team" },
    { title: "About", path: "/overview" },
    { title: "Contact", path: "/contact-us" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, (window.scrollY / totalHeight) * 100));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className={`fixed top-1 left-0 w-full z-50 transition-all duration-300 ${
        sticky 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-red-100 dark:border-red-900/20" 
          : "bg-transparent"
      }`}>
      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 animate-pulse" />
          <span>🚨 STROKE EMERGENCY? Call 911 immediately!</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Spot Stroke Fast"
                width={50}
                height={50}
                className="rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-black bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                StrokeSpotter
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Save Lives Fast</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer py-2 px-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="font-medium text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors">
                      {item.title}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-red-600 transition-colors" />
                    
                    {/* Dropdown */}
                    <div className={`absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 ${
                      activeDropdown === item.title ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="p-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.path}
                            className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 rounded-xl transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="font-medium text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 py-2 px-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* F.A.S.T. Quick Access */}
            <Link href="#fast-method" className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
              <Heart className="w-4 h-4" />
              <span className="font-semibold text-sm">F.A.S.T.</span>
            </Link>

            {/* User Actions */}
            {user ? (
              <DropdownUser id={user._id} admin={user.admin} username={user.username} image={user.image} />
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="text-gray-700 dark:text-gray-300 hover:text-red-600">
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Join Us
                  </Button>
                </Link>
              </div>
            )}

            <ModeToggler />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {navbarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          navbarOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                      className="flex items-center justify-between w-full px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
                    >
                      {item.title}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`ml-4 space-y-1 transition-all duration-300 ${
                      activeDropdown === item.title ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.path}
                          onClick={() => setNavbarOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    onClick={() => setNavbarOpen(false)}
                    className="block px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile User Actions */}
            {!user && (
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                <Link href="/login" onClick={() => setNavbarOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setNavbarOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Join Us
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>

      {/* Floating Emergency Button */}
      <Link
        href="tel:911"
        className="fixed bottom-20 right-6 z-50 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Call 911 Emergency"
      >
        <Phone className="w-6 h-6" />
      </Link>
    </>
  );
};

export default ModernNavbar;