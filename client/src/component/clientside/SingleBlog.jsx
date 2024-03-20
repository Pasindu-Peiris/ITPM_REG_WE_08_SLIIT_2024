import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams(); // Extract id from URL parameters
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]); // Dependency on id to re-fetch when it changes

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-left mb-4" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{blog.Title}</h1>
      <p><strong>Publish Date:</strong> {blog.PublishDate}</p>
      <img src={blog.FeaturedImage} alt="Featured Image" style={{ width: "50%", marginBottom: "20px" }} />
      <div className="row">
        <div className="col-lg-12">
          <div style={{ padding: "20px", borderRadius: "5px" }}>
            <h2 className="mb-3">Author: {blog.Author}</h2>
            <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }}>
              <p style={{ fontSize: "1.2rem", fontStyle: "italic", marginBottom: "20px" }}>{blog.Content}</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p><strong>Excerpt:</strong> {blog.Excerpt}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
