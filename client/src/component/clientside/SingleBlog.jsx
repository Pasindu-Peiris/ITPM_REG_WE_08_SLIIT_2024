import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Nav from "../clientside/Nav";
import Hfotter from "./Hfotter";

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
    return <div style={{ padding: "20px", fontSize: "1.5rem" }}>Loading...</div>;
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
    <Nav/>
    <div className="container" style={{ maxWidth: "1000px",marginTop: "12%" }}>
      <h1 className="text-left mb-4" style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}>{blog.Title}</h1>
      <p style={{ fontSize: "1.25rem", color: "#666" }}>
        <strong>Publish Date:</strong> {formatDate(blog.PublishDate)}
      </p>
      <img src={blog.FeaturedImage} alt="Featured Image" style={{ width: "60%", height: "auto", marginBottom: "20px", borderRadius: "10px" }} />
      <div className="content" style={{ padding: "20px", background: "#f9f9f9", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0,0,0,.1)" }}>
        <h2 className="mb-3" style={{ fontSize: "2.2rem", color: "#444" }}>Author: {blog.Author}</h2>
        <div style={{ border: "1px solid #eee", padding: "20px", borderRadius: "5px", background: "#fff" }}>
          <p style={{ fontSize: "1.4rem", fontStyle: "italic", color: "#555", marginBottom: "20px" }}>{blog.Content}</p>
        </div>
        <div style={{ marginTop: "20px" }}>
          <p style={{ fontSize: "1.25rem", color: "#666" }}>
            <strong>Excerpt:</strong> {blog.Excerpt}
          </p>
        </div>
      </div>
    </div>
    <Hfotter />
    </>
  );
};

export default SingleBlog;
