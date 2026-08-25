import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";
import { Heart, Users, Target, Clock } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
            Join Our Mission
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Help us save lives through stroke awareness</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Create Account
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Join thousands making a difference in stroke care
            </p>
          </div>

          <RegisterForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Mission Stats */}
        <div className="mt-8 grid grid-cols-3 gap-3 text-center">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-3">
            <Target className="w-5 h-5 text-red-600 mx-auto mb-1" />
            <div className="text-xs font-semibold text-gray-900 dark:text-white">500K+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Lives Saved</div>
          </div>
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-3">
            <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
            <div className="text-xs font-semibold text-gray-900 dark:text-white">4 Min</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Response Time</div>
          </div>
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-3">
            <Heart className="w-5 h-5 text-purple-600 mx-auto mb-1" />
            <div className="text-xs font-semibold text-gray-900 dark:text-white">24/7</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}