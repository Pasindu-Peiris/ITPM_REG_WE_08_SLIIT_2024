import React, { useState, useEffect } from "react";
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
    PublishDate: new Date().toISOString().split('T')[0],
  });

  const [errors, setErrors] = useState({
    Title: "",
    Author: "",
    Category: "",
    FeaturedImage: "",
    Content: "",
    Excerpt: "",
  });

  const isValidURL = (url) => {
    const urlPattern = /^(https?:\/\/)(www\.)?[^ ]+\.(com|org|net)(\/.*)?$/;
    return urlPattern.test(url);
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.filter((word) => word !== "").length;
  };

  const checkTitleExists = async (title) => {
    try {
      const response = await axios.get(`http://localhost:8090/blogs/check-title/${title}`);
      return response.data.exists;
    } catch (error) {
      console.error("Error checking title:", error);
      return false;
    }
  };

  const handleInputChange = async (e) => {
    const { name, value, type, files } = e.target;
    let newErrors = { ...errors };

    if (type === "file") {
      const selectedImage = files[0];
      const imageUrl = URL.createObjectURL(selectedImage);
      setBlogData((prev) => ({
        ...prev,
        FeaturedImage: imageUrl,
      }));
    } else {
      setBlogData((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (name === "Title") {
        if (value.trim() === "") {
          newErrors.Title = "Title is required";
        } else {
          const titleExists = await checkTitleExists(value);
          newErrors.Title = titleExists ? "Title already added" : "";
        }
      } else {
        if (value.trim() === "") {
          newErrors[name] = `${name} is required`;
        } else {
          newErrors[name] = "";
        }
      }

      if (name === "FeaturedImage" && !isValidURL(value)) {
        newErrors.FeaturedImage = "Invalid URL. 'http://www.example.com'";
      }

      if (name === "Content" && countWords(value) < 50) {
        newErrors.Content = "Content must be at least 50 words long";
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = async () => {
    if (Object.values(errors).some((error) => error !== "")) {
      toast.error("Please correct the errors before submitting.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8090/blogs', blogData);
      toast.success("Blog successfully added!");
      resetFormFields();
      setTimeout(() => window.location.href = "/AllBlog", 2000);
    } catch (error) {
      console.error("Error creating blog:", error);
      toast.error("Failed to add blog.");
    }
  };

  const resetFormFields = () => {
    setBlogData({
      Title: "",
      Author: "",
      Category: "",
      FeaturedImage: "",
      Content: "",
      Excerpt: "",
      PublishDate: new Date().toISOString().split('T')[0],
    });

    setErrors({
      Title: "",
      Author: "",
      Category: "",
      FeaturedImage: "",
      Content: "",
      Excerpt: "",
    });
  };

  return (
    <div style={{ backgroundImage: `url(${ImgBac})`, paddingTop: '100px', paddingLeft:"100px", paddingRight:"100px", paddingBottom:"100px" }}>
      <div className="card" style={{ padding: '10px', position: 'relative' }}>
        <div style={{ marginBottom: '10px', textAlign: 'center' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '5px' }}>Add Blog Details</h2>
        </div>
        
        {/* Title Field */}
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Title:</label>
          <input
            type="text"
            className="form-control"
            id="Title"
            name="Title"
            value={blogData.Title}
            onChange={handleInputChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
          <div style={{ color: 'red', fontSize: '12px', marginTop: '3px' }}>{errors.Title}</div>
        </div>
        
        {/* Author Field */}
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Author:</label>
          <input
            type="text"
            className="form-control"
            id="Author"
            name="Author"
            value={blogData.Author}
            onChange={handleInputChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
          <div style={{ color: 'red', fontSize: '12px', marginTop: '3px' }}>{errors.Author}</div>
        </div>
        
        {/* Category Field */}
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Category:</label>
          <input
            type="text"
            className="form-control"
            id="Category"
            name="Category"
            value={blogData.Category}
            onChange={handleInputChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
          <div style={{ color: 'red', fontSize: '12px', marginTop: '3px' }}>{errors.Category}</div>
        </div>
        
        {/* Featured Image Field */}
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Featured Image URL:</label>
          <input
            type="text"
            className="form-control"
            id="FeaturedImage"
            name="FeaturedImage"
            value={blogData.FeaturedImage}
            onChange={handleInputChange}
            style={{ fontSize: '14px', padding: '5px' }}
          />
          <div style={{ color: 'red', fontSize: '12px', marginTop: '3px' }}>{errors.FeaturedImage}</div>
        </div>
        
        {/* Content Field */}
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Content:</label>
          <textarea
            className="form-control"
            id="Content"
            rows="6"
            name="Content"
            value={blogData.Content}
            onChange={handleInputChange}
            style={{ fontSize: '14px', padding: '5px' }}
          ></textarea>
          <div style={{ fontSize: '12px', marginTop: '3px' }}>
            {`${countWords(blogData.Content)} words`}
            {errors.Content ? <span style={{ color: 'red' }}>{errors.Content}</span> : ''}
          </div>
        </div>
        
        {/* Excerpt Field */}
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Excerpt:</label>
          <textarea
            className="form-control"
            id="Excerpt"
            rows="3"
            name="Excerpt"
            value={blogData.Excerpt}
            onChange={handleInputChange}
            style={{ fontSize: '14px', padding: '5px' }}
          ></textarea>
          <div style={{ color: 'red', fontSize: '12px', marginTop: '3px' }}>{errors.Excerpt}</div>
        </div>
        
        {/* Publish Date Field */}
        <div style={{ marginBottom: '5px' }}>
          <label style={{ display: 'block', marginBottom: '3px', fontSize: '14px' }}>Publish Date:</label>
          <input
            type="date"
            className="form-control"
            id="PublishDate"
            name="PublishDate"
            value={blogData.PublishDate}
            style={{ fontSize: '14px', padding: '5px' }}
            disabled
          />
        </div>
        
        {/* Submit Button */}
        <button 
          type="button" 
          className="btn" 
          style={{ 
            backgroundColor: '#fcb900', 
            color: 'black', 
            marginBottom: '10px',
            fontSize: '14px',
            padding: '5px 10px',
            borderRadius: '5px' }}
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
