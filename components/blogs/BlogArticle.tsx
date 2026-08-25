"use client";

import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogArticleProps {
  id: string;
}

export default function BlogArticle({ id }: BlogArticleProps) {
  const article = {
    id: 1,
    title: "Understanding the F.A.S.T. Method: Your First Line of Defense",
    author: "Dr. Sarah Johnson",
    date: "2024-02-10",
    readTime: "5 min read",
    category: "education",
    content: `
      <p>When it comes to stroke recognition, every second counts. The F.A.S.T. method has become the gold standard for quickly identifying stroke symptoms and taking immediate action. This simple acronym could be the difference between life and death, or between a full recovery and permanent disability.</p>

      <h2>What is the F.A.S.T. Method?</h2>
      <p>F.A.S.T. stands for Face, Arms, Speech, and Time. It's a quick and easy way to remember the most common signs of stroke and what to do when you spot them.</p>

      <h3>F - Face Drooping</h3>
      <p>Ask the person to smile. Does one side of the face droop or is it numb? Is the person's smile uneven or lopsided? If yes, this could be a sign of stroke.</p>

      <h3>A - Arm Weakness</h3>
      <p>Ask the person to raise both arms. Does one arm drift downward? Is there weakness or numbness in one arm? Ask the person to raise both arms and see if one arm drifts down.</p>

      <h3>S - Speech Difficulty</h3>
      <p>Ask the person to repeat a simple phrase. Is their speech slurred or strange? Do they have trouble understanding or speaking? Even mild speech difficulties can indicate a stroke.</p>

      <h3>T - Time to Call Emergency Services</h3>
      <p>If you observe any of these signs, it's time to call 911 immediately. Note the time when symptoms first appeared - this information is crucial for medical professionals.</p>

      <h2>Why Speed Matters</h2>
      <p>Brain cells begin to die within minutes of a stroke. The faster treatment begins, the better the chances of recovery. There's a saying in emergency medicine: "Time is brain." Every minute that passes without treatment means more brain tissue is lost.</p>

      <h2>Additional Warning Signs</h2>
      <p>While F.A.S.T. covers the most common symptoms, other warning signs include:</p>
      <ul>
        <li>Sudden numbness or weakness in the leg</li>
        <li>Sudden confusion or trouble understanding</li>
        <li>Sudden trouble seeing in one or both eyes</li>
        <li>Sudden severe headache with no known cause</li>
        <li>Sudden trouble walking, dizziness, or loss of coordination</li>
      </ul>

      <h2>Taking Action</h2>
      <p>If you suspect someone is having a stroke:</p>
      <ol>
        <li>Call 911 immediately - don't drive to the hospital yourself</li>
        <li>Note the time symptoms began</li>
        <li>Stay with the person and keep them calm</li>
        <li>Don't give them food, water, or medication</li>
        <li>Be prepared to perform CPR if necessary</li>
      </ol>

      <h2>Prevention is Key</h2>
      <p>While knowing F.A.S.T. is crucial, prevention remains the best strategy. Regular exercise, a healthy diet, not smoking, and managing conditions like high blood pressure and diabetes can significantly reduce stroke risk.</p>

      <p>Remember, the F.A.S.T. method is a tool that everyone should know. Share this knowledge with your family, friends, and community. You never know when you might need to use it to save a life.</p>
    `
  };

  const relatedArticles = [
    { id: 2, title: "10 Lifestyle Changes to Prevent Stroke", category: "prevention" },
    { id: 3, title: "Recovery After Stroke: A Comprehensive Guide", category: "recovery" },
    { id: 4, title: "Recognizing Silent Strokes: The Hidden Danger", category: "education" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
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

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link href="/blogs" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400 text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                Education
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex items-center justify-center space-x-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(article.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {article.readTime}
                </div>
              </div>
            </div>

            {/* Share Button */}
            <div className="flex justify-center mb-8">
              <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-8">
            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-red-600 prose-a:text-red-600 hover:prose-a:text-red-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Emergency CTA */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white text-center mb-8">
            <Heart className="w-12 h-12 mx-auto mb-4 animate-heartbeat" />
            <h3 className="text-2xl font-bold mb-4">Remember: Every Second Counts</h3>
            <p className="text-lg mb-6 opacity-90">
              If you suspect someone is having a stroke, don't hesitate. Call 911 immediately.
            </p>
            <div className="text-3xl font-black">
              🚨 CALL 911 🚨
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/blogs/${related.id}`}
                  className="group p-4 border border-gray-200 dark:border-gray-600 rounded-2xl hover:border-red-300 dark:hover:border-red-600 transition-colors"
                >
                  <div className="text-sm text-red-600 dark:text-red-400 font-medium mb-2 capitalize">
                    {related.category}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors">
                    {related.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}