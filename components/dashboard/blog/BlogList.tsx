

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h1>Blog List</h1>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>Title: {blog.title}</h2>
          <p>Created Date: {new Date(blog.createdDate).toLocaleString()}</p>
          <div dangerouslySetInnerHTML={{ __html: blog.blocks }} />
        </div>
      ))}
    </div>
  );
};


export default BlogList;










