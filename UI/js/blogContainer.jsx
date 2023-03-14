import React from "react";
import { connect } from "react-redux";

const BlogContainer = (props) => {
  const { blogs } = props;
  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <div key={blog._id} className="blog-box">
          <div className="blog-img">
            <img src={blog.image} />
          </div>

          <div className="blog-text">
            <span>{blog.createdAt}</span>
            <a href="" className="blog-title">
              {blog.title}
            </a>
            <p>{blog.content}</p>
            <a href="blog-summary.html">
              <i className="fa-solid fa-comments"></i>
            </a>
            <a href={`blog-summary.html?id=${blog._id}`}>Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  blogs: state.blogs,
});

export default connect(mapStateToProps)(BlogContainer);
