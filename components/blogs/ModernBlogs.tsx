"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, User, Clock, Search, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchBlog } from "@/lib/actions/blog.actions";
import Image from "next/image";

interface Blog {
  _id: string;
  title: string;
  shortDescription: string;
  image: string;
  tags: string;
  createdAt: string;
  approved: boolean;
}

export default function ModernBlogs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const result = await fetchBlog(1, 20);
        const approvedBlogs = result?.serializeBlogs?.filter((blog: Blog) => blog.approved) || [];
        setBlogs(approvedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  const staticBlogs = [
    {
      id: 1,
      title: "Understanding the F.A.S.T. Method: Your First Line of Defense",
      excerpt: "Learn how the F.A.S.T. method can help you quickly identify stroke symptoms and potentially save a life.",
      author: "Dr. Sarah Johnson",
      date: "2024-02-10",
      readTime: "5 min read",
      category: "education",
      image: "/blogs/blog1.jpg"
    },
    {
      id: 2,
      title: "10 Lifestyle Changes to Prevent Stroke",
      excerpt: "Discover evidence-based lifestyle modifications that can significantly reduce your stroke risk.",
      author: "Dr. Michael Chen",
      date: "2024-02-08",
      readTime: "7 min read",
      category: "prevention",
      image: "/blogs/blog2.jpg"
    },
    {
      id: 3,
      title: "Recovery After Stroke: A Comprehensive Guide",
      excerpt: "Navigate the journey of stroke recovery with expert insights on rehabilitation and support.",
      author: "Emily Rodriguez",
      date: "2024-02-05",
      readTime: "10 min read",
      category: "recovery",
      image: "/blogs/blog3.jpg"
    },
    {
      id: 4,
      title: "Recognizing Silent Strokes: The Hidden Danger",
      excerpt: "Learn about silent strokes, their symptoms, and why early detection is crucial for prevention.",
      author: "Dr. James Wilson",
      date: "2024-02-03",
      readTime: "6 min read",
      category: "education",
      image: "/blogs/blog4.jpg"
    },
    {
      id: 5,
      title: "Technology in Stroke Care: Latest Innovations",
      excerpt: "Explore cutting-edge technologies revolutionizing stroke diagnosis, treatment, and recovery.",
      author: "Lisa Thompson",
      date: "2024-02-01",
      readTime: "8 min read",
      category: "technology",
      image: "/blogs/blog5.jpg"
    },
    {
      id: 6,
      title: "Supporting Stroke Survivors: A Family Guide",
      excerpt: "Essential tips for families on how to provide emotional and practical support during recovery.",
      author: "Dr. Amanda Davis",
      date: "2024-01-28",
      readTime: "9 min read",
      category: "support",
      image: "/blogs/blog6.jpg"
    }
  ];

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "education", label: "Education" },
    { id: "prevention", label: "Prevention" },
    { id: "recovery", label: "Recovery" },
    { id: "technology", label: "Technology" },
    { id: "support", label: "Support" }
  ];

  const allBlogs = [...blogs, ...staticBlogs];
  
  const filteredBlogs = allBlogs.filter(blog => {
    const blogCategory = blog.tags?.toLowerCase() || blog.category?.toLowerCase() || "";
    const matchesCategory = activeCategory === "all" || blogCategory.includes(activeCategory);
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (blog.shortDescription || blog.excerpt || "").toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = filteredBlogs[0] || staticBlogs[0];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-12 h-12 mx-auto mb-4 text-red-600 animate-pulse" />
          <p className="text-lg text-gray-600 dark:text-gray-300">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-100 to-purple-100 dark:from-red-900/30 dark:to-purple-900/30 rounded-full text-red-600 dark:text-red-400 text-sm font-medium mb-6">
            <BookOpen className="w-5 h-5 mr-2" />
            Stroke Awareness Blog
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Knowledge Hub
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest insights, research, and stories from stroke care experts and survivors.
          </p>
        </div>

        {/* Featured Blog */}
        <div className="mb-12">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 group hover:shadow-3xl transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                {featuredBlog?.image ? (
                  <Image
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-red-100 to-purple-100 dark:from-red-900/30 dark:to-purple-900/30 flex items-center justify-center">
                    <BookOpen className="w-20 h-20 text-red-600/50" />
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="text-sm text-red-600 dark:text-red-400 font-semibold mb-3 uppercase tracking-wide">
                  {featuredBlog?.tags || categories.find(cat => cat.id === featuredBlog?.category)?.label || "General"}
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-red-600 transition-colors">
                  {featuredBlog?.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                  {featuredBlog?.shortDescription || featuredBlog?.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredBlog?.author || "Admin"}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredBlog?.createdAt || featuredBlog?.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredBlog?.readTime || "5 min read"}
                    </div>
                  </div>
                  
                  <Link href={`/blogs/${featuredBlog?._id || featuredBlog?.id}`}>
                    <Button className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Categories */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-red-500 dark:focus:border-red-400 bg-white dark:bg-gray-800 transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.slice(1).map((blog) => (
            <article
              key={blog.id}
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                {blog.image ? (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-red-100 to-purple-100 dark:from-red-900/30 dark:to-purple-900/30 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-red-600/50" />
                  </div>
                )}
                
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                  {blog.tags || categories.find(cat => cat.id === blog.category)?.label || "General"}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {blog.shortDescription || blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {blog.author || "Admin"}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(blog.createdAt || blog.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {blog.readTime || "5 min read"}
                  </div>
                </div>

                <Link href={`/blogs/${blog._id || blog.id}`}>
                  <Button variant="outline" className="w-full border-red-200 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 group">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-6 opacity-90">
              Subscribe to our newsletter for the latest stroke awareness articles and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}