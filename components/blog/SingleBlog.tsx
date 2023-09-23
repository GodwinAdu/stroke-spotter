

const SingleBlog = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
          src="path_to_image.jpg"
          alt="blog-post"
          className="w-full object-cover rounded-md mb-6 h-56"
        />
        <h3 className="text-2xl font-semibold mb-4">Blog Post Title</h3>
        <p className="text-gray-600 mb-4">
          Short description or intro of the blog post. This gives the reader an
          idea of the content and topic of the blog post.
        </p>
        <button className="text-indigo-500 hover:underline">Read More</button>
      </div>
    </div>
  );
};

export default SingleBlog;
