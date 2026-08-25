import { fetchSingleBlog } from "@/lib/actions/blog.actions";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogDetailProps {
  params: {
    blogId: string;
  };
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { blogId } = await params;
  const blog = await fetchSingleBlog(blogId);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blogs">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="mb-4">
              <Badge variant="outline" className="mb-4">
                {blog.tags}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {blog.shortDescription}
            </p>
            
            <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b">
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{blog.postedBy?.name || "Admin"}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>5 min read</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          {blog.image && (
            <div className="mb-8 rounded-2xl overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20">
              {blog.blocks ? (
                <div dangerouslySetInnerHTML={{ __html: blog.blocks }} />
              ) : (
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    {blog.shortDescription}
                  </p>
                  <div className="bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-900/20 dark:to-purple-900/20 rounded-lg p-6 my-8">
                    <div className="flex items-center mb-4">
                      <BookOpen className="h-6 w-6 text-red-600 mr-3" />
                      <h3 className="text-lg font-semibold">Key Takeaways</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      This article provides valuable insights into stroke awareness and prevention. 
                      Stay informed about the latest developments in stroke care and recovery.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our newsletter for more stroke awareness articles and updates.
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
        </article>
      </div>
    </div>
  );
}