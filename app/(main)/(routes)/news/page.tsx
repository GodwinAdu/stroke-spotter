"use client"

import blogData from "@/components/blog/blogData";
import Breadcrumb from "@/components/common/Breadcrumbs";
import { useEffect, useState } from "react";



const POSTS_PER_PAGE = 6;
const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogData.slice(startIndex, endIndex);

  useEffect(() => {
    // Reset to the first page if the data changes (for example, if you load new posts)
    setCurrentPage(1);
  }, [blogData]);

  return (
    <>
      <Breadcrumb
        pageName="News"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
      <header className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600">
        <h1 className="text-4xl font-semibold text-white">Today's News</h1>
      </header>
      
      <main className="p-6 space-y-6 bg-gray-100">
        {/* Sample News Item */}
        <article className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-101">
          <img className="w-full h-64 object-cover" src="https://via.placeholder.com/400x200" alt="News Thumbnail"/>
          <div className="p-6 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">News Title Here</h2>
            <p className="text-gray-600 mb-4">A captivating description of the news item. This can give the reader a taste of the story.</p>
            <button className="text-blue-600 hover:underline">Read more</button>
          </div>
        </article>
        {/* You can duplicate the above article for more news items */}
        <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                {/* Rendering dynamic pagination links based on totalPages and currentPage */}
                <li className="mx-1">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </button>
                </li>
                {[...Array(totalPages).keys()].map(page => (
                  <li key={page + 1} className="mx-1">
                    <button
                      onClick={() => setCurrentPage(page + 1)}
                      className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm ${currentPage === page + 1 ? 'bg-primary text-white' : 'bg-body-color text-blue-500 hover:bg-primary hover:text-white'}`}
                    >
                      {page + 1}
                    </button>
                  </li>
                ))}
                <li className="mx-1">
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
      </main>
    </>
  );
};

export default page;
