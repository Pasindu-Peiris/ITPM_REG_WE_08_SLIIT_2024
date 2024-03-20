// Import necessary libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link
import Nav from "../clientside/Nav";
import Hfotter from "./Hfotter";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Function to fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:8090/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Nav />
      <div style={{ padding: "140px" }}>
        <div style={{ marginTop: "5px", fontWeight: "bold", fontSize: "24px" }}>Blogs</div>
        <div className="container mt-0 mb-4">
          <div className="row">
            {blogs.map((blog) => (
              <div key={blog._id} className="col-md-4 mb-4">
                <div className="row">
                  <div className="col">
                    {/* Wrap the image inside Link */}
                    <Link to={`/SingleBlog/${blog._id}`}>
                      <img
                        src={blog.FeaturedImage}
                        alt="Blog Image"
                        className="img-fluid"
                        style={{
                          width: "390px",
                          height: "250px",
                          borderRadius: "10px",
                        }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p style={{ marginTop: "5px", fontWeight: "bold", fontSize: "24px" }}>{blog.Title}</p>
                    <p style={{ marginTop: "10px" }}>Author: {blog.Author}</p>
                    {/* <p style={{ marginTop: "10px", fontSize: "16px" }}>{blog.Excerpt}</p> */}
                    <p style={{ marginTop: "10px" }}>{blog.PublishDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Hfotter />
    </>
  );
};

export default Blogs;
