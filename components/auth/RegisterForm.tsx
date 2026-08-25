"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, AtSign, Mail, Lock, ArrowRight, AlertCircle, CheckCircle } from "lucide-react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/dashboard/home");
        router.refresh();
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isPasswordValid = formData.password.length >= 6;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Full Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="pl-10 h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="username" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Username
          </Label>
          <div className="relative">
            <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className="pl-10 h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              placeholder="Choose a username"
              required
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="pl-10 pr-10 h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              placeholder="Create a password"
              required
            />
            {formData.password && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {isPasswordValid ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
            )}
          </div>
          {formData.password && !isPasswordValid && (
            <p className="text-xs text-red-500 mt-1">Password must be at least 6 characters</p>
          )}
        </div>
      </div>

      {error && (
        <div className="flex items-center space-x-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
        </div>
      )}
      
      <Button 
        type="submit" 
        disabled={loading || !isPasswordValid} 
        className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="flex items-center justify-center">
          {loading ? "Creating Account..." : "Join Our Mission"}
          {!loading && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
        </span>
      </Button>
    </form>
  );
}