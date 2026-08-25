import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";
import { Heart, Brain, Shield } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-300/20 rounded-full animate-float"
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full mb-4 shadow-lg">
            <Heart className="w-8 h-8 text-white animate-heartbeat" />
          </div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Stroke Spotter
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Every second counts in stroke care</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to access your stroke awareness dashboard
            </p>
          </div>

          <LoginForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link href="/register" className="font-semibold text-red-600 hover:text-red-700 transition-colors">
                Join our mission
              </Link>
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4">
            <Brain className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-xs text-gray-600 dark:text-gray-400">Expert Care</div>
          </div>
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4">
            <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-xs text-gray-600 dark:text-gray-400">Secure Platform</div>
          </div>
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4">
            <Heart className="w-6 h-6 text-red-600 mx-auto mb-2" />
            <div className="text-xs text-gray-600 dark:text-gray-400">Save Lives</div>
          </div>
        </div>
      </div>
    </div>
  );
}