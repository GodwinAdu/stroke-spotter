"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Heart, 
  MessageCircle, 
  CheckCircle,
  AlertTriangle,
  Users,
  Headphones
} from "lucide-react";
import { createContact } from "@/lib/actions/contact.actions";

export default function ModernContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    urgency: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const contactMethods = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      subtitle: "24/7 Stroke Emergency",
      contact: "911",
      description: "For immediate stroke emergencies",
      color: "bg-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      urgent: true
    },
    {
      icon: Headphones,
      title: "Support Line",
      subtitle: "General Inquiries",
      contact: "+233-240-428-125",
      description: "Mon-Fri, 8AM-6PM GMT",
      color: "bg-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "Written Inquiries",
      contact: "info@spotstrokefastgh.com",
      description: "Response within 24 hours",
      color: "bg-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: MapPin,
      title: "Office Location",
      subtitle: "Visit Us",
      contact: "Kath, Bantama Kumasi",
      description: "Ghana, West Africa",
      color: "bg-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  const urgencyOptions = [
    { value: "emergency", label: "🚨 Emergency - Stroke Symptoms", color: "text-red-600" },
    { value: "urgent", label: "⚡ Urgent - Medical Question", color: "text-orange-600" },
    { value: "general", label: "💬 General Inquiry", color: "text-blue-600" },
    { value: "feedback", label: "💡 Feedback/Suggestion", color: "text-green-600" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await createContact({ 
        post: {
          name: formData.name,
          email: formData.email,
          message: `Subject: ${formData.subject}\nPhone: ${formData.phone}\nUrgency: ${formData.urgency}\n\nMessage:\n${formData.message}`
        }
      });
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        urgency: "general"
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => setSubmitStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-100 to-purple-100 dark:from-red-900/30 dark:to-purple-900/30 rounded-full text-red-600 dark:text-red-400 text-sm font-semibold mb-6">
            💬 Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about stroke prevention or need emergency guidance? 
            We're here to help save lives through education and support.
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-3xl p-8 mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 mr-3 animate-pulse" />
            <h2 className="text-2xl font-bold">Stroke Emergency?</h2>
          </div>
          <p className="text-lg mb-6">
            If someone is showing stroke symptoms (F.A.S.T.), don't use this form. Call 911 immediately!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call 911 Now
          </Button>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className={`${method.bgColor} rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  method.urgent ? 'ring-2 ring-red-500 animate-pulse' : ''
                }`}
              >
                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {method.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {method.subtitle}
                </p>
                
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  {method.contact}
                </p>
                
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mr-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Urgency Level */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Message Priority
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {urgencyOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.urgency === option.value
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className={`text-sm font-medium ${option.color}`}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
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

                {/* Phone & Subject */}
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
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief subject line"
                      className="rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-red-500 dark:focus:border-red-400 h-12"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your question or concern in detail..."
                    rows={6}
                    className="rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-red-500 dark:focus:border-red-400 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      Message sent successfully! We'll respond within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-3" />
                    <p className="text-red-700 dark:text-red-300 font-medium">
                      Failed to send message. Please try again or call us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Office Hours
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Closed</span>
                </div>
                <div className="flex justify-between border-t pt-3 mt-3">
                  <span className="text-red-600 font-semibold">Emergency Line</span>
                  <span className="font-bold text-red-600">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Our Impact
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600 mb-1">500K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Lives Educated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Emergency Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Response Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}