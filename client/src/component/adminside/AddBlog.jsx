import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImgBac from "../../Images/hp-blog-bg.jpg";

const AddBlogs = () => {
  const [blogData, setBlogData] = useState({
    Title: "",
    Author: "",
    Category: "",
    FeaturedImage: "",
    Content: "",
    Excerpt: "",
    PublishDate: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitting blog data:", blogData);
      const response = await axios.post('http://localhost:8090/blogs', blogData);
      console.log("Blog created:", response.data);
      setBlogData({
        Title: "",
        Author: "",
        Category: "",
        FeaturedImage: "",
        Content: "",
        Excerpt: "",
        PublishDate: new Date().toISOString().split('T')[0]
      });
      toast.success("Blog successfully added!");
      setTimeout(() => {
        window.location.href = "/AllBlog";
      }, 2000);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${ImgBac})`, paddingTop: '20px', paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px" }}>
      <div className="card" style={{ padding: '10px', position: 'relative' }}>
        <div style={{ marginBottom: '10px', textAlign: 'center' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '5px' }}>Add Blog Details</h2>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Title:</label>
          <input
            type="text"
            className="form-control"
            id="Title"
            name="Title"
            value={blogData.Title}
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Author:</label>
          <input
            type="text"
            className="form-control"
            id="Author"
            name="Author"
            value={blogData.Author}
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Category:</label>
          <input
            type="text"
            className="form-control"
            id="Category"
            name="Category"
            value={blogData.Category}
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Featured Image URL:</label>
          <input
            type="text"
            className="form-control"
            id="FeaturedImage"
            name="FeaturedImage"
            value={blogData.FeaturedImage}
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Content:</label>
          <textarea
            className="form-control"
            id="Content"
            rows="6"
            name="Content"
            value={blogData.Content}
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
          ></textarea>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Excerpt:</label>
          <textarea
            className="form-control"
            id="Excerpt"
            rows="3"
            name="Excerpt"
            value={blogData.Excerpt}
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
          ></textarea>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Publish Date:</label>
          <input
            type="date"
            className="form-control"
            id="PublishDate"
            name="PublishDate"
            value={blogData.PublishDate}
            onChange={handleChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
        </div>
        <button 
          type="button" 
          className="btn" 
          style={{ 
            backgroundColor: '#fcb900', 
            color: 'black', 
            marginBottom: '10px',
            fontSize: '14px',
            padding: '5px 10px',
            borderRadius: '5px'
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddBlogs;
