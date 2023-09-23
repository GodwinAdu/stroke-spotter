"use client"



import SingleBlog from "@/components/blog/SingleBlog";
import blogData from "@/components/blog/blogData";
import Breadcrumb from "@/components/common/Breadcrumbs";
import React, { useEffect, useState } from "react";


const POSTS_PER_PAGE = 4;

const BlogPage = () => {


  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogData.slice(startIndex, endIndex);

  useEffect(() => {
    // Reset to the first page if the data changes (for example, if you load new posts)
    setCurrentPage(1);
  }, [blogData]);

  // const date = new Date();
  // const parts = date.toString().split(" ");
  // const formattedDate = `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]} ${parts[4]}`;


  return (
    <>
      <Breadcrumb
        pageName="Our Blogs"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
      
      <div className=" min-h-screen">
        <div className="py-12 px-4">
          <div className="max-w-xl mx-auto mb-10">
            <input
              className="w-full px-4 py-2 rounded-lg shadow-sm border-2 border-indigo/50 focus:border-primary"
              placeholder="Search blog posts here ..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Sample Blog Post */}
             <SingleBlog />
            {/* You can add more blog posts using the above structure */}
          </div>
        </div>
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
      </div>
    </>
  );
};

export default BlogPage;
